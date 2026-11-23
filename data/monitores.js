/* ============================================================
   BIONEXO - Equipe de Monitores
   ------------------------------------------------------------
   Campos:
     id          : identificador unico
     nome        : nome completo
     foto        : caminho da foto (assets/img/monitores/arquivo.jpg)
                   se faltar ou falhar, aparecem as iniciais
     curso       : curso
     turma       : turma e ingresso (ex.: "Turma XXV · 2022/1")
     disciplinas : disciplinas que o monitor atende
     email, telefone, instagram, lattes : contatos (opcionais)
   ============================================================ */
window.BIONEXO = window.BIONEXO || {};
window.BIONEXO.monitores = [
  {
    id: "mon-joao",
    nome: "João Vítor Aires",
    foto: "assets/img/monitores/joao-vitor.jpg",
    curso: "Eng. de Bioprocessos e Biotecnologia",
    turma: "Turma XXV · 2022/1",
    disciplinas: ["Geometria Analítica", "Álgebra Linear", "Cálculo 1", "Cálculo 2", "Bioinformática"],
    email: "", telefone: "", instagram: "", lattes: "",
  },
  {
    id: "mon-millena",
    nome: "Millena",
    foto: "assets/img/monitores/millena.jpg",
    curso: "Eng. de Bioprocessos e Biotecnologia",
    turma: "Turma XXIV · 2021/2",
    disciplinas: ["Mecânica (Física 1)", "Termodinâmica (Física 2)", "Eletromagnetismo (Física 3)"],
    email: "", telefone: "", instagram: "", lattes: "",
  },
];
