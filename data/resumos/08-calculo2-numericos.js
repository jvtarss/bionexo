/* BIONEXO — Resumos · Área 12: Cálculo II e Métodos Numéricos (temas 39–42 e 51) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r39", num: 39,
  area: "Cálculo II e Métodos Numéricos",
  disciplina: "Cálculo II",
  titulo: "Integrais múltiplas",
  descricao: "Como somar uma grandeza espalhada por uma área ou por um volume: integrais duplas e triplas, a ordem de integração, as coordenadas polares, cilíndricas e esféricas e o cálculo da vazão num tubo.",
  tags: ["integral dupla", "integral tripla", "Fubini", "coordenadas polares", "coordenadas cilíndricas", "coordenadas esféricas", "jacobiano", "volume", "Poiseuille"],
  conteudo: String.raw`
## Para que servem

A integral simples (tema 5) soma uma grandeza ao longo de uma **linha**: por exemplo, a distância percorrida somando velocidade × tempo. Mas muitas grandezas estão espalhadas por uma **superfície** ou por um **volume**. Pense na quantidade total de células num biofilme cuja espessura varia de ponto a ponto, na massa de um sólido com densidade variável ou na vazão de líquido num tubo onde a velocidade é diferente no centro e perto da parede. Para somar essas grandezas, usam-se as **integrais duplas** (sobre áreas) e **triplas** (sobre volumes).

## A integral dupla

<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Integral dupla</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Integral dupla: somar sobre uma regiao do plano</text><rect x="60" y="56" width="290" height="190" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="156.667" y1="56" x2="156.667" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="253.333" y1="56" x2="253.333" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="350" y1="56" x2="350" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="182.667" x2="350" y2="182.667" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="119.333" x2="350" y2="119.333" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="56" x2="350" y2="56" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="56" x2="60" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="60" y1="246" x2="350" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="156.667" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="253.333" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="350" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">3</text><text x="54" y="186.167" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="54" y="122.833" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="54" y="59.5" font-size="10.5" text-anchor="end" fill="#8a8a93">3</text><text x="354" y="250" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">x</text><text x="56" y="50" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">y</text><path d="M60.0,56.0L61.3,56.0L62.6,56.0L64.0,56.0L65.3,56.1L66.6,56.1L67.9,56.1L69.2,56.2L70.5,56.3L71.9,56.3L73.2,56.4L74.5,56.5L75.8,56.6L77.1,56.7L78.5,56.8L79.8,56.9L81.1,57.0L82.4,57.1L83.7,57.3L85.0,57.4L86.4,57.6L87.7,57.7L89.0,57.9L90.3,58.1L91.6,58.3L93.0,58.5L94.3,58.7L95.6,58.9L96.9,59.1L98.2,59.3L99.5,59.5L100.9,59.8L102.2,60.0L103.5,60.3L104.8,60.5L106.1,60.8L107.5,61.1L108.8,61.4L110.1,61.7L111.4,62.0L112.7,62.3L114.0,62.6L115.4,62.9L116.7,63.3L118.0,63.6L119.3,63.9L120.6,64.3L122.0,64.7L123.3,65.0L124.6,65.4L125.9,65.8L127.2,66.2L128.5,66.6L129.9,67.0L131.2,67.4L132.5,67.9L133.8,68.3L135.1,68.8L136.5,69.2L137.8,69.7L139.1,70.1L140.4,70.6L141.7,71.1L143.0,71.6L144.4,72.1L145.7,72.6L147.0,73.1L148.3,73.6L149.6,74.2L151.0,74.7L152.3,75.2L153.6,75.8L154.9,76.4L156.2,76.9L157.5,77.5L158.9,78.1L160.2,78.7L161.5,79.3L162.8,79.9L164.1,80.5L165.5,81.1L166.8,81.8L168.1,82.4L169.4,83.0L170.7,83.7L172.0,84.4L173.4,85.0L174.7,85.7L176.0,86.4L177.3,87.1L178.6,87.8L180.0,88.5L181.3,89.2L182.6,90.0L183.9,90.7L185.2,91.4L186.5,92.2L187.9,92.9L189.2,93.7L190.5,94.5L191.8,95.3L193.1,96.0L194.5,96.8L195.8,97.6L197.1,98.5L198.4,99.3L199.7,100.1L201.0,100.9L202.4,101.8L203.7,102.6L205.0,103.5L206.3,104.4L207.6,105.2L209.0,106.1L210.3,107.0L211.6,107.9L212.9,108.8L214.2,109.7L215.5,110.7L216.9,111.6L218.2,112.5L219.5,113.5L220.8,114.4L222.1,115.4L223.5,116.4L224.8,117.3L226.1,118.3L227.4,119.3L228.7,120.3L230.0,121.3L231.4,122.3L232.7,123.4L234.0,124.4L235.3,125.4L236.6,126.5L238.0,127.5L239.3,128.6L240.6,129.7L241.9,130.8L243.2,131.8L244.5,132.9L245.9,134.0L247.2,135.2L248.5,136.3L249.8,137.4L251.1,138.5L252.5,139.7L253.8,140.8L255.1,142.0L256.4,143.2L257.7,144.3L259.0,145.5L260.4,146.7L261.7,147.9L263.0,149.1L264.3,150.3L265.6,151.5L267.0,152.8L268.3,154.0L269.6,155.2L270.9,156.5L272.2,157.8L273.5,159.0L274.9,160.3L276.2,161.6L277.5,162.9L278.8,164.2L280.1,165.5L281.5,166.8L282.8,168.1L284.1,169.5L285.4,170.8L286.7,172.1L288.0,173.5L289.4,174.9L290.7,176.2L292.0,177.6L293.3,179.0L294.6,180.4L296.0,181.8L297.3,183.2L298.6,184.6L299.9,186.0L301.2,187.5L302.5,188.9L303.9,190.4L305.2,191.8L306.5,193.3L307.8,194.7L309.1,196.2L310.5,197.7L311.8,199.2L313.1,200.7L314.4,202.2L315.7,203.7L317.0,205.3L318.4,206.8L319.7,208.3L321.0,209.9L322.3,211.5L323.6,213.0L325.0,214.6L326.3,216.2L327.6,217.8L328.9,219.4L330.2,221.0L331.5,222.6L332.9,224.2L334.2,225.8L335.5,227.5L336.8,229.1L338.1,230.8L339.5,232.4L340.8,234.1L342.1,235.8L343.4,237.5L344.7,239.2L346.0,240.9L347.4,242.6L348.7,244.3L350.0,246.0" fill="none" stroke="#0083cb" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M60.0,246.0L60.0,56.0L62.1,56.0L64.2,56.0L66.3,56.1L68.4,56.2L70.5,56.2L72.6,56.4L74.7,56.5L76.8,56.6L78.8,56.8L80.9,57.0L83.0,57.2L85.1,57.4L87.2,57.7L89.3,57.9L91.4,58.2L93.5,58.5L95.6,58.9L97.7,59.2L99.8,59.6L101.9,60.0L104.0,60.4L106.1,60.8L108.2,61.2L110.3,61.7L112.4,62.2L114.5,62.7L116.6,63.2L118.6,63.8L120.7,64.3L122.8,64.9L124.9,65.5L127.0,66.1L129.1,66.8L131.2,67.5L133.3,68.1L135.4,68.8L137.5,69.6L139.6,70.3L141.7,71.1L143.8,71.9L145.9,72.7L148.0,73.5L150.1,74.3L152.2,75.2L154.2,76.1L156.3,77.0L158.4,77.9L160.5,78.8L162.6,79.8L164.7,80.8L166.8,81.8L168.9,82.8L171.0,83.8L173.1,84.9L175.2,86.0L177.3,87.1L179.4,88.2L181.5,89.3L183.6,90.5L185.7,91.7L187.8,92.9L189.9,94.1L192.0,95.3L194.0,96.6L196.1,97.9L198.2,99.2L200.3,100.5L202.4,101.8L204.5,103.2L206.6,104.6L208.7,106.0L210.8,107.4L212.9,108.8L215.0,110.3L217.1,111.7L219.2,113.2L221.3,114.8L223.4,116.3L225.5,117.9L227.6,119.4L229.6,121.0L231.7,122.6L233.8,124.3L235.9,125.9L238.0,127.6L240.1,129.3L242.2,131.0L244.3,132.7L246.4,134.5L248.5,136.3L250.6,138.1L252.7,139.9L254.8,141.7L256.9,143.6L259.0,145.4L261.1,147.3L263.2,149.2L265.3,151.2L267.4,153.1L269.4,155.1L271.5,157.1L273.6,159.1L275.7,161.1L277.8,163.2L279.9,165.3L282.0,167.4L284.1,169.5L286.2,171.6L288.3,173.7L290.4,175.9L292.5,178.1L294.6,180.3L296.7,182.5L298.8,184.8L300.9,187.1L303.0,189.4L305.0,191.7L307.1,194.0L309.2,196.3L311.3,198.7L311.3,246.0 Z" fill="#0083cb" fill-opacity="0.16" stroke="none"/><rect x="185.667" y="97.3778" width="19.3333" height="148.622" rx="0" fill="#f40086" stroke="#f40086" stroke-width="0"/><text x="195.333" y="87.3778" font-size="10" text-anchor="middle" fill="#f40086" font-weight="700">dx</text><text x="205" y="268" font-size="10.5" text-anchor="middle" fill="#5c5c66">integra-se primeiro em y, depois em x</text><rect x="380" y="62" width="320" height="180" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="540" y="86" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">o que a integral dupla soma</text><text x="400" y="112" font-size="10.4" text-anchor="start" fill="#a300bc" font-weight="700">função igual a 1</text><text x="556" y="112" font-size="10.4" text-anchor="start" fill="#5c5c66">a área da regiao</text><text x="400" y="142" font-size="10.4" text-anchor="start" fill="#a300bc" font-weight="700">densidade</text><text x="556" y="142" font-size="10.4" text-anchor="start" fill="#5c5c66">a massa total</text><text x="400" y="172" font-size="10.4" text-anchor="start" fill="#a300bc" font-weight="700">perfil de velocidade</text><text x="556" y="172" font-size="10.4" text-anchor="start" fill="#5c5c66">a vazao pelo tubo</text><text x="400" y="202" font-size="10.4" text-anchor="start" fill="#a300bc" font-weight="700">concentração</text><text x="556" y="202" font-size="10.4" text-anchor="start" fill="#5c5c66">a quantidade acumulada</text><text x="20" y="290" font-size="11" text-anchor="start" fill="#5c5c66">Em coordenadas polares, o elemento de área vira r dr dtheta: e o que torna regioes circulares simples.</text></svg>
A integral dupla soma contribuições sobre toda uma região do plano.

A ideia é a mesma da integral simples. Divide-se a região \(R\) do plano em pequenos retângulos de área \(\Delta A\), multiplica-se o valor da função em cada um pela sua área e somam-se todos os produtos. Quando os retângulos ficam infinitamente pequenos, essa soma vira a integral dupla:

\[ \iint_R f(x,y)\,dA = \lim \sum_{i,j} f(x_i, y_j)\,\Delta A \]

O resultado pode ter vários significados, conforme o que \(f\) representa:

- se \(f\) é uma altura, a integral dá o **volume** do sólido que fica embaixo da superfície \(z = f(x,y)\);
- se \(f = 1\), a integral dá simplesmente a **área** da região;
- se \(f\) é uma densidade (massa por área, células por área), a integral dá a **quantidade total**;
- dividindo a integral pela área da região, obtém-se o **valor médio** de \(f\) na região.

## Como calcular: integrais "uma dentro da outra"

Na prática, uma integral dupla é calculada como **duas integrais simples, uma dentro da outra** (as integrais iteradas). Resolve-se primeiro a de dentro, tratando a outra variável como se fosse um número fixo; depois, resolve-se a de fora. Num retângulo \([a,b]\times[c,d]\), com \(f\) contínua, o **teorema de Fubini** garante que a ordem não importa:

\[ \iint_R f\,dA = \int_a^b\!\!\int_c^d f(x,y)\,dy\,dx = \int_c^d\!\!\int_a^b f(x,y)\,dx\,dy \]

**Exemplo:** calcule \(\displaystyle\iint_R (x + 2y)\,dA\) no retângulo \(0 \le x \le 2\), \(0 \le y \le 1\).

**Passo 1, integral de dentro (em \(y\), com \(x\) fixo):** \(\displaystyle\int_0^1 (x + 2y)\,dy = \left[xy + y^2\right]_0^1 = x + 1\).

**Passo 2, integral de fora (em \(x\)):** \(\displaystyle\int_0^2 (x + 1)\,dx = \left[\tfrac{x^2}{2} + x\right]_0^2 = 2 + 2 = 4\).

## Regiões que não são retângulos

Quando a região é limitada por curvas, os limites da integral de dentro passam a depender da outra variável.

- **Região do tipo I:** \(x\) vai de \(a\) a \(b\), e, para cada \(x\), \(y\) vai de uma curva de baixo \(g_1(x)\) até uma curva de cima \(g_2(x)\).
- **Região do tipo II:** \(y\) vai de \(c\) a \(d\), e, para cada \(y\), \(x\) vai de uma curva da esquerda \(h_1(y)\) até uma curva da direita \(h_2(y)\).

O conselho mais importante: **desenhe a região antes de escrever os limites**. Às vezes, trocar a ordem de integração transforma uma integral impossível de resolver numa integral simples.

**Exemplo:** integre \(f(x,y) = x\) na região entre as curvas \(y = x^2\) (embaixo) e \(y = x\) (em cima), para \(0 \le x \le 1\):

\[ \int_0^1\!\!\int_{x^2}^{x} x\,dy\,dx = \int_0^1 x\,(x - x^2)\,dx = \frac13 - \frac14 = \frac{1}{12} \]

## Coordenadas polares: para regiões redondas

Quando a região é um círculo, um anel ou um setor, é muito mais fácil descrever os pontos pela **distância ao centro** (\(r\)) e pelo **ângulo** (\(\theta\)) do que por \(x\) e \(y\). As relações são \(x = r\cos\theta\) e \(y = r\sin\theta\), e o pequeno pedaço de área passa a ser:

\[ dA = r\,dr\,d\theta \]

Esse fator \(r\) extra (chamado **jacobiano** da mudança de coordenadas) aparece porque os "retângulos" em coordenadas polares são maiores quanto mais longe do centro: um mesmo ângulo abre um arco maior longe da origem. Esquecer o \(r\) é o erro mais comum neste assunto.

## Integrais triplas

A integral tripla \(\displaystyle\iiint_E f\,dV\) soma uma grandeza num **volume**. Com \(f = 1\), dá o próprio volume do sólido. A escolha do sistema de coordenadas depende da forma do objeto:

| Sistema | Variáveis | Pedaço de volume | Bom para |
|---|---|---|---|
| Cartesiano | \(x, y, z\) | \(dx\,dy\,dz\) | caixas e regiões limitadas por planos |
| Cilíndrico | \(r, \theta, z\) | \(r\,dr\,d\theta\,dz\) | tanques, tubos e biorreatores |
| Esférico | \(\rho, \phi, \theta\) | \(\rho^2\sin\phi\,d\rho\,d\phi\,d\theta\) | esferas, bolhas, células e grânulos de fungo |

Uma forma rápida de conferir: o volume de um cilindro de raio \(R\) e altura \(H\) deve dar \(\pi R^2 H\), e de fato

\[ \int_0^{2\pi}\!\!\int_0^R\!\!\int_0^H r\,dz\,dr\,d\theta = \pi R^2 H \quad ✓ \]

## Exemplo resolvido: a vazão de um líquido num tubo

Quando um líquido escoa devagar e de forma ordenada (o **escoamento laminar**) num tubo de raio \(R\), a velocidade não é a mesma em todos os pontos: é máxima no centro e zero junto à parede. O perfil de velocidade é uma parábola (a lei de Poiseuille, tema 44):

\[ v(r) = v_{max}\left(1 - \frac{r^2}{R^2}\right) \]

Quanto líquido passa pelo tubo por segundo? A **vazão** é a soma da velocidade em cada pedacinho da seção do tubo, ou seja, uma integral dupla. Como a seção é um círculo, usamos coordenadas polares (sem esquecer o \(r\)):

\[ Q = \int_0^{2\pi}\!\!\int_0^R v_{max}\left(1 - \frac{r^2}{R^2}\right) r\,dr\,d\theta = 2\pi v_{max}\left[\frac{r^2}{2} - \frac{r^4}{4R^2}\right]_0^R = \frac{\pi R^2\,v_{max}}{2} \]

Dividindo a vazão pela área da seção (\(\pi R^2\)), obtém-se a **velocidade média**, que é exatamente **metade da velocidade máxima**. É um resultado clássico dos fenômenos de transporte. A mesma conta permite calcular a concentração média de oxigênio dentro de um grânulo de fungo ou de um biofilme, quando a concentração varia com a distância ao centro.

> **Atenção, erros comuns:**
> Esquecer o \(r\) (ou o \(\rho^2\sin\phi\)) ao mudar de coordenadas.
> Usar limites constantes numa região que não é um retângulo.
> Colocar variáveis nos limites da integral **de fora**: eles precisam ser números.

## Para fixar

- Integral dupla é uma soma sobre uma área; tripla, sobre um volume. Dão área, volume, quantidade total e valor médio.
- Calcula-se de dentro para fora, como integrais simples.
- Escolha as coordenadas pela forma da região e não esqueça o fator de correção (jacobiano).
`,
  referencias: [
    "STEWART, J. **Cálculo**. v. 2. 8. ed. São Paulo: Cengage Learning, 2017. Cap. 15: Integrais múltiplas.",
    "GUIDORIZZI, H. L. **Um curso de cálculo**. v. 3. 5. ed. Rio de Janeiro: LTC, 2002.",
    "FLEMMING, D. M.; GONÇALVES, M. B. **Cálculo B**: funções de várias variáveis, integrais múltiplas, integrais curvilíneas e de superfície. 2. ed. São Paulo: Pearson Prentice Hall, 2007.",
    "BIRD, R. B.; STEWART, W. E.; LIGHTFOOT, E. N. **Fenômenos de transporte**. 2. ed. Rio de Janeiro: LTC, 2004.",
  ],
},
{
  id: "r40", num: 40,
  area: "Cálculo II e Métodos Numéricos",
  disciplina: "Cálculo II",
  titulo: "Equações diferenciais ordinárias",
  descricao: "O que é uma equação diferencial, como resolver as de primeira ordem (separação de variáveis e fator integrante) e como elas descrevem o crescimento de células, a morte de microrganismos e a mistura num tanque.",
  tags: ["equação diferencial", "EDO", "separação de variáveis", "fator integrante", "problema de valor inicial", "crescimento logístico", "Verhulst", "tanque de mistura", "modelagem"],
  conteudo: String.raw`
## A ideia

<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Campo de direcoes</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Campo de direcoes: a EDO diz a inclinação em cada ponto</text><rect x="60" y="56" width="380" height="190" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="136" y1="56" x2="136" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="212" y1="56" x2="212" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="288" y1="56" x2="288" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="364" y1="56" x2="364" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="440" y1="56" x2="440" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="208" x2="440" y2="208" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="170" x2="440" y2="170" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="132" x2="440" y2="132" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="94" x2="440" y2="94" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="56" x2="440" y2="56" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="56" x2="60" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="60" y1="246" x2="440" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="136" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="212" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="288" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">3</text><text x="364" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">4</text><text x="440" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">5</text><text x="54" y="211.5" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="54" y="173.5" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="54" y="135.5" font-size="10.5" text-anchor="end" fill="#8a8a93">3</text><text x="54" y="97.5" font-size="10.5" text-anchor="end" fill="#8a8a93">4</text><text x="54" y="59.5" font-size="10.5" text-anchor="end" fill="#8a8a93">5</text><text x="444" y="250" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">t</text><text x="56" y="50" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">x</text><line x1="43.28" y1="232.606" x2="76.72" y2="228.994" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="43.28" y1="213.533" x2="76.72" y2="206.267" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="43.28" y1="193.702" x2="76.72" y2="184.298" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="43.28" y1="173.113" x2="76.72" y2="163.087" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="43.28" y1="151.765" x2="76.72" y2="142.635" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="43.28" y1="129.658" x2="76.72" y2="122.942" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="43.28" y1="106.792" x2="76.72" y2="104.008" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="43.28" y1="83.1676" x2="76.72" y2="85.8324" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="43.28" y1="58.7846" x2="76.72" y2="68.4154" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="81.28" y1="232.606" x2="114.72" y2="228.994" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="81.28" y1="213.533" x2="114.72" y2="206.267" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="81.28" y1="193.702" x2="114.72" y2="184.298" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="81.28" y1="173.113" x2="114.72" y2="163.087" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="81.28" y1="151.765" x2="114.72" y2="142.635" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="81.28" y1="129.658" x2="114.72" y2="122.942" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="81.28" y1="106.792" x2="114.72" y2="104.008" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="81.28" y1="83.1676" x2="114.72" y2="85.8324" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="81.28" y1="58.7846" x2="114.72" y2="68.4154" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="119.28" y1="232.606" x2="152.72" y2="228.994" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="119.28" y1="213.533" x2="152.72" y2="206.267" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="119.28" y1="193.702" x2="152.72" y2="184.298" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="119.28" y1="173.113" x2="152.72" y2="163.087" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="119.28" y1="151.765" x2="152.72" y2="142.635" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="119.28" y1="129.658" x2="152.72" y2="122.942" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="119.28" y1="106.792" x2="152.72" y2="104.008" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="119.28" y1="83.1676" x2="152.72" y2="85.8324" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="119.28" y1="58.7846" x2="152.72" y2="68.4154" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="157.28" y1="232.606" x2="190.72" y2="228.994" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="157.28" y1="213.533" x2="190.72" y2="206.267" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="157.28" y1="193.702" x2="190.72" y2="184.298" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="157.28" y1="173.113" x2="190.72" y2="163.087" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="157.28" y1="151.765" x2="190.72" y2="142.635" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="157.28" y1="129.658" x2="190.72" y2="122.942" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="157.28" y1="106.792" x2="190.72" y2="104.008" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="157.28" y1="83.1676" x2="190.72" y2="85.8324" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="157.28" y1="58.7846" x2="190.72" y2="68.4154" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="195.28" y1="232.606" x2="228.72" y2="228.994" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="195.28" y1="213.533" x2="228.72" y2="206.267" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="195.28" y1="193.702" x2="228.72" y2="184.298" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="195.28" y1="173.113" x2="228.72" y2="163.087" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="195.28" y1="151.765" x2="228.72" y2="142.635" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="195.28" y1="129.658" x2="228.72" y2="122.942" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="195.28" y1="106.792" x2="228.72" y2="104.008" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="195.28" y1="83.1676" x2="228.72" y2="85.8324" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="195.28" y1="58.7846" x2="228.72" y2="68.4154" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="233.28" y1="232.606" x2="266.72" y2="228.994" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="233.28" y1="213.533" x2="266.72" y2="206.267" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="233.28" y1="193.702" x2="266.72" y2="184.298" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="233.28" y1="173.113" x2="266.72" y2="163.087" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="233.28" y1="151.765" x2="266.72" y2="142.635" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="233.28" y1="129.658" x2="266.72" y2="122.942" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="233.28" y1="106.792" x2="266.72" y2="104.008" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="233.28" y1="83.1676" x2="266.72" y2="85.8324" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="233.28" y1="58.7846" x2="266.72" y2="68.4154" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="271.28" y1="232.606" x2="304.72" y2="228.994" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="271.28" y1="213.533" x2="304.72" y2="206.267" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="271.28" y1="193.702" x2="304.72" y2="184.298" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="271.28" y1="173.113" x2="304.72" y2="163.087" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="271.28" y1="151.765" x2="304.72" y2="142.635" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="271.28" y1="129.658" x2="304.72" y2="122.942" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="271.28" y1="106.792" x2="304.72" y2="104.008" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="271.28" y1="83.1676" x2="304.72" y2="85.8324" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="271.28" y1="58.7846" x2="304.72" y2="68.4154" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="309.28" y1="232.606" x2="342.72" y2="228.994" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="309.28" y1="213.533" x2="342.72" y2="206.267" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="309.28" y1="193.702" x2="342.72" y2="184.298" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="309.28" y1="173.113" x2="342.72" y2="163.087" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="309.28" y1="151.765" x2="342.72" y2="142.635" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="309.28" y1="129.658" x2="342.72" y2="122.942" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="309.28" y1="106.792" x2="342.72" y2="104.008" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="309.28" y1="83.1676" x2="342.72" y2="85.8324" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="309.28" y1="58.7846" x2="342.72" y2="68.4154" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="347.28" y1="232.606" x2="380.72" y2="228.994" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="347.28" y1="213.533" x2="380.72" y2="206.267" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="347.28" y1="193.702" x2="380.72" y2="184.298" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="347.28" y1="173.113" x2="380.72" y2="163.087" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="347.28" y1="151.765" x2="380.72" y2="142.635" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="347.28" y1="129.658" x2="380.72" y2="122.942" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="347.28" y1="106.792" x2="380.72" y2="104.008" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="347.28" y1="83.1676" x2="380.72" y2="85.8324" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="347.28" y1="58.7846" x2="380.72" y2="68.4154" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="385.28" y1="232.606" x2="418.72" y2="228.994" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="385.28" y1="213.533" x2="418.72" y2="206.267" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="385.28" y1="193.702" x2="418.72" y2="184.298" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="385.28" y1="173.113" x2="418.72" y2="163.087" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="385.28" y1="151.765" x2="418.72" y2="142.635" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="385.28" y1="129.658" x2="418.72" y2="122.942" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="385.28" y1="106.792" x2="418.72" y2="104.008" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="385.28" y1="83.1676" x2="418.72" y2="85.8324" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="385.28" y1="58.7846" x2="418.72" y2="68.4154" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="423.28" y1="232.606" x2="456.72" y2="228.994" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="423.28" y1="213.533" x2="456.72" y2="206.267" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="423.28" y1="193.702" x2="456.72" y2="184.298" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="423.28" y1="173.113" x2="456.72" y2="163.087" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="423.28" y1="151.765" x2="456.72" y2="142.635" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="423.28" y1="129.658" x2="456.72" y2="122.942" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="423.28" y1="106.792" x2="456.72" y2="104.008" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="423.28" y1="83.1676" x2="456.72" y2="85.8324" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><line x1="423.28" y1="58.7846" x2="456.72" y2="68.4154" stroke="#c9d2e0" stroke-width="1.4" stroke-linecap="round"/><path d="M60.0,234.6L61.5,234.5L63.0,234.3L64.6,234.2L66.1,234.1L67.6,234.0L69.1,233.8L70.6,233.7L72.2,233.6L73.7,233.4L75.2,233.3L76.7,233.1L78.2,233.0L79.8,232.9L81.3,232.7L82.8,232.6L84.3,232.4L85.8,232.3L87.4,232.1L88.9,232.0L90.4,231.8L91.9,231.7L93.4,231.5L95.0,231.3L96.5,231.2L98.0,231.0L99.5,230.9L101.0,230.7L102.6,230.5L104.1,230.4L105.6,230.2L107.1,230.0L108.6,229.9L110.2,229.7L111.7,229.5L113.2,229.3L114.7,229.2L116.2,229.0L117.8,228.8L119.3,228.6L120.8,228.4L122.3,228.2L123.8,228.1L125.4,227.9L126.9,227.7L128.4,227.5L129.9,227.3L131.4,227.1L133.0,226.9L134.5,226.7L136.0,226.5L137.5,226.3L139.0,226.1L140.6,225.9L142.1,225.7L143.6,225.4L145.1,225.2L146.6,225.0L148.2,224.8L149.7,224.6L151.2,224.4L152.7,224.1L154.2,223.9L155.8,223.7L157.3,223.5L158.8,223.2L160.3,223.0L161.8,222.8L163.4,222.5L164.9,222.3L166.4,222.0L167.9,221.8L169.4,221.6L171.0,221.3L172.5,221.1L174.0,220.8L175.5,220.6L177.0,220.3L178.6,220.1L180.1,219.8L181.6,219.5L183.1,219.3L184.6,219.0L186.2,218.7L187.7,218.5L189.2,218.2L190.7,217.9L192.2,217.7L193.8,217.4L195.3,217.1L196.8,216.8L198.3,216.5L199.8,216.2L201.4,216.0L202.9,215.7L204.4,215.4L205.9,215.1L207.4,214.8L209.0,214.5L210.5,214.2L212.0,213.9L213.5,213.6L215.0,213.3L216.6,213.0L218.1,212.7L219.6,212.4L221.1,212.0L222.6,211.7L224.2,211.4L225.7,211.1L227.2,210.8L228.7,210.4L230.2,210.1L231.8,209.8L233.3,209.4L234.8,209.1L236.3,208.8L237.8,208.4L239.4,208.1L240.9,207.8L242.4,207.4L243.9,207.1L245.4,206.7L247.0,206.4L248.5,206.0L250.0,205.7L251.5,205.3L253.0,205.0L254.6,204.6L256.1,204.2L257.6,203.9L259.1,203.5L260.6,203.1L262.2,202.8L263.7,202.4L265.2,202.0L266.7,201.7L268.2,201.3L269.8,200.9L271.3,200.5L272.8,200.1L274.3,199.7L275.8,199.4L277.4,199.0L278.9,198.6L280.4,198.2L281.9,197.8L283.4,197.4L285.0,197.0L286.5,196.6L288.0,196.2L289.5,195.8L291.0,195.4L292.6,195.0L294.1,194.6L295.6,194.2L297.1,193.8L298.6,193.4L300.2,193.0L301.7,192.5L303.2,192.1L304.7,191.7L306.2,191.3L307.8,190.9L309.3,190.4L310.8,190.0L312.3,189.6L313.8,189.2L315.4,188.7L316.9,188.3L318.4,187.9L319.9,187.5L321.4,187.0L323.0,186.6L324.5,186.2L326.0,185.7L327.5,185.3L329.0,184.8L330.6,184.4L332.1,184.0L333.6,183.5L335.1,183.1L336.6,182.6L338.2,182.2L339.7,181.8L341.2,181.3L342.7,180.9L344.2,180.4L345.8,180.0L347.3,179.5L348.8,179.1L350.3,178.6L351.8,178.2L353.4,177.7L354.9,177.3L356.4,176.8L357.9,176.4L359.4,175.9L361.0,175.5L362.5,175.0L364.0,174.6L365.5,174.1L367.0,173.6L368.6,173.2L370.1,172.7L371.6,172.3L373.1,171.8L374.6,171.4L376.2,170.9L377.7,170.5L379.2,170.0L380.7,169.5L382.2,169.1L383.8,168.6L385.3,168.2L386.8,167.7L388.3,167.3L389.8,166.8L391.4,166.4L392.9,165.9L394.4,165.4L395.9,165.0L397.4,164.5L399.0,164.1L400.5,163.6L402.0,163.2L403.5,162.7L405.0,162.3L406.6,161.8L408.1,161.4L409.6,160.9L411.1,160.5L412.6,160.0L414.2,159.6L415.7,159.1L417.2,158.7L418.7,158.2L420.2,157.8L421.8,157.3L423.3,156.9L424.8,156.5L426.3,156.0L427.8,155.6L429.4,155.1L430.9,154.7L432.4,154.3L433.9,153.8L435.4,153.4L437.0,153.0L438.5,152.5L440.0,152.1" fill="none" stroke="#f40086" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M60.0,189.0L61.5,188.6L63.0,188.1L64.6,187.7L66.1,187.3L67.6,186.9L69.1,186.4L70.6,186.0L72.2,185.5L73.7,185.1L75.2,184.7L76.7,184.2L78.2,183.8L79.8,183.4L81.3,182.9L82.8,182.5L84.3,182.0L85.8,181.6L87.4,181.1L88.9,180.7L90.4,180.2L91.9,179.8L93.4,179.3L95.0,178.9L96.5,178.4L98.0,178.0L99.5,177.5L101.0,177.1L102.6,176.6L104.1,176.2L105.6,175.7L107.1,175.3L108.6,174.8L110.2,174.4L111.7,173.9L113.2,173.5L114.7,173.0L116.2,172.6L117.8,172.1L119.3,171.6L120.8,171.2L122.3,170.7L123.8,170.3L125.4,169.8L126.9,169.4L128.4,168.9L129.9,168.5L131.4,168.0L133.0,167.5L134.5,167.1L136.0,166.6L137.5,166.2L139.0,165.7L140.6,165.3L142.1,164.8L143.6,164.4L145.1,163.9L146.6,163.4L148.2,163.0L149.7,162.5L151.2,162.1L152.7,161.6L154.2,161.2L155.8,160.7L157.3,160.3L158.8,159.8L160.3,159.4L161.8,158.9L163.4,158.5L164.9,158.1L166.4,157.6L167.9,157.2L169.4,156.7L171.0,156.3L172.5,155.8L174.0,155.4L175.5,155.0L177.0,154.5L178.6,154.1L180.1,153.7L181.6,153.2L183.1,152.8L184.6,152.3L186.2,151.9L187.7,151.5L189.2,151.1L190.7,150.6L192.2,150.2L193.8,149.8L195.3,149.4L196.8,148.9L198.3,148.5L199.8,148.1L201.4,147.7L202.9,147.3L204.4,146.8L205.9,146.4L207.4,146.0L209.0,145.6L210.5,145.2L212.0,144.8L213.5,144.4L215.0,144.0L216.6,143.6L218.1,143.2L219.6,142.8L221.1,142.4L222.6,142.0L224.2,141.6L225.7,141.2L227.2,140.8L228.7,140.4L230.2,140.0L231.8,139.6L233.3,139.3L234.8,138.9L236.3,138.5L237.8,138.1L239.4,137.7L240.9,137.4L242.4,137.0L243.9,136.6L245.4,136.3L247.0,135.9L248.5,135.5L250.0,135.2L251.5,134.8L253.0,134.5L254.6,134.1L256.1,133.7L257.6,133.4L259.1,133.0L260.6,132.7L262.2,132.3L263.7,132.0L265.2,131.7L266.7,131.3L268.2,131.0L269.8,130.6L271.3,130.3L272.8,130.0L274.3,129.7L275.8,129.3L277.4,129.0L278.9,128.7L280.4,128.4L281.9,128.0L283.4,127.7L285.0,127.4L286.5,127.1L288.0,126.8L289.5,126.5L291.0,126.2L292.6,125.9L294.1,125.6L295.6,125.3L297.1,125.0L298.6,124.7L300.2,124.4L301.7,124.1L303.2,123.8L304.7,123.5L306.2,123.2L307.8,122.9L309.3,122.7L310.8,122.4L312.3,122.1L313.8,121.8L315.4,121.5L316.9,121.3L318.4,121.0L319.9,120.7L321.4,120.5L323.0,120.2L324.5,120.0L326.0,119.7L327.5,119.4L329.0,119.2L330.6,118.9L332.1,118.7L333.6,118.4L335.1,118.2L336.6,117.9L338.2,117.7L339.7,117.5L341.2,117.2L342.7,117.0L344.2,116.8L345.8,116.5L347.3,116.3L348.8,116.1L350.3,115.8L351.8,115.6L353.4,115.4L354.9,115.2L356.4,115.0L357.9,114.7L359.4,114.5L361.0,114.3L362.5,114.1L364.0,113.9L365.5,113.7L367.0,113.5L368.6,113.3L370.1,113.1L371.6,112.9L373.1,112.7L374.6,112.5L376.2,112.3L377.7,112.1L379.2,111.9L380.7,111.7L382.2,111.5L383.8,111.3L385.3,111.1L386.8,111.0L388.3,110.8L389.8,110.6L391.4,110.4L392.9,110.3L394.4,110.1L395.9,109.9L397.4,109.7L399.0,109.6L400.5,109.4L402.0,109.2L403.5,109.1L405.0,108.9L406.6,108.7L408.1,108.6L409.6,108.4L411.1,108.3L412.6,108.1L414.2,108.0L415.7,107.8L417.2,107.7L418.7,107.5L420.2,107.4L421.8,107.2L423.3,107.1L424.8,106.9L426.3,106.8L427.8,106.6L429.4,106.5L430.9,106.4L432.4,106.2L433.9,106.1L435.4,106.0L437.0,105.8L438.5,105.7L440.0,105.6" fill="none" stroke="#0083cb" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M60.0,63.6L61.5,64.0L63.0,64.5L64.6,64.9L66.1,65.3L67.6,65.7L69.1,66.1L70.6,66.5L72.2,66.9L73.7,67.3L75.2,67.7L76.7,68.0L78.2,68.4L79.8,68.8L81.3,69.1L82.8,69.5L84.3,69.8L85.8,70.1L87.4,70.5L88.9,70.8L90.4,71.1L91.9,71.4L93.4,71.7L95.0,72.1L96.5,72.4L98.0,72.6L99.5,72.9L101.0,73.2L102.6,73.5L104.1,73.8L105.6,74.1L107.1,74.3L108.6,74.6L110.2,74.9L111.7,75.1L113.2,75.4L114.7,75.6L116.2,75.9L117.8,76.1L119.3,76.4L120.8,76.6L122.3,76.8L123.8,77.1L125.4,77.3L126.9,77.5L128.4,77.7L129.9,77.9L131.4,78.2L133.0,78.4L134.5,78.6L136.0,78.8L137.5,79.0L139.0,79.2L140.6,79.4L142.1,79.6L143.6,79.8L145.1,79.9L146.6,80.1L148.2,80.3L149.7,80.5L151.2,80.7L152.7,80.8L154.2,81.0L155.8,81.2L157.3,81.3L158.8,81.5L160.3,81.7L161.8,81.8L163.4,82.0L164.9,82.1L166.4,82.3L167.9,82.4L169.4,82.6L171.0,82.7L172.5,82.9L174.0,83.0L175.5,83.2L177.0,83.3L178.6,83.4L180.1,83.6L181.6,83.7L183.1,83.9L184.6,84.0L186.2,84.1L187.7,84.2L189.2,84.4L190.7,84.5L192.2,84.6L193.8,84.7L195.3,84.8L196.8,85.0L198.3,85.1L199.8,85.2L201.4,85.3L202.9,85.4L204.4,85.5L205.9,85.6L207.4,85.7L209.0,85.8L210.5,85.9L212.0,86.0L213.5,86.1L215.0,86.2L216.6,86.3L218.1,86.4L219.6,86.5L221.1,86.6L222.6,86.7L224.2,86.8L225.7,86.9L227.2,87.0L228.7,87.1L230.2,87.2L231.8,87.2L233.3,87.3L234.8,87.4L236.3,87.5L237.8,87.6L239.4,87.7L240.9,87.7L242.4,87.8L243.9,87.9L245.4,88.0L247.0,88.0L248.5,88.1L250.0,88.2L251.5,88.3L253.0,88.3L254.6,88.4L256.1,88.5L257.6,88.5L259.1,88.6L260.6,88.7L262.2,88.7L263.7,88.8L265.2,88.9L266.7,88.9L268.2,89.0L269.8,89.1L271.3,89.1L272.8,89.2L274.3,89.2L275.8,89.3L277.4,89.4L278.9,89.4L280.4,89.5L281.9,89.5L283.4,89.6L285.0,89.6L286.5,89.7L288.0,89.7L289.5,89.8L291.0,89.9L292.6,89.9L294.1,90.0L295.6,90.0L297.1,90.1L298.6,90.1L300.2,90.2L301.7,90.2L303.2,90.2L304.7,90.3L306.2,90.3L307.8,90.4L309.3,90.4L310.8,90.5L312.3,90.5L313.8,90.6L315.4,90.6L316.9,90.6L318.4,90.7L319.9,90.7L321.4,90.8L323.0,90.8L324.5,90.8L326.0,90.9L327.5,90.9L329.0,91.0L330.6,91.0L332.1,91.0L333.6,91.1L335.1,91.1L336.6,91.1L338.2,91.2L339.7,91.2L341.2,91.2L342.7,91.3L344.2,91.3L345.8,91.3L347.3,91.4L348.8,91.4L350.3,91.4L351.8,91.5L353.4,91.5L354.9,91.5L356.4,91.6L357.9,91.6L359.4,91.6L361.0,91.6L362.5,91.7L364.0,91.7L365.5,91.7L367.0,91.8L368.6,91.8L370.1,91.8L371.6,91.8L373.1,91.9L374.6,91.9L376.2,91.9L377.7,91.9L379.2,92.0L380.7,92.0L382.2,92.0L383.8,92.0L385.3,92.1L386.8,92.1L388.3,92.1L389.8,92.1L391.4,92.2L392.9,92.2L394.4,92.2L395.9,92.2L397.4,92.2L399.0,92.3L400.5,92.3L402.0,92.3L403.5,92.3L405.0,92.4L406.6,92.4L408.1,92.4L409.6,92.4L411.1,92.4L412.6,92.4L414.2,92.5L415.7,92.5L417.2,92.5L418.7,92.5L420.2,92.5L421.8,92.6L423.3,92.6L424.8,92.6L426.3,92.6L427.8,92.6L429.4,92.6L430.9,92.7L432.4,92.7L433.9,92.7L435.4,92.7L437.0,92.7L438.5,92.7L440.0,92.8" fill="none" stroke="#a300bc" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><line x1="60" y1="94" x2="440" y2="94" stroke="#0a8f5e" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="5 4"/><text x="434" y="86" font-size="10" text-anchor="end" fill="#0a8f5e" font-weight="700">capacidade de suporte</text><text x="250" y="276" font-size="10.5" text-anchor="middle" fill="#5c5c66">as curvas seguem as inclinacoes do campo</text><rect x="470" y="62" width="230" height="180" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="585" y="86" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">modelos classicos</text><text x="488" y="112" font-size="10.4" text-anchor="start" fill="#a300bc" font-weight="700">exponencial</text><text x="488" y="125" font-size="9.6" text-anchor="start" fill="#5c5c66">nada limita o crescimento</text><text x="488" y="142" font-size="10.4" text-anchor="start" fill="#a300bc" font-weight="700">logistico</text><text x="488" y="155" font-size="9.6" text-anchor="start" fill="#5c5c66">satura num valor máximo</text><text x="488" y="172" font-size="10.4" text-anchor="start" fill="#a300bc" font-weight="700">decaimento</text><text x="488" y="185" font-size="9.6" text-anchor="start" fill="#5c5c66">cai para zero</text><text x="488" y="202" font-size="10.4" text-anchor="start" fill="#a300bc" font-weight="700">tanque agitado</text><text x="488" y="215" font-size="9.6" text-anchor="start" fill="#5c5c66">aproxima-se da entrada</text><text x="20" y="290" font-size="11" text-anchor="start" fill="#5c5c66">A condicao inicial escolhe qual curva do campo o sistema vai seguir.</text></svg>
A equação diferencial define a inclinação em cada ponto; a condição inicial escolhe a curva.

Em muitos problemas, não sabemos de imediato **quanto** de alguma coisa existe, mas sabemos **com que rapidez** ela muda. Por exemplo: "a população de bactérias cresce numa velocidade proporcional ao número de bactérias presentes" ou "o café esfria mais rápido quanto mais quente ele está em relação à sala". Uma **equação diferencial** é justamente uma equação que relaciona uma função com a sua taxa de variação (a sua derivada). Resolvê-la é descobrir a própria função.

Quando a função depende de uma única variável (geralmente o tempo), a equação é **ordinária** (EDO). A **ordem** é a da maior derivada que aparece. A solução geral tem constantes arbitrárias, e para encontrar a solução de um caso concreto é preciso uma informação extra, a **condição inicial**: por exemplo, "no início havia 0,1 g/L de células". Equação mais condição inicial formam um **problema de valor inicial** (PVI).

Em bioprocessos, as EDOs estão por toda parte: todo balanço de massa de um biorreator que muda com o tempo é uma EDO (temas 50 e 53).

## Equações separáveis

São as que podem ser escritas como \(\dfrac{dy}{dt} = g(t)\,h(y)\): a taxa de variação é o produto de uma parte que depende só de \(t\) por outra que depende só de \(y\). A estratégia é **separar** as variáveis, colocando tudo o que tem \(y\) de um lado e tudo o que tem \(t\) do outro, e integrar os dois lados:

\[ \int\frac{dy}{h(y)} = \int g(t)\,dt + C \]

**Exemplo: crescimento exponencial.** Se as células se multiplicam numa velocidade proporcional à quantidade presente, \(\dfrac{dX}{dt} = \mu X\).

- **Passo 1, separar:** \(\dfrac{dX}{X} = \mu\,dt\).
- **Passo 2, integrar:** \(\ln X = \mu t + C\).
- **Passo 3, isolar \(X\) e usar a condição inicial \(X(0) = X_0\):** \(X = X_0\,e^{\mu t}\).

A mesma equação, com o sinal trocado (\(\dfrac{dN}{dt} = -kN\)), descreve a **morte de microrganismos pelo calor** (tema 35) e as reações químicas de primeira ordem. A solução é \(N = N_0\,e^{-kt}\).

## Equações lineares de primeira ordem

Têm a forma \(y' + P(t)\,y = Q(t)\). O truque é multiplicar a equação inteira por um **fator integrante**

\[ \mu(t) = e^{\int P(t)\,dt} \]

escolhido de propósito para que o lado esquerdo vire a derivada de um produto, \((\mu y)'\). Aí basta integrar: \(\mu y = \int \mu Q\,dt + C\).

**Exemplo:** resolva \(y' + 2y = 4\), com \(y(0) = 0\).

- **Passo 1, o fator integrante:** \(P = 2\), então \(\mu = e^{2t}\).
- **Passo 2, multiplicar e reconhecer a derivada:** \((e^{2t}y)' = 4e^{2t}\).
- **Passo 3, integrar:** \(e^{2t}y = 2e^{2t} + C\), ou seja, \(y = 2 + Ce^{-2t}\).
- **Passo 4, condição inicial:** \(y(0) = 0\) dá \(C = -2\). A solução é \(y = 2\left(1 - e^{-2t}\right)\): começa em zero, sobe e se estabiliza no valor 2.

## Modelos clássicos em processos biológicos

| Situação | Equação | Solução |
|---|---|---|
| Crescimento exponencial | \(X' = \mu X\) | \(X = X_0e^{\mu t}\) |
| Morte térmica e reações de primeira ordem | \(N' = -kN\) | \(N = N_0e^{-kt}\) |
| Crescimento logístico | \(X' = \mu X\left(1 - \frac{X}{X_m}\right)\) | \(X = \dfrac{X_m}{1 + \left(\frac{X_m}{X_0} - 1\right)e^{-\mu t}}\) |
| Tanque com mistura perfeita | \(V C' = F\,(C_{in} - C)\) | \(C = C_{in} + (C_0 - C_{in})\,e^{-Ft/V}\) |
| Resfriamento de Newton | \(T' = -k\,(T - T_a)\) | \(T = T_a + (T_0 - T_a)\,e^{-kt}\) |

O **modelo logístico**, proposto por Verhulst no século XIX, corrige uma falha do modelo exponencial: nenhuma população cresce para sempre. Ele inclui um limite máximo \(X_m\) (a **capacidade de suporte**, que num frasco depende dos nutrientes disponíveis). O termo \(\left(1 - X/X_m\right)\) vai freando o crescimento à medida que a população se aproxima desse limite.

## Exemplo resolvido 1: crescimento logístico de uma cultura

Uma cultura começa com \(X_0 = 0{,}1\) g/L de células, pode chegar no máximo a \(X_m = 10\) g/L e tem \(\mu = 0{,}5\) por hora. Pela solução da tabela:

\[ X(t) = \frac{10}{1 + 99\,e^{-0{,}5t}} \]

- **Quanto haverá depois de 10 horas?** \(99\,e^{-5} \approx 0{,}667\), então \(X \approx 10/1{,}667 \approx 6{,}0\) g/L.
- **Quando a cultura cresce mais rápido?** No **ponto de inflexão** da curva (tema 4), que ocorre quando a população chega à metade do máximo, \(X = 5\) g/L. Isso acontece quando \(99\,e^{-0{,}5t} = 1\), ou seja, \(t = 2\ln 99 \approx 9{,}2\) horas.

## Exemplo resolvido 2: lavando um tanque

Um tanque de 100 L contém uma solução de sal a 5 g/L. Entra água pura a 10 L por minuto, e sai a mesma vazão. A mistura é perfeita (a concentração é a mesma em todo o tanque). Quanto tempo leva para a concentração cair a 0,5 g/L?

**Passo 1, o balanço de sal:** a variação da quantidade de sal no tanque é o que entra (nada, pois entra água pura) menos o que sai (vazão × concentração): \(100\,C' = 10\,(0 - C)\).

**Passo 2, resolver:** é uma equação separável, com solução \(C(t) = 5\,e^{-0{,}1t}\).

**Passo 3, calcular o tempo:**

\[ 0{,}5 = 5\,e^{-0{,}1t} \;\Rightarrow\; t = 10\ln10 \approx 23\ \text{minutos} \]

Repare no número \(V/F = 100/10 = 10\) minutos: é o **tempo de residência**, o tempo médio que o líquido passa dentro do tanque. Nos biorreatores contínuos, o inverso desse número é a **taxa de diluição** \(D\) (tema 50).

> **Atenção, erros comuns:**
> Esquecer a constante de integração e depois não conseguir aplicar a condição inicial.
> Dividir por \(h(y)\) e perder as soluções constantes (por exemplo, \(X = 0\) e \(X = X_m\) no modelo logístico).
> Não conferir a resposta: substitua a solução na equação e na condição inicial.

## Para fixar

- Uma EDO relaciona uma função com as suas derivadas; com a condição inicial, a solução fica determinada.
- Separáveis: separe as variáveis e integre. Lineares: use o fator integrante.
- Crescimento, morte, mistura e troca de calor são descritos por EDOs de primeira ordem.
- Quando não há solução por fórmula, usam-se os métodos numéricos (tema 42).
`,
  referencias: [
    "BOYCE, W. E.; DiPRIMA, R. C. **Equações diferenciais elementares e problemas de valores de contorno**. 10. ed. Rio de Janeiro: LTC, 2015.",
    "ZILL, D. G. **Equações diferenciais com aplicações em modelagem**. 3. ed. São Paulo: Cengage Learning, 2016.",
    "BASSANEZI, R. C. **Ensino-aprendizagem com modelagem matemática**. 3. ed. São Paulo: Contexto, 2002.",
    "SHULER, M. L.; KARGI, F. **Bioprocess engineering**: basic concepts. 2. ed. Upper Saddle River: Prentice Hall, 2002.",
    "VERHULST, P.-F. Notice sur la loi que la population suit dans son accroissement. **Correspondance Mathématique et Physique**, v. 10, p. 113-121, 1838.",
  ],
},
{
  id: "r41", num: 41,
  area: "Cálculo II e Métodos Numéricos",
  disciplina: "Métodos Numéricos",
  titulo: "Métodos numéricos para determinação de raízes",
  descricao: "Como encontrar, com a precisão desejada, o valor de x que zera uma função quando não existe fórmula: isolamento da raiz, método da bisseção, método de Newton, critérios de parada e erros.",
  tags: ["métodos numéricos", "cálculo numérico", "raiz", "zero de função", "bisseção", "Newton-Raphson", "secante", "convergência", "critério de parada", "erro"],
  conteudo: String.raw`
## Quando a álgebra não resolve

Na escola, aprendemos fórmulas para resolver equações do primeiro e do segundo grau. Mas a maioria das equações que aparecem na engenharia não tem fórmula. Alguns exemplos: \(x = \cos x\); a equação de Colebrook, que dá o fator de atrito no escoamento em tubos; o cálculo do pH de uma mistura de vários ácidos; o estado estacionário de um biorreator contínuo quando o substrato inibe o crescimento.

Nesses casos, escreve-se o problema na forma \(f(x) = 0\) e procura-se a **raiz** (o valor de \(x\) que zera a função) por **aproximações sucessivas**. Parte-se de um palpite e aplica-se uma regra que produz um palpite melhor, repetindo até atingir a precisão desejada. Cada repetição se chama **iteração**. É exatamente isso que as calculadoras e os programas de computador fazem por trás das funções de "resolver equação".

## Etapa 1: localizar a raiz

Antes de calcular, é preciso saber **onde** a raiz está. Faz-se um gráfico ou uma tabela de valores da função. O **Teorema do Valor Intermediário** (tema 2) garante que, se \(f\) é contínua e muda de sinal entre \(a\) e \(b\) (isto é, \(f(a)\,f(b) \lt 0\)), existe pelo menos uma raiz entre esses dois pontos.

<svg viewBox="0 0 740 350" xmlns="http://www.w3.org/2000/svg" role="img"><title>Bissecao e Newton</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="24" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Dois jeitos de cercar uma raiz</text><rect x="50" y="60" width="300" height="190" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="87.5" y1="60" x2="87.5" y2="250" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="181.25" y1="60" x2="181.25" y2="250" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="275" y1="60" x2="275" y2="250" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="242.963" x2="350" y2="242.963" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="207.778" x2="350" y2="207.778" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="172.593" x2="350" y2="172.593" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="137.407" x2="350" y2="137.407" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="102.222" x2="350" y2="102.222" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="67.037" x2="350" y2="67.037" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="172.593" x2="350" y2="172.593" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="87.5" y="265" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="181.25" y="265" font-size="10.5" text-anchor="middle" fill="#8a8a93">1.5</text><text x="275" y="265" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="44" y="246.463" font-size="10.5" text-anchor="end" fill="#8a8a93">-2</text><text x="44" y="211.278" font-size="10.5" text-anchor="end" fill="#8a8a93">-1</text><text x="44" y="140.907" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="44" y="105.722" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="44" y="70.537" font-size="10.5" text-anchor="end" fill="#8a8a93">3</text><text x="354" y="254" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">x</text><text x="46" y="54" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">y</text><path d="M65.0,249.9L66.4,249.6L67.7,249.3L69.1,248.9L70.5,248.5L71.8,248.1L73.2,247.7L74.5,247.3L75.9,246.9L77.3,246.5L78.6,246.1L80.0,245.6L81.4,245.2L82.7,244.7L84.1,244.2L85.5,243.7L86.8,243.2L88.2,242.7L89.5,242.2L90.9,241.6L92.3,241.1L93.6,240.5L95.0,240.0L96.4,239.4L97.7,238.8L99.1,238.2L100.5,237.6L101.8,237.0L103.2,236.3L104.5,235.7L105.9,235.0L107.3,234.3L108.6,233.6L110.0,232.9L111.4,232.2L112.7,231.5L114.1,230.8L115.5,230.0L116.8,229.2L118.2,228.5L119.5,227.7L120.9,226.9L122.3,226.1L123.6,225.2L125.0,224.4L126.4,223.5L127.7,222.7L129.1,221.8L130.5,220.9L131.8,220.0L133.2,219.0L134.5,218.1L135.9,217.2L137.3,216.2L138.6,215.2L140.0,214.2L141.4,213.2L142.7,212.2L144.1,211.1L145.5,210.1L146.8,209.0L148.2,207.9L149.5,206.8L150.9,205.7L152.3,204.6L153.6,203.5L155.0,202.3L156.4,201.1L157.7,199.9L159.1,198.7L160.5,197.5L161.8,196.3L163.2,195.0L164.5,193.8L165.9,192.5L167.3,191.2L168.6,189.9L170.0,188.6L171.4,187.2L172.7,185.9L174.1,184.5L175.5,183.1L176.8,181.7L178.2,180.3L179.5,178.8L180.9,177.4L182.3,175.9L183.6,174.4L185.0,172.9L186.4,171.4L187.7,169.8L189.1,168.3L190.5,166.7L191.8,165.1L193.2,163.5L194.5,161.8L195.9,160.2L197.3,158.5L198.6,156.8L200.0,155.1L201.4,153.4L202.7,151.7L204.1,149.9L205.5,148.2L206.8,146.4L208.2,144.6L209.5,142.7L210.9,140.9L212.3,139.0L213.6,137.1L215.0,135.2L216.4,133.3L217.7,131.4L219.1,129.4L220.5,127.4L221.8,125.4L223.2,123.4L224.5,121.4L225.9,119.3L227.3,117.3L228.6,115.2L230.0,113.1L231.4,110.9L232.7,108.8L234.1,106.6L235.5,104.4L236.8,102.2L238.2,100.0L239.5,97.7L240.9,95.5L242.3,93.2L243.6,90.9L245.0,88.5L246.4,86.2L247.7,83.8L249.1,81.4L250.5,79.0L251.8,76.5L253.2,74.1L254.5,71.6L255.9,69.1L257.3,66.6L258.6,64.0L260.0,61.5" fill="none" stroke="#0083cb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><line x1="87.5" y1="188.593" x2="275" y2="188.593" stroke="#f9d3e3" stroke-width="4" stroke-linecap="round"/><text x="281" y="192.593" font-size="9.5" text-anchor="start" fill="#8a8a93">[1,00; 2,00]</text><line x1="181.25" y1="202.593" x2="275" y2="202.593" stroke="#f58cb8" stroke-width="4" stroke-linecap="round"/><text x="281" y="206.593" font-size="9.5" text-anchor="start" fill="#f58cb8">[1,50; 2,00]</text><line x1="181.25" y1="216.593" x2="228.125" y2="216.593" stroke="#f40086" stroke-width="4" stroke-linecap="round"/><text x="234.125" y="220.593" font-size="9.5" text-anchor="start" fill="#f40086">[1,50; 1,75]</text><circle cx="185.263" cy="172.593" r="4.5" fill="#d33a4e" stroke="#fff" stroke-width="1.6"/><text x="181.263" y="160.593" font-size="11.5" text-anchor="middle" fill="#d33a4e" font-weight="600">raiz</text><text x="200" y="294" font-size="11.5" text-anchor="middle" fill="#f40086" font-weight="700">bissecao: corta o intervalo ao meio</text><text x="200" y="310" font-size="10.5" text-anchor="middle" fill="#5c5c66">sempre converge, mas devagar</text><rect x="420" y="60" width="300" height="190" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="457.5" y1="60" x2="457.5" y2="250" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="551.25" y1="60" x2="551.25" y2="250" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="645" y1="60" x2="645" y2="250" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="420" y1="242.963" x2="720" y2="242.963" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="420" y1="207.778" x2="720" y2="207.778" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="420" y1="172.593" x2="720" y2="172.593" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="420" y1="137.407" x2="720" y2="137.407" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="420" y1="102.222" x2="720" y2="102.222" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="420" y1="67.037" x2="720" y2="67.037" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="420" y1="172.593" x2="720" y2="172.593" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="457.5" y="265" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="551.25" y="265" font-size="10.5" text-anchor="middle" fill="#8a8a93">1.5</text><text x="645" y="265" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="414" y="246.463" font-size="10.5" text-anchor="end" fill="#8a8a93">-2</text><text x="414" y="211.278" font-size="10.5" text-anchor="end" fill="#8a8a93">-1</text><text x="414" y="140.907" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="414" y="105.722" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="414" y="70.537" font-size="10.5" text-anchor="end" fill="#8a8a93">3</text><text x="724" y="254" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">x</text><text x="416" y="54" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">y</text><path d="M435.0,249.9L436.4,249.6L437.7,249.3L439.1,248.9L440.5,248.5L441.8,248.1L443.2,247.7L444.5,247.3L445.9,246.9L447.3,246.5L448.6,246.1L450.0,245.6L451.4,245.2L452.7,244.7L454.1,244.2L455.5,243.7L456.8,243.2L458.2,242.7L459.5,242.2L460.9,241.6L462.3,241.1L463.6,240.5L465.0,240.0L466.4,239.4L467.7,238.8L469.1,238.2L470.5,237.6L471.8,237.0L473.2,236.3L474.5,235.7L475.9,235.0L477.3,234.3L478.6,233.6L480.0,232.9L481.4,232.2L482.7,231.5L484.1,230.8L485.5,230.0L486.8,229.2L488.2,228.5L489.5,227.7L490.9,226.9L492.3,226.1L493.6,225.2L495.0,224.4L496.4,223.5L497.7,222.7L499.1,221.8L500.5,220.9L501.8,220.0L503.2,219.0L504.5,218.1L505.9,217.2L507.3,216.2L508.6,215.2L510.0,214.2L511.4,213.2L512.7,212.2L514.1,211.1L515.5,210.1L516.8,209.0L518.2,207.9L519.5,206.8L520.9,205.7L522.3,204.6L523.6,203.5L525.0,202.3L526.4,201.1L527.7,199.9L529.1,198.7L530.5,197.5L531.8,196.3L533.2,195.0L534.5,193.8L535.9,192.5L537.3,191.2L538.6,189.9L540.0,188.6L541.4,187.2L542.7,185.9L544.1,184.5L545.5,183.1L546.8,181.7L548.2,180.3L549.5,178.8L550.9,177.4L552.3,175.9L553.6,174.4L555.0,172.9L556.4,171.4L557.7,169.8L559.1,168.3L560.5,166.7L561.8,165.1L563.2,163.5L564.5,161.8L565.9,160.2L567.3,158.5L568.6,156.8L570.0,155.1L571.4,153.4L572.7,151.7L574.1,149.9L575.5,148.2L576.8,146.4L578.2,144.6L579.5,142.7L580.9,140.9L582.3,139.0L583.6,137.1L585.0,135.2L586.4,133.3L587.7,131.4L589.1,129.4L590.5,127.4L591.8,125.4L593.2,123.4L594.5,121.4L595.9,119.3L597.3,117.3L598.6,115.2L600.0,113.1L601.4,110.9L602.7,108.8L604.1,106.6L605.5,104.4L606.8,102.2L608.2,100.0L609.5,97.7L610.9,95.5L612.3,93.2L613.6,90.9L615.0,88.5L616.4,86.2L617.7,83.8L619.1,81.4L620.5,79.0L621.8,76.5L623.2,74.1L624.5,71.6L625.9,69.1L627.3,66.6L628.6,64.0L630.0,61.5" fill="none" stroke="#0083cb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><line x1="663.75" y1="63.5185" x2="584.626" y2="172.593" stroke="#a300bc" stroke-width="1.8" stroke-linecap="round"/><line x1="663.75" y1="63.5185" x2="663.75" y2="172.593" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><circle cx="663.75" cy="63.5185" r="4" fill="#fff" stroke="#a300bc" stroke-width="1.6"/><text x="663.75" y="190.593" font-size="10.5" text-anchor="middle" fill="#a300bc" font-weight="700">x0</text><line x1="584.626" y1="135.762" x2="558.271" y2="172.593" stroke="#a300bc" stroke-width="1.8" stroke-linecap="round"/><line x1="584.626" y1="135.762" x2="584.626" y2="172.593" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><circle cx="584.626" cy="135.762" r="4" fill="#fff" stroke="#a300bc" stroke-width="1.6"/><text x="584.626" y="190.593" font-size="10.5" text-anchor="middle" fill="#a300bc" font-weight="700">x1</text><circle cx="555.263" cy="172.593" r="4.5" fill="#d33a4e" stroke="#fff" stroke-width="1.6"/><text x="551.263" y="160.593" font-size="11.5" text-anchor="middle" fill="#d33a4e" font-weight="600">raiz</text><text x="570" y="294" font-size="11.5" text-anchor="middle" fill="#a300bc" font-weight="700">Newton: segue a reta tangente</text><text x="570" y="310" font-size="10.5" text-anchor="middle" fill="#5c5c66">bem mais rápido, mas pode divergir</text></svg>
A bisseção reduz o intervalo pela metade; Newton usa a tangente para dar saltos maiores.

## Método da bisseção

É o método mais simples e mais seguro. Funciona como um jogo de "adivinhe o número" em que, a cada palpite, descartamos metade das possibilidades:

1. Comece com um intervalo \([a,b]\) em que a função muda de sinal.
2. Calcule o ponto do meio, \(x_m = (a+b)/2\).
3. Veja em qual das duas metades a função continua mudando de sinal: se \(f(a)\,f(x_m) \lt 0\), a raiz está em \([a, x_m]\); caso contrário, está em \([x_m, b]\).
4. Repita com a metade escolhida até o intervalo ficar menor que a precisão desejada.

Como o intervalo cai pela metade a cada passo, depois de \(n\) passos o erro é no máximo \(\dfrac{b-a}{2^n}\). Por isso dá para saber, **antes de começar**, quantos passos serão necessários para uma tolerância \(\varepsilon\):

\[ n \ge \log_2\frac{b - a}{\varepsilon} \]

![Bisseção: a cada passo o intervalo entre a e b é dividido ao meio e fica-se com a metade em que f troca de sinal.](https://upload.wikimedia.org/wikipedia/commons/8/8c/Bisection_method.svg)
Fonte: Tokuchan, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bisection_method.svg).

Por exemplo, com um intervalo de tamanho 1 e uma tolerância de \(10^{-6}\) (seis casas decimais), são necessários 20 passos. A grande **vantagem** da bisseção é que ela **sempre funciona**, desde que a função mude de sinal no intervalo. A **desvantagem** é que é lenta: ganha-se cerca de uma casa decimal a cada três ou quatro passos.

## Método de Newton (ou de Newton-Raphson)

A ideia é usar a **reta tangente** (tema 3). No ponto atual \(x_k\), traça-se a tangente à curva e vê-se onde ela cruza o eixo \(x\). Esse cruzamento é o próximo palpite:

\[ x_{k+1} = x_k - \frac{f(x_k)}{f'(x_k)} \]

A grande **vantagem** é a velocidade: perto da raiz, o número de casas decimais corretas praticamente **dobra a cada passo** (diz-se que a convergência é **quadrática**). As **desvantagens** são duas: é preciso conhecer a derivada da função, e o método pode se perder, oscilando ou indo para longe, se o palpite inicial for ruim ou se a tangente for quase horizontal (\(f'(x_k) \approx 0\)), porque aí a divisão por um número muito pequeno joga o próximo palpite para longe.

![Animação do método de Newton: em cada ponto traça-se a tangente (em vermelho), e o cruzamento dela com o eixo x é a próxima aproximação da raiz.](https://upload.wikimedia.org/wikipedia/commons/e/e0/NewtonIteration_Ani.gif)
Fonte: Ralf Pfeifer, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:NewtonIteration_Ani.gif).

O **método da secante** é uma variação que dispensa a derivada: usa a inclinação da reta que passa pelos dois últimos pontos calculados. É um pouco mais lento que Newton, mas bem mais rápido que a bisseção (veja a comparação completa no tema 51).

## Quando parar

Todo método iterativo precisa de uma regra de parada. As mais usadas são:

- a diferença entre dois palpites seguidos ficou menor que a tolerância: \(\lvert x_{k+1} - x_k\rvert \lt \varepsilon\). Quando os números são muito grandes ou muito pequenos, é melhor usar a diferença **relativa**, \(\lvert x_{k+1} - x_k\rvert/\lvert x_{k+1}\rvert\);
- o valor da função ficou muito perto de zero: \(\lvert f(x_k)\rvert \lt \varepsilon\);
- atingiu-se um **número máximo de iterações**. Essa proteção evita que o programa rode para sempre quando o método não converge.

Cuidado: olhar só para \(\lvert f(x)\rvert\) pode enganar quando a função é muito "achatada" perto da raiz, porque ela fica próxima de zero numa faixa larga de valores de \(x\).

## Exemplo resolvido: a raiz de \(f(x) = x^3 - x - 2\)

**Passo 1, localizar:** \(f(1) = -2\) e \(f(2) = 4\). A função muda de sinal, então há uma raiz entre 1 e 2.

**Passo 2, bisseção:**

| \(k\) | intervalo | ponto médio \(x_m\) | \(f(x_m)\) |
|---|---|---|---|
| 1 | [1; 2] | 1,5 | −0,125 |
| 2 | [1,5; 2] | 1,75 | 1,609 |
| 3 | [1,5; 1,75] | 1,625 | 0,666 |
| 4 | [1,5; 1,625] | 1,5625 | 0,252 |
| 5 | [1,5; 1,5625] | 1,53125 | 0,059 |

Depois de 5 passos, sabemos apenas que a raiz está entre 1,5 e 1,53125.

**Passo 3, Newton**, com \(f'(x) = 3x^2 - 1\), partindo de \(x_0 = 1{,}5\):

| \(k\) | \(x_k\) | \(f(x_k)\) |
|---|---|---|
| 0 | 1,500000 | −0,125 |
| 1 | 1,521739 | 0,00214 |
| 2 | 1,521380 | ≈ 0,000002 |
| 3 | 1,5213797 | ≈ 0 |

Em três passos, Newton chega a sete casas decimais corretas (\(x^\ast \approx 1{,}5213797\)). Uma estratégia muito usada na prática é **combinar os dois**: a bisseção para chegar perto da raiz com segurança e Newton para refinar rapidamente.

> **Atenção, erros comuns:**
> Aplicar a bisseção sem verificar antes se a função muda de sinal no intervalo.
> Usar Newton perto de um ponto onde a tangente é horizontal (\(f'(x) = 0\)): o próximo palpite "dispara".
> Esquecer de limitar o número de iterações no programa.

## Para fixar

- Primeiro localize a raiz (com o Teorema do Valor Intermediário); depois refine.
- Bisseção: lenta, mas sempre funciona. Newton: muito rápido, mas exige a derivada e um bom palpite inicial.
- Defina sempre uma tolerância e um número máximo de iterações.
`,
  referencias: [
    "RUGGIERO, M. A. G.; LOPES, V. L. R. **Cálculo numérico**: aspectos teóricos e computacionais. 2. ed. São Paulo: Makron Books, 1996. Cap. 2: Zeros reais de funções reais.",
    "FRANCO, N. B. **Cálculo numérico**. São Paulo: Pearson Prentice Hall, 2006.",
    "BURDEN, R. L.; FAIRES, J. D. **Análise numérica**. 8. ed. São Paulo: Cengage Learning, 2008.",
    "CHAPRA, S. C.; CANALE, R. P. **Métodos numéricos para engenharia**. 7. ed. Porto Alegre: AMGH, 2016.",
  ],
},
{
  id: "r42", num: 42,
  area: "Cálculo II e Métodos Numéricos",
  disciplina: "Métodos Numéricos",
  titulo: "Resolução numérica de equações diferenciais",
  descricao: "Como o computador resolve uma equação diferencial passo a passo: os métodos de Euler e de Runge-Kutta, a escolha do passo, a estabilidade e a simulação de um cultivo em batelada.",
  tags: ["métodos numéricos", "Euler", "Runge-Kutta", "RK4", "problema de valor inicial", "passo de integração", "erro de truncamento", "estabilidade", "sistemas de EDO", "simulação"],
  conteudo: String.raw`
## O problema

Queremos resolver um problema de valor inicial (tema 40):

\[ \frac{dy}{dt} = f(t, y), \qquad y(t_0) = y_0 \]

Mas a maioria dos modelos reais, como o crescimento de células com a cinética de Monod (tema 46), **não tem solução por fórmula**. A saída é calcular a solução **aproximadamente, passo a passo**, com o computador.

A ideia é dividir o tempo em pequenos intervalos de tamanho \(h\) (o **passo**): \(t_0\), \(t_0 + h\), \(t_0 + 2h\) e assim por diante. Sabemos o valor inicial e sabemos, pela própria equação, **a inclinação** da solução em qualquer ponto. Com isso, avançamos de um ponto para o seguinte, como alguém que caminha no escuro e, a cada passo, verifica a direção na bússola.

## Método de Euler: andar em linha reta

<svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" role="img"><title>Euler e solução exata</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="24" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Metodo de Euler: andar em linha reta a cada passo</text><rect x="60" y="54" width="420" height="210" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="165" y1="54" x2="165" y2="264" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="270" y1="54" x2="270" y2="264" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="375" y1="54" x2="375" y2="264" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="480" y1="54" x2="480" y2="264" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="226.5" x2="480" y2="226.5" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="189" x2="480" y2="189" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="151.5" x2="480" y2="151.5" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="114" x2="480" y2="114" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="76.5" x2="480" y2="76.5" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="54" x2="60" y2="264" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="60" y1="264" x2="480" y2="264" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="165" y="279" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="270" y="279" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="375" y="279" font-size="10.5" text-anchor="middle" fill="#8a8a93">3</text><text x="480" y="279" font-size="10.5" text-anchor="middle" fill="#8a8a93">4</text><text x="54" y="230" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="54" y="192.5" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="54" y="155" font-size="10.5" text-anchor="end" fill="#8a8a93">3</text><text x="54" y="117.5" font-size="10.5" text-anchor="end" fill="#8a8a93">4</text><text x="54" y="80" font-size="10.5" text-anchor="end" fill="#8a8a93">5</text><text x="484" y="268" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">t</text><text x="56" y="48" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">x</text><path d="M60.0,226.5L61.9,226.2L63.8,226.0L65.7,225.7L67.6,225.4L69.5,225.1L71.5,224.8L73.4,224.5L75.3,224.3L77.2,224.0L79.1,223.7L81.0,223.4L82.9,223.1L84.8,222.8L86.7,222.5L88.6,222.2L90.5,221.9L92.5,221.6L94.4,221.3L96.3,220.9L98.2,220.6L100.1,220.3L102.0,220.0L103.9,219.7L105.8,219.3L107.7,219.0L109.6,218.7L111.5,218.4L113.5,218.0L115.4,217.7L117.3,217.4L119.2,217.0L121.1,216.7L123.0,216.3L124.9,216.0L126.8,215.6L128.7,215.3L130.6,214.9L132.5,214.6L134.5,214.2L136.4,213.8L138.3,213.5L140.2,213.1L142.1,212.7L144.0,212.4L145.9,212.0L147.8,211.6L149.7,211.2L151.6,210.8L153.5,210.4L155.5,210.1L157.4,209.7L159.3,209.3L161.2,208.9L163.1,208.5L165.0,208.1L166.9,207.6L168.8,207.2L170.7,206.8L172.6,206.4L174.5,206.0L176.5,205.6L178.4,205.1L180.3,204.7L182.2,204.3L184.1,203.8L186.0,203.4L187.9,203.0L189.8,202.5L191.7,202.1L193.6,201.6L195.5,201.2L197.5,200.7L199.4,200.2L201.3,199.8L203.2,199.3L205.1,198.8L207.0,198.3L208.9,197.9L210.8,197.4L212.7,196.9L214.6,196.4L216.5,195.9L218.5,195.4L220.4,194.9L222.3,194.4L224.2,193.9L226.1,193.4L228.0,192.9L229.9,192.4L231.8,191.8L233.7,191.3L235.6,190.8L237.5,190.2L239.5,189.7L241.4,189.2L243.3,188.6L245.2,188.1L247.1,187.5L249.0,187.0L250.9,186.4L252.8,185.8L254.7,185.3L256.6,184.7L258.5,184.1L260.5,183.5L262.4,182.9L264.3,182.3L266.2,181.7L268.1,181.1L270.0,180.5L271.9,179.9L273.8,179.3L275.7,178.7L277.6,178.1L279.5,177.5L281.5,176.8L283.4,176.2L285.3,175.5L287.2,174.9L289.1,174.2L291.0,173.6L292.9,172.9L294.8,172.3L296.7,171.6L298.6,170.9L300.5,170.2L302.5,169.6L304.4,168.9L306.3,168.2L308.2,167.5L310.1,166.8L312.0,166.1L313.9,165.3L315.8,164.6L317.7,163.9L319.6,163.2L321.5,162.4L323.5,161.7L325.4,160.9L327.3,160.2L329.2,159.4L331.1,158.7L333.0,157.9L334.9,157.1L336.8,156.3L338.7,155.6L340.6,154.8L342.5,154.0L344.5,153.2L346.4,152.4L348.3,151.5L350.2,150.7L352.1,149.9L354.0,149.1L355.9,148.2L357.8,147.4L359.7,146.5L361.6,145.7L363.5,144.8L365.5,143.9L367.4,143.1L369.3,142.2L371.2,141.3L373.1,140.4L375.0,139.5L376.9,138.6L378.8,137.7L380.7,136.7L382.6,135.8L384.5,134.9L386.5,133.9L388.4,133.0L390.3,132.0L392.2,131.1L394.1,130.1L396.0,129.1L397.9,128.1L399.8,127.1L401.7,126.2L403.6,125.1L405.5,124.1L407.5,123.1L409.4,122.1L411.3,121.0L413.2,120.0L415.1,119.0L417.0,117.9L418.9,116.8L420.8,115.8L422.7,114.7L424.6,113.6L426.5,112.5L428.5,111.4L430.4,110.3L432.3,109.1L434.2,108.0L436.1,106.9L438.0,105.7L439.9,104.6L441.8,103.4L443.7,102.2L445.6,101.1L447.5,99.9L449.5,98.7L451.4,97.5L453.3,96.2L455.2,95.0L457.1,93.8L459.0,92.5L460.9,91.3L462.8,90.0L464.7,88.8L466.6,87.5L468.5,86.2L470.5,84.9L472.4,83.6L474.3,82.3L476.2,80.9L478.1,79.6L480.0,78.3" fill="none" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><text x="322.5" y="146.064" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">solução exata</text><path d="M60.0,226.5L165.0,211.5L270.0,190.5L375.0,161.1L480.0,119.9" fill="none" stroke="#f40086" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 4"/><circle cx="480" cy="119.94" r="4" fill="#fff" stroke="#f40086" stroke-width="1.8"/><text x="468" y="111.94" font-size="10.5" text-anchor="end" fill="#f40086" font-weight="700">h = 1,0</text><path d="M60.0,226.5L112.5,219.0L165.0,210.0L217.5,199.2L270.0,186.2L322.5,170.7L375.0,152.0L427.5,129.6L480.0,102.8" fill="none" stroke="#a300bc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 4"/><circle cx="480" cy="102.757" r="4" fill="#fff" stroke="#a300bc" stroke-width="1.8"/><text x="468" y="94.7569" font-size="10.5" text-anchor="end" fill="#a300bc" font-weight="700">h = 0,5</text><rect x="520" y="80" width="190" height="140" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="615" y="104" font-size="12" text-anchor="middle" fill="#333333" font-weight="700">o erro acumula</text><text x="615" y="128" font-size="10.5" text-anchor="middle" fill="#5c5c66">Euler usa a inclinação</text><text x="615" y="142" font-size="10.5" text-anchor="middle" fill="#5c5c66">do inicio do passo e</text><text x="615" y="156" font-size="10.5" text-anchor="middle" fill="#5c5c66">ignora a curvatura.</text><text x="615" y="180" font-size="10.5" text-anchor="middle" fill="#333333">Passo menor, erro menor,</text><text x="615" y="194" font-size="10.5" text-anchor="middle" fill="#333333">mas mais contas.</text><text x="20" y="296" font-size="11.5" text-anchor="start" fill="#5c5c66">Runge-Kutta consulta a inclinação varias vezes dentro do passo e erra muito menos para o mesmo h.</text></svg>
O método de Euler subestima a curva porque usa a inclinação do início de cada passo.

O método mais simples usa a inclinação do **início** do passo e anda em linha reta até o fim dele:

\[ y_{n+1} = y_n + h\,f(t_n, y_n) \]

Em palavras: o novo valor é o valor atual mais o passo vezes a inclinação atual. É a aproximação pela reta tangente (tema 3), repetida passo a passo.

![Método de Euler: a solução exata (em azul) e a poligonal de Euler (em vermelho), que segue a inclinação do início de cada passo e acumula erro.](https://upload.wikimedia.org/wikipedia/commons/1/10/Euler_method.svg)
Fonte: domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Euler_method.svg).

O problema é que a inclinação muda **durante** o passo, e o método ignora isso. Os pequenos erros se acumulam ao longo do caminho. O Euler é um método de **primeira ordem**: o erro final é proporcional ao passo. Reduzir o passo à metade reduz o erro também à metade, mas dobra o número de contas.

## Métodos de Runge-Kutta: consultar a inclinação várias vezes

Os métodos de Runge-Kutta melhoram a precisão calculando a inclinação em **vários pontos dentro do passo** e fazendo uma média ponderada. O mais usado é o **Runge-Kutta de quarta ordem** (RK4), que calcula quatro inclinações:

\[ \begin{aligned} k_1 &= f(t_n,\ y_n) \\ k_2 &= f\!\left(t_n + \tfrac{h}{2},\ y_n + \tfrac{h}{2}k_1\right) \\ k_3 &= f\!\left(t_n + \tfrac{h}{2},\ y_n + \tfrac{h}{2}k_2\right) \\ k_4 &= f(t_n + h,\ y_n + h\,k_3) \end{aligned} \]

\[ y_{n+1} = y_n + \frac{h}{6}\left(k_1 + 2k_2 + 2k_3 + k_4\right) \]

Lendo as fórmulas: \(k_1\) é a inclinação no início do passo; \(k_2\) e \(k_3\) são estimativas da inclinação no meio do passo; \(k_4\) é a inclinação no fim. A média dá peso dobrado às do meio. O erro final é proporcional a \(h^4\): reduzir o passo à metade reduz o erro cerca de **16 vezes**.

## Exemplo resolvido: crescimento exponencial

Vamos resolver \(y' = 0{,}5\,y\), com \(y(0) = 1\), e calcular \(y(2)\). Aqui conhecemos a resposta exata, \(e^{1} \approx 2{,}718282\), o que permite medir o erro de cada método.

**Euler com passo \(h = 1\):**

- Passo 1: \(y_1 = 1 + 1\times(0{,}5\times1) = 1{,}5\).
- Passo 2: \(y_2 = 1{,}5 + 1\times(0{,}5\times1{,}5) = 2{,}25\).

**RK4 com passo \(h = 1\)**, primeiro passo:

- \(k_1 = 0{,}5\times1 = 0{,}5\)
- \(k_2 = 0{,}5\times(1 + 0{,}5\times0{,}5) = 0{,}625\)
- \(k_3 = 0{,}5\times(1 + 0{,}5\times0{,}625) = 0{,}65625\)
- \(k_4 = 0{,}5\times(1 + 1\times0{,}65625) = 0{,}828125\)
- \(y_1 = 1 + \tfrac16(0{,}5 + 2\times0{,}625 + 2\times0{,}65625 + 0{,}828125) \approx 1{,}648438\). O valor exato é \(e^{0{,}5} \approx 1{,}648721\).

Repetindo o mesmo cálculo no segundo passo, chega-se a \(y_2 \approx 2{,}717346\).

| Método | Passo \(h\) | \(y(2)\) calculado | Erro |
|---|---|---|---|
| Euler | 1 | 2,2500 | 17% |
| Euler | 0,5 | 2,4414 | 10% |
| Euler | 0,1 | 2,6533 | 2,4% |
| RK4 | 1 | 2,7173 | 0,03% |

O RK4 com passo 1 calcula a função 8 vezes e erra 0,03%. O Euler com passo 0,1 calcula a função 20 vezes e ainda erra 2,4%. Cada passo do RK4 dá mais trabalho, mas o resultado compensa de longe.

## Sistemas de equações: simulando um cultivo

Os mesmos métodos funcionam para **várias equações ao mesmo tempo**: basta aplicar as fórmulas a cada variável, em conjunto. Um cultivo em batelada com a cinética de Monod (tema 46) é descrito por um sistema com duas variáveis, a concentração de células (\(X\)) e a de substrato (\(S\)):

\[ \frac{dX}{dt} = \mu(S)\,X, \qquad \frac{dS}{dt} = -\frac{\mu(S)\,X}{Y_{X/S}}, \qquad \mu(S) = \frac{\mu_{max}S}{K_S + S} \]

As células crescem consumindo o substrato, e a velocidade de crescimento depende de quanto substrato ainda resta. Aplicando o RK4 a \(X\) e \(S\) simultaneamente, obtém-se a curva de crescimento completa, com a fase exponencial e a parada quando o substrato acaba (tema 50).

## Escolhendo o passo e evitando armadilhas

- **Estabilidade:** com passos grandes demais, a solução calculada pode oscilar e "explodir", mesmo quando a solução verdadeira é tranquila. Para a equação \(y' = \lambda y\) com \(\lambda\) negativo, o Euler só é estável se \(h \lt 2/\lvert\lambda\rvert\). Sistemas que misturam processos muito rápidos com processos muito lentos (os chamados **sistemas rígidos**) exigem métodos especiais, chamados implícitos.
- **Teste do passo:** resolva o problema com o passo \(h\) e depois com \(h/2\). Se os resultados forem praticamente iguais, o passo está adequado.
- **Na prática, use programas prontos:** ferramentas como o SciPy (função \(\texttt{solve\_ivp}\)), o MATLAB e o GNU Octave (função \(\texttt{ode45}\)) usam métodos de Runge-Kutta que **ajustam o passo automaticamente**, diminuindo-o onde a solução muda rápido e aumentando-o onde ela muda devagar.

> **Atenção, erros comuns:**
> Usar um passo grande e confiar no resultado sem testar com um passo menor.
> No RK4, calcular \(k_2\) com \(y_n + h\,k_1\) em vez de \(y_n + \frac{h}{2}k_1\).
> Misturar unidades de tempo: parâmetros em "por hora" e passo em minutos.

## Para fixar

- Euler: simples, mas pouco preciso (primeira ordem).
- RK4: quatro inclinações por passo, quarta ordem; é o método padrão para a maioria dos problemas.
- Sistemas de equações são resolvidos do mesmo jeito, aplicando o método a todas as variáveis juntas.
`,
  referencias: [
    "RUGGIERO, M. A. G.; LOPES, V. L. R. **Cálculo numérico**: aspectos teóricos e computacionais. 2. ed. São Paulo: Makron Books, 1996.",
    "FRANCO, N. B. **Cálculo numérico**. São Paulo: Pearson Prentice Hall, 2006.",
    "BURDEN, R. L.; FAIRES, J. D. **Análise numérica**. 8. ed. São Paulo: Cengage Learning, 2008.",
    "CHAPRA, S. C.; CANALE, R. P. **Métodos numéricos para engenharia**. 7. ed. Porto Alegre: AMGH, 2016.",
    "DORMAND, J. R.; PRINCE, P. J. A family of embedded Runge-Kutta formulae. **Journal of Computational and Applied Mathematics**, v. 6, n. 1, p. 19-26, 1980.",
  ],
},
{
  id: "r51", num: 51,
  area: "Cálculo II e Métodos Numéricos",
  disciplina: "Métodos Numéricos",
  titulo: "Bisseção, falsa posição, ponto fixo, Newton e secante: comparação",
  descricao: "Os principais métodos para resolver f(x) = 0 lado a lado: como cada um funciona, quando dá certo, qual é mais rápido e qual escolher, com aplicação a um biorreator contínuo.",
  tags: ["métodos numéricos", "cálculo numérico", "bisseção", "falsa posição", "regula falsi", "ponto fixo", "iteração linear", "Newton-Raphson", "secante", "ordem de convergência"],
  conteudo: String.raw`
## Dois grandes grupos

Todos os métodos deste tema procuram a raiz de uma equação \(f(x) = 0\) por aproximações sucessivas. Eles se dividem em dois grupos:

- **Métodos de intervalo** (bisseção e falsa posição): começam com um intervalo \([a,b]\) em que a função muda de sinal e mantêm a raiz sempre "cercada" dentro dele. **Sempre funcionam**, mas costumam ser lentos.
- **Métodos abertos** (ponto fixo, Newton e secante): começam com um ou dois palpites, sem precisar cercar a raiz. São **rápidos** quando o palpite está perto da raiz, mas **podem se perder** se ele estiver longe.

A bisseção e o método de Newton foram explicados em detalhe no tema 41. Aqui eles entram na comparação com os outros três.

## Falsa posição

É parecida com a bisseção, mas mais "esperta" na escolha do próximo ponto. Em vez de pegar o ponto do meio do intervalo, liga com uma reta os pontos \((a, f(a))\) e \((b, f(b))\) e usa o ponto onde essa reta cruza o eixo \(x\):

\[ x = \frac{a\,f(b) - b\,f(a)}{f(b) - f(a)} \]

Depois, como na bisseção, fica com o lado em que a função muda de sinal. A lógica é que, se \(f(a)\) está bem mais perto de zero que \(f(b)\), a raiz provavelmente está mais perto de \(a\). Em geral é mais rápida que a bisseção, mas, em funções muito curvas, uma das pontas do intervalo pode ficar "presa" e o método fica lento. Existem variantes que corrigem isso (como o método de Illinois).

## Iteração de ponto fixo

A ideia é reescrever a equação \(f(x) = 0\) na forma \(x = g(x)\) e simplesmente aplicar \(g\) repetidamente:

\[ x_{k+1} = g(x_k) \]

Se a sequência de valores se estabilizar num número, esse número satisfaz \(x = g(x)\) e, portanto, é a raiz procurada.

O ponto delicado é que **a mesma equação pode ser reescrita de várias formas**, e algumas funcionam enquanto outras não. A regra é: o método converge se, perto da raiz, a inclinação de \(g\) for pequena, \(\lvert g'(x)\rvert \lt 1\). Quanto menor esse valor, mais rápido.

![Iteração de ponto fixo para x = cos x: o "diagrama de teia" alterna entre a curva y = cos x e a reta y = x, espiralando até o ponto fixo (x ≈ 0,739).](https://upload.wikimedia.org/wikipedia/commons/e/ea/Cosine_fixed_point.svg)
Fonte: Tinctorius (Wikipédia em inglês), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cosine_fixed_point.svg).

**Exemplo: duas formas de reescrever \(x^3 - x - 2 = 0\).**

- **Forma 1:** isolando o \(x\) "solto", \(x = x^3 - 2\), ou seja, \(g_1(x) = x^3 - 2\). Perto da raiz (\(x^\ast \approx 1{,}52\)), a inclinação é \(g_1'(x) = 3x^2 \approx 6{,}9\), muito maior que 1. Os valores se afastam cada vez mais: o método **não funciona**.
- **Forma 2:** isolando o \(x^3\), \(x^3 = x + 2\), ou seja, \(g_2(x) = \sqrt[3]{x + 2}\). Agora a inclinação perto da raiz é cerca de 0,14, bem menor que 1. Partindo de \(x_0 = 1{,}5\), os valores são 1,5183 → 1,5209 → 1,5213 → 1,52138: o método **funciona**.

Curiosidade: o próprio método de Newton é uma iteração de ponto fixo, com \(g(x) = x - f(x)/f'(x)\). Essa \(g\) foi construída de modo que a sua inclinação na raiz seja **zero**, e é por isso que Newton é tão rápido.

## Método da secante

O método de Newton precisa da derivada \(f'(x)\), que nem sempre é fácil de calcular. A secante resolve isso trocando a derivada pela inclinação da reta que passa pelos **dois últimos pontos** calculados:

\[ x_{k+1} = x_k - f(x_k)\,\frac{x_k - x_{k-1}}{f(x_k) - f(x_{k-1})} \]

Precisa de dois palpites iniciais, mas, a cada passo, calcula a função uma única vez. É um pouco mais lento que Newton por passo, mas cada passo é mais barato.

![Método da secante: a reta que passa pelos dois últimos pontos da curva cruza o eixo x na próxima aproximação.](https://upload.wikimedia.org/wikipedia/commons/9/92/Secant_method.svg)
Fonte: Jitse Niesen, domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Secant_method.svg).

**Exemplo** com \(f(x) = x^3 - x - 2\), partindo de \(x_0 = 1\) e \(x_1 = 2\):

| \(k\) | \(x_k\) | \(f(x_k)\) |
|---|---|---|
| 2 | 1,3333 | −0,963 |
| 3 | 1,4627 | −0,333 |
| 4 | 1,5312 | 0,059 |
| 5 | 1,5209 | −0,0027 |
| 6 | 1,52138 | ≈ 0 |

## Comparação

A **ordem de convergência** indica a velocidade com que o erro diminui. Ordem 1 significa que o erro cai numa proporção fixa a cada passo; ordem 2 significa que o número de casas corretas aproximadamente dobra a cada passo.

| Método | Do que precisa | Sempre funciona? | Ordem | Contas por passo |
|---|---|---|---|---|
| Bisseção | intervalo com troca de sinal | sim | 1 (o erro cai pela metade) | 1 valor de \(f\) |
| Falsa posição | intervalo com troca de sinal | sim | 1 (em geral mais rápida que a bisseção) | 1 valor de \(f\) |
| Ponto fixo | uma \(g\) com \(\lvert g'\rvert \lt 1\) perto da raiz | só se essa condição valer | 1 | 1 valor de \(g\) |
| Newton | a derivada e um bom palpite | só perto da raiz | 2 | 1 valor de \(f\) e 1 de \(f'\) |
| Secante | dois palpites | só perto da raiz | cerca de 1,6 | 1 valor de \(f\) |

**Qual escolher?** Se a derivada é fácil de calcular, Newton. Se não é, a secante. Se é essencial ter certeza de que o método vai funcionar, um método de intervalo. Na prática, os programas usam **métodos híbridos**, como o método de Brent (disponível no SciPy, por exemplo), que combinam a segurança da bisseção com a rapidez da secante.

## Aplicação: um biorreator contínuo com inibição pelo substrato

Em alguns processos, o próprio substrato atrapalha o crescimento quando está muito concentrado (como o fenol no tratamento de efluentes). A cinética de Haldane descreve isso:

\[ \mu(S) = \frac{\mu_{max}S}{K_S + S + S^2/K_I} \]

Num biorreator contínuo em estado estacionário, a velocidade de crescimento precisa ser igual à taxa de diluição: \(\mu(S) = D\) (tema 50). Com \(\mu_{max} = 0{,}5\) por hora, \(K_S = 0{,}2\) g/L, \(K_I = 5\) g/L e \(D = 0{,}3\) por hora, define-se \(f(S) = \mu(S) - D\) e procura-se a raiz.

**Passo 1, localizar:** \(f(0) = -0{,}3\), \(f(1) \approx +0{,}057\) e \(f(10) \approx -0{,}134\). A função muda de sinal **duas vezes**: há duas raízes, uma entre 0 e 1 e outra entre 1 e 10.

**Passo 2, calcular:** a bisseção em \([0, 1]\) encontra \(S \approx 0{,}333\) g/L, e em \([1, 10]\) encontra \(S = 3{,}0\) g/L.

Neste caso simples, a equação vira uma equação do segundo grau e dá para conferir pela fórmula de Bhaskara. Mas, em modelos mais completos (com inibição pelo produto, por exemplo), só os métodos numéricos resolvem. Qual dos dois estados é estável, isto é, qual o reator realmente alcança na prática, é assunto do tema 54.

> **Atenção, erros comuns:**
> No ponto fixo, escolher uma \(g\) sem verificar se \(\lvert g'\rvert \lt 1\) perto da raiz.
> Usar um método aberto sem limite de iterações e sem conferir se o resultado zera mesmo a função.
> Esquecer que pode haver **várias raízes**: o intervalo ou o palpite inicial determinam qual delas o método encontra.

## Para fixar

- Métodos de intervalo: seguros e lentos. Métodos abertos: rápidos, mas exigem cuidado.
- O ponto fixo funciona se \(\lvert g'\rvert \lt 1\); Newton é um ponto fixo com inclinação zero na raiz.
- A secante é quase tão rápida quanto Newton, sem precisar da derivada.
`,
  referencias: [
    "RUGGIERO, M. A. G.; LOPES, V. L. R. **Cálculo numérico**: aspectos teóricos e computacionais. 2. ed. São Paulo: Makron Books, 1996. Cap. 2: Zeros reais de funções reais.",
    "FRANCO, N. B. **Cálculo numérico**. São Paulo: Pearson Prentice Hall, 2006.",
    "BURDEN, R. L.; FAIRES, J. D. **Análise numérica**. 8. ed. São Paulo: Cengage Learning, 2008.",
    "CHAPRA, S. C.; CANALE, R. P. **Métodos numéricos para engenharia**. 7. ed. Porto Alegre: AMGH, 2016.",
    "BRENT, R. P. **Algorithms for minimization without derivatives**. Englewood Cliffs: Prentice-Hall, 1973.",
    "ANDREWS, J. F. A mathematical model for the continuous culture of microorganisms utilizing inhibitory substrates. **Biotechnology and Bioengineering**, v. 10, n. 6, p. 707-723, 1968.",
  ],
}
);
