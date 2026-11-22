"""
Name: section_config.py
Purpose: Load shared clause metadata and resolve handbook source files.
Interface: from section_config import load_sections, section_settings, data_files
Goal: Keep clause-specific paths, catalogs and generator settings out of individual tools.
Requires: Python 3 standard library and scripts/sections.json.
Usage:
  Import this module from other scripts in scripts/; it is not a standalone command.
  from section_config import section_settings
  settings = section_settings("9")
  Edit scripts/sections.json to add a clause or change its configured paths and generator.
"""

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
CONFIG = ROOT / "scripts" / "sections.json"


def load_sections():
    sections = json.loads(CONFIG.read_text(encoding="utf-8"))
    for clause, settings in sections.items():
        if settings["classifier_catalog"].split(".")[0] != clause:
            raise ValueError(f"Invalid classifier catalog for clause {clause}")
        if settings["association_catalog"].split(".")[0] != clause:
            raise ValueError(f"Invalid association catalog for clause {clause}")
    return sections


def section_settings(clause):
    sections = load_sections()
    if clause not in sections:
        raise ValueError(f"Unsupported clause: {clause}; configure it in scripts/sections.json first")
    return sections[clause]


def data_files(clauses=None, existing_only=True):
    sections = load_sections()
    selected = list(sections) if clauses is None else [str(clause) for clause in clauses]
    result = []
    for clause in selected:
        if clause not in sections:
            raise ValueError(f"Unsupported clause: {clause}")
        path = ROOT / sections[clause]["data"]
        if path not in result and (path.is_file() or not existing_only):
            result.append(path)
    return result


def content_files(clauses=None, existing_only=True):
    sections = load_sections()
    selected = list(sections) if clauses is None else [str(clause) for clause in clauses]
    result = []
    for clause in selected:
        if clause not in sections:
            raise ValueError(f"Unsupported clause: {clause}")
        for name in sections[clause]["content"]:
            path = ROOT / "site" / "data" / "content" / name
            if path.is_file() or not existing_only:
                result.append(path)
    return result


def clause_label(clause):
    settings = section_settings(str(clause))
    return f"{clause} {settings['title']}"


def catalog_sections(clauses=None):
    sections = load_sections()
    selected = list(sections) if clauses is None else [str(clause) for clause in clauses]
    return {
        sections[clause][kind]: ("classifier" if kind == "classifier_catalog" else "association", title)
        for clause in selected
        for kind, title in (
            ("classifier_catalog", "Классификаторы раздела"),
            ("association_catalog", "Ассоциации раздела"),
        )
    }
