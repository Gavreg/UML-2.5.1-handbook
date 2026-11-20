"""
Name: generate_common_structure_svg.py
Purpose: Generate interactive vector versions of all 21 figures in UML 2.5.1 Clause 7.
Interface: python scripts/generate_common_structure_svg.py [--output-dir PATH] [--check]
Goal: Preserve OMG semantics and notation while adding local links, tooltips and consistent geometry.
Sources: docs/UML-2.5.1.xmi, the official UML 2.5.1 PDF and the curated handbook data.
Requires: Python 3 standard library.
"""

from argparse import ArgumentParser
from html import escape
import json
from pathlib import Path
import re


ROOT = Path(__file__).resolve().parent.parent
DATA_PATH = ROOT / "site" / "data" / "common-structure.js"
XMI_PATH = ROOT / "site" / "data" / "common-structure-xmi.js"


def slug(value):
    return re.sub(r"^-|-$", "", re.sub(r"[^a-z0-9]+", "-", value.lower()))


def quoted(value):
    return json.loads(f'"{value}"')


DATA_TEXT = DATA_PATH.read_text(encoding="utf-8")
CLASS_BLOCK = DATA_TEXT.split("const classifiers = [", 1)[1].split("const associations = [", 1)[0]
ASSOCIATION_BLOCK = DATA_TEXT.split("const associations = [", 1)[1].split("const diagrams = [", 1)[0]
CLASSES = {
    match.group(1): {"kind": match.group(2), "definition": quoted(match.group(3))}
    for match in re.finditer(
        r'name: "([A-Za-z]+)".*?kind: "([^"]+)".*?definition: "((?:\\.|[^"\\])*)"',
        CLASS_BLOCK,
        re.S,
    )
}
ASSOCIATIONS = {
    match.group(1): quoted(match.group(2))
    for match in re.finditer(
        r'name: "(A_[A-Za-z_]+)", ru: "(?:\\.|[^"\\])*", section: "(?:\\.|[^"\\])*", page: \d+,\s+definition: "((?:\\.|[^"\\])*)"',
        ASSOCIATION_BLOCK,
        re.S,
    )
}
XMI_TEXT = XMI_PATH.read_text(encoding="utf-8")
XMI = json.loads(re.search(r"=\s*(\{.*\});?\s*$", XMI_TEXT, re.S).group(1))
PROPERTY_DESCRIPTIONS = {}
for class_name, class_data in XMI["classes"].items():
    for group in ("direct", "inherited"):
        for prop in class_data.get(group, []):
            PROPERTY_DESCRIPTIONS[(class_name, prop["name"])] = prop["description"]


STYLE = """
  .background, .class-box, .package-box, .note-box { fill: #ffffff; }
  .class-box, .package-box, .note-box, .association, .generalization-line,
  .class-divider, .example-association, .dependency-line, .note-link { stroke: #111111; stroke-width: 1.4; }
  .association, .generalization-line, .class-divider, .example-association,
  .dependency-line, .note-link { fill: none; }
  .class-divider { stroke-width: 1; }
  text { fill: #111111; font-family: Arial, Helvetica, sans-serif; font-size: 16px; }
  .class-name { font-weight: 700; }
  .abstract { font-style: italic; }
  .attribute, .operation { font-size: 14px; }
  .association-end, .association-label, .example-association-group .example-label { font-size: 14px; }
  .end-dot, .composition { fill: #111111; }
  .dependency-line, .note-link { stroke-dasharray: 7 5; }
  .template-signature { stroke-dasharray: 4 3; }
  a { cursor: pointer; }
  a:hover .class-box, a:hover .note-box { fill: #eef3fb; stroke: #1e3a8a; }
  a:focus-visible { outline: none; }
  a:focus-visible .class-box, a:focus-visible .note-box { stroke: #7c3aed; stroke-width: 3; }
  .association, .example-association, .dependency-line { pointer-events: stroke; }
  .association-hitbox { fill: none; stroke: transparent; stroke-width: 12; pointer-events: stroke; }
  .association-group:hover .association, .example-association-group:hover .example-association,
  .dependency-group:hover .dependency-line { stroke: #1e3a8a; stroke-width: 2.2; }
  .association-group:hover text, .example-association-group:hover text,
  .dependency-group:hover text { fill: #1e3a8a; }
  .association-group:hover .end-dot, .association-group:hover .composition,
  .example-association-group:hover .end-dot { fill: #1e3a8a; }
  .association-end { cursor: help; }
""".strip()


class Svg:
    def __init__(self, figure, title, description, width, height):
        self.figure = figure
        self.width = width
        self.height = height
        self.parts = []
        self.title = title
        self.description = description

    def add(self, value):
        self.parts.append(value)

    def render(self):
        return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{self.width}" height="{self.height}" viewBox="0 0 {self.width} {self.height}" role="img" aria-labelledby="diagram-title diagram-description" data-figure="{self.figure}">
  <title id="diagram-title">Рисунок {self.figure} — {escape(self.title)}</title>
  <desc id="diagram-description">{escape(self.description)}</desc>
  <defs>
    <marker id="generalization" markerWidth="15" markerHeight="16" refX="13" refY="8" orient="auto" markerUnits="userSpaceOnUse"><path d="M 1 1 L 13 8 L 1 15 Z" fill="#ffffff" stroke="#111111" stroke-width="1.4"/></marker>
    <marker id="navigation" markerWidth="9" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M 1 1 L 8 5 L 1 9" fill="none" stroke="context-stroke" stroke-width="1.2"/></marker>
    <marker id="navigation-start" markerWidth="9" markerHeight="10" refX="8" refY="5" orient="auto-start-reverse" markerUnits="userSpaceOnUse"><path d="M 1 1 L 8 5 L 1 9" fill="none" stroke="context-stroke" stroke-width="1.2"/></marker>
    <style>{STYLE}</style>
  </defs>
  <rect class="background" width="{self.width}" height="{self.height}"/>
  {chr(10).join(self.parts)}
</svg>
'''


def text(value, x, y, anchor="start", css="", title=""):
    class_attr = f' class="{css}"' if css else ""
    anchor_attr = f' text-anchor="{anchor}"' if anchor != "start" else ""
    tooltip = f"<title>{escape(title)}</title>" if title else ""
    return f'<text{class_attr} x="{x}" y="{y}"{anchor_attr}>{tooltip}{escape(value)}</text>'


def class_node(svg, name, x, y, width, height, attributes=None, operations=None, stereotype="", example=False, tooltip=""):
    attributes = attributes or []
    operations = operations or []
    known = None if example else CLASSES.get(name)
    definition = tooltip or (known["definition"] if known else f"Пример класса {name}.")
    abstract = known and known["kind"] == "Abstract Class"
    header = 50 if stereotype else 32
    href = f'../../index.html#/classifier/{slug(name)}'
    tag = "g" if example or not known else "a"
    link_attrs = "" if tag == "g" else f' href="{href}" target="_top" aria-label="{escape(name)} — открыть описание класса"'
    svg.add(f'<{tag} class="class-node" data-classifier="{escape(name)}"{link_attrs}><title>{escape(name)}. {escape(definition)}</title>')
    svg.add(f'<rect class="class-box" x="{x}" y="{y}" width="{width}" height="{height}"/>')
    svg.add(f'<line class="class-divider" x1="{x}" y1="{y + header}" x2="{x + width}" y2="{y + header}"/>')
    if stereotype:
        svg.add(text(stereotype, x + width / 2, y + 19, "middle"))
        svg.add(text(name, x + width / 2, y + 41, "middle", "class-name" + (" abstract" if abstract else "")))
    else:
        svg.add(text(name, x + width / 2, y + 23, "middle", "class-name" + (" abstract" if abstract else "")))
    line_y = y + header + 22
    for attribute in attributes:
        svg.add(text(attribute, x + 10, line_y, css="attribute"))
        line_y += 21
    if operations:
        operation_top = line_y - 12
        svg.add(f'<line class="class-divider" x1="{x}" y1="{operation_top}" x2="{x + width}" y2="{operation_top}"/>')
        for operation in operations:
            if operation:
                svg.add(text(operation, x + 10, operation_top + 21, css="operation"))
            operation_top += 21
    svg.add(f'</{tag}>')


def generalization(svg, path, marker=True, child="", parent="", dashed=False):
    marker_attr = ' marker-end="url(#generalization)"' if marker else ""
    data = f' data-child="{escape(child)}" data-parent="{escape(parent)}"' if child and parent else ""
    css = "generalization-line dependency-line" if dashed else "generalization-line"
    svg.add(f'<path class="{css}" d="{path}"{data}{marker_attr}/>' )


def association(svg, name, path, start, end, markers="", decorations="", labels=None):
    definition = ASSOCIATIONS[name]
    svg.add(f'<a class="association-link" href="../../index.html#/association/{slug(name)}" target="_top" aria-label="Открыть описание ассоциации {escape(name)}">')
    svg.add(f'<g class="association-group" id="{name}"><title>{escape(definition)}</title>')
    svg.add(f'<path class="association" d="{path}"{markers}/><path class="association-hitbox" d="{path}" aria-hidden="true"/>')
    svg.add(decorations)
    for owner, prop, label_value, x, y, anchor in (start, end):
        description = PROPERTY_DESCRIPTIONS.get((owner, prop), f"{prop}. {definition}")
        svg.add(text(label_value, x, y, anchor, "association-end", description))
    for label_value, x, y, anchor in labels or []:
        svg.add(text(label_value, x, y, anchor, "association-label"))
    svg.add('</g></a>')


def example_association(svg, path, labels=None, markers=' marker-end="url(#navigation)"', title="Ассоциация между элементами примера."):
    svg.add(f'<g class="example-association-group"><title>{escape(title)}</title><path class="example-association" d="{path}"{markers}/><path class="association-hitbox" d="{path}" aria-hidden="true"/>')
    for label_value, x, y, anchor in labels or []:
        svg.add(text(label_value, x, y, anchor, "example-label"))
    svg.add('</g>')


def dependency(svg, path, label_value, label_x, label_y, title, href="", alias=""):
    marker = ' marker-end="url(#navigation)"'
    content = f'<path class="dependency-line" d="{path}"{marker}/>{text(label_value, label_x, label_y, "middle")}'
    if alias:
        content += text(alias, label_x, label_y + 21, "middle", "example-label")
    tooltip = f'<title>{escape(title)}</title>'
    if href:
        svg.add(f'<a class="dependency-group" href="{href}" target="_top">{tooltip}{content}</a>')
    else:
        svg.add(f'<g class="dependency-group">{tooltip}{content}</g>')


def note(svg, x, y, width, height, lines, href="", title=""):
    fold = 18
    shape = f'M {x} {y} H {x + width - fold} L {x + width} {y + fold} V {y + height} H {x} Z M {x + width - fold} {y} V {y + fold} H {x + width}'
    content = f'<path class="note-box" d="{shape}"/>'
    for index, line in enumerate(lines):
        content += text(line, x + 12, y + 25 + index * 22, css="attribute")
    if href:
        svg.add(f'<a href="{href}" target="_top"><title>{escape(title)}</title>{content}</a>')
    else:
        svg.add(f'<g><title>{escape(title)}</title>{content}</g>')


def package(svg, name, x, y, width, height, tab_width=190, tooltip=""):
    svg.add(f'<g class="package-node"><title>{escape(tooltip or f"Пакет {name}.")}</title>')
    svg.add(f'<path class="package-box" d="M {x} {y} H {x + tab_width} V {y + 30} H {x + width} V {y + height} H {x} Z"/>')
    svg.add(text(name, x + tab_width / 2, y + 21, "middle", "class-name"))
    svg.add('</g>')


def diamond(x, y, direction="right"):
    points = {
        "right": f'{x},{y} {x + 8},{y - 8} {x + 16},{y} {x + 8},{y + 8}',
        "left": f'{x},{y} {x - 8},{y - 8} {x - 16},{y} {x - 8},{y + 8}',
        "down": f'{x},{y} {x - 8},{y + 8} {x},{y + 16} {x + 8},{y + 8}',
        "up": f'{x},{y} {x - 8},{y - 8} {x},{y - 16} {x + 8},{y - 8}',
    }
    return f'<polygon class="composition" points="{points[direction]}"/>'


def dot(x, y):
    return f'<circle class="end-dot" cx="{x}" cy="{y}" r="3"/>'


def figure_7_2():
    svg = Svg("7.2", "Обозначение комментария", "Примечание с текстом комментария связано пунктирной линией с классом Account.", 800, 190)
    note(svg, 40, 30, 320, 115, ["This class was added", "by Alan Wright after", "meeting with the", "mission planning team."], "../../index.html#/classifier/comment", CLASSES["Comment"]["definition"])
    svg.add('<path class="note-link" d="M 360 92 H 500"/>')
    class_node(svg, "Account", 500, 65, 150, 55, example=True)
    return svg


def figure_7_3():
    svg = Svg("7.3", "Шаблоны", "Метаклассы TemplateSignature, TemplateParameter, TemplateableElement и ParameterableElement, их обобщения и ассоциации.", 1300, 940)
    class_node(svg, "Element", 590, 30, 120, 45)
    class_node(svg, "TemplateSignature", 130, 170, 200, 60)
    class_node(svg, "TemplateableElement", 900, 170, 230, 60)
    class_node(svg, "TemplateParameter", 130, 500, 200, 310)
    class_node(svg, "ParameterableElement", 900, 500, 240, 310)
    class_node(svg, "Element", 590, 865, 120, 45)
    generalization(svg, "M 230 170 V 100 H 650 V 75", child="TemplateSignature", parent="Element")
    generalization(svg, "M 1015 170 V 100 H 650", False)
    generalization(svg, "M 230 810 V 845 H 650 V 865", child="TemplateParameter", parent="Element")
    generalization(svg, "M 1020 810 V 845 H 650", False)

    association(svg, "A_ownedTemplateSignature_template", "M 330 195 H 900",
        ("TemplateSignature", "template", "+ template", 350, 175, "start"),
        ("TemplateableElement", "ownedTemplateSignature", "+ ownedTemplateSignature", 880, 175, "end"),
        ' marker-start="url(#navigation-start)"', dot(330, 195) + diamond(900, 195, "left"),
        [("{subsets owner}", 350, 159, "start"), ("0..1", 350, 225, "start"),
         ("{subsets ownedElement}", 880, 159, "end"), ("1", 880, 225, "end")])
    association(svg, "A_ownedParameter_signature", "M 190 230 V 500",
        ("TemplateParameter", "signature", "+ signature", 170, 253, "end"),
        ("TemplateSignature", "ownedParameter", "+ ownedParameter", 160, 490, "end"),
        ' marker-end="url(#navigation)"', diamond(190, 230, "down") + dot(190, 500),
        [("{subsets templateSignature,", 178, 269, "end"), ("subsets owner}", 178, 285, "end"), ("1", 178, 301, "end"),
         ("{ordered, subsets ownedElement,", 178, 458, "end"), ("subsets parameter}", 178, 474, "end"), ("1..*", 40, 535, "end")])
    association(svg, "A_parameter_templateSignature", "M 275 230 V 500",
        ("TemplateParameter", "templateSignature", "+ templateSignature", 287, 253, "start"),
        ("TemplateSignature", "parameter", "+ parameter", 340, 477, "start"),
        ' marker-end="url(#navigation)"', dot(275, 230),
        [("0..1", 287, 269, "start"), ("{ordered}", 287, 323, "start"), ("1..*", 340, 460, "start")])

    association(svg, "A_ownedParameteredElement_owningTemplateParameter", "M 330 540 H 900",
        ("ParameterableElement", "owningTemplateParameter", "+ owningTemplateParameter", 350, 525, "start"),
        ("TemplateParameter", "ownedParameteredElement", "+ ownedParameteredElement", 880, 515, "end"),
        ' marker-start="url(#navigation-start)"', dot(330, 540) + diamond(900, 540, "left"),
        [("{subsets owner, templateParameter}", 350, 509, "start"), ("0..1", 350, 564, "start"),
         ("{subsets ownedElement, parameteredElement}", 880, 499, "end"), ("0..1", 880, 575, "end")])
    association(svg, "A_parameteredElement_templateParameter", "M 330 630 H 900",
        ("ParameterableElement", "templateParameter", "+ templateParameter", 350, 615, "start"),
        ("TemplateParameter", "parameteredElement", "+ parameteredElement", 880, 615, "end"),
        ' marker-start="url(#navigation-start)"', dot(330, 630) + dot(900, 630),
        [("0..1", 350, 654, "start"), ("1", 880, 654, "end")])
    association(svg, "A_default_templateParameter", "M 330 700 H 900",
        ("ParameterableElement", "default", "+ default", 350, 685, "start"),
        ("TemplateParameter", "templateParameter", "+ templateParameter", 880, 685, "end"),
        ' marker-end="url(#navigation)"', dot(330, 700),
        [("0..1", 350, 730, "start"), ("0..1", 880, 730, "end")])
    association(svg, "A_ownedDefault_templateParameter", "M 330 800 H 900",
        ("ParameterableElement", "ownedDefault", "+ ownedDefault", 350, 780, "start"),
        ("TemplateParameter", "templateParameter", "+ templateParameter", 880, 780, "end"),
        ' marker-end="url(#navigation)"', diamond(330, 800, "right"),
        [("{subsets ownedElement, default}", 350, 764, "start"), ("0..1", 350, 835, "start"),
         ("{subsets owner, redefines templateParameter}", 880, 764, "end"), ("0..1", 880, 835, "end")])
    return svg


def figure_7_4():
    svg = Svg("7.4", "Привязки шаблонов", "Метаклассы TemplateParameterSubstitution, TemplateBinding и связанные элементы шаблонов.", 1400, 870)
    class_node(svg, "Element", 540, 30, 120, 45)
    class_node(svg, "TemplateParameter", 60, 140, 210, 65)
    class_node(svg, "ParameterableElement", 40, 285, 230, 115)
    class_node(svg, "TemplateParameterSubstitution", 800, 130, 330, 290)
    class_node(svg, "TemplateableElement", 50, 540, 220, 65)
    class_node(svg, "TemplateSignature", 100, 680, 200, 65)
    class_node(svg, "TemplateBinding", 850, 560, 220, 225)
    class_node(svg, "DirectedRelationship", 840, 810, 240, 45)
    generalization(svg, "M 965 130 V 90 H 600 V 75", child="TemplateParameterSubstitution", parent="Element")
    generalization(svg, "M 960 785 V 810", child="TemplateBinding", parent="DirectedRelationship")

    association(svg, "A_formal_templateParameterSubstitution", "M 270 165 H 800",
        ("TemplateParameterSubstitution", "formal", "+ formal", 282, 150, "start"),
        ("TemplateParameter", "templateParameterSubstitution", "+ templateParameterSubstitution", 788, 150, "end"),
        ' marker-start="url(#navigation-start)"', dot(800, 165), [("1", 282, 189, "start"), ("*", 788, 189, "end")])
    association(svg, "A_actual_templateParameterSubstitution", "M 270 315 H 800",
        ("TemplateParameterSubstitution", "actual", "+ actual", 282, 300, "start"),
        ("TemplateParameter", "templateParameterSubstitution", "+ templateParameterSubstitution", 788, 300, "end"),
        ' marker-start="url(#navigation-start)"', dot(800, 315), [("1", 282, 339, "start"), ("*", 788, 339, "end")])
    association(svg, "A_ownedActual_owningTemplateParameterSubstitution", "M 270 395 H 800",
        ("TemplateParameterSubstitution", "owningTemplateParameterSubstitution", "+ owningTemplateParameterSubstitution", 282, 420, "start"),
        ("TemplateParameterSubstitution", "ownedActual", "+ ownedActual", 780, 375, "end"),
        ' marker-start="url(#navigation-start)"', diamond(800, 395, "left"),
        [("0..1", 282, 452, "start"), ("{subsets owner, redefines templateParameterSubstitution}", 282, 436, "start"),
         ("{subsets ownedElement, actual}", 780, 359, "end"), ("*", 780, 430, "end")])
    association(svg, "A_parameterSubstitution_templateBinding", "M 965 420 V 560",
        ("TemplateParameterSubstitution", "templateBinding", "+ templateBinding", 953, 533, "end"),
        ("TemplateBinding", "parameterSubstitution", "+ parameterSubstitution", 985, 443, "start"),
        ' marker-start="url(#navigation-start)"', diamond(965, 560, "up") + dot(965, 420),
        [("{subsets owner}", 953, 501, "end"), ("1", 953, 517, "end"),
         ("{subsets ownedElement}", 985, 475, "start"), ("*", 985, 459, "start")])
    association(svg, "A_templateBinding_boundElement", "M 270 570 H 850",
        ("TemplateBinding", "boundElement", "+ boundElement", 282, 555, "start"),
        ("TemplateableElement", "templateBinding", "+ templateBinding", 838, 555, "end"),
        ' marker-end="url(#navigation)"', diamond(270, 570, "right") + dot(850, 570),
        [("{subsets source, owner}", 282, 539, "start"), ("1", 282, 605, "start"),
         ("{subsets directedRelationship, ownedElement}", 838, 539, "end"), ("*", 838, 594, "end")])
    association(svg, "A_signature_templateBinding", "M 300 700 H 850",
        ("TemplateBinding", "signature", "+ signature", 312, 685, "start"),
        ("TemplateSignature", "templateBinding", "+ templateBinding", 838, 685, "end"),
        ' marker-start="url(#navigation-start)"', dot(850, 700),
        [("{subsets target}", 312, 669, "start"), ("1", 312, 724, "start"),
         ("{subsets directedRelationship}", 838, 669, "end"), ("*", 838, 724, "end")])
    return svg


def figure_7_5():
    svg = Svg("7.5", "Пространства имён", "Метамодель пространств имён, импорта элементов и пакетов, видимости и ограничений.", 1400, 1180)
    class_node(svg, "Element", 620, 30, 120, 45)
    class_node(svg, "NamedElement", 300, 145, 360, 145, ["+ name : String [0..1]", "+ /qualifiedName : String [0..1] {readOnly}", "+ visibility : VisibilityKind [0..1]"])
    class_node(svg, "Namespace", 250, 470, 220, 190)
    class_node(svg, "StringExpression", 1010, 170, 220, 60)
    class_node(svg, "VisibilityKind", 1130, 30, 180, 150, ["public", "private", "protected", "package"], stereotype="«enumeration»")
    class_node(svg, "ParameterableElement", 980, 260, 230, 50)
    class_node(svg, "PackageableElement", 960, 350, 260, 70, ["+ visibility : VisibilityKind [0..1] = public"])
    class_node(svg, "ElementImport", 960, 640, 240, 90, ["+ alias : String [0..1]", "+ visibility : VisibilityKind = public"])
    class_node(svg, "DirectedRelationship", 960, 775, 240, 50)
    class_node(svg, "PackageImport", 960, 890, 240, 90, ["+ visibility : VisibilityKind = public"])
    class_node(svg, "Constraint", 700, 920, 180, 55)
    class_node(svg, "Package", 1120, 1120, 150, 55)
    generalization(svg, "M 480 145 V 100 H 680 V 75", child="NamedElement", parent="Element")
    generalization(svg, "M 360 470 V 290", child="Namespace", parent="NamedElement")
    generalization(svg, "M 1090 350 V 310", child="PackageableElement", parent="ParameterableElement")
    generalization(svg, "M 1080 730 V 775", child="ElementImport", parent="DirectedRelationship")
    generalization(svg, "M 1080 890 V 825", child="PackageImport", parent="DirectedRelationship")

    association(svg, "A_member_memberNamespace", "M 300 180 H 20 V 500 H 250",
        ("NamedElement", "member", "+ /member", 288, 165, "end"),
        ("Namespace", "memberNamespace", "+ /memberNamespace", 238, 485, "end"),
        ' marker-start="url(#navigation-start)"', dot(300, 180),
        [("{readOnly, union}", 288, 149, "end"), ("*", 288, 210, "end"),
         ("{readOnly, union}", 238, 453, "end"), ("0..1", 238, 469, "end")])
    association(svg, "A_ownedMember_namespace", "M 300 250 H 50 V 575 H 250",
        ("Namespace", "namespace", "+ /namespace", 288, 235, "end"),
        ("Namespace", "ownedMember", "+ /ownedMember", 238, 555, "end"),
        ' marker-start="url(#navigation-start)"', dot(300, 250) + diamond(250, 575, "left"),
        [("{readOnly, union, subsets", 288, 275, "end"), ("memberNamespace, owner}", 288, 291, "end"), ("0..1", 288, 307, "end"),
         ("{readOnly, union,", 238, 600, "end"), ("subsets member,", 238, 616, "end"), ("subsets ownedElement}", 238, 632, "end"), ("*", 238, 648, "end")])
    association(svg, "A_nameExpression_namedElement", "M 660 200 H 1010",
        ("NamedElement", "nameExpression", "+ nameExpression", 680, 185, "start"),
        ("NamedElement", "namedElement", "+ namedElement", 990, 185, "end"),
        ' marker-end="url(#navigation)"', diamond(660, 200, "right") + dot(1010, 200),
        [("{subsets ownedElement}", 680, 169, "start"), ("0..1", 680, 230, "start"),
         ("{subsets owner}", 990, 169, "end"), ("0..1", 990, 230, "end")])
    association(svg, "A_importedMember_namespace", "M 470 500 H 750 V 385 H 960",
        ("Namespace", "importedMember", "+ /importedMember", 482, 485, "start"),
        ("PackageableElement", "namespace", "+ namespace", 940, 370, "end"),
        "", dot(470, 500),
        [("{readOnly, subsets member}", 482, 469, "start"), ("*", 482, 524, "start"),
         ("{subsets memberNamespace}", 940, 354, "end"), ("0..1", 940, 409, "end")])
    association(svg, "A_importedElement_import", "M 1120 420 V 640",
        ("ElementImport", "importedElement", "+ importedElement", 1132, 443, "start"),
        ("PackageableElement", "import", "+ import", 1132, 625, "start"),
        ' marker-start="url(#navigation-start)"', dot(1120, 640),
        [("{subsets target}", 1132, 459, "start"), ("1", 1132, 475, "start"),
         ("{subsets directedRelationship}", 1132, 609, "start"), ("*", 1212, 680, "start")])
    association(svg, "A_elementImport_importingNamespace", "M 470 575 H 750 V 675 H 960",
        ("Namespace", "elementImport", "+ elementImport", 482, 560, "start"),
        ("ElementImport", "importingNamespace", "+ importingNamespace", 940, 660, "end"),
        ' marker-end="url(#navigation)"', diamond(470, 575, "right") + dot(960, 675),
        [("{subsets directedRelationship, ownedElement}", 482, 544, "start"), ("*", 482, 605, "start"),
         ("{subsets source, owner}", 940, 644, "end"), ("1", 940, 699, "end")])
    association(svg, "A_packageImport_importingNamespace", "M 420 660 V 850 H 948 V 925 H 960",
        ("Namespace", "packageImport", "+ packageImport", 432, 697, "start"),
        ("PackageImport", "importingNamespace", "+ importingNamespace", 940, 910, "end"),
        ' marker-end="url(#navigation)"', diamond(420, 660, "down") + dot(960, 925),
        [("{subsets directedRelationship, ownedElement}", 432, 713, "start"), ("*", 432, 729, "start"),
         ("{subsets source, owner}", 940, 894, "end"), ("1", 940, 949, "end")])
    association(svg, "A_importedPackage_packageImport", "M 1195 980 V 1120",
        ("PackageImport", "packageImport", "+ packageImport", 1183, 1004, "end"),
        ("PackageImport", "importedPackage", "+ importedPackage", 1207, 1095, "start"),
        ' marker-end="url(#navigation)"', dot(1195, 980),
        [("{subsets directedRelationship}", 1183, 1020, "end"), ("*", 1183, 1036, "end"),
         ("{subsets target}", 1207, 1063, "start"), ("1", 1220, 1079, "start")])
    association(svg, "A_ownedRule_context", "M 300 660 V 947 H 700",
        ("Constraint", "context", "+ context", 288, 697, "end"),
        ("Namespace", "ownedRule", "+ ownedRule", 688, 932, "end"),
        ' marker-end="url(#navigation)"', diamond(300, 660, "down") + dot(700, 947),
        [("{subsets namespace}", 288, 713, "end"), ("0..1", 288, 729, "end"),
         ("{subsets ownedMember}", 688, 916, "end"), ("*", 688, 971, "end")])
    return svg


def figure_7_10():
    svg = Svg("7.10", "Абстрактный синтаксис типов и кратности", "Метаклассы Type, TypedElement, MultiplicityElement и ValueSpecification.", 1100, 660)
    class_node(svg, "NamedElement", 100, 40, 190, 50)
    class_node(svg, "TypedElement", 100, 170, 190, 60)
    class_node(svg, "PackageableElement", 700, 40, 240, 50)
    class_node(svg, "Type", 770, 170, 140, 60)
    class_node(svg, "Element", 400, 305, 120, 50)
    class_node(svg, "MultiplicityElement", 70, 440, 360, 160, ["+ isOrdered : Boolean = false", "+ isUnique : Boolean = true", "+ /lower : Integer", "+ /upper : UnlimitedNatural"])
    class_node(svg, "ValueSpecification", 790, 430, 260, 160)
    generalization(svg, "M 195 170 V 90", child="TypedElement", parent="NamedElement")
    generalization(svg, "M 840 170 V 90", child="Type", parent="PackageableElement")
    generalization(svg, "M 250 440 V 395 H 460 V 355", child="MultiplicityElement", parent="Element")
    association(svg, "A_type_typedElement", "M 290 195 H 770",
        ("Type", "typedElement", "+ typedElement", 302, 180, "start"),
        ("TypedElement", "type", "+ type", 758, 180, "end"),
        ' marker-end="url(#navigation)"', dot(770, 195), [("*", 302, 219, "start"), ("0..1", 758, 219, "end")])
    association(svg, "A_lowerValue_owningLower", "M 430 475 H 790",
        ("ValueSpecification", "owningLower", "+ owningLower", 442, 460, "start"),
        ("MultiplicityElement", "lowerValue", "+ lowerValue", 770, 460, "end"),
        ' marker-end="url(#navigation)"', diamond(430, 475, "right") + dot(790, 475),
        [("{subsets owner}", 442, 444, "start"), ("0..1", 442, 505, "start"),
         ("{subsets ownedElement}", 770, 444, "end"), ("0..1", 770, 505, "end")])
    association(svg, "A_upperValue_owningUpper", "M 430 575 H 790",
        ("ValueSpecification", "owningUpper", "+ owningUpper", 442, 560, "start"),
        ("MultiplicityElement", "upperValue", "+ upperValue", 770, 560, "end"),
        ' marker-end="url(#navigation)"', diamond(430, 575, "right") + dot(790, 575),
        [("{subsets owner}", 442, 544, "start"), ("0..1", 442, 605, "start"),
         ("{subsets ownedElement}", 770, 544, "end"), ("0..1", 770, 605, "end")])
    return svg


def figure_7_13():
    svg = Svg("7.13", "Абстрактный синтаксис ограничений", "Метакласс Constraint, его контекст, ограничиваемые элементы и спецификация.", 1250, 430)
    class_node(svg, "PackageableElement", 560, 30, 200, 50)
    class_node(svg, "Constraint", 520, 130, 240, 190)
    class_node(svg, "Namespace", 40, 190, 150, 55)
    class_node(svg, "Element", 960, 115, 140, 55)
    class_node(svg, "ValueSpecification", 1000, 280, 230, 65)
    generalization(svg, "M 640 130 V 80", child="Constraint", parent="PackageableElement")
    association(svg, "A_constrainedElement_constraint", "M 760 155 H 960",
        ("Element", "constraint", "+ constraint", 772, 140, "start"),
        ("Constraint", "constrainedElement", "+ constrainedElement", 948, 115, "end"),
        ' marker-end="url(#navigation)"', dot(760, 155),
        [("*", 772, 185, "start"), ("{ordered}", 948, 99, "end"), ("*", 948, 185, "end")])
    association(svg, "A_ownedRule_context", "M 190 225 H 520",
        ("Constraint", "context", "+ context", 202, 210, "start"),
        ("Namespace", "ownedRule", "+ ownedRule", 508, 210, "end"),
        "", diamond(190, 225, "right") + dot(520, 225),
        [("{subsets namespace}", 202, 194, "start"), ("0..1", 202, 255, "start"),
         ("{subsets ownedMember}", 508, 194, "end"), ("*", 508, 249, "end")])
    association(svg, "A_specification_owningConstraint", "M 760 285 H 1000",
        ("ValueSpecification", "owningConstraint", "+ owningConstraint", 772, 270, "start"),
        ("Constraint", "specification", "+ specification", 990, 245, "end"),
        ' marker-end="url(#navigation)"', diamond(760, 285, "right"),
        [("{subsets owner}", 772, 254, "start"), ("0..1", 772, 315, "start"),
         ("{subsets ownedElement}", 990, 350, "end"), ("1", 970, 366, "end")])
    return svg


def figure_7_17():
    svg = Svg("7.17", "Абстрактный синтаксис зависимостей", "Метаклассы Dependency, Abstraction, Realization, Usage и связанные классификаторы.", 1200, 650)
    class_node(svg, "DirectedRelationship", 580, 30, 240, 50)
    class_node(svg, "PackageableElement", 900, 30, 230, 50)
    class_node(svg, "NamedElement", 30, 160, 240, 150)
    class_node(svg, "Dependency", 600, 160, 220, 125)
    class_node(svg, "OpaqueExpression", 30, 405, 240, 65)
    class_node(svg, "Abstraction", 570, 405, 180, 65)
    class_node(svg, "Usage", 880, 300, 130, 60)
    class_node(svg, "Realization", 550, 550, 180, 60)
    generalization(svg, "M 700 160 V 80", child="Dependency", parent="DirectedRelationship")
    generalization(svg, "M 820 180 L 1015 80", child="Dependency", parent="PackageableElement")
    generalization(svg, "M 945 300 V 235 H 820", child="Usage", parent="Dependency")
    generalization(svg, "M 660 405 V 285", child="Abstraction", parent="Dependency")
    generalization(svg, "M 640 550 V 490 H 660 V 470", child="Realization", parent="Abstraction")
    association(svg, "A_supplier_supplierDependency", "M 270 185 H 600",
        ("Dependency", "supplier", "+ supplier", 282, 170, "start"),
        ("NamedElement", "supplierDependency", "+ supplierDependency", 588, 170, "end"),
        ' marker-start="url(#navigation-start)"', dot(270, 185) + dot(600, 185),
        [("{subsets target}", 282, 154, "start"), ("1..*", 282, 209, "start"),
         ("{subsets directedRelationship}", 588, 154, "end"), ("*", 588, 209, "end")])
    association(svg, "A_clientDependency_client", "M 270 260 H 600",
        ("Dependency", "client", "+ client", 282, 245, "start"),
        ("NamedElement", "clientDependency", "+ /clientDependency", 588, 245, "end"),
        ' marker-start="url(#navigation-start)"', dot(270, 260) + dot(600, 260),
        [("{subsets source}", 282, 300, "start"), ("1..*", 282, 284, "start"),
         ("{subsets directedRelationship}", 588, 229, "end"), ("*", 588, 284, "end")])
    association(svg, "A_mapping_abstraction", "M 270 435 H 570",
        ("Abstraction", "mapping", "+ mapping", 282, 420, "start"),
        ("OpaqueExpression", "abstraction", "+ abstraction", 550, 415, "end"),
        ' marker-start="url(#navigation-start)"', dot(270, 435) + diamond(570, 435, "left"),
        [("{subsets ownedElement}", 282, 404, "start"), ("0..1", 282, 467, "start"),
         ("{subsets owner}", 550, 399, "end"), ("0..1", 550, 467, "end")])
    return svg


def figure_7_6():
    svg = Svg("7.6", "Пакет-шаблон со строковыми параметрами", "Шаблон ResourceAllocation с параметрами Resource, ResourceKind и System и два варианта привязки TrainingAdmin.", 1100, 940)
    package(svg, "ResourceAllocation", 30, 150, 960, 570, 260)
    svg.add('<rect class="note-box template-signature" x="790" y="25" width="270" height="105"/>')
    svg.add(text("Resource: StringExpression,", 802, 50, css="attribute"))
    svg.add(text("ResourceKind: StringExpression,", 802, 74, css="attribute"))
    svg.add(text("System", 802, 98, css="attribute"))
    svg.add('<path class="note-link" d="M 925 130 V 150"/>')
    class_node(svg, "$<Resource>$", 80, 250, 175, 80, example=True)
    class_node(svg, "Allocation", 400, 250, 230, 85, ["$<Resource>Allocation$"], example=True)
    class_node(svg, "$<ResourceKind>$", 70, 500, 195, 80, example=True)
    class_node(svg, "TimeSlot", 290, 385, 160, 70, example=True)
    class_node(svg, "Request", 480, 500, 180, 80, example=True)
    class_node(svg, "System", 790, 365, 170, 80, example=True)
    example_association(svg, "M 400 285 H 255", [("resource", 330, 270, "middle"), ("1", 267, 309, "start")], title="Ресурс, участвующий в распределении.")
    example_association(svg, "M 135 500 V 330", [("resource", 147, 355, "start"), ("*", 147, 475, "start")], title="Ресурсы выбранного вида.")
    example_association(svg, "M 480 535 H 265", [("$the<ResourceKind>$", 370, 520, "middle"), ("1", 277, 559, "start")], title="Вид ресурса запроса.")
    example_association(svg, "M 515 335 V 500", [("1", 527, 475, "start")], title="Запрос на распределение.")
    example_association(svg, "M 790 385 H 710 V 285 H 630", [("allocation", 745, 240, "middle"), ("$a<Resource>Allocation$", 698, 360, "end"), ("*", 642, 309, "start")], title="Распределения, назначенные системе.")
    example_association(svg, "M 875 445 V 535 H 660", [("request", 720, 520, "middle"), ("*", 672, 559, "start")], title="Запросы, связанные с системой.")
    example_association(svg, "M 370 385 V 350 H 415 V 335", [("timeSlot", 382, 340, "end"), ("1", 427, 370, "start")], title="Временной интервал распределения.")
    example_association(svg, "M 167 250 V 215 H 875 V 365", [("$a<Resource>$", 167, 200, "middle"), ("*", 179, 239, "start")], title="Системные ресурсы шаблона.")
    example_association(svg, "M 167 580 V 675 H 875 V 445", [("$a<ResourceKind>$", 180, 660, "start"), ("*", 155, 660, "end")], title="Виды ресурсов, доступные системе.")
    class_node(svg, "TrainingAdmin", 470, 825, 220, 85, example=True)
    dependency(svg, "M 520 825 L 275 720", "«bind»", 200, 765, "Привязка Resource → Instructor, ResourceKind → Qualification, System → TrainingAdminSystem.", "../../index.html#/classifier/templatebinding")
    svg.add(text('Resource -> "Instructor",', 100, 790, css="example-label"))
    svg.add(text('ResourceKind -> "Qualification",', 100, 812, css="example-label"))
    svg.add(text("System -> TrainingAdminSystem", 100, 834, css="example-label"))
    dependency(svg, "M 620 825 L 835 720", "«bind»", 800, 765, "Привязка Resource → Facility, ResourceKind → FacilitySpecification, System → TrainingAdminSystem.", "../../index.html#/classifier/templatebinding")
    svg.add(text('Resource -> "Facility",', 735, 790, css="example-label"))
    svg.add(text('ResourceKind -> "FacilitySpecification",', 735, 812, css="example-label"))
    svg.add(text("System -> TrainingAdminSystem", 735, 834, css="example-label"))
    return svg


def figure_7_7():
    svg = Svg("7.7", "Пример импорта элемента", "Пакет Program импортирует типы String и Time из пакета Types.", 800, 330)
    package(svg, "Program", 35, 180, 170, 100, 75)
    package(svg, "Types", 450, 35, 280, 280, 95)
    class_node(svg, "String", 500, 85, 150, 65, stereotype="«datatype»", example=True)
    class_node(svg, "Integer", 520, 160, 150, 65, stereotype="«datatype»", example=True)
    class_node(svg, "Time", 480, 240, 150, 65, stereotype="«datatype»", example=True)
    dependency(svg, "M 205 205 L 500 120", "«access»", 340, 145, CLASSES["ElementImport"]["definition"], "../../index.html#/classifier/elementimport")
    dependency(svg, "M 205 270 H 480", "«import»", 340, 250, CLASSES["ElementImport"]["definition"], "../../index.html#/classifier/elementimport")
    return svg


def figure_7_8():
    svg = Svg("7.8", "Импорт элемента с псевдонимом", "Пакет Shapes импортирует Real из Types под псевдонимом Double.", 850, 250)
    package(svg, "Types", 35, 65, 250, 155, 95)
    package(svg, "Shapes", 565, 65, 250, 155, 100)
    class_node(svg, "Real", 75, 120, 140, 65, stereotype="«datatype»", example=True)
    class_node(svg, "Circle", 605, 115, 170, 85, ["radius : Double"], example=True)
    dependency(svg, "M 605 155 H 215", "«import»", 410, 125, CLASSES["ElementImport"]["definition"], "../../index.html#/classifier/elementimport", "Double")
    return svg


def figure_7_9():
    svg = Svg("7.9", "Открытый и закрытый импорт пакетов", "ShoppingCart открыто импортирует Auxiliary, закрыто импортирует Types и открыто импортируется в WebShop.", 850, 310)
    package(svg, "Auxiliary", 35, 35, 200, 85, 65)
    package(svg, "Types", 35, 205, 200, 85, 65)
    package(svg, "ShoppingCart", 325, 120, 230, 85, 220)
    package(svg, "WebShop", 650, 100, 175, 85, 60)
    dependency(svg, "M 325 200 L 235 85", "«access»", 285, 70, CLASSES["PackageImport"]["definition"], "../../index.html#/classifier/packageimport")
    dependency(svg, "M 325 190 L 235 240", "«import»", 340, 230, CLASSES["PackageImport"]["definition"], "../../index.html#/classifier/packageimport")
    dependency(svg, "M 650 150 H 555", "«import»", 602, 130, CLASSES["PackageImport"]["definition"], "../../index.html#/classifier/packageimport")
    return svg


def figure_7_11():
    svg = Svg("7.11", "Кратность в текстовой спецификации", "Атрибуты Customer демонстрируют кратность, упорядоченность и уникальность.", 650, 250)
    class_node(svg, "Customer", 50, 40, 560, 160, ["purchase : Purchase [*] {ordered, unique}", "account : Account [0..5] {unique}"], [""], example=True, tooltip="Пример спецификации кратности атрибутов.")
    return svg


def figure_7_12():
    svg = Svg("7.12", "Кратность как дополнение к обозначению", "Кратность и свойства концов ассоциаций между Purchase, Customer и Account.", 900, 240)
    class_node(svg, "Purchase", 35, 90, 150, 65, example=True)
    class_node(svg, "Customer", 375, 90, 160, 65, example=True)
    class_node(svg, "Account", 715, 90, 150, 65, example=True)
    example_association(svg, "M 375 120 H 185", [("purchase", 197, 105, "start"), ("*", 197, 144, "start"), ("{ordered, unique}", 197, 160, "start")], title="Покупки клиента: упорядоченное множество без повторов.")
    example_association(svg, "M 535 120 H 715", [("account", 703, 105, "end"), ("{unique}", 703, 160, "end"), ("0..5", 703, 144, "end")], title="Счета клиента: не более пяти уникальных значений.")
    return svg


def figure_7_14():
    svg = Svg("7.14", "Ограничение в примечании", "Ограничение связывает роли boss и employer в ассоциациях Person и Company.", 850, 420)
    class_node(svg, "Person", 120, 125, 150, 65, example=True)
    class_node(svg, "Company", 600, 125, 170, 65, example=True)
    example_association(svg, "M 195 125 V 55 H 55 V 157 H 120", [("boss", 207, 90, "start"), ("0..1", 207, 106, "start")], title="Необязательный руководитель Person.")
    example_association(svg, "M 270 157 H 600", [("employee", 282, 140, "start"), ("employer", 588, 140, "end"), ("*", 282, 181, "start"), ("0..1", 588, 181, "end")], markers="", title="Связь сотрудника и работодателя.")
    note(svg, 180, 300, 390, 90, ["{self.boss->isEmpty() or", "self.employer = self.boss.employer}"], "../../index.html#/classifier/constraint", CLASSES["Constraint"]["definition"])
    svg.add('<path class="note-link" d="M 250 300 L 195 190"/>')
    return svg


def figure_7_15():
    svg = Svg("7.15", "Ограничение, связанное с атрибутом", "Ограничение size >= 0 записано рядом с атрибутом класса Stack.", 500, 290)
    class_node(svg, "Stack", 55, 45, 330, 190, ["size: Integer {size >= 0}"], ["push()", "pop()"], example=True, tooltip="Атрибут size ограничен неотрицательными значениями.")
    return svg


def figure_7_16():
    svg = Svg("7.16", "Ограничение {xor}", "Две ассоциации Account исключают одновременную связь с Person и Corporation.", 750, 330)
    class_node(svg, "Account", 35, 135, 150, 65, example=True)
    class_node(svg, "Person", 500, 45, 160, 65, example=True)
    class_node(svg, "Corporation", 500, 240, 180, 65, example=True)
    example_association(svg, "M 185 155 L 500 85", markers="", title="Связь Account с Person.")
    example_association(svg, "M 185 180 L 500 260", markers="", title="Связь Account с Corporation.")
    svg.add('<path class="note-link" d="M 340 115 V 220"/>')
    svg.add(text("{xor}", 352, 170, css="class-name", title=CLASSES["Constraint"]["definition"]))
    return svg


def figure_7_18():
    svg = Svg("7.18", "Dependency между двумя элементами", "Пунктирная зависимость с открытым наконечником между двумя NamedElement.", 950, 200)
    class_node(svg, "NamedElement-1", 35, 70, 210, 80, example=True, tooltip="Клиент зависимости.")
    class_node(svg, "NamedElement-2", 705, 70, 210, 80, example=True, tooltip="Поставщик зависимости.")
    dependency(svg, "M 245 110 H 705", "«keywordOrStereotypeName»", 475, 75, CLASSES["Dependency"]["definition"], "../../index.html#/classifier/dependency", "dependencyName")
    return svg


def figure_7_19():
    svg = Svg("7.19", "Пример зависимости «Instantiate»", "CarFactory имеет зависимость Instantiate от Car.", 850, 180)
    class_node(svg, "CarFactory", 35, 60, 190, 80, example=True)
    class_node(svg, "Car", 625, 60, 190, 80, example=True)
    dependency(svg, "M 225 100 H 625", "«Instantiate»", 425, 80, CLASSES["Dependency"]["definition"], "../../index.html#/classifier/dependency")
    return svg


def figure_7_20():
    svg = Svg("7.20", "Пример зависимости «use»", "Order использует Line Item.", 750, 230)
    class_node(svg, "Order", 35, 75, 190, 85, example=True)
    class_node(svg, "Line Item", 525, 60, 190, 115, example=True)
    dependency(svg, "M 225 117 H 525", "«use»", 375, 92, CLASSES["Usage"]["definition"], "../../index.html#/classifier/usage")
    return svg


def figure_7_21():
    svg = Svg("7.21", "Пример зависимости Realization", "Owner и Employee реализуют Business; пунктирные линии заканчиваются общим незакрашенным треугольником.", 700, 360)
    class_node(svg, "Business", 260, 35, 180, 70, example=True)
    class_node(svg, "Owner", 55, 250, 180, 70, example=True)
    class_node(svg, "Employee", 465, 250, 180, 70, example=True)
    generalization(svg, "M 145 250 V 170 H 350 V 105", child="Owner", parent="Business", dashed=True)
    generalization(svg, "M 555 250 V 170 H 350", False, dashed=True)
    return svg


def figure_8_1():
    svg = Svg("8.1", "Литералы", "Иерархия наследования ValueSpecification: TypedElement и PackageableElement как родители ValueSpecification; LiteralSpecification как потомок ValueSpecification; шесть подтипов Literal — LiteralNull, LiteralInteger, LiteralUnlimitedNatural, LiteralString, LiteralBoolean, LiteralReal.", 1200, 730)
    class_node(svg, "TypedElement", 120, 40, 200, 60)
    class_node(svg, "PackageableElement", 780, 40, 240, 60)
    class_node(svg, "ValueSpecification", 425, 170, 250, 65)
    generalization(svg, f"M {425 + 125} 170 V 130 H 850 V 100", child="ValueSpecification", parent="PackageableElement")
    generalization(svg, "M 425 170 V 130 H 220 V 100", child="ValueSpecification", parent="TypedElement")
    class_node(svg, "LiteralSpecification", 425, 300, 250, 65)
    generalization(svg, f"M {425 + 125} 300 V 270 H {425 + 125} V 235", child="LiteralSpecification", parent="ValueSpecification")
    class_node(svg, "LiteralNull", 25, 480, 150, 55)
    generalization(svg, "M 100 480 V 420 H 550 V 365", marker=True, child="LiteralNull", parent="LiteralSpecification")
    class_node(svg, "LiteralInteger", 205, 480, 210, 70, attributes=["+ value : Integer = 0"])
    generalization(svg, "M 310 480 V 420 H 550 V 365", marker=False, child="LiteralInteger", parent="LiteralSpecification")
    class_node(svg, "LiteralUnlimitedNatural", 445, 480, 285, 70, attributes=["+ value : UnlimitedNatural = 0"])
    generalization(svg, "M 587.5 480 V 420 H 550 V 365", marker=False, child="LiteralUnlimitedNatural", parent="LiteralSpecification")
    class_node(svg, "LiteralString", 180, 590, 200, 70, attributes=["+ value : String [0..1]"])
    generalization(svg, "M 190 590 V 420 H 550 V 365", marker=False, child="LiteralString", parent="LiteralSpecification")
    class_node(svg, "LiteralBoolean", 410, 590, 220, 70, attributes=["+ value : Boolean = false"])
    generalization(svg, "M 425 590 V 420 H 550 V 365", marker=False, child="LiteralBoolean", parent="LiteralSpecification")
    class_node(svg, "LiteralReal", 670, 590, 180, 70, attributes=["+ value : Real"])
    generalization(svg, "M 760 590 V 420 H 550 V 365", marker=False, child="LiteralReal", parent="LiteralSpecification")
    return svg


def figure_8_2():
    svg = Svg("8.2", "Выражения", "Expression, OpaqueExpression и StringExpression как ValueSpecifications; ассоциации для operand, subExpression/owningExpression, behavior и result.", 1400, 780)
    class_node(svg, "ValueSpecification", 700, 40, 250, 60)
    class_node(svg, "Expression", 250, 220, 230, 75, attributes=["+ symbol : String [0..1]"])
    class_node(svg, "OpaqueExpression", 830, 205, 350, 110, attributes=["+ body : String [*] {ordered, nonunique}", "+ language : String [*] {ordered}"])
    class_node(svg, "StringExpression", 250, 470, 250, 65)
    class_node(svg, "Behavior", 840, 480, 170, 55, example=True)
    class_node(svg, "Parameter", 1110, 480, 170, 55, example=True)
    class_node(svg, "TemplateableElement", 250, 650, 260, 55)

    # Generalizations: Expression and OpaqueExpression → ValueSpecification via bus
    generalization(svg, f"M {250 + 115} 220 V 160 H 825 V 100", child="Expression", parent="ValueSpecification")
    generalization(svg, f"M {830 + 175} 205 V 160 H 825 V 100", marker=False, child="OpaqueExpression", parent="ValueSpecification")
    # StringExpression → Expression
    generalization(svg, f"M {250 + 125} 470 V 380 H {250 + 115} V 295", child="StringExpression", parent="Expression")
    # StringExpression → TemplateableElement
    generalization(svg, f"M {250 + 125} 535 V 700 H {250 + 130}", False, child="StringExpression", parent="TemplateableElement")

    # A_operand_expression: Expression → ValueSpecification composition (up-left loop)
    association(svg, "A_operand_expression",
        f"M 265 260 L 170 260 L 170 40",
        ("Expression", "expression", "+ expression", 240, 280, "start"),
        ("ValueSpecification", "operand", "+ operand", 845, 108, "end"),
        markers='',
        decorations=diamond(265, 260, "right"))
    # Multi-line labels for A_operand_expression (16px spacing)
    svg.add(text("{subsets owner}", 240, 296, "start", "association-end"))
    svg.add(text("0..1", 240, 312, "start", "association-end"))
    svg.add(text("{ordered,", 845, 124, "end", "association-end"))
    svg.add(text("subsets ownedElement}", 845, 140, "end", "association-end"))
    svg.add(text("*", 845, 156, "end", "association-end"))

    # A_subExpression_owningExpression: StringExpression self-loop (left side)
    association(svg, "A_subExpression_owningExpression",
        f"M 240 502 L 70 502 L 70 436 H 240",
        ("StringExpression", "owningExpression", "+ owningExpression", 160, 518, "end"),
        ("StringExpression", "subExpression", "+ subExpression", 62, 448, "start"),
        markers='',
        decorations=diamond(240, 502, "down"))
    # Multi-line labels for A_subExpression_owningExpression (16px spacing)
    svg.add(text("{subsets owner}", 160, 534, "end", "association-end"))
    svg.add(text("0..1", 160, 550, "end", "association-end"))
    svg.add(text("{ordered,", 62, 464, "start", "association-end"))
    svg.add(text("subsets ownedElement}", 62, 480, "start", "association-end"))
    svg.add(text("*", 62, 496, "start", "association-end"))

    # A_behavior_opaqueExpression: OpaqueExpression → Behavior (vertical down)
    association(svg, "A_behavior_opaqueExpression",
        f"M 840 315 V 472",
        ("OpaqueExpression", "behavior", "+ behavior", 795, 344, "end"),
        ("Behavior", "opaqueExpression", "+ opaqueExpression", 795, 468, "end"),
        markers=' marker-end="url(#navigation)"')
    svg.add(text("0..1", 795, 360, "end", "association-end"))

    # A_result_opaqueExpression: OpaqueExpression → Parameter (vertical down)
    association(svg, "A_result_opaqueExpression",
        f"M 1155 315 V 472",
        ("OpaqueExpression", "result", "+ opaqueExpression", 1160, 344, "start"),
        ("Parameter", "/result", "{readOnly}", 1160, 468, "start"),
        markers=' marker-end="url(#navigation)"')
    svg.add(text("*", 1160, 360, "start", "association-end"))
    svg.add(text("+ /result", 1160, 484, "start", "association-end"))
    return svg


FIGURE_BUILDERS = {
    "7.2": figure_7_2,
    "7.3": figure_7_3,
    "7.4": figure_7_4,
    "7.5": figure_7_5,
    "7.6": figure_7_6,
    "7.7": figure_7_7,
    "7.8": figure_7_8,
    "7.9": figure_7_9,
    "7.10": figure_7_10,
    "7.11": figure_7_11,
    "7.12": figure_7_12,
    "7.13": figure_7_13,
    "7.14": figure_7_14,
    "7.15": figure_7_15,
    "7.16": figure_7_16,
    "7.17": figure_7_17,
    "7.18": figure_7_18,
    "7.19": figure_7_19,
    "7.20": figure_7_20,
    "7.21": figure_7_21,
    "8.1": figure_8_1,
    "8.2": figure_8_2,
}


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--output-dir", type=Path, default=ROOT / "site" / "assets" / "diagrams")
    parser.add_argument("--check", action="store_true", help="Check generated SVG files without rewriting them")
    args = parser.parse_args()
    missing = []
    changed = []
    for figure, builder in FIGURE_BUILDERS.items():
        target = args.output_dir / f"figure-{figure.replace('.', '-')}.svg"
        content = builder().render()
        if not target.is_file():
            missing.append(str(target))
        elif target.read_text(encoding="utf-8") != content:
            changed.append(str(target))
        if not args.check:
            target.write_text(content, encoding="utf-8", newline="\n")
            print(f"Figure {figure}: {target}")
    if args.check and (missing or changed):
        for path in missing:
            print(f"Missing: {path}")
        for path in changed:
            print(f"Outdated: {path}")
        raise SystemExit(1)
    if args.check:
        print(f"Generated SVG checks: OK; {len(FIGURE_BUILDERS)} figures synchronized")


if __name__ == "__main__":
    main()
