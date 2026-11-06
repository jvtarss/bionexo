/* ============================================================
   BIONEXO — Mapas Mentais
   ------------------------------------------------------------
   COMO ADICIONAR UM MAPA MENTAL:
   1. Salve a imagem (de preferência PNG ou SVG, boa resolução)
      em  assets/img/mapas/
   2. Copie um bloco abaixo e cole antes do `];`.

   Campos:
     id         : identificador único (ex.: "m004")
     titulo     : título do mapa mental
     disciplina : disciplina relacionada
     descricao  : 1 frase sobre o que o mapa cobre
     imagem     : caminho da imagem, ex.: "assets/img/mapas/glicolise.png"
                  (deixe null para exibir um espaço reservado)
     tags       : palavras-chave p/ busca (opcional)
   ============================================================ */
window.BIONEXO = window.BIONEXO || {};
window.BIONEXO.mapas = [
  {
    id: "m001",
    titulo: "Vias do Metabolismo Central",
    disciplina: "Bioquímica",
    descricao: "Glicólise, ciclo de Krebs e cadeia respiratória conectados em um panorama geral.",
    imagem: null, // ex.: "assets/img/mapas/metabolismo-central.png"
    tags: ["glicolise", "krebs", "metabolismo", "respiracao celular"],
  },
  {
    id: "m002",
    titulo: "Operações Unitárias de Separação",
    disciplina: "Operações Unitárias",
    descricao: "Classificação das principais operações: destilação, absorção, extração, filtração e membranas.",
    imagem: null,
    tags: ["destilacao", "absorcao", "extracao", "separacao", "membranas"],
  },
  {
    id: "m003",
    titulo: "Tipos de Biorreatores",
    disciplina: "Reatores Bioquímicos",
    descricao: "Comparação entre batelada, batelada alimentada e contínuo (CSTR), com vantagens e aplicações.",
    imagem: null,
    tags: ["biorreator", "batelada", "cstr", "continuo", "fed-batch"],
  },
];
