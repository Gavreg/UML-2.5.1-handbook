"""
Name: check_spec_completeness.py
Purpose: Compare integrated clauses against the official UML 2.5.1 sources and check generated Russian content.
Interface: python scripts/check_spec_completeness.py [--clause N ...]
Goal: Detect missing sections, classifiers, associations, figures, OCL expressions or dropped translated strings.
Requires: Python 3 standard library; run scripts/build_site.py first. Clause sources, catalogs and titles come from scripts/sections.json via section_config.
"""

from argparse import ArgumentParser
from html.parser import HTMLParser
from pathlib import Path
import re

from handbook_data import ROOT, load_handbook, load_pages, slug
from section_config import load_sections


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


def select_clauses(clauses=None):
    sections = load_sections()
    if clauses is None:
        selected = [
            clause for clause, settings in sections.items()
            if (ROOT / settings["source"]).is_file() and (ROOT / settings["data"]).is_file()
        ]
        if not selected:
            raise FileNotFoundError("No clauses with existing source and data files are configured in scripts/sections.json")
        return selected
    selected = list(dict.fromkeys(str(clause) for clause in clauses))
    problems = []
    for clause in selected:
        if clause not in sections:
            problems.append(f"clause {clause} is not configured in scripts/sections.json")
            continue
        settings = sections[clause]
        for key in ("source", "data"):
            path = ROOT / settings[key]
            if not path.is_file():
                problems.append(f"clause {clause} ({settings['title']}): missing {key} file {path.relative_to(ROOT)}")
    if problems:
        raise FileNotFoundError("Cannot check the selected clauses: " + "; ".join(problems))
    return selected


def read_source(clause, settings, sections):
    path = ROOT / settings["source"]
    source = path.read_text(encoding="utf-8").replace("\f", "")
    start = f"\n{clause} {settings['title']}\n"
    if start in source:
        source = source[source.index(start):]
        following = str(int(clause) + 1)
        if following in sections:
            end = f"\n{following} {sections[following]['title']}\n"
            if end in source:
                source = source[:source.index(end)]
    return source


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
        for match in re.finditer(rf"^({re.escape(prefix)}\.\d+)\s+([A-Za-z_][A-Za-z0-9_]*) \[[^\n]+\]$", source, re.MULTILINE)
    }


def source_classifier_blocks(sources, catalogs):
    for clause, source in sources.items():
        classifier_prefix, association_prefix = catalogs[clause]
        matches = list(re.finditer(
            rf"^({re.escape(classifier_prefix)}\.\d+)\s+([A-Za-z_][A-Za-z0-9_]*) \[[^\n]+\]$", source, re.MULTILINE
        ))
        for index, match in enumerate(matches):
            end = matches[index + 1].start() if index + 1 < len(matches) else source.find(f"\n{association_prefix}", match.end())
            yield match.group(2), source[match.start():end]


def check_subset_links(data, xmi, pages, selected):
    errors = []
    diagram_by_name = {
        diagram.get("name") or diagram["en"]: diagram["id"]
        for diagram in data["diagrams"]
    }
    classifiers = {
        item["name"]: item for item in data["classifiers"]
        if item["section"].split(".")[0] in selected
    }
    associations = {item["name"]: item for item in data["associations"]}
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


def check_completeness(clauses=None):
    selected = select_clauses(clauses)
    sections = load_sections()
    settings = {clause: sections[clause] for clause in selected}
    catalogs = {
        clause: (settings[clause]["classifier_catalog"], settings[clause]["association_catalog"])
        for clause in selected
    }
    sources = {clause: read_source(clause, settings[clause], sections) for clause in selected}
    data, xmi, content = load_handbook()
    generated = load_pages()
    pages = generated["pages"]
    errors = []

    expected_sections = []
    for clause, source in sources.items():
        expected_sections.extend(dict.fromkeys(re.findall(
            rf"^({clause}\.(?:[1-9]|10))(?:\s+[A-Z][^\n]*)?$", source, re.MULTILINE
        )))
    actual_sections = [item["id"] for item in data["sections"] if item["id"].split(".")[0] in selected]
    if actual_sections != expected_sections:
        errors.append(f"Clause sections differ: {actual_sections} instead of {expected_sections}")
    catalog_sections = {catalog for pair in catalogs.values() for catalog in pair}
    narrative_sections = [
        section for section in expected_sections
        if section not in catalog_sections
    ]
    for section in narrative_sections:
        if section not in content["sections"]:
            errors.append(f"Missing translated section: {section}")

    expected_subsections = []
    for clause, source in sources.items():
        narrative_depth = max(int(section.split(".")[1]) for section in expected_sections if section.startswith(clause + ".") and section not in catalogs[clause])
        expected_subsections.extend(dict.fromkeys(
            re.findall(rf"^({clause}\.[1-{narrative_depth}](?:\.\d+)+)(?:\s+[A-Z][^\n]*)?$", source, re.MULTILINE)
        ))
    actual_subsections = [
        subsection["id"]
        for section_id, section in content["sections"].items()
        if section_id.split(".")[0] in selected
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
        classifier_prefix, association_prefix = catalogs[clause]
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
    actual_figures = [item["id"] for item in data["diagrams"] if item["id"].split(".")[0] in selected]
    if actual_figures != expected_figures:
        errors.append(f"Figures differ: {actual_figures} instead of {expected_figures}")
    assigned_figures = [
        figure
        for section in data["sections"]
        for figure in section.get("figures", [])
        if figure.split(".")[0] in selected
    ]
    figure_order = {figure: index for index, figure in enumerate(actual_figures)}
    assigned_figures.sort(key=lambda value: figure_order.get(value, -1))
    if assigned_figures != actual_figures:
        errors.append("Each figure must be assigned to exactly one handbook section")

    classifiers = {item["name"]: item for item in data["classifiers"]}
    for classifier_name, block in source_classifier_blocks(sources, catalogs):
        classifier_content = content["classifiers"].get(classifier_name, {})
        for field, marker in (("ocl", "inv:"), ("body", "body:"), ("pre", "pre:")):
            source_count = len(re.findall(rf"^[ \t]*{re.escape(marker)}", block, re.MULTILINE))
            kind = "constraints" if field == "ocl" else "operations"
            key = "name" if field == "ocl" else "signature"
            entries = []
            for entry in classifiers[classifier_name].get(kind, []):
                merged = dict(entry)
                override = classifier_content.get(kind, {}).get(entry.get(key), {})
                if isinstance(override, dict):
                    merged.update(override)
                entries.append(merged)
            translated_count = sum(
                1 for entry in entries
                if entry.get(field) and (
                    field != "ocl" or str(entry[field]).lstrip().startswith(marker)
                )
            )
            if translated_count != source_count:
                errors.append(f"{classifier_name}: {marker} count {translated_count} instead of {source_count}")

    preserved_strings = 0
    for section_id, section in content["sections"].items():
        if section_id.split(".")[0] not in selected:
            continue
        page_text = html_text(pages[f"#/section/{slug(section_id)}"])
        for path, value in leaf_strings(section, section_id):
            preserved_strings += 1
            if normalized(value) not in page_text:
                errors.append(f"Generated section {section_id} lost {path}: {normalized(value)[:120]}")
    classifier_clauses = {
        item["name"]: item["section"].split(".")[0]
        for item in data["classifiers"]
    }
    for classifier_name, classifier_content in content["classifiers"].items():
        if classifier_clauses.get(classifier_name) not in selected:
            continue
        route = f"#/classifier/{slug(classifier_name)}"
        if route not in pages:
            errors.append(f"Content has no classifier route: {classifier_name}")
            continue
        page_text = html_text(pages[route])
        for path, value in leaf_strings(classifier_content, classifier_name):
            preserved_strings += 1
            if normalized(value) not in page_text:
                errors.append(f"Generated classifier {classifier_name} lost {path}: {normalized(value)[:120]}")

    errors.extend(check_subset_links(data, xmi, pages, selected))
    return errors, {
        "clauses": ", ".join(f"{clause} {settings[clause]['title']}" for clause in selected),
        "sections": len(actual_sections),
        "subsections": len(actual_subsections),
        "classifiers": sum(1 for item in data["classifiers"] if item["section"].split(".")[0] in selected),
        "associations": sum(1 for item in data["associations"] if item["section"].split(".")[0] in selected),
        "figures": sum(1 for item in data["diagrams"] if item["id"].split(".")[0] in selected),
        "strings": preserved_strings,
    }


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument(
        "--clause", action="append", choices=sorted(load_sections()),
        help="Restrict the check to this clause; repeat to check several clauses. "
             "By default every clause with existing source and data files is checked",
    )
    args = parser.parse_args()
    try:
        errors, stats = check_completeness(clauses=args.clause)
    except (ValueError, FileNotFoundError) as error:
        print(f"ERROR: {error}")
        raise SystemExit(1)
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
