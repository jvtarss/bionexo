/* ============================================================
   BIONEXO - Formatação matemática (texto -> LaTeX)
   Converte a notação em texto puro dos bancos (.tsv) para
   LaTeX, para o MathJax renderizar em fonte matemática.
   Ex.: "Calcule: arc sen 1"  ->  "Calcule: \(\arcsin 1\)"
   Expõe window.Bionexo.mathify.
   ============================================================ */
(function () {
  "use strict";
  const B = (window.Bionexo = window.Bionexo || {});

  const CMD = {
    arcsen: "\\arcsin", arcsin: "\\arcsin", arccos: "\\arccos", arctg: "\\arctan", arctan: "\\arctan",
    arcsec: "\\operatorname{arcsec}", arccossec: "\\operatorname{arccsc}", arccotg: "\\operatorname{arccot}",
    senh: "\\sinh", cosh: "\\cosh", tgh: "\\tanh", tanh: "\\tanh",
    cossec: "\\csc", cosec: "\\csc", csc: "\\csc",
    sen: "\\sin", sin: "\\sin", cos: "\\cos", tg: "\\tan", tan: "\\tan",
    cotg: "\\cot", cot: "\\cot", sec: "\\sec",
    ln: "\\ln", log: "\\log", lim: "\\lim", exp: "\\exp",
  };
  // regex de nomes de função (mais longos primeiro)
  const FRE = /\b(arcsen|arcsin|arccos|arctan|arctg|arcsec|arccossec|arccotg|cossec|cosec|senh|cosh|tanh|tgh|sen|sin|cos|tan|tg|cotg|cot|sec|csc|ln|log|lim|exp)\b/gi;
  const FUNCSET = new Set(Object.keys(CMD));

  function sym(s) {
    return s
      .replace(/−/g, "-").replace(/–/g, "-")
      .replace(/·/g, " \\cdot ").replace(/×/g, " \\times ").replace(/÷/g, " \\div ").replace(/\*/g, " \\cdot ")
      .replace(/≤/g, " \\le ").replace(/≥/g, " \\ge ").replace(/≠/g, " \\ne ").replace(/≈/g, " \\approx ")
      .replace(/±/g, " \\pm ").replace(/∓/g, " \\mp ")
      .replace(/⇒/g, " \\Rightarrow ").replace(/⇔/g, " \\Leftrightarrow ").replace(/→/g, " \\to ")
      .replace(/∞/g, "\\infty ").replace(/π/g, "\\pi ").replace(/θ/g, "\\theta ").replace(/α/g, "\\alpha ")
      .replace(/β/g, "\\beta ").replace(/λ/g, "\\lambda ").replace(/μ/g, "\\mu ").replace(/Δ/g, "\\Delta ")
      .replace(/∫/g, "\\int ").replace(/∑/g, "\\sum ").replace(/∏/g, "\\prod ").replace(/∂/g, "\\partial ")
      .replace(/∈/g, " \\in ").replace(/∪/g, " \\cup ").replace(/∩/g, " \\cap ").replace(/ℝ/g, "\\mathbb{R}").replace(/∅/g, "\\varnothing ")
      .replace(/</g, " \\lt ").replace(/>/g, " \\gt ")
      .replace(/√\s*(\([^()]*\)|\d+(?:\/\d+)?|[a-zA-Z](?:\^\{?\d+\}?)?)/g, (m, a) => "\\sqrt{" + a.replace(/^\(|\)$/g, "") + "}")
      .replace(/√/g, "\\surd ")
      .replace(/⁰/g, "^{0}").replace(/¹/g, "^{1}").replace(/²/g, "^{2}").replace(/³/g, "^{3}")
      .replace(/⁴/g, "^{4}").replace(/⁵/g, "^{5}").replace(/⁶/g, "^{6}").replace(/⁷/g, "^{7}")
      .replace(/⁸/g, "^{8}").replace(/⁹/g, "^{9}").replace(/ⁿ/g, "^{n}")
      .replace(/₀/g, "_{0}").replace(/₁/g, "_{1}").replace(/₂/g, "_{2}").replace(/₃/g, "_{3}").replace(/ₙ/g, "_{n}")
      .replace(/\s+/g, " ").trim();
  }

  function convert(run) {
    return sym(run.replace(FRE, m => CMD[m.toLowerCase()] || m));
  }

  function strong(w) {
    const c = w.replace(/^[^0-9A-Za-zÀ-ÿ\\(√∫∞π]+/, "").replace(/[^0-9A-Za-z)²³ⁿ}]+$/, "");
    if (!c) return false;
    if (FUNCSET.has(c.toLowerCase())) return true;
    if (/[0-9]/.test(c)) return true;
    if (/^d[a-zA-Zθ]$/.test(c)) return true;                       // diferenciais dx, dt...
    if (/[+\-*/^_=|√∫∞πθαβλμΔ²³ⁿ≤≥≠≈±→⇒∂∑∏∈∪∩∅ℝ]/.test(c)) return true;
    if (/<|>/.test(w)) return true;
    if (/[A-Za-z]\(/.test(c) || /\)/.test(c)) return true;         // f(x), (...)
    if (/[a-zA-Z]['’]/.test(c)) return true;                       // f'
    return false;
  }
  function weak(w) {
    const c = w.replace(/[(),.;:!?]/g, "");
    return /^[a-zA-Z]$/.test(c) || /^[a-zA-Z]['’]$/.test(c);
  }

  function mathifyLine(line) {
    if (!line.trim()) return line;
    line = line.replace(/\barc\s+(sen|sin|cos|tan|tg|sec|cossec|cosec|cotg|cot)\b/gi, (m, f) => "arc" + f.toLowerCase());
    const words = line.split(/\s+/);
    const out = []; let run = [];
    const flush = () => {
      if (!run.length) return;
      out.push(run.some(strong) ? "\\(" + convert(run.join(" ")) + "\\)" : run.join(" "));
      run = [];
    };
    for (const w of words) {
      if (!w) continue;
      if (strong(w) || (run.length && weak(w))) run.push(w);
      else { flush(); out.push(w); }
    }
    flush();
    return out.join(" ");
  }

  function mathify(text) {
    if (!text) return text;
    if (/\\\(|\\\[|\\frac|\\int|\\sqrt|\\sin/.test(text)) return text; // já é LaTeX
    return text.split("\n").map(mathifyLine).join("\n");
  }

  B.mathify = mathify;
})();
