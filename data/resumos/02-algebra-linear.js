/* BIONEXO — Resumos · Área 2: Geometria Analítica e Álgebra Linear (temas 6–9) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r06", num: 6,
  area: "Geometria Analítica e Álgebra Linear",
  disciplina: "Geometria Analítica e Álgebra Linear",
  titulo: "Vetores e operações vetoriais",
  descricao: "O que são vetores, como medir seu tamanho e direção, como somá-los e o que os produtos escalar e vetorial dizem sobre ângulos, áreas e forças.",
  tags: ["vetor", "módulo", "versor", "produto escalar", "produto vetorial", "projeção", "GAAL"],
  conteudo: String.raw`
## Por que precisamos de vetores

Algumas grandezas ficam totalmente descritas por um número: a massa de uma amostra (5 g), a temperatura de um cultivo (37 °C). São as **grandezas escalares**. Outras precisam de mais informação. Dizer que uma força vale 10 newtons não basta: é preciso saber **para onde** ela aponta. O mesmo vale para a velocidade de um fluido numa tubulação ou para o deslocamento de uma partícula. Essas são as **grandezas vetoriais**, descritas por três informações:

- **módulo** (o tamanho, ou intensidade);
- **direção** (a reta em que atua: horizontal, vertical, inclinada a 30°);
- **sentido** (para qual lado dessa reta: para cima ou para baixo, para a esquerda ou para a direita).

Geometricamente, um vetor é desenhado como uma seta. Setas paralelas, do mesmo tamanho e apontando para o mesmo lado representam o **mesmo** vetor, mesmo que estejam em lugares diferentes.

## Vetores em coordenadas

No espaço, um vetor é escrito pelas suas três componentes:

\[ \vec{v} = (v_1, v_2, v_3) = v_1\,\vec{i} + v_2\,\vec{j} + v_3\,\vec{k} \]

em que \(\vec{i}\), \(\vec{j}\) e \(\vec{k}\) são vetores de tamanho 1 apontando nos sentidos dos eixos \(x\), \(y\) e \(z\). O vetor que sai do ponto \(A\) e chega ao ponto \(B\) é \(\overrightarrow{AB} = B - A\): coordenadas do ponto final menos as do ponto inicial.

## Módulo, versor e paralelismo

- **Módulo** (comprimento): \(\lVert\vec{v}\rVert = \sqrt{v_1^2 + v_2^2 + v_3^2}\), uma aplicação direta do teorema de Pitágoras.
- **Versor:** é um vetor de tamanho 1 que aponta para o mesmo lado de \(\vec{v}\). Obtém-se dividindo o vetor pelo seu módulo: \(\hat{v} = \dfrac{\vec{v}}{\lVert\vec{v}\rVert}\). Serve para indicar só a direção e o sentido.
- Dois vetores são **paralelos** quando um é múltiplo do outro, \(\vec{u} = k\,\vec{v}\). Se \(k\) for negativo, eles apontam para lados opostos.

## Somando vetores e multiplicando por um número

<svg viewBox="0 0 740 290" xmlns="http://www.w3.org/2000/svg" role="img"><title>Vetores</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Somar vetores e seguir um caminho; os produtos dizem coisas diferentes</text><rect x="30" y="52" width="220" height="180" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="140" y="74" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">soma: metodo do poligono</text><line x1="62" y1="196" x2="142" y2="156" stroke="#0083cb" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="142" y1="156" x2="220" y2="124" stroke="#a300bc" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-rx)"/><line x1="62" y1="196" x2="220" y2="124" stroke="#f40086" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="6 4" marker-end="url(#a-rs)"/><text x="98" y="168" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">u</text><text x="184" y="128" font-size="12" text-anchor="middle" fill="#a300bc" font-weight="700">v</text><text x="130" y="186" font-size="12" text-anchor="middle" fill="#f40086" font-weight="700">u + v</text><text x="140" y="216" font-size="9.6" text-anchor="middle" fill="#5c5c66">ponta de um na origem do outro</text><rect x="266" y="52" width="220" height="180" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="376" y="74" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">produto escalar</text><line x1="306" y1="172" x2="436" y2="172" stroke="#0083cb" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="306" y1="172" x2="400" y2="108" stroke="#a300bc" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-rx)"/><line x1="400" y1="108" x2="400" y2="172" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><path d="M330,172 A24,24 0 0 0 322,156" fill="none" stroke="#333333" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><text x="340" y="160" font-size="9.4" text-anchor="start" fill="#5c5c66">angulo</text><text x="376" y="198" font-size="9.6" text-anchor="middle" fill="#333333">da um numero: u . v = |u||v| cos</text><text x="376" y="214" font-size="9.6" text-anchor="middle" fill="#5c5c66">zero quando são perpendiculares</text><rect x="502" y="52" width="208" height="180" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="606" y="74" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">produto vetorial</text><line x1="560" y1="176" x2="668" y2="176" stroke="#0083cb" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="560" y1="176" x2="620" y2="142" stroke="#a300bc" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-rx)"/><line x1="560" y1="176" x2="560" y2="104" stroke="#0a8f5e" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="560" y="96" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">u x v</text><text x="606" y="198" font-size="9.6" text-anchor="middle" fill="#333333">da um vetor perpendicular aos dois</text><text x="606" y="214" font-size="9.6" text-anchor="middle" fill="#5c5c66">e o modulo e a área do paralelogramo</text><text x="20" y="262" font-size="11" text-anchor="start" fill="#5c5c66">O produto escalar aparece no trabalho de uma força; o vetorial, no torque e na força magnética.</text><text x="20" y="280" font-size="11" text-anchor="start" fill="#5c5c66">Decompor em componentes transforma um problema vetorial em contas separadas por eixo.</text></svg>
A soma segue um caminho; os dois produtos respondem perguntas diferentes.

A soma é feita componente a componente: \(\vec{u} + \vec{v} = (u_1 + v_1,\ u_2 + v_2,\ u_3 + v_3)\). No desenho, coloca-se o início de uma seta na ponta da outra (ou usa-se a **regra do paralelogramo**). Na física, é assim que se calcula a **força resultante** quando várias forças atuam sobre um corpo (tema 22).

Multiplicar um vetor por um número \(k\) multiplica o seu tamanho por \(\lvert k\rvert\) e, se \(k\) for negativo, inverte o sentido.

## Produto escalar: o quanto dois vetores apontam para o mesmo lado

\[ \vec{u}\cdot\vec{v} = u_1 v_1 + u_2 v_2 + u_3 v_3 = \lVert\vec{u}\rVert\,\lVert\vec{v}\rVert\cos\theta \]

O resultado é um **número**, e não um vetor. Ele é grande quando os vetores apontam quase para o mesmo lado, zero quando são perpendiculares e negativo quando apontam para lados opostos. Daí saem várias aplicações:

- **Ângulo entre vetores:** \(\cos\theta = \dfrac{\vec{u}\cdot\vec{v}}{\lVert\vec{u}\rVert\,\lVert\vec{v}\rVert}\).
- **Perpendicularidade:** dois vetores são perpendiculares (ortogonais) quando \(\vec{u}\cdot\vec{v} = 0\).
- **Projeção:** a "sombra" de \(\vec{u}\) sobre a direção de \(\vec{v}\) é \(\mathrm{proj}_{\vec{v}}\,\vec{u} = \dfrac{\vec{u}\cdot\vec{v}}{\lVert\vec{v}\rVert^2}\,\vec{v}\).
- **Trabalho de uma força:** \(W = \vec{F}\cdot\vec{d}\). Só a parte da força na direção do movimento realiza trabalho (tema 23). Puxar uma caixa por uma corda inclinada gasta parte do esforço "para cima", sem ajudar a caixa a andar.

## Produto vetorial: um vetor perpendicular aos outros dois

Definido para vetores no espaço, o produto vetorial resulta num **vetor**:

\[ \vec{u}\times\vec{v} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \end{vmatrix} \]

Suas propriedades:

- É **perpendicular** a \(\vec{u}\) e a \(\vec{v}\) ao mesmo tempo. O sentido é dado pela **regra da mão direita**: dobrando os dedos de \(\vec{u}\) para \(\vec{v}\), o polegar aponta o sentido de \(\vec{u}\times\vec{v}\).
- Seu módulo, \(\lVert\vec{u}\times\vec{v}\rVert = \lVert\vec{u}\rVert\,\lVert\vec{v}\rVert\sin\theta\), é igual à **área do paralelogramo** formado pelos dois vetores. A área do triângulo é a metade.
- A ordem importa: \(\vec{v}\times\vec{u} = -\,\vec{u}\times\vec{v}\). E o resultado é o vetor nulo quando os vetores são paralelos.
- Na física, o **torque** (o "efeito de giro" de uma força, como ao apertar um parafuso com uma chave) é \(\vec{\tau} = \vec{r}\times\vec{F}\).

O **produto misto** \(\vec{u}\cdot(\vec{v}\times\vec{w})\) dá, em valor absoluto, o volume da caixa inclinada (paralelepípedo) formada pelos três vetores. Se der zero, os três vetores estão no mesmo plano.

## Exemplo resolvido

Sejam \(\vec{u} = (1, 2, 2)\) e \(\vec{v} = (2, 0, 1)\).

**Módulos:** \(\lVert\vec{u}\rVert = \sqrt{1 + 4 + 4} = 3\) e \(\lVert\vec{v}\rVert = \sqrt{4 + 0 + 1} = \sqrt{5}\).

**Ângulo entre eles:** \(\vec{u}\cdot\vec{v} = 1\cdot2 + 2\cdot0 + 2\cdot1 = 4\). Então \(\cos\theta = \dfrac{4}{3\sqrt5} \approx 0{,}596\) e \(\theta \approx 53{,}4^\circ\).

**Produto vetorial:** desenvolvendo o determinante,

\[ \vec{u}\times\vec{v} = \vec{i}\,(2\cdot 1 - 2\cdot 0) - \vec{j}\,(1\cdot 1 - 2\cdot 2) + \vec{k}\,(1\cdot 0 - 2\cdot 2) = (2,\ 3,\ -4) \]

**Conferência:** o resultado precisa ser perpendicular aos dois vetores, isto é, ter produto escalar zero com cada um. De fato, \((2,3,-4)\cdot(1,2,2) = 2 + 6 - 8 = 0\) e \((2,3,-4)\cdot(2,0,1) = 4 + 0 - 4 = 0\). A área do paralelogramo formado por \(\vec{u}\) e \(\vec{v}\) é \(\sqrt{4 + 9 + 16} = \sqrt{29} \approx 5{,}39\).

> **Atenção, erros comuns:**
> O produto escalar dá um **número**; o produto vetorial dá um **vetor**. Não confunda os dois.
> No determinante do produto vetorial, o termo em \(\vec{j}\) leva **sinal negativo**.
> \(\vec{u}\times\vec{v}\) e \(\vec{v}\times\vec{u}\) têm sentidos opostos: a ordem importa.

## Para fixar

- Vetor = módulo + direção + sentido; \(\overrightarrow{AB} = B - A\).
- O produto escalar mede o alinhamento: ângulo, perpendicularidade, projeção e trabalho.
- O produto vetorial gera um vetor perpendicular, cujo módulo é uma área; serve para torque e para encontrar a normal de planos (tema 9).
`,
  referencias: [
    "STEINBRUCH, A.; WINTERLE, P. **Geometria analítica**. 2. ed. São Paulo: Pearson Makron Books, 1987. Cap. 1 a 3.",
    "WINTERLE, P. **Vetores e geometria analítica**. 2. ed. São Paulo: Pearson, 2014.",
    "CAMARGO, I.; BOULOS, P. **Geometria analítica**: um tratamento vetorial. 3. ed. São Paulo: Prentice Hall, 2005.",
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 1: Mecânica. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 3: Vetores.",
  ],
},
{
  id: "r07", num: 7,
  area: "Geometria Analítica e Álgebra Linear",
  disciplina: "Geometria Analítica e Álgebra Linear",
  titulo: "Matrizes e determinantes",
  descricao: "Como operar com matrizes, como calcular e usar determinantes, quando uma matriz tem inversa e onde tudo isso aparece em sistemas lineares e no estudo do metabolismo.",
  tags: ["matriz", "determinante", "inversa", "Sarrus", "Laplace", "cofator", "Cramer", "GAAL"],
  conteudo: String.raw`
## O que é uma matriz e para que serve

Uma **matriz** é uma tabela de números organizada em linhas e colunas. Uma matriz \(A_{m\times n}\) tem \(m\) linhas e \(n\) colunas, e o elemento da linha \(i\) e da coluna \(j\) é escrito \(a_{ij}\). Matrizes são a forma natural de organizar dados e equações com muitas variáveis. Em biotecnologia, por exemplo, as reações do metabolismo de uma célula são guardadas numa matriz, e programas de computador usam essa matriz para prever quanto de um produto a célula consegue fabricar.

Alguns tipos aparecem com frequência:

- **Quadrada:** mesmo número de linhas e colunas. Os elementos \(a_{11}, a_{22}, \dots\) formam a **diagonal principal**.
- **Identidade** \(I_n\): quadrada, com 1 na diagonal e 0 no resto. Funciona como o número 1 na multiplicação de matrizes.
- **Triangular:** só tem zeros abaixo (ou acima) da diagonal principal.
- **Transposta** \(A^T\): troca as linhas pelas colunas. Se \(A^T = A\), a matriz é **simétrica**.

## Operações com matrizes

<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" role="img"><title>Matrizes</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Multiplicacao de matrizes: linha por coluna</text><rect x="60" y="70" width="42" height="34" rx="0" fill="#0083cb22" stroke="#0083cb" stroke-width="1.2"/><text x="81" y="92" font-size="12" text-anchor="middle" fill="#333333">2</text><rect x="102" y="70" width="42" height="34" rx="0" fill="#0083cb22" stroke="#0083cb" stroke-width="1.2"/><text x="123" y="92" font-size="12" text-anchor="middle" fill="#333333">1</text><rect x="60" y="104" width="42" height="34" rx="0" fill="#fff" stroke="#0083cb" stroke-width="1.2"/><text x="81" y="126" font-size="12" text-anchor="middle" fill="#333333">0</text><rect x="102" y="104" width="42" height="34" rx="0" fill="#fff" stroke="#0083cb" stroke-width="1.2"/><text x="123" y="126" font-size="12" text-anchor="middle" fill="#333333">3</text><text x="102" y="60" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">A</text><text x="168" y="108" font-size="14" text-anchor="middle" fill="#333333">x</text><rect x="190" y="70" width="42" height="34" rx="0" fill="#a300bc22" stroke="#a300bc" stroke-width="1.2"/><text x="211" y="92" font-size="12" text-anchor="middle" fill="#333333">1</text><rect x="232" y="70" width="42" height="34" rx="0" fill="#fff" stroke="#a300bc" stroke-width="1.2"/><text x="253" y="92" font-size="12" text-anchor="middle" fill="#333333">4</text><rect x="190" y="104" width="42" height="34" rx="0" fill="#a300bc22" stroke="#a300bc" stroke-width="1.2"/><text x="211" y="126" font-size="12" text-anchor="middle" fill="#333333">5</text><rect x="232" y="104" width="42" height="34" rx="0" fill="#fff" stroke="#a300bc" stroke-width="1.2"/><text x="253" y="126" font-size="12" text-anchor="middle" fill="#333333">2</text><text x="232" y="60" font-size="12" text-anchor="middle" fill="#a300bc" font-weight="700">B</text><text x="298" y="108" font-size="14" text-anchor="middle" fill="#333333">=</text><rect x="320" y="70" width="42" height="34" rx="0" fill="#fff" stroke="#0a8f5e" stroke-width="1.2"/><text x="341" y="92" font-size="12" text-anchor="middle" fill="#333333">7</text><rect x="362" y="70" width="42" height="34" rx="0" fill="#fff" stroke="#0a8f5e" stroke-width="1.2"/><text x="383" y="92" font-size="12" text-anchor="middle" fill="#333333">10</text><rect x="320" y="104" width="42" height="34" rx="0" fill="#fff" stroke="#0a8f5e" stroke-width="1.2"/><text x="341" y="126" font-size="12" text-anchor="middle" fill="#333333">15</text><rect x="362" y="104" width="42" height="34" rx="0" fill="#fff" stroke="#0a8f5e" stroke-width="1.2"/><text x="383" y="126" font-size="12" text-anchor="middle" fill="#333333">6</text><text x="362" y="60" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="700">AB</text><text x="60" y="164" font-size="11" text-anchor="start" fill="#333333">o elemento da linha 1, coluna 1: (2)(1) + (1)(5) = 7</text><rect x="440" y="62" width="280" height="120" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="580" y="84" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">o que a matriz representa</text><text x="580" y="106" font-size="10" text-anchor="middle" fill="#5c5c66">uma tabela de coeficientes de um sistema,</text><text x="580" y="120" font-size="10" text-anchor="middle" fill="#5c5c66">uma transformação do espaço,</text><text x="580" y="134" font-size="10" text-anchor="middle" fill="#5c5c66">ou os balancos de um processo.</text><text x="580" y="160" font-size="11" text-anchor="middle" fill="#d33a4e" font-weight="700">AB não e o mesmo que BA</text><text x="20" y="206" font-size="11" text-anchor="start" fill="#5c5c66">O determinante diz se a matriz e inversivel: se for zero, o sistema não tem solução única.</text><text x="20" y="224" font-size="10.8" text-anchor="start" fill="#5c5c66">Em bioprocessos, sistemas lineares aparecem em balancos de massa com varias correntes e em redes metabolicas.</text></svg>
Cada elemento do produto vem de uma linha e de uma coluna.

- **Soma:** só entre matrizes do mesmo tamanho; soma-se elemento com elemento.
- **Multiplicação por um número:** multiplica-se cada elemento por esse número.
- **Produto de matrizes \(AB\):** só existe se o número de **colunas de \(A\)** for igual ao número de **linhas de \(B\)**. Cada elemento do resultado é obtido multiplicando uma linha de \(A\) por uma coluna de \(B\), termo a termo, e somando:

\[ (AB)_{ij} = \sum_{k=1}^{n} a_{ik}\,b_{kj} \]

Duas diferenças importantes em relação aos números comuns: em geral, \(AB \ne BA\) (a ordem importa), e \(AB = 0\) pode acontecer sem que \(A\) ou \(B\) sejam nulas.

## Determinante

O **determinante** é um número calculado a partir de uma matriz **quadrada**. Ele resume uma informação essencial: se \(\det A \ne 0\), a matriz é "inversível", e o sistema de equações associado a ela tem uma única solução.

- Para matrizes 2×2: \(\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc\).
- Para matrizes 3×3: usa-se a **regra de Sarrus**. Repetem-se as duas primeiras colunas ao lado da matriz, somam-se os produtos das três diagonais que descem e subtraem-se os produtos das três diagonais que sobem.
- Para qualquer tamanho: usa-se a **expansão de Laplace** (por cofatores), que reduz o determinante a outros menores. Escolha a linha ou coluna com mais zeros, para ter menos contas:

\[ \det A = \sum_{j=1}^{n} a_{ij}\,C_{ij}, \qquad C_{ij} = (-1)^{i+j}\,M_{ij} \]

em que \(M_{ij}\) é o determinante da matriz que sobra quando se apagam a linha \(i\) e a coluna \(j\).

### Propriedades que poupam contas

| Situação | Efeito no determinante |
|---|---|
| Trocar duas linhas de lugar | o sinal muda |
| Multiplicar uma linha por \(k\) | o determinante fica multiplicado por \(k\) |
| Somar a uma linha um múltiplo de outra | **não muda nada** |
| Uma linha toda de zeros, ou duas linhas proporcionais | o determinante é zero |
| Matriz triangular | o determinante é o produto da diagonal principal |
| \(\det(A^T)\), \(\det(AB)\), \(\det(kA_{n\times n})\) | \(\det A\); \(\det A\cdot\det B\); \(k^n\det A\) |

Geometricamente, o valor absoluto do determinante é a área (em 2D) ou o volume (em 3D) da figura formada pelas linhas da matriz. Determinante zero significa que a figura "achatou": as linhas estão alinhadas.

## Matriz inversa

A inversa \(A^{-1}\) é a matriz que, multiplicada por \(A\), dá a identidade: \(A\,A^{-1} = A^{-1}A = I\). Ela **só existe quando \(\det A \ne 0\)**. Para matrizes 2×2 há uma fórmula pronta:

\[ \begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix} \]

Para matrizes maiores, \(A^{-1} = \dfrac{1}{\det A}\,\mathrm{adj}(A)\), em que \(\mathrm{adj}(A)\) (a adjunta) é a transposta da matriz dos cofatores. Na prática, porém, o caminho mais eficiente é o método de Gauss-Jordan (tema 8).

## Exemplo resolvido

Seja \(A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}\). Expandindo pela primeira linha:

\[ \det A = 1\,(1\cdot 0 - 4\cdot 6) - 2\,(0\cdot 0 - 4\cdot 5) + 3\,(0\cdot 6 - 1\cdot 5) = -24 + 40 - 15 = 1 \]

Como o determinante é 1 (diferente de zero), a matriz tem inversa. Calculando os cofatores e transpondo, obtém-se:

\[ A^{-1} = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix} \]

Para conferir, multiplique a primeira linha de \(A\) pela primeira coluna de \(A^{-1}\): \(1(-24) + 2(20) + 3(-5) = 1\), exatamente o primeiro elemento da identidade. ✓

## Onde isso aparece

**Sistemas de equações:** um sistema \(A\vec{x} = \vec{b}\), com \(A\) quadrada e \(\det A \ne 0\), tem solução única \(\vec{x} = A^{-1}\vec{b}\). Para sistemas pequenos, a **regra de Cramer** dá cada incógnita como uma razão de determinantes: \(x_i = \det A_i / \det A\), em que \(A_i\) é a matriz \(A\) com a coluna \(i\) trocada por \(\vec{b}\).

**Metabolismo celular:** as reações de uma célula podem ser escritas numa **matriz estequiométrica**, em que cada linha é uma substância (metabólito) e cada coluna é uma reação. Quando a célula está em equilíbrio, as velocidades das reações \(\vec{v}\) obedecem a \(S\,\vec{v} = \vec{0}\): tudo o que é produzido de cada substância é consumido. Essa equação é a base da **análise de balanço de fluxos**, usada para planejar linhagens de microrganismos que produzam mais de um composto de interesse.

> **Atenção, erros comuns:**
> Multiplicar matrizes elemento por elemento: o produto é **linha por coluna**.
> Supor que \(AB = BA\).
> \(\det(A + B)\) **não é** \(\det A + \det B\), e \(\det(kA) = k^n\det A\), não \(k\det A\).

## Para fixar

- Produto de matrizes: linha por coluna, com tamanhos compatíveis, e a ordem importa.
- Use as propriedades do determinante e as linhas com zeros para economizar contas.
- A inversa existe somente quando o determinante é diferente de zero.
`,
  referencias: [
    "BOLDRINI, J. L. et al. **Álgebra linear**. 3. ed. São Paulo: Harbra, 1986. Cap. 1 a 3.",
    "ANTON, H.; RORRES, C. **Álgebra linear com aplicações**. 10. ed. Porto Alegre: Bookman, 2012. Cap. 1 e 2.",
    "LAY, D. C. **Álgebra linear e suas aplicações**. 4. ed. Rio de Janeiro: LTC, 2013.",
    "ORTH, J. D.; THIELE, I.; PALSSON, B. Ø. What is flux balance analysis? **Nature Biotechnology**, v. 28, n. 3, p. 245-248, 2010.",
  ],
},
{
  id: "r08", num: 8,
  area: "Geometria Analítica e Álgebra Linear",
  disciplina: "Geometria Analítica e Álgebra Linear",
  titulo: "Sistemas de equações lineares",
  descricao: "Como escrever um sistema em forma de matriz, como resolvê-lo por escalonamento (Gauss e Gauss-Jordan) e como saber se ele tem uma, infinitas ou nenhuma solução.",
  tags: ["sistema linear", "Gauss", "Gauss-Jordan", "escalonamento", "posto", "SPD", "SPI", "GAAL"],
  conteudo: String.raw`
## Onde aparecem os sistemas lineares

Sempre que várias quantidades desconhecidas precisam satisfazer várias condições ao mesmo tempo, surge um sistema de equações. Quanto de cada solução-estoque misturar para obter um meio de cultura com as concentrações certas de três nutrientes? Quanto sai em cada corrente de uma etapa de separação, conhecendo as composições? Esses problemas, muito comuns em bioprocessos, viram sistemas lineares.

## Escrevendo o sistema como matriz

Um sistema de \(m\) equações com \(n\) incógnitas pode ser escrito na forma compacta \(A\vec{x} = \vec{b}\), em que \(A\) é a **matriz dos coeficientes** (os números que multiplicam as incógnitas). Para resolver, trabalha-se com a **matriz aumentada** \([A \mid \vec{b}]\), que junta os coeficientes e os termos independentes numa só tabela.

## As operações permitidas

Três operações transformam o sistema num outro mais simples, **sem mudar a solução**:

1. Trocar duas linhas de lugar: \(L_i \leftrightarrow L_j\).
2. Multiplicar uma linha por um número diferente de zero: \(L_i \leftarrow k\,L_i\).
3. Somar a uma linha um múltiplo de outra: \(L_i \leftarrow L_i + k\,L_j\).

## Os métodos de Gauss e de Gauss-Jordan

- **Método de Gauss (escalonamento):** usa as operações acima para zerar tudo o que está abaixo de cada **pivô** (o primeiro número diferente de zero de cada linha). A matriz fica "em escada". Depois, resolve-se de baixo para cima: a última equação tem uma incógnita só; com ela, resolve-se a penúltima, e assim por diante (**retrossubstituição**).
- **Método de Gauss-Jordan:** vai além e zera também o que está acima de cada pivô, deixando os pivôs iguais a 1. A solução aparece pronta na última coluna. Aplicado à matriz \([A \mid I]\), ele transforma o lado esquerdo na identidade e o lado direito na inversa: \([I \mid A^{-1}]\).

Se um pivô for zero, troque de linha. Nos programas de computador, escolhe-se como pivô o maior número (em valor absoluto) da coluna, o que reduz os erros de arredondamento (pivoteamento parcial).

## Quantas soluções o sistema tem?

<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Sistemas lineares</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Tres situacoes possíveis num sistema linear</text><rect x="34" y="58" width="188" height="150" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="65.3333" y1="58" x2="65.3333" y2="208" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="128" y1="58" x2="128" y2="208" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="190.667" y1="58" x2="190.667" y2="208" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="34" y1="183" x2="222" y2="183" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="34" y1="133" x2="222" y2="133" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="34" y1="83" x2="222" y2="83" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="128" y1="58" x2="128" y2="208" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="34" y1="133" x2="222" y2="133" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="65.3333" y="223" font-size="10.5" text-anchor="middle" fill="#8a8a93">-2</text><text x="190.667" y="223" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="28" y="186.5" font-size="10.5" text-anchor="end" fill="#8a8a93">-2</text><text x="28" y="86.5" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="226" y="212" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">x</text><text x="30" y="52" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">y</text><path d="M34.0,178.0L34.9,177.5L35.7,176.9L36.6,176.4L37.4,175.8L38.3,175.3L39.1,174.7L40.0,174.2L40.8,173.6L41.7,173.1L42.5,172.5L43.4,172.0L44.3,171.5L45.1,170.9L46.0,170.4L46.8,169.8L47.7,169.3L48.5,168.7L49.4,168.2L50.2,167.6L51.1,167.1L51.9,166.5L52.8,166.0L53.7,165.5L54.5,164.9L55.4,164.4L56.2,163.8L57.1,163.3L57.9,162.7L58.8,162.2L59.6,161.6L60.5,161.1L61.3,160.5L62.2,160.0L63.1,159.5L63.9,158.9L64.8,158.4L65.6,157.8L66.5,157.3L67.3,156.7L68.2,156.2L69.0,155.6L69.9,155.1L70.7,154.5L71.6,154.0L72.5,153.5L73.3,152.9L74.2,152.4L75.0,151.8L75.9,151.3L76.7,150.7L77.6,150.2L78.4,149.6L79.3,149.1L80.1,148.5L81.0,148.0L81.9,147.5L82.7,146.9L83.6,146.4L84.4,145.8L85.3,145.3L86.1,144.7L87.0,144.2L87.8,143.6L88.7,143.1L89.5,142.5L90.4,142.0L91.3,141.5L92.1,140.9L93.0,140.4L93.8,139.8L94.7,139.3L95.5,138.7L96.4,138.2L97.2,137.6L98.1,137.1L98.9,136.5L99.8,136.0L100.7,135.5L101.5,134.9L102.4,134.4L103.2,133.8L104.1,133.3L104.9,132.7L105.8,132.2L106.6,131.6L107.5,131.1L108.3,130.5L109.2,130.0L110.1,129.5L110.9,128.9L111.8,128.4L112.6,127.8L113.5,127.3L114.3,126.7L115.2,126.2L116.0,125.6L116.9,125.1L117.7,124.5L118.6,124.0L119.5,123.5L120.3,122.9L121.2,122.4L122.0,121.8L122.9,121.3L123.7,120.7L124.6,120.2L125.4,119.6L126.3,119.1L127.1,118.5L128.0,118.0L128.9,117.5L129.7,116.9L130.6,116.4L131.4,115.8L132.3,115.3L133.1,114.7L134.0,114.2L134.8,113.6L135.7,113.1L136.5,112.5L137.4,112.0L138.3,111.5L139.1,110.9L140.0,110.4L140.8,109.8L141.7,109.3L142.5,108.7L143.4,108.2L144.2,107.6L145.1,107.1L145.9,106.5L146.8,106.0L147.7,105.5L148.5,104.9L149.4,104.4L150.2,103.8L151.1,103.3L151.9,102.7L152.8,102.2L153.6,101.6L154.5,101.1L155.3,100.5L156.2,100.0L157.1,99.5L157.9,98.9L158.8,98.4L159.6,97.8L160.5,97.3L161.3,96.7L162.2,96.2L163.0,95.6L163.9,95.1L164.7,94.5L165.6,94.0L166.5,93.5L167.3,92.9L168.2,92.4L169.0,91.8L169.9,91.3L170.7,90.7L171.6,90.2L172.4,89.6L173.3,89.1L174.1,88.5L175.0,88.0L175.9,87.5L176.7,86.9L177.6,86.4L178.4,85.8L179.3,85.3L180.1,84.7L181.0,84.2L181.8,83.6L182.7,83.1L183.5,82.5L184.4,82.0L185.3,81.5L186.1,80.9L187.0,80.4L187.8,79.8L188.7,79.3L189.5,78.7L190.4,78.2L191.2,77.6L192.1,77.1L192.9,76.5L193.8,76.0L194.7,75.5L195.5,74.9L196.4,74.4L197.2,73.8L198.1,73.3L198.9,72.7L199.8,72.2L200.6,71.6L201.5,71.1L202.3,70.5L203.2,70.0L204.1,69.5L204.9,68.9L205.8,68.4L206.6,67.8L207.5,67.3L208.3,66.7L209.2,66.2L210.0,65.6L210.9,65.1L211.7,64.5L212.6,64.0L213.5,63.5L214.3,62.9L215.2,62.4L216.0,61.8L216.9,61.3L217.7,60.7L218.6,60.2L219.4,59.6L220.3,59.1L221.1,58.5" fill="none" stroke="#0083cb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M40.0,58.7L40.8,59.5L41.7,60.4L42.5,61.2L43.4,62.0L44.3,62.8L45.1,63.6L46.0,64.5L46.8,65.3L47.7,66.1L48.5,66.9L49.4,67.7L50.2,68.5L51.1,69.4L51.9,70.2L52.8,71.0L53.7,71.8L54.5,72.6L55.4,73.5L56.2,74.3L57.1,75.1L57.9,75.9L58.8,76.7L59.6,77.5L60.5,78.4L61.3,79.2L62.2,80.0L63.1,80.8L63.9,81.6L64.8,82.5L65.6,83.3L66.5,84.1L67.3,84.9L68.2,85.7L69.0,86.5L69.9,87.4L70.7,88.2L71.6,89.0L72.5,89.8L73.3,90.6L74.2,91.5L75.0,92.3L75.9,93.1L76.7,93.9L77.6,94.7L78.4,95.5L79.3,96.4L80.1,97.2L81.0,98.0L81.9,98.8L82.7,99.6L83.6,100.5L84.4,101.3L85.3,102.1L86.1,102.9L87.0,103.7L87.8,104.5L88.7,105.4L89.5,106.2L90.4,107.0L91.3,107.8L92.1,108.6L93.0,109.5L93.8,110.3L94.7,111.1L95.5,111.9L96.4,112.7L97.2,113.5L98.1,114.4L98.9,115.2L99.8,116.0L100.7,116.8L101.5,117.6L102.4,118.5L103.2,119.3L104.1,120.1L104.9,120.9L105.8,121.7L106.6,122.5L107.5,123.4L108.3,124.2L109.2,125.0L110.1,125.8L110.9,126.6L111.8,127.5L112.6,128.3L113.5,129.1L114.3,129.9L115.2,130.7L116.0,131.5L116.9,132.4L117.7,133.2L118.6,134.0L119.5,134.8L120.3,135.6L121.2,136.5L122.0,137.3L122.9,138.1L123.7,138.9L124.6,139.7L125.4,140.5L126.3,141.4L127.1,142.2L128.0,143.0L128.9,143.8L129.7,144.6L130.6,145.5L131.4,146.3L132.3,147.1L133.1,147.9L134.0,148.7L134.8,149.5L135.7,150.4L136.5,151.2L137.4,152.0L138.3,152.8L139.1,153.6L140.0,154.5L140.8,155.3L141.7,156.1L142.5,156.9L143.4,157.7L144.2,158.5L145.1,159.4L145.9,160.2L146.8,161.0L147.7,161.8L148.5,162.6L149.4,163.5L150.2,164.3L151.1,165.1L151.9,165.9L152.8,166.7L153.6,167.5L154.5,168.4L155.3,169.2L156.2,170.0L157.1,170.8L157.9,171.6L158.8,172.5L159.6,173.3L160.5,174.1L161.3,174.9L162.2,175.7L163.0,176.5L163.9,177.4L164.7,178.2L165.6,179.0L166.5,179.8L167.3,180.6L168.2,181.5L169.0,182.3L169.9,183.1L170.7,183.9L171.6,184.7L172.4,185.5L173.3,186.4L174.1,187.2L175.0,188.0L175.9,188.8L176.7,189.6L177.6,190.5L178.4,191.3L179.3,192.1L180.1,192.9L181.0,193.7L181.8,194.5L182.7,195.4L183.5,196.2L184.4,197.0L185.3,197.8L186.1,198.6L187.0,199.5L187.8,200.3L188.7,201.1L189.5,201.9L190.4,202.7L191.2,203.5L192.1,204.4L192.9,205.2L193.8,206.0L194.7,206.8L195.5,207.6" fill="none" stroke="#a300bc" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="112.333" cy="128" r="5" fill="#0a8f5e" stroke="#fff" stroke-width="1.6"/><text x="128" y="234" font-size="11.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">solução única</text><text x="128" y="250" font-size="9.8" text-anchor="middle" fill="#5c5c66">as retas se cruzam num ponto</text><rect x="262" y="58" width="188" height="150" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="293.333" y1="58" x2="293.333" y2="208" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="356" y1="58" x2="356" y2="208" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="418.667" y1="58" x2="418.667" y2="208" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="262" y1="183" x2="450" y2="183" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="262" y1="133" x2="450" y2="133" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="262" y1="83" x2="450" y2="83" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="356" y1="58" x2="356" y2="208" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="262" y1="133" x2="450" y2="133" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="293.333" y="223" font-size="10.5" text-anchor="middle" fill="#8a8a93">-2</text><text x="418.667" y="223" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="256" y="186.5" font-size="10.5" text-anchor="end" fill="#8a8a93">-2</text><text x="256" y="86.5" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="454" y="212" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">x</text><text x="258" y="52" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">y</text><path d="M262.0,178.0L262.9,177.5L263.7,176.9L264.6,176.4L265.4,175.8L266.3,175.3L267.1,174.7L268.0,174.2L268.8,173.6L269.7,173.1L270.5,172.5L271.4,172.0L272.3,171.5L273.1,170.9L274.0,170.4L274.8,169.8L275.7,169.3L276.5,168.7L277.4,168.2L278.2,167.6L279.1,167.1L279.9,166.5L280.8,166.0L281.7,165.5L282.5,164.9L283.4,164.4L284.2,163.8L285.1,163.3L285.9,162.7L286.8,162.2L287.6,161.6L288.5,161.1L289.3,160.5L290.2,160.0L291.1,159.5L291.9,158.9L292.8,158.4L293.6,157.8L294.5,157.3L295.3,156.7L296.2,156.2L297.0,155.6L297.9,155.1L298.7,154.5L299.6,154.0L300.5,153.5L301.3,152.9L302.2,152.4L303.0,151.8L303.9,151.3L304.7,150.7L305.6,150.2L306.4,149.6L307.3,149.1L308.1,148.5L309.0,148.0L309.9,147.5L310.7,146.9L311.6,146.4L312.4,145.8L313.3,145.3L314.1,144.7L315.0,144.2L315.8,143.6L316.7,143.1L317.5,142.5L318.4,142.0L319.3,141.5L320.1,140.9L321.0,140.4L321.8,139.8L322.7,139.3L323.5,138.7L324.4,138.2L325.2,137.6L326.1,137.1L326.9,136.5L327.8,136.0L328.7,135.5L329.5,134.9L330.4,134.4L331.2,133.8L332.1,133.3L332.9,132.7L333.8,132.2L334.6,131.6L335.5,131.1L336.3,130.5L337.2,130.0L338.1,129.5L338.9,128.9L339.8,128.4L340.6,127.8L341.5,127.3L342.3,126.7L343.2,126.2L344.0,125.6L344.9,125.1L345.7,124.5L346.6,124.0L347.5,123.5L348.3,122.9L349.2,122.4L350.0,121.8L350.9,121.3L351.7,120.7L352.6,120.2L353.4,119.6L354.3,119.1L355.1,118.5L356.0,118.0L356.9,117.5L357.7,116.9L358.6,116.4L359.4,115.8L360.3,115.3L361.1,114.7L362.0,114.2L362.8,113.6L363.7,113.1L364.5,112.5L365.4,112.0L366.3,111.5L367.1,110.9L368.0,110.4L368.8,109.8L369.7,109.3L370.5,108.7L371.4,108.2L372.2,107.6L373.1,107.1L373.9,106.5L374.8,106.0L375.7,105.5L376.5,104.9L377.4,104.4L378.2,103.8L379.1,103.3L379.9,102.7L380.8,102.2L381.6,101.6L382.5,101.1L383.3,100.5L384.2,100.0L385.1,99.5L385.9,98.9L386.8,98.4L387.6,97.8L388.5,97.3L389.3,96.7L390.2,96.2L391.0,95.6L391.9,95.1L392.7,94.5L393.6,94.0L394.5,93.5L395.3,92.9L396.2,92.4L397.0,91.8L397.9,91.3L398.7,90.7L399.6,90.2L400.4,89.6L401.3,89.1L402.1,88.5L403.0,88.0L403.9,87.5L404.7,86.9L405.6,86.4L406.4,85.8L407.3,85.3L408.1,84.7L409.0,84.2L409.8,83.6L410.7,83.1L411.5,82.5L412.4,82.0L413.3,81.5L414.1,80.9L415.0,80.4L415.8,79.8L416.7,79.3L417.5,78.7L418.4,78.2L419.2,77.6L420.1,77.1L420.9,76.5L421.8,76.0L422.7,75.5L423.5,74.9L424.4,74.4L425.2,73.8L426.1,73.3L426.9,72.7L427.8,72.2L428.6,71.6L429.5,71.1L430.3,70.5L431.2,70.0L432.1,69.5L432.9,68.9L433.8,68.4L434.6,67.8L435.5,67.3L436.3,66.7L437.2,66.2L438.0,65.6L438.9,65.1L439.7,64.5L440.6,64.0L441.5,63.5L442.3,62.9L443.2,62.4L444.0,61.8L444.9,61.3L445.7,60.7L446.6,60.2L447.4,59.6L448.3,59.1L449.1,58.5" fill="none" stroke="#0083cb" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M262.0,178.0L262.9,177.5L263.7,176.9L264.6,176.4L265.4,175.8L266.3,175.3L267.1,174.7L268.0,174.2L268.8,173.6L269.7,173.1L270.5,172.5L271.4,172.0L272.3,171.5L273.1,170.9L274.0,170.4L274.8,169.8L275.7,169.3L276.5,168.7L277.4,168.2L278.2,167.6L279.1,167.1L279.9,166.5L280.8,166.0L281.7,165.5L282.5,164.9L283.4,164.4L284.2,163.8L285.1,163.3L285.9,162.7L286.8,162.2L287.6,161.6L288.5,161.1L289.3,160.5L290.2,160.0L291.1,159.5L291.9,158.9L292.8,158.4L293.6,157.8L294.5,157.3L295.3,156.7L296.2,156.2L297.0,155.6L297.9,155.1L298.7,154.5L299.6,154.0L300.5,153.5L301.3,152.9L302.2,152.4L303.0,151.8L303.9,151.3L304.7,150.7L305.6,150.2L306.4,149.6L307.3,149.1L308.1,148.5L309.0,148.0L309.9,147.5L310.7,146.9L311.6,146.4L312.4,145.8L313.3,145.3L314.1,144.7L315.0,144.2L315.8,143.6L316.7,143.1L317.5,142.5L318.4,142.0L319.3,141.5L320.1,140.9L321.0,140.4L321.8,139.8L322.7,139.3L323.5,138.7L324.4,138.2L325.2,137.6L326.1,137.1L326.9,136.5L327.8,136.0L328.7,135.5L329.5,134.9L330.4,134.4L331.2,133.8L332.1,133.3L332.9,132.7L333.8,132.2L334.6,131.6L335.5,131.1L336.3,130.5L337.2,130.0L338.1,129.5L338.9,128.9L339.8,128.4L340.6,127.8L341.5,127.3L342.3,126.7L343.2,126.2L344.0,125.6L344.9,125.1L345.7,124.5L346.6,124.0L347.5,123.5L348.3,122.9L349.2,122.4L350.0,121.8L350.9,121.3L351.7,120.7L352.6,120.2L353.4,119.6L354.3,119.1L355.1,118.5L356.0,118.0L356.9,117.5L357.7,116.9L358.6,116.4L359.4,115.8L360.3,115.3L361.1,114.7L362.0,114.2L362.8,113.6L363.7,113.1L364.5,112.5L365.4,112.0L366.3,111.5L367.1,110.9L368.0,110.4L368.8,109.8L369.7,109.3L370.5,108.7L371.4,108.2L372.2,107.6L373.1,107.1L373.9,106.5L374.8,106.0L375.7,105.5L376.5,104.9L377.4,104.4L378.2,103.8L379.1,103.3L379.9,102.7L380.8,102.2L381.6,101.6L382.5,101.1L383.3,100.5L384.2,100.0L385.1,99.5L385.9,98.9L386.8,98.4L387.6,97.8L388.5,97.3L389.3,96.7L390.2,96.2L391.0,95.6L391.9,95.1L392.7,94.5L393.6,94.0L394.5,93.5L395.3,92.9L396.2,92.4L397.0,91.8L397.9,91.3L398.7,90.7L399.6,90.2L400.4,89.6L401.3,89.1L402.1,88.5L403.0,88.0L403.9,87.5L404.7,86.9L405.6,86.4L406.4,85.8L407.3,85.3L408.1,84.7L409.0,84.2L409.8,83.6L410.7,83.1L411.5,82.5L412.4,82.0L413.3,81.5L414.1,80.9L415.0,80.4L415.8,79.8L416.7,79.3L417.5,78.7L418.4,78.2L419.2,77.6L420.1,77.1L420.9,76.5L421.8,76.0L422.7,75.5L423.5,74.9L424.4,74.4L425.2,73.8L426.1,73.3L426.9,72.7L427.8,72.2L428.6,71.6L429.5,71.1L430.3,70.5L431.2,70.0L432.1,69.5L432.9,68.9L433.8,68.4L434.6,67.8L435.5,67.3L436.3,66.7L437.2,66.2L438.0,65.6L438.9,65.1L439.7,64.5L440.6,64.0L441.5,63.5L442.3,62.9L443.2,62.4L444.0,61.8L444.9,61.3L445.7,60.7L446.6,60.2L447.4,59.6L448.3,59.1L449.1,58.5" fill="none" stroke="#a300bc" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 5"/><text x="356" y="234" font-size="11.5" text-anchor="middle" fill="#c67600" font-weight="700">infinitas soluções</text><text x="356" y="250" font-size="9.8" text-anchor="middle" fill="#5c5c66">as retas coincidem</text><rect x="490" y="58" width="188" height="150" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="521.333" y1="58" x2="521.333" y2="208" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="584" y1="58" x2="584" y2="208" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="646.667" y1="58" x2="646.667" y2="208" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="490" y1="183" x2="678" y2="183" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="490" y1="133" x2="678" y2="133" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="490" y1="83" x2="678" y2="83" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="584" y1="58" x2="584" y2="208" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="490" y1="133" x2="678" y2="133" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="521.333" y="223" font-size="10.5" text-anchor="middle" fill="#8a8a93">-2</text><text x="646.667" y="223" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="484" y="186.5" font-size="10.5" text-anchor="end" fill="#8a8a93">-2</text><text x="484" y="86.5" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="682" y="212" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">x</text><text x="486" y="52" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">y</text><path d="M490.0,158.0L490.9,157.5L491.7,156.9L492.6,156.4L493.4,155.8L494.3,155.3L495.1,154.7L496.0,154.2L496.8,153.6L497.7,153.1L498.5,152.5L499.4,152.0L500.3,151.5L501.1,150.9L502.0,150.4L502.8,149.8L503.7,149.3L504.5,148.7L505.4,148.2L506.2,147.6L507.1,147.1L507.9,146.5L508.8,146.0L509.7,145.5L510.5,144.9L511.4,144.4L512.2,143.8L513.1,143.3L513.9,142.7L514.8,142.2L515.6,141.6L516.5,141.1L517.3,140.5L518.2,140.0L519.1,139.5L519.9,138.9L520.8,138.4L521.6,137.8L522.5,137.3L523.3,136.7L524.2,136.2L525.0,135.6L525.9,135.1L526.7,134.5L527.6,134.0L528.5,133.5L529.3,132.9L530.2,132.4L531.0,131.8L531.9,131.3L532.7,130.7L533.6,130.2L534.4,129.6L535.3,129.1L536.1,128.5L537.0,128.0L537.9,127.5L538.7,126.9L539.6,126.4L540.4,125.8L541.3,125.3L542.1,124.7L543.0,124.2L543.8,123.6L544.7,123.1L545.5,122.5L546.4,122.0L547.3,121.5L548.1,120.9L549.0,120.4L549.8,119.8L550.7,119.3L551.5,118.7L552.4,118.2L553.2,117.6L554.1,117.1L554.9,116.5L555.8,116.0L556.7,115.5L557.5,114.9L558.4,114.4L559.2,113.8L560.1,113.3L560.9,112.7L561.8,112.2L562.6,111.6L563.5,111.1L564.3,110.5L565.2,110.0L566.1,109.5L566.9,108.9L567.8,108.4L568.6,107.8L569.5,107.3L570.3,106.7L571.2,106.2L572.0,105.6L572.9,105.1L573.7,104.5L574.6,104.0L575.5,103.5L576.3,102.9L577.2,102.4L578.0,101.8L578.9,101.3L579.7,100.7L580.6,100.2L581.4,99.6L582.3,99.1L583.1,98.5L584.0,98.0L584.9,97.5L585.7,96.9L586.6,96.4L587.4,95.8L588.3,95.3L589.1,94.7L590.0,94.2L590.8,93.6L591.7,93.1L592.5,92.5L593.4,92.0L594.3,91.5L595.1,90.9L596.0,90.4L596.8,89.8L597.7,89.3L598.5,88.7L599.4,88.2L600.2,87.6L601.1,87.1L601.9,86.5L602.8,86.0L603.7,85.5L604.5,84.9L605.4,84.4L606.2,83.8L607.1,83.3L607.9,82.7L608.8,82.2L609.6,81.6L610.5,81.1L611.3,80.5L612.2,80.0L613.1,79.5L613.9,78.9L614.8,78.4L615.6,77.8L616.5,77.3L617.3,76.7L618.2,76.2L619.0,75.6L619.9,75.1L620.7,74.5L621.6,74.0L622.5,73.5L623.3,72.9L624.2,72.4L625.0,71.8L625.9,71.3L626.7,70.7L627.6,70.2L628.4,69.6L629.3,69.1L630.1,68.5L631.0,68.0L631.9,67.5L632.7,66.9L633.6,66.4L634.4,65.8L635.3,65.3L636.1,64.7L637.0,64.2L637.8,63.6L638.7,63.1L639.5,62.5L640.4,62.0L641.3,61.5L642.1,60.9L643.0,60.4L643.8,59.8L644.7,59.3L645.5,58.7L646.4,58.2" fill="none" stroke="#0083cb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M513.9,207.7L514.8,207.2L515.6,206.6L516.5,206.1L517.3,205.5L518.2,205.0L519.1,204.5L519.9,203.9L520.8,203.4L521.6,202.8L522.5,202.3L523.3,201.7L524.2,201.2L525.0,200.6L525.9,200.1L526.7,199.5L527.6,199.0L528.5,198.5L529.3,197.9L530.2,197.4L531.0,196.8L531.9,196.3L532.7,195.7L533.6,195.2L534.4,194.6L535.3,194.1L536.1,193.5L537.0,193.0L537.9,192.5L538.7,191.9L539.6,191.4L540.4,190.8L541.3,190.3L542.1,189.7L543.0,189.2L543.8,188.6L544.7,188.1L545.5,187.5L546.4,187.0L547.3,186.5L548.1,185.9L549.0,185.4L549.8,184.8L550.7,184.3L551.5,183.7L552.4,183.2L553.2,182.6L554.1,182.1L554.9,181.5L555.8,181.0L556.7,180.5L557.5,179.9L558.4,179.4L559.2,178.8L560.1,178.3L560.9,177.7L561.8,177.2L562.6,176.6L563.5,176.1L564.3,175.5L565.2,175.0L566.1,174.5L566.9,173.9L567.8,173.4L568.6,172.8L569.5,172.3L570.3,171.7L571.2,171.2L572.0,170.6L572.9,170.1L573.7,169.5L574.6,169.0L575.5,168.5L576.3,167.9L577.2,167.4L578.0,166.8L578.9,166.3L579.7,165.7L580.6,165.2L581.4,164.6L582.3,164.1L583.1,163.5L584.0,163.0L584.9,162.5L585.7,161.9L586.6,161.4L587.4,160.8L588.3,160.3L589.1,159.7L590.0,159.2L590.8,158.6L591.7,158.1L592.5,157.5L593.4,157.0L594.3,156.5L595.1,155.9L596.0,155.4L596.8,154.8L597.7,154.3L598.5,153.7L599.4,153.2L600.2,152.6L601.1,152.1L601.9,151.5L602.8,151.0L603.7,150.5L604.5,149.9L605.4,149.4L606.2,148.8L607.1,148.3L607.9,147.7L608.8,147.2L609.6,146.6L610.5,146.1L611.3,145.5L612.2,145.0L613.1,144.5L613.9,143.9L614.8,143.4L615.6,142.8L616.5,142.3L617.3,141.7L618.2,141.2L619.0,140.6L619.9,140.1L620.7,139.5L621.6,139.0L622.5,138.5L623.3,137.9L624.2,137.4L625.0,136.8L625.9,136.3L626.7,135.7L627.6,135.2L628.4,134.6L629.3,134.1L630.1,133.5L631.0,133.0L631.9,132.5L632.7,131.9L633.6,131.4L634.4,130.8L635.3,130.3L636.1,129.7L637.0,129.2L637.8,128.6L638.7,128.1L639.5,127.5L640.4,127.0L641.3,126.5L642.1,125.9L643.0,125.4L643.8,124.8L644.7,124.3L645.5,123.7L646.4,123.2L647.2,122.6L648.1,122.1L648.9,121.5L649.8,121.0L650.7,120.5L651.5,119.9L652.4,119.4L653.2,118.8L654.1,118.3L654.9,117.7L655.8,117.2L656.6,116.6L657.5,116.1L658.3,115.5L659.2,115.0L660.1,114.5L660.9,113.9L661.8,113.4L662.6,112.8L663.5,112.3L664.3,111.7L665.2,111.2L666.0,110.6L666.9,110.1L667.7,109.5L668.6,109.0L669.5,108.5L670.3,107.9L671.2,107.4L672.0,106.8L672.9,106.3L673.7,105.7L674.6,105.2L675.4,104.6L676.3,104.1L677.1,103.5L678.0,103.0" fill="none" stroke="#a300bc" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><text x="584" y="234" font-size="11.5" text-anchor="middle" fill="#d33a4e" font-weight="700">sem solução</text><text x="584" y="250" font-size="9.8" text-anchor="middle" fill="#5c5c66">as retas são paralelas</text><text x="20" y="282" font-size="11" text-anchor="start" fill="#5c5c66">O escalonamento revela qual dos tres casos ocorre, sem precisar desenhar: basta olhar as linhas nulas no fim.</text></svg>
Geometricamente, cada caso corresponde a uma posição relativa entre as retas.

Depois de escalonar, conte as linhas que não ficaram totalmente zeradas. Esse número é o **posto** (\(p\)). Comparando o posto da matriz dos coeficientes, o posto da matriz aumentada e o número de incógnitas \(n\), sabe-se o tipo de sistema:

| Situação | Tipo de sistema | Soluções |
|---|---|---|
| \(p(A) = p([A \mid b]) = n\) | possível e determinado (SPD) | uma única solução |
| \(p(A) = p([A \mid b]) \lt n\) | possível e indeterminado (SPI) | infinitas soluções, com \(n - p\) incógnitas livres |
| \(p(A) \lt p([A \mid b])\) | impossível (SI) | nenhuma solução |

Na prática, o sistema impossível se denuncia por uma linha do tipo \([0\ 0\ 0 \mid c]\) com \(c \ne 0\), que equivale à afirmação absurda "\(0 = c\)".

**Interpretação geométrica:** com duas incógnitas, cada equação é uma reta. Retas que se cruzam num ponto dão SPD; retas coincidentes dão SPI; retas paralelas e distintas dão SI. Com três incógnitas, cada equação é um plano (tema 9).

## Exemplo resolvido

\[ \begin{cases} x + y + z = 6 \\ 2x + y - z = 1 \\ x - y + 2z = 5 \end{cases} \qquad \left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 2 & 1 & -1 & 1 \\ 1 & -1 & 2 & 5 \end{array}\right] \]

**Passo 1:** zerar a primeira coluna abaixo do pivô, com \(L_2 \leftarrow L_2 - 2L_1\) e \(L_3 \leftarrow L_3 - L_1\):

\[ \left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -1 & -3 & -11 \\ 0 & -2 & 1 & -1 \end{array}\right] \]

**Passo 2:** zerar a segunda coluna abaixo do pivô, com \(L_3 \leftarrow L_3 - 2L_2\):

\[ \left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -1 & -3 & -11 \\ 0 & 0 & 7 & 21 \end{array}\right] \]

**Passo 3, de baixo para cima:** \(7z = 21\), então \(z = 3\). Na segunda linha, \(-y - 3(3) = -11\), então \(y = 2\). Na primeira, \(x = 6 - 2 - 3 = 1\).

A solução é única, \((1, 2, 3)\): sistema possível e determinado. Confira na terceira equação original: \(1 - 2 + 2\cdot3 = 5\). ✓

Dois contraexemplos rápidos: \(x + y = 2\) e \(2x + 2y = 4\) são a mesma reta, então há infinitas soluções (SPI). Já \(x + y = 2\) e \(x + y = 3\) são retas paralelas, sem ponto em comum (SI).

## Exemplo aplicado: preparando uma mistura

Um laboratório precisa de 500 kg de uma solução com 10% de glicose, misturando uma solução A (20% de glicose) com uma solução B (5% de glicose). Quanto usar de cada?

- Balanço da massa total: \(A + B = 500\).
- Balanço da glicose: \(0{,}20A + 0{,}05B = 0{,}10\times500 = 50\).

Substituindo \(B = 500 - A\) na segunda equação: \(0{,}20A + 0{,}05(500 - A) = 50\), ou seja, \(0{,}15A = 25\). Resultado: \(A \approx 166{,}7\) kg e \(B \approx 333{,}3\) kg. Esse mesmo raciocínio, com mais componentes, é o dos balanços de massa (tema 43).

> **Atenção, erros comuns:**
> Fazer a operação só nos coeficientes e esquecer de aplicá-la também à **coluna dos termos independentes**.
> Concluir que não há solução ao encontrar uma linha toda de zeros \([0\ 0\ 0 \mid 0]\): isso indica uma **incógnita livre** (infinitas soluções), e não um sistema impossível.
> Dividir por um pivô igual a zero, em vez de trocar as linhas.

## Para fixar

- Monte a matriz aumentada, escalone e compare os postos com o número de incógnitas.
- O sistema pode ter uma, infinitas ou nenhuma solução (SPD, SPI ou SI).
- O método de Gauss-Jordan também serve para calcular a matriz inversa.
`,
  referencias: [
    "BOLDRINI, J. L. et al. **Álgebra linear**. 3. ed. São Paulo: Harbra, 1986. Cap. 2: Sistemas de equações lineares.",
    "RUGGIERO, M. A. G.; LOPES, V. L. R. **Cálculo numérico**: aspectos teóricos e computacionais. 2. ed. São Paulo: Makron Books, 1996. Cap. 3: Resolução de sistemas lineares.",
    "ANTON, H.; RORRES, C. **Álgebra linear com aplicações**. 10. ed. Porto Alegre: Bookman, 2012. Cap. 1.",
    "LAY, D. C. **Álgebra linear e suas aplicações**. 4. ed. Rio de Janeiro: LTC, 2013. Cap. 1.",
  ],
},
{
  id: "r09", num: 9,
  area: "Geometria Analítica e Álgebra Linear",
  disciplina: "Geometria Analítica e Álgebra Linear",
  titulo: "Retas e planos no espaço",
  descricao: "As formas de escrever a equação de uma reta e de um plano, como descobrir se eles se cruzam e como calcular ângulos e distâncias no espaço.",
  tags: ["reta", "plano", "equação paramétrica", "vetor normal", "distância ponto plano", "posição relativa", "GAAL"],
  conteudo: String.raw`
## Equações da reta

Para descrever uma reta no espaço, bastam duas informações: **um ponto** por onde ela passa, \(A = (x_0, y_0, z_0)\), e **um vetor** que indica a sua direção, o **vetor diretor** \(\vec{v} = (a, b, c)\). A partir daí, há três formas equivalentes de escrevê-la:

- **Equação vetorial:** \(P = A + t\,\vec{v}\). Partindo de \(A\) e andando \(t\) "passos" na direção de \(\vec{v}\), chega-se a qualquer ponto \(P\) da reta. O número \(t\) (o **parâmetro**) pode ser qualquer número real.
- **Equações paramétricas:** escrevendo coordenada por coordenada, \(x = x_0 + a\,t\), \(y = y_0 + b\,t\), \(z = z_0 + c\,t\).
- **Equações simétricas** (quando \(a\), \(b\) e \(c\) são diferentes de zero): isolando \(t\) em cada uma, \(\dfrac{x - x_0}{a} = \dfrac{y - y_0}{b} = \dfrac{z - z_0}{c}\).

Para a reta que passa por dois pontos \(A\) e \(B\), use \(\vec{v} = \overrightarrow{AB}\).

## Equações do plano

<svg viewBox="0 0 700 290" xmlns="http://www.w3.org/2000/svg" role="img"><title>Retas e planos</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Retas e planos: definidos por um ponto e uma direcao</text><rect x="30" y="54" width="290" height="190" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><line x1="70" y1="200" x2="290" y2="92" stroke="#0083cb" stroke-width="2.6" stroke-linecap="round"/><circle cx="136" cy="168" r="6" fill="#f40086" stroke="#fff" stroke-width="2"/><text x="130" y="190" font-size="10" text-anchor="middle" fill="#f40086" font-weight="700">ponto P</text><line x1="136" y1="168" x2="200" y2="136" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="186" y="160" font-size="10" text-anchor="middle" fill="#0a8f5e" font-weight="700">vetor diretor</text><text x="175" y="76" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">reta</text><text x="175" y="226" font-size="9.6" text-anchor="middle" fill="#5c5c66">cada ponto e P mais um múltiplo do diretor</text><rect x="350" y="54" width="320" height="190" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><polygon points="390,196 540,152 630,176 480,222" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.8" stroke-linejoin="round"/><circle cx="510" cy="186" r="6" fill="#f40086" stroke="#fff" stroke-width="2"/><line x1="510" y1="186" x2="510" y2="104" stroke="#0a8f5e" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="510" y="94" font-size="10" text-anchor="middle" fill="#0a8f5e" font-weight="700">vetor normal</text><text x="510" y="76" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">plano</text><text x="510" y="240" font-size="9.6" text-anchor="middle" fill="#5c5c66">o normal e perpendicular a todo vetor do plano</text><text x="20" y="268" font-size="11" text-anchor="start" fill="#5c5c66">Dai sai a equação do plano: o produto escalar entre o normal e qualquer vetor contido nele e zero.</text><text x="20" y="286" font-size="11" text-anchor="start" fill="#5c5c66">A distancia de um ponto ao plano usa a projecao sobre esse mesmo vetor normal.</text></svg>
Uma reta precisa de um ponto e de uma direção; um plano, de um ponto e de um vetor normal.

Um plano fica determinado por **um ponto** \(A\) e por **um vetor perpendicular** a ele, o **vetor normal** \(\vec{n} = (a, b, c)\). A ideia é que qualquer vetor que vá de \(A\) até um ponto \(P\) do plano está "deitado" no plano e, portanto, é perpendicular a \(\vec{n}\). Como o produto escalar de vetores perpendiculares é zero (tema 6), \(\overrightarrow{AP}\cdot\vec{n} = 0\):

\[ a(x - x_0) + b(y - y_0) + c(z - z_0) = 0 \quad\Longleftrightarrow\quad ax + by + cz + d = 0 \]

Dica valiosa: na **equação geral** \(ax + by + cz + d = 0\), os números que multiplicam \(x\), \(y\) e \(z\) **são** as coordenadas do vetor normal. Basta olhar para a equação.

O plano também pode ser escrito na forma **vetorial**: \(P = A + s\,\vec{u} + t\,\vec{v}\), em que \(\vec{u}\) e \(\vec{v}\) são dois vetores não paralelos contidos no plano. Para passar dessa forma para a equação geral, calcula-se a normal pelo produto vetorial: \(\vec{n} = \vec{u}\times\vec{v}\).

## Como duas figuras se posicionam uma em relação à outra

**Duas retas** (com diretores \(\vec{v}_1\) e \(\vec{v}_2\)):

- se os diretores são paralelos, as retas são **paralelas** ou **coincidentes**;
- se os diretores não são paralelos e as retas têm um ponto em comum, são **concorrentes** (se cruzam);
- se os diretores não são paralelos e não há ponto em comum, são **reversas**: não se cruzam e também não são paralelas. Isso só acontece no espaço. Pense em duas vigas de um galpão, uma no teto e outra no chão, em direções diferentes.

**Reta e plano** (diretor \(\vec{v}\), normal \(\vec{n}\)):

- se \(\vec{v}\cdot\vec{n} = 0\), a reta é **paralela** ao plano ou está **contida** nele;
- se \(\vec{v}\cdot\vec{n} \ne 0\), a reta **fura** o plano num ponto; se \(\vec{v}\) for paralelo a \(\vec{n}\), ela é perpendicular ao plano.

**Dois planos:** se as normais são paralelas, os planos são paralelos ou coincidentes. Caso contrário, eles se cortam numa reta, cuja direção é \(\vec{n}_1\times\vec{n}_2\).

## Ângulos e distâncias

- **Ângulo entre dois planos:** é o ângulo entre as suas normais, \(\cos\theta = \dfrac{\lvert\vec{n}_1\cdot\vec{n}_2\rvert}{\lVert\vec{n}_1\rVert\,\lVert\vec{n}_2\rVert}\).
- **Distância de um ponto a um plano**, com \(P_0 = (x_0, y_0, z_0)\) e o plano \(ax + by + cz + d = 0\):

\[ d(P_0, \pi) = \frac{\lvert a x_0 + b y_0 + c z_0 + d\rvert}{\sqrt{a^2 + b^2 + c^2}} \]

- **Distância de um ponto a uma reta:** \(d = \dfrac{\lVert\overrightarrow{AP_0}\times\vec{v}\rVert}{\lVert\vec{v}\rVert}\). É a área do paralelogramo dividida pela sua base.

## Exemplo resolvido

Encontre o plano que passa pelos pontos \(A(1,0,0)\), \(B(0,1,0)\) e \(C(0,0,1)\) e a sua distância até a origem.

**Passo 1, dois vetores no plano:** \(\overrightarrow{AB} = (-1, 1, 0)\) e \(\overrightarrow{AC} = (-1, 0, 1)\).

**Passo 2, a normal pelo produto vetorial:**

\[ \vec{n} = \overrightarrow{AB}\times\overrightarrow{AC} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ -1 & 1 & 0 \\ -1 & 0 & 1 \end{vmatrix} = (1,\ 1,\ 1) \]

**Passo 3, a equação:** \(1(x - 1) + 1(y - 0) + 1(z - 0) = 0\), ou seja, \(x + y + z - 1 = 0\).

**Passo 4, a distância até a origem:** \(d = \dfrac{\lvert -1\rvert}{\sqrt{3}} \approx 0{,}577\).

**Conferindo por outro caminho:** a reta que sai da origem perpendicular ao plano é \(P = t\,(1,1,1)\). Ela fura o plano quando \(t + t + t = 1\), isto é, no ponto \(\left(\tfrac13, \tfrac13, \tfrac13\right)\), cuja distância à origem é \(\sqrt{3/9} \approx 0{,}577\). ✓

**Curiosidade:** esse é o plano cristalográfico conhecido como **(111)**. Esse tipo de geometria de planos é usado na **cristalografia de raios X**, a técnica que revelou a estrutura do DNA e de milhares de proteínas e enzimas.

> **Atenção, erros comuns:**
> Na equação geral do plano, \((a, b, c)\) é o vetor **normal** (perpendicular), e não um vetor que está no plano.
> Retas que não se cruzam no espaço não são necessariamente paralelas: podem ser **reversas**.
> Esquecer o módulo (valor absoluto) no numerador da fórmula da distância.

## Para fixar

- Reta: um ponto e um vetor diretor. Plano: um ponto e um vetor normal.
- O produto vetorial de dois vetores do plano dá a sua normal.
- Posições relativas se decidem com produtos escalares e vetoriais entre diretores e normais.
`,
  referencias: [
    "STEINBRUCH, A.; WINTERLE, P. **Geometria analítica**. 2. ed. São Paulo: Pearson Makron Books, 1987. Cap. 4 e 5: A reta; O plano.",
    "WINTERLE, P. **Vetores e geometria analítica**. 2. ed. São Paulo: Pearson, 2014.",
    "CAMARGO, I.; BOULOS, P. **Geometria analítica**: um tratamento vetorial. 3. ed. São Paulo: Prentice Hall, 2005.",
  ],
}
);
