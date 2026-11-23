"""
Name: check_xmi.py
Purpose: Check referential and structural integrity of the normative UML XMI before using it in handbook generators.
Interface: python scripts/check_xmi.py [--clause N] [--xmi PATH] [--references-only]
Goal: Detect broken id references, invalid association ends, wrong generalization targets and inheritance cycles without loading the XMI into an LLM.
Requires: Python 3 standard library, scripts/xmi_model.py and site/docs/UML-2.5.1.xmi.
Usage:
  python scripts/check_xmi.py                    check the complete official model
  python scripts/check_xmi.py --clause 10        check one configured package and its outgoing references
  python scripts/check_xmi.py --references-only  skip structural and cycle checks
  The command is read-only. Exit status 0 means success; 1 reports validation errors.
"""

from argparse import ArgumentParser
from pathlib import Path

from section_config import load_sections
from xmi_model import XMI, XMI_NS, XmiModel, element_id, element_kind


REFERENCE_ATTRIBUTES = {
    "actual", "association", "behavior", "bodyCondition", "classifier", "client",
    "contract", "definingFeature", "default", "deployedArtifact", "deployment",
    "event", "formal", "general", "generalization", "importedElement", "importedPackage",
    "instance", "location", "mapping", "mergedPackage", "metaclassReference",
    "metamodelReference", "method", "operation", "parameteredElement", "postcondition",
    "powertype", "precondition", "profile", "receivingPackage", "redefinedClassifier",
    "relatedElement", "represented", "signature", "signal", "source", "specification",
    "subject", "substitutingClassifier", "supplier", "target", "templateParameter", "type",
}


def scoped_elements(model, clause):
    if clause is None:
        return list(model.root.iter())
    selected = model.clause_elements(clause)
    roots = selected["classifiers"] + selected["associations"]
    return [item for root in roots for item in root.iter()]


def check_references(model, elements):
    errors = []
    checked = 0
    for element in elements:
        source = element_id(element) or element.tag
        for reference in element:
            identifier = reference.get(XMI_NS + "idref")
            if identifier:
                checked += 1
                if identifier not in model.elements:
                    errors.append(f"{source}: unresolved xmi:idref {identifier}")
        for attribute, identifier in element.attrib.items():
            if attribute in REFERENCE_ATTRIBUTES and identifier:
                for reference in identifier.split():
                    checked += 1
                    if reference not in model.elements:
                        errors.append(f"{source}: unresolved {attribute} reference {reference}")
    return errors, checked


def check_structure(model, elements):
    errors = []
    scoped = set(elements)
    for element in elements:
        source = element_id(element) or element.get("name") or element.tag
        kind = element_kind(element)
        if kind == "Association":
            member_ids = model.reference_ids(element, "memberEnd")
            if len(member_ids) < 2:
                errors.append(f"{source}: association has fewer than two memberEnd references")
            owned_ids = {element_id(item) for item in element.findall("ownedEnd")}
            for identifier in member_ids:
                target = model.resolve(identifier)
                if target is not None and element_kind(target) != "Property":
                    errors.append(f"{source}: memberEnd {identifier} is {element_kind(target)}, not Property")
            for identifier in model.reference_ids(element, "navigableOwnedEnd"):
                if identifier not in owned_ids:
                    errors.append(f"{source}: navigableOwnedEnd {identifier} is not an ownedEnd")
        for generalization in element.findall("generalization"):
            target_name = generalization.get("general")
            target = model.resolve(target_name)
            if target is None:
                continue
            if kind == "Association" and element_kind(target) != "Association":
                errors.append(f"{source}: association generalization {target_name} is not an Association")
            if kind != "Association" and element_kind(target) == "Association":
                errors.append(f"{source}: classifier generalization {target_name} is an Association")
        if kind == "Property":
            association_id = element.get("association")
            if association_id:
                association = model.resolve(association_id)
                if association is not None and element_kind(association) != "Association":
                    errors.append(f"{source}: association {association_id} is not an Association")
                if association is not None and element in scoped:
                    member_ids = model.reference_ids(association, "memberEnd")
                    if element_id(element) not in member_ids:
                        errors.append(f"{source}: property is absent from memberEnd of {association_id}")
    return errors


def check_cycles(model, elements):
    errors = []
    roots = [item for item in elements if item in set(model.classifiers.values()) or item in set(model.associations.values())]
    state = {}
    stack = []

    def visit(element):
        identifier = element_id(element)
        if state.get(identifier) == 2:
            return
        if state.get(identifier) == 1:
            start = stack.index(identifier)
            cycle = stack[start:] + [identifier]
            errors.append("Generalization cycle: " + " -> ".join(cycle))
            return
        state[identifier] = 1
        stack.append(identifier)
        for parent_name in model.generalizations(element):
            parent = model.resolve(parent_name)
            if parent is not None:
                visit(parent)
        stack.pop()
        state[identifier] = 2

    for element in roots:
        visit(element)
    return sorted(set(errors))


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--clause", choices=sorted(load_sections(), key=int), help="Limit structural checks to one configured handbook clause")
    parser.add_argument("--xmi", type=Path, default=XMI, help="XMI file; defaults to the official handbook source")
    parser.add_argument("--references-only", action="store_true", help="Check references without association and inheritance invariants")
    args = parser.parse_args()
    try:
        model = XmiModel(args.xmi)
    except ValueError as error:
        raise SystemExit(f"XMI validation failed: {error}") from error
    elements = scoped_elements(model, args.clause)
    scoped_ids = {element_id(element) for element in elements}
    errors = [
        f"Duplicate XMI id: {identifier}" for identifier in model.duplicate_ids
        if identifier in scoped_ids
    ]
    reference_errors, checked = check_references(model, elements)
    errors.extend(reference_errors)
    if not args.references_only:
        errors.extend(check_structure(model, elements))
        errors.extend(check_cycles(model, elements))
    if errors:
        print(f"XMI validation failed: {len(errors)} error(s)")
        for error in errors:
            print(f"- {error}")
        raise SystemExit(1)
    scope = f"clause {args.clause}" if args.clause else "complete model"
    print(f"XMI integrity: OK ({scope}; {len(elements)} elements; {checked} references checked)")


if __name__ == "__main__":
    main()
