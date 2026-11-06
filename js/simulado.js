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
  const DATA = (window.BIONEXO && window.BIONEXO.questoes) || [];
  const KEY = "bionexo:simulados";

  const el = id => document.getElementById(id);
  const setup = el("simSetup"), running = el("simRunning"), result = el("simResult");
  if (!setup) return;

  const discSel = el("simDisc"), diffSel = el("simDiff"), qtdSel = el("simQtd"), timeSel = el("simTime");

  // ---- disciplinas ----
  [...new Set(DATA.map(q => q.disciplina))].sort((a, b) => a.localeCompare(b, "pt")).forEach(d => {
    const o = document.createElement("option"); o.value = d; o.textContent = d; discSel.appendChild(o);
  });

  const diffLabel = { "": "Qualquer", "diff-facil": "Fácil", "diff-media": "Média", "diff-dificil": "Difícil" };

  function filtrar() {
    return DATA.filter(q => {
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
  updateAvail();

  // ---- estado do simulado ----
  let atual = [];       // questões sorteadas
  let perguntas = {};   // id -> questão
  let timerId = null, restante = 0, inicio = 0, limite = 0;

  function embaralhar(a) {
    const r = a.slice();
    for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
    return r;
  }

  function altHTML(q) {
    return `<ul class="alts">${q.alternativas.map(a =>
      `<li class="alt" data-alt="${a.id}" role="button" tabindex="0"><span class="alt-key">${a.id.toUpperCase()}</span><span>${a.texto}</span></li>`
    ).join("")}</ul>`;
  }
  function openHTML(q) {
    return `<div class="open-answer"><label>Sua resposta${q.unidade ? ` <span class="muted">(${B.esc(q.unidade)})</span>` : ""}:</label>
      <div class="input-row"><input type="text" inputmode="decimal" placeholder="Digite o valor numérico" data-open></div></div>`;
  }
  function qHTML(q, i) {
    return `<article class="q-card sim-q" data-qid="${q.id}" data-tipo="${q.tipo}">
      <div class="q-top">
        <span class="q-num">${i + 1}.</span>
        <span class="chip disc">${B.esc(q.disciplina)}</span>
        <span class="chip">${B.esc(q.topico)}</span>
        <span class="chip ${B.diffClass(q.dificuldade)}">${B.esc(q.dificuldade)}</span>
      </div>
      <div class="q-body">
        <div class="q-enun">${B.md(q.enunciado)}${q.imagem ? `<img src="${B.esc(q.imagem)}" alt="Figura" loading="lazy">` : ""}</div>
        ${q.tipo === "multipla" ? altHTML(q) : openHTML(q)}
      </div>
    </article>`;
  }

  // ---- iniciar ----
  el("simStart").addEventListener("click", () => {
    const disponiveis = filtrar();
    if (!disponiveis.length) return;
    const qtd = Math.min(parseInt(qtdSel.value, 10), disponiveis.length);
    atual = embaralhar(disponiveis).slice(0, qtd);
    perguntas = {}; atual.forEach(q => perguntas[q.id] = q);

    el("simList").innerHTML = atual.map(qHTML).join("");
    B.typeset(el("simList"));
    atualizarProgresso();

    setup.classList.add("hidden");
    result.classList.add("hidden");
    running.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });

    const porQ = parseInt(timeSel.value, 10);
    inicio = Date.now();
    if (porQ > 0) { limite = porQ * qtd; restante = limite; iniciarTimer(); }
    else { limite = 0; el("simClock").textContent = "sem limite"; el("simTimer").classList.remove("low"); }
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
    if (q.tipo === "multipla") {
      const sel = card.querySelector(".alt.selected");
      return { resp: sel ? sel.dataset.alt : null, ok: sel ? sel.dataset.alt === q.correta : false };
    }
    const inp = card.querySelector("[data-open]");
    const raw = (inp.value || "").trim();
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
      const r = acertou(q, cards[q.id]);
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
      const a = (q.alternativas || []).find(x => x.id === id);
      return a ? `${id.toUpperCase()}) ${a.texto}` : "(sem resposta)";
    };
    const respostaTexto = (r) => {
      if (r.resp == null) return "<i>não respondida</i>";
      return r.q.tipo === "multipla" ? altKey(r.q, r.resp) : B.esc(r.resp) + (r.q.unidade ? " " + B.esc(r.q.unidade) : "");
    };
    const gabarito = (q) => q.tipo === "multipla"
      ? altKey(q, q.correta)
      : B.esc(String(q.resposta)) + (q.unidade ? " " + B.esc(q.unidade) : "");

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
          <div class="q-enun">${B.md(r.q.enunciado)}${r.q.imagem ? `<img src="${B.esc(r.q.imagem)}" alt="Figura" loading="lazy">` : ""}</div>
          <p style="margin-top:12px"><b>Sua resposta:</b> ${respostaTexto(r)}</p>
          <p><b>Gabarito:</b> ${gabarito(r.q)}</p>
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
})();
