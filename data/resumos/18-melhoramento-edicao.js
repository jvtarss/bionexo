/* BIONEXO — Resumos complementares · Melhoramento Vegetal e Biotecnologia de Plantas (r102–r105) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r102", num: 102,
  area: "Melhoramento Vegetal e Biotecnologia de Plantas",
  disciplina: "Melhoramento Genético Vegetal",
  titulo: "Melhoramento genético vegetal: métodos clássicos",
  descricao: "Sistemas reprodutivos das plantas, variabilidade e germoplasma, seleção massal e genealógica, SSD, retrocruzamento, híbridos e vigor híbrido, herdabilidade, ganho com a seleção e a interação genótipo por ambiente.",
  tags: ["Melhoramento Vegetal", "Genética", "autógama", "alógama", "germoplasma", "centro de origem", "Vavilov", "seleção massal", "método genealógico", "SSD", "retrocruzamento", "linhagem pura", "híbrido", "vigor híbrido", "heterose", "macho-esterilidade", "herdabilidade", "ganho de seleção", "interação genótipo-ambiente", "QTL", "seleção assistida por marcadores", "seleção genômica"],
  conteudo: String.raw`
## O que é melhorar uma planta

O melhoramento genético vegetal é a aplicação da genética para obter, a partir da variabilidade existente, **populações ou variedades superiores** para um conjunto de objetivos: produtividade, qualidade do produto, resistência a doenças e pragas, tolerância a estresses como seca e calor, adaptação à colheita mecanizada e ao ciclo da região.

Todo programa envolve três etapas: **criar ou reunir variabilidade**, **selecionar** os melhores indivíduos e **avaliar e multiplicar** os materiais selecionados.

## O sistema reprodutivo define o método

| Tipo | Taxa de fecundação cruzada | Exemplos | Consequência |
|---|---|---|---|
| Autógamas | menor que 5% | soja, feijão, arroz, trigo, tomate | naturalmente homozigotas; o produto final são **linhagens puras** |
| Alógamas | maior que 95% | milho, girassol, mamão, eucalipto | heterozigotas; sofrem depressão por endogamia; o produto são **populações ou híbridos** |
| Intermediárias | entre 5% e 95% | algodão, sorgo, feijão-fava | métodos combinados |
| Propagação vegetativa | clonal | cana, banana, mandioca, batata, eucalipto | a seleção **fixa** qualquer genótipo, inclusive heterozigoto |

## Variabilidade e germoplasma

A variação vem de cruzamentos, de espécies silvestres aparentadas, de mutações induzidas (tema 100), de poliploidia (tema 99) e, mais recentemente, da transformação e da edição gênica (temas 104 e 105).

Nikolai **Vavilov** identificou os **centros de origem e diversidade** das culturas, regiões onde as espécies foram domesticadas e onde está a maior variabilidade (os Andes para a batata, a Mesoamérica para o milho, o Crescente Fértil para o trigo). Bancos de germoplasma, como os da Embrapa, conservam essa variabilidade em câmaras frias, in vitro ou no campo. A **erosão genética**, a perda de variedades locais substituídas por poucas cultivares modernas, é uma preocupação real: a uniformidade genética de uma lavoura a torna vulnerável, como mostrou a epidemia de helmintosporiose no milho norte-americano em 1970.

## Métodos para autógamas

Partindo de um cruzamento entre dois pais contrastantes, a F2 é a geração de maior variabilidade. A partir dela:

- **Seleção massal:** selecionam-se plantas com bom fenótipo e misturam-se suas sementes. É simples e eficaz para características de alta herdabilidade.
- **Método genealógico (pedigree):** acompanham-se as famílias individualmente da F2 até a F6, selecionando a cada geração e registrando a ascendência. Dá bastante controle, mas é trabalhoso.
- **Método da população (bulk):** avançam-se as gerações em massa, com pouca seleção, até a homozigose; só então se selecionam plantas individuais. É barato e aproveita a seleção natural.
- **SSD (descendência de uma única semente):** colhe-se **uma** semente de cada planta por geração. Mantém-se a variabilidade e, em casa de vegetação com duas ou três safras por ano, chega-se rapidamente à homozigose.
- **Duplo-haploides:** homozigose em uma geração (tema 99).

**Retrocruzamento:** usado para transferir **um** gene (ou poucos) de um doador para uma variedade já boa, o **genitor recorrente**. Cruza-se o híbrido repetidamente com o recorrente, sempre selecionando as plantas que têm o gene desejado. A cada retrocruzamento, recupera-se metade do genoma restante do doador:

\[ \text{proporção do genoma recorrente} = 1 - \left(\tfrac12\right)^{t+1} \]

Após seis retrocruzamentos, cerca de 99,2% do genoma é do recorrente. O obstáculo é o **arraste de ligação** (tema 97), e o uso de marcadores moleculares para selecionar as plantas com o menor segmento do doador (o *background selection*) acelera muito o processo.

## Híbridos e vigor híbrido

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Vigor hibrido</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Endogamia e vigor hibrido no milho</text><rect x="60" y="56" width="320" height="170" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="105.714" y1="56" x2="105.714" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="151.429" y1="56" x2="151.429" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="197.143" y1="56" x2="197.143" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="242.857" y1="56" x2="242.857" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="288.571" y1="56" x2="288.571" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="334.286" y1="56" x2="334.286" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="195.091" x2="380" y2="195.091" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="164.182" x2="380" y2="164.182" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="133.273" x2="380" y2="133.273" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="102.364" x2="380" y2="102.364" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="71.4545" x2="380" y2="71.4545" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="56" x2="60" y2="226" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="60" y1="226" x2="380" y2="226" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="105.714" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="151.429" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="197.143" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">3</text><text x="242.857" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">4</text><text x="288.571" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">5</text><text x="334.286" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">6</text><text x="54" y="198.591" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="54" y="167.682" font-size="10.5" text-anchor="end" fill="#8a8a93">4</text><text x="54" y="136.773" font-size="10.5" text-anchor="end" fill="#8a8a93">6</text><text x="54" y="105.864" font-size="10.5" text-anchor="end" fill="#8a8a93">8</text><text x="54" y="74.9545" font-size="10.5" text-anchor="end" fill="#8a8a93">10</text><text x="384" y="230" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">geracoes</text><text x="56" y="50" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">vigor</text><path d="M62.5,56.4L63.7,58.1L65.0,59.8L66.2,61.5L67.5,63.2L68.7,64.8L70.0,66.4L71.2,68.0L72.5,69.6L73.7,71.2L75.0,72.8L76.2,74.3L77.5,75.8L78.7,77.3L79.9,78.8L81.2,80.3L82.4,81.7L83.7,83.1L84.9,84.6L86.2,86.0L87.4,87.3L88.7,88.7L89.9,90.1L91.2,91.4L92.4,92.7L93.7,94.0L94.9,95.3L96.2,96.6L97.4,97.9L98.6,99.1L99.9,100.3L101.1,101.6L102.4,102.8L103.6,104.0L104.9,105.1L106.1,106.3L107.4,107.5L108.6,108.6L109.9,109.7L111.1,110.8L112.4,111.9L113.6,113.0L114.9,114.1L116.1,115.2L117.4,116.2L118.6,117.2L119.8,118.3L121.1,119.3L122.3,120.3L123.6,121.3L124.8,122.3L126.1,123.2L127.3,124.2L128.6,125.1L129.8,126.1L131.1,127.0L132.3,127.9L133.6,128.8L134.8,129.7L136.1,130.6L137.3,131.5L138.5,132.4L139.8,133.2L141.0,134.1L142.3,134.9L143.5,135.7L144.8,136.5L146.0,137.3L147.3,138.1L148.5,138.9L149.8,139.7L151.0,140.5L152.3,141.2L153.5,142.0L154.8,142.7L156.0,143.5L157.2,144.2L158.5,144.9L159.7,145.6L161.0,146.3L162.2,147.0L163.5,147.7L164.7,148.4L166.0,149.1L167.2,149.7L168.5,150.4L169.7,151.1L171.0,151.7L172.2,152.3L173.5,153.0L174.7,153.6L175.9,154.2L177.2,154.8L178.4,155.4L179.7,156.0L180.9,156.6L182.2,157.2L183.4,157.7L184.7,158.3L185.9,158.9L187.2,159.4L188.4,160.0L189.7,160.5L190.9,161.0L192.2,161.6L193.4,162.1L194.6,162.6L195.9,163.1L197.1,163.6L198.4,164.1L199.6,164.6L200.9,165.1L202.1,165.6L203.4,166.1L204.6,166.5L205.9,167.0L207.1,167.5L208.4,167.9L209.6,168.4L210.9,168.8L212.1,169.2L213.4,169.7L214.6,170.1L215.8,170.5L217.1,171.0L218.3,171.4L219.6,171.8L220.8,172.2L222.1,172.6L223.3,173.0L224.6,173.4L225.8,173.8L227.1,174.2L228.3,174.5L229.6,174.9L230.8,175.3L232.1,175.6L233.3,176.0L234.5,176.4L235.8,176.7L237.0,177.1L238.3,177.4L239.5,177.8L240.8,178.1L242.0,178.4L243.3,178.8L244.5,179.1L245.8,179.4L247.0,179.7L248.3,180.0L249.5,180.4L250.8,180.7L252.0,181.0L253.2,181.3L254.5,181.6L255.7,181.9L257.0,182.2L258.2,182.4L259.5,182.7L260.7,183.0L262.0,183.3L263.2,183.6L264.5,183.8L265.7,184.1L267.0,184.4L268.2,184.6L269.5,184.9L270.7,185.2L271.9,185.4L273.2,185.7L274.4,185.9L275.7,186.2L276.9,186.4L278.2,186.6L279.4,186.9L280.7,187.1L281.9,187.3L283.2,187.6L284.4,187.8L285.7,188.0L286.9,188.2L288.2,188.5L289.4,188.7L290.6,188.9L291.9,189.1L293.1,189.3L294.4,189.5L295.6,189.7L296.9,189.9L298.1,190.1L299.4,190.3L300.6,190.5L301.9,190.7L303.1,190.9L304.4,191.1L305.6,191.3L306.9,191.5L308.1,191.6L309.4,191.8L310.6,192.0L311.8,192.2L313.1,192.3L314.3,192.5L315.6,192.7L316.8,192.9L318.1,193.0L319.3,193.2L320.6,193.4L321.8,193.5L323.1,193.7L324.3,193.8L325.6,194.0L326.8,194.1L328.1,194.3L329.3,194.4L330.5,194.6L331.8,194.7L333.0,194.9L334.3,195.0" fill="none" stroke="#d33a4e" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="52.9091" r="4" fill="#d33a4e" stroke="#fff" stroke-width="1.6"/><text x="101.143" y="80.7273" font-size="10" text-anchor="start" fill="#d33a4e" font-weight="700">depressao por endogamia</text><circle cx="334.286" cy="195.02" r="4.5" fill="#d33a4e" stroke="#fff" stroke-width="1.6"/><text x="330.286" y="215.02" font-size="11.5" text-anchor="middle" fill="#d33a4e" font-weight="600">linhagem pura</text><line x1="344.286" y1="195.091" x2="440" y2="80.7273" stroke="#0a8f5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-ve)"/><circle cx="470" cy="68.3636" r="30" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="2"/><text x="470" y="73.3636" font-size="14" text-anchor="middle" fill="#0a8f5e" font-weight="700">F1</text><text x="470" y="26.3636" font-size="11.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">vigor hibrido</text><text x="470" y="116.364" font-size="10" text-anchor="middle" fill="#5c5c66">supera os dois pais</text><rect x="520" y="70" width="200" height="150" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="620" y="92" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">por que acontece</text><text x="620" y="116" font-size="10.5" text-anchor="middle" fill="#a300bc" font-weight="700">dominância</text><text x="620" y="132" font-size="9.8" text-anchor="middle" fill="#5c5c66">alelos deleterios de uma</text><text x="620" y="144" font-size="9.8" text-anchor="middle" fill="#5c5c66">linhagem são cobertos pela outra</text><text x="620" y="168" font-size="10.5" text-anchor="middle" fill="#a300bc" font-weight="700">sobredominancia</text><text x="620" y="184" font-size="9.8" text-anchor="middle" fill="#5c5c66">o próprio heterozigoto</text><text x="620" y="196" font-size="9.8" text-anchor="middle" fill="#5c5c66">e superior</text><text x="20" y="258" font-size="10.8" text-anchor="start" fill="#5c5c66">Na F2 a heterose se perde pela segregação, e por isso o produtor compra semente hibrida a cada safra.</text><text x="20" y="276" font-size="10.8" text-anchor="start" fill="#5c5c66">Em autogamas, ao contrario, a autofecundacao e desejada: ela fixa linhagens puras e homozigotas.</text><text x="20" y="294" font-size="10.8" text-anchor="start" fill="#5c5c66">Com seis geracoes, as plantas já estao cerca de 98% homozigotas.</text></svg>
A autofecundação reduz o vigor, mas o cruzamento entre linhagens distintas o recupera com folga.

Em alógamas, a autofecundação sucessiva causa **depressão por endogamia** (tema 101). Mas, ao cruzar duas linhagens endogâmicas **diferentes**, a F1 costuma ser muito superior a ambas: é a **heterose** ou vigor híbrido. As explicações clássicas são a **dominância** (os alelos deletérios recessivos de uma linhagem são complementados pelos dominantes da outra) e a **sobredominância** (vantagem do próprio heterozigoto, tema 95).

A exploração comercial dos híbridos de milho, a partir dos trabalhos de Shull, East e Jones no início do século XX, está entre os maiores aumentos de produtividade da história agrícola. O produtor precisa comprar semente nova a cada safra, porque na F2 a heterose se perde pela segregação.

Para produzir híbridos em larga escala, é preciso evitar a autofecundação do genitor feminino. Isso é feito por despendoamento manual (milho) ou, de forma muito mais eficiente, pela **macho-esterilidade citoplasmática** (CMS), um caráter de herança materna, codificado na mitocôndria, que impede a produção de pólen viável, combinado com genes restauradores da fertilidade no genitor masculino.

## Genética quantitativa aplicada

A maioria das características de interesse é quantitativa (tema 96). O fenótipo é:

\[ P = G + E + (G\times E) \]

A **herdabilidade** mede a fração da variação fenotípica devida à variação genética:

\[ h^2_{\text{ampla}} = \frac{\sigma^2_G}{\sigma^2_P} \qquad\qquad h^2_{\text{restrita}} = \frac{\sigma^2_A}{\sigma^2_P} \]

A herdabilidade no sentido restrito, que considera só a variância aditiva, é a que prevê o **ganho com a seleção**:

\[ GS = h^2\,DS = h^2\,(\bar X_s - \bar X) \]

em que \(DS\) é o diferencial de seleção, a diferença entre a média dos selecionados e a média da população.

**Exemplo:** numa população com média de 3000 kg/ha, selecionam-se plantas com média de 3600 kg/ha. Se \(h^2 = 0{,}40\), o ganho esperado é \(0{,}40\times600 = 240\) kg/ha na próxima geração.

Características como teor de óleo e altura têm herdabilidade alta e respondem rápido; produtividade de grãos tem herdabilidade baixa e exige avaliação em muitos ambientes e repetições.

**Interação genótipo por ambiente:** uma cultivar excelente numa região pode ser medíocre em outra. Por isso os programas conduzem ensaios de **valor de cultivo e uso** (VCU) em vários locais e anos, exigidos para o registro de cultivares no Brasil, junto com os ensaios de distinguibilidade, homogeneidade e estabilidade (DHE) para a proteção da cultivar.

## Marcadores moleculares e seleção genômica

- **Marcadores** (microssatélites, SNPs) são diferenças na sequência do DNA que podem ser acompanhadas no laboratório, independentemente do ambiente e do estágio da planta.
- **Seleção assistida por marcadores (SAM):** eficiente para genes de efeito grande, como genes de resistência a doenças, evitando inoculações e testes de campo.
- **Mapeamento de QTLs e GWAS:** localizam regiões do genoma associadas a características quantitativas, em populações estruturadas ou em painéis de diversidade.
- **Seleção genômica:** em vez de procurar genes individuais, usa **milhares de marcadores ao mesmo tempo** para prever o valor genético de cada indivíduo, por meio de um modelo estatístico calibrado numa população de treinamento. É especialmente útil para características de baixa herdabilidade e para espécies perenes de ciclo longo, como o eucalipto, em que esperar a avaliação do fenótipo custa anos.

> **Atenção, erros comuns:**
> Aplicar métodos de autógamas a alógamas, ignorando a depressão por endogamia.
> Tratar a herdabilidade como uma propriedade fixa da característica: ela depende da população e do conjunto de ambientes.
> Esperar que a heterose se mantenha na F2 de um híbrido.

## Para fixar

- O sistema reprodutivo define o método: linhagens em autógamas, populações e híbridos em alógamas, clones em propagação vegetativa.
- Retrocruzamento transfere genes para um bom genitor recorrente; a heterose sustenta a indústria de sementes híbridas.
- \(GS = h^2 \cdot DS\); marcadores e seleção genômica aceleram os ciclos de seleção.
`,
  referencias: [
    "BORÉM, A.; MIRANDA, G. V.; FRITSCHE-NETO, R. **Melhoramento de plantas**. 8. ed. São Paulo: Oficina de Textos, 2021.",
    "RAMALHO, M. A. P.; SANTOS, J. B.; PINTO, C. A. B. P. et al. **Genética na agropecuária**. 5. ed. Lavras: Editora UFLA, 2012.",
    "ALLARD, R. W. **Principles of plant breeding**. 2. ed. New York: John Wiley & Sons, 1999.",
    "BERNARDO, R. **Breeding for quantitative traits in plants**. 3. ed. Woodbury: Stemma Press, 2020.",
  ],
},
{
  id: "r103", num: 103,
  area: "Melhoramento Vegetal e Biotecnologia de Plantas",
  disciplina: "Cultura de Tecidos Vegetais",
  titulo: "Cultura de tecidos vegetais",
  descricao: "Totipotência celular, meios de cultura e reguladores de crescimento, micropropagação em etapas, organogênese e embriogênese somática, calos e suspensões celulares, variação somaclonal e limpeza clonal.",
  tags: ["Cultura de Tecidos", "Melhoramento Vegetal", "totipotência", "explante", "meio MS", "auxina", "citocinina", "micropropagação", "organogênese", "embriogênese somática", "calo", "suspensão celular", "variação somaclonal", "limpeza clonal", "meristema", "aclimatização", "metabólitos secundários", "crioconservação"],
  conteudo: String.raw`
## Totipotência: a base de tudo

Uma célula vegetal viva e com núcleo conserva toda a informação genética necessária para regenerar uma planta inteira. Essa propriedade, a **totipotência**, foi demonstrada por Steward, nos anos 1950, ao regenerar plantas de cenoura a partir de células isoladas. Ela explica por que é possível multiplicar plantas em laboratório a partir de pequenos fragmentos, e é condição necessária para a transformação genética (tema 104) e a edição gênica (tema 105): de nada adianta modificar uma célula se não for possível regenerar a planta a partir dela.

A cultura de tecidos é feita **in vitro**, em condições assépticas, com temperatura, luz e fotoperíodo controlados. O fragmento inicial é o **explante** (um ápice caulinar, um segmento nodal, uma folha, um embrião, uma antera).

## O meio de cultura

O meio mais usado é o **MS** (Murashige e Skoog, 1962), que contém:

- **Macronutrientes** (N, P, K, Ca, Mg, S) e **micronutrientes** (Fe, Mn, Zn, B, Cu, Mo).
- **Vitaminas** (tiamina, piridoxina, ácido nicotínico) e **mio-inositol**.
- **Fonte de carbono:** geralmente sacarose a 20 a 30 g/L, porque as plantas in vitro fotossintetizam pouco.
- **Agente geleificante:** ágar ou gelrite, nos meios sólidos.
- **Reguladores de crescimento**, ajustados conforme o objetivo.
- pH ajustado para 5,7 a 5,8 antes da autoclavagem (tema 35).

## Reguladores de crescimento: a proporção é o que decide

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Cultura de tecidos</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">A razao entre auxina e citocinina decide o destino do tecido</text><rect x="36" y="52" width="208" height="150" rx="8" fill="#fff" stroke="#0a8f5e" stroke-width="1.4"/><text x="140" y="74" font-size="11.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">mais auxina</text><rect x="64" y="86" width="152" height="14" rx="7" fill="#e4f2fb" stroke="none" stroke-width="0"/><rect x="64" y="86" width="129.2" height="14" rx="7" fill="#e5f6ee" stroke="none" stroke-width="0"/><text x="60" y="97" font-size="8.6" text-anchor="end" fill="#0a8f5e">aux</text><text x="220" y="97" font-size="8.6" text-anchor="start" fill="#0083cb">cit</text><line x1="140" y1="118" x2="140" y2="150" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round"/><path d="M140,150 C132,164 120,170 100,180" fill="none" stroke="#0a8f5e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M140,150 C140,164 140,170 140,180" fill="none" stroke="#0a8f5e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M140,150 C148,164 160,170 180,180" fill="none" stroke="#0a8f5e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><text x="140" y="196" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="700">raizes</text><rect x="266" y="52" width="208" height="150" rx="8" fill="#fff" stroke="#c67600" stroke-width="1.4"/><text x="370" y="74" font-size="11.5" text-anchor="middle" fill="#c67600" font-weight="700">equilibrada</text><rect x="294" y="86" width="152" height="14" rx="7" fill="#e4f2fb" stroke="none" stroke-width="0"/><rect x="294" y="86" width="76" height="14" rx="7" fill="#e5f6ee" stroke="none" stroke-width="0"/><text x="290" y="97" font-size="8.6" text-anchor="end" fill="#0a8f5e">aux</text><text x="450" y="97" font-size="8.6" text-anchor="start" fill="#0083cb">cit</text><circle cx="367.485" cy="142.426" r="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.2"/><circle cx="345.421" cy="164.129" r="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.2"/><circle cx="336.438" cy="148.122" r="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.2"/><circle cx="397.084" cy="129.556" r="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.2"/><circle cx="373.69" cy="153.133" r="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.2"/><circle cx="338.781" cy="142.677" r="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.2"/><circle cx="383.837" cy="145.889" r="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.2"/><circle cx="385.304" cy="132.915" r="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.2"/><circle cx="352.185" cy="130.882" r="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.2"/><circle cx="370.426" cy="166.649" r="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.2"/><circle cx="376.149" cy="160.065" r="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.2"/><circle cx="362.089" cy="158.828" r="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.2"/><circle cx="342.914" cy="138.812" r="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.2"/><circle cx="381.848" cy="157.931" r="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.2"/><text x="370" y="196" font-size="12" text-anchor="middle" fill="#c67600" font-weight="700">calo</text><rect x="496" y="52" width="208" height="150" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="600" y="74" font-size="11.5" text-anchor="middle" fill="#0083cb" font-weight="700">mais citocinina</text><rect x="524" y="86" width="152" height="14" rx="7" fill="#e4f2fb" stroke="none" stroke-width="0"/><rect x="524" y="86" width="22.8" height="14" rx="7" fill="#e5f6ee" stroke="none" stroke-width="0"/><text x="520" y="97" font-size="8.6" text-anchor="end" fill="#0a8f5e">aux</text><text x="680" y="97" font-size="8.6" text-anchor="start" fill="#0083cb">cit</text><line x1="600" y1="180" x2="600" y2="140" stroke="#0083cb" stroke-width="2.4" stroke-linecap="round"/><ellipse cx="580" cy="136" rx="16" ry="8" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.4" transform="rotate(-30 580 136)"/><ellipse cx="620" cy="136" rx="16" ry="8" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.4" transform="rotate(30 620 136)"/><text x="600" y="196" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">parte aerea</text><rect x="20" y="216" width="700" height="76" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="238" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">as cinco etapas da micropropagacao</text><text x="120" y="262" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">estabelecimento</text><line x1="182" y1="258" x2="224" y2="258" stroke="#8a8a93" stroke-width="1.5" stroke-linecap="round" marker-end="url(#a-cz)"/><text x="288" y="262" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">multiplicacao</text><line x1="350" y1="258" x2="392" y2="258" stroke="#8a8a93" stroke-width="1.5" stroke-linecap="round" marker-end="url(#a-cz)"/><text x="456" y="262" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">enraizamento</text><line x1="518" y1="258" x2="560" y2="258" stroke="#8a8a93" stroke-width="1.5" stroke-linecap="round" marker-end="url(#a-cz)"/><text x="624" y="262" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">aclimatizacao</text><text x="370" y="284" font-size="10.2" text-anchor="middle" fill="#5c5c66">A passagem por calo gera variacao somaclonal: útil como fonte de variabilidade, indesejada na producao de mudas.</text></svg>
A proporção entre os dois reguladores define se o tecido forma raiz, parte aérea ou calo.

| Classe | Exemplos | Função principal |
|---|---|---|
| Auxinas | AIA, ANA, 2,4-D, AIB | divisão celular, alongamento, formação de **raízes**; o 2,4-D induz **calo** |
| Citocininas | BAP, cinetina, zeatina, TDZ | divisão celular e formação de **parte aérea** |
| Giberelinas | AG₃ | alongamento de entrenós, quebra de dormência |
| Ácido abscísico | ABA | maturação de embriões somáticos, tolerância ao estresse |

O princípio clássico, descoberto por Skoog e Miller em 1957, é que a **razão auxina/citocinina** determina o destino do tecido:

- razão **alta** (mais auxina): formação de **raízes**;
- razão **baixa** (mais citocinina): formação de **parte aérea**;
- razão **equilibrada** e alta concentração de auxina forte (2,4-D): proliferação de **calo**, uma massa de células desorganizadas.

## Micropropagação

A multiplicação clonal in vitro segue cinco etapas:

0. **Seleção e preparo da planta-matriz**, em boas condições sanitárias.
1. **Estabelecimento:** desinfestação superficial do explante (geralmente álcool 70% seguido de hipoclorito) e introdução no meio. É a fase em que mais se perdem culturas por contaminação.
2. **Multiplicação:** repicagens sucessivas em meio com citocinina, que induz a brotação múltipla. Cada ciclo multiplica o número de brotos; é aqui que está o poder do método.
3. **Enraizamento:** transferência para meio com auxina (ou enraizamento direto ex vitro).
4. **Aclimatização:** passagem gradual para condições de casa de vegetação. As plantas in vitro têm cutícula fina, estômatos que fecham mal e pouca capacidade fotossintética, e por isso precisam de alta umidade no início. É a etapa em que se concentram as perdas finais.

**Aplicações:** produção em massa de mudas de banana, abacaxi, orquídeas, morango, cana e eucalipto; multiplicação de genótipos de elite; propagação de espécies de difícil enraizamento por estaquia.

## Limpeza clonal

Vírus se espalham por toda a planta, mas o **meristema apical** costuma estar livre ou com baixa carga viral, porque não há vasos diferenciados até a ponta e as células se dividem rapidamente. Cultivando meristemas muito pequenos (0,2 a 0,5 mm), muitas vezes combinados com termoterapia ou com antivirais, obtêm-se plantas livres de vírus. Esse procedimento é rotina em batata, cana, alho, morango e mandioca, e costuma recuperar boa parte da produtividade perdida pela degeneração viral.

## Organogênese e embriogênese somática

- **Organogênese:** formação de órgãos (gemas ou raízes) a partir do tecido. Pode ser **direta** (do explante, sem calo) ou **indireta** (passando por calo). Em geral, é um processo multicelular.
- **Embriogênese somática:** células somáticas formam **embriões bipolares**, com ápice caulinar e radicular, semelhantes aos zigóticos. Também pode ser direta ou indireta. Tem duas grandes vantagens: frequentemente é de origem **unicelular** (o que evita quimeras na transformação genética) e permite a produção em biorreatores e de **sementes sintéticas** (embriões encapsulados em alginato). É a rota usada em escala para café, cacau, coníferas e dendê.

## Calos, suspensões celulares e metabólitos

Um **calo** mantido em meio líquido sob agitação se fragmenta e forma uma **suspensão celular**, que pode ser cultivada em biorreatores como se fossem microrganismos (temas 46 e 50), com algumas diferenças: as células vegetais são grandes, têm parede rígida, crescem devagar (tempo de duplicação de dias) e são sensíveis ao cisalhamento, o que exige impelidores de baixo cisalhamento.

Esses cultivos produzem **metabólitos secundários** de alto valor. O caso mais conhecido é o **paclitaxel** (Taxol), antitumoral originalmente extraído da casca do teixo e hoje produzido em escala industrial por cultura de células vegetais. Outros exemplos são a shikonina, a berberina e o ácido rosmarínico. **Raízes transformadas** (*hairy roots*), induzidas por *Agrobacterium rhizogenes*, crescem rápido sem reguladores e são plataformas estáveis para alcaloides e proteínas recombinantes.

## Variação somaclonal

Plantas regeneradas in vitro nem sempre são idênticas à planta-mãe. A passagem por calo, especialmente longa e com 2,4-D, favorece mutações pontuais, alterações no número de cromossomos (tema 99), ativação de elementos transponíveis e mudanças epigenéticas, como a metilação do DNA. Essa **variação somaclonal** é:

- um **problema** na micropropagação comercial, em que se exige fidelidade clonal (controlada limitando o número de subcultivos e preferindo a organogênese direta);
- uma **fonte de variabilidade** útil no melhoramento, da qual já saíram variedades com tolerância a estresses.

Um fenômeno relacionado é a **vitrificação** (ou hiperidricidade), em que os brotos ficam translúcidos, quebradiços e malformados, geralmente por excesso de umidade no frasco ou de citocinina.

## Outras aplicações

- **Cultura de anteras e micrósporos:** produção de haploides e duplo-haploides (tema 99).
- **Resgate de embriões:** salva embriões de cruzamentos interespecíficos que abortariam, ampliando as possibilidades de hibridação.
- **Fusão de protoplastos:** células sem parede, obtidas com enzimas (celulases e pectinases, tema 112), podem ser fundidas, combinando genomas de espécies que não cruzam naturalmente (híbridos somáticos) e transferindo características codificadas em organelas, como a macho-esterilidade citoplasmática.
- **Crioconservação:** ápices e embriões conservados em nitrogênio líquido a −196 °C, com crioprotetores (tema 75), preservam germoplasma de espécies de propagação vegetativa por tempo indefinido.

> **Atenção, erros comuns:**
> Achar que a micropropagação sempre gera clones perfeitamente idênticos.
> Tratar o meio MS como universal: cada espécie e cada etapa exigem ajustes, sobretudo de reguladores.
> Pular a aclimatização gradual, o que causa perdas altas na transferência para o solo.

## Para fixar

- Totipotência permite regenerar plantas de células isoladas.
- A razão auxina/citocinina define raiz, parte aérea ou calo.
- Micropropagação tem cinco etapas; a cultura de meristemas produz plantas livres de vírus; a passagem por calo gera variação somaclonal.
`,
  referencias: [
    "MURASHIGE, T.; SKOOG, F. A revised medium for rapid growth and bio assays with tobacco tissue cultures. **Physiologia Plantarum**, v. 15, n. 3, p. 473-497, 1962.",
    "TORRES, A. C.; CALDAS, L. S.; BUSO, J. A. (Ed.). **Cultura de tecidos e transformação genética de plantas**. Brasília: Embrapa, 1998. 2 v.",
    "SOUZA, A. S.; JUNGHANS, T. G. **Introdução à micropropagação de plantas**. 2. ed. Brasília: Embrapa, 2013.",
    "GEORGE, E. F.; HALL, M. A.; DE KLERK, G.-J. **Plant propagation by tissue culture**. 3. ed. Dordrecht: Springer, 2008.",
  ],
},
{
  id: "r104", num: 104,
  area: "Melhoramento Vegetal e Biotecnologia de Plantas",
  disciplina: "Biotecnologia Vegetal",
  titulo: "Transformação genética de plantas",
  descricao: "A construção gênica e seus elementos, a transformação por Agrobacterium e o plasmídeo Ti, a biobalística, protoplastos e vetores virais, a seleção e a confirmação dos transformantes, e as principais plantas transgênicas.",
  tags: ["Biotecnologia Vegetal", "transformação genética", "transgênico", "OGM", "Agrobacterium tumefaciens", "plasmídeo Ti", "T-DNA", "genes vir", "vetor binário", "biobalística", "promotor", "CaMV 35S", "gene marcador", "cassete de expressão", "Bt", "glifosato", "arroz dourado", "biossegurança", "CTNBio", "evento de transformação"],
  conteudo: String.raw`
## Por que transformar plantas

O cruzamento permite combinar genes de plantas sexualmente compatíveis. A **transformação genética** permite introduzir **um gene específico**, de qualquer origem, numa variedade já adaptada, sem o arraste de milhares de genes indesejados do cruzamento. Também permite introduzir características que simplesmente não existem no pool gênico da espécie.

## A construção gênica

<svg viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg" role="img"><title>Transformação genética</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">O cassete gênico e a transferência pelo T-DNA</text><rect x="50" y="60" width="150" height="34" rx="6" fill="#0083cb" stroke="#0083cb" stroke-width="1"/><text x="125" y="82" font-size="10.5" text-anchor="middle" fill="#fff" font-weight="700">promotor</text><rect x="206" y="60" width="200" height="34" rx="6" fill="#0a8f5e" stroke="#0a8f5e" stroke-width="1"/><text x="306" y="82" font-size="10.5" text-anchor="middle" fill="#fff" font-weight="700">gene de interesse</text><rect x="412" y="60" width="130" height="34" rx="6" fill="#f40086" stroke="#f40086" stroke-width="1"/><text x="477" y="82" font-size="10.5" text-anchor="middle" fill="#fff" font-weight="700">terminador</text><rect x="548" y="60" width="130" height="34" rx="6" fill="#c67600" stroke="#c67600" stroke-width="1"/><text x="613" y="82" font-size="10.5" text-anchor="middle" fill="#fff" font-weight="700">marcador</text><text x="50" y="112" font-size="9.6" text-anchor="start" fill="#0083cb">quando e quanto expressar</text><text x="212" y="112" font-size="9.6" text-anchor="start" fill="#0a8f5e">o que a planta vai produzir</text><text x="420" y="112" font-size="9.6" text-anchor="start" fill="#f40086">fim da transcrição</text><text x="558" y="112" font-size="9.6" text-anchor="start" fill="#c67600">seleciona as transformadas</text><line x1="44" y1="60" x2="44" y2="94" stroke="#a300bc" stroke-width="3" stroke-linecap="round"/><line x1="692" y1="60" x2="692" y2="94" stroke="#a300bc" stroke-width="3" stroke-linecap="round"/><text x="44" y="52" font-size="9" text-anchor="middle" fill="#a300bc" font-weight="700">borda</text><text x="692" y="52" font-size="9" text-anchor="middle" fill="#a300bc" font-weight="700">borda</text><rect x="40" y="140" width="320" height="120" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="200" y="162" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">Agrobacterium tumefaciens</text><ellipse cx="110" cy="206" rx="34" ry="18" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.6"/><circle cx="110" cy="206" r="11" fill="none" stroke="#a300bc" stroke-width="2"/><text x="110" y="234" font-size="9.6" text-anchor="middle" fill="#a300bc" font-weight="700">plasmideo Ti</text><line x1="152" y1="206" x2="214" y2="206" stroke="#a300bc" stroke-width="2" stroke-linecap="round" marker-end="url(#a-rx)"/><text x="183" y="196" font-size="9.6" text-anchor="middle" fill="#a300bc" font-weight="700">T-DNA</text><circle cx="262" cy="206" r="28" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.6"/><circle cx="262" cy="206" r="11" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="262" y="246" font-size="9.6" text-anchor="middle" fill="#0083cb" font-weight="700">célula vegetal</text><rect x="380" y="140" width="320" height="120" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="540" y="162" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">biobalistica</text><circle cx="420" cy="196" r="5" fill="#c67600" stroke="#c67600" stroke-width="1.4"/><circle cx="436" cy="202" r="5" fill="#c67600" stroke="#c67600" stroke-width="1.4"/><circle cx="452" cy="208" r="5" fill="#c67600" stroke="#c67600" stroke-width="1.4"/><circle cx="468" cy="214" r="5" fill="#c67600" stroke="#c67600" stroke-width="1.4"/><line x1="410" y1="190" x2="500" y2="212" stroke="#c67600" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-la)"/><circle cx="560" cy="212" r="28" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.6"/><circle cx="560" cy="212" r="11" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="540" y="246" font-size="9.4" text-anchor="middle" fill="#5c5c66">partículas de ouro recobertas com DNA</text><rect x="20" y="272" width="700" height="42" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="292" font-size="10.4" text-anchor="middle" fill="#333333">Cada insercao e um evento de transformação, com nome próprio, e e o evento que os orgaos reguladores avaliam.</text><text x="370" y="308" font-size="10.2" text-anchor="middle" fill="#5c5c66">A planta precisa ser regenerada a partir da célula transformada, o que liga tudo a cultura de tecidos.</text></svg>
O cassete de expressão e os dois métodos principais de entrega.

O que se introduz não é só o gene: é um **cassete de expressão**, com três partes essenciais, além dos genes auxiliares:

1. **Promotor:** define onde, quando e quanto o gene será expresso. O **CaMV 35S**, do vírus do mosaico da couve-flor, é constitutivo e forte; o promotor da ubiquitina é muito usado em monocotiledôneas; há também promotores específicos de tecido (só na semente, só na raiz) ou induzíveis (por estresse, por um químico).
2. **Sequência codificadora** do gene de interesse, muitas vezes com os códons **otimizados** para o uso de códons da planta (tema 37), o que aumenta bastante a expressão de genes de origem bacteriana.
3. **Terminador:** sinaliza o fim da transcrição e a poliadenilação (o NOS, de *Agrobacterium*, é clássico).

Acrescenta-se um **gene marcador de seleção** (resistência a um antibiótico como a canamicina, ou a um herbicida) e, muitas vezes, um **gene repórter**, como o GUS (que produz coloração azul) ou o GFP (fluorescência, tema 93), para acompanhar visualmente a transformação.

## Transformação por *Agrobacterium tumefaciens*

*A. tumefaciens* é uma bactéria do solo que causa a **galha da coroa** em plantas. O mecanismo é notável: ela transfere naturalmente um pedaço do seu próprio DNA para o genoma da planta, que passa a produzir hormônios (causando o tumor) e **opinas**, compostos que só a bactéria consegue usar como alimento. É um caso natural de transferência horizontal de genes entre reinos.

**Como funciona:**

- O **plasmídeo Ti** (indutor de tumor) carrega duas regiões importantes: o **T-DNA**, delimitado pelas bordas direita e esquerda, que é o trecho transferido, e os **genes vir** (de virulência), que fazem a transferência acontecer.
- Compostos fenólicos liberados por plantas feridas, como a **acetosseringona**, ativam os genes vir.
- As proteínas Vir cortam o T-DNA nas bordas, e o filamento é transportado para a célula vegetal e até o núcleo, onde se integra no genoma, geralmente em poucas cópias.

**A engenharia:** o segredo é que a maquinaria vir transfere **o que estiver entre as bordas**. Removem-se os genes de tumor e de opinas e coloca-se no lugar a construção de interesse: é a linhagem "desarmada". Nos **vetores binários**, o T-DNA modificado fica num plasmídeo pequeno, fácil de manipular em *E. coli*, e os genes vir ficam em outro plasmídeo na mesma bactéria.

**Protocolo típico:** explantes (discos foliares, embriões imaturos) são incubados com a suspensão de *Agrobacterium*, cocultivados por dois a três dias, lavados com antibiótico para eliminar a bactéria e transferidos para meio de seleção e regeneração (tema 103). Em *Arabidopsis*, há um método ainda mais simples, o **floral dip**, em que se mergulham as inflorescências na suspensão bacteriana e se colhem sementes transformadas.

*A. tumefaciens* infecta naturalmente dicotiledôneas. Durante anos, as monocotiledôneas (milho, arroz, trigo) foram consideradas inacessíveis, mas o ajuste de linhagens, de meios e o uso de acetosseringona tornaram o método viável também para os principais cereais.

## Biobalística

A **biobalística** (ou bombardeamento de micropartículas), desenvolvida por John Sanford nos anos 1980, dispara partículas de ouro ou tungstênio (de cerca de 1 µm) recobertas com DNA contra o tecido vegetal, usando gás hélio sob pressão. As partículas atravessam a parede e a membrana, e o DNA se solta dentro da célula.

| | *Agrobacterium* | Biobalística |
|---|---|---|
| Espécies | preferencialmente dicotiledôneas (hoje também cereais) | qualquer espécie e tecido |
| Número de cópias | poucas, inserção mais "limpa" | frequentemente muitas cópias e rearranjos |
| Custo | baixo | equipamento caro |
| Vantagem extra | integração mais previsível | permite transformar **plastídeos** |

A **transformação de plastídeos** (cloroplastos) é feita por biobalística e tem vantagens: há centenas de genomas por célula, o que dá expressão altíssima, e, como os plastídeos são herdados pela mãe na maioria das espécies, o transgene não se dissemina pelo pólen, um ganho de biossegurança.

Outros métodos incluem a **eletroporação** e o **PEG** em protoplastos (temas 82 e 103), hoje muito usados para entrega transitória de ribonucleoproteínas na edição gênica (tema 105).

## Seleção, regeneração e confirmação

Depois da entrega do DNA, só uma pequena fração das células é transformada. O meio de seleção (com canamicina, higromicina ou um herbicida) permite que apenas essas células cresçam e regenerem plantas (tema 103).

A confirmação envolve várias etapas:

- **PCR** (tema 56) para verificar a presença do transgene;
- **Southern blot** ou sequenciamento para determinar o número de cópias e o local de inserção;
- **RT-qPCR** (tema 57) para medir a expressão do RNA;
- **Western blot** ou ELISA para detectar a proteína;
- **análise da progênie** para verificar a herança mendeliana (uma única inserção segrega 3:1, tema 38) e obter linhagens homozigotas.

Cada inserção independente é um **evento de transformação**, com nome próprio, e é o evento (não só o gene) que é avaliado e aprovado pelos órgãos reguladores.

## Principais aplicações comerciais

| Característica | Gene e origem | Mecanismo |
|---|---|---|
| Resistência a insetos (Bt) | genes *cry* de *Bacillus thuringiensis* | a proteína cristal se liga a receptores no intestino de larvas específicas e rompe as células |
| Tolerância ao glifosato | gene *cp4 epsps* de *Agrobacterium* | versão da enzima EPSPS insensível ao herbicida |
| Tolerância ao glufosinato | gene *bar/pat* de *Streptomyces* | enzima que inativa o herbicida |
| Resistência a vírus | gene da capa proteica do vírus | silenciamento do RNA viral (o mamão havaiano foi salvo assim) |
| Qualidade nutricional | genes da rota dos carotenoides | **arroz dourado**, que acumula betacaroteno no endosperma |
| Tolerância à seca | fator de transcrição bacteriano *cspB* | milho DroughtGard |

O Brasil é o segundo maior produtor mundial de plantas transgênicas, com ampla adoção em soja, milho e algodão. Entre os desenvolvimentos nacionais estão o feijão resistente ao vírus do mosaico dourado, desenvolvido pela Embrapa por silenciamento de RNA, e a cana-de-açúcar Bt.

## Biossegurança e regulação

No Brasil, a Lei de Biossegurança (Lei nº 11.105/2005) atribui à **CTNBio** (Comissão Técnica Nacional de Biossegurança) a avaliação técnica dos OGMs. Toda instituição que trabalha com organismos geneticamente modificados precisa de uma **CIBio** interna e de um Certificado de Qualidade em Biossegurança. A avaliação considera a segurança alimentar (alergenicidade, toxicidade, equivalência substancial) e ambiental (efeitos em organismos não alvo, fluxo gênico para espécies aparentadas, evolução de resistência em pragas). Produtos destinados ao consumo humano com mais de 1% de ingredientes transgênicos devem exibir o símbolo "T" na embalagem.

> **Atenção, erros comuns:**
> Achar que *Agrobacterium* insere o plasmídeo inteiro: só o trecho entre as bordas do T-DNA é transferido.
> Esquecer que o promotor é tão determinante quanto o gene.
> Confundir transformação transitória (expressão temporária, sem integração) com estável.

## Para fixar

- A construção tem promotor, gene e terminador, mais marcador de seleção.
- *Agrobacterium* transfere o T-DNA naturalmente; a biobalística serve a qualquer espécie e aos plastídeos.
- Cada inserção é um evento, que precisa ser caracterizado molecularmente e aprovado pelos órgãos reguladores.
`,
  referencias: [
    "TORRES, A. C.; CALDAS, L. S.; BUSO, J. A. (Ed.). **Cultura de tecidos e transformação genética de plantas**. Brasília: Embrapa, 1998. 2 v.",
    "BRASIL. **Lei nº 11.105, de 24 de março de 2005**. Lei de Biossegurança. Brasília, 2005.",
    "GELVIN, S. B. *Agrobacterium*-mediated plant transformation: the biology behind the gene-jockeying tool. **Microbiology and Molecular Biology Reviews**, v. 67, n. 1, p. 16-37, 2003.",
    "SLATER, A.; SCOTT, N. W.; FOWLER, M. R. **Plant biotechnology**: the genetic manipulation of plants. 2. ed. Oxford: Oxford University Press, 2008.",
  ],
},
{
  id: "r105", num: 105,
  area: "Melhoramento Vegetal e Biotecnologia de Plantas",
  disciplina: "Biotecnologia Vegetal",
  titulo: "Edição gênica: CRISPR e outras ferramentas",
  descricao: "Das nucleases de dedos de zinco e TALENs ao CRISPR-Cas9: como funciona, reparo por NHEJ e HDR, edição de base e prime editing, entrega em plantas e animais, usos em bioprocessos e o marco regulatório.",
  tags: ["Biotecnologia Vegetal", "Biologia Molecular", "edição gênica", "CRISPR", "Cas9", "RNA guia", "PAM", "nuclease", "ZFN", "TALEN", "NHEJ", "HDR", "knockout", "knock-in", "edição de base", "prime editing", "Cas12a", "ribonucleoproteína", "baculovírus", "transgene-free", "TIO", "CTNBio", "terapia gênica"],
  conteudo: String.raw`
## De inserir a reescrever

A transformação genética (tema 104) **acrescenta** um gene em um local imprevisível do genoma. A **edição gênica** faz algo diferente: modifica uma sequência **escolhida**, no seu próprio lugar. Pode desligar um gene, corrigir uma mutação, trocar uma letra ou ajustar a expressão. A chave é produzir um **corte no DNA num local específico** e deixar que o reparo celular faça o resto.

## As gerações de nucleases programáveis

| Ferramenta | Como reconhece o alvo | Limitações |
|---|---|---|
| **ZFN** (nucleases de dedos de zinco) | proteínas de dedo de zinco, cada uma lendo 3 bases | difícil e caro de projetar |
| **TALEN** | domínios TALE de *Xanthomonas*, cada um lendo 1 base | projeto mais simples, mas ainda exige montar uma proteína nova por alvo |
| **CRISPR-Cas** | um **RNA guia** que pareia com o DNA | basta trocar 20 nucleotídeos do RNA: barato e rápido |

A mudança decisiva do CRISPR foi substituir o reconhecimento por **proteína** pelo reconhecimento por **RNA**.

## De onde veio o CRISPR

CRISPR (*clustered regularly interspaced short palindromic repeats*) é um **sistema imune adaptativo de bactérias e arqueias**. Ao sobreviver a uma infecção por vírus, a bactéria guarda pedaços do DNA invasor entre as repetições do lócus CRISPR. Em uma nova infecção, transcreve esses trechos em RNAs que guiam a nuclease Cas até o DNA do vírus, cortando-o.

Em 2012, Jennifer Doudna e Emmanuelle Charpentier mostraram que o sistema do tipo II, com a proteína **Cas9**, podia ser reprogramado para cortar qualquer sequência, bastando fornecer um **RNA guia único (sgRNA)**. O Nobel de Química de 2020 foi concedido pela descoberta.

## Como o CRISPR-Cas9 funciona

<svg viewBox="0 0 740 340" xmlns="http://www.w3.org/2000/svg" role="img"><title>CRISPR-Cas9</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">CRISPR-Cas9: o RNA guia leva a tesoura ao alvo</text><line x1="60" y1="110" x2="540" y2="110" stroke="#0083cb" stroke-width="5" stroke-linecap="round"/><line x1="60" y1="136" x2="540" y2="136" stroke="#0083cb" stroke-width="5" stroke-linecap="round"/><line x1="70" y1="113" x2="70" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="86" y1="113" x2="86" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="102" y1="113" x2="102" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="118" y1="113" x2="118" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="134" y1="113" x2="134" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="150" y1="113" x2="150" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="166" y1="113" x2="166" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="182" y1="113" x2="182" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="198" y1="113" x2="198" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="214" y1="113" x2="214" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="230" y1="113" x2="230" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="246" y1="113" x2="246" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="262" y1="113" x2="262" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="278" y1="113" x2="278" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="294" y1="113" x2="294" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="310" y1="113" x2="310" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="326" y1="113" x2="326" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="342" y1="113" x2="342" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="358" y1="113" x2="358" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="374" y1="113" x2="374" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="390" y1="113" x2="390" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="406" y1="113" x2="406" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="422" y1="113" x2="422" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="438" y1="113" x2="438" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="454" y1="113" x2="454" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="470" y1="113" x2="470" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="486" y1="113" x2="486" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="502" y1="113" x2="502" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="518" y1="113" x2="518" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><line x1="534" y1="113" x2="534" y2="133" stroke="#bcd9ee" stroke-width="1.6" stroke-linecap="round"/><rect x="300" y="104" width="150" height="38" rx="4" fill="none" stroke="#a300bc" stroke-width="2"/><text x="375" y="96" font-size="9.8" text-anchor="middle" fill="#a300bc" font-weight="700">sequência alvo (20 nt)</text><rect x="452" y="104" width="40" height="38" rx="4" fill="#fde4f0" stroke="#f40086" stroke-width="1.6"/><text x="472" y="96" font-size="9.8" text-anchor="middle" fill="#f40086" font-weight="700">PAM</text><path d="M330,36 C300,36 288,58 296,76 L300,76 L300,96 L452,96 L452,76 L456,76 C464,58 452,36 422,36 Z" fill="#e8edf7" stroke="#0083cb" stroke-width="1.8"/><text x="376" y="64" font-size="13" text-anchor="middle" fill="#0083cb" font-weight="700">Cas9</text><path d="M340,96 C348,108 360,110 374,112" fill="none" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><text x="258" y="118" font-size="9.8" text-anchor="end" fill="#0a8f5e" font-weight="700">RNA guia</text><path d="M262,114 C290,108 320,106 346,110" fill="none" stroke="#0a8f5e" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><line x1="404" y1="98" x2="404" y2="148" stroke="#d33a4e" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="4 3"/><text x="492" y="160" font-size="10" text-anchor="start" fill="#d33a4e" font-weight="700">corte na fita dupla</text><rect x="40" y="186" width="312" height="92" rx="8" fill="#fff" stroke="#d33a4e" stroke-width="1.4"/><text x="196" y="208" font-size="12.5" text-anchor="middle" fill="#d33a4e" font-weight="700">NHEJ</text><line x1="70" y1="232" x2="322" y2="232" stroke="#0083cb" stroke-width="4" stroke-linecap="round"/><rect x="180" y="226" width="26" height="12" rx="3" fill="#d33a4e" stroke="#d33a4e" stroke-width="0"/><text x="196" y="268" font-size="9.4" text-anchor="middle" fill="#5c5c66">junta as pontas e deixa indels: nocaute do gene</text><rect x="388" y="186" width="312" height="92" rx="8" fill="#fff" stroke="#0a8f5e" stroke-width="1.4"/><text x="544" y="208" font-size="12.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">HDR</text><line x1="418" y1="232" x2="670" y2="232" stroke="#0083cb" stroke-width="4" stroke-linecap="round"/><rect x="520" y="226" width="42" height="12" rx="3" fill="#0a8f5e" stroke="#0a8f5e" stroke-width="0"/><text x="541" y="250" font-size="9" text-anchor="middle" fill="#0a8f5e" font-weight="700">molde</text><text x="544" y="268" font-size="9.4" text-anchor="middle" fill="#5c5c66">com um molde, troca a sequência com precisão</text><line x1="376" y1="150" x2="200" y2="182" stroke="#d33a4e" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="376" y1="150" x2="546" y2="182" stroke="#0a8f5e" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-ve)"/><rect x="20" y="292" width="700" height="42" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="312" font-size="10.4" text-anchor="middle" fill="#333333">Em plantas, o cassete da Cas9 pode ser eliminado por segregação nas geracoes seguintes, ou nunca inserido,</text><text x="370" y="328" font-size="10.4" text-anchor="middle" fill="#5c5c66">quando a proteína já montada e entregue direto na célula. O resultado e uma planta editada e sem transgene.</text></svg>
O RNA guia leva a Cas9 ao alvo; a via de reparo escolhida define o resultado.

1. O **sgRNA** tem cerca de 20 nucleotídeos complementares ao alvo.
2. A Cas9 só corta se, logo após a sequência alvo, houver o **PAM** (*protospacer adjacent motif*), que para a Cas9 de *Streptococcus pyogenes* é 5'-NGG-3'. O PAM impede que a bactéria corte o próprio lócus CRISPR, e, na prática, limita onde se pode editar.
3. Com o pareamento correto, a Cas9 produz uma **quebra de fita dupla** cerca de 3 pares de bases antes do PAM.

## O reparo decide o resultado

| Via de reparo | Quando ocorre | Resultado | Uso |
|---|---|---|---|
| **NHEJ** (junção de extremidades não homólogas) | sempre disponível, dominante em plantas e células somáticas | pequenas inserções ou deleções, que causam mudança de quadro de leitura | **nocaute** de genes |
| **HDR** (reparo por homologia) | exige um molde de DNA e é restrita a fases do ciclo celular | troca precisa da sequência | correção de mutações, **knock-in** |

Em plantas, a HDR é bem menos eficiente que a NHEJ, e aumentar sua frequência é um dos grandes desafios da área.

## Além do corte: novas variantes

- **dCas9** (Cas9 "morta", sem atividade de corte) fusionada a ativadores ou repressores: liga ou desliga genes sem mexer na sequência (CRISPRa e CRISPRi), ou recruta enzimas que alteram a metilação (edição epigenética).
- **Edição de base** (*base editing*): uma Cas9 modificada, fusionada a uma desaminase, converte diretamente C em T ou A em G, **sem quebra de fita dupla** e sem molde. É mais segura e eficiente para mutações pontuais.
- **Prime editing:** combina uma Cas9 nickase com uma transcriptase reversa e um RNA que traz a informação da edição desejada. Permite inserções, deleções e todas as 12 substituições possíveis, com mais versatilidade.
- **Cas12a (Cpf1):** reconhece PAM rico em T, corta deixando pontas coesivas e processa o próprio RNA guia, o que facilita editar vários alvos ao mesmo tempo (**multiplexação**).
- **Cas13:** atua sobre **RNA**, não DNA, o que permite silenciar transcritos e detectar RNAs virais.

A multiplexação é especialmente valiosa em espécies poliploides (tema 99): no trigo hexaploide, editar as três cópias homeólogas de um gene ao mesmo tempo produziu resistência ao oídio, algo inviável pelo cruzamento.

## Entregando o sistema nas células

Em plantas, há três estratégias principais:

1. **Via *Agrobacterium* ou biobalística** (tema 104), com os genes da Cas9 e do sgRNA integrados ao genoma. A planta editada é, nesse momento, também transgênica, mas o cassete pode ser **removido por segregação** nas gerações seguintes, já que a edição no gene-alvo é herdada de forma independente. O resultado é uma planta editada e **livre de transgene**.
2. **Ribonucleoproteínas (RNP):** a proteína Cas9 já montada com o sgRNA é entregue diretamente a protoplastos (por PEG ou eletroporação) ou por biobalística. Ela age e é degradada em poucos dias, sem nunca integrar DNA estranho. Reduz também as edições fora do alvo.
3. **Vetores virais vegetais**, para expressão transitória.

Em **células animais e de insetos**, além da transfecção e da eletroporação, usam-se vetores virais. Os **baculovírus** merecem destaque: são vírus de insetos, incapazes de se replicar em células humanas, usados há décadas como vetores de expressão de proteínas recombinantes em células de inseto (o sistema baculovírus-Sf9, usado na produção de vacinas e de vetores virais adeno-associados) e, de forma crescente, como veículos para entregar grandes construções, inclusive componentes de edição, em células de mamíferos.

## Aplicações

**Em plantas:**

- **Tomate com mais GABA** e **arroz com amido modificado**, aprovados no Japão e na China.
- **Soja com óleo de perfil melhorado** (alto teor de ácido oleico), por nocaute de dessaturases, comercializada nos Estados Unidos.
- **Trigo resistente ao oídio**, pela edição simultânea de três homeólogos.
- **Cacau e banana resistentes a doenças**, em desenvolvimento.
- **Domesticação acelerada:** editar poucos genes de domesticação em espécies silvestres tolerantes a estresses, em vez de levar características silvestres para variedades modernas.

**Em microrganismos e bioprocessos:** o CRISPR tornou rotina a modificação de leveduras e bactérias industriais, permitindo inserir rotas metabólicas inteiras, eliminar subprodutos e aumentar a tolerância a inibidores (temas 113 e 114).

**Em saúde:** a terapia com células editadas para anemia falciforme e betatalassemia (exagamglogene autotemcel) foi aprovada em 2023 no Reino Unido e nos Estados Unidos, o primeiro tratamento aprovado baseado em CRISPR.

## Limitações e cuidados

- **Edições fora do alvo** (*off-target*): cortes em sequências parecidas com a do alvo. Mitigadas por guias bem desenhados, Cas9 de alta fidelidade e entrega por RNP, e verificadas por sequenciamento do genoma.
- **Mosaicismo:** quando a edição ocorre depois das primeiras divisões, o organismo fica com células editadas e não editadas.
- **Dependência da regeneração:** em muitas espécies, ainda é difícil regenerar plantas a partir das células editadas (tema 103).
- **Questões éticas:** a edição de linhagem germinativa humana é proibida em praticamente todos os países, e o caso dos bebês editados na China, em 2018, foi condenado pela comunidade científica.

## Regulação no Brasil

A CTNBio estabeleceu, na **Resolução Normativa nº 16/2018**, o conceito de **Técnicas Inovadoras de Melhoramento de Precisão (TIMP)**. O produto final é analisado caso a caso: se **não contém DNA exógeno** e a alteração poderia ter surgido por mutação natural ou por métodos convencionais, ele **não é classificado como OGM** e segue as regras das variedades convencionais. Essa abordagem, baseada no produto e não no processo, é semelhante à adotada nos Estados Unidos e em vários países da América Latina, e diferente da europeia, mais restritiva quanto ao processo.

> **Atenção, erros comuns:**
> Dizer que toda planta editada é transgênica: o cassete pode ser eliminado por segregação, ou nunca ter sido inserido (RNP).
> Esquecer a exigência do PAM ao escolher o alvo.
> Confundir nocaute por NHEJ (imprevisível, com indels) com edição precisa (HDR, edição de base ou prime editing).

## Para fixar

- CRISPR-Cas9 usa um RNA guia e o PAM para cortar um alvo escolhido; o reparo por NHEJ nocauteia e o por HDR edita com precisão.
- Edição de base e prime editing fazem alterações pontuais sem quebra de fita dupla.
- No Brasil, produtos editados sem DNA exógeno podem ser enquadrados como não OGM pela CTNBio.
`,
  referencias: [
    "JINEK, M.; CHYLINSKI, K.; FONFARA, I.; HAUER, M.; DOUDNA, J. A.; CHARPENTIER, E. A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity. **Science**, v. 337, n. 6096, p. 816-821, 2012.",
    "CTNBio. **Resolução Normativa nº 16, de 15 de janeiro de 2018**. Estabelece os requisitos técnicos para apresentação de consulta à CTNBio sobre as Técnicas Inovadoras de Melhoramento de Precisão. Brasília, 2018.",
    "ANZALONE, A. V.; KOBLAN, L. W.; LIU, D. R. Genome editing with CRISPR-Cas nucleases, base editors, transposases and prime editors. **Nature Biotechnology**, v. 38, p. 824-844, 2020.",
    "ZHU, H.; LI, C.; GAO, C. Applications of CRISPR-Cas in agriculture and plant biotechnology. **Nature Reviews Molecular Cell Biology**, v. 21, p. 661-677, 2020.",
  ],
}
);
