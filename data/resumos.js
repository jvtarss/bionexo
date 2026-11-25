/* ============================================================
   BIONEXO: Resumos
   ------------------------------------------------------------
   Os resumos ficam em  data/resumos/*.js  (um arquivo por área).
   Este arquivo define a lista vazia e as ÁREAS (ordem, ícone, capa).

   COMO ADICIONAR UM RESUMO
   Abra o arquivo da área em data/resumos/ e copie um bloco { ... }.
   Campos:
     id          : identificador único (ex.: "r51")
     num         : número do tema (ordem de exibição)
     area        : nome EXATO de uma das áreas abaixo
     disciplina  : disciplina do curso
     titulo      : título do resumo
     descricao   : 1–2 frases sobre o conteúdo
     imagem      : (opcional) capa própria; se omitida, usa a capa da área
     conteudo    : String.raw`...`  (assim o LaTeX não precisa de "\\")
                   Mini-markdown: ## Título, ### Subtítulo, listas "- " e "1. ",
                   **negrito**, *itálico*, caixas "> ", tabelas "| a | b |".
                   Matemática: \( ... \) e \[ ... \] (uma equação por linha).
                   Química: \(\ce{H2O}\). Evite "|" dentro de tabelas.
     referencias : lista de referências (ABNT). Só livros, artigos e
                   documentos técnicos/oficiais.
     praticar    : (opcional) link para questões relacionadas
     tags        : palavras-chave para a busca (inclua o nome da
                   disciplina usado no banco de questões, ex. "Cálculo 1")
   ============================================================ */
window.BIONEXO = window.BIONEXO || {};
window.BIONEXO.resumos = window.BIONEXO.resumos || [];

window.BIONEXO.resumoAreas = [
  { nome: "Fundamentos de Cálculo e Cálculo I", icone: "functions",
    capa: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=640&h=400&fit=crop&q=70" },
  { nome: "Geometria Analítica e Álgebra Linear", icone: "grid_on",
    capa: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=640&h=400&fit=crop&q=70" },
  { nome: "Química Geral e Experimental", icone: "science",
    capa: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=640&h=400&fit=crop&q=70" },
  { nome: "Química Orgânica Básica e Experimental", icone: "hexagon",
    capa: "https://images.unsplash.com/photo-1532634993-15f421e42ec0?w=640&h=400&fit=crop&q=70" },
  { nome: "Química Analítica Geral e Experimental", icone: "colorize",
    capa: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=640&h=400&fit=crop&q=70" },
  { nome: "Física Básica: Mecânica", icone: "rocket_launch",
    capa: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=640&h=400&fit=crop&q=70" },
  { nome: "Física Básica: Termodinâmica e Eletricidade", icone: "bolt",
    capa: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&h=400&fit=crop&q=70" },
  { nome: "Física Básica: Eletromagnetismo", icone: "electric_bolt",
    capa: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=640&h=400&fit=crop&q=70" },
  { nome: "Ondulatória, Óptica e Física Moderna", icone: "waves",
    capa: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&h=400&fit=crop&q=70" },
  { nome: "Físico-Química", icone: "thermostat",
    capa: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=640&h=400&fit=crop&q=70" },
  { nome: "Bioquímica", icone: "biotech",
    capa: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=640&h=400&fit=crop&q=70" },
  { nome: "Biologia Celular", icone: "bubble_chart",
    capa: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=640&h=400&fit=crop&q=70" },
  { nome: "Microbiologia Geral e Experimental", icone: "coronavirus",
    capa: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=640&h=400&fit=crop&q=70" },
  { nome: "Biologia Molecular e Genética", icone: "account_tree",
    capa: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=640&h=400&fit=crop&q=70" },
  { nome: "Melhoramento Vegetal e Biotecnologia de Plantas", icone: "grass",
    capa: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=640&h=400&fit=crop&q=70" },
  { nome: "Rotas Metabólicas", icone: "hub",
    capa: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=640&h=400&fit=crop&q=70" },
  { nome: "Biocatálise e Biotransformações", icone: "science",
    capa: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=640&h=400&fit=crop&q=70" },
  { nome: "Cálculo II e Métodos Numéricos", icone: "calculate",
    capa: "https://images.unsplash.com/photo-1453733190371-0a9bedd82893?w=640&h=400&fit=crop&q=70" },
  { nome: "Fundamentos de Engenharia e Bioprocessos", icone: "precision_manufacturing",
    capa: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=640&h=400&fit=crop&q=70" },
  // ---- complementares ----
  { nome: "Equações Diferenciais Aplicadas a Bioprocessos", icone: "show_chart",
    capa: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=640&h=400&fit=crop&q=70" },
  { nome: "Técnicas e Protocolos de Laboratório", icone: "assignment",
    capa: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=640&h=400&fit=crop&q=70" },
];
