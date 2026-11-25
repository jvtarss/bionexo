/* BIONEXO — Resumos · Áreas 8 e 9: Bioquímica (temas 27–29) e Biologia Celular (temas 30–32) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r27", num: 27,
  area: "Bioquímica",
  disciplina: "Bioquímica",
  titulo: "Estrutura e função das proteínas",
  descricao: "Do aminoácido à proteína pronta: a ligação peptídica, os quatro níveis de estrutura, por que a forma define a função e o que acontece quando uma proteína se desnatura.",
  tags: ["Bioquímica", "proteína", "aminoácido", "ligação peptídica", "estrutura primária", "alfa-hélice", "folha beta", "estrutura terciária", "desnaturação", "ponto isoelétrico"],
  conteudo: String.raw`
## Por que as proteínas são tão importantes

As proteínas fazem praticamente todo o trabalho da célula. As **enzimas** aceleram as reações químicas; outras proteínas transportam substâncias (como a hemoglobina, que leva oxigênio), dão sustentação (como o colágeno), defendem o organismo (os anticorpos) ou transmitem sinais (como a insulina). Grande parte da biotecnologia industrial gira em torno delas: produzir enzimas para detergentes e alimentos, produzir proteínas terapêuticas, purificá-las e mantê-las ativas.

## Os aminoácidos: as peças

As proteínas são cadeias de **aminoácidos**. Existem 20 tipos usados pelas células, e todos têm a mesma estrutura básica: um carbono central (o **carbono alfa**) ligado a um grupo **amino**, a um grupo **carboxila** (ácido), a um **hidrogênio** e a uma **cadeia lateral**, chamada de **R**. É a cadeia R que diferencia um aminoácido do outro. Com exceção da glicina, todos são quirais e, nas proteínas, aparecem sempre na forma **L** (tema 16).

| Grupo | Exemplos | Como se comportam |
|---|---|---|
| Apolares | glicina, alanina, valina, leucina, isoleucina, metionina, prolina | tendem a ficar no interior da proteína, longe da água |
| Aromáticos | fenilalanina, tirosina, triptofano | absorvem luz ultravioleta em 280 nm, o que permite medir a concentração de proteína num espectrofotômetro |
| Polares sem carga | serina, treonina, cisteína, asparagina, glutamina | fazem ligações de hidrogênio; a cisteína forma pontes dissulfeto |
| Ácidos (carga negativa) | aspartato, glutamato | participam de atrações entre cargas |
| Básicos (carga positiva) | lisina, arginina, histidina | a histidina ajuda a tamponar o pH perto de 6 |

No pH do corpo, um aminoácido livre tem ao mesmo tempo uma carga positiva (no grupo amino, \(\ce{-NH3+}\)) e uma negativa (na carboxila, \(\ce{-COO-}\)). Essa forma se chama **zwitterion**. O **ponto isoelétrico** (pI) é o pH em que a carga total é zero. Para aminoácidos sem cadeia lateral ionizável:

\[ \mathrm{pI} = \frac{\mathrm{p}K_{a1} + \mathrm{p}K_{a2}}{2} \]

Para a glicina (pKa de 2,34 e 9,60), o pI é cerca de 5,97. Abaixo dele, a molécula fica com carga positiva; acima, com carga negativa.

## A ligação peptídica

Os aminoácidos se unem por uma reação de **condensação**: a carboxila de um reage com o grupo amino do seguinte, liberando uma molécula de água. A ligação formada, chamada **ligação peptídica**, tem uma característica importante: por causa da ressonância (tema 11), ela se comporta parcialmente como uma ligação dupla. É **rígida e plana**, e a cadeia só consegue girar nas ligações do carbono alfa. Isso limita bastante as formas possíveis. Por convenção, a sequência é escrita do início, a ponta com o grupo amino livre (**N-terminal**), para o fim, a ponta com a carboxila livre (**C-terminal**).

## Os quatro níveis de estrutura

1. **Estrutura primária:** é a **sequência** dos aminoácidos, na ordem em que estão ligados. Ela é determinada pelo gene.
2. **Estrutura secundária:** são formas que se repetem em trechos da cadeia, mantidas por ligações de hidrogênio entre os átomos do "esqueleto". As principais são a **alfa-hélice** (uma espiral, com 3,6 aminoácidos por volta) e a **folha beta** (trechos da cadeia esticados lado a lado, como uma folha sanfonada).
3. **Estrutura terciária:** é a forma tridimensional completa da cadeia, mantida pelo **efeito hidrofóbico** (as partes apolares se escondem da água no interior), por ligações de hidrogênio, por atrações entre cargas e por **pontes dissulfeto** entre cisteínas.
4. **Estrutura quaternária:** é a associação de várias cadeias, chamadas subunidades. A hemoglobina, por exemplo, é formada por quatro cadeias.

![Os quatro níveis estruturais de uma proteína: a sequência de aminoácidos (primária), as hélices e folhas (secundária), a forma tridimensional da cadeia (terciária) e a associação de várias cadeias (quaternária).](https://upload.wikimedia.org/wikipedia/commons/c/c9/Main_protein_structure_levels_en.svg)
Fonte: Mariana Ruiz (LadyofHats), domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Main_protein_structure_levels_en.svg).

**O experimento de Anfinsen:** a enzima ribonuclease foi desmontada com ureia e um agente que quebra pontes dissulfeto, perdendo a atividade. Ao retirar esses agentes, ela se dobrou sozinha de volta à forma correta e voltou a funcionar. A conclusão foi que **a própria sequência de aminoácidos contém a informação para o dobramento**. Dentro das células, proteínas auxiliares chamadas chaperonas ajudam nesse processo e evitam que as cadeias se grudem umas nas outras.

## A forma define a função

Uma enzima funciona porque tem, na sua superfície, uma cavidade (o **sítio ativo**) com o formato e as cargas certas para encaixar o substrato. Um anticorpo reconhece um vírus porque a sua forma é complementar a uma parte da superfície do vírus. Se a forma muda, a função se perde.

## Desnaturação: quando a proteína perde a forma

A **desnaturação** é a perda das estruturas secundária, terciária e quaternária, **sem quebrar as ligações peptídicas**. A sequência continua igual, mas a proteína "desmonta" e perde a função.

| Agente | Como atua |
|---|---|
| Calor | aumenta a agitação das moléculas e rompe as interações fracas |
| pH muito ácido ou muito básico | muda as cargas dos aminoácidos e desfaz as atrações entre elas |
| Ureia e sais de guanidina | competem pelas ligações de hidrogênio |
| Detergentes (como o SDS) | desfazem o interior hidrofóbico |
| Solventes orgânicos (álcool, acetona) | perturbam o efeito hidrofóbico |
| Metais pesados | ligam-se a grupos com enxofre da cisteína |

Às vezes a desnaturação é reversível; às vezes, não. A clara de ovo cozida é o exemplo clássico de desnaturação irreversível: as cadeias desdobradas se grudam umas nas outras e não voltam mais à forma original.

## Exemplo resolvido

**Quantas proteínas diferentes são possíveis?** Com 20 aminoácidos, há \(20^3 = 8000\) tripeptídeos diferentes. Para uma proteína pequena, de 100 aminoácidos, há \(20^{100} \approx 10^{130}\) sequências possíveis, um número maior que o de átomos estimados no universo observável. A natureza usou apenas uma parte minúscula dessas possibilidades.

**A carga da glicina em diferentes pHs:** em pH 1, os dois grupos estão protonados, e a carga é +1. Perto de pH 6 (o ponto isoelétrico), a carga total é 0. Em pH 11, o grupo amino perde o próton, e a carga é −1.

## Na prática: proteínas nos bioprocessos

- **Purificação:** muitas técnicas exploram justamente as propriedades vistas acima. A precipitação com sulfato de amônio diminui a solubilidade das proteínas; a precipitação no ponto isoelétrico aproveita o pH em que a proteína tem carga zero; a cromatografia de troca iônica separa as proteínas pela carga, que depende do pH.
- **Produção de proteínas recombinantes:** quando uma proteína complexa é produzida em *E. coli*, ela às vezes não se dobra direito e forma agregados insolúveis, os **corpos de inclusão**. Para recuperá-la, é preciso dissolver esses agregados e fazê-la se dobrar de novo.
- **Enzimas industriais:** para funcionar num detergente de lavar roupa ou na produção de xarope de glicose, a enzima precisa resistir a temperaturas altas e a pHs extremos. Por isso se buscam enzimas de microrganismos que vivem em ambientes quentes.

> **Atenção, erros comuns:**
> Confundir desnaturação com hidrólise: na desnaturação, as ligações peptídicas continuam intactas.
> Achar que as ligações de hidrogênio da estrutura secundária envolvem as cadeias laterais: elas são entre átomos do **esqueleto** da cadeia.
> Achar que a ligação peptídica gira livremente.

## Para fixar

- São 20 aminoácidos, diferenciados pela cadeia lateral.
- Primária (sequência) → secundária (hélices e folhas) → terciária (forma 3D) → quaternária (várias cadeias).
- A forma define a função; desnaturar é perder a forma.
`,
  referencias: [
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019.",
    "BERG, J. M.; TYMOCZKO, J. L.; STRYER, L. **Bioquímica**. 7. ed. Rio de Janeiro: Guanabara Koogan, 2014.",
    "VOET, D.; VOET, J. G. **Bioquímica**. 4. ed. Porto Alegre: Artmed, 2013.",
    "ANFINSEN, C. B. Principles that govern the folding of protein chains. **Science**, v. 181, n. 4096, p. 223-230, 1973.",
  ],
},
{
  id: "r28", num: 28,
  area: "Bioquímica",
  disciplina: "Bioquímica",
  titulo: "Carboidratos e metabolismo energético",
  descricao: "Como são os açúcares e o amido, e como a célula extrai energia da glicose: glicólise, fermentação, ciclo de Krebs, cadeia respiratória e quanto ATP sai de cada etapa.",
  tags: ["Bioquímica", "carboidrato", "glicose", "glicólise", "ciclo de Krebs", "cadeia respiratória", "fosforilação oxidativa", "ATP", "fermentação", "metabolismo"],
  conteudo: String.raw`
## Por que isso importa em bioprocessos

Quase toda fermentação industrial começa com um açúcar: o caldo de cana na produção de etanol, a glicose na produção de enzimas e antibióticos, o amido de milho hidrolisado. O que a célula faz com esse açúcar, se o queima por completo para crescer ou se o transforma em etanol, ácido láctico ou ácido cítrico, depende das vias metabólicas estudadas neste tema. Entender essas vias é entender por que um processo rende mais ou menos.

## Os carboidratos

São compostos formados por carbono, hidrogênio e oxigênio, com vários grupos OH e um grupo aldeído ou cetona (tema 15).

- **Monossacarídeos** são os açúcares simples, como a glicose, a frutose, a galactose e a ribose. Em solução, a maioria se fecha em anel, formando duas versões ligeiramente diferentes, chamadas **alfa** e **beta**.
- **Dissacarídeos** são dois monossacarídeos unidos por uma **ligação glicosídica**. A sacarose (o açúcar da cana) é glicose + frutose; a lactose (o açúcar do leite) é galactose + glicose; a maltose é glicose + glicose.
- **Polissacarídeos** são longas cadeias. O **amido** (reserva das plantas) e o **glicogênio** (reserva dos animais) são formados por glicoses unidas por ligações do tipo alfa. A **celulose** (a parede das células vegetais) também é feita só de glicose, mas com ligações do tipo beta, que formam cadeias retas, muito compactas e difíceis de quebrar.

Essa diferença entre alfa e beta parece um detalhe, mas tem enorme importância industrial. O amido é facilmente quebrado em glicose por enzimas chamadas amilases. A celulose resiste muito mais e precisa de pré-tratamentos e de várias enzimas diferentes (celulases). Esse é o grande desafio do **etanol de segunda geração**, produzido a partir do bagaço e da palha da cana.

## Glicólise: a glicose é quebrada ao meio

A glicólise acontece no **citoplasma** de praticamente todas as células e transforma uma molécula de glicose (6 carbonos) em duas moléculas de **piruvato** (3 carbonos cada), em dez reações.

- Na **fase de investimento**, a célula gasta 2 ATP para "ativar" a glicose.
- Na **fase de pagamento**, produz 4 ATP e 2 NADH (uma molécula que carrega elétrons).

O saldo é de **2 ATP** por glicose:

\[ \ce{Glicose + 2 NAD+ + 2 ADP + 2 P_i -> 2 Piruvato + 2 NADH + 2 H+ + 2 ATP + 2 H2O} \]

A principal enzima de controle é a **fosfofrutoquinase-1**. Ela é freada quando a célula já tem muita energia (muito ATP ou citrato) e é ativada quando a energia está baixa (muito AMP). Funciona como um termostato do metabolismo.

![As dez reações da glicólise, com os nomes das enzimas, o gasto de ATP na fase de investimento e a produção de ATP e NADH na fase de pagamento.](https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Glycolysis_skeletal_diagram.png/960px-Glycolysis_skeletal_diagram.png)
Fonte: Mplanine, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Glycolysis_skeletal_diagram.png).

## O que acontece com o piruvato

Depende de haver ou não oxigênio:

- **Com oxigênio:** o piruvato entra na mitocôndria e é transformado em **acetil-CoA**, liberando \(\ce{CO2}\) e mais um NADH. O acetil-CoA segue para o ciclo de Krebs.
- **Sem oxigênio, ocorre a fermentação:** o piruvato (ou uma substância derivada dele) recebe os elétrons do NADH. Na **fermentação láctica**, feita por bactérias lácticas e pelos nossos músculos em esforço intenso, o piruvato vira **lactato**. Na **fermentação alcoólica**, feita pelas leveduras, o piruvato perde um \(\ce{CO2}\) e vira acetaldeído, que é então transformado em **etanol**.

Um ponto que costuma confundir: a fermentação **não produz ATP** além dos 2 da glicólise. A sua função é **devolver o \(\ce{NAD+}\)** que a glicólise consumiu. Sem esse \(\ce{NAD+}\), a glicólise pararia, e a célula ficaria sem nenhuma fonte de energia.

## Ciclo de Krebs

Na mitocôndria, o acetil-CoA se une a uma molécula chamada oxaloacetato, formando **citrato**. Em oito reações, o citrato vai sendo transformado até que o oxaloacetato é regenerado, fechando o ciclo. A cada volta, saem 2 \(\ce{CO2}\), 3 NADH, 1 \(\ce{FADH2}\) (outro carregador de elétrons) e 1 GTP (equivalente a um ATP).

O ciclo de Krebs não serve só para "queimar" o açúcar. Ele também fornece matéria-prima para a célula fabricar outras moléculas, e isso é aproveitado pela indústria:

- o **ácido cítrico** usado em alimentos e bebidas é produzido pelo fungo *Aspergillus niger*, que acumula e libera citrato;
- o **glutamato** (o glutamato monossódico usado como realçador de sabor) é produzido pela bactéria *Corynebacterium glutamicum* a partir de uma molécula do ciclo.

## Cadeia respiratória: onde sai a maior parte da energia

O NADH e o \(\ce{FADH2}\) entregam os seus elétrons a uma série de proteínas na membrana interna da mitocôndria (em bactérias, na própria membrana da célula). Os elétrons passam de uma proteína para outra até chegar ao **oxigênio**, que é o destino final e se transforma em água. Essa passagem libera energia, usada para bombear prótons (\(\ce{H+}\)) para um dos lados da membrana. Os prótons então voltam por uma "turbina" molecular, a **ATP sintase**, que usa esse fluxo para fabricar ATP. Esse mecanismo foi proposto por Peter Mitchell e é chamado de **teoria quimiosmótica**.

![Visão geral da respiração celular: a glicólise no citoplasma; o ciclo de Krebs e a cadeia transportadora de elétrons dentro da mitocôndria, com o rendimento aproximado de ATP de cada etapa.](https://upload.wikimedia.org/wikipedia/commons/0/05/Cellular_respiration_EN.svg)
Fonte: Zlir'a, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cellular_respiration_EN.svg).

## O balanço de energia de uma glicose

| Etapa | ATP ou GTP produzido diretamente | NADH | \(\ce{FADH2}\) |
|---|---|---|---|
| Glicólise | 2 | 2 | 0 |
| Piruvato → acetil-CoA (duas vezes) | 0 | 2 | 0 |
| Ciclo de Krebs (duas voltas) | 2 | 6 | 2 |
| **Total** | **4** | **10** | **2** |

Como cada NADH rende cerca de 2,5 ATP na cadeia respiratória e cada \(\ce{FADH2}\) rende cerca de 1,5 ATP, o total é de aproximadamente \(4 + 25 + 3 = 32\) ATP por glicose (cerca de 30 em algumas células, dependendo de como o NADH do citoplasma entra na mitocôndria).

## Exemplo: respirar ou fermentar?

Uma glicose dá cerca de **32 ATP** pela respiração e apenas **2 ATP** pela fermentação: dezesseis vezes menos. Por isso, quando o objetivo é produzir **células** (como o fermento usado em padarias), o processo é feito com bastante ar. Quando o objetivo é produzir **etanol**, interessa justamente a fermentação.

Há uma particularidade importante da levedura *Saccharomyces cerevisiae*: quando há muito açúcar disponível, ela fermenta mesmo na presença de oxigênio (o chamado **efeito Crabtree**). Para produzir fermento com bom rendimento, a indústria alimenta o açúcar aos poucos (**batelada alimentada**), mantendo a sua concentração baixa para que a levedura respire em vez de fermentar.

> **Atenção, erros comuns:**
> A glicólise produz 4 ATP **no total**, mas o saldo é de 2, porque 2 foram gastos no começo.
> O ciclo de Krebs não usa oxigênio diretamente, mas para sem ele, porque o NADH e o \(\ce{FADH2}\) deixam de ser reciclados.
> Fermentação não é o mesmo que "respiração sem oxigênio": na respiração anaeróbia, os elétrons vão para outras substâncias (como nitrato ou sulfato) através de uma cadeia transportadora.

## Para fixar

- Glicólise (citoplasma) → piruvato → acetil-CoA → ciclo de Krebs (mitocôndria) → cadeia respiratória (membrana).
- A fermentação serve para devolver o \(\ce{NAD+}\) à glicólise.
- O metabolismo central também fornece as moléculas que a biotecnologia transforma em produtos.
`,
  referencias: [
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019.",
    "BERG, J. M.; TYMOCZKO, J. L.; STRYER, L. **Bioquímica**. 7. ed. Rio de Janeiro: Guanabara Koogan, 2014.",
    "LIMA, U. A. et al. (coord.). **Biotecnologia industrial**. v. 3: Processos fermentativos e enzimáticos. São Paulo: Blucher, 2001.",
    "MITCHELL, P. Coupling of phosphorylation to electron and hydrogen transfer by a chemi-osmotic type of mechanism. **Nature**, v. 191, p. 144-148, 1961.",
  ],
},
{
  id: "r29", num: 29,
  area: "Bioquímica",
  disciplina: "Bioquímica",
  titulo: "Lipídios e membranas biológicas",
  descricao: "Ácidos graxos, óleos e gorduras, fosfolipídios e colesterol; como eles formam as membranas das células, o que controla a fluidez e onde os lipídios aparecem na biotecnologia.",
  tags: ["Bioquímica", "lipídio", "ácido graxo", "triacilglicerol", "fosfolipídio", "colesterol", "ergosterol", "mosaico fluido", "membrana", "biodiesel"],
  conteudo: String.raw`
## O que une os lipídios

Ao contrário das proteínas e dos carboidratos, os lipídios não formam longas cadeias de unidades repetidas e não têm um grupo funcional único. O que os une é uma propriedade: **dissolvem-se mal em água e bem em solventes apolares**, como o éter e o clorofórmio. Eles armazenam energia, formam as membranas das células, funcionam como hormônios e isolam termicamente o corpo.

## As principais classes

**Ácidos graxos:** são ácidos carboxílicos com cadeias longas de carbono (geralmente entre 12 e 24 carbonos, em número par).

- Os **saturados** não têm ligações duplas. As suas cadeias são retas e se encaixam bem umas nas outras, por isso derretem em temperaturas mais altas. O ácido esteárico (18 carbonos, sem duplas) derrete a cerca de 69 °C.
- Os **insaturados** têm ligações duplas, quase sempre na forma **cis**, que cria uma "dobra" na cadeia. As moléculas não conseguem se empacotar bem e derretem em temperaturas mais baixas. O ácido oleico (18 carbonos, uma dupla) derrete a cerca de 13 °C. É por isso que os óleos vegetais, ricos em insaturados, são líquidos, e a gordura animal, rica em saturados, é sólida.

**Triacilgliceróis (triglicerídeos):** são os óleos e gorduras propriamente ditos. Cada molécula é formada por um glicerol ligado a três ácidos graxos, por ligações do tipo éster. São a principal forma de **reserva de energia** dos seres vivos e rendem mais que o dobro de energia por grama que os carboidratos. Quando reagem com uma base, formam sabão (**saponificação**); quando reagem com um álcool, formam o **biodiesel** (transesterificação).

**Fosfolipídios:** formados por um glicerol ligado a dois ácidos graxos e a um grupo com fosfato. São **anfipáticos**: têm uma "cabeça" que gosta de água (hidrofílica) e duas "caudas" que fogem dela (hidrofóbicas).

**Esteróis:** moléculas com vários anéis fundidos. O **colesterol** regula a fluidez das membranas das células animais. Nos fungos, o equivalente é o **ergosterol**, que é justamente o alvo de muitos antifúngicos: alguns se ligam a ele e furam a membrana do fungo; outros impedem que ele seja produzido. Bactérias, em geral, não têm esteróis.

## Da anfipaticidade à membrana

Em água, as moléculas anfipáticas se organizam sozinhas para esconder as suas caudas da água. Dependendo do formato, formam **micelas** (pequenas esferas, como fazem os detergentes ao envolver a gordura), **bicamadas** (duas camadas com as caudas voltadas para dentro, como nas membranas) ou **lipossomos** (bicamadas fechadas em esfera).

## O modelo do mosaico fluido

Segundo o modelo proposto por Singer e Nicolson em 1972, a membrana é uma **bicamada de lipídios fluida**, na qual "flutuam" proteínas. Algumas proteínas atravessam a membrana de um lado ao outro (as **integrais**); outras ficam apenas apoiadas numa das faces (as **periféricas**). As duas faces da membrana são diferentes: os açúcares ligados a lipídios e proteínas ficam voltados para fora da célula.

![Modelo do mosaico fluido: a bicamada de fosfolipídios com moléculas de colesterol, proteínas que atravessam a membrana ou ficam apoiadas nela, canais e glicoproteínas voltadas para o meio de fora da célula.](https://upload.wikimedia.org/wikipedia/commons/8/81/Cell_membrane_detailed_diagram_pt.svg)
Fonte: Mariana Ruiz (LadyofHats), tradução de PatríciaR, domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cell_membrane_detailed_diagram_pt.svg).

A membrana é **mais fluida** em temperaturas mais altas e quando tem mais ácidos graxos insaturados e de cadeia curta. O colesterol funciona como um amortecedor de fluidez: impede que ela fique fluida demais no calor ou rígida demais no frio. Os microrganismos ajustam a composição dos seus lipídios conforme a temperatura em que crescem, para manter a membrana funcionando.

## Como as substâncias atravessam a membrana (visão geral)

| Mecanismo | Gasta energia? | Exemplo |
|---|---|---|
| Difusão simples | não | oxigênio, \(\ce{CO2}\) e moléculas pequenas e apolares |
| Difusão facilitada | não | glicose, por meio de proteínas transportadoras; água, por canais chamados aquaporinas |
| Transporte ativo primário | sim, gasta ATP | bomba de sódio e potássio |
| Transporte ativo secundário | sim, usa a energia de um gradiente já existente | transporte de glicose junto com sódio; transporte de lactose junto com \(\ce{H+}\) em bactérias |

Os detalhes estão no tema 31.

## Exemplo resolvido: as contas do biodiesel

Na produção de biodiesel, um óleo reage com metanol e forma ésteres metílicos (o biodiesel) e glicerol. Usando como modelo a trioleína (massa molar de cerca de 885,4 g/mol):

\[ \text{Triglicerídeo} + 3\,\ce{CH3OH} \rightleftharpoons 3\ \text{ésteres metílicos} + \text{glicerol} \]

Para 1000 kg de óleo, há \(1000/0{,}8854 \approx 1129\) mols de triglicerídeo (lembrando que 1 kg = 1000 g).

- **Metanol necessário (pela estequiometria):** \(3\times1129\times32{,}04\ \text{g} \approx 108{,}6\) kg. Na prática, usa-se metanol em excesso para deslocar o equilíbrio (tema 14).
- **Biodiesel formado** (oleato de metila, 296,5 g/mol): \(3\times1129\times296{,}5\ \text{g} \approx 1004{,}6\) kg.
- **Glicerol formado** (92,09 g/mol): \(1129\times92{,}09\ \text{g} \approx 104{,}0\) kg.

Conferindo o balanço de massa: \(1000 + 108{,}6 = 1108{,}6\) kg de reagentes e \(1004{,}6 + 104{,}0 = 1108{,}6\) kg de produtos. ✓ O glicerol, produzido em grande quantidade pela indústria do biodiesel, hoje serve de matéria-prima para fermentações, como a produção de 1,3-propanodiol.

## Na prática

- **Vacinas e medicamentos:** lipossomos e **nanopartículas lipídicas** envolvem e protegem fármacos e as vacinas de RNA mensageiro.
- **Óleos produzidos por micro-organismos:** algumas leveduras, chamadas oleaginosas, acumulam grandes quantidades de lipídios e são estudadas para produzir biocombustíveis.
- **Extração de proteínas e de DNA:** detergentes como o SDS e o Triton X-100 dissolvem as membranas e liberam o conteúdo das células (tema 58).
- **Limite de produção:** produtos como o etanol e o butanol deixam a membrana fluida demais e danificam as células. Isso limita a concentração máxima que o microrganismo consegue atingir numa fermentação.

> **Atenção, erros comuns:**
> Chamar os lipídios de polímeros: eles não são formados por unidades repetidas ligadas em cadeia.
> Achar que as gorduras trans são comuns na natureza: elas vêm principalmente da hidrogenação parcial feita pela indústria.
> Imaginar a membrana como uma parede rígida: ela é fluida, e isso é essencial para o seu funcionamento.

## Para fixar

- Lipídios são hidrofóbicos e não formam polímeros.
- Moléculas anfipáticas em água formam bicamadas sozinhas.
- A membrana é um mosaico fluido de lipídios e proteínas, com fluidez regulada.
`,
  referencias: [
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019.",
    "VOET, D.; VOET, J. G. **Bioquímica**. 4. ed. Porto Alegre: Artmed, 2013.",
    "JUNQUEIRA, L. C.; CARNEIRO, J. **Biologia celular e molecular**. 9. ed. Rio de Janeiro: Guanabara Koogan, 2012.",
    "SINGER, S. J.; NICOLSON, G. L. The fluid mosaic model of the structure of cell membranes. **Science**, v. 175, n. 4023, p. 720-731, 1972.",
  ],
},
{
  id: "r30", num: 30,
  area: "Biologia Celular",
  disciplina: "Biologia Celular",
  titulo: "Estrutura e organização celular",
  descricao: "As diferenças entre células procarióticas e eucarióticas, o que faz cada organela, de onde vieram as mitocôndrias e como escolher a célula certa para produzir uma proteína.",
  tags: ["célula", "procarioto", "eucarioto", "organela", "mitocôndria", "retículo endoplasmático", "Golgi", "ribossomo", "endossimbiose", "domínios da vida"],
  conteudo: String.raw`
## A célula: a menor unidade da vida

Segundo a **teoria celular**, todos os seres vivos são formados por células, a célula é a menor unidade que tem vida própria, e toda célula surge da divisão de outra célula. Os vírus ficam de fora dessa definição: não têm metabolismo próprio e só se multiplicam dentro de uma célula.

Comparando o RNA dos ribossomos de diferentes organismos, Carl Woese e colaboradores dividiram os seres vivos em três grandes grupos, os **domínios**: **Bacteria** e **Archaea** (ambos procariontes) e **Eukarya** (os eucariontes, que incluem fungos, plantas e animais).

## Procariontes e eucariontes

| Característica | Procariontes (bactérias e arqueias) | Eucariontes (fungos, plantas, animais) |
|---|---|---|
| Núcleo | não têm; o DNA fica numa região chamada nucleoide | têm; o DNA fica dentro de um núcleo envolvido por membrana dupla |
| Tamanho típico | 0,5 a 5 micrômetros | 10 a 100 micrômetros |
| DNA | geralmente uma molécula circular, muitas vezes acompanhada de plasmídeos | várias moléculas lineares (os cromossomos), enroladas em proteínas chamadas histonas |
| Ribossomos | 70S | 80S no citoplasma (e 70S dentro das mitocôndrias e cloroplastos) |
| Organelas com membrana | não têm | têm |
| Parede celular | de peptidoglicano, nas bactérias | de celulose nas plantas, de quitina nos fungos; ausente nos animais |
| Divisão | fissão binária | mitose ou meiose |

![Célula procariótica (bactéria): o nucleoide com o DNA, os plasmídeos, os ribossomos, a membrana, a parede celular, a cápsula, os pili e o flagelo. Não há núcleo nem organelas com membrana.](https://upload.wikimedia.org/wikipedia/commons/c/ce/Average_prokaryote_cell_pt.svg)
Fonte: Mariana Ruiz (LadyofHats), rótulos de LipeFontoura, domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Average_prokaryote_cell_pt.svg).

![Célula eucariótica animal, com o núcleo e as organelas envolvidas por membrana: retículos endoplasmáticos, complexo de Golgi, mitocôndrias, lisossomos e peroxissomos.](https://upload.wikimedia.org/wikipedia/commons/5/5a/Animal_cell_structure_pt.svg)
Fonte: Mariana Ruiz (LadyofHats), tradução de Felipe Fontoura, domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Animal_cell_structure_pt.svg).

A diferença entre os ribossomos 70S e 80S tem uma consequência prática enorme: muitos **antibióticos** (como as tetraciclinas e os aminoglicosídeos) atacam o ribossomo das bactérias sem afetar o ribossomo das nossas células. É por isso que conseguem matar a bactéria sem matar o paciente.

## O envoltório das bactérias

- As **Gram-positivas** têm uma camada grossa de peptidoglicano.
- As **Gram-negativas** têm uma camada fina de peptidoglicano e, por fora dela, uma **membrana externa** com lipopolissacarídeo (LPS), uma substância que provoca febre no corpo humano (uma **endotoxina**).

Essa diferença explica a coloração de Gram (tema 33) e também uma exigência industrial: medicamentos injetáveis produzidos em *E. coli* (uma Gram-negativa) precisam ter as endotoxinas cuidadosamente removidas.

## O que faz cada organela

| Organela | Função principal |
|---|---|
| Núcleo | guarda o DNA; ali o DNA é copiado e lido (transcrição) |
| Retículo endoplasmático rugoso | fabrica as proteínas que vão para a membrana ou para fora da célula; começa a colocar açúcares nelas (glicosilação) |
| Retículo endoplasmático liso | fabrica lipídios, neutraliza substâncias tóxicas e armazena cálcio |
| Complexo de Golgi | modifica as proteínas, embala-as em vesículas e envia cada uma ao seu destino |
| Lisossomos | fazem a digestão dentro da célula, com enzimas que funcionam em pH ácido |
| Peroxissomos | quebram ácidos graxos e eliminam a água oxigenada produzida pelo metabolismo |
| Mitocôndrias | fazem a respiração celular e produzem a maior parte do ATP (tema 28) |
| Cloroplastos | fazem a fotossíntese, nas plantas e algas |
| Citoesqueleto | dá forma à célula, transporta materiais dentro dela e participa da divisão e do movimento |

## De onde vieram as mitocôndrias

Segundo a **teoria endossimbiótica**, defendida pela bióloga Lynn Margulis, as mitocôndrias e os cloroplastos descendem de bactérias que foram englobadas por uma célula ancestral e passaram a viver dentro dela, numa relação vantajosa para as duas. As evidências: essas organelas têm **DNA circular próprio**, **ribossomos 70S** como os das bactérias, membrana dupla e se dividem de forma parecida com a fissão binária.

## Exemplo resolvido: por que as bactérias crescem tão rápido?

Uma célula troca nutrientes e resíduos com o ambiente pela sua superfície, mas consome de acordo com o seu volume. Para uma esfera, a relação entre superfície e volume é \(\dfrac{S}{V} = \dfrac{4\pi r^2}{\tfrac43\pi r^3} = \dfrac{3}{r}\).

- Uma bactéria com raio de 1 micrômetro tem \(S/V = 3\) por micrômetro.
- Uma célula eucariótica com raio de 10 micrômetros tem \(S/V = 0{,}3\) por micrômetro.

A célula pequena tem **dez vezes mais superfície para cada unidade de volume**. Isso ajuda a explicar por que a *E. coli* pode se dividir a cada 20 minutos em boas condições, enquanto células animais em cultivo levam muitas horas. As células eucarióticas compensam o tamanho com as organelas, que multiplicam as superfícies internas.

## Na prática: escolhendo a célula que vai produzir uma proteína

| Organismo hospedeiro | Vantagens | Limitações |
|---|---|---|
| *Escherichia coli* | cresce muito rápido, em meios baratos; a sua genética é muito conhecida | não coloca açúcares nas proteínas (não faz glicosilação); pode formar agregados insolúveis; produz endotoxina |
| Leveduras (*Saccharomyces*, *Komagataella*, conhecida antes como *Pichia*) | são eucariontes simples, liberam proteínas no meio, crescem em altas densidades | colocam açúcares de um jeito diferente do humano |
| Células de mamífero (como as células CHO, de ovário de hamster) | colocam açúcares de forma parecida com a humana; são o padrão para anticorpos terapêuticos | crescem devagar, exigem meios caros e são sensíveis à agitação |

> **Atenção, erros comuns:**
> Dizer que procariontes não têm ribossomos ou membrana: eles têm os dois; o que lhes falta são as organelas com membrana.
> Esquecer que as células vegetais também têm mitocôndrias, além dos cloroplastos.
> Classificar os vírus como procariontes.

## Para fixar

- Três domínios: Bacteria, Archaea e Eukarya. Procariontes não têm núcleo nem organelas com membrana.
- Cada organela é um compartimento especializado.
- Conhecer a organização da célula ajuda a escolher o organismo e a planejar o bioprocesso.
`,
  referencias: [
    "JUNQUEIRA, L. C.; CARNEIRO, J. **Biologia celular e molecular**. 9. ed. Rio de Janeiro: Guanabara Koogan, 2012.",
    "ALBERTS, B. et al. **Biologia molecular da célula**. 6. ed. Porto Alegre: Artmed, 2017.",
    "WOESE, C. R.; KANDLER, O.; WHEELIS, M. L. Towards a natural system of organisms: proposal for the domains Archaea, Bacteria, and Eucarya. **Proceedings of the National Academy of Sciences of the USA**, v. 87, n. 12, p. 4576-4579, 1990.",
    "SAGAN, L. On the origin of mitosing cells. **Journal of Theoretical Biology**, v. 14, n. 3, p. 225-274, 1967.",
  ],
},
{
  id: "r31", num: 31,
  area: "Biologia Celular",
  disciplina: "Biologia Celular",
  titulo: "Membrana plasmática e transporte celular",
  descricao: "Como as substâncias entram e saem da célula: difusão simples e facilitada, osmose, transporte ativo e transporte em vesículas, com aplicações em conservação de alimentos e em bioprocessos.",
  tags: ["membrana plasmática", "transporte", "difusão", "difusão facilitada", "osmose", "pressão osmótica", "tonicidade", "transporte ativo", "bomba de sódio e potássio", "endocitose"],
  conteudo: String.raw`
## A membrana como porteira seletiva

A membrana plasmática não deixa passar qualquer coisa. A bicamada de lipídios (tema 29) é bem permeável a gases e a moléculas pequenas e apolares, pouco permeável à água e a moléculas polares pequenas e praticamente **impermeável a íons** e a moléculas grandes. Todo o resto precisa da ajuda de **proteínas transportadoras** ou de mecanismos especiais. Esse controle é o que permite à célula manter o seu interior diferente do ambiente.

## Transporte passivo: a favor da diferença de concentração, sem gastar energia

**Difusão simples:** as moléculas atravessam diretamente a bicamada, do lado onde estão mais concentradas para o lado onde estão menos concentradas, até igualar as concentrações. É o que acontece com o oxigênio, o \(\ce{CO2}\), o etanol e os hormônios esteroides. A velocidade desse fluxo é descrita pela **lei de Fick**: quanto maior a diferença de concentração, mais rápido o fluxo.

\[ J = -D\,\frac{dC}{dx} \]

**Difusão facilitada:** as moléculas ainda vão do mais concentrado para o menos concentrado, mas precisam de uma proteína para atravessar.

- **Canais:** formam poros por onde passam íons ou água. Os canais de água se chamam **aquaporinas**.
- **Transportadores:** ligam-se à molécula e mudam de forma para soltá-la do outro lado, como uma porta giratória. É assim que a glicose entra em muitas células.

Como há um número limitado de transportadores, a difusão facilitada tem um **limite de velocidade**: a partir de certa concentração, todos estão ocupados, e o fluxo para de aumentar. O comportamento segue a mesma forma da equação de Michaelis-Menten (tema 47):

\[ J = \frac{J_{max}\,C}{K_t + C} \]

## Osmose e tonicidade

**Osmose** é a passagem de **água** através de uma membrana que deixa passar a água, mas não os solutos. A água vai do lado com **menos** solutos dissolvidos para o lado com **mais** solutos, tentando igualar as concentrações. A força que move essa água é a **pressão osmótica**, que, para soluções diluídas, é dada pela equação de van't Hoff:

\[ \pi = i\,C\,R\,T \]

em que \(i\) é o número de partículas que cada unidade do soluto libera ao se dissolver (2 para o NaCl, que se separa em \(\ce{Na+}\) e \(\ce{Cl-}\)), \(C\) é a concentração, \(R\) é a constante dos gases e \(T\) é a temperatura em kelvin.

| Meio externo | O que acontece com a água | Célula animal | Célula com parede (bactéria, planta) |
|---|---|---|---|
| Hipotônico (menos solutos que a célula) | entra na célula | incha e pode estourar | fica túrgida; a parede impede que ela estoure |
| Isotônico (mesma concentração) | entra e sai igualmente | permanece normal | permanece normal |
| Hipertônico (mais solutos que a célula) | sai da célula | murcha | a membrana se descola da parede (plasmólise) |

![Transporte passivo (difusão simples e difusão facilitada, a favor da diferença de concentração) e transporte ativo (contra a diferença de concentração, com gasto de ATP).](https://upload.wikimedia.org/wikipedia/commons/a/a2/Passive_vs_Active_Membrane_Transport.svg)
Fonte: LSumi, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Passive_vs_Active_Membrane_Transport.svg).

## Transporte ativo: contra a diferença de concentração, gastando energia

Às vezes a célula precisa acumular uma substância em concentração maior do que a do ambiente, ou expulsar algo que já está mais concentrado fora. Isso exige energia.

- **Transporte ativo primário:** usa diretamente a energia do ATP. O exemplo mais conhecido é a **bomba de sódio e potássio**, que, a cada ATP gasto, joga 3 íons sódio para fora e traz 2 íons potássio para dentro. Os fungos e as plantas usam bombas que expulsam \(\ce{H+}\). Os **transportadores ABC** bombeiam substâncias para fora da célula e estão ligados à resistência de bactérias e de células tumorais a vários medicamentos.
- **Transporte ativo secundário:** aproveita a energia de uma diferença de concentração que já existe. No **simporte**, as duas substâncias atravessam no mesmo sentido; por exemplo, a glicose entra nas células do intestino junto com o sódio, e a lactose entra na *E. coli* junto com um \(\ce{H+}\). No **antiporte**, elas atravessam em sentidos opostos.
- **Translocação de grupo (em bactérias):** no sistema chamado PTS, a glicose recebe um grupo fosfato **enquanto entra** na célula. Assim modificada, ela não consegue mais sair.

## Transporte em vesículas

Moléculas grandes e partículas entram e saem dentro de pequenas bolsas de membrana:

- **Endocitose:** a célula engloba material de fora. Pode englobar partículas grandes (fagocitose), gotas de líquido (pinocitose) ou moléculas específicas reconhecidas por receptores.
- **Exocitose:** vesículas de dentro da célula se fundem com a membrana e liberam o seu conteúdo para fora. É por esse caminho que leveduras e células animais **secretam** as proteínas recombinantes que a indústria depois recolhe do meio de cultura.

## Exemplo resolvido: a pressão osmótica do soro fisiológico

O soro fisiológico tem NaCl a 0,154 mol/L (ou 154 mol por metro cúbico). Qual é a sua pressão osmótica a 37 °C (310 K)?

\[ \pi = 2\times154\times8{,}314\times310 \approx 7{,}9\times10^{5}\ \text{Pa} \approx 7{,}8\ \text{atm} \]

É uma pressão muito alta, equivalente à de uma coluna de água de quase 80 metros. Como o soro tem praticamente a mesma concentração de partículas que o interior das células, as duas pressões se equilibram, e nada acontece. Mas se uma hemácia for colocada em água pura, essa enorme diferença faz a água entrar tão rápido que a célula estoura em segundos.

## Na prática

- **Conservação de alimentos:** salgar a carne ou fazer doces com muito açúcar cria um meio hipertônico. A água sai das células dos microrganismos, que param de crescer. É um dos métodos de conservação mais antigos que existem.
- **Liberar proteínas das células:** um **choque osmótico** (uma mudança brusca na concentração do meio) libera proteínas que ficam entre as duas membranas das bactérias Gram-negativas. Células animais podem ser rompidas simplesmente colocando-as em água.
- **Estresse no biorreator:** na batelada alimentada, adicionar soluções muito concentradas aumenta a pressão osmótica do meio e pode prejudicar o crescimento e a produção.
- **Velocidade de consumo de açúcar:** a rapidez com que a célula consegue trazer o açúcar para dentro influencia o seu metabolismo e a formação de subprodutos indesejados.

> **Atenção, erros comuns:**
> A osmose é o movimento da **água** (o solvente), e não do soluto.
> A difusão facilitada usa proteínas, mas **não gasta energia**: continua sendo transporte passivo.
> "Hipertônico" descreve o meio em comparação com a célula: é o meio que tem **mais** solutos.

## Para fixar

- Transporte passivo: a favor da diferença de concentração (difusão simples, facilitada e osmose).
- Transporte ativo: contra a diferença de concentração, usando ATP (primário) ou outro gradiente (secundário).
- A osmose é poderosa: \(\pi = iCRT\) gera pressões de várias atmosferas.
`,
  referencias: [
    "JUNQUEIRA, L. C.; CARNEIRO, J. **Biologia celular e molecular**. 9. ed. Rio de Janeiro: Guanabara Koogan, 2012.",
    "ALBERTS, B. et al. **Biologia molecular da célula**. 6. ed. Porto Alegre: Artmed, 2017.",
    "LODISH, H. et al. **Biologia celular e molecular**. 7. ed. Porto Alegre: Artmed, 2014.",
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019.",
  ],
},
{
  id: "r32", num: 32,
  area: "Biologia Celular",
  disciplina: "Biologia Celular",
  titulo: "Divisão celular",
  descricao: "As fases do ciclo celular, como funcionam a mitose e a meiose, de onde vem a variabilidade genética e como a célula controla a sua própria divisão.",
  tags: ["divisão celular", "ciclo celular", "mitose", "meiose", "interfase", "crossing-over", "ciclina", "CDK", "ponto de checagem", "fissão binária"],
  conteudo: String.raw`
## O ciclo celular

Toda célula que se divide passa por uma sequência de etapas, o **ciclo celular**:

| Fase | O que acontece |
|---|---|
| G1 | a célula cresce, fabrica proteínas e organelas e "decide" se vai se dividir |
| S | o DNA é **copiado**: cada cromossomo passa a ter duas cópias idênticas, as cromátides-irmãs |
| G2 | a célula se prepara para a divisão e confere se a cópia do DNA ficou correta |
| M | **mitose** (divisão do núcleo) e **citocinese** (divisão do citoplasma) |
| G0 | um estado de "repouso", fora do ciclo; é onde ficam os neurônios e muitas células especializadas |

As fases G1, S e G2 formam juntas a **interfase**, que ocupa a maior parte do tempo. Numa célula com dois conjuntos de cromossomos (diploide), a quantidade de DNA dobra durante a fase S e volta ao valor original em cada uma das células-filhas.

## Mitose: uma célula vira duas iguais

1. **Prófase:** o DNA, até então solto no núcleo, se enrola e se condensa em cromossomos visíveis ao microscópio; começa a se formar o fuso, um conjunto de fibras de proteína.
2. **Prometáfase:** a membrana do núcleo se desfaz, e as fibras do fuso se prendem aos cromossomos, numa região chamada cinetócoro.
3. **Metáfase:** os cromossomos se alinham no meio da célula, formando a **placa equatorial**.
4. **Anáfase:** as **cromátides-irmãs** se separam e são puxadas para lados opostos da célula.
5. **Telófase:** formam-se dois novos núcleos.

![As fases da mitose: interfase, prófase, prometáfase, metáfase, anáfase e telófase, com a citocinese ao final.](https://upload.wikimedia.org/wikipedia/commons/c/c9/Mitosis_Stages.svg)
Fonte: Ali Zifan, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mitosis_Stages.svg).

Na **citocinese**, as células animais se estrangulam ao meio com um anel de proteínas contráteis; as células vegetais constroem uma nova parede no meio. O resultado são **duas células geneticamente idênticas** à original, com o mesmo número de cromossomos. É assim que um organismo cresce, repara tecidos e, em muitos microrganismos, se reproduz.

## Meiose: reduzir pela metade e misturar

A meiose produz as células reprodutivas (gametas e esporos). Depois de uma única cópia do DNA, acontecem **duas divisões** seguidas:

- **Meiose I (reducional):** na prófase I, os cromossomos **homólogos** (o vindo do pai e o vindo da mãe) se emparelham e trocam pedaços entre si. Essa troca é o **crossing-over** (ou permutação). Na anáfase I, separam-se os **homólogos**, e o número de cromossomos cai pela metade.
- **Meiose II (equacional):** é parecida com uma mitose; separam-se as **cromátides-irmãs**.

O resultado são **quatro células** com metade do número de cromossomos (haploides), todas **geneticamente diferentes** entre si.

![Mitose (à esquerda) e meiose (à direita) lado a lado: uma divisão gera duas células iguais; duas divisões seguidas geram quatro células com metade dos cromossomos.](https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Mitosis_vs._Meiosis.png/960px-Mitosis_vs._Meiosis.png)
Fonte: Edn0987, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mitosis_vs._Meiosis.png).

| | Mitose | Meiose |
|---|---|---|
| Número de divisões | 1 | 2 |
| Células formadas | 2 | 4 |
| Número de cromossomos | igual ao da célula original | metade |
| Variabilidade genética | não gera (cópias idênticas) | gera, pelo crossing-over e pela separação ao acaso dos cromossomos |
| Para que serve | crescimento, reparo, reprodução assexuada | formação de gametas e esporos |

Só a forma aleatória como os pares de cromossomos se separam já gera \(2^n\) combinações diferentes, em que \(n\) é o número de pares. Nos seres humanos, com 23 pares, são \(2^{23} \approx 8{,}4\) milhões de combinações possíveis, sem contar o crossing-over. Essa variabilidade é a base das leis de Mendel (tema 38).

## Como a célula controla a divisão

O ciclo é comandado por enzimas chamadas **quinases dependentes de ciclinas** (CDKs). Elas só funcionam quando ligadas às **ciclinas**, proteínas cuja quantidade sobe e desce a cada fase, como um relógio. Além disso, existem **pontos de checagem**, momentos em que a célula confere se está tudo certo antes de seguir em frente:

- **Na passagem de G1 para S:** o DNA está íntegro? Há condições para dividir? Se houver dano no DNA, a proteína p53 pode parar o ciclo ou levar a célula à morte programada.
- **Na passagem de G2 para M:** a cópia do DNA foi completa e correta?
- **Entre a metáfase e a anáfase:** todos os cromossomos estão presos às fibras do fuso?

A ideia dos pontos de checagem foi formulada por Hartwell e Weinert, que estudaram o ciclo celular em leveduras. O **câncer** é, essencialmente, a perda desse controle: a célula passa a se dividir sem respeitar os sinais de parada.

## Exemplo resolvido: contando cromossomos e cromátides

Uma célula tem 8 cromossomos (4 pares). O que acontece ao longo da divisão?

| Momento | Cromossomos | Cromátides | Quantidade de DNA (em relação a G1) |
|---|---|---|---|
| G1 | 8 | 8 | 1 vez |
| Metáfase da mitose | 8 | 16 | 2 vezes |
| Anáfase da mitose (a célula inteira) | 16 | 16 | 2 vezes |
| Cada célula após a meiose I | 4 | 8 | 1 vez |
| Cada célula após a meiose II | 4 | 4 | metade |

Uma regra prática: para contar cromossomos, conte os **centrômeros** (o ponto de união das cromátides). Duas cromátides unidas ainda formam um único cromossomo.

## Na prática

- **Bactérias** se dividem por **fissão binária**, sem mitose: a célula copia o DNA, cresce e se parte ao meio. A levedura *Saccharomyces cerevisiae* se divide por **brotamento**: uma pequena célula-filha "brota" da célula-mãe e cresce até se soltar. As leveduras são modelos clássicos para estudar o ciclo celular.
- **Cultivo de células animais:** em alguns processos, reduzir a temperatura na fase de produção diminui a velocidade de divisão e aumenta a quantidade de proteína produzida por célula.
- **Melhoramento de plantas:** a **colchicina**, substância que impede a formação do fuso, é usada para obter plantas com o número de cromossomos multiplicado (poliploides), muitas vezes maiores e mais produtivas. A propagação de mudas em laboratório (micropropagação) depende de sucessivas mitoses.

> **Atenção, erros comuns:**
> Achar que o DNA é copiado durante a mitose: a cópia acontece na **fase S** da interfase.
> Confundir cromossomo com cromátide.
> Dizer que a meiose II é a divisão que reduz o número de cromossomos: quem reduz é a **meiose I**, quando os homólogos se separam.

## Para fixar

- Interfase (G1, S e G2) seguida da fase M.
- A mitose mantém o número de cromossomos e gera cópias; a meiose reduz o número pela metade e gera variabilidade.
- Ciclinas, CDKs e pontos de checagem garantem que o ciclo aconteça na ordem certa.
`,
  referencias: [
    "JUNQUEIRA, L. C.; CARNEIRO, J. **Biologia celular e molecular**. 9. ed. Rio de Janeiro: Guanabara Koogan, 2012.",
    "ALBERTS, B. et al. **Biologia molecular da célula**. 6. ed. Porto Alegre: Artmed, 2017.",
    "HARTWELL, L. H.; WEINERT, T. A. Checkpoints: controls that ensure the order of cell cycle events. **Science**, v. 246, n. 4930, p. 629-634, 1989.",
    "GRIFFITHS, A. J. F. et al. **Introdução à genética**. 11. ed. Rio de Janeiro: Guanabara Koogan, 2016.",
  ],
}
);
