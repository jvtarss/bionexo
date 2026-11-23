/* ============================================================
   BIONEXO - Glossário interativo (dicas)
   Destaca termos técnicos num texto e mostra a definição ao
   clicar. Não altera o conteúdo renderizado pelo MathJax.
   Expõe window.Bionexo.gloss.
   ============================================================ */
(function () {
  "use strict";
  const B = (window.Bionexo = window.Bionexo || {});
  const norm = s => (s || "").toString().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();

  let REGEX = null;
  const DEFS = {};

  function build() {
    if (REGEX) return;
    const gl = (window.BIONEXO && window.BIONEXO.glossario) || [];
    const forms = [];
    gl.forEach(e => {
      [e.termo].concat(e.sinonimos || []).forEach(f => { if (f) { forms.push(f); DEFS[norm(f)] = { termo: e.termo, def: e.definicao }; } });
    });
    if (!forms.length) { REGEX = false; return; }
    forms.sort((a, b) => b.length - a.length);
    const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    try {
      REGEX = new RegExp("(?<![\\p{L}\\p{M}])(" + forms.map(esc).join("|") + ")(?![\\p{L}\\p{M}])", "giu");
    } catch (_) {
      REGEX = new RegExp("\\b(" + forms.map(esc).join("|") + ")\\b", "gi"); // fallback sem lookbehind
    }
  }

  function skippable(node, root) {
    for (let p = node.parentNode; p && p !== root.parentNode; p = p.parentNode) {
      if (p.nodeType !== 1) continue;
      const t = p.tagName;
      if (t === "MJX-CONTAINER" || t === "SCRIPT" || t === "STYLE" || t === "CODE" ||
          t === "A" || t === "BUTTON" || t === "INPUT" || t === "TEXTAREA" || t === "LABEL" ||
          p.classList.contains("glossterm") || p.classList.contains("MathJax")) return true;
    }
    return false;
  }

  function highlight(root) {
    build();
    if (!REGEX || root.dataset.glossOn === "1") return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const targets = [];
    let n;
    while ((n = walker.nextNode())) {
      if (!n.nodeValue.trim()) continue;
      if (skippable(n, root)) continue;
      REGEX.lastIndex = 0;
      if (REGEX.test(n.nodeValue)) targets.push(n);
    }
    targets.forEach(node => {
      const text = node.nodeValue;
      const frag = document.createDocumentFragment();
      let last = 0; REGEX.lastIndex = 0; let m;
      while ((m = REGEX.exec(text))) {
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        const btn = document.createElement("button");
        btn.type = "button"; btn.className = "glossterm"; btn.textContent = m[0];
        btn.dataset.k = norm(m[0]);
        frag.appendChild(btn);
        last = m.index + m[0].length;
        if (m[0].length === 0) REGEX.lastIndex++;
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
    root.dataset.glossOn = "1";
  }

  function unhighlight(root) {
    root.querySelectorAll(".glossterm").forEach(b => {
      b.replaceWith(document.createTextNode(b.textContent));
    });
    root.normalize();
    root.dataset.glossOn = "0";
    closePop();
  }

  // ---- popover ----
  let pop = null;
  function closePop() { if (pop) { pop.remove(); pop = null; } }
  function openPop(btn) {
    closePop();
    const entry = DEFS[btn.dataset.k];
    if (!entry) return;
    pop = document.createElement("div");
    pop.className = "gloss-pop";
    pop.innerHTML = `<strong>${B.esc(entry.termo)}</strong><p>${B.esc(entry.def)}</p>`;
    document.body.appendChild(pop);
    const r = btn.getBoundingClientRect();
    const top = window.scrollY + r.bottom + 8;
    let left = window.scrollX + r.left;
    left = Math.min(left, window.scrollX + document.documentElement.clientWidth - pop.offsetWidth - 14);
    pop.style.top = top + "px";
    pop.style.left = Math.max(10, left) + "px";
  }

  document.addEventListener("click", e => {
    const t = e.target.closest(".glossterm");
    if (t) { e.preventDefault(); e.stopPropagation(); openPop(t); return; }
    if (pop && !e.target.closest(".gloss-pop")) closePop();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closePop(); });
  window.addEventListener("resize", closePop);

  B.gloss = { highlight, unhighlight };
})();
