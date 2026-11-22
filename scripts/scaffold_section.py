"""
Name: scaffold_section.py
Purpose: Create non-destructive stage-2 JavaScript data and content skeletons from a stage-1 inventory.
Interface: python scripts/scaffold_section.py --clause 10 [--check]
Goal: Automate repetitive identifiers, routes, hierarchy and figure links while leaving Russian prose to the editor.
Requires: Python 3 standard library; run scripts/prepare_section.py first.
"""

from argparse import ArgumentParser
import json
from pathlib import Path
import re

from section_config import load_sections, section_settings
from site_manifest import write_index


ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "site" / "docs"


def js_value(value):
    return json.dumps(value, ensure_ascii=False, indent=2)


def clause_variable(slug):
    return "UML_" + re.sub(r"[^A-Z0-9]+", "_", slug.upper()) + "_DATA"


def build_data(inventory):
    clause = str(inventory["clause"])
    settings = section_settings(clause)
    classifier_catalog = settings["classifier_catalog"]
    association_catalog = settings["association_catalog"]
    catalogs = {classifier_catalog, association_catalog}
    figures = inventory["figures"]
    top_headings = [heading for heading in inventory["headings"] if heading["id"].count(".") == 1]
    sections = []
    for heading in top_headings:
        section_id = heading["id"]
        sections.append({
            "id": section_id,
            "title": heading["title"],
            "en": heading["title"],
            "page": heading["page"],
            "summary": "",
            "figures": [
                figure["id"] for figure in figures
                if figure["section"] and ".".join(figure["section"].split(".")[:2]) == section_id
            ],
            "placeholder": True,
        })

    classifiers = []
    for item in inventory["classifiers"]:
        classifiers.append({
            "name": item["name"],
            "ru": item["name"],
            "kind": item["kind"],
            "section": item["section"],
            "page": item["page"],
            "definition": "",
            "generalizations": item["generalizations"],
            "specializations": item["specializations"],
            "operations": [
                {"signature": operation["name"], "description": ""}
                for operation in item.get("operations", [])
            ],
            "constraints": [
                {"name": constraint["name"], "description": "", "ocl": ""}
                for constraint in item.get("constraints", [])
            ],
            "literals": [
                {"name": literal["name"], "description": ""}
                for literal in item.get("literals", [])
            ],
            "diagrams": item.get("diagrams", []),
        })

    associations = []
    for item in inventory["associations"]:
        associations.append({
            "name": item["name"],
            "ru": item["name"],
            "section": item["section"],
            "page": item["page"],
            "definition": "",
            "generalizations": item.get("generalizations", []),
            "specializations": item.get("specializations", []),
            "ends": [
                {
                    "name": end["name"],
                    "signature": f'{end["name"]} : {end["type"]}',
                    "type": end["type"],
                    "owner": end["owner"],
                    "association": item["name"],
                    "description": "",
                }
                for end in item.get("ends", [])
            ],
            "diagrams": item.get("diagrams", []),
        })

    diagrams = []
    for figure in figures:
        name = figure["title"]
        diagrams.append({
            "id": figure["id"],
            "name": name,
            "title": name,
            "en": name,
            "section": ".".join(figure["section"].split(".")[:2]),
            "page": figure["page"],
            "related": [
                item["name"] for item in inventory["classifiers"]
                if name in item.get("diagrams", [])
            ],
            "associations": [
                item["name"] for item in inventory["associations"]
                if name in item.get("diagrams", [])
            ],
        })

    return {"sections": sections, "classifiers": classifiers, "associations": associations, "diagrams": diagrams}


def build_content(inventory):
    settings = section_settings(str(inventory["clause"]))
    catalogs = {settings["classifier_catalog"], settings["association_catalog"]}
    result = {}
    top_headings = [
        heading for heading in inventory["headings"]
        if heading["id"].count(".") == 1 and heading["id"] not in catalogs
    ]
    for top in top_headings:
        subsections = []
        for heading in inventory["headings"]:
            section_id = heading["id"]
            if not section_id.startswith(top["id"] + ".") or any(
                section_id.startswith(catalog + ".") for catalog in catalogs
            ):
                continue
            subsection = {
                "id": section_id,
                "title": heading["title"],
                "en": heading["title"],
                "paragraphs": [],
            }
            figures = [figure["id"] for figure in inventory["figures"] if figure["section"] == section_id]
            if figures:
                subsection["figures"] = figures
            subsections.append(subsection)
        result[top["id"]] = {"paragraphs": [], "subsections": subsections}
    return result


def generate(clause):
    settings = section_settings(clause)
    inventory_path = DOCS / f"uml-2.5.1-{settings['slug']}-inventory.json"
    if not inventory_path.is_file():
        raise FileNotFoundError(f"Missing stage-1 inventory: {inventory_path.relative_to(ROOT)}")
    inventory = json.loads(inventory_path.read_text(encoding="utf-8"))
    data = build_data(inventory)
    data_text = (
        f"window.{clause_variable(settings['slug'])} = (() => {{\n"
        + "".join(f"  const {name} = {js_value(items)};\n" for name, items in data.items())
        + "  return { sections, classifiers, associations, diagrams };\n})();\n"
    )
    outputs = {ROOT / settings["data"]: data_text}
    content = build_content(inventory)
    for name in settings["content"]:
        path = ROOT / "site" / "data" / "content" / name
        if name.startswith("sections-"):
            text = "Object.assign(window.UML_CONTENT.sections, " + js_value(content) + ");\n"
        else:
            text = "Object.assign(window.UML_CONTENT.classifiers, {});\n"
        outputs[path] = text
    return outputs, data


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--clause", required=True, choices=sorted(load_sections(), key=int))
    parser.add_argument("--check", action="store_true", help="Check skeletons without modifying files")
    args = parser.parse_args()
    outputs, data = generate(args.clause)
    missing = [path for path in outputs if not path.is_file()]
    changed = [path for path, text in outputs.items() if path.is_file() and path.read_text(encoding="utf-8") != text]
    if args.check:
        if missing or changed:
            for path in [*missing, *changed]:
                print(f"Missing or different: {path.relative_to(ROOT)}")
            raise SystemExit(1)
        print(f"Clause {args.clause} stage-2 skeletons: OK")
        return
    for path, text in outputs.items():
        path.parent.mkdir(parents=True, exist_ok=True)
        if path.is_file():
            print(f"Kept existing {path.relative_to(ROOT)}")
        else:
            path.write_text(text, encoding="utf-8")
            print(f"Wrote {path.relative_to(ROOT)}")
    write_index()
    print(
        f"Clause {args.clause} skeleton: {len(data['sections'])} sections, "
        f"{len(data['classifiers'])} classifiers, {len(data['associations'])} associations, "
        f"{len(data['diagrams'])} figures; Russian prose remains empty"
    )


if __name__ == "__main__":
    main()
