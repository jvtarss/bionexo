/* ============================================================
   BIONEXO - LabHacks (logica das ferramentas)
   Cada pagina carrega este arquivo; cada bloco so roda se os
   elementos daquela ferramenta existirem na pagina.
   ============================================================ */
(function () {
  "use strict";

  function num(id) {
    const el = document.getElementById(id);
    if (!el) return NaN;
    const raw = (el.value || "").trim().replace(",", ".");
    return raw === "" ? NaN : parseFloat(raw);
  }
  function val(id) { const el = document.getElementById(id); return el ? (el.value || "").trim() : ""; }
  function out(id, html) { const el = document.getElementById(id); if (el) el.innerHTML = html; }
  function fmt(x, casas = 4) {
    if (!isFinite(x)) return "-";
    if (x !== 0 && (Math.abs(x) >= 1e5 || Math.abs(x) < 1e-3)) return x.toExponential(3).replace(".", ",");
    return (+x.toFixed(casas)).toLocaleString("pt-BR", { maximumFractionDigits: casas });
  }
  function pretty(f) {
    return (f || "").replace(/[·.*]/g, "&middot;").replace(/([A-Za-z\)\]\}])(\d+)/g, "$1<sub>$2</sub>");
  }

  /* ===== CONTADOR DE PLACAS ===== */
  (function counter() {
    const disp = document.getElementById("cntNum");
    if (!disp) return;
    let n = 0;
    const recalc = () => {
      const fd = num("cntFd"), vol = num("cntVol");
      if (!isNaN(fd) && !isNaN(vol) && fd > 0 && vol > 0) {
        out("cntUfc", `<div>Concentração estimada</div><div class="big">${fmt(n / (vol * fd))}</div><div>UFC por mL</div>`);
      } else {
        out("cntUfc", `<span class="muted">Preencha o fator de diluição e o volume plaqueado para estimar as UFC por mL.</span>`);
      }
    };
    const show = () => { disp.textContent = n; recalc(); };
    document.getElementById("cntPlus").addEventListener("click", () => { n++; show(); });
    document.getElementById("cntMinus").addEventListener("click", () => { if (n > 0) n--; show(); });
    document.getElementById("cntReset").addEventListener("click", () => { n = 0; show(); });
    document.getElementById("cntFd").addEventListener("input", recalc);
    document.getElementById("cntVol").addEventListener("input", recalc);
    disp.setAttribute("tabindex", "0");
    disp.addEventListener("keydown", e => {
      if (e.key === " " || e.key === "ArrowUp") { e.preventDefault(); n++; show(); }
      if (e.key === "ArrowDown") { e.preventDefault(); if (n > 0) n--; show(); }
    });
    show();
  })();

  /* ===== PREPARO DE SOLUCAO + MASSA MOLAR (quanto pesar) ===== */
  (function prepare() {
    const input = document.getElementById("prepInput");
    if (!input || !window.MolarMass) return;
    const run = async () => {
      const comp = input.value.trim();
      const c = num("prepC");
      let v = num("prepV");
      const unidade = val("prepVUnit");
      if (!comp) { out("prepOut", `<span class="muted">Informe o composto (fórmula ou nome).</span>`); return; }
      if (isNaN(c) || isNaN(v) || c <= 0 || v <= 0) { out("prepOut", `<span class="muted">Informe a concentração e o volume desejados.</span>`); return; }
      if (unidade === "mL") v = v / 1000;
      out("prepOut", `<span class="muted">Calculando...</span>`);
      const r = await window.MolarMass.compute(comp);
      if (!r.ok) { out("prepOut", `<span style="color:var(--err);font-weight:600">${r.msg}</span>`); return; }
      const massa = c * v * r.mass;
      const linhas = r.elements.map(e =>
        `<tr><td>${e.sym}</td><td>${e.n}</td><td>${fmt(e.aw, 3)}</td><td>${fmt(e.sub, 3)}</td><td>${fmt(e.pct, 1)}%</td></tr>`
      ).join("");
      const fonteMM = r.source === "pubchem" ? " (base PubChem)" : r.source === "dicionario" ? " (nome reconhecido)" : "";
      out("prepOut", `
        <div>Massa a pesar</div>
        <div class="big">${fmt(massa, 4)} g</div>
        <p class="muted" style="font-size:.9rem;margin-top:8px">
          Para preparar <b>${fmt(c)} mol/L</b> de ${pretty(r.formula)} em <b>${fmt(v)} L</b>.
          Pese a massa, dissolva em um pouco de solvente e complete o volume até a marca.
        </p>
        <p style="font-size:.9rem;margin-top:12px"><b>Massa molar</b> de ${pretty(r.formula)} = <b>${fmt(r.mass, 3)} g/mol</b><span class="muted">${fonteMM}</span></p>
        ${r.elements.length ? `<table style="margin-top:8px">
          <thead><tr><th>Elemento</th><th>Qtd.</th><th>Massa at.</th><th>Subtotal</th><th>%</th></tr></thead>
          <tbody>${linhas}</tbody></table>` : ""}`);
    };
    document.getElementById("prepCalc").addEventListener("click", run);
    [input, document.getElementById("prepC"), document.getElementById("prepV")].forEach(el =>
      el && el.addEventListener("keydown", e => { if (e.key === "Enter") run(); }));
    document.querySelectorAll("[data-prep]").forEach(chip => {
      chip.addEventListener("click", () => { input.value = chip.getAttribute("data-prep"); run(); });
    });
  })();

  /* ===== DILUIR UMA SOLUCAO (guiado) ===== */
  (function diluteGuided() {
    const btn = document.getElementById("dgCalc");
    if (!btn) return;
    const run = () => {
      const c1 = num("dgC1"), c2 = num("dgC2"), v2 = num("dgV2");
      const uC = val("dgUnitC"), uV = val("dgUnitV");
      if (isNaN(c1) || isNaN(c2) || isNaN(v2) || c1 <= 0 || c2 <= 0 || v2 <= 0) {
        out("dgOut", `<span class="muted">Preencha as três concentrações e o volume final.</span>`); return;
      }
      if (c2 > c1) { out("dgOut", `<span style="color:var(--err);font-weight:600">A concentração final deve ser menor que a da solução-mãe.</span>`); return; }
      const v1 = c2 * v2 / c1;
      const dil = v2 - v1;
      out("dgOut", `
        <div>Pipete da solução-mãe</div>
        <div class="big">${fmt(v1)} ${uV}</div>
        <p style="margin-top:8px">E complete com <b>${fmt(dil)} ${uV}</b> de diluente até <b>${fmt(v2)} ${uV}</b> no total.</p>
        <p class="muted" style="font-size:.84rem;margin-top:6px">Resultado: solução de ${fmt(c2)} ${uC} (fator de diluição ${fmt(c1 / c2, 2)}x).</p>`);
    };
    btn.addEventListener("click", run);
    ["dgC1","dgC2","dgV2"].forEach(id => { const el = document.getElementById(id); el && el.addEventListener("keydown", e => { if (e.key === "Enter") run(); }); });
  })();

  /* ===== DILUICAO SERIADA ===== */
  (function serial() {
    const btn = document.getElementById("sdCalc");
    if (!btn) return;
    const run = () => {
      const c0 = num("sdC0"), f = num("sdFactor"), steps = Math.round(num("sdSteps")), vf = num("sdVf");
      const unit = val("sdUnit");
      if (isNaN(c0) || isNaN(f) || isNaN(steps) || f <= 1 || steps < 1) {
        out("sdOut", `<span class="muted">Preencha a concentração inicial, o fator (maior que 1) e o número de tubos.</span>`); return;
      }
      const temVf = !isNaN(vf) && vf > 0;
      let rows = "", c = c0, dil = 1;
      for (let i = 1; i <= steps; i++) {
        dil *= f; c = c0 / dil;
        const transf = temVf ? vf / f : null;
        rows += `<tr><td>${i}</td><td>1:${fmt(dil, 0)}</td><td>${fmt(c)} ${unit}</td>${temVf ? `<td>${fmt(transf)} + ${fmt(vf - transf)}</td>` : ""}</tr>`;
      }
      out("sdOut", `<table>
        <thead><tr><th>Tubo</th><th>Diluição</th><th>Concentração</th>${temVf ? "<th>Transferir + diluente</th>" : ""}</tr></thead>
        <tbody>${rows}</tbody></table>
        ${temVf ? `<p class="muted" style="margin-top:10px;font-size:.84rem">Volumes na mesma unidade do volume final por tubo.</p>` : ""}`);
    };
    btn.addEventListener("click", run);
    ["sdC0","sdFactor","sdSteps","sdVf","sdUnit"].forEach(id => { const el = document.getElementById(id); el && el.addEventListener("keydown", e => { if (e.key === "Enter") run(); }); });
  })();
})();
