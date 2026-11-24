(() => {
  "use strict";

  const generated = window.UML_PAGES;
  const content = document.getElementById("content");
  const navigation = document.getElementById("navigation");
  const sidebar = document.getElementById("sidebar");
  const scrim = document.getElementById("scrim");
  const menuButton = document.getElementById("menu-button");
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const suggestions = document.getElementById("search-suggestions");
  const themeButton = document.getElementById("theme-button");
  const searchItems = generated.searchItems;

  const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[character]);

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
      <nav class="breadcrumbs" aria-label="Хлебные крошки"><a href="#/">Справочник</a><span aria-hidden="true">/</span><span aria-current="page">Поиск</span></nav>
      <p class="eyebrow">Локальный поиск</p>
      <h1>Результаты поиска</h1>
      <p class="lead">По запросу «${escapeHtml(query)}» ${results.length ? `найдено: ${results.length}` : "ничего не найдено"}.</p>
      ${results.length ? `<div class="search-results">${results.map(resultCard).join("")}</div>` : `<div class="empty-state"><h2>Попробуйте другое имя</h2><p>Можно искать по русскому или английскому названию, например «пространство имён», «Namespace» или «7.5».</p></div>`}`;
  }

  function updateActiveNavigation(parts) {
    navigation.querySelectorAll("a").forEach(link => link.classList.remove("active"));
    let key = "home";
    if (parts[0] === "section") key = `section-${parts[1]}`;
    if (parts[0] === "classifier") key = "section-7-8";
    if (parts[0] === "association") key = "section-7-9";
    if (parts[0] === "diagram" || parts[0] === "diagrams") key = "diagrams";
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
    if (parts[0] === "search" && parts[1]) {
      content.innerHTML = renderSearch(parts.slice(1).join("/"));
    } else {
      const key = hash ? `#/${hash}` : "#/";
      content.innerHTML = generated.pages[key] || generated.notFound;
      const initialScroll = content.querySelector("[data-initial-scroll]");
      if (initialScroll) {
        requestAnimationFrame(() => {
          initialScroll.scrollLeft = Number(initialScroll.dataset.initialScroll);
        });
      }
      document.title = generated.titles[key] || "Страница не найдена — UML 2.5.1";
    }
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
  navigation.innerHTML = generated.navigation;
  route();
})();
