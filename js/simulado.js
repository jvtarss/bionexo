/* ============================================================
   BIONEXO - Simulado cronometrado
   Monta um simulado por disciplina e dificuldade, cronometra,
   esconde as resoluções durante a prova e, ao final, mostra a
   nota e o gabarito. As tentativas ficam salvas no navegador
   (localStorage), sem nada ser enviado a servidores.
   ============================================================ */
(function () {
  "use strict";
  const B = window.Bionexo;
  let DATA = [];
  const KEY = "bionexo:simulados";

  const el = id => document.getElementById(id);
  const setup = el("simSetup"), running = el("simRunning"), result = el("simResult");
  if (!setup) return;

  const discSel = el("simDisc"), diffSel = el("simDiff"), qtdSel = el("simQtd"), timeSel = el("simTime");

  const diffLabel = { "": "Qualquer", "diff-facil": "Fácil", "diff-media": "Média", "diff-dificil": "Difícil" };
  function figs(q) {
    const arr = (q.imagens && q.imagens.length) ? q.imagens : (q.imagem ? [q.imagem] : []);
    if (!arr.length) return "";
    return `<div class="q-figs">` + arr.map(s => `<figure class="q-fig" data-arquivo="${B.esc(s.replace(/^.*\//, ""))}"><img src="${B.esc(s)}" alt="Figura" loading="lazy" onerror="this.closest('.q-fig').classList.add('q-fig-erro')"></figure>`).join("") + `</div>`;
  }
  // exercício com várias partes: contexto + só o item desta questão
  function enunHTML(q) {
    const p = q.parte;
    let h = q.enunciado ? B.md(q.enunciado) : "";
    if (p) {
      h += `<div class="q-parte"><span class="q-parte-letra">${p.letra}</span><div class="q-parte-texto">${
        p.pergunta ? B.md(p.pergunta) : `Responda apenas ao <b>item (${p.letra})</b> do enunciado acima.`}</div></div>`;
      h += `<p class="q-parte-mini"><span class="material-icons mi-sm">call_split</span> Item (${p.letra}) de um exercício com ${(p.irmas || []).length} partes (${B.esc(p.exercicio)}).</p>`;
    }
    return h;
  }

  // só tipos que dá para corrigir automaticamente entram no simulado
  const GRAD = { multipla: 1, vouf: 1, aberta: 1, intervalo: 1, texto: 1 };
  function filtrar() {
    return DATA.filter(q => {
      if (!GRAD[q.tipo]) return false;
      if (discSel.value && q.disciplina !== discSel.value) return false;
      if (diffSel.value && B.diffClass(q.dificuldade) !== diffSel.value) return false;
      return true;
    });
  }

  function updateAvail() {
    const n = filtrar().length;
    el("simAvail").innerHTML = n
      ? `<span class="material-icons mi-sm">info</span> <span><b>${n}</b> ${n === 1 ? "questão disponível" : "questões disponíveis"} com esses filtros. O simulado usa até o número escolhido.</span>`
      : `<span class="material-icons mi-sm">warning</span> <span>Nenhuma questão com esses filtros. Troque a disciplina ou a dificuldade.</span>`;
    el("simStart").disabled = n === 0;
    el("simStart").style.opacity = n === 0 ? ".5" : "";
  }
  [discSel, diffSel].forEach(s => s.addEventListener("change", updateAvail));

  // ---- estado do simulado ----
  let atual = [];       // questões sorteadas
  let perguntas = {};   // id -> questão
  let timerId = null, restante = 0, inicio = 0, limite = 0;

  function embaralhar(a) {
    const r = a.slice();
    for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
    return r;
  }

  function answerArea(q) {
    if (q.tipo === "multipla" || q.tipo === "vouf") {
      const alts = q.tipo === "vouf" ? [{ id: "v", texto: "Verdadeiro" }, { id: "f", texto: "Falso" }] : (q.alternativas || []);
      return `<ul class="alts">${alts.map(a =>
        `<li class="alt" data-alt="${a.id}" role="button" tabindex="0"><span class="alt-key">${a.id.toUpperCase()}</span><span>${a.texto}</span></li>`
      ).join("")}</ul>`;
    }
    if (q.tipo === "intervalo") {
      return `<div class="open-answer"><label>Conjunto-solução:</label>
        <div class="input-row"><input type="text" placeholder="ex.: (-inf, 3/2) U (2, +inf)" data-open></div></div>`;
    }
    return `<div class="open-answer"><label>Sua resposta${q.unidade ? ` <span class="muted">(${B.esc(q.unidade)})</span>` : ""}:</label>
      <div class="input-row"><input type="text" inputmode="decimal" placeholder="Digite o valor numérico" data-open></div></div>`;
  }
  function qHTML(q, i) {
    const eff = q.tipo === "vouf" ? "multipla" : q.tipo;
    return `<article class="q-card sim-q" data-qid="${q.key || q.id}" data-tipo="${eff}">
      <div class="q-top">
        <span class="q-num">${i + 1}.</span>
        <span class="chip disc">${B.esc(q.disciplina)}</span>
        ${q.topico ? `<span class="chip">${B.esc(q.topico)}</span>` : ""}
        <span class="chip ${B.diffClass(q.dificuldade)}">${B.esc(q.dificuldade)}</span>
      </div>
      <div class="q-body">
        <div class="q-enun">${enunHTML(q)}</div>${figs(q)}
        ${answerArea(q)}
      </div>
    </article>`;
  }

  // ---- motor: começa um simulado com uma lista de questões ----
  function comecar(questoes) {
    if (!questoes.length) return;
    atual = questoes;
    perguntas = {}; atual.forEach(q => perguntas[q.key || q.id] = q);
    el("simList").innerHTML = atual.map(qHTML).join("");
    B.typeset(el("simList"));
    atualizarProgresso();
    setup.classList.add("hidden");
    result.classList.add("hidden");
    running.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    const porQ = parseInt(timeSel.value, 10);
    inicio = Date.now();
    if (porQ > 0) { limite = porQ * atual.length; restante = limite; iniciarTimer(); }
    else { limite = 0; el("simClock").textContent = "sem limite"; el("simTimer").classList.remove("low"); }
  }

  // ---- iniciar a partir dos filtros ----
  el("simStart").addEventListener("click", () => {
    const disponiveis = filtrar();
    if (!disponiveis.length) return;
    const qtd = Math.min(parseInt(qtdSel.value, 10), disponiveis.length);
    comecar(embaralhar(disponiveis).slice(0, qtd));
  });

  function iniciarTimer() {
    tick();
    timerId = setInterval(tick, 1000);
  }
  function tick() {
    const mm = String(Math.floor(restante / 60)).padStart(2, "0");
    const ss = String(restante % 60).padStart(2, "0");
    el("simClock").textContent = `${mm}:${ss}`;
    el("simTimer").classList.toggle("low", restante <= 30);
    if (restante <= 0) { finalizar(true); return; }
    restante--;
  }

  function atualizarProgresso() {
    const total = atual.length;
    let resp = 0;
    el("simList").querySelectorAll(".sim-q").forEach(card => {
      if (card.dataset.tipo === "multipla") { if (card.querySelector(".alt.selected")) resp++; }
      else { const inp = card.querySelector("[data-open]"); if (inp && inp.value.trim()) resp++; }
    });
    el("simProg").textContent = `${resp}/${total} respondidas`;
  }

  // seleção de alternativas / progresso
  el("simList").addEventListener("click", e => {
    const alt = e.target.closest(".alt");
    if (alt) {
      const card = alt.closest(".sim-q");
      card.querySelectorAll(".alt").forEach(a => a.classList.remove("selected"));
      alt.classList.add("selected");
      atualizarProgresso();
    }
  });
  el("simList").addEventListener("keydown", e => {
    const alt = e.target.closest(".alt");
    if (alt && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); alt.click(); }
  });
  el("simList").addEventListener("input", e => { if (e.target.matches("[data-open]")) atualizarProgresso(); });

  el("simFinish").addEventListener("click", () => finalizar(false));
  el("simFinish2").addEventListener("click", () => finalizar(false));

  // ---- correção ----
  function acertou(q, card) {
    if (q.tipo === "multipla" || q.tipo === "vouf") {
      const sel = card.querySelector(".alt.selected");
      const correta = q.tipo === "vouf" ? (q.vfCorreto ? "v" : "f") : q.correta;
      return { resp: sel ? sel.dataset.alt : null, ok: !!sel && sel.dataset.alt === correta };
    }
    const inp = card.querySelector("[data-open]");
    const raw = (inp.value || "").trim();
    if (q.tipo === "intervalo") {
      if (!raw) return { resp: null, ok: false };
      const a = B.plot.parseSolution(raw), g = B.plot.parseSolution(q.respostaRaw || q.resposta);
      return { resp: raw, ok: a.ok && B.plot.equalSets(a, g) };
    }
    if (q.tipo === "texto") {
      const n = s => B.norm(s).replace(/\s+/g, "").replace(/[.;]+$/, "");
      return { resp: raw || null, ok: !!raw && n(raw) === n(q.respostaRaw || q.resposta) };
    }
    const v = parseFloat(raw.replace(",", ".").replace(/[^0-9.eE+\-]/g, ""));
    const tol = q.tolerancia != null ? q.tolerancia : 0.02;
    const ok = !isNaN(v) && Math.abs(v - q.resposta) <= Math.max(Math.abs(q.resposta) * tol, 1e-9);
    return { resp: raw || null, ok };
  }

  function finalizar(porTempo) {
    if (timerId) { clearInterval(timerId); timerId = null; }
    const cards = {};
    el("simList").querySelectorAll(".sim-q").forEach(c => cards[c.dataset.qid] = c);

    let acertos = 0;
    const revisao = atual.map((q, i) => {
      const r = acertou(q, cards[q.key || q.id]);
      if (r.ok) acertos++;
      return { q, i, resp: r.resp, ok: r.ok };
    });
    const total = atual.length;
    const nota = total ? (acertos / total) * 10 : 0;
    const tempo = Math.round((Date.now() - inicio) / 1000);

    salvar({
      id: Date.now(),
      data: new Date().toISOString(),
      disciplina: discSel.value || "Todas as disciplinas",
      dificuldade: diffLabel[diffSel.value],
      total, acertos, nota, tempo,
    });

    mostrarResultado(revisao, { total, acertos, nota, tempo, porTempo });
  }

  function fmtTempo(s) {
    const m = Math.floor(s / 60), ss = s % 60;
    return m > 0 ? `${m} min ${ss}s` : `${ss}s`;
  }

  function mostrarResultado(revisao, info) {
    const altKey = (q, id) => {
      if (q.tipo === "vouf") return id === "v" ? "Verdadeiro" : id === "f" ? "Falso" : "(sem resposta)";
      const a = (q.alternativas || []).find(x => x.id === id);
      return a ? `${id.toUpperCase()}) ${a.texto}` : "(sem resposta)";
    };
    const respostaTexto = (r) => {
      if (r.resp == null) return "<i>não respondida</i>";
      return (r.q.tipo === "multipla" || r.q.tipo === "vouf") ? altKey(r.q, r.resp) : B.esc(r.resp) + (r.q.unidade ? " " + B.esc(r.q.unidade) : "");
    };
    const gabarito = (q) => {
      if (q.tipo === "vouf") return q.vfCorreto ? "Verdadeiro" : "Falso";
      if (q.tipo === "multipla") return altKey(q, q.correta);
      return B.md(q.resposta || String(q.resposta));
    };
    const plotOf = (q) => !q.plot || !B.plot ? ""
      : q.plot.tipo === "reta" ? B.plot.numberLineFromText(q.respostaRaw || q.resposta)
      : q.plot.tipo === "funcao" ? B.plot.functionPlotSVG(q.plot) : "";

    const review = revisao.map(r => `
      <article class="q-card review-q ${r.ok ? "ok" : "err"}">
        <div class="q-top">
          <span class="q-num">${r.i + 1}.</span>
          <span class="chip disc">${B.esc(r.q.disciplina)}</span>
          <span class="review-tag ${r.ok ? "ok" : "err"}" style="margin-left:auto">
            <span class="material-icons mi-sm">${r.ok ? "check_circle" : "cancel"}</span>${r.ok ? "Acertou" : "Errou"}
          </span>
        </div>
        <div class="q-body">
          <div class="q-enun">${enunHTML(r.q)}</div>${figs(r.q)}
          <p style="margin-top:12px"><b>Sua resposta:</b> ${respostaTexto(r)}</p>
          <p><b>Gabarito:</b> ${gabarito(r.q)}</p>
          ${plotOf(r.q)}
          <div class="resolucao show" style="margin-top:12px">
            <h4>Resolução</h4>${B.md(r.q.resolucao)}
          </div>
        </div>
      </article>`).join("");

    const aprov = info.nota >= 6;
    result.innerHTML = `
      <div class="result-head">
        ${info.porTempo ? `<p class="chip diff-dificil" style="margin-bottom:12px">⏱ Tempo esgotado</p>` : ""}
        <div class="nota grad-text">${info.nota.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</div>
        <p class="result-sub">${aprov ? "Muito bem!" : "Continue praticando!"} Você acertou <b>${info.acertos}</b> de <b>${info.total}</b>.</p>
        <div class="result-stats">
          <div class="rs"><b>${info.acertos}/${info.total}</b><span>acertos</span></div>
          <div class="rs"><b>${Math.round(info.acertos / info.total * 100)}%</b><span>aproveitamento</span></div>
          <div class="rs"><b>${fmtTempo(info.tempo)}</b><span>tempo</span></div>
        </div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:22px">
          <button class="btn btn-grad" id="simNovo"><span class="material-icons mi-sm">replay</span> Novo simulado</button>
          <a class="btn btn-ghost" href="questoes.html"><span class="material-icons mi-sm">menu_book</span> Estudar questões</a>
        </div>
      </div>
      <h2 style="margin:34px 0 16px;font-size:1.4rem">Gabarito comentado</h2>
      <div class="q-list">${review}</div>`;

    running.classList.add("hidden");
    result.classList.remove("hidden");
    B.typeset(result);
    window.scrollTo({ top: 0, behavior: "smooth" });
    renderHist();
    el("simNovo").addEventListener("click", voltar);
  }

  function voltar() {
    result.classList.add("hidden");
    running.classList.add("hidden");
    setup.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- histórico (localStorage) ----
  function loadHist() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (_) { return []; } }
  function salvar(reg) { const h = loadHist(); h.unshift(reg); localStorage.setItem(KEY, JSON.stringify(h.slice(0, 50))); }

  function renderHist() {
    const h = loadHist();
    const list = el("histList");
    if (!h.length) { list.innerHTML = `<div class="hist-empty">Nenhuma tentativa ainda. Faça seu primeiro simulado!</div>`; el("histClear").style.display = "none"; return; }
    el("histClear").style.display = "";
    list.innerHTML = h.map(r => {
      const d = new Date(r.data);
      const data = d.toLocaleDateString("pt-BR") + " " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
      const nota = r.nota.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
      return `<div class="hist-item">
        <div class="hist-nota grad-text">${nota}</div>
        <div class="hist-meta">
          <div class="t">${B.esc(r.disciplina)} &middot; ${B.esc(r.dificuldade)}</div>
          <div class="s">${r.acertos}/${r.total} acertos &middot; ${fmtTempo(r.tempo)} &middot; ${data}</div>
        </div>
      </div>`;
    }).join("");
  }
  el("histClear").addEventListener("click", () => {
    if (confirm("Apagar todo o histórico de simulados deste navegador?")) {
      localStorage.removeItem(KEY); renderHist();
    }
  });

  renderHist();

  // ---- carrega o banco (legado + .tsv) e habilita o setup ----
  el("simAvail").innerHTML = `<span class="material-icons mi-sm">hourglass_top</span> <span>Carregando questões...</span>`;
  (B.loadQuestoes ? B.loadQuestoes() : Promise.resolve((window.BIONEXO && window.BIONEXO.questoes) || [])).then(data => {
    DATA = data;
    [...new Set(DATA.map(q => q.disciplina).filter(Boolean))].sort((a, b) => a.localeCompare(b, "pt")).forEach(d => {
      const o = document.createElement("option"); o.value = d; o.textContent = d; discSel.appendChild(o);
    });
    updateAvail();
    DATA.forEach(q => { byKey[q.key || q.id] = q; });
    renderCustom(); renderSaved();
  });

  // ---- seleção (carrinho) -> simulado + simulados salvos ----
  const byKey = {};
  function cartQuestoes() { return B.cart.all().map(k => byKey[k]).filter(q => q && GRAD[q.tipo]); }
  function renderCustom() {
    const box = el("simCustom"); if (!box) return;
    const total = B.cart.count(), uteis = cartQuestoes().length;
    if (!total) { box.classList.add("hidden"); return; }
    box.classList.remove("hidden");
    const fora = total - uteis;
    el("simCustomInfo").innerHTML = `${total} ${total === 1 ? "questão selecionada" : "questões selecionadas"} na página de estudo.`
      + (fora ? ` <span class="muted">(${fora} de demonstração/sinal ficam de fora: não têm correção automática.)</span>` : "");
    el("simCustomStart").disabled = uteis === 0;
  }
  function renderSaved() {
    const box = el("simSaved"), list = el("savedList"); if (!box || !list) return;
    const saved = B.savedSims.all();
    if (!saved.length) { box.classList.add("hidden"); return; }
    box.classList.remove("hidden");
    list.innerHTML = saved.map(s => `<div class="hist-item" data-sid="${s.id}">
      <div class="hist-meta"><div class="t">${B.esc(s.nome)}</div><div class="s">${s.keys.length} ${s.keys.length === 1 ? "questão" : "questões"}</div></div>
      <button class="btn btn-grad btn-sm" data-run-saved><span class="material-icons mi-sm">play_arrow</span> Fazer</button>
      <button class="icon-btn" data-del-saved title="Excluir"><span class="material-icons mi-sm">delete</span></button>
    </div>`).join("");
  }
  if (el("simCustomStart")) el("simCustomStart").addEventListener("click", () => {
    const qs = cartQuestoes(); if (qs.length) comecar(embaralhar(qs));
  });
  if (el("simCustomSave")) el("simCustomSave").addEventListener("click", () => {
    const keys = cartQuestoes().map(q => q.key || q.id); if (!keys.length) return;
    const nome = prompt("Nome para este simulado salvo:", "Minha seleção");
    if (nome !== null) B.savedSims.save(nome.trim() || "Minha seleção", keys);
  });
  if (el("savedList")) el("savedList").addEventListener("click", e => {
    const item = e.target.closest("[data-sid]"); if (!item) return;
    const id = item.dataset.sid;
    if (e.target.closest("[data-del-saved]")) { B.savedSims.remove(id); return; }
    if (e.target.closest("[data-run-saved]")) {
      const s = B.savedSims.all().find(x => x.id === id); if (!s) return;
      const qs = s.keys.map(k => byKey[k]).filter(q => q && GRAD[q.tipo]);
      comecar(embaralhar(qs));
    }
  });
  if (B.cart) B.cart.on(renderCustom);
  if (B.savedSims) B.savedSims.on(renderSaved);
  window.addEventListener("hashchange", () => { if (location.hash === "#simulado") { renderCustom(); renderSaved(); } });
})();
