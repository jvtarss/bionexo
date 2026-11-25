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
      if (!text && text !== 0) return "";
      text = String(text);
      const blocks = text.trim().split(/\n{2,}/);
      return blocks.map(block => {
        const lines = block.split("\n");
        // bloco de código: entre linhas "~~~" (sem linhas em branco dentro)
        if (lines.length >= 2 && /^\s*~~~/.test(lines[0]) && /^\s*~~~\s*$/.test(lines[lines.length - 1]))
          return '<pre class="code-block"><code>' + lines.slice(1, -1).join("\n") + "</code></pre>";
        // figura vetorial: bloco que começa com <svg ...> e termina em </svg>; o texto após o </svg> vira legenda.
        // O conteúdo chega escapado (md recebe esc(texto)), então a figura é desescapada aqui.
        if (/^\s*(<|&lt;)svg[\s>]/.test(block)) {
          const bruto = block.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
          const fim = bruto.lastIndexOf("</svg>");
          if (fim > -1) {
            const cap = bruto.slice(fim + 6).trim();
            return '<figure class="r-fig r-svg">' + bruto.slice(0, fim + 6) +
              (cap ? "<figcaption>" + inline(Bionexo.esc(cap)) + "</figcaption>" : "") + "</figure>";
          }
        }
        // figura incorporada (imagem externa, sem baixar): 1ª linha "![legenda](https://...)", demais = crédito
        const fig = lines[0].match(/^\s*!\[([^\]]*)\]\((https:\/\/[^\s)]+)\)\s*$/);
        if (fig) {
          const cred = lines.slice(1).join(" ").trim();
          return `<figure class="r-fig"><img src="${fig[2]}" alt="${fig[1].replace(/"/g, "&quot;")}" loading="lazy" referrerpolicy="no-referrer"` +
            ` onerror="this.closest('figure').classList.add('r-fig-erro')">` +
            `<figcaption>${inline(fig[1])}${cred ? `<span class="r-fig-cred">${inline(cred)}</span>` : ""}</figcaption></figure>`;
        }
        // caixa de destaque: linhas iniciadas por "> " (aceita a forma já escapada "&gt; ")
        if (lines.every(l => /^\s*(>|&gt;)\s?/.test(l)))
          return '<blockquote class="callout">' + inline(lines.map(l => l.replace(/^\s*(>|&gt;)\s?/, "")).join("<br>")) + "</blockquote>";
        // tabela: todas as linhas começam com "|"; a 2ª linha é o separador |---|
        if (lines.length >= 2 && lines.every(l => /^\s*\|/.test(l)) && /^\s*\|[\s:|-]+\|\s*$/.test(lines[1])) {
          const cells = l => l.trim().replace(/^\||\|$/g, "").split("|").map(c => inline(c.trim()));
          const head = cells(lines[0]), body = lines.slice(2).map(cells);
          return '<div class="table-wrap"><table><thead><tr>' + head.map(c => "<th>" + c + "</th>").join("") +
            "</tr></thead><tbody>" + body.map(r => "<tr>" + r.map(c => "<td>" + c + "</td>").join("") + "</tr>").join("") +
            "</tbody></table></div>";
        }
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
          .replace(/\[([^\]]+)\]\((https:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
          .replace(/(^|[^*])\*(?!\s)(.+?)\*/g, "$1<em>$2</em>")
          .replace(/`(.+?)`/g, "<code>$1</code>");
      }
    },
    typeset(el) {
      if (window.MathJax && window.MathJax.typesetPromise)
        window.MathJax.typesetPromise(el ? (Array.isArray(el) ? el : [el]) : undefined).catch(() => {});
    },
  };
  window.Bionexo = Bionexo;

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
