/* ============================================================
   BIONEXO - Plotagem matemática (sem backend)
   - Interpreta um conjunto-solução (ex.: "S = (−∞, 3/2) ∪ (2, +∞)")
     e desenha a RETA REAL com os pontos críticos rotulados.
   - Compara dois conjuntos de forma robusta (para correção).
   - Desenha o GRÁFICO 2D de uma função marcando onde cruza os
     eixos (as "métricas" para o aluno replicar o desenho).
   Expõe window.Bionexo.plot.
   ============================================================ */
(function () {
  "use strict";
  const B = (window.Bionexo = window.Bionexo || {});
  const EPS = 1e-9;
  const INF = Infinity;

  /* ---------- parsing de conjunto-solução ---------- */
  function normStr(s) {
    return (s || "").toString()
      .replace(/[−–—]/g, "-")           // vários traços -> menos
      .replace(/ /g, " ")
      .replace(/\s+/g, " ").trim();
  }
  function parseEndpoint(s) {
    s = normStr(s).toLowerCase().replace(/\s+/g, "");
    if (/[-+]?(∞|inf|infinito|infty)/.test(s)) return s[0] === "-" ? -INF : INF;
    let m = s.match(/^([-+]?\d+)\/([-+]?\d+)$/);
    if (m) { const d = parseInt(m[2], 10); return d ? parseInt(m[1], 10) / d : NaN; }
    m = s.match(/^[-+]?\d+(\.\d+)?$/);
    if (m) return parseFloat(s);
    return NaN;
  }
  // Retorna {ok, all, empty, intervals:[{a,b,ia,ib}], points:[], excluded:[]}
  function parseSolution(text) {
    let t = normStr(text);
    // fica só com o lado direito do último "S ="
    const sm = [...t.matchAll(/S\s*=/gi)];
    if (sm.length) { const last = sm[sm.length - 1]; t = t.slice(last.index + last[0].length); }
    t = t.replace(/[.\s]+$/, "").trim();     // remove ponto/espaço final
    const low = t.toLowerCase();
    const out = { ok: true, all: false, empty: false, intervals: [], points: [], excluded: [] };

    // vazio
    if (/^(∅|\{\s*\}|vazio|conjunto vazio)$/.test(low)) { out.empty = true; return out; }
    // reais (com possível exclusão: "R \ {2}")
    const rMatch = low.match(/^(ℝ|r|reais|todos os reais)\s*(\\\s*\{(.+)\})?$/);
    if (rMatch) {
      out.all = true;
      if (rMatch[3]) rMatch[3].split(",").forEach(p => { const v = parseEndpoint(p); if (!isNaN(v)) out.excluded.push({ v, label: normStr(p) }); });
      return out;
    }

    const parts = t.split(/∪|\bu\b|\buni[aã]o\b|\bunion\b/i).map(s => s.trim()).filter(Boolean);
    let parsedAny = false;
    for (const part of parts) {
      let m = part.match(/^([\(\]\[])\s*(.+?)\s*,\s*(.+?)\s*([\)\]\[])$/);
      if (m) {
        const a = parseEndpoint(m[2]), b = parseEndpoint(m[3]);
        if (isNaN(a) || isNaN(b)) { out.ok = false; continue; }
        out.intervals.push({ a, b, ia: m[1] === "[", ib: m[4] === "]", aL: normStr(m[2]), bL: normStr(m[3]) });
        parsedAny = true; continue;
      }
      m = part.match(/^\{\s*(.+?)\s*\}$/);
      if (m) { m[1].split(",").forEach(p => { const v = parseEndpoint(p); if (!isNaN(v)) { out.points.push({ v, label: normStr(p) }); parsedAny = true; } }); continue; }
    }
    if (!parsedAny) out.ok = false;
    return out;
  }

  function inInterval(x, iv) {
    if (x < iv.a - EPS || x > iv.b + EPS) return false;
    if (Math.abs(x - iv.a) <= EPS) return iv.ia;
    if (Math.abs(x - iv.b) <= EPS) return iv.ib;
    return x > iv.a && x < iv.b;
  }
  function member(set, x) {
    if (set.empty) return false;
    if (set.points.some(p => Math.abs(p.v - x) <= EPS)) return true;
    if (set.all) return !set.excluded.some(p => Math.abs(p.v - x) <= EPS);
    return set.intervals.some(iv => inInterval(x, iv));
  }
  // Igualdade robusta de conjuntos (independe da notação usada)
  function equalSets(A, B) {
    if (!A.ok || !B.ok) return false;
    const crit = [];
    [A, B].forEach(S => {
      S.intervals.forEach(iv => { if (isFinite(iv.a)) crit.push(iv.a); if (isFinite(iv.b)) crit.push(iv.b); });
      S.points.forEach(p => crit.push(p.v));
      S.excluded.forEach(p => crit.push(p.v));
    });
    crit.sort((a, b) => a - b);
    const uniq = [];
    for (const c of crit) if (!uniq.length || Math.abs(uniq[uniq.length - 1] - c) > 1e-7) uniq.push(c);
    const tests = [];
    const lo = uniq.length ? uniq[0] - 1 : -1, hi = uniq.length ? uniq[uniq.length - 1] + 1 : 1;
    tests.push(lo, hi);
    uniq.forEach((c, i) => { tests.push(c); if (i < uniq.length - 1) tests.push((c + uniq[i + 1]) / 2); });
    return tests.every(x => member(A, x) === member(B, x));
  }

  /* ---------- SVG da reta real ---------- */
  function fmtInf(v, label) { return v === INF ? "+∞" : v === -INF ? "−∞" : (label || String(v)); }

  function numberLineSVG(set, opts) {
    opts = opts || {};
    const W = 580, H = 92, ax = H - 34, padL = 30, padR = 30;
    const finite = [];
    set.intervals.forEach(iv => { if (isFinite(iv.a)) finite.push(iv.a); if (isFinite(iv.b)) finite.push(iv.b); });
    set.points.forEach(p => finite.push(p.v));
    set.excluded.forEach(p => finite.push(p.v));
    (opts.criticos || []).forEach(c => finite.push(c.v));
    let min = finite.length ? Math.min(...finite) : -5;
    let max = finite.length ? Math.max(...finite) : 5;
    if (min === max) { min -= 2; max += 2; }
    const span = max - min, pad = span * 0.28 || 2;
    const lo = min - pad, hi = max + pad;
    const X = v => padL + ((v - lo) / (hi - lo)) * (W - padL - padR);
    const clampX = v => v === -INF ? padL : v === INF ? W - padR : X(v);

    let svg = `<svg class="numline" viewBox="0 0 ${W} ${H}" role="img" aria-label="Reta real da solução">`;
    // intervalos (traço grosso)
    const col = "var(--c1)";
    set.intervals.forEach(iv => {
      const x1 = clampX(iv.a), x2 = clampX(iv.b);
      svg += `<line x1="${x1}" y1="${ax}" x2="${x2}" y2="${ax}" stroke="${col}" stroke-width="5" stroke-linecap="round"/>`;
    });
    if (set.all) svg += `<line x1="${padL}" y1="${ax}" x2="${W - padR}" y2="${ax}" stroke="${col}" stroke-width="5"/>`;
    // eixo
    svg += `<line x1="12" y1="${ax}" x2="${W - 12}" y2="${ax}" stroke="var(--ink-soft)" stroke-width="1.5"/>`;
    svg += `<path d="M12 ${ax} l7 -4 M12 ${ax} l7 4" stroke="var(--ink-soft)" stroke-width="1.5" fill="none"/>`;
    svg += `<path d="M${W - 12} ${ax} l-7 -4 M${W - 12} ${ax} l-7 4" stroke="var(--ink-soft)" stroke-width="1.5" fill="none"/>`;
    // extremos dos intervalos (○ aberto / ● fechado)
    function dot(v, filled) {
      if (v === INF || v === -INF) return;
      const x = X(v);
      svg += `<circle cx="${x}" cy="${ax}" r="5.5" fill="${filled ? col : "var(--surface)"}" stroke="${col}" stroke-width="2.5"/>`;
    }
    set.intervals.forEach(iv => { dot(iv.a, iv.ia); dot(iv.b, iv.ib); });
    set.points.forEach(p => dot(p.v, true));
    set.excluded.forEach(p => { const x = X(p.v); svg += `<circle cx="${x}" cy="${ax}" r="5.5" fill="var(--surface)" stroke="var(--err)" stroke-width="2.5"/>`; });
    (opts.criticos || []).forEach(c => { if (!set.intervals.some(iv => Math.abs(iv.a - c.v) < EPS || Math.abs(iv.b - c.v) < EPS)) svg += `<circle cx="${X(c.v)}" cy="${ax}" r="3.5" fill="var(--muted)"/>`; });
    // rótulos dos pontos críticos (as métricas)
    const labels = [];
    set.intervals.forEach(iv => { if (isFinite(iv.a)) labels.push({ v: iv.a, t: iv.aL }); if (isFinite(iv.b)) labels.push({ v: iv.b, t: iv.bL }); });
    set.points.forEach(p => labels.push({ v: p.v, t: p.label }));
    set.excluded.forEach(p => labels.push({ v: p.v, t: p.label }));
    (opts.criticos || []).forEach(c => labels.push({ v: c.v, t: c.label }));
    const seen = {};
    labels.forEach(l => { const k = l.v.toFixed(4); if (seen[k]) return; seen[k] = 1; svg += `<text x="${X(l.v)}" y="${ax + 20}" text-anchor="middle" font-size="13" fill="var(--ink)" font-weight="600">${l.t}</text>`; });
    if (set.empty) svg += `<text x="${W / 2}" y="${ax - 12}" text-anchor="middle" font-size="15" fill="var(--muted)">∅ (vazio)</text>`;
    svg += `</svg>`;
    return svg;
  }

  // Desenha a partir do texto da resposta; se não parsear como conjunto,
  // tenta ao menos marcar os pontos críticos encontrados no texto.
  function numberLineFromText(text) {
    const set = parseSolution(text);
    if (set.ok && (set.intervals.length || set.points.length || set.all || set.empty)) {
      return `<figure class="plot-fig"><figcaption>Solução na reta real</figcaption>${numberLineSVG(set)}</figure>`;
    }
    const criticos = extrairCriticos(text);
    if (criticos.length) {
      return `<figure class="plot-fig"><figcaption>Pontos críticos na reta</figcaption>${numberLineSVG({ ok: true, all: false, empty: false, intervals: [], points: [], excluded: [] }, { criticos })}</figure>`;
    }
    return "";
  }
  function extrairCriticos(text) {
    const t = normStr(text);
    const crit = [], seen = {};
    const re = /x\s*=\s*(-?\d+(?:\/\d+)?)/gi; let m;
    while ((m = re.exec(t))) { const v = parseEndpoint(m[1]); if (!isNaN(v) && !seen[v.toFixed(4)]) { seen[v.toFixed(4)] = 1; crit.push({ v, label: m[1].replace("-", "−") }); } }
    return crit;
  }

  /* ---------- gráfico 2D de função ---------- */
  function compileFn(expr) {
    let js = normStr(expr).replace(/\s+/g, "")
      .replace(/\^/g, "**")
      .replace(/(\d)([a-zπ(])/gi, "$1*$2")   // 2x -> 2*x
      .replace(/\bπ\b|\bpi\b/gi, "PI")
      .replace(/\bln\(/gi, "log(").replace(/\bsen\(/gi, "sin(");
    if (/[^0-9x+\-*/().,a-z]/i.test(js.replace(/\*\*/g, ""))) { /* deixa passar nomes de função */ }
    const allowed = /^(?:[0-9x+\-*/.,()]|\*\*|sin|cos|tan|exp|log|log10|sqrt|abs|PI|E|max|min|pow)+$/;
    if (!allowed.test(js)) return null;
    try {
      const f = new Function("x", "with(Math){return (" + js + ");}");
      if (typeof f(1) !== "number") return null;
      return f;
    } catch (_) { return null; }
  }
  function functionPlotSVG(spec) {
    const f = compileFn(spec.expr);
    if (!f) return "";
    const dom = spec.dominio || [-5, 5];
    const W = 560, H = 360, m = 30;
    const N = 400;
    let xmin = dom[0], xmax = dom[1], ymin = Infinity, ymax = -Infinity;
    const pts = [];
    for (let i = 0; i <= N; i++) {
      const x = xmin + (xmax - xmin) * i / N; let y = f(x);
      if (!isFinite(y)) { pts.push(null); continue; }
      pts.push({ x, y }); if (y < ymin) ymin = y; if (y > ymax) ymax = y;
    }
    if (!isFinite(ymin) || !isFinite(ymax)) return "";
    if (spec.yMax != null) ymax = Math.min(ymax, spec.yMax);
    if (spec.yMin != null) ymin = Math.max(ymin, spec.yMin);
    if (ymin === ymax) { ymin -= 1; ymax += 1; }
    const yPad = (ymax - ymin) * 0.12; ymin -= yPad; ymax += yPad;
    const X = x => m + (x - xmin) / (xmax - xmin) * (W - 2 * m);
    const Y = y => H - m - (y - ymin) / (ymax - ymin) * (H - 2 * m);
    let svg = `<svg class="fnplot" viewBox="0 0 ${W} ${H}" role="img" aria-label="Gráfico de ${B.esc ? B.esc(spec.expr) : spec.expr}">`;
    // grade simples
    svg += `<rect x="0" y="0" width="${W}" height="${H}" fill="var(--surface)"/>`;
    // eixos
    if (ymin < 0 && ymax > 0) { const y0 = Y(0); svg += `<line x1="${m}" y1="${y0}" x2="${W - m}" y2="${y0}" stroke="var(--border-strong)" stroke-width="1.2"/>`; }
    if (xmin < 0 && xmax > 0) { const x0 = X(0); svg += `<line x1="${x0}" y1="${m}" x2="${x0}" y2="${H - m}" stroke="var(--border-strong)" stroke-width="1.2"/>`; }
    // curva (quebrando em descontinuidades)
    let d = "", pen = false, prev = null;
    for (const p of pts) {
      if (!p || p.y < ymin - 1 || p.y > ymax + 1 || (prev && Math.abs(p.y - prev.y) > (ymax - ymin))) { pen = false; prev = p; continue; }
      d += (pen ? " L" : " M") + X(p.x).toFixed(1) + " " + Y(p.y).toFixed(1); pen = true; prev = p;
    }
    svg += `<path d="${d}" fill="none" stroke="var(--c1)" stroke-width="2.4"/>`;
    // métricas: interceptos
    function mark(x, y, label) {
      svg += `<circle cx="${X(x)}" cy="${Y(y)}" r="4.5" fill="var(--c3)"/>`;
      svg += `<text x="${X(x) + 7}" y="${Y(y) - 7}" font-size="12" fill="var(--ink)" font-weight="600">${label}</text>`;
    }
    const metr = [];
    // raízes (onde cruza x) por mudança de sinal, ou fornecidas
    let roots = (spec.metricas && spec.metricas.cruzaX) || [];
    if (!roots.length) {
      for (let i = 1; i < pts.length; i++) {
        if (!pts[i] || !pts[i - 1]) continue;
        if (pts[i - 1].y === 0) roots.push(pts[i - 1].x);
        else if (pts[i - 1].y * pts[i].y < 0) {
          let a = pts[i - 1].x, b = pts[i].x;
          for (let k = 0; k < 40; k++) { const mid = (a + b) / 2; (f(a) * f(mid) <= 0 ? b = mid : a = mid); }
          roots.push((a + b) / 2);
        }
      }
    }
    roots.forEach(r => { const rv = typeof r === "object" ? r.x : r; if (xmin <= rv && rv <= xmax) { mark(rv, 0, `(${fmtNum(rv)}, 0)`); metr.push(`cruza x em (${fmtNum(rv)}, 0)`); } });
    // intercepto y
    if (xmin <= 0 && xmax >= 0) { const y0 = f(0); if (isFinite(y0)) { mark(0, y0, `(0, ${fmtNum(y0)})`); metr.push(`cruza y em (0, ${fmtNum(y0)})`); } }
    svg += `</svg>`;
    const caption = (spec.metricas && spec.metricas.nota) || metr.join(" · ");
    return `<figure class="plot-fig"><figcaption>Gráfico de ${spec.exprLabel || spec.expr}${caption ? " — " + caption : ""}</figcaption>${svg}</figure>`;
  }
  function fmtNum(x) { const r = Math.round(x * 1000) / 1000; return (Number.isInteger(r) ? r : r).toString().replace(".", ","); }

  B.plot = {
    parseSolution, equalSets, numberLineSVG, numberLineFromText,
    compileFn, functionPlotSVG, extrairCriticos,
  };
})();
