/* ============================================================
   BIONEXO - Leitor de bancos de questões em .tsv
   Lê qualquer .tsv no formato de data/questoes/questoes-guidorizzi.tsv,
   entende as colunas, cria as questões, detecta o tipo e percebe
   quando a resposta precisa ser desenhada (reta real / gráfico).
   Expõe window.Bionexo.loadQuestoes() e parseTSV().
   ============================================================ */
(function () {
  "use strict";
  const B = (window.Bionexo = window.Bionexo || {});
  const norm = s => (s || "").toString().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
  const esc = s => (s || "").toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // ---- parser com aspas (campos multilinha) ----
  function parseDelimited(text, delim) {
    const rows = []; let row = [], field = "", inQ = false, i = 0;
    const n = text.length;
    while (i < n) {
      const c = text[i];
      if (inQ) {
        if (c === '"') { if (text[i + 1] === '"') { field += '"'; i += 2; continue; } inQ = false; i++; continue; }
        field += c; i++; continue;
      }
      if (c === '"' && field === "") { inQ = true; i++; continue; }
      if (c === delim) { row.push(field); field = ""; i++; continue; }
      if (c === "\r") { i++; continue; }
      if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; i++; continue; }
      field += c; i++;
    }
    if (field !== "" || row.length) { row.push(field); rows.push(row); }
    return rows.filter(r => r.some(f => f !== ""));
  }
  B.parseTSV = text => parseDelimited(text, "\t");

  // ---- mapeia cabeçalho -> índice (tolerante a acentos) ----
  function headerIndex(header) {
    const idx = {};
    header.forEach((h, i) => { idx[norm(h)] = i; });
    return name => { const i = idx[norm(name)]; return i == null ? -1 : i; };
  }

  function isNumeric(s) { return /^[-+]?\d+(?:[.,]\d+)?$/.test((s || "").trim()); }

  function detectFuncao(enun) {
    // procura "f(x) = ..." ou "y = ..." no enunciado
    const m = enun.match(/(?:f\s*\(\s*x\s*\)|y)\s*=\s*([^.;]+)/i);
    if (!m) return null;
    const expr = m[1].trim();
    if (!B.plot || !B.plot.compileFn(expr)) return null;
    return expr;
  }

  function mapRow(get, cols) {
    const g = name => (cols[get(name)] || "").toString();
    const mf = s => (B.mathify ? B.mathify(s) : s);
    const id = g("ID") || ("q" + Math.random().toString(36).slice(2, 7));
    const tipoOrig = g("Tipo");
    const topico = g("Tópico");
    const tags = g("Tags").split(/[,;]/).map(s => s.trim()).filter(Boolean);
    // extrai imagens marcadas no texto: [Ver figura: arquivo.png]
    const imagens = [];
    const extraiImgs = txt => txt.replace(/\[\s*ver\s+(?:figura|imagem|tabela)\s*:\s*([^\]]+?)\s*\]/gi, (m, file) => {
      imagens.push("assets/img/questoes/" + file.trim().replace(/^.*[\\/]/, ""));
      return " ";
    });
    const enun = extraiImgs(g("Enunciado"));
    const resposta = g("Resposta");
    const resolucao = extraiImgs(g("Resolução"));

    // fonte bibliográfica
    const fonte = [g("Autor") + (g("Título") ? ". " + g("Título") : ""),
      g("Volume") ? "vol. " + g("Volume") : "", g("Edição"), g("Editora"), g("Ano")]
      .filter(Boolean).join(", ");
    const local = [g("Unidade"), g("Seção"), g("Exercício") ? "Ex. " + g("Exercício") + (g("Item") && g("Item") !== "–" ? " " + g("Item") : "") : ""]
      .filter(Boolean).join(" · ");

    // ---- detecção de tipo ----
    const tp = norm(tipoOrig);
    const tagsN = tags.map(norm);
    const ehSinal = tagsN.some(t => t.includes("sinal")) || norm(topico).includes("sinal");
    // conjunto-solução: exige número / ∞ / ℝ / ∅ (evita falso-positivo tipo "(verificar, ...)")
    const ehConjunto = /[∞ℝ∅]|∪/.test(resposta)
      || /\{\s*[-+−]?\s*\d[^}]*\}/.test(resposta)
      || /[\(\[]\s*[-+−]?\s*(?:\d|∞|inf)[^)\]]*,[^)\]]*[\)\]]/.test(resposta);
    let tipo;
    if (/demonstr/.test(tp)) tipo = "demonstracao";
    else if (/^v(\s|ou|$)/.test(tp) || tp.includes("vouf") || tp.includes("verdadeiro")) tipo = "vouf";
    else if (/multip/.test(tp)) tipo = "multipla";
    else if (ehSinal) tipo = "sinal";
    else if (ehConjunto) tipo = "intervalo";
    else if (isNumeric(resposta)) tipo = "aberta";
    else tipo = "texto";

    // ---- detecção de plot ----
    let plot = null;
    const expr = detectFuncao(enun);
    const querGrafico = /gr[áa]fico|esbo[çc]o|par[áa]bola|fun[çc][ãa]o|ass[íi]ntota/.test(norm(topico + " " + tags.join(" ") + " " + enun));
    if (expr && querGrafico) plot = { tipo: "funcao", expr, exprLabel: esc(expr) };
    else if (tipo === "intervalo" || tipo === "sinal" || ehConjunto) plot = { tipo: "reta" };

    // alternativas (se houver): "a) texto | b) texto" ou linhas "a) texto"
    let alternativas = [];
    const altRaw = g("Alternativas").trim();
    if (altRaw) {
      alternativas = altRaw.split(/\s*\|\s*|\n/).map(s => s.trim()).filter(Boolean).map(s => {
        const m = s.match(/^\(?([a-eA-E])\)?[\).\-\s]+(.*)$/);
        return m ? { id: m[1].toLowerCase(), texto: esc(m[2]) } : { id: String.fromCharCode(97 + alternativas.length), texto: esc(s) };
      });
    }

    const correta = g("Correta").trim().toLowerCase();
    const tol = g("Tolerância").trim();

    const alias = (window.BIONEXO && window.BIONEXO.disciplinaAlias) || {};
    const disciplina = alias[norm(g("Disciplina"))] || g("Disciplina");

    return {
      id, disciplina, topico, dificuldade: g("Dificuldade") || "média",
      fonte, local, tipo, tipoOrig,
      enunciado: esc(mf(enun)), resposta: esc(mf(resposta)), respostaRaw: resposta,
      resolucao: esc(mf(resolucao)),
      alternativas, correta,
      vfCorreto: /verdad/.test(norm(resposta)),
      tolerancia: tol ? parseFloat(tol.replace(",", ".")) : 0.02,
      unidade: g("Unidade_Resp"),
      tags, plot, imagens,
      origem: "tsv",
    };
  }

  function tsvToQuestoes(text) {
    const rows = parseDelimited(text, "\t");
    if (rows.length < 2) return [];
    const get = headerIndex(rows[0]);
    const out = [];
    for (let r = 1; r < rows.length; r++) {
      try { out.push(mapRow(get, rows[r])); } catch (_) {}
    }
    return out;
  }
  B.tsvToQuestoes = tsvToQuestoes;

  // Descobre os .tsv automaticamente: lista a pasta (servidores com
  // autoindex, ex.: python http.server) e une com o manifesto explícito
  // (data/questoes-fontes.js), que serve de fallback no GitHub Pages.
  function descobrirFontes() {
    const pasta = (window.BIONEXO && window.BIONEXO.tsvPasta) || "data/questoes/";
    const manifesto = ((window.BIONEXO && window.BIONEXO.tsvFontes) || []).slice();
    return fetch(pasta)
      .then(r => (r.ok ? r.text() : ""))
      .then(html => {
        const achados = [...html.matchAll(/href="([^"?#]+\.tsv)"/gi)]
          .map(m => { try { return decodeURIComponent(m[1]); } catch (_) { return m[1]; } })
          .map(f => pasta + f.replace(/^.*\//, ""));
        return [...new Set(manifesto.concat(achados))];
      })
      .catch(() => manifesto);
  }

  // ---- carregador (legado embutido + todos os .tsv da pasta) ----
  B.loadQuestoes = function () {
    if (B._qPromise) return B._qPromise;
    const base = ((window.BIONEXO && window.BIONEXO.questoes) || []).slice();
    B._qPromise = descobrirFontes().then(fontes => {
      B._fontes = fontes;
      return Promise.all(fontes.map(src =>
        fetch(src)
          .then(r => { if (!r.ok) throw new Error(r.status); return r.text(); })
          .then(t => tsvToQuestoes(t))
          .catch(() => { B._tsvError = true; return []; })
      ));
    }).then(groups => {
      const all = base.concat.apply(base, groups);
      all.forEach((q, i) => { q.key = "k" + i; q.num = i + 1; });   // chave única + número global do banco
      window.BIONEXO = window.BIONEXO || {};
      window.BIONEXO.questoes = all;
      return all;
    });
    return B._qPromise;
  };
})();
