/* BIONEXO — Resumos complementares · Técnicas e Protocolos de Laboratório (r56–r62)
   Manuais didáticos. No laboratório valem SEMPRE o POP do grupo, as instruções do
   fabricante dos reagentes/kits e as normas de biossegurança. */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r56", num: 56, tipo: "manual",
  area: "Técnicas e Protocolos de Laboratório",
  disciplina: "Biologia Molecular",
  titulo: "PCR convencional: montagem, ciclagem e solução de problemas",
  descricao: "O que a PCR faz, para que serve, como montar a reação, como programar o termociclador e o que fazer quando o resultado não sai como esperado.",
  tags: ["PCR", "reação em cadeia da polimerase", "primer", "iniciador", "Taq polimerase", "termociclador", "mix", "temperatura de anelamento", "Tm", "controle negativo", "protocolo"],
  conteudo: String.raw`
> **Aviso:** este texto é um material de estudo. No laboratório, siga sempre o procedimento operacional padrão (POP) do seu grupo, as instruções do fabricante da enzima e as normas de biossegurança, com a supervisão de um responsável.

## O que é a PCR

A PCR (reação em cadeia da polimerase) é uma técnica utilizada em laboratório para produzir várias cópias de um trecho específico do DNA. Para isso, são utilizados os **primers** (também chamados de **iniciadores**), que são pequenos fragmentos de DNA que reconhecem e se ligam a sequências complementares, indicando o local onde a cópia deve começar.

O processo acontece em três etapas: primeiro, o DNA é aquecido para separar suas duas fitas; depois, os primers se ligam às regiões correspondentes; por fim, uma enzima chamada **DNA polimerase**, resistente a altas temperaturas, utiliza essas regiões como ponto de partida para formar novas fitas de DNA. Esse ciclo se repete várias vezes e, idealmente, a quantidade do trecho desejado dobra a cada repetição (tema 36). Depois de 30 ciclos, uma única cópia pode virar cerca de um bilhão de cópias, quantidade suficiente para ser vista num gel de agarose.

![Os três passos de cada ciclo da PCR (desnaturação a 94–96 °C, anelamento dos primers e extensão a cerca de 72 °C) e o aumento exponencial do número de cópias a cada ciclo.](https://upload.wikimedia.org/wikipedia/commons/9/96/Polymerase_chain_reaction.svg)
Fonte: Enzoklop, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Polymerase_chain_reaction.svg).

## Para que a PCR é usada

- **Identificar microrganismos:** amplificar o gene do RNA ribossômico 16S de uma bactéria isolada de uma fermentação e depois sequenciá-lo (temas 61 e 62).
- **Confirmar uma clonagem:** verificar se o gene de interesse realmente entrou no plasmídeo de uma colônia de *E. coli*, antes de investir tempo no cultivo.
- **Detectar contaminantes:** procurar o DNA de um microrganismo indesejado num lote de produto ou de matéria-prima.
- **Diagnóstico:** detectar vírus e bactérias causadores de doenças em pessoas, animais e plantas.

## O que vai dentro do tubo

Cada componente tem uma função. A tabela mostra as concentrações finais mais comuns, isto é, as concentrações que cada reagente deve ter **dentro do tubo pronto**.

| Componente | Concentração final típica | Para que serve |
|---|---|---|
| Tampão da enzima | 1× | mantém o pH e o meio adequados para a polimerase trabalhar |
| Cloreto de magnésio (\(\ce{MgCl2}\)) | 1,5 a 2,5 mmol/L | a polimerase só funciona com magnésio; muitos tampões já vêm com ele |
| dNTPs (A, T, C e G) | 200 µmol/L de cada | são as "peças" usadas para montar as novas fitas |
| Primer direto (F) e primer reverso (R) | 0,1 a 0,5 µmol/L de cada | marcam o início e o fim do trecho que será copiado |
| Taq DNA polimerase | cerca de 1 unidade por 50 µL de reação | enzima que monta as novas fitas |
| DNA molde | genômico: 10 a 100 ng; plasmídeo: 0,1 a 1 ng | contém o trecho que se quer copiar |
| Água livre de nucleases | o suficiente para completar o volume | |

## Exemplo: preparando 10 reações de 25 µL

Quando há várias amostras, não se pipeta cada reagente em cada tubo. Prepara-se primeiro uma **mistura única (o "mix")** com tudo, menos o DNA molde, e só depois ela é dividida entre os tubos. Isso economiza tempo, diminui erros de pipetagem e garante que todos os tubos recebam exatamente a mesma mistura. Como sempre se perde um pouco de líquido nas ponteiras, faz-se o cálculo para uma reação a mais (aqui, 11 reações).

| Componente (solução estoque) | Por reação | Mix para 11 reações |
|---|---|---|
| Tampão 10× | 2,5 µL | 27,5 µL |
| \(\ce{MgCl2}\) 50 mmol/L (para ficar com 1,5 mmol/L) | 0,75 µL | 8,25 µL |
| dNTPs 10 mmol/L de cada (para ficar com 200 µmol/L) | 0,5 µL | 5,5 µL |
| Primer F 10 µmol/L (para ficar com 0,4 µmol/L) | 1,0 µL | 11 µL |
| Primer R 10 µmol/L (para ficar com 0,4 µmol/L) | 1,0 µL | 11 µL |
| Taq 5 U/µL (1,25 U por reação) | 0,25 µL | 2,75 µL |
| Água | 18 µL | 198 µL |
| **Total do mix** | **24 µL** | **264 µL** |
| DNA molde (colocado em cada tubo separadamente) | 1 µL | |

Todos os volumes saem da fórmula da diluição, \(C_1V_1 = C_2V_2\) (tema 13). Por exemplo, para os dNTPs: queremos 200 µmol/L em 25 µL a partir de um estoque de 10 000 µmol/L, então \(V_1 = 200\times25/10\,000 = 0{,}5\) µL.

## Programando o termociclador

O **termociclador** é o aparelho que muda automaticamente a temperatura dos tubos, repetindo os ciclos. Um programa típico é:

1. Desnaturação inicial: 95 °C por 2 a 3 minutos, para separar bem as fitas do DNA molde.
2. De 25 a 35 ciclos com três etapas: 95 °C por 30 segundos (separar as fitas); temperatura de anelamento por 30 segundos (os primers se ligam); 72 °C por cerca de 1 minuto para cada mil pares de bases do produto (a polimerase faz as novas fitas).
3. Extensão final: 72 °C por 5 minutos, para terminar as fitas incompletas.
4. Manutenção: 4 °C até alguém retirar os tubos.

### Como escolher a temperatura de anelamento

É a etapa que mais influencia o resultado. A regra prática é usar uma temperatura cerca de **5 °C abaixo da Tm** dos primers. A Tm (temperatura de fusão ou *melting*) é a temperatura na qual metade dos primers está ligada ao DNA e metade está solta.

- Se a temperatura de anelamento for **alta demais**, os primers não conseguem se ligar e a reação não produz nada.
- Se for **baixa demais**, os primers se ligam também em lugares parecidos, mas errados, e aparecem bandas extras, os chamados **produtos inespecíficos** (ou espúrios).

Para primers curtos, uma estimativa rápida da Tm é a regra de Wallace, a mesma usada em manuais da Embrapa: \(T_m \approx 2\,(A + T) + 4\,(G + C)\), em °C. O primer 5'-ATGCGTACGTTAGCCTAGGA-3' tem 20 bases, com 5 A, 5 T, 6 G e 4 C. Então \(T_m \approx 2(10) + 4(10) = 60\) °C, e a temperatura de anelamento fica em torno de 55 °C. Programas de computador que usam o método dos "vizinhos mais próximos" dão estimativas mais precisas.

## Regras para desenhar bons primers

- Ter entre 18 e 25 bases e entre 40% e 60% de G + C.
- Ter Tm entre cerca de 52 e 65 °C, e os dois primers do par com Tm parecidas (diferença de até 5 °C).
- Não ser complementares entre si, principalmente na ponta 3'. Se forem, os primers se ligam um no outro e formam **dímeros de primers**, bandas pequenas que atrapalham a análise.
- Evitar repetições longas de uma mesma base e sequências que dobrem sobre si mesmas (grampos).
- Conferir no **Primer-BLAST** se o par só reconhece o trecho desejado (tema 62).

## Controles: como saber se dá para confiar no resultado

- **Controle negativo** (também chamado de NTC, sigla em inglês para "sem molde"): um tubo com água no lugar do DNA. Ele **não pode** apresentar banda. Se apresentar, algum reagente ou material está contaminado com DNA.
- **Controle positivo:** um DNA que sabidamente funciona com aqueles primers. Se ele não amplificar, o problema está nos reagentes ou no programa, e não nas amostras.

O resultado é verificado por **eletroforese em gel de agarose**, comparando o tamanho da banda obtida com um marcador de tamanho (tema 60).

## Quando a PCR não funciona

| O que aconteceu | Causas mais prováveis | O que fazer |
|---|---|---|
| Nenhuma banda | temperatura de anelamento alta demais; pouco magnésio; DNA molde degradado ou com impurezas que inibem a enzima; enzima estragada | baixar o anelamento ou testar um gradiente de temperaturas; ajustar o magnésio; diluir o DNA (isso também dilui os inibidores); conferir o controle positivo |
| Várias bandas além da esperada | anelamento baixo demais; excesso de primers, de DNA ou de ciclos; magnésio alto | subir o anelamento; usar PCR *touchdown* ou enzima *hot start*; reduzir ciclos e concentrações |
| Banda no controle negativo | contaminação com DNA ou com produtos de PCRs anteriores | separar as áreas antes e depois da PCR; usar ponteiras com filtro; fazer novas alíquotas dos reagentes |
| Banda muito pequena (menos de 100 pares de bases) | dímero de primers | redesenhar os primers; diminuir a concentração deles; usar *hot start* |
| Mancha contínua no gel (rastro) | excesso de DNA ou de ciclos; DNA degradado | usar menos DNA e menos ciclos; conferir a qualidade do DNA |

Duas variações úteis aparecem nessa tabela. Na **PCR *touchdown***, a temperatura de anelamento começa alta e vai baixando aos poucos a cada ciclo; assim, os primeiros ciclos só copiam o alvo certo, e ele passa a dominar a reação. Na **PCR *hot start***, a polimerase fica inativa até o tubo atingir alta temperatura, o que impede que ela trabalhe enquanto a reação ainda está sendo montada.

## Boas práticas no dia a dia

- Monte as reações **no gelo** e coloque a enzima por último, ou use uma enzima *hot start*.
- Trabalhe sempre no mesmo sentido: área limpa para preparar o mix, outra área para adicionar o DNA e uma terceira para analisar os produtos. **Nunca** leve tubos com produto de PCR de volta para a área de preparo, porque eles são a principal fonte de contaminação.
- Misture o mix com cuidado, pipetando ou invertendo o tubo, sem agitar com força no vórtex (a enzima é sensível). Dê uma rápida centrifugada antes de distribuir.

## Para fixar

- A PCR copia milhões de vezes um trecho escolhido do DNA, definido pelos primers.
- Cada ciclo tem três etapas: separar as fitas, ligar os primers e formar as novas fitas.
- A temperatura de anelamento é a principal responsável pela especificidade da reação.
- Sem controle negativo e controle positivo, o resultado não é confiável.
`,
  referencias: [
    "SCHAEFER, R. **Técnicas em biologia molecular**. Concórdia: Embrapa Suínos e Aves, 2006. 24 p. (Documentos, 116).",
    "ZAHA, A.; FERREIRA, H. B.; PASSAGLIA, L. M. P. (org.). **Biologia molecular básica**. 5. ed. Porto Alegre: Artmed, 2014.",
    "GREEN, M. R.; SAMBROOK, J. **Molecular cloning**: a laboratory manual. 4. ed. Cold Spring Harbor: Cold Spring Harbor Laboratory Press, 2012.",
    "SAIKI, R. K. et al. Primer-directed enzymatic amplification of DNA with a thermostable DNA polymerase. **Science**, v. 239, n. 4839, p. 487-491, 1988.",
    "LORENZ, T. C. Polymerase chain reaction: basic protocol plus troubleshooting and optimization strategies. **Journal of Visualized Experiments**, n. 63, e3998, 2012.",
    "YE, J. et al. Primer-BLAST: a tool to design target-specific primers for polymerase chain reaction. **BMC Bioinformatics**, v. 13, 134, 2012.",
  ],
},
{
  id: "r57", num: 57, tipo: "manual",
  area: "Técnicas e Protocolos de Laboratório",
  disciplina: "Biologia Molecular",
  titulo: "PCR em tempo real (qPCR) e RT-qPCR",
  descricao: "Como a qPCR mede a quantidade de DNA enquanto a reação acontece, o que é o Ct, como avaliar a eficiência e como comparar a expressão de genes entre amostras.",
  tags: ["qPCR", "PCR em tempo real", "PCR quantitativa", "RT-qPCR", "Ct", "Cq", "eficiência", "curva padrão", "2-ΔΔCt", "SYBR Green", "TaqMan", "expressão gênica", "MIQE", "protocolo"],
  conteudo: String.raw`
> **Aviso:** este texto é um material de estudo. No laboratório, siga o POP do seu grupo, as instruções do fabricante do kit e do equipamento e as normas de biossegurança.

## Qual a diferença para a PCR convencional

Na PCR convencional (tema 56), só se descobre se a reação funcionou no final, olhando o gel. Na **PCR em tempo real**, ou **qPCR** (PCR quantitativa), o próprio aparelho acompanha a reação **a cada ciclo**, medindo uma luz (fluorescência) que aumenta à medida que mais DNA é produzido. Com isso, além de saber **se** o alvo está presente, é possível saber **quanto** dele havia no início.

A lógica é simples: se uma amostra tem muito DNA alvo, a fluorescência sobe cedo; se tem pouco, demora mais ciclos para subir.

## O Ct: o número mais importante da qPCR

O aparelho define uma linha de referência, chamada **limiar** (*threshold*), um pouco acima do ruído de fundo. O **Ct** (ou **Cq**) é o número do ciclo em que a fluorescência da amostra **cruza esse limiar**.

- **Ct menor significa mais DNA no início.** A amostra precisou de menos ciclos para "aparecer".
- Como a quantidade dobra a cada ciclo, uma diferença de **1 ciclo** no Ct corresponde a cerca de **2 vezes** mais (ou menos) DNA, e uma diferença de **3,3 ciclos** corresponde a cerca de **10 vezes**.

![Resultado típico de qPCR: no alto, as curvas de amplificação (fluorescência a cada ciclo), com a linha do limiar que define o Ct; embaixo, as curvas de dissociação, em que um pico único indica que só um produto foi formado.](https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/QPCR_results_-_amplification_plot_and_melting_curves.png/960px-QPCR_results_-_amplification_plot_and_melting_curves.png)
Fonte: Helixitta, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:QPCR_results_-_amplification_plot_and_melting_curves.png).

## Como a fluorescência é gerada

Há duas formas principais:

- **Corante SYBR Green:** é uma substância que só brilha quando está encaixada no DNA de fita dupla. Quanto mais DNA é produzido, mais o tubo brilha. É barato e fácil de usar, mas brilha com **qualquer** DNA de fita dupla, inclusive com produtos errados e dímeros de primers. Por isso, ao final, é obrigatório fazer a **curva de dissociação** (*melting*): aquece-se o produto aos poucos e observa-se em que temperatura ele "se desfaz". Um produto único gera um pico único.
- **Sondas de hidrólise (TaqMan):** além dos dois primers, usa-se uma terceira sequência, a **sonda**, que se liga no meio do alvo e carrega uma molécula fluorescente e outra que bloqueia essa fluorescência. Durante a cópia, a polimerase quebra a sonda, a molécula fluorescente fica livre e passa a brilhar. Como a sonda só se liga no alvo certo, o método é mais específico. Também permite medir vários alvos no mesmo tubo, usando cores diferentes.

## Curva padrão e eficiência da reação

Antes de confiar nos números, é preciso verificar se a reação está realmente dobrando o DNA a cada ciclo. Para isso, faz-se uma **curva padrão**: uma amostra de concentração conhecida é diluída várias vezes (geralmente de 10 em 10 vezes), e cada diluição é analisada. Colocando no gráfico o Ct de cada diluição contra o logaritmo da quantidade, obtém-se uma reta. Da **inclinação** dessa reta calcula-se a **eficiência** (\(E\)):

\[ E = 10^{-1/\text{inclinação}} - 1 \]

- Inclinação de −3,32 significa eficiência de 100%, ou seja, o DNA dobra perfeitamente a cada ciclo.
- Em geral, aceitam-se eficiências entre **90% e 110%** (inclinação entre cerca de −3,6 e −3,1), com a reta bem ajustada aos pontos (\(R^2\) acima de 0,98).

**Exemplo:** se a inclinação for −3,45, então \(E = 10^{1/3{,}45} - 1 \approx 0{,}95\), isto é, 95%. A reação está adequada.

## Duas formas de quantificar

**Quantificação absoluta:** usa a curva padrão para transformar o Ct de cada amostra em um número de cópias (por reação, por mL, por grama). É o que se faz para medir carga viral, contar microrganismos numa amostra ou quantificar quantas cópias de um gene foram inseridas numa linhagem.

**Quantificação relativa:** compara a **expressão de um gene** (quanto ele está "ligado") entre duas situações, por exemplo, uma levedura cultivada com e sem um indutor. Para corrigir diferenças na quantidade de material colocada em cada tubo, usa-se um **gene de referência**, um gene que se espera que não mude entre as condições. O método mais usado é o \(2^{-\Delta\Delta C_t}\):

\[ \Delta C_t = C_t^{\,alvo} - C_t^{\,referência}, \qquad \Delta\Delta C_t = \Delta C_t^{\,tratada} - \Delta C_t^{\,controle}, \qquad \text{razão} = 2^{-\Delta\Delta C_t} \]

### Exemplo passo a passo

Na amostra tratada, o gene alvo teve Ct 24,0 e o gene de referência, Ct 18,0. No controle, os valores foram 26,5 e 18,2.

1. Normalizar cada amostra pelo gene de referência: tratada, \(\Delta C_t = 24{,}0 - 18{,}0 = 6{,}0\); controle, \(\Delta C_t = 26{,}5 - 18{,}2 = 8{,}3\).
2. Comparar tratada com controle: \(\Delta\Delta C_t = 6{,}0 - 8{,}3 = -2{,}3\).
3. Calcular a razão: \(2^{2{,}3} \approx 4{,}9\).

Conclusão: o gene está cerca de **4,9 vezes mais expresso** na condição tratada. Esse método supõe que as eficiências do alvo e da referência sejam próximas de 100%. Se forem diferentes, usa-se o modelo de Pfaffl, que corrige cada gene pela própria eficiência.

## RT-qPCR: quando o ponto de partida é RNA

Para estudar a expressão de genes, mede-se o RNA mensageiro. Mas a polimerase da PCR só copia DNA. Por isso, primeiro o RNA é convertido em **DNA complementar (cDNA)** por uma enzima chamada **transcriptase reversa**. Essa etapa se chama **transcrição reversa** (RT), e o conjunto é a **RT-qPCR**, a mesma técnica usada no diagnóstico da covid-19.

Cuidados específicos:

- Tratar o RNA com a enzima **DNase**, que elimina restos de DNA da própria célula.
- Incluir o controle **sem transcriptase reversa** (*no-RT*). Se ele amplificar, há DNA contaminando o RNA.
- **Validar** o gene de referência nas suas condições. Genes muito usados (como GAPDH e actina) às vezes mudam de expressão, e programas como o geNorm ajudam a escolher os mais estáveis.

## Controles e boas práticas

- Controle sem molde, controle sem RT, **réplicas técnicas** (geralmente em triplicata, isto é, o mesmo material em três poços) e **réplicas biológicas** (amostras de cultivos independentes; tema 49).
- Curva de dissociação com um único pico, quando se usa SYBR Green.
- Seguir as recomendações do **MIQE**, um guia internacional que lista o que deve ser verificado e informado para que um resultado de qPCR seja confiável e possa ser repetido por outros laboratórios.

## Quando os resultados parecem estranhos

| O que aconteceu | Causa provável | O que fazer |
|---|---|---|
| Eficiência acima de 110% | inibidores nas amostras mais concentradas; dímeros; erro de pipetagem | diluir mais a amostra; olhar a curva de dissociação; calibrar as pipetas |
| Eficiência abaixo de 90% | primers ruins; condições da reação inadequadas | redesenhar os primers; ajustar a temperatura de anelamento e as concentrações |
| Vários picos na curva de dissociação | produtos inespecíficos ou dímeros | subir a temperatura de anelamento; redesenhar os primers |
| Sinal no controle sem molde | contaminação; dímeros (costumam aparecer em Ct alto, acima de 35) | trocar os reagentes; separar as áreas de trabalho; conferir o pico de dissociação |
| Réplicas técnicas muito diferentes entre si | pipetagem de volumes muito pequenos | usar mix; trabalhar com volumes maiores; usar pipetas calibradas |

## Para fixar

- A qPCR mede o DNA a cada ciclo; o Ct é o ciclo em que o sinal aparece.
- Ct menor significa mais alvo; 3,3 ciclos de diferença correspondem a 10 vezes.
- A eficiência vem da curva padrão e deve ficar entre 90% e 110%.
- A expressão relativa é calculada por \(2^{-\Delta\Delta C_t}\), com um gene de referência validado.
`,
  referencias: [
    "ZAHA, A.; FERREIRA, H. B.; PASSAGLIA, L. M. P. (org.). **Biologia molecular básica**. 5. ed. Porto Alegre: Artmed, 2014.",
    "HIGUCHI, R. et al. Kinetic PCR analysis: real-time monitoring of DNA amplification reactions. **Biotechnology**, v. 11, n. 9, p. 1026-1030, 1993.",
    "LIVAK, K. J.; SCHMITTGEN, T. D. Analysis of relative gene expression data using real-time quantitative PCR and the 2^(−ΔΔCT) method. **Methods**, v. 25, n. 4, p. 402-408, 2001.",
    "PFAFFL, M. W. A new mathematical model for relative quantification in real-time RT-PCR. **Nucleic Acids Research**, v. 29, n. 9, e45, 2001.",
    "VANDESOMPELE, J. et al. Accurate normalization of real-time quantitative RT-PCR data by geometric averaging of multiple internal control genes. **Genome Biology**, v. 3, n. 7, research0034, 2002.",
    "BUSTIN, S. A. et al. The MIQE guidelines: minimum information for publication of quantitative real-time PCR experiments. **Clinical Chemistry**, v. 55, n. 4, p. 611-622, 2009.",
  ],
},
{
  id: "r58", num: 58, tipo: "manual",
  area: "Técnicas e Protocolos de Laboratório",
  disciplina: "Biologia Molecular",
  titulo: "Extração de DNA genômico",
  descricao: "Como tirar o DNA de dentro das células e deixá-lo limpo para uso: lise, remoção de proteínas e RNA, precipitação ou colunas de sílica, e como conferir quantidade e pureza.",
  tags: ["extração de DNA", "DNA genômico", "lise celular", "proteinase K", "fenol-clorofórmio", "CTAB", "coluna de sílica", "precipitação com etanol", "A260/A280", "NanoDrop", "protocolo"],
  conteudo: String.raw`
> **Aviso:** este texto é um material de estudo. No laboratório, siga o POP do seu grupo, as instruções do fabricante do kit e as normas de biossegurança. Fenol e clorofórmio só podem ser manipulados na capela de exaustão, com luvas nitrílicas, jaleco e óculos de proteção.

## Por que extrair o DNA

Quase toda análise molecular (PCR, sequenciamento, clonagem) começa com um DNA **separado** do restante da célula. Dentro da célula, o DNA está misturado com proteínas, RNA, gorduras, açúcares e sais, e várias dessas substâncias atrapalham as enzimas usadas depois. A qualidade da extração costuma decidir o sucesso de todas as etapas seguintes: um DNA sujo ou quebrado pode fazer uma PCR falhar sem que o problema esteja na PCR.

## As quatro etapas de qualquer extração

<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" role="img"><title>Extracao de ácidos nucleicos</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Extracao de ácidos nucleicos: a mesma logica em quatro passos</text><rect x="24" y="60" width="164" height="74" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><circle cx="106" cy="84" r="13" fill="#0083cb" stroke="#0083cb" stroke-width="1"/><text x="106" y="88" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">1</text><text x="106" y="112" font-size="11.5" text-anchor="middle" fill="#0083cb" font-weight="700">romper</text><text x="106" y="128" font-size="9.2" text-anchor="middle" fill="#5c5c66">quebrar parede e membrana</text><line x1="192" y1="97" x2="200" y2="97" stroke="#333333" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-ti)"/><rect x="204" y="60" width="164" height="74" rx="8" fill="#fff" stroke="#a300bc" stroke-width="1.4"/><circle cx="286" cy="84" r="13" fill="#a300bc" stroke="#a300bc" stroke-width="1"/><text x="286" y="88" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">2</text><text x="286" y="112" font-size="11.5" text-anchor="middle" fill="#a300bc" font-weight="700">proteger</text><text x="286" y="128" font-size="9.2" text-anchor="middle" fill="#5c5c66">inativar nucleases</text><line x1="372" y1="97" x2="380" y2="97" stroke="#333333" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-ti)"/><rect x="384" y="60" width="164" height="74" rx="8" fill="#fff" stroke="#f40086" stroke-width="1.4"/><circle cx="466" cy="84" r="13" fill="#f40086" stroke="#f40086" stroke-width="1"/><text x="466" y="88" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">3</text><text x="466" y="112" font-size="11.5" text-anchor="middle" fill="#f40086" font-weight="700">separar</text><text x="466" y="128" font-size="9.2" text-anchor="middle" fill="#5c5c66">remover proteínas e restos</text><line x1="552" y1="97" x2="560" y2="97" stroke="#333333" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-ti)"/><rect x="564" y="60" width="164" height="74" rx="8" fill="#fff" stroke="#0a8f5e" stroke-width="1.4"/><circle cx="646" cy="84" r="13" fill="#0a8f5e" stroke="#0a8f5e" stroke-width="1"/><text x="646" y="88" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">4</text><text x="646" y="112" font-size="11.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">concentrar</text><text x="646" y="128" font-size="9.2" text-anchor="middle" fill="#5c5c66">precipitar e lavar</text><rect x="24" y="150" width="344" height="74" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="196" y="172" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">DNA</text><text x="196" y="192" font-size="9.8" text-anchor="middle" fill="#5c5c66">mais estável; o cuidado e não fragmentar</text><text x="196" y="210" font-size="9.8" text-anchor="middle" fill="#333333">pipetar devagar e evitar vortex forte</text><rect x="380" y="150" width="336" height="74" rx="8" fill="#fff" stroke="#d33a4e" stroke-width="1.4"/><text x="548" y="172" font-size="12" text-anchor="middle" fill="#d33a4e" font-weight="700">RNA</text><text x="548" y="192" font-size="9.8" text-anchor="middle" fill="#5c5c66">RNases estao em todo lugar e são resistentes</text><text x="548" y="210" font-size="9.8" text-anchor="middle" fill="#333333">material livre de RNase, gelo e luvas sempre</text><text x="20" y="248" font-size="10.4" text-anchor="start" fill="#5c5c66">A conferencia e a mesma: a razao 260/280 indica contaminacao por proteína, cerca de 1,8 para DNA e 2,0 para RNA.</text><text x="20" y="266" font-size="10.4" text-anchor="start" fill="#5c5c66">A integridade so aparece no gel ou no equipamento de eletroforese capilar, nunca na absorbancia sozinha.</text></svg>
A mesma sequência serve para DNA e RNA, com cuidados diferentes.

1. **Lise:** romper a parede e as membranas da célula para liberar o DNA.
2. **Limpeza:** retirar as proteínas, o RNA e outras substâncias que atrapalham.
3. **Recuperação:** separar o DNA do líquido, seja fazendo-o se juntar e sedimentar com álcool (precipitação), seja prendendo-o numa coluna de sílica.
4. **Ressuspensão e controle de qualidade:** dissolver o DNA num tampão e conferir quanto se obteve e se está limpo.

## Etapa 1: a lise depende do tipo de célula

Cada organismo tem uma "embalagem" diferente, e a forma de abri-la muda.

| Organismo | O que dificulta | Como fazer |
|---|---|---|
| Bactérias Gram-negativas | membrana externa | detergente (SDS) e a enzima proteinase K |
| Bactérias Gram-positivas | parede grossa de peptidoglicano (tema 33) | antes do detergente, tratar com **lisozima**, enzima que digere essa parede |
| Leveduras | parede de glucanas e quitina | enzimas que digerem a parede (liticase, zimoliase) ou agitação com pérolas de vidro |
| Plantas | parede de celulose; muitos açúcares e compostos fenólicos | triturar o tecido congelado em nitrogênio líquido e usar tampão com **CTAB** |
| Tecidos animais | muitas proteínas | proteinase K com SDS |

O **CTAB** é um detergente muito usado em plantas, inclusive em protocolos da Embrapa, porque ajuda a separar o DNA dos açúcares (polissacarídeos) que deixam o extrato viscoso. Costuma-se acrescentar também **PVP** e **β-mercaptoetanol**, que impedem que os compostos fenólicos escureçam e danifiquem o DNA.

## Etapas 2 e 3: dois caminhos para purificar

### Caminho 1: extração com fenol-clorofórmio e precipitação

1. Depois da lise, adicionar igual volume de fenol:clorofórmio:álcool isoamílico (25:24:1), misturar invertendo o tubo e centrifugar. Formam-se duas fases.
2. Transferir a **fase de cima (aquosa)**, que contém o DNA, para um tubo novo, sem tocar na película branca do meio (a interfase), onde ficam as proteínas.
3. Repetir só com clorofórmio, para retirar restos de fenol.
4. Adicionar sal (acetato de sódio, para uma concentração final de 0,3 mol/L, pH 5,2) e 2 a 2,5 volumes de **etanol gelado** (ou 0,7 volume de isopropanol). Nessas condições o DNA deixa de se dissolver e forma uma "nuvem" de filamentos brancos, que se junta no fundo após a centrifugação.
5. Lavar esse precipitado com **etanol 70%**, que retira o excesso de sal, deixar secar rapidamente e dissolver em tampão TE ou água.

### Caminho 2: colunas de sílica (os kits comerciais)

Na presença de uma alta concentração de certos sais (os **sais caotrópicos**, como os de guanidina), o DNA gruda na sílica. O procedimento é: passar o extrato pela coluna, lavar com uma solução com etanol (o DNA continua preso enquanto as impurezas saem) e, por fim, soltar o DNA com um tampão de baixa concentração de sal ou com água. É mais rápido, dispensa o fenol e é a base da maioria dos kits.

## Etapa 4: conferindo quantidade e pureza

O DNA absorve luz ultravioleta no comprimento de onda de 260 nm. Medindo essa absorbância (\(A_{260}\)) num espectrofotômetro, calcula-se a concentração. Comparando com outras absorbâncias, avalia-se a pureza.

| Medida | Valor esperado | Se estiver fora |
|---|---|---|
| \(A_{260}\) | 1 unidade de absorbância corresponde a cerca de 50 µg/mL de DNA de fita dupla | (serve para calcular a concentração) |
| Razão \(A_{260}/A_{280}\) | cerca de 1,8 | abaixo disso: proteínas ou fenol na amostra |
| Razão \(A_{260}/A_{230}\) | cerca de 2,0 a 2,2 | abaixo disso: sais de guanidina, açúcares ou fenol |
| Gel de agarose | uma banda única, alta e bem definida | rastro contínuo: DNA quebrado; mancha difusa embaixo: RNA |

### Exemplo de cálculo

Uma amostra foi diluída 10 vezes antes da leitura e deu \(A_{260} = 0{,}250\) e \(A_{280} = 0{,}135\).

1. Concentração: \(0{,}250\times50\times10 = 125\ \mu\text{g/mL}\), ou seja, 125 ng/µL. (Multiplica-se por 10 para desfazer a diluição.)
2. Pureza: \(0{,}250/0{,}135 \approx 1{,}85\). Está próxima de 1,8, então a amostra está livre de proteínas.
3. Quantidade total: se o DNA foi dissolvido em 50 µL, há \(125\times50 = 6250\) ng, cerca de 6,3 µg.

Quando a concentração é muito baixa, a leitura por absorbância fica imprecisa. Nesses casos, a quantificação com corantes fluorescentes específicos para DNA de fita dupla é mais confiável.

## Quando algo dá errado

| Problema | Causa provável | O que fazer |
|---|---|---|
| Pouco DNA | lise incompleta; pouco material de partida; coluna sobrecarregada | aumentar o tempo ou a força da lise; usar a quantidade de material indicada |
| \(A_{260}/A_{280}\) baixa | proteína ou fenol | mais proteinase K; uma extração extra com clorofórmio |
| \(A_{260}/A_{230}\) baixa | sal de guanidina ou açúcares | lavar a coluna mais uma vez com etanol; centrifugar a coluna vazia para secar antes de eluir |
| DNA quebrado (rastro no gel) | enzimas que degradam DNA; amostra velha; agitação forte | usar amostras frescas ou congeladas; misturar invertendo o tubo, sem vórtex forte |
| Muito RNA junto | RNase não foi usada | tratar com RNase A |

## Segurança e descarte

O fenol é corrosivo e tóxico em contato com a pele; o clorofórmio evapora com facilidade e é tóxico se inalado. Trabalhe sempre na capela e descarte esses resíduos como **resíduo químico**, em frascos separados e identificados, **nunca na pia**. O material biológico deve ser inativado (por autoclavagem, por exemplo) conforme o nível de biossegurança do organismo.

## Para fixar

- Lisar, limpar, recuperar e conferir: as quatro etapas de toda extração.
- A lise precisa respeitar a "embalagem" de cada célula (lisozima para Gram-positivas, CTAB para plantas).
- 1 unidade de \(A_{260}\) corresponde a 50 µg/mL de DNA; a razão \(A_{260}/A_{280}\) próxima de 1,8 indica DNA limpo.
- Colunas de sílica são rápidas e seguras; fenol-clorofórmio rende bem e custa pouco.
`,
  referencias: [
    "SCHAEFER, R. **Técnicas em biologia molecular**. Concórdia: Embrapa Suínos e Aves, 2006. 24 p. (Documentos, 116).",
    "BUSO, G. S. C. et al. **Manual de utilização de marcadores moleculares para análise de diversidade genética**. Brasília, DF: Embrapa Recursos Genéticos e Biotecnologia, 2009. 30 p. (Documentos, 291).",
    "COSTA, M. R. T. R.; BONFIM, K.; NASCIMENTO, S. V. Biologia molecular aplicada aos recursos genéticos. In: ENCONTRO AMAZÔNICO DE AGRÁRIAS, 4., 2012, Belém. **Anais** [...]. Belém, 2012. ISBN 978-85-7295-078-7.",
    "GREEN, M. R.; SAMBROOK, J. **Molecular cloning**: a laboratory manual. 4. ed. Cold Spring Harbor: Cold Spring Harbor Laboratory Press, 2012.",
    "BOOM, R. et al. Rapid and simple method for purification of nucleic acids. **Journal of Clinical Microbiology**, v. 28, n. 3, p. 495-503, 1990.",
    "DOYLE, J. J.; DOYLE, J. L. A rapid DNA isolation procedure for small quantities of fresh leaf tissue. **Phytochemical Bulletin**, v. 19, p. 11-15, 1987.",
  ],
},
{
  id: "r59", num: 59, tipo: "manual",
  area: "Técnicas e Protocolos de Laboratório",
  disciplina: "Biologia Molecular",
  titulo: "Extração de RNA total",
  descricao: "Por que o RNA estraga tão fácil, como evitar as RNases, o método com fenol e guanidina passo a passo, a remoção do DNA e como avaliar se o RNA está íntegro.",
  tags: ["extração de RNA", "RNA total", "RNase", "TRIzol", "tiocianato de guanidina", "fenol ácido", "DNase", "RIN", "integridade", "A260/A280", "protocolo"],
  conteudo: String.raw`
> **Aviso:** este texto é um material de estudo. No laboratório, siga o POP do seu grupo, as instruções do fabricante do reagente e as normas de biossegurança. Reagentes com fenol e guanidina (como o TRIzol) são tóxicos e corrosivos e **não podem ser misturados com água sanitária (hipoclorito)**, porque a mistura libera gases tóxicos.

## Para que extrair RNA

O RNA mostra **quais genes estão sendo usados** pela célula naquele momento. É por meio dele que se descobre, por exemplo, se um gene de uma enzima foi ativado quando a levedura recebeu um novo açúcar, ou quais genes uma bactéria liga quando é submetida a estresse. Também é o material de partida para a RT-qPCR (tema 57) e para o sequenciamento de transcritos (RNA-seq).

## Por que o RNA exige tanto cuidado

<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" role="img"><title>Extracao de ácidos nucleicos</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Extracao de ácidos nucleicos: a mesma logica em quatro passos</text><rect x="24" y="60" width="164" height="74" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><circle cx="106" cy="84" r="13" fill="#0083cb" stroke="#0083cb" stroke-width="1"/><text x="106" y="88" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">1</text><text x="106" y="112" font-size="11.5" text-anchor="middle" fill="#0083cb" font-weight="700">romper</text><text x="106" y="128" font-size="9.2" text-anchor="middle" fill="#5c5c66">quebrar parede e membrana</text><line x1="192" y1="97" x2="200" y2="97" stroke="#333333" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-ti)"/><rect x="204" y="60" width="164" height="74" rx="8" fill="#fff" stroke="#a300bc" stroke-width="1.4"/><circle cx="286" cy="84" r="13" fill="#a300bc" stroke="#a300bc" stroke-width="1"/><text x="286" y="88" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">2</text><text x="286" y="112" font-size="11.5" text-anchor="middle" fill="#a300bc" font-weight="700">proteger</text><text x="286" y="128" font-size="9.2" text-anchor="middle" fill="#5c5c66">inativar nucleases</text><line x1="372" y1="97" x2="380" y2="97" stroke="#333333" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-ti)"/><rect x="384" y="60" width="164" height="74" rx="8" fill="#fff" stroke="#f40086" stroke-width="1.4"/><circle cx="466" cy="84" r="13" fill="#f40086" stroke="#f40086" stroke-width="1"/><text x="466" y="88" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">3</text><text x="466" y="112" font-size="11.5" text-anchor="middle" fill="#f40086" font-weight="700">separar</text><text x="466" y="128" font-size="9.2" text-anchor="middle" fill="#5c5c66">remover proteínas e restos</text><line x1="552" y1="97" x2="560" y2="97" stroke="#333333" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-ti)"/><rect x="564" y="60" width="164" height="74" rx="8" fill="#fff" stroke="#0a8f5e" stroke-width="1.4"/><circle cx="646" cy="84" r="13" fill="#0a8f5e" stroke="#0a8f5e" stroke-width="1"/><text x="646" y="88" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">4</text><text x="646" y="112" font-size="11.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">concentrar</text><text x="646" y="128" font-size="9.2" text-anchor="middle" fill="#5c5c66">precipitar e lavar</text><rect x="24" y="150" width="344" height="74" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="196" y="172" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">DNA</text><text x="196" y="192" font-size="9.8" text-anchor="middle" fill="#5c5c66">mais estável; o cuidado e não fragmentar</text><text x="196" y="210" font-size="9.8" text-anchor="middle" fill="#333333">pipetar devagar e evitar vortex forte</text><rect x="380" y="150" width="336" height="74" rx="8" fill="#fff" stroke="#d33a4e" stroke-width="1.4"/><text x="548" y="172" font-size="12" text-anchor="middle" fill="#d33a4e" font-weight="700">RNA</text><text x="548" y="192" font-size="9.8" text-anchor="middle" fill="#5c5c66">RNases estao em todo lugar e são resistentes</text><text x="548" y="210" font-size="9.8" text-anchor="middle" fill="#333333">material livre de RNase, gelo e luvas sempre</text><text x="20" y="248" font-size="10.4" text-anchor="start" fill="#5c5c66">A conferencia e a mesma: a razao 260/280 indica contaminacao por proteína, cerca de 1,8 para DNA e 2,0 para RNA.</text><text x="20" y="266" font-size="10.4" text-anchor="start" fill="#5c5c66">A integridade so aparece no gel ou no equipamento de eletroforese capilar, nunca na absorbancia sozinha.</text></svg>
A mesma sequência serve para DNA e RNA, com cuidados diferentes.

- **O RNA é quimicamente mais frágil que o DNA.** O açúcar do RNA (a ribose) tem um grupo OH a mais, que facilita a quebra da molécula.
- **As RNases estão em toda parte.** RNases são enzimas que destroem o RNA. Estão na pele, na saliva, na poeira e em muitas soluções. Pior: são muito resistentes. Como destaca o manual da Embrapa, elas continuam ativas mesmo depois de fervura prolongada ou da autoclavagem.
- **A degradação começa logo após a coleta.** As RNases da própria célula começam a agir assim que a amostra é retirada. Por isso, ela deve ser processada imediatamente, congelada rapidamente em nitrogênio líquido ou colocada numa solução que estabiliza o RNA.

### Regras de ouro do trabalho com RNA

- Usar luvas o tempo todo e trocá-las com frequência; depois de calçá-las, evitar tocar em superfícies que não estejam limpas.
- Usar ponteiras com filtro e tubos **livres de RNase**, e água livre de nucleases (ou tratada com DEPC).
- Limpar a bancada antes de começar e, se possível, ter pipetas e uma área separadas só para RNA.
- Trabalhar no gelo e sem pausas longas.

## Como funciona o método com fenol e guanidina

É o método mais usado, presente em reagentes como o TRIzol. Cada componente tem um papel:

- O **tiocianato de guanidina** desmonta as proteínas, inclusive as RNases, e assim protege o RNA.
- O **fenol ácido** (pH entre 4 e 5) faz o DNA ir para o meio e para a parte de baixo do tubo, enquanto o **RNA fica na fase aquosa**, a fase de cima.
- O **clorofórmio** ajuda a separar bem as fases.
- O **isopropanol** faz o RNA precipitar, isto é, sair da solução e se juntar no fundo do tubo.

## Passo a passo (para 1 mL de reagente)

1. **Homogeneizar** a amostra em 1 mL do reagente e deixar 5 minutos à temperatura ambiente.
2. Adicionar **0,2 mL de clorofórmio**, agitar vigorosamente por 15 segundos e esperar 2 a 3 minutos.
3. **Centrifugar** a 12 000 × g por 15 minutos a 4 °C. O tubo fica com três camadas: uma fase aquosa incolor em cima, uma película no meio e uma fase rosada embaixo.
4. Passar a **fase aquosa de cima** para um tubo novo, com cuidado para não encostar na película do meio, onde está o DNA.
5. Adicionar **0,5 mL de isopropanol**, esperar 10 minutos e centrifugar a 12 000 × g por 10 minutos a 4 °C. O RNA forma um pequeno sedimento, às vezes quase invisível, no fundo do tubo.
6. Descartar o líquido e **lavar** o sedimento com 1 mL de **etanol 75%**; centrifugar a 7 500 × g por 5 minutos.
7. Deixar secar ao ar **por pouco tempo** (o RNA seco demais fica difícil de dissolver) e dissolver em água livre de RNase.
8. Guardar a −80 °C.

Também existem **kits com colunas de sílica**, que seguem o mesmo princípio dos kits de DNA (tema 58). Muitos permitem eliminar o DNA dentro da própria coluna.

## Eliminando o DNA da célula

Sempre sobra um pouco de DNA da célula junto com o RNA. Para a RT-qPCR e o RNA-seq, isso é um problema, porque esse DNA também pode ser amplificado e gerar resultados falsos. A solução é tratar a amostra com a enzima **DNase I** livre de RNase (na coluna ou no tubo) e, depois, confirmar a limpeza com o controle **sem transcriptase reversa** da qPCR (tema 57).

## Conferindo quantidade, pureza e integridade

| Medida | Valor esperado | O que significa |
|---|---|---|
| \(A_{260}\) | 1 unidade de absorbância corresponde a cerca de 40 µg/mL de RNA | serve para calcular a concentração |
| Razão \(A_{260}/A_{280}\) | cerca de 2,0 | abaixo: proteína ou fenol |
| Razão \(A_{260}/A_{230}\) | acima de cerca de 1,8 | abaixo: restos de guanidina ou fenol |
| Integridade no gel ou em eletroforese capilar | bandas nítidas dos RNAs ribossômicos (28S e 18S em leveduras e células animais, com a de 28S cerca de duas vezes mais intensa; 23S e 16S em bactérias) | rastro contínuo indica RNA degradado |
| **RIN** (número de integridade do RNA, de 1 a 10) | quanto mais alto, melhor; para RNA-seq costuma-se exigir 7 ou 8 ou mais | 10 = RNA intacto; 1 = totalmente degradado |

**Exemplo:** uma amostra diluída 20 vezes deu \(A_{260} = 0{,}30\). A concentração é \(0{,}30\times40\times20 = 240\) ng/µL.

## Quando algo dá errado

| Problema | Causa provável | O que fazer |
|---|---|---|
| RNA degradado | RNases; demora entre a coleta e a lise | congelar a amostra imediatamente; usar só material livre de RNase |
| \(A_{260}/A_{230}\) baixa | guanidina ou fenol arrastados junto | não encostar na película do meio; lavar mais uma vez com etanol 75% |
| DNA contaminando | parte da película do meio foi coletada; não houve tratamento com DNase | coletar um pouco menos da fase aquosa; tratar com DNase |
| Pouco RNA | homogeneização incompleta; sedimento perdido ao descartar o líquido | homogeneizar bem; marcar no tubo o lado onde o sedimento vai se formar |

## Para fixar

- O RNA é frágil e as RNases estão em todo lugar: rapidez, frio e materiais livres de RNase.
- Com fenol ácido e guanidina, o RNA fica na fase aquosa e o DNA vai para a parte de baixo.
- Tratar com DNase e confirmar com o controle sem RT.
- Avaliar concentração, pureza e integridade (RIN) antes de usar o RNA.
`,
  referencias: [
    "SCHAEFER, R. **Técnicas em biologia molecular**. Concórdia: Embrapa Suínos e Aves, 2006. 24 p. (Documentos, 116).",
    "ZAHA, A.; FERREIRA, H. B.; PASSAGLIA, L. M. P. (org.). **Biologia molecular básica**. 5. ed. Porto Alegre: Artmed, 2014.",
    "CHOMCZYNSKI, P.; SACCHI, N. Single-step method of RNA isolation by acid guanidinium thiocyanate-phenol-chloroform extraction. **Analytical Biochemistry**, v. 162, n. 1, p. 156-159, 1987.",
    "CHOMCZYNSKI, P.; SACCHI, N. The single-step method of RNA isolation by acid guanidinium thiocyanate-phenol-chloroform extraction: twenty-something years on. **Nature Protocols**, v. 1, n. 2, p. 581-585, 2006.",
    "RIO, D. C. et al. Purification of RNA using TRIzol (TRI reagent). **Cold Spring Harbor Protocols**, v. 2010, n. 6, pdb.prot5439, 2010.",
    "SCHROEDER, A. et al. The RIN: an RNA integrity number for assigning integrity values to RNA measurements. **BMC Molecular Biology**, v. 7, 3, 2006.",
  ],
},
{
  id: "r60", num: 60, tipo: "manual",
  area: "Técnicas e Protocolos de Laboratório",
  disciplina: "Biologia Molecular",
  titulo: "Eletroforese em gel de agarose",
  descricao: "Como separar fragmentos de DNA por tamanho: escolha da concentração do gel, preparo, corrida, visualização, estimativa do tamanho das bandas e problemas comuns.",
  tags: ["eletroforese", "gel de agarose", "marcador de peso molecular", "ladder", "TAE", "TBE", "brometo de etídio", "GelRed", "tampão de amostra", "protocolo"],
  conteudo: String.raw`
> **Aviso:** este texto é um material de estudo. Siga o POP do seu laboratório. Atenção aos riscos: choque elétrico, radiação ultravioleta, agarose quente e corantes de ácidos nucleicos (o brometo de etídio pode causar mutações).

## Para que serve

A eletroforese em gel de agarose é a forma mais comum de **ver o DNA** e de **separar fragmentos de tamanhos diferentes**. É usada para conferir se uma PCR funcionou e se o produto tem o tamanho esperado, para avaliar se um DNA extraído está íntegro, para analisar plasmídeos cortados com enzimas de restrição e para recortar e purificar uma banda específica.

## Como funciona

O DNA tem **carga elétrica negativa**, por causa dos grupos fosfato do seu esqueleto. Quando se aplica uma corrente elétrica, ele é atraído para o **polo positivo**. Entre os laboratórios circula uma frase para não esquecer o sentido: "o DNA corre para o vermelho", que é a cor do cabo positivo.

O gel de agarose funciona como uma rede, cheia de pequenos poros. Os fragmentos **menores** passam por ela com mais facilidade e andam mais rápido; os **maiores** ficam para trás. Ao final, cada tamanho forma uma faixa (uma **banda**) numa posição diferente. Dentro de certa faixa, a distância percorrida varia aproximadamente com o **logaritmo** do tamanho do fragmento.

![Gel de agarose iluminado com luz ultravioleta: os poços onde as amostras foram aplicadas (wells), o marcador de tamanho (DNA size marker), as bandas de DNA e a frente do corante do tampão de amostra (loading dye).](https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Agarose_gel_electrophoresis_of_DNA_with_annotation.png/960px-Agarose_gel_electrophoresis_of_DNA_with_annotation.png)
Fonte: Ultrabem, [CC0](https://creativecommons.org/publicdomain/zero/1.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Agarose_gel_electrophoresis_of_DNA_with_annotation.png).

## Qual concentração de agarose usar

Quanto **mais agarose**, mais fechada fica a rede e melhor ela separa fragmentos **pequenos**. Quanto **menos agarose**, melhor para fragmentos **grandes**.

| Agarose (% em massa por volume) | Separa bem fragmentos de (pares de bases) |
|---|---|
| 0,5 | 1 000 a 30 000 |
| 0,7 | 800 a 12 000 |
| 1,0 | 500 a 10 000 |
| 1,2 | 400 a 7 000 |
| 1,5 | 200 a 3 000 |
| 2,0 | 50 a 2 000 |

Para a maioria dos produtos de PCR e para conferir DNA genômico, géis entre 0,8% e 1,5% resolvem.

## Preparo e corrida (gel de 1%, 50 mL)

1. Pesar **0,5 g de agarose** e misturar com 50 mL de tampão **TAE 1×** (ou TBE 1×).
2. Aquecer no micro-ondas em intervalos curtos, agitando entre eles, até a solução ficar totalmente transparente. Cuidado: a solução pode **ferver de repente** ao ser mexida; use luva térmica.
3. Esperar esfriar até cerca de 55 a 60 °C (dá para segurar o frasco sem queimar a mão) e, se o protocolo usar corante dentro do gel, adicioná-lo agora. Prefira corantes menos tóxicos que o brometo de etídio.
4. Despejar na forma com o pente encaixado e esperar 20 a 30 minutos, até o gel endurecer.
5. Retirar o pente com cuidado, colocar o gel na cuba e **cobri-lo com o mesmo tampão** usado no preparo.
6. Misturar as amostras com **tampão de amostra**, que contém glicerol (para a amostra afundar no poço em vez de se espalhar) e corantes que permitem acompanhar a corrida. Aplicar nos poços, sem esquecer o **marcador de tamanho** (*ladder*), uma mistura de fragmentos de tamanhos conhecidos.
7. **Conferir a posição dos poços:** eles devem ficar do lado do polo negativo (cabo preto). Ligar a fonte a cerca de 5 a 8 volts por centímetro de distância entre os eletrodos (por exemplo, 100 V numa cuba pequena, por 30 a 45 minutos).
8. Visualizar no transiluminador (luz ultravioleta ou luz azul, conforme o corante), sempre usando **protetor facial** quando houver luz UV.

## Descobrindo o tamanho de uma banda

O marcador funciona como uma régua. Faz-se um gráfico com a distância percorrida por cada banda do marcador e o **logaritmo** do seu tamanho, e lê-se nele o tamanho da banda desconhecida.

**Exemplo:** no marcador, a banda de 1000 pares de bases (pb) andou 28 mm e a de 500 pb andou 37 mm. A banda da amostra andou 31 mm.

1. Inclinação da reta: \(\dfrac{\log 500 - \log 1000}{37 - 28} \approx -0{,}0334\) por milímetro.
2. Para 31 mm: \(\log L = 3 - 0{,}0334\times(31 - 28) \approx 2{,}90\).
3. Logo, \(L \approx 10^{2{,}90} \approx 790\) pb.

**Cuidado com plasmídeos não cortados:** o mesmo plasmídeo aparece em mais de uma banda, porque existe em formas diferentes. A forma **superenovelada** (enrolada sobre si mesma) é a mais compacta e corre mais rápido; a forma **linear** fica no meio; a forma **circular aberta** é a mais lenta. Para estimar o tamanho de um plasmídeo, corte-o antes com uma enzima de restrição, para que ele fique linear.

## Quando algo dá errado

| Problema | Causa provável | O que fazer |
|---|---|---|
| Mancha contínua (rastro) | DNA quebrado; DNA demais; voltagem alta | aplicar menos DNA; reduzir a voltagem; conferir a qualidade do DNA |
| Nenhuma banda | polaridade invertida (o DNA saiu do gel e foi para o tampão); falta de corante; pouco DNA | conferir os cabos **antes** de ligar a fonte; conferir o corante e a quantidade de DNA |
| Bandas curvadas, como um sorriso | o gel esquentou | reduzir a voltagem |
| Bandas tortas ou borradas | gel irregular; poço rasgado; excesso de sal na amostra | refazer o gel; aplicar a amostra com cuidado; diluir ou dessalinizar a amostra |
| Bandas muito juntas | concentração de agarose inadequada para aquele tamanho | ajustar a porcentagem conforme a tabela |

## Para fixar

- O DNA é negativo e corre para o polo positivo; fragmentos menores andam mais.
- A porcentagem de agarose define a faixa de tamanhos que se separa bem.
- O tamanho de uma banda é estimado pelo marcador, usando o logaritmo do tamanho.
- Antes de ligar a fonte, confira sempre a posição dos poços.
`,
  referencias: [
    "SCHAEFER, R. **Técnicas em biologia molecular**. Concórdia: Embrapa Suínos e Aves, 2006. 24 p. (Documentos, 116).",
    "BUSO, G. S. C. et al. **Manual de utilização de marcadores moleculares para análise de diversidade genética**. Brasília, DF: Embrapa Recursos Genéticos e Biotecnologia, 2009. 30 p. (Documentos, 291).",
    "LEE, P. Y. et al. Agarose gel electrophoresis for the separation of DNA fragments. **Journal of Visualized Experiments**, n. 62, e3923, 2012.",
    "GREEN, M. R.; SAMBROOK, J. **Molecular cloning**: a laboratory manual. 4. ed. Cold Spring Harbor: Cold Spring Harbor Laboratory Press, 2012.",
  ],
},
{
  id: "r61", num: 61, tipo: "manual",
  area: "Técnicas e Protocolos de Laboratório",
  disciplina: "Biologia Molecular",
  titulo: "Sequenciamento de DNA: Sanger e nova geração",
  descricao: "Como se descobre a ordem das bases de um DNA: o método de Sanger, as plataformas de nova geração, como avaliar a qualidade das leituras e qual técnica escolher em cada situação.",
  tags: ["sequenciamento", "Sanger", "didesoxinucleotídeo", "cromatograma", "Phred", "NGS", "Illumina", "nanoporo", "PacBio", "cobertura", "biblioteca", "protocolo"],
  conteudo: String.raw`
> **Aviso:** este texto é um material de estudo. O preparo das amostras deve seguir as exigências do serviço de sequenciamento que será usado (quantidade, pureza, volume e primers).

## O que é sequenciar

Sequenciar é descobrir a **ordem exata das bases** (A, T, C e G) de um trecho de DNA. Com essa informação, dá para confirmar se um gene foi clonado sem erros, identificar um microrganismo, encontrar mutações numa linhagem melhorada ou montar o genoma inteiro de uma levedura industrial.

## O método de Sanger

É o método clássico e continua sendo o mais usado para trechos curtos. Ele aproveita a forma como a DNA polimerase copia o DNA.

A reação recebe o DNA a ser lido, **um** primer, a polimerase, os nucleotídeos normais e uma pequena quantidade de nucleotídeos modificados, os **didesoxinucleotídeos** (ddNTPs). Cada tipo de ddNTP (ddA, ddT, ddC e ddG) carrega uma molécula fluorescente de cor diferente. O detalhe importante é que o ddNTP **não tem o grupo químico necessário para receber o próximo nucleotídeo**: quando a polimerase o coloca na fita, a cópia **para ali**.

Como isso acontece ao acaso, ao final há fragmentos que terminaram em todas as posições possíveis, cada um com a cor da sua última base. Esses fragmentos são separados por tamanho numa **eletroforese capilar** (um tubo finíssimo com gel), e um laser lê a cor de cada um, do menor para o maior. A sequência de cores é a sequência do DNA.

![As etapas do sequenciamento de Sanger: reação com ddNTPs fluorescentes, cópias interrompidas em cada posição, separação por eletroforese capilar e leitura a laser, que gera o cromatograma.](https://upload.wikimedia.org/wikipedia/commons/b/b2/Sanger-sequencing.svg)
Fonte: Estevezj, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sanger-sequencing.svg).

O resultado vem como um **cromatograma**: um gráfico com um pico colorido para cada base.

![Cromatograma de Sanger: cada pico colorido corresponde a uma base; picos altos, bem separados e sem sobreposição indicam leitura de boa qualidade.](https://upload.wikimedia.org/wikipedia/commons/9/98/Sanger_sequencing_read_display.png)
Fonte: Loris, domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sanger_sequencing_read_display.png).

### O que esperar de uma leitura de Sanger

- Leituras de cerca de 700 a 1000 bases, com acerto muito alto.
- **Amostra:** produto de PCR purificado ou plasmídeo, e **um primer por reação** (para ler as duas fitas, fazem-se duas reações).
- **Usos típicos:** confirmar se uma clonagem está correta, verificar uma mutação pontual, sequenciar o gene 16S para identificar uma bactéria (tema 62).

### A qualidade de cada base: o valor Phred

Cada base lida recebe uma nota de qualidade, o **valor Phred** (\(Q\)), que indica a chance de aquela base estar errada:

\[ Q = -10\,\log_{10} P_{erro} \]

Q20 significa 1 erro a cada 100 bases (99% de acerto); Q30 significa 1 erro a cada 1000 bases (99,9%). O começo e o fim das leituras costumam ter qualidade menor e são descartados (aparados) antes da análise.

## Sequenciamento de nova geração (NGS)

O Sanger lê uma sequência de cada vez. Os métodos de **nova geração** leem **milhões de fragmentos ao mesmo tempo**, o que permite sequenciar genomas inteiros e comunidades microbianas completas.

| Plataforma | Como lê | Tamanho das leituras | Vantagens | Limitações |
|---|---|---|---|---|
| Illumina | a polimerase adiciona um nucleotídeo fluorescente por vez, em milhões de grupos de fragmentos presos numa lâmina | curtas (50 a 300 bases), geralmente lidas pelas duas pontas | quantidade enorme de dados, poucos erros, baixo custo por base | leituras curtas atrapalham a montagem de regiões repetitivas |
| Nanoporos (Oxford Nanopore) | a fita de DNA passa por um poro de proteína e cada sequência de bases altera a corrente elétrica | longas (de milhares até mais de 100 mil bases) | leituras muito longas, resultado em tempo real, aparelhos portáteis | taxa de erro historicamente maior, que vem diminuindo |
| PacBio | observa a polimerase trabalhando sobre uma única molécula | longas (cerca de 10 mil a 25 mil bases) | modo HiFi com leituras longas e muito precisas | custo por base mais alto |

![Sequenciamento por nanoporo: a fita de DNA atravessa um poro de proteína numa membrana, e cada conjunto de bases altera a corrente elétrica de um jeito característico.](https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Nanopore_DNA_sequencing.png/960px-Nanopore_DNA_sequencing.png)
Fonte: Nova IC, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Nanopore_DNA_sequencing.png).

### A biblioteca: preparando o DNA para o NGS

Antes de ir para o aparelho, o DNA passa por um preparo chamado **construção da biblioteca**:

1. O DNA é quebrado em pedaços menores (quando a plataforma usa leituras curtas).
2. As pontas dos pedaços são consertadas e recebem **adaptadores**, pequenas sequências que permitem que os fragmentos se prendam ao aparelho. Os adaptadores também carregam **índices** (códigos de barras), que identificam de qual amostra veio cada fragmento. Assim, várias amostras podem ser sequenciadas juntas e separadas depois por computador.
3. A biblioteca é amplificada (quando necessário) e conferida: mede-se a concentração e o tamanho médio dos fragmentos.

## Cobertura: quanto sequenciar

A **cobertura** indica quantas vezes, em média, cada base do genoma foi lida. Quanto maior, mais confiável o resultado.

\[ C = \frac{N\times L}{G} \]

Aqui, \(N\) é o número de leituras, \(L\) é o tamanho de cada leitura e \(G\) é o tamanho do genoma.

**Exemplo:** para sequenciar o genoma de uma bactéria de 5 milhões de bases com cobertura de 50 vezes, são necessárias \(50\times5\times10^6 = 2{,}5\times10^8\) bases. Com leituras de 150 bases lidas pelas duas pontas (300 bases por par), isso dá cerca de \(2{,}5\times10^8/300 \approx 830\) mil pares de leituras.

## Qual técnica escolher

- Confirmar um clone ou uma mutação: **Sanger**.
- Genoma de uma linhagem industrial: **Illumina**, de preferência combinada com **leituras longas** para montar o genoma por completo.
- Comunidades microbianas (por exemplo, a microbiota de um biorreator) e estudo da expressão de genes (RNA-seq): **NGS**.
- Identificação rápida em campo ou leituras muito longas: **nanoporos**.

## Para fixar

- Sanger: a cópia para quando entra um ddNTP; leituras longas e precisas, uma reação por primer.
- NGS: milhões de leituras ao mesmo tempo, curtas (Illumina) ou longas (nanoporos, PacBio).
- A qualidade de cada base é dada pelo valor Phred; a quantidade de dados, pela cobertura.
`,
  referencias: [
    "ZAHA, A.; FERREIRA, H. B.; PASSAGLIA, L. M. P. (org.). **Biologia molecular básica**. 5. ed. Porto Alegre: Artmed, 2014.",
    "SANGER, F.; NICKLEN, S.; COULSON, A. R. DNA sequencing with chain-terminating inhibitors. **Proceedings of the National Academy of Sciences of the USA**, v. 74, n. 12, p. 5463-5467, 1977.",
    "EWING, B.; GREEN, P. Base-calling of automated sequencer traces using phred. II. Error probabilities. **Genome Research**, v. 8, n. 3, p. 186-194, 1998.",
    "LANDER, E. S.; WATERMAN, M. S. Genomic mapping by fingerprinting random clones: a mathematical analysis. **Genomics**, v. 2, n. 3, p. 231-239, 1988.",
    "SHENDURE, J.; JI, H. Next-generation DNA sequencing. **Nature Biotechnology**, v. 26, n. 10, p. 1135-1145, 2008.",
    "GOODWIN, S.; McPHERSON, J. D.; McCOMBIE, W. R. Coming of age: ten years of next-generation sequencing technologies. **Nature Reviews Genetics**, v. 17, n. 6, p. 333-351, 2016.",
  ],
},
{
  id: "r62", num: 62, tipo: "manual",
  area: "Técnicas e Protocolos de Laboratório",
  disciplina: "Bioinformática",
  titulo: "Bioinformática básica para o laboratório",
  descricao: "Onde encontrar sequências, como ler os formatos FASTA e FASTQ, como usar e interpretar o BLAST, alinhamentos, árvores filogenéticas e um roteiro completo para identificar uma bactéria.",
  tags: ["bioinformática", "NCBI", "GenBank", "FASTA", "FASTQ", "BLAST", "E-value", "alinhamento", "filogenia", "16S rRNA", "Primer-BLAST", "protocolo"],
  conteudo: String.raw`
> **Aviso:** este texto é um guia introdutório. As ferramentas e os bancos de dados mudam de aparência com frequência; consulte a documentação oficial de cada um.

## O que é bioinformática e por que ela importa no laboratório

Bioinformática é o uso do computador para guardar, comparar e interpretar dados biológicos, principalmente sequências de DNA e de proteínas. No dia a dia de um laboratório de biotecnologia, ela aparece o tempo todo: para desenhar primers, para conferir se um gene foi clonado corretamente, para identificar o microrganismo isolado de uma fermentação, para escolher a enzima mais adequada para um processo industrial. Não é preciso ser programador para fazer o básico: a maior parte dessas tarefas é feita em sites gratuitos.

## Onde ficam as sequências

| Banco de dados | O que guarda |
|---|---|
| GenBank (NCBI), ENA e DDBJ | sequências de DNA e RNA; os três trocam dados entre si diariamente |
| NCBI Protein e UniProt | sequências de proteínas e informações sobre a função de cada uma |
| PDB | estruturas tridimensionais de proteínas e ácidos nucleicos |
| KEGG | vias metabólicas e os genes envolvidos em cada uma |
| BRENDA | dados de enzimas, como parâmetros cinéticos e condições ideais de pH e temperatura |
| PubMed | artigos científicos da área biomédica |

## Os formatos de arquivo que você vai encontrar

**FASTA:** é o formato mais simples. A primeira linha começa com o sinal ">" e traz o nome e a descrição da sequência; as linhas seguintes trazem a sequência propriamente dita.

~~~
>isolado_07 fragmento do gene do rRNA 16S
AGAGTTTGATCCTGGCTCAGATTGAACGCTGGCGGCAGGCCTAACACATGCAAGTCGAAC
GGTAACAGGAAGAAGCTTGCTTCTTTGCTGACGAGTGGCGGACGGGTGAGTAATGTCTGG
~~~

**FASTQ:** é o formato que sai dos sequenciadores. Cada leitura ocupa quatro linhas: o nome (começando com "@"), a sequência, um sinal "+" e a **qualidade de cada base**, escrita como um caractere.

~~~
@leitura_001
GATTTGGGGTTCAAAGCAGTATCGATCAAATAGTAAATCC
+
IIIIIIIIIIIIIIIIIIHHHHHGGGGFFFFEEEDDDCC#
~~~

Na forma mais comum de codificação (chamada Phred+33), a qualidade de cada base é o código do caractere na tabela ASCII menos 33. A letra "I" (código 73) vale Q40, isto é, 1 erro a cada 10 000 bases; o símbolo "#" (código 35) vale Q2, uma qualidade péssima (tema 61). Repare como a qualidade cai no fim da leitura, algo muito comum.

Outros formatos aparecem com frequência: **GenBank** (a sequência acompanhada da localização dos genes e de outras anotações), **SAM/BAM** (leituras alinhadas a um genoma de referência) e **VCF** (lista das diferenças encontradas em relação à referência).

## BLAST: procurando sequências parecidas

O BLAST é a ferramenta mais usada da bioinformática. Você fornece uma sequência e ele procura, num banco de dados, as sequências mais parecidas com ela. Há versões para cada tipo de comparação:

| Programa | Sua sequência é de | Procura em um banco de |
|---|---|---|
| blastn | DNA | DNA |
| blastp | proteína | proteínas |
| blastx | DNA (traduzido para proteína de seis formas diferentes) | proteínas |
| tblastn | proteína | DNA (traduzido) |

### Como interpretar o resultado

Olhe sempre três números juntos:

- **E-value:** indica quantos resultados tão bons quanto aquele seriam encontrados **por puro acaso** num banco daquele tamanho. Quanto **menor**, mais confiável. Valores abaixo de \(10^{-5}\) costumam indicar parentesco real; um E-value igual a 0,0 significa que é praticamente impossível a semelhança ser coincidência.
- **Identidade (%):** a porcentagem de posições iguais no trecho alinhado.
- **Cobertura da consulta (%):** quanto da sua sequência entrou no alinhamento. Uma identidade de 100% numa cobertura de 15% pode significar apenas que um pedacinho é igual, e não que as sequências sejam iguais.

## Alinhamentos e árvores filogenéticas

**Alinhar** é colocar sequências lado a lado, posição por posição, inserindo espaços onde for necessário, para comparar o que é igual e o que mudou.

- **Alinhamento global:** compara as sequências de ponta a ponta. Serve para sequências de tamanho parecido e semelhantes ao longo de todo o comprimento.
- **Alinhamento local:** procura o melhor trecho em comum, mesmo que o resto seja diferente. É o que o BLAST faz.
- **Alinhamento múltiplo:** compara várias sequências ao mesmo tempo (com programas como Clustal Omega, MUSCLE ou MAFFT) e mostra as regiões que se mantiveram iguais ao longo da evolução, que costumam ser as mais importantes para a função.

![Trecho do alinhamento de duas proteínas parentes, uma humana e uma de mosca-da-fruta: as marcas entre as linhas indicam posições idênticas e trocas por aminoácidos parecidos.](https://upload.wikimedia.org/wikipedia/commons/6/67/Global_sequence_alignment_comparing_human_and_fruit_fly_C3orf38_proteins.png)
Fonte: Henstad5678, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Global_sequence_alignment_comparing_human_and_fruit_fly_C3orf38_proteins.png).

A partir de um alinhamento múltiplo, constrói-se uma **árvore filogenética**, um diagrama que mostra o grau de parentesco entre as sequências. Programas como o MEGA fazem isso e calculam valores de **bootstrap**, que indicam o quanto se pode confiar em cada ramo da árvore.

![Árvore com raiz (à esquerda), que indica um ancestral comum, e árvore sem raiz (à direita), que mostra apenas as relações de parentesco entre as sequências.](https://upload.wikimedia.org/wikipedia/commons/d/d7/Rooted_vs_unrooted_phylogenetic_tree.jpg)
Fonte: OUStudent2023, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Rooted_vs_unrooted_phylogenetic_tree.jpg).

## Roteiro completo: identificando uma bactéria isolada

Suponha que uma bactéria desconhecida apareceu contaminando um cultivo, e é preciso saber quem ela é.

1. **Extrair o DNA** da colônia (tema 58).
2. **Amplificar o gene do RNA ribossômico 16S** por PCR (tema 56). Esse gene existe em todas as bactérias, tem regiões iguais em todas (onde os primers se ligam) e regiões que variam de uma espécie para outra (que permitem a identificação). Primers muito usados são o 27F (AGAGTTTGATCMTGGCTCAG) e o 1492R (GGTTACCTTGTTACGACTT).
3. **Conferir o produto no gel** (deve ter cerca de 1500 pares de bases; tema 60) e enviar para **sequenciamento de Sanger** com os dois primers (tema 61).
4. **Avaliar os cromatogramas**, retirar as pontas de baixa qualidade e juntar as leituras das duas fitas numa sequência única (a sequência consenso).
5. Fazer um **blastn** contra um banco de sequências de 16S de linhagens de referência (as linhagens-tipo de cada espécie).
6. **Interpretar:** uma identidade de 98,7% ou mais com uma linhagem-tipo é um limite muito usado para indicar que se trata da mesma espécie. Mas atenção: em alguns grupos de bactérias, espécies diferentes têm o 16S quase idêntico, e ele sozinho não basta.
7. **Confirmar** com uma árvore filogenética e, se necessário, com outros genes ou com o genoma completo.

## Outras ferramentas úteis no dia a dia

- **Primer-BLAST:** desenha primers e confere se eles só reconhecem o alvo desejado.
- **ORFfinder:** encontra os trechos de uma sequência que podem codificar proteínas.
- Programas de mapas de restrição e de planejamento de clonagem.
- Para dados de NGS, um caminho típico é: avaliar a qualidade das leituras (FastQC), aparar as partes ruins (Trimmomatic ou fastp), montar o genoma (SPAdes) ou alinhar a uma referência (BWA, Bowtie2), procurar as diferenças e, por fim, anotar os genes (Prokka).

## Para fixar

- FASTA guarda sequências; FASTQ guarda leituras com a qualidade de cada base.
- No BLAST, avalie E-value, identidade e cobertura sempre juntos.
- Para identificar bactérias: PCR do 16S, Sanger, BLAST e árvore filogenética.
`,
  referencias: [
    "LESK, A. M. **Introdução à bioinformática**. 2. ed. Porto Alegre: Artmed, 2008.",
    "ZAHA, A.; FERREIRA, H. B.; PASSAGLIA, L. M. P. (org.). **Biologia molecular básica**. 5. ed. Porto Alegre: Artmed, 2014.",
    "ALTSCHUL, S. F. et al. Basic local alignment search tool. **Journal of Molecular Biology**, v. 215, n. 3, p. 403-410, 1990.",
    "COCK, P. J. A. et al. The Sanger FASTQ file format for sequences with quality scores, and the Solexa/Illumina FASTQ variants. **Nucleic Acids Research**, v. 38, n. 6, p. 1767-1771, 2010.",
    "LANE, D. J. 16S/23S rRNA sequencing. In: STACKEBRANDT, E.; GOODFELLOW, M. (ed.). **Nucleic acid techniques in bacterial systematics**. Chichester: John Wiley & Sons, 1991. p. 115-175.",
    "STACKEBRANDT, E.; EBERS, J. Taxonomic parameters revisited: tarnished gold standards. **Microbiology Today**, v. 33, n. 4, p. 152-155, 2006.",
    "KUMAR, S. et al. MEGA X: molecular evolutionary genetics analysis across computing platforms. **Molecular Biology and Evolution**, v. 35, n. 6, p. 1547-1549, 2018.",
  ],
}
);
