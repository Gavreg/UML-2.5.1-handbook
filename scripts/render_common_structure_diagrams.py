"""
Name: render_common_structure_diagrams.py
Purpose: Render the 21 figures in UML 2.5.1 Clause 7 as lossless PNG screenshots.
Interface: python scripts/render_common_structure_diagrams.py [--pdf PATH] [--output-dir PATH]
Goal: Preserve the original OMG diagram artwork while making it available to the offline handbook.
Source: OMG Unified Modeling Language 2.5.1, formal/17-12-05, printed pages 21-40.
Requires: Python 3 and PyMuPDF.
"""

from argparse import ArgumentParser
from pathlib import Path

import pymupdf


FIGURES = {
    "7.1": (21, (50, 286, 545, 675)),
    "7.2": (22, (50, 480, 545, 552)),
    "7.3": (23, (50, 78, 545, 370)),
    "7.4": (23, (50, 402, 545, 685)),
    "7.5": (27, (50, 225, 545, 555)),
    "7.6": (31, (50, 55, 545, 445)),
    "7.7": (31, (50, 558, 545, 681)),
    "7.8": (32, (50, 90, 545, 167)),
    "7.9": (32, (50, 248, 545, 346)),
    "7.10": (33, (50, 80, 545, 333)),
    "7.11": (35, (50, 380, 545, 455)),
    "7.12": (35, (50, 510, 545, 580)),
    "7.13": (36, (50, 80, 545, 195)),
    "7.14": (37, (50, 168, 545, 280)),
    "7.15": (37, (50, 338, 545, 415)),
    "7.16": (37, (50, 474, 545, 579)),
    "7.17": (38, (50, 80, 545, 323)),
    "7.18": (39, (50, 170, 545, 221)),
    "7.19": (39, (50, 440, 545, 487)),
    "7.20": (39, (50, 542, 545, 606)),
    "7.21": (40, (50, 50, 545, 168)),
}


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument(
        "--pdf",
        type=Path,
        default=Path("docs/omg-uml-2.5.1-formal-17-12-05.pdf"),
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("site/assets/diagrams"),
    )
    args = parser.parse_args()

    args.output_dir.mkdir(parents=True, exist_ok=True)
    with pymupdf.open(args.pdf) as document:
        for figure, (printed_page, bounds) in FIGURES.items():
            page = document[printed_page + 41]
            pixmap = page.get_pixmap(matrix=pymupdf.Matrix(2, 2), clip=pymupdf.Rect(bounds), alpha=False)
            target = args.output_dir / f"figure-{figure.replace('.', '-')}.png"
            pixmap.save(target)
            print(f"Figure {figure}: {target} ({pixmap.width}x{pixmap.height})")


if __name__ == "__main__":
    main()
