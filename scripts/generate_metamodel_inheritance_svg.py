"""
Name: generate_metamodel_inheritance_svg.py
Purpose: Generate one interactive SVG containing the inheritance graph of every UML XMI classifier.
Interface: python scripts/generate_metamodel_inheritance_svg.py [--check]
Goal: Provide a readable metamodel overview with grouped branches, curved edges and existing page links.
Sources: site/docs/UML-2.5.1.xmi and the generated classifier route catalog.
Requires: Python 3 standard library and scripts/xmi_model.py.
Usage:
  Run from the repository root after adding classifier pages or updating the normative XMI.
  python scripts/generate_metamodel_inheritance_svg.py         write the complete overview SVG
  python scripts/generate_metamodel_inheritance_svg.py --check verify the SVG without rewriting it
Output: site/assets/diagrams/metamodel-inheritance.svg
Layout:
  Related branches are grouped by a primary-parent tree, then barycentric sweeps
  reduce crossings. Short edges are curved; long edges use separate lower lanes.
"""

from argparse import ArgumentParser
from html import escape
from pathlib import Path

from handbook_data import ROOT, SITE, load_handbook, slug
from xmi_model import XmiModel


OUTPUT = SITE / "assets" / "diagrams" / "metamodel-inheritance.svg"


def number(value):
    return str(int(value)) if isinstance(value, float) and value.is_integer() else f"{value:.2f}".rstrip("0").rstrip(".")


def layout_graph(nodes):
    children = {name: [] for name in nodes}
    depths = {}

    def depth(name):
        if name not in depths:
            parents = nodes[name]["parents"]
            depths[name] = 1 + max(depth(parent) for parent in parents) if parents else 0
        return depths[name]

    for name, node in nodes.items():
        depth(name)
        node["depth"] = depths[name]
        for parent in node["parents"]:
            children[parent].append(name)

    descendants = {}

    def descendant_count(name):
        if name not in descendants:
            descendants[name] = len(children[name]) + sum(descendant_count(child) for child in children[name])
        return descendants[name]

    primary = {
        name: max(node["parents"], key=lambda parent: (descendant_count(parent), parent))
        for name, node in nodes.items() if node["parents"]
    }
    tree = {name: [] for name in nodes}
    for name, parent in primary.items():
        tree[parent].append(name)
    rank = {}
    next_rank = 0

    def assign_rank(name):
        nonlocal next_rank
        rank[name] = next_rank
        next_rank += 1
        for child in sorted(tree[name]):
            assign_rank(child)

    for root in sorted(tree, key=lambda name: (name != "Element", name)):
        if not nodes[root]["parents"]:
            assign_rank(root)

    columns = [[] for _ in range(max(depths.values()) + 1)]
    for name in nodes:
        columns[depths[name]].append(name)
    for column in columns:
        column.sort(key=lambda name: rank[name])

    def positions():
        return {
            name: row
            for column in columns
            for row, name in enumerate(column)
        }

    for sweep in range(16):
        order = positions()
        for column in columns[1:]:
            column.sort(key=lambda name: (
                sum(order[parent] for parent in nodes[name]["parents"]) / len(nodes[name]["parents"]), rank[name]
            ))
        order = positions()
        for column in reversed(columns[:-1]):
            column.sort(key=lambda name: (
                sum(order[child] for child in children[name]) / len(children[name]), rank[name]
            ) if children[name] else (order[name], rank[name]))

    margin, row_gap, column_gap, box_height = 36, 52, 112, 38
    for node in nodes.values():
        node["width"] = max(104, len(node["name"]) * 9 + 36)
        node["height"] = box_height
    column_x = margin
    for column in columns:
        column_width = max(nodes[name]["width"] for name in column)
        for row, name in enumerate(column):
            node = nodes[name]
            node["x"] = column_x
            node["y"] = margin + row * row_gap
            node["columnRight"] = column_x + column_width
        column_x += column_width + column_gap
    width = column_x - column_gap + margin
    content_bottom = max(nodes[name]["y"] + box_height for name in nodes)
    long_edges = [
        (name, parent)
        for name, node in nodes.items()
        for parent in node["parents"]
        if depths[name] - depths[parent] > 1
    ]
    height = content_bottom + margin + len(long_edges) * 28
    ordered = [nodes[name] for column in columns for name in column]
    return ordered, long_edges, width, height, content_bottom


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
    ordered, secondary, width, height, content_bottom = layout_graph(nodes)
    secondary_lanes = {edge: content_bottom + 42 + index * 42 for index, edge in enumerate(secondary)}
    paths = []
    for child_name in sorted(nodes):
        child = nodes[child_name]
        for parent_name in child["parents"]:
            parent = nodes[parent_name]
            attributes = f'data-child="{escape(child_name)}" data-parent="{escape(parent_name)}"'
            if (child_name, parent_name) in secondary_lanes:
                lane = secondary_lanes[(child_name, parent_name)]
                start_x = child["x"]
                start_y = child["y"] + child["height"] / 2
                end_x = parent["x"] + parent["width"]
                end_y = parent["y"] + parent["height"] / 2
                child_junction = start_x - 22
                parent_junction = parent["columnRight"] + 22
                path = f'M {number(start_x)} {number(start_y)} H {number(child_junction)} V {number(lane)} H {number(parent_junction)} V {number(end_y)} H {number(end_x)}'
                css = "inheritance-generalization multiple-inheritance"
            else:
                start_x = child["x"]
                start_y = child["y"] + child["height"] / 2
                end_x = parent["x"] + parent["width"]
                end_y = parent["y"] + parent["height"] / 2
                child_junction = start_x - 24
                parent_junction = parent["columnRight"] + 24
                path = f'M {number(start_x)} {number(start_y)} H {number(child_junction)} C {number(child_junction)} {number(start_y)}, {number(parent_junction)} {number(end_y)}, {number(parent_junction)} {number(end_y)} H {number(end_x)}'
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
  <desc id="metamodel-description">Все {len(nodes)} классификаторов официальной XMI-модели и {edge_count} связей обобщения. Родственные ветви сгруппированы, короткие связи показаны кривыми, а длинные вынесены в отдельные маршруты под схемой. {linked} классификаторов имеют ссылки на страницы справочника.</desc>
  <defs>
    <marker id="inheritance-generalization" markerWidth="15" markerHeight="16" refX="13" refY="8" orient="auto" markerUnits="userSpaceOnUse"><path d="M 1 1 L 13 8 L 1 15 Z" fill="#ffffff" stroke="#111111" stroke-width="1.4"/></marker>
    <style>
      .inheritance-generalization {{ fill: none; stroke: #64748b; stroke-width: 1.35; pointer-events: stroke; }}
      .inheritance-generalization.multiple-inheritance {{ stroke: #94a3b8; stroke-width: 1.2; opacity: 0.55; }}
      .inheritance-generalization.multiple-inheritance:hover {{ opacity: 1; }}
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
