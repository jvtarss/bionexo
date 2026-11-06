/* ============================================================
   BIONEXO - Banco de Formulas
   ------------------------------------------------------------
   COMO ADICIONAR UMA FORMULA:
   Copie um bloco e cole antes do `];`.

   Campos:
     id        : identificador unico (ex.: "f013")
     nome      : nome da formula
     categoria : area (ex.: "Termodinamica", "Cinetica microbiana")
     descricao : o que a formula representa (1 a 3 frases)
     formas    : lista de representacoes. Cada item:
                   { latex: "...", nota: "quando usar / observacao" }
                 O LaTeX NAO leva as cifras \( \); o site adiciona.
     variaveis : lista de { sim: "P", nome: "pressao", unidade: "Pa" }
                 (sim = simbolo em LaTeX; os NOMES das variaveis entram
                  automaticamente na busca; procurar "volume" acha esta formula)
     tags      : palavras-chave extras para busca (opcional)
   ============================================================ */
window.BIONEXO = window.BIONEXO || {};
window.BIONEXO.formulas = [
  {
    id: "f001",
    nome: "Lei geral dos gases ideais",
    categoria: "Termodinâmica",
    descricao: "Relaciona pressão, volume, temperatura e quantidade de matéria de um gás ideal. Base para muitos cálculos de fase gasosa em bioprocessos (aeração, headspace, respirometria).",
    formas: [
      { latex: "PV = nRT", nota: "Forma fundamental (n em mols)." },
      { latex: "PV = \\frac{m}{M}RT", nota: "Em função da massa m e da massa molar M." },
      { latex: "\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}", nota: "Lei combinada: compara dois estados (n constante)." },
      { latex: "\\rho = \\frac{P\\,M}{R\\,T}", nota: "Densidade do gás em função de P, T e massa molar." },
      { latex: "P = \\frac{n}{V}RT = C\\,RT", nota: "Com a concentração molar C = n/V." },
    ],
    variaveis: [
      { sim: "P", nome: "pressão", unidade: "Pa" },
      { sim: "V", nome: "volume", unidade: "m^3" },
      { sim: "n", nome: "quantidade de matéria", unidade: "mol" },
      { sim: "R", nome: "constante universal dos gases", unidade: "8,314 J/(mol K)" },
      { sim: "T", nome: "temperatura absoluta", unidade: "K" },
      { sim: "m", nome: "massa", unidade: "kg" },
      { sim: "M", nome: "massa molar", unidade: "kg/mol" },
      { sim: "\\rho", nome: "densidade", unidade: "kg/m^3" },
      { sim: "C", nome: "concentração molar", unidade: "mol/m^3" },
    ],
    tags: ["gás ideal", "clapeyron", "boyle", "charles", "estado"],
  },
  {
    id: "f002",
    nome: "Equação de Michaelis-Menten",
    categoria: "Cinética enzimática",
    descricao: "Descreve a velocidade de uma reação catalisada por enzima em função da concentração de substrato.",
    formas: [
      { latex: "v = \\frac{V_{max}\\,[S]}{K_M + [S]}", nota: "Forma direta." },
      { latex: "\\frac{1}{v} = \\frac{K_M}{V_{max}}\\cdot\\frac{1}{[S]} + \\frac{1}{V_{max}}", nota: "Linearização de Lineweaver-Burk." },
    ],
    variaveis: [
      { sim: "v", nome: "velocidade de reação", unidade: "mol/(L s)" },
      { sim: "V_{max}", nome: "velocidade máxima", unidade: "mol/(L s)" },
      { sim: "[S]", nome: "concentração de substrato", unidade: "mol/L" },
      { sim: "K_M", nome: "constante de Michaelis", unidade: "mol/L" },
    ],
    tags: ["enzima", "lineweaver burk", "substrato", "catálise"],
  },
  {
    id: "f003",
    nome: "Equação de Monod",
    categoria: "Cinética microbiana",
    descricao: "Relaciona a velocidade específica de crescimento de microrganismos com a concentração de substrato limitante.",
    formas: [
      { latex: "\\mu = \\mu_{max}\\,\\frac{S}{K_S + S}", nota: "Análoga à de Michaelis-Menten." },
      { latex: "\\mu = \\frac{1}{X}\\frac{dX}{dt}", nota: "Definição da velocidade específica de crescimento." },
      { latex: "t_d = \\frac{\\ln 2}{\\mu}", nota: "Tempo de duplicação." },
    ],
    variaveis: [
      { sim: "\\mu", nome: "velocidade específica de crescimento", unidade: "1/h" },
      { sim: "\\mu_{max}", nome: "velocidade específica máxima", unidade: "1/h" },
      { sim: "S", nome: "concentração de substrato", unidade: "g/L" },
      { sim: "K_S", nome: "constante de saturação", unidade: "g/L" },
      { sim: "X", nome: "concentração celular", unidade: "g/L" },
      { sim: "t_d", nome: "tempo de duplicação", unidade: "h" },
    ],
    tags: ["crescimento", "biomassa", "fermentação", "cultivo"],
  },
  {
    id: "f004",
    nome: "Número de Reynolds",
    categoria: "Fenômenos de transporte",
    descricao: "Número adimensional que indica o regime de escoamento (laminar, de transição ou turbulento).",
    formas: [
      { latex: "Re = \\frac{\\rho\\,v\\,D}{\\mu}", nota: "Escoamento em tubo de diâmetro D." },
      { latex: "Re = \\frac{v\\,D}{\\nu}", nota: "Com a viscosidade cinemática (nu = mu / rho)." },
      { latex: "Re = \\frac{\\rho\\,N\\,D_i^2}{\\mu}", nota: "Reynolds de agitação (tanque com impelidor)." },
    ],
    variaveis: [
      { sim: "Re", nome: "número de Reynolds", unidade: "adimensional" },
      { sim: "\\rho", nome: "densidade", unidade: "kg/m^3" },
      { sim: "v", nome: "velocidade", unidade: "m/s" },
      { sim: "D", nome: "diâmetro", unidade: "m" },
      { sim: "\\mu", nome: "viscosidade dinâmica", unidade: "Pa s" },
      { sim: "\\nu", nome: "viscosidade cinemática", unidade: "m^2/s" },
      { sim: "N", nome: "rotação do impelidor", unidade: "1/s" },
    ],
    tags: ["escoamento", "laminar", "turbulento", "agitação", "adimensional"],
  },
  {
    id: "f005",
    nome: "pH e pOH",
    categoria: "Bioquímica",
    descricao: "Medida da acidez de uma solução a partir da concentração de íons hidrogênio.",
    formas: [
      { latex: "\\mathrm{pH} = -\\log_{10}[\\mathrm{H^+}]", nota: "Definição." },
      { latex: "\\mathrm{pOH} = -\\log_{10}[\\mathrm{OH^-}]", nota: "Para o íon hidroxila." },
      { latex: "\\mathrm{pH} + \\mathrm{pOH} = 14", nota: "A 25 °C." },
    ],
    variaveis: [
      { sim: "\\mathrm{pH}", nome: "potencial hidrogeniônico", unidade: "adimensional" },
      { sim: "[\\mathrm{H^+}]", nome: "concentração de íons hidrogênio", unidade: "mol/L" },
      { sim: "[\\mathrm{OH^-}]", nome: "concentração de íons hidroxila", unidade: "mol/L" },
    ],
    tags: ["ácido", "base", "tampão", "acidez", "logaritmo"],
  },
  {
    id: "f006",
    nome: "Equação de Henderson-Hasselbalch",
    categoria: "Bioquímica",
    descricao: "Calcula o pH de uma solução tampão a partir das concentrações de ácido e base conjugada.",
    formas: [
      { latex: "\\mathrm{pH} = \\mathrm{p}K_a + \\log_{10}\\frac{[\\mathrm{A^-}]}{[\\mathrm{HA}]}", nota: "Forma para tampão." },
    ],
    variaveis: [
      { sim: "\\mathrm{p}K_a", nome: "constante de dissociação ácida", unidade: "adimensional" },
      { sim: "[\\mathrm{A^-}]", nome: "concentração de base conjugada", unidade: "mol/L" },
      { sim: "[\\mathrm{HA}]", nome: "concentração de ácido", unidade: "mol/L" },
    ],
    tags: ["tampão", "buffer", "ph", "equilíbrio"],
  },
  {
    id: "f007",
    nome: "Equação de Arrhenius",
    categoria: "Cinética química",
    descricao: "Descreve a dependência da constante de velocidade de uma reação com a temperatura.",
    formas: [
      { latex: "k = A\\,e^{-E_a/(R\\,T)}", nota: "Forma exponencial." },
      { latex: "\\ln k = \\ln A - \\frac{E_a}{R}\\cdot\\frac{1}{T}", nota: "Forma linearizada (gráfico ln k vs 1/T)." },
    ],
    variaveis: [
      { sim: "k", nome: "constante de velocidade", unidade: "depende da ordem" },
      { sim: "A", nome: "fator pré-exponencial", unidade: "depende da ordem" },
      { sim: "E_a", nome: "energia de ativação", unidade: "J/mol" },
      { sim: "R", nome: "constante universal dos gases", unidade: "8,314 J/(mol K)" },
      { sim: "T", nome: "temperatura absoluta", unidade: "K" },
    ],
    tags: ["temperatura", "energia de ativação", "velocidade", "desnaturação"],
  },
  {
    id: "f008",
    nome: "Lei de Beer-Lambert",
    categoria: "Análise instrumental",
    descricao: "Relaciona a absorbância de uma amostra com a concentração do analito, muito usada em espectrofotometria.",
    formas: [
      { latex: "A = \\varepsilon\\,\\ell\\,C", nota: "Forma padrão." },
      { latex: "A = -\\log_{10}\\!\\left(\\frac{I}{I_0}\\right)", nota: "Definição de absorbância a partir das intensidades." },
    ],
    variaveis: [
      { sim: "A", nome: "absorbância", unidade: "adimensional" },
      { sim: "\\varepsilon", nome: "absortividade molar", unidade: "L/(mol cm)" },
      { sim: "\\ell", nome: "caminho óptico", unidade: "cm" },
      { sim: "C", nome: "concentração", unidade: "mol/L" },
      { sim: "I", nome: "intensidade transmitida", unidade: "W/m^2" },
      { sim: "I_0", nome: "intensidade incidente", unidade: "W/m^2" },
    ],
    tags: ["absorbância", "espectrofotometria", "concentração", "transmitância"],
  },
  {
    id: "f009",
    nome: "Diluição (conservação da quantidade de soluto)",
    categoria: "Soluções",
    descricao: "Permite calcular o volume ou a concentração em diluições, pois a quantidade de soluto se conserva.",
    formas: [
      { latex: "C_1 V_1 = C_2 V_2", nota: "Diluição simples (relação fundamental)." },
      { latex: "\\mathrm{FD} = \\frac{V_{final}}{V_{amostra}}", nota: "Fator de diluição." },
      { latex: "C_2 = \\frac{C_1}{\\mathrm{FD}}", nota: "Concentração após diluir pelo fator FD." },
    ],
    variaveis: [
      { sim: "C_1", nome: "concentração inicial", unidade: "mol/L" },
      { sim: "V_1", nome: "volume inicial", unidade: "L" },
      { sim: "C_2", nome: "concentração final", unidade: "mol/L" },
      { sim: "V_2", nome: "volume final", unidade: "L" },
      { sim: "\\mathrm{FD}", nome: "fator de diluição", unidade: "adimensional" },
    ],
    tags: ["diluição", "concentração", "volume", "preparo de soluções"],
  },
  {
    id: "f010",
    nome: "Concentração de soluções",
    categoria: "Soluções",
    descricao: "Diferentes formas de expressar a concentração de uma solução.",
    formas: [
      { latex: "C_M = \\frac{n}{V} = \\frac{m}{M\\,V}", nota: "Concentração molar (molaridade)." },
      { latex: "C = \\frac{m}{V}", nota: "Concentração comum (massa por volume)." },
      { latex: "\\%\\,(m/v) = \\frac{m}{V}\\times 100", nota: "Porcentagem massa por volume (g/100 mL)." },
    ],
    variaveis: [
      { sim: "C_M", nome: "concentração molar", unidade: "mol/L" },
      { sim: "C", nome: "concentração comum", unidade: "g/L" },
      { sim: "n", nome: "quantidade de matéria", unidade: "mol" },
      { sim: "m", nome: "massa do soluto", unidade: "g" },
      { sim: "M", nome: "massa molar", unidade: "g/mol" },
      { sim: "V", nome: "volume da solução", unidade: "L" },
    ],
    tags: ["molaridade", "concentração", "soluto", "preparo", "massa", "volume"],
  },
  {
    id: "f011",
    nome: "Balanço de massa geral",
    categoria: "Fenômenos de transporte",
    descricao: "Expressão da conservação de massa em um volume de controle.",
    formas: [
      { latex: "\\text{Entra} - \\text{Sai} + \\text{Gera} - \\text{Consome} = \\text{Acumula}", nota: "Forma geral." },
      { latex: "\\sum \\dot m_{ent} = \\sum \\dot m_{sai}", nota: "Regime permanente, sem reação." },
    ],
    variaveis: [
      { sim: "\\dot m", nome: "vazão mássica", unidade: "kg/s" },
    ],
    tags: ["conservação", "regime permanente", "volume de controle", "massa"],
  },
  {
    id: "f012",
    nome: "Fator de rendimento e produtividade",
    categoria: "Cinética microbiana",
    descricao: "Parâmetros que quantificam a conversão de substrato em células ou produto e a produtividade do processo.",
    formas: [
      { latex: "Y_{X/S} = \\frac{-\\Delta X}{\\Delta S} = \\frac{X - X_0}{S_0 - S}", nota: "Rendimento de biomassa por substrato." },
      { latex: "Y_{P/S} = \\frac{P - P_0}{S_0 - S}", nota: "Rendimento de produto por substrato." },
      { latex: "P_r = \\frac{P - P_0}{t}", nota: "Produtividade volumétrica." },
    ],
    variaveis: [
      { sim: "Y_{X/S}", nome: "fator de rendimento célula substrato", unidade: "g/g" },
      { sim: "Y_{P/S}", nome: "fator de rendimento produto substrato", unidade: "g/g" },
      { sim: "X", nome: "concentração celular", unidade: "g/L" },
      { sim: "S", nome: "concentração de substrato", unidade: "g/L" },
      { sim: "P", nome: "concentração de produto", unidade: "g/L" },
      { sim: "P_r", nome: "produtividade", unidade: "g/(L h)" },
      { sim: "t", nome: "tempo", unidade: "h" },
    ],
    tags: ["rendimento", "produtividade", "biomassa", "produto", "conversão"],
  },
];
