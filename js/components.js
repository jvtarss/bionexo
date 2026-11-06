/* ============================================================
   BIONEXO - Componentes compartilhados
   Cabecalho (com menu suspenso), rodape e utilidades comuns.
   Tema claro unico.
   ============================================================ */
(function () {
  "use strict";

  // Logo principal (mascote Bionexo)
  const LOGO = `<img class="logo" src="assets/img/id/bionexo.png" alt="Bionexo" width="38" height="38">`;

  function mi(name) { return `<span class="material-icons" aria-hidden="true">${name}</span>`; }

  // paginas principais do menu
  const MAIN = [
    { href: "index.html",    label: "Início",   icon: "home" },
    { href: "questoes.html", label: "Questões", icon: "quiz" },
    { href: "resumos.html",  label: "Resumos",  icon: "menu_book" },
    { href: "mapas.html",    label: "Mapas",    icon: "hub" },
  ];
  // menu suspenso "Ferramentas"
  const TOOLS = [
    { href: "formulas.html", label: "Fórmulas",  icon: "functions" },
    { href: "labhacks.html", label: "LabHacks",  icon: "science" },
  ];
  // paginas finais
  const TAIL = [
    { href: "monitores.html", label: "Monitores", icon: "groups" },
    { href: "sobre.html",     label: "Sobre",     icon: "info" },
  ];

  function currentPage() {
    const path = location.pathname.split("/").pop();
    return !path ? "index.html" : path;
  }

  function link(p, here) {
    return `<a href="${p.href}" class="${p.href === here ? "active" : ""}">${mi(p.icon)}<span>${p.label}</span></a>`;
  }

  function buildHeader() {
    const here = currentPage();
    const toolActive = TOOLS.some(t => t.href === here) || here.indexOf("labhacks") === 0 || here === "formulas.html";
    return `
    <header class="site-header">
      <div class="container">
        <a class="brand" href="index.html">${LOGO}<span>Bionexo</span></a>
        <button class="icon-btn nav-toggle" aria-label="Abrir menu" aria-expanded="false">${mi("menu")}</button>
        <nav class="nav" id="mainNav">
          ${MAIN.map(p => link(p, here)).join("")}
          <div class="dropdown" id="toolsDd">
            <button class="dd-btn ${toolActive ? "active" : ""}" aria-haspopup="true" aria-expanded="false">
              ${mi("build")}<span>Ferramentas</span><span class="material-icons caret" aria-hidden="true">expand_more</span>
            </button>
            <div class="dropdown-menu">
              ${TOOLS.map(p => link(p, here)).join("")}
            </div>
          </div>
          ${TAIL.map(p => link(p, here)).join("")}
        </nav>
      </div>
    </header>`;
  }

  function buildFooter() {
    const year = new Date().getFullYear();
    return `
    <section class="partners" aria-label="Realização e apoio">
      <div class="container">
        <span class="partners-label">Realização e apoio</span>
        <div class="partners-logos">
          <img src="assets/img/id/uft.png" alt="Universidade Federal do Tocantins" loading="lazy">
          <img class="course" src="assets/img/id/ebb.png" alt="Curso de Graduacao em Engenharia de Bioprocessos e Biotecnologia" loading="lazy">
          <img class="course" src="assets/img/id/biotec.png" alt="Curso de Graduacao em Biotecnologia" loading="lazy">
          <img src="assets/img/id/piip.png" alt="PIIP" loading="lazy">
        </div>
      </div>
    </section>
    <footer class="site-footer">
      <div class="footer-bar"></div>
      <div class="container">
        <div>
          <a class="brand" href="index.html">${LOGO}<span>Bionexo</span></a>
          <p>Banco de conhecimentos da monitoria de Engenharia de Bioprocessos e Biotecnologia. Questões, resumos, mapas mentais e ferramentas de laboratório em um só lugar.</p>
        </div>
        <div>
          <h4>Navegar</h4>
          <a href="questoes.html">${mi("quiz")}Questões</a>
          <a href="resumos.html">${mi("menu_book")}Resumos</a>
          <a href="mapas.html">${mi("hub")}Mapas mentais</a>
          <a href="formulas.html">${mi("functions")}Fórmulas</a>
        </div>
        <div>
          <h4>Ferramentas e equipe</h4>
          <a href="labhacks.html">${mi("science")}LabHacks</a>
          <a href="monitores.html">${mi("groups")}Monitores</a>
          <a href="sobre.html#contribuir">${mi("volunteer_activism")}Como contribuir</a>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>&copy; ${year} Bionexo &middot; Projeto de monitoria</p>
          <p>Engenharia de Bioprocessos e Biotecnologia</p>
        </div>
      </div>
    </footer>`;
  }

  function ensureFavicon() {
    document.querySelectorAll('link[rel="icon"]').forEach(n => n.remove());
    const l = document.createElement("link");
    l.rel = "icon"; l.type = "image/svg+xml"; l.href = "assets/img/id/bionexo.svg";
    document.head.appendChild(l);
  }

  function mount() {
    ensureFavicon();
    const headerSlot = document.getElementById("header");
    if (headerSlot) headerSlot.innerHTML = buildHeader();
    else document.body.insertAdjacentHTML("afterbegin", buildHeader());

    const footerSlot = document.getElementById("footer");
    if (footerSlot) footerSlot.innerHTML = buildFooter();
    else document.body.insertAdjacentHTML("beforeend", buildFooter());

    // Menu mobile
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("mainNav");
    if (navToggle && nav) navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });

    // Menu suspenso "Ferramentas"
    const dd = document.getElementById("toolsDd");
    if (dd) {
      const btn = dd.querySelector(".dd-btn");
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const open = dd.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(open));
      });
      document.addEventListener("click", e => {
        if (!dd.contains(e.target)) dd.classList.remove("open");
      });
    }
  }

  // ---- Utilidades expostas ----
  const Bionexo = {
    norm(s) {
      return (s || "").toString().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    },
    diffClass(d) {
      const n = Bionexo.norm(d);
      if (n.startsWith("fac")) return "diff-facil";
      if (n.startsWith("dif")) return "diff-dificil";
      return "diff-media";
    },
    esc(s) {
      return (s || "").toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    },
    // mini-markdown seguro: ## titulo, listas, **negrito**, *italico*, `codigo`.
    // LaTeX (\( \) \[ \]) passa intacto para o MathJax.
    md(text) {
      if (!text) return "";
      const blocks = text.trim().split(/\n{2,}/);
      return blocks.map(block => {
        const lines = block.split("\n");
        if (lines.every(l => /^\s*\d+[\.\)]\s+/.test(l)))
          return "<ol>" + lines.map(l => "<li>" + inline(l.replace(/^\s*\d+[\.\)]\s+/, "")) + "</li>").join("") + "</ol>";
        if (lines.every(l => /^\s*[-*]\s+/.test(l)))
          return "<ul>" + lines.map(l => "<li>" + inline(l.replace(/^\s*[-*]\s+/, "")) + "</li>").join("") + "</ul>";
        const h = block.match(/^(#{2,3})\s+(.*)$/);
        if (h) return `<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`;
        return "<p>" + inline(block.replace(/\n/g, "<br>")) + "</p>";
      }).join("");
      function inline(s) {
        return s
          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
          .replace(/(^|[^*])\*(?!\s)(.+?)\*/g, "$1<em>$2</em>")
          .replace(/`(.+?)`/g, "<code>$1</code>");
      }
    },
    typeset(el) {
      if (window.MathJax && window.MathJax.typesetPromise)
        window.MathJax.typesetPromise(el ? [el] : undefined).catch(() => {});
    },
  };
  window.Bionexo = Bionexo;

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
