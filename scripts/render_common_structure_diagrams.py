"""
Name: render_common_structure_diagrams.py
Purpose: Render the 58 figures in UML 2.5.1 Clauses 7-9 as lossless PNG screenshots.
Interface: python scripts/render_common_structure_diagrams.py [--clause N] [--pdf PATH] [--output-dir PATH]
Goal: Preserve the original OMG diagram artwork while making it available to the offline handbook.
Source: OMG Unified Modeling Language 2.5.1, formal/17-12-05, printed pages 21-40, 69-78 and 99-129.
Requires: Python 3 and PyMuPDF.
Usage:
  Run from the repository root to refresh reference PNGs from the official PDF.
  python scripts/render_common_structure_diagrams.py --clause 9
  python scripts/render_common_structure_diagrams.py --pdf PATH --output-dir PATH
  Without --clause all configured figures are rendered; output defaults to site/assets/diagrams.
"""

from argparse import ArgumentParser
from pathlib import Path

import pymupdf

from section_config import load_sections


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
    "8.1": (69, (55, 305, 440, 548)),
    "8.2": (71, (60, 95, 465, 320)),
    "8.3": (74, (60, 90, 425, 445)),
    "8.4": (77, (60, 80, 545, 378)),
    "8.5": (78, (50, 420, 560, 625)),
    "9.1": (99, (50, 295, 545, 568)),
    "9.2": (103, (55, 160, 545, 345)),
    "9.3": (103, (55, 405, 545, 440)),
    "9.4": (104, (50, 85, 545, 232)),
    "9.5": (106, (50, 140, 545, 350)),
    "9.6": (106, (50, 425, 300, 462)),
    "9.7": (106, (50, 545, 545, 680)),
    "9.8": (107, (50, 95, 545, 135)),
    "9.9": (107, (50, 267, 545, 475)),
    "9.10": (111, (50, 258, 545, 500)),
    "9.11": (115, (50, 82, 545, 390)),
    "9.12": (116, (50, 55, 545, 100)),
    "9.13": (116, (50, 243, 545, 556)),
    "9.14": (119, (50, 502, 545, 568)),
    "9.15": (120, (50, 253, 545, 362)),
    "9.16": (120, (50, 430, 545, 570)),
    "9.17": (121, (50, 58, 545, 166)),
    "9.18": (121, (50, 482, 545, 596)),
    "9.19": (122, (50, 58, 545, 166)),
    "9.20": (122, (50, 250, 545, 355)),
    "9.21": (122, (50, 388, 545, 497)),
    "9.22": (123, (50, 60, 545, 346)),
    "9.23": (123, (50, 448, 545, 592)),
    "9.24": (124, (50, 120, 545, 338)),
    "9.25": (125, (50, 62, 545, 367)),
    "9.26": (126, (50, 60, 545, 250)),
    "9.27": (126, (50, 400, 545, 635)),
    "9.28": (129, (50, 58, 300, 94)),
    "9.29": (129, (50, 150, 300, 216)),
    "9.30": (129, (50, 270, 545, 306)),
    "9.31": (129, (50, 360, 545, 412)),
    "9.32": (129, (50, 470, 545, 507)),
}


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--clause", choices=sorted(load_sections(), key=int), help="Render only this clause's figures")
    parser.add_argument(
        "--pdf",
        type=Path,
        default=Path("site/docs/omg-uml-2.5.1-formal-17-12-05.pdf"),
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
            if args.clause is not None and figure.split(".")[0] != args.clause:
                continue
            page = document[printed_page + 41]
            pixmap = page.get_pixmap(matrix=pymupdf.Matrix(2, 2), clip=pymupdf.Rect(bounds), alpha=False)
            target = args.output_dir / f"figure-{figure.replace('.', '-')}.png"
            pixmap.save(target)
            print(f"Figure {figure}: {target} ({pixmap.width}x{pixmap.height})")


if __name__ == "__main__":
    main()
