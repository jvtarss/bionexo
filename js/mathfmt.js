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

  const SUP = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9",
    "⁻": "-", "⁺": "+", "ⁿ": "n", "ᵏ": "k", "ⁱ": "i", "ʲ": "j", "ᵐ": "m", "ˣ": "x" };
  const SUB = { "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9",
    "ₙ": "n", "₋": "-", "₊": "+", "ₖ": "k", "ᵢ": "i", "ⱼ": "j", "ₓ": "x" };
  const SUPS = "⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺ⁿᵏⁱʲᵐˣ", SUBS = "₀₁₂₃₄₅₆₇₈₉ₙ₋₊ₖᵢⱼₓ";
  const supDig = s => s.replace(/./g, c => SUP[c] || c);
  function sym(s) {
    return s
      .replace(/([⁻⁺]?[⁰¹²³⁴⁵⁶⁷⁸⁹]+)[·.,]([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (m, a, b) => "^{" + supDig(a) + "{,}" + supDig(b) + "}")  // t⁻⁰·⁶ -> t^{-0,6}
      .replace(new RegExp("([" + SUPS + "]+)√\\s*(\\([^()]*\\)|\\d+|[a-zA-Z])", "g"),          // ⁿ√x -> \sqrt[n]{x}
        (m, i, a) => "\\sqrt[" + supDig(i) + "]{" + a.replace(/^\(|\)$/g, "") + "}")
      .replace(new RegExp("[" + SUPS + "]+", "g"), m => "^{" + supDig(m) + "}")               // xⁿ⁻¹ -> x^{n-1}
      .replace(new RegExp("[" + SUBS + "]+", "g"), m => "_{" + m.replace(/./g, c => SUB[c] || c) + "}")  // log₁₀ -> log_{10}
      .replace(/\^\(([^()]*)\)/g, "^{$1}")                                    // x^(-12) -> x^{-12}
      .replace(/\^(-?\d{2,})/g, "^{$1}")                                      // x^100 -> x^{100}
      .replace(/(\d),(\d)/g, "$1{,}$2")                                   // vírgula decimal sem espaço
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

  // unidades logo após um número viram texto reto: "55,501 dm³" -> 55,501\,\mathrm{dm}³
  const U = "km|cm|mm|μm|nm|dm|m|s|ms|μs|ns|min|h|kg|g|mg|μg|N|kN|J|kJ|W|kW|L|mL|mol|mmol|K|Pa|kPa|atm|Hz|rad|cal|kcal|eV";
  const UNIT = new RegExp("^((?:" + U + ")(?:[²³]|⁻[¹²³])?(?:/(?:" + U + ")(?:[²³]|⁻[¹²³])?)*)([,.;:?!)]*)$");
  const NUM_FIM = /[\d⁰¹²³⁴⁵⁶⁷⁸⁹]$/;
  function convert(run) {
    // "ℝ\{1}" -> ℝ \setminus \{1\}; demais chaves do texto viram chaves literais
    run = run.replace(/\\\{([^{}]*)\}/g, "\\setminus\\{$1\\}");
    let esc = "";
    const pilha = [];                    // grupos "^{...}"/"_{...}" já escritos em LaTeX ficam intactos
    for (let i = 0; i < run.length; i++) {
      const c = run[i], ant = run[i - 1];
      if (c === "{" && ant !== "\\") {
        const grupo = ant === "^" || ant === "_";
        pilha.push(grupo); esc += grupo ? "{" : "\\{";
      } else if (c === "}" && ant !== "\\") {
        esc += pilha.length && pilha.pop() ? "}" : "\\}";
      } else esc += c;
    }
    run = esc;
    const toks = run.split(" ");
    for (let i = 1; i < toks.length; i++) {
      const m = toks[i].match(UNIT);
      if (m && NUM_FIM.test(toks[i - 1])) toks[i] = "\\,\\mathrm{" + m[1].replace(/([²³]|⁻[¹²³])/g, "}$1\\mathrm{") + "}" + m[2];
    }
    return sym(toks.join(" ").replace(/\\mathrm\{\}/g, "").replace(FRE, m => CMD[m.toLowerCase()] || m));
  }

  function strong(w) {
    const c = w.replace(/^[^0-9A-Za-zÀ-ÿ\\(√∫∞π]+/, "").replace(/[^0-9A-Za-z)²³ⁿ}]+$/, "");
    if (!c) return false;
    if (/^[A-Za-zÀ-ÿ]{2,}(-[A-Za-zÀ-ÿ]{2,})+$/.test(c)) return false;  // "semi-retas", "anos-luz": palavra composta
    if (FUNCSET.has(c.toLowerCase())) return true;
    if (/[0-9]/.test(c)) return true;
    if (/^d[xyztuvsrwnhθ]$/.test(c)) return true;                  // diferenciais dx, dt... (não "da/de/do")
    if (/[+\-*/^_=|√∫∞πθαβλμΔ²³ⁿ≤≥≠≈±→⇒∂∑∏∈∪∩∅ℝ]/.test(c)) return true;
    if (/<|>/.test(w)) return true;
    if (/^\([a-z]\)$/.test(c)) return false;                       // marcador de item "(a)", não é matemática
    if (/[A-Za-z]\(/.test(c)) return true;                         // f(x)
    if (/^\([A-Za-z]$|^[A-Za-z]\)$/.test(c)) return true;          // "(x" ... "y)" dentro de expressões
    // (palavra comum que só abre/fecha parêntese, como "significativos)", não é matemática)
    if (/[a-zA-Z]['’]/.test(c)) return true;                       // f'
    return false;
  }
  function weak(w) {
    if (/^\([a-z]\)[,.;:!?]*$/.test(w)) return false;              // marcador de item
    const c = w.replace(/[(),.;:!?]/g, "");
    return /^[a-zA-Z]$/.test(c) || /^[a-zA-Z]['’]$/.test(c);
  }

  // classes: S = forte (número, função, símbolo), O = operador isolado, W = letra solta, P = prosa
  const OPER = /^[=+\-−–×·*/<>≤≥≠≈±∓÷→⇒⇔]+$/;
  const QUEBRA = /^(e|a|o|ou|é|à)$/;           // palavras de uma letra do português
  const REF = /^(tabela|tab\.|fig\.?|figura|se[çc][ãa]o|cap[íi]tulo|cap\.|eq\.?|equa[çc][ãa]o|exerc[íi]cio|ex\.|problema)$/i;
  function classe(w, ant) {
    if (REF.test(ant) && /^\(?\d+[-–.]\d+[a-z]?\)?[,.;:]?$/.test(w)) return "P";   // "Tabela 1-6", "Fig. 1-4"
    if (OPER.test(w.replace(/[,.;:!?]+$/, ""))) return "O";
    if (UNIT.test(w) && NUM_FIM.test(ant.replace(/[,.;:!?]+$/, "")) && !/[,.;:!?]$/.test(ant)) return "W";   // "1,2 kg"
    if (strong(w)) return "S";
    if (weak(w)) return "W";
    return "P";
  }

  function mathifyLine(line) {
    if (!line.trim()) return line;
    line = line.replace(/\barc\s+(sen|sin|cos|tan|tg|sec|cossec|cosec|cotg|cot)\b/gi, (m, f) => "arc" + f.toLowerCase());
    const toks = line.split(/\s+/).filter(Boolean);
    const cls = toks.map((w, i) => classe(w, toks[i - 1] || ""));
    const ehOp = i => cls[i] === "O";
    // letras de conjunção ("e", "a", "o") sem operador ao lado voltam a ser prosa
    cls.forEach((c, i) => { if (c === "W" && QUEBRA.test(toks[i].replace(/[,.;:!?]+$/, "")) && !ehOp(i - 1) && !ehOp(i + 1)) cls[i] = "P"; });

    const out = [];
    const emite = (a, b) => {                       // trecho [a, b] de tokens não-prosa
      // apara bordas: operadores soltos e letras que não encostam em operador (exceto unidade após número)
      const manter = i => cls[i] === "S"
        || (cls[i] === "W" && (ehOp(i - 1) || ehOp(i + 1)
             || (UNIT.test(toks[i]) && i > 0 && NUM_FIM.test(toks[i - 1].replace(/[,.;:!?]+$/, "")))));
      while (a <= b && !manter(a)) out.push(toks[a++]);
      const cauda = [];
      while (b >= a && !manter(b)) cauda.unshift(toks[b--]);
      if (a <= b) {
        if (cls.slice(a, b + 1).indexOf("S") >= 0) {
          let txt = toks.slice(a, b + 1).join(" ");
          let pont = (txt.match(/[,.;:!?]+$/) || [""])[0];    // pontuação final fica fora da fórmula
          if (pont) txt = txt.slice(0, -pont.length);
          const aspa = txt.match(/([\d⁰¹²³⁴⁵⁶⁷⁸⁹)])(['’"])$/);   // aspa de fechamento não é "linha" (derivada)
          if (aspa) { txt = txt.slice(0, -1); pont = aspa[2] + pont; }
          out.push("\\(" + convert(txt) + "\\)" + pont);
        } else out.push(toks.slice(a, b + 1).join(" "));
      }
      out.push.apply(out, cauda);
    };
    let ini = -1;
    for (let i = 0; i <= toks.length; i++) {
      const naoProsa = i < toks.length && cls[i] !== "P";
      if (naoProsa && ini < 0) ini = i;
      if (!naoProsa && ini >= 0) { emite(ini, i - 1); ini = -1; }
      if (i < toks.length && !naoProsa) out.push(toks[i]);
    }
    return out.join(" ");
  }

  function mathify(text) {
    if (!text) return text;
    if (/\\\(|\\\[|\\frac|\\int|\\sqrt|\\sin/.test(text)) return text; // já é LaTeX
    return text.split("\n").map(mathifyLine).join("\n");
  }

  B.mathify = mathify;
})();
