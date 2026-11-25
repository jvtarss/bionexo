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

  /* ---------- exercícios com várias partes: isola o item pedido ----------
     "Contexto ... Determine (a) X, (b) Y e (c) Z." + item "b"
       -> contexto: "Contexto ..."   pergunta: "Determine Y."              */
  const LETRAS = "abcdefghijklmnopqrstuvwxyz";
  const proxLetra = l => LETRAS[LETRAS.indexOf(l) + 1];
  // fim de frase: . ? ! seguido do fim do texto ou de espaço + maiúscula/parêntese/aspas
  const FIM = /[.?!](?=\s*$|\s+[A-ZÀ-Ý("'“])/;
  const FIM_G = /[.?!](?=\s+[A-ZÀ-Ý("'“])/g;
  const INICIA_QUALIF = /^(a|o|as|os|um|uma|em|no|na|nos|nas|de|do|da|dos|das|para|pelo|pela|com|entre|quando|se)$/i;
  const PREP = /^(em|no|na|nos|nas)\s/i;
  const PARALELO = /^(com|sem|para|na|no|nas|nos|da|do|em|como)$/i;
  const INTERROG = /^(qual|quais|quanto|quantos|quantas|que|onde|quando|por que|determine|calcule|explique|mostre|esboce|desenhe)\b/i;
  // o trecho herdado começa por preposição ("da força ...", "em t = 3 s");
  // por artigo só quando o item é interrogativo ("Em que instante | a partícula para?")
  const PREP_QUALIF = /^(de|da|do|das|dos|em|no|na|nos|nas|sobre|entre|para|pelo|pela|pelos|pelas)$/i;
  const ART_QUALIF = /^(a|o|as|os|um|uma)$/i;
  // "quais são os módulos" -> "qual é o módulo" (o item isolado pede uma coisa só)
  function singularPalavra(w) {
    if (/ões$/i.test(w)) return w.replace(/ões$/i, "ão");
    if (/ães$/i.test(w)) return w.replace(/ães$/i, "ão");
    if (/ais$/i.test(w)) return w.replace(/ais$/i, "al");
    if (/éis$/i.test(w)) return w.replace(/éis$/i, "el");
    if (/ns$/i.test(w)) return w.replace(/ns$/i, "m");
    if (/[rz]es$/i.test(w)) return w.replace(/es$/i, "");
    return w.replace(/s$/i, "");
  }
  function singulariza(cmd, corpo) {
    if (!cmd) return cmd;
    const qe = q => (q.charAt(0) === "Q" ? "Qual é" : "qual é");
    const m = cmd.match(/^(.*?)\b(quais são|quais)\s+(os|as)\s+(\S+)(\s*(?:\([^)]*\))?)\s*$/i);
    if (m) return m[1] + qe(m[2]) + " " + (m[3].toLowerCase() === "os" ? "o" : "a") + " " + singularPalavra(m[4]) + m[5];
    if (/\bquais são$/i.test(cmd) && /^(o|a|um|uma)\b/i.test(corpo)) return cmd.replace(/(quais são)$/i, qe);
    return cmd;
  }

  function marcadoresItens(txt) {
    const re = /(^|[\s,;:.?!])\(([a-z])\)(?=\s)/g;
    const seq = []; let m, esperado = null;
    while ((m = re.exec(txt))) {
      const l = m[2];
      if (esperado === null ? (l === "a" || l === "b") : l === esperado) {
        seq.push({ letra: l, ini: m.index + m[1].length, fim: m.index + m[0].length });
        esperado = proxLetra(l);
      }
    }
    return seq;
  }
  const limpaConector = s => s.replace(/[\s,;:]*(?:\b(?:e|ou)\b)?[\s,;:]*$/i, "").trim();
  const palavras = s => s.replace(/[.?!]$/, "").trim().split(/\s+/).filter(Boolean);
  function ultimaFronteira(s) {          // índice logo após o último fim de frase seguido de texto
    let m, pos = -1; FIM_G.lastIndex = 0;
    while ((m = FIM_G.exec(s))) pos = m.index + 1;
    return pos;
  }

  function isolaItem(txt, letra) {
    const seq = marcadoresItens(txt);
    const letras = seq.map(s => s.letra);
    if (seq.length && seq[0].letra === "b") letras.unshift("a");
    if (!seq.length || letras.indexOf(letra) < 0) return { ok: false, letras };

    let prefixo = txt.slice(0, seq[0].ini).trim();
    let intro = "", comando = "";
    const partes = [];
    if (seq[0].letra === "b") {
      // o item (a) não tem marcador: é a última frase antes do (b)
      const pos = ultimaFronteira(prefixo);
      intro = pos > 0 ? prefixo.slice(0, pos).trim() : "";
      partes.push({ letra: "a", corpo: (pos > 0 ? prefixo.slice(pos) : prefixo).trim(), fecha: true, resto: "" });
      if (!intro) intro = prefixo;       // sem frase introdutória: usa o prefixo inteiro como contexto
    } else if (/[.?!]$/.test(prefixo) || !prefixo) {
      intro = prefixo;
    } else {
      const pos = ultimaFronteira(prefixo);
      intro = pos > 0 ? prefixo.slice(0, pos).trim() : "";
      comando = (pos > 0 ? prefixo.slice(pos) : prefixo).trim();
    }

    seq.forEach((s, i) => {
      const bruto = txt.slice(s.fim, i + 1 < seq.length ? seq[i + 1].ini : txt.length);
      // o item vai até a primeira "?" (cenário + pergunta); sem "?", até o primeiro fim de frase
      const q = bruto.search(/\?(?=\s|$)/), outroMarc = bruto.search(/\s\([a-z]\)\s/);
      const m = (q >= 0 && (outroMarc < 0 || q < outroMarc)) ? { index: q } : FIM.exec(bruto);
      if (m) { partes.push({ letra: s.letra, corpo: bruto.slice(0, m.index + 1).trim(), fecha: true, resto: bruto.slice(m.index + 1).trim() }); return; }
      let corpo = limpaConector(bruto), como = false, cabeca = "";
      const mc = corpo.match(/^(.*?)\s+(?:e\s+)?como(?:\s+(?:um|uma))?$/i);   // "... e como (b) um módulo" -> "como" vale p/ os seguintes
      if (mc) { corpo = limpaConector(mc[1]); como = true; }
      const prox = i + 1 < seq.length ? txt.slice(seq[i + 1].fim).trim() : "";
      const mv = corpo.match(/^(.*\S),\s+((?:a|o|as|os)\s[^,]+)$/i);   // "... unitários, a força resultante (b) em termos ..."
      if (mv && /^(em|como|na|no|nas|nos)\b/i.test(prox)) { corpo = mv[1]; cabeca = mv[2]; }
      partes.push({ letra: s.letra, corpo, fecha: false, resto: "", como, cabeca });
    });

    // comando vigente: o texto que sobra depois de um item que fecha a frase vira o comando dos seguintes
    let cmd = comando, notaFinal = "";
    const notas = [];
    partes.forEach((p, i) => {
      p.cmd = (p.letra === "a" && seq[0].letra === "b") ? "" : cmd;
      if (p.fecha) {
        // "(Sugestão: ...)" no meio do enunciado é dica geral: vai para o contexto
        const sug = p.resto.match(/^(\([^()]*\))\s*(.*)$/);
        if (sug && i < partes.length - 1) { notas.push(sug[1]); p.resto = sug[2]; }
        if (i < partes.length - 1) cmd = p.resto;
        else if (/\?/.test(p.resto)) p.corpo += " " + p.resto;   // a pergunta do último item veio depois
        else notaFinal = p.resto;                                 // nota final (dados, conversões): vale p/ todos
      }
    });

    // grupos de itens na mesma frase: pontuação final, preposição elíptica e qualificador comum
    let g0 = 0;
    for (let i = 0; i < partes.length; i++) {
      if (!partes[i].fecha && i < partes.length - 1) continue;
      const grp = partes.slice(g0, i + 1); g0 = i + 1;
      const term = (grp[grp.length - 1].corpo.match(/[.?!]$/) || ["."])[0];
      // "como" e núcleo carregados de um item para os seguintes da mesma frase
      let carCabeca = "", carComo = false;
      grp.forEach(p => {
        if (carCabeca || carComo) p.corpo = [carCabeca, carComo ? (/^(um|uma)\b/i.test(p.corpo) ? "como" : "como um") : "", p.corpo].filter(Boolean).join(" ");
        if (p.cabeca) carCabeca = p.cabeca;
        if (p.como) carComo = true;
      });
      // qualificador comum: "(a) o módulo e (b) o sentido da força X" -> (a) "o módulo da força X"
      const semParen = s => s.replace(/\([^()]*\)/g, " ");
      for (let j = 0; j < grp.length - 1; j++) {
        const wj = palavras(semParen(grp[j].corpo));
        if (!wj.length || wj.length > 4) continue;
        for (let k = j + 1; k < grp.length; k++) {
          const wk = palavras(semParen(grp[k].corpo));
          if (wk.length < wj.length + 2) continue;
          // estrutura paralela ("com velocidade constante" / "com uma aceleração ..."): nada a herdar
          if (PARALELO.test(wk[0]) && wk[0].toLowerCase() === wj[0].toLowerCase() && (wk[1] || "").toLowerCase() !== "que") break;
          let ini = -1;
          const interrog = /^(em que|que|qual|quanto)\b/i.test(wj.join(" "));
          for (let w = 1; w <= Math.min(wj.length, wk.length - 2); w++)
            if (PREP_QUALIF.test(wk[w]) || (interrog && ART_QUALIF.test(wk[w]))) { ini = w; break; }
          if (ini > 0) {
            const qualif = wk.slice(ini).join(" ");
            if (grp[j].corpo.indexOf(qualif) < 0) grp[j].corpo = grp[j].corpo.replace(/[.?!]$/, "") + " " + qualif;
          }
          break;
        }
      }
      for (let j = 1; j < grp.length; j++) {
        const ant = grp[j - 1].corpo.replace(/[.?!]$/, "");
        // "(b) a velocidade em t = 2 s; (c) em t = 3 s" -> (c) herda "a velocidade"
        const mp = grp[j].corpo.match(PREP);
        if (mp) {
          const k = ant.toLowerCase().indexOf(" " + mp[1].toLowerCase() + " ");
          if (k > 0) { grp[j].corpo = ant.slice(0, k).trim() + " " + grp[j].corpo; continue; }
        }
        // "(c) Em que instante negativo e (d) instante positivo ..." -> (d) herda "Em que"
        const w0 = (grp[j].corpo.match(/^([a-zà-ÿ]{4,})\b/) || [])[1];
        if (w0) {
          const pa = palavras(ant), p = pa.findIndex(w => w.toLowerCase() === w0);
          if (p >= 1) grp[j].corpo = pa.slice(0, p).join(" ") + " " + grp[j].corpo;
        }
      }
      grp.forEach(p => { if (!/[.?!]$/.test(p.corpo)) p.corpo += term; });
    }

    const i = partes.findIndex(p => p.letra === letra);
    const alvo = partes[i];
    if (!alvo || !alvo.corpo) return { ok: false, letras };
    // (a) implícito sem frase introdutória: o contexto seria a própria pergunta
    const contexto = (letra === "a" && seq[0].letra === "b" && intro === prefixo) ? [notaFinal].concat(notas).filter(Boolean).join(" ")
      : [intro, notaFinal].concat(notas).filter(Boolean).join(" ");
    let cmd2 = alvo.cmd, corpo = alvo.corpo;
    if (/\bde$/i.test(cmd2) && /^(da|do|das|dos)\b/i.test(corpo)) cmd2 = cmd2.replace(/\s*\bde$/i, "");   // "de da" -> "da"
    // item que já é uma pergunta completa: "..., quais são (c) qual é o ângulo" -> "..., qual é o ângulo"
    if (cmd2 && INTERROG.test(corpo)) {
      cmd2 = cmd2.replace(/,?\s*(quais são|qual é|quais|qual|quanto vale|quanto valem|determine|calcule)\s*$/i, "").trim();
      if (cmd2 && !/[,.;:?!]$/.test(cmd2)) cmd2 += ",";
    }
    cmd2 = singulariza(cmd2, corpo);
    let pergunta = (cmd2 ? cmd2 + " " : "") + corpo;
    pergunta = pergunta.charAt(0).toUpperCase() + pergunta.slice(1);
    // itens telegráficos ("(b) Da moça?") ganham referência ao item anterior
    let ref = null;
    if (i > 0 && !alvo.cmd && palavras(corpo).length <= 4) {
      const t = (partes[i - 1].cmd ? partes[i - 1].cmd + " " : "") + partes[i - 1].corpo;
      ref = "(" + partes[i - 1].letra + ") " + t.charAt(0).toUpperCase() + t.slice(1);
    }
    return { ok: true, letras, contexto, pergunta, ref };
  }
  B.isolaItem = isolaItem;

  function mapRow(get, cols, src) {
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
    const item = g("Item").trim().toLowerCase();
    const temItem = /^[a-z]$/.test(item);
    const local = [g("Unidade"), g("Seção"), g("Exercício") ? "Ex. " + g("Exercício") + (temItem ? " " + item : "") : ""]
      .filter(Boolean).join(" · ");

    // exercício com várias partes: mostra só o item desta linha (o enunciado completo fica acessível)
    let parte = null, enunExibido = enun;
    if (temItem && g("Exercício")) {
      const iso = isolaItem(enun.replace(/\s+/g, " ").trim(), item);
      parte = {
        letra: item,
        grupo: [src || "", g("Unidade"), g("Seção"), g("Exercício")].join("|"),
        exercicio: "Ex. " + g("Exercício") + (g("Unidade") ? " · " + g("Unidade") : ""),
        completo: esc(mf(enun)),
        pergunta: iso.ok ? esc(mf(iso.pergunta)) : null,
        ref: iso.ok && iso.ref ? esc(mf(iso.ref)) : null,
      };
      if (iso.ok) enunExibido = iso.contexto;
    }

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
      enunciado: esc(mf(enunExibido)), resposta: esc(mf(resposta)), respostaRaw: resposta,
      resolucao: esc(mf(resolucao)),
      alternativas, correta,
      vfCorreto: /verdad/.test(norm(resposta)),
      tolerancia: tol ? parseFloat(tol.replace(",", ".")) : 0.02,
      unidade: g("Unidade_Resp"),
      tags, plot, imagens, parte,
      origem: "tsv",
    };
  }

  // Alguns arquivos trazem as últimas colunas fora da ordem do cabeçalho
  // (a resolução cai em "Tags" e a unidade em "Resolução"). Detecta isso
  // pelo conteúdo, arquivo a arquivo, e remapeia.
  function corrigeColunas(get, rows) {
    const iRes = get("Resolução"), iTags = get("Tags"), iUni = get("Unidade_Resp");
    if (iRes < 0 || iTags < 0 || iUni < 0 || rows.length < 6) return get;
    const cel = (r, i) => (r[i] || "").trim();
    let trocadas = 0;
    rows.forEach(r => {
      const res = cel(r, iRes), tags = cel(r, iTags);
      if (res.length <= 20 && !/[=→]/.test(res) && tags.length > 25 && /[=→]|\d/.test(tags)) trocadas++;
    });
    if (trocadas / rows.length < 0.6) return get;
    const mapa = { [norm("Resolução")]: iTags, [norm("Tags")]: iUni, [norm("Unidade_Resp")]: iRes };
    return name => (mapa[norm(name)] != null ? mapa[norm(name)] : get(name));
  }

  function tsvToQuestoes(text, src) {
    const rows = parseDelimited(text, "\t");
    if (rows.length < 2) return [];
    const get = corrigeColunas(headerIndex(rows[0]), rows.slice(1));
    const out = [], vistos = new Set();
    B._duplicadas = B._duplicadas || [];
    for (let r = 1; r < rows.length; r++) {
      const cel = n => ((rows[r][get(n)] || "") + "").trim();
      // linha repetida (mesmo exercício, item e enunciado): mantém só a primeira
      const chave = [cel("Unidade"), cel("Seção"), cel("Exercício"), cel("Item"), cel("Enunciado")].join("|");
      if (cel("Exercício") && cel("Item") && vistos.has(chave)) { B._duplicadas.push((src || "") + ": " + cel("ID")); continue; }
      vistos.add(chave);
      try { out.push(mapRow(get, rows[r], src)); } catch (_) {}
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
          .then(t => tsvToQuestoes(t, src))
          .catch(() => { B._tsvError = true; return []; })
      ));
    }).then(groups => {
      const all = base.concat.apply(base, groups);
      all.forEach((q, i) => { q.key = "k" + i; q.num = i + 1; });   // chave única + número global do banco
      // liga as partes de um mesmo exercício entre si
      const grupos = {};
      all.forEach(q => { if (q.parte) (grupos[q.parte.grupo] = grupos[q.parte.grupo] || []).push(q); });
      Object.keys(grupos).forEach(k => {
        const irmas = grupos[k].map(q => ({ letra: q.parte.letra, key: q.key, num: q.num }));
        // só trata como "partes" quando todas as linhas repetem o MESMO enunciado (cada uma pedindo um item);
        // se cada linha já traz o próprio enunciado (ex.: Guidorizzi), nada muda
        const iguais = grupos[k].every(q => q.parte.completo === grupos[k][0].parte.completo);
        if (irmas.length < 2 || !iguais) { grupos[k].forEach(q => { q.enunciado = q.parte.completo; q.parte = null; }); return; }
        grupos[k].forEach(q => { q.parte.irmas = irmas; });
      });
      window.BIONEXO = window.BIONEXO || {};
      window.BIONEXO.questoes = all;
      return all;
    });
    return B._qPromise;
  };
})();
