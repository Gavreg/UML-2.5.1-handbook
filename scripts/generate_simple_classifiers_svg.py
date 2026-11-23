"""
Name: generate_simple_classifiers_svg.py
Purpose: Generate interactive vector versions of the 12 figures in UML 2.5.1 Clause 10 (Simple Classifiers).
Interface: python scripts/generate_simple_classifiers_svg.py [--clause N] [--output-dir PATH] [--check]
Goal: Preserve OMG semantics and notation while adding local links, tooltips and consistent geometry.
Sources: site/docs/UML-2.5.1.xmi, the official UML 2.5.1 PDF and the curated handbook data.
Requires: Python 3 standard library.
Usage:
  Run from the repository root after changing a Clause 10 figure builder or its source data.
  python scripts/generate_simple_classifiers_svg.py                 write all Clause 10 SVG figures
  python scripts/generate_simple_classifiers_svg.py --clause 10     select the configured clause
  python scripts/generate_simple_classifiers_svg.py --check         verify output without rewriting it
  Use --output-dir PATH for a separate destination instead of site/assets/diagrams.
"""

from argparse import ArgumentParser
from pathlib import Path

from section_config import load_sections
from simple_classifiers_figures_notation import BUILDERS as NOTATION_BUILDERS
from simple_classifiers_figures_syntax import BUILDERS as SYNTAX_BUILDERS


ROOT = Path(__file__).resolve().parent.parent
FIGURE_BUILDERS = {
    **SYNTAX_BUILDERS,
    **NOTATION_BUILDERS,
}
FIGURE_BUILDERS = dict(sorted(
    FIGURE_BUILDERS.items(),
    key=lambda item: int(item[0].split(".")[1]),
))


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--clause", choices=sorted(load_sections(), key=int), help="Generate only this clause's figures")
    parser.add_argument("--output-dir", type=Path, default=ROOT / "site" / "assets" / "diagrams")
    parser.add_argument("--check", action="store_true", help="Check generated SVG files without rewriting them")
    args = parser.parse_args()
    builders = {
        figure: builder for figure, builder in FIGURE_BUILDERS.items()
        if args.clause is None or figure.split(".")[0] == args.clause
    }
    missing = []
    changed = []
    for figure, builder in builders.items():
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
        print(f"Generated SVG checks: OK; {len(builders)} figures synchronized")


if __name__ == "__main__":
    main()
