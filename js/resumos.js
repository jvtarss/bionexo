/* ============================================================
   BIONEXO — Página de Resumos
   Lista os resumos em cartões e abre o conteúdo completo.
   ============================================================ */
(function () {
  "use strict";
  const B = window.Bionexo;
  const DATA = (window.BIONEXO && window.BIONEXO.resumos) || [];

  const listEl = document.getElementById("rList");
  const searchEl = document.getElementById("rSearch");
  const discEl = document.getElementById("rDisc");
  const countEl = document.getElementById("rCount");
  const readerEl = document.getElementById("rReader");
  if (!listEl) return;

  const discs = [...new Set(DATA.map(r => r.disciplina))].sort((a, b) => a.localeCompare(b, "pt"));
  for (const d of discs) {
    const o = document.createElement("option");
    o.value = d; o.textContent = d;
    discEl.appendChild(o);
  }

  function matches(r) {
    const term = B.norm(searchEl.value.trim());
    if (discEl.value && r.disciplina !== discEl.value) return false;
    if (term) {
      const hay = B.norm([r.titulo, r.descricao, r.disciplina, r.conteudo, (r.tags || []).join(" ")].join(" "));
      if (!hay.includes(term)) return false;
    }
    return true;
  }

  function tileHTML(r) {
    const thumb = r.imagem
      ? `<img src="${B.esc(r.imagem)}" alt="${B.esc(r.titulo)}" loading="lazy">`
      : `<div class="ph"><span class="material-icons">description</span>${B.esc(r.disciplina)}</div>`;
    return `<article class="tile" data-id="${r.id}">
      <div class="thumb">${thumb}</div>
      <div class="tile-body">
        <span class="chip disc">${B.esc(r.disciplina)}</span>
        <h3 style="margin-top:10px">${B.esc(r.titulo)}</h3>
        <p>${B.esc(r.descricao)}</p>
        <div class="tile-foot">
          <button class="btn btn-soft btn-sm" data-open-resumo>Ler resumo</button>
        </div>
      </div>
    </article>`;
  }

  function render() {
    const found = DATA.filter(matches);
    countEl.textContent = `${found.length} ${found.length === 1 ? "resumo" : "resumos"}`;
    listEl.innerHTML = found.length
      ? found.map(tileHTML).join("")
      : `<div class="empty"><p>Nenhum resumo encontrado.</p></div>`;
  }

  function openReader(r) {
    readerEl.innerHTML = `
      <button class="lb-close" data-close aria-label="Fechar"><span class="material-icons">close</span></button>
      <div class="reader-panel">
        <span class="chip disc">${B.esc(r.disciplina)}</span>
        <h1 style="margin:12px 0 4px">${B.esc(r.titulo)}</h1>
        <p class="muted">${B.esc(r.descricao)}</p>
        <hr style="border:0;border-top:1px solid var(--border);margin:18px 0">
        <div class="prose">${B.md(r.conteudo)}</div>
      </div>`;
    readerEl.classList.add("show");
    document.body.style.overflow = "hidden";
    B.typeset(readerEl);
  }
  function closeReader() {
    readerEl.classList.remove("show");
    document.body.style.overflow = "";
  }

  listEl.addEventListener("click", e => {
    if (!e.target.closest("[data-open-resumo]")) return;
    const id = e.target.closest(".tile").dataset.id;
    const r = DATA.find(x => x.id === id);
    if (r) openReader(r);
  });
  readerEl.addEventListener("click", e => {
    if (e.target === readerEl || e.target.closest("[data-close]")) closeReader();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeReader(); });

  let t;
  searchEl.addEventListener("input", () => { clearTimeout(t); t = setTimeout(render, 160); });
  discEl.addEventListener("change", render);

  render();
})();
