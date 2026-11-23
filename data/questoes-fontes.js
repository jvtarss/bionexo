/* ============================================================
   BIONEXO - Fontes de questões em TSV
   ------------------------------------------------------------
   PARA ADICIONAR UM NOVO BANCO DE QUESTÕES:
   1. Exporte a planilha como .tsv (separado por TAB), com as
      MESMAS colunas do arquivo questoes-guidorizzi.tsv:
        ID, Unidade, Seção, Exercício, Item, Disciplina, Tópico,
        Dificuldade, Autor, Título, Edição, Volume, Editora, Ano,
        ISBN, Tipo, Enunciado, Alternativas, Correta, Resposta,
        Tolerância, Unidade_Resp, Resolução, Tags
   2. Salve o arquivo dentro de  data/questoes/
   3. Acrescente o caminho dele na lista abaixo.

   O site lê e entende o arquivo automaticamente: cria as
   questões, detecta o tipo (aberta, intervalo, sinal, V ou F,
   demonstração, múltipla) e percebe quando precisa desenhar a
   resposta (reta real / gráfico de função).

   Observação: a leitura de .tsv exige que o site esteja num
   servidor (GitHub Pages, ou "python -m http.server" local).
   Abrir o index.html por duplo-clique (file://) não carrega os
   .tsv por restrição do navegador — nesse caso só aparecem as
   questões embutidas em data/questoes.js.
   ============================================================ */
window.BIONEXO = window.BIONEXO || {};
window.BIONEXO.tsvFontes = [
  "data/questoes/guidorizzi-calculo1-v2.tsv",
  "data/questoes/guidorizzi-calculo1-v3.tsv",
  "data/questoes/guidorizzi-calculo1-v4.tsv",
  "data/questoes/guidorizzi-calculo1-v5.tsv",
  "data/questoes/questoes-guidorizzi.tsv",
];

/* Unifica rótulos de disciplina equivalentes (ex.: variações de "Cálculo"
   viram "Cálculo 1"). Chave = nome sem acento/minúsculo; valor = rótulo final. */
window.BIONEXO.disciplinaAlias = {
  "calculo": "Cálculo 1",
  "calculo 1": "Cálculo 1",
  "calculo i": "Cálculo 1",
  "calculo diferencial e integral": "Cálculo 1",
};
