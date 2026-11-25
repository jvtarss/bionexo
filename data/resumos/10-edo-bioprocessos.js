/* BIONEXO — Resumos complementares · Equações Diferenciais Aplicadas a Bioprocessos (r52–r55) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r52", num: 52,
  area: "Equações Diferenciais Aplicadas a Bioprocessos",
  disciplina: "Cálculo I e II",
  titulo: "Diferenciais, aproximação linear e propagação de erros",
  descricao: "O que é a diferencial, como aproximar uma função pela reta tangente e como as incertezas das medidas de laboratório se transmitem para os resultados calculados.",
  praticar: "questoes.html?disciplina=C%C3%A1lculo%201",
  tags: ["Cálculo 1", "diferencial", "aproximação linear", "derivada parcial", "diferencial total", "propagação de erros", "incerteza", "GUM", "análise de sensibilidade"],
  conteudo: String.raw`
## Por que isso importa no laboratório

Toda medida tem uma incerteza: a balança tem uma resolução, o balão volumétrico tem uma tolerância, o espectrofotômetro oscila um pouco. Quando usamos essas medidas para **calcular** outra grandeza (uma concentração, uma velocidade de crescimento, um rendimento), as incertezas se transmitem para o resultado. A ferramenta matemática para calcular isso é a **diferencial**, que vem diretamente da derivada.

## A diferencial

Se \(y = f(x)\), a **diferencial** de \(y\) é:

\[ dy = f'(x)\,dx \]

Em palavras: se \(x\) muda um pouquinho (\(dx\)), \(y\) muda aproximadamente a derivada vezes essa pequena mudança. A variação real \(\Delta y\) e a diferencial \(dy\) são quase iguais quando a mudança em \(x\) é pequena. No gráfico, \(dy\) é o quanto sobe a **reta tangente** (tema 3), e \(\Delta y\) é o quanto sobe a própria curva.

## Aproximação linear: trocar a curva pela reta tangente

<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Aproximação linear</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Aproximação linear: trocar a curva pela tangente</text><rect x="60" y="56" width="320" height="190" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="140" y1="56" x2="140" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="220" y1="56" x2="220" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="300" y1="56" x2="300" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="380" y1="56" x2="380" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="166.833" x2="380" y2="166.833" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="87.6667" x2="380" y2="87.6667" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="56" x2="60" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="60" y1="246" x2="380" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="140" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="220" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="300" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">3</text><text x="380" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">4</text><text x="54" y="170.333" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="54" y="91.1667" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="384" y="250" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">x</text><text x="56" y="50" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">f</text><path d="M60.0,246.0L61.5,235.3L62.9,230.9L64.4,227.5L65.8,224.7L67.3,222.1L68.7,219.9L70.2,217.8L71.6,215.8L73.1,214.0L74.5,212.2L76.0,210.6L77.5,209.0L78.9,207.5L80.4,206.1L81.8,204.7L83.3,203.3L84.7,202.0L86.2,200.7L87.6,199.5L89.1,198.3L90.5,197.1L92.0,195.9L93.5,194.8L94.9,193.7L96.4,192.6L97.8,191.6L99.3,190.5L100.7,189.5L102.2,188.5L103.6,187.5L105.1,186.6L106.5,185.6L108.0,184.7L109.5,183.8L110.9,182.8L112.4,182.0L113.8,181.1L115.3,180.2L116.7,179.3L118.2,178.5L119.6,177.6L121.1,176.8L122.5,176.0L124.0,175.2L125.5,174.4L126.9,173.6L128.4,172.8L129.8,172.0L131.3,171.3L132.7,170.5L134.2,169.8L135.6,169.0L137.1,168.3L138.5,167.6L140.0,166.8L141.5,166.1L142.9,165.4L144.4,164.7L145.8,164.0L147.3,163.3L148.7,162.6L150.2,161.9L151.6,161.3L153.1,160.6L154.5,159.9L156.0,159.3L157.5,158.6L158.9,158.0L160.4,157.3L161.8,156.7L163.3,156.1L164.7,155.4L166.2,154.8L167.6,154.2L169.1,153.6L170.5,152.9L172.0,152.3L173.5,151.7L174.9,151.1L176.4,150.5L177.8,149.9L179.3,149.3L180.7,148.7L182.2,148.2L183.6,147.6L185.1,147.0L186.5,146.4L188.0,145.9L189.5,145.3L190.9,144.7L192.4,144.2L193.8,143.6L195.3,143.1L196.7,142.5L198.2,142.0L199.6,141.4L201.1,140.9L202.5,140.3L204.0,139.8L205.5,139.3L206.9,138.7L208.4,138.2L209.8,137.7L211.3,137.1L212.7,136.6L214.2,136.1L215.6,135.6L217.1,135.1L218.5,134.6L220.0,134.0L221.5,133.5L222.9,133.0L224.4,132.5L225.8,132.0L227.3,131.5L228.7,131.0L230.2,130.5L231.6,130.0L233.1,129.6L234.5,129.1L236.0,128.6L237.5,128.1L238.9,127.6L240.4,127.1L241.8,126.7L243.3,126.2L244.7,125.7L246.2,125.2L247.6,124.8L249.1,124.3L250.5,123.8L252.0,123.4L253.5,122.9L254.9,122.4L256.4,122.0L257.8,121.5L259.3,121.1L260.7,120.6L262.2,120.1L263.6,119.7L265.1,119.2L266.5,118.8L268.0,118.3L269.5,117.9L270.9,117.5L272.4,117.0L273.8,116.6L275.3,116.1L276.7,115.7L278.2,115.3L279.6,114.8L281.1,114.4L282.5,114.0L284.0,113.5L285.5,113.1L286.9,112.7L288.4,112.2L289.8,111.8L291.3,111.4L292.7,111.0L294.2,110.6L295.6,110.1L297.1,109.7L298.5,109.3L300.0,108.9L301.5,108.5L302.9,108.1L304.4,107.6L305.8,107.2L307.3,106.8L308.7,106.4L310.2,106.0L311.6,105.6L313.1,105.2L314.5,104.8L316.0,104.4L317.5,104.0L318.9,103.6L320.4,103.2L321.8,102.8L323.3,102.4L324.7,102.0L326.2,101.6L327.6,101.2L329.1,100.8L330.5,100.4L332.0,100.0L333.5,99.6L334.9,99.2L336.4,98.9L337.8,98.5L339.3,98.1L340.7,97.7L342.2,97.3L343.6,96.9L345.1,96.6L346.5,96.2L348.0,95.8L349.5,95.4L350.9,95.0L352.4,94.7L353.8,94.3L355.3,93.9L356.7,93.5L358.2,93.2L359.6,92.8L361.1,92.4L362.5,92.0L364.0,91.7L365.5,91.3L366.9,90.9L368.4,90.6L369.8,90.2L371.3,89.8L372.7,89.5L374.2,89.1L375.6,88.7L377.1,88.4L378.5,88.0L380.0,87.7" fill="none" stroke="#0083cb" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><line x1="76" y1="198.5" x2="348" y2="63.9167" stroke="#f40086" stroke-width="2.2" stroke-linecap="round"/><circle cx="140" cy="166.833" r="5" fill="#f40086" stroke="#fff" stroke-width="1.6"/><line x1="268" y1="118.348" x2="268" y2="103.5" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="4 4"/><text x="276" y="119.333" font-size="10" text-anchor="start" fill="#d33a4e" font-weight="700">erro cresce</text><text x="276" y="130.417" font-size="10" text-anchor="start" fill="#d33a4e">longe do ponto</text><text x="132" y="206.417" font-size="10.5" text-anchor="middle" fill="#f40086" font-weight="700">tangente</text><text x="220" y="268" font-size="10.5" text-anchor="middle" fill="#5c5c66">perto de a, a reta e a curva quase coincidem</text><rect x="410" y="62" width="290" height="180" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="555" y="86" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">para que serve no laboratório</text><text x="555" y="112" font-size="10.8" text-anchor="middle" fill="#a300bc" font-weight="700">propagacao de incertezas</text><text x="555" y="130" font-size="10" text-anchor="middle" fill="#5c5c66">o erro de uma medida se propaga</text><text x="555" y="144" font-size="10" text-anchor="middle" fill="#5c5c66">multiplicado pela derivada</text><text x="555" y="170" font-size="10.8" text-anchor="middle" fill="#a300bc" font-weight="700">exemplo</text><text x="555" y="188" font-size="10" text-anchor="middle" fill="#5c5c66">num volume calculado do diametro,</text><text x="555" y="202" font-size="10" text-anchor="middle" fill="#5c5c66">um erro de 1% no diametro vira</text><text x="555" y="216" font-size="10" text-anchor="middle" fill="#333333" font-weight="700">cerca de 3% no volume</text><text x="20" y="290" font-size="10.8" text-anchor="start" fill="#5c5c66">E a mesma ideia por tras do metodo de Newton e da linearizacao de modelos em torno de um ponto de operacao.</text></svg>
Perto do ponto, a tangente substitui a curva: é isso que permite propagar incertezas.

Perto de um ponto \(x = a\), qualquer função "suave" se parece muito com a sua reta tangente:

\[ f(x) \approx L(x) = f(a) + f'(a)\,(x - a) \]

**Exemplo:** calcular \(\sqrt{4{,}1}\) sem calculadora.

- **Passo 1, escolher um ponto conhecido perto de 4,1:** \(a = 4\), onde \(\sqrt{4} = 2\).
- **Passo 2, a derivada nesse ponto:** com \(f(x) = \sqrt{x}\), \(f'(x) = \dfrac{1}{2\sqrt{x}}\), então \(f'(4) = \tfrac{1}{4}\).
- **Passo 3, aproximar:** \(\sqrt{4{,}1} \approx 2 + \tfrac14\times0{,}1 = 2{,}025\).

O valor exato é 2,02485: um erro de apenas 0,007%.

## Quando o resultado depende de várias medidas: a diferencial total

Muitas grandezas dependem de mais de uma medida. A concentração de uma solução, por exemplo, depende da massa pesada e do volume do balão. Para \(z = f(x, y)\), as **derivadas parciais** medem o quanto \(z\) é sensível a cada variável: \(\partial f/\partial x\) é a derivada em relação a \(x\), tratando \(y\) como se fosse um número fixo, e vice-versa. A variação total de \(z\) é a soma das contribuições de cada variável:

\[ dz = \frac{\partial f}{\partial x}\,dx + \frac{\partial f}{\partial y}\,dy \]

## Como as incertezas se combinam

Há duas formas de estimar a incerteza de um resultado calculado:

- **Pior caso**, supondo que todos os erros aconteçam no mesmo sentido e se somem: \(\Delta f \approx \sum_i \left\lvert \dfrac{\partial f}{\partial x_i}\right\rvert \Delta x_i\). Dá um limite superior, geralmente exagerado.
- **Incertezas independentes**, a forma recomendada pelo *Guia para a Expressão de Incerteza de Medição* (o GUM, publicado no Brasil pelo Inmetro). Como é improvável que todos os erros aconteçam no mesmo sentido ao mesmo tempo, eles se combinam "em quadratura" (a raiz da soma dos quadrados):

\[ u_f^2 = \sum_i \left(\frac{\partial f}{\partial x_i}\right)^2 u_i^2 \]

Dessa fórmula saem algumas regras práticas:

| Operação | Como as incertezas se combinam |
|---|---|
| Soma ou subtração | as incertezas **absolutas** se combinam em quadratura: \(u^2 = u_x^2 + u_y^2\) |
| Multiplicação ou divisão | as incertezas **relativas** (em porcentagem) se combinam em quadratura: \((u/f)^2 = (u_x/x)^2 + (u_y/y)^2\) |
| Potência \(f = x^n\) | a incerteza relativa é multiplicada por \(\lvert n\rvert\): \(u/f = \lvert n\rvert\,u_x/x\) |
| Logaritmo \(f = \ln x\) | \(u_f = u_x/x\) |

## Exemplo resolvido 1: a concentração de uma solução

Foram pesados \(0{,}2500 \pm 0{,}0002\) g de um sal e dissolvidos num balão volumétrico de \(100{,}00 \pm 0{,}08\) mL. A concentração é \(C = 0{,}2500\ \text{g}/0{,}1000\ \text{L} = 2{,}500\) g/L. Qual a sua incerteza?

Como a concentração é uma **divisão** (massa/volume), combinam-se as incertezas **relativas**:

- da massa: \(0{,}0002/0{,}2500 = 0{,}08\%\);
- do volume: \(0{,}08/100{,}00 = 0{,}08\%\).

\[ \frac{u_C}{C} = \sqrt{0{,}0008^2 + 0{,}0008^2} \approx 0{,}0011 = 0{,}11\% \]

Resultado: \(C = 2{,}500 \pm 0{,}003\) g/L.

## Exemplo resolvido 2: a incerteza da velocidade de crescimento

A velocidade específica de crescimento foi calculada a partir de duas leituras de densidade óptica (DO) na fase exponencial: \(X_1 = 0{,}20 \pm 0{,}01\) e \(X_2 = 0{,}80 \pm 0{,}02\), com 3,00 h de intervalo entre elas.

\[ \mu = \frac{\ln(X_2/X_1)}{\Delta t} = \frac{\ln 4}{3} \approx 0{,}462\ \text{h}^{-1} \]

Como \(\mu\) envolve o logaritmo de cada leitura, a incerteza de cada uma entra como incerteza relativa:

\[ u_\mu = \frac{1}{\Delta t}\sqrt{\left(\frac{0{,}02}{0{,}80}\right)^2 + \left(\frac{0{,}01}{0{,}20}\right)^2} = \frac{1}{3}\sqrt{0{,}000625 + 0{,}0025} \approx 0{,}019\ \text{h}^{-1} \]

Resultado: \(\mu = 0{,}46 \pm 0{,}02\ \text{h}^{-1}\).

Repare que a leitura **mais baixa** (\(X_1\), com 5% de incerteza relativa) é responsável pela maior parte da incerteza final. Lição prática: para estimar a velocidade de crescimento com mais precisão, use pontos bem afastados na fase exponencial e evite leituras muito baixas, em que o aparelho é menos preciso.

## Exemplo resolvido 3: o volume de uma célula a partir do diâmetro

O diâmetro de uma célula esférica foi medido ao microscópio: \(5{,}0 \pm 0{,}2\) micrômetros, ou seja, 4% de incerteza. Como o volume é proporcional ao **cubo** do diâmetro (\(V \propto d^3\)), a incerteza relativa do volume é \(3\times4\% = 12\%\). Lição: quando uma medida é elevada a uma potência, o seu erro relativo é multiplicado por essa potência.

## Sensibilidade de modelos

A mesma ideia serve para avaliar modelos matemáticos (tema 50). A **sensibilidade normalizada**, \(\dfrac{p}{y}\dfrac{\partial y}{\partial p}\), diz quantos por cento o resultado \(y\) muda quando o parâmetro \(p\) muda 1%. Os parâmetros com sensibilidade alta são os que precisam ser medidos com mais cuidado.

> **Atenção, erros comuns:**
> Somar incertezas **absolutas** em multiplicações e divisões: combine as **relativas**.
> Escrever o resultado com mais algarismos do que a incerteza justifica. Arredonde a incerteza para 1 ou 2 algarismos significativos e o resultado na mesma casa decimal.
> Usar a aproximação linear longe do ponto de referência: ela só vale para variações pequenas.

## Para fixar

- \(dy = f'(x)\,dx\) aproxima a variação real; \(L(x)\) é a reta tangente.
- As derivadas parciais medem a sensibilidade do resultado a cada medida.
- Incertezas independentes se combinam em quadratura; em multiplicações e divisões, use as relativas.
`,
  referencias: [
    "STEWART, J. **Cálculo**. v. 1. 8. ed. São Paulo: Cengage Learning, 2017. Seção 3.10: Aproximações lineares e diferenciais.",
    "STEWART, J. **Cálculo**. v. 2. 8. ed. São Paulo: Cengage Learning, 2017. Cap. 14: Derivadas parciais.",
    "TAYLOR, J. R. **Introdução à análise de erros**: o estudo de incertezas em medições físicas. 2. ed. Porto Alegre: Bookman, 2012.",
    "INMETRO. **Avaliação de dados de medição**: guia para a expressão de incerteza de medição (GUM 2008). Duque de Caxias: INMETRO/CICMA/SEPIN, 2012. Tradução de JCGM 100:2008.",
  ],
},
{
  id: "r53", num: 53,
  area: "Equações Diferenciais Aplicadas a Bioprocessos",
  disciplina: "Modelagem e Simulação de Bioprocessos",
  titulo: "EDOs de primeira ordem em bioprocessos",
  descricao: "Como transformar um balanço numa equação diferencial e usar a solução no laboratório e na indústria: medir o kLa, calcular o tempo de aquecimento de um tanque, dimensionar a esterilização e ajustar curvas de crescimento.",
  tags: ["equação diferencial", "EDO", "kLa", "método dinâmico", "transferência de oxigênio", "aquecimento de tanque", "esterilização", "fator Del", "Arrhenius", "Gompertz", "Reatores Bioquímicos"],
  conteudo: String.raw`
## O roteiro que se repete

Quase todos os problemas deste tema seguem os mesmos passos:

1. Escolha o sistema (o tanque, o biorreator) e a grandeza que muda com o tempo (a temperatura, o oxigênio, o número de esporos).
2. Escreva o **balanço**: acúmulo = entra − sai + gerado − consumido (tema 43).
3. O resultado é uma **equação diferencial** (EDO). Junte a **condição inicial** (o valor no instante zero).
4. Resolva: por separação de variáveis ou fator integrante (tema 40) ou, se não houver fórmula, numericamente (tema 42).
5. Use a solução para **projetar** um equipamento ou para **calcular um parâmetro** a partir de dados medidos.

## Aplicação 1: medindo o \(k_La\) de um biorreator

O \(k_La\) indica a capacidade de um biorreator de dissolver oxigênio no meio (tema 44). Para medi-lo, usa-se a equação do oxigênio dissolvido \(C\):

\[ \frac{dC}{dt} = k_La\,(C^\ast - C) - \mathrm{OUR} \]

em que o primeiro termo é o oxigênio que entra, vindo das bolhas, e OUR é o oxigênio consumido pelas células.

No **método dinâmico**, faz-se o teste sem células (ou com células que não estejam consumindo oxigênio), de modo que OUR = 0:

- **Passo 1:** retira-se o oxigênio do meio, borbulhando nitrogênio.
- **Passo 2:** volta-se a borbulhar ar e registra-se, com a sonda de oxigênio, como a concentração sobe com o tempo.

Separando as variáveis e integrando, com \(C(0) = C_0\):

\[ \ln\frac{C^\ast - C}{C^\ast - C_0} = -k_La\,t \]

Então, o gráfico de \(\ln(C^\ast - C)\) contra o tempo é uma **reta**, cuja inclinação é \(-k_La\). Basta ajustar uma reta aos pontos medidos.

**Exemplo:** partindo de oxigênio zero, a sonda marca 39,3% da saturação depois de 20 segundos. Então:

\[ k_La = -\frac{\ln(1 - 0{,}393)}{20} \approx 0{,}025\ \text{s}^{-1} \approx 90\ \text{h}^{-1} \]

**Cuidado na prática:** a própria sonda leva alguns segundos para responder. Se esse tempo de resposta não for bem menor que \(1/k_La\), a sonda "atrasa" a curva, e o \(k_La\) calculado fica menor do que o real.

## Aplicação 2: quanto tempo leva para aquecer um tanque

<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Metodo dinamico do kLa</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Medindo o kLa pelo metodo dinamico</text><rect x="60" y="56" width="400" height="190" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="140" y1="56" x2="140" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="220" y1="56" x2="220" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="300" y1="56" x2="300" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="380" y1="56" x2="380" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="460" y1="56" x2="460" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="200.762" x2="460" y2="200.762" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="155.524" x2="460" y2="155.524" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="110.286" x2="460" y2="110.286" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="65.0476" x2="460" y2="65.0476" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="56" x2="60" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="60" y1="246" x2="460" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="140" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="220" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">4</text><text x="300" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">6</text><text x="380" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">8</text><text x="460" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">10</text><text x="54" y="204.262" font-size="10.5" text-anchor="end" fill="#8a8a93">25</text><text x="54" y="159.024" font-size="10.5" text-anchor="end" fill="#8a8a93">50</text><text x="54" y="113.786" font-size="10.5" text-anchor="end" fill="#8a8a93">75</text><text x="54" y="68.5476" font-size="10.5" text-anchor="end" fill="#8a8a93">100</text><text x="464" y="250" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">min</text><text x="56" y="50" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">% O2</text><path d="M60.0,65.0L61.8,71.9L63.6,78.5L65.5,84.7L67.3,90.6L69.1,96.3L70.9,101.6L72.7,106.7L74.5,111.6L76.4,116.2L78.2,120.6L80.0,124.8L81.8,128.7L83.6,132.5L85.5,136.1L87.3,139.5L89.1,142.8L90.9,145.9L92.7,148.8L94.5,151.6L96.4,154.3L98.2,156.8L100.0,159.2L101.8,161.5L103.6,163.7L105.5,165.8L107.3,167.7L109.1,169.6L110.9,171.4L112.7,173.1L114.5,174.7L116.4,176.2L118.2,177.7L120.0,179.1L121.8,180.4L123.6,181.7L125.5,182.9L127.3,184.0L129.1,185.1L130.9,186.1L132.7,187.1L134.5,188.0L136.4,188.9L138.2,189.7L140.0,190.6L141.8,186.1L143.6,181.7L145.5,177.6L147.3,173.6L149.1,169.7L150.9,166.0L152.7,162.3L154.5,158.9L156.4,155.5L158.2,152.3L160.0,149.2L161.8,146.2L163.6,143.3L165.5,140.5L167.3,137.8L169.1,135.2L170.9,132.7L172.7,130.3L174.5,127.9L176.4,125.7L178.2,123.5L180.0,121.4L181.8,119.4L183.6,117.5L185.5,115.6L187.3,113.8L189.1,112.1L190.9,110.4L192.7,108.8L194.5,107.2L196.4,105.7L198.2,104.2L200.0,102.8L201.8,101.5L203.6,100.2L205.5,98.9L207.3,97.7L209.1,96.6L210.9,95.4L212.7,94.4L214.5,93.3L216.4,92.3L218.2,91.3L220.0,90.4L221.8,89.5L223.6,88.6L225.5,87.8L227.3,87.0L229.1,86.2L230.9,85.4L232.7,84.7L234.5,84.0L236.4,83.3L238.2,82.7L240.0,82.0L241.8,81.4L243.6,80.8L245.5,80.3L247.3,79.7L249.1,79.2L250.9,78.7L252.7,78.2L254.5,77.7L256.4,77.3L258.2,76.9L260.0,76.4L261.8,76.0L263.6,75.6L265.5,75.3L267.3,74.9L269.1,74.5L270.9,74.2L272.7,73.9L274.5,73.6L276.4,73.3L278.2,73.0L280.0,72.7L281.8,72.4L283.6,72.1L285.5,71.9L287.3,71.6L289.1,71.4L290.9,71.2L292.7,71.0L294.5,70.8L296.4,70.5L298.2,70.4L300.0,70.2L301.8,70.0L303.6,69.8L305.5,69.6L307.3,69.5L309.1,69.3L310.9,69.2L312.7,69.0L314.5,68.9L316.4,68.7L318.2,68.6L320.0,68.5L321.8,68.4L323.6,68.2L325.5,68.1L327.3,68.0L329.1,67.9L330.9,67.8L332.7,67.7L334.5,67.6L336.4,67.5L338.2,67.4L340.0,67.3L341.8,67.3L343.6,67.2L345.5,67.1L347.3,67.0L349.1,67.0L350.9,66.9L352.7,66.8L354.5,66.8L356.4,66.7L358.2,66.6L360.0,66.6L361.8,66.5L363.6,66.5L365.5,66.4L367.3,66.4L369.1,66.3L370.9,66.3L372.7,66.2L374.5,66.2L376.4,66.2L378.2,66.1L380.0,66.1L381.8,66.0L383.6,66.0L385.5,66.0L387.3,65.9L389.1,65.9L390.9,65.9L392.7,65.8L394.5,65.8L396.4,65.8L398.2,65.8L400.0,65.7L401.8,65.7L403.6,65.7L405.5,65.7L407.3,65.6L409.1,65.6L410.9,65.6L412.7,65.6L414.5,65.6L416.4,65.5L418.2,65.5L420.0,65.5L421.8,65.5L423.6,65.5L425.5,65.5L427.3,65.4L429.1,65.4L430.9,65.4L432.7,65.4L434.5,65.4L436.4,65.4L438.2,65.4L440.0,65.4L441.8,65.3L443.6,65.3L445.5,65.3L447.3,65.3L449.1,65.3L450.9,65.3L452.7,65.3L454.5,65.3L456.4,65.3L458.2,65.3L460.0,65.3" fill="none" stroke="#0083cb" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><line x1="140" y1="56" x2="140" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="4 4"/><text x="100" y="50" font-size="10" text-anchor="middle" fill="#d33a4e" font-weight="700">desliga o ar</text><text x="276" y="50" font-size="10" text-anchor="middle" fill="#0a8f5e" font-weight="700">religa o ar</text><line x1="60" y1="65.0476" x2="460" y2="65.0476" stroke="#f40086" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="5 4"/><text x="454" y="79.0476" font-size="10" text-anchor="end" fill="#f40086" font-weight="700">saturacao</text><text x="260" y="276" font-size="10.5" text-anchor="middle" fill="#5c5c66">a velocidade da subida da o kLa</text><rect x="490" y="62" width="210" height="180" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="595" y="86" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">o roteiro que se repete</text><circle cx="512" cy="112" r="8" fill="#f6e4fa" stroke="#a300bc" stroke-width="1.4"/><text x="512" y="116" font-size="9" text-anchor="middle" fill="#a300bc" font-weight="700">1</text><text x="528" y="116" font-size="10" text-anchor="start" fill="#333333">montar o balanco</text><circle cx="512" cy="138" r="8" fill="#f6e4fa" stroke="#a300bc" stroke-width="1.4"/><text x="512" y="142" font-size="9" text-anchor="middle" fill="#a300bc" font-weight="700">2</text><text x="528" y="142" font-size="10" text-anchor="start" fill="#333333">separar as variáveis</text><circle cx="512" cy="164" r="8" fill="#f6e4fa" stroke="#a300bc" stroke-width="1.4"/><text x="512" y="168" font-size="9" text-anchor="middle" fill="#a300bc" font-weight="700">3</text><text x="528" y="168" font-size="10" text-anchor="start" fill="#333333">integrar</text><circle cx="512" cy="190" r="8" fill="#f6e4fa" stroke="#a300bc" stroke-width="1.4"/><text x="512" y="194" font-size="9" text-anchor="middle" fill="#a300bc" font-weight="700">4</text><text x="528" y="194" font-size="10" text-anchor="start" fill="#333333">usar a condicao inicial</text><circle cx="512" cy="216" r="8" fill="#f6e4fa" stroke="#a300bc" stroke-width="1.4"/><text x="512" y="220" font-size="9" text-anchor="middle" fill="#a300bc" font-weight="700">5</text><text x="528" y="220" font-size="10" text-anchor="start" fill="#333333">interpretar a constante</text><text x="20" y="290" font-size="10.6" text-anchor="start" fill="#5c5c66">O mesmo roteiro resolve aquecimento de tanque, esterilizacao com temperatura variável e curvas de crescimento.</text></svg>
O método dinâmico: desliga-se o ar, deixa-se o oxigênio cair e acompanha-se a recuperação.

Um tanque bem agitado, com massa \(m\) de líquido, é aquecido por vapor que passa pela camisa à temperatura \(T_s\). O balanço de energia (tema 25) diz que o calor que entra pela camisa aquece o líquido:

\[ m\,c_p\,\frac{dT}{dt} = UA\,(T_s - T) \]

É uma EDO separável, com solução:

\[ T(t) = T_s - (T_s - T_0)\,e^{-t/\tau}, \qquad \tau = \frac{m\,c_p}{UA} \]

A temperatura sobe rápido no início e cada vez mais devagar, aproximando-se da temperatura do vapor. O número \(\tau\) (a **constante de tempo**) indica a rapidez do aquecimento.

**Exemplo:** 1000 kg de meio aquoso (\(c_p = 4180\) J/(kg·K)), com \(UA = 2000\) W/K, começando a 25 °C e aquecido com vapor a 121 °C. Quanto tempo para chegar a 120 °C?

- **Passo 1, a constante de tempo:** \(\tau = 1000\times4180/2000 = 2090\) s.
- **Passo 2, isolar o tempo na solução:**

\[ t = \tau\,\ln\frac{121 - 25}{121 - 120} = 2090\times\ln 96 \approx 9{,}5\times10^{3}\ \text{s} \approx 2{,}6\ \text{h} \]

Repare num detalhe: como a aproximação é exponencial, o último grau leva quase tanto tempo quanto as primeiras dezenas de graus. Por isso, na prática, ou se aceita uma temperatura final um pouco abaixo da do vapor, ou se injeta vapor diretamente no meio.

## Aplicação 3: esterilização com temperatura variável (o fator Del)

A morte dos microrganismos pelo calor segue uma equação de primeira ordem (tema 35): \(\dfrac{dN}{dt} = -k_d\,N\). A velocidade de morte \(k_d\) aumenta muito com a temperatura, segundo a lei de Arrhenius: \(k_d = A\,e^{-E_a/RT}\).

Num fermentador grande, a temperatura não sobe instantaneamente para 121 °C: há uma fase de **aquecimento**, uma de **manutenção** na temperatura de esterilização e uma de **resfriamento**. Os microrganismos morrem nas três fases, cada uma com uma velocidade diferente. Integrando a equação:

\[ \nabla = \ln\frac{N_0}{N_f} = \int_0^{t_f} k_d\big(T(t)\big)\,dt \]

O número \(\nabla\) (lê-se "del"), chamado de **fator Del**, mede o "tamanho" da esterilização necessária, e é a soma das contribuições das três fases.

**Exemplo:** o meio de um fermentador contém \(10^{12}\) esporos, e a meta é ter no máximo um lote contaminado a cada mil (ou seja, \(N_f = 10^{-3}\) esporo por lote).

- **Passo 1, o fator Del necessário:** \(\nabla = \ln(10^{12}/10^{-3}) = \ln 10^{15} \approx 34{,}5\).
- **Passo 2, descontar o aquecimento e o resfriamento:** suponha que essas duas fases, juntas, contribuam com \(\nabla \approx 10\). Faltam 24,5.
- **Passo 3, o tempo de manutenção:** a 121 °C, com \(D_{121} = 2\) min, tem-se \(k_d = \ln 10/D \approx 1{,}15\) por minuto. Então o tempo a 121 °C é \(24{,}5/1{,}15 \approx 21\) minutos.

## Aplicação 4: ajustando curvas de crescimento com fase lag

O modelo exponencial e o logístico (tema 40) não descrevem a fase lag. Para ajustar curvas reais de crescimento, muito usado é o **modelo de Gompertz modificado**, proposto por Zwietering e colaboradores. Escrevendo \(y = \ln(N/N_0)\):

\[ y(t) = A\,\exp\!\left\{-\exp\!\left[\frac{\mu_m\,e}{A}(\lambda - t) + 1\right]\right\} \]

A fórmula parece complicada, mas a grande vantagem é que os três parâmetros têm um significado direto:

- \(\lambda\) é a **duração da fase lag**;
- \(\mu_m\) é a **velocidade específica máxima de crescimento**;
- \(A\) é o **aumento total da população**, em escala logarítmica.

Os parâmetros são obtidos por regressão não linear, ajustando a curva aos dados medidos. Esse modelo é muito usado em microbiologia de alimentos, por exemplo, para prever quanto tempo um alimento leva para estragar a uma certa temperatura.

> **Atenção, erros comuns:**
> Usar °C na lei de Arrhenius: a temperatura precisa estar em kelvin.
> Medir o \(k_La\) com uma sonda lenta, sem corrigir o seu tempo de resposta.
> Esquecer que o aquecimento e o resfriamento também matam microrganismos (e também destroem nutrientes do meio): o fator Del soma todas as fases.

## Para fixar

- Balanço + condição inicial = EDO; a solução vira uma ferramenta de projeto e de medição.
- \(k_La\): é a inclinação da reta de \(\ln(C^\ast - C)\) contra o tempo.
- Aquecimento pela camisa: aproximação exponencial, com constante de tempo \(\tau = mc_p/UA\).
- Esterilização: \(\nabla = \int k_d\,dt\), somando aquecimento, manutenção e resfriamento.
`,
  referencias: [
    "SCHMIDELL, W. et al. (coord.). **Biotecnologia industrial**. v. 2: Engenharia bioquímica. São Paulo: Blucher, 2001.",
    "DORAN, P. M. **Bioprocess engineering principles**. 2. ed. Waltham: Academic Press, 2013.",
    "AIBA, S.; HUMPHREY, A. E.; MILLIS, N. F. **Biochemical engineering**. 2. ed. New York: Academic Press, 1973.",
    "DEINDOERFER, F. H.; HUMPHREY, A. E. Analytical method for calculating heat sterilization times. **Applied Microbiology**, v. 7, n. 4, p. 256-264, 1959.",
    "ZWIETERING, M. H. et al. Modeling of the bacterial growth curve. **Applied and Environmental Microbiology**, v. 56, n. 6, p. 1875-1881, 1990.",
  ],
},
{
  id: "r54", num: 54,
  area: "Equações Diferenciais Aplicadas a Bioprocessos",
  disciplina: "Modelagem e Simulação de Bioprocessos",
  titulo: "Sistemas de EDOs e estabilidade: o quimiostato",
  descricao: "Como saber se um biorreator contínuo vai se manter num estado de operação ou escapar dele: estados estacionários, a matriz jacobiana, os autovalores e o caso do quimiostato com e sem inibição pelo substrato.",
  tags: ["sistema de EDOs", "estabilidade", "estado estacionário", "jacobiano", "autovalores", "linearização", "plano de fase", "quimiostato", "lavagem", "Haldane", "biestabilidade", "Reatores Bioquímicos"],
  conteudo: String.raw`
## A pergunta prática

No tema 50, calculamos os valores de células e substrato em que um quimiostato fica parado (o **estado estacionário**). Mas existir um estado estacionário não garante que o reator vá ficar nele. Pense numa bola: ela pode ficar parada no fundo de uma tigela ou equilibrada no alto de uma montanha. No fundo da tigela, se for empurrada, volta sozinha (o equilíbrio é **estável**). No alto da montanha, o menor empurrão faz com que ela role e não volte mais (o equilíbrio é **instável**). Num biorreator, os "empurrões" são coisas do dia a dia: uma variação na vazão da bomba, uma mudança na concentração da alimentação, uma bolha de ar. Este tema mostra como descobrir, com matemática, se um estado de operação é do tipo tigela ou do tipo montanha.

## O modelo

No quimiostato (tema 50), com taxa de diluição \(D\):

\[ \frac{dX}{dt} = \big(\mu(S) - D\big)\,X = f_1(X,S), \qquad \frac{dS}{dt} = D\,(S_0 - S) - \frac{\mu(S)\,X}{Y} = f_2(X,S) \]

São **duas equações diferenciais acopladas**: a variação das células depende do substrato, e a variação do substrato depende das células. Além disso, são **não lineares**, porque aparecem produtos entre as variáveis e a função \(\mu(S)\).

## Os estados estacionários

São os pontos em que nada muda: igualando as duas derivadas a zero (\(f_1 = f_2 = 0\)), encontram-se dois tipos de solução:

- **Estado de operação:** \(\mu(\bar S) = D\) e \(\bar X = Y(S_0 - \bar S)\). As células crescem exatamente na velocidade em que são retiradas.
- **Lavagem (washout):** \(\bar X = 0\) e \(\bar S = S_0\). Não há células no reator, e o substrato sai sem ser consumido.

## Como testar a estabilidade

A ideia é olhar o que acontece com uma **pequena perturbação** em torno do estado estacionário. Bem perto desse ponto, as equações não lineares se comportam aproximadamente como equações lineares, descritas por uma matriz de derivadas parciais, a **matriz jacobiana** \(J\):

\[ \frac{d}{dt}\begin{pmatrix}\delta X\\ \delta S\end{pmatrix} = J\begin{pmatrix}\delta X\\ \delta S\end{pmatrix}, \qquad J = \begin{pmatrix} \partial f_1/\partial X & \partial f_1/\partial S \\ \partial f_2/\partial X & \partial f_2/\partial S \end{pmatrix} \]

em que \(\delta X\) e \(\delta S\) são os pequenos desvios em relação ao estado estacionário. As soluções dessas equações lineares são combinações de termos do tipo \(e^{\lambda t}\), em que os números \(\lambda\) são os **autovalores** da matriz \(J\) (tema 9):

- se todos os autovalores têm parte real **negativa**, os termos \(e^{\lambda t}\) diminuem com o tempo: a perturbação desaparece, e o estado é **estável** (a tigela);
- se algum autovalor tem parte real **positiva**, a perturbação cresce: o estado é **instável** (a montanha).

Para matrizes 2×2, existe um atalho que dispensa calcular os autovalores: o estado é estável se o **traço** de \(J\) (a soma da diagonal) for **negativo** e o **determinante** for **positivo**.

## O quimiostato com cinética de Monod

<svg viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg" role="img"><title>Quimiostato</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="24" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Quimiostato: o que acontece quando a vazao aumenta</text><rect x="60" y="54" width="620" height="200" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="184" y1="54" x2="184" y2="254" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="308" y1="54" x2="308" y2="254" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="432" y1="54" x2="432" y2="254" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="556" y1="54" x2="556" y2="254" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="680" y1="54" x2="680" y2="254" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="217.636" x2="680" y2="217.636" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="181.273" x2="680" y2="181.273" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="144.909" x2="680" y2="144.909" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="108.545" x2="680" y2="108.545" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="72.1818" x2="680" y2="72.1818" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="54" x2="60" y2="254" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="60" y1="254" x2="680" y2="254" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="184" y="269" font-size="10.5" text-anchor="middle" fill="#8a8a93">0.2</text><text x="308" y="269" font-size="10.5" text-anchor="middle" fill="#8a8a93">0.4</text><text x="432" y="269" font-size="10.5" text-anchor="middle" fill="#8a8a93">0.6</text><text x="556" y="269" font-size="10.5" text-anchor="middle" fill="#8a8a93">0.8</text><text x="680" y="269" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="54" y="221.136" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="54" y="184.773" font-size="10.5" text-anchor="end" fill="#8a8a93">4</text><text x="54" y="148.409" font-size="10.5" text-anchor="end" fill="#8a8a93">6</text><text x="54" y="112.045" font-size="10.5" text-anchor="end" fill="#8a8a93">8</text><text x="54" y="75.6818" font-size="10.5" text-anchor="end" fill="#8a8a93">10</text><text x="684" y="258" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">D (1/h)</text><text x="56" y="48" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600"></text><path d="M60.0,163.1L62.2,163.1L64.4,163.1L66.6,163.2L68.8,163.2L71.0,163.2L73.2,163.2L75.4,163.2L77.6,163.3L79.8,163.3L82.0,163.3L84.2,163.3L86.4,163.3L88.6,163.4L90.8,163.4L93.0,163.4L95.2,163.4L97.4,163.5L99.6,163.5L101.8,163.5L104.0,163.5L106.2,163.6L108.4,163.6L110.6,163.6L112.8,163.6L115.0,163.7L117.2,163.7L119.4,163.7L121.5,163.7L123.7,163.8L125.9,163.8L128.1,163.8L130.3,163.8L132.5,163.9L134.7,163.9L136.9,163.9L139.1,164.0L141.3,164.0L143.5,164.0L145.7,164.0L147.9,164.1L150.1,164.1L152.3,164.1L154.5,164.2L156.7,164.2L158.9,164.2L161.1,164.3L163.3,164.3L165.5,164.3L167.7,164.4L169.9,164.4L172.1,164.4L174.3,164.5L176.5,164.5L178.7,164.5L180.9,164.6L183.1,164.6L185.3,164.6L187.5,164.7L189.7,164.7L191.9,164.7L194.1,164.8L196.3,164.8L198.5,164.9L200.7,164.9L202.9,164.9L205.1,165.0L207.3,165.0L209.5,165.1L211.7,165.1L213.9,165.1L216.1,165.2L218.3,165.2L220.5,165.3L222.7,165.3L224.9,165.4L227.1,165.4L229.3,165.4L231.5,165.5L233.7,165.5L235.9,165.6L238.1,165.6L240.3,165.7L242.4,165.7L244.6,165.8L246.8,165.8L249.0,165.9L251.2,165.9L253.4,166.0L255.6,166.1L257.8,166.1L260.0,166.2L262.2,166.2L264.4,166.3L266.6,166.3L268.8,166.4L271.0,166.5L273.2,166.5L275.4,166.6L277.6,166.6L279.8,166.7L282.0,166.8L284.2,166.8L286.4,166.9L288.6,167.0L290.8,167.0L293.0,167.1L295.2,167.2L297.4,167.3L299.6,167.3L301.8,167.4L304.0,167.5L306.2,167.6L308.4,167.7L310.6,167.7L312.8,167.8L315.0,167.9L317.2,168.0L319.4,168.1L321.6,168.2L323.8,168.3L326.0,168.3L328.2,168.4L330.4,168.5L332.6,168.6L334.8,168.7L337.0,168.8L339.2,168.9L341.4,169.0L343.6,169.2L345.8,169.3L348.0,169.4L350.2,169.5L352.4,169.6L354.6,169.7L356.8,169.9L359.0,170.0L361.2,170.1L363.3,170.2L365.5,170.4L367.7,170.5L369.9,170.7L372.1,170.8L374.3,171.0L376.5,171.1L378.7,171.3L380.9,171.4L383.1,171.6L385.3,171.8L387.5,171.9L389.7,172.1L391.9,172.3L394.1,172.5L396.3,172.7L398.5,172.9L400.7,173.1L402.9,173.3L405.1,173.5L407.3,173.7L409.5,173.9L411.7,174.2L413.9,174.4L416.1,174.7L418.3,174.9L420.5,175.2L422.7,175.5L424.9,175.7L427.1,176.0L429.3,176.3L431.5,176.7L433.7,177.0L435.9,177.3L438.1,177.7L440.3,178.0L442.5,178.4L444.7,178.8L446.9,179.2L449.1,179.6L451.3,180.1L453.5,180.5L455.7,181.0L457.9,181.5L460.1,182.0L462.3,182.6L464.5,183.2L466.7,183.8L468.9,184.4L471.1,185.1L473.3,185.8L475.5,186.5L477.7,187.3L479.9,188.2L482.1,189.0L484.2,190.0L486.4,191.0L488.6,192.0L490.8,193.1L493.0,194.4L495.2,195.7L497.4,197.0L499.6,198.5L501.8,200.2L504.0,201.9L506.2,203.8L508.4,205.9L510.6,208.2L512.8,210.8L515.0,213.6L517.2,216.7L519.4,220.2L521.6,224.1L523.8,228.6L526.0,233.7L528.2,239.7L530.4,246.7L532.6,254.0L534.8,254.0L537.0,254.0L539.2,254.0L541.4,254.0L543.6,254.0" fill="none" stroke="#0a8f5e" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M60.0,254.0L62.2,254.0L64.4,253.9L66.6,253.9L68.7,253.8L70.9,253.8L73.1,253.8L75.3,253.7L77.5,253.7L79.7,253.6L81.8,253.6L84.0,253.5L86.2,253.5L88.4,253.4L90.6,253.4L92.8,253.4L94.9,253.3L97.1,253.3L99.3,253.2L101.5,253.2L103.7,253.1L105.9,253.1L108.0,253.0L110.2,253.0L112.4,252.9L114.6,252.9L116.8,252.8L119.0,252.8L121.2,252.7L123.3,252.7L125.5,252.6L127.7,252.6L129.9,252.5L132.1,252.5L134.3,252.4L136.4,252.3L138.6,252.3L140.8,252.2L143.0,252.2L145.2,252.1L147.4,252.1L149.5,252.0L151.7,251.9L153.9,251.9L156.1,251.8L158.3,251.8L160.5,251.7L162.7,251.6L164.8,251.6L167.0,251.5L169.2,251.4L171.4,251.4L173.6,251.3L175.8,251.2L177.9,251.2L180.1,251.1L182.3,251.0L184.5,251.0L186.7,250.9L188.9,250.8L191.0,250.7L193.2,250.7L195.4,250.6L197.6,250.5L199.8,250.4L202.0,250.4L204.1,250.3L206.3,250.2L208.5,250.1L210.7,250.0L212.9,249.9L215.1,249.9L217.3,249.8L219.4,249.7L221.6,249.6L223.8,249.5L226.0,249.4L228.2,249.3L230.4,249.2L232.5,249.2L234.7,249.1L236.9,249.0L239.1,248.9L241.3,248.8L243.5,248.7L245.6,248.6L247.8,248.5L250.0,248.4L252.2,248.2L254.4,248.1L256.6,248.0L258.8,247.9L260.9,247.8L263.1,247.7L265.3,247.6L267.5,247.5L269.7,247.3L271.9,247.2L274.0,247.1L276.2,247.0L278.4,246.8L280.6,246.7L282.8,246.6L285.0,246.5L287.1,246.3L289.3,246.2L291.5,246.0L293.7,245.9L295.9,245.8L298.1,245.6L300.2,245.5L302.4,245.3L304.6,245.2L306.8,245.0L309.0,244.8L311.2,244.7L313.4,244.5L315.5,244.3L317.7,244.2L319.9,244.0L322.1,243.8L324.3,243.6L326.5,243.4L328.6,243.3L330.8,243.1L333.0,242.9L335.2,242.7L337.4,242.5L339.6,242.3L341.7,242.0L343.9,241.8L346.1,241.6L348.3,241.4L350.5,241.2L352.7,240.9L354.9,240.7L357.0,240.4L359.2,240.2L361.4,239.9L363.6,239.7L365.8,239.4L368.0,239.1L370.1,238.8L372.3,238.5L374.5,238.2L376.7,237.9L378.9,237.6L381.1,237.3L383.2,237.0L385.4,236.7L387.6,236.3L389.8,236.0L392.0,235.6L394.2,235.2L396.4,234.8L398.5,234.5L400.7,234.1L402.9,233.6L405.1,233.2L407.3,232.8L409.5,232.3L411.6,231.9L413.8,231.4L416.0,230.9L418.2,230.4L420.4,229.8L422.6,229.3L424.7,228.7L426.9,228.2L429.1,227.6L431.3,226.9L433.5,226.3L435.7,225.6L437.8,224.9L440.0,224.2L442.2,223.5L444.4,222.7L446.6,221.9L448.8,221.0L451.0,220.2L453.1,219.3L455.3,218.3L457.5,217.3L459.7,216.3L461.9,215.2L464.1,214.0L466.2,212.9L468.4,211.6L470.6,210.3L472.8,208.9L475.0,207.4L477.2,205.9L479.3,204.3L481.5,202.5L483.7,200.7L485.9,198.8L488.1,196.7L490.3,194.5L492.5,192.1L494.6,189.6L496.8,186.9L499.0,184.0L501.2,180.8L503.4,177.4L505.6,173.7L507.7,169.7L509.9,165.2L512.1,160.4L514.3,155.0L516.5,149.0L518.7,142.3L520.8,134.8L523.0,126.3L525.2,116.6L527.4,105.5L529.6,92.4L531.8,77.0L533.9,72.2L536.1,72.2L538.3,72.2L540.5,72.2" fill="none" stroke="#f40086" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M60.0,254.0L62.2,253.7L64.4,253.4L66.6,253.0L68.8,252.7L71.0,252.4L73.2,252.1L75.4,251.7L77.6,251.4L79.8,251.1L82.0,250.8L84.2,250.5L86.4,250.1L88.6,249.8L90.8,249.5L93.0,249.2L95.2,248.9L97.4,248.5L99.6,248.2L101.8,247.9L104.0,247.6L106.2,247.3L108.4,246.9L110.6,246.6L112.8,246.3L115.0,246.0L117.2,245.7L119.4,245.4L121.5,245.0L123.7,244.7L125.9,244.4L128.1,244.1L130.3,243.8L132.5,243.5L134.7,243.1L136.9,242.8L139.1,242.5L141.3,242.2L143.5,241.9L145.7,241.6L147.9,241.2L150.1,240.9L152.3,240.6L154.5,240.3L156.7,240.0L158.9,239.7L161.1,239.4L163.3,239.1L165.5,238.7L167.7,238.4L169.9,238.1L172.1,237.8L174.3,237.5L176.5,237.2L178.7,236.9L180.9,236.6L183.1,236.2L185.3,235.9L187.5,235.6L189.7,235.3L191.9,235.0L194.1,234.7L196.3,234.4L198.5,234.1L200.7,233.8L202.9,233.5L205.1,233.2L207.3,232.9L209.5,232.6L211.7,232.3L213.9,231.9L216.1,231.6L218.3,231.3L220.5,231.0L222.7,230.7L224.9,230.4L227.1,230.1L229.3,229.8L231.5,229.5L233.7,229.2L235.9,228.9L238.1,228.6L240.3,228.3L242.4,228.0L244.6,227.7L246.8,227.4L249.0,227.1L251.2,226.8L253.4,226.5L255.6,226.2L257.8,226.0L260.0,225.7L262.2,225.4L264.4,225.1L266.6,224.8L268.8,224.5L271.0,224.2L273.2,223.9L275.4,223.6L277.6,223.3L279.8,223.1L282.0,222.8L284.2,222.5L286.4,222.2L288.6,221.9L290.8,221.6L293.0,221.3L295.2,221.1L297.4,220.8L299.6,220.5L301.8,220.2L304.0,220.0L306.2,219.7L308.4,219.4L310.6,219.1L312.8,218.9L315.0,218.6L317.2,218.3L319.4,218.1L321.6,217.8L323.8,217.5L326.0,217.3L328.2,217.0L330.4,216.7L332.6,216.5L334.8,216.2L337.0,216.0L339.2,215.7L341.4,215.4L343.6,215.2L345.8,214.9L348.0,214.7L350.2,214.5L352.4,214.2L354.6,214.0L356.8,213.7L359.0,213.5L361.2,213.3L363.3,213.0L365.5,212.8L367.7,212.6L369.9,212.3L372.1,212.1L374.3,211.9L376.5,211.7L378.7,211.5L380.9,211.3L383.1,211.0L385.3,210.8L387.5,210.6L389.7,210.4L391.9,210.3L394.1,210.1L396.3,209.9L398.5,209.7L400.7,209.5L402.9,209.4L405.1,209.2L407.3,209.0L409.5,208.9L411.7,208.7L413.9,208.6L416.1,208.4L418.3,208.3L420.5,208.2L422.7,208.1L424.9,207.9L427.1,207.8L429.3,207.7L431.5,207.7L433.7,207.6L435.9,207.5L438.1,207.5L440.3,207.4L442.5,207.4L444.7,207.3L446.9,207.3L449.1,207.3L451.3,207.3L453.5,207.4L455.7,207.4L457.9,207.5L460.1,207.6L462.3,207.7L464.5,207.8L466.7,207.9L468.9,208.1L471.1,208.3L473.3,208.5L475.5,208.8L477.7,209.1L479.9,209.4L482.1,209.8L484.2,210.2L486.4,210.6L488.6,211.1L490.8,211.7L493.0,212.3L495.2,213.0L497.4,213.8L499.6,214.7L501.8,215.6L504.0,216.7L506.2,217.9L508.4,219.2L510.6,220.7L512.8,222.4L515.0,224.3L517.2,226.5L519.4,228.9L521.6,231.8L523.8,235.0L526.0,238.8L528.2,243.2L530.4,248.4L532.6,254.0L534.8,254.0L537.0,254.0L539.2,254.0L541.4,254.0L543.6,254.0" fill="none" stroke="#0083cb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 4"/><line x1="532.381" y1="54" x2="532.381" y2="254" stroke="#d33a4e" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="5 4"/><text x="526.381" y="78" font-size="11.5" text-anchor="end" fill="#d33a4e" font-weight="700">D critico</text><text x="526.381" y="94" font-size="10.5" text-anchor="end" fill="#5c5c66">arraste da cultura</text><text x="196.4" y="148.545" font-size="11.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">biomassa X</text><text x="432" y="137.636" font-size="11.5" text-anchor="middle" fill="#f40086" font-weight="700">substrato S</text><text x="332.8" y="234" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">produtividade D.X</text><text x="20" y="288" font-size="11.5" text-anchor="start" fill="#5c5c66">Ate o valor critico, a cultura se ajusta: mu se iguala a D e a biomassa se mantem.</text><text x="20" y="306" font-size="11.5" text-anchor="start" fill="#5c5c66">Acima dele, as células são lavadas para fora mais rápido do que conseguem se dividir.</text></svg>
Como biomassa, substrato e produtividade respondem à vazão de alimentação.

No estado de operação, usando \(\mu(\bar S) = D\), a matriz jacobiana fica:

\[ J = \begin{pmatrix} 0 & \mu'(\bar S)\,\bar X \\ -D/Y & -D - \mu'(\bar S)\,\bar X/Y \end{pmatrix} \]

Com Monod, a derivada \(\mu'(S) = \dfrac{\mu_{max}K_S}{(K_S + S)^2}\) é sempre positiva (mais substrato, crescimento mais rápido). Então o traço é negativo e o determinante, \(D\,\mu'(\bar S)\,\bar X/Y\), é positivo: o estado é **estável**. Os autovalores são exatamente \(-D\) e \(-\mu'(\bar S)\bar X/Y\).

**Exemplo:** com \(\mu_{max} = 0{,}5\) por hora, \(K_S = 0{,}2\) g/L, \(S_0 = 10\) g/L, \(Y = 0{,}5\) e \(D = 0{,}2\) por hora (os mesmos valores do tema 50):

- **Passo 1, o estado estacionário:** \(\bar S \approx 0{,}133\) g/L e \(\bar X \approx 4{,}93\) g/L.
- **Passo 2, a derivada:** \(\mu'(\bar S) = \dfrac{0{,}5\times0{,}2}{(0{,}333)^2} \approx 0{,}9\).
- **Passo 3, os autovalores:** \(-0{,}2\) e \(-0{,}9\times4{,}93/0{,}5 \approx -8{,}9\) por hora. Os dois são negativos: o estado é estável.

O autovalor mais próximo de zero (\(-D = -0{,}2\)) é o que demora mais para "apagar" a perturbação, e define o tempo de retorno ao equilíbrio: cerca de \(1/D = 5\) horas. Daí vem uma regra prática dos laboratórios: depois de mudar a vazão de um quimiostato, espere **de 3 a 5 tempos de residência** antes de coletar amostras do novo estado estacionário.

**E o estado de lavagem?** Nele, a matriz jacobiana é:

\[ J = \begin{pmatrix} \mu(S_0) - D & 0 \\ -\mu(S_0)/Y & -D \end{pmatrix} \]

com autovalores \(\mu(S_0) - D\) e \(-D\). A lavagem só é estável quando \(D \gt \mu(S_0)\), que é exatamente a vazão crítica \(D_{crit}\) do tema 50. Abaixo dela, qualquer célula que entre no reator consegue se multiplicar, e o sistema escapa da lavagem.

## Inibição pelo substrato: dois estados possíveis

Com a cinética de Haldane (temas 46 e 51), a velocidade de crescimento sobe com o substrato até um máximo e depois **cai**, porque o excesso de substrato passa a atrapalhar. Por isso, para uma mesma vazão \(D\), a equação \(\mu(S) = D\) pode ter **duas** soluções. No exemplo do tema 51, elas eram \(S = 0{,}33\) g/L e \(S = 3{,}0\) g/L.

- Na solução com pouco substrato, a curva de \(\mu\) está **subindo** (\(\mu' \gt 0\)), o determinante é positivo, e o estado é **estável**.
- Na solução com mais substrato, a curva está **descendo** (\(\mu' \lt 0\)), o determinante é negativo, e o estado é **instável**.

**A consequência prática** é séria: se a concentração de substrato na alimentação subir de repente (um **pulso** de substrato), o sistema pode ser empurrado para além do estado instável, e a cultura entra em lavagem, mesmo com a vazão abaixo da crítica. Isso acontece, por exemplo, no tratamento biológico de efluentes com compostos tóxicos, como o fenol, e em fermentações em que o próprio substrato inibe as células. Esses processos exigem um controle cuidadoso da alimentação.

## O plano de fase

Uma forma visual de entender tudo isso é o **plano de fase**: um gráfico com \(S\) num eixo e \(X\) no outro, em que se desenham as trajetórias do sistema a partir de várias condições iniciais. Desenham-se também as curvas em que \(dX/dt = 0\) e em que \(dS/dt = 0\) (as **isóclinas nulas**); os estados estacionários ficam nos cruzamentos dessas curvas. O gráfico mostra de uma só vez para onde o sistema vai a partir de qualquer ponto de partida. Na prática, as trajetórias são obtidas simulando o sistema com o método RK4 (tema 42).

> **Atenção, erros comuns:**
> Concluir que um estado estacionário será alcançado só porque ele existe: é preciso verificar a estabilidade.
> Coletar amostras do quimiostato logo depois de mudar a vazão: espere alguns tempos de residência.
> Esquecer que a análise linearizada só vale **perto** do estado estacionário. Uma perturbação grande pode levar o sistema a outro estado.

## Para fixar

- Estados estacionários: iguale todas as derivadas a zero.
- Estabilidade: os autovalores da jacobiana devem ter parte real negativa (em sistemas 2×2, traço negativo e determinante positivo).
- Com Monod, o estado de operação é estável abaixo de \(D_{crit}\); com Haldane, pode haver dois estados, e um deles é instável.
`,
  referencias: [
    "BOYCE, W. E.; DiPRIMA, R. C. **Equações diferenciais elementares e problemas de valores de contorno**. 10. ed. Rio de Janeiro: LTC, 2015.",
    "BASSANEZI, R. C.; FERREIRA JR., W. C. **Equações diferenciais com aplicações**. São Paulo: Harbra, 1988.",
    "STROGATZ, S. H. **Nonlinear dynamics and chaos**: with applications to physics, biology, chemistry, and engineering. 2. ed. Boulder: Westview Press, 2015.",
    "SMITH, H. L.; WALTMAN, P. **The theory of the chemostat**: dynamics of microbial competition. Cambridge: Cambridge University Press, 1995.",
    "HERBERT, D.; ELSWORTH, R.; TELLING, R. C. The continuous culture of bacteria: a theoretical and experimental study. **Journal of General Microbiology**, v. 14, n. 3, p. 601-622, 1956.",
    "ANDREWS, J. F. A mathematical model for the continuous culture of microorganisms utilizing inhibitory substrates. **Biotechnology and Bioengineering**, v. 10, n. 6, p. 707-723, 1968.",
  ],
},
{
  id: "r55", num: 55,
  area: "Equações Diferenciais Aplicadas a Bioprocessos",
  disciplina: "Fenômenos de Transporte / Reatores",
  titulo: "EDO de segunda ordem: difusão e reação em biocatalisadores imobilizados",
  descricao: "Por que o interior de uma esfera de alginato ou de um biofilme pode ficar sem substrato: o balanço com difusão e reação, a solução da EDO de segunda ordem, o módulo de Thiele e o fator de efetividade.",
  tags: ["EDO de segunda ordem", "difusão e reação", "módulo de Thiele", "fator de efetividade", "Weisz", "enzima imobilizada", "células imobilizadas", "biofilme", "alginato", "Fenômenos de Transporte", "Reatores Bioquímicos"],
  conteudo: String.raw`
## O problema

Em muitos processos, as enzimas ou as células não ficam soltas no meio. Elas são **imobilizadas**: presas em esferas de gel (como o alginato de cálcio), em suportes porosos, ou crescem naturalmente grudadas em superfícies, formando **biofilmes**, ou em bolinhas compactas, como os grânulos de fungos. Isso facilita reaproveitá-las e separá-las do produto.

Mas há um preço. O substrato precisa **se difundir** do líquido até o interior da partícula enquanto vai sendo **consumido** pelo caminho. Se a difusão for lenta em comparação com o consumo, o substrato é todo gasto nas camadas de fora, e o interior "passa fome". A partícula rende menos do que poderia, porque parte das enzimas ou células fica sem trabalho. Este tema mostra como calcular esse efeito.

## O balanço de massa

Considere um biofilme plano de espessura \(L\), apoiado numa parede, com o líquido do outro lado. O substrato se difunde com uma difusividade efetiva \(D_e\) (menor que na água pura, porque precisa contornar o gel ou as células) e é consumido numa velocidade proporcional à sua concentração, \(r = k_1 S\) (uma cinética de primeira ordem). Fazendo o balanço numa fatia fina, em regime permanente (o que entra por difusão = o que é consumido), chega-se a:

\[ D_e\,\frac{d^2S}{dx^2} = k_1\,S \qquad\Longleftrightarrow\qquad \frac{d^2S}{dx^2} - m^2 S = 0, \quad m = \sqrt{\frac{k_1}{D_e}} \]

É uma **equação diferencial linear de segunda ordem, homogênea e com coeficientes constantes**: aparece a segunda derivada, e os números que multiplicam \(S\) e as suas derivadas são constantes.

## Resolvendo a equação

**Passo 1, a equação característica:** testa-se uma solução da forma \(S = e^{rx}\). Substituindo na equação, obtém-se \(r^2 - m^2 = 0\), logo \(r = +m\) ou \(r = -m\). A solução geral é uma combinação de \(e^{mx}\) e \(e^{-mx}\), que pode ser escrita de forma mais conveniente com as funções hiperbólicas (\(\cosh\) e \(\sinh\)):

\[ S(x) = A\cosh(mx) + B\sinh(mx) \]

(Quando a equação característica tem raízes complexas, as soluções são senos e cossenos. É o caso das oscilações, como o sistema massa-mola da física.)

**Passo 2, as condições de contorno:** uma equação de segunda ordem precisa de **duas condições** para determinar as duas constantes \(A\) e \(B\):

- na superfície do biofilme (\(x = L\)), a concentração é a do líquido: \(S = S_b\);
- junto à parede (\(x = 0\)), não passa substrato, então a inclinação do perfil é zero: \(dS/dx = 0\). Isso exige \(B = 0\).

**Passo 3, o resultado:**

\[ S(x) = S_b\,\frac{\cosh(mx)}{\cosh(mL)} \]

A concentração é máxima na superfície e diminui em direção à parede. Quanto maior \(mL\), mais rápido ela cai.

## O módulo de Thiele e o fator de efetividade

<svg viewBox="0 0 740 360" xmlns="http://www.w3.org/2000/svg" role="img"><title>Modulo de Thiele</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="24" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Difusao e reação numa esfera de biocatalisador</text><circle cx="130" cy="128" r="60" fill="#fff" stroke="#0a8f5e" stroke-width="2"/><circle cx="130" cy="128" r="60" fill="#0a8f5e" fill-opacity="0.50" stroke="none"/><circle cx="130" cy="128" r="52.5" fill="#0a8f5e" fill-opacity="0.43" stroke="none"/><circle cx="130" cy="128" r="45" fill="#0a8f5e" fill-opacity="0.37" stroke="none"/><circle cx="130" cy="128" r="37.5" fill="#0a8f5e" fill-opacity="0.30" stroke="none"/><circle cx="130" cy="128" r="30" fill="#0a8f5e" fill-opacity="0.24" stroke="none"/><circle cx="130" cy="128" r="22.5" fill="#0a8f5e" fill-opacity="0.18" stroke="none"/><circle cx="130" cy="128" r="15" fill="#0a8f5e" fill-opacity="0.12" stroke="none"/><circle cx="130" cy="128" r="7.5" fill="#0a8f5e" fill-opacity="0.06" stroke="none"/><text x="130" y="210" font-size="11.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">esfera pequena</text><text x="130" y="226" font-size="10.5" text-anchor="middle" fill="#5c5c66">fator de efetividade 0,88</text><text x="130" y="132" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">Thiele = 0,5</text><circle cx="330" cy="128" r="60" fill="#fff" stroke="#c67600" stroke-width="2"/><circle cx="330" cy="128" r="60" fill="#c67600" fill-opacity="0.50" stroke="none"/><circle cx="330" cy="128" r="52.5" fill="#c67600" fill-opacity="0.38" stroke="none"/><circle cx="330" cy="128" r="45" fill="#c67600" fill-opacity="0.29" stroke="none"/><circle cx="330" cy="128" r="37.5" fill="#c67600" fill-opacity="0.22" stroke="none"/><circle cx="330" cy="128" r="30" fill="#c67600" fill-opacity="0.16" stroke="none"/><circle cx="330" cy="128" r="22.5" fill="#c67600" fill-opacity="0.11" stroke="none"/><circle cx="330" cy="128" r="15" fill="#c67600" fill-opacity="0.07" stroke="none"/><circle cx="330" cy="128" r="7.5" fill="#c67600" fill-opacity="0.04" stroke="none"/><text x="330" y="210" font-size="11.5" text-anchor="middle" fill="#c67600" font-weight="700">intermediária</text><text x="330" y="226" font-size="10.5" text-anchor="middle" fill="#5c5c66">fator de efetividade 0,42</text><text x="330" y="132" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">Thiele = 2,0</text><circle cx="530" cy="128" r="60" fill="#fff" stroke="#d33a4e" stroke-width="2"/><circle cx="530" cy="128" r="60" fill="#d33a4e" fill-opacity="0.50" stroke="none"/><circle cx="530" cy="128" r="52.5" fill="#d33a4e" fill-opacity="0.24" stroke="none"/><circle cx="530" cy="128" r="45" fill="#d33a4e" fill-opacity="0.11" stroke="none"/><circle cx="530" cy="128" r="37.5" fill="#d33a4e" fill-opacity="0.05" stroke="none"/><circle cx="530" cy="128" r="30" fill="#d33a4e" fill-opacity="0.04" stroke="none"/><circle cx="530" cy="128" r="22.5" fill="#d33a4e" fill-opacity="0.04" stroke="none"/><circle cx="530" cy="128" r="15" fill="#d33a4e" fill-opacity="0.04" stroke="none"/><circle cx="530" cy="128" r="7.5" fill="#d33a4e" fill-opacity="0.04" stroke="none"/><text x="530" y="210" font-size="11.5" text-anchor="middle" fill="#d33a4e" font-weight="700">esfera grande</text><text x="530" y="226" font-size="10.5" text-anchor="middle" fill="#5c5c66">fator de efetividade 0,16</text><text x="530" y="132" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">Thiele = 6,0</text><rect x="20" y="252" width="700" height="56" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="274" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">a cor mostra quanto substrato chega a cada profundidade</text><text x="370" y="294" font-size="10.5" text-anchor="middle" fill="#5c5c66">Se a reação e rápida demais para a difusao, o centro da esfera fica sem substrato e deixa de trabalhar.</text><text x="20" y="330" font-size="11.5" text-anchor="start" fill="#5c5c66">Esferas menores tem modulo de Thiele menor e aproveitam melhor a enzima ou a célula imobilizada.</text><text x="20" y="348" font-size="11.5" text-anchor="start" fill="#5c5c66">O preco e uma perda de carga maior na coluna e maior dificuldade de reter as partículas.</text></svg>
Quanto maior a esfera, maior a fração do biocatalisador que fica sem substrato.

Todo o comportamento depende de um único número, o **módulo de Thiele**, que compara a rapidez do consumo com a rapidez da difusão:

\[ \phi = L\sqrt{\frac{k_1}{D_e}} \]

O **fator de efetividade** \(\eta\) diz que fração da capacidade da partícula está sendo de fato aproveitada. É a razão entre o consumo real e o consumo que haveria se todo o interior estivesse na mesma concentração da superfície. Para o biofilme plano:

\[ \eta = \frac{\tanh\phi}{\phi} \]

Para uma **esfera** de raio \(R\), com \(\phi_s = R\sqrt{k_1/D_e}\):

\[ \eta = \frac{3}{\phi_s^2}\left(\phi_s\coth\phi_s - 1\right) \]

Interpretando:

- **\(\phi\) pequeno:** a difusão é rápida em comparação com o consumo, o substrato chega a toda a partícula, e \(\eta\) fica perto de 1. Diz-se que o processo é **controlado pela reação**.
- **\(\phi\) grande:** o consumo é rápido demais para a difusão acompanhar, o interior fica sem substrato, e \(\eta\) fica pequeno: aproximadamente \(1/\phi\) para a placa e \(3/\phi_s\) para a esfera. Diz-se que o processo é **controlado pela difusão**.

## Exemplo resolvido: qual o tamanho ideal das esferas de alginato?

Células imobilizadas em esferas de alginato consomem glicose com \(k_1 = 0{,}05\ \text{s}^{-1}\). A difusividade da glicose no gel é \(D_e = 6\times10^{-10}\ \text{m}^2/\text{s}\). Comparando dois tamanhos de esfera:

| Raio | \(\phi_s\) | \(\eta\) |
|---|---|---|
| 1,5 mm | 13,7 | 0,20 |
| 0,5 mm | 4,56 | 0,51 |

Para o raio de 1,5 mm: \(\phi_s = 1{,}5\times10^{-3}\times\sqrt{0{,}05/(6\times10^{-10})} \approx 13{,}7\), e a fórmula da esfera dá \(\eta \approx 0{,}20\).

Com esferas de 1,5 mm, apenas cerca de **20%** da capacidade das células é aproveitada: o centro das esferas está praticamente sem glicose. Reduzindo o raio para 0,5 mm, a efetividade mais que dobra. O preço é que esferas menores são mais difíceis de produzir e de manter dentro do reator (passam mais facilmente pelas telas de retenção). Esse é um compromisso típico de projeto.

## Quando não se conhece \(k_1\): o módulo de Weisz

Muitas vezes, não se conhece a velocidade "verdadeira" de reação, só a velocidade **observada** no experimento, \(r_{obs}\) (por volume de partícula). Mesmo assim, dá para diagnosticar se a difusão está limitando o processo, com o **módulo de Weisz**:

\[ \Phi = \frac{r_{obs}\,L^2}{D_e\,S_b} \]

Como regra prática, \(\Phi \lt 0{,}3\) indica que a difusão não atrapalha, e \(\Phi \gt 3\), que atrapalha muito.

## E se a cinética for de Michaelis-Menten?

Com a cinética de Michaelis-Menten, \(r = \dfrac{V_{max}S}{K_m + S}\) (tema 47), a equação deixa de ser linear e não tem solução por fórmula. Resolve-se numericamente: ou transformando o problema em problemas de valor inicial e ajustando o valor inicial até acertar a condição na outra ponta (o **método do tiro**, como quem ajusta a mira), ou dividindo a partícula em muitas camadas e escrevendo uma equação para cada uma (o método das **diferenças finitas**), o que gera um sistema de equações (temas 8 e 42).

> **Atenção, erros comuns:**
> Usar a difusividade na água em vez da difusividade **efetiva** no gel ou no biofilme, que é menor.
> Aplicar a fórmula da placa a esferas sem ajustar o comprimento característico.
> Concluir que a enzima imobilizada perdeu atividade, quando o rendimento baixo na verdade se deve à limitação pela difusão.

## Para fixar

- Difusão com reação, em regime permanente, gera uma EDO de segunda ordem com duas condições de contorno.
- Com cinética de primeira ordem, a solução usa o cosseno hiperbólico.
- \(\phi\) grande significa \(\eta\) pequeno: partículas menores ou mais porosas aproveitam melhor o biocatalisador.
`,
  referencias: [
    "SCHMIDELL, W. et al. (coord.). **Biotecnologia industrial**. v. 2: Engenharia bioquímica. São Paulo: Blucher, 2001.",
    "FOGLER, H. S. **Elementos de engenharia das reações químicas**. 4. ed. Rio de Janeiro: LTC, 2009.",
    "DORAN, P. M. **Bioprocess engineering principles**. 2. ed. Waltham: Academic Press, 2013. Cap. 13: Heterogeneous reactions.",
    "THIELE, E. W. Relation between catalytic activity and size of particle. **Industrial & Engineering Chemistry**, v. 31, n. 7, p. 916-920, 1939.",
    "WEISZ, P. B.; PRATER, C. D. Interpretation of measurements in experimental catalysis. **Advances in Catalysis**, v. 6, p. 143-196, 1954.",
    "BOYCE, W. E.; DiPRIMA, R. C. **Equações diferenciais elementares e problemas de valores de contorno**. 10. ed. Rio de Janeiro: LTC, 2015.",
  ],
}
);
