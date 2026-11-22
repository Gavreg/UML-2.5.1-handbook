"""
Name: classification_figures_structure.py
Purpose: Interactive SVG builders for the abstract syntax figures of UML 2.5.1 Clause 9 — Figure 9.14 "Generalization Sets" (subclause 9.7.2) and Figure 9.27 "Instances" (subclause 9.8.2).
Interface: import classification_figures_structure as cfs; svg = cfs.BUILDERS["9.14"](); python scripts/classification_figures_structure.py [--output-dir PATH]
Goal: Recreate the official metamodel diagrams as clickable vector figures with tooltips, preserving OMG notation and semantics verified against site/docs/UML-2.5.1.xmi.
Sources: site/docs/UML-2.5.1.xmi, the official UML 2.5.1 PDF (figures 9.14 and 9.27).
Requires: Python 3 standard library and the helpers from scripts/generate_common_structure_svg.py.
Usage:
  Run from the repository root to render only figures 9.14 and 9.27 during development.
  python scripts/classification_figures_structure.py
  python scripts/classification_figures_structure.py --output-dir PATH
  Output defaults to .tmp-pages; use generate_classification_svg.py for the full Clause 9 set.
"""

from argparse import ArgumentParser
from pathlib import Path

from classification_figures_layout import horizontal_association, vertical_association
from generate_common_structure_svg import (
    Svg,
    association,
    class_node,
    diamond,
    dot,
    generalization,
    text,
)


ROOT = Path(__file__).resolve().parent.parent

# DeploymentTarget and DeployedArtifact are not in the handbook data yet (they belong to
# the Deployments clause), so class_node would fall back to an "example class" tooltip.
# The official XMI ownedComment texts keep the tooltips accurate until the data arrives.
DEPLOYMENT_TARGET_TOOLTIP = (
    "DeploymentTarget. A deployment target is the location for a deployed artifact."
)
DEPLOYED_ARTIFACT_TOOLTIP = (
    "DeployedArtifact. A deployed artifact is an artifact or artifact instance "
    "that has been deployed to a deployment target."
)


def figure_9_14():
    svg = Svg(
        "9.14",
        "Наборы обобщений",
        "Абстрактный синтаксис GeneralizationSet: атрибуты isCovering и isDisjoint, "
        "ассоциации powertype/powertypeExtent с Classifier и "
        "generalization/generalizationSet с Generalization; "
        "GeneralizationSet является PackageableElement.",
        1360,
        380,
    )
    class_node(svg, "PackageableElement", 530, 30, 220, 50)
    class_node(svg, "Classifier", 70, 247, 150, 55)
    class_node(svg, "GeneralizationSet", 500, 235, 280, 100, ["+ isCovering : Boolean", "+ isDisjoint : Boolean"])
    class_node(svg, "Generalization", 1100, 247, 180, 55)
    generalization(svg, "M 640 235 V 80", child="GeneralizationSet", parent="PackageableElement")

    association(svg, "A_powertypeExtent_powertype", "M 220 274 H 500",
        ("GeneralizationSet", "powertype", "+ powertype", 240, 260, "start"),
        ("Classifier", "powertypeExtent", "+ powertypeExtent", 484, 260, "end"),
        "", dot(220, 274) + dot(500, 274),
        [("0..1", 240, 308, "start"), ("*", 484, 308, "end")])
    association(svg, "A_generalizationSet_generalization", "M 780 274 H 1100",
        ("Generalization", "generalizationSet", "+ generalizationSet", 796, 260, "start"),
        ("GeneralizationSet", "generalization", "+ generalization", 1084, 260, "end"),
        "", dot(780, 274) + dot(1100, 274),
        [("*", 796, 308, "start"), ("*", 1084, 308, "end")])
    return svg


def figure_9_27():
    svg = Svg(
        "9.27", "Экземпляры",
        "Абстрактный синтаксис InstanceSpecification: слоты и спецификации значений, "
        "ассоциации с Slot, ValueSpecification, InstanceValue и Classifier.",
        1280, 1100,
    )
    class_node(svg, "DeploymentTarget", 15, 85, 180, 50, tooltip=DEPLOYMENT_TARGET_TOOLTIP)
    class_node(svg, "PackageableElement", 110, 25, 220, 50)
    class_node(svg, "DeployedArtifact", 360, 85, 185, 50, tooltip=DEPLOYED_ARTIFACT_TOOLTIP)
    class_node(svg, "Element", 685, 60, 130, 50)
    class_node(svg, "InstanceSpecification", 120, 300, 200, 380)
    class_node(svg, "Slot", 690, 320, 120, 60)
    class_node(svg, "StructuralFeature", 1020, 315, 210, 50)
    class_node(svg, "ValueSpecification", 635, 600, 230, 60)
    class_node(svg, "InstanceValue", 640, 745, 220, 60)
    class_node(svg, "Classifier", 150, 950, 140, 55)

    generalization(svg, "M 150 300 L 105 135", child="InstanceSpecification", parent="DeploymentTarget")
    generalization(svg, "M 220 300 V 75", child="InstanceSpecification", parent="PackageableElement")
    generalization(svg, "M 295 300 L 452 135", child="InstanceSpecification", parent="DeployedArtifact")
    generalization(svg, "M 750 320 V 110", child="Slot", parent="Element")
    generalization(svg, "M 750 745 V 660", child="InstanceValue", parent="ValueSpecification")

    horizontal_association(
        svg, "A_slot_owningInstance", 320, 690, 340,
        ("Slot", "owningInstance", "+ owningInstance", ["{subsets owner}", "1"]),
        ("InstanceSpecification", "slot", "+ slot", ["{subsets ownedElement}", "*"]),
        "", diamond(320, 340, "right") + dot(690, 340),
    )
    horizontal_association(
        svg, "A_definingFeature_slot", 810, 1020, 340,
        ("StructuralFeature", "slot", "+ slot", ["*"]),
        ("Slot", "definingFeature", "+ definingFeature", ["1"]),
        ' marker-end="url(#navigation)"', dot(810, 340),
    )
    vertical_association(
        svg, "A_value_owningSlot", 750, 380, 600,
        ("Slot", "owningSlot", "+ owningSlot", ["{subsets owner}", "0..1"]),
        ("ValueSpecification", "value", "+ value", ["{ordered, subsets ownedElement}", "*"]),
        ' marker-end="url(#navigation)"', diamond(750, 380, "down"),
    )
    horizontal_association(
        svg, "A_specification_owningInstanceSpec", 320, 635, 630,
        ("InstanceSpecification", "owningInstanceSpec", "+ owningInstanceSpec", ["{subsets owner}", "0..1"]),
        ("ValueSpecification", "specification", "+ specification", ["{subsets ownedElement}", "0..1"]),
        ' marker-end="url(#navigation)"', diamond(320, 630, "right") + dot(635, 630),
    )
    association(
        svg, "A_instance_instanceValue", "M 320 500 H 1040 V 700 H 860 V 775",
        ("InstanceValue", "instance", "+ instance", 340, 480, "start"),
        ("InstanceSpecification", "instanceValue", "+ instanceValue", 880, 747, "start"),
        ' marker-end="url(#navigation)"', dot(320, 500),
        [("1", 340, 460, "start"), ("*", 880, 731, "start")],
    )
    vertical_association(
        svg, "A_classifier_instanceSpecification", 220, 680, 950,
        ("InstanceSpecification", "instanceSpecification", "+ instanceSpecification", ["*"]),
        ("Classifier", "classifier", "+ classifier", ["*"]),
        ' marker-end="url(#navigation)"',
    )
    return svg


BUILDERS = {
    "9.14": figure_9_14,
    "9.27": figure_9_27,
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
