/* BIONEXO — Resumos complementares · Biologia Molecular e Genética: ligação, sexo, cromossomos e populações (r97–r101) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r97", num: 97,
  area: "Biologia Molecular e Genética",
  disciplina: "Genética",
  titulo: "Ligação gênica, recombinação e mapas genéticos",
  descricao: "Genes no mesmo cromossomo, as fases de ligação, a frequência de recombinação e o centimorgan, o cruzamento-teste de dois e três pontos, a interferência e a função de mapeamento.",
  tags: ["Genética", "ligação gênica", "linkage", "recombinação", "crossing-over", "fase de aproximação", "fase de repulsão", "cis", "trans", "frequência de recombinação", "centimorgan", "mapa genético", "três pontos", "interferência", "coeficiente de coincidência", "Haldane"],
  conteudo: String.raw`
## Genes no mesmo cromossomo

A segunda lei de Mendel vale para genes em cromossomos diferentes. Mas cada cromossomo carrega centenas ou milhares de genes, e genes **próximos** no mesmo cromossomo tendem a ser herdados juntos: estão **ligados** (em inglês, *linkage*). Eles só se separam quando ocorre um crossing-over entre eles na meiose (tema 94).

Thomas Morgan e seus alunos descobriram o fenômeno em *Drosophila*, e Alfred Sturtevant, ainda estudante, teve a ideia que deu origem aos **mapas genéticos**: quanto mais distantes dois genes, maior a chance de um crossing-over entre eles, e mais frequente a recombinação.

## Fases de ligação

Num di-híbrido AaBb com os genes ligados, importa **como** os alelos estão distribuídos nos homólogos:

- **Aproximação (cis, ou acoplamento):** \(\dfrac{AB}{ab}\), os dois dominantes no mesmo cromossomo.
- **Repulsão (trans):** \(\dfrac{Ab}{aB}\), um dominante em cada cromossomo.

Os gametas com as combinações dos cromossomos dos pais são os **parentais** (mais frequentes); os com combinações novas são os **recombinantes** (menos frequentes).

## Frequência de recombinação e o centimorgan

<svg viewBox="0 0 740 330" xmlns="http://www.w3.org/2000/svg" role="img"><title>Mapa genético</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Ligação genica: genes proximos quase não se separam</text><rect x="60" y="70" width="600" height="26" rx="13" fill="#eef1f6" stroke="#d4d6df" stroke-width="1.4"/><circle cx="120" cy="83" r="11" fill="#0083cb" stroke="#fff" stroke-width="2"/><text x="120" y="87" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">A</text><circle cx="290" cy="83" r="11" fill="#a300bc" stroke="#fff" stroke-width="2"/><text x="290" y="87" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">B</text><circle cx="360" cy="83" r="11" fill="#f40086" stroke="#fff" stroke-width="2"/><text x="360" y="87" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">C</text><line x1="120" y1="116" x2="290" y2="116" stroke="#5c5c66" stroke-width="1.2" stroke-linecap="round"/><text x="205" y="134" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">17 cM</text><line x1="290" y1="116" x2="360" y2="116" stroke="#5c5c66" stroke-width="1.2" stroke-linecap="round"/><text x="325" y="134" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">7 cM</text><text x="500" y="83" font-size="10.5" text-anchor="start" fill="#5c5c66">quanto mais distantes,</text><text x="500" y="99" font-size="10.5" text-anchor="start" fill="#5c5c66">maior a chance de crossing-over</text><text x="60" y="172" font-size="12" text-anchor="start" fill="#333333" font-weight="700">num cruzamento-teste de tres pontos</text><rect x="60" y="190" width="180" height="30" rx="7" fill="#fff" stroke="#0a8f5e" stroke-width="1.4"/><text x="150" y="210" font-size="10.8" text-anchor="middle" fill="#0a8f5e" font-weight="700">parentais</text><rect x="250" y="194" width="300" height="22" rx="5" fill="#f2f3f7" stroke="none" stroke-width="0"/><rect x="250" y="194" width="292.5" height="22" rx="5" fill="#0a8f5e" stroke="none" stroke-width="0"/><text x="558" y="210" font-size="11" text-anchor="start" fill="#0a8f5e" font-weight="700">390</text><text x="596" y="210" font-size="8.8" text-anchor="start" fill="#5c5c66">as duas classes mais numerosas</text><rect x="60" y="228" width="180" height="30" rx="7" fill="#fff" stroke="#c67600" stroke-width="1.4"/><text x="150" y="248" font-size="10.8" text-anchor="middle" fill="#c67600" font-weight="700">recombinantes simples</text><rect x="250" y="232" width="300" height="22" rx="5" fill="#f2f3f7" stroke="none" stroke-width="0"/><rect x="250" y="232" width="120" height="22" rx="5" fill="#c67600" stroke="none" stroke-width="0"/><text x="558" y="248" font-size="11" text-anchor="start" fill="#c67600" font-weight="700">160</text><text x="596" y="248" font-size="8.8" text-anchor="start" fill="#5c5c66">um crossing-over no intervalo</text><rect x="60" y="266" width="180" height="30" rx="7" fill="#fff" stroke="#d33a4e" stroke-width="1.4"/><text x="150" y="286" font-size="10.8" text-anchor="middle" fill="#d33a4e" font-weight="700">duplos recombinantes</text><rect x="250" y="270" width="300" height="22" rx="5" fill="#f2f3f7" stroke="none" stroke-width="0"/><rect x="250" y="270" width="7.5" height="22" rx="5" fill="#d33a4e" stroke="none" stroke-width="0"/><text x="558" y="286" font-size="11" text-anchor="start" fill="#d33a4e" font-weight="700">10</text><text x="596" y="286" font-size="8.8" text-anchor="start" fill="#5c5c66">as duas classes mais raras: revelam o gene do meio</text><text x="20" y="322" font-size="10.6" text-anchor="start" fill="#5c5c66">A frequência de recombinação vai ate 50%: acima disso, os genes parecem independentes mesmo no mesmo cromossomo.</text></svg>
A frequência de recombinação mede a distância entre genes no mesmo cromossomo.

A forma mais clara de medir a ligação é o **cruzamento-teste** com um duplo recessivo (\(ab/ab\)): o fenótipo de cada descendente revela diretamente o gameta recebido do di-híbrido.

\[ FR = \frac{\text{número de recombinantes}}{\text{total}}\times100\% \]

Define-se **1 centimorgan (cM)** como a distância que produz 1% de recombinantes. A frequência de recombinação varia de 0% (genes totalmente ligados) até um máximo de **50%**, que é o mesmo resultado de genes independentes: genes muito distantes no mesmo cromossomo parecem segregar independentemente, porque quase sempre ocorre algum crossing-over entre eles.

## Exemplo resolvido 1: dois pontos

Uma planta \(AB/ab\) é cruzada com \(ab/ab\). Os descendentes são: 420 AB, 412 ab, 88 Ab e 80 aB (total de 1000).

As classes mais numerosas (AB e ab) são as parentais; as menos numerosas, as recombinantes:

\[ FR = \frac{88 + 80}{1000} = 16{,}8\% \;\Rightarrow\; \text{distância} \approx 16{,}8\ \text{cM} \]

Se os genes fossem independentes, as quatro classes teriam cerca de 250 cada.

## O cruzamento-teste de três pontos

Com três genes ligados, um único cruzamento-teste dá a **ordem** dos genes e as duas distâncias. O raciocínio:

1. As duas classes **mais numerosas** são as parentais.
2. As duas classes **menos numerosas** são as de **duplo crossing-over**.
3. O gene que "troca de lugar" entre as parentais e as de duplo crossing é o **do meio**.
4. Cada distância inclui os simples e os duplos recombinantes daquele intervalo.

**Exemplo resolvido 2.** Cruzamento-teste de um tri-híbrido, com 1000 descendentes:

| Classe | Número |
|---|---|
| A B C | 390 |
| a b c | 380 |
| A b c | 85 |
| a B C | 75 |
| A B c | 30 |
| a b C | 30 |
| A b C | 5 |
| a B c | 5 |

Parentais: ABC e abc. Duplos: AbC e aBc. Comparando ABC com AbC, só B trocou: **B está no meio**, e a ordem é A–B–C.

- Intervalo A–B: recombinantes simples \(85 + 75 = 160\), mais os duplos \(10\): \(170/1000 = 17\) cM.
- Intervalo B–C: \(30 + 30 + 10 = 70\): 7 cM.

## Interferência

Se os crossing-overs fossem independentes, a frequência esperada de duplos seria o produto das frequências: \(0{,}17\times0{,}07 \approx 0{,}0119\), ou cerca de 12 em 1000. Foram observados 10. O **coeficiente de coincidência** é \(c = 10/12 \approx 0{,}84\), e a **interferência** é \(I = 1 - c \approx 0{,}16\): um crossing-over diminui um pouco a chance de outro ocorrer muito perto dele.

## Funções de mapeamento

Para distâncias grandes, a frequência de recombinação subestima a distância real, porque dois crossing-overs entre os mesmos genes se "cancelam" e não aparecem como recombinantes. A **função de Haldane** corrige isso, supondo crossing-overs independentes:

\[ d = -\tfrac12\ln(1 - 2r) \]

com \(r\) como fração e \(d\) em morgans. Para \(r = 0{,}30\), \(d \approx 0{,}46\) M = 46 cM. Para \(r\) pequeno, \(d \approx r\).

## Mapas genéticos e físicos

O **mapa genético** ordena genes e marcadores pela frequência de recombinação. O **mapa físico** mede a distância real, em pares de bases, a partir da sequência do genoma. A relação entre os dois varia ao longo dos cromossomos: há regiões de alta recombinação (*hotspots*) e regiões quase sem recombinação, como perto dos centrômeros. Em humanos, a média é de cerca de 1 cM por milhão de pares de bases.

## Na prática

- **Seleção assistida por marcadores:** se um marcador de DNA está a 1 cM de um gene de resistência a doença, selecionar plantas pelo marcador acerta o gene em cerca de 99% dos casos, sem precisar inocular o patógeno (tema 102).
- **Arraste de ligação (*linkage drag*):** ao transferir um gene de uma variedade silvestre para uma comercial, trechos ligados de genes indesejáveis vêm junto. São necessárias várias gerações de retrocruzamento, ou a edição gênica, para quebrar essa ligação.
- **Mapeamento de QTLs:** a ligação entre marcadores e características quantitativas localiza as regiões do genoma que influenciam a produtividade e a tolerância a estresses.

> **Atenção, erros comuns:**
> Tomar como recombinantes as classes mais numerosas.
> Esquecer de somar os duplos crossing-overs em **cada** intervalo no mapa de três pontos.
> Esperar frequências de recombinação acima de 50%.

## Para fixar

- Genes ligados segregam juntos; só o crossing-over os separa.
- 1% de recombinantes = 1 cM; o máximo observável é 50%.
- Três pontos: as menores classes são os duplos e revelam o gene do meio.
`,
  referencias: [
    "GRIFFITHS, A. J. F. et al. **Introdução à genética**. 11. ed. Rio de Janeiro: Guanabara Koogan, 2016. Cap. 4: Mapeamento de cromossomos eucarióticos por recombinação.",
    "SNUSTAD, D. P.; SIMMONS, M. J. **Fundamentos de genética**. 7. ed. Rio de Janeiro: Guanabara Koogan, 2017.",
    "STURTEVANT, A. H. The linear arrangement of six sex-linked factors in *Drosophila*, as shown by their mode of association. **Journal of Experimental Zoology**, v. 14, n. 1, p. 43-59, 1913.",
  ],
},
{
  id: "r98", num: 98,
  area: "Biologia Molecular e Genética",
  disciplina: "Genética",
  titulo: "Determinação do sexo, herança ligada ao sexo e corpúsculo de Barr",
  descricao: "Sistemas de determinação do sexo em animais e plantas, herança ligada ao X, restrita ao Y, limitada e influenciada pelo sexo, compensação de dose, a inativação do X e o corpúsculo de Barr.",
  tags: ["Genética", "determinação do sexo", "sistema XY", "ZW", "X0", "haplodiploidia", "gene SRY", "herança ligada ao X", "hemizigoto", "daltonismo", "hemofilia", "herança restrita ao Y", "herança influenciada pelo sexo", "compensação de dose", "inativação do X", "corpúsculo de Barr", "hipótese de Lyon", "Xist", "plantas dioicas"],
  conteudo: String.raw`
## Como o sexo é determinado

Em muitos organismos, o sexo é determinado por **cromossomos sexuais**, que diferem entre machos e fêmeas. Os demais cromossomos são os **autossomos**.

| Sistema | Fêmea | Macho | Exemplos |
|---|---|---|---|
| XY | XX | XY | mamíferos, *Drosophila*, plantas como mamão-macho e kiwi |
| ZW | ZW | ZZ | aves, borboletas, alguns peixes e répteis |
| X0 | XX | X (só um) | gafanhotos, baratas |
| Haplodiploidia | diploide (fecundada) | haploide (não fecundada) | abelhas, vespas, formigas |

Nos mamíferos, o que define o sexo masculino é a presença do cromossomo Y, mais especificamente do gene **SRY**, que ativa o desenvolvimento dos testículos. Em *Drosophila*, o que conta é a razão entre o número de X e de conjuntos de autossomos. Em muitas tartarugas e crocodilos, o sexo é definido pela **temperatura** de incubação dos ovos.

**Nas plantas:** a maioria das angiospermas é **hermafrodita** (flores com estames e pistilo) ou **monoica** (flores masculinas e femininas na mesma planta, como o milho). Cerca de 6% são **dioicas**, com plantas masculinas e femininas separadas, como o mamão, o espinafre, a tamareira, o lúpulo e a *Cannabis*. Em culturas dioicas, saber o sexo cedo tem valor econômico (só as plantas femininas do lúpulo produzem as inflorescências usadas na cerveja, por exemplo), e marcadores moleculares ligados ao sexo permitem identificá-lo nas mudas.

## Herança ligada ao X

<svg viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg" role="img"><title>Herança ligada ao X</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Herança ligada ao X e inativacao do cromossomo</text><text x="40" y="60" font-size="11.5" text-anchor="start" fill="#333333" font-weight="700">mae portadora x pai normal</text><text x="115" y="88" font-size="9.8" text-anchor="middle" fill="#5c5c66" font-weight="600"></text><text x="265" y="88" font-size="9.8" text-anchor="middle" fill="#5c5c66" font-weight="600">X com alelo normal</text><text x="415" y="88" font-size="9.8" text-anchor="middle" fill="#5c5c66" font-weight="600">Y</text><text x="115" y="122" font-size="9.8" text-anchor="middle" fill="#5c5c66" font-weight="600">X normal</text><rect x="190" y="96" width="150" height="38" rx="6" fill="#fff" stroke="#0a8f5e" stroke-width="1.3"/><text x="265" y="120" font-size="10" text-anchor="middle" fill="#0a8f5e" font-weight="700">menina normal</text><rect x="340" y="96" width="150" height="38" rx="6" fill="#fff" stroke="#0a8f5e" stroke-width="1.3"/><text x="415" y="120" font-size="10" text-anchor="middle" fill="#0a8f5e" font-weight="700">menino normal</text><text x="115" y="164" font-size="9.8" text-anchor="middle" fill="#5c5c66" font-weight="600">X com alelo</text><rect x="190" y="138" width="150" height="38" rx="6" fill="#fff" stroke="#c67600" stroke-width="1.3"/><text x="265" y="162" font-size="10" text-anchor="middle" fill="#c67600" font-weight="700">menina portadora</text><rect x="340" y="138" width="150" height="38" rx="6" fill="#fff" stroke="#d33a4e" stroke-width="1.3"/><text x="415" y="162" font-size="10" text-anchor="middle" fill="#d33a4e" font-weight="700">menino afetado</text><text x="40" y="192" font-size="10.5" text-anchor="start" fill="#5c5c66">Metade dos meninos e afetada; nenhuma menina e, mas metade e portadora.</text><rect x="510" y="56" width="210" height="164" rx="8" fill="#fff" stroke="#a300bc" stroke-width="1.4"/><text x="615" y="78" font-size="12" text-anchor="middle" fill="#a300bc" font-weight="700">inativacao do X</text><rect x="528" y="94" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="551" y="94" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="574" y="94" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="597" y="94" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="620" y="94" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="643" y="94" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="666" y="94" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="689" y="94" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="528" y="115" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="551" y="115" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="574" y="115" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="597" y="115" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="620" y="115" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="643" y="115" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="666" y="115" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="689" y="115" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="528" y="136" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="551" y="136" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="574" y="136" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="597" y="136" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="620" y="136" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="643" y="136" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="666" y="136" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="689" y="136" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="528" y="157" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="551" y="157" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="574" y="157" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="597" y="157" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="620" y="157" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="643" y="157" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="666" y="157" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="689" y="157" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="528" y="178" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="551" y="178" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="574" y="178" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="597" y="178" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="620" y="178" width="19" height="18" rx="3" fill="#333333" stroke="#fff" stroke-width="1"/><rect x="643" y="178" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="666" y="178" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><rect x="689" y="178" width="19" height="18" rx="3" fill="#c67600" stroke="#fff" stroke-width="1"/><text x="615" y="208" font-size="9.6" text-anchor="middle" fill="#5c5c66">cada célula desliga um X ao acaso</text><rect x="20" y="232" width="700" height="76" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="254" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">por isso as femeas de mamiferos são mosaicos</text><text x="370" y="274" font-size="10.5" text-anchor="middle" fill="#5c5c66">O X inativo se condensa e forma o corpusculo de Barr. O numero de corpusculos e o numero de X menos um.</text><text x="370" y="294" font-size="10.5" text-anchor="middle" fill="#5c5c66">E o que explica as gatas tricolores e a manifestacao variável em mulheres portadoras.</text></svg>
O padrão típico da herança recessiva ligada ao X e o mosaico criado pela inativação.

Os genes do cromossomo X que não têm correspondente no Y seguem um padrão especial, porque os machos XY têm **uma só cópia** deles: são **hemizigotos**. Assim, um único alelo recessivo se manifesta no macho.

Características da herança **recessiva ligada ao X**:

- afeta muito mais homens que mulheres;
- um homem afetado transmite o alelo a **todas as filhas** (que serão portadoras, se a mãe for normal) e a **nenhum filho**;
- filhos homens recebem o X da mãe: uma mãe portadora tem 50% de chance de ter um filho afetado.

Exemplos: o daltonismo para vermelho e verde, a hemofilia A e a distrofia muscular de Duchenne.

**Exemplo resolvido.** Uma mulher de visão normal, cujo pai era daltônico, tem filhos com um homem de visão normal. Ela é \(X^DX^d\) (recebeu \(X^d\) do pai); ele é \(X^DY\).

| | \(X^D\) | \(Y\) |
|---|---|---|
| \(X^D\) | \(X^DX^D\) normal | \(X^DY\) normal |
| \(X^d\) | \(X^DX^d\) portadora | \(X^dY\) daltônico |

Nenhuma filha será daltônica; metade das filhas será portadora; **metade dos filhos** será daltônica.

Morgan descobriu esse padrão em *Drosophila*: o cruzamento entre fêmeas de olhos vermelhos e machos de olhos brancos dava resultados diferentes do cruzamento recíproco (fêmeas brancas com machos vermelhos). **Cruzamentos recíprocos com resultados diferentes** são a assinatura da herança ligada ao sexo.

## Outros padrões relacionados ao sexo

- **Restrita ao Y (holândrica):** genes só no Y passam de pai para todos os filhos homens. O Y tem poucos genes, a maioria ligada à fertilidade masculina.
- **Limitada ao sexo:** o gene é autossômico, mas só se expressa num sexo, como a produção de leite em bovinos ou a plumagem colorida dos machos em certas aves.
- **Influenciada pelo sexo:** o gene é autossômico, mas a dominância muda com o sexo, por causa dos hormônios. A calvície de padrão masculino se comporta como dominante nos homens e recessiva nas mulheres.

## Compensação de dose

Fêmeas XX têm duas cópias dos genes do X, e machos XY, uma. Para que a quantidade de produto desses genes não seja diferente entre os sexos, os organismos desenvolveram mecanismos de **compensação de dose**:

- em **mamíferos**, um dos X das fêmeas é **inativado**;
- em ***Drosophila***, o único X dos machos é transcrito com o dobro da intensidade;
- em ***C. elegans***, os dois X dos hermafroditas têm a transcrição reduzida à metade.

## A inativação do X e o corpúsculo de Barr

Em 1949, Murray Barr observou, em núcleos de células de fêmeas de gato, um pequeno corpo denso, ausente nos machos. Era um cromossomo X altamente condensado e inativo, hoje chamado de **corpúsculo de Barr** (ou cromatina sexual).

Em 1961, Mary Lyon propôs (a **hipótese de Lyon**) que:

1. em cada célula de uma fêmea de mamífero, **apenas um X fica ativo**;
2. a escolha de qual X é inativado (o de origem materna ou paterna) é **aleatória**, no início do desenvolvimento embrionário;
3. a escolha é **mantida** em todas as células descendentes daquela célula.

O número de corpúsculos de Barr é igual ao **número de X menos um**: zero em homens XY e em mulheres X0 (síndrome de Turner); um em mulheres XX e em homens XXY (síndrome de Klinefelter); dois em mulheres XXX.

**Mecanismo molecular:** o X que será inativado transcreve um RNA longo não codificante, o **Xist**, que recobre o próprio cromossomo e recruta proteínas que modificam as histonas e metilam o DNA, compactando a cromatina e silenciando os genes. É um exemplo clássico de **regulação epigenética**: os genes não mudam, mas são desligados de forma estável e herdável entre as células.

**Consequência: as fêmeas são mosaicos.** Uma fêmea heterozigota para um gene ligado ao X tem algumas regiões do corpo com um alelo ativo e outras com o outro.

- **Gatas tricolores (cálicas):** o gene da cor laranja e preta está no X. Fêmeas heterozigotas têm manchas laranjas (onde o X com o alelo laranja está ativo) e pretas (onde está ativo o outro). Gatos machos tricolores são raros e geralmente XXY.
- **Mulheres portadoras** de algumas doenças ligadas ao X podem ter manifestações leves e variáveis, dependendo da proporção de células em que o X normal ficou ativo.

## Na prática

- **Sexagem molecular:** a amplificação por PCR de sequências do Y (como o SRY em mamíferos) ou de genes do par ZW (em aves) identifica o sexo de embriões, filhotes de aves sem dimorfismo visível e mudas de plantas dioicas.
- **Melhoramento animal:** sêmen sexado, separado por citometria de fluxo com base na pequena diferença de DNA entre espermatozoides X e Y, é usado para obter mais fêmeas no gado leiteiro.

> **Atenção, erros comuns:**
> Dizer que um pai transmite um alelo ligado ao X ao filho homem: ele transmite o Y.
> Confundir herança influenciada pelo sexo (gene autossômico) com ligada ao sexo (gene no X).
> Contar o número de corpúsculos de Barr como o número de X: é o número de X **menos um**.

## Para fixar

- Machos XY são hemizigotos para o X: recessivos ligados ao X aparecem mais em homens.
- Cruzamentos recíprocos diferentes indicam herança ligada ao sexo.
- Nas fêmeas de mamíferos, um X é inativado ao acaso (Xist), formando o corpúsculo de Barr; as fêmeas são mosaicos.
`,
  referencias: [
    "GRIFFITHS, A. J. F. et al. **Introdução à genética**. 11. ed. Rio de Janeiro: Guanabara Koogan, 2016.",
    "LYON, M. F. Gene action in the X-chromosome of the mouse (*Mus musculus* L.). **Nature**, v. 190, p. 372-373, 1961.",
    "BARR, M. L.; BERTRAM, E. G. A morphological distinction between neurones of the male and female, and the behaviour of the nucleolar satellite during accelerated nucleoprotein synthesis. **Nature**, v. 163, p. 676-677, 1949.",
    "SNUSTAD, D. P.; SIMMONS, M. J. **Fundamentos de genética**. 7. ed. Rio de Janeiro: Guanabara Koogan, 2017.",
  ],
},
{
  id: "r99", num: 99,
  area: "Biologia Molecular e Genética",
  disciplina: "Genética",
  titulo: "Alterações cromossômicas numéricas: euploidias e aneuploidias",
  descricao: "Variações no número de cromossomos: autopoliploidia e alopoliploidia, a origem do trigo, do algodão e da canola, poliploidia induzida por colchicina, haploides duplicados, triploides sem sementes e as aneuploidias em humanos e plantas.",
  tags: ["Genética", "Melhoramento Vegetal", "euploidia", "poliploidia", "autopoliploidia", "alopoliploidia", "anfidiploide", "triploide", "tetraploide", "colchicina", "haploide", "duplo-haploide", "aneuploidia", "trissomia", "monossomia", "nulissomia", "síndrome de Down", "trigo", "banana", "triângulo de U"],
  conteudo: String.raw`
## Dois tipos de variação numérica

As alterações no número de cromossomos são de dois tipos:

- **Euploidias:** alteram o número de **conjuntos completos** (genomas). Um diploide (\(2n\)) pode virar triploide (\(3n\)), tetraploide (\(4n\)) e assim por diante.
- **Aneuploidias:** alteram o número de **cromossomos isolados**: um a mais, um a menos.

Para descrever uma espécie poliploide, usa-se também \(x\), o **número básico** de cromossomos de um genoma ancestral. No trigo comum, \(x = 7\) e \(2n = 6x = 42\).

## Por que a poliploidia é tão comum nas plantas

Estima-se que todas as angiospermas tenham passado por pelo menos um evento de duplicação do genoma ao longo da evolução, e muitas culturas importantes são poliploides recentes. Em animais, a poliploidia é rara, em parte porque perturba a determinação do sexo por cromossomos (tema 98). As plantas toleram melhor, e a poliploidia costuma trazer:

- **efeito gigas:** células maiores, e muitas vezes órgãos maiores (flores, frutos, folhas);
- novas combinações de genes e maior vigor, especialmente nos alopoliploides;
- redundância gênica, que permite que cópias duplicadas adquiram novas funções.

## Autopoliploidia

O **autopoliploide** tem vários conjuntos cromossômicos da **mesma espécie**. Surge, por exemplo, quando um gameta não reduzido (\(2n\)) se une a outro, ou quando a duplicação ocorre numa célula somática.

O problema dos autopoliploides é a **meiose**: com quatro homólogos de cada tipo, formam-se multivalentes, e a segregação pode ser irregular, reduzindo a fertilidade. Nos **triploides** (\(3n\)), o problema é extremo: três homólogos não podem se dividir igualmente em dois polos, e quase todos os gametas ficam desbalanceados. Os triploides são, por isso, praticamente estéreis. Isso, que seria um defeito, é aproveitado:

- a **banana** de mesa cultivada é, em geral, triploide (sem sementes), e é propagada vegetativamente;
- a **melancia sem sementes** é um triploide obtido cruzando uma planta tetraploide com uma diploide;
- **ostras triploides** não gastam energia em reprodução e crescem mais.

Outros autopoliploides importantes: a batata cultivada (\(4x\)), a alfafa (\(4x\)) e muitas plantas ornamentais.

## Alopoliploidia

<svg viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg" role="img"><title>Poliploidia no trigo</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Como o trigo de pao se tornou hexaploide</text><rect x="40" y="56" width="148" height="122" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="114" y="78" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">trigo silvestre</text><rect x="99.5" y="92" width="9" height="48" rx="4.5" fill="#0083cb" stroke="none"/><circle cx="104" cy="112.16" r="3.06" fill="#fff" stroke="none" stroke-width="0"/><rect x="119.5" y="92" width="9" height="48" rx="4.5" fill="#0083cb" stroke="none"/><circle cx="124" cy="112.16" r="3.06" fill="#fff" stroke="none" stroke-width="0"/><text x="114" y="160" font-size="12" text-anchor="middle" fill="#333333" font-weight="700">AA</text><line x1="192" y1="116" x2="246" y2="116" stroke="#333333" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-ti)"/><rect x="212" y="56" width="148" height="122" rx="8" fill="#fff" stroke="#8a8a93" stroke-width="1.4"/><text x="286" y="78" font-size="11" text-anchor="middle" fill="#8a8a93" font-weight="700">hibrido estéril</text><rect x="271.5" y="92" width="9" height="48" rx="4.5" fill="#0083cb" stroke="none"/><circle cx="276" cy="112.16" r="3.06" fill="#fff" stroke="none" stroke-width="0"/><rect x="291.5" y="92" width="9" height="48" rx="4.5" fill="#0083cb" stroke="none"/><circle cx="296" cy="112.16" r="3.06" fill="#fff" stroke="none" stroke-width="0"/><text x="286" y="160" font-size="12" text-anchor="middle" fill="#333333" font-weight="700">AB</text><line x1="364" y1="116" x2="418" y2="116" stroke="#333333" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-ti)"/><rect x="384" y="56" width="148" height="122" rx="8" fill="#fff" stroke="#a300bc" stroke-width="1.4"/><text x="458" y="78" font-size="11" text-anchor="middle" fill="#a300bc" font-weight="700">trigo tetraploide</text><rect x="423.5" y="92" width="9" height="48" rx="4.5" fill="#0083cb" stroke="none"/><circle cx="428" cy="112.16" r="3.06" fill="#fff" stroke="none" stroke-width="0"/><rect x="443.5" y="92" width="9" height="48" rx="4.5" fill="#0083cb" stroke="none"/><circle cx="448" cy="112.16" r="3.06" fill="#fff" stroke="none" stroke-width="0"/><rect x="463.5" y="92" width="9" height="48" rx="4.5" fill="#f40086" stroke="none"/><circle cx="468" cy="112.16" r="3.06" fill="#fff" stroke="none" stroke-width="0"/><rect x="483.5" y="92" width="9" height="48" rx="4.5" fill="#f40086" stroke="none"/><circle cx="488" cy="112.16" r="3.06" fill="#fff" stroke="none" stroke-width="0"/><text x="458" y="160" font-size="12" text-anchor="middle" fill="#333333" font-weight="700">AABB</text><line x1="536" y1="116" x2="590" y2="116" stroke="#333333" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-ti)"/><rect x="556" y="56" width="148" height="122" rx="8" fill="#fff" stroke="#0a8f5e" stroke-width="1.4"/><text x="630" y="78" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">trigo de pao</text><rect x="575.5" y="92" width="9" height="48" rx="4.5" fill="#0083cb" stroke="none"/><circle cx="580" cy="112.16" r="3.06" fill="#fff" stroke="none" stroke-width="0"/><rect x="595.5" y="92" width="9" height="48" rx="4.5" fill="#0083cb" stroke="none"/><circle cx="600" cy="112.16" r="3.06" fill="#fff" stroke="none" stroke-width="0"/><rect x="615.5" y="92" width="9" height="48" rx="4.5" fill="#f40086" stroke="none"/><circle cx="620" cy="112.16" r="3.06" fill="#fff" stroke="none" stroke-width="0"/><rect x="635.5" y="92" width="9" height="48" rx="4.5" fill="#f40086" stroke="none"/><circle cx="640" cy="112.16" r="3.06" fill="#fff" stroke="none" stroke-width="0"/><rect x="655.5" y="92" width="9" height="48" rx="4.5" fill="#c67600" stroke="none"/><circle cx="660" cy="112.16" r="3.06" fill="#fff" stroke="none" stroke-width="0"/><rect x="675.5" y="92" width="9" height="48" rx="4.5" fill="#c67600" stroke="none"/><circle cx="680" cy="112.16" r="3.06" fill="#fff" stroke="none" stroke-width="0"/><text x="630" y="160" font-size="12" text-anchor="middle" fill="#333333" font-weight="700">AABBDD</text><text x="196" y="196" font-size="10" text-anchor="middle" fill="#5c5c66">hibridação</text><text x="368" y="196" font-size="10" text-anchor="middle" fill="#c67600" font-weight="700">duplicação</text><text x="540" y="196" font-size="10" text-anchor="middle" fill="#5c5c66">hibridação e duplicação</text><rect x="20" y="212" width="700" height="46" rx="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.2"/><text x="370" y="232" font-size="11.5" text-anchor="middle" fill="#c67600" font-weight="700">por que a duplicação salva a fertilidade</text><text x="370" y="250" font-size="10.4" text-anchor="middle" fill="#333333">No hibrido, os cromossomos não tem par e a meiose falha. Duplicados, cada um encontra um homólogo identico.</text><text x="20" y="284" font-size="10.8" text-anchor="start" fill="#5c5c66">Euploidia muda conjuntos inteiros: triploides são estéreis, e e isso que da a banana e a melancia sem sementes.</text><text x="20" y="302" font-size="10.8" text-anchor="start" fill="#5c5c66">Aneuploidia muda cromossomos isolados e costuma ser mais prejudicial, porque altera a dose de muitos genes de uma vez.</text></svg>
A origem do trigo de pão: duas hibridações, cada uma seguida de duplicação.

O **alopoliploide** combina genomas de **espécies diferentes**. Um híbrido entre duas espécies costuma ser estéril, porque os cromossomos de uma não têm homólogos na outra e não se emparelham na meiose. Se o número de cromossomos do híbrido **duplicar**, cada cromossomo passa a ter um par idêntico, a meiose volta a ser regular, e a planta se torna fértil: é um **anfidiploide**, uma nova espécie.

**O trigo comum** (*Triticum aestivum*, AABBDD, \(2n = 6x = 42\)) é o exemplo clássico. Resulta de duas hibridações naturais seguidas de duplicação:

1. Um trigo selvagem (genoma AA) cruzou-se com uma gramínea aparentada com *Aegilops speltoides* (BB), originando o trigo tetraploide AABB, ancestral do trigo duro usado em massas.
2. Esse trigo tetraploide, já cultivado, cruzou-se com *Aegilops tauschii* (DD), originando o trigo hexaploide de pão, há cerca de 8 a 10 mil anos.

**Outros exemplos:**

- **Algodão** (*Gossypium hirsutum*, AADD): combinou um genoma do Velho Mundo e outro americano.
- **Canola e outras brássicas:** o **triângulo de U** (1935) mostrou que três espécies diploides de *Brassica* (genomas AA, BB e CC) originaram três alopoliploides: *B. napus* (AACC, a canola), *B. juncea* (AABB, a mostarda) e *B. carinata* (BBCC).
- **Triticale:** o primeiro cereal criado pelo homem, um alopoliploide sintético entre trigo e centeio.
- **Cana-de-açúcar:** as variedades modernas são híbridos complexos e altamente poliploides, com mais de 100 cromossomos, o que torna sua genética especialmente difícil.

## Poliploidia induzida: colchicina

A **colchicina**, um alcaloide extraído do cólquico, liga-se à tubulina e impede a formação do fuso (tema 32). As cromátides se separam, mas a célula não se divide, e o número de cromossomos dobra. Aplicada em sementes, gemas ou plântulas, produz poliploides artificiais. Outros agentes antimitóticos, como a orizalina, têm o mesmo efeito. É assim que se obtêm os tetraploides usados na produção de melancias sem sementes e que se restaura a fertilidade de híbridos interespecíficos.

## Haploides e duplo-haploides

Plantas **haploides** (com o número de cromossomos do gameta) podem ser obtidas por cultura de anteras ou de micrósporos, por hibridações que eliminam os cromossomos de um dos pais, ou por linhagens indutoras de haploidia, muito usadas no milho. Duplicando os cromossomos com colchicina, obtém-se um **duplo-haploide**: uma linhagem **100% homozigota** em uma ou duas gerações, quando a autofecundação levaria seis a oito gerações. É uma das ferramentas que mais aceleraram o melhoramento de milho, trigo, cevada e canola (tema 102).

## Aneuploidias

| Tipo | Fórmula | Descrição |
|---|---|---|
| Nulissomia | \(2n - 2\) | falta o par inteiro de um cromossomo |
| Monossomia | \(2n - 1\) | falta um cromossomo de um par |
| Trissomia | \(2n + 1\) | um cromossomo a mais |
| Tetrassomia | \(2n + 2\) | dois cromossomos a mais do mesmo tipo |

As aneuploidias surgem principalmente por **não disjunção** na meiose (tema 94). Como alteram a dose de muitos genes de uma vez, sem alterar os outros, costumam ser mais prejudiciais que as euploidias.

**Em humanos**, a maioria das aneuploidias autossômicas é letal no início da gestação. As que permitem a sobrevivência envolvem cromossomos pequenos ou os sexuais:

| Condição | Cariótipo | Observação |
|---|---|---|
| Síndrome de Down | trissomia do 21 | a aneuploidia autossômica mais comum entre os nascidos vivos; frequência aumenta com a idade materna |
| Síndrome de Edwards | trissomia do 18 | sobrevida geralmente curta |
| Síndrome de Patau | trissomia do 13 | sobrevida geralmente curta |
| Síndrome de Turner | 45,X | única monossomia viável; baixa estatura, infertilidade |
| Síndrome de Klinefelter | 47,XXY | fenótipo masculino, infertilidade; um corpúsculo de Barr |

A melhor tolerância às aneuploidias dos cromossomos sexuais se explica pela inativação do X (tema 98).

**Em plantas**, os poliploides toleram muito melhor as aneuploidias, porque os genes do cromossomo que falta costumam ter cópias nos outros genomas. Ernest Sears produziu, no trigo, a série completa de **nulissômicos** e **monossômicos**, que permitiu atribuir genes a cromossomos específicos e substituir cromossomos inteiros entre variedades.

**Em leveduras industriais**, aneuploidias são frequentes e podem ser adaptativas: cópias extras de certos cromossomos aumentam a tolerância a etanol, calor ou inibidores presentes em hidrolisados lignocelulósicos (tema 114).

## Exemplo resolvido

Um híbrido entre uma espécie com \(2n = 14\) e outra com \(2n = 18\) é estéril. Quantos cromossomos terá o anfidiploide obtido por colchicina?

O híbrido recebe \(n = 7\) de uma e \(n = 9\) da outra: 16 cromossomos, sem pares homólogos. Duplicando, o anfidiploide tem \(2n = 32\), com 16 pares, e meiose regular.

> **Atenção, erros comuns:**
> Confundir triploide (\(3n\), euploidia) com trissômico (\(2n + 1\), aneuploidia).
> Achar que a colchicina altera a sequência do DNA: ela só impede a divisão celular.
> Esquecer que alopoliploides se comportam, na meiose, como diploides, e por isso são férteis.

## Para fixar

- Euploidia muda conjuntos inteiros; aneuploidia muda cromossomos isolados.
- Alopoliploidia (hibridação mais duplicação) originou trigo, algodão e canola.
- Triploides são estéreis (banana, melancia sem sementes); colchicina duplica cromossomos; duplo-haploides são homozigotos instantâneos.
`,
  referencias: [
    "GRIFFITHS, A. J. F. et al. **Introdução à genética**. 11. ed. Rio de Janeiro: Guanabara Koogan, 2016. Cap. 17: Mutações cromossômicas em grande escala.",
    "BORÉM, A.; MIRANDA, G. V.; FRITSCHE-NETO, R. **Melhoramento de plantas**. 8. ed. São Paulo: Oficina de Textos, 2021.",
    "U, N. Genome analysis in *Brassica* with special reference to the experimental formation of *B. napus* and peculiar mode of fertilization. **Japanese Journal of Botany**, v. 7, p. 389-452, 1935.",
    "SNUSTAD, D. P.; SIMMONS, M. J. **Fundamentos de genética**. 7. ed. Rio de Janeiro: Guanabara Koogan, 2017.",
  ],
},
{
  id: "r100", num: 100,
  area: "Biologia Molecular e Genética",
  disciplina: "Genética",
  titulo: "Alterações cromossômicas estruturais",
  descricao: "Deleções, duplicações, inversões e translocações: como surgem, como se comportam na meiose, suas consequências fenotípicas e o uso em citogenética, evolução e melhoramento.",
  tags: ["Genética", "citogenética", "alteração estrutural", "deleção", "duplicação", "inversão", "inversão pericêntrica", "inversão paracêntrica", "translocação", "translocação recíproca", "translocação robertsoniana", "cromossomo Filadélfia", "cariótipo", "bandeamento", "FISH", "número de cópias"],
  conteudo: String.raw`
## Quando o cromossomo muda de forma

Além do número, a **estrutura** dos cromossomos pode mudar. Essas alterações surgem quando o DNA sofre quebras de fita dupla que são reparadas de forma incorreta, ou quando há recombinação entre sequências repetidas parecidas em posições diferentes. Radiações ionizantes e certos agentes químicos aumentam a frequência dessas quebras.

Elas são estudadas pela **citogenética**: o **cariótipo** organiza os cromossomos por tamanho e posição do centrômero; o **bandeamento G** cria padrões de faixas claras e escuras que identificam cada cromossomo e permitem ver alterações; e a **hibridização in situ fluorescente** (FISH), com sondas de DNA marcadas, localiza sequências específicas. Hoje, alterações menores são detectadas por microarranjos e sequenciamento (tema 61).

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Alteracoes estruturais</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Alteracoes estruturais nos cromossomos</text><text x="130" y="73" font-size="11.5" text-anchor="end" fill="#333333" font-weight="700">normal</text><rect x="146" y="56" width="22" height="24" rx="3" fill="#3fa7e0" stroke="#fff" stroke-width="1"/><rect x="168" y="56" width="22" height="24" rx="3" fill="#7ec8a0" stroke="#fff" stroke-width="1"/><rect x="190" y="56" width="22" height="24" rx="3" fill="#f5c451" stroke="#fff" stroke-width="1"/><rect x="212" y="56" width="22" height="24" rx="3" fill="#e2724f" stroke="#fff" stroke-width="1"/><rect x="234" y="56" width="22" height="24" rx="3" fill="#b07fd0" stroke="#fff" stroke-width="1"/><rect x="256" y="56" width="22" height="24" rx="3" fill="#dd6b9a" stroke="#fff" stroke-width="1"/><text x="320" y="73" font-size="10.2" text-anchor="start" fill="#5c5c66">a ordem original</text><text x="130" y="119" font-size="11.5" text-anchor="end" fill="#333333" font-weight="700">deleção</text><rect x="146" y="102" width="22" height="24" rx="3" fill="#3fa7e0" stroke="#fff" stroke-width="1"/><rect x="168" y="102" width="22" height="24" rx="3" fill="#7ec8a0" stroke="#fff" stroke-width="1"/><rect x="190" y="102" width="22" height="24" rx="3" fill="#b07fd0" stroke="#fff" stroke-width="1"/><rect x="212" y="102" width="22" height="24" rx="3" fill="#dd6b9a" stroke="#fff" stroke-width="1"/><text x="320" y="119" font-size="10.2" text-anchor="start" fill="#5c5c66">perde um segmento</text><text x="130" y="165" font-size="11.5" text-anchor="end" fill="#333333" font-weight="700">duplicação</text><rect x="146" y="148" width="22" height="24" rx="3" fill="#3fa7e0" stroke="#fff" stroke-width="1"/><rect x="168" y="148" width="22" height="24" rx="3" fill="#7ec8a0" stroke="#fff" stroke-width="1"/><rect x="190" y="148" width="22" height="24" rx="3" fill="#f5c451" stroke="#fff" stroke-width="1"/><rect x="212" y="148" width="22" height="24" rx="3" fill="#f5c451" stroke="#fff" stroke-width="1"/><rect x="234" y="148" width="22" height="24" rx="3" fill="#e2724f" stroke="#fff" stroke-width="1"/><rect x="256" y="148" width="22" height="24" rx="3" fill="#b07fd0" stroke="#fff" stroke-width="1"/><text x="320" y="165" font-size="10.2" text-anchor="start" fill="#5c5c66">repete um segmento</text><text x="130" y="211" font-size="11.5" text-anchor="end" fill="#333333" font-weight="700">inversão</text><rect x="146" y="194" width="22" height="24" rx="3" fill="#3fa7e0" stroke="#fff" stroke-width="1"/><rect x="168" y="194" width="22" height="24" rx="3" fill="#7ec8a0" stroke="#fff" stroke-width="1"/><rect x="190" y="194" width="22" height="24" rx="3" fill="#b07fd0" stroke="#fff" stroke-width="1"/><rect x="212" y="194" width="22" height="24" rx="3" fill="#e2724f" stroke="#fff" stroke-width="1"/><rect x="234" y="194" width="22" height="24" rx="3" fill="#f5c451" stroke="#fff" stroke-width="1"/><rect x="256" y="194" width="22" height="24" rx="3" fill="#dd6b9a" stroke="#fff" stroke-width="1"/><text x="320" y="211" font-size="10.2" text-anchor="start" fill="#5c5c66">um trecho gira 180 graus</text><text x="130" y="258" font-size="11.5" text-anchor="end" fill="#333333" font-weight="700">translocação</text><rect x="146" y="240" width="22" height="24" rx="3" fill="#3fa7e0" stroke="#fff" stroke-width="1"/><rect x="168" y="240" width="22" height="24" rx="3" fill="#7ec8a0" stroke="#fff" stroke-width="1"/><rect x="190" y="240" width="22" height="24" rx="3" fill="#f5c451" stroke="#fff" stroke-width="1"/><rect x="226" y="240" width="22" height="24" rx="3" fill="#d8dce6" stroke="#fff" stroke-width="1"/><rect x="248" y="240" width="22" height="24" rx="3" fill="#d8dce6" stroke="#fff" stroke-width="1"/><rect x="270" y="240" width="22" height="24" rx="3" fill="#d8dce6" stroke="#fff" stroke-width="1"/><text x="320" y="258" font-size="10.2" text-anchor="start" fill="#5c5c66">um segmento passa para um cromossomo não homólogo</text><rect x="540" y="50" width="180" height="160" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="630" y="72" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">consequencias</text><text x="630" y="96" font-size="10" text-anchor="middle" fill="#5c5c66">deleção e duplicação</text><text x="630" y="110" font-size="10" text-anchor="middle" fill="#333333">mudam a dose dos genes</text><text x="630" y="136" font-size="10" text-anchor="middle" fill="#5c5c66">inversão</text><text x="630" y="150" font-size="10" text-anchor="middle" fill="#333333">suprime a recombinação</text><text x="630" y="176" font-size="10" text-anchor="middle" fill="#5c5c66">translocação</text><text x="630" y="190" font-size="10" text-anchor="middle" fill="#333333">causa semiesterilidade</text><text x="20" y="290" font-size="10.8" text-anchor="start" fill="#5c5c66">Portadores equilibrados costumam ter fenótipo normal, mas produzem gametas desbalanceados na meiose.</text></svg>
As quatro alterações estruturais e o que cada uma provoca.

## Deleções

A **deleção** é a perda de um segmento. Pode ser terminal (na ponta) ou intersticial (no meio).

- Deleções grandes em homozigose costumam ser letais; em heterozigose, causam problemas pela redução da dose dos genes da região (haploinsuficiência, tema 95).
- Na meiose de um heterozigoto, o cromossomo normal forma uma **alça de deleção** no trecho sem par.
- Uma deleção pode "desmascarar" um alelo recessivo no cromossomo homólogo (**pseudodominância**), o que foi usado para mapear genes.
- Em humanos, a síndrome do *cri du chat* resulta de uma deleção no braço curto do cromossomo 5.

## Duplicações

A **duplicação** é a repetição de um segmento, em tandem (logo em seguida) ou em outro lugar.

- Duplicações são a principal fonte de **novos genes** na evolução: uma das cópias mantém a função original, e a outra fica livre para acumular mutações e adquirir função nova. As famílias de genes das globinas e de muitas enzimas de defesa das plantas surgiram assim.
- Variações no **número de cópias** (CNVs) são comuns nos genomas. Em plantas, já foram associadas, por exemplo, à tolerância ao alumínio no solo e à resistência a nematoides na soja.
- Em *Drosophila*, a duplicação de um trecho do X causa o fenótipo de olho em barra (*Bar*), um dos primeiros exemplos do efeito de dose.

## Inversões

Na **inversão**, um segmento é cortado em dois pontos, gira 180° e é reinserido.

- **Paracêntrica:** não inclui o centrômero.
- **Pericêntrica:** inclui o centrômero, e pode mudar a posição relativa dele.

Um heterozigoto para inversão geralmente tem fenótipo normal (nenhum gene foi perdido), mas na meiose os homólogos formam uma **alça de inversão** para se emparelhar. Um crossing-over dentro da alça gera cromátides com deleções e duplicações (e, nas paracêntricas, cromátides com dois centrômeros ou sem nenhum), que originam gametas inviáveis. O resultado prático é que **as inversões suprimem a recombinação** no trecho invertido: os genes ali passam a ser herdados como um bloco. Isso preserva combinações favoráveis de alelos (*supergenes*), e, em laboratório, as inversões são usadas em cromossomos "balanceadores" para manter mutações sem perdê-las por recombinação.

## Translocações

Na **translocação**, um segmento passa para um cromossomo **não homólogo**.

**Translocação recíproca:** dois cromossomos trocam segmentos. O portador equilibrado tem todos os genes e fenótipo geralmente normal, mas na meiose os quatro cromossomos envolvidos formam uma **cruz**, e dependendo de como se separam, parte dos gametas fica com segmentos a mais ou a menos. Por isso, portadores de translocações têm **semiesterilidade**: em plantas, cerca de metade do pólen pode ser inviável.

**Translocação robertsoniana:** dois cromossomos acrocêntricos (com centrômero muito perto da ponta) se fundem pelo centrômero, e o número de cromossomos diminui. Em humanos, cerca de 4% dos casos de síndrome de Down são causados por uma translocação robertsoniana envolvendo o cromossomo 21, que pode ser herdada de um genitor portador equilibrado. Mudanças desse tipo também explicam diferenças no número de cromossomos entre espécies próximas: o cromossomo 2 humano resultou da fusão de dois cromossomos ancestrais que continuam separados nos chimpanzés.

**Translocações e câncer:** o **cromossomo Filadélfia**, uma translocação recíproca entre os cromossomos 9 e 22, une partes de dois genes (BCR e ABL) e cria uma proteína quinase sempre ativa, que estimula a divisão das células do sangue e causa a leucemia mieloide crônica. O imatinibe, um fármaco que inibe essa quinase, foi um dos primeiros exemplos de terapia-alvo.

## Resumo

| Alteração | O que muda | Comportamento na meiose | Consequência típica |
|---|---|---|---|
| Deleção | perde um segmento | alça de deleção | efeito de dose, pseudodominância |
| Duplicação | repete um segmento | alça de duplicação | efeito de dose, origem de novos genes |
| Inversão | segmento invertido | alça de inversão | supressão da recombinação |
| Translocação recíproca | troca entre não homólogos | figura em cruz | semiesterilidade, novos grupos de ligação |

## Na prática: melhoramento de plantas

- **Introgressão de genes silvestres:** genes de resistência a doenças de espécies aparentadas foram levados ao trigo por translocações. A translocação entre os cromossomos 1B do trigo e 1R do centeio, por exemplo, trouxe genes de resistência a ferrugens e foi usada em grande parte das variedades de trigo do mundo.
- **Rearranjos e barreiras reprodutivas:** diferenças estruturais entre cromossomos de espécies aparentadas reduzem a fertilidade dos híbridos e precisam ser consideradas em programas de cruzamentos interespecíficos.
- **Mutagênese:** radiações gama e raios X, que causam quebras cromossômicas, foram usadas para gerar variabilidade em muitas culturas. Milhares de variedades obtidas por mutagênese induzida estão registradas na base de dados da FAO e da Agência Internacional de Energia Atômica.

> **Atenção, erros comuns:**
> Achar que portadores de inversões ou translocações equilibradas têm necessariamente fenótipo alterado.
> Confundir translocação (entre cromossomos não homólogos) com crossing-over (entre homólogos).
> Esquecer que as inversões reduzem a recombinação observada, distorcendo mapas genéticos (tema 97).

## Para fixar

- Deleções e duplicações mudam a dose de genes; duplicações originam genes novos.
- Inversões suprimem a recombinação; translocações causam semiesterilidade.
- Translocações específicas podem causar doenças, como o cromossomo Filadélfia.
`,
  referencias: [
    "GRIFFITHS, A. J. F. et al. **Introdução à genética**. 11. ed. Rio de Janeiro: Guanabara Koogan, 2016. Cap. 17.",
    "NUSSBAUM, R. L.; MCINNES, R. R.; WILLARD, H. F. **Thompson & Thompson genética médica**. 8. ed. Rio de Janeiro: Elsevier, 2016.",
    "GUERRA, M. **Introdução à citogenética geral**. Rio de Janeiro: Guanabara Koogan, 1988.",
  ],
},
{
  id: "r101", num: 101,
  area: "Biologia Molecular e Genética",
  disciplina: "Genética",
  titulo: "Genética de populações",
  descricao: "Frequências alélicas e genotípicas, o equilíbrio de Hardy-Weinberg e seus testes, e os fatores que mudam as frequências: mutação, seleção, deriva, migração e endogamia, com aplicações na conservação e no melhoramento.",
  tags: ["Genética", "genética de populações", "frequência alélica", "frequência genotípica", "Hardy-Weinberg", "equilíbrio", "seleção natural", "aptidão", "deriva genética", "efeito fundador", "gargalo", "tamanho efetivo", "migração", "fluxo gênico", "mutação", "endogamia", "coeficiente de endogamia", "heterozigosidade", "FST", "resistência a herbicidas"],
  conteudo: String.raw`
## Da família para a população

A genética mendeliana prevê os descendentes de um cruzamento. A **genética de populações** estuda como a composição genética de um **grupo inteiro** de indivíduos que se reproduzem entre si muda (ou não) ao longo das gerações. É a ponte entre a genética e a evolução, e a base do manejo de bancos de germoplasma, da conservação de espécies e do melhoramento de populações.

## Frequências alélicas e genotípicas

Para um gene com dois alelos, A e a, numa população de \(N\) indivíduos diploides:

\[ p = f(A) = \frac{2\,N_{AA} + N_{Aa}}{2N} \qquad q = f(a) = \frac{2\,N_{aa} + N_{Aa}}{2N} \qquad p + q = 1 \]

**Exemplo:** numa amostra de 500 plantas, há 320 AA, 160 Aa e 20 aa. Então \(p = (640 + 160)/1000 = 0{,}80\) e \(q = 0{,}20\).

## O equilíbrio de Hardy-Weinberg

<svg viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg" role="img"><title>Hardy-Weinberg</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Hardy-Weinberg e as forças que tiram a população do equilíbrio</text><rect x="56" y="70" width="280" height="166" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="126" y1="70" x2="126" y2="236" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="196" y1="70" x2="196" y2="236" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="266" y1="70" x2="266" y2="236" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="336" y1="70" x2="336" y2="236" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="56" y1="194.5" x2="336" y2="194.5" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="56" y1="153" x2="336" y2="153" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="56" y1="111.5" x2="336" y2="111.5" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="56" y1="70" x2="336" y2="70" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="56" y1="70" x2="56" y2="236" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="56" y1="236" x2="336" y2="236" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="126" y="251" font-size="10.5" text-anchor="middle" fill="#8a8a93">0.25</text><text x="196" y="251" font-size="10.5" text-anchor="middle" fill="#8a8a93">0.5</text><text x="266" y="251" font-size="10.5" text-anchor="middle" fill="#8a8a93">0.75</text><text x="336" y="251" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="50" y="198" font-size="10.5" text-anchor="end" fill="#8a8a93">0.25</text><text x="50" y="156.5" font-size="10.5" text-anchor="end" fill="#8a8a93">0.5</text><text x="50" y="115" font-size="10.5" text-anchor="end" fill="#8a8a93">0.75</text><text x="50" y="73.5" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="340" y="240" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">q</text><text x="52" y="64" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">freq.</text><text x="56" y="60" font-size="10" text-anchor="start" fill="#5c5c66">frequência dos genótipos</text><path d="M56.0,70.0L57.3,71.5L58.5,73.0L59.8,74.5L61.1,76.0L62.4,77.5L63.6,78.9L64.9,80.4L66.2,81.9L67.5,83.3L68.7,84.7L70.0,86.2L71.3,87.6L72.5,89.0L73.8,90.5L75.1,91.9L76.4,93.3L77.6,94.7L78.9,96.1L80.2,97.4L81.5,98.8L82.7,100.2L84.0,101.5L85.3,102.9L86.5,104.2L87.8,105.6L89.1,106.9L90.4,108.2L91.6,109.6L92.9,110.9L94.2,112.2L95.5,113.5L96.7,114.8L98.0,116.1L99.3,117.3L100.5,118.6L101.8,119.9L103.1,121.1L104.4,122.4L105.6,123.6L106.9,124.9L108.2,126.1L109.5,127.3L110.7,128.5L112.0,129.8L113.3,131.0L114.5,132.2L115.8,133.4L117.1,134.5L118.4,135.7L119.6,136.9L120.9,138.0L122.2,139.2L123.5,140.3L124.7,141.5L126.0,142.6L127.3,143.8L128.5,144.9L129.8,146.0L131.1,147.1L132.4,148.2L133.6,149.3L134.9,150.4L136.2,151.5L137.5,152.5L138.7,153.6L140.0,154.7L141.3,155.7L142.5,156.8L143.8,157.8L145.1,158.8L146.4,159.9L147.6,160.9L148.9,161.9L150.2,162.9L151.5,163.9L152.7,164.9L154.0,165.9L155.3,166.8L156.5,167.8L157.8,168.8L159.1,169.7L160.4,170.7L161.6,171.6L162.9,172.6L164.2,173.5L165.5,174.4L166.7,175.3L168.0,176.2L169.3,177.1L170.5,178.0L171.8,178.9L173.1,179.8L174.4,180.7L175.6,181.5L176.9,182.4L178.2,183.3L179.5,184.1L180.7,185.0L182.0,185.8L183.3,186.6L184.5,187.4L185.8,188.2L187.1,189.1L188.4,189.8L189.6,190.6L190.9,191.4L192.2,192.2L193.5,193.0L194.7,193.7L196.0,194.5L197.3,195.3L198.5,196.0L199.8,196.7L201.1,197.5L202.4,198.2L203.6,198.9L204.9,199.6L206.2,200.3L207.5,201.0L208.7,201.7L210.0,202.4L211.3,203.1L212.5,203.7L213.8,204.4L215.1,205.0L216.4,205.7L217.6,206.3L218.9,207.0L220.2,207.6L221.5,208.2L222.7,208.8L224.0,209.4L225.3,210.0L226.5,210.6L227.8,211.2L229.1,211.8L230.4,212.4L231.6,212.9L232.9,213.5L234.2,214.0L235.5,214.6L236.7,215.1L238.0,215.7L239.3,216.2L240.5,216.7L241.8,217.2L243.1,217.7L244.4,218.2L245.6,218.7L246.9,219.2L248.2,219.7L249.5,220.1L250.7,220.6L252.0,221.1L253.3,221.5L254.5,222.0L255.8,222.4L257.1,222.8L258.4,223.2L259.6,223.7L260.9,224.1L262.2,224.5L263.5,224.9L264.7,225.2L266.0,225.6L267.3,226.0L268.5,226.4L269.8,226.7L271.1,227.1L272.4,227.4L273.6,227.8L274.9,228.1L276.2,228.4L277.5,228.7L278.7,229.1L280.0,229.4L281.3,229.7L282.5,229.9L283.8,230.2L285.1,230.5L286.4,230.8L287.6,231.0L288.9,231.3L290.2,231.6L291.5,231.8L292.7,232.0L294.0,232.3L295.3,232.5L296.5,232.7L297.8,232.9L299.1,233.1L300.4,233.3L301.6,233.5L302.9,233.7L304.2,233.9L305.5,234.0L306.7,234.2L308.0,234.3L309.3,234.5L310.5,234.6L311.8,234.8L313.1,234.9L314.4,235.0L315.6,235.1L316.9,235.2L318.2,235.3L319.5,235.4L320.7,235.5L322.0,235.6L323.3,235.7L324.5,235.7L325.8,235.8L327.1,235.8L328.4,235.9L329.6,235.9L330.9,235.9L332.2,236.0L333.5,236.0L334.7,236.0L336.0,236.0" fill="none" stroke="#0083cb" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M56.0,236.0L57.3,234.5L58.5,233.0L59.8,231.5L61.1,230.1L62.4,228.6L63.6,227.2L64.9,225.8L66.2,224.4L67.5,223.0L68.7,221.6L70.0,220.2L71.3,218.9L72.5,217.5L73.8,216.2L75.1,214.9L76.4,213.6L77.6,212.3L78.9,211.1L80.2,209.8L81.5,208.6L82.7,207.3L84.0,206.1L85.3,204.9L86.5,203.7L87.8,202.6L89.1,201.4L90.4,200.3L91.6,199.1L92.9,198.0L94.2,196.9L95.5,195.8L96.7,194.7L98.0,193.7L99.3,192.6L100.5,191.6L101.8,190.6L103.1,189.6L104.4,188.6L105.6,187.6L106.9,186.6L108.2,185.7L109.5,184.7L110.7,183.8L112.0,182.9L113.3,182.0L114.5,181.1L115.8,180.2L117.1,179.4L118.4,178.5L119.6,177.7L120.9,176.9L122.2,176.1L123.5,175.3L124.7,174.5L126.0,173.8L127.3,173.0L128.5,172.3L129.8,171.5L131.1,170.8L132.4,170.1L133.6,169.5L134.9,168.8L136.2,168.2L137.5,167.5L138.7,166.9L140.0,166.3L141.3,165.7L142.5,165.1L143.8,164.5L145.1,164.0L146.4,163.4L147.6,162.9L148.9,162.4L150.2,161.9L151.5,161.4L152.7,160.9L154.0,160.5L155.3,160.0L156.5,159.6L157.8,159.2L159.1,158.8L160.4,158.4L161.6,158.0L162.9,157.6L164.2,157.3L165.5,157.0L166.7,156.6L168.0,156.3L169.3,156.0L170.5,155.7L171.8,155.5L173.1,155.2L174.4,155.0L175.6,154.8L176.9,154.5L178.2,154.3L179.5,154.2L180.7,154.0L182.0,153.8L183.3,153.7L184.5,153.6L185.8,153.4L187.1,153.3L188.4,153.2L189.6,153.2L190.9,153.1L192.2,153.1L193.5,153.0L194.7,153.0L196.0,153.0L197.3,153.0L198.5,153.0L199.8,153.1L201.1,153.1L202.4,153.2L203.6,153.2L204.9,153.3L206.2,153.4L207.5,153.6L208.7,153.7L210.0,153.8L211.3,154.0L212.5,154.2L213.8,154.3L215.1,154.5L216.4,154.8L217.6,155.0L218.9,155.2L220.2,155.5L221.5,155.7L222.7,156.0L224.0,156.3L225.3,156.6L226.5,157.0L227.8,157.3L229.1,157.6L230.4,158.0L231.6,158.4L232.9,158.8L234.2,159.2L235.5,159.6L236.7,160.0L238.0,160.5L239.3,160.9L240.5,161.4L241.8,161.9L243.1,162.4L244.4,162.9L245.6,163.4L246.9,164.0L248.2,164.5L249.5,165.1L250.7,165.7L252.0,166.3L253.3,166.9L254.5,167.5L255.8,168.2L257.1,168.8L258.4,169.5L259.6,170.1L260.9,170.8L262.2,171.5L263.5,172.3L264.7,173.0L266.0,173.8L267.3,174.5L268.5,175.3L269.8,176.1L271.1,176.9L272.4,177.7L273.6,178.5L274.9,179.4L276.2,180.2L277.5,181.1L278.7,182.0L280.0,182.9L281.3,183.8L282.5,184.7L283.8,185.7L285.1,186.6L286.4,187.6L287.6,188.6L288.9,189.6L290.2,190.6L291.5,191.6L292.7,192.6L294.0,193.7L295.3,194.7L296.5,195.8L297.8,196.9L299.1,198.0L300.4,199.1L301.6,200.3L302.9,201.4L304.2,202.6L305.5,203.7L306.7,204.9L308.0,206.1L309.3,207.3L310.5,208.6L311.8,209.8L313.1,211.1L314.4,212.3L315.6,213.6L316.9,214.9L318.2,216.2L319.5,217.5L320.7,218.9L322.0,220.2L323.3,221.6L324.5,223.0L325.8,224.4L327.1,225.8L328.4,227.2L329.6,228.6L330.9,230.1L332.2,231.5L333.5,233.0L334.7,234.5L336.0,236.0" fill="none" stroke="#a300bc" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M56.0,236.0L57.3,236.0L58.5,236.0L59.8,236.0L61.1,235.9L62.4,235.9L63.6,235.9L64.9,235.8L66.2,235.8L67.5,235.7L68.7,235.7L70.0,235.6L71.3,235.5L72.5,235.4L73.8,235.3L75.1,235.2L76.4,235.1L77.6,235.0L78.9,234.9L80.2,234.8L81.5,234.6L82.7,234.5L84.0,234.3L85.3,234.2L86.5,234.0L87.8,233.9L89.1,233.7L90.4,233.5L91.6,233.3L92.9,233.1L94.2,232.9L95.5,232.7L96.7,232.5L98.0,232.3L99.3,232.0L100.5,231.8L101.8,231.6L103.1,231.3L104.4,231.0L105.6,230.8L106.9,230.5L108.2,230.2L109.5,229.9L110.7,229.7L112.0,229.4L113.3,229.1L114.5,228.7L115.8,228.4L117.1,228.1L118.4,227.8L119.6,227.4L120.9,227.1L122.2,226.7L123.5,226.4L124.7,226.0L126.0,225.6L127.3,225.2L128.5,224.9L129.8,224.5L131.1,224.1L132.4,223.7L133.6,223.2L134.9,222.8L136.2,222.4L137.5,222.0L138.7,221.5L140.0,221.1L141.3,220.6L142.5,220.1L143.8,219.7L145.1,219.2L146.4,218.7L147.6,218.2L148.9,217.7L150.2,217.2L151.5,216.7L152.7,216.2L154.0,215.7L155.3,215.1L156.5,214.6L157.8,214.0L159.1,213.5L160.4,212.9L161.6,212.4L162.9,211.8L164.2,211.2L165.5,210.6L166.7,210.0L168.0,209.4L169.3,208.8L170.5,208.2L171.8,207.6L173.1,207.0L174.4,206.3L175.6,205.7L176.9,205.0L178.2,204.4L179.5,203.7L180.7,203.1L182.0,202.4L183.3,201.7L184.5,201.0L185.8,200.3L187.1,199.6L188.4,198.9L189.6,198.2L190.9,197.5L192.2,196.7L193.5,196.0L194.7,195.3L196.0,194.5L197.3,193.7L198.5,193.0L199.8,192.2L201.1,191.4L202.4,190.6L203.6,189.8L204.9,189.1L206.2,188.2L207.5,187.4L208.7,186.6L210.0,185.8L211.3,185.0L212.5,184.1L213.8,183.3L215.1,182.4L216.4,181.5L217.6,180.7L218.9,179.8L220.2,178.9L221.5,178.0L222.7,177.1L224.0,176.2L225.3,175.3L226.5,174.4L227.8,173.5L229.1,172.6L230.4,171.6L231.6,170.7L232.9,169.7L234.2,168.8L235.5,167.8L236.7,166.8L238.0,165.9L239.3,164.9L240.5,163.9L241.8,162.9L243.1,161.9L244.4,160.9L245.6,159.9L246.9,158.8L248.2,157.8L249.5,156.8L250.7,155.7L252.0,154.7L253.3,153.6L254.5,152.5L255.8,151.5L257.1,150.4L258.4,149.3L259.6,148.2L260.9,147.1L262.2,146.0L263.5,144.9L264.7,143.8L266.0,142.6L267.3,141.5L268.5,140.3L269.8,139.2L271.1,138.0L272.4,136.9L273.6,135.7L274.9,134.5L276.2,133.4L277.5,132.2L278.7,131.0L280.0,129.8L281.3,128.5L282.5,127.3L283.8,126.1L285.1,124.9L286.4,123.6L287.6,122.4L288.9,121.1L290.2,119.9L291.5,118.6L292.7,117.3L294.0,116.1L295.3,114.8L296.5,113.5L297.8,112.2L299.1,110.9L300.4,109.6L301.6,108.2L302.9,106.9L304.2,105.6L305.5,104.2L306.7,102.9L308.0,101.5L309.3,100.2L310.5,98.8L311.8,97.4L313.1,96.1L314.4,94.7L315.6,93.3L316.9,91.9L318.2,90.5L319.5,89.0L320.7,87.6L322.0,86.2L323.3,84.7L324.5,83.3L325.8,81.9L327.1,80.4L328.4,78.9L329.6,77.5L330.9,76.0L332.2,74.5L333.5,73.0L334.7,71.5L336.0,70.0" fill="none" stroke="#f40086" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><text x="100.8" y="106.52" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">AA</text><text x="196" y="143.04" font-size="11" text-anchor="middle" fill="#a300bc" font-weight="700">Aa</text><text x="296.8" y="106.52" font-size="11" text-anchor="middle" fill="#f40086" font-weight="700">aa</text><line x1="84" y1="236" x2="84" y2="206.12" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="4 4"/><text x="84" y="196.8" font-size="9.6" text-anchor="middle" fill="#5c5c66">com a raro,</text><text x="84" y="208.8" font-size="9.6" text-anchor="middle" fill="#5c5c66">quase todo a</text><text x="84" y="220.8" font-size="9.6" text-anchor="middle" fill="#5c5c66">esta em Aa</text><text x="196" y="262" font-size="10.3" text-anchor="middle" fill="#5c5c66">por isso a seleção contra recessivos e lenta</text><text x="550" y="60" font-size="12" text-anchor="middle" fill="#333333" font-weight="700">o que muda as frequências</text><rect x="380" y="92" width="340" height="28" rx="7" fill="#fff" stroke="#0a8f5e" stroke-width="1.3"/><text x="396" y="111" font-size="11" text-anchor="start" fill="#0a8f5e" font-weight="700">mutação</text><text x="482" y="111" font-size="9.6" text-anchor="start" fill="#5c5c66">cria variacao nova, muito devagar</text><rect x="380" y="126" width="340" height="28" rx="7" fill="#fff" stroke="#f40086" stroke-width="1.3"/><text x="396" y="145" font-size="11" text-anchor="start" fill="#f40086" font-weight="700">seleção</text><text x="482" y="145" font-size="9.6" text-anchor="start" fill="#5c5c66">muda de forma direcionada</text><rect x="380" y="160" width="340" height="28" rx="7" fill="#fff" stroke="#c67600" stroke-width="1.3"/><text x="396" y="179" font-size="11" text-anchor="start" fill="#c67600" font-weight="700">deriva</text><text x="482" y="179" font-size="9.6" text-anchor="start" fill="#5c5c66">muda ao acaso em populações pequenas</text><rect x="380" y="194" width="340" height="28" rx="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><text x="396" y="213" font-size="11" text-anchor="start" fill="#0083cb" font-weight="700">migração</text><text x="482" y="213" font-size="9.6" text-anchor="start" fill="#5c5c66">aproxima populações diferentes</text><rect x="380" y="228" width="340" height="28" rx="7" fill="#fff" stroke="#a300bc" stroke-width="1.3"/><text x="396" y="247" font-size="11" text-anchor="start" fill="#a300bc" font-weight="700">endogamia</text><text x="482" y="247" font-size="9.6" text-anchor="start" fill="#5c5c66">não muda alelos, so aumenta homozigotos</text><rect x="20" y="272" width="700" height="44" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="292" font-size="13" text-anchor="middle" fill="#333333" font-weight="700">p2 + 2pq + q2 = 1</text><text x="370" y="310" font-size="10.2" text-anchor="middle" fill="#5c5c66">Se uma doenca recessiva afeta 1 em 10 000, o alelo tem frequência 0,01 e cerca de 1 em 50 pessoas e portadora.</text></svg>
As frequências genotípicas em equilíbrio e os fatores que as alteram.

Em 1908, Hardy e Weinberg mostraram, independentemente, que numa população **grande**, com **acasalamentos ao acaso** e **sem** mutação, seleção ou migração:

1. as frequências alélicas **não mudam** de uma geração para outra;
2. após uma geração de acasalamento ao acaso, as frequências genotípicas atingem:

\[ f(AA) = p^2 \qquad f(Aa) = 2pq \qquad f(aa) = q^2 \]

Isso desfaz uma ideia intuitiva errada: um alelo dominante **não** tende a ficar mais comum só por ser dominante. A herança mendeliana, por si só, conserva a variabilidade.

**Utilidade prática:** se uma doença recessiva afeta 1 em cada 10 000 pessoas, \(q^2 = 10^{-4}\), logo \(q = 0{,}01\), e a frequência de portadores heterozigotos é \(2pq \approx 0{,}0198\): cerca de 1 em 50. Há muito mais portadores que afetados, o que é sempre verdade para alelos recessivos raros.

**Testando o equilíbrio:** no exemplo acima, os esperados seriam \(0{,}64\cdot500 = 320\) AA, \(0{,}32\cdot500 = 160\) Aa e \(0{,}04\cdot500 = 20\) aa: a população está exatamente em equilíbrio. Em geral, compara-se o observado com o esperado pelo teste do qui-quadrado (tema 38), com 1 grau de liberdade para dois alelos (três classes, menos uma, menos um parâmetro estimado).

## O que tira uma população do equilíbrio

As condições de Hardy-Weinberg nunca são perfeitamente cumpridas. Os desvios são as **forças evolutivas**:

| Fator | Efeito nas frequências | Efeito na variabilidade |
|---|---|---|
| Mutação | muda muito lentamente | cria variação nova |
| Seleção | muda de forma direcionada | geralmente reduz (a seleção balanceadora mantém) |
| Deriva genética | muda ao acaso | reduz; leva à fixação ou perda de alelos |
| Migração (fluxo gênico) | aproxima as populações | aumenta dentro e reduz entre populações |
| Endogamia | não muda \(p\) e \(q\) | aumenta homozigotos e reduz heterozigotos |

## Seleção

Genótipos diferentes deixam números diferentes de descendentes. A **aptidão** relativa (\(w\)) mede isso. Contra um alelo recessivo, com \(w_{aa} = 1 - s\):

\[ q' = \frac{q - s\,q^2}{1 - s\,q^2} \]

A seleção contra recessivos é **ineficiente quando o alelo é raro**, porque quase todas as cópias estão escondidas nos heterozigotos, que não são selecionados. Se \(s = 1\) (aa letal ou eliminado), \(q_t = \dfrac{q_0}{1 + t\,q_0}\): para reduzir \(q\) de 0,02 para 0,01, são necessárias 50 gerações.

**Exemplo atual:** o uso repetido de um mesmo herbicida seleciona plantas daninhas resistentes. O buva (*Conyza*) e o capim-amargoso resistentes ao glifosato se espalharam pelo Brasil exatamente assim. A resistência de bactérias a antibióticos e de insetos a inseticidas e a proteínas Bt seguem a mesma lógica. Estratégias como rotação de mecanismos de ação e **áreas de refúgio** em lavouras Bt buscam retardar o aumento da frequência dos alelos de resistência.

## Deriva genética

Em populações pequenas, as frequências flutuam ao acaso de geração em geração, como num sorteio com poucas fichas. A variância da mudança por geração é \(\dfrac{p\,q}{2N_e}\), em que \(N_e\) é o **tamanho efetivo** da população (geralmente menor que o número de indivíduos, porque nem todos se reproduzem igualmente). Ao longo do tempo, a deriva leva alelos à **fixação** (frequência 1) ou à **perda** (frequência 0), e a heterozigosidade cai:

\[ H_t = H_0\left(1 - \frac{1}{2N_e}\right)^t \]

- **Efeito fundador:** uma população iniciada por poucos indivíduos carrega só parte da variação original.
- **Gargalo:** uma redução drástica no tamanho populacional, mesmo que temporária, elimina variabilidade. O guepardo e muitas espécies ameaçadas passaram por gargalos.

## Migração e estrutura populacional

O fluxo de genes entre populações tende a igualar suas frequências. A diferenciação entre populações é medida pelo índice \(F_{ST}\), de 0 (sem diferenciação) a 1 (populações fixadas para alelos diferentes). Ele é usado para planejar a coleta de sementes de espécies nativas para restauração e para definir unidades de conservação genética.

## Endogamia

O acasalamento entre aparentados, cujo extremo é a **autofecundação**, aumenta a homozigose sem mudar as frequências alélicas. O **coeficiente de endogamia** \(F\) mede a redução de heterozigotos em relação ao esperado:

\[ f(Aa) = 2pq\,(1 - F) \]

Na autofecundação, a heterozigosidade cai pela metade a cada geração (\(F_t = 1 - (1/2)^t\)): após seis gerações, as plantas estão cerca de 98% homozigotas. Isso é a base da obtenção de **linhagens puras** no melhoramento. Em espécies normalmente de fecundação cruzada (milho, eucalipto, humanos), a endogamia expõe alelos recessivos prejudiciais e causa **depressão por endogamia**, que é revertida no cruzamento entre linhagens diferentes: o **vigor híbrido** (tema 102).

## Mutação

A taxa de mutação por gene por geração é baixa, tipicamente entre \(10^{-5}\) e \(10^{-9}\) por lócus, conforme o organismo e o tipo de mutação. Sozinha, a mutação muda as frequências muito lentamente, mas é a fonte última de toda a variação genética. Em microrganismos, com populações gigantescas e gerações curtas, mutações raras surgem constantemente: num biorreator com \(10^{12}\) bactérias, praticamente toda mutação pontual possível estará presente em algumas células. É por isso que cepas de produção podem perder características de interesse em cultivos contínuos longos (tema 54).

> **Atenção, erros comuns:**
> Achar que alelos dominantes aumentam de frequência naturalmente.
> Usar \(q = \) frequência de afetados, em vez de \(q = \sqrt{\text{frequência de aa}}\).
> Confundir endogamia (muda genótipos, não alelos) com deriva (muda alelos ao acaso).

## Para fixar

- \(p + q = 1\); em equilíbrio, \(p^2 + 2pq + q^2 = 1\).
- Mutação, seleção, deriva e migração mudam as frequências alélicas; a endogamia muda só as genotípicas.
- Alelos recessivos raros ficam escondidos nos heterozigotos e resistem à seleção.
`,
  referencias: [
    "GRIFFITHS, A. J. F. et al. **Introdução à genética**. 11. ed. Rio de Janeiro: Guanabara Koogan, 2016. Cap. 18: Genética de populações.",
    "HARTL, D. L.; CLARK, A. G. **Princípios de genética de populações**. 4. ed. Porto Alegre: Artmed, 2010.",
    "FALCONER, D. S.; MACKAY, T. F. C. **Introduction to quantitative genetics**. 4. ed. Harlow: Longman, 1996.",
    "RAMALHO, M. A. P. et al. **Genética na agropecuária**. 5. ed. Lavras: Editora UFLA, 2012.",
  ],
}
);
