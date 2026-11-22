"""
Name: handbook_data.py
Purpose: Load the handbook's JavaScript data files without executing JavaScript.
Interface: from handbook_data import load_handbook, slug, base_routes
Goal: Give Python generators and validators one typed, deterministic view of the curated data.
Requires: Python 3 standard library.
Usage:
  Import this module from other scripts in scripts/; it is not a standalone command.
  from handbook_data import load_handbook
  data, xmi, content = load_handbook()
  Use load_pages() for generated pages and base_routes(data) for permanent hash routes.
"""

import json
from pathlib import Path
import re

from section_config import content_files, data_files


ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
DATA = SITE / "data" / "common-structure.js"
XMI_DATA = SITE / "data" / "common-structure-xmi.js"
XMI_DIR = SITE / "data" / "xmi"
CONTENT_DIR = SITE / "data" / "content"
PAGES_DATA = SITE / "data" / "common-structure-pages.js"
PAGES_DIR = SITE / "data" / "pages"


def _load_content_from_fragments():
    content = {"sections": {}, "classifiers": {}}
    for path in content_files():
        target_key = "sections" if path.name.startswith("sections-") else "classifiers"
        marker = f"Object.assign(window.UML_CONTENT.{target_key},"
        content[target_key].update(assigned_literal(path, marker))
    return content


class JsLiteralParser:
    def __init__(self, text):
        self.text = text
        self.length = len(text)

    def skip_space(self, position):
        while position < self.length:
            if self.text[position].isspace():
                position += 1
            elif self.text.startswith("//", position):
                position = self.text.find("\n", position)
                if position < 0:
                    return self.length
            elif self.text.startswith("/*", position):
                end = self.text.find("*/", position + 2)
                if end < 0:
                    raise ValueError("Unterminated JavaScript comment")
                position = end + 2
            else:
                break
        return position

    def parse(self, position=0):
        value, position = self.value(position)
        return value, self.skip_space(position)

    def value(self, position):
        position = self.skip_space(position)
        if position >= self.length:
            raise ValueError("Unexpected end of JavaScript data")
        character = self.text[position]
        if character == "{":
            return self.object(position + 1)
        if character == "[":
            return self.array(position + 1)
        if character in "\"'":
            return self.string(position)
        number = re.match(r"-?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?", self.text[position:])
        if number:
            raw = number.group(0)
            return (float(raw) if any(mark in raw for mark in ".eE") else int(raw)), position + len(raw)
        for literal, value in (("true", True), ("false", False), ("null", None)):
            if self.text.startswith(literal, position):
                return value, position + len(literal)
        raise ValueError(f"Unsupported JavaScript value at offset {position}: {self.text[position:position + 40]!r}")

    def string(self, position):
        quote = self.text[position]
        if quote == '"':
            return json.decoder.scanstring(self.text, position + 1)
        position += 1
        result = []
        while position < self.length:
            character = self.text[position]
            if character == quote:
                return "".join(result), position + 1
            if character == "\\":
                position += 1
                escapes = {"n": "\n", "r": "\r", "t": "\t", "b": "\b", "f": "\f", "v": "\v", "0": "\0"}
                character = self.text[position]
                if character == "u":
                    result.append(chr(int(self.text[position + 1:position + 5], 16)))
                    position += 5
                    continue
                result.append(escapes.get(character, character))
            else:
                result.append(character)
            position += 1
        raise ValueError("Unterminated JavaScript string")

    def array(self, position):
        result = []
        while True:
            position = self.skip_space(position)
            if self.text[position] == "]":
                return result, position + 1
            value, position = self.value(position)
            result.append(value)
            position = self.skip_space(position)
            if self.text[position] == "]":
                return result, position + 1
            if self.text[position] != ",":
                raise ValueError(f"Expected ',' or ']' at offset {position}")
            position += 1

    def object(self, position):
        result = {}
        while True:
            position = self.skip_space(position)
            if self.text[position] == "}":
                return result, position + 1
            if self.text[position] in "\"'":
                key, position = self.string(position)
            else:
                match = re.match(r"[A-Za-z_$][A-Za-z0-9_$]*", self.text[position:])
                if not match:
                    raise ValueError(f"Expected object key at offset {position}")
                key = match.group(0)
                position += len(key)
            position = self.skip_space(position)
            if self.text[position] != ":":
                raise ValueError(f"Expected ':' at offset {position}")
            value, position = self.value(position + 1)
            result[key] = value
            position = self.skip_space(position)
            if self.text[position] == "}":
                return result, position + 1
            if self.text[position] != ",":
                raise ValueError(f"Expected ',' or '}}' at offset {position}")
            position += 1


def parse_literal(text, start=0):
    return JsLiteralParser(text).parse(start)[0]


def assigned_literal(path, marker=None):
    text = path.read_text(encoding="utf-8")
    start = text.index(marker) + len(marker) if marker else text.index("=") + 1
    return parse_literal(text, start)


def slug(value):
    return re.sub(r"^-|-$", "", re.sub(r"[^a-z0-9]+", "-", value.lower()))


def load_xmi():
    """Return full XMI data by merging base file with per-class fragments."""
    base = assigned_literal(XMI_DATA)
    classes = {}
    for fpath in sorted(XMI_DIR.glob("*.js")):
        marker = f'window.UML_XMI_DATA.classes["{fpath.stem}"] ='
        classes[fpath.stem] = assigned_literal(fpath, marker)
    base["classes"] = classes
    return base


def load_pages():
    result = assigned_literal(PAGES_DATA)
    for path in sorted(PAGES_DIR.glob("*.js")):
        result["pages"].update(assigned_literal(path, "Object.assign(window.UML_PAGES.pages,"))
        result["titles"].update(assigned_literal(path, "Object.assign(window.UML_PAGES.titles,"))
        result["searchItems"].extend(assigned_literal(path, "window.UML_PAGES.searchItems.push(..."))
    return result


def load_handbook():
    data = {}
    for name in ("sections", "classifiers", "associations", "diagrams"):
        data[name] = []
    for path in data_files():
        text = path.read_text(encoding="utf-8")
        for name in data:
            marker = f"const {name} ="
            data[name].extend(parse_literal(text, text.index(marker) + len(marker)))
    associations = {item["name"]: item for item in data["associations"]}
    for diagram in data["diagrams"]:
        stem = diagram["id"].replace(".", "-")
        diagram["image"] = f"assets/diagrams/figure-{stem}.png"
        diagram["vector"] = f"assets/diagrams/figure-{stem}.svg"
        for name in diagram.get("associations", []):
            associations[name].setdefault("diagrams", []).append(diagram.get("name", diagram["en"]))
    return data, load_xmi(), _load_content_from_fragments()


def base_routes(data):
    result = [("#/", "Метамодель UML"), ("#/diagrams", "Диаграммы")]
    result.extend((f"#/section/{slug(item['id'])}", item["title"]) for item in data["sections"])
    result.extend((f"#/classifier/{slug(item['name'])}", item["ru"]) for item in data["classifiers"])
    result.extend((f"#/association/{slug(item['name'])}", item["ru"]) for item in data["associations"])
    result.extend((f"#/diagram/{slug(item['id'])}", item["title"]) for item in data["diagrams"])
    return result
