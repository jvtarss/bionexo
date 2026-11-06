/* ============================================================
   BIONEXO — Página de Mapas Mentais
   Galeria de imagens com filtro, busca e visualização ampliada.
   ============================================================ */
(function () {
  "use strict";
  const B = window.Bionexo;
  const DATA = (window.BIONEXO && window.BIONEXO.mapas) || [];

  const listEl = document.getElementById("mList");
  const searchEl = document.getElementById("mSearch");
  const discEl = document.getElementById("mDisc");
  const countEl = document.getElementById("mCount");
  const lb = document.getElementById("lightbox");
  if (!listEl) return;

  const discs = [...new Set(DATA.map(m => m.disciplina))].sort((a, b) => a.localeCompare(b, "pt"));
  for (const d of discs) {
    const o = document.createElement("option");
    o.value = d; o.textContent = d;
    discEl.appendChild(o);
  }

  function matches(m) {
    const term = B.norm(searchEl.value.trim());
    if (discEl.value && m.disciplina !== discEl.value) return false;
    if (term) {
      const hay = B.norm([m.titulo, m.descricao, m.disciplina, (m.tags || []).join(" ")].join(" "));
      if (!hay.includes(term)) return false;
    }
    return true;
  }

  function tileHTML(m) {
    const thumb = m.imagem
      ? `<img src="${B.esc(m.imagem)}" alt="${B.esc(m.titulo)}" loading="lazy">`
      : `<div class="ph"><span class="material-icons">hub</span>Mapa mental<br><small>(imagem em breve)</small></div>`;
    return `<article class="tile" data-id="${m.id}">
      <div class="thumb" ${m.imagem ? "data-zoom" : ""} ${m.imagem ? 'style="cursor:zoom-in"' : ""}>${thumb}</div>
      <div class="tile-body">
        <span class="chip disc">${B.esc(m.disciplina)}</span>
        <h3 style="margin-top:10px">${B.esc(m.titulo)}</h3>
        <p>${B.esc(m.descricao)}</p>
        <div class="tile-foot">
          ${m.imagem
            ? `<button class="btn btn-soft btn-sm" data-zoom-btn>Ampliar</button>
               <a class="btn btn-ghost btn-sm" href="${B.esc(m.imagem)}" download>Baixar</a>`
            : `<span class="chip">Em breve</span>`}
        </div>
      </div>
    </article>`;
  }

  function render() {
    const found = DATA.filter(matches);
    countEl.textContent = `${found.length} ${found.length === 1 ? "mapa" : "mapas"}`;
    listEl.innerHTML = found.length
      ? found.map(tileHTML).join("")
      : `<div class="empty"><p>Nenhum mapa mental encontrado.</p></div>`;
  }

  function openLightbox(m) {
    lb.querySelector("img").src = m.imagem;
    lb.querySelector("img").alt = m.titulo;
    lb.querySelector(".lb-cap").textContent = m.titulo + " · " + m.disciplina;
    lb.classList.add("show");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lb.classList.remove("show");
    lb.querySelector("img").src = "";
    document.body.style.overflow = "";
  }

  listEl.addEventListener("click", e => {
    const tile = e.target.closest(".tile");
    if (!tile) return;
    if (e.target.closest("[data-zoom]") || e.target.closest("[data-zoom-btn]")) {
      const m = DATA.find(x => x.id === tile.dataset.id);
      if (m && m.imagem) openLightbox(m);
    }
  });
  lb.addEventListener("click", e => {
    if (e.target === lb || e.target.closest(".lb-close")) closeLightbox();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

  let t;
  searchEl.addEventListener("input", () => { clearTimeout(t); t = setTimeout(render, 160); });
  discEl.addEventListener("change", render);

  render();
})();
