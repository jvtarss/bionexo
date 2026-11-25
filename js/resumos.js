/* ============================================================
   BIONEXO — Página de Resumos
   Lista os resumos agrupados por área, filtra por área/busca
   (inclusive vindo dos chips das questões) e abre o leitor.
   Link direto para um resumo: resumos.html#r12
   ============================================================ */
(function () {
  "use strict";
  const B = window.Bionexo;
  const BIO = window.BIONEXO || {};
  const AREAS = BIO.resumoAreas || [];
  const DATA = (BIO.resumos || []).slice().sort((a, b) => (a.num || 999) - (b.num || 999));

  const listEl = document.getElementById("rList");
  const searchEl = document.getElementById("rSearch");
  const areaEl = document.getElementById("rDisc");
  const countEl = document.getElementById("rCount");
  const readerEl = document.getElementById("rReader");
  if (!listEl) return;

  const areaInfo = nome => AREAS.find(a => a.nome === nome) || { nome: nome || "Outros", icone: "description" };
  const areaOrder = nome => { const i = AREAS.findIndex(a => a.nome === nome); return i < 0 ? 999 : i; };

  // áreas presentes, na ordem oficial
  const areas = [...new Set(DATA.map(r => r.area || "Outros"))].sort((a, b) => areaOrder(a) - areaOrder(b));
  for (const a of areas) {
    const o = document.createElement("option");
    o.value = a; o.textContent = a;
    areaEl.appendChild(o);
  }

  const STOP = new Set(["de", "da", "do", "das", "dos", "e", "a", "o", "as", "os", "em", "no", "na", "nos", "nas",
    "com", "para", "por", "um", "uma", "ao", "aos", "que", "se", "sua", "seu"]);
  const words = s => B.norm(s).split(/[^a-z0-9]+/).filter(w => w.length >= 3 && !STOP.has(w));
  const hay = r => B.norm([r.titulo, r.descricao, r.disciplina, r.area, r.conteudo, (r.tags || []).join(" ")].join(" "));

  // filtro externo vindo das questões (?disciplina=...&topico=...)
  let extDisc = "", extTop = "";

  function discMatch(r, d) {
    const n = B.norm(d);
    return B.norm(r.disciplina) === n || B.norm(r.area) === n ||
      (r.tags || []).some(t => B.norm(t) === n);
  }

  function filtered() {
    const term = B.norm(searchEl.value.trim());
    let out = DATA.filter(r => {
      if (areaEl.value && r.area !== areaEl.value) return false;
      if (extDisc && !discMatch(r, extDisc)) return false;
      if (term && !hay(r).includes(term)) return false;
      return true;
    });
    // tópico vindo da questão: casa por palavras significativas, mais relevantes primeiro
    if (extTop) {
      const ws = words(extTop);
      const scored = out.map(r => {
        const h = hay(r), t = B.norm(r.titulo + " " + (r.tags || []).join(" "));
        let s = 0;
        for (const w of ws) { if (t.includes(w)) s += 3; else if (h.includes(w)) s += 1; }
        return { r, s };
      }).filter(x => x.s > 0);
      scored.sort((a, b) => b.s - a.s);
      out = scored.map(x => x.r);
    }
    return out;
  }

  function minutos(r) {
    const n = (r.conteudo || "").replace(/\\\(|\\\)|\\\[|\\\]/g, " ").split(/\s+/).length;
    return Math.max(2, Math.round(n / 180));
  }

  function capaHTML(r) {
    const a = areaInfo(r.area);
    const src = r.imagem || a.capa;
    const ph = `<div class="ph"><span class="material-icons">${a.icone}</span>${B.esc(a.nome)}</div>`;
    if (!src) return ph;
    // se a imagem externa falhar, troca pelo marcador da área
    return `<img src="${B.esc(src)}" alt="" loading="lazy" onerror="this.outerHTML=this.nextElementSibling.innerHTML"><template>${ph}</template>`;
  }

  function tileHTML(r) {
    const a = areaInfo(r.area);
    return `<article class="tile" data-id="${r.id}">
      <div class="thumb">${capaHTML(r)}<span class="tile-num" title="Tema ${r.num}"><span class="material-icons mi-sm">${a.icone}</span>${r.num}</span></div>
      <div class="tile-body">
        <span class="chip disc">${B.esc(r.disciplina)}</span>${r.tipo === "manual" ? `<span class="tile-tipo"><span class="material-icons mi-sm">assignment</span>Manual</span>` : ""}
        <h3 style="margin-top:10px">${B.esc(r.titulo)}</h3>
        <p>${B.esc(r.descricao)}</p>
        <div class="tile-foot">
          <button class="btn btn-soft btn-sm" data-open-resumo>Ler resumo</button>
          <span class="tile-meta"><span class="material-icons mi-sm">schedule</span>${minutos(r)} min</span>
        </div>
      </div>
    </article>`;
  }

  let current = [];
  function render() {
    current = filtered();
    countEl.textContent = `${current.length} ${current.length === 1 ? "resumo" : "resumos"}`;
    if (!current.length) {
      listEl.className = "";
      listEl.innerHTML = `<div class="empty"><p>Nenhum resumo encontrado.</p></div>`;
      return;
    }
    // agrupa por área (exceto quando o resultado é um ranking por tópico)
    if (extTop) {
      listEl.className = "gallery";
      listEl.innerHTML = current.map(tileHTML).join("");
      return;
    }
    const grupos = new Map();
    for (const r of current) {
      const k = r.area || "Outros";
      if (!grupos.has(k)) grupos.set(k, []);
      grupos.get(k).push(r);
    }
    listEl.className = "";
    // as seções seguem a ordem oficial das áreas (data/resumos.js), e não a ordem dos temas
    listEl.innerHTML = [...grupos.entries()].sort((a, b) => areaOrder(a[0]) - areaOrder(b[0])).map(([nome, itens]) => {
      const a = areaInfo(nome);
      return `<section class="r-area">
        <h2 class="r-area-head"><span class="r-area-ic"><span class="material-icons">${a.icone}</span></span>
          ${B.esc(nome)} <span class="r-area-n">${itens.length}</span></h2>
        <div class="gallery">${itens.map(tileHTML).join("")}</div>
      </section>`;
    }).join("");
  }

  function refsHTML(r) {
    if (!r.referencias || !r.referencias.length) return "";
    return `<section class="r-refs"><h2><span class="material-icons">library_books</span> Referências</h2><ol>` +
      r.referencias.map(x => `<li>${B.md(B.esc(x)).replace(/^<p>|<\/p>$/g, "")}</li>`).join("") + `</ol></section>`;
  }

  function openReader(r, push) {
    const a = areaInfo(r.area);
    const idx = current.findIndex(x => x.id === r.id);
    const lista = idx >= 0 ? current : DATA;
    const i = idx >= 0 ? idx : DATA.findIndex(x => x.id === r.id);
    const prev = lista[i - 1], next = lista[i + 1];
    const nav = (x, dir) => x
      ? `<button class="r-nav-btn ${dir}" data-goto="${x.id}"><span class="material-icons">${dir === "prev" ? "arrow_back" : "arrow_forward"}</span>
          <span><small>${dir === "prev" ? "Anterior" : "Próximo"}</small>${B.esc(x.titulo)}</span></button>`
      : `<span></span>`;
    readerEl.innerHTML = `
      <button class="lb-close" data-close aria-label="Fechar"><span class="material-icons">close</span></button>
      <div class="reader-panel">
        <div class="r-meta-top">
          <span class="chip disc">${B.esc(r.disciplina)}</span>
          ${r.tipo === "manual" ? `<span class="tile-tipo" style="margin:0"><span class="material-icons mi-sm">assignment</span>Manual de protocolo</span>` : ""}
          <span class="r-meta"><span class="material-icons mi-sm">${a.icone}</span>${r.num <= 50 ? "Tema " + r.num : "Complementar"} · ${B.esc(a.nome)}</span>
          <span class="r-meta"><span class="material-icons mi-sm">schedule</span>${minutos(r)} min de leitura</span>
        </div>
        <h1 style="margin:12px 0 4px">${B.esc(r.titulo)}</h1>
        <p class="muted">${B.esc(r.descricao)}</p>
        <hr style="border:0;border-top:1px solid var(--border);margin:18px 0">
        <div class="prose">${B.md(B.esc(r.conteudo))}</div>
        ${refsHTML(r)}
        <div class="r-actions">
          ${r.praticar ? `<a class="btn btn-primary btn-sm" href="${B.esc(r.praticar)}"><span class="material-icons mi-sm">quiz</span> Praticar questões</a>` : ""}
          <button class="btn btn-soft btn-sm" data-copy-link><span class="material-icons mi-sm">link</span> Copiar link</button>
        </div>
        <nav class="r-nav">${nav(prev, "prev")}${nav(next, "next")}</nav>
      </div>`;
    readerEl.classList.add("show");
    readerEl.scrollTop = 0;
    document.body.style.overflow = "hidden";
    if (push !== false && location.hash !== "#" + r.id) history.replaceState(null, "", "#" + r.id);
    B.typeset(readerEl);
  }
  function closeReader() {
    readerEl.classList.remove("show");
    document.body.style.overflow = "";
    if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  }

  listEl.addEventListener("click", e => {
    if (!e.target.closest("[data-open-resumo]") && !e.target.closest(".thumb")) return;
    const id = e.target.closest(".tile").dataset.id;
    const r = DATA.find(x => x.id === id);
    if (r) openReader(r);
  });
  readerEl.addEventListener("click", e => {
    const img = e.target.closest(".r-fig img");
    if (img) {                                         // amplia a figura
      const lb = document.createElement("div");
      lb.className = "fig-lightbox"; lb.style.zIndex = "200";
      lb.innerHTML = `<button class="lb-close" aria-label="Fechar"><span class="material-icons">close</span></button><img src="${img.src}" alt="" style="background:#fff;padding:12px;border-radius:12px">`;
      lb.addEventListener("click", ev => { ev.stopPropagation(); lb.remove(); });
      document.body.appendChild(lb);
      return;
    }
    const go = e.target.closest("[data-goto]");
    if (go) { const r = DATA.find(x => x.id === go.dataset.goto); if (r) openReader(r); return; }
    if (e.target.closest("[data-copy-link]")) {
      const btn = e.target.closest("[data-copy-link]");
      const url = location.href;
      const ok = () => { btn.innerHTML = '<span class="material-icons mi-sm">check</span> Link copiado'; };
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(ok, ok); else ok();
      return;
    }
    if (e.target === readerEl || e.target.closest("[data-close]")) closeReader();
  });
  document.addEventListener("keydown", e => {
    if (!readerEl.classList.contains("show")) return;
    if (e.key === "Escape") closeReader();
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      const b = readerEl.querySelector(e.key === "ArrowRight" ? ".r-nav-btn.next" : ".r-nav-btn.prev");
      if (b) b.click();
    }
  });

  let t;
  searchEl.addEventListener("input", () => { clearTimeout(t); t = setTimeout(render, 160); });
  areaEl.addEventListener("change", render);

  // pré-filtro vindo dos chips das questões (?disciplina / ?topico)
  (function initFromURL() {
    const p = new URLSearchParams(location.search);
    const d = p.get("disciplina"), top = p.get("topico");
    if (d) {
      if (areas.indexOf(d) !== -1) areaEl.value = d;
      else if (DATA.some(r => discMatch(r, d))) extDisc = d;
    }
    if (top) extTop = top;
    if (d || top) {
      const n = document.createElement("div");
      n.className = "sim-note"; n.style.marginBottom = "16px";
      n.innerHTML = `<span class="material-icons mi-sm">filter_alt</span> <span>Resumos relacionados a <b>${B.esc(top || d)}</b>. <a href="resumos.html">ver todos</a></span>`;
      listEl.parentNode.insertBefore(n, listEl);
    }
  })();

  render();
  // link direto: resumos.html#r12
  const h = location.hash.replace("#", "");
  if (h) { const r = DATA.find(x => x.id === h); if (r) openReader(r, false); }
})();
