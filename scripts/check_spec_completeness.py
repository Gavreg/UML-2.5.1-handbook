"""
Name: check_spec_completeness.py
Purpose: Compare Clause 7 and Clause 8 coverage with the extracted OMG sources and verify generated Russian content.
Interface: python scripts/check_spec_completeness.py
Goal: Detect missing sections, classifiers, associations, figures, OCL expressions or dropped translated strings.
Requires: Python 3 standard library; run scripts/build_site.py first.
"""

from html.parser import HTMLParser
from pathlib import Path
import re

from handbook_data import ROOT, load_handbook, load_pages, slug


SOURCES = {
    "7": ROOT / "site" / "docs" / "uml-2.5.1-common-structure-en.txt",
    "8": ROOT / "site" / "docs" / "uml-2.5.1-values-en.txt",
}
CATALOGS = {"7": ("7.8", "7.9"), "8": ("8.6", "8.7")}
PAGES = ROOT / "site" / "data" / "common-structure-pages.js"


class TextParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts = []

    def handle_data(self, data):
        self.parts.append(data)


def normalized(value):
    return re.sub(r"\s+", " ", value).strip()


def html_text(value):
    parser = TextParser()
    parser.feed(value)
    parser.close()
    return normalized("".join(parser.parts))


def leaf_strings(value, path=""):
    if isinstance(value, dict):
        for key, item in value.items():
            yield from leaf_strings(item, f"{path}.{key}" if path else str(key))
    elif isinstance(value, list):
        for index, item in enumerate(value):
            yield from leaf_strings(item, f"{path}[{index}]")
    elif isinstance(value, str) and normalized(value):
        yield path, value


def source_object_map(source, prefix):
    return {
        match.group(1): match.group(2)
        for match in re.finditer(rf"^({re.escape(prefix)}\.\d+)\n([A-Za-z_][A-Za-z0-9_]*) \[[^\n]+\]$", source, re.MULTILINE)
    }


def source_classifier_blocks(sources):
    for clause, source in sources.items():
        classifier_prefix, association_prefix = CATALOGS[clause]
        matches = list(re.finditer(
            rf"^({re.escape(classifier_prefix)}\.\d+)\n([A-Za-z_][A-Za-z0-9_]*) \[[^\n]+\]$", source, re.MULTILINE
        ))
        for index, match in enumerate(matches):
            end = matches[index + 1].start() if index + 1 < len(matches) else source.find(f"\n{association_prefix}\n", match.end())
            yield match.group(2), source[match.start():end]


def check_subset_links(data, xmi, pages):
    errors = []
    diagram_by_name = {
        "Root": "7.1", "Templates": "7.3", "Template Bindings": "7.4", "Namespaces": "7.5",
        "Types": "7.10", "Constraints": "7.13", "Dependencies": "7.17",
        "Literals": "8.1", "Expressions": "8.2", "Time": "8.3", "Intervals": "8.4",
    }
    associations = {item["name"]: item for item in data["associations"]}
    classifiers = {item["name"]: item for item in data["classifiers"]}
    for classifier_name, classifier in classifiers.items():
        page = pages[f"#/classifier/{slug(classifier_name)}"]
        rows = re.findall(r'<li class="detail-item"><code>(.*?)</code>', page, re.DOTALL)
        class_data = xmi["classes"].get(classifier_name, {})
        for prop in class_data.get("direct", []) + class_data.get("inherited", []):
            row = next((row for row in rows if html_text(row) == normalized(prop["signature"])), None)
            if row is None:
                errors.append(f"{classifier_name}: property row is missing: {prop['signature']}")
                continue
            for reference in prop.get("subsettedProperties", []):
                owner = reference.get("owner") or {}
                association_name = owner.get("name") if owner.get("type") == "association" else next(
                    (
                        candidate.get("association")
                        for candidate in xmi["classes"].get(owner.get("name"), {}).get("direct", [])
                        if candidate["id"] == reference["id"]
                    ),
                    None,
                )
                association = associations.get(association_name)
                figure = next((diagram_by_name[name] for name in association["diagrams"] if name in diagram_by_name), None) if association else None
                if not figure:
                    continue
                expected = f"#/diagram/{slug(figure)}"
                if not re.search(rf'<a href="{re.escape(expected)}">{re.escape(reference["name"])}</a>', row):
                    errors.append(f"{classifier_name}: subsets {prop['signature']} must link {reference['name']} to {expected}")
    return errors


def check_completeness():
    data, xmi, content = load_handbook()
    sources = {clause: path.read_text(encoding="utf-8") for clause, path in SOURCES.items()}
    generated = load_pages()
    pages = generated["pages"]
    errors = []

    expected_sections = []
    for clause, source in sources.items():
        expected_sections.extend(dict.fromkeys(re.findall(rf"^({clause}\.[1-9])$", source, re.MULTILINE)))
    actual_sections = [item["id"] for item in data["sections"]]
    if actual_sections != expected_sections:
        errors.append(f"Clause sections differ: {actual_sections} instead of {expected_sections}")
    narrative_sections = [
        section for section in expected_sections
        if section not in {catalog for catalogs in CATALOGS.values() for catalog in catalogs}
    ]
    for section in narrative_sections:
        if section not in content["sections"]:
            errors.append(f"Missing translated section: {section}")

    expected_subsections = []
    for clause, source in sources.items():
        narrative_depth = max(int(section.split(".")[1]) for section in expected_sections if section.startswith(clause + ".") and section not in CATALOGS[clause])
        expected_subsections.extend(dict.fromkeys(
            re.findall(rf"^({clause}\.[1-{narrative_depth}](?:\.\d+)+)$", source, re.MULTILINE)
        ))
    actual_subsections = [
        subsection["id"]
        for section in content["sections"].values()
        for subsection in section.get("subsections", [])
    ]
    missing = [item for item in expected_subsections if item not in actual_subsections]
    extra = [item for item in actual_subsections if item not in expected_subsections]
    if missing:
        errors.append(f"Missing translated subsections: {', '.join(missing)}")
    if extra:
        errors.append(f"Unexpected translated subsections: {', '.join(extra)}")
    if len(actual_subsections) != len(set(actual_subsections)):
        errors.append("Duplicate translated subsection identifiers")

    for clause, source in sources.items():
        classifier_prefix, association_prefix = CATALOGS[clause]
        for prefix, key in ((classifier_prefix, "classifiers"), (association_prefix, "associations")):
            expected_objects = source_object_map(source, prefix)
            actual_objects = {item["section"]: item["name"] for item in data[key] if item["section"].startswith(prefix + ".")}
            if actual_objects != expected_objects:
                missing_objects = sorted(set(expected_objects.items()) - set(actual_objects.items()))
                extra_objects = sorted(set(actual_objects.items()) - set(expected_objects.items()))
                errors.append(f"{key} differ from source; missing={missing_objects}, extra={extra_objects}")

    expected_figures = []
    for clause, source in sources.items():
        expected_figures.extend(dict.fromkeys(re.findall(rf"^Figure ({clause}\.\d+)\s", source, re.MULTILINE)))
    expected_figures.sort(key=lambda value: [int(part) for part in value.split(".")])
    actual_figures = [item["id"] for item in data["diagrams"]]
    if actual_figures != expected_figures:
        errors.append(f"Figures differ: {actual_figures} instead of {expected_figures}")

    for classifier_name, block in source_classifier_blocks(sources):
        classifier_content = content["classifiers"].get(classifier_name, {})
        for field, marker in (("ocl", "inv:"), ("body", "body:"), ("pre", "pre:")):
            source_count = len(re.findall(rf"^{re.escape(marker)}", block, re.MULTILINE))
            entries = classifier_content.get("constraints", {}) if field == "ocl" else classifier_content.get("operations", {})
            translated_count = sum(
                1 for entry in entries.values()
                if isinstance(entry, dict) and entry.get(field) and (
                    field != "ocl" or str(entry[field]).lstrip().startswith(marker)
                )
            )
            if translated_count != source_count:
                errors.append(f"{classifier_name}: {marker} count {translated_count} instead of {source_count}")

    preserved_strings = 0
    for section_id, section in content["sections"].items():
        page_text = html_text(pages[f"#/section/{slug(section_id)}"])
        for path, value in leaf_strings(section, section_id):
            preserved_strings += 1
            if normalized(value) not in page_text:
                errors.append(f"Generated section {section_id} lost {path}: {normalized(value)[:120]}")
    for classifier_name, classifier_content in content["classifiers"].items():
        route = f"#/classifier/{slug(classifier_name)}"
        if route not in pages:
            errors.append(f"Content has no classifier route: {classifier_name}")
            continue
        page_text = html_text(pages[route])
        for path, value in leaf_strings(classifier_content, classifier_name):
            preserved_strings += 1
            if normalized(value) not in page_text:
                errors.append(f"Generated classifier {classifier_name} lost {path}: {normalized(value)[:120]}")

    errors.extend(check_subset_links(data, xmi, pages))
    return errors, {
        "sections": len(actual_sections),
        "subsections": len(actual_subsections),
        "classifiers": len(data["classifiers"]),
        "associations": len(data["associations"]),
        "figures": len(data["diagrams"]),
        "strings": preserved_strings,
    }


def main():
    errors, stats = check_completeness()
    if errors:
        for error in errors:
            print(f"ERROR: {error}")
        raise SystemExit(1)
    print(
        "Specification completeness: OK; "
        + ", ".join(f"{key}={value}" for key, value in stats.items())
    )


if __name__ == "__main__":
    main()
