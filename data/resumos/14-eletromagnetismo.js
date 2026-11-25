/* BIONEXO — Resumos complementares · Física Básica: Eletromagnetismo (r80–r87) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r80", num: 80,
  area: "Física Básica: Eletromagnetismo",
  disciplina: "Física Básica: Eletromagnetismo",
  titulo: "Carga elétrica, lei de Coulomb e campo elétrico",
  descricao: "Propriedades da carga, condutores e isolantes, a lei de Coulomb, o conceito de campo elétrico, linhas de campo, campos de distribuições contínuas por integração e o dipolo elétrico.",
  tags: ["Física 3", "eletrostática", "carga elétrica", "condutor", "isolante", "eletrização", "lei de Coulomb", "campo elétrico", "linhas de campo", "distribuição contínua", "dipolo elétrico", "eletroforese"],
  conteudo: String.raw`
## A carga elétrica

A **carga elétrica** é uma propriedade fundamental da matéria, como a massa. Há dois tipos, positiva e negativa; cargas de mesmo sinal se repelem e de sinais opostos se atraem. Três propriedades são essenciais:

- **Conservação:** a carga total de um sistema isolado nunca muda; ela apenas se transfere.
- **Quantização:** toda carga livre é múltiplo inteiro da carga elementar, \(e = 1{,}602\times10^{-19}\) C (a carga do próton; a do elétron é \(-e\)).
- **Unidade:** o coulomb (C), uma quantidade enorme de carga: \(6{,}24\times10^{18}\) elétrons.

## Condutores, isolantes e eletrização

Nos **condutores** (metais, soluções iônicas, o corpo humano), há cargas livres para se mover. Nos **isolantes** (vidro, plásticos, ar seco), elas ficam presas. Um corpo pode ser eletrizado por:

- **atrito:** dois materiais diferentes trocam elétrons (o plástico atritado com lã);
- **contato:** um condutor carregado compartilha carga com outro;
- **indução:** um corpo carregado aproximado de um condutor separa as cargas dele, sem tocar.

A indução explica por que um pente carregado atrai pedacinhos de papel neutros: as cargas do papel se polarizam, e a parte de sinal oposto fica mais perto do pente.

## A lei de Coulomb

A força entre duas cargas pontuais é proporcional ao produto das cargas e inversamente proporcional ao quadrado da distância:

\[ F = k\,\frac{|q_1\,q_2|}{r^2} \qquad\qquad k = \frac{1}{4\pi\varepsilon_0} \approx 8{,}99\times10^{9}\ \text{N·m}^2/\text{C}^2 \]

em que \(\varepsilon_0 = 8{,}85\times10^{-12}\) C²/(N·m²) é a **permissividade do vácuo**. A forma é idêntica à da gravitação (tema 67), mas a força elétrica é muitíssimo mais intensa: entre um próton e um elétron, é cerca de \(10^{39}\) vezes maior que a gravitacional. Com várias cargas, vale o **princípio da superposição**: a força total é a soma vetorial das forças de cada uma.

Num meio material, a força diminui pela **constante dielétrica** \(\kappa\) do meio: \(F = \dfrac{k}{\kappa}\dfrac{|q_1q_2|}{r^2}\). A água tem \(\kappa \approx 80\), o que enfraquece muito a atração entre íons e explica por que ela dissolve tão bem os sais.

## O campo elétrico

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Campo elétrico</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Linhas de campo: saem das cargas positivas e chegam as negativas</text><rect x="22" y="50" width="216" height="170" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><line x1="150" y1="150" x2="210" y2="150" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="147.321" y1="160" x2="199.282" y2="190" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="140" y1="167.321" x2="170" y2="219.282" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="130" y1="170" x2="130" y2="230" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="120" y1="167.321" x2="90" y2="219.282" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="112.679" y1="160" x2="60.718" y2="190" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="110" y1="150" x2="50" y2="150" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="112.679" y1="140" x2="60.718" y2="110" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="120" y1="132.679" x2="90" y2="80.718" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="130" y1="130" x2="130" y2="70" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="140" y1="132.679" x2="170" y2="80.718" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="147.321" y1="140" x2="199.282" y2="110" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><circle cx="130" cy="150" r="16" fill="#d33a4e" stroke="#fff" stroke-width="2"/><text x="130" y="156" font-size="20" text-anchor="middle" fill="#fff" font-weight="700">+</text><text x="130" y="240" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">carga positiva</text><rect x="262" y="50" width="216" height="170" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><line x1="450" y1="150" x2="390" y2="150" stroke="#0083cb" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="439.282" y1="190" x2="387.321" y2="160" stroke="#0083cb" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="410" y1="219.282" x2="380" y2="167.321" stroke="#0083cb" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="370" y1="230" x2="370" y2="170" stroke="#0083cb" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="330" y1="219.282" x2="360" y2="167.321" stroke="#0083cb" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="300.718" y1="190" x2="352.679" y2="160" stroke="#0083cb" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="290" y1="150" x2="350" y2="150" stroke="#0083cb" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="300.718" y1="110" x2="352.679" y2="140" stroke="#0083cb" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="330" y1="80.718" x2="360" y2="132.679" stroke="#0083cb" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="370" y1="70" x2="370" y2="130" stroke="#0083cb" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="410" y1="80.718" x2="380" y2="132.679" stroke="#0083cb" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="439.282" y1="110" x2="387.321" y2="140" stroke="#0083cb" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-az)"/><circle cx="370" cy="150" r="16" fill="#0083cb" stroke="#fff" stroke-width="2"/><text x="370" y="156" font-size="20" text-anchor="middle" fill="#fff" font-weight="700">-</text><text x="370" y="240" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">carga negativa</text><rect x="502" y="50" width="216" height="170" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><path d="M580,133.8 C590,96 630,96 640,133.8" fill="none" stroke="#a300bc" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-rx)"/><path d="M580,140.4 C590,118 630,118 640,140.4" fill="none" stroke="#a300bc" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-rx)"/><path d="M580,146.4 C590,138 630,138 640,146.4" fill="none" stroke="#a300bc" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-rx)"/><path d="M580,153.6 C590,162 630,162 640,153.6" fill="none" stroke="#a300bc" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-rx)"/><path d="M580,159.6 C590,182 630,182 640,159.6" fill="none" stroke="#a300bc" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-rx)"/><path d="M580,166.2 C590,204 630,204 640,166.2" fill="none" stroke="#a300bc" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-rx)"/><circle cx="566" cy="150" r="15" fill="#d33a4e" stroke="#fff" stroke-width="2"/><text x="566" y="156" font-size="18" text-anchor="middle" fill="#fff" font-weight="700">+</text><circle cx="654" cy="150" r="15" fill="#0083cb" stroke="#fff" stroke-width="2"/><text x="654" y="156" font-size="18" text-anchor="middle" fill="#fff" font-weight="700">-</text><text x="610" y="240" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">dipolo</text><text x="20" y="272" font-size="11" text-anchor="start" fill="#5c5c66">A densidade de linhas indica a intensidade do campo, e elas nunca se cruzam.</text><text x="20" y="290" font-size="11" text-anchor="start" fill="#5c5c66">Na eletroforese, o DNA, carregado negativamente, migra para o polo positivo.</text></svg>
As linhas de campo de uma carga isolada e de um dipolo.

Em vez de pensar em "ação a distância", diz-se que cada carga cria em torno de si um **campo elétrico**, e é o campo que age sobre outras cargas:

\[ \vec E = \frac{\vec F}{q_0} \qquad\Rightarrow\qquad \vec F = q\,\vec E \]

A unidade é N/C (ou V/m). Para uma carga pontual:

\[ E = k\,\frac{|q|}{r^2} \]

apontando para fora se \(q \gt 0\) e para dentro se \(q \lt 0\).

**Linhas de campo** representam o campo visualmente: saem das cargas positivas e chegam às negativas, nunca se cruzam, e são mais densas onde o campo é mais intenso. Entre duas placas paralelas com cargas opostas, as linhas são retas, paralelas e igualmente espaçadas: o campo é **uniforme**.

## Campos de distribuições contínuas

Para um corpo carregado extenso, divide-se a carga em pedaços infinitesimais \(dq\) e somam-se (integram-se) as contribuições:

\[ \vec E = \int k\,\frac{dq}{r^2}\,\hat r \]

com \(dq = \lambda\,dl\) (linha), \(\sigma\,dA\) (superfície) ou \(\rho\,dV\) (volume). A simetria costuma cancelar componentes e simplificar a integral.

**Exemplo: anel carregado.** Um anel de raio \(a\) com carga \(Q\) uniforme. No eixo, a uma distância \(z\) do centro, as componentes perpendiculares ao eixo se cancelam aos pares, e só sobra a componente axial:

\[ E_z = \int k\,\frac{dq}{z^2 + a^2}\cdot\frac{z}{\sqrt{z^2 + a^2}} = \frac{k\,Q\,z}{(z^2 + a^2)^{3/2}} \]

No centro (\(z = 0\)), o campo é zero; muito longe (\(z \gg a\)), \(E \to kQ/z^2\), como uma carga pontual. Integrando anéis, obtém-se o campo de um disco e, no limite, o de um plano infinito: \(E = \sigma/(2\varepsilon_0)\), que não depende da distância.

## O dipolo elétrico

Um par de cargas \(+q\) e \(-q\) separadas por uma distância \(d\) forma um **dipolo**, caracterizado pelo **momento de dipolo** \(\vec p = q\,\vec d\) (apontando da carga negativa para a positiva). Num campo uniforme, o dipolo sofre um torque que tende a alinhá-lo ao campo:

\[ \vec\tau = \vec p\times\vec E \qquad\qquad U = -\vec p\cdot\vec E \]

A molécula de água é um dipolo permanente. Isso explica as ligações de hidrogênio, a hidratação de íons e o aquecimento por micro-ondas, em que o campo oscilante faz as moléculas de água girarem.

## Exemplo resolvido

Duas cargas, \(q_1 = +2{,}0\) µC na origem e \(q_2 = -3{,}0\) µC em \(x = 0{,}30\) m. Qual o campo no ponto médio?

Cada carga está a 0,15 m. As duas contribuições apontam no sentido \(+x\) (para longe da positiva e em direção à negativa):

\[ E_1 = \frac{8{,}99\times10^9\cdot2{,}0\times10^{-6}}{0{,}15^2} \approx 8{,}0\times10^5\ \text{N/C} \qquad E_2 \approx 1{,}2\times10^6\ \text{N/C} \]

\[ E_{total} \approx 2{,}0\times10^6\ \text{N/C}\ \text{(no sentido } +x) \]

## Na prática

- **Eletroforese:** um campo elétrico de alguns volts por centímetro move moléculas carregadas num gel. O DNA, negativo por causa dos fosfatos, migra para o polo positivo (tema 60).
- **Precipitadores eletrostáticos** e **pintura eletrostática:** partículas carregadas são guiadas por campos elétricos.
- **Membranas celulares:** a diferença de potencial de cerca de 70 mV através de uma membrana de 5 nm cria um campo de cerca de \(10^7\) V/m, que influencia o transporte de íons e o funcionamento de proteínas de canal.

> **Atenção, erros comuns:**
> Somar campos como números, em vez de vetores.
> Esquecer de converter microcoulombs (µC) e centímetros.
> Confundir a força sobre uma carga com o campo no ponto, que existe mesmo sem carga de prova.

## Para fixar

- \(F = k|q_1q_2|/r^2\); a carga se conserva e é quantizada.
- \(\vec E = \vec F/q\); para distribuições contínuas, \(\vec E = \int k\,dq\,\hat r/r^2\).
- Dipolos sofrem torque \(\vec p\times\vec E\) em campos uniformes.
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 3: Eletromagnetismo. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 21 e 22.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 3: Eletromagnetismo. 2. ed. São Paulo: Blucher, 2015.",
    "YOUNG, H. D.; FREEDMAN, R. A. **Física III**: eletromagnetismo (Sears e Zemansky). 14. ed. São Paulo: Pearson, 2015.",
  ],
},
{
  id: "r81", num: 81,
  area: "Física Básica: Eletromagnetismo",
  disciplina: "Física Básica: Eletromagnetismo",
  titulo: "Lei de Gauss e potencial elétrico",
  descricao: "Fluxo elétrico, a lei de Gauss em forma integral e suas aplicações com simetria, condutores em equilíbrio, potencial elétrico, superfícies equipotenciais e a relação entre campo e potencial.",
  tags: ["Física 3", "eletrostática", "fluxo elétrico", "lei de Gauss", "superfície gaussiana", "simetria", "condutor em equilíbrio", "gaiola de Faraday", "potencial elétrico", "diferença de potencial", "equipotencial", "gradiente", "elétron-volt"],
  conteudo: String.raw`
## Fluxo elétrico

O **fluxo elétrico** mede "quantas linhas de campo" atravessam uma superfície:

\[ \Phi_E = \oint\vec E\cdot d\vec A \]

O vetor \(d\vec A\) é perpendicular a cada pedacinho da superfície e, numa superfície fechada, aponta para fora. Linhas que saem contam positivamente; linhas que entram, negativamente.

## A lei de Gauss

O fluxo através de **qualquer superfície fechada** é proporcional à carga **envolvida** por ela:

\[ \oint\vec E\cdot d\vec A = \frac{q_{env}}{\varepsilon_0} \]

Cargas fora da superfície contribuem com fluxo zero: suas linhas entram e saem. A lei de Gauss é equivalente à lei de Coulomb, mas é muito mais poderosa quando há **simetria**, porque permite calcular o campo sem integrais complicadas. É também uma das quatro equações de Maxwell (tema 87).

## Usando a lei de Gauss

A estratégia é escolher uma **superfície gaussiana** que respeite a simetria do problema, de modo que \(E\) seja constante (e paralelo a \(d\vec A\)) nas partes relevantes dela:

| Distribuição | Superfície gaussiana | Resultado |
|---|---|---|
| Carga pontual ou esfera carregada (fora dela) | esfera concêntrica | \(E = \dfrac{q}{4\pi\varepsilon_0 r^2}\) |
| Fio infinito com densidade \(\lambda\) | cilindro coaxial | \(E = \dfrac{\lambda}{2\pi\varepsilon_0 r}\) |
| Plano infinito com densidade \(\sigma\) | cilindro atravessando o plano | \(E = \dfrac{\sigma}{2\varepsilon_0}\) |
| Esfera isolante uniformemente carregada (dentro, \(r \lt R\)) | esfera de raio \(r\) | \(E = \dfrac{q\,r}{4\pi\varepsilon_0 R^3}\) |

**Exemplo: fio infinito.** Para uma superfície cilíndrica de raio \(r\) e comprimento \(L\) em torno do fio, o campo é radial e só atravessa a lateral: \(E\cdot2\pi rL = \lambda L/\varepsilon_0\), o que dá o resultado da tabela. O campo cai com \(1/r\), e não com \(1/r^2\).

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Lei de Gauss e potencial</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Lei de Gauss e superficies equipotenciais</text><rect x="30" y="54" width="300" height="192" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><circle cx="180" cy="150" r="80" fill="none" stroke="#a300bc" stroke-width="2" stroke-dasharray="6 5"/><text x="180" y="58" font-size="10.5" text-anchor="middle" fill="#a300bc" font-weight="700">superficie gaussiana</text><line x1="198" y1="150" x2="248" y2="150" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="193.789" y1="161.57" x2="232.091" y2="193.71" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="183.126" y1="167.727" x2="191.808" y2="216.967" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="171" y1="165.588" x2="146" y2="208.89" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="163.086" y1="156.156" x2="116.101" y2="173.257" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="163.086" y1="143.844" x2="116.101" y2="126.743" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="171" y1="134.412" x2="146" y2="91.1103" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="183.126" y1="132.273" x2="191.808" y2="83.0331" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="193.789" y1="138.43" x2="232.091" y2="106.29" stroke="#d33a4e" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-vm)"/><circle cx="180" cy="150" r="15" fill="#d33a4e" stroke="#fff" stroke-width="2"/><text x="180" y="155" font-size="13" text-anchor="middle" fill="#fff" font-weight="700">q</text><text x="180" y="232" font-size="10.5" text-anchor="middle" fill="#5c5c66">o fluxo depende so da carga envolvida</text><rect x="360" y="54" width="350" height="192" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="535" y="76" font-size="12" text-anchor="middle" fill="#333333" font-weight="700">condutor em equilíbrio</text><path d="M420,180 C410,120 470,96 520,100 C580,104 630,126 640,160 C648,190 600,206 540,204 C470,202 430,210 420,180 Z" fill="#e4f2fb" stroke="#0083cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="642" cy="152" r="4" fill="#d33a4e" stroke="#d33a4e" stroke-width="1.4"/><circle cx="620.61" cy="186.092" r="4" fill="#d33a4e" stroke="#d33a4e" stroke-width="1.4"/><circle cx="564.61" cy="207.161" r="4" fill="#d33a4e" stroke="#d33a4e" stroke-width="1.4"/><circle cx="495.39" cy="207.161" r="4" fill="#d33a4e" stroke="#d33a4e" stroke-width="1.4"/><circle cx="439.39" cy="186.092" r="4" fill="#d33a4e" stroke="#d33a4e" stroke-width="1.4"/><circle cx="418" cy="152" r="4" fill="#d33a4e" stroke="#d33a4e" stroke-width="1.4"/><circle cx="439.39" cy="117.908" r="4" fill="#d33a4e" stroke="#d33a4e" stroke-width="1.4"/><circle cx="495.39" cy="96.8387" r="4" fill="#d33a4e" stroke="#d33a4e" stroke-width="1.4"/><circle cx="564.61" cy="96.8387" r="4" fill="#d33a4e" stroke="#d33a4e" stroke-width="1.4"/><circle cx="620.61" cy="117.908" r="4" fill="#d33a4e" stroke="#d33a4e" stroke-width="1.4"/><text x="535" y="152" font-size="15" text-anchor="middle" fill="#0083cb" font-weight="700">E = 0</text><text x="535" y="172" font-size="10.5" text-anchor="middle" fill="#5c5c66">no interior</text><text x="535" y="232" font-size="10.5" text-anchor="middle" fill="#5c5c66">a carga fica na superficie: e a gaiola de Faraday</text><text x="20" y="272" font-size="11" text-anchor="start" fill="#5c5c66">O potencial e escalar e por isso se soma sem vetores. O campo aponta para onde o potencial cai mais rápido.</text><text x="20" y="290" font-size="11" text-anchor="start" fill="#5c5c66">Entre placas paralelas, E = diferença de potencial dividida pela distancia: num gel a 100 V e 20 cm, são 5 V/cm.</text></svg>
A superfície gaussiana e o campo nulo no interior de um condutor em equilíbrio.

## Condutores em equilíbrio

Num condutor em equilíbrio eletrostático:

1. O campo elétrico **no interior é zero** (se não fosse, as cargas livres se moveriam).
2. Toda a carga em excesso fica na **superfície externa**.
3. O campo logo fora da superfície é perpendicular a ela e vale \(\sigma/\varepsilon_0\).
4. A carga se acumula mais nas **pontas**, onde o campo fica mais intenso. É o princípio do para-raios.

A **gaiola de Faraday** é uma consequência direta: o interior de uma casca condutora fica protegido de campos externos. Por isso o interior de um carro protege de raios, celulares perdem sinal em elevadores e equipamentos sensíveis (como os de eletrofisiologia) ficam dentro de gaiolas metálicas.

## O potencial elétrico

A força elétrica é conservativa, como a gravitacional (tema 23). Pode-se, então, definir uma energia potencial e, dividindo pela carga, o **potencial elétrico**:

\[ \Delta V = V_B - V_A = -\int_A^B\vec E\cdot d\vec s \qquad\qquad \Delta U = q\,\Delta V \]

O potencial é uma grandeza **escalar**, medida em volts (1 V = 1 J/C). Para uma carga pontual, tomando \(V = 0\) no infinito:

\[ V = k\,\frac{q}{r} \]

Com várias cargas, os potenciais simplesmente se **somam** (sem vetores), o que costuma ser muito mais fácil do que somar campos.

**Elétron-volt:** a energia que um elétron ganha ao atravessar uma diferença de potencial de 1 V: \(1\ \text{eV} = 1{,}602\times10^{-19}\) J. É a unidade natural da física atômica (tema 93).

## Campo a partir do potencial

O campo aponta no sentido em que o potencial **diminui** mais rapidamente:

\[ \vec E = -\nabla V \qquad\text{(em uma dimensão: } E_x = -\frac{dV}{dx}) \]

Entre placas paralelas, com campo uniforme, isso se reduz a \(E = \Delta V/d\). As **superfícies equipotenciais** são perpendiculares às linhas de campo, e mover uma carga ao longo delas não exige trabalho. A superfície de um condutor em equilíbrio é equipotencial.

## Exemplos resolvidos

**1. Gel de eletroforese.** Uma fonte aplica 100 V entre eletrodos separados por 20 cm. O campo médio no gel é \(E = 100/0{,}20 = 500\) V/m, ou 5 V/cm, um valor típico. A velocidade de migração é proporcional ao campo, por isso os protocolos indicam a tensão em V/cm.

**2. Acelerando um elétron.** Um elétron parte do repouso e atravessa 2000 V. A energia ganha é 2000 eV = \(3{,}2\times10^{-16}\) J, e a velocidade é \(v = \sqrt{2K/m} \approx 2{,}65\times10^7\) m/s, quase 9% da velocidade da luz. Microscópios eletrônicos usam tensões de dezenas a centenas de quilovolts (tema 92).

> **Atenção, erros comuns:**
> Concluir que o campo é zero quando o fluxo é zero: o fluxo pode se anular com campo diferente de zero.
> Usar a lei de Gauss para calcular campos sem simetria suficiente.
> Confundir potencial (escalar, em V) com campo (vetor, em V/m).

## Para fixar

- Gauss: \(\oint\vec E\cdot d\vec A = q_{env}/\varepsilon_0\); use superfícies que respeitem a simetria.
- Dentro de um condutor em equilíbrio, \(E = 0\).
- \(\Delta V = -\int\vec E\cdot d\vec s\) e \(\vec E = -\nabla V\).
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 3: Eletromagnetismo. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 23 e 24.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 3: Eletromagnetismo. 2. ed. São Paulo: Blucher, 2015.",
    "GRIFFITHS, D. J. **Eletrodinâmica**. 3. ed. São Paulo: Pearson, 2011.",
  ],
},
{
  id: "r82", num: 82,
  area: "Física Básica: Eletromagnetismo",
  disciplina: "Física Básica: Eletromagnetismo",
  titulo: "Capacitância, capacitores e circuitos RC",
  descricao: "O que é capacitância, o capacitor de placas paralelas, dielétricos, associações em série e paralelo, a energia armazenada e a carga e descarga em circuitos RC.",
  tags: ["Física 3", "capacitância", "capacitor", "placas paralelas", "dielétrico", "constante dielétrica", "associação de capacitores", "energia armazenada", "circuito RC", "constante de tempo", "eletroporação", "membrana celular"],
  conteudo: String.raw`
## O capacitor

Um **capacitor** é formado por dois condutores próximos, isolados entre si, que armazenam cargas iguais e opostas, \(+Q\) e \(-Q\). A razão entre a carga e a diferença de potencial entre eles é a **capacitância**:

\[ C = \frac{Q}{V} \]

A unidade é o farad (F = C/V). Um farad é muito grande; na prática, usam-se microfarads (µF), nanofarads (nF) e picofarads (pF). A capacitância depende **só da geometria e do material** entre os condutores, não da carga.

## O capacitor de placas paralelas

Com placas de área \(A\) separadas por uma distância \(d\) pequena, o campo entre elas é uniforme, \(E = \sigma/\varepsilon_0\) (tema 81), e \(V = E\,d\). Daí:

\[ C = \frac{\varepsilon_0\,A}{d} \]

Placas maiores e mais próximas armazenam mais carga para a mesma tensão.

## Dielétricos

Preenchendo o espaço entre as placas com um isolante (um **dielétrico**), a capacitância aumenta pelo fator \(\kappa\), a **constante dielétrica**:

\[ C = \kappa\,\frac{\varepsilon_0\,A}{d} \]

As moléculas do dielétrico se polarizam e criam um campo interno que se opõe ao das placas, reduzindo a tensão para a mesma carga. Valores típicos: ar, 1,0006; papel, cerca de 3; vidro, 5 a 10; água, cerca de 80. O dielétrico também aumenta a tensão máxima suportada antes de uma faísca (a **rigidez dielétrica**).

## Associações

| | Em paralelo | Em série |
|---|---|---|
| O que é igual | a tensão | a carga |
| Capacitância equivalente | \(C_{eq} = C_1 + C_2 + \dots\) | \(\dfrac{1}{C_{eq}} = \dfrac{1}{C_1} + \dfrac{1}{C_2} + \dots\) |

Repare que é o **contrário** dos resistores (tema 26): em paralelo, as áreas efetivamente se somam.

## Energia armazenada

Carregar um capacitor exige trabalho, porque cada nova carga é empurrada contra a repulsão das que já estão lá. Integrando \(dW = V\,dq = (q/C)\,dq\):

\[ U = \frac{Q^2}{2C} = \tfrac12 C\,V^2 = \tfrac12 Q\,V \]

Essa energia fica armazenada no **campo elétrico** entre as placas, com densidade \(u = \tfrac12\varepsilon_0 E^2\). Desfibriladores, flashes de câmeras e eletroporadores acumulam energia num capacitor e a liberam num pulso rápido.

<svg viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg" role="img"><title>Capacitor e RC</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Capacitor e circuito RC</text><rect x="30" y="56" width="300" height="180" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><rect x="90" y="86" width="16" height="120" rx="3" fill="#d33a4e" stroke="#d33a4e" stroke-width="1"/><rect x="254" y="86" width="16" height="120" rx="3" fill="#0083cb" stroke="#0083cb" stroke-width="1"/><line x1="110" y1="96" x2="250" y2="96" stroke="#8a8a93" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-cz)"/><line x1="110" y1="118" x2="250" y2="118" stroke="#8a8a93" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-cz)"/><line x1="110" y1="140" x2="250" y2="140" stroke="#8a8a93" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-cz)"/><line x1="110" y1="162" x2="250" y2="162" stroke="#8a8a93" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-cz)"/><line x1="110" y1="184" x2="250" y2="184" stroke="#8a8a93" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-cz)"/><line x1="110" y1="206" x2="250" y2="206" stroke="#8a8a93" stroke-width="1.3" stroke-linecap="round" marker-end="url(#a-cz)"/><text x="98" y="76" font-size="11.5" text-anchor="middle" fill="#d33a4e" font-weight="700">+Q</text><text x="262" y="76" font-size="11.5" text-anchor="middle" fill="#0083cb" font-weight="700">-Q</text><line x1="98" y1="212" x2="262" y2="212" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="4 3"/><text x="180" y="228" font-size="10.5" text-anchor="middle" fill="#5c5c66">distancia d</text><text x="180" y="250" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="700">C = constante dieletrica x área / distancia</text><rect x="400" y="66" width="300" height="150" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="460" y1="66" x2="460" y2="216" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="520" y1="66" x2="520" y2="216" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="580" y1="66" x2="580" y2="216" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="640" y1="66" x2="640" y2="216" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="700" y1="66" x2="700" y2="216" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="400" y1="147.818" x2="700" y2="147.818" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="400" y1="79.6364" x2="700" y2="79.6364" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="400" y1="66" x2="400" y2="216" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="400" y1="216" x2="700" y2="216" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="460" y="231" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="520" y="231" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="580" y="231" font-size="10.5" text-anchor="middle" fill="#8a8a93">3</text><text x="640" y="231" font-size="10.5" text-anchor="middle" fill="#8a8a93">4</text><text x="700" y="231" font-size="10.5" text-anchor="middle" fill="#8a8a93">5</text><text x="394" y="151.318" font-size="10.5" text-anchor="end" fill="#8a8a93">0.5</text><text x="394" y="83.1364" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="704" y="220" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">tempo em constantes RC</text><text x="396" y="60" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">V</text><path d="M400.0,216.0L401.4,212.9L402.7,209.9L404.1,207.0L405.5,204.2L406.8,201.4L408.2,198.6L409.5,195.9L410.9,193.3L412.3,190.8L413.6,188.3L415.0,185.8L416.4,183.5L417.7,181.1L419.1,178.8L420.5,176.6L421.8,174.4L423.2,172.3L424.5,170.2L425.9,168.2L427.3,166.2L428.6,164.2L430.0,162.3L431.4,160.5L432.7,158.7L434.1,156.9L435.5,155.2L436.8,153.5L438.2,151.8L439.5,150.2L440.9,148.6L442.3,147.0L443.6,145.5L445.0,144.0L446.4,142.6L447.7,141.2L449.1,139.8L450.5,138.5L451.8,137.1L453.2,135.8L454.5,134.6L455.9,133.3L457.3,132.1L458.6,131.0L460.0,129.8L461.4,128.7L462.7,127.6L464.1,126.5L465.5,125.4L466.8,124.4L468.2,123.4L469.5,122.4L470.9,121.5L472.3,120.5L473.6,119.6L475.0,118.7L476.4,117.8L477.7,117.0L479.1,116.1L480.5,115.3L481.8,114.5L483.2,113.7L484.5,113.0L485.9,112.2L487.3,111.5L488.6,110.8L490.0,110.1L491.4,109.4L492.7,108.7L494.1,108.1L495.5,107.4L496.8,106.8L498.2,106.2L499.5,105.6L500.9,105.0L502.3,104.4L503.6,103.9L505.0,103.3L506.4,102.8L507.7,102.3L509.1,101.8L510.5,101.3L511.8,100.8L513.2,100.3L514.5,99.8L515.9,99.4L517.3,98.9L518.6,98.5L520.0,98.1L521.4,97.7L522.7,97.3L524.1,96.9L525.5,96.5L526.8,96.1L528.2,95.7L529.5,95.4L530.9,95.0L532.3,94.7L533.6,94.3L535.0,94.0L536.4,93.7L537.7,93.4L539.1,93.1L540.5,92.8L541.8,92.5L543.2,92.2L544.5,91.9L545.9,91.6L547.3,91.4L548.6,91.1L550.0,90.8L551.4,90.6L552.7,90.3L554.1,90.1L555.5,89.9L556.8,89.6L558.2,89.4L559.5,89.2L560.9,89.0L562.3,88.8L563.6,88.6L565.0,88.4L566.4,88.2L567.7,88.0L569.1,87.8L570.5,87.6L571.8,87.4L573.2,87.2L574.5,87.1L575.9,86.9L577.3,86.7L578.6,86.6L580.0,86.4L581.4,86.3L582.7,86.1L584.1,86.0L585.5,85.8L586.8,85.7L588.2,85.6L589.5,85.4L590.9,85.3L592.3,85.2L593.6,85.0L595.0,84.9L596.4,84.8L597.7,84.7L599.1,84.6L600.5,84.5L601.8,84.4L603.2,84.2L604.5,84.1L605.9,84.0L607.3,83.9L608.6,83.8L610.0,83.8L611.4,83.7L612.7,83.6L614.1,83.5L615.5,83.4L616.8,83.3L618.2,83.2L619.5,83.1L620.9,83.1L622.3,83.0L623.6,82.9L625.0,82.8L626.4,82.8L627.7,82.7L629.1,82.6L630.5,82.6L631.8,82.5L633.2,82.4L634.5,82.4L635.9,82.3L637.3,82.3L638.6,82.2L640.0,82.1L641.4,82.1L642.7,82.0L644.1,82.0L645.5,81.9L646.8,81.9L648.2,81.8L649.5,81.8L650.9,81.7L652.3,81.7L653.6,81.6L655.0,81.6L656.4,81.5L657.7,81.5L659.1,81.5L660.5,81.4L661.8,81.4L663.2,81.3L664.5,81.3L665.9,81.3L667.3,81.2L668.6,81.2L670.0,81.2L671.4,81.1L672.7,81.1L674.1,81.1L675.5,81.0L676.8,81.0L678.2,81.0L679.5,80.9L680.9,80.9L682.3,80.9L683.6,80.8L685.0,80.8L686.4,80.8L687.7,80.8L689.1,80.7L690.5,80.7L691.8,80.7L693.2,80.7L694.5,80.6L695.9,80.6L697.3,80.6L698.6,80.6L700.0,80.6" fill="none" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M400.0,79.6L401.4,82.7L402.7,85.7L404.1,88.6L405.5,91.5L406.8,94.3L408.2,97.0L409.5,99.7L410.9,102.3L412.3,104.9L413.6,107.4L415.0,109.8L416.4,112.2L417.7,114.5L419.1,116.8L420.5,119.0L421.8,121.2L423.2,123.3L424.5,125.4L425.9,127.5L427.3,129.4L428.6,131.4L430.0,133.3L431.4,135.1L432.7,137.0L434.1,138.7L435.5,140.5L436.8,142.2L438.2,143.8L439.5,145.5L440.9,147.0L442.3,148.6L443.6,150.1L445.0,151.6L446.4,153.0L447.7,154.4L449.1,155.8L450.5,157.2L451.8,158.5L453.2,159.8L454.5,161.1L455.9,162.3L457.3,163.5L458.6,164.7L460.0,165.8L461.4,167.0L462.7,168.1L464.1,169.1L465.5,170.2L466.8,171.2L468.2,172.2L469.5,173.2L470.9,174.2L472.3,175.1L473.6,176.0L475.0,176.9L476.4,177.8L477.7,178.7L479.1,179.5L480.5,180.3L481.8,181.1L483.2,181.9L484.5,182.7L485.9,183.4L487.3,184.2L488.6,184.9L490.0,185.6L491.4,186.3L492.7,186.9L494.1,187.6L495.5,188.2L496.8,188.8L498.2,189.5L499.5,190.0L500.9,190.6L502.3,191.2L503.6,191.8L505.0,192.3L506.4,192.8L507.7,193.4L509.1,193.9L510.5,194.4L511.8,194.8L513.2,195.3L514.5,195.8L515.9,196.2L517.3,196.7L518.6,197.1L520.0,197.5L521.4,198.0L522.7,198.4L524.1,198.8L525.5,199.1L526.8,199.5L528.2,199.9L529.5,200.3L530.9,200.6L532.3,201.0L533.6,201.3L535.0,201.6L536.4,202.0L537.7,202.3L539.1,202.6L540.5,202.9L541.8,203.2L543.2,203.5L544.5,203.7L545.9,204.0L547.3,204.3L548.6,204.5L550.0,204.8L551.4,205.1L552.7,205.3L554.1,205.5L555.5,205.8L556.8,206.0L558.2,206.2L559.5,206.5L560.9,206.7L562.3,206.9L563.6,207.1L565.0,207.3L566.4,207.5L567.7,207.7L569.1,207.9L570.5,208.0L571.8,208.2L573.2,208.4L574.5,208.6L575.9,208.7L577.3,208.9L578.6,209.1L580.0,209.2L581.4,209.4L582.7,209.5L584.1,209.7L585.5,209.8L586.8,209.9L588.2,210.1L589.5,210.2L590.9,210.3L592.3,210.5L593.6,210.6L595.0,210.7L596.4,210.8L597.7,210.9L599.1,211.1L600.5,211.2L601.8,211.3L603.2,211.4L604.5,211.5L605.9,211.6L607.3,211.7L608.6,211.8L610.0,211.9L611.4,212.0L612.7,212.1L614.1,212.2L615.5,212.2L616.8,212.3L618.2,212.4L619.5,212.5L620.9,212.6L622.3,212.6L623.6,212.7L625.0,212.8L626.4,212.9L627.7,212.9L629.1,213.0L630.5,213.1L631.8,213.1L633.2,213.2L634.5,213.3L635.9,213.3L637.3,213.4L638.6,213.4L640.0,213.5L641.4,213.6L642.7,213.6L644.1,213.7L645.5,213.7L646.8,213.8L648.2,213.8L649.5,213.9L650.9,213.9L652.3,214.0L653.6,214.0L655.0,214.1L656.4,214.1L657.7,214.1L659.1,214.2L660.5,214.2L661.8,214.3L663.2,214.3L664.5,214.3L665.9,214.4L667.3,214.4L668.6,214.5L670.0,214.5L671.4,214.5L672.7,214.6L674.1,214.6L675.5,214.6L676.8,214.6L678.2,214.7L679.5,214.7L680.9,214.7L682.3,214.8L683.6,214.8L685.0,214.8L686.4,214.8L687.7,214.9L689.1,214.9L690.5,214.9L691.8,214.9L693.2,215.0L694.5,215.0L695.9,215.0L697.3,215.0L698.6,215.1L700.0,215.1" fill="none" stroke="#f40086" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><line x1="400" y1="130.091" x2="460" y2="130.091" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="4 4"/><line x1="460" y1="216" x2="460" y2="130.091" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="4 4"/><text x="556" y="90.5455" font-size="10.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">carga</text><text x="544" y="194.182" font-size="10.5" text-anchor="middle" fill="#f40086" font-weight="700">descarga</text><text x="460" y="120.091" font-size="10" text-anchor="middle" fill="#8a8a93" font-weight="700">63%</text><text x="550" y="250" font-size="10.3" text-anchor="middle" fill="#5c5c66">após cerca de 5 constantes de tempo, o processo terminou</text><rect x="20" y="266" width="700" height="46" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="286" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">na eletroporacao</text><text x="370" y="304" font-size="10.4" text-anchor="middle" fill="#5c5c66">Um capacitor carregado a milhares de volts descarrega na cubeta em poucos milissegundos e abre poros na membrana.</text></svg>
O capacitor de placas paralelas e as curvas exponenciais de carga e descarga.

## Circuitos RC: carga e descarga

Ligando um capacitor descarregado a uma fonte \(\mathcal{E}\) através de uma resistência \(R\), a lei das malhas (tema 26) dá \(\mathcal{E} - Ri - q/C = 0\), com \(i = dq/dt\). É uma EDO de primeira ordem (tema 53):

\[ R\,\frac{dq}{dt} + \frac{q}{C} = \mathcal{E} \qquad\Rightarrow\qquad q(t) = C\,\mathcal{E}\left(1 - e^{-t/\tau}\right), \quad \tau = R\,C \]

Na **descarga**, sem fonte:

\[ q(t) = Q_0\,e^{-t/\tau} \qquad\qquad V(t) = V_0\,e^{-t/\tau} \]

A **constante de tempo** \(\tau = RC\) (em segundos) é o tempo para a carga atingir cerca de 63% do valor final na carga, ou cair a cerca de 37% na descarga. Após \(5\tau\), considera-se o processo praticamente completo (menos de 1% de diferença).

## Exemplos resolvidos

**1. Constante de tempo.** Um capacitor de 100 µF descarrega por um resistor de 10 kΩ. Então \(\tau = 10^4\cdot10^{-4} = 1{,}0\) s. Em 3 s, a tensão cai para \(e^{-3} \approx 5\%\) do valor inicial.

**2. Eletroporação.** Um eletroporador descarrega um capacitor de 25 µF, carregado a 2500 V, numa cubeta com 1 mm de distância entre eletrodos (campo de 25 kV/cm, típico para *E. coli*). A energia armazenada é \(U = \tfrac12\cdot25\times10^{-6}\cdot2500^2 \approx 78\) J. Com a resistência da amostra e de um resistor em paralelo, a constante de tempo fica em poucos milissegundos (tipicamente 4 a 5 ms), e é esse pulso curto que abre poros temporários na membrana. Amostras com muito sal têm resistência baixa e podem causar um arco elétrico, por isso o DNA para eletroporação deve ser dessalinizado.

## Na prática: a membrana como capacitor

A membrana plasmática é uma bicamada lipídica isolante, de cerca de 5 nm, entre duas soluções condutoras: comporta-se como um capacitor, com capacitância específica de cerca de 1 µF/cm². Esse valor é praticamente o mesmo para quase todas as células e é usado em eletrofisiologia e em sensores de **biomassa viável** por capacitância (espectroscopia dielétrica): só células com membrana íntegra se polarizam, então o sinal capacitivo de uma sonda num biorreator acompanha a concentração de células vivas em tempo real.

> **Atenção, erros comuns:**
> Associar capacitores com as regras dos resistores.
> Esquecer que, num capacitor isolado (carga fixa), inserir um dielétrico diminui a tensão; ligado à fonte (tensão fixa), aumenta a carga.
> Usar \(\tau = R/C\) em vez de \(RC\).

## Para fixar

- \(C = Q/V\); placas paralelas: \(C = \kappa\varepsilon_0A/d\).
- \(U = \tfrac12CV^2\).
- Circuito RC: crescimento e decaimento exponenciais com \(\tau = RC\).
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 3: Eletromagnetismo. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 25 e 27.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 3: Eletromagnetismo. 2. ed. São Paulo: Blucher, 2015.",
    "SAMBROOK, J.; RUSSELL, D. W. **Molecular cloning**: a laboratory manual. 3. ed. Cold Spring Harbor: Cold Spring Harbor Laboratory Press, 2001.",
  ],
},
{
  id: "r83", num: 83,
  area: "Física Básica: Eletromagnetismo",
  disciplina: "Física Básica: Eletromagnetismo",
  titulo: "Campo magnético e força magnética",
  descricao: "Ímãs e campo magnético, a força de Lorentz sobre cargas em movimento, o movimento circular de partículas, o espectrômetro de massas, a força sobre fios e o torque em espiras e motores.",
  tags: ["Física 3", "magnetismo", "campo magnético", "tesla", "força de Lorentz", "regra da mão direita", "movimento ciclotrônico", "espectrômetro de massas", "efeito Hall", "força sobre fio", "motor elétrico", "momento magnético", "separação magnética"],
  conteudo: String.raw`
## Ímãs e campo magnético

Os ímãs têm dois polos, norte e sul; polos iguais se repelem e diferentes se atraem. Diferentemente das cargas elétricas, **nunca se encontrou um polo isolado**: cortar um ímã ao meio sempre produz dois ímãs menores. As linhas de campo magnético são **fechadas**, saindo do polo norte e voltando pelo sul por dentro do ímã.

A Terra é um grande ímã, e a agulha da bússola aponta para o polo sul magnético, que fica perto do norte geográfico. Hoje se sabe que **todo magnetismo vem de cargas em movimento**: correntes elétricas e o movimento (e o spin) dos elétrons nos átomos.

## A força de Lorentz

Uma carga \(q\) movendo-se com velocidade \(\vec v\) num campo magnético \(\vec B\) sofre uma força:

\[ \vec F = q\,\vec v\times\vec B \qquad\qquad F = |q|\,v\,B\sin\theta \]

A unidade de \(B\) é o **tesla** (T = N/(A·m)). O campo da Terra vale cerca de 50 µT; um ímã de geladeira, uns 5 mT; um aparelho de ressonância magnética, 1,5 a 3 T.

Características dessa força:

- É **perpendicular** tanto à velocidade quanto ao campo (regra da mão direita; para cargas negativas, inverte-se o sentido).
- É nula se a carga está parada ou se move paralelamente ao campo.
- Por ser sempre perpendicular à velocidade, **não realiza trabalho**: muda a direção, mas não a rapidez da partícula.

Com campos elétrico e magnético juntos, a força total é \(\vec F = q(\vec E + \vec v\times\vec B)\).

## Movimento de partículas num campo uniforme

<svg viewBox="0 0 740 310" xmlns="http://www.w3.org/2000/svg" role="img"><title>Força magnética</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Força magnética: perpendicular a velocidade e ao campo</text><rect x="30" y="54" width="330" height="190" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><circle cx="58" cy="80" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="54" y1="76" x2="62" y2="84" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="54" y1="84" x2="62" y2="76" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="58" cy="122" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="54" y1="118" x2="62" y2="126" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="54" y1="126" x2="62" y2="118" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="58" cy="164" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="54" y1="160" x2="62" y2="168" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="54" y1="168" x2="62" y2="160" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="58" cy="206" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="54" y1="202" x2="62" y2="210" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="54" y1="210" x2="62" y2="202" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="114" cy="80" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="110" y1="76" x2="118" y2="84" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="110" y1="84" x2="118" y2="76" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="114" cy="122" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="110" y1="118" x2="118" y2="126" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="110" y1="126" x2="118" y2="118" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="114" cy="164" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="110" y1="160" x2="118" y2="168" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="110" y1="168" x2="118" y2="160" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="114" cy="206" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="110" y1="202" x2="118" y2="210" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="110" y1="210" x2="118" y2="202" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="170" cy="80" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="166" y1="76" x2="174" y2="84" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="166" y1="84" x2="174" y2="76" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="170" cy="122" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="166" y1="118" x2="174" y2="126" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="166" y1="126" x2="174" y2="118" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="170" cy="164" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="166" y1="160" x2="174" y2="168" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="166" y1="168" x2="174" y2="160" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="170" cy="206" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="166" y1="202" x2="174" y2="210" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="166" y1="210" x2="174" y2="202" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="226" cy="80" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="222" y1="76" x2="230" y2="84" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="222" y1="84" x2="230" y2="76" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="226" cy="122" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="222" y1="118" x2="230" y2="126" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="222" y1="126" x2="230" y2="118" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="226" cy="164" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="222" y1="160" x2="230" y2="168" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="222" y1="168" x2="230" y2="160" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="226" cy="206" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="222" y1="202" x2="230" y2="210" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="222" y1="210" x2="230" y2="202" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="282" cy="80" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="278" y1="76" x2="286" y2="84" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="278" y1="84" x2="286" y2="76" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="282" cy="122" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="278" y1="118" x2="286" y2="126" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="278" y1="126" x2="286" y2="118" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="282" cy="164" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="278" y1="160" x2="286" y2="168" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="278" y1="168" x2="286" y2="160" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="282" cy="206" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="278" y1="202" x2="286" y2="210" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="278" y1="210" x2="286" y2="202" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="338" cy="80" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="334" y1="76" x2="342" y2="84" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="334" y1="84" x2="342" y2="76" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="338" cy="122" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="334" y1="118" x2="342" y2="126" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="334" y1="126" x2="342" y2="118" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="338" cy="164" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="334" y1="160" x2="342" y2="168" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="334" y1="168" x2="342" y2="160" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><circle cx="338" cy="206" r="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><line x1="334" y1="202" x2="342" y2="210" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><line x1="334" y1="210" x2="342" y2="202" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round"/><text x="195" y="232" font-size="10.5" text-anchor="middle" fill="#0083cb" font-weight="700">campo entrando na pagina</text><circle cx="196" cy="150" r="62" fill="none" stroke="#f40086" stroke-width="2" stroke-dasharray="5 4"/><circle cx="196" cy="88" r="8" fill="#f40086" stroke="#fff" stroke-width="2"/><line x1="196" y1="88" x2="252" y2="88" stroke="#0a8f5e" stroke-width="2" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="258" y="80" font-size="12" text-anchor="start" fill="#0a8f5e" font-weight="700">v</text><line x1="196" y1="88" x2="196" y2="134" stroke="#a300bc" stroke-width="2" stroke-linecap="round" marker-end="url(#a-rx)"/><text x="206" y="132" font-size="12" text-anchor="start" fill="#a300bc" font-weight="700">F</text><rect x="390" y="54" width="330" height="190" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="555" y="78" font-size="12" text-anchor="middle" fill="#333333" font-weight="700">espectrometro de massas</text><circle cx="430" cy="190" r="6" fill="#c67600" stroke="#c67600" stroke-width="1.4"/><text x="430" y="212" font-size="10" text-anchor="middle" fill="#5c5c66">fonte</text><path d="M436,190 A52,52 0 0 1 540,190" fill="none" stroke="#f40086" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="540" cy="190" r="5" fill="#f40086" stroke="#f40086" stroke-width="1.4"/><text x="540" y="208" font-size="10" text-anchor="middle" fill="#f40086" font-weight="700">leve</text><path d="M436,190 A78,78 0 0 1 592,190" fill="none" stroke="#a300bc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="592" cy="190" r="5" fill="#a300bc" stroke="#a300bc" stroke-width="1.4"/><text x="592" y="208" font-size="10" text-anchor="middle" fill="#a300bc" font-weight="700">pesado</text><text x="555" y="236" font-size="10" text-anchor="middle" fill="#5c5c66">raio proporcional a massa dividida pela carga</text><text x="20" y="284" font-size="11" text-anchor="start" fill="#5c5c66">A força magnética não realiza trabalho: muda a direcao, nunca a rapidez da partícula.</text><text x="20" y="302" font-size="11" text-anchor="start" fill="#5c5c66">O mesmo principio separa proteínas e identifica microrganismos por MALDI-TOF.</text></svg>
A força perpendicular curva a trajetória, e é isso que separa íons por massa.

Se \(\vec v\) é perpendicular a \(\vec B\), a força magnética faz o papel de força centrípeta (tema 63), e a partícula descreve um círculo:

\[ q\,v\,B = \frac{m\,v^2}{r} \;\Rightarrow\; r = \frac{m\,v}{|q|\,B} \qquad\qquad \omega = \frac{|q|\,B}{m} \]

A frequência (frequência ciclotrônica) **não depende da velocidade**. Se a velocidade tem uma componente paralela ao campo, a trajetória é uma hélice. É isso que aprisiona partículas do vento solar no campo da Terra e produz as auroras.

## Aplicações

- **Espectrômetro de massas:** íons acelerados por uma tensão \(V\) entram num campo magnético e descrevem círculos de raio \(r = \dfrac{1}{B}\sqrt{\dfrac{2mV}{q}}\). Íons de massas diferentes caem em posições diferentes. Os espectrômetros modernos usam vários princípios (tempo de voo, quadrupolos, orbitrap), mas todos separam íons pela razão massa/carga. Em biotecnologia, são essenciais para identificar proteínas (proteômica), metabólitos e microrganismos (MALDI-TOF).
- **Seletor de velocidades:** campos \(E\) e \(B\) cruzados só deixam passar sem desvio as partículas com \(v = E/B\).
- **Efeito Hall:** num condutor percorrido por corrente dentro de um campo magnético, as cargas são desviadas para um lado, criando uma tensão transversal proporcional a \(B\). Os sensores Hall medem campos magnéticos e posições em motores, celulares e medidores de vazão.
- **Medidor de vazão eletromagnético:** um líquido condutor (como meio de cultura) passando por um campo magnético gera uma tensão proporcional à velocidade, sem partes móveis em contato com o fluido, o que é ideal para processos estéreis.

## Força sobre um fio com corrente

Um fio de comprimento \(L\), com corrente \(I\), num campo \(\vec B\):

\[ \vec F = I\,\vec L\times\vec B \qquad\qquad F = I\,L\,B\sin\theta \]

## Torque numa espira: o motor elétrico

Numa espira retangular com corrente dentro de um campo, as forças nos lados opostos formam um binário e produzem um **torque**:

\[ \tau = N\,I\,A\,B\sin\theta = \mu\,B\sin\theta \qquad\qquad \vec\mu = N\,I\,A\,\hat n \]

em que \(\vec\mu\) é o **momento magnético** da bobina, com \(N\) espiras de área \(A\). Esse torque tende a alinhar a bobina com o campo. Nos **motores elétricos** de corrente contínua, um comutador inverte a corrente a cada meia volta para manter a rotação. É o que move bombas, agitadores e centrífugas (tema 65).

## Exemplo resolvido

Um próton (\(m = 1{,}67\times10^{-27}\) kg) a \(2{,}0\times10^6\) m/s entra perpendicularmente num campo de 0,50 T.

\[ r = \frac{1{,}67\times10^{-27}\cdot2{,}0\times10^6}{1{,}6\times10^{-19}\cdot0{,}50} \approx 4{,}2\ \text{cm} \]

## Na prática: separação magnética

Microesferas magnéticas recobertas com anticorpos, estreptavidina ou sílica se ligam a células, proteínas ou ácidos nucleicos específicos. Um ímã colocado ao lado do tubo atrai as esferas e permite lavar e separar o material de interesse em minutos, sem centrifugação. É a base de muitos kits de extração de DNA e RNA (temas 58 e 59) e da separação de células por marcadores de superfície.

> **Atenção, erros comuns:**
> Esquecer de inverter o sentido da força para cargas negativas.
> Achar que o campo magnético pode aumentar a energia cinética de uma partícula.
> Usar \(F = qvB\) quando a velocidade não é perpendicular ao campo (falta o \(\sin\theta\)).

## Para fixar

- \(\vec F = q\vec v\times\vec B\): perpendicular, não realiza trabalho.
- Círculo de raio \(r = mv/(|q|B)\).
- Fio: \(\vec F = I\vec L\times\vec B\). Espira: \(\tau = \mu B\sin\theta\), o princípio do motor.
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 3: Eletromagnetismo. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 28: Campos magnéticos.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 3: Eletromagnetismo. 2. ed. São Paulo: Blucher, 2015.",
    "YOUNG, H. D.; FREEDMAN, R. A. **Física III**: eletromagnetismo (Sears e Zemansky). 14. ed. São Paulo: Pearson, 2015.",
  ],
},
{
  id: "r84", num: 84,
  area: "Física Básica: Eletromagnetismo",
  disciplina: "Física Básica: Eletromagnetismo",
  titulo: "Fontes de campo magnético: Biot-Savart e Ampère",
  descricao: "Como correntes geram campos magnéticos: a lei de Biot-Savart, o campo de fios, espiras e solenoides, a força entre fios paralelos, a lei de Ampère em forma integral e os materiais magnéticos.",
  tags: ["Física 3", "magnetismo", "Biot-Savart", "lei de Ampère", "circulação", "fio retilíneo", "espira circular", "solenoide", "toroide", "força entre fios", "ferromagnetismo", "paramagnetismo", "diamagnetismo", "eletroímã"],
  conteudo: String.raw`
## Correntes criam campos magnéticos

Em 1820, Ørsted percebeu que uma bússola se desviava perto de um fio com corrente. Foi a primeira evidência de que eletricidade e magnetismo estão ligados: **cargas em movimento produzem campo magnético**.

## A lei de Biot-Savart

Cada pedaço infinitesimal \(d\vec s\) de um fio com corrente \(I\) contribui para o campo num ponto a uma distância \(r\):

\[ d\vec B = \frac{\mu_0}{4\pi}\,\frac{I\,d\vec s\times\hat r}{r^2} \qquad\qquad \mu_0 = 4\pi\times10^{-7}\ \text{T·m/A} \]

em que \(\mu_0\) é a **permeabilidade do vácuo**. O campo total é a integral ao longo do fio. A estrutura lembra a lei de Coulomb (tema 80), mas com um produto vetorial: o campo é perpendicular tanto ao fio quanto à direção do ponto.

## Campos de configurações importantes

<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" role="img"><title>Fontes de campo magnético</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Correntes criam campos magnéticos</text><rect x="17" y="50" width="216" height="150" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><line x1="125" y1="62" x2="125" y2="184" stroke="#c67600" stroke-width="3" stroke-linecap="round"/><line x1="125" y1="150" x2="125" y2="120" stroke="#c67600" stroke-width="2" stroke-linecap="round" marker-end="url(#a-la)"/><circle cx="125" cy="122" r="22" fill="none" stroke="#0083cb" stroke-width="1.3" stroke-dasharray="5 4"/><circle cx="125" cy="122" r="40" fill="none" stroke="#0083cb" stroke-width="1.3" stroke-dasharray="5 4"/><circle cx="125" cy="122" r="58" fill="none" stroke="#0083cb" stroke-width="1.3" stroke-dasharray="5 4"/><circle cx="183" cy="122" r="5" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="197" y="126" font-size="11" text-anchor="start" fill="#0083cb" font-weight="700">B</text><text x="113" y="74" font-size="11" text-anchor="end" fill="#c67600" font-weight="700">I</text><text x="125" y="220" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">fio retilineo</text><text x="125" y="238" font-size="10.5" text-anchor="middle" fill="#5c5c66">B = mu0 I / (2 pi r)</text><rect x="262" y="50" width="216" height="150" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><ellipse cx="370" cy="136" rx="52" ry="20" fill="none" stroke="#c67600" stroke-width="3"/><line x1="370" y1="94" x2="370" y2="62" stroke="#0083cb" stroke-width="2" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="370" y1="168" x2="370" y2="136" stroke="#0083cb" stroke-width="2" stroke-linecap="round" marker-end="url(#a-az)"/><text x="382" y="68" font-size="11" text-anchor="start" fill="#0083cb" font-weight="700">B</text><text x="432" y="140" font-size="11" text-anchor="start" fill="#c67600" font-weight="700">I</text><text x="370" y="220" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">espira</text><text x="370" y="238" font-size="10.5" text-anchor="middle" fill="#5c5c66">B = mu0 I / (2 R)</text><rect x="507" y="50" width="216" height="150" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><ellipse cx="549" cy="122" rx="8" ry="30" fill="none" stroke="#c67600" stroke-width="2.4"/><ellipse cx="571" cy="122" rx="8" ry="30" fill="none" stroke="#c67600" stroke-width="2.4"/><ellipse cx="593" cy="122" rx="8" ry="30" fill="none" stroke="#c67600" stroke-width="2.4"/><ellipse cx="615" cy="122" rx="8" ry="30" fill="none" stroke="#c67600" stroke-width="2.4"/><ellipse cx="637" cy="122" rx="8" ry="30" fill="none" stroke="#c67600" stroke-width="2.4"/><ellipse cx="659" cy="122" rx="8" ry="30" fill="none" stroke="#c67600" stroke-width="2.4"/><ellipse cx="681" cy="122" rx="8" ry="30" fill="none" stroke="#c67600" stroke-width="2.4"/><line x1="539" y1="122" x2="691" y2="122" stroke="#0083cb" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-az)"/><text x="615" y="76" font-size="10" text-anchor="middle" fill="#0083cb" font-weight="700">campo uniforme dentro</text><text x="615" y="220" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">solenoide</text><text x="615" y="238" font-size="10.5" text-anchor="middle" fill="#5c5c66">B = mu0 n I</text><text x="20" y="266" font-size="10.8" text-anchor="start" fill="#5c5c66">A lei de Ampere relaciona a circulacao de B com a corrente envolvida, e simplifica esses calculos quando ha simetria.</text></svg>
O campo de um fio, de uma espira e de um solenoide.

**Fio retilíneo longo.** Integrando Biot-Savart ao longo de um fio infinito:

\[ B = \frac{\mu_0\,I}{2\pi\,r} \]

As linhas de campo são círculos concêntricos ao fio. O sentido segue a **regra da mão direita**: o polegar no sentido da corrente, os dedos curvados indicam o campo.

**Centro de uma espira circular** de raio \(R\): cada elemento \(d\vec s\) é perpendicular a \(\hat r\) e está à mesma distância:

\[ B = \frac{\mu_0 I}{4\pi R^2}\oint ds = \frac{\mu_0\,I}{2\,R} \]

Com \(N\) espiras juntas, multiplica-se por \(N\). Longe da espira, o campo se parece com o de um pequeno ímã (um dipolo magnético).

## A força entre fios paralelos

Cada fio está no campo do outro. Para dois fios paralelos, separados por \(d\):

\[ \frac{F}{L} = \frac{\mu_0\,I_1\,I_2}{2\pi\,d} \]

Correntes no **mesmo sentido se atraem**; em sentidos opostos, se repelem. Até 2019, o ampère era definido por essa força.

## A lei de Ampère

Assim como a lei de Gauss simplifica o cálculo de campos elétricos com simetria, a **lei de Ampère** simplifica o de campos magnéticos. A **circulação** de \(\vec B\) ao longo de qualquer curva fechada é proporcional à corrente que atravessa a área limitada por ela:

\[ \oint\vec B\cdot d\vec s = \mu_0\,I_{env} \]

**Fio retilíneo:** escolhendo um círculo de raio \(r\) em torno do fio, \(B\cdot2\pi r = \mu_0 I\), e recupera-se \(B = \mu_0I/(2\pi r)\) em uma linha.

**Dentro de um fio grosso** de raio \(R\), com corrente uniforme: a corrente envolvida por um círculo de raio \(r \lt R\) é \(I\,r^2/R^2\), e então \(B = \dfrac{\mu_0 I\,r}{2\pi R^2}\), crescendo linearmente do centro até a superfície.

**Solenoide:** uma bobina longa com \(n\) espiras por unidade de comprimento. Dentro dela, o campo é praticamente **uniforme** e paralelo ao eixo; fora, quase zero. Usando um retângulo que atravessa as espiras:

\[ B = \mu_0\,n\,I \]

**Toroide:** um solenoide fechado em forma de anel, com \(N\) espiras: \(B = \dfrac{\mu_0 N I}{2\pi r}\), confinado dentro do anel.

A lei de Ampère, nesta forma, vale para correntes estacionárias. Maxwell acrescentou um termo para campos elétricos variáveis (tema 87).

## Materiais magnéticos

Os átomos se comportam como pequenos ímãs, por causa do movimento e do spin dos elétrons. A resposta de um material a um campo externo define três classes:

| Classe | Comportamento | Exemplos |
|---|---|---|
| Diamagnético | é fracamente **repelido**; a magnetização se opõe ao campo | água, cobre, a maior parte das biomoléculas |
| Paramagnético | é fracamente **atraído**; os momentos se alinham parcialmente ao campo | alumínio, oxigênio, íons de gadolínio |
| Ferromagnético | é **fortemente** atraído; os domínios magnéticos se alinham e podem permanecer alinhados | ferro, níquel, cobalto, magnetita |

Acima da **temperatura de Curie**, os ferromagnéticos perdem a magnetização permanente. Um núcleo de ferro dentro de um solenoide multiplica o campo por centenas ou milhares de vezes: é o **eletroímã**, usado em relés, guindastes e motores. Os agentes de contraste de ressonância magnética usam íons paramagnéticos de gadolínio, e as nanopartículas de óxido de ferro, por serem superparamagnéticas, são usadas na separação magnética (tema 83).

## Exemplo resolvido

Um solenoide de 20 cm, com 1000 espiras, percorrido por 2,0 A: \(n = 5000\) espiras/m, e

\[ B = 4\pi\times10^{-7}\cdot5000\cdot2{,}0 \approx 1{,}26\times10^{-2}\ \text{T} = 12{,}6\ \text{mT} \]

cerca de 250 vezes o campo da Terra. Com um núcleo de ferro, o campo poderia chegar a mais de 1 T.

## Na prática: agitadores magnéticos

Um agitador magnético gira um ímã sob a bancada, e a barra magnética revestida de teflon dentro do frasco o acompanha por atração magnética. Em biorreatores selados, **acoplamentos magnéticos** transmitem o torque do motor para o eixo do impelidor através da parede, sem selos mecânicos que poderiam ser porta de entrada para contaminação.

> **Atenção, erros comuns:**
> Aplicar a lei de Ampère sem simetria suficiente.
> Errar o sentido do campo: use sempre a regra da mão direita.
> Achar que materiais diamagnéticos não respondem a campos magnéticos: respondem, mas fracamente e com repulsão.

## Para fixar

- Biot-Savart: \(d\vec B = \dfrac{\mu_0}{4\pi}\dfrac{I\,d\vec s\times\hat r}{r^2}\).
- Fio: \(B = \mu_0I/(2\pi r)\); espira: \(\mu_0I/(2R)\); solenoide: \(\mu_0nI\).
- Ampère: \(\oint\vec B\cdot d\vec s = \mu_0I_{env}\).
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 3: Eletromagnetismo. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 29 e 32.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 3: Eletromagnetismo. 2. ed. São Paulo: Blucher, 2015.",
    "GRIFFITHS, D. J. **Eletrodinâmica**. 3. ed. São Paulo: Pearson, 2011.",
  ],
},
{
  id: "r85", num: 85,
  area: "Física Básica: Eletromagnetismo",
  disciplina: "Física Básica: Eletromagnetismo",
  titulo: "Indução eletromagnética",
  descricao: "Fluxo magnético, a lei de Faraday e a lei de Lenz, força eletromotriz de movimento, geradores, correntes parasitas, indutância, energia magnética e o circuito RL.",
  tags: ["Física 3", "indução eletromagnética", "fluxo magnético", "lei de Faraday", "lei de Lenz", "fem induzida", "gerador", "correntes de Foucault", "indutância", "autoindução", "circuito RL", "energia magnética", "indução"],
  conteudo: String.raw`
## Campos magnéticos que variam geram correntes

Se correntes criam campos magnéticos (tema 84), será que campos magnéticos criam correntes? Faraday descobriu, em 1831, que sim, mas só quando o campo **varia**. Um ímã parado dentro de uma bobina não produz nada; um ímã em movimento produz corrente. Esse fenômeno, a **indução eletromagnética**, é a base da geração de praticamente toda a eletricidade que usamos.

## Fluxo magnético

O **fluxo magnético** através de uma superfície é:

\[ \Phi_B = \int\vec B\cdot d\vec A \qquad\xrightarrow{B\ \text{uniforme}}\qquad \Phi_B = B\,A\cos\theta \]

A unidade é o weber (Wb = T·m²). O fluxo pode mudar se mudar o campo, a área ou o ângulo entre eles.

## A lei de Faraday

A força eletromotriz (fem) induzida numa espira é igual à taxa de variação do fluxo através dela:

\[ \mathcal{E} = -\frac{d\Phi_B}{dt} \qquad\text{(com } N \text{ espiras: } \mathcal{E} = -N\,\frac{d\Phi_B}{dt}) \]

Em forma integral, ligando o campo elétrico induzido à variação do campo magnético:

\[ \oint\vec E\cdot d\vec s = -\frac{d}{dt}\int\vec B\cdot d\vec A \]

Esse campo elétrico induzido é diferente do eletrostático: suas linhas são fechadas, e ele não pode ser descrito por um potencial. É uma das equações de Maxwell (tema 87).

## A lei de Lenz

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Indução eletromagnetica</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Lei de Faraday e lei de Lenz</text><rect x="40" y="52" width="320" height="180" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><ellipse cx="256" cy="142" rx="26" ry="56" fill="none" stroke="#c67600" stroke-width="3"/><rect x="108" y="120" width="40" height="44" rx="3" fill="#d33a4e" stroke="#d33a4e" stroke-width="1"/><rect x="148" y="120" width="40" height="44" rx="3" fill="#0083cb" stroke="#0083cb" stroke-width="1"/><text x="128" y="148" font-size="13" text-anchor="middle" fill="#fff" font-weight="700">N</text><text x="168" y="148" font-size="13" text-anchor="middle" fill="#fff" font-weight="700">S</text><line x1="196" y1="142" x2="230" y2="142" stroke="#333333" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-ti)"/><path d="M249.749,106.547 A36,36 0 1 1 249.749,177.453" fill="none" stroke="#0a8f5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-ve)"/><text x="256" y="220" font-size="10.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">corrente induzida</text><text x="200" y="248" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">ima se aproxima</text><text x="200" y="266" font-size="10.5" text-anchor="middle" fill="#5c5c66">a espira o repele</text><rect x="370" y="52" width="320" height="180" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><ellipse cx="586" cy="142" rx="26" ry="56" fill="none" stroke="#c67600" stroke-width="3"/><rect x="438" y="120" width="40" height="44" rx="3" fill="#d33a4e" stroke="#d33a4e" stroke-width="1"/><rect x="478" y="120" width="40" height="44" rx="3" fill="#0083cb" stroke="#0083cb" stroke-width="1"/><text x="458" y="148" font-size="13" text-anchor="middle" fill="#fff" font-weight="700">N</text><text x="498" y="148" font-size="13" text-anchor="middle" fill="#fff" font-weight="700">S</text><line x1="560" y1="142" x2="526" y2="142" stroke="#333333" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-ti)"/><path d="M579.749,177.453 A36,36 0 0 1 579.749,106.547" fill="none" stroke="#0a8f5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-ve)"/><text x="586" y="220" font-size="10.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">corrente induzida</text><text x="530" y="248" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">ima se afasta</text><text x="530" y="266" font-size="10.5" text-anchor="middle" fill="#5c5c66">a espira o atrai</text><text x="20" y="294" font-size="11" text-anchor="start" fill="#5c5c66">A corrente induzida sempre se opoe a variacao que a criou: se ajudasse, criaria energia do nada.</text></svg>
A corrente induzida sempre cria um campo que se opõe à variação do fluxo.

O sinal negativo na lei de Faraday tem um significado físico: a corrente induzida tem um sentido tal que o campo magnético criado por ela **se opõe à variação** do fluxo que a produziu. Se um ímã se aproxima de uma espira, a corrente induzida cria um polo que o repele; se ele se afasta, cria um polo que o atrai.

A lei de Lenz é uma consequência da conservação de energia: se a corrente induzida ajudasse a variação, o processo se alimentaria sozinho e criaria energia do nada.

## Fem de movimento

Uma barra condutora de comprimento \(L\), deslizando com velocidade \(v\) sobre trilhos, perpendicular a um campo \(B\), varre uma área que cresce \(Lv\) por segundo:

\[ \mathcal{E} = B\,L\,v \]

A mesma resposta sai da força de Lorentz (tema 83) sobre os elétrons da barra. Para manter a barra em movimento, é preciso empurrá-la contra a força magnética sobre a corrente induzida: o trabalho mecânico vira energia elétrica.

## Geradores e transformadores

- **Gerador de corrente alternada:** uma bobina de \(N\) espiras e área \(A\) gira com velocidade angular \(\omega\) num campo \(B\). O fluxo varia como \(BA\cos\omega t\), e a fem é senoidal (tema 86):
\[ \mathcal{E}(t) = N\,B\,A\,\omega\,\sin\omega t \]
Usinas hidrelétricas, termelétricas e eólicas usam esse princípio. Na rede brasileira, \(f = 60\) Hz.
- **Transformador:** duas bobinas enroladas no mesmo núcleo de ferro. A corrente alternada no primário cria um fluxo variável, que induz tensão no secundário: \(V_2/V_1 = N_2/N_1\). Só funciona com corrente **alternada**.

## Correntes parasitas (de Foucault)

Um bloco de metal num campo magnético variável (ou movendo-se num campo) tem correntes induzidas circulando dentro dele, que dissipam energia como calor. Elas são aproveitadas em **freios magnéticos** de trens e montanhas-russas, em **fogões de indução** e em detectores de metais. Em transformadores e motores, são indesejáveis, e por isso os núcleos são feitos de lâminas finas isoladas.

## Indutância

Uma bobina com corrente variável induz uma fem **nela mesma** (autoindução), que se opõe à variação da corrente:

\[ \mathcal{E}_L = -L\,\frac{di}{dt} \]

A **indutância** \(L\), em henry (H), depende da geometria. Para um solenoide de comprimento \(\ell\), área \(A\) e \(n\) espiras por metro, \(L = \mu_0 n^2 A\ell\). O indutor é a "inércia" do circuito: resiste a mudanças bruscas de corrente.

A energia armazenada no campo magnético de um indutor é:

\[ U = \tfrac12 L\,i^2 \qquad\text{com densidade}\qquad u = \frac{B^2}{2\mu_0} \]

## O circuito RL

Ligando uma fonte \(\mathcal{E}\) a um resistor e um indutor em série:

\[ L\,\frac{di}{dt} + R\,i = \mathcal{E} \qquad\Rightarrow\qquad i(t) = \frac{\mathcal{E}}{R}\left(1 - e^{-t/\tau}\right), \quad \tau = \frac{L}{R} \]

A corrente não salta: cresce exponencialmente, como a carga no circuito RC (tema 82). Ao desligar um circuito indutivo bruscamente, a variação muito rápida da corrente pode gerar tensões altíssimas e faíscas, o que exige diodos de proteção em relés e motores.

## Exemplo resolvido

Uma bobina de 200 espiras e área de 50 cm² está num campo perpendicular que cai uniformemente de 0,40 T a zero em 0,10 s.

\[ |\mathcal{E}| = N\,\frac{\Delta\Phi}{\Delta t} = 200\cdot\frac{0{,}40\cdot50\times10^{-4}}{0{,}10} = 4{,}0\ \text{V} \]

## Na prática

- **Ressonância magnética nuclear (RMN):** os núcleos atômicos, em precessão num campo forte, induzem uma fem minúscula numa bobina receptora. É o sinal da RMN usada para determinar estruturas de proteínas e metabólitos, e da ressonância magnética de imagem.
- **Medidores de vazão eletromagnéticos** usam a fem de movimento (tema 83).
- **Estimulação magnética transcraniana:** pulsos magnéticos induzem correntes em regiões do cérebro.

> **Atenção, erros comuns:**
> Achar que um campo magnético forte e **constante** induz corrente numa espira parada.
> Esquecer o número de espiras \(N\).
> Errar o sentido da corrente induzida: a lei de Lenz se opõe à **variação** do fluxo, não ao fluxo.

## Para fixar

- Faraday: \(\mathcal{E} = -N\,d\Phi_B/dt\). Lenz: a indução se opõe à variação.
- Geradores convertem rotação em fem senoidal; transformadores só funcionam com corrente alternada.
- Indutor: \(\mathcal{E}_L = -L\,di/dt\), \(U = \tfrac12Li^2\), circuito RL com \(\tau = L/R\).
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 3: Eletromagnetismo. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 30: Indução e indutância.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 3: Eletromagnetismo. 2. ed. São Paulo: Blucher, 2015.",
    "YOUNG, H. D.; FREEDMAN, R. A. **Física III**: eletromagnetismo (Sears e Zemansky). 14. ed. São Paulo: Pearson, 2015.",
  ],
},
{
  id: "r86", num: 86,
  area: "Física Básica: Eletromagnetismo",
  disciplina: "Física Básica: Eletromagnetismo",
  titulo: "Corrente alternada",
  descricao: "Tensão e corrente senoidais, valores eficazes, resistores, capacitores e indutores em CA, reatância e impedância, o circuito RLC e a ressonância, potência e fator de potência, e a distribuição de energia.",
  tags: ["Física 3", "corrente alternada", "CA", "senoide", "valor eficaz", "RMS", "reatância", "impedância", "fasor", "circuito RLC", "ressonância", "fator de potência", "transformador", "trifásico"],
  conteudo: String.raw`
## Por que corrente alternada

A energia elétrica chega às tomadas como **corrente alternada** (CA): a tensão oscila senoidalmente, invertendo o sentido 60 vezes por segundo no Brasil. A CA venceu a corrente contínua na distribuição de energia porque pode ser facilmente elevada e abaixada por **transformadores** (tema 85). Transmitir em alta tensão reduz a corrente e, com ela, as perdas por efeito Joule nos cabos (\(P = RI^2\)).

## Grandezas senoidais e valores eficazes

\[ v(t) = V_p\,\sin(\omega t) \qquad\qquad \omega = 2\pi f \]

A média de uma senoide ao longo de um ciclo é zero, mas a potência dissipada num resistor não é. Por isso se usa o **valor eficaz** (ou RMS, raiz da média dos quadrados), que é o valor de uma tensão contínua que dissiparia a mesma potência:

\[ V_{ef} = \frac{V_p}{\sqrt2} \qquad\qquad I_{ef} = \frac{I_p}{\sqrt2} \]

Os "127 V" ou "220 V" da tomada são valores eficazes. A tensão de pico de uma rede de 220 V é \(220\sqrt2 \approx 311\) V.

## Os três elementos em CA

| Elemento | Relação entre tensão e corrente | Oposição | Defasagem |
|---|---|---|---|
| Resistor | \(V = RI\) | resistência \(R\) | em fase |
| Capacitor | \(I = C\,dV/dt\) | reatância capacitiva \(X_C = \dfrac{1}{\omega C}\) | corrente **adiantada** 90° |
| Indutor | \(V = L\,dI/dt\) | reatância indutiva \(X_L = \omega L\) | corrente **atrasada** 90° |

As reatâncias também se medem em ohms, mas dependem da frequência:

- o **capacitor** bloqueia corrente contínua (\(\omega = 0\), \(X_C\) infinita) e deixa passar frequências altas;
- o **indutor** deixa passar corrente contínua e bloqueia frequências altas.

Essa diferença é usada em **filtros** que separam sinais de frequências diferentes, por exemplo para remover o ruído de 60 Hz da rede dos sinais de sensores.

## Impedância e o circuito RLC série

Por causa das defasagens, as oposições não se somam diretamente. Representando as grandezas como **fasores** (vetores girantes, ou números complexos), a oposição total do circuito RLC em série é a **impedância**:

\[ Z = \sqrt{R^2 + (X_L - X_C)^2} \qquad\qquad I_{ef} = \frac{V_{ef}}{Z} \qquad\qquad \tan\phi = \frac{X_L - X_C}{R} \]

O ângulo \(\phi\) é a defasagem entre a tensão da fonte e a corrente.

<svg viewBox="0 0 740 330" xmlns="http://www.w3.org/2000/svg" role="img"><title>Corrente alternada</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Corrente alternada: valores eficazes, reatancia e ressonância</text><rect x="50" y="56" width="310" height="150" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="127.5" y1="56" x2="127.5" y2="206" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="205" y1="56" x2="205" y2="206" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="282.5" y1="56" x2="282.5" y2="206" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="360" y1="56" x2="360" y2="206" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="177.875" x2="360" y2="177.875" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="131" x2="360" y2="131" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="84.125" x2="360" y2="84.125" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="56" x2="50" y2="206" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="50" y1="131" x2="360" y2="131" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="127.5" y="221" font-size="10.5" text-anchor="middle" fill="#8a8a93">0.5</text><text x="205" y="221" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="282.5" y="221" font-size="10.5" text-anchor="middle" fill="#8a8a93">1.5</text><text x="360" y="221" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="44" y="181.375" font-size="10.5" text-anchor="end" fill="#8a8a93">-1</text><text x="44" y="87.625" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="364" y="210" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">ciclos</text><text x="46" y="50" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">V</text><path d="M50.0,131.0L51.4,127.2L52.8,123.4L54.2,119.7L55.6,116.0L57.0,112.3L58.5,108.7L59.9,105.2L61.3,101.8L62.7,98.4L64.1,95.2L65.5,92.0L66.9,89.0L68.3,86.2L69.7,83.5L71.1,80.9L72.5,78.5L74.0,76.3L75.4,74.2L76.8,72.4L78.2,70.7L79.6,69.2L81.0,68.0L82.4,66.9L83.8,66.0L85.2,65.4L86.6,65.0L88.0,64.7L89.5,64.7L90.9,65.0L92.3,65.4L93.7,66.0L95.1,66.9L96.5,68.0L97.9,69.2L99.3,70.7L100.7,72.4L102.1,74.2L103.5,76.3L105.0,78.5L106.4,80.9L107.8,83.5L109.2,86.2L110.6,89.0L112.0,92.0L113.4,95.2L114.8,98.4L116.2,101.8L117.6,105.2L119.0,108.7L120.5,112.3L121.9,116.0L123.3,119.7L124.7,123.4L126.1,127.2L127.5,131.0L128.9,134.8L130.3,138.6L131.7,142.3L133.1,146.0L134.5,149.7L136.0,153.3L137.4,156.8L138.8,160.2L140.2,163.6L141.6,166.8L143.0,170.0L144.4,173.0L145.8,175.8L147.2,178.5L148.6,181.1L150.0,183.5L151.5,185.7L152.9,187.8L154.3,189.6L155.7,191.3L157.1,192.8L158.5,194.0L159.9,195.1L161.3,196.0L162.7,196.6L164.1,197.0L165.5,197.3L167.0,197.3L168.4,197.0L169.8,196.6L171.2,196.0L172.6,195.1L174.0,194.0L175.4,192.8L176.8,191.3L178.2,189.6L179.6,187.8L181.0,185.7L182.5,183.5L183.9,181.1L185.3,178.5L186.7,175.8L188.1,173.0L189.5,170.0L190.9,166.8L192.3,163.6L193.7,160.2L195.1,156.8L196.5,153.3L198.0,149.7L199.4,146.0L200.8,142.3L202.2,138.6L203.6,134.8L205.0,131.0L206.4,127.2L207.8,123.4L209.2,119.7L210.6,116.0L212.0,112.3L213.5,108.7L214.9,105.2L216.3,101.8L217.7,98.4L219.1,95.2L220.5,92.0L221.9,89.0L223.3,86.2L224.7,83.5L226.1,80.9L227.5,78.5L229.0,76.3L230.4,74.2L231.8,72.4L233.2,70.7L234.6,69.2L236.0,68.0L237.4,66.9L238.8,66.0L240.2,65.4L241.6,65.0L243.0,64.7L244.5,64.7L245.9,65.0L247.3,65.4L248.7,66.0L250.1,66.9L251.5,68.0L252.9,69.2L254.3,70.7L255.7,72.4L257.1,74.2L258.5,76.3L260.0,78.5L261.4,80.9L262.8,83.5L264.2,86.2L265.6,89.0L267.0,92.0L268.4,95.2L269.8,98.4L271.2,101.8L272.6,105.2L274.0,108.7L275.5,112.3L276.9,116.0L278.3,119.7L279.7,123.4L281.1,127.2L282.5,131.0L283.9,134.8L285.3,138.6L286.7,142.3L288.1,146.0L289.5,149.7L291.0,153.3L292.4,156.8L293.8,160.2L295.2,163.6L296.6,166.8L298.0,170.0L299.4,173.0L300.8,175.8L302.2,178.5L303.6,181.1L305.0,183.5L306.5,185.7L307.9,187.8L309.3,189.6L310.7,191.3L312.1,192.8L313.5,194.0L314.9,195.1L316.3,196.0L317.7,196.6L319.1,197.0L320.5,197.3L322.0,197.3L323.4,197.0L324.8,196.6L326.2,196.0L327.6,195.1L329.0,194.0L330.4,192.8L331.8,191.3L333.2,189.6L334.6,187.8L336.0,185.7L337.5,183.5L338.9,181.1L340.3,178.5L341.7,175.8L343.1,173.0L344.5,170.0L345.9,166.8L347.3,163.6L348.7,160.2L350.1,156.8L351.5,153.3L353.0,149.7L354.4,146.0L355.8,142.3L357.2,138.6L358.6,134.8L360.0,131.0" fill="none" stroke="#0083cb" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><line x1="50" y1="84.125" x2="360" y2="84.125" stroke="#f40086" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="5 4"/><line x1="50" y1="177.875" x2="360" y2="177.875" stroke="#f40086" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="5 4"/><text x="354" y="76.125" font-size="10" text-anchor="end" fill="#f40086" font-weight="700">valor eficaz</text><text x="88.75" y="58.6875" font-size="10" text-anchor="middle" fill="#0083cb" font-weight="700">valor de pico</text><text x="205" y="238" font-size="10.5" text-anchor="middle" fill="#5c5c66">a tomada de 220 V tem pico de cerca de 311 V</text><rect x="410" y="56" width="280" height="150" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="468.333" y1="56" x2="468.333" y2="206" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="526.667" y1="56" x2="526.667" y2="206" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="585" y1="56" x2="585" y2="206" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="643.333" y1="56" x2="643.333" y2="206" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="410" y1="140.783" x2="690" y2="140.783" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="410" y1="75.5652" x2="690" y2="75.5652" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="410" y1="56" x2="410" y2="206" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="410" y1="206" x2="690" y2="206" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="468.333" y="221" font-size="10.5" text-anchor="middle" fill="#8a8a93">0.5</text><text x="526.667" y="221" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="585" y="221" font-size="10.5" text-anchor="middle" fill="#8a8a93">1.5</text><text x="643.333" y="221" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="404" y="144.283" font-size="10.5" text-anchor="end" fill="#8a8a93">0.5</text><text x="404" y="79.0652" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="694" y="210" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">freq.</text><text x="406" y="50" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">corrente</text><path d="M411.3,205.8L412.5,205.5L413.8,205.3L415.1,205.0L416.4,204.8L417.6,204.6L418.9,204.3L420.2,204.1L421.5,203.8L422.7,203.6L424.0,203.4L425.3,203.1L426.5,202.9L427.8,202.6L429.1,202.3L430.4,202.1L431.6,201.8L432.9,201.6L434.2,201.3L435.5,201.0L436.7,200.7L438.0,200.5L439.3,200.2L440.5,199.9L441.8,199.6L443.1,199.3L444.4,199.0L445.6,198.7L446.9,198.4L448.2,198.0L449.5,197.7L450.7,197.4L452.0,197.0L453.3,196.7L454.5,196.3L455.8,195.9L457.1,195.6L458.4,195.2L459.6,194.7L460.9,194.3L462.2,193.9L463.5,193.5L464.7,193.0L466.0,192.5L467.3,192.0L468.5,191.5L469.8,191.0L471.1,190.4L472.4,189.9L473.6,189.3L474.9,188.6L476.2,188.0L477.5,187.3L478.7,186.6L480.0,185.9L481.3,185.1L482.5,184.3L483.8,183.4L485.1,182.5L486.4,181.5L487.6,180.5L488.9,179.5L490.2,178.3L491.5,177.1L492.7,175.8L494.0,174.5L495.3,173.0L496.5,171.4L497.8,169.7L499.1,167.9L500.4,165.9L501.6,163.8L502.9,161.5L504.2,159.0L505.5,156.3L506.7,153.3L508.0,150.0L509.3,146.4L510.5,142.4L511.8,138.1L513.1,133.3L514.4,128.0L515.6,122.2L516.9,116.0L518.2,109.4L519.5,102.5L520.7,95.5L522.0,88.9L523.3,83.1L524.5,78.6L525.8,76.1L527.1,75.7L528.4,77.5L529.6,81.1L530.9,86.1L532.2,91.9L533.5,98.1L534.7,104.3L536.0,110.2L537.3,115.8L538.5,121.1L539.8,125.9L541.1,130.3L542.4,134.3L543.6,137.9L544.9,141.3L546.2,144.3L547.5,147.1L548.7,149.7L550.0,152.0L551.3,154.2L552.5,156.2L553.8,158.0L555.1,159.8L556.4,161.3L557.6,162.8L558.9,164.2L560.2,165.5L561.5,166.7L562.7,167.9L564.0,168.9L565.3,170.0L566.5,170.9L567.8,171.8L569.1,172.7L570.4,173.5L571.6,174.2L572.9,175.0L574.2,175.7L575.5,176.3L576.7,176.9L578.0,177.5L579.3,178.1L580.5,178.7L581.8,179.2L583.1,179.7L584.4,180.2L585.6,180.6L586.9,181.1L588.2,181.5L589.5,181.9L590.7,182.3L592.0,182.7L593.3,183.1L594.5,183.5L595.8,183.8L597.1,184.1L598.4,184.5L599.6,184.8L600.9,185.1L602.2,185.4L603.5,185.6L604.7,185.9L606.0,186.2L607.3,186.5L608.5,186.7L609.8,186.9L611.1,187.2L612.4,187.4L613.6,187.6L614.9,187.9L616.2,188.1L617.5,188.3L618.7,188.5L620.0,188.7L621.3,188.9L622.5,189.1L623.8,189.2L625.1,189.4L626.4,189.6L627.6,189.8L628.9,189.9L630.2,190.1L631.5,190.3L632.7,190.4L634.0,190.6L635.3,190.7L636.5,190.9L637.8,191.0L639.1,191.1L640.4,191.3L641.6,191.4L642.9,191.6L644.2,191.7L645.5,191.8L646.7,191.9L648.0,192.1L649.3,192.2L650.5,192.3L651.8,192.4L653.1,192.5L654.4,192.6L655.6,192.7L656.9,192.8L658.2,192.9L659.5,193.1L660.7,193.2L662.0,193.3L663.3,193.3L664.5,193.4L665.8,193.5L667.1,193.6L668.4,193.7L669.6,193.8L670.9,193.9L672.2,194.0L673.5,194.1L674.7,194.2L676.0,194.2L677.3,194.3L678.5,194.4L679.8,194.5L681.1,194.6L682.4,194.6L683.6,194.7L684.9,194.8L686.2,194.9L687.5,194.9L688.7,195.0L690.0,195.1" fill="none" stroke="#a300bc" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><line x1="526.667" y1="56" x2="526.667" y2="206" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="4 4"/><text x="526.667" y="48" font-size="10.5" text-anchor="middle" fill="#a300bc" font-weight="700">ressonância</text><text x="560" y="238" font-size="10.5" text-anchor="middle" fill="#5c5c66">quando as reatancias se cancelam, a corrente e máxima</text><rect x="20" y="252" width="700" height="70" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="274" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">por que o capacitor e o indutor não consomem energia</text><text x="370" y="294" font-size="10.6" text-anchor="middle" fill="#5c5c66">Eles armazenam e devolvem energia a cada ciclo. So o resistor dissipa. Por isso a potencia média e</text><text x="370" y="310" font-size="10.6" text-anchor="middle" fill="#5c5c66">tensão vezes corrente vezes o fator de potencia, e industrias corrigem esse fator com bancos de capacitores.</text></svg>
Valores eficazes de uma tensão senoidal e a curva de ressonância de um circuito RLC.

## Ressonância

Quando \(X_L = X_C\), as reatâncias se cancelam, \(Z = R\) (o mínimo possível) e a corrente é máxima. Isso acontece na **frequência de ressonância**:

\[ \omega_0 = \frac{1}{\sqrt{LC}} \qquad\qquad f_0 = \frac{1}{2\pi\sqrt{LC}} \]

É o análogo elétrico da ressonância mecânica (tema 68): \(L\) faz o papel da massa, \(1/C\) o da constante da mola e \(R\) o do amortecimento. Sintonizar um rádio é ajustar \(C\) para que \(f_0\) coincida com a frequência da estação.

## Potência em CA e fator de potência

A potência média consumida é:

\[ P = V_{ef}\,I_{ef}\cos\phi \]

O fator \(\cos\phi\) é o **fator de potência**. Só os resistores consomem energia de fato; capacitores e indutores apenas armazenam e devolvem energia a cada ciclo. Motores elétricos são indutivos e têm \(\cos\phi \lt 1\): circula mais corrente do que o necessário para a potência útil, sobrecarregando cabos e transformadores. Indústrias com fator de potência abaixo de 0,92 pagam multa às distribuidoras no Brasil, e corrigem o problema instalando **bancos de capacitores**.

## Exemplo resolvido

Um circuito RLC em série tem \(R = 30\ \Omega\), \(L = 0{,}20\) H e \(C = 50\) µF, ligado a 127 V e 60 Hz.

\[ \omega = 377\ \text{rad/s} \qquad X_L = 377\cdot0{,}20 \approx 75{,}4\ \Omega \qquad X_C = \frac{1}{377\cdot50\times10^{-6}} \approx 53{,}1\ \Omega \]

\[ Z = \sqrt{30^2 + 22{,}3^2} \approx 37{,}4\ \Omega \qquad I_{ef} = \frac{127}{37{,}4} \approx 3{,}4\ \text{A} \qquad \cos\phi = \frac{30}{37{,}4} \approx 0{,}80 \]

A potência média é \(127\cdot3{,}4\cdot0{,}80 \approx 345\) W, que é exatamente \(R\,I_{ef}^2\). A ressonância ocorreria em \(f_0 = 1/(2\pi\sqrt{0{,}2\cdot50\times10^{-6}}) \approx 50\) Hz.

## Sistemas trifásicos e equipamentos

Na indústria, a energia chega em **três fases**, senoides defasadas de 120°. Os motores trifásicos (de bombas, compressores e agitadores de biorreatores) são mais simples, robustos e eficientes. A velocidade desses motores é controlada por **inversores de frequência**, que mudam a frequência da alimentação e, com ela, a rotação: é assim que se ajusta a agitação de um fermentador industrial.

> **Atenção, erros comuns:**
> Somar \(R\), \(X_L\) e \(X_C\) diretamente.
> Usar valores de pico onde se pedem valores eficazes.
> Achar que capacitores e indutores ideais consomem potência média.

## Para fixar

- \(V_{ef} = V_p/\sqrt2\); a tomada informa valores eficazes.
- \(X_C = 1/(\omega C)\), \(X_L = \omega L\), \(Z = \sqrt{R^2 + (X_L - X_C)^2}\).
- Ressonância em \(\omega_0 = 1/\sqrt{LC}\); potência média \(= V_{ef}I_{ef}\cos\phi\).
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 3: Eletromagnetismo. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 31: Oscilações eletromagnéticas e corrente alternada.",
    "BOYLESTAD, R. L. **Introdução à análise de circuitos**. 12. ed. São Paulo: Pearson Prentice Hall, 2012.",
    "AGÊNCIA NACIONAL DE ENERGIA ELÉTRICA (ANEEL). **Resolução Normativa nº 1.000, de 7 de dezembro de 2021**. Brasília: ANEEL, 2021.",
  ],
},
{
  id: "r87", num: 87,
  area: "Física Básica: Eletromagnetismo",
  disciplina: "Física Básica: Eletromagnetismo",
  titulo: "Equações de Maxwell e ondas eletromagnéticas",
  descricao: "A corrente de deslocamento, as quatro equações de Maxwell em forma integral, o surgimento das ondas eletromagnéticas, a velocidade da luz, o espectro eletromagnético, energia, intensidade e polarização.",
  tags: ["Física 3", "Física 4", "equações de Maxwell", "corrente de deslocamento", "onda eletromagnética", "velocidade da luz", "espectro eletromagnético", "vetor de Poynting", "intensidade", "pressão de radiação", "polarização", "UV", "infravermelho", "micro-ondas"],
  conteudo: String.raw`
## O termo que faltava

A lei de Ampère (tema 84), \(\oint\vec B\cdot d\vec s = \mu_0 I\), tem um problema. Imagine um capacitor sendo carregado: há corrente nos fios, mas nenhuma corrente atravessa o espaço vazio entre as placas. Dependendo da superfície escolhida, a lei daria respostas diferentes. Maxwell resolveu o problema percebendo que, entre as placas, o **campo elétrico está variando**, e propôs que um campo elétrico variável também gera campo magnético. Acrescentou, então, a **corrente de deslocamento**:

\[ I_d = \varepsilon_0\,\frac{d\Phi_E}{dt} \]

## As quatro equações de Maxwell

Em forma integral, no vácuo:

| Equação | Forma integral | Significado |
|---|---|---|
| Lei de Gauss | \(\oint\vec E\cdot d\vec A = \dfrac{q_{env}}{\varepsilon_0}\) | cargas são fontes de campo elétrico (tema 81) |
| Gauss para o magnetismo | \(\oint\vec B\cdot d\vec A = 0\) | não existem monopolos magnéticos; as linhas de \(\vec B\) são fechadas |
| Lei de Faraday | \(\oint\vec E\cdot d\vec s = -\dfrac{d\Phi_B}{dt}\) | campo magnético variável gera campo elétrico (tema 85) |
| Ampère-Maxwell | \(\oint\vec B\cdot d\vec s = \mu_0 I_{env} + \mu_0\varepsilon_0\dfrac{d\Phi_E}{dt}\) | correntes e campo elétrico variável geram campo magnético |

Essas quatro equações, junto com a força de Lorentz (tema 83), descrevem **todo** o eletromagnetismo clássico: circuitos, motores, antenas, a luz.

## O nascimento das ondas eletromagnéticas

As equações de Faraday e de Ampère-Maxwell mostram uma simetria: um campo elétrico variável gera um campo magnético, e um campo magnético variável gera um campo elétrico. Um pode sustentar o outro, propagando-se pelo espaço **sem precisar de meio material** e sem cargas. Combinando as equações, Maxwell obteve uma equação de onda (tema 88) cuja velocidade é:

\[ c = \frac{1}{\sqrt{\mu_0\,\varepsilon_0}} \approx 3{,}00\times10^{8}\ \text{m/s} \]

Esse valor, calculado a partir de constantes medidas em experimentos de eletricidade e magnetismo, coincidia com a velocidade da luz medida por métodos ópticos. Maxwell concluiu que **a luz é uma onda eletromagnética**, uma das grandes unificações da física. Hertz produziu e detectou ondas de rádio em 1887, confirmando a teoria.

## Características da onda

- Os campos \(\vec E\) e \(\vec B\) são **perpendiculares entre si** e à direção de propagação: a onda é **transversal**.
- Oscilam em fase, com \(E = c\,B\).
- No vácuo, todas viajam a \(c\), e vale \(c = \lambda f\).
- Num meio material, a velocidade cai para \(v = c/n\), em que \(n\) é o **índice de refração** (tema 90).

<svg viewBox="0 0 740 330" xmlns="http://www.w3.org/2000/svg" role="img"><title>Onda eletromagnetica e espectro</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">A onda eletromagnetica e o espectro</text><line x1="50" y1="130" x2="420" y2="130" stroke="#8a8a93" stroke-width="1.4" stroke-linecap="round"/><line x1="420" y1="130" x2="440" y2="130" stroke="#8a8a93" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-cz)"/><text x="448" y="134" font-size="10.5" text-anchor="start" fill="#5c5c66">propagacao</text><path d="M50.0,130.0L53.0,125.3L56.0,120.7L59.0,116.2L62.0,111.8L65.0,107.6L68.0,103.6L71.0,99.9L74.0,96.5L77.0,93.5L80.0,90.8L83.0,88.6L86.0,86.8L89.0,85.4L92.0,84.5L95.0,84.0L98.0,84.1L101.0,84.6L104.0,85.6L107.0,87.0L110.0,88.9L113.0,91.2L116.0,94.0L119.0,97.1L122.0,100.5L125.0,104.2L128.0,108.3L131.0,112.5L134.0,116.9L137.0,121.5L140.0,126.1L143.0,130.8L146.0,135.5L149.0,140.1L152.0,144.6L155.0,148.9L158.0,153.1L161.0,157.0L164.0,160.7L167.0,164.0L170.0,167.0L173.0,169.6L176.0,171.8L179.0,173.5L182.0,174.8L185.0,175.6L188.0,176.0L191.0,175.9L194.0,175.3L197.0,174.2L200.0,172.7L203.0,170.7L206.0,168.3L209.0,165.5L212.0,162.4L215.0,158.9L218.0,155.1L221.0,151.1L224.0,146.8L227.0,142.3L230.0,137.8L233.0,133.1L236.0,128.4L239.0,123.8L242.0,119.2L245.0,114.7L248.0,110.3L251.0,106.2L254.0,102.3L257.0,98.7L260.0,95.5L263.0,92.6L266.0,90.0L269.0,87.9L272.0,86.3L275.0,85.0L278.0,84.3L281.0,84.0L284.0,84.2L287.0,84.9L290.0,86.0L293.0,87.6L296.0,89.7L299.0,92.1L302.0,95.0L305.0,98.2L308.0,101.7L311.0,105.6L314.0,109.6L317.0,113.9L320.0,118.4L323.0,123.0L326.0,127.7L329.0,132.3L332.0,137.0L335.0,141.6L338.0,146.1L341.0,150.4L344.0,154.4L347.0,158.3L350.0,161.8L353.0,165.0L356.0,167.9L359.0,170.3L362.0,172.4L365.0,174.0L368.0,175.1L371.0,175.8L374.0,176.0L377.0,175.7L380.0,175.0L383.0,173.7L386.0,172.1L389.0,170.0L392.0,167.4L395.0,164.5L398.0,161.3L401.0,157.7L404.0,153.8L407.0,149.7L410.0,145.3" fill="none" stroke="#f40086" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M50.0,130.0L55.2,131.3L60.5,132.6L65.6,133.9L70.7,135.2L75.7,136.3L80.6,137.5L85.4,138.5L90.0,139.5L94.5,140.3L98.7,141.1L102.8,141.7L106.7,142.2L110.3,142.6L113.8,142.9L117.0,143.0L120.0,143.0L122.7,142.8L125.2,142.6L127.5,142.1L129.6,141.6L131.5,141.0L133.2,140.2L134.8,139.3L136.1,138.3L137.3,137.3L138.4,136.1L139.4,134.9L140.3,133.7L141.1,132.4L141.9,131.1L142.6,129.8L143.4,128.5L144.2,127.2L145.0,125.9L145.9,124.6L146.9,123.5L148.1,122.4L149.3,121.3L150.7,120.4L152.3,119.5L154.1,118.8L156.0,118.2L158.2,117.7L160.6,117.3L163.2,117.1L166.0,117.0L169.1,117.0L172.3,117.2L175.9,117.5L179.6,117.9L183.5,118.5L187.7,119.2L192.0,120.0L196.5,120.8L201.2,121.8L206.0,122.9L210.9,124.0L216.0,125.3L221.1,126.5L226.3,127.8L231.5,129.1L236.7,130.4L242.0,131.8L247.2,133.1L252.3,134.3L257.4,135.6L262.4,136.7L267.2,137.8L272.0,138.8L276.5,139.8L280.9,140.6L285.1,141.3L289.1,141.9L292.9,142.4L296.5,142.7L299.9,142.9L303.0,143.0L305.9,142.9L308.6,142.8L311.0,142.4L313.3,142.0L315.3,141.4L317.1,140.7L318.8,139.9L320.2,139.0L321.5,138.0L322.7,136.9L323.7,135.8L324.7,134.5L325.5,133.3L326.3,132.0L327.1,130.7L327.9,129.3L328.7,128.0L329.5,126.7L330.3,125.5L331.3,124.2L332.3,123.1L333.5,122.0L334.8,121.0L336.2,120.1L337.9,119.3L339.7,118.6L341.7,118.0L344.0,117.6L346.4,117.2L349.1,117.1L352.0,117.0L355.1,117.1L358.5,117.3L362.1,117.6L365.9,118.1L369.9,118.7L374.1,119.4L378.5,120.2L383.0,121.2L387.8,122.2L392.6,123.3L397.6,124.4L402.7,125.7" fill="none" stroke="#0083cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="74" y="74" font-size="10.5" text-anchor="start" fill="#f40086" font-weight="700">campo elétrico E</text><text x="74" y="188" font-size="10.5" text-anchor="start" fill="#0083cb" font-weight="700">campo magnético B</text><text x="250" y="210" font-size="10.5" text-anchor="middle" fill="#5c5c66">perpendiculares entre si e a direcao de propagacao</text><text x="40" y="236" font-size="12" text-anchor="start" fill="#333333" font-weight="700">espectro eletromagnetico</text><rect x="40" y="248" width="94" height="28" rx="4" fill="#9aa6c4" stroke="none" stroke-width="0"/><text x="87" y="266" font-size="9.6" text-anchor="middle" fill="#fff" font-weight="700">radio</text><rect x="138" y="248" width="94" height="28" rx="4" fill="#7fb2d6" stroke="none" stroke-width="0"/><text x="185" y="266" font-size="9.6" text-anchor="middle" fill="#fff" font-weight="700">micro-ondas</text><rect x="236" y="248" width="94" height="28" rx="4" fill="#d98a5a" stroke="none" stroke-width="0"/><text x="283" y="266" font-size="9.6" text-anchor="middle" fill="#fff" font-weight="700">infravermelho</text><rect x="334" y="248" width="94" height="28" rx="4" fill="#5ec36a" stroke="none" stroke-width="0"/><text x="381" y="266" font-size="9.6" text-anchor="middle" fill="#fff" font-weight="700">visivel</text><rect x="432" y="248" width="94" height="28" rx="4" fill="#8a6fd0" stroke="none" stroke-width="0"/><text x="479" y="266" font-size="9.6" text-anchor="middle" fill="#fff" font-weight="700">UV</text><rect x="530" y="248" width="94" height="28" rx="4" fill="#c56ab0" stroke="none" stroke-width="0"/><text x="577" y="266" font-size="9.6" text-anchor="middle" fill="#fff" font-weight="700">raios X</text><rect x="628" y="248" width="94" height="28" rx="4" fill="#d35a73" stroke="none" stroke-width="0"/><text x="675" y="266" font-size="9.6" text-anchor="middle" fill="#fff" font-weight="700">gama</text><line x1="40" y1="292" x2="700" y2="292" stroke="#333333" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-ti)"/><text x="44" y="308" font-size="10" text-anchor="start" fill="#5c5c66">maior comprimento de onda, menos energia</text><text x="696" y="308" font-size="10" text-anchor="end" fill="#5c5c66">mais energia por fóton</text><text x="430" y="60" font-size="11" text-anchor="start" fill="#333333" font-weight="700">A luz e uma onda eletromagnetica:</text><text x="430" y="78" font-size="10.5" text-anchor="start" fill="#5c5c66">Maxwell calculou a velocidade a partir</text><text x="430" y="94" font-size="10.5" text-anchor="start" fill="#5c5c66">de constantes elétricas e magnéticas</text><text x="430" y="110" font-size="10.5" text-anchor="start" fill="#5c5c66">e encontrou exatamente c.</text></svg>
Os campos elétrico e magnético oscilam perpendicularmente, e o espectro é um só fenômeno.

## O espectro eletromagnético

Todas as radiações abaixo são o mesmo fenômeno, com comprimentos de onda diferentes:

| Faixa | Comprimento de onda aproximado | Usos e efeitos |
|---|---|---|
| Ondas de rádio | acima de 1 m | rádio, TV, RMN |
| Micro-ondas | 1 mm a 1 m | radar, comunicações, aquecimento de água |
| Infravermelho | 700 nm a 1 mm | calor, controles remotos, espectroscopia IV |
| Visível | 400 a 700 nm | visão, fotossíntese, espectrofotometria |
| Ultravioleta | 10 a 400 nm | esterilização (UV-C, cerca de 254 nm), quantificação de DNA a 260 nm |
| Raios X | 0,01 a 10 nm | radiografia, cristalografia de proteínas |
| Raios gama | abaixo de 0,01 nm | esterilização de materiais médicos, radioterapia |

A energia de cada "pacote" de radiação (fóton) cresce com a frequência, \(E = hf\) (tema 92). Por isso UV, raios X e gama são **ionizantes** ou danificam o DNA, enquanto rádio e micro-ondas não têm energia suficiente para quebrar ligações químicas.

## Energia e intensidade

A onda transporta energia. O fluxo de energia por unidade de área e de tempo é dado pelo **vetor de Poynting**, \(\vec S = \dfrac{1}{\mu_0}\vec E\times\vec B\), que aponta na direção de propagação. A **intensidade** (média) é:

\[ I = \frac{E_{máx}^2}{2\,\mu_0\,c} \]

Para uma fonte pontual que emite igualmente em todas as direções, a intensidade cai com o quadrado da distância: \(I = P/(4\pi r^2)\). Ao ser absorvida, a radiação também exerce uma pequena **pressão de radiação**, \(p = I/c\), usada nas **pinças ópticas**, que prendem e movem células e moléculas individuais com feixes de laser.

## Polarização

Como \(\vec E\) oscila numa direção perpendicular à propagação, a onda pode ser **polarizada**: com \(\vec E\) sempre na mesma direção. A luz do Sol e de lâmpadas comuns não é polarizada. Um **polarizador** deixa passar só a componente numa direção, e a intensidade transmitida segue a **lei de Malus**: \(I = I_0\cos^2\theta\). Óculos de sol polarizados, telas de LCD e a medida da **atividade óptica** (polarimetria) de açúcares e outras moléculas quirais (tema 16) usam esse fenômeno (tema 91).

## Exemplo resolvido

Uma lâmpada UV-C germicida de 30 W emite 10 W de radiação a 254 nm. A 1,0 m, supondo emissão uniforme em todas as direções:

\[ I = \frac{10}{4\pi\cdot1{,}0^2} \approx 0{,}80\ \text{W/m}^2 = 80\ \mu\text{W/cm}^2 \]

Se uma dose de 10 mJ/cm² é necessária para reduzir certa bactéria em 99,9%, o tempo de exposição é \(10\,000/80 \approx 125\) s. A 2 m, a intensidade cai a um quarto, e o tempo quadruplica. Cabines de segurança biológica usam UV-C, mas a radiação não atravessa materiais e só age nas superfícies expostas.

> **Atenção, erros comuns:**
> Achar que ondas eletromagnéticas precisam de um meio para se propagar.
> Confundir frequência com velocidade: no vácuo, todas as ondas eletromagnéticas têm a mesma velocidade.
> Esquecer que a intensidade cai com o **quadrado** da distância.

## Para fixar

- Quatro equações de Maxwell: Gauss, Gauss magnético, Faraday e Ampère-Maxwell.
- Campos variáveis se sustentam mutuamente e formam ondas com \(c = 1/\sqrt{\mu_0\varepsilon_0}\).
- A luz é uma onda eletromagnética; o espectro vai das ondas de rádio aos raios gama.
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 3 e 4. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 32 e 33.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 3: Eletromagnetismo. 2. ed. São Paulo: Blucher, 2015.",
    "GRIFFITHS, D. J. **Eletrodinâmica**. 3. ed. São Paulo: Pearson, 2011.",
  ],
}
);
