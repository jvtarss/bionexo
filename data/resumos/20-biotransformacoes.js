/* BIONEXO — Resumos complementares · Biocatálise e Biotransformações (r112–r115) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r112", num: 112,
  area: "Biocatálise e Biotransformações",
  disciplina: "Enzimologia Industrial",
  titulo: "Enzimas industriais: classificação e hidrolases",
  descricao: "A classificação EC, por que as hidrolases dominam a indústria, amilases, proteases, celulases, pectinases e lactase, com condições de uso, mecanismos e aplicações em alimentos, detergentes, têxteis e papel.",
  tags: ["Enzimologia Industrial", "Bioquímica", "enzima", "classificação EC", "hidrolase", "amilase", "glicoamilase", "pululanase", "protease", "subtilisina", "celulase", "endoglucanase", "celobiohidrolase", "beta-glicosidase", "LPMO", "pectinase", "xilanase", "lactase", "detergente", "panificação", "indústria têxtil"],
  conteudo: String.raw`
## Enzimas como catalisadores industriais

As enzimas são catalisadores proteicos com duas qualidades que a química convencional raramente alcança ao mesmo tempo: **eficiência** (aceleram reações por fatores de \(10^{6}\) a \(10^{17}\)) e **seletividade** (distinguem substratos, regiões da molécula e até enantiômeros). Além disso, trabalham em condições brandas, em meio aquoso, em temperaturas moderadas e pH próximo do neutro, o que reduz o consumo de energia e a geração de resíduos.

O mercado mundial de enzimas industriais é da ordem de bilhões de dólares por ano, e as **hidrolases** respondem por cerca de três quartos desse total.

## A classificação EC

Cada enzima recebe um número EC (Enzyme Commission) com quatro níveis. O primeiro define a classe de reação:

| Classe | Nome | O que faz | Exemplo |
|---|---|---|---|
| EC 1 | **Oxidorredutases** | transferem elétrons | álcool desidrogenase, lacase, catalase |
| EC 2 | **Transferases** | transferem grupos | quinases, transaminases |
| EC 3 | **Hidrolases** | quebram ligações com água | amilases, proteases, lipases, celulases |
| EC 4 | **Liases** | quebram ou formam ligações sem água nem oxidação | descarboxilases, aldolases |
| EC 5 | **Isomerases** | rearranjam a mesma molécula | glicose isomerase, racemases |
| EC 6 | **Ligases** | unem moléculas gastando ATP | DNA ligase, carboxilases |
| EC 7 | **Translocases** | transportam íons e moléculas através de membranas | ATPases de transporte |

A classe 7 foi criada em 2018. Na indústria, as hidrolases dominam porque não precisam de cofatores caros: o segundo substrato é a água, sempre disponível e gratuita.

## Amilases e a hidrólise do amido

A conversão do amido em açúcares fermentescíveis é um dos maiores processos enzimáticos do mundo, base da produção de xaropes, etanol de milho e cerveja.

| Enzima | Ação | Condições típicas |
|---|---|---|
| **α-amilase** | endo: corta ligações α-1,4 ao acaso, liquefazendo rapidamente | 90 a 105 °C, pH 6, com \(\ce{Ca^{2+}}\) estabilizante |
| **β-amilase** | exo: libera maltose a partir das pontas não redutoras | 55 a 65 °C |
| **Glicoamilase** | exo: libera glicose; também ataca α-1,6 lentamente | 60 °C, pH 4,5 |
| **Pululanase** | desramificante: hidrolisa especificamente α-1,6 | combinada à glicoamilase |

O processo industrial tem duas etapas: **liquefação**, com α-amilase termoestável (de *Bacillus licheniformis*, que suporta a temperatura de gelatinização do amido), e **sacarificação**, com glicoamilase (de *Aspergillus niger*), que leva horas e converte mais de 95% em glicose.

A seguir, a **glicose isomerase** (EC 5, imobilizada em reatores de leito fixo) converte parte da glicose em frutose, produzindo o **xarope de milho com alta frutose**. É o maior processo industrial com enzima imobilizada do mundo.

Na **panificação**, amilases fungicas produzem açúcares para a levedura e retardam o endurecimento do pão; na **cervejaria**, enzimas do próprio malte, complementadas por preparações comerciais, definem o perfil de açúcares e, portanto, o corpo e o teor alcoólico da cerveja.

## Proteases

São a maior fatia do mercado enzimático. Classificam-se pelo resíduo do sítio catalítico: **serina** (subtilisina, tripsina), **cisteína** (papaína, bromelina), **aspártico** (pepsina, quimosina) e **metaloproteases** (termolisina).

**Aplicações:**

- **Detergentes:** a subtilisina de *Bacillus* é alcalina (pH 9 a 11), estável em presença de surfactantes e agentes oxidantes, e remove manchas de origem proteica. Foi um dos primeiros alvos da **engenharia de proteínas**: variantes com substituições de aminoácidos específicos resistem muito melhor ao branqueador.
- **Laticínios:** a **quimosina** coagula o leite ao cortar um único ponto da κ-caseína, desestabilizando as micelas. Antes extraída do estômago de bezerros, hoje é majoritariamente produzida por fermentação com microrganismos recombinantes, um dos primeiros produtos da biotecnologia moderna aprovados para alimentos.
- **Hidrolisados proteicos:** proteases controladas produzem peptídeos para fórmulas infantis hipoalergênicas, suplementos e meios de cultura (peptonas).
- **Couro:** substituem produtos químicos agressivos na depilação e no amaciamento das peles.
- **Amaciamento de carnes:** papaína (do mamão) e bromelina (do abacaxi).

Um ponto prático: proteases **degradam outras enzimas**, inclusive elas mesmas (autólise). Em formulações mistas e em extratos celulares, é preciso considerar essa incompatibilidade e usar inibidores quando necessário.

<svg viewBox="0 0 740 330" xmlns="http://www.w3.org/2000/svg" role="img"><title>Amido e celulose</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Duas cadeias de glicose, dificuldades muito diferentes</text><rect x="30" y="54" width="330" height="130" rx="8" fill="#fff" stroke="#0a8f5e" stroke-width="1.4"/><text x="195" y="76" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">amido: ligacoes alfa, cadeia helicoidal</text><path d="M60,130 q11,-18 22,0 q11,18 22,0 q11,-18 22,0 q11,18 22,0 q11,-18 22,0 q11,18 22,0 q11,-18 22,0 q11,18 22,0" fill="none" stroke="#0a8f5e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="139" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="74.8" cy="121" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="89.6" cy="139" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="104.4" cy="121" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="119.2" cy="139" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="134" cy="121" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="148.8" cy="139" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="163.6" cy="121" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="178.4" cy="139" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="193.2" cy="121" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="208" cy="139" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="222.8" cy="121" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="237.6" cy="139" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="252.4" cy="121" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="267.2" cy="139" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="282" cy="121" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="296.8" cy="139" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><text x="195" y="164" font-size="9.8" text-anchor="middle" fill="#5c5c66">fácil de hidrolisar: alfa-amilase e glicoamilase</text><rect x="380" y="54" width="330" height="130" rx="8" fill="#fff" stroke="#d33a4e" stroke-width="1.4"/><text x="545" y="76" font-size="11" text-anchor="middle" fill="#d33a4e" font-weight="700">celulose: ligacoes beta, fibras cristalinas</text><line x1="404" y1="104" x2="686" y2="104" stroke="#d33a4e" stroke-width="3" stroke-linecap="round"/><line x1="410" y1="98" x2="410" y2="110" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="440" y1="98" x2="440" y2="110" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="470" y1="98" x2="470" y2="110" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="500" y1="98" x2="500" y2="110" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="530" y1="98" x2="530" y2="110" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="560" y1="98" x2="560" y2="110" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="590" y1="98" x2="590" y2="110" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="620" y1="98" x2="620" y2="110" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="650" y1="98" x2="650" y2="110" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="680" y1="98" x2="680" y2="110" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="404" y1="122" x2="686" y2="122" stroke="#d33a4e" stroke-width="3" stroke-linecap="round"/><line x1="410" y1="116" x2="410" y2="128" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="440" y1="116" x2="440" y2="128" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="470" y1="116" x2="470" y2="128" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="500" y1="116" x2="500" y2="128" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="530" y1="116" x2="530" y2="128" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="560" y1="116" x2="560" y2="128" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="590" y1="116" x2="590" y2="128" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="620" y1="116" x2="620" y2="128" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="650" y1="116" x2="650" y2="128" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="680" y1="116" x2="680" y2="128" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="404" y1="140" x2="686" y2="140" stroke="#d33a4e" stroke-width="3" stroke-linecap="round"/><line x1="410" y1="134" x2="410" y2="146" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="440" y1="134" x2="440" y2="146" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="470" y1="134" x2="470" y2="146" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="500" y1="134" x2="500" y2="146" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="530" y1="134" x2="530" y2="146" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="560" y1="134" x2="560" y2="146" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="590" y1="134" x2="590" y2="146" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="620" y1="134" x2="620" y2="146" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="650" y1="134" x2="650" y2="146" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="680" y1="134" x2="680" y2="146" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="404" y1="158" x2="686" y2="158" stroke="#d33a4e" stroke-width="3" stroke-linecap="round"/><line x1="410" y1="152" x2="410" y2="164" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="440" y1="152" x2="440" y2="164" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="470" y1="152" x2="470" y2="164" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="500" y1="152" x2="500" y2="164" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="530" y1="152" x2="530" y2="164" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="560" y1="152" x2="560" y2="164" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="590" y1="152" x2="590" y2="164" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="620" y1="152" x2="620" y2="164" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="650" y1="152" x2="650" y2="164" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><line x1="680" y1="152" x2="680" y2="164" stroke="#f0b8c0" stroke-width="1.4" stroke-linecap="round"/><text x="545" y="170" font-size="9.8" text-anchor="middle" fill="#5c5c66">recalcitrante: exige um sistema de varias enzimas</text><text x="30" y="212" font-size="12" text-anchor="start" fill="#333333" font-weight="700">o coquetel que degrada a celulose</text><rect x="30" y="228" width="340" height="34" rx="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><text x="42" y="250" font-size="10.6" text-anchor="start" fill="#0083cb" font-weight="700">endoglucanase</text><text x="164" y="250" font-size="9.4" text-anchor="start" fill="#5c5c66">corta ao acaso e cria novas pontas</text><rect x="386" y="228" width="340" height="34" rx="7" fill="#fff" stroke="#a300bc" stroke-width="1.3"/><text x="398" y="250" font-size="10.6" text-anchor="start" fill="#a300bc" font-weight="700">celobiohidrolase</text><text x="520" y="250" font-size="9.4" text-anchor="start" fill="#5c5c66">avanca pelas pontas liberando celobiose</text><rect x="30" y="270" width="340" height="34" rx="7" fill="#fff" stroke="#f40086" stroke-width="1.3"/><text x="42" y="292" font-size="10.6" text-anchor="start" fill="#f40086" font-weight="700">beta-glicosidase</text><text x="164" y="292" font-size="9.4" text-anchor="start" fill="#5c5c66">quebra a celobiose em glicose</text><rect x="386" y="270" width="340" height="34" rx="7" fill="#fff" stroke="#c67600" stroke-width="1.3"/><text x="398" y="292" font-size="10.6" text-anchor="start" fill="#c67600" font-weight="700">LPMO</text><text x="520" y="292" font-size="9.4" text-anchor="start" fill="#5c5c66">oxida a regiao cristalina e abre o ataque</text><text x="20" y="322" font-size="10.6" text-anchor="start" fill="#5c5c66">Sem a beta-glicosidase, a celobiose se acumula e inibe as demais: por isso o sistema so funciona em conjunto.</text></svg>
Amido e celulose são polímeros de glicose, mas a estrutura muda tudo.

## Celulases e a biomassa lignocelulósica

A celulose é um polímero linear de glicose com ligações β-1,4, organizado em microfibrilas **cristalinas** e envolvido por hemicelulose e lignina. Essa arquitetura, chamada de **recalcitrância**, é o grande obstáculo ao aproveitamento da biomassa.

A hidrólise completa exige um **sistema sinérgico**:

| Enzima | Ação |
|---|---|
| **Endoglucanase** (EG) | corta ao acaso nas regiões amorfas, criando novas pontas |
| **Celobiohidrolase** (CBH, exoglucanase) | avança processivamente pelas pontas, liberando celobiose |
| **β-glicosidase** | hidrolisa celobiose em glicose, evitando a inibição das anteriores |
| **LPMO** (monoxigenase lítica de polissacarídeo) | **oxida** a cadeia cristalina, com cobre no sítio ativo, abrindo pontos de ataque |

A descoberta das **LPMOs**, em 2010, mudou o entendimento do processo: até então, acreditava-se que a degradação era puramente hidrolítica. Elas aumentam muito a eficiência dos coquetéis comerciais e explicam por que a adição de certos agentes redutores melhora o desempenho.

O fungo *Trichoderma reesei* é o produtor industrial clássico de celulases, com linhagens que secretam dezenas de gramas de proteína por litro.

**No etanol de segunda geração**, a sequência é: **pré-tratamento** (explosão a vapor, ácido diluído, organossolve ou alcalino) para romper a estrutura e remover ou redistribuir a lignina; **hidrólise enzimática**; e **fermentação**, que pode ser separada (SHF) ou simultânea à hidrólise (SSF), configuração que reduz a inibição pelo produto. Os principais desafios econômicos continuam sendo o custo das enzimas, a adsorção improdutiva delas na lignina e a presença de inibidores (tema 108).

Celulases também são usadas em **detergentes** (removem microfibrilas soltas e devolvem a cor viva ao tecido), na **indústria têxtil** (o acabamento desbotado de jeans, o *biostoning*, substituiu a pedra-pomes) e em **rações**, melhorando a digestibilidade.

## Pectinases, xilanases e lactase

- **Pectinases:** degradam a pectina da parede celular vegetal. Na indústria de sucos, aumentam o rendimento da prensagem, reduzem a viscosidade e **clarificam** o produto, evitando a turbidez pós-engarrafamento. Também são usadas na extração de óleos e no processamento de café e cacau.
- **Xilanases:** hidrolisam a hemicelulose. Na indústria de **papel e celulose**, o pré-branqueamento enzimático facilita a remoção da lignina residual e reduz o consumo de cloro e seus derivados, diminuindo a geração de organoclorados. Em panificação, melhoram o manuseio da massa e o volume do pão. Em rações para aves e suínos, reduzem a viscosidade intestinal causada por arabinoxilanas.
- **Lactase (β-galactosidase):** hidrolisa a lactose em glicose e galactose. Permite produzir leite e derivados **sem lactose** para pessoas com deficiência da enzima intestinal, além de aumentar o poder adoçante e evitar a cristalização da lactose em sorvetes e doce de leite.

## Fontes e produção

A maioria das enzimas industriais é produzida por **fermentação microbiana** (tema 46), com fungos como *Aspergillus* e *Trichoderma* e bactérias como *Bacillus*, geralmente em linhagens recombinantes que superexpressam a enzima e secretam-na no meio, facilitando a recuperação. Enzimas de **extremófilos** (termófilos, alcalófilos, halófilos) são especialmente valiosas pela estabilidade em condições industriais, e a **metagenômica** permite buscar novas enzimas diretamente no DNA ambiental, sem precisar cultivar os microrganismos.

> **Atenção, erros comuns:**
> Supor que uma enzima funciona bem fora da sua faixa de pH e temperatura ótimos: fora dela, a atividade cai e a desnaturação pode ser rápida (tema 27).
> Esquecer a inibição pelo produto, especialmente da celobiose sobre as celulases.
> Tratar "celulase" como uma única enzima: é um sistema de várias atividades complementares.

## Para fixar

- Hidrolases dominam o mercado porque usam água como segundo substrato.
- Amido: α-amilase liquefaz, glicoamilase sacarifica, glicose isomerase produz frutose.
- Celulose exige sinergia entre endoglucanases, celobiohidrolases, β-glicosidases e LPMOs.
`,
  referencias: [
    "SAID, S.; PIETRO, R. C. L. R. **Enzimas como agentes biotecnológicos**. 2. ed. Ribeirão Preto: Legis Summa, 2010.",
    "SCHMIDELL, W. et al. (coord.). **Biotecnologia industrial**. v. 3: Processos fermentativos e enzimáticos. São Paulo: Blucher, 2001.",
    "KIRK, O.; BORCHERT, T. V.; FUGLSANG, C. C. Industrial enzyme applications. **Current Opinion in Biotechnology**, v. 13, n. 4, p. 345-351, 2002.",
    "VAAJE-KOLSTAD, G. et al. An oxidative enzyme boosting the enzymatic conversion of recalcitrant polysaccharides. **Science**, v. 330, n. 6001, p. 219-222, 2010.",
  ],
},
{
  id: "r113", num: 113,
  area: "Biocatálise e Biotransformações",
  disciplina: "Enzimologia Industrial",
  titulo: "Lipases e biocatálise em meio não aquoso",
  descricao: "Estrutura e ativação interfacial das lipases, a tríade catalítica e o mecanismo, hidrólise, esterificação e transesterificação, biodiesel enzimático, resolução de racematos e seletividade, e a biocatálise em solventes orgânicos.",
  tags: ["Enzimologia Industrial", "Biocatálise", "lipase", "ativação interfacial", "tríade catalítica", "serina", "acil-enzima", "esterificação", "transesterificação", "interesterificação", "biodiesel", "Candida antarctica", "CALB", "Novozym 435", "resolução cinética", "enantiosseletividade", "regra de Kazlauskas", "solvente orgânico", "log P", "water activity", "imobilização"],
  conteudo: String.raw`
## O que torna as lipases especiais

As **lipases** (triacilglicerol acil-hidrolases, EC 3.1.1.3) hidrolisam ligações éster de triacilgliceróis. Elas se destacam entre todas as enzimas industriais por uma combinação rara de propriedades:

- aceitam uma **gama enorme de substratos**, muito além dos seus substratos naturais;
- funcionam bem em **solventes orgânicos** e com pouquíssima água;
- não precisam de **cofatores**;
- são frequentemente **enantiosseletivas** e **regiosseletivas**;
- catalisam a reação nos **dois sentidos**, hidrólise e síntese, conforme a quantidade de água do meio.

## Estrutura e ativação interfacial

As lipases têm o enovelamento **α/β-hidrolase** e uma **tríade catalítica** Ser-His-Asp (ou Glu), a mesma das proteases de serina, um exemplo clássico de evolução convergente.

Muitas lipases possuem uma **tampa** (*lid*), uma alça anfipática que cobre o sítio ativo. Em meio aquoso homogêneo, a tampa fica fechada e a enzima pouco ativa. Ao encontrar uma **interface** entre água e óleo, a tampa se abre, expondo o sítio ativo e uma superfície hidrofóbica: é a **ativação interfacial**, que explica por que a atividade das lipases aumenta abruptamente acima da concentração em que o substrato forma emulsão. Algumas lipases, como a **lipase B de *Candida antarctica* (CALB)**, não apresentam ativação interfacial clara, o que as torna especialmente úteis com substratos solúveis.

**Mecanismo:** a serina ataca o carbono da carbonila, forma-se um intermediário tetraédrico estabilizado pela "cavidade do oxiânion", libera-se o álcool e fica a **acil-enzima**. O segundo passo é o ataque de um nucleófilo a esse intermediário:

| Nucleófilo | Reação | Produto |
|---|---|---|
| Água | hidrólise | ácido graxo |
| Álcool | esterificação ou alcoólise | éster |
| Outro éster | interesterificação | novos triacilgliceróis |
| Amina | aminólise | amida |

**É a disponibilidade de água que decide o sentido.** Com muita água, hidrólise; com pouca, síntese. Isso faz da **atividade de água** (\(a_w\)) o parâmetro de controle mais importante nesses processos, mais relevante que a quantidade absoluta de água.

<svg viewBox="0 0 740 310" xmlns="http://www.w3.org/2000/svg" role="img"><title>Lipases</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">A quantidade de água decide o sentido da reação</text><rect x="30" y="56" width="310" height="150" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="185" y="78" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">muita água</text><text x="185" y="100" font-size="14" text-anchor="middle" fill="#333333" font-weight="700">hidrólise</text><line x1="90" y1="126" x2="280" y2="126" stroke="#0083cb" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-az)"/><text x="185" y="148" font-size="10" text-anchor="middle" fill="#5c5c66">éster + água vira ácido + álcool</text><text x="185" y="180" font-size="10" text-anchor="middle" fill="#0083cb" font-weight="600">detergentes, sabor de queijo</text><rect x="400" y="56" width="310" height="150" rx="8" fill="#fff" stroke="#0a8f5e" stroke-width="1.4"/><text x="555" y="78" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="700">pouca água, meio orgânico</text><text x="555" y="100" font-size="14" text-anchor="middle" fill="#333333" font-weight="700">esterificação</text><line x1="650" y1="126" x2="460" y2="126" stroke="#0a8f5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="555" y="148" font-size="10" text-anchor="middle" fill="#5c5c66">ácido + álcool vira éster + água</text><text x="555" y="180" font-size="10" text-anchor="middle" fill="#0a8f5e" font-weight="600">biodiesel, aromas, gorduras estruturadas</text><circle cx="370" cy="126" r="24" fill="#fdf1de" stroke="#c67600" stroke-width="1.8"/><text x="370" y="131" font-size="10" text-anchor="middle" fill="#c67600" font-weight="700">lipase</text><rect x="20" y="220" width="700" height="82" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="242" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">por que as lipases são tao versateis</text><circle cx="33" cy="266" r="4" fill="#0a8f5e" stroke="#0a8f5e" stroke-width="1.4"/><text x="41" y="270" font-size="9.6" text-anchor="start" fill="#333333">aceitam muitos substratos</text><circle cx="203" cy="266" r="4" fill="#0083cb" stroke="#0083cb" stroke-width="1.4"/><text x="211" y="270" font-size="9.6" text-anchor="start" fill="#333333">dispensam cofatores</text><circle cx="373" cy="266" r="4" fill="#a300bc" stroke="#a300bc" stroke-width="1.4"/><text x="381" y="270" font-size="9.6" text-anchor="start" fill="#333333">funcionam em solventes orgânicos</text><circle cx="543" cy="266" r="4" fill="#f40086" stroke="#f40086" stroke-width="1.4"/><text x="551" y="270" font-size="9.6" text-anchor="start" fill="#333333">distinguem enantiomeros</text><text x="370" y="294" font-size="10.2" text-anchor="middle" fill="#5c5c66">A última propriedade e a mais valiosa: separa o enantiomero ativo de um farmaco do que seria inerte ou nocivo.</text></svg>
A disponibilidade de água decide se a lipase hidrolisa ou sintetiza.

## Principais aplicações

**Biodiesel enzimático.** A transesterificação de óleos com metanol ou etanol produz ésteres (biodiesel) e glicerol. A rota química alcalina é rápida e barata, mas exige matéria-prima com baixo teor de ácidos graxos livres e umidade, porque forma sabão. A rota enzimática:

- tolera **óleos residuais e gorduras ácidas**, de baixo custo;
- dispensa a neutralização e gera **glicerol mais puro**;
- opera em temperaturas amenas (30 a 50 °C), com menor consumo de energia;
- mas é mais lenta, e o **metanol inativa** a lipase, o que se contorna adicionando-o em etapas ou usando etanol.

Hoje já existem plantas industriais operando com lipases imobilizadas ou com enzimas líquidas de baixo custo.

**Gorduras estruturadas.** A **interesterificação** enzimática reorganiza os ácidos graxos nos triacilgliceróis, produzindo gorduras com o ponto de fusão e a textura desejados **sem gerar gorduras trans**, ao contrário da hidrogenação parcial. É assim que se fabricam substitutos da manteiga de cacau e gorduras para margarinas e confeitaria. Lipases **1,3-específicas**, que atacam apenas as posições externas do glicerol, são essenciais nesses processos, e também na produção de lipídios estruturados do tipo OPO para fórmulas infantis, que imitam a distribuição do leite materno.

**Detergentes.** Lipases removem manchas de gordura em baixa temperatura, contribuindo para lavagens mais econômicas.

**Ésteres de aroma e cosméticos.** Acetato de isoamila (banana), butirato de etila (abacaxi) e ésteres emolientes como o miristato de isopropila são sintetizados enzimaticamente e podem ser rotulados como **naturais** quando o substrato é de origem natural, o que agrega valor frente aos equivalentes sintéticos.

**Laticínios.** Lipases desenvolvem o sabor característico de queijos maturados pela liberação controlada de ácidos graxos de cadeia curta.

## Resolução de racematos

Esta é talvez a aplicação mais valiosa. Muitos fármacos são **quirais** (tema 16), e com frequência apenas um enantiômero é ativo, enquanto o outro é inerte ou prejudicial. Por isso as agências reguladoras exigem o composto enantiomericamente puro.

Na **resolução cinética**, a lipase converte preferencialmente um dos enantiômeros de uma mistura racêmica, permitindo separar o produto do substrato não reagido. A seletividade é medida pela **razão enantiomérica** \(E\): valores acima de 100 são considerados excelentes, e acima de 20 já são úteis.

A limitação é que o rendimento máximo de cada enantiômero é de 50%. Duas soluções:

- **resolução cinética dinâmica (DKR):** combina a lipase com um catalisador que **racemiza** continuamente o substrato lento, permitindo converter até 100% do material no enantiômero desejado;
- **dessimetrização** de substratos proquirais, que também pode chegar a 100%.

A **regra de Kazlauskas** prevê, para muitas lipases, qual enantiômero de um álcool secundário reage mais rápido, com base no tamanho relativo dos grupos ligados ao carbono estereogênico: uma ferramenta prática para planejar sínteses.

Exemplos industriais incluem intermediários de anti-hipertensivos, do antiviral abacavir e de pesticidas quirais.

## Biocatálise em solventes orgânicos

Trabalhar com pouca ou nenhuma água traz vantagens claras:

- desloca o equilíbrio para a **síntese**;
- permite usar substratos **insolúveis em água**;
- reduz reações laterais hidrolíticas e contaminação microbiana;
- facilita a recuperação de produtos voláteis e da enzima, que fica insolúvel e pode ser filtrada.

Alguns princípios práticos:

- A enzima precisa de uma camada de **água essencial** ligada à proteína para manter a flexibilidade conformacional. Totalmente desidratada, ela fica rígida e inativa.
- Solventes **hidrofóbicos** (log P maior que 4, como hexano, heptano, isoctano) preservam melhor a atividade, porque não arrancam a água essencial. Solventes polares como metanol, acetona e DMSO costumam ser desnaturantes.
- A enzima "lembra" o pH da solução da qual foi liofilizada: é o **pH memory**. Por isso, prepara-se a enzima em tampão no pH ótimo antes de secá-la.
- **Líquidos iônicos** e **\(\ce{CO2}\) supercrítico** (tema 75) são alternativas estudadas, com boa compatibilidade com várias lipases e fácil separação do produto.

## Imobilização

A imobilização é quase obrigatória para uso industrial. Os métodos são a **adsorção** em suportes hidrofóbicos (muito usada para lipases, porque a adsorção pela região da tampa já deixa a enzima na conformação aberta e hiperativa), a **ligação covalente**, o **aprisionamento** em géis e a **reticulação** (CLEAs, agregados reticulados sem suporte).

Vantagens: reutilização por dezenas ou centenas de ciclos, operação em reatores contínuos de leito fixo, maior estabilidade térmica e facilidade de separar a enzima do produto. O preço é alguma perda de atividade e, em reatores com partículas grandes, limitações por difusão (tema 55).

O biocatalisador mais usado do mundo é a **CALB imobilizada em resina acrílica** (comercializada como Novozym 435), referência em síntese orgânica enzimática.

> **Atenção, erros comuns:**
> Medir atividade de lipase em substrato solúvel e esperar o mesmo desempenho numa emulsão, ou vice-versa.
> Esquecer que a água é reagente na hidrólise e **produto** na esterificação: removê-la desloca o equilíbrio.
> Usar solventes polares miscíveis em água, que removem a água essencial e desnaturam a enzima.

## Para fixar

- Lipases têm tríade Ser-His-Asp e, muitas, uma tampa que se abre na interface.
- A quantidade de água decide entre hidrólise e síntese; em meio orgânico, as lipases esterificam e transesterificam.
- São enantiosseletivas (resolução de racematos) e, imobilizadas, operam por muitos ciclos.
`,
  referencias: [
    "FABER, K. **Biotransformations in organic chemistry**. 7. ed. Berlin: Springer, 2018.",
    "REETZ, M. T. Lipases as practical biocatalysts. **Current Opinion in Chemical Biology**, v. 6, n. 2, p. 145-150, 2002.",
    "KLIBANOV, A. M. Improving enzymes by using them in organic solvents. **Nature**, v. 409, p. 241-246, 2001.",
    "KAZLAUSKAS, R. J. et al. A rule to predict which enantiomer of a secondary alcohol reacts faster in reactions catalyzed by cholesterol esterase, lipase from *Pseudomonas cepacia* and lipase from *Candida rugosa*. **Journal of Organic Chemistry**, v. 56, n. 8, p. 2656-2665, 1991.",
  ],
},
{
  id: "r114", num: 114,
  area: "Biocatálise e Biotransformações",
  disciplina: "Biotecnologia Industrial",
  titulo: "Biotransformações com células íntegras e oxidorredutases",
  descricao: "Quando usar células inteiras em vez de enzimas isoladas, a regeneração de cofatores, redução assimétrica de cetonas, hidroxilações por citocromos P450, transaminases e aminações redutivas, e exemplos industriais de síntese de fármacos e esteroides.",
  tags: ["Biocatálise", "Biotecnologia Industrial", "biotransformação", "célula íntegra", "oxidorredutase", "cetorredutase", "regeneração de cofator", "NADPH", "glicose desidrogenase", "formiato desidrogenase", "citocromo P450", "hidroxilação", "esteroide", "transaminase", "aminação redutiva", "sitagliptina", "atorvastatina", "evolução dirigida", "nitrilase", "ácido 6-aminopenicilânico", "vitamina C", "Reichstein"],
  conteudo: String.raw`
## Enzima isolada ou célula inteira?

Uma **biotransformação** é a conversão de um substrato em um produto de maior valor por um ou poucos passos enzimáticos, diferentemente da fermentação, em que o produto é sintetizado de novo a partir de uma fonte de carbono simples.

| | Enzima isolada | Célula íntegra |
|---|---|---|
| Cofatores | precisam ser adicionados e regenerados | **regenerados pelo metabolismo** |
| Reações em várias etapas | difícil | natural |
| Custo de preparo | purificação cara | células baratas, obtidas por fermentação |
| Reações laterais | poucas | enzimas endógenas podem consumir substrato ou produto |
| Transferência de massa | sem barreira | a membrana pode limitar a entrada e a saída |
| Tolerância a solventes | ajustável | geralmente menor |

A regra prática: usa-se a **enzima isolada** quando a reação é simples, não precisa de cofator (hidrolases, temas 112 e 113) ou exige meio não aquoso; usa-se a **célula íntegra** quando a reação depende de cofatores caros ou de várias etapas em sequência.

## O problema dos cofatores

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Regeneracao de cofator</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">O cofator e caro demais para ser consumido: precisa ser reciclado</text><rect x="120" y="70" width="160" height="36" rx="8" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.4"/><text x="200" y="92.5" font-size="11.5" text-anchor="middle" fill="#0083cb" font-weight="700">cetona</text><rect x="120" y="192" width="160" height="36" rx="8" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.4"/><text x="200" y="214.5" font-size="11.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">álcool quiral</text><line x1="200" y1="108" x2="200" y2="190" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="124" y="150" font-size="10.5" text-anchor="end" fill="#0a8f5e" font-weight="700">cetorredutase</text><rect x="460" y="70" width="160" height="36" rx="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.4"/><text x="540" y="92.5" font-size="11.5" text-anchor="middle" fill="#c67600" font-weight="700">glicose</text><rect x="460" y="192" width="160" height="36" rx="8" fill="#fff" stroke="#c67600" stroke-width="1.4"/><text x="540" y="214.5" font-size="11" text-anchor="middle" fill="#c67600" font-weight="600">gluconolactona</text><line x1="540" y1="108" x2="540" y2="190" stroke="#c67600" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-la)"/><text x="616" y="150" font-size="10.5" text-anchor="start" fill="#c67600" font-weight="700">glicose desidrogenase</text><path d="M319.771,121 A58,58 0 0 1 420.229,121" fill="none" stroke="#a300bc" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-rx)"/><path d="M420.229,179 A58,58 0 0 1 319.771,179" fill="none" stroke="#a300bc" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-rx)"/><text x="370" y="84" font-size="12" text-anchor="middle" fill="#a300bc" font-weight="700">NADPH</text><text x="370" y="222" font-size="12" text-anchor="middle" fill="#a300bc" font-weight="700">NADP+</text><text x="370" y="150" font-size="10.5" text-anchor="middle" fill="#5c5c66">ciclo do</text><text x="370" y="164" font-size="10.5" text-anchor="middle" fill="#5c5c66">cofator</text><rect x="20" y="244" width="700" height="52" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="264" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">uma molécula de cofator serve a milhares de ciclos</text><text x="370" y="284" font-size="10.4" text-anchor="middle" fill="#5c5c66">Na célula intreira isso sai de graca, pelo próprio metabolismo. Com enzimas isoladas, acopla-se uma segunda reação.</text></svg>
A reação de interesse e a reação auxiliar compartilham o mesmo cofator, que circula entre elas.

As oxidorredutases (EC 1) precisam de NAD(P)H ou NAD(P)⁺. Esses cofatores custam caro demais para serem usados em quantidade estequiométrica: é preciso **regenerá-los** continuamente, de modo que uma pequena quantidade seja reciclada centenas ou milhares de vezes. O desempenho é medido pelo **número de ciclos totais** (TTN), e valores acima de \(10^3\) a \(10^5\) são desejáveis industrialmente.

**Sistemas de regeneração (substrato acoplado ou enzima acoplada):**

| Sistema | Reação auxiliar | Vantagem |
|---|---|---|
| **Glicose desidrogenase (GDH)** | glicose → gluconolactona | barata, regenera NADPH, equilíbrio muito favorável |
| **Formiato desidrogenase (FDH)** | formiato → \(\ce{CO2}\) | o produto é um gás que escapa, deslocando o equilíbrio |
| **Fosfito desidrogenase** | fosfito → fosfato | irreversível, alto TTN |
| **Substrato acoplado** | isopropanol → acetona, pela mesma enzima | simples, mas o equilíbrio limita a conversão |
| **Célula íntegra** | glicólise e metabolismo central | nenhum componente extra a comprar |

## Redução assimétrica de cetonas

É a aplicação mais consolidada. **Cetorredutases** (também chamadas de álcool desidrogenases) convertem uma cetona proquiral no álcool correspondente com excesso enantiomérico frequentemente acima de 99%, algo difícil e caro de obter por catálise química, que exigiria metais nobres e ligantes quirais.

A estereoquímica do produto segue a **regra de Prelog** (ataque do hidreto pela face *re*) ou é anti-Prelog, conforme a enzima. Hoje existem coleções comerciais de cetorredutases que cobrem os dois sentidos, permitindo escolher o enantiômero desejado.

**Exemplo industrial: atorvastatina.** A síntese do intermediário quiral do medicamento para colesterol usa uma cetorredutase combinada com GDH, e, em outra etapa, uma **halohidrina desalogenase** evoluída, que substitui uma rota química que gerava resíduos tóxicos. O processo recebeu prêmios de química verde.

## Hidroxilações: os citocromos P450

Introduzir um átomo de oxigênio num carbono não ativado é uma das reações mais difíceis da química orgânica, e as enzimas **P450** fazem isso com regiosseletividade e estereosseletividade notáveis:

\[ \ce{R-H + O2 + NAD(P)H + H+ -> R-OH + H2O + NAD(P)+} \]

São usadas quase sempre em **células íntegras**, porque dependem de NADPH, de proteínas parceiras que transferem elétrons e, muitas vezes, de ancoragem em membrana.

**O caso clássico dos esteroides.** A síntese química da cortisona, nos anos 1940, exigia mais de 30 etapas e era proibitivamente cara. Em 1952, pesquisadores da Upjohn descobriram que o fungo *Rhizopus arrhizus* hidroxila a progesterona na posição **11α** em uma única etapa. O custo do produto caiu de centenas de dólares por grama para poucos dólares, e a terapia com corticosteroides tornou-se acessível. Até hoje, a produção industrial de corticosteroides combina etapas químicas e microbianas, incluindo a degradação seletiva da cadeia lateral de fitosteróis por *Mycobacterium*.

**Outros usos:** produção de metabólitos de fármacos para estudos toxicológicos (as mesmas P450 humanas atuam no fígado), hidroxilação de vitamina D e funcionalização de terpenos.

## Transaminases e a síntese de aminas quirais

As **transaminases** (ou aminotransferases, EC 2.6.1) transferem um grupo amino de um doador para uma cetona, usando fosfato de piridoxal, e produzem **aminas quirais**, presentes em grande parte dos fármacos.

O exemplo mais celebrado é a **sitagliptina**, medicamento para diabetes tipo 2. A rota original usava hidrogenação com um catalisador de ródio a alta pressão, seguida de purificação para remover o metal. Pesquisadores da Merck e da Codexis aplicaram **evolução dirigida** a uma transaminase que, inicialmente, nem aceitava o substrato: após 11 rodadas de mutagênese e triagem, com 27 substituições de aminoácidos, obtiveram uma enzima que converte a cetona volumosa com 99,95% de excesso enantiomérico, em meio com 50% de DMSO e alta concentração de substrato. O processo aumentou o rendimento em 10% a 13%, elevou a produtividade em 53% e eliminou o metal pesado.

A **evolução dirigida** (ciclos de mutagênese aleatória ou dirigida, expressão e triagem de alta vazão) rendeu a Frances Arnold o Nobel de Química de 2018, dividido com George Smith e Gregory Winter. Ela é hoje a principal ferramenta para adaptar enzimas a substratos e condições que a natureza nunca enfrentou, e vem sendo acelerada por modelos computacionais e de aprendizado de máquina.

Outras enzimas formadoras de ligação carbono-nitrogênio incluem as **aminases redutivas** (RedAm e IRED), que fazem aminação redutiva direta, e as **amônia liases**.

## Outros exemplos consagrados

- **Ácido 6-aminopenicilânico (6-APA):** a **penicilina acilase** remove a cadeia lateral da penicilina G, gerando o núcleo a partir do qual se produzem as penicilinas semissintéticas (amoxicilina, ampicilina). A rota química exigia temperaturas de −40 °C e cloreto de fosforila; a enzimática ocorre em água, à temperatura ambiente, e é um dos maiores processos biocatalíticos do mundo.
- **Acrilamida:** a **nitrila hidratase** de *Rhodococcus rhodochrous* converte acrilonitrila em acrilamida com conversão praticamente total e sem subprodutos, superando a rota com ácido sulfúrico. É produzida em escala de centenas de milhares de toneladas por ano.
- **Vitamina C:** o **processo de Reichstein** clássico combina uma etapa microbiana (oxidação do D-sorbitol a L-sorbose por *Gluconobacter oxydans*) com etapas químicas. Processos modernos de dois estágios usam duas fermentações sucessivas, reduzindo solventes e energia.
- **Ácido glicônico, xilitol, 1,3-propanodiol** e muitos ácidos orgânicos também são obtidos por rotas com células íntegras.

## Engenharia de processo

Alguns cuidados recorrentes:

- **Toxicidade e baixa solubilidade do substrato:** resolvidas com sistemas bifásicos (uma fase orgânica funciona como reservatório, mantendo baixa a concentração na fase aquosa), com ciclodextrinas ou com alimentação controlada.
- **Inibição pelo produto:** remoção contínua por adsorção em resina, extração ou pervaporação (**ISPR**, remoção in situ do produto).
- **Permeabilização de células:** tratamentos brandos com solventes ou surfactantes facilitam a entrada do substrato quando a membrana é a barreira.
- **Células em repouso:** células cultivadas e depois suspensas em tampão, sem crescer, concentram o metabolismo na reação de interesse e simplificam a recuperação do produto.

> **Atenção, erros comuns:**
> Esquecer de incluir o sistema de regeneração de cofator ao planejar uma reação com oxidorredutase.
> Supor que a enzima isolada sempre supera a célula íntegra: para reações com cofator, raramente compensa.
> Ignorar que enzimas endógenas da célula podem reduzir ou oxidar o produto desejado, diminuindo a pureza.

## Para fixar

- Células íntegras regeneram cofatores de graça; enzimas isoladas exigem GDH, FDH ou substrato acoplado.
- Cetorredutases, P450 e transaminases produzem álcoois, hidroxilações e aminas quirais com seletividade altíssima.
- A evolução dirigida adapta enzimas a substratos e condições industriais, como no processo da sitagliptina.
`,
  referencias: [
    "FABER, K. **Biotransformations in organic chemistry**. 7. ed. Berlin: Springer, 2018.",
    "SAVILE, C. K. et al. Biocatalytic asymmetric synthesis of chiral amines from ketones applied to sitagliptin manufacture. **Science**, v. 329, n. 5989, p. 305-309, 2010.",
    "BORNSCHEUER, U. T. et al. Engineering the third wave of biocatalysis. **Nature**, v. 485, p. 185-194, 2012.",
    "SHELDON, R. A.; WOODLEY, J. M. Role of biocatalysis in sustainable chemistry. **Chemical Reviews**, v. 118, n. 2, p. 801-838, 2018.",
  ],
},
{
  id: "r115", num: 115,
  area: "Biocatálise e Biotransformações",
  disciplina: "Biotecnologia Industrial",
  titulo: "Biotransformação de resíduos e biorremediação",
  descricao: "Valorização de resíduos agroindustriais, fermentação em estado sólido, degradação microbiana de hidrocarbonetos e poluentes, enzimas ligninolíticas, biorremediação e fitorremediação, e a lógica da biorrefinaria.",
  tags: ["Biotecnologia Industrial", "Biocatálise", "resíduo agroindustrial", "fermentação em estado sólido", "bagaço", "vinhaça", "torta de filtro", "biorrefinaria", "economia circular", "biorremediação", "hidrocarboneto", "biossurfactante", "lacase", "peroxidase", "fungos de podridão branca", "corante", "plástico", "PETase", "fitorremediação", "compostagem"],
  conteudo: String.raw`
## Resíduo como matéria-prima

<svg viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg" role="img"><title>Biorrefinaria</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Biorrefinaria: extrair valor em cascata</text><rect x="290" y="58" width="160" height="44" rx="8" fill="#fff" stroke="#f40086" stroke-width="1.5"/><text x="370" y="78" font-size="11" text-anchor="middle" fill="#f40086" font-weight="700">compostos bioativos e enzimas</text><text x="370" y="94" font-size="9.4" text-anchor="middle" fill="#5c5c66">pouco volume, valor muito alto</text><rect x="230" y="110" width="280" height="44" rx="8" fill="#fff" stroke="#a300bc" stroke-width="1.5"/><text x="370" y="130" font-size="11" text-anchor="middle" fill="#a300bc" font-weight="700">proteínas e ingredientes</text><text x="370" y="146" font-size="9.4" text-anchor="middle" fill="#5c5c66">valor alto</text><rect x="170" y="162" width="400" height="44" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.5"/><text x="370" y="182" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">ácidos orgânicos e combustiveis</text><text x="370" y="198" font-size="9.4" text-anchor="middle" fill="#5c5c66">volume grande, valor médio</text><rect x="110" y="214" width="520" height="44" rx="8" fill="#fff" stroke="#0a8f5e" stroke-width="1.5"/><text x="370" y="234" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">biogás e energia</text><text x="370" y="250" font-size="9.4" text-anchor="middle" fill="#5c5c66">aproveita o que sobra</text><line x1="76" y1="62" x2="76" y2="266" stroke="#333333" stroke-width="2" stroke-linecap="round" marker-end="url(#a-ti)"/><text x="76" y="50" font-size="10" text-anchor="middle" fill="#5c5c66">ordem de prioridade</text><rect x="20" y="276" width="700" height="42" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="296" font-size="10.6" text-anchor="middle" fill="#333333">O mesmo resíduo rende mais quando cada fracao vai para o produto de maior valor possível,</text><text x="370" y="312" font-size="10.4" text-anchor="middle" fill="#5c5c66">e so o que sobra vira energia. Bagaco, vinhaca, torta de filtro, soro de leite e glicerol bruto entram nessa logica.</text></svg>
Cada fração do resíduo vai para o produto de maior valor possível.

A agroindústria brasileira gera enormes volumes de resíduos: bagaço e palha de cana, vinhaça, torta de filtro, casca e palha de café, cascas de frutas, farelos, manipueira da mandioca, glicerol bruto do biodiesel, dejetos animais, soro de leite. Esses materiais são ricos em carboidratos, proteínas, lipídios e compostos bioativos, e por isso representam **matéria-prima barata** para bioprocessos, além de passivo ambiental quando descartados.

A lógica da **biorrefinaria** é a mesma da refinaria de petróleo: fracionar a biomassa e converter cada fração no produto de maior valor possível, em cascata. Prioriza-se primeiro o que é mais valioso (compostos bioativos, enzimas, proteínas), depois os produtos de volume (ácidos orgânicos, combustíveis) e, por último, a energia (biogás, queima).

| Resíduo | Composição principal | Aproveitamentos |
|---|---|---|
| Bagaço de cana | celulose, hemicelulose, lignina | energia, etanol 2G, xilitol, enzimas, materiais |
| Vinhaça | matéria orgânica, potássio | fertirrigação, biogás (tema 110) |
| Torta de filtro | matéria orgânica, fósforo | adubo, substrato para fermentação sólida |
| Glicerol bruto | glicerol, sais, metanol | 1,3-propanodiol, ácidos, meio de cultivo |
| Soro de leite | lactose, proteínas | proteínas de alto valor, etanol, ácido láctico |
| Casca de café e frutas | açúcares, pectina, fenólicos | pectinases, antioxidantes, enzimas, aromas |

## Fermentação em estado sólido

Na **fermentação em estado sólido (FES)**, microrganismos crescem sobre um substrato sólido úmido, praticamente sem água livre, imitando o ambiente natural dos fungos filamentosos.

| | Submersa | Estado sólido |
|---|---|---|
| Água | muita | mínima |
| Substrato | solúvel, definido | resíduo sólido |
| Controle do processo | fácil (pH, \(\ce{O2}\), temperatura) | difícil, com gradientes |
| Concentração do produto | menor | geralmente maior |
| Remoção de calor | por camisa e serpentinas | **principal gargalo** |
| Escalonamento | consolidado | mais complexo |

A FES é especialmente adequada para **fungos filamentosos**, que penetram no substrato com as hifas, e é tradicionalmente usada na produção de enzimas (celulases, pectinases, amilases, proteases), ácidos orgânicos, aromas, pigmentos e em alimentos fermentados orientais, como o koji (*Aspergillus oryzae*) e o tempeh (*Rhizopus*). A dificuldade de dissipar o calor metabólico e de medir variáveis dentro da massa sólida explica por que o escalonamento ainda é um desafio; biorreatores de bandejas, de tambor rotativo e de leito empacotado com aeração forçada são as configurações mais usadas.

## Degradação microbiana de poluentes

Microrganismos degradam uma variedade impressionante de compostos. Em **hidrocarbonetos**, a rota típica é a oxidação terminal por monoxigenases (muitas vezes P450, tema 114) até ácido graxo, seguida de beta-oxidação (tema 109) e ciclo de Krebs. Compostos **aromáticos** são canalizados para intermediários como o catecol, que sofre clivagem do anel (orto ou meta) e entra no metabolismo central.

A degradabilidade cai nesta ordem: alcanos lineares de cadeia média, alcanos ramificados, aromáticos de um anel, cicloalcanos, aromáticos policíclicos (HPAs) e, por último, compostos muito halogenados. **Hidrofobicidade e halogenação** são os principais fatores de recalcitrância.

Muitos degradadores produzem **biossurfactantes** (ramnolipídeos de *Pseudomonas aeruginosa*, surfactina de *Bacillus subtilis*, soforolipídeos de leveduras), que emulsionam o poluente e aumentam sua biodisponibilidade. Esses compostos têm interesse próprio como tensoativos biodegradáveis.

## Enzimas ligninolíticas e compostos recalcitrantes

Os **fungos de podridão branca**, como *Phanerochaete chrysosporium* e *Pleurotus ostreatus*, degradam a lignina com um sistema oxidativo extracelular e inespecífico:

- **lacases** (fenoloxidases com cobre, que usam \(\ce{O2}\));
- **lignina peroxidase** e **manganês peroxidase** (dependentes de \(\ce{H2O2}\));
- mediadores de baixo peso molecular, que difundem para dentro da matriz e ampliam o alcance da oxidação.

Como o sistema é pouco específico, ele também ataca **corantes têxteis**, **HPAs**, **pesticidas**, fenóis e alguns fármacos. Isso embasa aplicações em tratamento de efluentes têxteis, descoloração de líquidos, biobranqueamento de polpa de celulose e remoção de contaminantes emergentes.

A degradação de **plásticos** é um campo em expansão: a bactéria *Ideonella sakaiensis*, descrita em 2016, usa a enzima **PETase** seguida da MHETase para hidrolisar o poli(tereftalato de etileno), e versões evoluídas dessas enzimas já despolimerizam PET pós-consumo em horas, em escala de demonstração, permitindo reciclagem química de volta aos monômeros.

## Estratégias de biorremediação

| Estratégia | O que é | Quando usar |
|---|---|---|
| **Atenuação natural monitorada** | acompanhar a degradação pela microbiota nativa | contaminação leve, sem risco imediato |
| **Bioestimulação** | adicionar nutrientes (N, P), oxigênio ou doadores de elétrons | quando os degradadores já existem, mas estão limitados |
| **Bioaumentação** | inocular microrganismos ou consórcios selecionados | quando falta capacidade metabólica local |
| **Técnicas *ex situ*** | landfarming, biopilhas, biorreatores de lama | solo escavado, contaminação concentrada |
| **Técnicas *in situ*** | bioventilação, bioaspersão, barreiras reativas | contaminação profunda ou sob estruturas |

Em derramamentos de óleo, a **bioestimulação com fertilizantes** é a técnica mais consagrada: o carbono sobra, mas nitrogênio e fósforo faltam, limitando o crescimento dos degradadores. Foi a abordagem adotada após o acidente do Exxon Valdez, no Alasca.

A **fitorremediação** usa plantas: fitoextração (acumulam metais na parte aérea, que é colhida), rizodegradação (as raízes estimulam a microbiota degradadora), fitoestabilização e fitovolatilização. É barata e tem boa aceitação pública, mas é lenta e limitada à profundidade das raízes. Gramíneas e espécies de rápido crescimento, como o eucalipto, são usadas em áreas contaminadas, e plantas hiperacumuladoras despertam interesse até para a "fitomineração" de metais valiosos.

A **compostagem**, por sua vez, é uma biotransformação aeróbia controlada de resíduos orgânicos em húmus estabilizado, com fase termofílica que higieniza o material.

## Limitações

- **Biodisponibilidade:** poluentes fortemente adsorvidos em argilas e matéria orgânica, ou presos em poros, ficam inacessíveis, mesmo havendo microrganismos capazes de degradá-los.
- **Cometabolismo:** alguns compostos só são transformados na presença de outro substrato que sustente o crescimento, o que exige adicionar cossubstratos.
- **Metabólitos intermediários:** podem ser mais tóxicos que o composto original, e por isso o monitoramento não pode se limitar ao desaparecimento do poluente.
- **Metais:** não são degradados, apenas imobilizados, transformados em outra forma química ou extraídos.
- **Tempo e variabilidade:** processos biológicos dependem de temperatura, umidade, pH e da microbiota local, o que torna os resultados menos previsíveis que os de métodos físico-químicos.

> **Atenção, erros comuns:**
> Supor que biodegradável significa inofensivo: intermediários podem ser tóxicos.
> Aplicar bioaumentação sem verificar se a microbiota nativa já é capaz: o inóculo costuma não se estabelecer.
> Esquecer que metais pesados não são "degradados".

## Para fixar

- Resíduos agroindustriais são matéria-prima barata; a biorrefinaria extrai valor em cascata.
- Fermentação em estado sólido é ideal para fungos filamentosos, com a remoção de calor como principal limitação.
- Biorremediação combina bioestimulação, bioaumentação e fitorremediação; a biodisponibilidade costuma ser o fator limitante.
`,
  referencias: [
    "PANDEY, A.; SOCCOL, C. R.; MITCHELL, D. New developments in solid state fermentation: I-bioprocesses and products. **Process Biochemistry**, v. 35, n. 10, p. 1153-1169, 2000.",
    "GAYLARDE, C. C.; BELLINASO, M. L.; MANFIO, G. P. Aspectos biológicos e técnicos da biorremediação de xenobióticos. **Biotecnologia Ciência e Desenvolvimento**, n. 34, p. 36-43, 2005.",
    "YOSHIDA, S. et al. A bacterium that degrades and assimilates poly(ethylene terephthalate). **Science**, v. 351, n. 6278, p. 1196-1199, 2016.",
    "SCHMIDELL, W. et al. (coord.). **Biotecnologia industrial**. v. 3. São Paulo: Blucher, 2001.",
  ],
}
);
