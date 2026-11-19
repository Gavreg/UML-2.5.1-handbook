(() => {
  "use strict";

  const data = window.UML_DATA;
  const xmiData = window.UML_XMI_DATA;
  const contentData = window.UML_CONTENT;
  const content = document.getElementById("content");
  const navigation = document.getElementById("navigation");
  const sidebar = document.getElementById("sidebar");
  const scrim = document.getElementById("scrim");
  const menuButton = document.getElementById("menu-button");
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const suggestions = document.getElementById("search-suggestions");
  const themeButton = document.getElementById("theme-button");

  const kindLabels = {
    "Class": "Класс",
    "Abstract Class": "Абстрактный класс",
    "Enumeration": "Перечисление"
  };

  const diagramByName = {
    "Root": "7.1",
    "Templates": "7.3",
    "Template Bindings": "7.4",
    "Namespaces": "7.5",
    "Types": "7.10",
    "Constraints": "7.13",
    "Dependencies": "7.17"
  };

  const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[character]);

  const escapeRegExp = value => String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const slug = value => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const classifierByName = new Map(data.classifiers.map(item => [item.name, item]));
  const associationByName = new Map(data.associations.map(item => [item.name, item]));
  const diagramById = new Map(data.diagrams.map(item => [item.id, item]));

  function classifierLink(name) {
    const item = classifierByName.get(name);
    return item
      ? `<a href="#/classifier/${slug(name)}">${escapeHtml(name)}</a>`
      : `<code>${escapeHtml(name)}</code>`;
  }

  function associationLink(name) {
    const item = associationByName.get(name);
    return item
      ? `<a href="#/association/${slug(name)}">${escapeHtml(name)}</a>`
      : `<code>${escapeHtml(name)}</code>`;
  }

  const metamodelNames = [...classifierByName.keys(), ...associationByName.keys()]
    .sort((first, second) => second.length - first.length);
  const metamodelNamePattern = new RegExp(
    `(^|[^A-Za-z0-9_])(${metamodelNames.map(escapeRegExp).join("|")})(?![A-Za-z0-9_])`,
    "g"
  );

  function metamodelDescription(value, currentName = "") {
    const text = String(value);
    let html = "";
    let offset = 0;
    for (const match of text.matchAll(metamodelNamePattern)) {
      const name = match[2];
      const start = match.index + match[1].length;
      html += escapeHtml(text.slice(offset, start));
      if (name === currentName) {
        html += escapeHtml(name);
      } else {
        const type = classifierByName.has(name) ? "classifier" : "association";
        html += `<a href="#/${type}/${slug(name)}">${escapeHtml(name)}</a>`;
      }
      offset = start + name.length;
    }
    return html + escapeHtml(text.slice(offset));
  }

  function linkList(items = [], type = "classifier") {
    if (!items.length) return "";
    const linker = type === "association" ? associationLink : classifierLink;
    return `<ul class="link-list">${items.map(item => `<li>${linker(item)}</li>`).join("")}</ul>`;
  }

  function breadcrumbs(items) {
    return `<nav class="breadcrumbs" aria-label="Хлебные крошки">
      <a href="#/">Справочник</a>
      ${items.map((item, index) => {
        const separator = `<span aria-hidden="true">/</span>`;
        return separator + (item.href && index < items.length - 1
          ? `<a href="${item.href}">${escapeHtml(item.label)}</a>`
          : `<span aria-current="page">${escapeHtml(item.label)}</span>`);
      }).join("")}
    </nav>`;
  }

  function sourceLink(page) {
    return `<a class="source-link" href="../docs/omg-uml-2.5.1-formal-17-12-05.pdf#page=${page + 42}" target="_blank" rel="noopener">
      Открыть оригинал, стр. ${page}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/></svg>
    </a>`;
  }

  function specParagraphs(paragraphs = []) {
    return paragraphs.map(paragraph => `<p>${metamodelDescription(paragraph)}</p>`).join("");
  }

  function specNotes(notes = []) {
    return notes.map(note => `<p class="notice spec-note"><strong>Примечание.</strong> ${metamodelDescription(note)}</p>`).join("");
  }

  function syntaxBlock(value) {
    return value ? `<pre class="syntax-block"><code>${escapeHtml(value)}</code></pre>` : "";
  }

  function formalExpression(label, value) {
    return value ? `<div class="formal-expression"><span class="formal-expression-label">${label}</span><pre><code>${escapeHtml(value)}</code></pre></div>` : "";
  }

  function renderSpecSubsection(subsection) {
    const level = Math.min(6, subsection.id.split(".").length - 1);
    const steps = subsection.steps ? `<ol class="spec-steps">${subsection.steps.map(step => `<li>
      <p>${metamodelDescription(step.text)}</p>
      ${step.substeps ? `<ol class="spec-substeps" type="a">${step.substeps.map(substep => `<li>${metamodelDescription(substep)}</li>`).join("")}</ol>` : ""}
      ${specNotes(step.notes)}
    </li>`).join("")}</ol>` : "";
    const table = subsection.table ? `<div class="spec-table-wrapper"><table class="spec-table">
      <caption>${escapeHtml(subsection.table.caption)}</caption>
      <thead><tr>${subsection.table.columns.map(column => `<th scope="col">${escapeHtml(column)}</th>`).join("")}</tr></thead>
      <tbody>${subsection.table.rows.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table></div>` : "";
    return `<section class="spec-subsection" id="section-${slug(subsection.id)}">
      <h${level}><span class="spec-section-number">${subsection.id}</span>${escapeHtml(subsection.title)}</h${level}>
      <p class="original-name subsection-original" lang="en">${escapeHtml(subsection.en)}</p>
      ${specParagraphs(subsection.paragraphs)}
      ${specNotes(subsection.notes)}
      ${specParagraphs(subsection.afterNotes)}
      ${subsection.bullets ? `<ul>${subsection.bullets.map(item => `<li>${metamodelDescription(item)}</li>`).join("")}</ul>` : ""}
      ${specParagraphs(subsection.afterBullets)}
      ${steps}
      ${specParagraphs(subsection.afterSteps)}
      ${specNotes(subsection.notesAfterSteps)}
      ${syntaxBlock(subsection.code)}
      ${specParagraphs(subsection.afterCode)}
      ${(subsection.additionalCode || []).map(syntaxBlock).join("")}
      ${specParagraphs(subsection.finalParagraphs)}
      ${syntaxBlock(subsection.finalCode)}
      ${specParagraphs(subsection.closingParagraphs)}
      ${table}
      ${(subsection.figures || []).map(figureCard).join("")}
    </section>`;
  }

  function detailSection(title, items, key = "signature", currentName = "") {
    if (!items || !items.length) return "";
    return `<section><h2>${title}</h2><ul class="detail-list">${items.map(item => `
      <li class="detail-item">
        <code>${escapeHtml(item[key] || item.name)}</code>
        ${item.description ? `<p>${metamodelDescription(item.description, currentName)}</p>` : ""}
        ${formalExpression("Предусловие (OCL)", item.pre)}
        ${formalExpression("Тело операции (OCL)", item.body)}
        ${formalExpression("Ограничение (OCL)", item.ocl)}
      </li>`).join("")}</ul></section>`;
  }

  function classifierDetails(item, kind, key) {
    const overrides = contentData.classifiers[item.name]?.[kind] || {};
    return (item[kind] || []).map(entry => ({ ...entry, ...(overrides[entry[key] || entry.name] || {}) }));
  }

  function subsetDiagramLink(reference, name) {
    const owner = reference.owner;
    const associationName = owner?.type === "association"
      ? owner.name
      : xmiData.classes[owner?.name]?.direct.find(property => property.id === reference.id)?.association;
    const association = associationByName.get(associationName);
    const diagramId = association ? associationFigures(association)[0] : "";
    return diagramId
      ? `<a href="#/diagram/${slug(diagramId)}">${escapeHtml(name)}</a>`
      : "";
  }

  function propertySignature(property) {
    const modifierStart = property.signature.indexOf(" {");
    if (modifierStart < 0) return escapeHtml(property.signature);
    const references = [...(property.subsettedProperties || []), ...(property.redefinedProperties || [])];
    if (!references.length) return escapeHtml(property.signature);
    const subsettedNames = new Set((property.subsettedProperties || []).map(reference => reference.name));
    const referencesByName = new Map();
    references.forEach(reference => {
      if (!referencesByName.has(reference.name)) referencesByName.set(reference.name, reference);
    });
    const names = [...referencesByName.keys()].sort((first, second) => second.length - first.length);
    const pattern = new RegExp(`\\b(${names.map(escapeRegExp).join("|")})\\b`, "g");
    const modifiers = property.signature.slice(modifierStart + 2, -1);
    const linkedModifiers = escapeHtml(modifiers).replace(pattern, name => {
      const reference = referencesByName.get(name);
      if (subsettedNames.has(name)) {
        const diagramLink = subsetDiagramLink(reference, name);
        if (diagramLink) return diagramLink;
      }
      const owner = reference.owner;
      if (owner?.type === "classifier" && classifierByName.has(owner.name)) {
        return `<a href="#/classifier/${slug(owner.name)}">${escapeHtml(name)}</a>`;
      }
      if (owner?.type === "association" && associationByName.has(owner.name)) {
        return `<a href="#/association/${slug(owner.name)}">${escapeHtml(name)}</a>`;
      }
      if (classifierByName.has(reference.type)) {
        return `<a href="#/classifier/${slug(reference.type)}">${escapeHtml(name)}</a>`;
      }
      return escapeHtml(name);
    });
    return `${escapeHtml(property.signature.slice(0, modifierStart))} {${linkedModifiers}}`;
  }

  function propertyList(properties, currentName = "") {
    return `<ul class="detail-list property-list">${properties.map(property => {
      const owner = typeof property.owner === "string" ? property.owner : currentName;
      const description = contentData.classifiers[owner]?.properties?.[property.name] || property.description;
      return `
        <li class="detail-item">
          <code>${propertySignature(property)}</code>
          <div class="property-meta">
            ${property.association ? associationLink(property.association) : ""}
            ${property.inheritedFrom ? `<span>Объявлено в ${classifierLink(property.inheritedFrom)}</span>` : ""}
          </div>
          <p>${metamodelDescription(description, currentName)}</p>
        </li>`;
    }).join("")}</ul>`;
  }

  function propertySection(title, properties, currentName = "", collapsible = false, note = "Включены обычные атрибуты и концы ассоциаций, которыми класс владеет по нормативной XMI-модели.") {
    if (!properties || !properties.length) return "";
    const content = propertyList(properties, currentName);
    return `<section>${collapsible
      ? `<details class="inherited-properties"><summary><span>${title}</span><span class="property-count">${properties.length}</span></summary>${content}</details>`
      : `<h2>${title} <span class="property-count">${properties.length}</span></h2><p class="section-note">${escapeHtml(note)}</p>${content}`}</section>`;
  }

  function relatedFigures(ids = []) {
    if (!ids.length) return "";
    return `<section><h2>Связанные диаграммы</h2><div class="diagram-grid">${ids.map(id => diagramTile(diagramById.get(id))).join("")}</div></section>`;
  }

  function diagramObject(diagram) {
    return `<object class="diagram-object" data="${diagram.vector}" type="image/svg+xml" aria-label="Рисунок ${escapeHtml(diagram.id)}. ${escapeHtml(diagram.title)}. Интерактивная SVG-диаграмма">
      <img src="${diagram.image}" alt="Рисунок ${escapeHtml(diagram.id)}. ${escapeHtml(diagram.title)}">
    </object>`;
  }

  function figureCard(id) {
    const diagram = diagramById.get(id);
    const visual = diagram.vector
      ? `<div class="figure-link">${diagramObject(diagram)}</div>`
      : `<a class="figure-link" href="#/diagram/${slug(diagram.id)}" aria-label="Открыть рисунок ${escapeHtml(diagram.id)} отдельно"><img src="${diagram.image}" alt="Рисунок ${escapeHtml(diagram.id)}. ${escapeHtml(diagram.title)}" loading="lazy"></a>`;
    return `<figure class="figure-card" id="figure-${slug(diagram.id)}">
      ${visual}
      <figcaption class="figure-caption">
        <strong>Рис. ${escapeHtml(diagram.id)}</strong>
        <span>${escapeHtml(diagram.title)}</span>
        <small>OMG UML 2.5.1, стр. ${diagram.page}</small>
      </figcaption>
      <details class="figure-related">
        <summary>Элементы на диаграмме</summary>
        ${linkList(diagram.related)}
      </details>
      ${diagram.vector ? `<a class="figure-open" href="#/diagram/${slug(diagram.id)}">Открыть рисунок отдельно</a>` : ""}
    </figure>`;
  }

  function diagramTile(diagram) {
    return `<a class="diagram-tile" href="#/diagram/${slug(diagram.id)}">
      <span class="diagram-preview"><img src="${diagram.vector || diagram.image}" alt="" loading="lazy"></span>
      <span class="diagram-tile-caption">
        <strong>Рис. ${escapeHtml(diagram.id)} — ${escapeHtml(diagram.title)}</strong>
        <small>Раздел ${escapeHtml(diagram.section)} · стр. ${diagram.page}</small>
      </span>
    </a>`;
  }

  function objectRow(item, type) {
    const kind = type === "classifier" ? kindLabels[item.kind] : "Ассоциация";
    return `<a class="object-row" href="#/${type}/${slug(item.name)}">
      <span class="section-number">${escapeHtml(item.section)}</span>
      <span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.ru)}</small></span>
      <span class="object-kind">${kind}</span>
    </a>`;
  }

  function renderHome() {
    document.title = "UML 2.5.1 — интерактивный справочник";
    return `
      <p class="eyebrow">OMG UML 2.5.1 · formal/17-12-05</p>
      <h1>Метамодель UML.<br>От базовых понятий — к деталям.</h1>
      <p class="lead">Русскоязычный интерактивный справочник по официальной спецификации. Первый этап охватывает раздел 7 «Common Structure» — фундамент структурного моделирования.</p>
      <div class="meta-row">
        <span class="meta-tag">Онлайн и офлайн</span>
        <span class="meta-tag">Без внешних зависимостей</span>
        <span class="meta-tag">Исходная нумерация OMG</span>
      </div>
      <div class="stats" aria-label="Охват раздела 7">
        <div class="stat"><strong>9</strong><span>подразделов</span></div>
        <div class="stat"><strong>24</strong><span>классификатора</span></div>
        <div class="stat"><strong>21</strong><span>рисунок из спецификации</span></div>
      </div>
      <div class="notice">Все рисунки раздела 7 перерисованы в масштабируемые SVG. На диаграммах абстрактного синтаксиса классы и ассоциации ведут на страницы справочника, а наведение открывает подсказки и подсвечивает связи.</div>
      <h2>Структура раздела 7</h2>
      <div class="card-grid">
        ${data.sections.slice(0, 7).map(section => `<article class="link-card">
          <a class="link-card-heading" href="#/section/${slug(section.id)}">
            <span class="link-card-top"><span class="link-card-number">${section.id}</span><span aria-hidden="true">→</span></span>
            <strong>${escapeHtml(section.title)}</strong>
            <small>${escapeHtml(section.en)}</small>
          </a>
          <p>${metamodelDescription(section.summary)}</p>
        </article>`).join("")}
      </div>
      <h2>Справочные каталоги</h2>
      <div class="card-grid">
        <a class="link-card" href="#/section/7-8">
          <span class="link-card-top"><span class="link-card-number">7.8</span><span aria-hidden="true">→</span></span>
          <strong>Классификаторы</strong><small>Classifier Descriptions</small>
          <p>24 определения с наследованием, атрибутами, операциями и ограничениями.</p>
        </a>
        <a class="link-card" href="#/section/7-9">
          <span class="link-card-top"><span class="link-card-number">7.9</span><span aria-hidden="true">→</span></span>
          <strong>Ассоциации</strong><small>Association Descriptions</small>
          <p>36 ассоциаций метамодели с точными обозначениями концов.</p>
        </a>
      </div>`;
  }

  function renderSection(id) {
    const section = data.sections.find(item => slug(item.id) === id);
    if (!section) return renderNotFound();
    document.title = `${section.id} ${section.title} — UML 2.5.1`;
    const isClassifiers = section.id === "7.8";
    const isAssociations = section.id === "7.9";
    const fullContent = contentData.sections[section.id];
    return `
      ${breadcrumbs([{ label: "7 Common Structure" }, { label: `${section.id} ${section.title}` }])}
      <p class="eyebrow">Раздел ${section.id} · стр. ${section.page}</p>
      <h1>${escapeHtml(section.title)}</h1>
      <p class="original-name" lang="en">${escapeHtml(section.en)}</p>
      ${fullContent
        ? `${specParagraphs(fullContent.paragraphs)}${(fullContent.subsections || []).map(renderSpecSubsection).join("")}`
        : `<div class="definition"><span class="definition-label">Содержание раздела</span><p>${metamodelDescription(section.summary)}</p></div>
          ${section.semantics ? `<section><h2>Семантика</h2><p>${metamodelDescription(section.semantics)}</p></section>` : ""}
          ${section.notation ? `<section><h2>Нотация</h2><p>${metamodelDescription(section.notation)}</p></section>` : ""}`}
      ${isClassifiers ? `<section><h2>Классификаторы раздела</h2><div class="object-list">${data.classifiers.filter(item => item.section.startsWith("7.8.")).map(item => objectRow(item, "classifier")).join("")}</div></section>` : ""}
      ${isAssociations ? `<section><h2>Ассоциации раздела</h2><div class="object-list">${data.associations.map(item => objectRow(item, "association")).join("")}</div></section>` : ""}
      ${!fullContent && section.figures.length ? `<section><h2>Абстрактный синтаксис и примеры</h2>${section.figures.map(figureCard).join("")}</section>` : ""}
      ${sourceLink(section.page)}`;
  }

  function inheritanceDiagram(item) {
    const nodes = new Map();
    function visit(name) {
      if (nodes.has(name)) return;
      const parents = xmiData.generalizations?.[name]
        || classifierByName.get(name)?.generalizations
        || [];
      nodes.set(name, { name, parents });
      parents.forEach(visit);
    }
    visit(item.name);

    const depths = new Map();
    function depth(name) {
      if (depths.has(name)) return depths.get(name);
      const parents = nodes.get(name)?.parents || [];
      const value = parents.length ? 1 + Math.max(...parents.map(depth)) : 0;
      depths.set(name, value);
      return value;
    }
    nodes.forEach(node => depth(node.name));

    const columns = Array.from({ length: Math.max(...depths.values()) + 1 }, () => []);
    nodes.forEach(node => columns[depths.get(node.name)].push(node));
    const margin = 24;
    const rowGap = 72;
    const columnGap = 72;
    const boxHeight = 40;
    const maxRows = Math.max(...columns.map(column => column.length));
    const contentHeight = (maxRows - 1) * rowGap + boxHeight;
    columns.forEach(column => column.forEach(node => {
      node.width = Math.max(96, Math.ceil(node.name.length * 9 + 36));
      node.height = boxHeight;
    }));

    let columnX = margin;
    columns.forEach(column => {
      const columnWidth = Math.max(...column.map(node => node.width));
      const columnHeight = (column.length - 1) * rowGap + boxHeight;
      const columnOffset = (contentHeight - columnHeight) / 2;
      column.forEach((node, row) => {
        node.x = columnX;
        node.y = margin + columnOffset + row * rowGap;
        node.columnRight = columnX + columnWidth;
      });
      columnX += columnWidth + columnGap;
    });
    const width = columnX - columnGap + margin;

    const edges = [];
    const outgoing = new Map();
    const incoming = new Map();
    nodes.forEach(node => {
      node.parents.forEach(parentName => {
        const parent = nodes.get(parentName);
        if (!parent) return;
        const edge = { parent, child: node, outIndex: outgoing.get(parentName) || 0, inIndex: incoming.get(node.name) || 0 };
        outgoing.set(parentName, edge.outIndex + 1);
        incoming.set(node.name, edge.inIndex + 1);
        edges.push(edge);
      });
    });
    const longEdges = edges.filter(edge => depths.get(edge.child.name) - depths.get(edge.parent.name) > 1);
    const height = margin * 2 + contentHeight + longEdges.length * 16;
    let longLane = 0;
    const edgeOffset = (index, count) => (index - (count - 1) / 2) * 8;
    const paths = edges.map(edge => {
      const parentRight = edge.parent.x + edge.parent.width;
      const sourceY = edge.parent.y + boxHeight / 2 + edgeOffset(edge.outIndex, outgoing.get(edge.parent.name));
      const targetY = edge.child.y + boxHeight / 2 + edgeOffset(edge.inIndex, incoming.get(edge.child.name));
      const attributes = `data-parent="${escapeHtml(edge.parent.name)}" data-child="${escapeHtml(edge.child.name)}"`;
      if (depths.get(edge.child.name) - depths.get(edge.parent.name) > 1) {
        const sourceJunction = edge.parent.columnRight + 16 + edge.outIndex * 6;
        const targetJunction = edge.child.x - 16 - edge.inIndex * 6;
        const busY = margin + contentHeight + 16 + longLane * 16;
        longLane += 1;
        return `<path class="inheritance-generalization" ${attributes} d="M ${edge.child.x} ${targetY} H ${targetJunction} V ${busY} H ${sourceJunction} V ${sourceY} H ${parentRight}" marker-end="url(#inheritance-generalization)"/>`;
      }
      const gap = edge.child.x - edge.parent.columnRight;
      const junctionX = edge.parent.columnRight + gap * (0.35 + edge.inIndex * 0.1);
      return `<path class="inheritance-generalization" ${attributes} d="M ${edge.child.x} ${targetY} H ${junctionX} V ${sourceY} H ${parentRight}" marker-end="url(#inheritance-generalization)"/>`;
    }).join("");

    const blocks = columns.flat().map(node => {
      const classifier = classifierByName.get(node.name);
      const definition = classifier?.definition || xmiData.classifierDefinitions?.[node.name] || node.name;
      const abstract = classifier?.kind === "Abstract Class" ? " abstract" : "";
      const current = node.name === item.name ? " current" : "";
      const content = `<title>${escapeHtml(`${node.name}. ${definition}`)}</title>
        <rect class="inheritance-class-box${current}" x="${node.x}" y="${node.y}" width="${node.width}" height="${boxHeight}"/>
        <text class="inheritance-class-name${abstract}" x="${node.x + node.width / 2}" y="${node.y + 25}" text-anchor="middle">${escapeHtml(node.name)}</text>`;
      const attributes = `class="inheritance-class" data-classifier="${escapeHtml(node.name)}" data-depth="${depths.get(node.name)}"${current ? ' data-current="true"' : ""}`;
      return classifier
        ? `<a ${attributes} href="#/classifier/${slug(node.name)}">${content}</a>`
        : `<g ${attributes}>${content}</g>`;
    }).join("");

    return `<section class="inheritance-section"><h2>Наследование</h2><div class="inheritance-diagram">
      <svg class="inheritance-svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="--diagram-width: ${width}px" role="img" aria-label="Иерархия наследования ${escapeHtml(item.name)}">
        <title>Иерархия наследования ${escapeHtml(item.name)}</title>
        <desc>Корневые предки расположены слева, целевой класс ${escapeHtml(item.name)} — справа.</desc>
        <defs><marker id="inheritance-generalization" markerWidth="15" markerHeight="16" refX="13" refY="8" orient="auto" markerUnits="userSpaceOnUse"><path d="M 1 1 L 13 8 L 1 15 Z" fill="#ffffff" stroke="#111111" stroke-width="1.4"/></marker></defs>
        ${paths}${blocks}
      </svg>
    </div></section>`;
  }

  function renderClassifier(id) {
    const item = data.classifiers.find(entry => slug(entry.name) === id);
    if (!item) return renderNotFound();
    const xmi = xmiData.classes[item.name];
    const directProperties = xmi ? xmi.direct : [...(item.attributes || []), ...(item.ends || [])];
    const figures = data.diagrams.filter(diagram => diagram.related.includes(item.name)).map(diagram => diagram.id);
    const inCommonStructure = item.section.startsWith("7.8.");
    const itemContent = contentData.classifiers[item.name] || {};
    document.title = `${item.name} — ${item.ru} — UML 2.5.1`;
    return `
      ${breadcrumbs(inCommonStructure
        ? [{ label: "7 Common Structure" }, { label: "7.8 Классификаторы", href: "#/section/7-8" }, { label: item.name }]
        : [{ label: "Связанные классификаторы" }, { label: item.name }])}
      <p class="eyebrow">${kindLabels[item.kind]} · раздел ${item.section}</p>
      <h1>${escapeHtml(item.ru)}</h1>
      <p class="original-name" lang="en">${escapeHtml(item.name)} [${escapeHtml(item.kind)}]</p>
      ${inheritanceDiagram(item)}
      <div class="meta-row"><span class="kind-tag">${kindLabels[item.kind]}</span><span class="meta-tag">OMG UML 2.5.1, стр. ${item.page}</span></div>
      <div class="definition"><span class="definition-label">Определение</span><p>${metamodelDescription(itemContent.definition || item.definition, item.name)}</p></div>
      ${item.generalizations ? `<section><h2>Обобщения</h2>${linkList(item.generalizations)}</section>` : ""}
      ${item.specializations ? `<section><h2>Специализации</h2>${linkList(item.specializations)}</section>` : ""}
      ${propertySection("Атрибуты", directProperties, item.name)}
      ${propertySection("Унаследованные атрибуты", xmi?.inherited, item.name, true)}
      ${detailSection("Операции", classifierDetails(item, "operations", "signature"), "signature", item.name)}
      ${detailSection("Ограничения", classifierDetails(item, "constraints", "name"), "name", item.name)}
      ${detailSection("Литералы", classifierDetails(item, "literals", "name"), "name", item.name)}
      ${relatedFigures(figures)}
      ${sourceLink(item.page)}`;
  }

  function associationFigures(item) {
    return item.diagrams.map(name => diagramByName[name]).filter(Boolean);
  }

  function renderAssociation(id) {
    const item = data.associations.find(entry => slug(entry.name) === id);
    if (!item) return renderNotFound();
    document.title = `${item.name} — UML 2.5.1`;
    const ends = xmiData.associations[item.name]?.ends || item.ends.map(end => ({ signature: end }));
    return `
      ${breadcrumbs([{ label: "7 Common Structure" }, { label: "7.9 Ассоциации", href: "#/section/7-9" }, { label: item.name }])}
      <p class="eyebrow">Ассоциация · раздел ${item.section}</p>
      <h1>${escapeHtml(item.ru)}</h1>
      <p class="original-name" lang="en">${escapeHtml(item.name)} [Association]</p>
      <div class="meta-row"><span class="kind-tag">Ассоциация</span><span class="meta-tag">OMG UML 2.5.1, стр. ${item.page}</span></div>
      <div class="definition"><span class="definition-label">Определение</span><p>${metamodelDescription(item.definition, item.name)}</p></div>
      ${item.generalizations ? `<section><h2>Обобщения</h2>${linkList(item.generalizations, "association")}</section>` : ""}
      ${item.specializations ? `<section><h2>Специализации</h2>${linkList(item.specializations, "association")}</section>` : ""}
      ${propertySection("Концы ассоциации", ends, item.name, false, "Типы, кратность и другие характеристики обоих концов сверены с нормативным XMI.")}
      <section><h2>Диаграммы в спецификации</h2><div class="meta-row">${item.diagrams.map(name => `<span class="meta-tag">${escapeHtml(name)}</span>`).join("")}</div></section>
      ${relatedFigures(associationFigures(item))}
      ${sourceLink(item.page)}`;
  }

  function renderDiagrams() {
    document.title = "Диаграммы раздела 7 — UML 2.5.1";
    return `
      ${breadcrumbs([{ label: "7 Common Structure" }, { label: "Диаграммы" }])}
      <p class="eyebrow">Common Structure · 21 рисунок</p>
      <h1>Диаграммы</h1>
      <p class="lead">Векторные копии рисунков раздела 7. Все материалы сохранены локально и доступны без подключения к сети.</p>
      <div class="diagram-grid">${data.diagrams.map(diagramTile).join("")}</div>`;
  }

  function renderDiagram(id) {
    const diagram = data.diagrams.find(item => slug(item.id) === id);
    if (!diagram) return renderNotFound();
    document.title = `Рисунок ${diagram.id} — ${diagram.title} — UML 2.5.1`;
    return `
      ${breadcrumbs([{ label: "7 Common Structure" }, { label: "Диаграммы", href: "#/diagrams" }, { label: `Рисунок ${diagram.id}` }])}
      <p class="eyebrow">Рисунок ${diagram.id} · раздел ${diagram.section}</p>
      <h1>${escapeHtml(diagram.title)}</h1>
      <p class="original-name" lang="en">${escapeHtml(diagram.en)}</p>
      <div class="diagram-full">${diagram.vector ? diagramObject(diagram) : `<img src="${diagram.image}" alt="Рисунок ${escapeHtml(diagram.id)}. ${escapeHtml(diagram.title)}">`}</div>
      <section><h2>Элементы на диаграмме</h2>${linkList(diagram.related)}</section>
      <p><a href="#/section/${slug(diagram.section)}">Перейти к разделу ${escapeHtml(diagram.section)}</a></p>
      ${sourceLink(diagram.page)}`;
  }

  const searchItems = [
    ...data.sections.map(item => ({
      title: item.title,
      subtitle: item.en,
      type: `Раздел ${item.id}`,
      href: `#/section/${slug(item.id)}`,
      text: `${item.id} ${item.title} ${item.en} ${item.summary} ${item.semantics || ""} ${item.notation || ""} ${JSON.stringify(contentData.sections[item.id] || "")}`
    })),
    ...data.classifiers.map(item => ({
      title: item.name,
      subtitle: item.ru,
      type: `${kindLabels[item.kind]} · ${item.section}`,
      href: `#/classifier/${slug(item.name)}`,
      text: `${item.name} ${item.ru} ${item.section} ${item.definition} ${(item.generalizations || []).join(" ")} ${(item.specializations || []).join(" ")} ${(xmiData.classes[item.name]?.direct || []).map(property => `${property.signature} ${property.description}`).join(" ")} ${JSON.stringify(contentData.classifiers[item.name] || "")}`
    })),
    ...data.associations.map(item => ({
      title: item.name,
      subtitle: item.ru,
      type: `Ассоциация · ${item.section}`,
      href: `#/association/${slug(item.name)}`,
      text: `${item.name} ${item.ru} ${item.section} ${item.definition} ${(xmiData.associations[item.name]?.ends || []).map(property => `${property.signature} ${property.description}`).join(" ")}`
    })),
    ...data.diagrams.map(item => ({
      title: `Рисунок ${item.id} — ${item.title}`,
      subtitle: item.en,
      type: `Диаграмма · раздел ${item.section}`,
      href: `#/diagram/${slug(item.id)}`,
      text: `${item.id} ${item.title} ${item.en} ${item.related.join(" ")}`
    }))
  ];

  const normalize = value => value.toLowerCase().replace(/ё/g, "е").replace(/\s+/g, " ").trim();

  function findResults(query) {
    const normalized = normalize(query);
    if (!normalized) return [];
    const terms = normalized.split(" ");
    return searchItems
      .map(item => {
        const haystack = normalize(item.text);
        if (!terms.every(term => haystack.includes(term))) return null;
        const title = normalize(item.title);
        let score = 0;
        if (title === normalized) score += 100;
        if (title.startsWith(normalized)) score += 40;
        if (title.includes(normalized)) score += 20;
        if (normalize(item.subtitle).includes(normalized)) score += 12;
        return { ...item, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "ru"));
  }

  function resultCard(item) {
    return `<a class="search-result" href="${item.href}">
      <span class="search-result-meta">${escapeHtml(item.type)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.subtitle)}</p>
    </a>`;
  }

  function renderSearch(query) {
    const results = findResults(query);
    document.title = `Поиск: ${query} — UML 2.5.1`;
    return `
      ${breadcrumbs([{ label: "Поиск" }])}
      <p class="eyebrow">Локальный поиск</p>
      <h1>Результаты поиска</h1>
      <p class="lead">По запросу «${escapeHtml(query)}» ${results.length ? `найдено: ${results.length}` : "ничего не найдено"}.</p>
      ${results.length ? `<div class="search-results">${results.map(resultCard).join("")}</div>` : `<div class="empty-state"><h2>Попробуйте другое имя</h2><p>Можно искать по русскому или английскому названию, например «пространство имён», «Namespace» или «7.5».</p></div>`}`;
  }

  function renderNotFound() {
    document.title = "Страница не найдена — UML 2.5.1";
    return `${breadcrumbs([{ label: "Не найдено" }])}<div class="empty-state"><h1>Страница не найдена</h1><p>Проверьте адрес или вернитесь к содержанию раздела 7.</p><p><a href="#/">Перейти на главную</a></p></div>`;
  }

  function renderNavigation() {
    navigation.innerHTML = `
      <a class="nav-home" data-route="home" href="#/">Обзор справочника</a>
      <p class="nav-group-title">7 · Common Structure</p>
      ${data.sections.map(section => `<a class="nav-section" data-route="section-${slug(section.id)}" href="#/section/${slug(section.id)}"><span class="nav-number">${section.id}</span><span>${escapeHtml(section.title)}</span></a>`).join("")}
      <p class="nav-group-title">Материалы</p>
      <a class="nav-section" data-route="diagrams" href="#/diagrams"><span class="nav-number">21</span><span>Диаграммы</span></a>`;
  }

  function updateActiveNavigation(route) {
    navigation.querySelectorAll("a").forEach(link => link.classList.remove("active"));
    let key = "home";
    if (route[0] === "section") key = `section-${route[1]}`;
    if (route[0] === "classifier") key = "section-7-8";
    if (route[0] === "association") key = "section-7-9";
    if (route[0] === "diagram" || route[0] === "diagrams") key = "diagrams";
    navigation.querySelector(`[data-route="${key}"]`)?.classList.add("active");
  }

  function closeMenu() {
    sidebar.classList.remove("open");
    scrim.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
  }

  function route() {
    const hash = window.location.hash.replace(/^#\/?/, "");
    const parts = hash ? hash.split("/").map(part => decodeURIComponent(part)) : [];
    let html;
    if (!parts.length) html = renderHome();
    else if (parts[0] === "section" && parts[1]) html = renderSection(parts[1]);
    else if (parts[0] === "classifier" && parts[1]) html = renderClassifier(parts[1]);
    else if (parts[0] === "association" && parts[1]) html = renderAssociation(parts[1]);
    else if (parts[0] === "diagrams") html = renderDiagrams();
    else if (parts[0] === "diagram" && parts[1]) html = renderDiagram(parts[1]);
    else if (parts[0] === "search" && parts[1]) html = renderSearch(parts[1]);
    else html = renderNotFound();
    content.innerHTML = html;
    updateActiveNavigation(parts);
    closeMenu();
    hideSuggestions();
    window.scrollTo(0, 0);
  }

  function hideSuggestions() {
    suggestions.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
  }

  function showSuggestions() {
    const results = findResults(searchInput.value).slice(0, 8);
    if (!normalize(searchInput.value)) {
      hideSuggestions();
      return;
    }
    suggestions.innerHTML = results.length
      ? results.map(item => `<a class="suggestion" href="${item.href}"><span><strong>${escapeHtml(item.title)}</strong><br><small>${escapeHtml(item.subtitle)}</small></span><small>${escapeHtml(item.type)}</small></a>`).join("")
      : `<p class="suggestion-empty">Совпадений не найдено. Нажмите Enter для перехода к поиску.</p>`;
    suggestions.hidden = false;
    searchInput.setAttribute("aria-expanded", "true");
  }

  function applyTheme(theme) {
    if (theme === "dark") document.documentElement.dataset.theme = "dark";
    else delete document.documentElement.dataset.theme;
  }

  try {
    applyTheme(localStorage.getItem("uml-theme"));
  } catch (_) {
    applyTheme("light");
  }

  themeButton.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    try {
      localStorage.setItem("uml-theme", theme);
    } catch (_) {}
  });

  menuButton.addEventListener("click", () => {
    sidebar.classList.add("open");
    scrim.hidden = false;
    menuButton.setAttribute("aria-expanded", "true");
    sidebar.querySelector("a")?.focus();
  });

  document.getElementById("close-menu-button").addEventListener("click", closeMenu);
  scrim.addEventListener("click", closeMenu);
  searchInput.addEventListener("input", showSuggestions);
  searchInput.addEventListener("focus", showSuggestions);
  searchForm.addEventListener("submit", event => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query) window.location.hash = `#/search/${encodeURIComponent(query)}`;
  });

  searchForm.querySelector("svg").addEventListener("click", () => {
    searchForm.classList.add("mobile-open");
    searchInput.focus();
  });

  document.addEventListener("click", event => {
    if (!searchForm.contains(event.target)) {
      hideSuggestions();
      searchForm.classList.remove("mobile-open");
    }
  });

  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      searchForm.classList.add("mobile-open");
      searchInput.focus();
      searchInput.select();
    }
    if (event.key === "Escape") {
      hideSuggestions();
      searchForm.classList.remove("mobile-open");
      closeMenu();
    }
  });

  window.addEventListener("hashchange", route);
  renderNavigation();
  route();
})();
