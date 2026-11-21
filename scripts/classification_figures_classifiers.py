"""
Name: classification_figures_classifiers.py
Purpose: Generate interactive SVG figures 9.1 "Classifiers" and 9.4 "Classifier Templates".
Interface: python scripts/classification_figures_classifiers.py [--output-dir PATH]
Goal: Preserve OMG semantics and notation with linked classes, associations and clear labels.
Sources: site/docs/UML-2.5.1.xmi and the official UML 2.5.1 PDF, figures 9.1 and 9.4.
Requires: Python 3 standard library and the shared SVG helpers.
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
USE_CASE_TOOLTIP = "UseCase. Specifies actions performed by subjects that yield an observable result of value for Actors or other stakeholders."
COLLABORATION_USE_TOOLTIP = "CollaborationUse. Specifies the application of the pattern described by a Collaboration to a specific situation."
SUBJECT_TOOLTIP = "subject : Classifier. The subjects to which this UseCase applies. Association A_subject_useCase from the UseCases clause."


def figure_9_1():
    svg = Svg(
        "9.1", "Классификаторы",
        "Абстрактный синтаксис Classifier, Generalization, GeneralizationSet, Substitution, Feature и связанных элементов.",
        2200, 1580,
    )
    class_node(svg, "NamedElement", 60, 30, 180, 60)
    class_node(svg, "Namespace", 700, 30, 180, 60)
    class_node(svg, "Type", 970, 30, 140, 60)
    class_node(svg, "TemplateableElement", 1260, 30, 260, 60)
    class_node(svg, "DirectedRelationship", 1800, 30, 240, 60)
    class_node(svg, "RedefinableElement", 80, 300, 260, 250, ["+ isLeaf : Boolean = false"])
    class_node(svg, "Classifier", 850, 240, 260, 980, ["+ isAbstract : Boolean = false", "+ isFinalSpecialization : Boolean = false"])
    class_node(svg, "Generalization", 1780, 260, 270, 180, ["+ isSubstitutable : Boolean [0..1] = true"])
    class_node(svg, "GeneralizationSet", 1810, 620, 220, 60)
    class_node(svg, "UseCase", 1800, 800, 180, 160, tooltip=USE_CASE_TOOLTIP)
    class_node(svg, "Substitution", 1800, 1080, 200, 200)
    class_node(svg, "Realization", 1800, 1360, 180, 60)
    class_node(svg, "Feature", 80, 700, 200, 70, ["+ isStatic : Boolean = false"])
    class_node(svg, "Property", 80, 930, 180, 60)
    class_node(svg, "CollaborationUse", 820, 1400, 260, 60, tooltip=COLLABORATION_USE_TOOLTIP)
    class_node(svg, "NamedElement", 1450, 1400, 180, 60)

    generalization(svg, "M 170 300 V 90", child="RedefinableElement", parent="NamedElement")
    generalization(svg, "M 900 240 L 790 90", child="Classifier", parent="Namespace")
    generalization(svg, "M 1000 240 V 90", child="Classifier", parent="Type")
    generalization(svg, "M 1080 240 V 110 H 1390 V 90", child="Classifier", parent="TemplateableElement")
    generalization(svg, "M 1900 260 V 90", child="Generalization", parent="DirectedRelationship")
    generalization(svg, "M 1900 1280 V 1360", child="Substitution", parent="Realization")
    generalization(svg, "M 180 700 V 550", child="Feature", parent="RedefinableElement")

    association(
        svg, "A_inheritedMember_inheritingClassifier", "M 240 60 H 400 V 280 H 850",
        ("NamedElement", "inheritedMember", "+ /inheritedMember", 260, 40, "start"),
        ("Classifier", "inheritingClassifier", "+ inheritingClassifier", 830, 260, "end"),
        "", dot(240, 60),
        [
            ("{readOnly, subsets member}", 260, 20, "start"), ("*", 260, 4, "start"),
            ("{subsets memberNamespace}", 830, 240, "end"), ("*", 830, 224, "end"),
        ],
    )
    horizontal_association(
        svg, "A_redefinitionContext_redefinableElement", 340, 850, 380,
        ("RedefinableElement", "redefinableElement", "+ /redefinableElement", ["{readOnly, union}", "*"]),
        ("Classifier", "redefinitionContext", "+ /redefinitionContext", ["{readOnly, union}", "*"]),
        ' marker-start="url(#navigation-start)"',
    )
    self_association(
        svg, "A_redefinedElement_redefinableElement", 340, 470, 550, 200, 600, 650,
        ("RedefinableElement", "redefinableElement", "+ /redefinableElement", ["{readOnly, union}", "*"]),
        ("RedefinableElement", "redefinedElement", "+ /redefinedElement", ["{readOnly, union}", "*"]),
        dot(340, 470),
    )
    self_association_top(
        svg, "A_redefinedClassifier_classifier", 1110, 580, 240, 1080, 1500, 120,
        ("Classifier", "redefinedClassifier", "+ redefinedClassifier", ["{subsets redefinedElement}", "*"]),
        ("Classifier", "classifier", "+ classifier", ["{subsets redefinableElement}", "*"]),
        dot(1110, 580),
    )
    self_association(
        svg, "A_general_classifier", 1110, 480, 1220, 1080, 1450, 1320,
        ("Classifier", "general", "+ /general", ["*"]),
        ("Classifier", "classifier", "+ classifier", ["*"]),
    )
    horizontal_association(
        svg, "A_feature_featuringClassifier", 280, 850, 735,
        ("Feature", "feature", "+ /feature", ["{readOnly, union, subsets member}", "*"]),
        ("Classifier", "featuringClassifier", "+ /featuringClassifier", ["{readOnly, union,", "subsets memberNamespace}", "0..1"]),
        "", dot(280, 735),
    )
    horizontal_association(
        svg, "A_attribute_classifier", 260, 850, 960,
        ("Property", "attribute", "+ /attribute", ["{ordered, readOnly, union,", "subsets feature,", "subsets redefinableElement}", "*"]),
        ("Classifier", "classifier", "+ /classifier", ["{readOnly, union,", "subsets featuringClassifier,", "subsets redefinitionContext}", "0..1"]),
        "", dot(260, 960),
    )
    horizontal_association(
        svg, "A_generalization_specific", 1110, 1780, 300,
        ("Classifier", "specific", "+ specific", ["{subsets source, subsets owner}", "1"]),
        ("Generalization", "generalization", "+ generalization", ["{subsets ownedElement,", "subsets directedRelationship}", "*"]),
        "", diamond(1110, 300, "right") + dot(1780, 300),
    )
    horizontal_association(
        svg, "A_general_generalization", 1110, 1780, 420,
        ("Classifier", "general", "+ general", ["{subsets target}", "1"]),
        ("Generalization", "generalization", "+ generalization", ["{subsets directedRelationship}", "*"]),
        "", dot(1110, 420),
    )
    horizontal_association(
        svg, "A_powertypeExtent_powertype", 1110, 1810, 680,
        ("Classifier", "powertype", "+ powertype", ["0..1"]),
        ("GeneralizationSet", "powertypeExtent", "+ powertypeExtent", ["*"]),
        "", dot(1110, 680),
    )
    example_association(
        svg, "M 1110 840 H 1800",
        [
            ("+ subject", 1130, 820, "start"), ("*", 1130, 804, "start"),
            ("+ useCase", 1780, 820, "end"), ("*", 1780, 804, "end"),
        ],
        markers="", title=SUBJECT_TOOLTIP,
    )
    horizontal_association(
        svg, "A_ownedUseCase_classifier", 1110, 1800, 920,
        ("Classifier", "classifier", "+ classifier", ["{subsets namespace}", "0..1"]),
        ("UseCase", "ownedUseCase", "+ ownedUseCase", ["{subsets ownedMember}", "*"]),
        "", diamond(1110, 920, "right") + dot(1800, 920),
    )
    horizontal_association(
        svg, "A_contract_substitution", 1110, 1800, 1120,
        ("Classifier", "contract", "+ contract", ["{subsets supplier}", "1"]),
        ("Substitution", "substitution", "+ substitution", ["{subsets supplierDependency}", "*"]),
        "", dot(1110, 1120),
    )
    horizontal_association(
        svg, "A_substitution_substitutingClassifier", 1110, 1800, 1210,
        ("Classifier", "substitutingClassifier", "+ substitutingClassifier", ["{subsets client, subsets owner}", "1"]),
        ("Substitution", "substitution", "+ substitution", ["{subsets ownedElement,", "subsets clientDependency}", "*"]),
        "", diamond(1110, 1210, "right"),
    )
    vertical_association(
        svg, "A_generalizationSet_generalization", 1950, 440, 620,
        ("Generalization", "generalizationSet", "+ generalizationSet", ["*"]),
        ("GeneralizationSet", "generalization", "+ generalization", ["*"]),
        "", dot(1950, 440) + dot(1950, 620),
    )
    association(
        svg, "A_inheritedMember_inheritingClassifier", "M 1110 1020 H 1540 V 1400",
        ("Classifier", "inheritingClassifier", "+ inheritingClassifier", 1130, 1000, "start"),
        ("NamedElement", "inheritedMember", "+ /inheritedMember", 1560, 1372, "start"),
        "", dot(1110, 1020),
        [
            ("{subsets memberNamespace}", 1130, 980, "start"), ("*", 1130, 964, "start"),
            ("{readOnly, subsets member}", 1560, 1356, "start"), ("*", 1560, 1340, "start"),
        ],
        group_id="A_inheritedMember_inheritingClassifier-2",
    )
    vertical_association(
        svg, "A_collaborationUse_classifier", 900, 1220, 1400,
        ("Classifier", "classifier", "+ classifier", ["{subsets owner}", "0..1"]),
        ("CollaborationUse", "collaborationUse", "+ collaborationUse", ["{subsets ownedElement}", "*"]),
        "", diamond(900, 1220, "down") + dot(900, 1400), side=-4,
    )
    vertical_association(
        svg, "A_representation_classifier", 1040, 1220, 1400,
        ("Classifier", "classifier", "+ classifier", ["{redefines classifier}", "0..1"]),
        ("CollaborationUse", "representation", "+ representation", ["{subsets collaborationUse}", "0..1"]),
        "", dot(1040, 1220) + dot(1040, 1400), side=7,
    )
    return svg


def figure_9_4():
    svg = Svg(
        "9.4", "Шаблоны классификаторов",
        "Абстрактный синтаксис RedefinableTemplateSignature и ClassifierTemplateParameter.",
        1600, 750,
    )
    class_node(svg, "RedefinableElement", 100, 20, 220, 60)
    class_node(svg, "TemplateSignature", 430, 20, 220, 60)
    class_node(svg, "TemplateableElement", 1080, 20, 250, 60)
    class_node(svg, "RedefinableTemplateSignature", 140, 170, 320, 220)
    class_node(svg, "Classifier", 1050, 170, 450, 60)
    class_node(svg, "TemplateParameter", 80, 560, 220, 60)
    class_node(svg, "ClassifierTemplateParameter", 1000, 500, 500, 90, ["+ allowSubstitutable : Boolean = true"])

    generalization(svg, "M 220 170 V 80", child="RedefinableTemplateSignature", parent="RedefinableElement")
    generalization(svg, "M 400 170 H 300 V 80 H 430", child="RedefinableTemplateSignature", parent="TemplateSignature")
    generalization(svg, "M 1160 170 V 80", child="Classifier", parent="TemplateableElement")
    generalization(svg, "M 1000 590 H 300", child="ClassifierTemplateParameter", parent="TemplateParameter")

    horizontal_association(
        svg, "A_ownedTemplateSignature_classifier", 460, 1050, 210,
        ("RedefinableTemplateSignature", "ownedTemplateSignature", "+ ownedTemplateSignature", ["{subsets redefinableElement,", "redefines ownedTemplateSignature}", "0..1"]),
        ("Classifier", "classifier", "+ classifier", ["{subsets redefinitionContext,", "redefines template}", "0..1"]),
        "", dot(460, 210) + diamond(1050, 210, "left"),
    )
    self_association(
        svg, "A_extendedSignature_redefinableTemplateSignature", 460, 330, 390, 420, 740, 480,
        ("RedefinableTemplateSignature", "redefinableTemplateSignature", "+ redefinableTemplateSignature", ["{subsets redefinableElement}", "*"]),
        ("RedefinableTemplateSignature", "extendedSignature", "+ extendedSignature", ["{subsets redefinedElement}", "*"]),
    )
    vertical_association(
        svg, "A_inheritedParameter_redefinableTemplateSignature", 180, 390, 560,
        ("RedefinableTemplateSignature", "redefinableTemplateSignature", "+ redefinableTemplateSignature", ["{subsets templateSignature}", "*"]),
        ("TemplateParameter", "inheritedParameter", "+ /inheritedParameter", ["{readOnly, subsets parameter}", "*"]),
        "", dot(180, 390) + dot(180, 560),
    )
    vertical_association(
        svg, "A_classifier_templateParameter_parameteredElement", 1100, 230, 500,
        ("Classifier", "parameteredElement", "+ parameteredElement", ["{redefines parameteredElement}", "1"]),
        ("ClassifierTemplateParameter", "templateParameter", "+ templateParameter", ["{redefines templateParameter}", "0..1"]),
        "", dot(1100, 230) + dot(1100, 500),
    )
    vertical_association(
        svg, "A_constrainingClassifier_classifierTemplateParameter", 1500, 230, 500,
        ("Classifier", "constrainingClassifier", "+ constrainingClassifier", ["*"]),
        ("ClassifierTemplateParameter", "classifierTemplateParameter", "+ classifierTemplateParameter", ["*"]),
        "", dot(1500, 230) + dot(1500, 500), side=-1,
    )
    return svg


BUILDERS = {"9.1": figure_9_1, "9.4": figure_9_4}


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
