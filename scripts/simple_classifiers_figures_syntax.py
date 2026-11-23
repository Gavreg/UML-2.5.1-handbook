"""
Name: simple_classifiers_figures_syntax.py
Purpose: Interactive SVG builders for the abstract syntax figures of UML 2.5.1 Clause 10 — Figure 10.1 "DataTypes" (subclause 10.2.2), Figure 10.5 "Signals" (subclause 10.3.2) and Figure 10.7 "Interfaces" (subclause 10.4.2).
Interface: import simple_classifiers_figures_syntax as scs; svg = scs.BUILDERS["10.1"](); python scripts/simple_classifiers_figures_syntax.py [--output-dir PATH]
Goal: Recreate the official metamodel diagrams as clickable vector figures with tooltips, preserving OMG notation and semantics verified against site/docs/UML-2.5.1.xmi.
Sources: site/docs/UML-2.5.1.xmi, the official UML 2.5.1 PDF (figures 10.1, 10.5 and 10.7) and the curated handbook data in site/data/simple-classifiers.js.
Requires: Python 3 standard library and the shared SVG helpers from scripts/generate_common_structure_svg.py.
Usage:
  Run from the repository root to render only Clause 10 abstract syntax figures during development.
  python scripts/simple_classifiers_figures_syntax.py
  python scripts/simple_classifiers_figures_syntax.py --output-dir PATH
  Output defaults to .tmp-pages; use generate_simple_classifiers_svg.py for the full Clause 10 set.
"""

from argparse import ArgumentParser
from pathlib import Path

from generate_common_structure_svg import (
    CLASSES,
    PROPERTY_DESCRIPTIONS,
    Svg,
    XMI,
    association,
    class_node,
    diamond,
    dot,
    generalization,
)


ROOT = Path(__file__).resolve().parent.parent


def _patch_end_tooltips():
    """Fill PROPERTY_DESCRIPTIONS for association-owned ends keyed by their association name."""
    for item in XMI["associations"].values():
        for end in item.get("ends", []):
            owner = end.get("owner")
            if not isinstance(owner, str) or owner in CLASSES:
                continue
            PROPERTY_DESCRIPTIONS.setdefault((owner, end["name"]), end.get("description", ""))


_patch_end_tooltips()


def figure_10_1():
    svg = Svg(
        "10.1", "Типы данных",
        "Абстрактный синтаксис DataType, Enumeration, EnumerationLiteral и PrimitiveType: "
        "атрибуты и операции типа данных, литералы перечисления и классификатор литерала.",
        1040, 850,
    )
    class_node(svg, "Classifier", 90, 35, 150, 45)
    class_node(svg, "DataType", 60, 190, 170, 160)
    class_node(svg, "Property", 770, 180, 130, 55)
    class_node(svg, "Operation", 770, 317, 140, 55)
    class_node(svg, "PrimitiveType", 60, 620, 160, 55)
    class_node(svg, "Enumeration", 390, 595, 160, 140)
    class_node(svg, "InstanceSpecification", 740, 420, 240, 55)
    class_node(svg, "EnumerationLiteral", 800, 555, 220, 180)
    generalization(svg, "M 165 190 V 80", child="DataType", parent="Classifier")
    generalization(svg, "M 140 620 V 520 H 155 V 350", child="PrimitiveType", parent="DataType")
    generalization(svg, "M 470 595 V 520 H 180 V 350", child="Enumeration", parent="DataType")
    generalization(svg, "M 870 555 V 475", child="EnumerationLiteral", parent="InstanceSpecification")

    association(svg, "A_ownedAttribute_datatype", "M 230 207 H 770",
        ("DataType", "datatype", "+ datatype", 250, 187, "start"),
        ("Property", "ownedAttribute", "+ ownedAttribute", 750, 187, "end"),
        "", dot(230, 207) + diamond(236, 207, "right") + dot(770, 207),
        [("{subsets namespace,", 250, 151, "start"), ("subsets classifier}", 250, 167, "start"),
         ("0..1", 250, 245, "start"),
         ("{ordered, subsets attribute,", 750, 151, "end"), ("subsets ownedMember}", 750, 167, "end"),
         ("*", 750, 245, "end")])
    association(svg, "A_ownedOperation_datatype", "M 230 345 H 770",
        ("DataType", "datatype", "+ datatype", 250, 325, "start"),
        ("Operation", "ownedOperation", "+ ownedOperation", 750, 325, "end"),
        "", dot(230, 345) + diamond(236, 345, "right") + dot(770, 345),
        [("{subsets featuringClassifier,", 250, 273, "start"), ("subsets namespace, subsets", 250, 289, "start"),
         ("redefinitionContext}", 250, 305, "start"), ("0..1", 250, 383, "start"),
         ("{ordered, subsets feature, subsets", 750, 273, "end"), ("redefinableElement, subsets", 750, 289, "end"),
         ("ownedMember}", 750, 305, "end"), ("*", 750, 383, "end")])
    association(svg, "A_ownedLiteral_enumeration", "M 550 630 H 800",
        ("EnumerationLiteral", "enumeration", "+ enumeration", 570, 603, "start"),
        ("Enumeration", "ownedLiteral", "+ ownedLiteral", 780, 621, "end"),
        "", dot(550, 630) + diamond(554, 630, "right") + dot(800, 630),
        [("{subsets namespace}", 570, 573, "start"), ("1", 570, 677, "start"),
         ("{ordered, subsets", 780, 557, "end"), ("ownedMember}", 780, 589, "end"),
         ("*", 780, 677, "end")])
    association(svg, "A_classifier_enumerationLiteral", "M 550 720 H 800",
        ("EnumerationLiteral", "classifier", "+ /classifier", 570, 747, "start"),
        ("A_classifier_enumerationLiteral", "enumerationLiteral", "+ enumerationLiteral", 780, 765, "end"),
        ' marker-start="url(#navigation-start)"', dot(550, 720),
        [("1", 570, 693, "start"), ("{readOnly, redefines", 570, 789, "start"), ("classifier}", 570, 805, "start"),
         ("{redefines", 780, 805, "end"), ("instanceSpecification}", 780, 821, "end"), ("*", 780, 693, "end")])
    return svg


def figure_10_5():
    svg = Svg(
        "10.5", "Сигналы",
        "Абстрактный синтаксис Signal и Reception: атрибуты сигнала, приёмы сигналов "
        "и сигнал, который обрабатывает приём.",
        750, 680,
    )
    class_node(svg, "Classifier", 60, 40, 150, 45)
    class_node(svg, "BehavioralFeature", 520, 40, 190, 45)
    class_node(svg, "Signal", 60, 200, 150, 80)
    class_node(svg, "Reception", 520, 200, 170, 80)
    class_node(svg, "Property", 60, 560, 130, 55)
    generalization(svg, "M 135 200 V 85", child="Signal", parent="Classifier")
    generalization(svg, "M 615 200 V 85", child="Reception", parent="BehavioralFeature")

    association(svg, "A_signal_reception", "M 210 230 H 520",
        ("Reception", "signal", "+ signal", 230, 210, "start"),
        ("A_signal_reception", "reception", "+ reception", 500, 210, "end"),
        ' marker-start="url(#navigation-start)"', dot(210, 230) + dot(520, 230),
        [("1", 230, 263, "start"), ("*", 500, 263, "end")])
    association(svg, "A_ownedAttribute_owningSignal", "M 135 280 V 560",
        ("A_ownedAttribute_owningSignal", "owningSignal", "+ owningSignal", 155, 318, "start"),
        ("Signal", "ownedAttribute", "+ ownedAttribute", 155, 532, "start"),
        ' marker-end="url(#navigation)"', diamond(135, 280, "down"),
        [("{subsets namespace,", 155, 350, "start"), ("subsets classifier}", 155, 366, "start"),
         ("0..1", 113, 318, "end"),
         ("{ordered, subsets attribute,", 155, 484, "start"), ("subsets ownedMember}", 155, 500, "start"),
         ("*", 113, 532, "end")])
    return svg


def figure_10_7():
    svg = Svg(
        "10.7", "Интерфейсы",
        "Абстрактный синтаксис Interface и InterfaceRealization: атрибуты, операции и приёмы интерфейса, "
        "вложенные классификаторы, протокол, переопределяемые интерфейсы, реализация интерфейса "
        "и поведения классификатора с поведением.",
        1290, 1000,
    )
    class_node(svg, "Classifier", 570, 30, 150, 45)
    class_node(svg, "Interface", 520, 150, 250, 450)
    class_node(svg, "Property", 70, 240, 130, 55)
    class_node(svg, "Operation", 70, 373, 140, 55)
    class_node(svg, "Reception", 70, 506, 150, 55)
    class_node(svg, "ProtocolStateMachine", 1010, 240, 240, 55)
    class_node(svg, "BehavioredClassifier", 230, 700, 240, 55)
    class_node(svg, "InterfaceRealization", 740, 710, 230, 90)
    class_node(svg, "Behavior", 250, 920, 170, 55)
    class_node(svg, "Realization", 785, 870, 140, 55)
    generalization(svg, "M 645 150 V 75", child="Interface", parent="Classifier")
    generalization(svg, "M 855 800 V 870", child="InterfaceRealization", parent="Realization")

    association(svg, "A_ownedAttribute_interface", "M 200 267 H 520",
        ("Property", "ownedAttribute", "+ ownedAttribute", 220, 247, "start"),
        ("Interface", "interface", "+ interface", 500, 289, "end"),
        "", dot(200, 267) + dot(520, 267) + diamond(524, 267, "right"),
        [("{ordered, subsets attribute,", 220, 213, "start"), ("subsets ownedMember}", 220, 229, "start"),
         ("*", 220, 301, "start"),
         ("0..1", 500, 247, "end"), ("{subsets namespace, subsets classifier}", 500, 305, "end")])
    association(svg, "A_ownedOperation_interface", "M 210 387 H 520",
        ("Operation", "ownedOperation", "+ ownedOperation", 230, 371, "start"),
        ("Interface", "interface", "+ interface", 500, 411, "end"),
        "", dot(210, 387) + dot(520, 387) + diamond(524, 387, "right"),
        [("{ordered, subsets feature, subsets", 230, 323, "start"), ("redefinableElement, subsets", 230, 339, "start"),
         ("ownedMember}", 230, 355, "start"), ("*", 230, 423, "start"),
         ("0..1", 500, 367, "end"),
         ("{subsets featuringClassifier,", 500, 427, "end"), ("subsets namespace, subsets", 500, 443, "end"),
         ("redefinitionContext}", 500, 459, "end")])
    association(svg, "A_ownedReception_interface", "M 220 540 H 520",
        ("Interface", "ownedReception", "+ ownedReception", 230, 524, "start"),
        ("A_ownedReception_interface", "interface", "+ interface", 500, 566, "end"),
        ' marker-start="url(#navigation-start)"', dot(220, 540) + dot(520, 540) + diamond(524, 540, "right"),
        [("{subsets feature, subsets", 230, 476, "start"), ("ownedMember}", 230, 492, "start"),
         ("*", 230, 574, "start"),
         ("0..1", 500, 520, "end"),
         ("{subsets featuringClassifier,", 500, 582, "end"), ("subsets namespace}", 500, 598, "end")])
    association(svg, "A_nestedClassifier_interface", "M 770 200 H 990 V 52 H 720",
        ("A_nestedClassifier_interface", "interface", "+ interface", 790, 179, "start"),
        ("Interface", "nestedClassifier", "+ nestedClassifier", 740, 92, "start"),
        ' marker-end="url(#navigation)"', dot(770, 200) + diamond(774, 200, "right"),
        [("{subsets namespace, subsets", 790, 146, "start"), ("redefinitionContext}", 790, 162, "start"),
         ("0..1", 800, 224, "start"),
         ("{ordered, subsets redefinableElement,", 740, 20, "start"), ("subsets ownedMember}", 740, 36, "start"),
         ("*", 740, 116, "start")])
    association(svg, "A_protocol_interface", "M 770 267 H 1010",
        ("Interface", "protocol", "+ protocol", 790, 243, "start"),
        ("A_protocol_interface", "interface", "+ interface", 990, 293, "end"),
        ' marker-end="url(#navigation)"', diamond(772, 267, "right"),
        [("{subsets ownedMember}", 800, 259, "start"), ("0..1", 800, 289, "start"),
         ("0..1", 990, 247, "end"), ("{subsets namespace}", 990, 322, "end")])
    association(svg, "A_redefinedInterface_interface", "M 770 330 H 990 V 430 H 770",
        ("Interface", "redefinedInterface", "+ redefinedInterface", 790, 306, "start"),
        ("A_redefinedInterface_interface", "interface", "+ interface", 790, 466, "start"),
        ' marker-end="url(#navigation)"', dot(770, 330),
        [("{subsets redefinedClassifier}", 790, 358, "start"), ("*", 790, 322, "start"),
         ("{subsets classifier}", 790, 498, "start"), ("*", 790, 414, "start")])
    association(svg, "A_contract_interfaceRealization", "M 755 600 V 710",
        ("InterfaceRealization", "contract", "+ contract", 775, 618, "start"),
        ("A_contract_interfaceRealization", "interfaceRealization", "+ interfaceRealization", 775, 668, "start"),
        ' marker-start="url(#navigation-start)"', dot(755, 600),
        [("{subsets supplier}", 775, 650, "start"), ("1", 735, 618, "end"),
         ("{subsets supplierDependency}", 775, 634, "start"), ("*", 735, 668, "end")])
    association(svg, "A_interfaceRealization_implementingClassifier", "M 470 745 H 740",
        ("BehavioredClassifier", "interfaceRealization", "+ interfaceRealization", 720, 777, "end"),
        ("InterfaceRealization", "implementingClassifier", "+ implementingClassifier", 486, 725, "start"),
        "", dot(470, 745) + diamond(474, 745, "right") + dot(740, 745),
        [("{subsets client, subsets owner}", 486, 709, "start"), ("1", 486, 774, "start"),
         ("*", 720, 725, "end"),
         ("{subsets ownedElement,", 720, 793, "end"), ("subsets clientDependency}", 720, 809, "end")])
    association(svg, "A_classifierBehavior_behavioredClassifier", "M 270 755 V 920",
        ("BehavioredClassifier", "classifierBehavior", "+ classifierBehavior", 254, 794, "end"),
        ("A_classifierBehavior_behavioredClassifier", "behavioredClassifier", "+ behavioredClassifier", 254, 878, "end"),
        ' marker-end="url(#navigation)"', "",
        [("{subsets ownedBehavior}", 254, 822, "end"), ("0..1", 288, 794, "start"),
         ("{redefines behavioredClassifier}", 254, 850, "end"), ("0..1", 288, 878, "start")])
    association(svg, "A_ownedBehavior_behavioredClassifier", "M 390 755 V 920",
        ("A_ownedBehavior_behavioredClassifier", "behavioredClassifier", "+ behavioredClassifier", 408, 794, "start"),
        ("BehavioredClassifier", "ownedBehavior", "+ ownedBehavior", 408, 878, "start"),
        ' marker-end="url(#navigation)"', diamond(390, 755, "down"),
        [("{subsets namespace}", 408, 822, "start"), ("0..1", 372, 794, "end"),
         ("{subsets ownedMember}", 408, 850, "start"), ("*", 372, 878, "end")])
    return svg


BUILDERS = {
    "10.1": figure_10_1,
    "10.5": figure_10_5,
    "10.7": figure_10_7,
}


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--output-dir", type=Path, default=ROOT / ".tmp-pages")
    args = parser.parse_args()
    for figure, builder in BUILDERS.items():
        target = args.output_dir / f"figure-{figure.replace('.', '-')}.svg"
        target.write_text(builder().render(), encoding="utf-8", newline="\n")
        print(f"Figure {figure}: {target}")


if __name__ == "__main__":
    main()
