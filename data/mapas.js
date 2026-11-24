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
    imagem: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=640&h=400&fit=crop&q=70",
    tags: ["glicolise", "krebs", "metabolismo", "respiracao celular"],
  },
  {
    id: "m002",
    titulo: "Operações Unitárias de Separação",
    disciplina: "Operações Unitárias",
    descricao: "Classificação das principais operações: destilação, absorção, extração, filtração e membranas.",
    imagem: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=640&h=400&fit=crop&q=70",
    tags: ["destilacao", "absorcao", "extracao", "separacao", "membranas"],
  },
  {
    id: "m003",
    titulo: "Tipos de Biorreatores",
    disciplina: "Reatores Bioquímicos",
    descricao: "Comparação entre batelada, batelada alimentada e contínuo (CSTR), com vantagens e aplicações.",
    imagem: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=640&h=400&fit=crop&q=70",
    tags: ["biorreator", "batelada", "cstr", "continuo", "fed-batch"],
  },
];
