/* ============================================================
   BIONEXO - Motor de Massa Molar
   Calcula a massa molar a partir de:
     1) uma formula quimica (ex.: C6H12O6, Ca(OH)2, CuSO4.5H2O)  -> offline
     2) um nome comum em portugues (ex.: agua, glicose)          -> offline
     3) busca online no PubChem (nomes em geral)                 -> requer internet
   Tudo no navegador, sem backend. Expoe window.MolarMass.
   ============================================================ */
(function () {
  "use strict";

  // Massas atomicas padrao (g/mol) - IUPAC (valores abreviados)
  const W = {
    H:1.008, He:4.0026, Li:6.94, Be:9.0122, B:10.81, C:12.011, N:14.007, O:15.999,
    F:18.998, Ne:20.180, Na:22.990, Mg:24.305, Al:26.982, Si:28.085, P:30.974,
    S:32.06, Cl:35.45, Ar:39.948, K:39.098, Ca:40.078, Sc:44.956, Ti:47.867,
    V:50.942, Cr:51.996, Mn:54.938, Fe:55.845, Co:58.933, Ni:58.693, Cu:63.546,
    Zn:65.38, Ga:69.723, Ge:72.630, As:74.922, Se:78.971, Br:79.904, Kr:83.798,
    Rb:85.468, Sr:87.62, Y:88.906, Zr:91.224, Nb:92.906, Mo:95.95, Tc:98,
    Ru:101.07, Rh:102.91, Pd:106.42, Ag:107.87, Cd:112.41, In:114.82, Sn:118.71,
    Sb:121.76, Te:127.60, I:126.90, Xe:131.29, Cs:132.91, Ba:137.33, La:138.91,
    Ce:140.12, Pr:140.91, Nd:144.24, Pm:145, Sm:150.36, Eu:151.96, Gd:157.25,
    Tb:158.93, Dy:162.50, Ho:164.93, Er:167.26, Tm:168.93, Yb:173.05, Lu:174.97,
    Hf:178.49, Ta:180.95, W:183.84, Re:186.21, Os:190.23, Ir:192.22, Pt:195.08,
    Au:196.97, Hg:200.59, Tl:204.38, Pb:207.2, Bi:208.98, Po:209, At:210, Rn:222,
    Fr:223, Ra:226, Ac:227, Th:232.04, Pa:231.04, U:238.03, Np:237, Pu:244,
  };

  // Nomes comuns (portugues) -> formula. Chaves sem acento e minusculas.
  const NAMES = {
    "agua": "H2O", "agua destilada": "H2O", "gelo": "H2O",
    "peroxido de hidrogenio": "H2O2", "agua oxigenada": "H2O2",
    "glicose": "C6H12O6", "dextrose": "C6H12O6", "frutose": "C6H12O6",
    "galactose": "C6H12O6", "sacarose": "C12H22O11", "acucar": "C12H22O11",
    "lactose": "C12H22O11", "maltose": "C12H22O11", "amido": "C6H10O5",
    "celulose": "C6H10O5", "glicerol": "C3H8O3", "glicerina": "C3H8O3",
    "etanol": "C2H6O", "alcool": "C2H6O", "alcool etilico": "C2H6O",
    "metanol": "CH4O", "acido acetico": "C2H4O2", "vinagre": "C2H4O2",
    "acetona": "C3H6O", "ureia": "CH4N2O", "ureia ": "CH4N2O",
    "acido citrico": "C6H8O7", "acido lactico": "C3H6O3", "acido latico": "C3H6O3",
    "acido ascorbico": "C6H8O6", "vitamina c": "C6H8O6",
    "cloreto de sodio": "NaCl", "sal": "NaCl", "sal de cozinha": "NaCl",
    "bicarbonato de sodio": "NaHCO3", "carbonato de sodio": "Na2CO3",
    "hidroxido de sodio": "NaOH", "soda caustica": "NaOH",
    "hidroxido de potassio": "KOH", "hidroxido de calcio": "Ca(OH)2",
    "cal hidratada": "Ca(OH)2", "hidroxido de amonio": "NH4OH",
    "acido cloridrico": "HCl", "acido muriatico": "HCl",
    "acido sulfurico": "H2SO4", "acido nitrico": "HNO3",
    "acido fosforico": "H3PO4", "amonia": "NH3", "amoniaco": "NH3",
    "cloreto de potassio": "KCl", "cloreto de calcio": "CaCl2",
    "cloreto de magnesio": "MgCl2", "cloreto de amonio": "NH4Cl",
    "sulfato de cobre": "CuSO4", "sulfato de cobre penta-hidratado": "CuSO4.5H2O",
    "sulfato de magnesio": "MgSO4", "sulfato de sodio": "Na2SO4",
    "sulfato de amonio": "(NH4)2SO4", "sulfato ferroso": "FeSO4",
    "nitrato de potassio": "KNO3", "nitrato de sodio": "NaNO3",
    "nitrato de amonio": "NH4NO3", "carbonato de calcio": "CaCO3",
    "fosfato de sodio": "Na3PO4", "fosfato monopotassico": "KH2PO4",
    "fosfato dipotassico": "K2HPO4", "fosfato de potassio monobasico": "KH2PO4",
    "glutamato monossodico": "C5H8NO4Na", "cloreto de ferro iii": "FeCl3",
    "dioxido de carbono": "CO2", "gas carbonico": "CO2", "monoxido de carbono": "CO",
    "gas oxigenio": "O2", "oxigenio": "O2", "gas nitrogenio": "N2", "nitrogenio": "N2",
    "gas hidrogenio": "H2", "hidrogenio": "H2", "glicina": "C2H5NO2",
    "cafeina": "C8H10N4O2", "acido oxalico": "C2H2O4", "edta": "C10H16N2O8",
  };

  function norm(s) {
    return (s || "").toString().trim().toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ");
  }

  // ---- parser de formula quimica ----
  function parseSegment(str) {
    let i = 0;
    function number() {
      let n = "";
      while (i < str.length && /[0-9]/.test(str[i])) { n += str[i]; i++; }
      return n === "" ? 1 : parseInt(n, 10);
    }
    function group() {
      const counts = {};
      while (i < str.length) {
        const c = str[i];
        if (c === "(" || c === "[" || c === "{") {
          i++;
          const inner = group();
          if (/[)\]}]/.test(str[i])) i++; else throw err("Parenteses nao fechado");
          const mult = number();
          for (const el in inner) counts[el] = (counts[el] || 0) + inner[el] * mult;
        } else if (c === ")" || c === "]" || c === "}") {
          break;
        } else if (/[A-Z]/.test(c)) {
          let sym = c; i++;
          if (i < str.length && /[a-z]/.test(str[i])) { sym += str[i]; i++; }
          if (!(sym in W)) throw err("Elemento desconhecido: " + sym);
          counts[sym] = (counts[sym] || 0) + number();
        } else {
          throw err("Caractere inesperado: '" + c + "'");
        }
      }
      return counts;
    }
    const r = group();
    if (i < str.length) throw err("Formula invalida");
    return r;
  }
  function err(msg) { return { _mm: true, msg: msg }; }

  function parse(formula) {
    const f = (formula || "").replace(/\s+/g, "").replace(/[·•∙*xX×]/g, ".");
    if (!f) throw err("Formula vazia");
    const total = {};
    for (const seg of f.split(".")) {
      if (seg === "") continue;
      let j = 0, coef = "";
      while (j < seg.length && /[0-9]/.test(seg[j])) { coef += seg[j]; j++; }
      const mult = coef === "" ? 1 : parseInt(coef, 10);
      const sub = parseSegment(seg.slice(j));
      for (const el in sub) total[el] = (total[el] || 0) + sub[el] * mult;
    }
    if (!Object.keys(total).length) throw err("Formula vazia");
    return total;
  }

  function buildElems(counts) {
    const els = Object.keys(counts).map(sym => {
      const aw = W[sym], n = counts[sym], sub = aw * n;
      return { sym, n, aw, sub };
    });
    const mass = els.reduce((s, e) => s + e.sub, 0);
    els.forEach(e => e.pct = mass ? (e.sub / mass) * 100 : 0);
    return { els, mass };
  }

  function fromCounts(formula, counts, source, query) {
    const { els, mass } = buildElems(counts);
    return { ok: true, formula, mass, elements: els, source, query: query || formula };
  }

  // ---- API principal (assincrona por causa do PubChem) ----
  async function compute(input) {
    const raw = (input || "").trim();
    if (!raw) return { ok: false, msg: "Digite uma fórmula (ex.: C6H12O6) ou o nome do composto (ex.: glicose)." };

    // 1) tenta como formula quimica
    try { return fromCounts(raw, parse(raw), "formula"); }
    catch (e) { if (!(e && e._mm)) throw e; }

    // 2) dicionario de nomes comuns (offline)
    const key = norm(raw);
    if (NAMES[key]) {
      try { return fromCounts(NAMES[key], parse(NAMES[key]), "dicionario", raw); }
      catch (e) { /* segue */ }
    }

    // 3) PubChem (requer internet)
    if (typeof navigator !== "undefined" && navigator.onLine) {
      try {
        const url = "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/" +
          encodeURIComponent(raw) + "/property/MolecularFormula,MolecularWeight/JSON";
        const resp = await fetch(url);
        if (resp.ok) {
          const data = await resp.json();
          const p = data.PropertyTable && data.PropertyTable.Properties && data.PropertyTable.Properties[0];
          if (p && p.MolecularWeight) {
            let els = [];
            try { els = buildElems(parse(p.MolecularFormula)).els; } catch (_) {}
            return { ok: true, formula: p.MolecularFormula || raw, mass: parseFloat(p.MolecularWeight), elements: els, source: "pubchem", query: raw };
          }
        }
      } catch (_) { /* rede indisponivel */ }
    }

    return { ok: false, msg: "Não reconheci esse composto. Tente a fórmula química (ex.: NaHCO3, respeitando maiúsculas e minúsculas) ou confira a conexão para a busca por nome." };
  }

  window.MolarMass = { compute, parse, names: NAMES, weights: W };
})();
