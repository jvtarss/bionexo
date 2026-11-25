/* BIONEXO — Resumos complementares · Física Básica: Mecânica (r63–r70) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r63", num: 63,
  area: "Física Básica: Mecânica",
  disciplina: "Física Básica: Mecânica",
  titulo: "Movimento circular",
  descricao: "Grandezas angulares, movimento circular uniforme e variado, aceleração centrípeta e tangencial, e a relação entre rotação, raio e força em centrífugas e agitadores.",
  praticar: "questoes.html?disciplina=F%C3%ADsica%201",
  tags: ["Física 1", "movimento circular", "MCU", "MCUV", "velocidade angular", "período", "frequência", "aceleração centrípeta", "força centrípeta", "rpm", "centrífuga"],
  conteudo: String.raw`
## Por que estudar o movimento circular

Rotores de centrífugas, impelidores de biorreatores, bombas, discos de agitadores magnéticos e até o movimento da Terra em torno do Sol são movimentos circulares. Eles têm uma particularidade: mesmo quando a **rapidez** é constante, a **velocidade** muda o tempo todo, porque muda de direção. E toda mudança de velocidade exige uma aceleração, e portanto uma força.

## As grandezas angulares

Em vez de medir a posição pela distância percorrida, mede-se pelo **ângulo** \(\theta\), em radianos. Um arco de comprimento \(s\) num círculo de raio \(r\) corresponde a:

\[ \theta = \frac{s}{r} \]

Uma volta completa vale \(2\pi\) rad.

| Grandeza | Definição | Unidade |
|---|---|---|
| Velocidade angular | \(\omega = d\theta/dt\) | rad/s |
| Aceleração angular | \(\alpha = d\omega/dt\) | rad/s² |
| Período | \(T\): tempo de uma volta | s |
| Frequência | \(f = 1/T\): voltas por segundo | Hz (ou rpm, voltas por minuto) |

As relações mais usadas ligam o mundo angular ao linear:

\[ \omega = \frac{2\pi}{T} = 2\pi f \qquad\qquad v = \omega\,r \qquad\qquad a_t = \alpha\,r \]

Todos os pontos de um disco giram com o **mesmo** \(\omega\), mas os pontos mais afastados do eixo têm velocidade linear maior. É por isso que a ponta da pá de um impelidor é a região de maior cisalhamento num biorreator.

**Convertendo rpm:** \(\omega = \dfrac{2\pi\,N}{60}\), com \(N\) em rotações por minuto. A 3000 rpm, \(\omega \approx 314\) rad/s.

## Movimento circular uniforme (MCU)

<svg viewBox="0 0 740 336" xmlns="http://www.w3.org/2000/svg" role="img"><title>Movimento circular</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">No movimento circular, a velocidade muda mesmo com rapidez constante</text><circle cx="180" cy="170" r="96" fill="none" stroke="#d4d6df" stroke-width="1.6" stroke-dasharray="5 5"/><circle cx="180" cy="170" r="4" fill="#8a8a93" stroke="#8a8a93" stroke-width="1.4"/><circle cx="228" cy="86.8616" r="7" fill="#0083cb" stroke="#fff" stroke-width="1.6"/><line x1="228" y1="86.8616" x2="273.033" y2="112.862" stroke="#0a8f5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-ve)"/><line x1="228" y1="86.8616" x2="205" y2="126.699" stroke="#f40086" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-rs)"/><circle cx="263.138" cy="218" r="7" fill="#0083cb" stroke="#fff" stroke-width="1.6"/><line x1="263.138" y1="218" x2="237.138" y2="263.033" stroke="#0a8f5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-ve)"/><line x1="263.138" y1="218" x2="223.301" y2="195" stroke="#f40086" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-rs)"/><circle cx="96.8616" cy="218" r="7" fill="#0083cb" stroke="#fff" stroke-width="1.6"/><line x1="96.8616" y1="218" x2="70.8616" y2="172.967" stroke="#0a8f5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-ve)"/><line x1="96.8616" y1="218" x2="136.699" y2="195" stroke="#f40086" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-rs)"/><text x="84" y="84" font-size="11.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">v (tangente)</text><text x="188" y="210" font-size="11.5" text-anchor="middle" fill="#f40086" font-weight="700">a (para o centro)</text><rect x="330" y="60" width="390" height="112" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="348" y="84" font-size="11.5" text-anchor="start" fill="#333333">Mesmo com rapidez constante, a direcao da velocidade muda.</text><text x="348" y="104" font-size="11.5" text-anchor="start" fill="#333333">Toda mudança de velocidade exige aceleração, e ela aponta</text><text x="348" y="122" font-size="11.5" text-anchor="start" fill="#333333">sempre para o centro da curva.</text><text x="348" y="150" font-size="13" text-anchor="start" fill="#f40086" font-weight="700">a = v2 / r = omega2 . r</text><rect x="330" y="190" width="390" height="108" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="525" y="214" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">na centrífuga</text><text x="525" y="236" font-size="11" text-anchor="middle" fill="#333333">A 13 000 rpm e 7 cm do eixo, a amostra sente</text><text x="525" y="252" font-size="11" text-anchor="middle" fill="#333333">cerca de 13 000 vezes a gravidade.</text><text x="525" y="276" font-size="11" text-anchor="middle" fill="#5c5c66">Dobrar a rotação multiplica a força por quatro.</text><text x="20" y="326" font-size="11.5" text-anchor="start" fill="#5c5c66">Por isso os protocolos indicam a centrifugação em vezes g, e não em rpm: o raio do rotor também conta.</text></svg>
A velocidade é sempre tangente à trajetória, e a aceleração aponta para o centro.

No MCU, \(\omega\) é constante. A velocidade tem módulo constante, mas sua direção (sempre tangente à trajetória) gira junto com o corpo. Isso exige uma aceleração apontando para o **centro**, a **aceleração centrípeta**:

\[ a_c = \frac{v^2}{r} = \omega^2\,r \]

Pela segunda lei de Newton (tema 22), essa aceleração precisa de uma força resultante também apontada para o centro, a **força centrípeta**:

\[ F_c = m\,\frac{v^2}{r} = m\,\omega^2 r \]

A força centrípeta não é um "novo tipo" de força. É o **papel** que alguma força real desempenha: a tração de um fio, o atrito entre o pneu e o asfalto, a gravidade sobre um satélite, ou a parede do tubo de centrífuga empurrando o líquido.

## Movimento circular variado

Quando a rotação acelera ou desacelera (como uma centrífuga ligando ou freando), a aceleração tem duas componentes perpendiculares:

- **tangencial**, \(a_t = \alpha r\), que muda o módulo da velocidade;
- **centrípeta**, \(a_c = \omega^2 r\), que muda a direção.

A aceleração total tem módulo \(a = \sqrt{a_t^2 + a_c^2}\). Com \(\alpha\) constante, valem equações idênticas às do MRUV (tema 21), trocando as letras:

\[ \omega = \omega_0 + \alpha t \qquad \theta = \theta_0 + \omega_0 t + \tfrac12\alpha t^2 \qquad \omega^2 = \omega_0^2 + 2\alpha\,\Delta\theta \]

## Exemplos resolvidos

**1. Aceleração num tubo de microcentrífuga.** Um rotor gira a 13 000 rpm, e a amostra fica a 7,0 cm do eixo. Qual a aceleração centrípeta, em múltiplos de \(g\)?

\[ \omega = \frac{2\pi\cdot13\,000}{60} \approx 1361\ \text{rad/s} \qquad a_c = \omega^2 r = 1361^2\times0{,}070 \approx 1{,}30\times10^{5}\ \text{m/s}^2 \]

Dividindo por \(9{,}8\), a amostra sente cerca de **13 000 × g**. É a força centrífuga relativa (RCF) do tema 22.

**2. Freando o rotor.** O mesmo rotor para em 20 s com desaceleração constante. Quantas voltas dá até parar?

\[ \alpha = \frac{0 - 1361}{20} \approx -68\ \text{rad/s}^2 \qquad \Delta\theta = \frac{\omega_0 + \omega}{2}\,t = \frac{1361}{2}\cdot20 \approx 13\,610\ \text{rad} \approx 2166\ \text{voltas} \]

**3. Curva plana.** Um carro faz uma curva de raio 50 m numa pista plana, com coeficiente de atrito estático 0,6. Qual a maior velocidade possível sem derrapar? O atrito é a força centrípeta: \(\mu_e m g = m v^2/r\), logo \(v_{máx} = \sqrt{\mu_e g r} = \sqrt{0{,}6\cdot9{,}8\cdot50} \approx 17\) m/s (cerca de 62 km/h). A massa se cancela.

## Na prática: a velocidade de ponta do impelidor

Num biorreator, a **velocidade de ponta** (tip speed) do impelidor, \(v_{tip} = \pi N D\) (com \(N\) em rotações por segundo e \(D\) o diâmetro), é um indicador do cisalhamento máximo. Células animais e alguns fungos filamentosos são sensíveis a ele, e muitos processos limitam \(v_{tip}\) a poucos metros por segundo. Ao aumentar a escala mantendo \(v_{tip}\) constante, a rotação precisa cair na proporção inversa do diâmetro.

> **Atenção, erros comuns:**
> Esquecer de converter rpm em rad/s antes de usar \(\omega^2 r\).
> Desenhar a "força centrífuga" como uma força real num diagrama de corpo livre feito por um observador parado: a resultante aponta para o **centro**.
> Achar que, no MCU, a aceleração é zero porque a rapidez é constante.

## Para fixar

- \(v = \omega r\), \(\omega = 2\pi f\), \(a_c = \omega^2 r = v^2/r\).
- Toda curva exige uma força resultante apontada para o centro.
- Na centrifugação, a aceleração cresce com o **quadrado** da rotação e linearmente com o raio.
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 1: Mecânica. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 4 e 10.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 1: Mecânica. 5. ed. São Paulo: Blucher, 2013.",
    "DORAN, P. M. **Bioprocess engineering principles**. 2. ed. Waltham: Academic Press, 2013. Cap. 8: Mixing.",
  ],
},
{
  id: "r64", num: 64,
  area: "Física Básica: Mecânica",
  disciplina: "Física Básica: Mecânica",
  titulo: "Quantidade de movimento e colisões",
  descricao: "Momento linear, impulso, conservação da quantidade de movimento, colisões elásticas e inelásticas, centro de massa e sistemas de massa variável.",
  praticar: "questoes.html?disciplina=F%C3%ADsica%201",
  tags: ["Física 1", "quantidade de movimento", "momento linear", "impulso", "conservação", "colisão elástica", "colisão inelástica", "coeficiente de restituição", "centro de massa", "foguete"],
  conteudo: String.raw`
## A quantidade de movimento

A **quantidade de movimento** (ou momento linear) de um corpo é o produto da massa pela velocidade:

\[ \vec{p} = m\,\vec{v} \]

É um vetor, com a mesma direção da velocidade, medido em kg·m/s. Intuitivamente, mede o quanto é difícil parar o corpo: um caminhão lento e uma bala rápida podem ter quantidades de movimento parecidas.

Newton escreveu originalmente a segunda lei nessa forma, que vale também quando a massa varia:

\[ \sum\vec{F} = \frac{d\vec{p}}{dt} \]

## Impulso

O **impulso** de uma força é o efeito acumulado dela ao longo do tempo:

\[ \vec{J} = \int_{t_i}^{t_f}\vec{F}\,dt = \Delta\vec{p} \]

Esse é o **teorema do impulso**: o impulso da força resultante é igual à variação da quantidade de movimento. Num gráfico de força contra tempo, o impulso é a área sob a curva.

A consequência prática é importante. Para uma mesma variação de \(\vec p\), quanto **maior o tempo** de contato, **menor a força média**: \(F_m = \Delta p/\Delta t\). É o princípio do airbag, do capacete, das embalagens de isopor e de flexionar os joelhos ao saltar.

## Conservação da quantidade de movimento

Se a força **externa** resultante sobre um sistema é zero, a quantidade de movimento **total** do sistema se conserva:

\[ \sum\vec{F}_{ext} = 0 \quad\Rightarrow\quad \vec{P}_{total} = \text{constante} \]

As forças **internas** (entre as partes do sistema) aparecem aos pares de ação e reação e se cancelam na soma. É por isso que, numa colisão ou explosão, que dura muito pouco tempo, quase sempre se pode considerar \(\vec P\) conservada, mesmo que existam forças externas como o peso: o impulso delas nesse intervalo curtíssimo é desprezível.

## Colisões

<svg viewBox="0 0 740 352" xmlns="http://www.w3.org/2000/svg" role="img"><title>Tipos de colisão</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Em toda colisão a quantidade de movimento se conserva</text><rect x="20" y="56" width="700" height="76" rx="8" fill="#fff" stroke="#0a8f5e" stroke-width="1.4"/><text x="36" y="80" font-size="12.5" text-anchor="start" fill="#0a8f5e" font-weight="700">elástica</text><text x="36" y="98" font-size="10.8" text-anchor="start" fill="#5c5c66">a energia cinetica também se conserva</text><text x="36" y="118" font-size="10.5" text-anchor="start" fill="#333333">coeficiente de restituição e = 1</text><circle cx="330" cy="94" r="15" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.6"/><line x1="348" y1="94" x2="382" y2="94" stroke="#0083cb" stroke-width="2" stroke-linecap="round" marker-end="url(#a-az)"/><circle cx="416" cy="94" r="15" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><text x="373" y="76" font-size="10" text-anchor="middle" fill="#5c5c66">antes</text><text x="570" y="76" font-size="10" text-anchor="middle" fill="#5c5c66">depois</text><circle cx="530" cy="94" r="15" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.6"/><line x1="512" y1="94" x2="486" y2="94" stroke="#0a8f5e" stroke-width="2" stroke-linecap="round" marker-end="url(#a-ve)"/><circle cx="600" cy="94" r="15" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><line x1="618" y1="94" x2="658" y2="94" stroke="#0a8f5e" stroke-width="2" stroke-linecap="round" marker-end="url(#a-ve)"/><rect x="20" y="146" width="700" height="76" rx="8" fill="#fff" stroke="#c67600" stroke-width="1.4"/><text x="36" y="170" font-size="12.5" text-anchor="start" fill="#c67600" font-weight="700">parcialmente inelástica</text><text x="36" y="188" font-size="10.8" text-anchor="start" fill="#5c5c66">parte da energia vira calor e deformação</text><text x="36" y="208" font-size="10.5" text-anchor="start" fill="#333333">coeficiente de restituição e = entre 0 e 1</text><circle cx="330" cy="184" r="15" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.6"/><line x1="348" y1="184" x2="382" y2="184" stroke="#0083cb" stroke-width="2" stroke-linecap="round" marker-end="url(#a-az)"/><circle cx="416" cy="184" r="15" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><text x="373" y="166" font-size="10" text-anchor="middle" fill="#5c5c66">antes</text><text x="570" y="166" font-size="10" text-anchor="middle" fill="#5c5c66">depois</text><circle cx="530" cy="184" r="15" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.6"/><circle cx="600" cy="184" r="15" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><line x1="618" y1="184" x2="642" y2="184" stroke="#c67600" stroke-width="2" stroke-linecap="round" marker-end="url(#a-la)"/><rect x="20" y="236" width="700" height="76" rx="8" fill="#fff" stroke="#d33a4e" stroke-width="1.4"/><text x="36" y="260" font-size="12.5" text-anchor="start" fill="#d33a4e" font-weight="700">perfeitamente inelástica</text><text x="36" y="278" font-size="10.8" text-anchor="start" fill="#5c5c66">os corpos seguem juntos</text><text x="36" y="298" font-size="10.5" text-anchor="start" fill="#333333">coeficiente de restituição e = 0</text><circle cx="330" cy="274" r="15" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.6"/><line x1="348" y1="274" x2="382" y2="274" stroke="#0083cb" stroke-width="2" stroke-linecap="round" marker-end="url(#a-az)"/><circle cx="416" cy="274" r="15" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><text x="373" y="256" font-size="10" text-anchor="middle" fill="#5c5c66">antes</text><text x="570" y="256" font-size="10" text-anchor="middle" fill="#5c5c66">depois</text><circle cx="560" cy="274" r="15" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.6"/><circle cx="586" cy="274" r="15" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><line x1="604" y1="274" x2="634" y2="274" stroke="#d33a4e" stroke-width="2" stroke-linecap="round" marker-end="url(#a-vm)"/><text x="20" y="342" font-size="10.6" text-anchor="start" fill="#5c5c66">O impulso e igual a variacao da quantidade de movimento: alongar o tempo do choque reduz a força, e e por isso que airbags e capacetes protegem.</text></svg>
Os três tipos de colisão e o que acontece com a energia cinética em cada um.

Em **toda** colisão isolada, a quantidade de movimento se conserva. Já a energia cinética pode ou não se conservar:

| Tipo | Energia cinética | Coeficiente de restituição \(e\) | Exemplo |
|---|---|---|---|
| Elástica | conservada | \(e = 1\) | bolas de bilhar (aproximadamente), moléculas de gás ideal |
| Parcialmente inelástica | parte vira calor e deformação | \(0 \lt e \lt 1\) | a maioria das colisões reais |
| Perfeitamente inelástica | máxima perda; os corpos ficam juntos | \(e = 0\) | um projétil que se crava num bloco |

O coeficiente de restituição compara as velocidades relativas depois e antes do choque:

\[ e = \frac{|v_{2f} - v_{1f}|}{|v_{1i} - v_{2i}|} \]

**Colisão elástica frontal com o alvo parado** (\(v_{2i} = 0\)):

\[ v_{1f} = \frac{m_1 - m_2}{m_1 + m_2}\,v_{1i} \qquad\qquad v_{2f} = \frac{2m_1}{m_1 + m_2}\,v_{1i} \]

Se as massas são iguais, os corpos **trocam** de velocidade. Se o alvo é muito mais pesado, o projétil volta com quase a mesma velocidade.

## Centro de massa

O **centro de massa** é o ponto que se move como se toda a massa do sistema estivesse concentrada nele e todas as forças externas atuassem ali:

\[ \vec{r}_{CM} = \frac{\sum m_i\,\vec r_i}{\sum m_i} \qquad\qquad M\,\vec a_{CM} = \sum\vec F_{ext} \]

Para corpos contínuos, a soma vira uma integral: \(\vec r_{CM} = \dfrac{1}{M}\int\vec r\,dm\) (tema 39). Se não há força externa, o centro de massa segue em linha reta com velocidade constante, não importa o que as partes façam: os fragmentos de uma explosão se espalham, mas o centro de massa continua a trajetória original.

## Exemplos resolvidos

**1. Pêndulo balístico.** Uma bala de 10 g atinge um bloco de madeira de 2,0 kg, parado e pendurado por fios, e fica cravada nele. O conjunto sobe 5,0 cm. Qual era a velocidade da bala?

Depois do choque (perfeitamente inelástico), a energia cinética do conjunto vira potencial: \(V = \sqrt{2gh} = \sqrt{2\cdot9{,}8\cdot0{,}05} \approx 0{,}99\) m/s. Durante o choque, conserva-se \(p\):

\[ m\,v = (m + M)\,V \;\Rightarrow\; v = \frac{2{,}01}{0{,}010}\times0{,}99 \approx 199\ \text{m/s} \]

Só cerca de 0,5% da energia cinética inicial da bala sobrou como energia do conjunto; o resto virou calor e deformação.

**2. Força média.** Uma bola de 0,45 kg chega a 20 m/s e volta a 15 m/s após um chute de 0,01 s. A variação de \(p\) é \(0{,}45\times(15 - (-20)) = 15{,}75\) kg·m/s, e a força média é \(15{,}75/0{,}01 \approx 1600\) N. A inversão de sentido **soma** as velocidades.

## Massa variável: o foguete

Um foguete ganha velocidade expelindo massa para trás. A conservação da quantidade de movimento leva à **equação de Tsiolkovsky**, em que \(u\) é a velocidade de ejeção dos gases em relação ao foguete:

\[ \Delta v = u\,\ln\frac{m_i}{m_f} \]

O logaritmo mostra por que os foguetes precisam ser quase todo combustível: dobrar a razão entre as massas soma apenas \(u\ln2\) à velocidade final.

> **Atenção, erros comuns:**
> Esquecer que \(\vec p\) é vetor: inverter o sentido muda o sinal da velocidade.
> Conservar a energia cinética em colisões inelásticas.
> Aplicar a conservação de \(\vec p\) na fase em que há forças externas importantes (no pêndulo balístico, a subida após o choque se resolve por energia, não por momento).

## Para fixar

- \(\vec p = m\vec v\) e \(\vec J = \Delta\vec p\).
- Sem força externa resultante, \(\vec P_{total}\) se conserva; em colisões, sempre.
- A energia cinética só se conserva nas colisões elásticas.
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 1: Mecânica. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 9: Centro de massa e momento linear.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 1: Mecânica. 5. ed. São Paulo: Blucher, 2013.",
    "YOUNG, H. D.; FREEDMAN, R. A. **Física I**: mecânica (Sears e Zemansky). 14. ed. São Paulo: Pearson, 2016.",
  ],
},
{
  id: "r65", num: 65,
  area: "Física Básica: Mecânica",
  disciplina: "Física Básica: Mecânica",
  titulo: "Rotação de corpos rígidos e momento angular",
  descricao: "Torque, momento de inércia, a segunda lei de Newton para a rotação, energia cinética de rotação, rolamento, momento angular e sua conservação.",
  praticar: "questoes.html?disciplina=F%C3%ADsica%201",
  tags: ["Física 1", "rotação", "torque", "momento de inércia", "teorema dos eixos paralelos", "energia de rotação", "rolamento", "momento angular", "conservação do momento angular", "potência de eixo"],
  conteudo: String.raw`
## Do ponto ao corpo extenso

Até aqui, os corpos foram tratados como pontos. Mas um impelidor, uma polia ou o rotor de uma centrífuga **giram**, e cada parte deles se move com velocidade diferente. A dinâmica da rotação tem a mesma estrutura da translação, com uma "tradução" de grandezas:

| Translação | Rotação |
|---|---|
| posição \(x\) | ângulo \(\theta\) |
| velocidade \(v\) | velocidade angular \(\omega\) |
| massa \(m\) | momento de inércia \(I\) |
| força \(F\) | torque \(\tau\) |
| \(F = ma\) | \(\tau = I\alpha\) |
| \(K = \tfrac12 mv^2\) | \(K = \tfrac12 I\omega^2\) |
| \(\vec p = m\vec v\) | \(\vec L = I\vec\omega\) |
| \(P = Fv\) | \(P = \tau\omega\) |

## Torque

<svg viewBox="0 0 740 330" xmlns="http://www.w3.org/2000/svg" role="img"><title>Torque e momento de inércia</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Torque: o que importa e o braco de alavanca</text><line x1="60" y1="70" x2="60" y2="190" stroke="#8a8a93" stroke-width="3" stroke-linecap="round"/><circle cx="60" cy="70" r="5" fill="#8a8a93" stroke="#8a8a93" stroke-width="1.4"/><text x="60" y="60" font-size="10" text-anchor="middle" fill="#5c5c66">eixo</text><rect x="56" y="70" width="180" height="120" rx="4" fill="#f2f4f8" stroke="#d4d6df" stroke-width="1.2"/><line x1="100" y1="202" x2="100" y2="196" stroke="#d33a4e" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-vm)"/><text x="100" y="224" font-size="10.5" text-anchor="middle" fill="#d33a4e" font-weight="700">pouco torque</text><line x1="60" y1="206" x2="100" y2="206" stroke="#d33a4e" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><text x="80" y="202" font-size="10.5" text-anchor="middle" fill="#d33a4e" font-weight="700">d</text><line x1="230" y1="202" x2="230" y2="196" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="230" y="224" font-size="10.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">muito torque</text><line x1="60" y1="206" x2="230" y2="206" stroke="#0a8f5e" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><text x="145" y="202" font-size="10.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">d</text><text x="146" y="248" font-size="11" text-anchor="middle" fill="#5c5c66">a mesma força, distancias diferentes</text><text x="146" y="266" font-size="12" text-anchor="middle" fill="#333333" font-weight="700">torque = força x braco</text><text x="400" y="60" font-size="12.5" text-anchor="start" fill="#333333" font-weight="700">Momento de inércia: onde a massa esta</text><circle cx="450" cy="130" r="30" fill="none" stroke="#0083cb" stroke-width="2"/><circle cx="450" cy="130" r="26" fill="none" stroke="#0083cb" stroke-width="6"/><text x="450" y="178" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">anel</text><text x="450" y="194" font-size="10" text-anchor="middle" fill="#5c5c66">I = 1,0 M R2</text><circle cx="545" cy="130" r="30" fill="none" stroke="#a300bc" stroke-width="2"/><circle cx="545" cy="130" r="30" fill="#a300bc" stroke="#a300bc" stroke-width="1"/><text x="545" y="178" font-size="11" text-anchor="middle" fill="#a300bc" font-weight="700">cilindro</text><text x="545" y="194" font-size="10" text-anchor="middle" fill="#5c5c66">I = 0,5 M R2</text><circle cx="640" cy="130" r="30" fill="none" stroke="#0a8f5e" stroke-width="2"/><circle cx="640" cy="130" r="30" fill="#0a8f5e" stroke="#0a8f5e" stroke-width="1"/><circle cx="640" cy="122" r="30" fill="#fff" fill-opacity="0.25" stroke="none"/><text x="640" y="178" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">esfera</text><text x="640" y="194" font-size="10" text-anchor="middle" fill="#5c5c66">I = 0,4 M R2</text><text x="545" y="226" font-size="11" text-anchor="middle" fill="#333333">Massa longe do eixo custa mais para girar</text><text x="545" y="244" font-size="11" text-anchor="middle" fill="#333333">porque entra ao quadrado da distancia.</text><rect x="400" y="262" width="320" height="46" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="560" y="282" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">potencia de um agitador: P = torque x velocidade angular</text><text x="560" y="298" font-size="10.5" text-anchor="middle" fill="#5c5c66">e a medida direta da energia entregue ao líquido</text><text x="20" y="322" font-size="11" text-anchor="start" fill="#5c5c66">Sem torque externo, o momento angular se conserva: foi assim que a patinadora acelerou ao fechar os bracos.</text></svg>
O torque depende do braço de alavanca, e o momento de inércia, de como a massa se distribui.

O **torque** (ou momento de uma força) mede a capacidade de uma força de fazer um corpo girar em torno de um eixo:

\[ \vec\tau = \vec r\times\vec F \qquad\qquad \tau = r\,F\sin\phi = F\,d \]

em que \(d = r\sin\phi\) é o **braço de alavanca**, a distância perpendicular entre o eixo e a linha de ação da força. Por isso é mais fácil abrir uma porta empurrando longe das dobradiças, e uma chave de roda mais longa solta porcas mais facilmente. A unidade é N·m (não confundir com joule, embora a dimensão seja a mesma).

## Momento de inércia

O **momento de inércia** é a "massa" da rotação: mede a resistência a mudar a velocidade angular. Depende não só da massa, mas de **como ela está distribuída** em relação ao eixo:

\[ I = \sum m_i r_i^2 = \int r^2\,dm \]

| Corpo (eixo pelo centro) | \(I\) |
|---|---|
| Anel fino ou casca cilíndrica | \(MR^2\) |
| Disco ou cilindro maciço | \(\tfrac12 MR^2\) |
| Esfera maciça | \(\tfrac25 MR^2\) |
| Casca esférica fina | \(\tfrac23 MR^2\) |
| Barra fina (eixo no meio) | \(\tfrac{1}{12}ML^2\) |

Massa longe do eixo pesa muito, por causa do \(r^2\). **Teorema dos eixos paralelos:** para um eixo paralelo ao que passa pelo centro de massa, a uma distância \(h\), \(I = I_{CM} + M h^2\). Uma barra girando pela ponta tem \(I = \tfrac1{12}ML^2 + M(L/2)^2 = \tfrac13 ML^2\).

## A segunda lei para a rotação

\[ \sum\tau = I\,\alpha \]

**Exemplo:** um volante em forma de disco, com 20 kg e raio 0,30 m, recebe um torque constante de 9,0 N·m. Então \(I = \tfrac12\cdot20\cdot0{,}30^2 = 0{,}90\) kg·m² e \(\alpha = 9{,}0/0{,}90 = 10\) rad/s². Após 5 s, partindo do repouso, \(\omega = 50\) rad/s (cerca de 480 rpm).

## Energia, trabalho e potência na rotação

\[ K_{rot} = \tfrac12 I\omega^2 \qquad\qquad W = \int\tau\,d\theta \qquad\qquad P = \tau\,\omega \]

A relação \(P = \tau\omega\) é a base do dimensionamento de motores. Num biorreator, mede-se o torque no eixo do agitador e calcula-se a potência realmente entregue ao líquido.

**Exemplo:** um agitador gira a 150 rpm (\(\omega \approx 15{,}7\) rad/s) com torque de 80 N·m. A potência no eixo é \(80\times15{,}7 \approx 1{,}26\) kW.

## Rolamento

Uma roda que rola sem deslizar tem, ao mesmo tempo, translação e rotação, com \(v_{CM} = \omega R\). A energia cinética total é:

\[ K = \tfrac12 M v_{CM}^2 + \tfrac12 I_{CM}\,\omega^2 \]

Descendo uma rampa a partir do repouso, \(v = \sqrt{\dfrac{2gh}{1 + I/(MR^2)}}\). Uma esfera maciça (\(I/MR^2 = 0{,}4\)) chega antes de um cilindro (\(0{,}5\)), que chega antes de um anel (\(1\)), independentemente de massa e raio: corpos com massa mais concentrada no centro "gastam" menos energia girando.

## Momento angular e sua conservação

Para uma partícula, \(\vec L = \vec r\times\vec p\); para um corpo rígido girando em torno de um eixo fixo, \(L = I\omega\). A segunda lei vira:

\[ \sum\vec\tau_{ext} = \frac{d\vec L}{dt} \]

Se o torque externo é zero, o **momento angular se conserva**: \(I_i\,\omega_i = I_f\,\omega_f\). A patinadora que fecha os braços diminui \(I\) e gira mais rápido. Estrelas que colapsam em estrelas de nêutrons giram centenas de vezes por segundo pelo mesmo motivo. A conservação de \(\vec L\) também explica a estabilidade de piões e giroscópios.

**Exemplo:** uma pessoa num banco giratório, com \(I = 6{,}0\) kg·m², gira a 1,0 volta/s com halteres nos braços abertos. Ao recolhê-los, \(I\) cai para 2,0 kg·m². A nova rotação é \(6/2 = 3{,}0\) voltas/s. A energia cinética **triplica**: o trabalho vem dos músculos que puxaram os halteres.

> **Atenção, erros comuns:**
> Usar a distância até o ponto de aplicação, em vez do braço de alavanca perpendicular.
> Esquecer a energia de rotação em problemas de rolamento.
> Achar que o momento de inércia é uma propriedade só do corpo: ele depende do **eixo** escolhido.

## Para fixar

- \(\tau = Fd\), \(\sum\tau = I\alpha\), \(I = \int r^2 dm\).
- \(K_{rot} = \tfrac12 I\omega^2\) e \(P = \tau\omega\).
- Sem torque externo, \(L = I\omega\) se conserva.
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 1: Mecânica. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 10 e 11.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 1: Mecânica. 5. ed. São Paulo: Blucher, 2013.",
    "YOUNG, H. D.; FREEDMAN, R. A. **Física I**: mecânica (Sears e Zemansky). 14. ed. São Paulo: Pearson, 2016.",
  ],
},
{
  id: "r66", num: 66,
  area: "Física Básica: Mecânica",
  disciplina: "Física Básica: Mecânica",
  titulo: "Estática e equilíbrio de corpos rígidos",
  descricao: "As duas condições de equilíbrio, centro de gravidade, alavancas, apoios e reações, estabilidade e uma introdução a tensão e deformação de materiais.",
  praticar: "questoes.html?disciplina=F%C3%ADsica%201",
  tags: ["Física 1", "estática", "equilíbrio", "torque", "centro de gravidade", "alavanca", "reações de apoio", "estabilidade", "tensão", "deformação", "módulo de Young"],
  conteudo: String.raw`
## As duas condições de equilíbrio

Um corpo rígido está em **equilíbrio estático** quando não translada nem gira. Para isso, precisa satisfazer **duas** condições ao mesmo tempo:

\[ \sum\vec F = \vec 0 \qquad\text{e}\qquad \sum\vec\tau = \vec 0 \]

A primeira impede a aceleração do centro de massa; a segunda impede a aceleração angular. No plano, isso dá três equações escalares: \(\sum F_x = 0\), \(\sum F_y = 0\) e \(\sum\tau = 0\). Portanto, um problema plano de estática tem, no máximo, **três incógnitas** que podem ser determinadas.

Duas forças iguais e opostas, mas com linhas de ação diferentes (um **binário**), somam zero, mas produzem torque. Por isso só a primeira condição não basta.

## Escolhendo o ponto para os torques

Em equilíbrio, a soma dos torques é zero em relação a **qualquer** ponto. A escolha inteligente é um ponto por onde passam forças desconhecidas: elas não produzem torque ali e saem da equação. Esse truque resolve a maioria dos problemas em uma ou duas linhas.

## Centro de gravidade

O peso de um corpo extenso age como se estivesse aplicado num único ponto, o **centro de gravidade**. Num campo gravitacional uniforme, ele coincide com o centro de massa (tema 64). Para corpos homogêneos e simétricos, fica no centro geométrico.

## Exemplo resolvido 1: viga apoiada

<svg viewBox="0 0 720 290" xmlns="http://www.w3.org/2000/svg" role="img"><title>Equilíbrio de uma viga</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Equilíbrio: forças e torques somam zero</text><rect x="90" y="140" width="470" height="20" rx="4" fill="#e9ecf3" stroke="#d4d6df" stroke-width="1.2"/><polygon points="90,162 76,186 104,186" fill="#fff" stroke="#8a8a93" stroke-width="1.4" stroke-linejoin="round"/><line x1="90" y1="196" x2="90" y2="164" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="90" y="212" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">A</text><text x="90" y="228" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">550 N</text><polygon points="560,162 546,186 574,186" fill="#fff" stroke="#8a8a93" stroke-width="1.4" stroke-linejoin="round"/><line x1="560" y1="196" x2="560" y2="164" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="560" y="212" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">B</text><text x="560" y="228" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">250 N</text><rect x="173.5" y="88" width="68" height="50" rx="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.4"/><text x="207.5" y="118" font-size="11.5" text-anchor="middle" fill="#0083cb" font-weight="700">600 N</text><line x1="207.5" y1="140" x2="207.5" y2="148" stroke="#0083cb" stroke-width="2" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="325" y1="160" x2="325" y2="190" stroke="#f40086" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-rs)"/><text x="325" y="206" font-size="10.5" text-anchor="middle" fill="#f40086" font-weight="700">peso da viga 200 N</text><line x1="90" y1="64" x2="207.5" y2="64" stroke="#8a8a93" stroke-width="1" stroke-linecap="round" stroke-dasharray="3 3"/><text x="148.75" y="58" font-size="10.5" text-anchor="middle" fill="#5c5c66">1,0 m</text><line x1="90" y1="40" x2="560" y2="40" stroke="#8a8a93" stroke-width="1" stroke-linecap="round" stroke-dasharray="3 3"/><text x="325" y="34" font-size="10.5" text-anchor="middle" fill="#5c5c66">4,0 m</text><rect x="20" y="232" width="680" height="48" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="360" y="252" font-size="11" text-anchor="middle" fill="#333333">Somando os torques em A, a reação em B sai direto; depois as forças verticais dao a reação em A.</text><text x="360" y="270" font-size="11" text-anchor="middle" fill="#5c5c66">Escolher o ponto por onde passa uma incógnita elimina ela da equação.</text></svg>
Uma viga em equilíbrio: as duas condições permitem achar as reações nos apoios.

Uma viga homogênea de 4,0 m e 200 N está apoiada nas extremidades A e B. Um tanque de 600 N é colocado a 1,0 m de A. Quais são as reações nos apoios?

Torques em relação a A (anti-horário positivo):

\[ N_B\cdot4{,}0 - 200\cdot2{,}0 - 600\cdot1{,}0 = 0 \;\Rightarrow\; N_B = 250\ \text{N} \]

Forças verticais: \(N_A + N_B = 800\), logo \(N_A = 550\) N. O apoio mais próximo da carga suporta mais, como esperado.

## Exemplo resolvido 2: a alavanca

Na alavanca, o equilíbrio de torques em torno do ponto de apoio dá \(F_1 d_1 = F_2 d_2\). Com um braço 5 vezes maior do lado da força aplicada, levanta-se uma carga 5 vezes maior. Não há "energia de graça": a força menor percorre uma distância 5 vezes maior, e o trabalho é o mesmo (tema 23).

| Tipo | Posição do apoio | Exemplos |
|---|---|---|
| Interfixa | entre a força e a carga | tesoura, alicate, gangorra |
| Inter-resistente | carga entre o apoio e a força | carrinho de mão, quebra-nozes |
| Interpotente | força entre o apoio e a carga | pinça, antebraço humano |

O antebraço é uma alavanca interpotente: o bíceps se insere perto do cotovelo e precisa fazer uma força muitas vezes maior que o peso segurado na mão.

## Estabilidade

- **Estável:** ao ser levemente deslocado, o corpo volta (o centro de gravidade sobe).
- **Instável:** ao ser deslocado, afasta-se ainda mais (o centro de gravidade desce).
- **Indiferente:** permanece na nova posição.

Um corpo apoiado tomba quando a vertical que passa pelo centro de gravidade sai da **base de apoio**. Centro de gravidade baixo e base larga dão estabilidade, critério usado no projeto de tanques, estantes de laboratório e suportes de equipamentos pesados.

## Tensão e deformação: quando o "rígido" cede

Todo material real se deforma um pouco sob carga. Define-se:

\[ \text{tensão: } \sigma = \frac{F}{A} \qquad\qquad \text{deformação: } \varepsilon = \frac{\Delta L}{L_0} \]

Na região elástica, vale a **lei de Hooke** generalizada:

\[ \sigma = E\,\varepsilon \]

em que \(E\) é o **módulo de Young**: cerca de 200 GPa para o aço, 70 GPa para o alumínio e poucos megapascais para borrachas e hidrogéis. Acima do limite elástico, a deformação torna-se permanente; acima do limite de resistência, o material rompe.

**Exemplo:** um cabo de aço de 3,0 m e 5,0 mm de diâmetro sustenta 2000 N. A área é \(\pi(2{,}5\times10^{-3})^2 \approx 1{,}96\times10^{-5}\) m², a tensão é cerca de 102 MPa e o alongamento é \(\Delta L = \sigma L_0/E = 102\times10^6\cdot3/(200\times10^9) \approx 1{,}5\) mm.

## Na prática

- **Vasos de pressão e biorreatores:** a parede de um cilindro sob pressão interna \(p\) sofre uma tensão circunferencial \(\sigma \approx pr/t\) (raio sobre espessura). É essa conta que define a espessura mínima de autoclaves e fermentadores esterilizáveis a vapor.
- **Biomateriais:** arcabouços para engenharia de tecidos são escolhidos com módulo de elasticidade próximo ao do tecido que vão substituir.

> **Atenção, erros comuns:**
> Verificar só \(\sum F = 0\) e esquecer os torques.
> Usar a distância ao longo da barra quando a força é inclinada: o braço é a distância **perpendicular** à linha de ação.
> Esquecer o peso da própria viga.

## Para fixar

- Equilíbrio: \(\sum\vec F = 0\) **e** \(\sum\vec\tau = 0\).
- Calcule torques em relação ao ponto que elimina mais incógnitas.
- \(\sigma = F/A\), \(\varepsilon = \Delta L/L_0\), \(\sigma = E\varepsilon\) na região elástica.
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 1: Mecânica. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 12: Equilíbrio e elasticidade.",
    "HIBBELER, R. C. **Estática**: mecânica para engenharia. 14. ed. São Paulo: Pearson, 2017.",
    "BEER, F. P. et al. **Mecânica dos materiais**. 7. ed. Porto Alegre: AMGH, 2015.",
  ],
},
{
  id: "r67", num: 67,
  area: "Física Básica: Mecânica",
  disciplina: "Física Básica: Mecânica",
  titulo: "Gravitação",
  descricao: "A lei da gravitação universal, o campo gravitacional, a variação de g, energia potencial gravitacional, velocidade de escape, órbitas e as leis de Kepler.",
  praticar: "questoes.html?disciplina=F%C3%ADsica%201",
  tags: ["Física 1", "gravitação universal", "Newton", "constante gravitacional", "campo gravitacional", "energia potencial", "velocidade de escape", "órbita", "satélite", "leis de Kepler", "microgravidade"],
  conteudo: String.raw`
## A lei da gravitação universal

Newton propôs que **toda** massa atrai toda outra massa, com uma força proporcional ao produto das massas e inversamente proporcional ao quadrado da distância entre elas:

\[ F = G\,\frac{m_1 m_2}{r^2} \qquad\qquad G \approx 6{,}674\times10^{-11}\ \text{N·m}^2/\text{kg}^2 \]

A força é sempre atrativa e age ao longo da linha que une os centros. O valor minúsculo de \(G\) explica por que não percebemos a atração entre objetos do dia a dia: duas pessoas de 70 kg a 1 m se atraem com cerca de \(3\times10^{-7}\) N. A gravidade só se torna importante quando pelo menos um dos corpos é enorme, como um planeta.

Um resultado importante (o **teorema das cascas**): uma esfera com massa distribuída de forma simétrica atrai os corpos externos como se toda a massa estivesse no seu centro.

## O campo gravitacional e o valor de g

O **campo gravitacional** é a força por unidade de massa: \(\vec g = \vec F/m\). Na superfície de um planeta de massa \(M\) e raio \(R\):

\[ g = \frac{G\,M}{R^2} \]

Para a Terra, isso dá cerca de 9,8 m/s². Acima da superfície, a uma altura \(h\), \(g\) diminui: \(g(h) = g_0\left(\dfrac{R}{R + h}\right)^2\). Na altitude da Estação Espacial Internacional (cerca de 400 km), \(g\) ainda vale cerca de 89% do valor na superfície.

## Por que os astronautas "flutuam"

Se a gravidade em órbita ainda é quase a mesma, por que os astronautas flutuam? Porque a estação e tudo dentro dela estão em **queda livre** contínua em torno da Terra. Tudo cai junto, com a mesma aceleração, e nada empurra nada. Essa situação é chamada de **microgravidade**, e é usada para estudar cristalização de proteínas, crescimento de células e comportamento de fluidos sem sedimentação nem convecção natural.

## Energia potencial gravitacional

Para distâncias grandes, \(U = mgh\) deixa de valer, porque \(g\) não é constante. A expressão geral, tomando \(U = 0\) no infinito, é:

\[ U(r) = -\frac{G\,M\,m}{r} \]

O sinal negativo indica um sistema **ligado**: é preciso fornecer energia para separar os corpos. Perto da superfície, a diferença \(U(R + h) - U(R)\) se reduz a \(mgh\), como deveria.

## Velocidade de escape

É a velocidade mínima para um corpo lançado da superfície nunca mais voltar (chegar ao infinito com velocidade zero). Pela conservação de energia:

\[ \tfrac12 m v_e^2 - \frac{GMm}{R} = 0 \;\Rightarrow\; v_e = \sqrt{\frac{2GM}{R}} = \sqrt{2gR} \]

Para a Terra, \(v_e \approx 11{,}2\) km/s, independentemente da massa do corpo lançado.

## Órbitas circulares

<svg viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg" role="img"><title>Órbitas e gravitação</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Órbitas: a gravidade faz o papel de força centripeta</text><circle cx="200" cy="172" r="38" fill="#0083cb" stroke="#0083cb" stroke-width="1"/><text x="200" y="177" font-size="11.5" text-anchor="middle" fill="#fff" font-weight="700">Terra</text><circle cx="200" cy="172" r="70" fill="none" stroke="#f40086" stroke-width="1.6" stroke-dasharray="5 4"/><circle cx="244.995" cy="118.377" r="7" fill="#f40086" stroke="#fff" stroke-width="1.6"/><line x1="244.995" y1="118.377" x2="223.14" y2="144.422" stroke="#f40086" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-rs)"/><line x1="244.995" y1="118.377" x2="275.637" y2="144.088" stroke="#0a8f5e" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-ve)"/><circle cx="200" cy="172" r="116" fill="none" stroke="#a300bc" stroke-width="1.6" stroke-dasharray="5 4"/><circle cx="274.563" cy="83.1388" r="7" fill="#a300bc" stroke="#fff" stroke-width="1.6"/><line x1="274.563" y1="83.1388" x2="252.709" y2="109.184" stroke="#a300bc" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-rx)"/><line x1="274.563" y1="83.1388" x2="305.205" y2="108.85" stroke="#0a8f5e" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="198" y="80" font-size="10.5" text-anchor="middle" fill="#f40086" font-weight="700">órbita baixa</text><text x="204" y="314" font-size="10.5" text-anchor="middle" fill="#a300bc" font-weight="700">geoestacionária (24 h)</text><rect x="400" y="70" width="300" height="170" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="400" y1="70" x2="400" y2="240" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="460" y1="70" x2="460" y2="240" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="520" y1="70" x2="520" y2="240" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="580" y1="70" x2="580" y2="240" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="640" y1="70" x2="640" y2="240" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="700" y1="70" x2="700" y2="240" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="400" y1="199.524" x2="700" y2="199.524" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="400" y1="159.048" x2="700" y2="159.048" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="400" y1="118.571" x2="700" y2="118.571" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="400" y1="78.0952" x2="700" y2="78.0952" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="400" y1="240" x2="700" y2="240" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="400" y="255" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="460" y="255" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="520" y="255" font-size="10.5" text-anchor="middle" fill="#8a8a93">3</text><text x="580" y="255" font-size="10.5" text-anchor="middle" fill="#8a8a93">4</text><text x="640" y="255" font-size="10.5" text-anchor="middle" fill="#8a8a93">5</text><text x="700" y="255" font-size="10.5" text-anchor="middle" fill="#8a8a93">6</text><text x="394" y="203.024" font-size="10.5" text-anchor="end" fill="#8a8a93">0.25</text><text x="394" y="162.548" font-size="10.5" text-anchor="end" fill="#8a8a93">0.5</text><text x="394" y="122.071" font-size="10.5" text-anchor="end" fill="#8a8a93">0.75</text><text x="394" y="81.5952" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="704" y="244" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">r / R</text><text x="396" y="64" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">g / g0</text><path d="M400.0,78.1L401.4,85.2L402.7,91.9L404.1,98.1L405.5,104.0L406.8,109.5L408.2,114.6L409.5,119.5L410.9,124.1L412.3,128.4L413.6,132.5L415.0,136.4L416.4,140.0L417.7,143.5L419.1,146.8L420.5,150.0L421.8,152.9L423.2,155.8L424.5,158.5L425.9,161.0L427.3,163.5L428.6,165.8L430.0,168.0L431.4,170.2L432.7,172.2L434.1,174.2L435.5,176.0L436.8,177.8L438.2,179.5L439.5,181.2L440.9,182.8L442.3,184.3L443.6,185.7L445.0,187.1L446.4,188.5L447.7,189.8L449.1,191.0L450.5,192.2L451.8,193.4L453.2,194.5L454.5,195.6L455.9,196.6L457.3,197.6L458.6,198.6L460.0,199.5L461.4,200.4L462.7,201.3L464.1,202.1L465.5,203.0L466.8,203.8L468.2,204.5L469.5,205.3L470.9,206.0L472.3,206.7L473.6,207.4L475.0,208.0L476.4,208.7L477.7,209.3L479.1,209.9L480.5,210.5L481.8,211.0L483.2,211.6L484.5,212.1L485.9,212.6L487.3,213.1L488.6,213.6L490.0,214.1L491.4,214.6L492.7,215.0L494.1,215.5L495.5,215.9L496.8,216.3L498.2,216.7L499.5,217.1L500.9,217.5L502.3,217.9L503.6,218.2L505.0,218.6L506.4,218.9L507.7,219.3L509.1,219.6L510.5,219.9L511.8,220.3L513.2,220.6L514.5,220.9L515.9,221.2L517.3,221.5L518.6,221.7L520.0,222.0L521.4,222.3L522.7,222.5L524.1,222.8L525.5,223.1L526.8,223.3L528.2,223.5L529.5,223.8L530.9,224.0L532.3,224.2L533.6,224.5L535.0,224.7L536.4,224.9L537.7,225.1L539.1,225.3L540.5,225.5L541.8,225.7L543.2,225.9L544.5,226.1L545.9,226.3L547.3,226.4L548.6,226.6L550.0,226.8L551.4,227.0L552.7,227.1L554.1,227.3L555.5,227.4L556.8,227.6L558.2,227.8L559.5,227.9L560.9,228.1L562.3,228.2L563.6,228.3L565.0,228.5L566.4,228.6L567.7,228.8L569.1,228.9L570.5,229.0L571.8,229.2L573.2,229.3L574.5,229.4L575.9,229.5L577.3,229.6L578.6,229.8L580.0,229.9L581.4,230.0L582.7,230.1L584.1,230.2L585.5,230.3L586.8,230.4L588.2,230.5L589.5,230.6L590.9,230.7L592.3,230.8L593.6,230.9L595.0,231.0L596.4,231.1L597.7,231.2L599.1,231.3L600.5,231.4L601.8,231.5L603.2,231.6L604.5,231.7L605.9,231.8L607.3,231.8L608.6,231.9L610.0,232.0L611.4,232.1L612.7,232.2L614.1,232.2L615.5,232.3L616.8,232.4L618.2,232.5L619.5,232.5L620.9,232.6L622.3,232.7L623.6,232.8L625.0,232.8L626.4,232.9L627.7,233.0L629.1,233.0L630.5,233.1L631.8,233.2L633.2,233.2L634.5,233.3L635.9,233.3L637.3,233.4L638.6,233.5L640.0,233.5L641.4,233.6L642.7,233.6L644.1,233.7L645.5,233.8L646.8,233.8L648.2,233.9L649.5,233.9L650.9,234.0L652.3,234.0L653.6,234.1L655.0,234.1L656.4,234.2L657.7,234.2L659.1,234.3L660.5,234.3L661.8,234.4L663.2,234.4L664.5,234.5L665.9,234.5L667.3,234.6L668.6,234.6L670.0,234.6L671.4,234.7L672.7,234.7L674.1,234.8L675.5,234.8L676.8,234.9L678.2,234.9L679.5,234.9L680.9,235.0L682.3,235.0L683.6,235.1L685.0,235.1L686.4,235.1L687.7,235.2L689.1,235.2L690.5,235.3L691.8,235.3L693.2,235.3L694.5,235.4L695.9,235.4L697.3,235.4L698.6,235.5L700.0,235.5" fill="none" stroke="#0083cb" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="400" cy="78.0952" r="4" fill="#f40086" stroke="#fff" stroke-width="1.6"/><text x="434" y="68.0952" font-size="11.5" text-anchor="middle" fill="#f40086" font-weight="600">superficie</text><text x="420" y="266" font-size="11" text-anchor="start" fill="#5c5c66">A gravidade cai com o quadrado da distancia ao centro,</text><text x="420" y="282" font-size="11" text-anchor="start" fill="#5c5c66">mas nunca chega a zero: em órbita ainda ha gravidade.</text><text x="20" y="306" font-size="11" text-anchor="start" fill="#333333">Os astronautas flutuam porque estao em queda livre continua junto com a estação, e não por falta de gravidade.</text></svg>
A gravidade desempenha o papel de força centrípeta, e cai com o quadrado da distância.

Num satélite em órbita circular, a gravidade faz o papel de força centrípeta (tema 63):

\[ \frac{GMm}{r^2} = \frac{m v^2}{r} \;\Rightarrow\; v = \sqrt{\frac{GM}{r}} \qquad\qquad T = 2\pi\sqrt{\frac{r^3}{GM}} \]

Quanto mais alta a órbita, **mais lenta** a velocidade e maior o período. A energia total da órbita é \(E = -\dfrac{GMm}{2r}\).

**Exemplo:** satélites **geoestacionários** têm período de 24 h e ficam parados em relação ao solo, sobre o equador. Isolando \(r\):

\[ r = \left(\frac{GM\,T^2}{4\pi^2}\right)^{1/3} \approx 4{,}22\times10^{7}\ \text{m} \]

cerca de 35 800 km acima da superfície. É a órbita dos satélites de comunicação e meteorológicos.

## As leis de Kepler

Antes de Newton, Kepler descobriu, a partir de observações astronômicas, três regras para o movimento dos planetas. A gravitação de Newton explicou todas elas:

1. **Lei das órbitas:** os planetas descrevem elipses, com o Sol num dos focos.
2. **Lei das áreas:** a linha que liga o planeta ao Sol varre áreas iguais em tempos iguais. O planeta anda mais rápido perto do Sol. É a conservação do momento angular (tema 65), já que a gravidade não produz torque em relação ao Sol.
3. **Lei dos períodos:** \(T^2 \propto a^3\), em que \(a\) é o semieixo maior da órbita. Para órbitas circulares, é exatamente a fórmula de \(T\) acima.

## Na prática

- **Sensoriamento remoto:** satélites em órbitas baixas (centenas de quilômetros) monitoram desmatamento, umidade do solo e produtividade agrícola. Os dados de órbita definem a frequência com que passam sobre a mesma área.
- **Gravitropismo:** as raízes das plantas crescem a favor da gravidade e os caules contra ela. Experimentos em microgravidade e em clinostatos (que giram as plantas para "embaralhar" a direção da gravidade) ajudam a entender esse mecanismo.

> **Atenção, erros comuns:**
> Usar a distância até a **superfície** em vez da distância até o **centro** do planeta.
> Achar que não há gravidade em órbita.
> Usar \(U = mgh\) para alturas comparáveis ao raio do planeta.

## Para fixar

- \(F = GMm/r^2\); na superfície, \(g = GM/R^2\).
- \(U = -GMm/r\) e \(v_e = \sqrt{2GM/R}\).
- Em órbita circular, a gravidade é a força centrípeta: \(v = \sqrt{GM/r}\) e \(T^2 \propto r^3\).
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 2: Gravitação, ondas e termodinâmica. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 13: Gravitação.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 1: Mecânica. 5. ed. São Paulo: Blucher, 2013.",
    "TIPLER, P. A.; MOSCA, G. **Física para cientistas e engenheiros**. v. 1. 6. ed. Rio de Janeiro: LTC, 2009.",
  ],
},
{
  id: "r68", num: 68,
  area: "Física Básica: Mecânica",
  disciplina: "Física Básica: Mecânica",
  titulo: "Oscilações e movimento harmônico simples",
  descricao: "O sistema massa-mola, a equação diferencial do MHS e sua solução, energia nas oscilações, pêndulos, amortecimento, oscilações forçadas e ressonância.",
  praticar: "questoes.html?disciplina=F%C3%ADsica%201",
  tags: ["Física 1", "Física 2", "oscilação", "MHS", "massa-mola", "pêndulo simples", "frequência natural", "amortecimento", "ressonância", "oscilação forçada", "EDO de segunda ordem"],
  conteudo: String.raw`
## O que é uma oscilação

Um movimento que se repete em torno de uma posição de equilíbrio é uma **oscilação**: o pêndulo de um relógio, uma corda de violão, as moléculas num cristal, o eixo de um agitador desbalanceado. Sempre que existe uma **força restauradora**, que puxa o corpo de volta ao equilíbrio, aparecem oscilações. As oscilações são também a porta de entrada para o estudo das ondas (tema 88).

## O movimento harmônico simples (MHS)

O caso mais simples é a força restauradora **proporcional** ao deslocamento, como a de uma mola ideal (lei de Hooke): \(F = -kx\). Pela segunda lei de Newton:

\[ m\,\frac{d^2x}{dt^2} = -k\,x \qquad\Rightarrow\qquad \frac{d^2x}{dt^2} + \omega^2 x = 0, \quad \omega = \sqrt{\frac{k}{m}} \]

É uma equação diferencial linear de segunda ordem (tema 40). A solução é uma senoide:

\[ x(t) = A\cos(\omega t + \phi) \]

- \(A\): **amplitude**, o maior afastamento do equilíbrio;
- \(\omega\): **frequência angular** (rad/s), com período \(T = 2\pi/\omega = 2\pi\sqrt{m/k}\);
- \(\phi\): **fase inicial**, que depende de onde e como o movimento começou.

O período **não depende da amplitude**. Uma mola mais rígida (k maior) oscila mais rápido; uma massa maior, mais devagar.

Derivando a posição:

\[ v(t) = -A\omega\sin(\omega t + \phi) \qquad\qquad a(t) = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x \]

A velocidade é máxima (\(A\omega\)) no equilíbrio, e a aceleração é máxima (\(A\omega^2\)) nos extremos.

## Energia no MHS

Sem atrito, a energia mecânica se conserva e troca de forma o tempo todo entre cinética e potencial elástica:

\[ E = \tfrac12 k x^2 + \tfrac12 m v^2 = \tfrac12 k A^2 \]

A energia total é proporcional ao **quadrado da amplitude**.

## Pêndulos

**Pêndulo simples:** uma massa pontual presa a um fio de comprimento \(L\). Para ângulos pequenos (até uns 10°), \(\sin\theta \approx \theta\) e o movimento é um MHS com:

\[ T = 2\pi\sqrt{\frac{L}{g}} \]

O período não depende da massa nem (para ângulos pequenos) da amplitude. Por isso o pêndulo foi usado para medir o tempo e para medir \(g\).

**Pêndulo físico:** um corpo extenso que oscila em torno de um eixo, com momento de inércia \(I\) (tema 65) e centro de massa a uma distância \(d\) do eixo: \(T = 2\pi\sqrt{I/(mgd)}\).

<svg viewBox="0 0 740 340" xmlns="http://www.w3.org/2000/svg" role="img"><title>Oscilações e ressonância</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Movimento harmonico simples e ressonância</text><rect x="50" y="60" width="320" height="130" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="130" y1="60" x2="130" y2="190" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="210" y1="60" x2="210" y2="190" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="290" y1="60" x2="290" y2="190" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="370" y1="60" x2="370" y2="190" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="169.828" x2="370" y2="169.828" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="125" x2="370" y2="125" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="80.1724" x2="370" y2="80.1724" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="60" x2="50" y2="190" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="50" y1="125" x2="370" y2="125" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="130" y="205" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="210" y="205" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="290" y="205" font-size="10.5" text-anchor="middle" fill="#8a8a93">3</text><text x="370" y="205" font-size="10.5" text-anchor="middle" fill="#8a8a93">4</text><text x="44" y="173.328" font-size="10.5" text-anchor="end" fill="#8a8a93">-1</text><text x="44" y="83.6724" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="374" y="194" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">t</text><text x="46" y="54" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">x</text><path d="M50.0,80.2L51.5,80.5L52.9,81.3L54.4,82.8L55.8,84.8L57.3,87.3L58.7,90.3L60.2,93.8L61.6,97.6L63.1,101.9L64.5,106.4L66.0,111.1L67.5,116.1L68.9,121.2L70.4,126.3L71.8,131.4L73.3,136.4L74.7,141.3L76.2,145.9L77.6,150.3L79.1,154.4L80.5,158.0L82.0,161.3L83.5,164.0L84.9,166.3L86.4,168.0L87.8,169.2L89.3,169.8L90.7,169.8L92.2,169.2L93.6,168.0L95.1,166.3L96.5,164.0L98.0,161.3L99.5,158.0L100.9,154.4L102.4,150.3L103.8,145.9L105.3,141.3L106.7,136.4L108.2,131.4L109.6,126.3L111.1,121.2L112.5,116.1L114.0,111.1L115.5,106.4L116.9,101.9L118.4,97.6L119.8,93.8L121.3,90.3L122.7,87.3L124.2,84.8L125.6,82.8L127.1,81.3L128.5,80.5L130.0,80.2L131.5,80.5L132.9,81.3L134.4,82.8L135.8,84.8L137.3,87.3L138.7,90.3L140.2,93.8L141.6,97.6L143.1,101.9L144.5,106.4L146.0,111.1L147.5,116.1L148.9,121.2L150.4,126.3L151.8,131.4L153.3,136.4L154.7,141.3L156.2,145.9L157.6,150.3L159.1,154.4L160.5,158.0L162.0,161.3L163.5,164.0L164.9,166.3L166.4,168.0L167.8,169.2L169.3,169.8L170.7,169.8L172.2,169.2L173.6,168.0L175.1,166.3L176.5,164.0L178.0,161.3L179.5,158.0L180.9,154.4L182.4,150.3L183.8,145.9L185.3,141.3L186.7,136.4L188.2,131.4L189.6,126.3L191.1,121.2L192.5,116.1L194.0,111.1L195.5,106.4L196.9,101.9L198.4,97.6L199.8,93.8L201.3,90.3L202.7,87.3L204.2,84.8L205.6,82.8L207.1,81.3L208.5,80.5L210.0,80.2L211.5,80.5L212.9,81.3L214.4,82.8L215.8,84.8L217.3,87.3L218.7,90.3L220.2,93.8L221.6,97.6L223.1,101.9L224.5,106.4L226.0,111.1L227.5,116.1L228.9,121.2L230.4,126.3L231.8,131.4L233.3,136.4L234.7,141.3L236.2,145.9L237.6,150.3L239.1,154.4L240.5,158.0L242.0,161.3L243.5,164.0L244.9,166.3L246.4,168.0L247.8,169.2L249.3,169.8L250.7,169.8L252.2,169.2L253.6,168.0L255.1,166.3L256.5,164.0L258.0,161.3L259.5,158.0L260.9,154.4L262.4,150.3L263.8,145.9L265.3,141.3L266.7,136.4L268.2,131.4L269.6,126.3L271.1,121.2L272.5,116.1L274.0,111.1L275.5,106.4L276.9,101.9L278.4,97.6L279.8,93.8L281.3,90.3L282.7,87.3L284.2,84.8L285.6,82.8L287.1,81.3L288.5,80.5L290.0,80.2L291.5,80.5L292.9,81.3L294.4,82.8L295.8,84.8L297.3,87.3L298.7,90.3L300.2,93.8L301.6,97.6L303.1,101.9L304.5,106.4L306.0,111.1L307.5,116.1L308.9,121.2L310.4,126.3L311.8,131.4L313.3,136.4L314.7,141.3L316.2,145.9L317.6,150.3L319.1,154.4L320.5,158.0L322.0,161.3L323.5,164.0L324.9,166.3L326.4,168.0L327.8,169.2L329.3,169.8L330.7,169.8L332.2,169.2L333.6,168.0L335.1,166.3L336.5,164.0L338.0,161.3L339.5,158.0L340.9,154.4L342.4,150.3L343.8,145.9L345.3,141.3L346.7,136.4L348.2,131.4L349.6,126.3L351.1,121.2L352.5,116.1L354.0,111.1L355.5,106.4L356.9,101.9L358.4,97.6L359.8,93.8L361.3,90.3L362.7,87.3L364.2,84.8L365.6,82.8L367.1,81.3L368.5,80.5L370.0,80.2" fill="none" stroke="#0083cb" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M50.0,80.2L51.5,80.9L52.9,82.1L54.4,83.9L55.8,86.2L57.3,89.0L58.7,92.1L60.2,95.7L61.6,99.5L63.1,103.7L64.5,108.0L66.0,112.5L67.5,117.0L68.9,121.6L70.4,126.1L71.8,130.6L73.3,134.9L74.7,138.9L76.2,142.8L77.6,146.3L79.1,149.5L80.5,152.3L82.0,154.7L83.5,156.7L84.9,158.2L86.4,159.3L87.8,159.9L89.3,160.0L90.7,159.7L92.2,158.9L93.6,157.7L95.1,156.2L96.5,154.2L98.0,151.9L99.5,149.2L100.9,146.4L102.4,143.2L103.8,139.9L105.3,136.5L106.7,133.0L108.2,129.4L109.6,125.9L111.1,122.4L112.5,119.0L114.0,115.7L115.5,112.6L116.9,109.8L118.4,107.1L119.8,104.8L121.3,102.8L122.7,101.1L124.2,99.7L125.6,98.7L127.1,98.0L128.5,97.7L130.0,97.8L131.5,98.2L132.9,99.0L134.4,100.1L135.8,101.5L137.3,103.1L138.7,105.1L140.2,107.2L141.6,109.6L143.1,112.1L144.5,114.7L146.0,117.4L147.5,120.2L148.9,122.9L150.4,125.7L151.8,128.4L153.3,131.0L154.7,133.5L156.2,135.8L157.6,137.9L159.1,139.8L160.5,141.6L162.0,143.0L163.5,144.2L164.9,145.1L166.4,145.8L167.8,146.2L169.3,146.2L170.7,146.0L172.2,145.6L173.6,144.9L175.1,143.9L176.5,142.7L178.0,141.3L179.5,139.7L180.9,138.0L182.4,136.1L183.8,134.1L185.3,132.0L186.7,129.8L188.2,127.7L189.6,125.5L191.1,123.4L192.5,121.3L194.0,119.4L195.5,117.5L196.9,115.8L198.4,114.2L199.8,112.8L201.3,111.5L202.7,110.5L204.2,109.7L205.6,109.0L207.1,108.6L208.5,108.5L210.0,108.5L211.5,108.8L212.9,109.2L214.4,109.9L215.8,110.7L217.3,111.7L218.7,112.9L220.2,114.2L221.6,115.6L223.1,117.2L224.5,118.7L226.0,120.4L227.5,122.1L228.9,123.7L230.4,125.4L231.8,127.0L233.3,128.6L234.7,130.1L236.2,131.5L237.6,132.8L239.1,134.0L240.5,135.0L242.0,135.9L243.5,136.7L244.9,137.2L246.4,137.6L247.8,137.8L249.3,137.9L250.7,137.8L252.2,137.5L253.6,137.0L255.1,136.5L256.5,135.7L258.0,134.9L259.5,133.9L260.9,132.9L262.4,131.7L263.8,130.5L265.3,129.2L266.7,127.9L268.2,126.6L269.6,125.3L271.1,124.0L272.5,122.8L274.0,121.6L275.5,120.4L276.9,119.4L278.4,118.4L279.8,117.6L281.3,116.8L282.7,116.2L284.2,115.7L285.6,115.3L287.1,115.1L288.5,115.0L290.0,115.0L291.5,115.2L292.9,115.4L294.4,115.8L295.8,116.3L297.3,117.0L298.7,117.7L300.2,118.5L301.6,119.3L303.1,120.2L304.5,121.2L306.0,122.2L307.5,123.2L308.9,124.2L310.4,125.3L311.8,126.2L313.3,127.2L314.7,128.1L316.2,129.0L317.6,129.8L319.1,130.5L320.5,131.1L322.0,131.6L323.5,132.1L324.9,132.4L326.4,132.6L327.8,132.8L329.3,132.8L330.7,132.7L332.2,132.6L333.6,132.3L335.1,132.0L336.5,131.5L338.0,131.0L339.5,130.4L340.9,129.8L342.4,129.1L343.8,128.3L345.3,127.6L346.7,126.8L348.2,126.0L349.6,125.2L351.1,124.4L352.5,123.7L354.0,122.9L355.5,122.2L356.9,121.6L358.4,121.0L359.8,120.5L361.3,120.0L362.7,119.7L364.2,119.4L365.6,119.1L367.1,119.0L368.5,118.9L370.0,118.9" fill="none" stroke="#f40086" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 4"/><path d="M50.0,80.2L51.5,80.6L52.9,81.0L54.4,81.4L55.8,81.8L57.3,82.2L58.7,82.6L60.2,82.9L61.6,83.3L63.1,83.7L64.5,84.1L66.0,84.4L67.5,84.8L68.9,85.2L70.4,85.5L71.8,85.9L73.3,86.2L74.7,86.6L76.2,86.9L77.6,87.3L79.1,87.6L80.5,88.0L82.0,88.3L83.5,88.6L84.9,89.0L86.4,89.3L87.8,89.6L89.3,89.9L90.7,90.2L92.2,90.6L93.6,90.9L95.1,91.2L96.5,91.5L98.0,91.8L99.5,92.1L100.9,92.4L102.4,92.7L103.8,93.0L105.3,93.3L106.7,93.6L108.2,93.8L109.6,94.1L111.1,94.4L112.5,94.7L114.0,95.0L115.5,95.2L116.9,95.5L118.4,95.8L119.8,96.0L121.3,96.3L122.7,96.5L124.2,96.8L125.6,97.1L127.1,97.3L128.5,97.6L130.0,97.8L131.5,98.1L132.9,98.3L134.4,98.5L135.8,98.8L137.3,99.0L138.7,99.3L140.2,99.5L141.6,99.7L143.1,99.9L144.5,100.2L146.0,100.4L147.5,100.6L148.9,100.8L150.4,101.1L151.8,101.3L153.3,101.5L154.7,101.7L156.2,101.9L157.6,102.1L159.1,102.3L160.5,102.5L162.0,102.7L163.5,102.9L164.9,103.1L166.4,103.3L167.8,103.5L169.3,103.7L170.7,103.9L172.2,104.1L173.6,104.3L175.1,104.5L176.5,104.7L178.0,104.9L179.5,105.0L180.9,105.2L182.4,105.4L183.8,105.6L185.3,105.8L186.7,105.9L188.2,106.1L189.6,106.3L191.1,106.4L192.5,106.6L194.0,106.8L195.5,106.9L196.9,107.1L198.4,107.3L199.8,107.4L201.3,107.6L202.7,107.7L204.2,107.9L205.6,108.1L207.1,108.2L208.5,108.4L210.0,108.5L211.5,108.7L212.9,108.8L214.4,109.0L215.8,109.1L217.3,109.2L218.7,109.4L220.2,109.5L221.6,109.7L223.1,109.8L224.5,109.9L226.0,110.1L227.5,110.2L228.9,110.3L230.4,110.5L231.8,110.6L233.3,110.7L234.7,110.9L236.2,111.0L237.6,111.1L239.1,111.3L240.5,111.4L242.0,111.5L243.5,111.6L244.9,111.7L246.4,111.9L247.8,112.0L249.3,112.1L250.7,112.2L252.2,112.3L253.6,112.4L255.1,112.6L256.5,112.7L258.0,112.8L259.5,112.9L260.9,113.0L262.4,113.1L263.8,113.2L265.3,113.3L266.7,113.4L268.2,113.5L269.6,113.6L271.1,113.7L272.5,113.8L274.0,113.9L275.5,114.0L276.9,114.1L278.4,114.2L279.8,114.3L281.3,114.4L282.7,114.5L284.2,114.6L285.6,114.7L287.1,114.8L288.5,114.9L290.0,115.0L291.5,115.1L292.9,115.2L294.4,115.3L295.8,115.4L297.3,115.4L298.7,115.5L300.2,115.6L301.6,115.7L303.1,115.8L304.5,115.9L306.0,115.9L307.5,116.0L308.9,116.1L310.4,116.2L311.8,116.3L313.3,116.4L314.7,116.4L316.2,116.5L317.6,116.6L319.1,116.7L320.5,116.7L322.0,116.8L323.5,116.9L324.9,117.0L326.4,117.0L327.8,117.1L329.3,117.2L330.7,117.2L332.2,117.3L333.6,117.4L335.1,117.5L336.5,117.5L338.0,117.6L339.5,117.7L340.9,117.7L342.4,117.8L343.8,117.9L345.3,117.9L346.7,118.0L348.2,118.0L349.6,118.1L351.1,118.2L352.5,118.2L354.0,118.3L355.5,118.4L356.9,118.4L358.4,118.5L359.8,118.5L361.3,118.6L362.7,118.7L364.2,118.7L365.6,118.8L367.1,118.8L368.5,118.9L370.0,118.9" fill="none" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3"/><text x="170" y="73" font-size="10.5" text-anchor="middle" fill="#0083cb" font-weight="700">sem atrito</text><text x="298" y="92.7241" font-size="10.5" text-anchor="middle" fill="#f40086" font-weight="700">amortecido</text><text x="210" y="216" font-size="10.5" text-anchor="middle" fill="#5c5c66">a amplitude cai, o período quase não muda</text><rect x="420" y="60" width="290" height="130" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="480.417" y1="60" x2="480.417" y2="190" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="540.833" y1="60" x2="540.833" y2="190" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="601.25" y1="60" x2="601.25" y2="190" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="661.667" y1="60" x2="661.667" y2="190" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="420" y1="150.606" x2="710" y2="150.606" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="420" y1="111.212" x2="710" y2="111.212" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="420" y1="71.8182" x2="710" y2="71.8182" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="420" y1="60" x2="420" y2="190" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="420" y1="190" x2="710" y2="190" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="480.417" y="205" font-size="10.5" text-anchor="middle" fill="#8a8a93">0.5</text><text x="540.833" y="205" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="601.25" y="205" font-size="10.5" text-anchor="middle" fill="#8a8a93">1.5</text><text x="661.667" y="205" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="414" y="154.106" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="414" y="114.712" font-size="10.5" text-anchor="end" fill="#8a8a93">4</text><text x="414" y="75.3182" font-size="10.5" text-anchor="end" fill="#8a8a93">6</text><text x="714" y="194" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">freq. forcada / natural</text><text x="416" y="54" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">amplitude</text><path d="M420.0,170.3L421.3,170.3L422.6,170.3L424.0,170.3L425.3,170.3L426.6,170.2L427.9,170.2L429.2,170.2L430.5,170.2L431.9,170.1L433.2,170.1L434.5,170.0L435.8,170.0L437.1,169.9L438.5,169.8L439.8,169.8L441.1,169.7L442.4,169.6L443.7,169.5L445.0,169.4L446.4,169.3L447.7,169.2L449.0,169.1L450.3,169.0L451.6,168.9L453.0,168.7L454.3,168.6L455.6,168.4L456.9,168.3L458.2,168.1L459.5,168.0L460.9,167.8L462.2,167.6L463.5,167.4L464.8,167.2L466.1,167.0L467.5,166.7L468.8,166.5L470.1,166.3L471.4,166.0L472.7,165.7L474.0,165.4L475.4,165.1L476.7,164.8L478.0,164.5L479.3,164.1L480.6,163.8L482.0,163.4L483.3,163.0L484.6,162.5L485.9,162.1L487.2,161.6L488.5,161.1L489.9,160.6L491.2,160.0L492.5,159.4L493.8,158.8L495.1,158.1L496.5,157.4L497.8,156.7L499.1,155.9L500.4,155.0L501.7,154.1L503.0,153.1L504.4,152.1L505.7,151.0L507.0,149.7L508.3,148.4L509.6,147.0L511.0,145.5L512.3,143.9L513.6,142.0L514.9,140.1L516.2,137.9L517.5,135.5L518.9,132.9L520.2,130.0L521.5,126.7L522.8,123.1L524.1,119.0L525.5,114.3L526.8,109.1L528.1,103.2L529.4,96.4L530.7,88.7L532.0,79.9L533.4,70.2M546.5,65.8L547.9,77.1L549.2,87.5L550.5,96.6L551.8,104.7L553.1,111.7L554.5,117.9L555.8,123.3L557.1,128.0L558.4,132.2L559.7,136.0L561.0,139.3L562.4,142.3L563.7,145.0L565.0,147.5L566.3,149.7L567.6,151.7L569.0,153.5L570.3,155.2L571.6,156.8L572.9,158.2L574.2,159.6L575.5,160.8L576.9,162.0L578.2,163.0L579.5,164.1L580.8,165.0L582.1,165.9L583.5,166.7L584.8,167.5L586.1,168.2L587.4,168.9L588.7,169.6L590.0,170.2L591.4,170.8L592.7,171.4L594.0,171.9L595.3,172.4L596.6,172.9L598.0,173.3L599.3,173.8L600.6,174.2L601.9,174.6L603.2,175.0L604.5,175.4L605.9,175.7L607.2,176.1L608.5,176.4L609.8,176.7L611.1,177.0L612.5,177.3L613.8,177.6L615.1,177.8L616.4,178.1L617.7,178.3L619.0,178.6L620.4,178.8L621.7,179.0L623.0,179.3L624.3,179.5L625.6,179.7L627.0,179.9L628.3,180.1L629.6,180.2L630.9,180.4L632.2,180.6L633.5,180.8L634.9,180.9L636.2,181.1L637.5,181.2L638.8,181.4L640.1,181.5L641.5,181.7L642.8,181.8L644.1,182.0L645.4,182.1L646.7,182.2L648.0,182.3L649.4,182.5L650.7,182.6L652.0,182.7L653.3,182.8L654.6,182.9L656.0,183.0L657.3,183.1L658.6,183.2L659.9,183.3L661.2,183.4L662.5,183.5L663.9,183.6L665.2,183.7L666.5,183.8L667.8,183.9L669.1,184.0L670.5,184.0L671.8,184.1L673.1,184.2L674.4,184.3L675.7,184.4L677.0,184.4L678.4,184.5L679.7,184.6L681.0,184.6L682.3,184.7L683.6,184.8L685.0,184.8L686.3,184.9L687.6,185.0L688.9,185.0L690.2,185.1L691.5,185.1L692.9,185.2L694.2,185.3L695.5,185.3L696.8,185.4L698.1,185.4L699.5,185.5L700.8,185.5L702.1,185.6L703.4,185.6L704.7,185.7L706.0,185.7L707.4,185.8L708.7,185.8L710.0,185.9" fill="none" stroke="#f40086" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M420.0,170.3L421.3,170.3L422.6,170.3L424.0,170.3L425.3,170.3L426.6,170.2L427.9,170.2L429.2,170.2L430.5,170.2L431.9,170.1L433.2,170.1L434.5,170.0L435.8,170.0L437.1,169.9L438.5,169.9L439.8,169.8L441.1,169.7L442.4,169.7L443.7,169.6L445.0,169.5L446.4,169.4L447.7,169.3L449.0,169.2L450.3,169.1L451.6,169.0L453.0,168.9L454.3,168.7L455.6,168.6L456.9,168.5L458.2,168.3L459.5,168.2L460.9,168.0L462.2,167.8L463.5,167.7L464.8,167.5L466.1,167.3L467.5,167.1L468.8,166.9L470.1,166.7L471.4,166.5L472.7,166.2L474.0,166.0L475.4,165.7L476.7,165.4L478.0,165.2L479.3,164.9L480.6,164.6L482.0,164.3L483.3,163.9L484.6,163.6L485.9,163.2L487.2,162.8L488.5,162.5L489.9,162.1L491.2,161.6L492.5,161.2L493.8,160.7L495.1,160.2L496.5,159.7L497.8,159.2L499.1,158.7L500.4,158.1L501.7,157.5L503.0,156.9L504.4,156.3L505.7,155.6L507.0,154.9L508.3,154.2L509.6,153.4L511.0,152.7L512.3,151.9L513.6,151.1L514.9,150.2L516.2,149.4L517.5,148.5L518.9,147.7L520.2,146.8L521.5,145.9L522.8,145.0L524.1,144.2L525.5,143.4L526.8,142.6L528.1,141.9L529.4,141.3L530.7,140.8L532.0,140.3L533.4,140.0L534.7,139.8L536.0,139.7L537.3,139.8L538.6,140.1L540.0,140.4L541.3,140.9L542.6,141.6L543.9,142.4L545.2,143.2L546.5,144.2L547.9,145.2L549.2,146.3L550.5,147.5L551.8,148.6L553.1,149.8L554.5,151.0L555.8,152.2L557.1,153.3L558.4,154.5L559.7,155.6L561.0,156.7L562.4,157.7L563.7,158.8L565.0,159.8L566.3,160.7L567.6,161.6L569.0,162.5L570.3,163.4L571.6,164.2L572.9,164.9L574.2,165.7L575.5,166.4L576.9,167.1L578.2,167.7L579.5,168.4L580.8,169.0L582.1,169.6L583.5,170.1L584.8,170.7L586.1,171.2L587.4,171.7L588.7,172.1L590.0,172.6L591.4,173.0L592.7,173.4L594.0,173.8L595.3,174.2L596.6,174.6L598.0,175.0L599.3,175.3L600.6,175.6L601.9,176.0L603.2,176.3L604.5,176.6L605.9,176.9L607.2,177.1L608.5,177.4L609.8,177.7L611.1,177.9L612.5,178.2L613.8,178.4L615.1,178.6L616.4,178.8L617.7,179.1L619.0,179.3L620.4,179.5L621.7,179.7L623.0,179.9L624.3,180.0L625.6,180.2L627.0,180.4L628.3,180.6L629.6,180.7L630.9,180.9L632.2,181.0L633.5,181.2L634.9,181.3L636.2,181.5L637.5,181.6L638.8,181.8L640.1,181.9L641.5,182.0L642.8,182.2L644.1,182.3L645.4,182.4L646.7,182.5L648.0,182.6L649.4,182.7L650.7,182.8L652.0,183.0L653.3,183.1L654.6,183.2L656.0,183.3L657.3,183.3L658.6,183.4L659.9,183.5L661.2,183.6L662.5,183.7L663.9,183.8L665.2,183.9L666.5,184.0L667.8,184.0L669.1,184.1L670.5,184.2L671.8,184.3L673.1,184.4L674.4,184.4L675.7,184.5L677.0,184.6L678.4,184.6L679.7,184.7L681.0,184.8L682.3,184.8L683.6,184.9L685.0,185.0L686.3,185.0L687.6,185.1L688.9,185.1L690.2,185.2L691.5,185.3L692.9,185.3L694.2,185.4L695.5,185.4L696.8,185.5L698.1,185.5L699.5,185.6L700.8,185.6L702.1,185.7L703.4,185.7L704.7,185.8L706.0,185.8L707.4,185.9L708.7,185.9L710.0,185.9" fill="none" stroke="#c67600" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><line x1="540.833" y1="60" x2="540.833" y2="190" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="4 4"/><text x="540.833" y="52" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="700">frequência natural</text><text x="565" y="216" font-size="10.5" text-anchor="middle" fill="#5c5c66">forçar perto da frequência natural gera grandes amplitudes</text><rect x="20" y="228" width="700" height="70" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="250" font-size="12" text-anchor="middle" fill="#333333" font-weight="700">no laboratório</text><text x="370" y="270" font-size="11" text-anchor="middle" fill="#5c5c66">Rotores desbalanceados excitam a estrutura na frequência de rotação. Se ela coincide com a</text><text x="370" y="286" font-size="11" text-anchor="middle" fill="#5c5c66">frequência natural do equipamento, a vibração cresce: por isso os tubos precisam ser balanceados.</text><text x="20" y="326" font-size="11" text-anchor="start" fill="#5c5c66">No MHS o período não depende da amplitude: T = 2 pi raiz de (m/k) para a mola e de (L/g) para o pêndulo.</text></svg>
O amortecimento reduz a amplitude; forçar perto da frequência natural produz ressonância.

## Oscilações amortecidas

Na prática, sempre há atrito ou resistência do meio. Com uma força de amortecimento proporcional à velocidade, \(F = -b\,v\):

\[ m\ddot x + b\dot x + kx = 0 \]

Dependendo de \(b\), há três comportamentos:

- **subamortecido** (\(b\) pequeno): oscila com amplitude que decai exponencialmente, \(A(t) = A_0\,e^{-bt/2m}\);
- **criticamente amortecido:** volta ao equilíbrio no menor tempo possível, sem oscilar (\(b = 2\sqrt{km}\));
- **superamortecido:** volta devagar, sem oscilar.

Amortecedores de carros e ponteiros de instrumentos de medida são projetados perto do amortecimento crítico.

## Oscilações forçadas e ressonância

Quando uma força externa periódica, de frequência \(\omega_d\), age sobre o oscilador, ele passa a oscilar na frequência da força. A amplitude depende de quão próximas estão \(\omega_d\) e a **frequência natural** \(\omega_0 = \sqrt{k/m}\):

\[ A(\omega_d) = \frac{F_0/m}{\sqrt{(\omega_0^2 - \omega_d^2)^2 + (b\,\omega_d/m)^2}} \]

Quando \(\omega_d \approx \omega_0\), ocorre a **ressonância**: a amplitude cresce muito, limitada apenas pelo amortecimento. É assim que se empurra um balanço de forma eficiente, e também o que derrubou a ponte de Tacoma Narrows (1940), embora ali o mecanismo envolvesse também efeitos aerodinâmicos.

## Exemplo resolvido

Uma massa de 0,50 kg presa a uma mola de constante 200 N/m é puxada 4,0 cm e solta.

\[ \omega = \sqrt{200/0{,}5} = 20\ \text{rad/s} \qquad T = 2\pi/20 \approx 0{,}31\ \text{s} \qquad v_{máx} = A\omega = 0{,}80\ \text{m/s} \qquad E = \tfrac12\cdot200\cdot0{,}04^2 = 0{,}16\ \text{J} \]

## Na prática

- **Agitadores e centrífugas:** rotores desbalanceados geram forças periódicas na frequência de rotação. Se ela coincidir com a frequência natural da estrutura (a "velocidade crítica"), as vibrações podem danificar o equipamento. Por isso centrífugas exigem tubos balanceados e passam rapidamente pelas rotações críticas.
- **Incubadoras com agitação orbital:** a frequência de agitação e a amplitude (o "diâmetro de órbita") definem a transferência de oxigênio nos frascos.
- **Espectroscopia no infravermelho:** as ligações químicas vibram como pequenos osciladores, e cada tipo de ligação tem uma frequência natural própria (tema 93).

> **Atenção, erros comuns:**
> Confundir frequência angular \(\omega\) (rad/s) com frequência \(f\) (Hz): \(\omega = 2\pi f\).
> Usar a fórmula do pêndulo simples para grandes amplitudes.
> Achar que o período depende da amplitude no MHS.

## Para fixar

- MHS: \(\ddot x = -\omega^2 x\), \(x = A\cos(\omega t + \phi)\).
- Massa-mola: \(T = 2\pi\sqrt{m/k}\). Pêndulo: \(T = 2\pi\sqrt{L/g}\).
- Ressonância: forçar perto da frequência natural produz grandes amplitudes.
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 2: Gravitação, ondas e termodinâmica. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 15: Oscilações.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 2: Fluidos, oscilações e ondas, calor. 5. ed. São Paulo: Blucher, 2014.",
    "BOYCE, W. E.; DIPRIMA, R. C. **Equações diferenciais elementares e problemas de valores de contorno**. 10. ed. Rio de Janeiro: LTC, 2015.",
  ],
},
{
  id: "r69", num: 69,
  area: "Física Básica: Mecânica",
  disciplina: "Física Básica: Mecânica",
  titulo: "Hidrostática",
  descricao: "Densidade e pressão, a lei de Stevin, pressão atmosférica e manometria, o princípio de Pascal, o empuxo de Arquimedes e a tensão superficial.",
  tags: ["Física 2", "hidrostática", "fluidos", "densidade", "pressão", "Stevin", "pressão manométrica", "manômetro", "Pascal", "empuxo", "Arquimedes", "tensão superficial", "capilaridade"],
  conteudo: String.raw`
## Fluidos em repouso

Líquidos e gases são **fluidos**: não têm forma própria e escoam sob qualquer tensão de cisalhamento, por menor que seja. A hidrostática estuda os fluidos parados, o que vale para tanques de armazenamento, colunas de líquido em manômetros, a flutuação de corpos e a pressão no fundo de um biorreator.

## Densidade e pressão

- **Massa específica (densidade):** \(\rho = m/V\), em kg/m³. Água: cerca de 1000 kg/m³; ar: cerca de 1,2 kg/m³; mercúrio: 13 600 kg/m³. A **densidade relativa** compara com a da água e não tem unidade.
- **Pressão:** força normal por unidade de área, \(p = F/A\). A unidade é o pascal (Pa = N/m²).

| Unidade | Equivalência |
|---|---|
| 1 atm | 101 325 Pa ≈ 1,013 bar ≈ 760 mmHg |
| 1 bar | 100 000 Pa |
| 1 psi | ≈ 6895 Pa |
| 1 mmHg | ≈ 133 Pa |

Num fluido em repouso, a pressão num ponto age igualmente em **todas as direções** e é sempre perpendicular às superfícies.

## A lei de Stevin

<svg viewBox="0 0 740 330" xmlns="http://www.w3.org/2000/svg" role="img"><title>Hidrostática</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">A pressão cresce com a profundidade, não com o formato</text><path d="M40,70 L40,230 L130,230 L130,70 Z" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="85" cy="218" r="4" fill="#f40086" stroke="#f40086" stroke-width="1.4"/><path d="M160,70 L190,230 L250,230 L280,70 Z" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="220" cy="218" r="4" fill="#f40086" stroke="#f40086" stroke-width="1.4"/><path d="M310,110 L310,230 L430,230 L430,110 L400,70 L340,70 Z" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="370" cy="218" r="4" fill="#f40086" stroke="#f40086" stroke-width="1.4"/><line x1="30" y1="218" x2="445" y2="218" stroke="#f40086" stroke-width="1.4" stroke-linecap="round" stroke-dasharray="5 4"/><text x="235" y="244" font-size="11" text-anchor="middle" fill="#f40086" font-weight="700">mesma pressão no fundo</text><line x1="30" y1="70" x2="445" y2="70" stroke="#0083cb" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="4 4"/><text x="235" y="60" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="600">mesmo nível</text><text x="235" y="276" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">A pressão depende so da altura da coluna de líquido: p = p0 + rho g h</text><rect x="470" y="56" width="250" height="180" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="595" y="78" font-size="12" text-anchor="middle" fill="#333333" font-weight="700">empuxo de Arquimedes</text><rect x="492" y="96" width="206" height="110" rx="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><rect x="560" y="120" width="56" height="56" rx="4" fill="#fff" stroke="#8a8a93" stroke-width="1.4"/><line x1="588" y1="120" x2="588" y2="86" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="600" y="96" font-size="10.5" text-anchor="start" fill="#0a8f5e" font-weight="700">empuxo</text><line x1="588" y1="176" x2="588" y2="212" stroke="#d33a4e" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-vm)"/><text x="600" y="206" font-size="10.5" text-anchor="start" fill="#d33a4e" font-weight="700">peso</text><text x="595" y="228" font-size="10" text-anchor="middle" fill="#5c5c66">empuxo = peso do líquido deslocado</text><text x="20" y="294" font-size="11" text-anchor="start" fill="#5c5c66">Num fermentador de 10 m de altura, a pressão no fundo e cerca de 1 atm maior que no topo, o que aumenta</text><text x="20" y="312" font-size="11" text-anchor="start" fill="#5c5c66">a solubilidade do oxigênio nas bolhas que estao embaixo e torna o aumento de escala menos trivial.</text></svg>
A pressão depende apenas da profundidade, e o empuxo, do volume de líquido deslocado.

Num líquido em repouso, a pressão aumenta com a profundidade, porque cada camada sustenta o peso das camadas de cima:

\[ \frac{dp}{dz} = -\rho g \qquad\Rightarrow\qquad p = p_0 + \rho\,g\,h \]

em que \(h\) é a profundidade abaixo da superfície, onde a pressão é \(p_0\). Na água, a pressão sobe cerca de **1 atm a cada 10 m**.

Consequências importantes:

- Pontos à mesma profundidade, no mesmo líquido em repouso e conectado, têm a **mesma pressão**, não importa o formato do recipiente (o "paradoxo hidrostático").
- Em **vasos comunicantes** com o mesmo líquido, o nível é o mesmo. Com líquidos imiscíveis diferentes, as alturas ficam inversamente proporcionais às densidades.

## Pressão absoluta, manométrica e sua medida

- **Pressão absoluta:** medida em relação ao vácuo.
- **Pressão manométrica:** medida em relação à atmosfera, \(p_{man} = p_{abs} - p_{atm}\). A maioria dos manômetros de equipamentos (autoclaves, cilindros de gás, fermentadores) mostra a pressão manométrica.

O **barômetro de Torricelli** (uma coluna de mercúrio num tubo invertido) mostrou que a atmosfera sustenta cerca de 760 mm de mercúrio ao nível do mar. Um **manômetro de tubo em U** mede diferenças de pressão pela diferença de altura do líquido: \(\Delta p = \rho g\,\Delta h\).

**Exemplo:** uma autoclave opera a 121 °C, o que exige vapor saturado a cerca de 2,05 bar absolutos. O manômetro, então, indica cerca de 1,0 bar (ou 15 psi) de pressão manométrica.

## O princípio de Pascal

Uma variação de pressão aplicada a um fluido incompressível confinado se transmite **integralmente** a todos os pontos do fluido. É a base da **prensa hidráulica** e dos freios de carro:

\[ \frac{F_1}{A_1} = \frac{F_2}{A_2} \]

Um pistão com área 100 vezes maior recebe uma força 100 vezes maior. Como o volume deslocado é o mesmo, o pistão grande sobe 100 vezes menos: o trabalho se conserva.

## O empuxo de Arquimedes

Todo corpo imerso num fluido recebe uma força vertical, para cima, igual ao **peso do fluido deslocado**:

\[ E = \rho_{fluido}\,V_{imerso}\,g \]

O empuxo surge porque a pressão embaixo do corpo é maior que em cima. Comparando com o peso do corpo:

- se \(\rho_{corpo} \gt \rho_{fluido}\), o corpo afunda;
- se \(\rho_{corpo} \lt \rho_{fluido}\), flutua, com a fração submersa igual a \(\rho_{corpo}/\rho_{fluido}\);
- se as densidades são iguais, fica em equilíbrio em qualquer profundidade.

Um iceberg (gelo a 917 kg/m³ em água do mar a 1025 kg/m³) fica com cerca de 89% do volume submerso.

**Exemplo:** um objeto pesa 10,0 N no ar e 6,0 N mergulhado em água. O empuxo é 4,0 N, o volume é \(4{,}0/(1000\cdot9{,}8) \approx 4{,}1\times10^{-4}\) m³, e a densidade é \(\rho = (10/9{,}8)/4{,}1\times10^{-4} \approx 2500\) kg/m³. É o método de Arquimedes para medir densidades.

## Tensão superficial e capilaridade

Na superfície de um líquido, as moléculas são puxadas para dentro pelas vizinhas, e a superfície se comporta como uma película esticada. A **tensão superficial** \(\gamma\) é a força por unidade de comprimento dessa película (água a 20 °C: cerca de 0,073 N/m). Ela explica as gotas esféricas, os insetos que andam sobre a água e a **capilaridade**, a subida de líquidos em tubos finos:

\[ h = \frac{2\gamma\cos\theta}{\rho\,g\,r} \]

Quanto mais fino o tubo, maior a subida. A capilaridade ajuda a explicar o movimento de água no solo e participa, junto com a transpiração e a coesão da água, da subida da seiva no xilema. Os **surfactantes** (detergentes, antiespumantes) reduzem \(\gamma\) e são usados em biorreatores para controlar a espuma.

## Na prática: a pressão no fundo de um fermentador

Num fermentador de 10 m de altura de líquido, a pressão no fundo é cerca de 1 atm maior que no topo. Pela lei de Henry, a solubilidade do oxigênio cresce com a pressão parcial, e as bolhas de ar no fundo dissolvem oxigênio com mais facilidade, enquanto o \(\ce{CO2}\) também fica mais dissolvido, podendo afetar as células. Esse gradiente é um dos fatores que tornam o aumento de escala não trivial (tema 44).

> **Atenção, erros comuns:**
> Somar a pressão atmosférica quando a pergunta pede a pressão manométrica, ou esquecê-la quando pede a absoluta.
> Usar o volume total do corpo no empuxo, quando ele está só parcialmente submerso.
> Achar que a pressão no fundo depende da quantidade total de líquido: depende só da profundidade.

## Para fixar

- \(p = p_0 + \rho g h\): a pressão cresce linearmente com a profundidade.
- Pascal: variações de pressão se transmitem a todo o fluido.
- Empuxo = peso do fluido deslocado.
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 2: Gravitação, ondas e termodinâmica. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 14: Fluidos.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 2: Fluidos, oscilações e ondas, calor. 5. ed. São Paulo: Blucher, 2014.",
    "FOX, R. W.; MCDONALD, A. T.; PRITCHARD, P. J. **Introdução à mecânica dos fluidos**. 8. ed. Rio de Janeiro: LTC, 2014.",
  ],
},
{
  id: "r70", num: 70,
  area: "Física Básica: Mecânica",
  disciplina: "Física Básica: Mecânica",
  titulo: "Hidrodinâmica",
  descricao: "Vazão e equação da continuidade, a equação de Bernoulli e suas aplicações, viscosidade, escoamento laminar e turbulento, a lei de Poiseuille e perdas de carga em tubulações.",
  praticar: "questoes.html?disciplina=Fen%C3%B4menos%20de%20Transporte",
  tags: ["Física 2", "Fenômenos de Transporte", "hidrodinâmica", "vazão", "continuidade", "Bernoulli", "Venturi", "Torricelli", "Pitot", "viscosidade", "Reynolds", "Poiseuille", "perda de carga", "fluido não newtoniano"],
  conteudo: String.raw`
## Fluidos em movimento

A hidrodinâmica estuda o escoamento dos fluidos: água em tubulações, meio de cultura sendo bombeado, ar entrando num biorreator, sangue nos vasos. Começa-se com um modelo simplificado, o **fluido ideal** (incompressível, sem viscosidade e com escoamento estacionário), e depois se acrescentam os efeitos reais da viscosidade.

## Vazão e equação da continuidade

A **vazão volumétrica** é o volume que passa por segundo numa seção: \(Q = A\,v\) (m³/s). Para um fluido incompressível, o que entra num tubo precisa sair, então a vazão é a mesma em todas as seções:

\[ A_1\,v_1 = A_2\,v_2 \]

Num estreitamento, a velocidade aumenta. Reduzir o diâmetro pela metade divide a área por quatro e multiplica a velocidade por quatro. É o que se faz ao apertar a ponta da mangueira.

## A equação de Bernoulli

<svg viewBox="0 0 740 340" xmlns="http://www.w3.org/2000/svg" role="img"><title>Hidrodinâmica</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Continuidade e Bernoulli: onde aperta, acelera e a pressão cai</text><path d="M40,80 L250,80 C290,80 300,104 340,104 L420,104 C460,104 470,80 510,80 L700,80" fill="none" stroke="#0083cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M40,176 L250,176 C290,176 300,152 340,152 L420,152 C460,152 470,176 510,176 L700,176" fill="none" stroke="#0083cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M40,80 L250,80 C290,80 300,104 340,104 L420,104 C460,104 470,80 510,80 L700,80 L700,176 L510,176 C470,176 460,152 420,152 L340,152 C300,152 290,176 250,176 L40,176 Z" fill="#e4f2fb" stroke="none" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"/><line x1="102" y1="100" x2="138" y2="100" stroke="#0083cb" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="102" y1="146" x2="138" y2="146" stroke="#0083cb" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="362" y1="114" x2="398" y2="114" stroke="#f40086" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-rs)"/><line x1="362" y1="129.333" x2="398" y2="129.333" stroke="#f40086" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-rs)"/><line x1="362" y1="144.667" x2="398" y2="144.667" stroke="#f40086" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-rs)"/><line x1="362" y1="160" x2="398" y2="160" stroke="#f40086" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-rs)"/><line x1="602" y1="100" x2="638" y2="100" stroke="#0083cb" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="602" y1="146" x2="638" y2="146" stroke="#0083cb" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-az)"/><text x="120" y="198" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">secção larga</text><text x="380" y="198" font-size="11" text-anchor="middle" fill="#f40086" font-weight="700">estreitamento</text><text x="380" y="214" font-size="10" text-anchor="middle" fill="#5c5c66">velocidade maior, pressão menor</text><line x1="120" y1="80" x2="120" y2="50" stroke="#8a8a93" stroke-width="1.4" stroke-linecap="round"/><line x1="380" y1="104" x2="380" y2="50" stroke="#8a8a93" stroke-width="1.4" stroke-linecap="round"/><line x1="120" y1="50" x2="380" y2="50" stroke="#8a8a93" stroke-width="1.4" stroke-linecap="round"/><text x="250" y="42" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">diferença de pressão da a vazao</text><rect x="20" y="232" width="340" height="96" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="190" y="252" font-size="11.5" text-anchor="middle" fill="#0083cb" font-weight="700">escoamento laminar (Re &lt; 2300)</text><line x1="60" y1="266" x2="66" y2="266" stroke="#0083cb" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="60" y1="274" x2="116" y2="274" stroke="#0083cb" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="60" y1="282" x2="146" y2="282" stroke="#0083cb" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="60" y1="290" x2="156" y2="290" stroke="#0083cb" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="60" y1="298" x2="146" y2="298" stroke="#0083cb" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="60" y1="306" x2="116" y2="306" stroke="#0083cb" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="60" y1="314" x2="66" y2="314" stroke="#0083cb" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-az)"/><text x="280" y="292" font-size="10.5" text-anchor="middle" fill="#5c5c66">perfil parabólico</text><rect x="380" y="232" width="340" height="96" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="550" y="252" font-size="11.5" text-anchor="middle" fill="#f40086" font-weight="700">escoamento turbulento (Re &gt; 4000)</text><line x1="420" y1="266" x2="426" y2="266" stroke="#f40086" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-rs)"/><line x1="420" y1="274" x2="508.099" y2="274" stroke="#f40086" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-rs)"/><line x1="420" y1="282" x2="515.877" y2="282" stroke="#f40086" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-rs)"/><line x1="420" y1="290" x2="516" y2="290" stroke="#f40086" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-rs)"/><line x1="420" y1="298" x2="515.877" y2="298" stroke="#f40086" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-rs)"/><line x1="420" y1="306" x2="508.099" y2="306" stroke="#f40086" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-rs)"/><line x1="420" y1="314" x2="426" y2="314" stroke="#f40086" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-rs)"/><text x="640" y="292" font-size="10.5" text-anchor="middle" fill="#5c5c66">perfil achatado e mistura intensa</text></svg>
No estreitamento a velocidade sobe e a pressão cai; o regime define o perfil de velocidades.

Ao longo de uma linha de corrente de um fluido ideal, a energia por unidade de volume se conserva:

\[ p + \tfrac12\rho v^2 + \rho g z = \text{constante} \]

Os três termos são a pressão, a energia cinética por volume e a energia potencial por volume. A consequência mais surpreendente: **onde a velocidade aumenta, a pressão diminui**.

Aplicações:

- **Tubo de Venturi:** no estreitamento, a velocidade sobe e a pressão cai. Medindo a diferença de pressão, calcula-se a vazão. Muitos medidores de vazão industriais usam esse princípio.
- **Teorema de Torricelli:** um líquido sai por um orifício a uma profundidade \(h\) abaixo da superfície com velocidade \(v = \sqrt{2gh}\), a mesma de uma queda livre dessa altura.
- **Tubo de Pitot:** mede a velocidade de um escoamento comparando a pressão de um ponto de estagnação com a pressão estática, \(v = \sqrt{2\Delta p/\rho}\). É usado em aviões.
- **Sustentação:** o formato da asa e o ângulo de ataque fazem o ar passar mais rápido por cima, com pressão menor, gerando a força de sustentação (a explicação completa envolve também a deflexão do ar para baixo).

## Exemplo resolvido: medidor de Venturi

Água escoa num tubo de 10 cm de diâmetro que se estreita para 5 cm. A pressão cai 15 kPa no estreitamento. Qual a vazão?

Pela continuidade, \(v_2 = 4v_1\). Por Bernoulli (tubo horizontal):

\[ \Delta p = \tfrac12\rho\,(v_2^2 - v_1^2) = \tfrac12\cdot1000\cdot15\,v_1^2 \;\Rightarrow\; 15\,000 = 7500\,v_1^2 \;\Rightarrow\; v_1 \approx 1{,}41\ \text{m/s} \]

\[ Q = \pi(0{,}05)^2\times1{,}41 \approx 1{,}1\times10^{-2}\ \text{m}^3/\text{s} \approx 11\ \text{L/s} \]

## Viscosidade: o atrito interno

Fluidos reais resistem ao escoamento. Num fluido **newtoniano**, a tensão de cisalhamento é proporcional à taxa com que a velocidade varia entre as camadas:

\[ \tau = \mu\,\frac{dv}{dy} \]

A **viscosidade dinâmica** \(\mu\) vale cerca de \(1{,}0\times10^{-3}\) Pa·s para a água a 20 °C, cerca de 1,4 Pa·s para a glicerina e cerca de \(1{,}8\times10^{-5}\) Pa·s para o ar. Nos líquidos, a viscosidade **diminui** com a temperatura; nos gases, aumenta.

Muitos fluidos biotecnológicos são **não newtonianos**: caldos de fungos filamentosos, soluções de goma xantana e polissacarídeos costumam ser **pseudoplásticos** (a viscosidade cai quando a agitação aumenta), o que dificulta a mistura longe do impelidor.

## Laminar ou turbulento: o número de Reynolds

O **número de Reynolds** compara as forças de inércia com as viscosas (tema 44):

\[ Re = \frac{\rho\,v\,D}{\mu} \]

Em tubos, o escoamento é **laminar** (em camadas ordenadas) para \(Re \lt 2300\) e **turbulento** (com redemoinhos e mistura intensa) para valores acima de cerca de 4000. Entre esses valores, há uma faixa de transição.

## A lei de Poiseuille

No escoamento laminar num tubo cilíndrico, o perfil de velocidades é parabólico, máximo no centro e zero na parede. A vazão é:

\[ Q = \frac{\pi\,R^4\,\Delta p}{8\,\mu\,L} \]

O **expoente 4** do raio é dramático: reduzir o raio de um tubo pela metade, mantendo a diferença de pressão, divide a vazão por 16. Isso explica o efeito do estreitamento de artérias, a dificuldade de filtrar por poros finos e por que agulhas finas exigem tanta força na seringa.

## Perdas de carga em tubulações

Com viscosidade, a equação de Bernoulli ganha um termo de perda de energia por atrito. Em termos de altura de coluna de fluido (a "carga"):

\[ \frac{p_1}{\rho g} + \frac{v_1^2}{2g} + z_1 + h_{bomba} = \frac{p_2}{\rho g} + \frac{v_2^2}{2g} + z_2 + h_{perdas} \]

A perda distribuída num trecho reto é dada pela **equação de Darcy-Weisbach**, \(h_f = f\,\dfrac{L}{D}\,\dfrac{v^2}{2g}\), em que o fator de atrito vale \(f = 64/Re\) no regime laminar e é obtido do diagrama de Moody no turbulento. Válvulas, curvas e conexões somam perdas localizadas. É esse balanço que define a potência das bombas (tema 23).

> **Atenção, erros comuns:**
> Aplicar Bernoulli entre pontos com grandes perdas por atrito sem corrigir a equação.
> Esquecer de converter diâmetro em raio na lei de Poiseuille, onde o erro é elevado à quarta potência.
> Achar que, num estreitamento, a pressão aumenta porque o fluido "se aperta".

## Para fixar

- Continuidade: \(A_1v_1 = A_2v_2\).
- Bernoulli: \(p + \tfrac12\rho v^2 + \rho g z\) constante; velocidade maior, pressão menor.
- \(Re\) define o regime; Poiseuille dá a vazão laminar com \(Q \propto R^4\).
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 2: Gravitação, ondas e termodinâmica. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 14: Fluidos.",
    "FOX, R. W.; MCDONALD, A. T.; PRITCHARD, P. J. **Introdução à mecânica dos fluidos**. 8. ed. Rio de Janeiro: LTC, 2014.",
    "BIRD, R. B.; STEWART, W. E.; LIGHTFOOT, E. N. **Fenômenos de transporte**. 2. ed. Rio de Janeiro: LTC, 2004.",
    "DORAN, P. M. **Bioprocess engineering principles**. 2. ed. Waltham: Academic Press, 2013. Cap. 7: Fluid flow.",
  ],
}
);
