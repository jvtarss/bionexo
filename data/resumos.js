/* ============================================================
   BIONEXO: Resumos
   ------------------------------------------------------------
   COMO ADICIONAR UM RESUMO:
   Copie um bloco e cole antes do `];`.

   Campos:
     id         : identificador único (ex.: "r005")
     titulo     : título do resumo
     disciplina : disciplina relacionada
     descricao  : 1–2 frases resumindo o conteúdo
     imagem     : (opcional) capa em "assets/img/resumos/arquivo.png" (ou null)
     conteudo   : texto do resumo. Aceita LaTeX (\( \) \[ \]) e mini-markdown
                  (## Título, listas com - , **negrito**, *itálico*).
     tags       : palavras-chave p/ busca (opcional)
   ============================================================ */
window.BIONEXO = window.BIONEXO || {};
window.BIONEXO.resumos = [
  {
    id: "r001",
    titulo: "Cinética de Crescimento Microbiano",
    disciplina: "Microbiologia Industrial",
    descricao: "Fases do crescimento em batelada, modelo de Monod e principais parâmetros cinéticos.",
    imagem: null,
    conteudo:
      "## Fases do crescimento em batelada\n\n" +
      "- **Lag (adaptação):** células se ajustam ao meio; sem crescimento líquido.\n" +
      "- **Exponencial (log):** crescimento máximo, \\(X = X_0 e^{\\mu t}\\).\n" +
      "- **Estacionária:** esgotamento de substrato/acúmulo de produtos; \\(\\mu \\to 0\\).\n" +
      "- **Declínio (morte):** taxa de morte supera a de crescimento.\n\n" +
      "## Modelo de Monod\n\n" +
      "Relaciona a velocidade específica de crescimento \\(\\mu\\) à concentração de substrato \\(S\\):\n\n" +
      "\\[ \\mu = \\mu_{max}\\,\\frac{S}{K_S + S} \\]\n\n" +
      "onde \\(\\mu_{max}\\) é a velocidade máxima e \\(K_S\\) a constante de saturação.\n\n" +
      "## Parâmetros importantes\n\n" +
      "- **Rendimento celular:** \\(Y_{X/S} = \\dfrac{\\Delta X}{-\\Delta S}\\)\n" +
      "- **Produtividade:** \\(P = \\dfrac{X - X_0}{t}\\)\n" +
      "- **Tempo de duplicação:** \\(t_d = \\dfrac{\\ln 2}{\\mu}\\)",
    tags: ["monod", "crescimento", "batelada", "mu", "rendimento"],
  },
  {
    id: "r002",
    titulo: "Balanços de Massa em Regime Permanente",
    disciplina: "Fenômenos de Transporte",
    descricao: "Princípio da conservação de massa, balanços globais e por componente, com estratégia de resolução.",
    imagem: null,
    conteudo:
      "## Princípio da conservação\n\n" +
      "Para qualquer volume de controle:\n\n" +
      "\\[ \\text{Entra} - \\text{Sai} + \\text{Gera} - \\text{Consome} = \\text{Acumula} \\]\n\n" +
      "Em **regime permanente** e sem reação química, o acúmulo e os termos de geração/consumo são nulos:\n\n" +
      "\\[ \\sum \\dot m_{entra} = \\sum \\dot m_{sai} \\]\n\n" +
      "## Estratégia de resolução\n\n" +
      "1. Desenhe o fluxograma e rotule todas as correntes.\n" +
      "2. Escolha a base de cálculo (ex.: 100 kg/h de alimentação).\n" +
      "3. Escreva o balanço global e um balanço por componente.\n" +
      "4. Conte incógnitas × equações independentes (grau de liberdade = 0).\n" +
      "5. Resolva o sistema e verifique a consistência.\n\n" +
      "> Dica: componentes que não reagem geram balanços independentes muito úteis (ex.: soluto em uma evaporação).",
    tags: ["balanco", "conservacao", "regime permanente", "volume de controle"],
  },
  {
    id: "r003",
    titulo: "Cinética Enzimática de Michaelis-Menten",
    disciplina: "Reatores Bioquímicos",
    descricao: "Equação de Michaelis-Menten, significado de Km e Vmax e linearização de Lineweaver-Burk.",
    imagem: null,
    conteudo:
      "## A equação\n\n" +
      "\\[ v = \\frac{V_{max}\\,[S]}{K_M + [S]} \\]\n\n" +
      "- \\(V_{max}\\): velocidade máxima (toda a enzima saturada).\n" +
      "- \\(K_M\\): concentração de substrato em que \\(v = V_{max}/2\\). Mede a **afinidade** (menor \\(K_M\\) = maior afinidade).\n\n" +
      "## Casos-limite\n\n" +
      "- \\([S] \\ll K_M\\): \\(v \\approx \\dfrac{V_{max}}{K_M}[S]\\): **1ª ordem**.\n" +
      "- \\([S] \\gg K_M\\): \\(v \\approx V_{max}\\): **ordem zero**.\n\n" +
      "## Linearização de Lineweaver-Burk\n\n" +
      "\\[ \\frac{1}{v} = \\frac{K_M}{V_{max}}\\cdot\\frac{1}{[S]} + \\frac{1}{V_{max}} \\]\n\n" +
      "Gráfico de \\(1/v\\) vs \\(1/[S]\\): reta com coeficiente linear \\(1/V_{max}\\) e angular \\(K_M/V_{max}\\).",
    tags: ["michaelis menten", "enzima", "lineweaver burk", "km", "vmax"],
  },
];
