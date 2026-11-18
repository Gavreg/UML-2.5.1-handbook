(() => {
  "use strict";

  const data = window.UML_DATA;
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

  function detailSection(title, items, key = "signature") {
    if (!items || !items.length) return "";
    return `<section><h2>${title}</h2><ul class="detail-list">${items.map(item => `
      <li class="detail-item">
        <code>${escapeHtml(item[key] || item.name)}</code>
        ${item.description ? `<p>${escapeHtml(item.description)}</p>` : ""}
      </li>`).join("")}</ul></section>`;
  }

  function relatedFigures(ids = []) {
    if (!ids.length) return "";
    return `<section><h2>Связанные диаграммы</h2><div class="diagram-grid">${ids.map(id => diagramTile(diagramById.get(id))).join("")}</div></section>`;
  }

  function figureCard(id) {
    const diagram = diagramById.get(id);
    return `<figure class="figure-card" id="figure-${slug(diagram.id)}">
      <a class="figure-link" href="#/diagram/${slug(diagram.id)}" aria-label="Открыть рисунок ${escapeHtml(diagram.id)} отдельно">
        <img src="${diagram.image}" alt="Рисунок ${escapeHtml(diagram.id)}. ${escapeHtml(diagram.title)}" loading="lazy">
      </a>
      <figcaption class="figure-caption">
        <strong>Рис. ${escapeHtml(diagram.id)}</strong>
        <span>${escapeHtml(diagram.title)}</span>
        <small>OMG UML 2.5.1, стр. ${diagram.page}</small>
      </figcaption>
      <details class="figure-related">
        <summary>Элементы на диаграмме</summary>
        ${linkList(diagram.related)}
      </details>
    </figure>`;
  }

  function diagramTile(diagram) {
    return `<a class="diagram-tile" href="#/diagram/${slug(diagram.id)}">
      <span class="diagram-preview"><img src="${diagram.image}" alt="" loading="lazy"></span>
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
      <div class="notice">На текущем этапе рисунки представлены скриншотами официальной спецификации. Переходы к элементам доступны в списке «Элементы на диаграмме». Следующий этап — масштабируемые SVG с интерактивными классами.</div>
      <h2>Структура раздела 7</h2>
      <div class="card-grid">
        ${data.sections.slice(0, 7).map(section => `<a class="link-card" href="#/section/${slug(section.id)}">
          <span class="link-card-top"><span class="link-card-number">${section.id}</span><span aria-hidden="true">→</span></span>
          <strong>${escapeHtml(section.title)}</strong>
          <small>${escapeHtml(section.en)}</small>
          <p>${escapeHtml(section.summary)}</p>
        </a>`).join("")}
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
    return `
      ${breadcrumbs([{ label: "7 Common Structure" }, { label: `${section.id} ${section.title}` }])}
      <p class="eyebrow">Раздел ${section.id} · стр. ${section.page}</p>
      <h1>${escapeHtml(section.title)}</h1>
      <p class="original-name" lang="en">${escapeHtml(section.en)}</p>
      <div class="definition"><span class="definition-label">Содержание раздела</span><p>${escapeHtml(section.summary)}</p></div>
      ${section.semantics ? `<section><h2>Семантика</h2><p>${escapeHtml(section.semantics)}</p></section>` : ""}
      ${section.notation ? `<section><h2>Нотация</h2><p>${escapeHtml(section.notation)}</p></section>` : ""}
      ${isClassifiers ? `<section><h2>Классификаторы раздела</h2><div class="object-list">${data.classifiers.map(item => objectRow(item, "classifier")).join("")}</div></section>` : ""}
      ${isAssociations ? `<section><h2>Ассоциации раздела</h2><div class="object-list">${data.associations.map(item => objectRow(item, "association")).join("")}</div></section>` : ""}
      ${section.figures.length ? `<section><h2>Абстрактный синтаксис и примеры</h2>${section.figures.map(figureCard).join("")}</section>` : ""}
      ${sourceLink(section.page)}`;
  }

  function renderClassifier(id) {
    const item = data.classifiers.find(entry => slug(entry.name) === id);
    if (!item) return renderNotFound();
    document.title = `${item.name} — ${item.ru} — UML 2.5.1`;
    return `
      ${breadcrumbs([{ label: "7 Common Structure" }, { label: "7.8 Классификаторы", href: "#/section/7-8" }, { label: item.name }])}
      <p class="eyebrow">${kindLabels[item.kind]} · раздел ${item.section}</p>
      <h1>${escapeHtml(item.ru)}</h1>
      <p class="original-name" lang="en">${escapeHtml(item.name)} [${escapeHtml(item.kind)}]</p>
      <div class="meta-row"><span class="kind-tag">${kindLabels[item.kind]}</span><span class="meta-tag">OMG UML 2.5.1, стр. ${item.page}</span></div>
      <div class="definition"><span class="definition-label">Определение</span><p>${escapeHtml(item.definition)}</p></div>
      ${item.generalizations ? `<section><h2>Обобщения</h2>${linkList(item.generalizations)}</section>` : ""}
      ${item.specializations ? `<section><h2>Специализации</h2>${linkList(item.specializations)}</section>` : ""}
      ${detailSection("Атрибуты", item.attributes)}
      ${detailSection("Концы ассоциаций", item.ends)}
      ${detailSection("Операции", item.operations)}
      ${detailSection("Ограничения", item.constraints, "name")}
      ${detailSection("Литералы", item.literals, "name")}
      ${relatedFigures(item.figures)}
      ${sourceLink(item.page)}`;
  }

  function associationFigures(item) {
    return item.diagrams.map(name => diagramByName[name]).filter(Boolean);
  }

  function renderAssociation(id) {
    const item = data.associations.find(entry => slug(entry.name) === id);
    if (!item) return renderNotFound();
    document.title = `${item.name} — UML 2.5.1`;
    const ends = item.ends.map(end => ({ signature: end }));
    return `
      ${breadcrumbs([{ label: "7 Common Structure" }, { label: "7.9 Ассоциации", href: "#/section/7-9" }, { label: item.name }])}
      <p class="eyebrow">Ассоциация · раздел ${item.section}</p>
      <h1>${escapeHtml(item.ru)}</h1>
      <p class="original-name" lang="en">${escapeHtml(item.name)} [Association]</p>
      <div class="meta-row"><span class="kind-tag">Ассоциация</span><span class="meta-tag">OMG UML 2.5.1, стр. ${item.page}</span></div>
      <div class="definition"><span class="definition-label">Определение</span><p>${escapeHtml(item.definition)}</p></div>
      ${item.generalizations ? `<section><h2>Обобщения</h2>${linkList(item.generalizations, "association")}</section>` : ""}
      ${item.specializations ? `<section><h2>Специализации</h2>${linkList(item.specializations, "association")}</section>` : ""}
      ${detailSection("Концы ассоциации", ends)}
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
      <p class="lead">Оригинальные рисунки раздела 7. Изображения сохранены локально и доступны без подключения к сети.</p>
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
      <div class="diagram-full"><img src="${diagram.image}" alt="Рисунок ${escapeHtml(diagram.id)}. ${escapeHtml(diagram.title)}"></div>
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
      text: `${item.id} ${item.title} ${item.en} ${item.summary} ${item.semantics || ""} ${item.notation || ""}`
    })),
    ...data.classifiers.map(item => ({
      title: item.name,
      subtitle: item.ru,
      type: `${kindLabels[item.kind]} · ${item.section}`,
      href: `#/classifier/${slug(item.name)}`,
      text: `${item.name} ${item.ru} ${item.section} ${item.definition} ${(item.generalizations || []).join(" ")} ${(item.specializations || []).join(" ")}`
    })),
    ...data.associations.map(item => ({
      title: item.name,
      subtitle: item.ru,
      type: `Ассоциация · ${item.section}`,
      href: `#/association/${slug(item.name)}`,
      text: `${item.name} ${item.ru} ${item.section} ${item.definition} ${item.ends.join(" ")}`
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
