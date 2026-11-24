"""
Name: generate_metamodel_inheritance_svg.py
Purpose: Generate one interactive SVG containing the inheritance graph of every UML XMI classifier.
Interface: python scripts/generate_metamodel_inheritance_svg.py [--check]
Goal: Provide a compact force-directed metamodel network with short obstacle-aware routes and existing page links.
Sources: site/docs/UML-2.5.1.xmi and the generated classifier route catalog.
Requires: Python 3 standard library and scripts/xmi_model.py.
Usage:
  Run from the repository root after adding classifier pages or updating the normative XMI.
  python scripts/generate_metamodel_inheritance_svg.py         write the complete overview SVG
  python scripts/generate_metamodel_inheritance_svg.py --check verify the SVG without rewriting it
Output: site/assets/diagrams/metamodel-inheritance.svg
Layout:
  Spring forces pull related classifiers together while repulsion separates blocks.
  Direct edges are preferred; only obstructed edges are routed around other blocks.
"""

from argparse import ArgumentParser
from html import escape
from pathlib import Path
import heapq
import math

from handbook_data import ROOT, SITE, load_handbook, slug
from xmi_model import XmiModel


OUTPUT = SITE / "assets" / "diagrams" / "metamodel-inheritance.svg"


def number(value):
    return str(int(value)) if isinstance(value, float) and value.is_integer() else f"{value:.2f}".rstrip("0").rstrip(".")


def layout_graph(nodes):
    depths = {}

    def depth(name):
        if name not in depths:
            parents = nodes[name]["parents"]
            depths[name] = 1 + max(depth(parent) for parent in parents) if parents else 0
        return depths[name]

    names = sorted(nodes)
    for name in names:
        node = nodes[name]
        node["depth"] = depth(name)
        node["width"] = max(104, len(name) * 9 + 36)
        node["height"] = 38

    positions = {}
    golden_angle = math.pi * (3 - math.sqrt(5))
    for index, name in enumerate(names):
        radius = 82 * math.sqrt(index)
        angle = index * golden_angle
        positions[name] = [radius * math.cos(angle), radius * math.sin(angle)]
    positions["Element"] = [0.0, 0.0]
    edges = [(name, parent) for name in names for parent in nodes[name]["parents"]]

    for iteration in range(750):
        forces = {name: [0.0, 0.0] for name in names}
        for index, first in enumerate(names):
            for second in names[index + 1:]:
                dx = positions[first][0] - positions[second][0]
                dy = positions[first][1] - positions[second][1]
                distance = max(1.0, math.hypot(dx, dy))
                desired = max(145, (nodes[first]["width"] + nodes[second]["width"]) * 0.42)
                strength = min(8.0, desired * desired * 0.003 / distance)
                fx, fy = dx / distance * strength, dy / distance * strength
                forces[first][0] += fx
                forces[first][1] += fy
                forces[second][0] -= fx
                forces[second][1] -= fy
        for child, parent in edges:
            dx = positions[child][0] - positions[parent][0]
            dy = positions[child][1] - positions[parent][1]
            distance = max(1.0, math.hypot(dx, dy))
            strength = max(-12.0, min(12.0, (distance - 165) * 0.055))
            fx, fy = dx / distance * strength, dy / distance * strength
            forces[child][0] -= fx
            forces[child][1] -= fy
            forces[parent][0] += fx
            forces[parent][1] += fy
        if iteration % 2 == 0:
            for child, parent in edges:
                ax, ay = positions[child]
                bx, by = positions[parent]
                dx, dy = bx - ax, by - ay
                length_squared = max(1.0, dx * dx + dy * dy)
                for name in names:
                    if name == child or name == parent:
                        continue
                    px, py = positions[name]
                    t = ((px - ax) * dx + (py - ay) * dy) / length_squared
                    if not 0.04 < t < 0.96:
                        continue
                    closest_x, closest_y = ax + t * dx, ay + t * dy
                    offset_x, offset_y = px - closest_x, py - closest_y
                    distance = max(0.5, math.hypot(offset_x, offset_y))
                    clearance = max(52, nodes[name]["width"] * 0.42)
                    if distance < clearance:
                        strength = min(5.0, (clearance - distance) * 0.08)
                        forces[name][0] += offset_x / distance * strength
                        forces[name][1] += offset_y / distance * strength
        temperature = 52 * (1 - iteration / 900) + 1
        for name in names:
            forces[name][0] -= positions[name][0] * 0.01
            forces[name][1] -= positions[name][1] * 0.01
            length = max(1.0, math.hypot(*forces[name]))
            scale = min(temperature, length) / length
            positions[name][0] += forces[name][0] * scale
            positions[name][1] += forces[name][1] * scale
        positions["Element"] = [0.0, 0.0]

    for _ in range(2000):
        collisions = 0
        for index, first in enumerate(names):
            a = nodes[first]
            for second in names[index + 1:]:
                b = nodes[second]
                dx = positions[second][0] - positions[first][0]
                dy = positions[second][1] - positions[first][1]
                overlap_x = (a["width"] + b["width"]) / 2 + 28 - abs(dx)
                overlap_y = (a["height"] + b["height"]) / 2 + 22 - abs(dy)
                if overlap_x <= 0 or overlap_y <= 0:
                    continue
                collisions += 1
                if overlap_x < overlap_y:
                    shift = overlap_x / 2 + 0.5
                    sign = 1 if dx >= 0 else -1
                    positions[first][0] -= sign * shift
                    positions[second][0] += sign * shift
                else:
                    shift = overlap_y / 2 + 0.5
                    sign = 1 if dy >= 0 else -1
                    positions[first][1] -= sign * shift
                    positions[second][1] += sign * shift
        if not collisions:
            break

    margin = 36
    min_x = min(positions[name][0] - nodes[name]["width"] / 2 for name in names)
    min_y = min(positions[name][1] - nodes[name]["height"] / 2 for name in names)
    for name in names:
        node = nodes[name]
        node["x"] = positions[name][0] - min_x + margin - node["width"] / 2
        node["y"] = positions[name][1] - min_y + margin - node["height"] / 2
    width = max(nodes[name]["x"] + nodes[name]["width"] for name in names) + margin
    height = max(nodes[name]["y"] + nodes[name]["height"] for name in names) + margin
    ordered = sorted(nodes.values(), key=lambda node: (node["y"], node["x"]))
    return ordered, [], width, height, height - margin


def route_edge(start, end, child, parent, nodes, obstacle_limit=48):
    all_obstacles = []
    for name, node in nodes.items():
        padding = 0 if name in (child, parent) else 3
        all_obstacles.append((
            node["x"] - padding, node["y"] - padding,
            node["x"] + node["width"] + padding, node["y"] + node["height"] + padding,
        ))

    def clear(first, second, obstacles):
        dx, dy = second[0] - first[0], second[1] - first[1]
        for left, top, right, bottom in obstacles:
            lower, upper = 0.0, 1.0
            for direction, distance in (
                (-dx, first[0] - left), (dx, right - first[0]),
                (-dy, first[1] - top), (dy, bottom - first[1]),
            ):
                if abs(direction) < 1e-9:
                    if distance < 0:
                        break
                    continue
                ratio = distance / direction
                if direction < 0:
                    lower = max(lower, ratio)
                else:
                    upper = min(upper, ratio)
            else:
                if lower < upper:
                    return False
        return True

    if clear(start, end, all_obstacles):
        return [start, end]

    samples = max(1, math.ceil(math.dist(start, end) / 24))
    direct_points = [(
        start[0] + (end[0] - start[0]) * step / samples,
        start[1] + (end[1] - start[1]) * step / samples,
    ) for step in range(samples + 1)]

    def obstacle_distance(obstacle):
        left, top, right, bottom = obstacle
        return min(
            math.hypot(x - max(left, min(right, x)), y - max(top, min(bottom, y)))
            for x, y in direct_points
        )

    obstacles = sorted(all_obstacles, key=obstacle_distance)[:obstacle_limit]
    points = [start, end]
    for left, top, right, bottom in obstacles:
        points.extend(((left, top), (right, top), (right, bottom), (left, bottom)))
    queue = [(0.0, 0)]
    costs = {0: 0.0}
    previous = {}
    while queue:
        cost, current = heapq.heappop(queue)
        if current == 1:
            break
        if cost > costs.get(current, float("inf")):
            continue
        for candidate in range(1, len(points)):
            if candidate == current:
                continue
            new_cost = cost + math.dist(points[current], points[candidate])
            if new_cost >= costs.get(candidate, float("inf")):
                continue
            if not clear(points[current], points[candidate], obstacles):
                continue
            costs[candidate] = new_cost
            previous[candidate] = current
            heapq.heappush(queue, (new_cost, candidate))
    if 1 not in costs:
        raise ValueError(f"No route for {child} → {parent}; visited {len(costs)} of {len(points)} points")
    route = [1]
    while route[-1] != 0:
        route.append(previous[route[-1]])
    result = [points[index] for index in reversed(route)]
    if all(clear(first, second, all_obstacles) for first, second in zip(result, result[1:])):
        return result
    if obstacle_limit < 128:
        return route_edge(start, end, child, parent, nodes, 128)
    raise ValueError(f"Route crosses a distant block for {child} → {parent}")


def generate_svg():
    data, _, _ = load_handbook()
    model = XmiModel()
    available = {item["name"]: item for item in data["classifiers"]}
    names = set(model.classifiers)
    nodes = {
        name: {
            "name": name,
            "parents": [parent for parent in model.generalizations(element) if parent in names],
        }
        for name, element in model.classifiers.items()
    }
    ordered, _, width, height, _ = layout_graph(nodes)
    paths = []
    for child_name in sorted(nodes):
        child = nodes[child_name]
        for parent_name in child["parents"]:
            parent = nodes[parent_name]
            attributes = f'data-child="{escape(child_name)}" data-parent="{escape(parent_name)}"'
            child_cx = child["x"] + child["width"] / 2
            child_cy = child["y"] + child["height"] / 2
            parent_cx = parent["x"] + parent["width"] / 2
            parent_cy = parent["y"] + parent["height"] / 2
            dx, dy = parent_cx - child_cx, parent_cy - child_cy

            def border_distance(node):
                tx = (node["width"] / 2) / abs(dx) if dx else float("inf")
                ty = (node["height"] / 2) / abs(dy) if dy else float("inf")
                return min(tx, ty)

            child_offset = border_distance(child)
            parent_offset = border_distance(parent)
            start_x, start_y = child_cx + dx * child_offset, child_cy + dy * child_offset
            end_x, end_y = parent_cx - dx * parent_offset, parent_cy - dy * parent_offset
            points = route_edge((start_x, start_y), (end_x, end_y), child_name, parent_name, nodes)
            path = " ".join(
                ("M" if index == 0 else "L") + f' {number(x)} {number(y)}'
                for index, (x, y) in enumerate(points)
            )
            css = "inheritance-generalization"
            paths.append(f'<path class="{css}" {attributes} d="{path}" marker-end="url(#inheritance-generalization)"><title>{escape(child_name)} → {escape(parent_name)}</title></path>')

    blocks = []
    for node in ordered:
        name = node["name"]
        element = model.classifiers[name]
        classifier = available.get(name)
        definition = (classifier or {}).get("definition") or model.definition(element) or name
        definition = " ".join(definition.split())
        abstract = " abstract" if element.get("isAbstract") == "true" else ""
        content = f'''<title>{escape(name)}. {escape(definition)}</title>
          <rect class="inheritance-class-box" x="{number(node["x"])}" y="{number(node["y"])}" width="{node["width"]}" height="{node["height"]}" rx="5"/>
          <text class="inheritance-class-name{abstract}" x="{number(node["x"] + node["width"] / 2)}" y="{number(node["y"] + 24)}" text-anchor="middle">{escape(name)}</text>'''
        attributes = f'class="inheritance-class" data-classifier="{escape(name)}" data-depth="{node["depth"]}"'
        if classifier:
            href = f'../../index.html#/classifier/{slug(name)}'
            blocks.append(f'<a {attributes} href="{href}" target="_top" aria-label="{escape(name)} — открыть описание класса">{content}</a>')
        else:
            blocks.append(f'<g {attributes}>{content}</g>')

    linked = len(available)
    edge_count = sum(len(node["parents"]) for node in nodes.values())
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{number(width)}" height="{number(height)}" viewBox="0 0 {number(width)} {number(height)}" role="img" aria-labelledby="metamodel-title metamodel-description" data-diagram="metamodel-inheritance">
  <title id="metamodel-title">Иерархия наследования всех классификаторов UML 2.5.1</title>
  <desc id="metamodel-description">Все {len(nodes)} классификаторов официальной XMI-модели и {edge_count} связей обобщения. Родственные классификаторы образуют компактные группы, а связи идут напрямую или огибают только препятствующие блоки. {linked} классификаторов имеют ссылки на страницы справочника.</desc>
  <defs>
    <marker id="inheritance-generalization" markerWidth="15" markerHeight="16" refX="13" refY="8" orient="auto" markerUnits="userSpaceOnUse"><path d="M 1 1 L 13 8 L 1 15 Z" fill="#ffffff" stroke="#111111" stroke-width="1.4"/></marker>
    <style>
      .inheritance-generalization {{ fill: none; stroke: #64748b; stroke-width: 1.35; pointer-events: stroke; }}
           .inheritance-generalization:hover {{ stroke: #1e3a8a; stroke-width: 2.4; }}
      .inheritance-class-box {{ fill: #ffffff; stroke: #334155; stroke-width: 1.35; }}
      .inheritance-class-name {{ fill: #111111; font-family: Arial, Helvetica, sans-serif; font-size: 17px; font-weight: 700; }}
      .inheritance-class-name.abstract {{ font-style: italic; }}
      .inheritance-class[href] {{ cursor: pointer; }}
      .inheritance-class[href]:hover .inheritance-class-box {{ fill: #eef3fb; stroke: #1e3a8a; }}
      .inheritance-class[href]:focus-visible {{ outline: none; }}
      .inheritance-class[href]:focus-visible .inheritance-class-box {{ stroke: #7c3aed; stroke-width: 3; }}
    </style>
  </defs>
  <rect class="metamodel-background" width="{number(width)}" height="{number(height)}" fill="#ffffff"/>
  {chr(10).join(paths)}
  {chr(10).join(blocks)}
</svg>
'''


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Fail when the generated SVG is stale")
    args = parser.parse_args()
    expected = generate_svg()
    if args.check:
        if not OUTPUT.is_file() or OUTPUT.read_text(encoding="utf-8") != expected:
            raise SystemExit("Metamodel inheritance SVG is out of date; run python scripts/generate_metamodel_inheritance_svg.py")
        print(f"Metamodel inheritance SVG: OK; {OUTPUT.relative_to(ROOT)}")
        return
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(expected, encoding="utf-8")
    print(f"Generated {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
