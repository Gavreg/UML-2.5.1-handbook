"""
Name: classification_figures_features.py
Purpose: Generate interactive SVG figures 9.9 "Features", 9.10 "Properties" and 9.13 "Operations".
Interface: python scripts/classification_figures_features.py [--output-dir PATH]
Goal: Preserve OMG semantics and notation with linked classes, associations and clear labels.
Sources: site/docs/UML-2.5.1.xmi and the official UML 2.5.1 PDF, figures 9.9, 9.10 and 9.13.
Requires: Python 3 standard library and the shared SVG helpers.
Usage:
  Run from the repository root to render only figures 9.9, 9.10 and 9.13 during development.
  python scripts/classification_figures_features.py
  python scripts/classification_figures_features.py --output-dir PATH
  Output defaults to .tmp-pages; use generate_classification_svg.py for the full Clause 9 set.
"""

from argparse import ArgumentParser
from pathlib import Path

from classification_figures_layout import horizontal_association, self_association, self_association_top, vertical_association
from generate_common_structure_svg import (
    Svg,
    association,
    class_node,
    diamond,
    dot,
    example_association,
    generalization,
)


ROOT = Path(__file__).resolve().parent.parent


def example_horizontal(svg, x1, x2, y, start, end, title, decorations=""):
    start_name, start_labels = start
    end_name, end_labels = end
    example_association(
        svg,
        f"M {x1} {y} H {x2}",
        [
            (start_name, x1 + 20, y - 20, "start"),
            *[(value, x1 + 20, y - 40 - index * 16, "start") for index, value in enumerate(start_labels)],
            (end_name, x2 - 20, y - 20, "end"),
            *[(value, x2 - 20, y - 40 - index * 16, "end") for index, value in enumerate(end_labels)],
        ],
        markers="",
        title=title,
        decorations=decorations,
    )


def figure_9_9():
    svg = Svg(
        "9.9", "Характеристики",
        "Абстрактный синтаксис Feature, StructuralFeature, BehavioralFeature, Parameter и ParameterSet.",
        2300, 1280,
    )
    class_node(svg, "RedefinableElement", 600, 30, 250, 60)
    class_node(svg, "CallConcurrencyKind", 950, 30, 250, 130, ["sequential", "guarded", "concurrent"], stereotype="enumeration")
    class_node(svg, "ParameterDirectionKind", 1300, 30, 250, 150, ["in", "inout", "out", "return"], stereotype="enumeration")
    class_node(svg, "ParameterEffectKind", 1700, 30, 250, 150, ["create", "read", "update", "delete"], stereotype="enumeration")
    class_node(svg, "Classifier", 60, 260, 180, 60)
    class_node(svg, "Feature", 600, 250, 240, 80, ["+ isStatic : Boolean = false"])
    class_node(svg, "MultiplicityElement", 50, 400, 220, 60)
    class_node(svg, "TypedElement", 350, 350, 180, 60)
    class_node(svg, "Namespace", 800, 350, 180, 60)
    class_node(svg, "MultiplicityElement", 1450, 300, 220, 60)
    class_node(svg, "TypedElement", 1750, 250, 180, 60)
    class_node(svg, "ConnectableElement", 2000, 300, 240, 60)
    class_node(svg, "StructuralFeature", 300, 550, 240, 70, ["+ isReadOnly : Boolean = false"])
    class_node(svg, "BehavioralFeature", 720, 500, 330, 130, ["+ concurrency : CallConcurrencyKind = sequential", "+ isAbstract : Boolean = false"])
    class_node(svg, "Parameter", 1700, 450, 330, 400, ["+ /default : String [0..1]", "+ direction : ParameterDirectionKind = in", "+ effect : ParameterEffectKind [0..1]", "+ isException : Boolean = false", "+ isStream : Boolean = false"])
    class_node(svg, "Type", 650, 820, 140, 60)
    class_node(svg, "Behavior", 850, 820, 160, 60)
    class_node(svg, "ParameterSet", 1100, 820, 220, 70)
    class_node(svg, "Constraint", 1100, 1100, 180, 60)
    class_node(svg, "ValueSpecification", 1700, 1100, 260, 60)

    generalization(svg, "M 720 250 V 90", child="Feature", parent="RedefinableElement")
    generalization(svg, "M 400 550 L 160 460", child="StructuralFeature", parent="MultiplicityElement")
    generalization(svg, "M 500 550 L 440 410", child="StructuralFeature", parent="TypedElement")
    generalization(svg, "M 450 550 L 680 330", child="StructuralFeature", parent="Feature")
    generalization(svg, "M 850 500 L 720 330", child="BehavioralFeature", parent="Feature")
    generalization(svg, "M 900 500 V 410", child="BehavioralFeature", parent="Namespace")
    generalization(svg, "M 1750 450 L 1560 360", child="Parameter", parent="MultiplicityElement")
    generalization(svg, "M 1850 450 L 1840 310", child="Parameter", parent="TypedElement")
    generalization(svg, "M 1950 450 L 2120 360", child="Parameter", parent="ConnectableElement")

    horizontal_association(
        svg, "A_feature_featuringClassifier", 240, 600, 290,
        ("Classifier", "featuringClassifier", "+ /featuringClassifier", ["{readOnly, union,", "subsets memberNamespace}", "0..1"]),
        ("Feature", "feature", "+ /feature", ["{readOnly, union,", "subsets member}", "*"]),
        "", dot(240, 290),
    )
    horizontal_association(
        svg, "A_ownedParameter_ownerFormalParam", 1050, 1700, 520,
        ("BehavioralFeature", "ownerFormalParam", "+ ownerFormalParam", ["{subsets namespace}", "0..1"]),
        ("Parameter", "ownedParameter", "+ ownedParameter", ["{ordered, subsets ownedMember}", "*"]),
        "", diamond(1050, 520, "right") + dot(1700, 520),
    )
    association(
        svg, "A_ownedParameterSet_behavioralFeature", "M 1050 620 H 1200 V 820",
        ("BehavioralFeature", "behavioralFeature", "+ behavioralFeature", 1070, 600, "start"),
        ("ParameterSet", "ownedParameterSet", "+ ownedParameterSet", 1220, 782, "start"),
        "", diamond(1050, 620, "right") + dot(1200, 820),
        [
            ("{subsets namespace}", 1070, 580, "start"), ("0..1", 1070, 564, "start"),
            ("{subsets ownedMember}", 1220, 766, "start"), ("*", 1220, 750, "start"),
        ],
    )
    vertical_association(
        svg, "A_raisedException_behavioralFeature", 780, 630, 820,
        ("BehavioralFeature", "behavioralFeature", "+ behavioralFeature", ["0..1"]),
        ("Type", "raisedException", "+ raisedException", ["*"]),
        "", dot(780, 630), side=-1,
    )
    vertical_association(
        svg, "A_method_specification", 950, 630, 820,
        ("BehavioralFeature", "specification", "+ specification", ["0..1"]),
        ("Behavior", "method", "+ method", ["*"]),
        "", dot(950, 630),
    )
    horizontal_association(
        svg, "A_parameterSet_parameter", 1320, 1700, 840,
        ("Parameter", "parameter", "+ parameter", ["1..*"]),
        ("ParameterSet", "parameterSet", "+ parameterSet", ["*"]),
        "", dot(1700, 840),
    )
    vertical_association(
        svg, "A_condition_parameterSet", 1200, 890, 1100,
        ("ParameterSet", "parameterSet", "+ parameterSet", ["{subsets owner}", "0..1"]),
        ("Constraint", "condition", "+ condition", ["{subsets ownedElement}", "*"]),
        "", diamond(1200, 890, "down"), side=-1,
    )
    vertical_association(
        svg, "A_defaultValue_owningParameter", 1850, 850, 1100,
        ("Parameter", "owningParameter", "+ owningParameter", ["{subsets owner}", "0..1"]),
        ("ValueSpecification", "defaultValue", "+ defaultValue", ["{subsets ownedElement}", "0..1"]),
        "", diamond(1850, 850, "down"),
    )
    return svg


def figure_9_10():
    svg = Svg(
        "9.10", "Свойства",
        "Абстрактный синтаксис Property, AggregationKind и связей с классификаторами, ассоциациями и значениями.",
        2050, 1400,
    )
    class_node(svg, "ParameterableElement", 250, 50, 240, 60)
    class_node(svg, "ConnectableElement", 600, 50, 240, 60)
    class_node(svg, "StructuralFeature", 930, 50, 220, 60)
    class_node(svg, "DeploymentTarget", 1230, 50, 220, 60)
    class_node(svg, "AggregationKind", 1600, 30, 220, 150, ["none", "shared", "composite"], stereotype="enumeration")
    class_node(svg, "Interface", 50, 400, 160, 60)
    class_node(svg, "DataType", 50, 650, 160, 60)
    class_node(svg, "Class", 50, 900, 160, 60)
    class_node(svg, "Property", 800, 350, 350, 700, ["+ aggregation : AggregationKind = none", "+ /isComposite : Boolean = false", "+ isDerived : Boolean = false", "+ isDerivedUnion : Boolean = false", "+ isID : Boolean = false"])
    class_node(svg, "Association", 1700, 400, 200, 220)
    class_node(svg, "ValueSpecification", 1700, 590, 260, 60)

    generalization(svg, "M 900 350 H 1060 V 110 H 720", child="Property", parent="ConnectableElement")
    generalization(svg, "M 1000 350 H 1080 V 110 H 1040", child="Property", parent="StructuralFeature")
    generalization(svg, "M 1100 350 V 110 H 1340", child="Property", parent="DeploymentTarget")

    example_horizontal(svg, 210, 800, 430, ("+ interface", ["{subsets namespace,", "subsets classifier}", "0..1"]), ("+ ownedAttribute", ["{ordered, subsets attribute,", "subsets ownedMember}", "*"]), "Ассоциация ownedAttribute между Interface и Property.", diamond(210, 430, "right"))
    example_horizontal(svg, 210, 800, 680, ("+ datatype", ["{subsets namespace,", "subsets classifier}", "0..1"]), ("+ ownedAttribute", ["{ordered, subsets attribute,", "subsets ownedMember}", "*"]), "Ассоциация ownedAttribute между DataType и Property.", diamond(210, 680, "right"))
    example_horizontal(svg, 210, 800, 930, ("+ class", ["{subsets namespace,", "subsets structuredClassifier,", "subsets classifier}", "0..1"]), ("+ ownedAttribute", ["{ordered, subsets attribute,", "subsets ownedMember,", "redefines ownedAttribute}", "*"]), "Ассоциация ownedAttribute между Class и Property.", diamond(210, 930, "right"))
    example_horizontal(svg, 1150, 1700, 450, ("+ ownedEnd", ["{ordered, subsets feature,", "subsets redefinableElement,", "subsets memberEnd,", "subsets ownedMember}", "*"]), ("+ owningAssociation", ["{subsets featuringClassifier,", "subsets namespace,", "subsets association,", "subsets redefinitionContext}", "0..1"]), "Связь Property с владеющей Association.", diamond(1700, 450, "left"))
    example_horizontal(svg, 1150, 1700, 520, ("+ memberEnd", ["{ordered, subsets member}", "2..*"]), ("+ association", ["{subsets memberNamespace}", "0..1"]), "Связь Property с Association как memberEnd.", dot(1150, 520))

    self_association_top(
        svg, "A_qualifier_associationEnd", 1150, 720, 350, 800, 1400, 220,
        ("Property", "associationEnd", "+ associationEnd", ["{subsets owner}", "0..1"]),
        ("Property", "qualifier", "+ qualifier", ["{ordered, subsets ownedElement}", "*"]),
        diamond(1150, 720, "right"),
    )
    self_association_top(
        svg, "A_opposite_property", 1150, 800, 350, 1100, 1350, 170,
        ("Property", "property", "+ property", ["0..1"]),
        ("Property", "/opposite", "+ /opposite", ["0..1"]),
    )
    self_association(
        svg, "A_redefinedProperty_property", 1150, 880, 1050, 800, 1400, 1190,
        ("Property", "property", "+ property", ["{subsets redefinableElement}", "*"]),
        ("Property", "redefinedProperty", "+ redefinedProperty", ["{subsets redefinedElement}", "*"]),
    )
    self_association(
        svg, "A_subsettedProperty_property", 1150, 960, 1050, 1100, 1500, 1250,
        ("Property", "property", "+ property", ["{subsets redefinableElement}", "*"]),
        ("Property", "subsettedProperty", "+ subsettedProperty", ["{subsets redefinedElement}", "*"]),
    )
    horizontal_association(
        svg, "A_defaultValue_owningProperty", 1150, 1700, 620,
        ("Property", "owningProperty", "+ owningProperty", ["{subsets owner}", "0..1"]),
        ("ValueSpecification", "defaultValue", "+ defaultValue", ["{subsets ownedElement}", "0..1"]),
        "", diamond(1150, 620, "right"),
    )
    return svg


def figure_9_13():
    svg = Svg(
        "9.13", "Операции",
        "Абстрактный синтаксис Operation и OperationTemplateParameter, параметров, ограничений и исключений.",
        2200, 1600,
    )
    class_node(svg, "TemplateableElement", 600, 50, 250, 60)
    class_node(svg, "BehavioralFeature", 900, 50, 250, 60)
    class_node(svg, "ParameterableElement", 1250, 50, 250, 60)
    class_node(svg, "Interface", 50, 350, 160, 60)
    class_node(svg, "DataType", 50, 600, 160, 60)
    class_node(svg, "Class", 50, 850, 160, 60)
    class_node(svg, "Operation", 750, 250, 400, 850, ["+ /isOrdered : Boolean {readOnly}", "+ isQuery : Boolean = false", "+ /isUnique : Boolean {readOnly}", "+ /lower : Integer [0..1] {readOnly}", "+ /upper : UnlimitedNatural [0..1] {readOnly}"])
    class_node(svg, "Parameter", 1700, 250, 200, 60)
    class_node(svg, "Constraint", 1700, 400, 200, 400)
    class_node(svg, "Type", 1700, 850, 200, 250)
    class_node(svg, "OperationTemplateParameter", 750, 1300, 400, 70)
    class_node(svg, "TemplateParameter", 825, 1480, 250, 60)

    generalization(svg, "M 850 250 L 725 110", child="Operation", parent="TemplateableElement")
    generalization(svg, "M 950 250 L 1025 110", child="Operation", parent="BehavioralFeature")
    generalization(svg, "M 1100 250 L 1375 110", child="Operation", parent="ParameterableElement")
    generalization(svg, "M 950 1370 V 1480", child="OperationTemplateParameter", parent="TemplateParameter")

    example_horizontal(svg, 210, 750, 380, ("+ interface", ["{subsets featuringClassifier,", "subsets namespace,", "subsets redefinitionContext}", "0..1"]), ("+ ownedOperation", ["{ordered, subsets feature,", "subsets redefinableElement,", "subsets ownedMember}", "*"]), "Ассоциация ownedOperation между Interface и Operation.", diamond(210, 380, "right"))
    example_horizontal(svg, 210, 750, 630, ("+ datatype", ["{subsets featuringClassifier,", "subsets namespace,", "subsets redefinitionContext}", "0..1"]), ("+ ownedOperation", ["{ordered, subsets feature,", "subsets redefinableElement,", "subsets ownedMember}", "*"]), "Ассоциация ownedOperation между DataType и Operation.", diamond(210, 630, "right"))
    example_horizontal(svg, 210, 750, 880, ("+ class", ["{subsets featuringClassifier,", "subsets namespace,", "subsets redefinitionContext}", "0..1"]), ("+ ownedOperation", ["{ordered, subsets feature,", "subsets redefinableElement,", "subsets ownedMember}", "*"]), "Ассоциация ownedOperation между Class и Operation.", diamond(210, 880, "right"))

    horizontal_association(
        svg, "A_ownedParameter_operation", 1150, 1700, 300,
        ("Operation", "operation", "+ operation", ["{subsets ownerFormalParam}", "0..1"]),
        ("Parameter", "ownedParameter", "+ ownedParameter", ["{ordered, redefines ownedParameter}", "*"]),
        "", diamond(1150, 300, "right") + dot(1700, 300),
    )
    horizontal_association(
        svg, "A_precondition_preContext", 1150, 1700, 450,
        ("Operation", "preContext", "+ preContext", ["{subsets context}", "0..1"]),
        ("Constraint", "precondition", "+ precondition", ["{subsets ownedRule}", "*"]),
        "", diamond(1150, 450, "right") + dot(1700, 450),
    )
    horizontal_association(
        svg, "A_postcondition_postContext", 1150, 1700, 600,
        ("Operation", "postContext", "+ postContext", ["{subsets context}", "0..1"]),
        ("Constraint", "postcondition", "+ postcondition", ["{subsets ownedRule}", "*"]),
        "", diamond(1150, 600, "right") + dot(1700, 600),
    )
    horizontal_association(
        svg, "A_bodyCondition_bodyContext", 1150, 1700, 750,
        ("Operation", "bodyContext", "+ bodyContext", ["{subsets context}", "0..1"]),
        ("Constraint", "bodyCondition", "+ bodyCondition", ["{subsets ownedRule}", "0..1"]),
        "", diamond(1150, 750, "right") + dot(1700, 750),
    )
    horizontal_association(
        svg, "A_type_operation", 1150, 1700, 900,
        ("Operation", "operation", "+ operation", ["{subsets behavioralFeature}", "*"]),
        ("Type", "/type", "+ /type", ["{readOnly}", "0..1"]),
        "", dot(1150, 900),
    )
    horizontal_association(
        svg, "A_raisedException_operation", 1150, 1700, 980,
        ("Operation", "operation", "+ operation", ["*"]),
        ("Type", "raisedException", "+ raisedException", ["{redefines raisedException}", "*"]),
        "", dot(1150, 980),
    )
    self_association(
        svg, "A_redefinedOperation_operation", 1150, 1080, 1100, 950, 1450, 1200,
        ("Operation", "operation", "+ operation", ["{subsets redefinableElement}", "*"]),
        ("Operation", "redefinedOperation", "+ redefinedOperation", ["{subsets redefinedElement}", "*"]),
    )
    vertical_association(
        svg, "A_operation_templateParameter_parameteredElement", 850, 1100, 1300,
        ("Operation", "parameteredElement", "+ parameteredElement", ["{redefines parameteredElement}", "1"]),
        ("OperationTemplateParameter", "templateParameter", "+ templateParameter", ["{redefines templateParameter}", "0..1"]),
        "", dot(850, 1100) + dot(850, 1300), side=-6,
    )
    return svg


BUILDERS = {"9.9": figure_9_9, "9.10": figure_9_10, "9.13": figure_9_13}


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
