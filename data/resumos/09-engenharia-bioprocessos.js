/* BIONEXO — Resumos · Área 13: Fundamentos de Engenharia e Bioprocessos (temas 43–50) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r43", num: 43,
  area: "Fundamentos de Engenharia e Bioprocessos",
  disciplina: "Operações Unitárias em Bioprocessos I",
  titulo: "Balanços de massa em regime permanente",
  descricao: "Como fazer a \"contabilidade\" da matéria num processo: a equação geral de balanço, o passo a passo para resolver problemas, exemplos com evaporador e mistura, e o balanço de elementos do crescimento de uma levedura.",
  praticar: "questoes.html?disciplina=Fen%C3%B4menos%20de%20Transporte",
  tags: ["balanço de massa", "conservação da massa", "regime permanente", "fluxograma", "base de cálculo", "graus de liberdade", "balanço elementar", "quociente respiratório", "Fenômenos de Transporte", "Operações Unitárias"],
  conteudo: String.raw`
## A ideia: a matéria não some

<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" role="img"><title>Balanco de massa</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Balanco de massa: o que entra e igual ao que sai</text><rect x="250" y="90" width="220" height="110" rx="10" fill="#fff" stroke="#0083cb" stroke-width="2"/><text x="360" y="136" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">volume de controle</text><text x="360" y="156" font-size="9.8" text-anchor="middle" fill="#5c5c66">em regime permanente</text><line x1="120" y1="118" x2="244" y2="118" stroke="#0a8f5e" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="180" y="106" font-size="10.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">entra</text><line x1="120" y1="172" x2="244" y2="172" stroke="#0a8f5e" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="180" y="160" font-size="10.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">entra</text><line x1="476" y1="145" x2="600" y2="145" stroke="#f40086" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-rs)"/><text x="540" y="133" font-size="10.5" text-anchor="middle" fill="#f40086" font-weight="700">sai</text><text x="360" y="232" font-size="13" text-anchor="middle" fill="#333333" font-weight="700">entra = sai + consumido - gerado</text><rect x="20" y="246" width="680" height="28" rx="6" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.1"/><text x="360" y="265" font-size="10.4" text-anchor="middle" fill="#333333">Vale para a massa total e para cada componente. Com reação, aparecem os termos de consumo e geracao.</text></svg>
O balanço é escrito sobre um volume de controle bem definido.

O balanço de massa é a ferramenta mais usada da engenharia de processos. A ideia é a mesma de controlar uma conta bancária: o saldo no fim do mês é o que havia, mais o que entrou, menos o que saiu. Num processo, a matéria não aparece nem desaparece do nada. Para qualquer equipamento e qualquer substância, num certo intervalo de tempo:

\[ \text{Entrada} - \text{Saída} + \text{Geração} - \text{Consumo} = \text{Acúmulo} \]

"Geração" e "consumo" se referem a reações químicas, que transformam umas substâncias em outras. "Acúmulo" é o quanto a quantidade dentro do equipamento aumentou ou diminuiu.

Três casos simplificam muito as contas:

- **Regime permanente:** nada muda com o tempo (as vazões, as concentrações e o nível do tanque ficam constantes). Então **não há acúmulo**.
- **Sem reação química:** não há geração nem consumo. Em regime permanente, o balanço vira simplesmente **o que entra = o que sai**, tanto para a massa total quanto para cada substância.
- **Com reação:** a massa **total** continua se conservando, mas as substâncias não (a glicose some, o \(\ce{CO2}\) aparece). Por outro lado, os **elementos químicos** (C, H, O, N) nunca são criados nem destruídos, e os balanços de elementos continuam valendo.

## Passo a passo para resolver um problema

1. **Desenhe o fluxograma:** um retângulo para cada equipamento e setas para cada corrente, anotando as vazões e as composições conhecidas e desconhecidas.
2. **Escolha uma base de cálculo**, por exemplo, 100 kg/h de alimentação. Se o problema não der nenhuma vazão, a escolha é livre, e os resultados podem ser reescalados depois.
3. **Use unidades coerentes:** tudo em massa ou tudo em mols, sem misturar.
4. **Conte as incógnitas e as equações** (a chamada análise de **graus de liberdade**). Se o número de incógnitas for igual ao de equações independentes, o problema tem solução única.
5. **Escreva os balanços.** Atenção: com \(n\) substâncias, há no máximo \(n\) balanços independentes, porque o balanço total é a soma dos balanços de cada substância.
6. **Resolva**, começando pelas equações que têm uma só incógnita (para sistemas maiores, tema 8).
7. **Confira** o resultado com um balanço que não foi usado.

## Exemplo resolvido 1: concentrando um caldo

Um evaporador recebe 1000 kg/h de um caldo com 12% de sólidos (em massa) e produz um caldo concentrado com 40% de sólidos. Quanto sai de concentrado, e quanta água é evaporada?

- **Passo 1, balanço de sólidos:** os sólidos não evaporam, então tudo o que entra sai no concentrado. \(0{,}12\times1000 = 0{,}40\,P\), logo \(P = 300\) kg/h.
- **Passo 2, balanço total:** \(1000 = 300 + W\), logo \(W = 700\) kg/h de água evaporada.
- **Passo 3, conferência pelo balanço de água:** entram \(0{,}88\times1000 = 880\) kg/h; saem \(0{,}60\times300 + 700 = 180 + 700 = 880\) kg/h. ✓

## Exemplo resolvido 2: preparando um meio pela mistura de duas soluções

Precisa-se de 500 kg/h de uma solução com 10% de glicose, misturando uma solução A (20% de glicose) com uma solução B (5%). Quanto usar de cada uma?

\[ \begin{cases} A + B = 500 & \text{(balanço total)} \\ 0{,}20A + 0{,}05B = 50 & \text{(balanço de glicose)} \end{cases} \]

Substituindo \(B = 500 - A\) na segunda equação: \(0{,}15A = 25\), logo \(A \approx 166{,}7\) kg/h e \(B \approx 333{,}3\) kg/h.

## Exemplo resolvido 3: o balanço de elementos do crescimento de uma levedura

Uma levedura cresce com glicose como fonte de carbono e amônia como fonte de nitrogênio, consumindo oxigênio. Para fazer as contas, representa-se a biomassa por uma "fórmula média" das células, tipicamente \(\ce{CH_{1,8}O_{0,5}N_{0,2}}\) (cerca de 24,6 g/mol):

\[ \ce{C6H12O6} + a\,\ce{O2} + b\,\ce{NH3} \rightarrow c\,\ce{CH_{1,8}O_{0,5}N_{0,2}} + d\,\ce{CO2} + e\,\ce{H2O} \]

Sabe-se que o rendimento é de 0,5 g de células por grama de glicose. Então 180 g de glicose (1 mol) formam 90 g de células, ou seja, \(c = 90/24{,}6 \approx 3{,}66\) mol. Os outros coeficientes saem dos balanços de cada elemento:

| Elemento | Equação | Resultado |
|---|---|---|
| Carbono | \(6 = c + d\) | \(d \approx 2{,}34\) |
| Nitrogênio | \(b = 0{,}2\,c\) | \(b \approx 0{,}73\) |
| Hidrogênio | \(12 + 3b = 1{,}8\,c + 2e\) | \(e \approx 3{,}80\) |
| Oxigênio | \(6 + 2a = 0{,}5\,c + 2d + e\) | \(a \approx 2{,}16\) |

A levedura consome cerca de 2,16 mols de oxigênio por mol de glicose. A razão entre o \(\ce{CO2}\) produzido e o \(\ce{O2}\) consumido é o **quociente respiratório**: \(\mathrm{QR} = d/a \approx 1{,}08\).

**Por que isso é útil na prática:** analisando o gás que sai do biorreator, mede-se quanto oxigênio foi consumido e quanto \(\ce{CO2}\) foi produzido. Se o QR medido sobe muito acima do esperado, é sinal de que a levedura começou a fermentar (produzindo etanol e mais \(\ce{CO2}\)) em vez de respirar. É uma forma clássica de **acompanhar o cultivo em tempo real**, sem abrir o reator.

## Situações comuns na indústria

- **Reciclo:** parte do que sai volta para a entrada. Na produção de etanol no Brasil, por exemplo, as leveduras são separadas do vinho por centrifugação e reaproveitadas na fermentação seguinte. Nesses casos, faz-se o balanço do sistema inteiro e também do ponto onde o reciclo se junta à alimentação.
- **Purga:** retira-se uma pequena parte da corrente de reciclo para impedir que impurezas se acumulem.
- **Desvio:** parte da alimentação contorna o equipamento e se junta à saída.

> **Atenção, erros comuns:**
> Misturar frações em massa e frações em mols no mesmo balanço.
> Escrever mais balanços "independentes" do que o número de substâncias.
> Fazer balanço de **substância** em processos com reação sem incluir geração e consumo; nesses casos, prefira os balanços de **elementos**.

## Para fixar

- Entrada − Saída + Geração − Consumo = Acúmulo.
- Em regime permanente e sem reação: o que entra é igual ao que sai, no total e para cada substância.
- Fluxograma, base de cálculo e contagem de incógnitas antes de qualquer conta.
`,
  referencias: [
    "HIMMELBLAU, D. M.; RIGGS, J. B. **Engenharia química**: princípios e cálculos. 8. ed. Rio de Janeiro: LTC, 2014.",
    "FELDER, R. M.; ROUSSEAU, R. W. **Princípios elementares dos processos químicos**. 3. ed. Rio de Janeiro: LTC, 2005.",
    "SCHMIDELL, W. et al. (coord.). **Biotecnologia industrial**. v. 2: Engenharia bioquímica. São Paulo: Blucher, 2001.",
    "DORAN, P. M. **Bioprocess engineering principles**. 2. ed. Waltham: Academic Press, 2013. Cap. 4: Material balances.",
  ],
},
{
  id: "r44", num: 44,
  area: "Fundamentos de Engenharia e Bioprocessos",
  disciplina: "Operações Unitárias em Bioprocessos II",
  titulo: "Fenômenos de transporte",
  descricao: "As semelhanças entre o transporte de quantidade de movimento, de calor e de massa, o número de Reynolds, por que a difusão sozinha não basta e como garantir oxigênio para as células num biorreator.",
  praticar: "questoes.html?disciplina=Fen%C3%B4menos%20de%20Transporte",
  tags: ["fenômenos de transporte", "viscosidade", "Reynolds", "lei de Newton", "lei de Fourier", "lei de Fick", "difusão", "kLa", "transferência de oxigênio", "fluido não newtoniano", "Fenômenos de Transporte"],
  conteudo: String.raw`
## Três fenômenos com a mesma lógica

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Fenomenos de transporte</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Tres transportes, a mesma estrutura</text><rect x="24" y="56" width="220" height="150" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="134" y="78" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">quantidade de movimento</text><line x1="54" y1="100" x2="59" y2="100" stroke="#0083cb" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="54" y1="112" x2="131.222" y2="112" stroke="#0083cb" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="54" y1="124" x2="174.556" y2="124" stroke="#0083cb" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="54" y1="136" x2="189" y2="136" stroke="#0083cb" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="54" y1="148" x2="174.556" y2="148" stroke="#0083cb" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="54" y1="160" x2="131.222" y2="160" stroke="#0083cb" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="54" y1="172" x2="59" y2="172" stroke="#0083cb" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-az)"/><text x="134" y="198" font-size="9.4" text-anchor="middle" fill="#5c5c66">fluxo proporcional ao gradiente</text><text x="134" y="224" font-size="10.6" text-anchor="middle" fill="#333333" font-weight="700">viscosidade</text><text x="134" y="240" font-size="9.6" text-anchor="middle" fill="#5c5c66">perfil de velocidade</text><rect x="256" y="56" width="220" height="150" rx="8" fill="#fff" stroke="#d33a4e" stroke-width="1.4"/><text x="366" y="78" font-size="11" text-anchor="middle" fill="#d33a4e" font-weight="700">calor</text><line x1="286" y1="100" x2="291" y2="100" stroke="#d33a4e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="286" y1="112" x2="363.222" y2="112" stroke="#d33a4e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="286" y1="124" x2="406.556" y2="124" stroke="#d33a4e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="286" y1="136" x2="421" y2="136" stroke="#d33a4e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="286" y1="148" x2="406.556" y2="148" stroke="#d33a4e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="286" y1="160" x2="363.222" y2="160" stroke="#d33a4e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="286" y1="172" x2="291" y2="172" stroke="#d33a4e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-vm)"/><text x="366" y="198" font-size="9.4" text-anchor="middle" fill="#5c5c66">fluxo proporcional ao gradiente</text><text x="366" y="224" font-size="10.6" text-anchor="middle" fill="#333333" font-weight="700">condutividade</text><text x="366" y="240" font-size="9.6" text-anchor="middle" fill="#5c5c66">perfil de temperatura</text><rect x="488" y="56" width="220" height="150" rx="8" fill="#fff" stroke="#0a8f5e" stroke-width="1.4"/><text x="598" y="78" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">massa</text><line x1="518" y1="100" x2="523" y2="100" stroke="#0a8f5e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-ve)"/><line x1="518" y1="112" x2="595.222" y2="112" stroke="#0a8f5e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-ve)"/><line x1="518" y1="124" x2="638.556" y2="124" stroke="#0a8f5e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-ve)"/><line x1="518" y1="136" x2="653" y2="136" stroke="#0a8f5e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-ve)"/><line x1="518" y1="148" x2="638.556" y2="148" stroke="#0a8f5e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-ve)"/><line x1="518" y1="160" x2="595.222" y2="160" stroke="#0a8f5e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-ve)"/><line x1="518" y1="172" x2="523" y2="172" stroke="#0a8f5e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="598" y="198" font-size="9.4" text-anchor="middle" fill="#5c5c66">fluxo proporcional ao gradiente</text><text x="598" y="224" font-size="10.6" text-anchor="middle" fill="#333333" font-weight="700">difusividade</text><text x="598" y="240" font-size="9.6" text-anchor="middle" fill="#5c5c66">perfil de concentração</text><rect x="20" y="254" width="700" height="42" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="274" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">o numero de Reynolds decide o regime</text><text x="370" y="290" font-size="10.2" text-anchor="middle" fill="#5c5c66">Laminar, o transporte depende so da difusao; turbulento, a mistura acelera tudo. Num biorreator, so a agitacao</text></svg>
Os três transportes seguem a mesma forma: fluxo proporcional ao gradiente.

A disciplina de fenômenos de transporte estuda três coisas que "fluem" de um lugar para outro:

- a **quantidade de movimento** (ligada ao escoamento dos fluidos e ao atrito entre as camadas de líquido);
- o **calor**;
- a **massa** (por exemplo, o oxigênio que passa do ar para o meio de cultura).

Os três seguem a mesma regra: fluem da região onde há "mais" para a região onde há "menos", e o fluxo é tanto maior quanto mais brusca for a diferença ao longo da distância (o **gradiente**).

| Transporte | Lei | Fluxo | O que provoca o fluxo | Propriedade do material |
|---|---|---|---|---|
| Quantidade de movimento | Newton da viscosidade | \(\tau = -\mu\,\dfrac{dv}{dy}\) | diferença de velocidade entre camadas do fluido | viscosidade \(\mu\) |
| Calor | Fourier | \(q = -k\,\dfrac{dT}{dx}\) | diferença de temperatura | condutividade térmica \(k\) |
| Massa | Fick | \(J = -D_{AB}\,\dfrac{dC_A}{dx}\) | diferença de concentração | difusividade \(D_{AB}\) |

O sinal negativo indica que o fluxo vai **no sentido contrário ao aumento**: o calor vai do quente para o frio; a substância, do mais concentrado para o menos concentrado. Essa semelhança entre os três fenômenos permite usar as mesmas ferramentas para todos.

Esse transporte "de molécula para molécula" é chamado de **molecular** (ou difusivo). Além dele, existe o transporte **convectivo**, quando o próprio fluido em movimento carrega o calor ou a substância. Em equipamentos agitados ou com escoamento, a convecção é quase sempre muito mais importante.

## Quantidade de movimento: como os fluidos escoam

A **viscosidade** mede a resistência de um fluido a escoar: o mel é muito mais viscoso que a água.

- Num **fluido newtoniano**, a viscosidade é constante, como na água e nos meios de cultura diluídos.
- Num **fluido não newtoniano**, a viscosidade muda conforme a agitação. Os caldos de **fungos filamentosos** e as soluções de polissacarídeos (como a goma xantana) são **pseudoplásticos**: ficam mais "finos" quando são agitados com força. Num tanque, isso cria um problema: perto do agitador o caldo flui bem, mas longe dele fica quase parado, e as células dessa região ficam sem oxigênio.

O **número de Reynolds** (\(Re\)) compara a tendência do fluido de continuar se movendo (a inércia) com a resistência causada pela viscosidade:

\[ Re = \frac{\rho\,v\,D}{\mu} \quad\text{(em tubos)} \qquad\qquad Re = \frac{\rho\,N\,D^2}{\mu} \quad\text{(em tanques agitados)} \]

Em tubos, abaixo de cerca de 2100 o escoamento é **laminar** (ordenado, em camadas) e acima de cerca de 4000 é **turbulento** (com redemoinhos). No escoamento laminar, a velocidade média é metade da máxima, como calculado no tema 39. O escoamento turbulento mistura muito melhor e transfere calor e massa muito mais rápido.

## Calor

O calor pode passar por condução (Fourier), por convecção (\(q = h\,A\,\Delta T\)) ou por radiação. A aplicação a trocadores de calor e ao resfriamento de fermentadores está no tema 45.

## Massa: por que a difusão sozinha não basta

A difusão é rápida em distâncias microscópicas e **muito lenta** em distâncias maiores. Uma estimativa útil é que o tempo para uma molécula se difundir por uma distância \(L\) é da ordem de \(L^2/D\). Para o oxigênio na água (\(D \approx 2\times10^{-9}\ \text{m}^2/\text{s}\)):

- atravessar 10 micrômetros (o tamanho de uma célula) leva cerca de \((10^{-5})^2/(2\times10^{-9}) = 0{,}05\) segundo;
- atravessar 1 centímetro leva cerca de \(5\times10^{4}\) segundos, ou seja, **umas 14 horas**.

Por isso, a difusão basta para levar o oxigênio de um lado a outro de uma célula, mas um biorreator precisa de **agitação e aeração** para distribuir o oxigênio por todo o líquido.

## Levando oxigênio às células num biorreator

O oxigênio se dissolve muito pouco em água: em equilíbrio com o ar, entre 30 e 37 °C, a concentração máxima (a **saturação**) fica em torno de 7 mg/L, ou cerca de 0,2 mmol/L. Uma cultura densa consome esse estoque em segundos, por isso o oxigênio precisa ser reposto o tempo todo, passando das bolhas de ar para o líquido. A velocidade dessa passagem é a **velocidade de transferência de oxigênio** (OTR, da sigla em inglês):

\[ \mathrm{OTR} = k_La\,(C^\ast - C_L) \]

em que \(C^\ast\) é a concentração de saturação, \(C_L\) é a concentração real no líquido, e \(k_La\) é o **coeficiente volumétrico de transferência de oxigênio**. O \(k_La\) mede a "facilidade" com que o oxigênio passa das bolhas para o líquido e aumenta com a agitação (bolhas menores, mais área de contato) e com a vazão de ar.

As células, por sua vez, consomem oxigênio numa velocidade (OUR) igual ao consumo de cada grama de células (\(q_{O_2}\)) vezes a concentração de células (\(X\)): \(\mathrm{OUR} = q_{O_2}\,X\). Para que a concentração de oxigênio no líquido fique estável, é preciso que **o que entra seja igual ao que é consumido: OTR = OUR**.

## Exemplos resolvidos

**1. Laminar ou turbulento?** Água (\(\rho = 1000\ \text{kg/m}^3\), \(\mu = 10^{-3}\) Pa·s) escoando a 1 m/s num tubo de 5 cm de diâmetro:

\[ Re = \frac{1000\times1\times0{,}05}{10^{-3}} = 5\times10^{4} \;\Rightarrow\; \text{turbulento} \]

**2. Quanto de \(k_La\) é preciso?** Um cultivo com 20 g/L de células, cada grama consumindo 8 mmol de oxigênio por hora, tem \(\mathrm{OUR} = 160\) mmol/(L·h). Com saturação de 0,21 mmol/L e querendo manter o oxigênio no líquido em 0,05 mmol/L (acima do mínimo de que as células precisam):

\[ k_La = \frac{160}{0{,}21 - 0{,}05} = 1000\ \text{h}^{-1} \]

É um valor alto, perto do máximo que fermentadores bem agitados conseguem. Por isso, em cultivos com muitas células, **o oxigênio costuma ser o fator limitante**. As saídas são aumentar a agitação ou a aeração, usar ar enriquecido com oxigênio ou aumentar a pressão do reator (o que aumenta a saturação \(C^\ast\)).

> **Atenção, erros comuns:**
> Esquecer o sinal negativo nas leis de fluxo: o fluxo vai **contra** o gradiente.
> Supor viscosidade constante em caldos de fungos filamentosos.
> Calcular a OTR com a concentração em mg/L e a OUR em mmol/(L·h), sem converter.

## Para fixar

- Os três transportes seguem a mesma forma: fluxo = −(propriedade) × gradiente.
- O número de Reynolds indica se o escoamento é laminar ou turbulento.
- Em biorreatores com ar, a transferência de oxigênio, \(k_La(C^\ast - C_L)\), precisa acompanhar o consumo das células.
`,
  referencias: [
    "BIRD, R. B.; STEWART, W. E.; LIGHTFOOT, E. N. **Fenômenos de transporte**. 2. ed. Rio de Janeiro: LTC, 2004.",
    "INCROPERA, F. P. et al. **Fundamentos de transferência de calor e de massa**. 7. ed. Rio de Janeiro: LTC, 2014.",
    "SCHMIDELL, W. et al. (coord.). **Biotecnologia industrial**. v. 2: Engenharia bioquímica. São Paulo: Blucher, 2001.",
    "DORAN, P. M. **Bioprocess engineering principles**. 2. ed. Waltham: Academic Press, 2013. Cap. 7 a 10: Fluid flow; Mixing; Heat transfer; Mass transfer.",
    "GARCIA-OCHOA, F.; GOMEZ, E. Bioreactor scale-up and oxygen transfer rate in microbial processes: an overview. **Biotechnology Advances**, v. 27, n. 2, p. 153-176, 2009.",
  ],
},
{
  id: "r45", num: 45,
  area: "Fundamentos de Engenharia e Bioprocessos",
  disciplina: "Operações Unitárias em Bioprocessos III",
  titulo: "Transferência de calor em equipamentos industriais",
  descricao: "Condução, convecção e radiação, as resistências térmicas em série, o coeficiente global de troca, a média logarítmica de temperaturas e o cálculo da área de resfriamento de um fermentador.",
  praticar: "questoes.html?disciplina=Opera%C3%A7%C3%B5es%20Unit%C3%A1rias",
  tags: ["transferência de calor", "condução", "convecção", "radiação", "coeficiente global", "trocador de calor", "MLDT", "contracorrente", "incrustação", "resfriamento de fermentador", "Operações Unitárias", "Fenômenos de Transporte"],
  conteudo: String.raw`
## Por que isso importa em bioprocessos

Aquecer e resfriar estão em toda parte numa indústria de biotecnologia: esterilizar o meio de cultura (tema 35), manter o fermentador na temperatura certa enquanto as células liberam calor, pasteurizar leite e sucos, resfriar o produto antes de armazená-lo. Em todos esses casos, a pergunta de engenharia é a mesma: **qual deve ser o tamanho do equipamento para trocar o calor necessário?**

## Os três mecanismos

| Mecanismo | Como acontece | Expressão |
|---|---|---|
| Condução | o calor passa através de um material parado, de molécula em molécula | parede plana: \(\dot{Q} = \dfrac{k\,A\,\Delta T}{L}\) |
| Convecção | um fluido em movimento carrega o calor de uma superfície | \(\dot{Q} = h\,A\,(T_s - T_\infty)\) |
| Radiação | o calor viaja como onda eletromagnética, sem precisar de meio | \(\dot{Q} = \varepsilon\,\sigma\,A\,(T_s^4 - T_{viz}^4)\), com \(\sigma = 5{,}67\times10^{-8}\ \text{W/(m}^2\text{K}^4)\) |

O **coeficiente de convecção** \(h\) indica a facilidade com que o fluido troca calor com a superfície e depende muito do tipo de fluido e do escoamento. Ordens de grandeza típicas, em W/(m²·K): gases parados, de 2 a 25; líquidos bombeados, de 50 a 20 000; **vapor condensando**, de 2500 a 100 000. É por isso que o vapor é tão usado para aquecer: ao condensar sobre uma superfície, ele entrega uma quantidade enorme de calor (o calor latente, tema 24).

## Resistências em série: a analogia com um circuito elétrico

Num trocador de calor, o calor sai de um fluido quente, atravessa uma parede de metal e chega a um fluido frio. Cada uma dessas etapas oferece uma resistência à passagem do calor, como resistores ligados em **série** num circuito (tema 26). A resistência total é a soma das resistências, e o calor trocado é a diferença de temperatura dividida pela resistência total.

Por unidade de área, define-se o **coeficiente global de troca térmica** \(U\):

\[ \frac{1}{U} = \frac{1}{h_1} + \frac{L}{k} + \frac{1}{h_2} + R_{inc} \]

O termo \(R_{inc}\) representa a **incrustação**: depósitos de proteínas, células ou sais que se acumulam nas superfícies com o uso. É um problema sério em trocadores de laticínios e de caldos fermentados, e é uma das razões para a limpeza periódica dos equipamentos.

Uma consequência importante: **a maior resistência controla o processo**. Se um dos lados já troca calor muito bem, melhorá-lo ainda mais quase não muda \(U\). O esforço deve ir para o lado mais fraco.

## Os trocadores de calor

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Trocador de calor</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Trocador de calor e a média logaritmica</text><rect x="30" y="56" width="320" height="120" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="190" y="76" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">corrente paralela</text><rect x="60" y="96" width="260" height="24" rx="4" fill="#fdeaed" stroke="#d33a4e" stroke-width="1.2"/><rect x="60" y="130" width="260" height="24" rx="4" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><line x1="80" y1="108" x2="300" y2="108" stroke="#d33a4e" stroke-width="2" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="80" y1="142" x2="300" y2="142" stroke="#0083cb" stroke-width="2" stroke-linecap="round" marker-end="url(#a-az)"/><text x="190" y="166" font-size="9.4" text-anchor="middle" fill="#5c5c66">quente em cima, frio embaixo</text><rect x="380" y="56" width="320" height="120" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="540" y="76" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">contracorrente</text><rect x="410" y="96" width="260" height="24" rx="4" fill="#fdeaed" stroke="#d33a4e" stroke-width="1.2"/><rect x="410" y="130" width="260" height="24" rx="4" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><line x1="430" y1="108" x2="650" y2="108" stroke="#d33a4e" stroke-width="2" stroke-linecap="round" marker-end="url(#a-vm)"/><line x1="650" y1="142" x2="430" y2="142" stroke="#0083cb" stroke-width="2" stroke-linecap="round" marker-end="url(#a-az)"/><text x="540" y="166" font-size="9.4" text-anchor="middle" fill="#5c5c66">quente em cima, frio embaixo</text><rect x="60" y="196" width="290" height="86" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><path d="M60.0,204.6L61.3,204.7L62.6,204.9L64.0,205.0L65.3,205.1L66.6,205.3L67.9,205.4L69.2,205.6L70.5,205.7L71.9,205.8L73.2,206.0L74.5,206.1L75.8,206.2L77.1,206.4L78.5,206.5L79.8,206.7L81.1,206.8L82.4,206.9L83.7,207.1L85.0,207.2L86.4,207.3L87.7,207.5L89.0,207.6L90.3,207.7L91.6,207.9L93.0,208.0L94.3,208.2L95.6,208.3L96.9,208.4L98.2,208.6L99.5,208.7L100.9,208.8L102.2,209.0L103.5,209.1L104.8,209.3L106.1,209.4L107.5,209.5L108.8,209.7L110.1,209.8L111.4,209.9L112.7,210.1L114.0,210.2L115.4,210.3L116.7,210.5L118.0,210.6L119.3,210.8L120.6,210.9L122.0,211.0L123.3,211.2L124.6,211.3L125.9,211.4L127.2,211.6L128.5,211.7L129.9,211.9L131.2,212.0L132.5,212.1L133.8,212.3L135.1,212.4L136.5,212.5L137.8,212.7L139.1,212.8L140.4,212.9L141.7,213.1L143.0,213.2L144.4,213.4L145.7,213.5L147.0,213.6L148.3,213.8L149.6,213.9L151.0,214.0L152.3,214.2L153.6,214.3L154.9,214.5L156.2,214.6L157.5,214.7L158.9,214.9L160.2,215.0L161.5,215.1L162.8,215.3L164.1,215.4L165.5,215.5L166.8,215.7L168.1,215.8L169.4,216.0L170.7,216.1L172.0,216.2L173.4,216.4L174.7,216.5L176.0,216.6L177.3,216.8L178.6,216.9L180.0,217.1L181.3,217.2L182.6,217.3L183.9,217.5L185.2,217.6L186.5,217.7L187.9,217.9L189.2,218.0L190.5,218.1L191.8,218.3L193.1,218.4L194.5,218.6L195.8,218.7L197.1,218.8L198.4,219.0L199.7,219.1L201.0,219.2L202.4,219.4L203.7,219.5L205.0,219.6L206.3,219.8L207.6,219.9L209.0,220.1L210.3,220.2L211.6,220.3L212.9,220.5L214.2,220.6L215.5,220.7L216.9,220.9L218.2,221.0L219.5,221.2L220.8,221.3L222.1,221.4L223.5,221.6L224.8,221.7L226.1,221.8L227.4,222.0L228.7,222.1L230.0,222.2L231.4,222.4L232.7,222.5L234.0,222.7L235.3,222.8L236.6,222.9L238.0,223.1L239.3,223.2L240.6,223.3L241.9,223.5L243.2,223.6L244.5,223.8L245.9,223.9L247.2,224.0L248.5,224.2L249.8,224.3L251.1,224.4L252.5,224.6L253.8,224.7L255.1,224.8L256.4,225.0L257.7,225.1L259.0,225.3L260.4,225.4L261.7,225.5L263.0,225.7L264.3,225.8L265.6,225.9L267.0,226.1L268.3,226.2L269.6,226.4L270.9,226.5L272.2,226.6L273.5,226.8L274.9,226.9L276.2,227.0L277.5,227.2L278.8,227.3L280.1,227.4L281.5,227.6L282.8,227.7L284.1,227.9L285.4,228.0L286.7,228.1L288.0,228.3L289.4,228.4L290.7,228.5L292.0,228.7L293.3,228.8L294.6,229.0L296.0,229.1L297.3,229.2L298.6,229.4L299.9,229.5L301.2,229.6L302.5,229.8L303.9,229.9L305.2,230.0L306.5,230.2L307.8,230.3L309.1,230.5L310.5,230.6L311.8,230.7L313.1,230.9L314.4,231.0L315.7,231.1L317.0,231.3L318.4,231.4L319.7,231.6L321.0,231.7L322.3,231.8L323.6,232.0L325.0,232.1L326.3,232.2L327.6,232.4L328.9,232.5L330.2,232.6L331.5,232.8L332.9,232.9L334.2,233.1L335.5,233.2L336.8,233.3L338.1,233.5L339.5,233.6L340.8,233.7L342.1,233.9L343.4,234.0L344.7,234.2L346.0,234.3L347.4,234.4L348.7,234.6L350.0,234.7" fill="none" stroke="#d33a4e" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M60.0,273.4L61.3,273.3L62.6,273.1L64.0,273.0L65.3,272.9L66.6,272.7L67.9,272.6L69.2,272.4L70.5,272.3L71.9,272.2L73.2,272.0L74.5,271.9L75.8,271.8L77.1,271.6L78.5,271.5L79.8,271.3L81.1,271.2L82.4,271.1L83.7,270.9L85.0,270.8L86.4,270.7L87.7,270.5L89.0,270.4L90.3,270.3L91.6,270.1L93.0,270.0L94.3,269.8L95.6,269.7L96.9,269.6L98.2,269.4L99.5,269.3L100.9,269.2L102.2,269.0L103.5,268.9L104.8,268.7L106.1,268.6L107.5,268.5L108.8,268.3L110.1,268.2L111.4,268.1L112.7,267.9L114.0,267.8L115.4,267.7L116.7,267.5L118.0,267.4L119.3,267.2L120.6,267.1L122.0,267.0L123.3,266.8L124.6,266.7L125.9,266.6L127.2,266.4L128.5,266.3L129.9,266.1L131.2,266.0L132.5,265.9L133.8,265.7L135.1,265.6L136.5,265.5L137.8,265.3L139.1,265.2L140.4,265.1L141.7,264.9L143.0,264.8L144.4,264.6L145.7,264.5L147.0,264.4L148.3,264.2L149.6,264.1L151.0,264.0L152.3,263.8L153.6,263.7L154.9,263.5L156.2,263.4L157.5,263.3L158.9,263.1L160.2,263.0L161.5,262.9L162.8,262.7L164.1,262.6L165.5,262.5L166.8,262.3L168.1,262.2L169.4,262.0L170.7,261.9L172.0,261.8L173.4,261.6L174.7,261.5L176.0,261.4L177.3,261.2L178.6,261.1L180.0,260.9L181.3,260.8L182.6,260.7L183.9,260.5L185.2,260.4L186.5,260.3L187.9,260.1L189.2,260.0L190.5,259.9L191.8,259.7L193.1,259.6L194.5,259.4L195.8,259.3L197.1,259.2L198.4,259.0L199.7,258.9L201.0,258.8L202.4,258.6L203.7,258.5L205.0,258.4L206.3,258.2L207.6,258.1L209.0,257.9L210.3,257.8L211.6,257.7L212.9,257.5L214.2,257.4L215.5,257.3L216.9,257.1L218.2,257.0L219.5,256.8L220.8,256.7L222.1,256.6L223.5,256.4L224.8,256.3L226.1,256.2L227.4,256.0L228.7,255.9L230.0,255.8L231.4,255.6L232.7,255.5L234.0,255.3L235.3,255.2L236.6,255.1L238.0,254.9L239.3,254.8L240.6,254.7L241.9,254.5L243.2,254.4L244.5,254.2L245.9,254.1L247.2,254.0L248.5,253.8L249.8,253.7L251.1,253.6L252.5,253.4L253.8,253.3L255.1,253.2L256.4,253.0L257.7,252.9L259.0,252.7L260.4,252.6L261.7,252.5L263.0,252.3L264.3,252.2L265.6,252.1L267.0,251.9L268.3,251.8L269.6,251.6L270.9,251.5L272.2,251.4L273.5,251.2L274.9,251.1L276.2,251.0L277.5,250.8L278.8,250.7L280.1,250.6L281.5,250.4L282.8,250.3L284.1,250.1L285.4,250.0L286.7,249.9L288.0,249.7L289.4,249.6L290.7,249.5L292.0,249.3L293.3,249.2L294.6,249.0L296.0,248.9L297.3,248.8L298.6,248.6L299.9,248.5L301.2,248.4L302.5,248.2L303.9,248.1L305.2,248.0L306.5,247.8L307.8,247.7L309.1,247.5L310.5,247.4L311.8,247.3L313.1,247.1L314.4,247.0L315.7,246.9L317.0,246.7L318.4,246.6L319.7,246.4L321.0,246.3L322.3,246.2L323.6,246.0L325.0,245.9L326.3,245.8L327.6,245.6L328.9,245.5L330.2,245.4L331.5,245.2L332.9,245.1L334.2,244.9L335.5,244.8L336.8,244.7L338.1,244.5L339.5,244.4L340.8,244.3L342.1,244.1L343.4,244.0L344.7,243.8L346.0,243.7L347.4,243.6L348.7,243.4L350.0,243.3" fill="none" stroke="#0083cb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><text x="205" y="294" font-size="9.6" text-anchor="middle" fill="#5c5c66">as curvas se aproximam: a diferença de temperatura muda ao longo do trocador</text><rect x="390" y="196" width="330" height="86" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="555" y="216" font-size="10.8" text-anchor="middle" fill="#333333" font-weight="700">por isso se usa a média logaritmica</text><text x="555" y="234" font-size="10" text-anchor="middle" fill="#5c5c66">A média aritmetica superestimaria a troca.</text><text x="555" y="250" font-size="10" text-anchor="middle" fill="#5c5c66">A contracorrente mantem a diferença mais uniforme</text><text x="555" y="266" font-size="10" text-anchor="middle" fill="#5c5c66">e por isso troca mais calor com a mesma área.</text></svg>
A contracorrente mantém a diferença de temperatura mais uniforme ao longo do trocador.

- **Bitubular (tubo dentro de tubo):** simples, para pequenas quantidades de calor.
- **Casco e tubos:** um feixe de tubos dentro de um cilindro maior; é o equipamento padrão na indústria.
- **Trocador de placas:** compacto e fácil de desmontar para limpeza. É o padrão na pasteurização de leite e sucos e geralmente tem uma seção de **regeneração**, em que o produto já aquecido esquenta o produto frio que está entrando, economizando energia.
- **Camisas e serpentinas:** usadas em biorreatores e tanques. A camisa é uma "jaqueta" por onde a água circula do lado de fora do tanque; a serpentina é um tubo enrolado dentro dele.

## A média logarítmica de temperaturas

Ao longo do trocador, a diferença de temperatura entre os dois fluidos muda: é grande numa ponta e pequena na outra. Para calcular o calor trocado, não se usa a média simples dessas diferenças, e sim a **média logarítmica**:

\[ \dot{Q} = U\,A\,\Delta T_{ml}, \qquad \Delta T_{ml} = \frac{\Delta T_1 - \Delta T_2}{\ln(\Delta T_1/\Delta T_2)} \]

em que \(\Delta T_1\) e \(\Delta T_2\) são as diferenças de temperatura entre os fluidos em cada ponta do equipamento.

Quando os dois fluidos correm em **sentidos opostos** (**contracorrente**), a média logarítmica fica maior do que quando correm no mesmo sentido (**paralelo**), e é preciso menos área para trocar o mesmo calor. Por isso o arranjo em contracorrente é o preferido. O calor trocado também precisa fechar com o balanço de energia de cada fluido: \(\dot{Q} = \dot{m}\,c_p\,\Delta T\) (tema 25).

## Exemplo resolvido 1: o coeficiente global de uma camisa

A parede de um fermentador é de aço inox (\(k = 16\) W/(m·K)) com 5 mm de espessura. O coeficiente do lado do caldo é 1000 W/(m²·K), e o do lado da água de resfriamento, 2000 W/(m²·K).

\[ \frac{1}{U} = \frac{1}{1000} + \frac{0{,}005}{16} + \frac{1}{2000} = 0{,}00100 + 0{,}00031 + 0{,}00050 \approx 0{,}00181 \;\Rightarrow\; U \approx 552\ \text{W/(m}^2\text{K)} \]

Repare que a parede de metal é a menor das três resistências; a maior está no lado do caldo. Se, com o uso, se formar uma incrustação com \(R_{inc} = 0{,}0005\) m²·K/W, \(1/U\) passa a 0,00231 e \(U\) cai para cerca de 432 W/(m²·K): **22% a menos** de capacidade de troca.

## Exemplo resolvido 2: resfriando um fermentador

Um fermentador precisa ser mantido a 35 °C, retirando 50 kW de calor (o calor liberado pelas células somado à energia do agitador, temas 23 e 24). A água de resfriamento entra na camisa a 20 °C e sai a 28 °C, e \(U = 500\) W/(m²·K). Qual a área de troca necessária, e quanta água é preciso?

**Passo 1, as diferenças de temperatura nas pontas:** \(\Delta T_1 = 35 - 20 = 15\) K e \(\Delta T_2 = 35 - 28 = 7\) K.

**Passo 2, a média logarítmica:**

\[ \Delta T_{ml} = \frac{15 - 7}{\ln(15/7)} \approx 10{,}5\ \text{K} \]

**Passo 3, a área:**

\[ A = \frac{50\,000}{500\times10{,}5} \approx 9{,}5\ \text{m}^2 \]

**Passo 4, a vazão de água**, pelo balanço de energia da água:

\[ \dot{m}_{água} = \frac{50\,000}{4180\times8} \approx 1{,}5\ \text{kg/s} \approx 5{,}4\ \text{m}^3/\text{h} \]

Se tivéssemos usado a média simples (11 K), a força motriz pareceria maior do que é, e o equipamento ficaria pequeno demais.

## O problema de aumentar a escala

O calor gerado pelas células é proporcional ao **volume** do fermentador (que cresce com o cubo do tamanho, \(L^3\)), mas a área da camisa cresce só com o **quadrado** do tamanho (\(L^2\)). Ao ampliar o fermentador, a área de troca disponível para cada litro de caldo diminui (a mesma relação entre superfície e volume do tema 30). Por isso, fermentadores industriais grandes precisam de **serpentinas internas** ou de trocadores externos, e a capacidade de retirar calor pode limitar a quantidade máxima de células que o processo consegue manter.

> **Atenção, erros comuns:**
> Usar a média simples das diferenças de temperatura em vez da média logarítmica.
> Ignorar a incrustação no projeto.
> Misturar W e kW. Para **diferenças** de temperatura, °C e K dão o mesmo número; para radiação, use sempre kelvin.

## Para fixar

- As resistências térmicas se somam em série: \(1/U\) é a soma das resistências.
- \(\dot{Q} = UA\,\Delta T_{ml}\); o arranjo em contracorrente é o mais eficiente.
- Ao aumentar a escala, retirar o calor se torna um dos maiores desafios.
`,
  referencias: [
    "INCROPERA, F. P. et al. **Fundamentos de transferência de calor e de massa**. 7. ed. Rio de Janeiro: LTC, 2014.",
    "ÇENGEL, Y. A.; GHAJAR, A. J. **Transferência de calor e massa**: uma abordagem prática. 4. ed. Porto Alegre: AMGH, 2012.",
    "KERN, D. Q. **Processos de transmissão de calor**. Rio de Janeiro: Guanabara Dois, 1980.",
    "DORAN, P. M. **Bioprocess engineering principles**. 2. ed. Waltham: Academic Press, 2013. Cap. 9: Heat transfer.",
  ],
},
{
  id: "r46", num: 46,
  area: "Fundamentos de Engenharia e Bioprocessos",
  disciplina: "Microbiologia Industrial",
  titulo: "Cinética de crescimento microbiano",
  descricao: "Como colocar números no crescimento das células: velocidades específicas, o modelo de Monod, os rendimentos, a energia de manutenção, a formação de produto e o cálculo da produtividade de uma batelada.",
  praticar: "questoes.html?disciplina=Microbiologia%20Industrial",
  tags: ["Monod", "velocidade específica de crescimento", "mu max", "Ks", "rendimento", "Yx/s", "Luedeking-Piret", "manutenção", "produtividade", "batelada", "Microbiologia Industrial", "Reatores Bioquímicos"],
  conteudo: String.raw`
## Da microbiologia à engenharia

O tema 34 descreve **qualitativamente** as fases da curva de crescimento. Para projetar um processo, porém, é preciso responder a perguntas com números: quanto tempo vai durar a fermentação? Quantas células e quanto produto vão se formar a partir de 100 kg de açúcar? Vale mais a pena operar em batelada ou de forma contínua? A **cinética de crescimento** fornece os parâmetros para responder a essas perguntas.

## Velocidades específicas: comparando de forma justa

Um frasco com muitas células consome açúcar mais rápido do que um frasco com poucas, simplesmente porque há mais células trabalhando. Para comparar a "disposição" das células independentemente da quantidade, divide-se cada velocidade pela concentração de células (\(X\)). São as **velocidades específicas**:

\[ \mu = \frac{1}{X}\frac{dX}{dt}, \qquad q_S = -\frac{1}{X}\frac{dS}{dt}, \qquad q_P = \frac{1}{X}\frac{dP}{dt} \]

- \(\mu\) é a velocidade específica de **crescimento** (quanto cada grama de células gera de novas células por hora);
- \(q_S\) é a velocidade específica de **consumo de substrato**;
- \(q_P\) é a velocidade específica de **formação de produto**.

Na fase exponencial, \(\mu\) é constante, a biomassa segue \(X = X_0\,e^{\mu t}\) (tema 40), e o tempo para a biomassa dobrar é \(t_d = \ln 2/\mu\).

## O modelo de Monod

<svg viewBox="0 0 740 308" xmlns="http://www.w3.org/2000/svg" role="img"><title>Curva de crescimento</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">As fases de um cultivo em batelada</text><rect x="60" y="56" width="420" height="190" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="130" y1="56" x2="130" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="200" y1="56" x2="200" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="270" y1="56" x2="270" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="340" y1="56" x2="340" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="410" y1="56" x2="410" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="480" y1="56" x2="480" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="208" x2="480" y2="208" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="170" x2="480" y2="170" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="132" x2="480" y2="132" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="94" x2="480" y2="94" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="56" x2="60" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="60" y1="246" x2="480" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="130" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="200" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">4</text><text x="270" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">6</text><text x="340" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">8</text><text x="410" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">10</text><text x="480" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">12</text><text x="54" y="211.5" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="54" y="173.5" font-size="10.5" text-anchor="end" fill="#8a8a93">4</text><text x="54" y="135.5" font-size="10.5" text-anchor="end" fill="#8a8a93">6</text><text x="54" y="97.5" font-size="10.5" text-anchor="end" fill="#8a8a93">8</text><text x="484" y="250" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">h</text><text x="56" y="50" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">log N</text><path d="M60.0,208.0L61.9,208.0L63.8,208.0L65.7,208.0L67.6,208.0L69.5,208.0L71.5,208.0L73.4,208.0L75.3,208.0L77.2,208.0L79.1,208.0L81.0,208.0L82.9,208.0L84.8,208.0L86.7,208.0L88.6,208.0L90.5,208.0L92.5,208.0L94.4,208.0L96.3,208.0L98.2,208.0L100.1,208.0L102.0,208.0L103.9,208.0L105.8,208.0L107.7,208.0L109.6,208.0L111.5,208.0L113.5,208.0L115.4,208.0L117.3,208.0L119.2,208.0L121.1,208.0L123.0,208.0L124.9,208.0L126.8,208.0L128.7,208.0L130.6,207.6L132.5,206.3L134.5,205.1L136.4,203.9L138.3,202.6L140.2,201.4L142.1,200.1L144.0,198.9L145.9,197.6L147.8,196.4L149.7,195.1L151.6,193.9L153.5,192.7L155.5,191.4L157.4,190.2L159.3,188.9L161.2,187.7L163.1,186.4L165.0,185.2L166.9,184.0L168.8,182.7L170.7,181.5L172.6,180.2L174.5,179.0L176.5,177.7L178.4,176.5L180.3,175.3L182.2,174.0L184.1,172.8L186.0,171.5L187.9,170.3L189.8,169.0L191.7,167.8L193.6,166.5L195.5,165.3L197.5,164.1L199.4,162.8L201.3,161.6L203.2,160.3L205.1,159.1L207.0,157.8L208.9,156.6L210.8,155.4L212.7,154.1L214.6,152.9L216.5,151.6L218.5,150.4L220.4,149.1L222.3,147.9L224.2,146.6L226.1,145.4L228.0,144.2L229.9,142.9L231.8,141.7L233.7,140.4L235.6,139.2L237.5,137.9L239.5,136.7L241.4,135.5L243.3,134.2L245.2,133.0L247.1,131.7L249.0,130.5L250.9,129.2L252.8,128.0L254.7,126.7L256.6,125.5L258.5,124.3L260.5,123.0L262.4,121.8L264.3,120.5L266.2,119.3L268.1,118.0L270.0,116.8L271.9,115.6L273.8,114.3L275.7,113.1L277.6,111.8L279.5,110.6L281.5,109.3L283.4,108.1L285.3,106.9L287.2,105.6L289.1,104.4L291.0,103.1L292.9,101.9L294.8,100.6L296.7,99.4L298.6,98.1L300.5,96.9L302.5,95.7L304.4,94.4L306.3,94.0L308.2,94.0L310.1,94.0L312.0,94.0L313.9,94.0L315.8,94.0L317.7,94.0L319.6,94.0L321.5,94.0L323.5,94.0L325.4,94.0L327.3,94.0L329.2,94.0L331.1,94.0L333.0,94.0L334.9,94.0L336.8,94.0L338.7,94.0L340.6,94.0L342.5,94.0L344.5,94.0L346.4,94.0L348.3,94.0L350.2,94.0L352.1,94.0L354.0,94.0L355.9,94.0L357.8,94.0L359.7,94.0L361.6,94.0L363.5,94.0L365.5,94.0L367.4,94.0L369.3,94.0L371.2,94.0L373.1,94.0L375.0,94.0L376.9,94.0L378.8,94.0L380.7,94.0L382.6,94.0L384.5,94.0L386.5,94.0L388.4,94.0L390.3,94.0L392.2,94.0L394.1,94.6L396.0,95.3L397.9,96.1L399.8,96.8L401.7,97.5L403.6,98.2L405.5,99.0L407.5,99.7L409.4,100.4L411.3,101.1L413.2,101.9L415.1,102.6L417.0,103.3L418.9,104.0L420.8,104.8L422.7,105.5L424.6,106.2L426.5,106.9L428.5,107.7L430.4,108.4L432.3,109.1L434.2,109.8L436.1,110.6L438.0,111.3L439.9,112.0L441.8,112.7L443.7,113.5L445.6,114.2L447.5,114.9L449.5,115.6L451.4,116.4L453.3,117.1L455.2,117.8L457.1,118.5L459.0,119.3L460.9,120.0L462.8,120.7L464.7,121.4L466.6,122.2L468.5,122.9L470.5,123.6L472.4,124.3L474.3,125.1L476.2,125.8L478.1,126.5L480.0,127.2" fill="none" stroke="#0083cb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="95" y1="56" x2="95" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><text x="95" y="48" font-size="10" text-anchor="middle" fill="#a300bc" font-weight="700">lag</text><line x1="217.5" y1="56" x2="217.5" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><text x="217.5" y="48" font-size="10" text-anchor="middle" fill="#a300bc" font-weight="700">exponencial</text><line x1="347" y1="56" x2="347" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><text x="347" y="48" font-size="10" text-anchor="middle" fill="#a300bc" font-weight="700">estacionaria</text><line x1="445" y1="56" x2="445" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><text x="445" y="48" font-size="10" text-anchor="middle" fill="#a300bc" font-weight="700">declinio</text><line x1="144" y1="185.2" x2="284" y2="109.2" stroke="#f40086" stroke-width="2" stroke-linecap="round" stroke-dasharray="5 4" marker-end="url(#a-rs)"/><text x="249" y="162.4" font-size="10" text-anchor="middle" fill="#f40086" font-weight="700">a inclinação e mu</text><text x="270" y="276" font-size="10.2" text-anchor="middle" fill="#5c5c66">so na fase exponencial o crescimento e realmente exponencial</text><rect x="500" y="62" width="220" height="180" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="610" y="84" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">o que define cada fase</text><text x="610" y="110" font-size="10.4" text-anchor="middle" fill="#a300bc" font-weight="700">lag</text><text x="610" y="124" font-size="9.6" text-anchor="middle" fill="#5c5c66">adaptacao ao meio</text><text x="610" y="144" font-size="10.4" text-anchor="middle" fill="#a300bc" font-weight="700">exponencial</text><text x="610" y="158" font-size="9.6" text-anchor="middle" fill="#5c5c66">mu máximo e constante</text><text x="610" y="178" font-size="10.4" text-anchor="middle" fill="#a300bc" font-weight="700">estacionaria</text><text x="610" y="192" font-size="9.6" text-anchor="middle" fill="#5c5c66">substrato esgotado</text><text x="610" y="212" font-size="10.4" text-anchor="middle" fill="#a300bc" font-weight="700">declinio</text><text x="610" y="226" font-size="9.6" text-anchor="middle" fill="#5c5c66">morte e lise</text><text x="20" y="294" font-size="10.4" text-anchor="start" fill="#5c5c66">O tempo de geracao sai de ln 2 dividido por mu. Na equação de Monod, mu depende da concentração de substrato.</text></svg>
As quatro fases de um cultivo em batelada e o que limita cada uma.

Jacques Monod observou que a velocidade de crescimento depende da concentração do nutriente que está em menor quantidade (o **substrato limitante**, geralmente a fonte de carbono). Com pouco substrato, as células crescem devagar; com mais substrato, crescem mais rápido, mas só até um limite, porque a "maquinaria" da célula tem uma capacidade máxima. A relação é:

\[ \mu = \mu_{max}\,\frac{S}{K_S + S} \]

- \(\mu_{max}\) é a velocidade específica **máxima**, alcançada quando há substrato de sobra.
- \(K_S\) é a concentração de substrato em que a velocidade é **metade da máxima**. Quanto menor o \(K_S\), mais a célula "aproveita" pequenas quantidades de substrato.

Na prática, o \(K_S\) costuma ser muito pequeno em comparação com as concentrações usadas nos meios de cultura (por exemplo, décimos de grama por litro contra dezenas de gramas por litro). Por isso, durante quase toda a batelada, as células crescem praticamente na velocidade máxima, e a desaceleração só aparece quando o substrato está quase acabando.

A forma da equação de Monod é igual à de Michaelis-Menten, que descreve as enzimas (tema 47). A diferença é que Michaelis-Menten é deduzida de um mecanismo, enquanto Monod é **empírica**: resume o efeito de centenas de reações da célula numa só equação.

### Variações do modelo

| Situação | Modelo |
|---|---|
| O próprio substrato atrapalha quando está muito concentrado (Andrews/Haldane) | \(\mu = \dfrac{\mu_{max}S}{K_S + S + S^2/K_I}\) |
| O produto atrapalha o crescimento (por exemplo, o etanol) | \(\mu = \mu_{max}\dfrac{S}{K_S + S}\left(1 - \dfrac{P}{P_{max}}\right)^n\) |
| Parte das células morre | \(\mu_{líquido} = \mu - k_d\) |

## Rendimentos: quanto sai de cada grama de substrato

\[ Y_{X/S} = -\frac{\Delta X}{\Delta S}, \qquad Y_{P/S} = -\frac{\Delta P}{\Delta S}, \qquad Y_{P/X} = \frac{\Delta P}{\Delta X} \]

O rendimento \(Y_{X/S}\) diz quantos gramas de células se formam a partir de cada grama de substrato consumido. Para leveduras crescendo com oxigênio em glicose, um valor típico é 0,5 g/g.

## Manutenção: o "custo fixo" das células

Nem todo o substrato consumido vira células novas. Uma parte é gasta apenas para **manter as células vivas**: bombear íons através da membrana, consertar o DNA, renovar proteínas. É como o custo fixo de uma empresa, que existe mesmo quando ela não está produzindo. Pirt descreveu isso assim:

\[ q_S = \frac{\mu}{Y_{X/S}^{G}} + m_S \]

em que \(Y^G_{X/S}\) é o rendimento "verdadeiro" (só do crescimento) e \(m_S\) é o **coeficiente de manutenção**. A consequência prática: quando as células crescem devagar, a manutenção pesa mais, e o rendimento **observado** diminui.

## Formação de produto: o modelo de Luedeking-Piret

\[ q_P = \alpha\,\mu + \beta \]

- **Produto associado ao crescimento** (\(\beta = 0\)): o produto se forma junto com as células novas. É o caso do etanol produzido pelas leveduras.
- **Produto não associado ao crescimento** (\(\alpha = 0\)): o produto se forma mesmo quando as células não estão crescendo. É típico dos metabólitos secundários, como os antibióticos, produzidos na fase estacionária.
- **Misto:** as duas parcelas contribuem, como na produção de ácido láctico.

Essa classificação ajuda a escolher a forma de operar o processo. Se o produto é associado ao crescimento, interessa manter as células crescendo (com processos contínuos ou batelada alimentada). Se não é associado, costuma-se separar uma fase de crescimento e outra de produção.

## Exemplo resolvido: planejando uma batelada

Uma batelada começa com 0,5 g/L de células e 20 g/L de substrato. Os parâmetros são: \(Y_{X/S} = 0{,}5\) g/g, \(\mu_{max} = 0{,}4\) por hora e \(K_S = 0{,}1\) g/L.

**Passo 1, quanto de células se pode obter?** Se todo o substrato for consumido:

\[ X_{max} = X_0 + Y_{X/S}\,S_0 = 0{,}5 + 0{,}5\times20 = 10{,}5\ \text{g/L} \]

**Passo 2, as células crescem perto da velocidade máxima?** No início, \(\mu = 0{,}4\times\dfrac{20}{20{,}1} \approx 0{,}398\) por hora. Sim, praticamente a máxima.

**Passo 3, quanto tempo leva?** Supondo crescimento na velocidade máxima até o fim:

\[ t \approx \frac{\ln(10{,}5/0{,}5)}{0{,}4} = \frac{\ln 21}{0{,}4} \approx 7{,}6\ \text{h} \]

O tempo de duplicação é \(t_d = \ln2/0{,}4 \approx 1{,}7\) h.

**Passo 4, qual a produtividade?** Entre uma batelada e outra, há um **tempo morto** para descarregar, limpar, esterilizar e carregar o reator. Supondo 4,4 h de tempo morto, o ciclo completo dura 12 h:

\[ P_X = \frac{X_{max} - X_0}{t_{ciclo}} = \frac{10{,}5 - 0{,}5}{12} \approx 0{,}83\ \text{g/(L·h)} \]

Repare que o tempo morto representa mais de um terço do ciclo. Esse é um dos argumentos a favor dos processos contínuos ou das bateladas repetidas.

## Como obter os parâmetros a partir de experimentos

- \(\mu_{max}\): é a inclinação do gráfico de \(\ln X\) contra o tempo, na fase exponencial.
- \(Y_{X/S}\): é a inclinação do gráfico de \(X\) contra \(S\).
- \(K_S\): é difícil de medir em batelada, porque a desaceleração acontece muito rapidamente no final. Costuma-se usar cultivos contínuos com diferentes vazões, ou ajustar o modelo completo aos dados com regressão não linear (tema 50).

> **Atenção, erros comuns:**
> Confundir \(\mu\) (específica, em h\(^{-1}\)) com \(dX/dt\) (volumétrica, em g/(L·h)).
> Tratar \(Y_{X/S}\) como uma constante universal: ele varia com o meio, o microrganismo e a velocidade de crescimento.
> Calcular a produtividade sem incluir o tempo morto entre bateladas.

## Para fixar

- Monod: \(\mu = \mu_{max}S/(K_S + S)\), com variações para inibição e morte.
- Os rendimentos ligam substrato, células e produto; a manutenção reduz o rendimento observado.
- Luedeking-Piret classifica a formação de produto e orienta a forma de operar o processo.
`,
  referencias: [
    "SCHMIDELL, W. et al. (coord.). **Biotecnologia industrial**. v. 2: Engenharia bioquímica. São Paulo: Blucher, 2001.",
    "MONOD, J. The growth of bacterial cultures. **Annual Review of Microbiology**, v. 3, p. 371-394, 1949.",
    "LUEDEKING, R.; PIRET, E. L. A kinetic study of the lactic acid fermentation: batch process at controlled pH. **Journal of Biochemical and Microbiological Technology and Engineering**, v. 1, n. 4, p. 393-412, 1959.",
    "PIRT, S. J. The maintenance energy of bacteria in growing cultures. **Proceedings of the Royal Society of London. Series B**, v. 163, n. 991, p. 224-231, 1965.",
    "SHULER, M. L.; KARGI, F. **Bioprocess engineering**: basic concepts. 2. ed. Upper Saddle River: Prentice Hall, 2002. Cap. 6: How cells grow.",
  ],
},
{
  id: "r47", num: 47,
  area: "Fundamentos de Engenharia e Bioprocessos",
  disciplina: "Enzimologia Industrial",
  titulo: "Cinética enzimática de Michaelis-Menten",
  descricao: "Como medir e descrever a velocidade de uma enzima: a equação de Michaelis-Menten, o significado de Km e Vmax, o gráfico de Lineweaver-Burk, os tipos de inibição e o uso de enzimas na indústria.",
  praticar: "questoes.html?disciplina=Reatores%20Bioqu%C3%ADmicos",
  tags: ["enzima", "Michaelis-Menten", "Km", "Vmax", "kcat", "Lineweaver-Burk", "inibição competitiva", "inibição não competitiva", "enzima imobilizada", "Reatores Bioquímicos"],
  conteudo: String.raw`
## Enzimas: catalisadores biológicos

As enzimas são, em sua maioria, proteínas que **aceleram** reações químicas. Como todo catalisador, elas **diminuem a energia de ativação** (a "barreira" que os reagentes precisam vencer para reagir) e **não mudam o equilíbrio** da reação (tema 14): aceleram igualmente a reação nos dois sentidos. O que as torna tão valiosas é a **especificidade**, já que cada enzima atua sobre um substrato ou um tipo de ligação (muitas vezes distinguindo até as formas espelhadas de uma molécula, tema 16), e o fato de funcionarem em condições brandas de temperatura e pH.

## O mecanismo e a equação

A enzima (E) se liga ao substrato (S), formando um complexo (ES). Esse complexo pode se desfazer, devolvendo E e S, ou transformar o substrato em produto (P), liberando a enzima para um novo ciclo:

\[ \ce{E + S <=>[$k_1$][$k_{-1}$] ES ->[$k_{cat}$] E + P} \]

Supondo que, depois de um início muito rápido, a quantidade de complexo ES fique praticamente constante (a hipótese do **estado quase estacionário**, de Briggs e Haldane), chega-se à equação de Michaelis-Menten:

\[ v = \frac{V_{max}\,[S]}{K_m + [S]}, \qquad V_{max} = k_{cat}\,[E]_T, \qquad K_m = \frac{k_{-1} + k_{cat}}{k_1} \]

## O que cada parâmetro significa

- **\(V_{max}\)** é a velocidade máxima, atingida quando há tanto substrato que todas as moléculas de enzima estão ocupadas (a enzima está **saturada**). Depende da **quantidade de enzima**: com o dobro de enzima, o dobro de \(V_{max}\).
- **\(K_m\)** é a concentração de substrato em que a velocidade é **metade da máxima**. **Não** depende da quantidade de enzima: é uma característica do par enzima-substrato. Um \(K_m\) baixo significa que a enzima trabalha bem mesmo com pouco substrato.
- **\(k_{cat}\)** (o **número de renovação**) é quantas moléculas de substrato cada molécula de enzima transforma por segundo, quando saturada.
- **\(k_{cat}/K_m\)** (a **eficiência catalítica**) mede o desempenho da enzima quando há pouco substrato. As enzimas mais eficientes chegam a \(10^8\)–\(10^9\ \text{M}^{-1}\text{s}^{-1}\), limite em que a reação acontece praticamente a cada encontro entre enzima e substrato.

![Curva de saturação de Michaelis-Menten: a velocidade se aproxima de Vmax assintoticamente; Km é a concentração de substrato em que v = Vmax/2.](https://upload.wikimedia.org/wikipedia/commons/9/99/Michaelis-Menten_saturation_curve_of_an_enzyme_reaction.svg)
Fonte: fullofstars, domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Michaelis-Menten_saturation_curve_of_an_enzyme_reaction.svg).

A curva tem dois comportamentos extremos:

- com **pouco substrato** (\([S] \ll K_m\)), a velocidade é proporcional à concentração de substrato: \(v \approx (V_{max}/K_m)[S]\);
- com **muito substrato** (\([S] \gg K_m\)), a velocidade fica praticamente constante, igual a \(V_{max}\): adicionar mais substrato não acelera nada.

Uma comparação ajuda a entender: imagine os caixas de um supermercado. Com poucos clientes, quanto mais clientes chegam, mais atendimentos por minuto. Quando todos os caixas estão ocupados, a fila cresce, mas o número de atendimentos por minuto não aumenta mais. Para atender mais rápido, só abrindo mais caixas (ou seja, colocando mais enzima).

## O gráfico de Lineweaver-Burk

Invertendo os dois lados da equação, obtém-se a equação de uma reta:

\[ \frac{1}{v} = \frac{K_m}{V_{max}}\cdot\frac{1}{[S]} + \frac{1}{V_{max}} \]

![Gráfico duplo-recíproco de Lineweaver-Burk: o intercepto vertical é 1/Vmax, o horizontal é −1/Km e a inclinação é Km/Vmax.](https://upload.wikimedia.org/wikipedia/commons/7/70/Lineweaver-Burke_plot.svg)
Fonte: Pro bug catcher (Wikipédia em inglês), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lineweaver-Burke_plot.svg).

No gráfico de \(1/v\) contra \(1/[S]\), a reta corta o eixo vertical em \(1/V_{max}\) e o eixo horizontal em \(-1/K_m\), e a sua inclinação é \(K_m/V_{max}\). É muito útil para **visualizar** os tipos de inibição. Mas, para **calcular** os parâmetros, tem um defeito: as medidas feitas com pouco substrato, que são as menos precisas, viram os pontos mais distantes do gráfico e acabam dominando o ajuste da reta. Hoje se prefere ajustar diretamente a curva de Michaelis-Menten aos dados, por regressão não linear.

## Exemplo resolvido 1: obtendo Km e Vmax

| \([S]\) (mmol/L) | \(v\) (μmol/min) | \(1/[S]\) | \(1/v\) |
|---|---|---|---|
| 1 | 3,33 | 1,000 | 0,300 |
| 2 | 5,00 | 0,500 | 0,200 |
| 4 | 6,67 | 0,250 | 0,150 |
| 8 | 8,00 | 0,125 | 0,125 |

Os pontos \((1/[S],\ 1/v)\) caem sobre a reta \(1/v = 0{,}2\,(1/[S]) + 0{,}1\). Então:

- \(1/V_{max} = 0{,}1\), logo \(V_{max} = 10\) μmol/min;
- \(K_m/V_{max} = 0{,}2\), logo \(K_m = 0{,}2\times10 = 2\) mmol/L.

**Conferência:** com \([S] = 2\) mmol/L (igual ao \(K_m\)), a velocidade medida foi 5 μmol/min, exatamente metade de \(V_{max}\). ✓

## Exemplo resolvido 2: quanto tempo a reação leva num reator

Num reator em batelada, o substrato vai sendo consumido e a velocidade vai caindo. Integrando a equação de Michaelis-Menten no tempo, chega-se a:

\[ V_{max}\,t = ([S]_0 - [S]) + K_m\ln\frac{[S]_0}{[S]} \]

Com \(V_{max} = 0{,}5\) mmol/(L·min), \(K_m = 2\) mmol/L e \([S]_0 = 10\) mmol/L, quanto tempo leva para converter 90% do substrato (ou seja, chegar a \([S] = 1\) mmol/L)?

\[ t = \frac{(10 - 1) + 2\ln10}{0{,}5} = \frac{9 + 4{,}6}{0{,}5} \approx 27\ \text{minutos} \]

## Inibição: quando algo atrapalha a enzima

| Tipo | Onde o inibidor se liga | \(K_m\) aparente | \(V_{max}\) aparente | No gráfico de Lineweaver-Burk |
|---|---|---|---|---|
| Competitiva | no sítio ativo, disputando o lugar com o substrato | aumenta | não muda | as retas se cruzam no eixo vertical |
| Não competitiva | em outro lugar da enzima, livre ou ligada ao substrato | não muda | diminui | as retas se cruzam no eixo horizontal |
| Incompetitiva | só no complexo enzima-substrato | diminui | diminui | retas paralelas |

Uma diferença prática importante: a inibição competitiva pode ser **vencida colocando mais substrato**, que "ganha a disputa" pelo sítio ativo. A não competitiva, não.

## Na prática: enzimas na indústria

- **Temperatura e pH:** a velocidade aumenta com a temperatura até um ponto ótimo e depois cai, porque a enzima começa a se desnaturar (tema 27). Em relação ao pH, a curva costuma ter forma de sino, porque as cargas dos aminoácidos do sítio ativo mudam com o pH.
- **Como se mede a atividade:** 1 unidade (U) de enzima é a quantidade que transforma 1 micromol de substrato por minuto, nas condições do ensaio. A **atividade específica** (unidades por miligrama de proteína) indica o grau de pureza da preparação: quanto mais pura, maior.
- **Enzimas imobilizadas:** presas a um suporte sólido, podem ser separadas do produto e reutilizadas várias vezes, inclusive em reatores contínuos. Em compensação, a dificuldade do substrato em chegar até a enzima pode alterar os parâmetros medidos.
- **Exemplos de uso:** amilases e glicoamilase na produção de xaropes de glicose a partir do amido; glicose isomerase na produção de xarope rico em frutose; proteases e lipases em detergentes; celulases na produção de etanol de segunda geração.

> **Atenção, erros comuns:**
> Achar que \(K_m\) depende da quantidade de enzima: quem depende é \(V_{max}\).
> Ler o corte da reta no eixo horizontal como \(+1/K_m\): ele fica em \(-1/K_m\).
> Calcular os parâmetros só pelo gráfico de Lineweaver-Burk, com poucos pontos e concentrações muito baixas.

## Para fixar

- \(v = V_{max}[S]/(K_m + [S])\).
- \(K_m\) é a concentração de substrato que dá metade da velocidade máxima; \(V_{max} = k_{cat}[E]_T\).
- O gráfico de Lineweaver-Burk serve para visualizar; a regressão não linear, para calcular.
- O tipo de inibição se reconhece pelo efeito sobre \(K_m\) e \(V_{max}\).
`,
  referencias: [
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019.",
    "LIMA, U. A. et al. (coord.). **Biotecnologia industrial**. v. 3: Processos fermentativos e enzimáticos. São Paulo: Blucher, 2001.",
    "MICHAELIS, L.; MENTEN, M. L. Die Kinetik der Invertinwirkung. **Biochemische Zeitschrift**, v. 49, p. 333-369, 1913.",
    "JOHNSON, K. A.; GOODY, R. S. The original Michaelis constant: translation of the 1913 Michaelis-Menten paper. **Biochemistry**, v. 50, n. 39, p. 8264-8269, 2011.",
    "BRIGGS, G. E.; HALDANE, J. B. S. A note on the kinetics of enzyme action. **Biochemical Journal**, v. 19, n. 2, p. 338-339, 1925.",
    "LINEWEAVER, H.; BURK, D. The determination of enzyme dissociation constants. **Journal of the American Chemical Society**, v. 56, n. 3, p. 658-666, 1934.",
  ],
},
{
  id: "r48", num: 48,
  area: "Fundamentos de Engenharia e Bioprocessos",
  disciplina: "Termodinâmica Aplicada à Biotecnologia",
  titulo: "Termodinâmica de processos bioquímicos",
  descricao: "Por que algumas reações acontecem sozinhas e outras não: entropia, energia livre de Gibbs, a relação com o equilíbrio, como a célula usa o ATP para \"pagar\" reações desfavoráveis e a estabilidade das proteínas.",
  praticar: "questoes.html?disciplina=Termodin%C3%A2mica",
  tags: ["termodinâmica", "energia livre de Gibbs", "entalpia", "entropia", "espontaneidade", "segunda lei", "constante de equilíbrio", "ATP", "acoplamento", "bioenergética", "Termodinâmica"],
  conteudo: String.raw`
## A pergunta: essa reação acontece sozinha?

A primeira lei da termodinâmica (tema 25) diz que a energia se conserva, mas não diz **em que sentido** as coisas acontecem. O café quente esfria sozinho, mas nunca esquenta sozinho; o açúcar se dissolve na água, mas não se separa dela espontaneamente. A **segunda lei** explica esse sentido: num processo espontâneo, a **entropia do universo aumenta**.

\[ \Delta S_{universo} = \Delta S_{sistema} + \Delta S_{vizinhança} \gt 0 \]

A **entropia** está ligada ao número de maneiras diferentes em que as partículas de um sistema podem se arranjar. Ela tende a aumentar quando algo se dissolve, quando é aquecido, ou quando uma molécula grande se quebra em várias pequenas.

## A energia livre de Gibbs

<svg viewBox="0 0 720 290" xmlns="http://www.w3.org/2000/svg" role="img"><title>Energia livre de Gibbs</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Energia livre: o criterio de espontaneidade</text><rect x="30" y="58" width="320" height="120" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="190" y="80" font-size="10.4" text-anchor="middle" fill="#333333" font-weight="700">variacao de G = variacao de H - T x variacao de S</text><circle cx="58" cy="100" r="5" fill="#0a8f5e" stroke="#0a8f5e" stroke-width="1.4"/><text x="72" y="104" font-size="10.4" text-anchor="start" fill="#0a8f5e" font-weight="700">G negativo</text><text x="190" y="104" font-size="10.4" text-anchor="start" fill="#5c5c66">espontanea</text><circle cx="58" cy="124" r="5" fill="#c67600" stroke="#c67600" stroke-width="1.4"/><text x="72" y="128" font-size="10.4" text-anchor="start" fill="#c67600" font-weight="700">G igual a zero</text><text x="190" y="128" font-size="10.4" text-anchor="start" fill="#5c5c66">equilíbrio</text><circle cx="58" cy="148" r="5" fill="#d33a4e" stroke="#d33a4e" stroke-width="1.4"/><text x="72" y="152" font-size="10.4" text-anchor="start" fill="#d33a4e" font-weight="700">G positivo</text><text x="190" y="152" font-size="10.4" text-anchor="start" fill="#5c5c66">não espontanea</text><rect x="380" y="58" width="330" height="120" rx="8" fill="#fff" stroke="#a300bc" stroke-width="1.4"/><text x="545" y="80" font-size="11" text-anchor="middle" fill="#a300bc" font-weight="700">acoplamento com o ATP</text><rect x="400" y="96" width="130" height="32" rx="6" fill="#fdeaed" stroke="#d33a4e" stroke-width="1.2"/><text x="465" y="116" font-size="9.6" text-anchor="middle" fill="#d33a4e" font-weight="700">reação desfavoravel</text><text x="556" y="116" font-size="13" text-anchor="middle" fill="#333333" font-weight="700">+</text><rect x="572" y="96" width="120" height="32" rx="6" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><text x="632" y="116" font-size="9.6" text-anchor="middle" fill="#0a8f5e" font-weight="700">ATP vira ADP</text><line x1="545" y1="134" x2="545" y2="152" stroke="#333333" stroke-width="2" stroke-linecap="round" marker-end="url(#a-ti)"/><text x="545" y="168" font-size="9.8" text-anchor="middle" fill="#333333" font-weight="700">a soma fica negativa e o processo acontece</text><rect x="20" y="194" width="690" height="84" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="365" y="216" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">G negativo não significa rápido</text><text x="365" y="238" font-size="10.4" text-anchor="middle" fill="#5c5c66">A termodinamica diz se a reação pode acontecer; a cinetica diz em quanto tempo.</text><text x="365" y="256" font-size="10.4" text-anchor="middle" fill="#5c5c66">A glicose no ar tem G muito negativo e mesmo assim dura anos no pote: falta caminho, não falta energia.</text><text x="365" y="272" font-size="10.4" text-anchor="middle" fill="#333333">As enzimas fornecem esse caminho, sem alterar o G da reação.</text></svg>
O sinal de G diz se a reação acontece sozinha, e o acoplamento com o ATP resolve as desfavoráveis.

Calcular a entropia do universo inteiro não é prático. Mas, **à temperatura e pressão constantes**, que é exatamente a situação das células e dos biorreatores, o critério pode ser escrito só com as propriedades do próprio sistema, usando a **energia livre de Gibbs**:

\[ \Delta G = \Delta H - T\,\Delta S \]

- \(\Delta G \lt 0\): a reação é **espontânea** (diz-se **exergônica**);
- \(\Delta G \gt 0\): a reação **não** é espontânea (**endergônica**) e só acontece se for "empurrada" por outra;
- \(\Delta G = 0\): o sistema está em **equilíbrio**.

Combinando os sinais de \(\Delta H\) (o calor da reação, tema 25) e de \(\Delta S\):

| \(\Delta H\) | \(\Delta S\) | A reação é espontânea... |
|---|---|---|
| negativo (libera calor) | positivo | sempre |
| positivo (absorve calor) | negativo | nunca |
| negativo | negativo | em temperaturas **baixas** |
| positivo | positivo | em temperaturas **altas** |

**Atenção: espontâneo não quer dizer rápido.** A oxidação da glicose tem um \(\Delta G\) muito negativo, e mesmo assim o açúcar no pote não pega fogo. A termodinâmica diz **se** uma reação pode acontecer; a **velocidade** é assunto da cinética. Nas células, quem controla a velocidade são as enzimas (tema 47).

## Energia livre e equilíbrio

\[ \Delta G = \Delta G^\circ + RT\ln Q, \qquad \Delta G^\circ = -RT\ln K \]

- \(\Delta G^\circ\) é a variação de energia livre em condições **padrão** (todas as substâncias a 1 mol/L). É um valor fixo, tabelado.
- \(\Delta G\) é a variação **real**, que depende das concentrações presentes naquele momento, por meio do **quociente de reação** \(Q\) (tema 14).
- \(K\) é a constante de equilíbrio. Quanto mais negativo o \(\Delta G^\circ\), maior o \(K\) e mais a reação avança.

Em bioquímica, usa-se um **estado padrão bioquímico**, representado por \(\Delta G^{\circ\prime}\): 25 °C e concentrações de 1 mol/L, mas com **pH 7** (em vez de uma concentração de \(\ce{H+}\) de 1 mol/L, que corresponderia a pH 0 e não tem nada a ver com uma célula).

A diferença entre \(\Delta G^{\circ\prime}\) e \(\Delta G\) real é muito importante. Uma reação com \(\Delta G^{\circ\prime}\) positivo pode, sim, acontecer na célula, se o produto for consumido tão rápido que o quociente \(Q\) fique pequeno. É o que acontece numa etapa da glicólise (a reação da aldolase): o \(\Delta G^{\circ\prime}\) é de cerca de +24 kJ/mol, mas, como os produtos são retirados logo pela reação seguinte, o \(\Delta G\) real fica perto de zero e a reação segue adiante.

## O ATP: a "moeda" de energia da célula

\[ \ce{ATP + H2O -> ADP + P_i}, \qquad \Delta G^{\circ\prime} \approx -30{,}5\ \text{kJ/mol} \]

Nas condições reais da célula, o \(\Delta G\) dessa reação é ainda mais negativo, entre −50 e −65 kJ/mol. A célula usa essa energia para "pagar" reações desfavoráveis, **acoplando-as** à quebra do ATP. Quando duas reações são acopladas, os seus valores de \(\Delta G\) se somam: se o total for negativo, o conjunto acontece.

## Exemplo resolvido 1: colocando um fosfato na glicose

O primeiro passo da glicólise é colocar um grupo fosfato na glicose. Sozinha, essa reação é desfavorável:

\[ \ce{Glicose + P_i -> Glicose-6-P + H2O}, \qquad \Delta G^{\circ\prime} = +13{,}8\ \text{kJ/mol} \]

A constante de equilíbrio correspondente é:

\[ K' = e^{-\Delta G^{\circ\prime}/RT} = e^{-13\,800/(8{,}314\times298)} \approx e^{-5{,}57} \approx 0{,}004 \]

Ou seja, no equilíbrio, quase não haveria glicose-6-fosfato. Mas a célula, com a enzima hexoquinase, acopla essa reação à quebra do ATP:

\[ \ce{Glicose + ATP -> Glicose-6-P + ADP}, \qquad \Delta G^{\circ\prime} = 13{,}8 - 30{,}5 = -16{,}7\ \text{kJ/mol} \]

\[ K' = e^{16\,700/(8{,}314\times298)} \approx e^{6{,}74} \approx 850 \]

O acoplamento multiplicou a constante de equilíbrio por cerca de 200 mil vezes, e a reação passou a ser fortemente favorável.

## Exemplo resolvido 2: a que temperatura uma proteína se desnatura?

Quando uma proteína se desdobra, ela absorve calor, porque rompe as interações que a mantinham dobrada (\(\Delta H \gt 0\)), e ganha entropia, porque a cadeia passa a ter muito mais formas possíveis (\(\Delta S \gt 0\)). Pela tabela de sinais, isso é espontâneo em **temperaturas altas**. A temperatura em que o desdobramento passa a ser favorável é aquela em que \(\Delta G = 0\), a **temperatura de desnaturação**:

\[ T_m = \frac{\Delta H}{\Delta S} \]

Com \(\Delta H = 400\) kJ/mol e \(\Delta S = 1{,}2\) kJ/(mol·K): \(T_m \approx 333\) K, ou 60 °C. As enzimas de microrganismos que vivem em fontes termais têm \(T_m\) muito mais alta, e por isso são tão procuradas pela indústria (a *Taq* polimerase da PCR é o exemplo mais conhecido).

## Energia, vida e bioprocessos

- **Como a vida mantém a organização:** as células são altamente organizadas, o que parece contrariar a tendência ao aumento da entropia. Mas elas compensam isso **aumentando a entropia ao redor**, liberando calor e moléculas pequenas como \(\ce{CO2}\) e água. O universo como um todo continua ganhando entropia.
- **Respirar rende mais que fermentar:** a oxidação completa da glicose libera cerca de 2870 kJ/mol (\(\Delta G^{\circ\prime}\)), contra cerca de 196 kJ/mol da fermentação láctica. É a razão termodinâmica para a respiração produzir muito mais ATP (tema 28).
- **Escolha da temperatura em reações reversíveis:** a constante de equilíbrio muda com a temperatura, segundo a equação de van't Hoff, \(\ln\frac{K_2}{K_1} = -\frac{\Delta H^\circ}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)\). Na produção de xarope de frutose pela glicose isomerase, por exemplo, temperaturas mais altas deslocam um pouco o equilíbrio a favor da frutose, mas também desnaturam a enzima mais rápido. A temperatura de operação é um meio-termo entre as duas coisas.

> **Atenção, erros comuns:**
> Confundir \(\Delta G^\circ\) (padrão, um valor fixo) com \(\Delta G\) (real, que depende das concentrações).
> Achar que \(\Delta G \lt 0\) garante que a reação será rápida.
> Misturar J e kJ ao usar \(R = 8{,}314\) J/(mol·K), ou usar °C em vez de kelvin.

## Para fixar

- \(\Delta G = \Delta H - T\Delta S\); negativo significa espontâneo.
- \(\Delta G^\circ = -RT\ln K\); o \(\Delta G\) real depende das concentrações.
- O ATP permite que a célula realize reações desfavoráveis, acoplando-as a uma reação muito favorável.
`,
  referencias: [
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019.",
    "ATKINS, P.; DE PAULA, J. **Físico-química biológica**. Rio de Janeiro: LTC, 2008.",
    "SMITH, J. M.; VAN NESS, H. C.; ABBOTT, M. M. **Introdução à termodinâmica da engenharia química**. 7. ed. Rio de Janeiro: LTC, 2007.",
    "VON STOCKAR, U.; LIU, J.-S. Does microbial life always feed on negative entropy? Thermodynamic analysis of microbial growth. **Biochimica et Biophysica Acta (BBA) - Bioenergetics**, v. 1412, n. 3, p. 191-211, 1999.",
  ],
},
{
  id: "r49", num: 49,
  area: "Fundamentos de Engenharia e Bioprocessos",
  disciplina: "Bioestatística e Delineamento Experimental",
  titulo: "Estatística descritiva e inferencial",
  descricao: "Como resumir e interpretar dados de laboratório: média, desvio-padrão e coeficiente de variação, intervalos de confiança, testes de hipóteses, o que o valor-p significa e como planejar experimentos.",
  tags: ["estatística", "bioestatística", "média", "mediana", "desvio-padrão", "variância", "coeficiente de variação", "intervalo de confiança", "teste t", "valor-p", "ANOVA", "planejamento experimental"],
  conteudo: String.raw`
## Por que estatística no laboratório

Se você mede a mesma coisa três vezes, quase nunca obtém três valores iguais. A atividade de uma enzima, a concentração de células ou o rendimento de uma fermentação sempre variam um pouco de uma repetição para outra. A estatística serve para duas coisas: **resumir** os dados de forma clara (estatística **descritiva**) e decidir se as diferenças observadas são reais ou só fruto dessa variação natural (estatística **inferencial**).

## Alguns conceitos de base

- **População** é todo o conjunto que nos interessa (por exemplo, todas as fermentações possíveis com uma certa linhagem). **Amostra** é a parte que realmente medimos (as três fermentações que fizemos). As medidas da população se chamam **parâmetros** (como a média verdadeira \(\mu\)); as medidas calculadas na amostra se chamam **estatísticas** (como a média \(\bar{x}\)).
- As variáveis podem ser **qualitativas** (como a cor de uma colônia) ou **quantitativas**. As quantitativas podem ser **discretas** (contagens, como o número de colônias) ou **contínuas** (medidas, como a concentração).

## Resumindo os dados

**Onde os dados estão centrados:**

- **Média:** a soma dos valores dividida pelo número de valores, \(\bar{x} = \dfrac{1}{n}\sum x_i\).
- **Mediana:** o valor do meio, quando os dados são colocados em ordem. É **pouco afetada por valores extremos**. Se uma das medidas deu errado e ficou muito alta, a média muda bastante, mas a mediana quase não muda.
- **Moda:** o valor mais frequente.

**O quanto os dados se espalham:**

\[ s^2 = \frac{\sum (x_i - \bar{x})^2}{n - 1}, \qquad s = \sqrt{s^2}, \qquad CV = \frac{s}{\bar{x}}\times100\%, \qquad EP = \frac{s}{\sqrt{n}} \]

- A **variância** (\(s^2\)) é a média dos quadrados das distâncias de cada valor até a média. Divide-se por \(n - 1\), e não por \(n\), porque uma amostra pequena tende a subestimar a variação real; o \(n - 1\) corrige isso.
- O **desvio-padrão** (\(s\)) é a raiz da variância e tem a mesma unidade dos dados. Diz o quanto, tipicamente, cada medida se afasta da média.
- O **coeficiente de variação** (CV) é o desvio-padrão em porcentagem da média. É útil para comparar a precisão de medidas diferentes: um CV de 5% indica boa reprodutibilidade entre réplicas.
- O **erro-padrão da média** (EP) mede a incerteza **da média**, e não a variação dos dados. Ele diminui quando se fazem mais repetições. Ao apresentar barras de erro num gráfico, deixe claro se elas representam o desvio-padrão ou o erro-padrão, porque são coisas diferentes.

## A distribuição normal

<svg viewBox="0 0 740 310" xmlns="http://www.w3.org/2000/svg" role="img"><title>Estatistica</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Distribuicao, dispersao e intervalo de confianca</text><rect x="56" y="62" width="310" height="158" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="94.75" y1="62" x2="94.75" y2="220" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="133.5" y1="62" x2="133.5" y2="220" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="172.25" y1="62" x2="172.25" y2="220" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="211" y1="62" x2="211" y2="220" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="249.75" y1="62" x2="249.75" y2="220" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="288.5" y1="62" x2="288.5" y2="220" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="327.25" y1="62" x2="327.25" y2="220" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="56" y1="184.889" x2="366" y2="184.889" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="56" y1="149.778" x2="366" y2="149.778" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="56" y1="114.667" x2="366" y2="114.667" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="56" y1="79.5556" x2="366" y2="79.5556" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="211" y1="62" x2="211" y2="220" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="56" y1="220" x2="366" y2="220" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="94.75" y="235" font-size="10.5" text-anchor="middle" fill="#8a8a93">-3</text><text x="133.5" y="235" font-size="10.5" text-anchor="middle" fill="#8a8a93">-2</text><text x="172.25" y="235" font-size="10.5" text-anchor="middle" fill="#8a8a93">-1</text><text x="249.75" y="235" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="288.5" y="235" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="327.25" y="235" font-size="10.5" text-anchor="middle" fill="#8a8a93">3</text><text x="50" y="188.389" font-size="10.5" text-anchor="end" fill="#8a8a93">0.1</text><text x="50" y="153.278" font-size="10.5" text-anchor="end" fill="#8a8a93">0.2</text><text x="50" y="118.167" font-size="10.5" text-anchor="end" fill="#8a8a93">0.3</text><text x="50" y="83.0556" font-size="10.5" text-anchor="end" fill="#8a8a93">0.4</text><text x="370" y="224" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">z</text><text x="52" y="56" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600"></text><text x="56" y="54" font-size="10" text-anchor="start" fill="#5c5c66">densidade de probabilidade</text><path d="M172.2,220.0L172.2,135.0L172.9,133.6L173.5,132.2L174.2,130.8L174.8,129.4L175.5,128.0L176.1,126.6L176.8,125.2L177.4,123.8L178.1,122.4L178.7,121.0L179.4,119.6L180.0,118.3L180.6,116.9L181.3,115.6L181.9,114.3L182.6,113.0L183.2,111.7L183.9,110.4L184.5,109.1L185.2,107.8L185.8,106.6L186.5,105.4L187.1,104.2L187.8,103.0L188.4,101.8L189.0,100.7L189.7,99.6L190.3,98.5L191.0,97.4L191.6,96.4L192.3,95.4L192.9,94.4L193.6,93.4L194.2,92.5L194.9,91.6L195.5,90.7L196.1,89.8L196.8,89.0L197.4,88.2L198.1,87.5L198.7,86.8L199.4,86.1L200.0,85.4L200.7,84.8L201.3,84.2L202.0,83.7L202.6,83.2L203.2,82.7L203.9,82.3L204.5,81.9L205.2,81.5L205.8,81.2L206.5,80.9L207.1,80.6L207.8,80.4L208.4,80.2L209.1,80.1L209.7,80.0L210.4,79.9L211.0,79.9L211.6,79.9L212.3,80.0L212.9,80.1L213.6,80.2L214.2,80.4L214.9,80.6L215.5,80.9L216.2,81.2L216.8,81.5L217.5,81.9L218.1,82.3L218.8,82.7L219.4,83.2L220.0,83.7L220.7,84.2L221.3,84.8L222.0,85.4L222.6,86.1L223.3,86.8L223.9,87.5L224.6,88.2L225.2,89.0L225.9,89.8L226.5,90.7L227.1,91.6L227.8,92.5L228.4,93.4L229.1,94.4L229.7,95.4L230.4,96.4L231.0,97.4L231.7,98.5L232.3,99.6L233.0,100.7L233.6,101.8L234.2,103.0L234.9,104.2L235.5,105.4L236.2,106.6L236.8,107.8L237.5,109.1L238.1,110.4L238.8,111.7L239.4,113.0L240.1,114.3L240.7,115.6L241.4,116.9L242.0,118.3L242.6,119.6L243.3,121.0L243.9,122.4L244.6,123.8L245.2,125.2L245.9,126.6L246.5,128.0L247.2,129.4L247.8,130.8L248.5,132.2L249.1,133.6L249.8,135.0L249.8,220.0 Z" fill="#0083cb" fill-opacity="0.3" stroke="none"/><path d="M133.5,220.0L133.5,201.0L133.8,200.7L134.1,200.4L134.5,200.1L134.8,199.7L135.1,199.4L135.4,199.1L135.8,198.7L136.1,198.4L136.4,198.0L136.7,197.7L137.1,197.3L137.4,197.0L137.7,196.6L138.0,196.2L138.3,195.8L138.7,195.5L139.0,195.1L139.3,194.7L139.6,194.3L140.0,193.9L140.3,193.5L140.6,193.1L140.9,192.7L141.2,192.3L141.6,191.9L141.9,191.4L142.2,191.0L142.5,190.6L142.9,190.1L143.2,189.7L143.5,189.3L143.8,188.8L144.2,188.4L144.5,187.9L144.8,187.4L145.1,187.0L145.4,186.5L145.8,186.0L146.1,185.6L146.4,185.1L146.7,184.6L147.1,184.1L147.4,183.6L147.7,183.1L148.0,182.6L148.4,182.1L148.7,181.6L149.0,181.1L149.3,180.5L149.6,180.0L150.0,179.5L150.3,178.9L150.6,178.4L150.9,177.9L151.3,177.3L151.6,176.8L151.9,176.2L152.2,175.7L152.6,175.1L152.9,174.5L153.2,174.0L153.5,173.4L153.8,172.8L154.2,172.2L154.5,171.6L154.8,171.0L155.1,170.5L155.5,169.9L155.8,169.3L156.1,168.6L156.4,168.0L156.8,167.4L157.1,166.8L157.4,166.2L157.7,165.6L158.0,164.9L158.4,164.3L158.7,163.7L159.0,163.1L159.3,162.4L159.7,161.8L160.0,161.1L160.3,160.5L160.6,159.8L160.9,159.2L161.3,158.5L161.6,157.9L161.9,157.2L162.2,156.5L162.6,155.9L162.9,155.2L163.2,154.5L163.5,153.9L163.9,153.2L164.2,152.5L164.5,151.8L164.8,151.1L165.1,150.5L165.5,149.8L165.8,149.1L166.1,148.4L166.4,147.7L166.8,147.0L167.1,146.3L167.4,145.6L167.7,144.9L168.1,144.2L168.4,143.5L168.7,142.8L169.0,142.1L169.3,141.4L169.7,140.7L170.0,140.0L170.3,139.3L170.6,138.6L171.0,137.9L171.3,137.2L171.6,136.5L171.9,135.7L172.2,135.0L172.2,220.0 Z" fill="#0083cb" fill-opacity="0.16" stroke="none"/><path d="M249.8,220.0L249.8,135.0L250.1,135.7L250.4,136.5L250.7,137.2L251.0,137.9L251.4,138.6L251.7,139.3L252.0,140.0L252.3,140.7L252.7,141.4L253.0,142.1L253.3,142.8L253.6,143.5L253.9,144.2L254.3,144.9L254.6,145.6L254.9,146.3L255.2,147.0L255.6,147.7L255.9,148.4L256.2,149.1L256.5,149.8L256.9,150.5L257.2,151.1L257.5,151.8L257.8,152.5L258.1,153.2L258.5,153.9L258.8,154.5L259.1,155.2L259.4,155.9L259.8,156.5L260.1,157.2L260.4,157.9L260.7,158.5L261.1,159.2L261.4,159.8L261.7,160.5L262.0,161.1L262.3,161.8L262.7,162.4L263.0,163.1L263.3,163.7L263.6,164.3L264.0,164.9L264.3,165.6L264.6,166.2L264.9,166.8L265.2,167.4L265.6,168.0L265.9,168.6L266.2,169.3L266.5,169.9L266.9,170.5L267.2,171.0L267.5,171.6L267.8,172.2L268.2,172.8L268.5,173.4L268.8,174.0L269.1,174.5L269.4,175.1L269.8,175.7L270.1,176.2L270.4,176.8L270.7,177.3L271.1,177.9L271.4,178.4L271.7,178.9L272.0,179.5L272.4,180.0L272.7,180.5L273.0,181.1L273.3,181.6L273.6,182.1L274.0,182.6L274.3,183.1L274.6,183.6L274.9,184.1L275.3,184.6L275.6,185.1L275.9,185.6L276.2,186.0L276.6,186.5L276.9,187.0L277.2,187.4L277.5,187.9L277.8,188.4L278.2,188.8L278.5,189.3L278.8,189.7L279.1,190.1L279.5,190.6L279.8,191.0L280.1,191.4L280.4,191.9L280.8,192.3L281.1,192.7L281.4,193.1L281.7,193.5L282.0,193.9L282.4,194.3L282.7,194.7L283.0,195.1L283.3,195.5L283.7,195.8L284.0,196.2L284.3,196.6L284.6,197.0L284.9,197.3L285.3,197.7L285.6,198.0L285.9,198.4L286.2,198.7L286.6,199.1L286.9,199.4L287.2,199.7L287.5,200.1L287.9,200.4L288.2,200.7L288.5,201.0L288.5,220.0 Z" fill="#0083cb" fill-opacity="0.16" stroke="none"/><path d="M56.0,220.0L57.4,219.9L58.8,219.9L60.2,219.9L61.6,219.9L63.0,219.9L64.5,219.9L65.9,219.9L67.3,219.9L68.7,219.8L70.1,219.8L71.5,219.8L72.9,219.8L74.3,219.7L75.7,219.7L77.1,219.6L78.5,219.6L80.0,219.5L81.4,219.5L82.8,219.4L84.2,219.3L85.6,219.3L87.0,219.2L88.4,219.1L89.8,218.9L91.2,218.8L92.6,218.7L94.0,218.5L95.5,218.4L96.9,218.2L98.3,218.0L99.7,217.7L101.1,217.5L102.5,217.2L103.9,216.9L105.3,216.6L106.7,216.3L108.1,215.9L109.5,215.5L111.0,215.0L112.4,214.5L113.8,214.0L115.2,213.4L116.6,212.8L118.0,212.1L119.4,211.4L120.8,210.7L122.2,209.8L123.6,209.0L125.0,208.0L126.5,207.0L127.9,206.0L129.3,204.8L130.7,203.7L132.1,202.4L133.5,201.0L134.9,199.6L136.3,198.1L137.7,196.6L139.1,194.9L140.5,193.2L142.0,191.4L143.4,189.5L144.8,187.5L146.2,185.4L147.6,183.3L149.0,181.1L150.4,178.7L151.8,176.4L153.2,173.9L154.6,171.4L156.0,168.8L157.5,166.1L158.9,163.3L160.3,160.5L161.7,157.7L163.1,154.8L164.5,151.8L165.9,148.8L167.3,145.8L168.7,142.7L170.1,139.7L171.5,136.6L173.0,133.5L174.4,130.4L175.8,127.3L177.2,124.3L178.6,121.3L180.0,118.3L181.4,115.4L182.8,112.5L184.2,109.7L185.6,106.9L187.0,104.3L188.5,101.7L189.9,99.3L191.3,97.0L192.7,94.7L194.1,92.6L195.5,90.7L196.9,88.9L198.3,87.2L199.7,85.7L201.1,84.4L202.5,83.2L204.0,82.2L205.4,81.4L206.8,80.8L208.2,80.3L209.6,80.0L211.0,79.9L212.4,80.0L213.8,80.3L215.2,80.8L216.6,81.4L218.0,82.2L219.5,83.2L220.9,84.4L222.3,85.7L223.7,87.2L225.1,88.9L226.5,90.7L227.9,92.6L229.3,94.7L230.7,97.0L232.1,99.3L233.5,101.7L235.0,104.3L236.4,106.9L237.8,109.7L239.2,112.5L240.6,115.4L242.0,118.3L243.4,121.3L244.8,124.3L246.2,127.3L247.6,130.4L249.0,133.5L250.5,136.6L251.9,139.7L253.3,142.7L254.7,145.8L256.1,148.8L257.5,151.8L258.9,154.8L260.3,157.7L261.7,160.5L263.1,163.3L264.5,166.1L266.0,168.8L267.4,171.4L268.8,173.9L270.2,176.4L271.6,178.7L273.0,181.1L274.4,183.3L275.8,185.4L277.2,187.5L278.6,189.5L280.0,191.4L281.5,193.2L282.9,194.9L284.3,196.6L285.7,198.1L287.1,199.6L288.5,201.0L289.9,202.4L291.3,203.7L292.7,204.8L294.1,206.0L295.5,207.0L297.0,208.0L298.4,209.0L299.8,209.8L301.2,210.7L302.6,211.4L304.0,212.1L305.4,212.8L306.8,213.4L308.2,214.0L309.6,214.5L311.0,215.0L312.5,215.5L313.9,215.9L315.3,216.3L316.7,216.6L318.1,216.9L319.5,217.2L320.9,217.5L322.3,217.7L323.7,218.0L325.1,218.2L326.5,218.4L328.0,218.5L329.4,218.7L330.8,218.8L332.2,218.9L333.6,219.1L335.0,219.2L336.4,219.3L337.8,219.3L339.2,219.4L340.6,219.5L342.0,219.5L343.5,219.6L344.9,219.6L346.3,219.7L347.7,219.7L349.1,219.8L350.5,219.8L351.9,219.8L353.3,219.8L354.7,219.9L356.1,219.9L357.5,219.9L359.0,219.9L360.4,219.9L361.8,219.9L363.2,219.9L364.6,219.9L366.0,220.0" fill="none" stroke="#0083cb" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><text x="211" y="163.822" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">68%</text><text x="269.125" y="198.933" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">95%</text><text x="210" y="254" font-size="10.5" text-anchor="middle" fill="#5c5c66">a curva normal e a forma mais comum de variacao</text><rect x="400" y="56" width="320" height="170" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="560" y="78" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">o que um boxplot mostra</text><line x1="450" y1="130" x2="500" y2="130" stroke="#333333" stroke-width="1.6" stroke-linecap="round"/><line x1="450" y1="118" x2="450" y2="142" stroke="#333333" stroke-width="1.6" stroke-linecap="round"/><rect x="500" y="108" width="120" height="44" rx="4" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.6"/><line x1="556" y1="108" x2="556" y2="152" stroke="#f40086" stroke-width="2.6" stroke-linecap="round"/><line x1="620" y1="130" x2="672" y2="130" stroke="#333333" stroke-width="1.6" stroke-linecap="round"/><line x1="672" y1="118" x2="672" y2="142" stroke="#333333" stroke-width="1.6" stroke-linecap="round"/><circle cx="692" cy="130" r="4" fill="#d33a4e" stroke="#d33a4e" stroke-width="1.4"/><text x="450" y="164" font-size="9" text-anchor="middle" fill="#5c5c66">mínimo</text><text x="500" y="98" font-size="9" text-anchor="middle" fill="#5c5c66">1o quartil</text><text x="556" y="98" font-size="9" text-anchor="middle" fill="#f40086" font-weight="700">mediana</text><text x="620" y="98" font-size="9" text-anchor="middle" fill="#5c5c66">3o quartil</text><text x="672" y="164" font-size="9" text-anchor="middle" fill="#5c5c66">máximo</text><text x="692" y="150" font-size="9" text-anchor="middle" fill="#d33a4e" font-weight="700">outlier</text><text x="560" y="200" font-size="9.8" text-anchor="middle" fill="#5c5c66">mostra a dispersao sem supor normalidade</text><rect x="20" y="240" width="700" height="62" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="262" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">média com tres replicatas não e média com trinta</text><text x="370" y="282" font-size="10.4" text-anchor="middle" fill="#5c5c66">O erro padrao cai com a raiz do numero de amostras. O intervalo de confianca expressa essa incerteza,</text><text x="370" y="298" font-size="10.4" text-anchor="middle" fill="#5c5c66">e o valor-p responde se a diferença observada seria provavel apenas por acaso.</text></svg>
A distribuição normal e o boxplot descrevem a variação de maneiras complementares.

Muitas medidas seguem aproximadamente a **distribuição normal**, a famosa curva em forma de sino. Nela, cerca de 68% dos valores ficam a até um desvio-padrão da média, 95% a até dois desvios-padrão e 99,7% a até três.

## Intervalo de confiança: uma faixa em vez de um número

A média de três medidas é só uma estimativa da média verdadeira. O **intervalo de confiança** dá uma faixa de valores em que a média verdadeira provavelmente está. Com poucos dados, usa-se a distribuição \(t\) de Student:

\[ \bar{x} \pm t_{\alpha/2,\ n-1}\,\frac{s}{\sqrt{n}} \]

O valor de \(t\) vem de uma tabela e depende do número de repetições: com poucas repetições, ele é grande, e o intervalo fica largo. Um intervalo de confiança de 95% significa que, se o experimento fosse repetido muitas vezes, intervalos calculados dessa forma conteriam a média verdadeira em 95% das vezes.

## Testes de hipóteses: a diferença é real?

1. Formule a **hipótese nula** (\(H_0\)), que geralmente diz "não há diferença", e a **hipótese alternativa** (\(H_1\)), que diz "há diferença".
2. Escolha o **nível de significância** \(\alpha\), geralmente 0,05 (5%).
3. Calcule a estatística do teste e o **valor-p**.
4. Se \(p \lt \alpha\), rejeite \(H_0\): a diferença é considerada **estatisticamente significativa**.

**O que o valor-p significa:** é a probabilidade de obter uma diferença tão grande quanto a observada (ou maior) **se a hipótese nula fosse verdadeira**, isto é, se a diferença fosse só obra do acaso. Um valor-p pequeno indica que seria improvável ver essa diferença apenas por acaso. O valor-p **não** é a probabilidade de a hipótese nula ser verdadeira, e **não** mede o tamanho ou a importância da diferença.

Existem dois tipos de erro possíveis: o **erro tipo I** é concluir que há diferença quando não há (a sua probabilidade é \(\alpha\)); o **erro tipo II** é não detectar uma diferença que existe.

| Pergunta | Teste indicado |
|---|---|
| A média é diferente de um valor de referência? | teste \(t\) para uma amostra |
| Dois grupos independentes são diferentes? | teste \(t\) para duas amostras (versão de Welch, se as variâncias forem diferentes); Mann-Whitney, se os dados não forem normais |
| As mesmas amostras, antes e depois de um tratamento, são diferentes? | teste \(t\) pareado |
| Três ou mais grupos são diferentes? | ANOVA, seguida de um teste de comparações como o de Tukey; Kruskal-Wallis, se os dados não forem normais |
| As proporções observadas seguem as esperadas? | qui-quadrado (tema 38) |
| Duas variáveis contínuas estão relacionadas? | correlação e regressão linear (\(R^2\)) |

Os testes \(t\) e a ANOVA supõem que os dados seguem aproximadamente uma distribuição normal (o que pode ser verificado, por exemplo, pelo teste de Shapiro-Wilk) e, em geral, que os grupos têm variâncias parecidas.

## Exemplo resolvido: qual linhagem produz mais enzima?

Duas linhagens foram testadas em três cultivos independentes cada uma. A atividade enzimática medida (em U/mL) foi:

| Linhagem | Réplicas | Média | Desvio-padrão | CV |
|---|---|---|---|---|
| A | 12,1; 13,4; 12,8 | 12,77 | 0,65 | 5,1% |
| B | 15,2; 14,6; 16,1 | 15,30 | 0,75 | 4,9% |

A linhagem B parece produzir mais. Mas a diferença é real, ou poderia ser só variação entre cultivos?

**Passo 1, a variância combinada** (média das duas variâncias, já que os grupos têm o mesmo tamanho): \(s_p^2 = (0{,}423 + 0{,}570)/2 \approx 0{,}497\).

**Passo 2, a estatística \(t\):**

\[ t = \frac{15{,}30 - 12{,}77}{\sqrt{0{,}497\left(\frac13 + \frac13\right)}} \approx \frac{2{,}53}{0{,}575} \approx 4{,}4 \]

**Passo 3, comparar com a tabela:** com \(3 + 3 - 2 = 4\) graus de liberdade, o valor crítico para 5% de significância (teste bilateral) é 2,776. Como \(4{,}4 \gt 2{,}776\) (o que corresponde a \(p \approx 0{,}01\)), **rejeita-se a hipótese nula**: há evidência de que a linhagem B produz mais.

**Passo 4, olhar além do valor-p:** a linhagem B produz cerca de 20% a mais. Essa diferença compensa, por exemplo, se a linhagem B for mais difícil de cultivar? A estatística diz se a diferença é real; a decisão sobre se ela é **relevante** para o processo depende de outros critérios.

Para completar, o intervalo de confiança de 95% da média da linhagem A é \(12{,}77 \pm 4{,}303\times\dfrac{0{,}65}{\sqrt3} \approx 12{,}77 \pm 1{,}62\) U/mL.

## Planejando bem os experimentos

- **Repetições:** diferencie as **réplicas biológicas** (cultivos independentes, feitos do zero) das **réplicas técnicas** (várias leituras da mesma amostra). Só as réplicas biológicas medem a variação real do fenômeno. Três leituras do mesmo frasco não equivalem a três frascos.
- **Sorteio:** distribua os tratamentos ao acaso (as posições na incubadora, a ordem das análises), para que fatores escondidos não favoreçam um tratamento.
- **Controles e blocos:** inclua sempre um controle e agrupe as unidades parecidas, para diminuir a variação que não interessa.
- **Planejamentos fatoriais:** em vez de mudar um fator de cada vez, os **planejamentos fatoriais** e as **superfícies de resposta** estudam vários fatores ao mesmo tempo (por exemplo, a temperatura, o pH e a concentração de açúcar), revelando inclusive como um fator interfere no efeito do outro. Usam muito menos experimentos e são a ferramenta padrão para otimizar meios de cultura e condições de processo.

> **Atenção, erros comuns:**
> Calcular o desvio-padrão dividindo por \(n\) em vez de \(n - 1\).
> Concluir que "não significativo" quer dizer "iguais": talvez tenham faltado repetições para detectar a diferença.
> Fazer vários testes \(t\) para comparar muitos grupos, em vez de uma ANOVA: isso aumenta a chance de encontrar diferenças falsas.
> Tratar réplicas técnicas como se fossem independentes.

## Para fixar

- Descreva os dados com a média (ou a mediana), o desvio-padrão e o CV.
- Para tirar conclusões, use intervalos de confiança e o teste adequado ao seu experimento.
- Planeje antes de começar: réplicas biológicas, sorteio e planejamentos fatoriais.
`,
  referencias: [
    "BUSSAB, W. O.; MORETTIN, P. A. **Estatística básica**. 9. ed. São Paulo: Saraiva, 2017.",
    "RODRIGUES, M. I.; IEMMA, A. F. **Planejamento de experimentos e otimização de processos**. 3. ed. Campinas: Cárita, 2014.",
    "MONTGOMERY, D. C.; RUNGER, G. C. **Estatística aplicada e probabilidade para engenheiros**. 6. ed. Rio de Janeiro: LTC, 2016.",
    "VIEIRA, S. **Introdução à bioestatística**. 5. ed. Rio de Janeiro: Elsevier, 2016.",
    "WASSERSTEIN, R. L.; LAZAR, N. A. The ASA statement on p-values: context, process, and purpose. **The American Statistician**, v. 70, n. 2, p. 129-133, 2016.",
  ],
},
{
  id: "r50", num: 50,
  area: "Fundamentos de Engenharia e Bioprocessos",
  disciplina: "Modelagem e Simulação de Bioprocessos",
  titulo: "Modelagem matemática de biorreatores",
  descricao: "Como montar um modelo de biorreator a partir de balanços de massa e cinética: os modos batelada, batelada alimentada e contínuo, o estado estacionário do quimiostato, a lavagem e a validação do modelo.",
  praticar: "questoes.html?disciplina=Reatores%20Bioqu%C3%ADmicos",
  tags: ["modelagem", "simulação", "biorreator", "batelada", "batelada alimentada", "quimiostato", "contínuo", "lavagem", "washout", "estimação de parâmetros", "Reatores Bioquímicos"],
  conteudo: String.raw`
## Para que serve um modelo

Um modelo matemático é um conjunto de equações que descreve o que acontece dentro do biorreator. Com ele, é possível **prever** o comportamento do processo sem precisar fazer todos os experimentos: comparar formas de operação, decidir quando e quanto alimentar, planejar a ampliação de escala, projetar o sistema de controle e até estimar variáveis difíceis de medir durante o processo (os chamados "sensores por software"). Experimentos com biorreatores são caros e demorados; simulações no computador levam segundos.

## Roteiro para montar um modelo

1. **Defina o objetivo:** que pergunta o modelo precisa responder?
2. **Faça hipóteses simplificadoras:** a mistura é perfeita? A temperatura e o pH são constantes? O volume muda?
3. **Escreva os balanços de massa** de cada componente importante (células, substrato, produto, oxigênio), de acordo com a forma de operação.
4. **Escolha as equações cinéticas:** Monod e suas variações, rendimentos e formação de produto (temas 46 e 47).
5. **Obtenha os parâmetros**, da literatura ou de experimentos.
6. **Resolva as equações**, por fórmula ou numericamente (por exemplo, com Runge-Kutta, tema 42).
7. **Valide o modelo** com dados que **não** foram usados para ajustar os parâmetros.
8. **Use o modelo** apenas dentro das condições em que ele foi validado.

## O balanço num reator com mistura perfeita

Para qualquer componente com concentração \(C\), num reator de volume \(V\), com uma vazão de entrada \(F_{in}\) (com concentração \(C_{in}\)), uma vazão de saída \(F_{out}\) e uma velocidade de reação \(r\) (por unidade de volume):

\[ \frac{d(VC)}{dt} = F_{in}\,C_{in} - F_{out}\,C + r\,V \]

Em palavras: a variação da quantidade no reator é o que entra, menos o que sai, mais o que é produzido pela reação. É a equação geral de balanço do tema 43, agora com o termo de acúmulo, escrita como uma equação diferencial (tema 40).

## As três formas de operar

<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Modos de operacao</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Tres modos de operar um biorreator</text><rect x="28" y="56" width="200" height="170" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="128" y="78" font-size="11.5" text-anchor="middle" fill="#0083cb" font-weight="700">batelada</text><rect x="82" y="100" width="92" height="86" rx="6" fill="#fff" stroke="#333333" stroke-width="1.6"/><rect x="84" y="146" width="88" height="40" rx="0" fill="#e4f2fb" stroke="none" stroke-width="0"/><line x1="128" y1="94" x2="128" y2="104" stroke="#333333" stroke-width="2" stroke-linecap="round"/><ellipse cx="128" cy="150" rx="16" ry="4" fill="none" stroke="#333333" stroke-width="2"/><text x="128" y="206" font-size="9.6" text-anchor="middle" fill="#5c5c66">fecha e espera</text><text x="128" y="244" font-size="9.6" text-anchor="middle" fill="#333333">simples, mas o substrato acaba</text><rect x="260" y="56" width="200" height="170" rx="8" fill="#fff" stroke="#a300bc" stroke-width="1.4"/><text x="360" y="78" font-size="11.5" text-anchor="middle" fill="#a300bc" font-weight="700">batelada alimentada</text><rect x="314" y="100" width="92" height="86" rx="6" fill="#fff" stroke="#333333" stroke-width="1.6"/><rect x="316" y="128" width="88" height="58" rx="0" fill="#e4f2fb" stroke="none" stroke-width="0"/><line x1="360" y1="94" x2="360" y2="104" stroke="#333333" stroke-width="2" stroke-linecap="round"/><ellipse cx="360" cy="150" rx="16" ry="4" fill="none" stroke="#333333" stroke-width="2"/><line x1="274" y1="112" x2="310" y2="112" stroke="#0a8f5e" stroke-width="2" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="360" y="206" font-size="9.6" text-anchor="middle" fill="#5c5c66">alimenta sem retirar</text><text x="360" y="244" font-size="9.6" text-anchor="middle" fill="#333333">evita o excesso de açúcar</text><rect x="492" y="56" width="200" height="170" rx="8" fill="#fff" stroke="#0a8f5e" stroke-width="1.4"/><text x="592" y="78" font-size="11.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">continuo</text><rect x="546" y="100" width="92" height="86" rx="6" fill="#fff" stroke="#333333" stroke-width="1.6"/><rect x="548" y="136" width="88" height="50" rx="0" fill="#e4f2fb" stroke="none" stroke-width="0"/><line x1="592" y1="94" x2="592" y2="104" stroke="#333333" stroke-width="2" stroke-linecap="round"/><ellipse cx="592" cy="150" rx="16" ry="4" fill="none" stroke="#333333" stroke-width="2"/><line x1="506" y1="112" x2="542" y2="112" stroke="#0a8f5e" stroke-width="2" stroke-linecap="round" marker-end="url(#a-ve)"/><line x1="642" y1="170" x2="678" y2="170" stroke="#f40086" stroke-width="2" stroke-linecap="round" marker-end="url(#a-rs)"/><text x="592" y="206" font-size="9.6" text-anchor="middle" fill="#5c5c66">alimenta e retira ao mesmo tempo</text><text x="592" y="244" font-size="9.6" text-anchor="middle" fill="#333333">estado estacionario continuo</text><rect x="20" y="258" width="680" height="36" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="360" y="280" font-size="10.4" text-anchor="middle" fill="#333333">O modelo e sempre o mesmo balanco: acumulo = entra - sai + gerado, escrito para células, substrato e produto.</text></svg>
Os três modos de operar um biorreator e o que muda no balanço.

- **Batelada:** coloca-se tudo no início e nada entra nem sai até o fim (exceto o ar). É a forma mais simples.
- **Batelada alimentada:** começa-se com parte do meio e adiciona-se nutriente aos poucos, sem retirar nada. O volume aumenta. É usada quando muito substrato de uma vez atrapalharia as células (como no efeito Crabtree das leveduras, tema 28).
- **Contínuo (quimiostato):** meio novo entra e caldo sai o tempo todo, com a mesma vazão, e o volume fica constante.

| | Batelada | Batelada alimentada | Contínuo (quimiostato) |
|---|---|---|---|
| Vazões | \(F_{in} = F_{out} = 0\) | \(F_{in} = F\), \(F_{out} = 0\) | \(F_{in} = F_{out} = F\) |
| Volume | constante | aumenta: \(dV/dt = F\) | constante |
| Células | \(\dfrac{dX}{dt} = \mu X\) | \(\dfrac{dX}{dt} = \mu X - \dfrac{F}{V}X\) | \(\dfrac{dX}{dt} = (\mu - D)\,X\) |
| Substrato | \(\dfrac{dS}{dt} = -\dfrac{\mu X}{Y_{X/S}}\) | \(\dfrac{dS}{dt} = -\dfrac{\mu X}{Y_{X/S}} + \dfrac{F}{V}(S_F - S)\) | \(\dfrac{dS}{dt} = D(S_0 - S) - \dfrac{\mu X}{Y_{X/S}}\) |

Em todas, \(\mu = \mu_{max}S/(K_S + S)\). O número \(D = F/V\) é a **vazão específica de alimentação**, também chamada de **taxa de diluição**; é o inverso do tempo de residência (tema 40). Na batelada alimentada, o termo \(-\frac{F}{V}X\) representa a **diluição**: mesmo que nenhuma célula morra, a concentração cai porque o volume está aumentando.

## Exemplo resolvido 1: o quimiostato em estado estacionário

Depois de um tempo, o quimiostato atinge um **estado estacionário**, em que as concentrações param de mudar. Com \(dX/dt = 0\) (e havendo células, \(X \ne 0\)), a equação das células dá:

\[ \mu = D \]

Esse é o resultado mais importante do quimiostato: **a vazão escolhida pelo operador determina a velocidade de crescimento das células**. As células "se ajustam" para crescer exatamente na velocidade em que estão sendo retiradas. Isolando \(S\) na equação de Monod e usando o balanço de substrato:

\[ S = \frac{K_S\,D}{\mu_{max} - D}, \qquad X = Y_{X/S}\,(S_0 - S) \]

Com \(\mu_{max} = 0{,}5\) por hora, \(K_S = 0{,}2\) g/L, \(S_0 = 10\) g/L, \(Y_{X/S} = 0{,}5\) e \(D = 0{,}2\) por hora:

- **Substrato que sobra:** \(S = \dfrac{0{,}2\times0{,}2}{0{,}5 - 0{,}2} \approx 0{,}13\) g/L (quase todo o substrato é consumido);
- **Células no reator:** \(X = 0{,}5\times(10 - 0{,}13) \approx 4{,}93\) g/L;
- **Produtividade em células:** \(DX \approx 0{,}99\) g/(L·h).

**Lavagem (washout).** O que acontece se a vazão for aumentada demais? Se as células forem retiradas mais rápido do que conseguem se multiplicar, a população vai diminuindo até desaparecer do reator. Isso acontece acima de uma vazão crítica:

\[ D_{crit} = \frac{\mu_{max}\,S_0}{K_S + S_0} = \frac{0{,}5\times10}{10{,}2} \approx 0{,}49\ \text{h}^{-1} \]

A produtividade máxima acontece um pouco abaixo desse limite (tema 4), mas operar muito perto dele é arriscado, porque qualquer perturbação pode levar à lavagem.

## Exemplo resolvido 2: o que esperar de uma batelada

Com os mesmos parâmetros e começando com 0,1 g/L de células, a biomassa final é \(X_0 + Y_{X/S}S_0 = 5{,}1\) g/L. Como o substrato fica muito acima do \(K_S\) quase o tempo todo, as células crescem perto da velocidade máxima, e a batelada leva cerca de \(\ln(5{,}1/0{,}1)/0{,}49 \approx 8\) horas.

Resolvendo o sistema completo no computador (com RK4 e passos de 0,1 h, por exemplo), obtém-se a curva das células em forma de S e a curva do substrato, que cai devagar no início e **despenca** nas últimas horas, quando há muitas células consumindo ao mesmo tempo. Esse tipo de resultado ajuda a decidir, por exemplo, em que momento começar a alimentação numa batelada alimentada.

## Ajustando os parâmetros e validando o modelo

- **Ajuste:** os parâmetros são escolhidos de modo que as curvas do modelo fiquem o mais perto possível dos dados medidos (minimizando a soma dos quadrados das diferenças, por regressão não linear).
- **Sensibilidade:** verifique quais parâmetros mais influenciam o resultado. São esses que precisam ser medidos com mais cuidado.
- **Identificabilidade:** verifique se os dados disponíveis permitem estimar cada parâmetro separadamente. Às vezes, dois parâmetros têm efeitos parecidos e não dá para separá-los.
- **Validação:** teste o modelo com experimentos que não foram usados no ajuste. Um modelo que se ajusta bem aos dados usados para construí-lo não necessariamente prevê bem situações novas.

## Os limites dos modelos simples

Os modelos deste tema tratam a célula como uma "caixa-preta", descrita por uma única variável (\(X\)), e supõem que todas as células são iguais. Para processos em que o estado interno das células muda muito, existem modelos mais detalhados, que descrevem compartimentos dentro da célula ou populações com células de idades e tamanhos diferentes. Além disso, em reatores muito grandes, a hipótese de mistura perfeita deixa de valer: surgem regiões com mais e com menos substrato ou oxigênio, que são estudadas com simulações de fluidodinâmica computacional.

> **Atenção, erros comuns:**
> Esquecer o termo de diluição na batelada alimentada.
> Achar que o quimiostato pode operar com \(D\) igual a \(\mu_{max}\): o limite real é \(D_{crit}\), que é menor, e operar perto dele é instável.
> Usar o modelo para prever condições muito diferentes daquelas em que ele foi validado.

## Para fixar

- Modelo = balanços de massa + cinética + parâmetros + validação.
- Batelada, batelada alimentada e contínuo diferem nos termos de entrada e saída.
- No quimiostato em estado estacionário, \(\mu = D\), até o limite da lavagem.
`,
  referencias: [
    "SCHMIDELL, W. et al. (coord.). **Biotecnologia industrial**. v. 2: Engenharia bioquímica. São Paulo: Blucher, 2001.",
    "DORAN, P. M. **Bioprocess engineering principles**. 2. ed. Waltham: Academic Press, 2013. Cap. 14: Reactor engineering.",
    "SHULER, M. L.; KARGI, F. **Bioprocess engineering**: basic concepts. 2. ed. Upper Saddle River: Prentice Hall, 2002.",
    "BAILEY, J. E.; OLLIS, D. F. **Biochemical engineering fundamentals**. 2. ed. New York: McGraw-Hill, 1986.",
    "DUNN, I. J. et al. **Biological reaction engineering**: dynamic modelling fundamentals with simulation examples. 2. ed. Weinheim: Wiley-VCH, 2003.",
  ],
}
);
