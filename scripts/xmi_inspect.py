"""
Name: xmi_inspect.py
Purpose: Query the official UML XMI without reading or copying large XML fragments manually.
Interface: python scripts/xmi_inspect.py [--xmi PATH] {packages,list,show,search,dependencies,export} ...
Goal: Give handbook authors compact, machine-readable facts about classifiers, associations, properties, operations, OCL and dependencies.
Requires: Python 3 standard library, scripts/xmi_model.py, scripts/sections.json and site/docs/UML-2.5.1.xmi.
Usage:
  python scripts/xmi_inspect.py list --clause 10
  python scripts/xmi_inspect.py show DataType --inherited
  python scripts/xmi_inspect.py show A_ownedAttribute_datatype --json
  python scripts/xmi_inspect.py search behavior --clause 10 --kind property
  python scripts/xmi_inspect.py dependencies Interface --json
  python scripts/xmi_inspect.py export --clause 10 --output drafts/clause-10-xmi.json
  Run python scripts/xmi_inspect.py COMMAND --help for command-specific options.
"""

from argparse import ArgumentParser
import json
from pathlib import Path
import sys

from section_config import load_sections
from xmi_model import XMI, XmiModel, element_id, element_kind


def print_json(data):
    print(json.dumps(data, ensure_ascii=False, indent=2))


def print_description(text, indent="  "):
    if text:
        for line in text.splitlines():
            print(f"{indent}{line}")


def print_property(item, comments=True):
    suffix = f"  [{item['id']}]" if item.get("id") else ""
    origin = f"  (from {item['inheritedFrom']})" if item.get("inheritedFrom") else ""
    print(f"- {item.get('signature', item.get('name'))}{origin}{suffix}")
    if item.get("association"):
        print(f"  association: {item['association']}")
    if comments:
        print_description(item.get("description", ""))


def print_constraint(item):
    print(f"- {item.get('name')}  [{item.get('id')}]")
    print_description(item.get("description", ""))
    for body in item.get("specification", []):
        print(f"  OCL: {body}")


def print_classifier(data, comments=True):
    abstract = " abstract" if data.get("isAbstract") else ""
    print(f"{data['name']} [{data['kind']}{abstract}] - {data['package']}")
    print(f"XMI id: {data['id']}")
    print_description(data.get("definition", ""), indent="")
    if data.get("generalizations"):
        print("Generalizations: " + ", ".join(data["generalizations"]))
    if data.get("specializations"):
        print("Specializations: " + ", ".join(data["specializations"]))
    for title, key in (
        ("Attributes", "attributes"),
        ("Inherited attributes", "inheritedAttributes"),
    ):
        if key in data:
            print(f"{title} ({len(data[key])}):")
            if not data[key]:
                print("- none")
            for item in data[key]:
                print_property(item, comments=comments)
    if data.get("operations"):
        print(f"Operations ({len(data['operations'])}):")
        for operation in data["operations"]:
            print(f"- {operation['signature']}  [{operation['id']}]")
            if comments:
                print_description(operation["description"])
            for constraint in operation["constraints"]:
                print_constraint(constraint)
    if data.get("constraints"):
        print(f"Constraints ({len(data['constraints'])}):")
        for item in data["constraints"]:
            print_constraint(item)
    if data.get("literals"):
        print("Literals: " + ", ".join(item["name"] for item in data["literals"]))


def print_association(data, comments=True):
    print(f"{data['name']} [Association] - {data['package']}")
    print(f"XMI id: {data['id']}")
    print_description(data.get("definition", ""), indent="")
    if data.get("generalizations"):
        print("Generalizations: " + ", ".join(data["generalizations"]))
    if data.get("specializations"):
        print("Specializations: " + ", ".join(data["specializations"]))
    print(f"Ends ({len(data['ends'])}):")
    for item in data["ends"]:
        if item.get("unresolved"):
            print(f"- UNRESOLVED: {item['id']}")
        else:
            print_property(item, comments=comments)
    if data.get("navigableOwnedEnds"):
        print("Navigable owned ends: " + ", ".join(data["navigableOwnedEnds"]))
    if data.get("constraints"):
        print("Constraints:")
        for item in data["constraints"]:
            print_constraint(item)


def print_dependencies(data):
    print(f"{data['name']} [{data['kind']}]")
    for title, key in (
        ("Direct generalizations", "directGeneralizations"),
        ("All ancestors", "ancestors"),
        ("Specializations", "specializations"),
        ("Property types", "propertyTypes"),
        ("Associations", "associations"),
        ("Owners of subsetted/redefined properties", "subsetAndRedefinitionOwners"),
    ):
        print(f"{title}: " + (", ".join(data[key]) if data[key] else "none"))


def search_records(model, clause=None, kind="all"):
    allowed = None
    if clause is not None:
        selected = model.clause_elements(clause)
        allowed = set(selected["classifiers"] + selected["associations"])
        allowed = {
            item for root in allowed for item in root.iter()
        } | allowed
    kinds = {
        "Class", "DataType", "Enumeration", "PrimitiveType", "Signal",
        "Association", "Property", "Operation", "Constraint", "EnumerationLiteral",
    }
    category = {
        "Class": "classifier", "DataType": "classifier", "Enumeration": "classifier",
        "PrimitiveType": "classifier", "Signal": "classifier",
        "Association": "association", "Property": "property", "Operation": "operation",
        "Constraint": "constraint", "EnumerationLiteral": "literal",
    }
    for element in model.root.iter():
        current_kind = element_kind(element)
        name = element.get("name")
        if current_kind not in kinds or not name:
            continue
        if allowed is not None and element not in allowed:
            continue
        if kind != "all" and category[current_kind] != kind:
            continue
        owner = model.owner(element)
        yield {
            "name": name,
            "kind": current_kind,
            "id": element_id(element),
            "owner": owner.get("name") if owner is not None and owner is not element else None,
            "package": model.package_name(element),
        }


def filtered_elements(model, clause, kind):
    if clause is None:
        classifiers = list(model.classifiers.values())
        associations = list(model.associations.values())
    else:
        selected = model.clause_elements(clause)
        classifiers = selected["classifiers"]
        associations = selected["associations"]
    if kind == "classifier":
        return classifiers
    if kind == "association":
        return associations
    return classifiers + associations


def build_parser():
    parser = ArgumentParser(description=__doc__, formatter_class=__import__("argparse").RawDescriptionHelpFormatter)
    parser.add_argument("--xmi", type=Path, default=XMI, help="XMI file; defaults to the official handbook source")
    commands = parser.add_subparsers(dest="command", required=True)

    commands.add_parser("packages", help="List named XMI packages")

    list_parser = commands.add_parser("list", help="List classifiers and associations")
    list_parser.add_argument("--clause", choices=sorted(load_sections(), key=int))
    list_parser.add_argument("--kind", choices=("all", "classifier", "association"), default="all")
    list_parser.add_argument("--json", action="store_true")

    show_parser = commands.add_parser("show", help="Show one classifier or association")
    show_parser.add_argument("name", help="Exact English name or XMI id")
    show_parser.add_argument("--inherited", action="store_true", help="Include inherited classifier attributes")
    show_parser.add_argument("--no-comments", action="store_true", help="Omit English normative comments")
    show_parser.add_argument("--json", action="store_true")

    search_parser = commands.add_parser("search", help="Search names and XMI ids")
    search_parser.add_argument("term")
    search_parser.add_argument("--clause", choices=sorted(load_sections(), key=int))
    search_parser.add_argument("--kind", choices=("all", "classifier", "association", "property", "operation", "constraint", "literal"), default="all")
    search_parser.add_argument("--json", action="store_true")

    dependencies_parser = commands.add_parser("dependencies", help="Summarize direct and inherited dependencies")
    dependencies_parser.add_argument("name", help="Exact English name or XMI id")
    dependencies_parser.add_argument("--json", action="store_true")

    export_parser = commands.add_parser("export", help="Export normalized clause data as JSON")
    export_parser.add_argument("--clause", required=True, choices=sorted(load_sections(), key=int))
    export_parser.add_argument("--output", type=Path, help="Write to this file instead of stdout")
    return parser


def main():
    parser = build_parser()
    args = parser.parse_args()
    try:
        model = XmiModel(args.xmi)
        if args.command == "packages":
            for name in sorted(model.packages):
                package = model.packages[name]
                print(f"{name}: {len(package.findall('packagedElement'))} packaged elements")
            return
        if args.command == "list":
            elements = filtered_elements(model, args.clause, args.kind)
            if args.json:
                print_json([
                    {
                        "name": item.get("name"),
                        "kind": element_kind(item),
                        "id": element_id(item),
                        "package": model.package_name(item),
                    }
                    for item in elements
                ])
            else:
                for item in elements:
                    print(f"{item.get('name')} [{element_kind(item)}]")
                print(f"Total: {len(elements)}")
            return
        if args.command == "show":
            data = model.describe(args.name, inherited=args.inherited)
            if args.json:
                print_json(data)
            elif data["kind"] == "Association":
                print_association(data, comments=not args.no_comments)
            else:
                print_classifier(data, comments=not args.no_comments)
            return
        if args.command == "search":
            term = args.term.casefold()
            records = [
                item for item in search_records(model, args.clause, args.kind)
                if term in item["name"].casefold() or term in (item["id"] or "").casefold()
            ]
            if args.json:
                print_json(records)
            else:
                for item in records:
                    owner = f" :: {item['owner']}" if item["owner"] else ""
                    print(f"{item['name']} [{item['kind']}]{owner} - {item['id']}")
                print(f"Matches: {len(records)}")
            return
        if args.command == "dependencies":
            data = model.dependencies(args.name)
            print_json(data) if args.json else print_dependencies(data)
            return
        if args.command == "export":
            content = json.dumps(model.export_clause(args.clause), ensure_ascii=False, indent=2) + "\n"
            if args.output:
                args.output.parent.mkdir(parents=True, exist_ok=True)
                args.output.write_text(content, encoding="utf-8")
                print(f"Wrote {args.output}")
            else:
                sys.stdout.write(content)
    except (ValueError, KeyError) as error:
        raise SystemExit(f"XMI inspection failed: {error}") from error


if __name__ == "__main__":
    main()
