/* ============================================================
   BIONEXO - Página de questões
   Carrega o banco (legado + .tsv), filtra por disciplina, tópico
   e dificuldade, trata a interatividade por tipo (com plot da
   resposta), e oferece: carrinho de questões -> simulado,
   dicas (glossário) e chips que levam aos resumos do tema.
   ============================================================ */
(function () {
  "use strict";
  const B = window.Bionexo;
  const listEl = document.getElementById("qList");
  if (!listEl) return;
  const searchEl = document.getElementById("qSearch");
  const discEl = document.getElementById("qDisc");
  const topEl = document.getElementById("qTopico");
  const diffEl = document.getElementById("qDiff");
  const countEl = document.getElementById("qCount");

  let DATA = [];
  const byId = {};

  function matches(q) {
    const term = B.norm(searchEl.value.trim());
    if (discEl.value && q.disciplina !== discEl.value) return false;
    if (topEl && topEl.value && q.topico !== topEl.value) return false;
    if (diffEl.value && B.diffClass(q.dificuldade) !== diffEl.value) return false;
    if (term) {
      const hay = B.norm([q.enunciado, q.topico, q.disciplina, q.fonte, q.local, (q.tags || []).join(" ")].join(" "));
      if (!hay.includes(term)) return false;
    }
    return true;
  }

  // tópicos dependem da disciplina escolhida
  function populateTopicos() {
    if (!topEl) return;
    const atual = topEl.value;
    const pool = DATA.filter(q => !discEl.value || q.disciplina === discEl.value);
    const tops = [...new Set(pool.map(q => q.topico).filter(Boolean))].sort((a, b) => a.localeCompare(b, "pt"));
    topEl.innerHTML = `<option value="">Todos os tópicos</option>` + tops.map(t => `<option value="${B.esc(t)}">${B.esc(t)}</option>`).join("");
    if (tops.indexOf(atual) !== -1) topEl.value = atual;
  }

  function answerUI(q) {
    if (q.tipo === "multipla" || q.tipo === "vouf") {
      const alts = q.tipo === "vouf"
        ? [{ id: "v", texto: "Verdadeiro" }, { id: "f", texto: "Falso" }]
        : (q.alternativas || []);
      if (!alts.length) return "";
      return `<ul class="alts">${alts.map(a =>
        `<li class="alt" data-alt="${a.id}" role="button" tabindex="0"><span class="alt-key">${a.id.toUpperCase()}</span><span>${a.texto}</span></li>`
      ).join("")}</ul>`;
    }
    if (q.tipo === "aberta") {
      return `<div class="open-answer"><label>Sua resposta${q.unidade ? ` <span class="muted">(${B.esc(q.unidade)})</span>` : ""}:</label>
        <div class="input-row"><input type="text" inputmode="decimal" placeholder="Digite o valor numérico" data-open></div></div>`;
    }
    if (q.tipo === "intervalo") {
      return `<div class="open-answer"><label>Sua resposta (conjunto-solução):</label>
        <div class="input-row"><input type="text" placeholder="ex.: (-inf, 3/2)  ou  (-2, 1/2) U (3, +inf)" data-open></div>
        <p class="muted" style="font-size:.82rem;margin-top:6px">Use ( ) para aberto, [ ] para fechado, U para união, inf para ∞, R para ℝ, vazio para ∅.</p></div>`;
    }
    if (q.tipo === "texto") {
      return `<div class="open-answer"><label>Sua resposta:</label>
        <div class="input-row"><input type="text" placeholder="digite sua resposta" data-open></div></div>`;
    }
    const rotulo = q.tipo === "demonstracao" ? "demonstração" : "estudo de sinal";
    return `<p class="q-nota"><span class="material-icons mi-sm">draw</span> Questão de ${rotulo}: resolva no papel e confira a resposta comentada.</p>`;
  }

  function gabarito(q) {
    if (q.tipo === "vouf") return `<p class="q-gabarito"><b>Resposta:</b> ${q.vfCorreto ? "Verdadeiro" : "Falso"}</p>`;
    if (q.tipo === "demonstracao" || q.tipo === "multipla") return "";
    if (q.resposta) return `<p class="q-gabarito"><b>Resposta:</b> ${B.md(q.resposta)}</p>`;
    return "";
  }

  function hasVerify(q) { return q.tipo === "multipla" || q.tipo === "vouf" || q.tipo === "aberta" || q.tipo === "intervalo" || q.tipo === "texto"; }

  function chips(q) {
    const diff = B.diffClass(q.dificuldade);
    const disc = `<a class="chip disc" href="resumos.html?disciplina=${encodeURIComponent(q.disciplina || "")}" title="Ver resumos de ${B.esc(q.disciplina)}">${B.esc(q.disciplina)}</a>`;
    const top = q.topico ? `<a class="chip chip-link" href="resumos.html?topico=${encodeURIComponent(q.topico)}" title="Ver resumos de ${B.esc(q.topico)}">${B.esc(q.topico)}</a>` : "";
    const df = `<span class="chip ${diff}">${B.esc(q.dificuldade)}</span>`;
    return disc + top + df;
  }

  function imagensHTML(q) {
    const arr = (q.imagens && q.imagens.length) ? q.imagens : (q.imagem ? [q.imagem] : []);
    if (!arr.length) return "";
    return `<div class="q-figs">` + arr.map(src =>
      `<figure class="q-fig"><img src="${B.esc(src)}" alt="Figura da questão" loading="lazy" onerror="this.closest('.q-fig').classList.add('q-fig-erro')"></figure>`
    ).join("") + `</div>`;
  }

  function cardHTML(q) {
    const effTipo = q.tipo === "vouf" ? "multipla" : q.tipo;
    const correta = q.tipo === "vouf" ? (q.vfCorreto ? "v" : "f") : (q.correta || "");
    const key = q.key || q.id;
    const picked = B.cart && B.cart.has(key);
    const numero = "Q" + String(q.num || 0).padStart(4, "0");
    return `
    <article class="q-card${picked ? " picked" : ""}" data-id="${key}" data-tipo="${effTipo}" data-real="${q.tipo}" data-correta="${correta}">
      <div class="q-top">
        <label class="q-pick" title="Selecionar para o simulado"><input type="checkbox" data-pick ${picked ? "checked" : ""}></label>
        ${chips(q)}
        <span class="q-id">#${numero}</span>
      </div>
      <div class="q-body">
        ${q.local ? `<div class="q-local">${B.esc(q.local)}</div>` : ""}
        <div class="q-enun">${B.md(q.enunciado)}</div>
        ${imagensHTML(q)}
        ${q.fonte ? `<div class="q-fonte"><span class="material-icons mi-sm">menu_book</span> ${B.esc(q.fonte)}</div>` : ""}
        ${answerUI(q)}
        <div class="q-actions">
          ${hasVerify(q) ? `<button class="btn btn-primary btn-sm" data-check>Verificar</button>` : ""}
          <button class="btn btn-ghost btn-sm" data-solve>Ver resolução</button>
          <button class="btn btn-ghost btn-sm" data-dicas><span class="material-icons mi-sm">lightbulb</span> Dicas</button>
          <span class="feedback" data-feedback></span>
          <button class="btn-report" data-report title="Reportar um problema nesta questão"><span class="material-icons mi-sm">flag</span></button>
        </div>
        <div class="resolucao" data-resolucao>
          <div class="qplot" data-qplot></div>
          ${gabarito(q)}
          ${q.resolucao ? `<h4>Resolução</h4>${B.md(q.resolucao)}` : ""}
        </div>
      </div>
    </article>`;
  }

  const PAGE = 24;
  let shown = 0, foundCache = [];
  function filtradas() { return DATA.filter(matches); }
  function render() {
    foundCache = filtradas();
    countEl.textContent = `${foundCache.length} ${foundCache.length === 1 ? "questão" : "questões"}`;
    listEl.innerHTML = ""; shown = 0;
    if (!foundCache.length) {
      listEl.innerHTML = `<div class="empty"><span class="material-icons">search_off</span><p>Nenhuma questão encontrada com esses filtros.</p></div>`;
      return;
    }
    appendMore();
  }
  function appendMore() {
    const wrap = document.getElementById("qMoreWrap"); if (wrap) wrap.remove();
    const next = foundCache.slice(shown, shown + PAGE);
    listEl.insertAdjacentHTML("beforeend", next.map(cardHTML).join(""));
    const novos = [...listEl.querySelectorAll(".q-card")].slice(shown);
    shown += next.length;
    B.typeset(novos.length ? novos : listEl);
    if (foundCache.length > shown) {
      listEl.insertAdjacentHTML("beforeend",
        `<div id="qMoreWrap" class="q-more"><button class="btn btn-ghost" id="qMore"><span class="material-icons mi-sm">expand_more</span> Carregar mais (${foundCache.length - shown} restantes)</button></div>`);
    }
  }

  /* ---------- interatividade ---------- */
  function flash(el, kind, msg) { el.className = "feedback show " + kind; el.innerHTML = msg; }
  const OK = '<span class="material-icons mi-sm">check_circle</span> ';
  const ERR = '<span class="material-icons mi-sm">cancel</span> ';

  function selectAlt(card, altEl) {
    if (card.dataset.answered === "1") return;
    card.querySelectorAll(".alt").forEach(a => a.classList.remove("selected"));
    altEl.classList.add("selected");
  }

  function check(card) {
    const q = byId[card.dataset.id];
    const tipo = card.dataset.tipo;
    const fb = card.querySelector("[data-feedback]");
    let correct = false, soft = false;
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
    } else if (tipo === "aberta") {
      const input = card.querySelector("[data-open]");
      const val = parseFloat((input.value || "").trim().replace(",", ".").replace(/[^0-9.eE+\-]/g, ""));
      if (isNaN(val)) { flash(fb, "err", "Digite um valor numérico."); return; }
      const esperado = parseFloat(q.resposta);
      const tol = q.tolerancia != null ? q.tolerancia : 0.02;
      correct = Math.abs(val - esperado) <= Math.max(Math.abs(esperado) * tol, 1e-9);
      input.disabled = true; input.style.borderColor = correct ? "var(--ok)" : "var(--err)";
    } else if (tipo === "intervalo") {
      const input = card.querySelector("[data-open]");
      if (!input.value.trim()) { flash(fb, "err", "Escreva o conjunto-solução."); return; }
      const aluno = B.plot.parseSolution(input.value);
      const gab = B.plot.parseSolution(q.respostaRaw || q.resposta);
      if (!aluno.ok) { flash(fb, "err", "Não entendi a notação. Ex.: (-inf, 3/2) U (2, +inf)"); return; }
      correct = B.plot.equalSets(aluno, gab);
      input.disabled = true; input.style.borderColor = correct ? "var(--ok)" : "var(--err)";
    } else if (tipo === "texto") {
      const input = card.querySelector("[data-open]");
      const n = s => B.norm(s).replace(/\s+/g, "").replace(/[.;]+$/, "");
      correct = n(input.value) === n(q.respostaRaw || q.resposta);
      soft = !correct;
      input.disabled = true; input.style.borderColor = correct ? "var(--ok)" : "var(--border-strong)";
    }
    card.dataset.answered = "1";
    if (correct) flash(fb, "ok", OK + "Resposta correta!");
    else if (soft) flash(fb, "err", ERR + "Não bateu exatamente — confira na resolução.");
    else flash(fb, "err", ERR + "Resposta incorreta. Veja a resolução.");
  }

  function reveal(card) {
    const q = byId[card.dataset.id];
    const res = card.querySelector("[data-resolucao]");
    const slot = card.querySelector("[data-qplot]");
    if (slot && !slot.dataset.built && q.plot && B.plot) {
      let html = "";
      if (q.plot.tipo === "reta") html = B.plot.numberLineFromText(q.respostaRaw || q.resposta);
      else if (q.plot.tipo === "funcao") html = B.plot.functionPlotSVG(q.plot);
      slot.innerHTML = html;
      slot.dataset.built = "1";
    }
    const btn = card.querySelector("[data-solve]");
    const show = res.classList.toggle("show");
    btn.textContent = show ? "Ocultar resolução" : "Ver resolução";
    if (show) B.typeset(res);
  }

  function toggleDicas(card) {
    const enun = card.querySelector(".q-enun");
    const btn = card.querySelector("[data-dicas]");
    const res = card.querySelector("[data-resolucao]");
    if (!enun || !B.gloss) return;
    if (enun.dataset.glossOn === "1") {
      B.gloss.unhighlight(enun);
      if (res) B.gloss.unhighlight(res);
      card.classList.remove("dicas-on"); btn.classList.remove("active");
      btn.lastChild && (btn.innerHTML = `<span class="material-icons mi-sm">lightbulb</span> Dicas`);
    } else {
      B.gloss.highlight(enun);
      if (res && res.classList.contains("show")) B.gloss.highlight(res);
      if (enun.querySelectorAll(".glossterm").length) {
        card.classList.add("dicas-on"); btn.classList.add("active");
        btn.innerHTML = `<span class="material-icons mi-sm">lightbulb</span> Ocultar dicas`;
        flashDica(card, "Termos técnicos destacados — clique em um para ver o significado.");
      } else {
        B.gloss.unhighlight(enun);
        flashDica(card, "Nenhum termo do glossário nesta questão (ainda).");
      }
    }
  }
  function flashDica(card, msg) {
    const fb = card.querySelector("[data-feedback]");
    if (!fb) return;
    fb.className = "feedback show"; fb.style.color = "var(--muted)"; fb.textContent = msg;
    setTimeout(() => { if (fb.textContent === msg) { fb.className = "feedback"; fb.textContent = ""; fb.style.color = ""; } }, 4500);
  }

  function reportar(card) {
    const q = byId[card.dataset.id];
    const ref = "#Q" + String(q.num || 0).padStart(4, "0");
    const assunto = "[Bionexo] Problema na questão " + ref;
    const corpo = "Encontrei um problema na questão " + ref + ".\n\nO que está errado:\n\n\n"
      + "— dados da questão —\n"
      + "Disciplina: " + (q.disciplina || "") + "\nTópico: " + (q.topico || "")
      + "\nFonte: " + (q.fonte || "") + (q.local ? "\nLocal: " + q.local : "")
      + (q.id ? "\nID interno: " + (q.id || "").toUpperCase() : "");
    location.href = "mailto:mayara.vieira@uft.edu.br?subject=" + encodeURIComponent(assunto) + "&body=" + encodeURIComponent(corpo);
  }

  listEl.addEventListener("click", e => {
    if (e.target.closest("#qMore")) { appendMore(); return; }
    const card = e.target.closest(".q-card");
    if (!card) return;
    if (e.target.closest(".q-pick") || e.target.closest("a.chip")) return;
    const alt = e.target.closest(".alt");
    if (alt) { selectAlt(card, alt); return; }
    const fig = e.target.closest(".q-fig img");
    if (fig) { openFig(fig.src); return; }
    if (e.target.closest("[data-check]")) check(card);
    else if (e.target.closest("[data-solve]")) reveal(card);
    else if (e.target.closest("[data-dicas]")) toggleDicas(card);
    else if (e.target.closest("[data-report]")) reportar(card);
  });
  function openFig(src) {
    const lb = document.createElement("div");
    lb.className = "fig-lightbox";
    lb.innerHTML = `<button class="lb-close" aria-label="Fechar"><span class="material-icons">close</span></button><img src="${src}" alt="">`;
    lb.addEventListener("click", () => { lb.remove(); document.body.style.overflow = ""; });
    document.body.appendChild(lb);
    document.body.style.overflow = "hidden";
  }
  listEl.addEventListener("keydown", e => {
    const alt = e.target.closest(".alt");
    if (alt && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); selectAlt(e.target.closest(".q-card"), alt); }
  });
  listEl.addEventListener("change", e => {
    if (!e.target.matches("[data-pick]")) return;
    const card = e.target.closest(".q-card");
    const key = card.dataset.id;
    B.cart.toggle(key);
    card.classList.toggle("picked", B.cart.has(key));
  });

  /* ---------- carrinho ---------- */
  const cartBar = document.getElementById("cartBar");
  const cartCount = document.getElementById("cartCount");
  function updateCartBar() {
    if (!cartBar) return;
    const n = B.cart.count();
    cartBar.classList.toggle("hidden", n === 0);
    if (cartCount) cartCount.innerHTML = `<b>${n}</b> ${n === 1 ? "selecionada" : "selecionadas"}`;
  }
  function syncPicks() {
    listEl.querySelectorAll(".q-card").forEach(card => {
      const on = B.cart.has(card.dataset.id);
      card.classList.toggle("picked", on);
      const cb = card.querySelector("[data-pick]"); if (cb) cb.checked = on;
    });
  }
  B.cart.on(() => { updateCartBar(); syncPicks(); });
  const selAllBtn = document.getElementById("qSelectAll");
  if (selAllBtn) selAllBtn.addEventListener("click", () => {
    B.cart.addMany(filtradas().map(q => q.key || q.id));
  });
  const cartClear = document.getElementById("cartClear");
  if (cartClear) cartClear.addEventListener("click", () => B.cart.clear());
  const cartSim = document.getElementById("cartSim");
  if (cartSim) cartSim.addEventListener("click", () => { location.hash = "simulado"; window.scrollTo({ top: 0, behavior: "smooth" }); });

  // "Dicas em todas"
  const dicasAll = document.getElementById("qDicasAll");
  if (dicasAll) dicasAll.addEventListener("click", () => {
    const on = dicasAll.classList.toggle("active");
    listEl.querySelectorAll(".q-card .q-enun").forEach(enun => {
      if (!B.gloss) return;
      if (on && enun.dataset.glossOn !== "1") B.gloss.highlight(enun);
      if (!on && enun.dataset.glossOn === "1") B.gloss.unhighlight(enun);
    });
  });

  let t;
  const debounce = fn => { clearTimeout(t); t = setTimeout(fn, 160); };
  searchEl.addEventListener("input", () => debounce(render));
  discEl.addEventListener("change", () => { populateTopicos(); render(); });
  if (topEl) topEl.addEventListener("change", render);
  diffEl.addEventListener("change", render);

  /* ---------- inicialização ---------- */
  listEl.innerHTML = `<div class="empty"><span class="material-icons">hourglass_top</span><p>Carregando questões...</p></div>`;
  (B.loadQuestoes ? B.loadQuestoes() : Promise.resolve((window.BIONEXO && window.BIONEXO.questoes) || [])).then(data => {
    DATA = data;
    DATA.forEach(q => { byId[q.key || q.id] = q; });
    const discs = [...new Set(DATA.map(q => q.disciplina).filter(Boolean))].sort((a, b) => a.localeCompare(b, "pt"));
    discEl.innerHTML = `<option value="">Todas as disciplinas</option>` + discs.map(d => `<option value="${B.esc(d)}">${B.esc(d)}</option>`).join("");
    // pré-filtro por URL (?disciplina= / ?topico=)
    const p = new URLSearchParams(location.search);
    if (p.get("disciplina") && discs.indexOf(p.get("disciplina")) !== -1) discEl.value = p.get("disciplina");
    populateTopicos();
    if (p.get("topico") && topEl) { const o = [...topEl.options].find(o => o.value === p.get("topico")); if (o) topEl.value = p.get("topico"); }
    if (B._tsvError) {
      const n = document.createElement("div");
      n.className = "sim-note";
      n.innerHTML = `<span class="material-icons mi-sm">info</span> <span>Algumas questões externas (.tsv) não carregaram. Use o site publicado ou rode um servidor local (ex.: <code>python -m http.server</code>).</span>`;
      listEl.parentNode.insertBefore(n, listEl);
    }
    updateCartBar();
    render();
  });
})();
