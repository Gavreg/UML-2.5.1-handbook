"""
Name: build_site.py
Purpose: Build every handbook page, hash route, navigation block and search record in Python.
Interface: python scripts/build_site.py [--clause N] [--check]
Goal: Keep JavaScript limited to browser interaction while generating deterministic offline page content.
Requires: Python 3 standard library, scripts/sections.json and existing clause data files.
Usage:
  Run from the repository root after editing handbook data or Russian content.
  python scripts/build_site.py                regenerate all pages and the script manifest
  python scripts/build_site.py --clause 9     regenerate only Clause 9 and shared base data
  python scripts/build_site.py --check        fail on stale output without changing files
"""

from argparse import ArgumentParser
from html import escape
import json
import re

from handbook_data import ROOT, SITE, base_routes, load_handbook, slug
from section_config import catalog_sections, load_sections
from site_manifest import INDEX, expected_index, write_index


PAGES_DIR = SITE / "data" / "pages"

OUTPUT = SITE / "data" / "common-structure-pages.js"

KIND_LABELS = {
    "Class": "Класс",
    "Abstract Class": "Абстрактный класс",
    "Enumeration": "Перечисление",
}
CLAUSES = {
    clause: {
        "label": f"{clause} {settings['title']}",
        "title": settings["title_ru"],
        "en": settings["title"],
    }
    for clause, settings in load_sections().items()
}
CATALOG_SECTIONS = catalog_sections()
CATALOG_TITLES = {"classifier": "Классификаторы", "association": "Ассоциации"}


def number(value):
    return str(int(value)) if isinstance(value, float) and value.is_integer() else str(value)


class HandbookRenderer:
    def __init__(self, data, xmi, content):
        self.data = data
        self.xmi = xmi
        self.content = content
        self.classifiers = {item["name"]: item for item in data["classifiers"]}
        self.associations = {item["name"]: item for item in data["associations"]}
        self.diagrams = {item["id"]: item for item in data["diagrams"]}
        self.diagram_by_name = {}
        for diagram in data["diagrams"]:
            for name in (diagram.get("name"), diagram.get("en")):
                if name:
                    self.diagram_by_name.setdefault(name.casefold(), diagram["id"])
        for settings in load_sections().values():
            for name, figure in settings.get("diagram_aliases", {}).items():
                self.diagram_by_name[name.casefold()] = figure
        self.clauses = {
            clause: metadata
            for clause, metadata in CLAUSES.items()
            if any(section["id"].startswith(clause + ".") for section in data["sections"])
        }
        names = sorted([*self.classifiers, *self.associations], key=len, reverse=True)
        self.metamodel_pattern = re.compile(
            r"(^|[^A-Za-z0-9_])(" + "|".join(re.escape(name) for name in names) + r")(?![A-Za-z0-9_])"
        )

    def classifier_link(self, name):
        if name in self.classifiers:
            return f'<a href="#/classifier/{slug(name)}">{escape(name)}</a>'
        return f"<code>{escape(name)}</code>"

    def association_link(self, name):
        if name in self.associations:
            return f'<a href="#/association/{slug(name)}">{escape(name)}</a>'
        return f"<code>{escape(name)}</code>"

    def description(self, value, current_name=""):
        text = str(value)
        result = []
        offset = 0
        for match in self.metamodel_pattern.finditer(text):
            name = match.group(2)
            start = match.start(2)
            result.append(escape(text[offset:start]))
            if name == current_name:
                result.append(escape(name))
            elif name in self.classifiers:
                result.append(f'<a href="#/classifier/{slug(name)}">{escape(name)}</a>')
            else:
                result.append(f'<a href="#/association/{slug(name)}">{escape(name)}</a>')
            offset = match.end(2)
        result.append(escape(text[offset:]))
        return "".join(result)

    def link_list(self, items=None, kind="classifier"):
        if not items:
            return ""
        linker = self.association_link if kind == "association" else self.classifier_link
        return '<ul class="link-list">' + "".join(f"<li>{linker(item)}</li>" for item in items) + "</ul>"

    def breadcrumbs(self, items):
        parts = ['<a href="#/">Справочник</a>']
        for index, item in enumerate(items):
            parts.append('<span aria-hidden="true">/</span>')
            if item.get("href") and index < len(items) - 1:
                parts.append(f'<a href="{item["href"]}">{escape(item["label"])}</a>')
            else:
                parts.append(f'<span aria-current="page">{escape(item["label"])}</span>')
        return '<nav class="breadcrumbs" aria-label="Хлебные крошки">' + "".join(parts) + "</nav>"

    def source_link(self, page):
        return f'''<a class="source-link" href="docs/omg-uml-2.5.1-formal-17-12-05.pdf#page={page + 42}" target="_blank" rel="noopener">
          Открыть оригинал, стр. {page}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/></svg>
        </a>'''

    def spec_paragraphs(self, paragraphs=None):
        return "".join(f"<p>{self.description(paragraph)}</p>" for paragraph in paragraphs or [])

    def spec_notes(self, notes=None):
        return "".join(
            f'<p class="notice spec-note"><strong>Примечание.</strong> {self.description(note)}</p>'
            for note in notes or []
        )

    def syntax_block(self, value):
        return f'<pre class="syntax-block"><code>{escape(value)}</code></pre>' if value else ""

    def formal_expression(self, label, value):
        if not value:
            return ""
        return f'<div class="formal-expression"><span class="formal-expression-label">{label}</span><pre><code>{escape(value)}</code></pre></div>'

    def render_spec_subsection(self, subsection):
        level = min(6, len(subsection["id"].split(".")) - 1)
        steps = ""
        if subsection.get("steps"):
            rendered_steps = []
            for step in subsection["steps"]:
                substeps = ""
                if step.get("substeps"):
                    substeps = '<ol class="spec-substeps" type="a">' + "".join(
                        f"<li>{self.description(substep)}</li>" for substep in step["substeps"]
                    ) + "</ol>"
                rendered_steps.append(
                    f'<li><p>{self.description(step["text"])}</p>{substeps}{self.spec_notes(step.get("notes"))}</li>'
                )
            steps = '<ol class="spec-steps">' + "".join(rendered_steps) + "</ol>"
        table = ""
        if subsection.get("table"):
            source = subsection["table"]
            headings = "".join(f'<th scope="col">{escape(column)}</th>' for column in source["columns"])
            rows = "".join(
                "<tr>" + "".join(f"<td>{escape(cell)}</td>" for cell in row) + "</tr>"
                for row in source["rows"]
            )
            table = f'''<div class="spec-table-wrapper"><table class="spec-table">
              <caption>{escape(source["caption"])}</caption><thead><tr>{headings}</tr></thead><tbody>{rows}</tbody>
            </table></div>'''
        bullets = ""
        if subsection.get("bullets"):
            bullets = "<ul>" + "".join(f"<li>{self.description(item)}</li>" for item in subsection["bullets"]) + "</ul>"
        additional_code = "".join(self.syntax_block(value) for value in subsection.get("additionalCode", []))
        figures = "".join(self.figure_card(figure) for figure in subsection.get("figures", []))
        return f'''<section class="spec-subsection" id="section-{slug(subsection["id"])}">
          <h{level}><span class="spec-section-number">{subsection["id"]}</span>{escape(subsection["title"])}</h{level}>
          <p class="original-name subsection-original" lang="en">{escape(subsection["en"])}</p>
          {self.spec_paragraphs(subsection.get("paragraphs"))}
          {self.spec_notes(subsection.get("notes"))}
          {self.spec_paragraphs(subsection.get("afterNotes"))}
          {bullets}
          {self.spec_paragraphs(subsection.get("afterBullets"))}
          {steps}
          {self.spec_paragraphs(subsection.get("afterSteps"))}
          {self.spec_notes(subsection.get("notesAfterSteps"))}
          {self.syntax_block(subsection.get("code"))}
          {self.spec_paragraphs(subsection.get("afterCode"))}
          {additional_code}
          {self.spec_paragraphs(subsection.get("finalParagraphs"))}
          {self.syntax_block(subsection.get("finalCode"))}
          {self.spec_paragraphs(subsection.get("closingParagraphs"))}
          {table}{figures}
        </section>'''

    def detail_section(self, title, items, key="signature", current_name=""):
        if not items:
            return ""
        rendered = []
        for item in items:
            name = item.get(key) or item.get("name", "")
            rendered.append(f'''<li class="detail-item"><code>{escape(name)}</code>
              {f'<p>{self.description(item["description"], current_name)}</p>' if item.get("description") else ""}
              {self.formal_expression("Предусловие (OCL)", item.get("pre"))}
              {self.formal_expression("Тело операции (OCL)", item.get("body"))}
              {self.formal_expression("Ограничение (OCL)", item.get("ocl"))}
            </li>''')
        return f'<section><h2>{title}</h2><ul class="detail-list">' + "".join(rendered) + "</ul></section>"

    def classifier_details(self, item, kind, key):
        overrides = self.content["classifiers"].get(item["name"], {}).get(kind, {})
        result = []
        for entry in item.get(kind, []):
            merged = dict(entry)
            override = overrides.get(entry.get(key) or entry.get("name"), {})
            if isinstance(override, dict):
                merged.update(override)
            elif isinstance(override, str):
                merged["description"] = override
            result.append(merged)
        return result

    def association_figures(self, item):
        return [
            self.diagram_by_name[name.casefold()]
            for name in item["diagrams"] if name.casefold() in self.diagram_by_name
        ]

    def subset_diagram_link(self, reference, name):
        owner = reference.get("owner") or {}
        association_name = owner.get("name") if owner.get("type") == "association" else None
        if not association_name:
            direct = self.xmi["classes"].get(owner.get("name"), {}).get("direct", [])
            association_name = next(
                (prop.get("association") for prop in direct if prop["id"] == reference["id"]), None
            )
        association = self.associations.get(association_name)
        figures = self.association_figures(association) if association else []
        return f'<a href="#/diagram/{slug(figures[0])}">{escape(name)}</a>' if figures else ""

    def property_signature(self, prop):
        signature = prop["signature"]
        modifier_start = signature.find(" {")
        references = prop.get("subsettedProperties", []) + prop.get("redefinedProperties", [])
        if modifier_start < 0 or not references:
            return escape(signature)
        subsetted = {item["name"] for item in prop.get("subsettedProperties", [])}
        by_name = {}
        for reference in references:
            by_name.setdefault(reference["name"], reference)
        names = sorted(by_name, key=len, reverse=True)
        pattern = re.compile(r"\b(" + "|".join(re.escape(name) for name in names) + r")\b")
        modifiers = signature[modifier_start + 2:-1]

        def replace(match):
            name = match.group(1)
            reference = by_name[name]
            if name in subsetted:
                link = self.subset_diagram_link(reference, name)
                if link:
                    return link
            owner = reference.get("owner") or {}
            if owner.get("type") == "classifier" and owner.get("name") in self.classifiers:
                return f'<a href="#/classifier/{slug(owner["name"])}">{escape(name)}</a>'
            if owner.get("type") == "association" and owner.get("name") in self.associations:
                return f'<a href="#/association/{slug(owner["name"])}">{escape(name)}</a>'
            if reference.get("type") in self.classifiers:
                return f'<a href="#/classifier/{slug(reference["type"])}">{escape(name)}</a>'
            return escape(name)

        return escape(signature[:modifier_start]) + " {" + pattern.sub(replace, modifiers) + "}"

    def property_list(self, properties, current_name=""):
        result = []
        for prop in properties:
            owner = prop["owner"] if isinstance(prop.get("owner"), str) else current_name
            description = self.content["classifiers"].get(owner, {}).get("properties", {}).get(
                prop["name"], prop.get("description", "")
            )
            association = self.association_link(prop["association"]) if prop.get("association") else ""
            inherited = (
                f'<span>Объявлено в {self.classifier_link(prop["inheritedFrom"])}</span>'
                if prop.get("inheritedFrom") else ""
            )
            result.append(f'''<li class="detail-item"><code>{self.property_signature(prop)}</code>
              <div class="property-meta">{association}{inherited}</div>
              <p>{self.description(description, current_name)}</p>
            </li>''')
        return '<ul class="detail-list property-list">' + "".join(result) + "</ul>"

    def property_section(self, title, properties, current_name="", collapsible=False,
                         note="Включены обычные атрибуты и концы ассоциаций, которыми класс владеет по нормативной XMI-модели."):
        if not properties:
            return ""
        content = self.property_list(properties, current_name)
        if collapsible:
            body = f'''<details class="inherited-properties"><summary><span>{title}</span>
              <span class="property-count">{len(properties)}</span></summary>{content}</details>'''
        else:
            body = f'''<h2>{title} <span class="property-count">{len(properties)}</span></h2>
              <p class="section-note">{escape(note)}</p>{content}'''
        return f"<section>{body}</section>"

    def related_figures(self, ids=None):
        if not ids:
            return ""
        tiles = "".join(self.diagram_tile(self.diagrams[item]) for item in ids)
        return f'<section><h2>Связанные диаграммы</h2><div class="diagram-grid">{tiles}</div></section>'

    def diagram_object(self, diagram):
        label = f'Рисунок {diagram["id"]}. {diagram["title"]}. Интерактивная SVG-диаграмма'
        return f'''<object class="diagram-object" data="{diagram["vector"]}" type="image/svg+xml" aria-label="{escape(label, quote=True)}">
          <img src="{diagram["image"]}" alt="Рисунок {escape(diagram["id"])}. {escape(diagram["title"])}">
        </object>'''

    def figure_card(self, figure_id):
        diagram = self.diagrams[figure_id]
        visual = f'<div class="figure-link">{self.diagram_object(diagram)}</div>' if diagram.get("vector") else f'''<a class="figure-link" href="#/diagram/{slug(diagram["id"])}" aria-label="Открыть рисунок {escape(diagram["id"])} отдельно">
          <img src="{diagram["image"]}" alt="Рисунок {escape(diagram["id"])}. {escape(diagram["title"])}" loading="lazy"></a>'''
        separate = f'<a class="figure-open" href="#/diagram/{slug(diagram["id"])}">Открыть рисунок отдельно</a>' if diagram.get("vector") else ""
        return f'''<figure class="figure-card" id="figure-{slug(diagram["id"])}">{visual}
          <figcaption class="figure-caption"><strong>Рис. {escape(diagram["id"])}</strong>
            <span>{escape(diagram["title"])}</span><small>OMG UML 2.5.1, стр. {diagram["page"]}</small></figcaption>
          <details class="figure-related"><summary>Элементы на диаграмме</summary>{self.link_list(diagram["related"])}</details>
          {separate}</figure>'''

    def diagram_tile(self, diagram):
        return f'''<a class="diagram-tile" href="#/diagram/{slug(diagram["id"])}">
          <span class="diagram-preview"><img src="{diagram.get("vector") or diagram["image"]}" alt="" loading="lazy"></span>
          <span class="diagram-tile-caption"><strong>Рис. {escape(diagram["id"])} — {escape(diagram["title"])}</strong>
          <small>Раздел {escape(diagram["section"])} · стр. {diagram["page"]}</small></span></a>'''

    def object_row(self, item, kind):
        label = KIND_LABELS[item["kind"]] if kind == "classifier" else "Ассоциация"
        return f'''<a class="object-row" href="#/{kind}/{slug(item["name"])}">
          <span class="section-number">{escape(item["section"])}</span>
          <span><strong>{escape(item["name"])}</strong><small>{escape(item["ru"])}</small></span>
          <span class="object-kind">{label}</span></a>'''

    def plural(self, value, one, few, many):
        if value % 10 == 1 and value % 100 != 11:
            return one
        if 2 <= value % 10 <= 4 and not 12 <= value % 100 <= 14:
            return few
        return many

    def clause_coverage(self):
        items = [f'{clause} «{metadata["en"]}»' for clause, metadata in self.clauses.items()]
        if len(items) < 2:
            return "".join(items)
        return ", ".join(items[:-1]) + " и " + items[-1]

    def clause_range(self):
        numbers = [int(clause) for clause in self.clauses]
        if numbers == list(range(numbers[0], numbers[-1] + 1)):
            return f"{numbers[0]}–{numbers[-1]}"
        return ", ".join(map(str, numbers))

    def render_home(self):
        groups = []
        for clause_id, clause in self.clauses.items():
            narrative = [
                section for section in self.data["sections"]
                if section["id"].startswith(clause_id + ".") and section["id"] not in CATALOG_SECTIONS
            ]
            cards = []
            for section in narrative:
                cards.append(f'''<article class="link-card"><a class="link-card-heading" href="#/section/{slug(section["id"])}">
                  <span class="link-card-top"><span class="link-card-number">{section["id"]}</span><span aria-hidden="true">→</span></span>
                  <strong>{escape(section["title"])}</strong><small>{escape(section["en"])}</small></a>
                  {f'<p>{self.description(section["summary"])}</p>' if section.get("summary") else ""}</article>''')
            catalogs = [
                section for section in self.data["sections"]
                if section["id"].startswith(clause_id + ".") and section["id"] in CATALOG_SECTIONS
            ]
            for section in catalogs:
                kind = CATALOG_SECTIONS[section["id"]][0]
                items = [
                    item for item in self.data["classifiers" if kind == "classifier" else "associations"]
                    if item["section"].startswith(section["id"] + ".")
                ]
                if kind == "classifier":
                    count_text = f'{len(items)} {self.plural(len(items), "определение", "определения", "определений")} с наследованием, атрибутами, операциями и ограничениями.'
                else:
                    count_text = f'{len(items)} {self.plural(len(items), "ассоциация", "ассоциации", "ассоциаций")} метамодели с точными обозначениями концов.'
                cards.append(f'''<a class="link-card" href="#/section/{slug(section["id"])}"><span class="link-card-top"><span class="link-card-number">{section["id"]}</span><span aria-hidden="true">→</span></span>
                  <strong>{CATALOG_TITLES[kind]}</strong><small>{escape(section["en"])}</small><p>{count_text}</p></a>''')
            groups.append(
                f'<h2>{clause_id} · {escape(clause["title"])} <span class="clause-en" lang="en">({escape(clause["en"])})</span></h2>'
                f'<div class="card-grid">{"".join(cards)}</div>'
            )
        sections_count = len(self.data["sections"])
        classifiers_count = len(self.data["classifiers"])
        diagrams_count = len(self.data["diagrams"])
        return f'''<p class="eyebrow">OMG UML 2.5.1 · formal/17-12-05</p>
          <h1>Метамодель UML.<br>От базовых понятий — к деталям.</h1>
          <p class="lead">Русскоязычный интерактивный справочник по официальной спецификации. Сейчас охватывает разделы {self.clause_coverage()}.</p>
          <div class="meta-row"><span class="meta-tag">Онлайн и офлайн</span><span class="meta-tag">Без внешних зависимостей</span><span class="meta-tag">Исходная нумерация OMG</span></div>
          <div class="stats" aria-label="Охват справочника"><div class="stat"><strong>{sections_count}</strong><span>{self.plural(sections_count, "подраздел", "подраздела", "подразделов")}</span></div>
            <div class="stat"><strong>{classifiers_count}</strong><span>{self.plural(classifiers_count, "классификатор", "классификатора", "классификаторов")}</span></div>
            <div class="stat"><strong>{diagrams_count}</strong><span>{self.plural(diagrams_count, "рисунок", "рисунка", "рисунков")} из спецификации</span></div></div>
          <div class="notice">Рисунки разделов {self.clause_range()} перерисованы в масштабируемые SVG. На диаграммах абстрактного синтаксиса классы и ассоциации ведут на страницы справочника, а наведение открывает подсказки и подсвечивает связи.</div>
          {"".join(groups)}'''

    def render_section(self, section):
        full = self.content["sections"].get(section["id"])
        if section.get("placeholder"):
            body = "".join(
                self.render_spec_subsection(item) for item in (full or {}).get("subsections", [])
            )
        elif full:
            body = self.spec_paragraphs(full.get("paragraphs")) + "".join(
                self.render_spec_subsection(item) for item in full.get("subsections", [])
            )
        else:
            semantics = f'<section><h2>Семантика</h2><p>{self.description(section["semantics"])}</p></section>' if section.get("semantics") else ""
            notation = f'<section><h2>Нотация</h2><p>{self.description(section["notation"])}</p></section>' if section.get("notation") else ""
            body = f'<div class="definition"><span class="definition-label">Содержание раздела</span><p>{self.description(section["summary"])}</p></div>{semantics}{notation}'
        classifier_catalog = ""
        association_catalog = ""
        catalog = CATALOG_SECTIONS.get(section["id"])
        if catalog and catalog[0] == "classifier":
            rows = "".join(self.object_row(item, "classifier") for item in self.data["classifiers"] if item["section"].startswith(section["id"] + "."))
            classifier_catalog = f'<section><h2>Классификаторы раздела</h2><div class="object-list">{rows}</div></section>'
        if catalog and catalog[0] == "association":
            rows = "".join(self.object_row(item, "association") for item in self.data["associations"] if item["section"].startswith(section["id"] + "."))
            association_catalog = f'<section><h2>Ассоциации раздела</h2><div class="object-list">{rows}</div></section>'
        figures = ""
        if (not full or section.get("placeholder")) and section.get("figures"):
            figures = '<section><h2>Абстрактный синтаксис и примеры</h2>' + "".join(
                self.figure_card(item) for item in section["figures"]
            ) + "</section>"
        clause = CLAUSES[section["id"].split(".")[0]]
        return f'''{self.breadcrumbs([{"label": clause["label"]}, {"label": f'{section["id"]} {section["title"]}'}])}
          <p class="eyebrow">Раздел {section["id"]} · стр. {section["page"]}</p><h1>{escape(section["title"])}</h1>
          <p class="original-name" lang="en">{escape(section["en"])}</p>{body}{classifier_catalog}{association_catalog}{figures}{"" if section.get("placeholder") else self.source_link(section["page"])}'''

    def inheritance_diagram(self, item):
        nodes = {}

        def visit(name):
            if name in nodes:
                return
            parents = self.xmi.get("generalizations", {}).get(
                name, self.classifiers.get(name, {}).get("generalizations", [])
            )
            nodes[name] = {"name": name, "parents": parents}
            for parent in parents:
                visit(parent)

        visit(item["name"])
        depths = {}

        def depth(name):
            if name not in depths:
                parents = nodes[name]["parents"]
                depths[name] = 1 + max(depth(parent) for parent in parents) if parents else 0
            return depths[name]

        for name in nodes:
            depth(name)
        columns = [[] for _ in range(max(depths.values()) + 1)]
        for node in nodes.values():
            columns[depths[node["name"]]].append(node)
        margin, row_gap, column_gap, box_height = 24, 72, 72, 40
        max_rows = max(len(column) for column in columns)
        content_height = (max_rows - 1) * row_gap + box_height
        for column in columns:
            for node in column:
                node["width"] = max(96, int(-(-(len(node["name"]) * 9 + 36) // 1)))
                node["height"] = box_height
        column_x = margin
        for column in columns:
            column_width = max(node["width"] for node in column)
            column_height = (len(column) - 1) * row_gap + box_height
            column_offset = (content_height - column_height) / 2
            for row, node in enumerate(column):
                node["x"] = column_x
                node["y"] = margin + column_offset + row * row_gap
                node["columnRight"] = column_x + column_width
            column_x += column_width + column_gap
        width = column_x - column_gap + margin
        edges, outgoing, incoming = [], {}, {}
        for node in nodes.values():
            for parent_name in node["parents"]:
                if parent_name not in nodes:
                    continue
                edge = {
                    "parent": nodes[parent_name], "child": node,
                    "outIndex": outgoing.get(parent_name, 0), "inIndex": incoming.get(node["name"], 0),
                }
                outgoing[parent_name] = edge["outIndex"] + 1
                incoming[node["name"]] = edge["inIndex"] + 1
                edges.append(edge)
        long_edges = [edge for edge in edges if depths[edge["child"]["name"]] - depths[edge["parent"]["name"]] > 1]
        height = margin * 2 + content_height + len(long_edges) * 16
        long_lane = 0
        paths = []
        for edge in edges:
            parent, child = edge["parent"], edge["child"]
            parent_right = parent["x"] + parent["width"]
            source_y = parent["y"] + box_height / 2 + (edge["outIndex"] - (outgoing[parent["name"]] - 1) / 2) * 8
            target_y = child["y"] + box_height / 2 + (edge["inIndex"] - (incoming[child["name"]] - 1) / 2) * 8
            attributes = f'data-parent="{escape(parent["name"])}" data-child="{escape(child["name"])}"'
            if depths[child["name"]] - depths[parent["name"]] > 1:
                source_junction = parent["columnRight"] + 16 + edge["outIndex"] * 6
                target_junction = child["x"] - 16 - edge["inIndex"] * 6
                bus_y = margin + content_height + 16 + long_lane * 16
                long_lane += 1
                path = f'M {number(child["x"])} {number(target_y)} H {number(target_junction)} V {number(bus_y)} H {number(source_junction)} V {number(source_y)} H {number(parent_right)}'
            else:
                gap = child["x"] - parent["columnRight"]
                junction_x = parent["columnRight"] + gap * (0.35 + edge["inIndex"] * 0.1)
                path = f'M {number(child["x"])} {number(target_y)} H {number(junction_x)} V {number(source_y)} H {number(parent_right)}'
            paths.append(f'<path class="inheritance-generalization" {attributes} d="{path}" marker-end="url(#inheritance-generalization)"/>')
        blocks = []
        for column in columns:
            for node in column:
                classifier = self.classifiers.get(node["name"])
                definition = (
                    classifier.get("definition") if classifier else None
                ) or self.xmi.get("classifierDefinitions", {}).get(node["name"], node["name"])
                abstract = " abstract" if classifier and classifier["kind"] == "Abstract Class" else ""
                current = " current" if node["name"] == item["name"] else ""
                content = f'''<title>{escape(node["name"])}. {escape(definition)}</title>
                  <rect class="inheritance-class-box{current}" x="{number(node["x"])}" y="{number(node["y"])}" width="{node["width"]}" height="{box_height}"/>
                  <text class="inheritance-class-name{abstract}" x="{number(node["x"] + node["width"] / 2)}" y="{number(node["y"] + 25)}" text-anchor="middle">{escape(node["name"])}</text>'''
                attributes = f'class="inheritance-class" data-classifier="{escape(node["name"])}" data-depth="{depths[node["name"]]}"' + (' data-current="true"' if current else "")
                if classifier:
                    blocks.append(f'<a {attributes} href="#/classifier/{slug(node["name"])}">{content}</a>')
                else:
                    blocks.append(f'<g {attributes}>{content}</g>')
        return f'''<section class="inheritance-section"><h2>Наследование</h2><div class="inheritance-diagram">
          <svg class="inheritance-svg" width="{number(width)}" height="{number(height)}" viewBox="0 0 {number(width)} {number(height)}" style="--diagram-width: {number(width)}px" role="img" aria-label="Иерархия наследования {escape(item["name"])}">
            <title>Иерархия наследования {escape(item["name"])}</title><desc>Корневые предки расположены слева, целевой класс {escape(item["name"])} — справа.</desc>
            <defs><marker id="inheritance-generalization" markerWidth="15" markerHeight="16" refX="13" refY="8" orient="auto" markerUnits="userSpaceOnUse"><path d="M 1 1 L 13 8 L 1 15 Z" fill="#ffffff" stroke="#111111" stroke-width="1.4"/></marker></defs>
            {"".join(paths)}{"".join(blocks)}</svg></div></section>'''

    def render_classifier(self, item):
        xmi = self.xmi["classes"].get(item["name"])
        direct = xmi["direct"] if xmi else item.get("attributes", []) + item.get("ends", [])
        figures = [diagram["id"] for diagram in self.data["diagrams"] if item["name"] in diagram["related"]]
        item_content = self.content["classifiers"].get(item["name"], {})
        catalog_prefix = item["section"].rsplit(".", 1)[0]
        if catalog_prefix in CATALOG_SECTIONS:
            clause = CLAUSES[catalog_prefix.split(".")[0]]
            crumbs = [{"label": clause["label"]}, {"label": f"{catalog_prefix} Классификаторы", "href": f"#/section/{slug(catalog_prefix)}"}, {"label": item["name"]}]
        else:
            crumbs = [{"label": "Связанные классификаторы"}, {"label": item["name"]}]
        if item.get("placeholder"):
            return f'''{self.breadcrumbs(crumbs)}<p class="eyebrow">{KIND_LABELS[item["kind"]]} · раздел {item["section"]}</p>
              <h1>{escape(item["ru"])}</h1><p class="original-name" lang="en">{escape(item["name"])} [{escape(item["kind"])}]</p>
              {self.related_figures(figures)}'''
        generalizations = f'<section><h2>Обобщения</h2>{self.link_list(item["generalizations"])}</section>' if item.get("generalizations") else ""
        specializations = f'<section><h2>Специализации</h2>{self.link_list(item["specializations"])}</section>' if item.get("specializations") else ""
        return f'''{self.breadcrumbs(crumbs)}<p class="eyebrow">{KIND_LABELS[item["kind"]]} · раздел {item["section"]}</p>
          <h1>{escape(item["ru"])}</h1><p class="original-name" lang="en">{escape(item["name"])} [{escape(item["kind"])}]</p>
          {self.inheritance_diagram(item)}
          <div class="meta-row"><span class="kind-tag">{KIND_LABELS[item["kind"]]}</span><span class="meta-tag">OMG UML 2.5.1, стр. {item["page"]}</span></div>
          <div class="definition"><span class="definition-label">Определение</span><p>{self.description(item_content.get("definition", item["definition"]), item["name"])}</p></div>
          {generalizations}{specializations}
          {self.property_section("Атрибуты", direct, item["name"])}
          {self.property_section("Унаследованные атрибуты", xmi.get("inherited") if xmi else None, item["name"], True)}
          {self.detail_section("Операции", self.classifier_details(item, "operations", "signature"), "signature", item["name"])}
          {self.detail_section("Ограничения", self.classifier_details(item, "constraints", "name"), "name", item["name"])}
          {self.detail_section("Литералы", self.classifier_details(item, "literals", "name"), "name", item["name"])}
          {self.related_figures(figures)}{self.source_link(item["page"])}'''

    def render_association(self, item):
        catalog_prefix = item["section"].rsplit(".", 1)[0]
        clause = CLAUSES[catalog_prefix.split(".")[0]]
        crumbs = [{"label": clause["label"]}, {"label": f"{catalog_prefix} Ассоциации", "href": f"#/section/{slug(catalog_prefix)}"}, {"label": item["name"]}]
        if item.get("placeholder"):
            return f'''{self.breadcrumbs(crumbs)}<p class="eyebrow">Ассоциация · раздел {item["section"]}</p><h1>{escape(item["ru"])}</h1>
              <p class="original-name" lang="en">{escape(item["name"])} [Association]</p>
              {self.related_figures(self.association_figures(item))}'''
        ends = self.xmi["associations"].get(item["name"], {}).get("ends")
        if ends is None:
            ends = [
                {"signature": end} if isinstance(end, str) else end
                for end in item.get("ends", [])
            ]
        generalizations = f'<section><h2>Обобщения</h2>{self.link_list(item["generalizations"], "association")}</section>' if item.get("generalizations") else ""
        specializations = f'<section><h2>Специализации</h2>{self.link_list(item["specializations"], "association")}</section>' if item.get("specializations") else ""
        tags = "".join(f'<span class="meta-tag">{escape(name)}</span>' for name in item["diagrams"])
        return f'''{self.breadcrumbs(crumbs)}
          <p class="eyebrow">Ассоциация · раздел {item["section"]}</p><h1>{escape(item["ru"])}</h1>
          <p class="original-name" lang="en">{escape(item["name"])} [Association]</p>
          <div class="meta-row"><span class="kind-tag">Ассоциация</span><span class="meta-tag">OMG UML 2.5.1, стр. {item["page"]}</span></div>
          <div class="definition"><span class="definition-label">Определение</span><p>{self.description(item["definition"], item["name"])}</p></div>
          {generalizations}{specializations}
          {self.property_section("Концы ассоциации", ends, item["name"], False, "Типы, кратность и другие характеристики обоих концов сверены с нормативным XMI.")}
          <section><h2>Диаграммы в спецификации</h2><div class="meta-row">{tags}</div></section>
          {self.related_figures(self.association_figures(item))}{self.source_link(item["page"])}'''

    def render_diagrams(self):
        tiles = "".join(self.diagram_tile(diagram) for diagram in self.data["diagrams"])
        count = len(self.data["diagrams"])
        return f'''{self.breadcrumbs([{"label": "Справочник"}, {"label": "Диаграммы"}])}
          <p class="eyebrow">Разделы {self.clause_range()} · {count} {self.plural(count, "рисунок", "рисунка", "рисунков")}</p><h1>Диаграммы</h1>
          <p class="lead">Векторные копии рисунков разделов {self.clause_coverage()}. Все материалы сохранены локально и доступны без подключения к сети.</p>
          <div class="diagram-grid">{tiles}</div>'''

    def render_diagram(self, diagram):
        visual = self.diagram_object(diagram) if diagram.get("vector") else f'<img src="{diagram["image"]}" alt="Рисунок {escape(diagram["id"])}. {escape(diagram["title"])}">'
        clause = CLAUSES[diagram["id"].split(".")[0]]
        return f'''{self.breadcrumbs([{"label": clause["label"]}, {"label": "Диаграммы", "href": "#/diagrams"}, {"label": f'Рисунок {diagram["id"]}'}])}
          <p class="eyebrow">Рисунок {diagram["id"]} · раздел {diagram["section"]}</p><h1>{escape(diagram["title"])}</h1>
          <p class="original-name" lang="en">{escape(diagram["en"])}</p><div class="diagram-full">{visual}</div>
          <section><h2>Элементы на диаграмме</h2>{self.link_list(diagram["related"])}</section>
          <p><a href="#/section/{slug(diagram["section"])}">Перейти к разделу {escape(diagram["section"])}</a></p>{self.source_link(diagram["page"])}'''

    def render_not_found(self):
        return self.breadcrumbs([{"label": "Не найдено"}]) + '''<div class="empty-state"><h1>Страница не найдена</h1>
          <p>Проверьте адрес или вернитесь к обзору справочника.</p><p><a href="#/">Перейти на главную</a></p></div>'''

    def navigation(self):
        groups = []
        for clause_id, clause in self.clauses.items():
            sections = "".join(
                f'<a class="nav-section" data-route="section-{slug(section["id"])}" href="#/section/{slug(section["id"])}"><span class="nav-number">{section["id"]}</span><span>{escape(section["title"])}</span></a>'
                for section in self.data["sections"]
                if section["id"].startswith(clause_id + ".")
            )
            groups.append(f'<p class="nav-group-title">{clause_id} · {escape(clause["en"])}</p>{sections}')
        return f'''<a class="nav-home" data-route="home" href="#/">Обзор справочника</a>
          {"".join(groups)}<p class="nav-group-title">Материалы</p>
          <a class="nav-section" data-route="diagrams" href="#/diagrams"><span class="nav-number">{len(self.data["diagrams"])}</span><span>Диаграммы</span></a>'''

    def search_items(self):
        result = []
        for item in self.data["sections"]:
            result.append({
                "title": item["title"], "subtitle": item["en"], "type": f'Раздел {item["id"]}',
                "href": f'#/section/{slug(item["id"])}',
                "text": f'{item["id"]} {item["title"]} {item["en"]} {item.get("summary", "")} {item.get("semantics", "")} {item.get("notation", "")} {json.dumps(self.content["sections"].get(item["id"], ""), ensure_ascii=False)}',
            })
        for item in self.data["classifiers"]:
            properties = self.xmi["classes"].get(item["name"], {}).get("direct", [])
            property_text = " ".join(f'{prop["signature"]} {prop.get("description", "")}' for prop in properties)
            result.append({
                "title": item["name"], "subtitle": item["ru"], "type": f'{KIND_LABELS[item["kind"]]} · {item["section"]}',
                "href": f'#/classifier/{slug(item["name"])}',
                "text": f'{item["name"]} {item["ru"]} {item["section"]} {item.get("definition", "")} {" ".join(item.get("generalizations", []))} {" ".join(item.get("specializations", []))} {property_text} {json.dumps(self.content["classifiers"].get(item["name"], ""), ensure_ascii=False)}',
            })
        for item in self.data["associations"]:
            ends = self.xmi["associations"].get(item["name"], {}).get("ends", [])
            end_text = " ".join(f'{prop["signature"]} {prop.get("description", "")}' for prop in ends)
            result.append({
                "title": item["name"], "subtitle": item["ru"], "type": f'Ассоциация · {item["section"]}',
                "href": f'#/association/{slug(item["name"])}',
                "text": f'{item["name"]} {item["ru"]} {item["section"]} {item.get("definition", "")} {end_text}',
            })
        for item in self.data["diagrams"]:
            result.append({
                "title": f'Рисунок {item["id"]} — {item["title"]}', "subtitle": item["en"],
                "type": f'Диаграмма · раздел {item["section"]}', "href": f'#/diagram/{slug(item["id"])}',
                "text": f'{item["id"]} {item["title"]} {item["en"]} {" ".join(item["related"])}',
            })
        return result

    def build(self):
        pages, titles = {}, {}
        for route, _ in base_routes(self.data):
            parts = route.removeprefix("#/").split("/") if route != "#/" else []
            if not parts:
                title, html = "UML 2.5.1 — интерактивный справочник", self.render_home()
            elif parts[0] == "section":
                item = next(item for item in self.data["sections"] if slug(item["id"]) == parts[1])
                title, html = f'{item["id"]} {item["title"]} — UML 2.5.1', self.render_section(item)
            elif parts[0] == "classifier":
                item = next(item for item in self.data["classifiers"] if slug(item["name"]) == parts[1])
                title, html = f'{item["name"]} — {item["ru"]} — UML 2.5.1', self.render_classifier(item)
            elif parts[0] == "association":
                item = next(item for item in self.data["associations"] if slug(item["name"]) == parts[1])
                title, html = f'{item["name"]} — UML 2.5.1', self.render_association(item)
            elif parts[0] == "diagrams":
                title, html = "Диаграммы — UML 2.5.1", self.render_diagrams()
            elif parts[0] == "diagram":
                item = next(item for item in self.data["diagrams"] if slug(item["id"]) == parts[1])
                title, html = f'Рисунок {item["id"]} — {item["title"]} — UML 2.5.1', self.render_diagram(item)
            else:
                raise ValueError(f"Unsupported route: {route}")
            pages[route] = html
            titles[route] = title
        return {
            "pages": pages,
            "titles": titles,
            "notFound": self.render_not_found(),
            "navigation": self.navigation(),
            "searchItems": self.search_items(),
        }



def _fragment_key(route, clauses):
    parts = route.split("/")
    if len(parts) < 3:
        return None
    kind = {
        "section": "sections",
        "classifier": "classifiers",
        "association": "associations",
        "diagram": "diagrams",
    }.get(parts[1])
    return f"{kind}-{clauses[route]}" if kind else None


def _fragment_js(pages, titles, search_items):
    return (
        "Object.assign(window.UML_PAGES.pages, " + json.dumps(pages, ensure_ascii=False, indent=2) + ");\n"
        + "Object.assign(window.UML_PAGES.titles, " + json.dumps(titles, ensure_ascii=False, indent=2) + ");\n"
        + "window.UML_PAGES.searchItems.push(..." + json.dumps(search_items, ensure_ascii=False, indent=2) + ");\n"
    )


def generate():
    data, xmi, content = load_handbook()
    full = HandbookRenderer(data, xmi, content).build()
    clauses = {}
    for kind, items, name in (
        ("section", data["sections"], "id"),
        ("classifier", data["classifiers"], "name"),
        ("association", data["associations"], "name"),
        ("diagram", data["diagrams"], "id"),
    ):
        for item in items:
            section = item["id"] if kind in ("section", "diagram") else item["section"]
            if kind == "classifier" and item["name"] == "Package":
                section = "external"
            clauses[f"#/{kind}/{slug(item[name])}"] = section.split(".", 1)[0]
    base = {
        "pages": {route: full["pages"][route] for route in ("#/", "#/diagrams")},
        "titles": {route: full["titles"][route] for route in ("#/", "#/diagrams")},
        "notFound": full["notFound"],
        "navigation": full["navigation"],
        "searchItems": [],
    }
    fragment_names = list(dict.fromkeys(
        name for name in (_fragment_key(route, clauses) for route, _ in base_routes(data))
        if name
    ))
    groups = {
        name: {"pages": {}, "titles": {}, "searchItems": []}
        for name in fragment_names
    }
    for route, _ in base_routes(data):
        name = _fragment_key(route, clauses)
        if name:
            groups[name]["pages"][route] = full["pages"][route]
            groups[name]["titles"][route] = full["titles"][route]
    for item in full["searchItems"]:
        groups[_fragment_key(item["href"], clauses)]["searchItems"].append(item)
    base_text = "window.UML_PAGES = " + json.dumps(base, ensure_ascii=False, indent=2) + ";\n"
    fragments = [
        (f"{name}.js", _fragment_js(groups[name]["pages"], groups[name]["titles"], groups[name]["searchItems"]))
        for name in fragment_names
    ]
    return base_text, fragments


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--clause", choices=sorted(load_sections(), key=int), help="Build only this clause's fragments and shared base data")
    parser.add_argument("--check", action="store_true", help="Check that generated pages and routes are current")
    args = parser.parse_args()
    base_text, fragments = generate()

    def selected(path):
        if path in {OUTPUT, INDEX} or path.name == "classifiers-external.js":
            return True
        return args.clause is None or path.stem.endswith("-" + args.clause)

    expected = {OUTPUT: base_text, INDEX: expected_index()}
    expected.update({PAGES_DIR / name: text for name, text in fragments})
    expected = {path: text for path, text in expected.items() if selected(path)}
    if args.check:
        outdated = [
            path.relative_to(ROOT)
            for path, text in expected.items()
            if not path.is_file() or path.read_text(encoding="utf-8") != text
        ]
        stale = {
            path for path in PAGES_DIR.glob("*.js")
            if selected(path) and path not in expected
        } if PAGES_DIR.is_dir() else set()
        if outdated or stale:
            raise SystemExit("Generated pages are out of date; run python scripts/build_site.py")
        scope = f"clause {args.clause}" if args.clause else "all clauses"
        print(f"Generated pages and routes: OK; {scope} ({len(base_routes(load_handbook()[0]))} routes)")
        return
    PAGES_DIR.mkdir(parents=True, exist_ok=True)
    for path, text in expected.items():
        if path != INDEX:
            path.write_text(text, encoding="utf-8")
    for path in PAGES_DIR.glob("*.js"):
        if selected(path) and path not in expected:
            path.unlink()
    write_index()
    scope = f"clause {args.clause}" if args.clause else "all clauses"
    print(f"Generated {scope}: {OUTPUT.relative_to(ROOT)} + {len(expected) - 2} fragments ({len(base_routes(load_handbook()[0]))} routes)")


if __name__ == "__main__":
    main()
