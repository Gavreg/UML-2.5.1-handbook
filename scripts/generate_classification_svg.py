"""
Name: generate_classification_svg.py
Purpose: Generate interactive vector versions of 32 figures in UML 2.5.1 Clause 9.
Interface: python scripts/generate_classification_svg.py [--output-dir PATH] [--check]
Goal: Preserve OMG semantics and notation while adding local links, tooltips and consistent geometry.
Sources: site/docs/UML-2.5.1.xmi, the official UML 2.5.1 PDF and the curated handbook data.
Requires: Python 3 standard library.
"""

from argparse import ArgumentParser
from pathlib import Path

from classification_figures_classifiers import BUILDERS as CLASSIFIER_BUILDERS
from classification_figures_examples import BUILDERS as EXAMPLE_BUILDERS
from classification_figures_features import BUILDERS as FEATURE_BUILDERS
from classification_figures_generalizations import BUILDERS as GENERALIZATION_BUILDERS
from classification_figures_structure import BUILDERS as STRUCTURE_BUILDERS


ROOT = Path(__file__).resolve().parent.parent
FIGURE_BUILDERS = {
    **CLASSIFIER_BUILDERS,
    **EXAMPLE_BUILDERS,
    **FEATURE_BUILDERS,
    **GENERALIZATION_BUILDERS,
    **STRUCTURE_BUILDERS,
}
FIGURE_BUILDERS = dict(sorted(
    FIGURE_BUILDERS.items(),
    key=lambda item: int(item[0].split(".")[1]),
))


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
