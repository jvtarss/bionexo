/* ============================================================
   BIONEXO - Equipe de Monitores
   ------------------------------------------------------------
   COMO ADICIONAR UM MONITOR:
   Copie um bloco e cole antes do `];`.

   Campos:
     id         : identificador unico (ex.: "mon04")
     nome       : nome completo
     ciclo      : ciclo atual de monitoria (ex.: "2026/2")
     disciplinas: lista de disciplinas que o monitor atende
     email      : e-mail de contato (vira link mailto)
     telefone   : (opcional) telefone/WhatsApp. Use formato internacional
                  nos digitos, ex.: "+55 63 99999-0000"
     instagram  : (opcional) usuario sem @ (ex.: "bionexo.uft")
     lattes     : (opcional) URL do curriculo Lattes
   Deixe um campo como "" (vazio) ou remova a linha se nao quiser exibir.
   ============================================================ */
window.BIONEXO = window.BIONEXO || {};
window.BIONEXO.monitores = [
  {
    id: "mon01",
    nome: "João Victor Aires",
    ciclo: "2026/2",
    disciplinas: ["Bioquímica", "Microbiologia Industrial"],
    email: "joao.aires1@mail.uft.edu.br",
    telefone: "",
    instagram: "",
    lattes: "",
  },
  {
    id: "mon02",
    nome: "Nome Completo do Monitor",
    ciclo: "2026/2",
    disciplinas: ["Fenômenos de Transporte", "Operações Unitárias"],
    email: "monitor2@mail.uft.edu.br",
    telefone: "+55 63 99999-0000",
    instagram: "",
    lattes: "",
  },
  {
    id: "mon03",
    nome: "Nome Completo do Monitor",
    ciclo: "2026/2",
    disciplinas: ["Reatores Bioquímicos", "Termodinâmica"],
    email: "monitor3@mail.uft.edu.br",
    telefone: "",
    instagram: "bionexo.uft",
    lattes: "",
  },
];
