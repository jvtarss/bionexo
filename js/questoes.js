/* ============================================================
   BIONEXO — Página de Questões
   Renderiza o banco, aplica filtros/busca e trata a
   interatividade (responder, verificar, revelar resolução).
   ============================================================ */
(function () {
  "use strict";
  const B = window.Bionexo;
  const DATA = (window.BIONEXO && window.BIONEXO.questoes) || [];

  const listEl = document.getElementById("qList");
  const searchEl = document.getElementById("qSearch");
  const discEl = document.getElementById("qDisc");
  const diffEl = document.getElementById("qDiff");
  const countEl = document.getElementById("qCount");
  if (!listEl) return;

  // Popular filtro de disciplinas
  const discs = [...new Set(DATA.map(q => q.disciplina))].sort((a, b) => a.localeCompare(b, "pt"));
  for (const d of discs) {
    const o = document.createElement("option");
    o.value = d; o.textContent = d;
    discEl.appendChild(o);
  }

  function matches(q) {
    const term = B.norm(searchEl.value.trim());
    const disc = discEl.value;
    const diff = diffEl.value;
    if (disc && q.disciplina !== disc) return false;
    if (diff && B.diffClass(q.dificuldade) !== diff) return false;
    if (term) {
      const hay = B.norm([q.enunciado, q.topico, q.disciplina, q.fonte, (q.tags || []).join(" ")].join(" "));
      if (!hay.includes(term)) return false;
    }
    return true;
  }

  function altHTML(q) {
    if (q.tipo !== "multipla") return "";
    const items = q.alternativas.map(a =>
      `<li class="alt" data-alt="${a.id}" role="button" tabindex="0">
         <span class="alt-key">${a.id.toUpperCase()}</span>
         <span class="alt-txt">${a.texto}</span>
       </li>`).join("");
    return `<ul class="alts">${items}</ul>`;
  }

  function openHTML(q) {
    if (q.tipo !== "aberta") return "";
    return `<div class="open-answer">
      <label>Sua resposta${q.unidade ? ` <span class="muted">(${B.esc(q.unidade)})</span>` : ""}:</label>
      <div class="input-row">
        <input type="text" inputmode="decimal" placeholder="Digite o valor numérico" data-open>
      </div>
    </div>`;
  }

  function cardHTML(q) {
    const diff = B.diffClass(q.dificuldade);
    return `
    <article class="q-card" data-id="${q.id}" data-tipo="${q.tipo}" data-correta="${q.correta || ""}"
             data-resposta="${q.resposta != null ? q.resposta : ""}" data-tol="${q.tolerancia != null ? q.tolerancia : 0.02}">
      <div class="q-top">
        <span class="chip disc">${B.esc(q.disciplina)}</span>
        <span class="chip">${B.esc(q.topico)}</span>
        <span class="chip ${diff}">${B.esc(q.dificuldade)}</span>
        <span class="q-id">#${q.id.toUpperCase()}</span>
      </div>
      <div class="q-body">
        <div class="q-enun">${B.md(q.enunciado)}${q.imagem ? `<img src="${B.esc(q.imagem)}" alt="Figura da questão ${q.id}" loading="lazy">` : ""}</div>
        ${q.fonte ? `<div class="q-fonte"><span class="material-icons mi-sm">menu_book</span> ${B.esc(q.fonte)}</div>` : ""}
        ${altHTML(q)}
        ${openHTML(q)}
        <div class="q-actions">
          <button class="btn btn-primary btn-sm" data-check>Verificar</button>
          <button class="btn btn-ghost btn-sm" data-solve>Ver resolução</button>
          <span class="feedback" data-feedback></span>
        </div>
        <div class="resolucao" data-resolucao>
          <h4>Resolução passo a passo</h4>
          ${B.md(q.resolucao)}
        </div>
      </div>
    </article>`;
  }

  function render() {
    const found = DATA.filter(matches);
    countEl.textContent = `${found.length} ${found.length === 1 ? "questão" : "questões"}`;
    if (!found.length) {
      listEl.innerHTML = `<div class="empty">
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <p>Nenhuma questão encontrada com esses filtros.</p>
      </div>`;
      return;
    }
    listEl.innerHTML = found.map(cardHTML).join("");
    B.typeset(listEl);
  }

  // ---- Interatividade (event delegation) ----
  function selectAlt(card, altEl) {
    if (card.dataset.answered === "1") return;
    card.querySelectorAll(".alt").forEach(a => a.classList.remove("selected"));
    altEl.classList.add("selected");
  }

  function check(card) {
    const tipo = card.dataset.tipo;
    const fb = card.querySelector("[data-feedback]");
    let correct = false;

    if (tipo === "multipla") {
      const sel = card.querySelector(".alt.selected");
      if (!sel) { flash(fb, "err", "Selecione uma alternativa."); return; }
      const correta = card.dataset.correta;
      correct = sel.dataset.alt === correta;
      card.querySelectorAll(".alt").forEach(a => {
        a.classList.add("disabled");
        if (a.dataset.alt === correta) a.classList.add("correct");
        else if (a.classList.contains("selected")) a.classList.add("wrong");
      });
    } else {
      const input = card.querySelector("[data-open]");
      const raw = (input.value || "").trim().replace(",", ".").replace(/[^0-9.eE+\-]/g, "");
      const val = parseFloat(raw);
      if (isNaN(val)) { flash(fb, "err", "Digite um valor numérico."); return; }
      const esperado = parseFloat(card.dataset.resposta);
      const tol = parseFloat(card.dataset.tol);
      const margem = Math.max(Math.abs(esperado) * tol, 1e-9);
      correct = Math.abs(val - esperado) <= margem;
      input.disabled = true;
      input.style.borderColor = correct ? "var(--ok)" : "var(--err)";
    }

    card.dataset.answered = "1";
    if (correct) flash(fb, "ok", '<span class="material-icons mi-sm">check_circle</span> Resposta correta!');
    else flash(fb, "err", '<span class="material-icons mi-sm">cancel</span> Resposta incorreta. Veja a resolução.');
  }

  function flash(el, kind, msg) {
    el.className = "feedback show " + kind;
    el.innerHTML = msg;
  }

  function reveal(card) {
    const res = card.querySelector("[data-resolucao]");
    const btn = card.querySelector("[data-solve]");
    const show = res.classList.toggle("show");
    btn.textContent = show ? "Ocultar resolução" : "Ver resolução";
    if (show) B.typeset(res);
  }

  listEl.addEventListener("click", e => {
    const card = e.target.closest(".q-card");
    if (!card) return;
    const alt = e.target.closest(".alt");
    if (alt) { selectAlt(card, alt); return; }
    if (e.target.closest("[data-check]")) check(card);
    if (e.target.closest("[data-solve]")) reveal(card);
  });
  listEl.addEventListener("keydown", e => {
    const alt = e.target.closest(".alt");
    if (alt && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      selectAlt(e.target.closest(".q-card"), alt);
    }
  });

  let t;
  const debounce = fn => { clearTimeout(t); t = setTimeout(fn, 160); };
  searchEl.addEventListener("input", () => debounce(render));
  discEl.addEventListener("change", render);
  diffEl.addEventListener("change", render);

  render();
})();
