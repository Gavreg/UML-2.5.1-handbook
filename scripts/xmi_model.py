"""
Name: xmi_model.py
Purpose: Read and normalize the normative UML XMI for handbook command-line tools.
Interface: from xmi_model import XmiModel, XMI, XMI_NS
Goal: Reuse one strict, read-only parser instead of repeating XML traversal in maintenance scripts.
Requires: Python 3 standard library and site/docs/UML-2.5.1.xmi.
Usage:
  Import this module from scripts; it is not a standalone command.
  model = XmiModel(XMI)
  data = model.classifier("DataType", inherited=True)
"""

from pathlib import Path
import xml.etree.ElementTree as ET

from section_config import section_settings


ROOT = Path(__file__).resolve().parent.parent
XMI = ROOT / "site" / "docs" / "UML-2.5.1.xmi"
XMI_NS = "{http://www.omg.org/spec/XMI/20131001}"
CLASSIFIER_TYPES = {
    "uml:Class",
    "uml:DataType",
    "uml:Enumeration",
    "uml:PrimitiveType",
    "uml:Signal",
}


def element_kind(element):
    return element.get(XMI_NS + "type", element.tag).removeprefix("uml:")


def element_id(element):
    return element.get(XMI_NS + "id")


class XmiModel:
    def __init__(self, path=XMI):
        self.path = Path(path)
        self.tree = ET.parse(self.path)
        self.root = self.tree.getroot()
        self.elements = {}
        self.duplicate_ids = []
        self.parents = {}
        self.names = {}
        for parent in self.root.iter():
            for child in parent:
                self.parents[child] = self.parents.get(child, parent)
        for element in self.root.iter():
            identifier = element_id(element)
            if identifier:
                if identifier in self.elements:
                    self.duplicate_ids.append(identifier)
                else:
                    self.elements[identifier] = element
            name = element.get("name")
            if name:
                self.names.setdefault(name, []).append(element)
        self.classifiers = {
            name: candidates[0]
            for name, candidates in self.names.items()
            if len(candidates) == 1 and element_kind(candidates[0]) in {
                kind.removeprefix("uml:") for kind in CLASSIFIER_TYPES
            }
        }
        self.associations = {
            name: candidates[0]
            for name, candidates in self.names.items()
            if len(candidates) == 1 and element_kind(candidates[0]) == "Association"
        }
        self.packages = {
            name: candidates[0]
            for name, candidates in self.names.items()
            if len(candidates) == 1 and element_kind(candidates[0]) == "Package"
        }
        self._classifier_elements = set(self.classifiers.values())
        self._association_elements = set(self.associations.values())

    def package_elements(self, package_name):
        package = self.packages.get(package_name)
        if package is None:
            raise ValueError(f"XMI package not found or ambiguous: {package_name}")
        return package.findall("packagedElement")

    def clause_elements(self, clause):
        settings = section_settings(str(clause))
        elements = self.package_elements(settings["package"])
        return {
            "package": settings["package"],
            "classifiers": [item for item in elements if item in self._classifier_elements],
            "associations": [item for item in elements if item in self._association_elements],
        }

    def package_name(self, element):
        current = element
        while current in self.parents:
            current = self.parents[current]
            if element_kind(current) == "Package" and current.get("name"):
                return current.get("name")
        return None

    def owner(self, element):
        current = element
        while current in self.parents:
            current = self.parents[current]
            if current in self._classifier_elements or current in self._association_elements:
                return current
        return None

    def lookup(self, name):
        if name in self.elements:
            return self.elements[name]
        candidates = self.names.get(name, [])
        candidates = [
            item for item in candidates
            if item in self._classifier_elements or item in self._association_elements
        ]
        if not candidates:
            raise ValueError(f"Classifier or association not found: {name}")
        if len(candidates) > 1:
            locations = ", ".join(f"{self.package_name(item)}::{name}" for item in candidates)
            raise ValueError(f"Ambiguous name {name}; use XMI id: {locations}")
        return candidates[0]

    def resolve(self, identifier):
        return self.elements.get(identifier)

    def reference_ids(self, element, tag):
        return [item.get(XMI_NS + "idref") for item in element.findall(tag)]

    def reference_summary(self, identifier):
        target = self.resolve(identifier)
        if target is None:
            return {"id": identifier, "unresolved": True}
        owner = self.owner(target)
        return {
            "id": identifier,
            "name": target.get("name"),
            "type": self.property_type(target) if element_kind(target) == "Property" else element_kind(target),
            "owner": owner.get("name") if owner is not None else None,
        }

    def generalizations(self, element):
        return [item.get("general") for item in element.findall("generalization")]

    def specializations(self, element):
        name = element.get("name")
        candidates = list(self.classifiers.values())
        if element_kind(element) == "Association":
            candidates = list(self.associations.values())
        return sorted(
            candidate.get("name") for candidate in candidates
            if name in self.generalizations(candidate)
        )

    def ancestors(self, element):
        result = []
        seen = set()

        def visit(current):
            for name in self.generalizations(current):
                if name in seen:
                    continue
                seen.add(name)
                parent = self.classifiers.get(name)
                if parent is None:
                    parent = self.associations.get(name)
                if parent is None:
                    raise ValueError(f"Unresolved generalization: {current.get('name')} -> {name}")
                result.append(parent)
                visit(parent)

        visit(element)
        return result

    def definition(self, element):
        return "\n".join(
            comment.get("body", "") for comment in element.findall("ownedComment")
            if comment.get("body")
        )

    def property_type(self, prop):
        if prop.get("type"):
            return prop.get("type")
        type_element = prop.find("type")
        if type_element is not None:
            href = type_element.get("href", "")
            if href:
                return href.rsplit("#", 1)[-1]
        return "?"

    def multiplicity(self, element):
        lower_element = element.find("lowerValue")
        upper_element = element.find("upperValue")
        lower = "0" if lower_element is not None else "1"
        upper = "1"
        if lower_element is not None:
            lower = lower_element.get("value", lower)
        if upper_element is not None:
            upper = upper_element.get("value", upper)
        return f"{lower}..{upper}"

    def default_value(self, prop):
        default = prop.find("defaultValue")
        if default is None:
            return None
        if default.get("value") is not None:
            return default.get("value")
        if default.get("instance"):
            instance = self.resolve(default.get("instance"))
            return instance.get("name") if instance is not None else default.get("instance")
        return {
            "LiteralBoolean": "false",
            "LiteralInteger": "0",
            "LiteralUnlimitedNatural": "1",
        }.get(element_kind(default))

    def modifiers(self, prop):
        result = []
        for attribute, label in (
            ("isOrdered", "ordered"),
            ("isReadOnly", "readOnly"),
            ("isDerivedUnion", "union"),
        ):
            if prop.get(attribute) == "true":
                result.append(label)
        if prop.get("isUnique") == "false":
            result.append("nonunique")
        subsets = self.reference_ids(prop, "subsettedProperty")
        redefines = self.reference_ids(prop, "redefinedProperty")
        if subsets:
            result.append("subsets " + ", ".join(
                (self.resolve(item).get("name") if self.resolve(item) is not None else item)
                for item in subsets
            ))
        if redefines:
            result.append("redefines " + ", ".join(
                (self.resolve(item).get("name") if self.resolve(item) is not None else item)
                for item in redefines
            ))
        return result

    def property_signature(self, prop):
        name = prop.get("name") or "<unnamed>"
        if prop.get("isDerived") == "true":
            name = "/" + name
        signature = f"{name} : {self.property_type(prop)} [{self.multiplicity(prop)}]"
        default = self.default_value(prop)
        if default is not None:
            signature += f" = {default}"
        modifiers = self.modifiers(prop)
        if modifiers:
            signature += " {" + ", ".join(modifiers) + "}"
        return signature

    def property(self, prop, inherited_from=None):
        owner = self.owner(prop)
        data = {
            "id": element_id(prop),
            "name": prop.get("name"),
            "signature": self.property_signature(prop),
            "type": self.property_type(prop),
            "description": self.definition(prop),
            "owner": owner.get("name") if owner is not None else None,
            "association": prop.get("association"),
            "aggregation": prop.get("aggregation", "none"),
            "subsets": [self.reference_summary(item) for item in self.reference_ids(prop, "subsettedProperty")],
            "redefines": [self.reference_summary(item) for item in self.reference_ids(prop, "redefinedProperty")],
        }
        if inherited_from:
            data["inheritedFrom"] = inherited_from
        return data

    def parameter(self, parameter):
        data = self.property(parameter)
        data["direction"] = parameter.get("direction", "in")
        data["effect"] = parameter.get("effect")
        return data

    def constraint(self, constraint):
        specification = constraint.find("specification")
        bodies = [] if specification is None else [body.text or "" for body in specification.findall("body")]
        languages = [] if specification is None else [item.text or "" for item in specification.findall("language")]
        return {
            "id": element_id(constraint),
            "name": constraint.get("name"),
            "description": self.definition(constraint),
            "specification": bodies,
            "languages": languages,
        }

    def operation(self, operation):
        parameters = [self.parameter(item) for item in operation.findall("ownedParameter")]
        inputs = [item for item in parameters if item["direction"] != "return"]
        returns = [item for item in parameters if item["direction"] == "return"]
        signature = operation.get("name") + "(" + ", ".join(item["signature"] for item in inputs) + ")"
        if returns:
            signature += " : " + ", ".join(item["signature"] for item in returns)
        return {
            "id": element_id(operation),
            "name": operation.get("name"),
            "signature": signature,
            "description": self.definition(operation),
            "isQuery": operation.get("isQuery") == "true",
            "parameters": parameters,
            "constraints": [self.constraint(item) for item in operation.findall("ownedRule")],
        }

    def inherited_properties(self, element):
        inherited = []
        seen = set()
        redefined_ids = set()
        for candidate in [element, *self.ancestors(element)]:
            for prop in candidate.findall("ownedAttribute"):
                redefined_ids.update(self.reference_ids(prop, "redefinedProperty"))
        for parent in self.ancestors(element):
            for prop in parent.findall("ownedAttribute"):
                identifier = element_id(prop)
                if identifier in redefined_ids or identifier in seen:
                    continue
                seen.add(identifier)
                inherited.append(self.property(prop, inherited_from=parent.get("name")))
        return inherited

    def classifier(self, name, inherited=False):
        element = self.lookup(name) if isinstance(name, str) else name
        if element_kind(element) == "Association":
            return self.association(element)
        data = {
            "id": element_id(element),
            "name": element.get("name"),
            "kind": element_kind(element),
            "package": self.package_name(element),
            "isAbstract": element.get("isAbstract") == "true",
            "definition": self.definition(element),
            "generalizations": self.generalizations(element),
            "specializations": self.specializations(element),
            "attributes": [self.property(item) for item in element.findall("ownedAttribute")],
            "operations": [self.operation(item) for item in element.findall("ownedOperation")],
            "constraints": [self.constraint(item) for item in element.findall("ownedRule")],
            "literals": [
                {
                    "id": element_id(item),
                    "name": item.get("name"),
                    "description": self.definition(item),
                }
                for item in element.findall("ownedLiteral")
            ],
        }
        if inherited:
            data["inheritedAttributes"] = self.inherited_properties(element)
        return data

    def association(self, name):
        element = self.lookup(name) if isinstance(name, str) else name
        ends = []
        for identifier in self.reference_ids(element, "memberEnd"):
            end = self.resolve(identifier)
            if end is None:
                ends.append({"id": identifier, "unresolved": True})
            else:
                ends.append(self.property(end))
        return {
            "id": element_id(element),
            "name": element.get("name"),
            "kind": "Association",
            "package": self.package_name(element),
            "definition": self.definition(element),
            "generalizations": self.generalizations(element),
            "specializations": self.specializations(element),
            "ends": ends,
            "navigableOwnedEnds": self.reference_ids(element, "navigableOwnedEnd"),
            "constraints": [self.constraint(item) for item in element.findall("ownedRule")],
        }

    def describe(self, name, inherited=False):
        element = self.lookup(name) if isinstance(name, str) else name
        if element_kind(element) == "Association":
            return self.association(element)
        return self.classifier(element, inherited=inherited)

    def dependencies(self, name):
        element = self.lookup(name)
        data = self.describe(element)
        properties = data.get("attributes", []) + data.get("ends", [])
        property_types = sorted({item["type"] for item in properties if item.get("type") not in {None, "?"}})
        associations = sorted({item["association"] for item in properties if item.get("association")})
        referenced_properties = sorted({
            reference["owner"]
            for item in properties
            for key in ("subsets", "redefines")
            for reference in item.get(key, [])
            if reference.get("owner")
        })
        return {
            "name": data["name"],
            "kind": data["kind"],
            "ancestors": [item.get("name") for item in self.ancestors(element)],
            "directGeneralizations": data["generalizations"],
            "specializations": data["specializations"],
            "propertyTypes": property_types,
            "associations": associations,
            "subsetAndRedefinitionOwners": referenced_properties,
        }

    def export_clause(self, clause):
        selected = self.clause_elements(clause)
        return {
            "source": "OMG UML 2.5.1, formal/17-12-05",
            "xmi": self.path.name,
            "clause": str(clause),
            "package": selected["package"],
            "classifiers": [self.classifier(item) for item in selected["classifiers"]],
            "associations": [self.association(item) for item in selected["associations"]],
        }
