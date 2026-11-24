"""
Name: generate_metamodel_inheritance_svg.py
Purpose: Generate one interactive SVG containing the inheritance graph of every UML XMI classifier.
Interface: python scripts/generate_metamodel_inheritance_svg.py [--check]
Goal: Provide a complete metamodel overview while linking classifiers already available in the handbook.
Sources: site/docs/UML-2.5.1.xmi and the generated classifier route catalog.
Requires: Python 3 standard library and scripts/xmi_model.py.
Usage:
  Run from the repository root after adding classifier pages or updating the normative XMI.
  python scripts/generate_metamodel_inheritance_svg.py         write the complete overview SVG
  python scripts/generate_metamodel_inheritance_svg.py --check verify the SVG without rewriting it
Output: site/assets/diagrams/metamodel-inheritance.svg
"""

from argparse import ArgumentParser
from html import escape
from pathlib import Path

from handbook_data import ROOT, SITE, load_handbook, slug
from xmi_model import XmiModel


OUTPUT = SITE / "assets" / "diagrams" / "metamodel-inheritance.svg"


def number(value):
    return str(int(value)) if isinstance(value, float) and value.is_integer() else str(value)


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
    depths = {}

    def depth(name):
        if name not in depths:
            parents = nodes[name]["parents"]
            depths[name] = 1 + max(depth(parent) for parent in parents) if parents else 0
        return depths[name]

    for name in nodes:
        depth(name)
    columns = [[] for _ in range(max(depths.values()) + 1)]
    for name in sorted(nodes):
        columns[depths[name]].append(nodes[name])

    margin, row_gap, column_gap, box_height = 28, 52, 104, 40
    max_rows = max(len(column) for column in columns)
    content_height = (max_rows - 1) * row_gap + box_height
    for column in columns:
        for node in column:
            node["width"] = max(104, len(node["name"]) * 9 + 36)
            node["height"] = box_height
    column_x = margin
    for column in columns:
        column_width = max(node["width"] for node in column)
        for row, node in enumerate(column):
            node["x"] = column_x
            node["y"] = margin + row * row_gap
            node["columnRight"] = column_x + column_width
        column_x += column_width + column_gap
    width = column_x - column_gap + margin

    edges = [
        (node, nodes[parent])
        for node in nodes.values()
        for parent in node["parents"]
    ]
    long_edges = [edge for edge in edges if depths[edge[0]["name"]] - depths[edge[1]["name"]] > 1]
    height = margin * 2 + content_height + len(long_edges) * 16
    long_lane = 0
    paths = []
    for child, parent in edges:
        child_y = child["y"] + box_height / 2
        parent_y = parent["y"] + box_height / 2
        parent_right = parent["x"] + parent["width"]
        attributes = f'data-child="{escape(child["name"])}" data-parent="{escape(parent["name"])}"'
        if depths[child["name"]] - depths[parent["name"]] > 1:
            source_junction = parent["columnRight"] + 20
            target_junction = child["x"] - 20
            bus_y = margin + content_height + 16 + long_lane * 16
            long_lane += 1
            path = f'M {number(child["x"])} {number(child_y)} H {number(target_junction)} V {number(bus_y)} H {number(source_junction)} V {number(parent_y)} H {number(parent_right)}'
        else:
            junction_x = parent["columnRight"] + (child["x"] - parent["columnRight"]) / 2
            path = f'M {number(child["x"])} {number(child_y)} H {number(junction_x)} V {number(parent_y)} H {number(parent_right)}'
        paths.append(f'<path class="inheritance-generalization" {attributes} d="{path}" marker-end="url(#inheritance-generalization)"/>')

    blocks = []
    for column in columns:
        for node in column:
            name = node["name"]
            element = model.classifiers[name]
            classifier = available.get(name)
            definition = (classifier or {}).get("definition") or model.definition(element) or name
            definition = " ".join(definition.split())
            abstract = " abstract" if element.get("isAbstract") == "true" else ""
            content = f'''<title>{escape(name)}. {escape(definition)}</title>
              <rect class="inheritance-class-box" x="{number(node["x"])}" y="{number(node["y"])}" width="{node["width"]}" height="{box_height}"/>
              <text class="inheritance-class-name{abstract}" x="{number(node["x"] + node["width"] / 2)}" y="{number(node["y"] + 25)}" text-anchor="middle">{escape(name)}</text>'''
            attributes = f'class="inheritance-class" data-classifier="{escape(name)}" data-depth="{depths[name]}"'
            if classifier:
                href = f'../../index.html#/classifier/{slug(name)}'
                blocks.append(f'<a {attributes} href="{href}" target="_top" aria-label="{escape(name)} — открыть описание класса">{content}</a>')
            else:
                blocks.append(f'<g {attributes}>{content}</g>')

    linked = len(available)
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{number(width)}" height="{number(height)}" viewBox="0 0 {number(width)} {number(height)}" role="img" aria-labelledby="metamodel-title metamodel-description" data-diagram="metamodel-inheritance">
  <title id="metamodel-title">Иерархия наследования всех классификаторов UML 2.5.1</title>
  <desc id="metamodel-description">Все {len(nodes)} классификаторов официальной XMI-модели и {len(edges)} связей обобщения. Корни расположены слева, потомки справа. {linked} классификаторов имеют ссылки на страницы справочника.</desc>
  <defs>
    <marker id="inheritance-generalization" markerWidth="15" markerHeight="16" refX="13" refY="8" orient="auto" markerUnits="userSpaceOnUse"><path d="M 1 1 L 13 8 L 1 15 Z" fill="#ffffff" stroke="#111111" stroke-width="1.4"/></marker>
    <style>
      .inheritance-generalization {{ fill: none; stroke: #111111; stroke-width: 1.4; }}
      .inheritance-class-box {{ fill: #ffffff; stroke: #111111; stroke-width: 1.4; }}
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
