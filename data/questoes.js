/* ============================================================
   BIONEXO, Banco de Questões
   ------------------------------------------------------------
   COMO ADICIONAR UMA QUESTÃO:
   Copie um dos blocos abaixo e cole no final da lista (antes do
   `];`). Mantenha a vírgula separando os blocos.

   Campos:
     id          : identificador único (ex.: "q013")
     disciplina  : nome da disciplina
     topico      : tema específico
     dificuldade : "fácil" | "média" | "difícil"
     fonte       : livro/capítulo de origem
     tipo        : "multipla"  (alternativas)  ou  "aberta" (valor numérico)
     enunciado   : texto. Use LaTeX entre \( ... \) (inline) ou \[ ... \] (bloco).
     imagem      : (opcional) "assets/img/questoes/arquivo.png" , ou deixe null
     alternativas: [ {id:"a", texto:"..."}, ... ]   (apenas se tipo = "multipla")
     correta     : id da alternativa correta (ex.: "b")   (apenas "multipla")
     resposta    : valor numérico esperado                (apenas "aberta")
     tolerancia  : margem aceita p/ a resposta aberta (ex.: 0.05 = 5%)
     unidade     : (opcional) unidade da resposta aberta  (ex.: "mol/L")
     resolucao   : passo a passo. Aceita LaTeX e mini-markdown (listas, **negrito**).
     tags        : lista de palavras-chave p/ busca (opcional)
   ============================================================ */
window.BIONEXO = window.BIONEXO || {};
window.BIONEXO.questoes = [
  {
    id: "q001",
    disciplina: "Bioquímica",
    topico: "Equilíbrio ácido-base / pH",
    dificuldade: "fácil",
    fonte: "Lehninger, Princípios de Bioquímica, cap. 2",
    tipo: "aberta",
    enunciado:
      "Uma solução tampão possui concentração de íons hidrogênio \\([\\mathrm{H^+}] = 3{,}2 \\times 10^{-5}\\ \\mathrm{mol/L}\\). " +
      "Calcule o \\(\\mathrm{pH}\\) da solução.",
    resposta: 4.49,
    tolerancia: 0.02,
    unidade: "",
    resolucao:
      "O pH é definido como:\n\n" +
      "\\[ \\mathrm{pH} = -\\log_{10}[\\mathrm{H^+}] \\]\n\n" +
      "Substituindo o valor dado:\n\n" +
      "\\[ \\mathrm{pH} = -\\log_{10}(3{,}2 \\times 10^{-5}) = 4{,}49 \\]\n\n" +
      "Portanto, a solução é **ácida** (pH < 7).",
    tags: ["ph", "tampao", "logaritmo", "acido"],
  },
  {
    id: "q002",
    disciplina: "Microbiologia Industrial",
    topico: "Cinética de crescimento microbiano",
    dificuldade: "média",
    fonte: "Schmidell, Biotecnologia Industrial, vol. 2",
    tipo: "aberta",
    enunciado:
      "Em um cultivo em batelada, a concentração celular passou de \\(X_0 = 0{,}5\\ \\mathrm{g/L}\\) " +
      "para \\(X = 8{,}0\\ \\mathrm{g/L}\\) durante a fase exponencial, que durou \\(6\\ \\mathrm{h}\\). " +
      "Determine a velocidade específica de crescimento \\(\\mu\\) (em \\(\\mathrm{h^{-1}}\\)).",
    resposta: 0.462,
    tolerancia: 0.03,
    unidade: "h⁻¹",
    resolucao:
      "Na fase exponencial o crescimento segue:\n\n" +
      "\\[ X = X_0\\, e^{\\mu t} \\]\n\n" +
      "Isolando \\(\\mu\\):\n\n" +
      "\\[ \\mu = \\frac{\\ln(X/X_0)}{t} = \\frac{\\ln(8{,}0/0{,}5)}{6} \\]\n\n" +
      "\\[ \\mu = \\frac{\\ln(16)}{6} = \\frac{2{,}773}{6} \\approx 0{,}462\\ \\mathrm{h^{-1}} \\]",
    tags: ["mu", "crescimento", "exponencial", "batelada", "cinetica"],
  },
  {
    id: "q003",
    disciplina: "Fenômenos de Transporte",
    topico: "Balanço de massa",
    dificuldade: "média",
    fonte: "Geankoplis, Transport Processes, cap. 1",
    tipo: "multipla",
    enunciado:
      "Uma corrente de alimentação de \\(1000\\ \\mathrm{kg/h}\\) contém \\(20\\%\\) (m/m) de glicose " +
      "e é concentrada por evaporação até \\(50\\%\\) (m/m). Considerando regime permanente e que " +
      "apenas água é evaporada, qual é a vazão da corrente concentrada?",
    alternativas: [
      { id: "a", texto: "\\(200\\ \\mathrm{kg/h}\\)" },
      { id: "b", texto: "\\(400\\ \\mathrm{kg/h}\\)" },
      { id: "c", texto: "\\(500\\ \\mathrm{kg/h}\\)" },
      { id: "d", texto: "\\(600\\ \\mathrm{kg/h}\\)" },
    ],
    correta: "b",
    resolucao:
      "Fazemos o **balanço do soluto (glicose)**, que não se perde na evaporação:\n\n" +
      "\\[ \\dot m_{ali}\\, x_{ali} = \\dot m_{conc}\\, x_{conc} \\]\n\n" +
      "\\[ 1000 \\times 0{,}20 = \\dot m_{conc} \\times 0{,}50 \\]\n\n" +
      "\\[ \\dot m_{conc} = \\frac{200}{0{,}50} = 400\\ \\mathrm{kg/h} \\]\n\n" +
      "A água evaporada é \\(1000 - 400 = 600\\ \\mathrm{kg/h}\\).",
    tags: ["balanco de massa", "evaporacao", "glicose", "regime permanente"],
  },
  {
    id: "q004",
    disciplina: "Termodinâmica",
    topico: "Primeira lei / gás ideal",
    dificuldade: "fácil",
    fonte: "Smith, Van Ness & Abbott, cap. 3",
    tipo: "multipla",
    enunciado:
      "Para um gás ideal em um processo a **volume constante**, qual grandeza é igual ao calor trocado \\(Q\\)?",
    alternativas: [
      { id: "a", texto: "A variação de entalpia \\(\\Delta H\\)" },
      { id: "b", texto: "O trabalho \\(W\\)" },
      { id: "c", texto: "A variação de energia interna \\(\\Delta U\\)" },
      { id: "d", texto: "Zero" },
    ],
    correta: "c",
    resolucao:
      "Pela 1ª lei: \\(\\Delta U = Q - W\\), com \\(W = \\int p\\,dV\\).\n\n" +
      "A volume constante, \\(dV = 0 \\Rightarrow W = 0\\). Logo:\n\n" +
      "\\[ \\Delta U = Q_V \\]\n\n" +
      "O calor trocado é igual à variação de **energia interna**.",
    tags: ["primeira lei", "gas ideal", "volume constante", "energia interna"],
  },
  {
    id: "q005",
    disciplina: "Operações Unitárias",
    topico: "Transferência de massa / coluna",
    dificuldade: "difícil",
    fonte: "Coulson & Richardson, vol. 2",
    tipo: "aberta",
    enunciado:
      "Em uma coluna de recheio, o número de unidades de transferência é \\(N_{OG} = 4{,}0\\) e a " +
      "altura de uma unidade de transferência é \\(H_{OG} = 0{,}75\\ \\mathrm{m}\\). " +
      "Calcule a altura do recheio \\(Z\\) necessária.",
    resposta: 3.0,
    tolerancia: 0.01,
    unidade: "m",
    resolucao:
      "A altura do recheio é o produto do número de unidades de transferência pela altura de cada unidade:\n\n" +
      "\\[ Z = N_{OG} \\times H_{OG} \\]\n\n" +
      "\\[ Z = 4{,}0 \\times 0{,}75 = 3{,}0\\ \\mathrm{m} \\]",
    tags: ["coluna", "recheio", "ntu", "htu", "absorcao"],
  },
  {
    id: "q006",
    disciplina: "Reatores Bioquímicos",
    topico: "Cinética enzimática, Michaelis-Menten",
    dificuldade: "média",
    fonte: "Bailey & Ollis, Biochemical Engineering Fundamentals",
    tipo: "aberta",
    enunciado:
      "Uma enzima obedece à cinética de Michaelis-Menten com \\(V_{max} = 2{,}0\\ \\mathrm{mmol\\,L^{-1}\\,min^{-1}}\\) " +
      "e \\(K_M = 5{,}0\\ \\mathrm{mmol/L}\\). Qual a velocidade de reação \\(v\\) quando " +
      "\\([S] = 15\\ \\mathrm{mmol/L}\\)?",
    resposta: 1.5,
    tolerancia: 0.02,
    unidade: "mmol L⁻¹ min⁻¹",
    resolucao:
      "A equação de Michaelis-Menten é:\n\n" +
      "\\[ v = \\frac{V_{max}\\,[S]}{K_M + [S]} \\]\n\n" +
      "Substituindo:\n\n" +
      "\\[ v = \\frac{2{,}0 \\times 15}{5{,}0 + 15} = \\frac{30}{20} = 1{,}5\\ \\mathrm{mmol\\,L^{-1}\\,min^{-1}} \\]",
    tags: ["michaelis menten", "enzima", "cinetica", "km", "vmax"],
  },
  {
    id: "q007",
    disciplina: "Bioquímica",
    topico: "Metabolismo energético",
    dificuldade: "fácil",
    fonte: "Lehninger, Princípios de Bioquímica, cap. 14",
    tipo: "multipla",
    enunciado:
      "Qual é o saldo líquido de ATP produzido na **glicólise** (via de Embden-Meyerhof) por molécula de glicose?",
    alternativas: [
      { id: "a", texto: "2 ATP" },
      { id: "b", texto: "4 ATP" },
      { id: "c", texto: "36 ATP" },
      { id: "d", texto: "38 ATP" },
    ],
    correta: "a",
    resolucao:
      "Na glicólise são **consumidos 2 ATP** (fase de investimento) e **produzidos 4 ATP** " +
      "(fase de pagamento). O saldo líquido é:\n\n" +
      "\\[ 4 - 2 = 2\\ \\text{ATP} \\]\n\n" +
      "Também há formação de 2 NADH, mas o saldo *direto* de ATP é 2.",
    tags: ["glicolise", "atp", "metabolismo", "glicose"],
  },
  {
    id: "q008",
    disciplina: "Fenômenos de Transporte",
    topico: "Perda de carga / Reynolds",
    dificuldade: "difícil",
    fonte: "Bird, Stewart & Lightfoot, Transport Phenomena",
    tipo: "aberta",
    enunciado:
      "Água (\\(\\rho = 1000\\ \\mathrm{kg/m^3}\\), \\(\\mu = 1{,}0\\times10^{-3}\\ \\mathrm{Pa\\cdot s}\\)) " +
      "escoa a \\(v = 2{,}0\\ \\mathrm{m/s}\\) em um tubo de diâmetro \\(D = 0{,}05\\ \\mathrm{m}\\). " +
      "Calcule o número de Reynolds e indique o regime.",
    resposta: 100000,
    tolerancia: 0.01,
    unidade: "(adimensional)",
    resolucao:
      "O número de Reynolds é:\n\n" +
      "\\[ Re = \\frac{\\rho\\,v\\,D}{\\mu} = \\frac{1000 \\times 2{,}0 \\times 0{,}05}{1{,}0\\times10^{-3}} \\]\n\n" +
      "\\[ Re = \\frac{100}{1{,}0\\times10^{-3}} = 1{,}0\\times10^{5} \\]\n\n" +
      "Como \\(Re > 4000\\), o regime é **turbulento**.",
    tags: ["reynolds", "escoamento", "turbulento", "tubo"],
  },
];
