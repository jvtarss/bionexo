/* ============================================================
   BIONEXO - Pagina de Formulas
   Busca classificada (por nome, categoria ou variavel, ex.: "volume")
   e exibicao em acordeao (menu suspenso) com todas as formas.
   ============================================================ */
(function () {
  "use strict";
  const B = window.Bionexo;
  const DATA = (window.BIONEXO && window.BIONEXO.formulas) || [];

  const listEl = document.getElementById("fList");
  const searchEl = document.getElementById("fSearch");
  const catEl = document.getElementById("fCat");
  const countEl = document.getElementById("fCount");
  if (!listEl) return;

  // indice de busca (inclui nomes das variaveis -> procurar "volume" acha a formula)
  DATA.forEach(f => {
    const varNames = (f.variaveis || []).map(v => v.nome).join(" ");
    f._hay = B.norm([f.nome, f.categoria, f.descricao, varNames, (f.tags || []).join(" ")].join(" "));
  });

  const cats = [...new Set(DATA.map(f => f.categoria))].sort((a, b) => a.localeCompare(b, "pt"));
  for (const c of cats) {
    const o = document.createElement("option");
    o.value = c; o.textContent = c;
    catEl.appendChild(o);
  }

  function matches(f) {
    const term = B.norm(searchEl.value.trim());
    if (catEl.value && f.categoria !== catEl.value) return false;
    if (term && !f._hay.includes(term)) return false;
    return true;
  }

  function cardHTML(f) {
    const formas = f.formas.map(fo =>
      `<div class="formula-forma">\\[ ${fo.latex} \\]${fo.nota ? `<span class="nota">${B.esc(fo.nota)}</span>` : ""}</div>`
    ).join("");

    const vars = (f.variaveis || []).map(v =>
      `<tr><td>\\(${v.sim}\\)</td><td>${B.esc(v.nome)}</td><td class="muted">${B.esc(v.unidade || "")}</td></tr>`
    ).join("");

    const tags = (f.variaveis || []).map(v => `<span class="chip">${B.esc(v.nome)}</span>`).join("");

    return `<article class="formula-card" data-id="${f.id}">
      <button class="formula-head" aria-expanded="false">
        <span class="material-icons f-ico" aria-hidden="true">functions</span>
        <h3>${B.esc(f.nome)}</h3>
        <span class="chip disc f-cat">${B.esc(f.categoria)}</span>
        <span class="material-icons f-caret" aria-hidden="true">expand_more</span>
      </button>
      <div class="formula-body">
        <p class="desc">${B.esc(f.descricao)}</p>
        ${formas}
        ${vars ? `<table class="var-table">
          <thead><tr><th>Símbolo</th><th>Variável</th><th>Unidade (SI)</th></tr></thead>
          <tbody>${vars}</tbody></table>` : ""}
        <div class="var-tags">${tags}</div>
      </div>
    </article>`;
  }

  function render() {
    const found = DATA.filter(matches);
    countEl.textContent = `${found.length} ${found.length === 1 ? "fórmula" : "fórmulas"}`;
    if (!found.length) {
      listEl.innerHTML = `<div class="empty"><span class="material-icons">search_off</span><p>Nenhuma fórmula encontrada. Tente buscar por uma variável, como "volume" ou "temperatura".</p></div>`;
      return;
    }
    listEl.innerHTML = found.map(cardHTML).join("");
    // quando ha busca ativa, ja abre os resultados
    if (searchEl.value.trim() || catEl.value) {
      listEl.querySelectorAll(".formula-card").forEach(c => c.classList.add("open"));
    }
    B.typeset(listEl);
  }

  listEl.addEventListener("click", e => {
    const head = e.target.closest(".formula-head");
    if (!head) return;
    const card = head.closest(".formula-card");
    const open = card.classList.toggle("open");
    head.setAttribute("aria-expanded", String(open));
    if (open) B.typeset(card);
  });

  let t;
  searchEl.addEventListener("input", () => { clearTimeout(t); t = setTimeout(render, 160); });
  catEl.addEventListener("change", render);

  render();
})();
