"""
Name: site_manifest.py
Purpose: Synchronize the offline script manifest in site/index.html with existing data fragments.
Interface: from site_manifest import expected_index, write_index
Goal: Add new clause resources without manual, order-sensitive HTML edits.
Requires: Python 3 standard library and scripts/sections.json.
"""

from pathlib import Path
import re

from section_config import content_files, data_files


ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
INDEX = SITE / "index.html"


def fragment_key(path, kinds):
    kind, clause = path.stem.rsplit("-", 1)
    return kinds[kind], int(clause) if clause.isdigit() else 999, path.name


def script_paths():
    paths = [*data_files()]
    xmi_base = SITE / "data" / "common-structure-xmi.js"
    if xmi_base.is_file():
        paths.append(xmi_base)
        paths.extend(sorted((SITE / "data" / "xmi").glob("*.js"), key=lambda path: path.name))
    content_base = SITE / "data" / "common-structure-content.js"
    if content_base.is_file():
        paths.append(content_base)
        paths.extend(sorted(
            content_files(),
            key=lambda path: fragment_key(path, {"sections": 0, "classifiers": 1}),
        ))
    pages_base = SITE / "data" / "common-structure-pages.js"
    if pages_base.is_file():
        paths.append(pages_base)
        paths.extend(sorted(
            (SITE / "data" / "pages").glob("*.js"),
            key=lambda path: fragment_key(
                path, {"sections": 0, "classifiers": 1, "associations": 2, "diagrams": 3}
            ),
        ))
    paths.append(SITE / "app.js")
    return paths


def expected_index():
    text = INDEX.read_text(encoding="utf-8")
    matches = list(re.finditer(r'^  <script src="([^"]+)" defer></script>\n?', text, re.MULTILINE))
    if not matches:
        raise ValueError("No script manifest found in site/index.html")
    existing_order = {
        match.group(1): index for index, match in enumerate(matches)
    }
    app = SITE / "app.js"
    paths = sorted(
        script_paths(),
        key=lambda path: (
            path == app,
            existing_order.get(path.relative_to(SITE).as_posix(), len(existing_order)),
        ),
    )
    scripts = "\n".join(
        f'  <script src="{path.relative_to(SITE).as_posix()}" defer></script>'
        for path in paths
    )
    return text[:matches[0].start()] + scripts + "\n" + text[matches[-1].end():]


def write_index():
    content = expected_index()
    INDEX.write_text(content, encoding="utf-8")
    return content
