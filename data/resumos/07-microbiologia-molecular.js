/* BIONEXO — Resumos · Áreas 10 e 11: Microbiologia Geral (temas 33–35) e Biologia Molecular e Genética (temas 36–38) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r33", num: 33,
  area: "Microbiologia Geral e Experimental",
  disciplina: "Microbiologia Geral e Experimental",
  titulo: "Morfologia e classificação dos microrganismos",
  descricao: "Quem são os microrganismos, como são as bactérias por dentro e por fora, como funciona a coloração de Gram, como se classificam pelo metabolismo e quais são usados na indústria.",
  tags: ["microrganismo", "bactéria", "fungo", "levedura", "vírus", "bacteriófago", "coloração de Gram", "endósporo", "morfologia bacteriana", "classificação"],
  conteudo: String.raw`
## Quem são os microrganismos

São seres vivos que, em geral, só podem ser vistos ao microscópio: **bactérias** e **arqueias** (procariontes, sem núcleo), **fungos** (leveduras e bolores), **protozoários** e **microalgas**. Os **vírus** costumam ser estudados junto, mas não são células. Os nomes científicos seguem a regra de duas palavras, com o gênero e a espécie em itálico: *Escherichia coli*, que depois da primeira menção pode ser abreviada para *E. coli*.

Para quem trabalha com biotecnologia, os microrganismos têm dois papéis: são as "fábricas" que produzem etanol, enzimas, antibióticos e alimentos, e também os contaminantes que podem arruinar um lote inteiro. Reconhecê-los é o primeiro passo nos dois casos.

## Bactérias

### As formas

- **Cocos** (esféricos): podem aparecer isolados, em pares (diplococos), em cadeias (estreptococos) ou em cachos (estafilococos).
- **Bacilos** (em forma de bastão).
- **Espirilos** e **espiroquetas** (em espiral).
- **Vibriões** (em forma de vírgula).

![As formas das bactérias e os seus agrupamentos: cocos (diplococos, estreptococos, estafilococos, tétrades e sarcinas), bacilos, espirilos, vibriões, espiroquetas e outras.](https://upload.wikimedia.org/wikipedia/commons/d/de/Bacterial_morphology_diagram-pt.svg)
Fonte: Mariana Ruiz (LadyofHats), tradução de PatríciaR, domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bacterial_morphology_diagram-pt.svg).

### As estruturas e por que elas importam

| Estrutura | Função | Importância prática |
|---|---|---|
| Parede celular (peptidoglicano) | dá forma e impede que a célula estoure por osmose | é o alvo da penicilina e de antibióticos parecidos; define o resultado da coloração de Gram |
| Membrana externa (só nas Gram-negativas) | barreira extra; contém o lipopolissacarídeo (LPS) | o LPS é uma endotoxina que provoca febre; precisa ser removido de medicamentos injetáveis |
| Cápsula | ajuda a bactéria a aderir a superfícies e a se proteger | aumenta a capacidade de causar doença; deixa os caldos de fermentação mais viscosos |
| Flagelos | movimento | |
| Fímbrias e pili | aderência; troca de DNA entre bactérias (conjugação) | permitem a transferência de plasmídeos de uma bactéria para outra |
| Plasmídeos | pequenos DNAs circulares com genes extras (de resistência a antibióticos, de metabolismo) | são usados como **vetores** para levar genes de interesse para dentro das bactérias |
| Endósporos | forma de resistência a calor, secura e produtos químicos | os gêneros *Bacillus* e *Clostridium* formam endósporos, e é por causa deles que a esterilização precisa ser tão rigorosa |

### A coloração de Gram

É a coloração mais usada em microbiologia e o primeiro passo para identificar uma bactéria. Ela divide as bactérias em dois grandes grupos conforme o seu envoltório:

1. **Cristal violeta:** o primeiro corante, que pinta todas as células de roxo.
2. **Lugol:** forma um complexo com o corante, fixando-o.
3. **Álcool ou acetona:** a etapa decisiva, a descoloração.
4. **Safranina:** um segundo corante, de cor rosa.

As **Gram-positivas**, que têm uma parede grossa de peptidoglicano, seguram o corante roxo mesmo depois do álcool e aparecem **roxas**. As **Gram-negativas**, com parede fina e uma membrana externa de lipídios, perdem o roxo no álcool e ficam com a cor da safranina: aparecem **rosadas ou avermelhadas**.

![O envoltório Gram-positivo (acima): membrana plasmática e uma camada grossa de peptidoglicano. O envoltório Gram-negativo (abaixo): membrana plasmática, espaço periplasmático com uma camada fina de peptidoglicano e a membrana externa, com lipopolissacarídeo (LPS) e proteínas.](https://upload.wikimedia.org/wikipedia/commons/5/52/Gram-Cell-wall.svg)
Fonte: Graevemoore, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gram-Cell-wall.svg).

![Uma lâmina real corada pelo método de Gram: cocos Gram-positivos (roxos) e bacilos Gram-negativos (rosados).](https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Gram_negative_rods_and_gram_positive_cocci_1.jpg/960px-Gram_negative_rods_and_gram_positive_cocci_1.jpg)
Fonte: Mikael Häggström, [CC0](https://creativecommons.org/publicdomain/zero/1.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gram_negative_rods_and_gram_positive_cocci_1.jpg).

## Classificação pelo metabolismo

- **Pela fonte de energia:** os **fototróficos** usam a luz; os **quimiotróficos** obtêm energia de reações químicas.
- **Pela fonte de carbono:** os **autotróficos** usam o \(\ce{CO2}\) do ar; os **heterotróficos** precisam de compostos orgânicos, como açúcares. Os microrganismos usados na indústria são, em sua maioria, **quimio-heterotróficos**: comem açúcar e tiram energia dele.
- **Pela relação com o oxigênio:** os **aeróbios estritos** precisam de oxigênio; os **anaeróbios estritos** morrem na presença dele; os **anaeróbios facultativos** vivem com ou sem oxigênio (é o caso da *E. coli* e da levedura *S. cerevisiae*); os **microaerófilos** precisam de pouco oxigênio.
- **Pela temperatura:** os **psicrófilos** preferem o frio; os **mesófilos**, temperaturas moderadas (entre 20 e 45 °C, a faixa da maioria dos microrganismos industriais); os **termófilos** e **hipertermófilos**, temperaturas altas. A enzima *Taq* polimerase, usada na PCR, vem de *Thermus aquaticus*, uma bactéria que vive em fontes de água quente (tema 56).

## Fungos

São eucariontes que se alimentam absorvendo compostos orgânicos do ambiente. A sua parede é feita de **quitina**, e a sua membrana tem **ergosterol** no lugar do colesterol.

- **Leveduras:** são fungos formados por uma única célula, que geralmente se reproduzem por **brotamento**. A *Saccharomyces cerevisiae* é a levedura do pão, da cerveja e do etanol.
- **Fungos filamentosos (bolores):** crescem formando filamentos chamados **hifas**, cujo conjunto é o **micélio**, e se espalham por esporos. Exemplos: *Aspergillus*, *Penicillium* e *Trichoderma*. Na indústria, o crescimento em filamentos deixa o caldo grosso e viscoso e dificulta a mistura e a entrada de oxigênio.

## Vírus

São formados por um material genético (DNA **ou** RNA) envolvido por uma capa de proteína (o **capsídeo**), às vezes coberta por um envelope de lipídios. Só se multiplicam dentro de uma célula e **não são afetados por antibióticos**. Os vírus que atacam bactérias, os **bacteriófagos**, são um problema sério nas fermentações de laticínios, porque podem destruir as bactérias do iogurte ou do queijo. Ao mesmo tempo, são ferramentas úteis: servem para tratar infecções bacterianas (fagoterapia) e, modificados, para levar genes para dentro de células em vacinas e terapias gênicas.

## Microrganismos usados na indústria

| Grupo | Exemplos | O que produzem |
|---|---|---|
| Bactérias | *E. coli*, *Bacillus subtilis*, *Corynebacterium glutamicum*, *Lactobacillus*, *Clostridium acetobutylicum* | proteínas recombinantes, enzimas, aminoácidos, laticínios, solventes |
| Leveduras | *Saccharomyces cerevisiae*, *Komagataella phaffii* | etanol, pão, cerveja, proteínas recombinantes |
| Fungos filamentosos | *Aspergillus niger*, *Penicillium chrysogenum*, *Trichoderma reesei* | ácido cítrico, penicilina, celulases |
| Arqueias | metanogênicas | biogás (metano) |
| Microalgas | *Arthrospira* (espirulina), *Chlorella* | biomassa alimentar, pigmentos, lipídios |

## Exemplo resolvido

Uma bactéria isolada do solo foi analisada: são **bacilos Gram-positivos**, que formam **endósporos**, crescem com oxigênio e dão resultado positivo no teste da catalase (uma enzima que decompõe a água oxigenada). Esse conjunto de características sugere o gênero *Bacillus*, muito usado na produção industrial de enzimas como proteases e amilases. A presença de endósporos indica que o processo e os equipamentos vão exigir esterilização rigorosa com vapor (tema 35). Para confirmar a espécie, seriam necessários outros testes bioquímicos ou o sequenciamento do gene 16S (tema 62).

> **Atenção, erros comuns:**
> Associar Gram-positiva ou Gram-negativa com bactéria "boa" ou "ruim": o resultado do Gram descreve o **envoltório**, e não a capacidade de causar doença.
> Esquecer que as leveduras são **fungos**.
> Tratar os vírus como células, ou achar que antibióticos funcionam contra eles.

## Para fixar

- A forma e a coloração de Gram são os primeiros passos para identificar uma bactéria.
- A relação com o oxigênio e com a temperatura define as condições de cultivo.
- Cada grupo de microrganismos tem as suas aplicações industriais típicas.
`,
  referencias: [
    "TORTORA, G. J.; FUNKE, B. R.; CASE, C. L. **Microbiologia**. 12. ed. Porto Alegre: Artmed, 2017.",
    "MADIGAN, M. T. et al. **Microbiologia de Brock**. 14. ed. Porto Alegre: Artmed, 2016.",
    "PELCZAR, M. J.; CHAN, E. C. S.; KRIEG, N. R. **Microbiologia**: conceitos e aplicações. 2. ed. São Paulo: Makron Books, 1996. 2 v.",
  ],
},
{
  id: "r34", num: 34,
  area: "Microbiologia Geral e Experimental",
  disciplina: "Microbiologia Geral e Experimental",
  titulo: "Curva de crescimento microbiano",
  descricao: "Como uma população de microrganismos cresce num frasco fechado, as quatro fases da curva, como calcular o tempo de geração e como medir o crescimento no laboratório.",
  tags: ["curva de crescimento", "fase lag", "fase exponencial", "fase estacionária", "tempo de geração", "UFC", "contagem em placa", "densidade óptica", "diauxia"],
  conteudo: String.raw`
## Crescer, para um microrganismo, é multiplicar

Quando um microbiologista fala em "crescimento", quase sempre se refere ao **aumento do número de células** da população, e não ao aumento de tamanho de cada célula. Numa bactéria que se divide por fissão binária, cada célula dá origem a duas. Depois de \(n\) divisões (\(n\) **gerações**), a população inicial \(N_0\) se transforma em:

\[ N = N_0\,2^{n} \qquad\Rightarrow\qquad n = \frac{\log N - \log N_0}{\log 2} \approx 3{,}3\,(\log N - \log N_0) \]

O **tempo de geração** é o tempo que a população leva para dobrar: \(g = t/n\). Ele varia muito: cerca de 20 minutos para a *E. coli* em meio rico e boas condições, e horas ou dias para outros microrganismos.

## As quatro fases do cultivo em batelada

Quando microrganismos são colocados num frasco com meio de cultura e nada mais é adicionado nem retirado (um cultivo em **batelada**), a população segue uma curva típica, mais fácil de ver num gráfico do **logaritmo** do número de células contra o tempo:

1. **Fase lag (adaptação):** a população quase não aumenta, mas as células estão longe de paradas. Estão fabricando as enzimas necessárias para usar o novo meio e se ajustando às novas condições. Essa fase é mais longa quando as células do inóculo são velhas ou vieram de um meio muito diferente.
2. **Fase exponencial (ou log):** as células se dividem na maior velocidade possível para aquelas condições, e o número dobra a intervalos regulares. As células estão em bom estado e são parecidas entre si. Por isso, os inóculos dos processos industriais são retirados nessa fase.
3. **Fase estacionária:** os nutrientes começam a acabar e produtos tóxicos se acumulam. O número de células que nascem se iguala ao número das que morrem, e a população para de crescer. É nessa fase que muitos microrganismos produzem **metabólitos secundários**, como os antibióticos.
4. **Fase de declínio (ou de morte):** as mortes passam a superar os nascimentos, e a população diminui.

![A curva de crescimento em batelada (logaritmo do número de células contra o tempo), com as fases lag, exponencial, estacionária e de morte.](https://upload.wikimedia.org/wikipedia/commons/c/c0/Bacterial_growth_en.svg)
Fonte: Michał Komorniczak, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bacterial_growth_en.svg).

Por que usar o logaritmo no eixo vertical? Porque, na fase exponencial, o logaritmo do número de células aumenta em **linha reta** com o tempo (tema 1). A inclinação dessa reta mede diretamente a velocidade de crescimento.

## Como medir o crescimento no laboratório

| Método | O que mede | Observações |
|---|---|---|
| Contagem em placa | apenas células **vivas** capazes de formar colônia (UFC/mL) | exige diluições seriadas; usam-se placas com 30 a 300 colônias |
| Câmara de Neubauer (contagem ao microscópio) | todas as células, vivas e mortas | é rápida; com corantes como o azul de metileno, dá para diferenciar leveduras vivas e mortas |
| Turbidez (densidade óptica a 600 nm) | a quantidade de biomassa, de forma indireta | é rápida e não destrói a amostra; precisa de uma curva de calibração e de diluir as amostras muito turvas |
| Massa seca | a biomassa, em gramas por litro | é a medida de referência em bioprocessos, mas é demorada |
| Número mais provável (NMP) | células vivas, por estimativa estatística | muito usado em análises de água e alimentos |

**UFC** significa **unidade formadora de colônia**. Uma colônia pode ter nascido de uma única célula ou de um grupinho de células grudadas, por isso não se fala em "células por mL".

## Exemplos resolvidos

**1. Contagem em placa.** Espalhou-se 0,1 mL da diluição \(10^{-6}\) numa placa, e cresceram 156 colônias. Qual a concentração na amostra original?

\[ \frac{156\ \text{UFC}}{0{,}1\ \text{mL}\times10^{-6}} = 1{,}56\times10^{9}\ \text{UFC/mL} \]

Divide-se pelo volume semeado e pela diluição, para "desfazer" as diluições.

**2. Tempo de geração.** Na fase exponencial, a população passou de \(10^4\) para \(10^8\) células por mL em 4 horas. Qual o tempo de geração?

\[ n = \frac{\log 10^8 - \log 10^4}{\log 2} = \frac{4}{0{,}301} \approx 13{,}3\ \text{gerações}, \qquad g = \frac{240\ \text{min}}{13{,}3} \approx 18\ \text{min} \]

Em termos da velocidade específica de crescimento usada na engenharia (tema 46): \(\mu = \dfrac{\ln 2}{g} = \dfrac{0{,}693}{0{,}301\ \text{h}} \approx 2{,}3\ \text{h}^{-1}\).

## Crescimento diáuxico: quando há dois açúcares

Se o meio tem **duas fontes de carbono**, como glicose e lactose, a *E. coli* consome primeiro a glicose. Quando ela acaba, há uma nova pausa (uma nova fase lag), enquanto a bactéria liga os genes necessários para usar a lactose, e depois um segundo crescimento exponencial. Esse fenômeno, descrito por Jacques Monod, levou à descoberta de como os genes são ligados e desligados (o óperon *lac*, tema 37).

## Do frasco ao biorreator

A batelada é só uma das formas de cultivar. Na **batelada alimentada**, nutrientes são adicionados aos poucos, prolongando o crescimento e evitando que o excesso de açúcar atrapalhe. No **cultivo contínuo** (quimiostato), entra meio novo e sai meio com células o tempo todo, e a população pode ser mantida crescendo indefinidamente numa velocidade escolhida pelo operador (temas 4 e 50).

> **Atenção, erros comuns:**
> Converter densidade óptica em número de células sem uma curva de calibração.
> Achar que na fase lag as células estão paradas: elas estão se adaptando ativamente.
> Calcular a contagem a partir de placas com mais de 300 ou menos de 30 colônias.

## Para fixar

- \(N = N_0\,2^n\); o tempo de geração é \(g = t/n\); e \(\mu = \ln2/g\).
- As fases são: lag, exponencial, estacionária e declínio.
- Cada método mede algo diferente: células vivas, células totais ou biomassa.
`,
  referencias: [
    "TORTORA, G. J.; FUNKE, B. R.; CASE, C. L. **Microbiologia**. 12. ed. Porto Alegre: Artmed, 2017.",
    "MADIGAN, M. T. et al. **Microbiologia de Brock**. 14. ed. Porto Alegre: Artmed, 2016.",
    "PELCZAR, M. J.; CHAN, E. C. S.; KRIEG, N. R. **Microbiologia**: conceitos e aplicações. 2. ed. São Paulo: Makron Books, 1996. 2 v.",
    "MONOD, J. The growth of bacterial cultures. **Annual Review of Microbiology**, v. 3, p. 371-394, 1949.",
  ],
},
{
  id: "r35", num: 35,
  area: "Microbiologia Geral e Experimental",
  disciplina: "Microbiologia Geral e Experimental",
  titulo: "Controle do crescimento microbiano",
  descricao: "A diferença entre esterilizar, desinfetar e fazer antissepsia, como os microrganismos morrem com o calor, os métodos físicos e químicos de controle e como calcular o tempo de esterilização.",
  tags: ["esterilização", "desinfecção", "antissepsia", "autoclave", "valor D", "valor Z", "pasteurização", "filtração esterilizante", "álcool 70", "antibiótico"],
  conteudo: String.raw`
## Por que isso é essencial

Num laboratório de microbiologia ou numa indústria de fermentação, um único microrganismo indesejado pode estragar um experimento ou um lote de milhares de litros. Por outro lado, o calor excessivo pode destruir nutrientes do meio de cultura. Controlar o crescimento microbiano é encontrar o equilíbrio: eliminar o que precisa ser eliminado, sem danificar o resto.

## Os termos certos

| Termo | O que significa |
|---|---|
| Esterilização | eliminar **todas** as formas de vida, inclusive os endósporos, que são as formas mais resistentes |
| Desinfecção | reduzir os microrganismos (principalmente os que causam doenças) em **objetos e superfícies** |
| Antissepsia | reduzir os microrganismos em **tecidos vivos**, como a pele |
| Sanitização | reduzir os microrganismos a níveis considerados seguros, como na limpeza de equipamentos de alimentos |
| Assepsia | o conjunto de cuidados que **evitam** que uma contaminação aconteça |
| -cida e -stático | "bactericida" mata; "bacteriostático" apenas impede o crescimento |

## Como os microrganismos morrem com o calor

<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Morte térmica</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Morte térmica: a redução e sempre por fatores de dez</text><rect x="60" y="56" width="380" height="190" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="136" y1="56" x2="136" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="212" y1="56" x2="212" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="288" y1="56" x2="288" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="364" y1="56" x2="364" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="440" y1="56" x2="440" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="218.857" x2="440" y2="218.857" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="191.714" x2="440" y2="191.714" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="164.571" x2="440" y2="164.571" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="137.429" x2="440" y2="137.429" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="110.286" x2="440" y2="110.286" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="83.1429" x2="440" y2="83.1429" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="56" x2="60" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="60" y1="246" x2="440" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="136" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">5</text><text x="212" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">10</text><text x="288" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">15</text><text x="364" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">20</text><text x="440" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">25</text><text x="54" y="222.357" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="54" y="195.214" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="54" y="168.071" font-size="10.5" text-anchor="end" fill="#8a8a93">3</text><text x="54" y="140.929" font-size="10.5" text-anchor="end" fill="#8a8a93">4</text><text x="54" y="113.786" font-size="10.5" text-anchor="end" fill="#8a8a93">5</text><text x="54" y="86.6429" font-size="10.5" text-anchor="end" fill="#8a8a93">6</text><text x="444" y="250" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">tempo (min)</text><text x="56" y="50" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">log N</text><path d="M60.0,83.1L61.7,83.8L63.5,84.4L65.2,85.0L66.9,85.6L68.6,86.2L70.4,86.8L72.1,87.5L73.8,88.1L75.5,88.7L77.3,89.3L79.0,89.9L80.7,90.5L82.5,91.2L84.2,91.8L85.9,92.4L87.6,93.0L89.4,93.6L91.1,94.2L92.8,94.9L94.5,95.5L96.3,96.1L98.0,96.7L99.7,97.3L101.5,97.9L103.2,98.6L104.9,99.2L106.6,99.8L108.4,100.4L110.1,101.0L111.8,101.6L113.5,102.3L115.3,102.9L117.0,103.5L118.7,104.1L120.5,104.7L122.2,105.4L123.9,106.0L125.6,106.6L127.4,107.2L129.1,107.8L130.8,108.4L132.5,109.1L134.3,109.7L136.0,110.3L137.7,110.9L139.5,111.5L141.2,112.1L142.9,112.8L144.6,113.4L146.4,114.0L148.1,114.6L149.8,115.2L151.5,115.8L153.3,116.5L155.0,117.1L156.7,117.7L158.5,118.3L160.2,118.9L161.9,119.5L163.6,120.2L165.4,120.8L167.1,121.4L168.8,122.0L170.5,122.6L172.3,123.2L174.0,123.9L175.7,124.5L177.5,125.1L179.2,125.7L180.9,126.3L182.6,126.9L184.4,127.6L186.1,128.2L187.8,128.8L189.5,129.4L191.3,130.0L193.0,130.6L194.7,131.3L196.5,131.9L198.2,132.5L199.9,133.1L201.6,133.7L203.4,134.3L205.1,135.0L206.8,135.6L208.5,136.2L210.3,136.8L212.0,137.4L213.7,138.0L215.5,138.7L217.2,139.3L218.9,139.9L220.6,140.5L222.4,141.1L224.1,141.7L225.8,142.4L227.5,143.0L229.3,143.6L231.0,144.2L232.7,144.8L234.5,145.4L236.2,146.1L237.9,146.7L239.6,147.3L241.4,147.9L243.1,148.5L244.8,149.1L246.5,149.8L248.3,150.4L250.0,151.0L251.7,151.6L253.5,152.2L255.2,152.9L256.9,153.5L258.6,154.1L260.4,154.7L262.1,155.3L263.8,155.9L265.5,156.6L267.3,157.2L269.0,157.8L270.7,158.4L272.5,159.0L274.2,159.6L275.9,160.3L277.6,160.9L279.4,161.5L281.1,162.1L282.8,162.7L284.5,163.3L286.3,164.0L288.0,164.6L289.7,165.2L291.5,165.8L293.2,166.4L294.9,167.0L296.6,167.7L298.4,168.3L300.1,168.9L301.8,169.5L303.5,170.1L305.3,170.7L307.0,171.4L308.7,172.0L310.5,172.6L312.2,173.2L313.9,173.8L315.6,174.4L317.4,175.1L319.1,175.7L320.8,176.3L322.5,176.9L324.3,177.5L326.0,178.1L327.7,178.8L329.5,179.4L331.2,180.0L332.9,180.6L334.6,181.2L336.4,181.8L338.1,182.5L339.8,183.1L341.5,183.7L343.3,184.3L345.0,184.9L346.7,185.5L348.5,186.2L350.2,186.8L351.9,187.4L353.6,188.0L355.4,188.6L357.1,189.2L358.8,189.9L360.5,190.5L362.3,191.1L364.0,191.7L365.7,192.3L367.5,192.9L369.2,193.6L370.9,194.2L372.6,194.8L374.4,195.4L376.1,196.0L377.8,196.6L379.5,197.3L381.3,197.9L383.0,198.5L384.7,199.1L386.5,199.7L388.2,200.4L389.9,201.0L391.6,201.6L393.4,202.2L395.1,202.8L396.8,203.4L398.5,204.1L400.3,204.7L402.0,205.3L403.7,205.9L405.5,206.5L407.2,207.1L408.9,207.8L410.6,208.4L412.4,209.0L414.1,209.6L415.8,210.2L417.5,210.8L419.3,211.5L421.0,212.1L422.7,212.7L424.5,213.3L426.2,213.9L427.9,214.5L429.6,215.2L431.4,215.8L433.1,216.4L434.8,217.0L436.5,217.6L438.3,218.2L440.0,218.9" fill="none" stroke="#d33a4e" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="60" y1="110.286" x2="136" y2="110.286" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="136" y1="246" x2="136" y2="110.286" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="60" y1="137.429" x2="212" y2="137.429" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="212" y1="246" x2="212" y2="137.429" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="60" y1="164.571" x2="288" y2="164.571" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="288" y1="246" x2="288" y2="164.571" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="60" y1="191.714" x2="364" y2="191.714" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="364" y1="246" x2="364" y2="191.714" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="60" y1="218.857" x2="440" y2="218.857" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="440" y1="246" x2="440" y2="218.857" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="136" y1="94" x2="212" y2="94" stroke="#a300bc" stroke-width="1.8" stroke-linecap="round" marker-start="url(#a-rx)" marker-end="url(#a-rx)"/><text x="174" y="85.8571" font-size="10.5" text-anchor="middle" fill="#a300bc" font-weight="700">valor D</text><text x="174" y="75" font-size="9.6" text-anchor="middle" fill="#5c5c66">reduz 90%</text><text x="250" y="268" font-size="10.5" text-anchor="middle" fill="#5c5c66">cada D derruba uma potencia de dez</text><rect x="470" y="62" width="230" height="180" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="585" y="86" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">por que nunca chega a zero</text><text x="585" y="112" font-size="10" text-anchor="middle" fill="#5c5c66">A morte segue cinetica de</text><text x="585" y="126" font-size="10" text-anchor="middle" fill="#5c5c66">primeira ordem: some sempre</text><text x="585" y="140" font-size="10" text-anchor="middle" fill="#5c5c66">a mesma fracao, nunca tudo.</text><text x="585" y="168" font-size="10.4" text-anchor="middle" fill="#d33a4e" font-weight="700">esterilidade comercial</text><text x="585" y="186" font-size="10" text-anchor="middle" fill="#333333">trabalha-se com probabilidade</text><text x="585" y="200" font-size="10" text-anchor="middle" fill="#333333">de sobrevivencia, como 1 em</text><text x="585" y="214" font-size="10" text-anchor="middle" fill="#333333">um milhao de unidades.</text><text x="20" y="290" font-size="10.4" text-anchor="start" fill="#5c5c66">O valor z diz quantos graus mudam o D por um fator de dez, e permite comparar tratamentos em temperaturas diferentes.</text></svg>
A morte térmica é exponencial: cada valor D reduz a população a um décimo.

Sob uma temperatura letal constante, os microrganismos não morrem todos de uma vez. A cada intervalo de tempo morre uma **fração fixa** da população, e a quantidade de sobreviventes cai de forma exponencial: \(N = N_0\,e^{-kt}\). Na prática, usa-se o **valor D** (tempo de redução decimal): o tempo necessário, numa certa temperatura, para eliminar 90% da população, ou seja, para reduzi-la a um décimo.

\[ \log N = \log N_0 - \frac{t}{D} \]

- **Valor Z:** é o aumento de temperatura necessário para que o valor D fique dez vezes menor.
- **Nível de garantia de esterilidade:** para produtos estéreis, costuma-se exigir uma chance de no máximo um em um milhão (\(10^{-6}\)) de uma unidade conter um microrganismo vivo.

Do mais resistente para o menos resistente, em ordem aproximada: príons, endósporos bacterianos, micobactérias, vírus sem envelope, fungos, bactérias comuns e vírus com envelope.

## Métodos físicos

| Método | Condição típica | Para que se usa | Observação |
|---|---|---|---|
| Calor úmido (autoclave) | 121 °C, cerca de 1 atmosfera acima da pressão ambiente, de 15 a 20 minutos | meios de cultura, vidrarias, resíduos | é o método de referência; o vapor desnatura as proteínas das células com muita eficiência |
| Calor seco (estufa) | 160 a 170 °C por cerca de 2 horas | vidrarias e objetos de metal | é mais lento que o calor úmido |
| Flambagem e incineração | chama direta | alça de semeadura; descarte de material | |
| Pasteurização | 63 °C por 30 minutos ou 72 °C por 15 segundos | leite e sucos | **não** esteriliza; elimina os microrganismos que causam doenças e que não formam esporos |
| UHT (temperatura ultra-alta) | 135 a 150 °C por poucos segundos | leite longa vida | preserva melhor o sabor |
| Filtração | membranas com poros de 0,22 micrômetro | soluções que não aguentam calor (vitaminas, antibióticos, soro); ar que entra nos biorreatores | não garante a retenção de vírus |
| Radiação ultravioleta | comprimento de onda próximo de 260 nm | superfícies; ar das cabines de segurança | danifica o DNA; não atravessa materiais |
| Radiação ionizante | raios gama ou feixe de elétrons | materiais descartáveis, como placas e seringas | atravessa as embalagens |
| Refrigeração e congelamento | abaixo de 5 °C | conservação | em geral, só impede o crescimento |

## Métodos químicos

- **Álcool 70%** (etanol ou isopropanol): desnatura proteínas e dissolve lipídios. Curiosamente, a 70% ele é **mais eficaz** do que puro, porque a água é necessária para a desnaturação e faz o álcool evaporar mais devagar, ficando mais tempo em contato. Não mata endósporos.
- **Compostos de cloro e iodo:** a água sanitária (hipoclorito de sódio) e o iodo (como o PVPI, usado em cirurgias).
- **Peróxido de hidrogênio e ácido peracético:** agem por oxidação; o ácido peracético é muito usado na limpeza de equipamentos industriais.
- **Quaternários de amônio:** detergentes usados em superfícies.
- **Aldeídos** (glutaraldeído, formaldeído): conseguem esterilizar, mas exigem longo tempo de contato e são tóxicos.
- **Óxido de etileno:** um gás esterilizante, usado em materiais que não aguentam calor.

Os **antibióticos** agem de forma seletiva sobre partes exclusivas das bactérias: a parede celular (penicilinas), o ribossomo 70S (tetraciclinas, aminoglicosídeos), uma enzima que enrola o DNA (quinolonas), a membrana (polimixinas) ou a produção de ácido fólico (sulfas). Em biotecnologia, genes de resistência a antibióticos são usados como **marcadores de seleção**: só as células que receberam o plasmídeo de interesse conseguem crescer num meio com o antibiótico.

## Exemplo resolvido: quanto tempo esterilizar?

Uma população de esporos tem \(D_{121} = 1{,}5\) minuto. Partindo de \(10^6\) esporos e exigindo uma chance de sobrevivência de \(10^{-6}\), quanto tempo é preciso a 121 °C?

De \(10^6\) para \(10^{-6}\) são **12 reduções decimais** (12 "casas" a menos). Então:

\[ t = 12\times D = 12\times1{,}5 = 18\ \text{minutos a } 121\ °\text{C} \]

Se o valor Z for 10 °C, a 111 °C o valor D fica dez vezes maior (15 minutos), e o mesmo resultado exigiria 180 minutos. Essa é a lógica do chamado "conceito 12D", usado no processamento térmico de alimentos enlatados para garantir a eliminação dos esporos de *Clostridium botulinum*.

## Na prática: esterilização em bioprocessos

- Os meios de cultura são esterilizados **dentro do próprio biorreator**, com injeção de vapor, ou em **sistemas contínuos**, que aquecem o meio a temperaturas mais altas por menos tempo. Isso reduz a destruição de vitaminas e o escurecimento do meio (a reação de Maillard, entre açúcares e aminoácidos).
- O **ar** usado na aeração é esterilizado por filtração.
- Na autoclave, o tempo deve ser contado a partir do momento em que **o material** atinge 121 °C, e não a câmara. Frascos com volumes grandes de líquido demoram bastante para aquecer por dentro.

> **Atenção, erros comuns:**
> Achar que a pasteurização esteriliza.
> Usar álcool puro achando que ele é mais forte que o álcool 70%.
> Confiar que a filtração com poros de 0,22 micrômetro remove vírus.

## Para fixar

- Esterilizar elimina tudo, inclusive os endósporos; desinfetar e fazer antissepsia apenas reduzem.
- A morte pelo calor é exponencial; os valores D e Z permitem calcular os tempos de esterilização.
- O calor úmido é o método de referência; a filtração e a radiação resolvem o que não aguenta calor.
`,
  referencias: [
    "TORTORA, G. J.; FUNKE, B. R.; CASE, C. L. **Microbiologia**. 12. ed. Porto Alegre: Artmed, 2017.",
    "BRASIL. Agência Nacional de Vigilância Sanitária. **Resolução RDC nº 15, de 15 de março de 2012**. Dispõe sobre requisitos de boas práticas para o processamento de produtos para saúde. Brasília: ANVISA, 2012.",
    "SCHMIDELL, W. et al. (coord.). **Biotecnologia industrial**. v. 2: Engenharia bioquímica. São Paulo: Blucher, 2001.",
    "MADIGAN, M. T. et al. **Microbiologia de Brock**. 14. ed. Porto Alegre: Artmed, 2016.",
    "RUTALA, W. A.; WEBER, D. J.; HEALTHCARE INFECTION CONTROL PRACTICES ADVISORY COMMITTEE. **Guideline for disinfection and sterilization in healthcare facilities, 2008**. Atlanta: Centers for Disease Control and Prevention, 2008.",
  ],
},
{
  id: "r36", num: 36,
  area: "Biologia Molecular e Genética",
  disciplina: "Biologia Molecular",
  titulo: "Estrutura e replicação do DNA",
  descricao: "Como é formada a molécula de DNA, como ela se organiza dentro das células, como é copiada antes de cada divisão e como esse conhecimento deu origem à PCR.",
  tags: ["DNA", "nucleotídeo", "dupla hélice", "Chargaff", "replicação", "semiconservativa", "DNA polimerase", "fragmentos de Okazaki", "PCR", "Meselson-Stahl"],
  conteudo: String.raw`
## As peças do DNA: os nucleotídeos

O DNA é uma longa cadeia formada por unidades chamadas **nucleotídeos**. Cada nucleotídeo tem três partes: um **grupo fosfato**, um **açúcar** (a desoxirribose, no DNA; a ribose, no RNA) e uma **base nitrogenada**. As bases são de dois tipos:

- **purinas**, maiores, com dois anéis: adenina (A) e guanina (G);
- **pirimidinas**, menores, com um anel: citosina (C), timina (T, só no DNA) e uracila (U, só no RNA).

Os nucleotídeos se ligam uns aos outros pelo açúcar e pelo fosfato, formando o "esqueleto" da fita. Essa ligação acontece sempre entre o carbono de número 3' de um açúcar e o carbono 5' do seguinte. Por isso, cada fita tem um **sentido**: uma ponta 5' e uma ponta 3'. Esse detalhe será importante para entender como o DNA é copiado.

## A dupla hélice

Em 1953, James Watson e Francis Crick propuseram o modelo da dupla hélice, com base nas imagens de difração de raios X obtidas por Rosalind Franklin e Maurice Wilkins:

- duas fitas enroladas uma na outra, como uma escada em espiral;
- as fitas correm em sentidos opostos (são **antiparalelas**): uma vai de 5' para 3', e a outra, de 3' para 5';
- as bases ficam no meio, como os degraus da escada, e o esqueleto de açúcar e fosfato fica do lado de fora;
- as bases se encaixam sempre aos pares: **A com T** (unidas por duas ligações de hidrogênio) e **G com C** (unidas por três);
- cada volta completa da hélice tem cerca de 10,5 pares de bases.

![A dupla hélice do DNA: o esqueleto de açúcar e fosfato por fora e os pares de bases (A–T e G–C) por dentro.](https://upload.wikimedia.org/wikipedia/commons/b/b8/DNA-structure-and-bases.png)
Fonte: domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:DNA-structure-and-bases.png).

Desse pareamento vêm as **regras de Chargaff**: num DNA de fita dupla, a quantidade de A é igual à de T, e a de G é igual à de C. E como G e C se unem por três ligações (uma a mais que A e T), quanto maior o teor de G + C, mais estável é a dupla hélice e mais calor é preciso para separar as fitas.

## Como o DNA se organiza nas células

- **Procariontes:** geralmente têm um único cromossomo circular, compactado numa região chamada nucleoide, e muitas vezes também **plasmídeos**, pequenas moléculas circulares extras.
- **Eucariontes:** têm vários cromossomos lineares dentro do núcleo, enrolados em proteínas chamadas histonas, como linha num carretel. Cada "carretel", com cerca de 147 pares de bases enrolados, é um **nucleossomo**. As pontas dos cromossomos, os **telômeros**, são mantidas por uma enzima especial, a telomerase.

## A replicação é semiconservativa

Antes de cada divisão celular, o DNA precisa ser copiado. As duas fitas se separam, e cada uma serve de **molde** para a fabricação de uma fita nova. Assim, cada DNA "filho" fica com uma fita antiga e uma recém-feita. Por isso a replicação é chamada de **semiconservativa**.

Isso foi provado por Matthew Meselson e Franklin Stahl em 1958. Eles cultivaram bactérias num meio com nitrogênio pesado (\(^{15}\)N) até que todo o DNA ficasse "pesado". Depois, passaram as bactérias para um meio com nitrogênio comum (\(^{14}\)N) e separaram o DNA pela densidade. Após uma geração, todo o DNA tinha densidade intermediária; após duas, metade era intermediária e metade era leve. Exatamente o que o modelo semiconservativo previa.

## As enzimas da replicação

| Enzima ou proteína | O que faz |
|---|---|
| Helicase | abre a dupla hélice, separando as fitas |
| Topoisomerase (DNA girase) | alivia a torção que se forma à frente da abertura |
| Proteínas de ligação à fita simples | mantêm as fitas separadas e estáveis |
| Primase | fabrica um pequeno trecho de RNA, o **primer**, que serve de ponto de partida |
| DNA polimerase | adiciona os nucleotídeos e monta a fita nova, sempre no sentido 5' → 3'; também confere e corrige erros |
| DNA ligase | une os pedaços de fita, selando as emendas |

![A forquilha de replicação: helicase, topoisomerase, proteínas de ligação à fita simples, primase, DNA polimerases, a fita contínua e a fita descontínua com os fragmentos de Okazaki, e a ligase. A figura usa a grafia de Portugal: ADN significa DNA, ARN significa RNA e "cadeia" significa fita.](https://upload.wikimedia.org/wikipedia/commons/e/e1/DNA_replication_pt.svg)
Fonte: Mariana Ruiz (LadyofHats), tradução de Lijealso, domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:DNA_replication_pt.svg).

Como a polimerase só consegue montar a fita no sentido 5' → 3' e precisa de um primer para começar, as duas fitas são copiadas de jeitos diferentes. Uma delas é copiada de forma **contínua**, acompanhando a abertura (a **fita líder**). A outra é copiada aos pedaços, de trás para a frente (a **fita descontínua**); esses pedaços se chamam **fragmentos de Okazaki** e depois são unidos pela ligase. A replicação começa em pontos específicos, chamados **origens**: o cromossomo bacteriano tem uma; os cromossomos eucarióticos têm muitas. Graças à correção feita pela própria polimerase e aos sistemas de reparo, a cópia é extremamente fiel: cerca de um erro a cada um a dez bilhões de nucleotídeos.

## Exemplos resolvidos

**1. Regra de Chargaff.** Um DNA de fita dupla tem 30% de adenina. Quais são as porcentagens das outras bases? Como A = T, há 30% de timina. Sobram 40% para G + C, e como G = C, há **20% de guanina e 20% de citosina**.

**2. Meselson e Stahl após três gerações.** Partindo de uma molécula "pesada", depois de três gerações em meio leve há 8 moléculas: 2 híbridas (com uma fita pesada e uma leve) e 6 totalmente leves.

**3. A PCR.** A **reação em cadeia da polimerase** é a replicação feita num tubo de ensaio, de forma controlada (tema 56). Repetem-se ciclos de três etapas: separar as fitas aquecendo a cerca de 95 °C, ligar os primers a uma temperatura entre 50 e 65 °C e montar as fitas novas a 72 °C, com a *Taq* polimerase, uma enzima que aguenta o calor. Em condições ideais, a quantidade do trecho copiado dobra a cada ciclo. Partindo de 100 cópias, depois de 30 ciclos:

\[ 100\times2^{30} \approx 1{,}1\times10^{11}\ \text{cópias} \]

Na prática, a eficiência é um pouco menor que 100%, e a reação deixa de crescer nos últimos ciclos, quando os reagentes começam a acabar.

> **Atenção, erros comuns:**
> Esquecer que as fitas são **antiparalelas**.
> Dizer que a DNA polimerase começa uma fita sozinha: ela precisa de um **primer**.
> Achar que as duas fitas têm fragmentos de Okazaki: só a fita **descontínua** tem.

## Para fixar

- O DNA é uma dupla hélice de fitas antiparalelas, com os pares A–T e G–C.
- A replicação é semiconservativa e acontece sempre no sentido 5' → 3', a partir de primers.
- A PCR, o sequenciamento e a clonagem são aplicações diretas desses princípios.
`,
  referencias: [
    "ZAHA, A.; FERREIRA, H. B.; PASSAGLIA, L. M. P. (org.). **Biologia molecular básica**. 5. ed. Porto Alegre: Artmed, 2014.",
    "WATSON, J. D. et al. **Biologia molecular do gene**. 7. ed. Porto Alegre: Artmed, 2015.",
    "WATSON, J. D.; CRICK, F. H. C. Molecular structure of nucleic acids: a structure for deoxyribose nucleic acid. **Nature**, v. 171, n. 4356, p. 737-738, 1953.",
    "MESELSON, M.; STAHL, F. W. The replication of DNA in Escherichia coli. **Proceedings of the National Academy of Sciences of the USA**, v. 44, n. 7, p. 671-682, 1958.",
    "SAIKI, R. K. et al. Primer-directed enzymatic amplification of DNA with a thermostable DNA polymerase. **Science**, v. 239, n. 4839, p. 487-491, 1988.",
  ],
},
{
  id: "r37", num: 37,
  area: "Biologia Molecular e Genética",
  disciplina: "Biologia Molecular",
  titulo: "Transcrição e tradução",
  descricao: "Como a informação do DNA vira proteína: a fabricação do RNA, o código genético, o trabalho do ribossomo e como esse conhecimento é usado para produzir proteínas recombinantes.",
  tags: ["transcrição", "tradução", "RNA polimerase", "promotor", "splicing", "código genético", "códon", "ribossomo", "tRNA", "óperon lac", "expressão heteróloga"],
  conteudo: String.raw`
## O caminho da informação: o dogma central

Francis Crick resumiu o fluxo da informação nas células numa ideia conhecida como **dogma central da biologia molecular**: o DNA é copiado (**replicação**), o DNA é lido e transformado em RNA (**transcrição**), e o RNA mensageiro é lido e transformado em proteína (**tradução**). Existem exceções importantes, como a **transcrição reversa** dos retrovírus, que transforma RNA em DNA. Essa enzima viral acabou virando uma ferramenta de laboratório indispensável para fabricar DNA a partir de RNA (o cDNA).

## Transcrição: do DNA ao RNA

A enzima **RNA polimerase** lê uma das fitas do DNA e fabrica uma molécula de RNA com a sequência complementar. Ela trabalha sempre no sentido 5' → 3' e, ao contrário da DNA polimerase, não precisa de primer.

- A **fita molde** é a fita que a polimerase lê.
- A **fita codificadora** é a outra fita. Ela tem a mesma sequência do RNA que será produzido, só que com **T no lugar do U**.

A transcrição tem três etapas: o **início**, quando a polimerase se liga a uma região do DNA chamada **promotor**, que marca onde o gene começa; o **alongamento**, quando o RNA vai sendo montado; e o **término**, quando a polimerase encontra o sinal de fim e solta o RNA. Nas bactérias, o promotor tem sequências características que um fator chamado sigma reconhece. Nos eucariontes, há sequências como o "TATA box" e várias proteínas auxiliares.

### O acabamento do RNA nos eucariontes

Nos eucariontes, o RNA recém-fabricado passa por um "acabamento" antes de sair do núcleo:

1. ganha uma **capa** na ponta 5', que o protege e ajuda o ribossomo a reconhecê-lo;
2. ganha uma **cauda** de várias adeninas (cauda poli-A) na ponta 3';
3. passa pelo **splicing**: os trechos que não codificam proteína (os **íntrons**) são retirados, e os trechos que codificam (os **éxons**) são emendados. Combinando os éxons de formas diferentes (o **splicing alternativo**), um mesmo gene pode dar origem a várias proteínas.

Nas bactérias não há núcleo nem íntrons. A tradução começa enquanto o RNA ainda está sendo fabricado, e vários genes vizinhos podem ser transcritos juntos num único RNA. Esse conjunto de genes controlados juntos chama-se **óperon**.

## O código genético

A informação no RNA é lida de três em três bases. Cada trinca é um **códon**.

- Com 4 bases possíveis em cada uma das 3 posições, há \(4^3 = 64\) códons.
- 61 deles indicam aminoácidos, e 3 indicam o **fim** da proteína (UAA, UAG e UGA). O códon **AUG** indica o aminoácido metionina e marca o **início**.
- O código é **degenerado** (ou redundante): vários códons podem indicar o mesmo aminoácido. Mas **não é ambíguo**: cada códon indica um único aminoácido. E é **quase universal**, o mesmo em praticamente todos os seres vivos, o que permite que uma bactéria fabrique uma proteína humana.

O primeiro códon foi decifrado em 1961 por Marshall Nirenberg e Heinrich Matthaei. Eles fabricaram um RNA artificial formado só por uracilas e viram que ele produzia uma proteína formada só por fenilalanina. Conclusão: UUU indica fenilalanina.

## Tradução: do RNA à proteína

- **Ribossomo:** é a "fábrica" de proteínas. Tem duas partes (subunidades): nas bactérias, ele é do tipo 70S; nos eucariontes, do tipo 80S. Tem três sítios, chamados A (por onde entra o aminoácido novo), P (onde fica a cadeia em crescimento) e E (por onde sai o RNA transportador vazio).
- **RNA transportador (tRNA):** cada tRNA carrega um aminoácido e tem uma trinca de bases (o **anticódon**) que se encaixa no códon correspondente do RNA mensageiro. Enzimas específicas colocam o aminoácido certo em cada tRNA. São elas, na prática, as "tradutoras" do código.
- **Início:** nas bactérias, uma sequência do RNA mensageiro (a sequência de Shine-Dalgarno) posiciona o ribossomo bem no AUG inicial. Nos eucariontes, o ribossomo se liga à capa e percorre o RNA até encontrar o primeiro AUG.
- **Alongamento:** os aminoácidos são unidos um a um. Quem forma a ligação peptídica é o próprio **RNA ribossômico**, e não uma proteína.
- **Término:** quando um códon de fim chega ao sítio A, proteínas chamadas fatores de liberação soltam a cadeia pronta.

![O ribossomo traduzindo o RNA mensageiro: os tRNAs trazem os aminoácidos, o anticódon se encaixa no códon nos sítios A e P, e a cadeia de aminoácidos vai crescendo.](https://upload.wikimedia.org/wikipedia/commons/e/ed/Ribosome_mRNA_translation_pt.svg)
Fonte: Mariana Ruiz (LadyofHats), tradução de Anderson Brito, domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ribosome_mRNA_translation_pt.svg).

Depois de pronta, muitas proteínas ainda recebem **modificações**: açúcares (glicosilação), grupos fosfato, pontes dissulfeto, ou cortes em pedaços específicos. A insulina, por exemplo, é fabricada como uma molécula maior, a pró-insulina, que depois é cortada.

## Exemplo resolvido

A fita **molde** de um trecho de DNA é: 3'-TAC CGG TTT ACT-5'. Qual é o RNA mensageiro e o peptídeo formado?

- O RNA mensageiro é complementar à fita molde: **5'-AUG GCC AAA UGA-3'**.
- A fita codificadora tem a mesma sequência do RNA, com T no lugar de U: 5'-ATG GCC AAA TGA-3'.
- Lendo os códons: AUG (metionina), GCC (alanina), AAA (lisina) e UGA (fim). O peptídeo é **metionina–alanina–lisina**.

Uma consequência prática: uma proteína com 300 aminoácidos precisa de pelo menos \(300\times3 + 3 = 903\) nucleotídeos na região que a codifica (os três últimos são do códon de fim).

## Na prática: fazendo uma célula produzir uma proteína de interesse

- **Genes de eucariontes em bactérias:** as bactérias não sabem retirar íntrons. Por isso, para produzir uma proteína humana em *E. coli*, usa-se o **cDNA**, obtido a partir do RNA mensageiro já sem íntrons, com a ajuda da transcriptase reversa.
- **Preferência por códons:** cada organismo usa com mais frequência certos códons para o mesmo aminoácido. Reescrever o gene com os códons preferidos pelo hospedeiro (a **otimização de códons**) pode aumentar muito a produção.
- **Ligar a produção no momento certo:** o óperon *lac*, que a *E. coli* usa para consumir lactose, inspirou sistemas em que a produção da proteína só começa quando se adiciona uma substância chamada **IPTG**, parecida com a lactose. Na levedura *Komagataella phaffii*, um sistema semelhante é ligado pela adição de metanol.
- **Modificações que só alguns organismos fazem:** como as bactérias não colocam açúcares nas proteínas da mesma forma que as células humanas, os anticorpos usados como medicamento são produzidos em células de mamífero (tema 30).

> **Atenção, erros comuns:**
> O RNA mensageiro é **complementar à fita molde** e **igual à fita codificadora** (trocando T por U).
> "Degenerado" não quer dizer "ambíguo": vários códons podem indicar o mesmo aminoácido, mas cada códon indica um só.
> Esperar que uma bactéria retire os íntrons de um gene eucariótico.

## Para fixar

- Transcrição: do DNA ao RNA; nos eucariontes, acontece no núcleo e inclui o acabamento do RNA.
- Tradução: do RNA mensageiro à proteína, no ribossomo, lendo códons de três bases.
- A biotecnologia controla cada etapa: o promotor, os códons, o organismo hospedeiro e as modificações.
`,
  referencias: [
    "ZAHA, A.; FERREIRA, H. B.; PASSAGLIA, L. M. P. (org.). **Biologia molecular básica**. 5. ed. Porto Alegre: Artmed, 2014.",
    "WATSON, J. D. et al. **Biologia molecular do gene**. 7. ed. Porto Alegre: Artmed, 2015.",
    "CRICK, F. Central dogma of molecular biology. **Nature**, v. 227, n. 5258, p. 561-563, 1970.",
    "NIRENBERG, M. W.; MATTHAEI, J. H. The dependence of cell-free protein synthesis in E. coli upon naturally occurring or synthetic polyribonucleotides. **Proceedings of the National Academy of Sciences of the USA**, v. 47, n. 10, p. 1588-1602, 1961.",
  ],
},
{
  id: "r38", num: 38,
  area: "Biologia Molecular e Genética",
  disciplina: "Genética",
  titulo: "Leis de Mendel e hereditariedade",
  descricao: "Como as características passam de pais para filhos: a primeira e a segunda leis de Mendel, o quadro de Punnett, o cálculo de probabilidades, as exceções e o teste do qui-quadrado.",
  tags: ["Mendel", "genética", "alelo", "genótipo", "fenótipo", "dominância", "monoibridismo", "diibridismo", "segregação independente", "qui-quadrado", "ligação gênica"],
  conteudo: String.raw`
## O vocabulário básico

- **Gene:** um trecho do DNA que determina uma característica. Ocupa uma posição fixa no cromossomo, o **lócus**.
- **Alelos:** as versões diferentes de um mesmo gene (por exemplo, A e a).
- **Genótipo:** a combinação de alelos que um indivíduo tem (AA, Aa ou aa). **Fenótipo:** a característica que se observa (a cor da flor, a altura da planta).
- **Homozigoto:** tem dois alelos iguais (AA ou aa). **Heterozigoto:** tem dois alelos diferentes (Aa).
- **Dominante:** o alelo que se manifesta mesmo no heterozigoto. **Recessivo:** o que só se manifesta em homozigose (aa).
- As gerações são chamadas de parental (P), primeira geração filial (F1) e segunda geração filial (F2).

## A primeira lei de Mendel: a segregação

Estudando ervilhas no século XIX, Gregor Mendel concluiu que cada característica é determinada por um **par de fatores** (hoje chamados de alelos), que se **separam** na formação dos gametas: cada gameta recebe só um alelo de cada par. Hoje se sabe o porquê: os cromossomos homólogos se separam na anáfase I da meiose (tema 32).

![As sete características da ervilha estudadas por Mendel (forma e cor da semente, cor da flor, forma e cor da vagem, posição da flor e altura da planta), cada uma com uma forma dominante e uma recessiva.](https://upload.wikimedia.org/wikipedia/commons/1/1e/Mendel_pea_traits.svg)
Fonte: Nefronus, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mendel_pea_traits.svg).

Cruzando dois heterozigotos (Aa × Aa), cada um forma metade de gametas A e metade de gametas a. O **quadro de Punnett** organiza todas as combinações possíveis:

| | A | a |
|---|---|---|
| **A** | AA | Aa |
| **a** | Aa | aa |

A proporção de **genótipos** é 1 AA : 2 Aa : 1 aa. A proporção de **fenótipos** é 3 com a característica dominante para 1 com a recessiva.

O **cruzamento-teste** permite descobrir o genótipo de um indivíduo com fenótipo dominante, que pode ser AA ou Aa. Cruza-se ele com um homozigoto recessivo (aa). Se aparecer algum descendente com o fenótipo recessivo, o indivíduo testado era Aa.

## A segunda lei de Mendel: a segregação independente

Genes que ficam em **cromossomos diferentes** (ou muito distantes no mesmo cromossomo) são herdados **de forma independente**: herdar um alelo de um gene não influencia qual alelo será herdado do outro. Num cruzamento entre dois di-híbridos (AaBb × AaBb), as proporções de cada gene se multiplicam:

\[ \underbrace{(3:1)}_{\text{gene A}}\times\underbrace{(3:1)}_{\text{gene B}} = 9:3:3:1 \]

A explicação também está na meiose: na metáfase I, cada par de cromossomos se posiciona ao acaso, independentemente dos outros.

![Um cruzamento di-híbrido: os pais formam uma F1 heterozigota para os dois genes (SsBb), e o cruzamento entre esses indivíduos gera, no quadro de Punnett de 4 por 4, a proporção de fenótipos 9:3:3:1.](https://upload.wikimedia.org/wikipedia/commons/3/3a/Dihybrid_cross.svg)
Fonte: Tocharianne (original) e WhiteTimberwolf (vetorização), domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dihybrid_cross.svg).

## Probabilidade em genética

Dois princípios resolvem a maioria dos problemas:

- **Regra do "e"** (dois eventos independentes acontecerem juntos): **multiplique** as probabilidades.
- **Regra do "ou"** (um evento ou outro, quando não podem acontecer ao mesmo tempo): **some** as probabilidades.

Um indivíduo heterozigoto para \(n\) genes independentes forma \(2^n\) tipos diferentes de gametas.

**Exemplo:** no cruzamento AaBbCc × AaBbCc, qual a probabilidade de um filho ser aabbcc? Para cada gene, a chance de ser homozigoto recessivo é \(\tfrac14\). Como os genes são independentes, multiplica-se: \(\left(\tfrac14\right)^3 = \tfrac{1}{64}\). E a probabilidade de ser Aa **e** bb? \(\tfrac12\times\tfrac14 = \tfrac18\).

## Quando os resultados não seguem as proporções de Mendel

| Fenômeno | O que acontece | Proporção típica na F2 |
|---|---|---|
| Dominância incompleta | o heterozigoto tem um fenótipo intermediário, como flores rosas de pais com flores vermelhas e brancas | 1 : 2 : 1 |
| Codominância | os dois alelos se manifestam juntos, como no grupo sanguíneo AB | 1 : 2 : 1 |
| Alelos múltiplos | existem mais de dois alelos na população, como no sistema ABO | varia |
| Alelos letais | uma das combinações não sobrevive | 2 : 1 |
| Epistasia | um gene interfere na manifestação de outro | 9:3:4, 9:7, 12:3:1, entre outras |
| Genes ligados | genes próximos no mesmo cromossomo tendem a ser herdados juntos | foge de 9:3:3:1; os descendentes com combinações novas aparecem em menor número |
| Herança poligênica | muitos genes, cada um com um pequeno efeito, determinam a característica | variação contínua, como a altura das pessoas ou a produtividade de uma planta |

No caso dos genes ligados, a porcentagem de descendentes com combinações novas (os **recombinantes**) indica a distância entre os genes no cromossomo: 1% de recombinação corresponde a 1 centimorgan. É assim que se constroem os **mapas genéticos**.

## Exemplo resolvido: os dados confirmam a proporção 3:1?

Uma planta transgênica recebeu uma única cópia de um gene novo, que se comporta como um alelo dominante. Ela foi autofecundada, e entre os descendentes, 290 plantas apresentaram o transgene e 110 não (total de 400). Pela proporção 3:1, o esperado seria 300 e 100. A diferença é só acaso, ou indica algo errado?

Usa-se o **teste do qui-quadrado**, que mede o quanto os valores observados (O) se afastam dos esperados (E):

\[ \chi^2 = \sum\frac{(O - E)^2}{E} = \frac{(290-300)^2}{300} + \frac{(110-100)^2}{100} \approx 0{,}33 + 1{,}00 = 1{,}33 \]

Com duas classes, há 1 grau de liberdade, e o valor-limite ao nível de 5% é 3,84. Como \(1{,}33 \lt 3{,}84\), **não há motivo para rejeitar** a proporção 3:1. Os dados são compatíveis com uma única cópia do transgene sendo herdada como prevê Mendel (sobre testes de hipóteses, veja o tema 49).

## Na prática

- **Melhoramento de plantas e animais:** cruzamentos planejados permitem reunir num só indivíduo características desejáveis, como produtividade e resistência a doenças.
- **Plantas transgênicas:** a proporção 3:1 na geração autofecundada indica que o transgene entrou num único local do genoma. As plantas homozigotas são depois identificadas por cruzamento-teste ou por marcadores moleculares.
- **Leveduras industriais:** linhagens haploides de tipos sexuais opostos podem ser cruzadas para combinar características, como a tolerância ao etanol e a fermentação rápida.

> **Atenção, erros comuns:**
> Achar que o alelo dominante é o mais **comum** na população: dominância se refere a qual alelo se manifesta no heterozigoto.
> Esperar que a proporção 3:1 apareça exatamente: ela é uma **probabilidade**, e desvios pequenos são normais (por isso se usa a estatística).
> Aplicar a segunda lei a genes que estão próximos no mesmo cromossomo.

## Para fixar

- Primeira lei: os alelos se separam na formação dos gametas (3:1 no monoibridismo).
- Segunda lei: genes independentes se combinam livremente (9:3:3:1).
- Probabilidade: multiplique para "e" e some para "ou".
- O teste do qui-quadrado verifica se os dados seguem a proporção esperada.
`,
  referencias: [
    "GRIFFITHS, A. J. F. et al. **Introdução à genética**. 11. ed. Rio de Janeiro: Guanabara Koogan, 2016.",
    "SNUSTAD, D. P.; SIMMONS, M. J. **Fundamentos de genética**. 7. ed. Rio de Janeiro: Guanabara Koogan, 2017.",
    "PIERCE, B. A. **Genética**: um enfoque conceitual. 5. ed. Rio de Janeiro: Guanabara Koogan, 2016.",
    "MENDEL, G. Versuche über Pflanzen-Hybriden. **Verhandlungen des naturforschenden Vereines in Brünn**, v. 4, p. 3-47, 1866.",
  ],
}
);
