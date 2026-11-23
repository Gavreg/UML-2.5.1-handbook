"""
Name: prepare_section.py
Purpose: Extract a normative UML clause and build its stage-1 source inventory.
Interface: python scripts/prepare_section.py --clause 10 [--check]
Goal: Preserve the exact clause text and reconcile its headings, objects and figures with the OMG XMI before translation.
Requires: Python 3 and PyMuPDF; the official PDF and XMI in site/docs.
Usage:
  Configure the clause in scripts/sections.json, then run from the repository root.
  python scripts/prepare_section.py --clause 10           write stage-1 text and inventory
  python scripts/prepare_section.py --clause 10 --check   verify them without changing files
  Review the inventory before proceeding to stage 2; this stage does not translate content.
"""

from argparse import ArgumentParser
from hashlib import sha256
import json
from pathlib import Path
import re
import xml.etree.ElementTree as ET

import pymupdf

from handbook_data import load_handbook, slug
from section_config import load_sections, section_settings


ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "site" / "docs"
PDF = DOCS / "omg-uml-2.5.1-formal-17-12-05.pdf"
XMI = DOCS / "UML-2.5.1.xmi"
XMI_NS = "{http://www.omg.org/spec/XMI/20131001}"


def extract_pdf(settings):
    pages = {}
    with pymupdf.open(PDF) as document:
        for printed_page in range(settings["first_page"], settings["last_page"] + 1):
            raw_text = document[printed_page + 41].get_text()
            pages[printed_page] = "\n".join(line.rstrip() for line in raw_text.splitlines()) + "\n"
    source = "".join(
        f"===== PRINTED PAGE {page} / PDF PAGE {page + 42} =====\n\n{text}"
        for page, text in pages.items()
    )
    return source, pages


def page_headings(clause, pages):
    headings = []
    pattern = re.compile(rf"^({re.escape(clause)}\.\d+(?:\.\d+)*)\s*$")
    for page, text in pages.items():
        lines = text.splitlines()
        for index, line in enumerate(lines[:-1]):
            match = pattern.match(line)
            if match:
                headings.append({
                    "id": match.group(1),
                    "title": lines[index + 1].strip(),
                    "page": page,
                })
    return headings


def diagram_references(text, section, diagrams_number=2):
    match = re.search(
        rf"^{re.escape(section)}\.{diagrams_number}\s*\nDiagrams\s*\n([^\n]+)$",
        text,
        re.MULTILINE,
    )
    if not match:
        raise ValueError(f"Diagram list not found for {section}")
    return [item.strip() for item in match.group(1).split(",")]


def figure_inventory(clause, pages, narrative_ids):
    figures = {}
    heading_pattern = re.compile(rf"^({re.escape(clause)}\.\d+(?:\.\d+)*)\s*$")
    figure_pattern = re.compile(rf"^Figure ({re.escape(clause)}\.\d+)\s+(.+)$")
    current_section = None
    for page, text in pages.items():
        lines = text.splitlines()
        for index, line in enumerate(lines):
            heading = heading_pattern.match(line)
            if heading and heading.group(1) in narrative_ids and index + 1 < len(lines):
                current_section = heading.group(1)
            figure = figure_pattern.match(line)
            if figure:
                figures[figure.group(1)] = {
                    "id": figure.group(1),
                    "title": figure.group(2).strip(),
                    "page": page,
                    "section": current_section,
                }
    return sorted(
        figures.values(),
        key=lambda item: [int(part) for part in item["id"].split(".")],
    )


def xmi_inventory(settings, headings, text):
    clause = settings["classifier_catalog"].split(".")[0]
    root = ET.parse(XMI).getroot()
    package = next(
        element for element in root.iter()
        if element.get(XMI_NS + "type") == "uml:Package" and element.get("name") == settings["package"]
    )
    package_elements = package.findall("packagedElement")
    class_elements = {
        element.get("name"): element for element in package_elements
        if element.get(XMI_NS + "type") in {"uml:Class", "uml:Enumeration"}
    }
    excluded_associations = set(settings.get("xmi_exclude_associations", []))
    association_elements = {
        element.get("name"): element for element in package_elements
        if element.get(XMI_NS + "type") == "uml:Association"
        and element.get("name") not in excluded_associations
    }
    all_classes = {
        element.get("name"): element for element in root.iter()
        if element.get(XMI_NS + "type") in {"uml:Class", "uml:Enumeration"}
    }
    all_associations = {
        element.get("name"): element for element in root.iter()
        if element.get(XMI_NS + "type") == "uml:Association"
    }
    elements = {
        element.get(XMI_NS + "id"): element for element in root.iter()
        if element.get(XMI_NS + "id")
    }
    property_owners = {
        prop.get(XMI_NS + "id"): name
        for name, classifier in all_classes.items()
        for prop in classifier.findall("ownedAttribute")
    }
    property_owners.update({
        prop.get(XMI_NS + "id"): name
        for name, association in all_associations.items()
        for prop in association.findall("ownedEnd")
    })

    classifier_headings = {
        item["title"].split(" [", 1)[0]: item for item in headings
        if item["id"].startswith(settings["classifier_catalog"] + ".")
        and re.search(r"\[(?:Abstract Class|Class|Enumeration)\]$", item["title"])
    }
    association_headings = {
        item["title"].split(" [", 1)[0]: item for item in headings
        if item["id"].startswith(settings["association_catalog"] + ".")
        and item["title"].endswith("[Association]")
    }
    if set(classifier_headings) != set(class_elements):
        raise ValueError("PDF and XMI classifier sets differ")
    if set(association_headings) != set(association_elements):
        raise ValueError("PDF and XMI association sets differ")

    classifiers = []
    for name, heading in sorted(classifier_headings.items(), key=lambda item: item[1]["id"]):
        element = class_elements[name]
        section = heading["id"]
        classifiers.append({
            "name": name,
            "section": section,
            "page": heading["page"],
            "kind": (
                "Enumeration" if element.get(XMI_NS + "type") == "uml:Enumeration"
                else "Abstract Class" if element.get("isAbstract") == "true"
                else "Class"
            ),
            "generalizations": [item.get("general") for item in element.findall("generalization")],
            "specializations": sorted(
                candidate for candidate, candidate_element in all_classes.items()
                if any(item.get("general") == name for item in candidate_element.findall("generalization"))
            ),
            "attributes": [
                {
                    "id": item.get(XMI_NS + "id"),
                    "name": item.get("name"),
                    "type": item.get("type"),
                    "association": item.get("association"),
                }
                for item in element.findall("ownedAttribute")
            ],
            "operations": [
                {"id": item.get(XMI_NS + "id"), "name": item.get("name")}
                for item in element.findall("ownedOperation")
            ],
            "constraints": [
                {"id": item.get(XMI_NS + "id"), "name": item.get("name")}
                for item in element.findall("ownedRule")
            ],
            "literals": [
                {"id": item.get(XMI_NS + "id"), "name": item.get("name")}
                for item in element.findall("ownedLiteral")
            ],
            "diagrams": diagram_references(text, section),
        })

    associations = []
    for name, heading in sorted(
        association_headings.items(),
        key=lambda item: [int(part) for part in item[1]["id"].split(".")],
    ):
        element = association_elements[name]
        ends = []
        for reference in element.findall("memberEnd"):
            end = elements[reference.get(XMI_NS + "idref")]
            ends.append({
                "id": end.get(XMI_NS + "id"),
                "name": end.get("name"),
                "type": end.get("type"),
                "owner": property_owners[end.get(XMI_NS + "id")],
            })
        associations.append({
            "name": name,
            "section": heading["id"],
            "page": heading["page"],
            "generalizations": [item.get("general") for item in element.findall("generalization")],
            "specializations": sorted(
                candidate for candidate, candidate_element in all_associations.items()
                if any(item.get("general") == name for item in candidate_element.findall("generalization"))
            ),
            "ends": ends,
            "diagrams": diagram_references(text, heading["id"], 1),
        })
    return classifiers, associations


def build_inventory(clause, settings, source, pages):
    headings = page_headings(clause, pages)
    text = "\n".join(pages.values())
    classifiers, associations = xmi_inventory(settings, headings, text)
    narrative_ids = {
        item["id"] for item in headings
        if item["id"] in {settings["classifier_catalog"], settings["association_catalog"]}
        or (
            not item["id"].startswith(settings["classifier_catalog"] + ".")
            and not item["id"].startswith(settings["association_catalog"] + ".")
        )
    }
    figures = figure_inventory(clause, pages, narrative_ids)
    expected_figures = [f"{clause}.{index}" for index in range(1, len(figures) + 1)]
    if [item["id"] for item in figures] != expected_figures:
        raise ValueError("Figure captions are missing or out of sequence")
    if any(item["section"] is None for item in figures):
        raise ValueError("A figure has no owning narrative subsection")

    counts = {
        "headings": len(headings),
        "classifiers": len(classifiers),
        "associations": len(associations),
        "figures": len(figures),
        "attributes": sum(len(item["attributes"]) for item in classifiers),
        "operations": sum(len(item["operations"]) for item in classifiers),
        "constraints": sum(len(item["constraints"]) for item in classifiers),
        "association_ends": sum(len(item["ends"]) for item in associations),
        "notes": len(re.findall(r"^NOTE\.", text, re.MULTILINE)),
    }
    if settings.get("expected") and counts != settings["expected"]:
        raise ValueError(f"Inventory counts differ: {counts} instead of {settings['expected']}")

    existing_data, _, _ = load_handbook()
    existing_classifiers = {item["name"] for item in existing_data["classifiers"]}
    own_classifiers = {item["name"] for item in classifiers}
    dependencies = {
        parent for item in classifiers for parent in item["generalizations"] + item["specializations"]
    }
    dependencies.update(
        attribute["type"] for item in classifiers for attribute in item["attributes"]
        if attribute["type"]
    )
    dependencies.update(
        end["type"] for item in associations for end in item["ends"]
        if end["type"]
    )
    external = sorted(dependencies - own_classifiers)

    routes = [
        f"#/section/{slug(item['id'])}" for item in headings
        if item["id"] in narrative_ids and item["id"].count(".") == 1
    ]
    routes.extend(f"#/classifier/{slug(item['name'])}" for item in classifiers)
    routes.extend(f"#/association/{slug(item['name'])}" for item in associations)
    routes.extend(f"#/diagram/{slug(item['id'])}" for item in figures)
    if len(routes) != len(set(routes)):
        raise ValueError("Duplicate routes in inventory")

    return {
        "clause": clause,
        "title": settings["title"],
        "completed_stage": 1,
        "source": {
            "specification": "OMG UML 2.5.1, formal/17-12-05",
            "pdf": PDF.name,
            "pdf_sha256": sha256(PDF.read_bytes()).hexdigest(),
            "xmi": XMI.name,
            "xmi_sha256": sha256(XMI.read_bytes()).hexdigest(),
            "xmi_package": settings["package"],
            "printed_pages": [settings["first_page"], settings["last_page"]],
            "pdf_pages": [settings["first_page"] + 42, settings["last_page"] + 42],
            "extracted_text": f"uml-2.5.1-{settings['slug']}-en.txt",
        },
        "counts": counts,
        "headings": headings,
        "classifiers": classifiers,
        "associations": associations,
        "figures": figures,
        "external_classifiers": {
            "already_in_handbook": [name for name in external if name in existing_classifiers],
            "require_future_clauses": [name for name in external if name not in existing_classifiers],
        },
        "planned_integration": {
            "new_routes": len(routes),
            "routes": routes,
            "new_source_files": [
                settings["data"],
                *[f"site/data/content/{name}" for name in settings["content"]],
                f"scripts/{settings['svg_generator']}",
            ],
            "generated_files": [
                f"site/data/pages/sections-{clause}.js",
                f"site/data/pages/classifiers-{clause}.js",
                f"site/data/pages/associations-{clause}.js",
                f"site/data/pages/diagrams-{clause}.js",
                f"site/data/xmi/<Classifier>.js ({len(classifiers)} new fragments)",
                f"site/assets/diagrams/figure-{clause}-*.png ({len(figures)} files)",
                f"site/assets/diagrams/figure-{clause}-*.svg ({len(figures)} files)",
            ],
            "existing_files_to_extend": [
                "site/index.html (generated script manifest)",
                "scripts/render_common_structure_diagrams.py",
                "AGENTS.md",
            ],
            "batching": "The clause fits one task per remaining stage; no subdivision is required.",
        },
    }


def generate(clause):
    settings = section_settings(clause)
    source, pages = extract_pdf(settings)
    inventory = build_inventory(clause, settings, source, pages)
    return source, json.dumps(inventory, ensure_ascii=False, indent=2) + "\n"


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--clause", required=True, choices=sorted(load_sections(), key=int))
    parser.add_argument("--check", action="store_true", help="Check extracted files without modifying them")
    args = parser.parse_args()
    settings = section_settings(args.clause)
    source_path = DOCS / f"uml-2.5.1-{settings['slug']}-en.txt"
    inventory_path = DOCS / f"uml-2.5.1-{settings['slug']}-inventory.json"
    expected = generate(args.clause)
    outputs = ((source_path, expected[0]), (inventory_path, expected[1]))
    if args.check:
        stale = [path for path, content in outputs if not path.is_file() or path.read_text(encoding="utf-8") != content]
        if stale:
            raise SystemExit("Out-of-date stage-1 files: " + ", ".join(str(path.relative_to(ROOT)) for path in stale))
        print(f"Clause {args.clause} stage-1 inventory: OK")
        return
    for path, content in outputs:
        path.write_text(content, encoding="utf-8")
        print(f"Wrote {path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
