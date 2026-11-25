/* BIONEXO — Resumos · Áreas 6 e 7: Física Básica (temas 21–26) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r21", num: 21,
  area: "Física Básica: Mecânica",
  disciplina: "Física Básica: Mecânica",
  titulo: "Cinemática e movimento",
  descricao: "Como descrever o movimento: deslocamento, velocidade e aceleração, movimento uniforme e uniformemente variado, leitura de gráficos e queda livre.",
  praticar: "questoes.html?disciplina=F%C3%ADsica%201",
  tags: ["Física 1", "cinemática", "deslocamento", "velocidade", "aceleração", "MRU", "MRUV", "queda livre", "Torricelli"],
  conteudo: String.raw`
## O que a cinemática estuda

A cinemática descreve **como** as coisas se movem (onde estão, com que rapidez, se estão acelerando), sem se preocupar ainda com **por que** se movem, assunto do tema 22. É o primeiro uso das derivadas na prática (tema 3): velocidade é a rapidez com que a posição muda, e aceleração é a rapidez com que a velocidade muda.

## As grandezas do movimento

- **Posição** \(x(t)\): onde o corpo está, medida a partir de uma origem escolhida.
- **Deslocamento** \(\Delta x = x_f - x_i\): a diferença entre a posição final e a inicial. Não é a mesma coisa que a **distância percorrida**. Quem dá uma volta completa numa pista de 400 m percorreu 400 m, mas o seu deslocamento é zero, porque terminou onde começou.
- **Velocidade média:** \(v_m = \dfrac{\Delta x}{\Delta t}\).
- **Velocidade instantânea:** a velocidade num instante exato, \(v = \dfrac{dx}{dt}\). É o que o velocímetro do carro mostra.
- **Aceleração:** a rapidez com que a velocidade muda, \(a = \dfrac{dv}{dt}\).

## Movimento uniforme (MRU)

A velocidade é constante e a aceleração é zero. O corpo percorre distâncias iguais em tempos iguais:

\[ x(t) = x_0 + v\,t \]

## Movimento uniformemente variado (MRUV)

A aceleração é constante, ou seja, a velocidade aumenta (ou diminui) sempre na mesma proporção. Integrando a aceleração (tema 5), obtêm-se as equações:

\[ v = v_0 + a\,t \qquad\qquad x = x_0 + v_0\,t + \tfrac{1}{2}a\,t^2 \]

Eliminando o tempo entre as duas, chega-se à **equação de Torricelli**, útil quando o tempo não é dado nem pedido:

\[ v^2 = v_0^2 + 2a\,\Delta x \]

Também vale \(\Delta x = \dfrac{(v_0 + v)}{2}\,t\): no MRUV, a velocidade média é a média simples entre a inicial e a final.

## Lendo os gráficos do movimento

<svg viewBox="0 0 740 310" xmlns="http://www.w3.org/2000/svg" role="img"><title>Gráficos do movimento</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Os gráficos do movimento: inclinação e área</text><rect x="50" y="56" width="200" height="170" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="100" y1="56" x2="100" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="150" y1="56" x2="150" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="200" y1="56" x2="200" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="250" y1="56" x2="250" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="188.222" x2="250" y2="188.222" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="150.444" x2="250" y2="150.444" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="112.667" x2="250" y2="112.667" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="74.8889" x2="250" y2="74.8889" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="56" x2="50" y2="226" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="50" y1="226" x2="250" y2="226" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="100" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="150" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="200" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">3</text><text x="250" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">4</text><text x="44" y="191.722" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="44" y="153.944" font-size="10.5" text-anchor="end" fill="#8a8a93">4</text><text x="44" y="116.167" font-size="10.5" text-anchor="end" fill="#8a8a93">6</text><text x="44" y="78.3889" font-size="10.5" text-anchor="end" fill="#8a8a93">8</text><text x="254" y="230" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">t</text><text x="46" y="50" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">x</text><path d="M50.0,226.0L50.9,226.0L51.8,226.0L52.7,226.0L53.6,226.0L54.5,225.9L55.5,225.9L56.4,225.8L57.3,225.8L58.2,225.7L59.1,225.7L60.0,225.6L60.9,225.6L61.8,225.5L62.7,225.4L63.6,225.3L64.5,225.2L65.5,225.1L66.4,225.0L67.3,224.9L68.2,224.8L69.1,224.6L70.0,224.5L70.9,224.3L71.8,224.2L72.7,224.0L73.6,223.9L74.5,223.7L75.5,223.6L76.4,223.4L77.3,223.2L78.2,223.0L79.1,222.8L80.0,222.6L80.9,222.4L81.8,222.2L82.7,222.0L83.6,221.7L84.5,221.5L85.5,221.3L86.4,221.0L87.3,220.8L88.2,220.5L89.1,220.2L90.0,220.0L90.9,219.7L91.8,219.4L92.7,219.1L93.6,218.8L94.5,218.5L95.5,218.2L96.4,217.9L97.3,217.6L98.2,217.2L99.1,216.9L100.0,216.6L100.9,216.2L101.8,215.9L102.7,215.5L103.6,215.1L104.5,214.8L105.5,214.4L106.4,214.0L107.3,213.6L108.2,213.2L109.1,212.8L110.0,212.4L110.9,212.0L111.8,211.6L112.7,211.1L113.6,210.7L114.5,210.3L115.5,209.8L116.4,209.4L117.3,208.9L118.2,208.4L119.1,208.0L120.0,207.5L120.9,207.0L121.8,206.5L122.7,206.0L123.6,205.5L124.5,205.0L125.5,204.5L126.4,204.0L127.3,203.4L128.2,202.9L129.1,202.4L130.0,201.8L130.9,201.3L131.8,200.7L132.7,200.1L133.6,199.6L134.5,199.0L135.5,198.4L136.4,197.8L137.3,197.2L138.2,196.6L139.1,196.0L140.0,195.4L140.9,194.8L141.8,194.2L142.7,193.5L143.6,192.9L144.5,192.2L145.5,191.6L146.4,190.9L147.3,190.3L148.2,189.6L149.1,188.9L150.0,188.2L150.9,187.5L151.8,186.8L152.7,186.1L153.6,185.4L154.5,184.7L155.5,184.0L156.4,183.3L157.3,182.5L158.2,181.8L159.1,181.0L160.0,180.3L160.9,179.5L161.8,178.8L162.7,178.0L163.6,177.2L164.5,176.4L165.5,175.6L166.4,174.8L167.3,174.0L168.2,173.2L169.1,172.4L170.0,171.6L170.9,170.8L171.8,169.9L172.7,169.1L173.6,168.3L174.5,167.4L175.5,166.5L176.4,165.7L177.3,164.8L178.2,163.9L179.1,163.0L180.0,162.2L180.9,161.3L181.8,160.4L182.7,159.4L183.6,158.5L184.5,157.6L185.5,156.7L186.4,155.8L187.3,154.8L188.2,153.9L189.1,152.9L190.0,152.0L190.9,151.0L191.8,150.0L192.7,149.0L193.6,148.1L194.5,147.1L195.5,146.1L196.4,145.1L197.3,144.1L198.2,143.0L199.1,142.0L200.0,141.0L200.9,140.0L201.8,138.9L202.7,137.9L203.6,136.8L204.5,135.8L205.5,134.7L206.4,133.6L207.3,132.6L208.2,131.5L209.1,130.4L210.0,129.3L210.9,128.2L211.8,127.1L212.7,126.0L213.6,124.8L214.5,123.7L215.5,122.6L216.4,121.4L217.3,120.3L218.2,119.1L219.1,118.0L220.0,116.8L220.9,115.7L221.8,114.5L222.7,113.3L223.6,112.1L224.5,110.9L225.5,109.7L226.4,108.5L227.3,107.3L228.2,106.1L229.1,104.8L230.0,103.6L230.9,102.4L231.8,101.1L232.7,99.9L233.6,98.6L234.5,97.3L235.5,96.1L236.4,94.8L237.3,93.5L238.2,92.2L239.1,90.9L240.0,89.6L240.9,88.3L241.8,87.0L242.7,85.7L243.6,84.4L244.5,83.0L245.5,81.7L246.4,80.3L247.3,79.0L248.2,77.6L249.1,76.3L250.0,74.9" fill="none" stroke="#0083cb" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><line x1="110" y1="239.6" x2="200" y2="171.6" stroke="#f40086" stroke-width="2" stroke-linecap="round"/><text x="135" y="248" font-size="10" text-anchor="middle" fill="#f40086" font-weight="700">inclinação = velocidade</text><rect x="290" y="56" width="200" height="170" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="340" y1="56" x2="340" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="390" y1="56" x2="390" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="440" y1="56" x2="440" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="490" y1="56" x2="490" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="290" y1="192" x2="490" y2="192" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="290" y1="158" x2="490" y2="158" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="290" y1="124" x2="490" y2="124" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="290" y1="90" x2="490" y2="90" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="290" y1="56" x2="290" y2="226" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="290" y1="226" x2="490" y2="226" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="340" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="390" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="440" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">3</text><text x="490" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">4</text><text x="284" y="195.5" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="284" y="161.5" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="284" y="127.5" font-size="10.5" text-anchor="end" fill="#8a8a93">3</text><text x="284" y="93.5" font-size="10.5" text-anchor="end" fill="#8a8a93">4</text><text x="494" y="230" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">t</text><text x="286" y="50" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">v</text><path d="M290.0,226.0L290.0,226.0L291.2,225.2L292.5,224.3L293.8,223.4L295.0,222.6L296.2,221.8L297.5,220.9L298.8,220.1L300.0,219.2L301.2,218.3L302.5,217.5L303.8,216.7L305.0,215.8L306.2,214.9L307.5,214.1L308.8,213.2L310.0,212.4L311.2,211.6L312.5,210.7L313.8,209.8L315.0,209.0L316.2,208.2L317.5,207.3L318.8,206.4L320.0,205.6L321.2,204.8L322.5,203.9L323.8,203.1L325.0,202.2L326.2,201.3L327.5,200.5L328.8,199.7L330.0,198.8L331.2,197.9L332.5,197.1L333.8,196.2L335.0,195.4L336.2,194.6L337.5,193.7L338.8,192.8L340.0,192.0L341.2,191.2L342.5,190.3L343.8,189.4L345.0,188.6L346.2,187.8L347.5,186.9L348.8,186.1L350.0,185.2L351.2,184.3L352.5,183.5L353.8,182.7L355.0,181.8L356.2,180.9L357.5,180.1L358.8,179.2L360.0,178.4L361.2,177.6L362.5,176.7L363.8,175.8L365.0,175.0L366.2,174.2L367.5,173.3L368.8,172.4L370.0,171.6L371.2,170.8L372.5,169.9L373.8,169.1L375.0,168.2L376.2,167.3L377.5,166.5L378.8,165.7L380.0,164.8L381.2,163.9L382.5,163.1L383.8,162.2L385.0,161.4L386.2,160.6L387.5,159.7L388.8,158.8L390.0,158.0L391.2,157.2L392.5,156.3L393.8,155.4L395.0,154.6L396.2,153.8L397.5,152.9L398.8,152.1L400.0,151.2L401.2,150.3L402.5,149.5L403.8,148.7L405.0,147.8L406.2,146.9L407.5,146.1L408.8,145.2L410.0,144.4L411.2,143.6L412.5,142.7L413.8,141.8L415.0,141.0L416.2,140.2L417.5,139.3L418.8,138.4L420.0,137.6L421.2,136.8L422.5,135.9L423.8,135.1L425.0,134.2L426.2,133.3L427.5,132.5L428.8,131.7L430.0,130.8L431.2,129.9L432.5,129.1L433.8,128.2L435.0,127.4L436.2,126.6L437.5,125.7L438.8,124.9L440.0,124.0L440.0,226.0 Z" fill="#0a8f5e" fill-opacity="0.2" stroke="none"/><path d="M290.0,226.0L290.9,225.4L291.8,224.8L292.7,224.1L293.6,223.5L294.5,222.9L295.5,222.3L296.4,221.7L297.3,221.1L298.2,220.4L299.1,219.8L300.0,219.2L300.9,218.6L301.8,218.0L302.7,217.3L303.6,216.7L304.5,216.1L305.5,215.5L306.4,214.9L307.3,214.3L308.2,213.6L309.1,213.0L310.0,212.4L310.9,211.8L311.8,211.2L312.7,210.5L313.6,209.9L314.5,209.3L315.5,208.7L316.4,208.1L317.3,207.5L318.2,206.8L319.1,206.2L320.0,205.6L320.9,205.0L321.8,204.4L322.7,203.7L323.6,203.1L324.5,202.5L325.5,201.9L326.4,201.3L327.3,200.7L328.2,200.0L329.1,199.4L330.0,198.8L330.9,198.2L331.8,197.6L332.7,196.9L333.6,196.3L334.5,195.7L335.5,195.1L336.4,194.5L337.3,193.9L338.2,193.2L339.1,192.6L340.0,192.0L340.9,191.4L341.8,190.8L342.7,190.1L343.6,189.5L344.5,188.9L345.5,188.3L346.4,187.7L347.3,187.1L348.2,186.4L349.1,185.8L350.0,185.2L350.9,184.6L351.8,184.0L352.7,183.3L353.6,182.7L354.5,182.1L355.5,181.5L356.4,180.9L357.3,180.3L358.2,179.6L359.1,179.0L360.0,178.4L360.9,177.8L361.8,177.2L362.7,176.5L363.6,175.9L364.5,175.3L365.5,174.7L366.4,174.1L367.3,173.5L368.2,172.8L369.1,172.2L370.0,171.6L370.9,171.0L371.8,170.4L372.7,169.7L373.6,169.1L374.5,168.5L375.5,167.9L376.4,167.3L377.3,166.7L378.2,166.0L379.1,165.4L380.0,164.8L380.9,164.2L381.8,163.6L382.7,162.9L383.6,162.3L384.5,161.7L385.5,161.1L386.4,160.5L387.3,159.9L388.2,159.2L389.1,158.6L390.0,158.0L390.9,157.4L391.8,156.8L392.7,156.1L393.6,155.5L394.5,154.9L395.5,154.3L396.4,153.7L397.3,153.1L398.2,152.4L399.1,151.8L400.0,151.2L400.9,150.6L401.8,150.0L402.7,149.3L403.6,148.7L404.5,148.1L405.5,147.5L406.4,146.9L407.3,146.3L408.2,145.6L409.1,145.0L410.0,144.4L410.9,143.8L411.8,143.2L412.7,142.5L413.6,141.9L414.5,141.3L415.5,140.7L416.4,140.1L417.3,139.5L418.2,138.8L419.1,138.2L420.0,137.6L420.9,137.0L421.8,136.4L422.7,135.7L423.6,135.1L424.5,134.5L425.5,133.9L426.4,133.3L427.3,132.7L428.2,132.0L429.1,131.4L430.0,130.8L430.9,130.2L431.8,129.6L432.7,128.9L433.6,128.3L434.5,127.7L435.5,127.1L436.4,126.5L437.3,125.9L438.2,125.2L439.1,124.6L440.0,124.0L440.9,123.4L441.8,122.8L442.7,122.1L443.6,121.5L444.5,120.9L445.5,120.3L446.4,119.7L447.3,119.1L448.2,118.4L449.1,117.8L450.0,117.2L450.9,116.6L451.8,116.0L452.7,115.3L453.6,114.7L454.5,114.1L455.5,113.5L456.4,112.9L457.3,112.3L458.2,111.6L459.1,111.0L460.0,110.4L460.9,109.8L461.8,109.2L462.7,108.5L463.6,107.9L464.5,107.3L465.5,106.7L466.4,106.1L467.3,105.5L468.2,104.8L469.1,104.2L470.0,103.6L470.9,103.0L471.8,102.4L472.7,101.7L473.6,101.1L474.5,100.5L475.5,99.9L476.4,99.3L477.3,98.7L478.2,98.0L479.1,97.4L480.0,96.8L480.9,96.2L481.8,95.6L482.7,94.9L483.6,94.3L484.5,93.7L485.5,93.1L486.4,92.5L487.3,91.9L488.2,91.2L489.1,90.6L490.0,90.0" fill="none" stroke="#0a8f5e" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><text x="375" y="248" font-size="10" text-anchor="middle" fill="#0a8f5e" font-weight="700">área = deslocamento</text><text x="375" y="262" font-size="10" text-anchor="middle" fill="#5c5c66">inclinação = aceleração</text><rect x="530" y="56" width="190" height="170" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="577.5" y1="56" x2="577.5" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="625" y1="56" x2="625" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="672.5" y1="56" x2="672.5" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="720" y1="56" x2="720" y2="226" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="530" y1="141" x2="720" y2="141" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="530" y1="56" x2="720" y2="56" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="530" y1="56" x2="530" y2="226" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="530" y1="226" x2="720" y2="226" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="577.5" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="625" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="672.5" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">3</text><text x="720" y="241" font-size="10.5" text-anchor="middle" fill="#8a8a93">4</text><text x="524" y="144.5" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="524" y="59.5" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="724" y="230" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">t</text><text x="526" y="50" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">a</text><path d="M530.0,226.0L530.0,141.0L531.2,141.0L532.4,141.0L533.6,141.0L534.8,141.0L535.9,141.0L537.1,141.0L538.3,141.0L539.5,141.0L540.7,141.0L541.9,141.0L543.1,141.0L544.2,141.0L545.4,141.0L546.6,141.0L547.8,141.0L549.0,141.0L550.2,141.0L551.4,141.0L552.6,141.0L553.8,141.0L554.9,141.0L556.1,141.0L557.3,141.0L558.5,141.0L559.7,141.0L560.9,141.0L562.1,141.0L563.2,141.0L564.4,141.0L565.6,141.0L566.8,141.0L568.0,141.0L569.2,141.0L570.4,141.0L571.6,141.0L572.8,141.0L573.9,141.0L575.1,141.0L576.3,141.0L577.5,141.0L578.7,141.0L579.9,141.0L581.1,141.0L582.2,141.0L583.4,141.0L584.6,141.0L585.8,141.0L587.0,141.0L588.2,141.0L589.4,141.0L590.6,141.0L591.8,141.0L592.9,141.0L594.1,141.0L595.3,141.0L596.5,141.0L597.7,141.0L598.9,141.0L600.1,141.0L601.2,141.0L602.4,141.0L603.6,141.0L604.8,141.0L606.0,141.0L607.2,141.0L608.4,141.0L609.6,141.0L610.8,141.0L611.9,141.0L613.1,141.0L614.3,141.0L615.5,141.0L616.7,141.0L617.9,141.0L619.1,141.0L620.2,141.0L621.4,141.0L622.6,141.0L623.8,141.0L625.0,141.0L626.2,141.0L627.4,141.0L628.6,141.0L629.8,141.0L630.9,141.0L632.1,141.0L633.3,141.0L634.5,141.0L635.7,141.0L636.9,141.0L638.1,141.0L639.2,141.0L640.4,141.0L641.6,141.0L642.8,141.0L644.0,141.0L645.2,141.0L646.4,141.0L647.6,141.0L648.8,141.0L649.9,141.0L651.1,141.0L652.3,141.0L653.5,141.0L654.7,141.0L655.9,141.0L657.1,141.0L658.2,141.0L659.4,141.0L660.6,141.0L661.8,141.0L663.0,141.0L664.2,141.0L665.4,141.0L666.6,141.0L667.8,141.0L668.9,141.0L670.1,141.0L671.3,141.0L672.5,141.0L672.5,226.0 Z" fill="#c67600" fill-opacity="0.2" stroke="none"/><path d="M530.0,141.0L530.9,141.0L531.7,141.0L532.6,141.0L533.5,141.0L534.3,141.0L535.2,141.0L536.0,141.0L536.9,141.0L537.8,141.0L538.6,141.0L539.5,141.0L540.4,141.0L541.2,141.0L542.1,141.0L543.0,141.0L543.8,141.0L544.7,141.0L545.5,141.0L546.4,141.0L547.3,141.0L548.1,141.0L549.0,141.0L549.9,141.0L550.7,141.0L551.6,141.0L552.5,141.0L553.3,141.0L554.2,141.0L555.0,141.0L555.9,141.0L556.8,141.0L557.6,141.0L558.5,141.0L559.4,141.0L560.2,141.0L561.1,141.0L562.0,141.0L562.8,141.0L563.7,141.0L564.5,141.0L565.4,141.0L566.3,141.0L567.1,141.0L568.0,141.0L568.9,141.0L569.7,141.0L570.6,141.0L571.5,141.0L572.3,141.0L573.2,141.0L574.0,141.0L574.9,141.0L575.8,141.0L576.6,141.0L577.5,141.0L578.4,141.0L579.2,141.0L580.1,141.0L581.0,141.0L581.8,141.0L582.7,141.0L583.5,141.0L584.4,141.0L585.3,141.0L586.1,141.0L587.0,141.0L587.9,141.0L588.7,141.0L589.6,141.0L590.5,141.0L591.3,141.0L592.2,141.0L593.0,141.0L593.9,141.0L594.8,141.0L595.6,141.0L596.5,141.0L597.4,141.0L598.2,141.0L599.1,141.0L600.0,141.0L600.8,141.0L601.7,141.0L602.5,141.0L603.4,141.0L604.3,141.0L605.1,141.0L606.0,141.0L606.9,141.0L607.7,141.0L608.6,141.0L609.5,141.0L610.3,141.0L611.2,141.0L612.0,141.0L612.9,141.0L613.8,141.0L614.6,141.0L615.5,141.0L616.4,141.0L617.2,141.0L618.1,141.0L619.0,141.0L619.8,141.0L620.7,141.0L621.5,141.0L622.4,141.0L623.3,141.0L624.1,141.0L625.0,141.0L625.9,141.0L626.7,141.0L627.6,141.0L628.5,141.0L629.3,141.0L630.2,141.0L631.0,141.0L631.9,141.0L632.8,141.0L633.6,141.0L634.5,141.0L635.4,141.0L636.2,141.0L637.1,141.0L638.0,141.0L638.8,141.0L639.7,141.0L640.5,141.0L641.4,141.0L642.3,141.0L643.1,141.0L644.0,141.0L644.9,141.0L645.7,141.0L646.6,141.0L647.5,141.0L648.3,141.0L649.2,141.0L650.0,141.0L650.9,141.0L651.8,141.0L652.6,141.0L653.5,141.0L654.4,141.0L655.2,141.0L656.1,141.0L657.0,141.0L657.8,141.0L658.7,141.0L659.5,141.0L660.4,141.0L661.3,141.0L662.1,141.0L663.0,141.0L663.9,141.0L664.7,141.0L665.6,141.0L666.5,141.0L667.3,141.0L668.2,141.0L669.0,141.0L669.9,141.0L670.8,141.0L671.6,141.0L672.5,141.0L673.4,141.0L674.2,141.0L675.1,141.0L676.0,141.0L676.8,141.0L677.7,141.0L678.5,141.0L679.4,141.0L680.3,141.0L681.1,141.0L682.0,141.0L682.9,141.0L683.7,141.0L684.6,141.0L685.5,141.0L686.3,141.0L687.2,141.0L688.0,141.0L688.9,141.0L689.8,141.0L690.6,141.0L691.5,141.0L692.4,141.0L693.2,141.0L694.1,141.0L695.0,141.0L695.8,141.0L696.7,141.0L697.5,141.0L698.4,141.0L699.3,141.0L700.1,141.0L701.0,141.0L701.9,141.0L702.7,141.0L703.6,141.0L704.5,141.0L705.3,141.0L706.2,141.0L707.0,141.0L707.9,141.0L708.8,141.0L709.6,141.0L710.5,141.0L711.4,141.0L712.2,141.0L713.1,141.0L714.0,141.0L714.8,141.0L715.7,141.0L716.5,141.0L717.4,141.0L718.3,141.0L719.1,141.0L720.0,141.0" fill="none" stroke="#c67600" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><text x="625" y="248" font-size="9.6" text-anchor="middle" fill="#c67600" font-weight="700">área = variacao da velocidade</text><rect x="20" y="272" width="700" height="32" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="292" font-size="10.4" text-anchor="middle" fill="#333333">No MRUV, a posicao e parabola e a velocidade e reta. A distancia de frenagem cresce com o quadrado da velocidade.</text></svg>
Nos gráficos do movimento, a inclinação é a derivada e a área é a integral.

| Gráfico | A inclinação da curva dá | A área sob a curva dá |
|---|---|---|
| posição × tempo | a velocidade | (não tem significado direto) |
| velocidade × tempo | a aceleração | o **deslocamento** |
| aceleração × tempo | (a variação da aceleração) | a **variação da velocidade** |

No MRUV, o gráfico de posição é uma parábola e o de velocidade é uma reta.

## Queda livre

Sem a resistência do ar, todos os corpos perto da superfície da Terra caem com a mesma aceleração, \(g \approx 9{,}8\ \text{m/s}^2\), não importa a massa. Uma pedra e uma pena cairiam juntas no vácuo. Usando o eixo apontado para cima, a aceleração é \(a = -g\). No ponto mais alto de um lançamento para cima, a velocidade é zero por um instante, mas a aceleração **continua** sendo \(-g\): é ela que faz o objeto começar a descer.

Num lançamento inclinado (como uma bola chutada), o movimento se divide em dois movimentos independentes, um na horizontal (com velocidade constante) e outro na vertical (com aceleração \(-g\)), como na decomposição de vetores do tema 6.

## Exemplos resolvidos

**1. Distância de frenagem.** Um carro a 72 km/h freia com desaceleração de 5 m/s². Que distância percorre até parar?

Primeiro, converter a velocidade: \(72/3{,}6 = 20\) m/s. Como o tempo não foi dado, usamos Torricelli, com velocidade final zero:

\[ 0 = 20^2 - 2\cdot5\cdot\Delta x \;\Rightarrow\; \Delta x = 40\ \text{m}, \qquad t = \frac{0 - 20}{-5} = 4\ \text{s} \]

Uma consequência importante: a distância de frenagem cresce com o **quadrado** da velocidade. Dobrar a velocidade multiplica essa distância por quatro.

**2. Queda livre.** Um objeto é solto de 20 m de altura. Quanto tempo leva para chegar ao chão, e com que velocidade?

\[ 20 = \tfrac12\,9{,}8\,t^2 \;\Rightarrow\; t \approx 2{,}02\ \text{s}, \qquad v = g\,t \approx 19{,}8\ \text{m/s} \]

## Na prática: movimentos no mundo microscópico

Uma bactéria com flagelos, como a *Escherichia coli*, nada a cerca de 20 a 30 micrômetros por segundo, o que equivale a percorrer dezenas de vezes o próprio comprimento a cada segundo. Já a **sedimentação** de células num tanque, depois que elas atingem a velocidade final de queda, é praticamente um movimento uniforme, de poucos micrômetros por segundo. Por isso, separar células apenas deixando-as decantar é muito lento, e a indústria usa centrífugas (tema 22).

> **Atenção, erros comuns:**
> Esquecer de converter km/h em m/s (divida por 3,6).
> Usar as equações do MRUV quando a aceleração **não** é constante: nesse caso, é preciso derivar e integrar.
> Achar que, no ponto mais alto de um lançamento, a aceleração é zero.
> Misturar sinais: escolha um sentido como positivo e mantenha-o para a posição, a velocidade e a aceleração.

## Para fixar

- Velocidade é a derivada da posição; aceleração é a derivada da velocidade.
- MRU: \(x = x_0 + vt\). MRUV: três equações, incluindo a de Torricelli.
- Nos gráficos, a inclinação é a derivada e a área é a integral.
`,
  referencias: [
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 1: Mecânica. 5. ed. São Paulo: Blucher, 2013.",
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 1: Mecânica. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 2: Movimento retilíneo; Cap. 4: Movimento em duas e três dimensões.",
    "YOUNG, H. D.; FREEDMAN, R. A. **Física I**: mecânica (Sears e Zemansky). 14. ed. São Paulo: Pearson, 2016.",
  ],
},
{
  id: "r22", num: 22,
  area: "Física Básica: Mecânica",
  disciplina: "Física Básica: Mecânica",
  titulo: "Leis de Newton e aplicações",
  descricao: "As três leis do movimento, os tipos de força, como montar o diagrama de corpo livre, o atrito, o equilíbrio e a física por trás da centrifugação.",
  praticar: "questoes.html?disciplina=F%C3%ADsica%201",
  tags: ["Física 1", "leis de Newton", "força", "diagrama de corpo livre", "atrito", "plano inclinado", "equilíbrio", "força centrípeta", "centrifugação", "Stokes"],
  conteudo: String.raw`
## As três leis

1. **Lei da inércia:** um corpo parado continua parado, e um corpo em movimento continua em linha reta com velocidade constante, **a não ser que uma força resultante atue sobre ele**. É por isso que, num ônibus que freia de repente, os passageiros são "jogados" para a frente: o corpo deles tende a continuar se movendo.
2. **Princípio fundamental da dinâmica:** a força resultante sobre um corpo é igual à sua massa vezes a sua aceleração, \(\displaystyle\sum\vec{F} = m\,\vec{a}\). Como forças são vetores, essa equação vale **separadamente para cada direção** (eixo \(x\), eixo \(y\)).
3. **Ação e reação:** se um corpo A empurra um corpo B, o corpo B empurra A com a mesma intensidade, em sentido contrário. As duas forças atuam em **corpos diferentes** e, por isso, **nunca se anulam** entre si.

## As forças mais comuns

| Força | Como calcular | Observação |
|---|---|---|
| Peso | \(P = m\,g\) | aponta para baixo, para o centro da Terra |
| Normal | sai da equação de equilíbrio | é a força com que uma superfície empurra o corpo; é perpendicular à superfície e **nem sempre** vale \(mg\) |
| Tração | \(T\) | é a força de um fio ou corda; sempre puxa |
| Atrito estático | \(f_e \le \mu_e\,N\) | impede o corpo de começar a deslizar; ajusta-se até um valor máximo |
| Atrito cinético | \(f_c = \mu_c\,N\) | aparece quando o corpo já desliza; em geral \(\mu_c \lt \mu_e\) |
| Elástica | \(F = -k\,x\) | força de uma mola (lei de Hooke) |
| Centrípeta (resultante) | \(F_c = m\,\omega^2 r = m v^2/r\) | é a resultante que mantém um corpo em movimento circular; aponta para o centro |

## O diagrama de corpo livre: o passo mais importante

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Diagrama de corpo livre</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Diagrama de corpo livre: o passo que evita a maioria dos erros</text><polygon points="60,220 320,220 320,112" fill="#eef1f6" stroke="#d4d6df" stroke-width="1.6" stroke-linejoin="round"/><text x="96" y="212" font-size="9.6" text-anchor="start" fill="#5c5c66">30 graus</text><rect x="210" y="135" width="44" height="30" rx="4" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.6" transform="rotate(-22.5 232 150)"/><line x1="232" y1="150" x2="232" y2="212" stroke="#d33a4e" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-vm)"/><text x="240" y="206" font-size="10" text-anchor="start" fill="#d33a4e" font-weight="700">peso</text><line x1="232" y1="150" x2="186" y2="130" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="178" y="126" font-size="10" text-anchor="end" fill="#0a8f5e" font-weight="700">normal</text><line x1="232" y1="150" x2="272" y2="132" stroke="#c67600" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-la)"/><text x="278" y="128" font-size="10" text-anchor="start" fill="#c67600" font-weight="700">atrito</text><rect x="380" y="56" width="340" height="186" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="550" y="78" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">o roteiro</text><circle cx="400" cy="100" r="9" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.3"/><text x="400" y="104" font-size="9.4" text-anchor="middle" fill="#0083cb" font-weight="700">1</text><text x="418" y="104" font-size="10" text-anchor="start" fill="#333333">isolar o corpo e desenha-lo sozinho</text><circle cx="400" cy="128" r="9" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.3"/><text x="400" y="132" font-size="9.4" text-anchor="middle" fill="#0083cb" font-weight="700">2</text><text x="418" y="132" font-size="10" text-anchor="start" fill="#333333">marcar so as forças que atuam nele</text><circle cx="400" cy="156" r="9" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.3"/><text x="400" y="160" font-size="9.4" text-anchor="middle" fill="#0083cb" font-weight="700">3</text><text x="418" y="160" font-size="10" text-anchor="start" fill="#333333">escolher eixos convenientes</text><circle cx="400" cy="184" r="9" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.3"/><text x="400" y="188" font-size="9.4" text-anchor="middle" fill="#0083cb" font-weight="700">4</text><text x="418" y="188" font-size="10" text-anchor="start" fill="#333333">escrever a soma das forças por eixo</text><circle cx="400" cy="212" r="9" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.3"/><text x="400" y="216" font-size="9.4" text-anchor="middle" fill="#0083cb" font-weight="700">5</text><text x="418" y="216" font-size="10" text-anchor="start" fill="#333333">resolver e conferir sinais e unidades</text><text x="190" y="252" font-size="10" text-anchor="middle" fill="#5c5c66">num plano inclinado, o peso se divide em duas componentes</text><text x="20" y="284" font-size="10.8" text-anchor="start" fill="#5c5c66">A normal nem sempre vale mg: no plano inclinado ela vale mg cos do angulo, e num elevador ela muda.</text></svg>
Isolar o corpo e desenhar só as forças que atuam nele evita quase todos os erros.

Quase todos os erros em problemas de dinâmica vêm de esquecer uma força ou incluir uma força que não existe. O diagrama de corpo livre evita isso:

1. **Isole** o corpo de interesse, desenhando-o sozinho.
2. Desenhe **todas** as forças que atuam **sobre ele** (e só sobre ele).
3. Escolha eixos convenientes. Num plano inclinado, por exemplo, use um eixo ao longo da rampa e outro perpendicular a ela.
4. Escreva \(\sum F_x = m\,a_x\) e \(\sum F_y = m\,a_y\).
5. Resolva e confira unidades e sinais.

Quando o corpo está em **equilíbrio** (parado ou em movimento retilíneo com velocidade constante), a resultante é zero: \(\sum\vec{F} = \vec{0}\). Para corpos que podem girar, também a soma dos torques precisa ser zero (tema 6).

## Exemplo resolvido 1: bloco descendo uma rampa com atrito

Um bloco de 10 kg desce uma rampa inclinada a 30°, com coeficiente de atrito cinético 0,20 (use \(g = 9{,}8\ \text{m/s}^2\)). Qual é a sua aceleração?

**Passo 1, decompor o peso:** a parte do peso que puxa o bloco ao longo da rampa é \(mg\sin30^\circ = 49\) N; a parte que o pressiona contra a rampa é \(mg\cos30^\circ \approx 84{,}9\) N.

**Passo 2, normal e atrito:** perpendicular à rampa não há movimento, então \(N = 84{,}9\) N e o atrito vale \(f_c = 0{,}20\times84{,}9 \approx 17{,}0\) N, puxando para cima da rampa.

**Passo 3, segunda lei ao longo da rampa:**

\[ a = \frac{49 - 17{,}0}{10} \approx 3{,}2\ \text{m/s}^2 \]

Um detalhe útil: um bloco parado sobre uma rampa só começa a deslizar quando \(\tan\theta \gt \mu_e\). Inclinando a rampa aos poucos e medindo o ângulo em que o bloco começa a escorregar, mede-se o coeficiente de atrito estático.

## Exemplo resolvido 2: por que centrifugar?

Quando uma partícula pequena afunda num líquido, ela logo atinge uma **velocidade final** constante, porque o peso fica equilibrado pelo empuxo e pela resistência do líquido. Para partículas esféricas pequenas, essa velocidade é dada pela **lei de Stokes**:

\[ v_t = \frac{2\,r^2\,(\rho_p - \rho_f)\,g}{9\,\mu} \]

em que \(r\) é o raio da partícula, \(\rho_p\) e \(\rho_f\) são as densidades da partícula e do líquido, e \(\mu\) é a viscosidade do líquido.

Para uma levedura com raio de 2,5 µm, densidade 100 kg/m³ maior que a da água, em água (\(\mu = 10^{-3}\) Pa·s):

\[ v_t = \frac{2\,(2{,}5\times10^{-6})^2\,(100)(9{,}8)}{9\times10^{-3}} \approx 1{,}4\times10^{-6}\ \text{m/s} \approx 5\ \text{mm/h} \]

Cinco milímetros por hora: muito lento para um processo industrial. Numa **centrífuga**, a aceleração do movimento circular, \(\omega^2 r\), faz o papel da gravidade, só que muitas vezes maior. Essa multiplicação é expressa pela **força centrífuga relativa** (RCF, em "vezes g"):

\[ \mathrm{RCF} = \frac{\omega^2 r}{g} \approx 1{,}118\times10^{-5}\; r_{(\text{cm})}\; (\text{rpm})^2 \]

A 10 000 rotações por minuto e com raio de 10 cm, a RCF é de cerca de 11 000 vezes g, e a mesma levedura passa a sedimentar a cerca de 15 mm por segundo. Por isso os protocolos indicam a centrifugação em "× g", e não em rpm: centrífugas com raios diferentes precisam de rotações diferentes para produzir o mesmo efeito.

> **Atenção, erros comuns:**
> Anular a ação com a reação: elas atuam em corpos diferentes.
> Supor que a normal é sempre igual ao peso: no plano inclinado, \(N = mg\cos\theta\); num elevador acelerando, ela também muda.
> Confundir massa (em kg, a quantidade de matéria) com peso (em newtons, a força da gravidade).
> Desenhar uma "força centrífuga" no diagrama de um corpo em movimento circular visto de fora: a única resultante é a centrípeta, que aponta para o centro.

## Para fixar

- \(\sum\vec F = m\vec a\), eixo por eixo, sempre a partir de um bom diagrama de corpo livre.
- O atrito estático vai até \(\mu_eN\); o cinético vale \(\mu_cN\).
- A centrifugação é uma sedimentação com a "gravidade" multiplicada por \(\omega^2r/g\).
`,
  referencias: [
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 1: Mecânica. 5. ed. São Paulo: Blucher, 2013.",
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 1: Mecânica. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 5 e 6: Força e movimento I e II.",
    "YOUNG, H. D.; FREEDMAN, R. A. **Física I**: mecânica (Sears e Zemansky). 14. ed. São Paulo: Pearson, 2016.",
    "DORAN, P. M. **Bioprocess engineering principles**. 2. ed. Waltham: Academic Press, 2013.",
  ],
},
{
  id: "r23", num: 23,
  area: "Física Básica: Mecânica",
  disciplina: "Física Básica: Mecânica",
  titulo: "Trabalho, energia e potência",
  descricao: "O que é trabalho de uma força, as formas de energia mecânica, quando a energia se conserva, o que é potência e como isso aparece no projeto de bombas e de agitadores de biorreatores.",
  praticar: "questoes.html?disciplina=F%C3%ADsica%201",
  tags: ["Física 1", "trabalho", "energia cinética", "energia potencial", "conservação da energia", "potência", "rendimento", "agitação"],
  conteudo: String.raw`
## Trabalho: energia transferida por uma força

Em física, uma força realiza **trabalho** quando transfere energia a um corpo ao longo de um deslocamento. Para uma força constante:

\[ W = \vec{F}\cdot\vec{d} = F\,d\cos\theta \]

em que \(\theta\) é o ângulo entre a força e o deslocamento.

- Se a força ajuda o movimento (\(\theta \lt 90^\circ\)), o trabalho é **positivo**.
- Se a força é perpendicular ao movimento (\(\theta = 90^\circ\)), o trabalho é **zero**. A força normal de um piso horizontal, por exemplo, não realiza trabalho sobre uma caixa que desliza nele.
- Se a força se opõe ao movimento (\(\theta \gt 90^\circ\)), como o atrito ou os freios, o trabalho é **negativo**: a força retira energia do corpo.

Quando a força **muda** ao longo do caminho, o trabalho é a área sob o gráfico da força contra a posição, ou seja, uma integral (tema 5). Para uma mola, por exemplo:

\[ W = \int_{x_i}^{x_f} F(x)\,dx \qquad\Rightarrow\qquad W_{mola} = \tfrac12 k\left(x_i^2 - x_f^2\right) \]

## Energia cinética e o teorema trabalho-energia

A **energia cinética** é a energia do movimento:

\[ K = \tfrac{1}{2}\,m\,v^2 \]

O trabalho de **todas** as forças somadas é igual à variação da energia cinética: \(W_{total} = \Delta K\). Se a resultante realiza trabalho positivo, o corpo ganha velocidade; se negativo, perde.

## Energia potencial e conservação da energia

<svg viewBox="0 0 720 290" xmlns="http://www.w3.org/2000/svg" role="img"><title>Conservacao da energia</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">A energia muda de forma, mas o total se mantem</text><path d="M50,210 C110,210 120,80 190,80 C260,80 250,190 320,190 C380,190 380,130 440,130 C500,130 510,210 570,210" fill="none" stroke="#d4d6df" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M50,210 C110,210 120,80 190,80 C260,80 250,190 320,190 C380,190 380,130 440,130 C500,130 510,210 570,210" fill="none" stroke="#eef1f6" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="190" cy="68" r="10" fill="#0083cb" stroke="#fff" stroke-width="2"/><rect x="160" y="10" width="60" height="16" rx="4" fill="#f6e4fa" stroke="none" stroke-width="0"/><rect x="160" y="10" width="54" height="16" rx="4" fill="#a300bc" stroke="none" stroke-width="0"/><text x="190" y="4" font-size="8.6" text-anchor="middle" fill="#a300bc" font-weight="700">potencial</text><rect x="160" y="88" width="60" height="16" rx="4" fill="#e5f6ee" stroke="none" stroke-width="0"/><rect x="160" y="88" width="6" height="16" rx="4" fill="#0a8f5e" stroke="none" stroke-width="0"/><text x="190" y="116" font-size="8.6" text-anchor="middle" fill="#0a8f5e" font-weight="700">cinetica</text><circle cx="320" cy="178" r="10" fill="#0083cb" stroke="#fff" stroke-width="2"/><rect x="290" y="120" width="60" height="16" rx="4" fill="#f6e4fa" stroke="none" stroke-width="0"/><rect x="290" y="120" width="6" height="16" rx="4" fill="#a300bc" stroke="none" stroke-width="0"/><text x="320" y="114" font-size="8.6" text-anchor="middle" fill="#a300bc" font-weight="700">potencial</text><rect x="290" y="198" width="60" height="16" rx="4" fill="#e5f6ee" stroke="none" stroke-width="0"/><rect x="290" y="198" width="54" height="16" rx="4" fill="#0a8f5e" stroke="none" stroke-width="0"/><text x="320" y="226" font-size="8.6" text-anchor="middle" fill="#0a8f5e" font-weight="700">cinetica</text><circle cx="440" cy="118" r="10" fill="#0083cb" stroke="#fff" stroke-width="2"/><rect x="410" y="60" width="60" height="16" rx="4" fill="#f6e4fa" stroke="none" stroke-width="0"/><rect x="410" y="60" width="30" height="16" rx="4" fill="#a300bc" stroke="none" stroke-width="0"/><text x="440" y="54" font-size="8.6" text-anchor="middle" fill="#a300bc" font-weight="700">potencial</text><rect x="410" y="138" width="60" height="16" rx="4" fill="#e5f6ee" stroke="none" stroke-width="0"/><rect x="410" y="138" width="30" height="16" rx="4" fill="#0a8f5e" stroke="none" stroke-width="0"/><text x="440" y="166" font-size="8.6" text-anchor="middle" fill="#0a8f5e" font-weight="700">cinetica</text><text x="300" y="244" font-size="10.5" text-anchor="middle" fill="#5c5c66">sem atrito, a soma das duas barras e sempre a mesma</text><rect x="20" y="258" width="680" height="28" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="360" y="277" font-size="10.4" text-anchor="middle" fill="#333333">Com atrito, parte vira calor. A potencia mede a rapidez dessa transferência, e o rendimento, quanto dela e útil.</text></svg>
Sem atrito, a soma da energia cinética com a potencial se mantém constante.

Algumas forças, como o peso e a força de uma mola, são **conservativas**: o trabalho que realizam não depende do caminho, só dos pontos inicial e final. A elas se associa uma **energia potencial**, uma energia "guardada" pela posição:

- gravitacional: \(U_g = m\,g\,h\);
- elástica: \(U_e = \tfrac12 k\,x^2\).

Quando não há atrito nem outras perdas, a **energia mecânica se conserva**:

\[ K_i + U_i = K_f + U_f \]

Quando há atrito, parte da energia mecânica se transforma em energia térmica (o corpo e a superfície esquentam): \(\Delta E_{mec} = -f_c\,d\). A energia total continua conservada; apenas muda de forma.

## Potência e rendimento

A **potência** mede **com que rapidez** a energia é transferida:

\[ P = \frac{W}{\Delta t} = \vec{F}\cdot\vec{v} \]

A unidade é o watt (W), igual a um joule por segundo. Também se usam o cavalo-vapor (1 cv ≈ 735,5 W) e o horsepower (1 hp ≈ 745,7 W). Atenção: o **quilowatt-hora** (kWh), que aparece na conta de luz, é uma unidade de **energia**, e não de potência (1 kWh = 3,6 milhões de joules).

Nenhuma máquina aproveita toda a energia que recebe. O **rendimento** compara a potência útil com a potência consumida:

\[ \eta = \frac{P_{útil}}{P_{total}} \]

## Exemplos resolvidos

**1. Dimensionando uma bomba.** É preciso elevar 2,0 m³ de água (2000 kg) até uma altura de 15 m em 10 minutos. Qual a potência necessária?

O trabalho útil é o ganho de energia potencial: \(W = mgh = 2000\times9{,}8\times15 = 2{,}94\times10^{5}\) J. Em 600 segundos:

\[ P_{útil} = \frac{2{,}94\times10^5}{600} = 490\ \text{W} \]

Se a bomba tem rendimento de 70%, o motor precisa consumir \(490/0{,}70 = 700\) W.

**2. Conservação de energia.** Um corpo desliza sem atrito a partir do repouso, de uma altura de 5,0 m. Com que velocidade chega embaixo?

Toda a energia potencial vira cinética: \(mgh = \tfrac12 mv^2\), logo \(v = \sqrt{2gh} = \sqrt{98} \approx 9{,}9\) m/s. A massa se cancela, e o formato da rampa não importa.

## Na prática: a potência de agitação de um biorreator

Num biorreator, o agitador gasta energia para misturar o meio, distribuir o ar e manter as células em suspensão. A potência transmitida por um agitador, com o líquido em regime turbulento, é

\[ P = N_P\,\rho\,N^3\,D^5 \]

em que \(N_P\) é o **número de potência** (cerca de 5 para a turbina de pás retas mais usada, a turbina Rushton), \(\rho\) é a densidade do líquido, \(N\) é a rotação em rotações por segundo e \(D\) é o diâmetro do impelidor.

**Exemplo:** com \(\rho = 1000\ \text{kg/m}^3\), \(N = 2\) rotações por segundo (120 rpm) e \(D = 0{,}5\) m:

\[ P = 5\times1000\times2^3\times0{,}5^5 = 1250\ \text{W} \]

Repare no expoente 5 do diâmetro: dobrar o tamanho do impelidor, mantendo a rotação, multiplica a potência por 32. A potência por unidade de volume (\(P/V\)) influencia a mistura, a transferência de oxigênio e o "estresse" mecânico sobre as células, e é um dos critérios mais usados para levar um processo do laboratório para a escala industrial.

> **Atenção, erros comuns:**
> Achar que toda força realiza trabalho: uma força perpendicular ao deslocamento não realiza.
> Usar a conservação da energia mecânica quando há atrito.
> Confundir kW (potência) com kWh (energia).

## Para fixar

- \(W = Fd\cos\theta\); para forças variáveis, usa-se a integral.
- \(W_{total} = \Delta K\); sem perdas, \(K + U\) se mantém constante.
- Potência é a rapidez com que a energia é transferida; rendimento é a razão entre a potência útil e a consumida.
`,
  referencias: [
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 1: Mecânica. 5. ed. São Paulo: Blucher, 2013.",
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 1: Mecânica. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 7 e 8.",
    "SCHMIDELL, W. et al. (coord.). **Biotecnologia industrial**. v. 2: Engenharia bioquímica. São Paulo: Blucher, 2001.",
    "DORAN, P. M. **Bioprocess engineering principles**. 2. ed. Waltham: Academic Press, 2013.",
  ],
},
{
  id: "r24", num: 24,
  area: "Física Básica: Termodinâmica e Eletricidade",
  disciplina: "Física Básica: Termodinâmica e Eletricidade",
  titulo: "Temperatura e calor",
  descricao: "A diferença entre temperatura e calor, as escalas termométricas, calor sensível e latente, calorimetria e o cálculo da energia para esterilizar um meio de cultura.",
  tags: ["temperatura", "calor", "escala termométrica", "Kelvin", "calor específico", "capacidade térmica", "calor latente", "calorimetria", "esterilização"],
  conteudo: String.raw`
## Temperatura e calor não são a mesma coisa

No dia a dia, as duas palavras se misturam, mas em física têm significados diferentes:

- **Temperatura** mede o grau de agitação das partículas de um corpo. É uma característica do corpo naquele momento.
- **Calor** é **energia em trânsito**: a energia que passa de um corpo mais quente para um mais frio, por causa da diferença de temperatura. Um corpo não "tem" calor; ele tem energia interna. O calor é o que flui.

A **lei zero da termodinâmica** diz que, se dois corpos estão cada um em equilíbrio térmico com um terceiro, estão em equilíbrio entre si. Parece óbvio, mas é o que permite usar um termômetro: ele entra em equilíbrio com o corpo e passa a ter a mesma temperatura.

## As escalas de temperatura

\[ T_{(\text{K})} = T_{(°\text{C})} + 273{,}15 \qquad\qquad T_{(°\text{F})} = 1{,}8\,T_{(°\text{C})} + 32 \]

Uma **variação** de 1 °C é igual a uma variação de 1 K (e a 1,8 °F). Nas equações da termodinâmica (gases, velocidade de reações, energia livre), a temperatura precisa estar sempre em **kelvin**.

## Calor sensível: muda a temperatura

Quando um corpo recebe calor e a sua temperatura sobe, sem mudança de estado físico:

\[ Q = m\,c\,\Delta T = C\,\Delta T \]

O **calor específico** \(c\) é uma propriedade do material: diz quanta energia é necessária para aquecer 1 kg (ou 1 g) da substância em 1 grau. A **capacidade térmica** \(C = mc\) é uma propriedade do objeto inteiro.

A água tem um calor específico muito alto, 4,18 kJ por kg por grau (ou 1 caloria por grama por grau). Isso significa que ela demora a esquentar e a esfriar, o que a torna um excelente "amortecedor" de temperatura, tanto nos seres vivos quanto nos biorreatores.

## Calor latente: muda o estado físico

<svg viewBox="0 0 720 310" xmlns="http://www.w3.org/2000/svg" role="img"><title>Curva de aquecimento</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Curva de aquecimento: os patamares são as mudancas de estado</text><rect x="60" y="62" width="420" height="182" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="139.245" y1="62" x2="139.245" y2="244" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="218.491" y1="62" x2="218.491" y2="244" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="297.736" y1="62" x2="297.736" y2="244" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="376.981" y1="62" x2="376.981" y2="244" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="456.226" y1="62" x2="456.226" y2="244" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="221.25" x2="480" y2="221.25" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="164.375" x2="480" y2="164.375" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="107.5" x2="480" y2="107.5" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="62" x2="60" y2="244" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="60" y1="221.25" x2="480" y2="221.25" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="139.245" y="259" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="218.491" y="259" font-size="10.5" text-anchor="middle" fill="#8a8a93">4</text><text x="297.736" y="259" font-size="10.5" text-anchor="middle" fill="#8a8a93">6</text><text x="376.981" y="259" font-size="10.5" text-anchor="middle" fill="#8a8a93">8</text><text x="456.226" y="259" font-size="10.5" text-anchor="middle" fill="#8a8a93">10</text><text x="54" y="167.875" font-size="10.5" text-anchor="end" fill="#8a8a93">50</text><text x="54" y="111" font-size="10.5" text-anchor="end" fill="#8a8a93">100</text><text x="484" y="248" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">calor</text><text x="56" y="56" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">C</text><path d="M60.0,244.0L107.5,221.2L186.8,221.2L242.3,107.5L400.8,107.5L456.2,79.1" fill="none" stroke="#0083cb" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="107.547" y1="221.25" x2="186.792" y2="221.25" stroke="#f40086" stroke-width="4" stroke-linecap="round"/><line x1="242.264" y1="107.5" x2="400.755" y2="107.5" stroke="#f40086" stroke-width="4" stroke-linecap="round"/><text x="147.17" y="209.25" font-size="10.5" text-anchor="middle" fill="#f40086" font-weight="700">fusao</text><text x="321.509" y="95.5" font-size="10.5" text-anchor="middle" fill="#f40086" font-weight="700">vaporizacao</text><text x="83.7736" y="224.625" font-size="9.6" text-anchor="middle" fill="#5c5c66">gelo</text><text x="214.528" y="158.688" font-size="9.6" text-anchor="middle" fill="#5c5c66">água líquida</text><text x="432.453" y="87.025" font-size="9.6" text-anchor="middle" fill="#5c5c66">vapor</text><rect x="500" y="62" width="210" height="170" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="605" y="86" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">duas contas diferentes</text><text x="605" y="112" font-size="10.4" text-anchor="middle" fill="#0083cb" font-weight="700">nas rampas</text><text x="605" y="128" font-size="10" text-anchor="middle" fill="#333333">Q = m c variacao de T</text><text x="605" y="144" font-size="9.6" text-anchor="middle" fill="#5c5c66">a temperatura sobe</text><text x="605" y="172" font-size="10.4" text-anchor="middle" fill="#f40086" font-weight="700">nos patamares</text><text x="605" y="188" font-size="10" text-anchor="middle" fill="#333333">Q = m L</text><text x="605" y="204" font-size="9.6" text-anchor="middle" fill="#5c5c66">a temperatura fica parada</text><text x="20" y="282" font-size="10.8" text-anchor="start" fill="#5c5c66">Vaporizar 1 kg de água exige mais de cinco vezes a energia de aquece-la de 0 a 100 graus.</text><text x="20" y="298" font-size="10.8" text-anchor="start" fill="#5c5c66">E por isso que o vapor e tao eficiente para esterilizar: ao condensar, devolve todo esse calor latente.</text></svg>
Nos patamares, o calor muda o estado físico sem alterar a temperatura.

Durante uma mudança de estado (fusão, vaporização), o corpo recebe calor **sem mudar de temperatura**. Toda a energia vai para reorganizar as moléculas:

\[ Q = m\,L \]

Para a água, o calor de fusão é de cerca de 334 kJ/kg (80 cal/g) e o de vaporização, de cerca de 2257 kJ/kg a 100 °C (aproximadamente 540 cal/g). Vaporizar 1 kg de água exige mais de cinco vezes a energia necessária para aquecê-la de 0 a 100 °C.

## Calorimetria: as trocas de calor num sistema isolado

Num sistema isolado (que não troca calor com o ambiente), a energia que um corpo perde é ganha pelos outros:

\[ \sum Q = 0 \]

(com \(Q\) positivo para quem recebe calor e negativo para quem cede).

## Exemplos resolvidos

**1. Misturando água quente e fria.** Misturam-se 200 g de água a 80 °C com 300 g de água a 20 °C. Qual a temperatura final?

\[ 200\,c\,(T - 80) + 300\,c\,(T - 20) = 0 \;\Rightarrow\; T = \frac{200\cdot80 + 300\cdot20}{500} = 44\ °\text{C} \]

**2. Derretendo gelo.** Quanta energia é preciso para derreter 100 g de gelo a 0 °C e aquecer a água até 20 °C?

Fusão: \(100\times334 = 33\,400\) J. Aquecimento: \(100\times4{,}18\times20 = 8\,360\) J. Total: cerca de 41,8 kJ, dos quais três quartos vão só para derreter o gelo.

**3. Esterilizando um meio de cultura.** Quanta energia é preciso para aquecer 10 L (cerca de 10 kg) de meio aquoso de 25 °C até 121 °C, a temperatura usual de esterilização?

\[ Q = 10\times4{,}18\times(121 - 25) \approx 4{,}0\times10^{3}\ \text{kJ} \]

Se essa energia vier de vapor que condensa a 121 °C (calor latente de cerca de 2200 kJ/kg nessa temperatura), são necessários aproximadamente \(4000/2200 \approx 1{,}8\) kg de vapor, sem contar as perdas. O vapor é tão eficiente para aquecer justamente por causa do calor latente que libera ao condensar.

## Na prática: o calor produzido pelos próprios microrganismos

O metabolismo das células libera calor. Em cultivos com ar, a quantidade de calor gerada é aproximadamente proporcional ao **oxigênio consumido**: cerca de 0,4 a 0,5 kJ para cada milimol de \(\ce{O2}\), segundo medições clássicas de Cooney e colaboradores. Num fermentador de milhares de litros, esse calor é grande, e retirá-lo pela camisa ou por serpentinas de resfriamento é um dos maiores desafios de projeto (tema 45). Se não for retirado, a temperatura sobe e as células podem morrer.

> **Atenção, erros comuns:**
> Usar graus Celsius em fórmulas que pedem temperatura absoluta (kelvin).
> Esquecer a etapa de mudança de estado quando o processo passa por 0 °C ou 100 °C.
> Confundir capacidade térmica (do objeto, em J/K) com calor específico (do material, em J/(kg·K)).

## Para fixar

- Temperatura é estado; calor é energia em trânsito.
- Calor sensível: \(Q = mc\Delta T\). Calor latente: \(Q = mL\), com temperatura constante.
- Num sistema isolado, a soma dos calores trocados é zero.
`,
  referencias: [
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 2: Fluidos, oscilações e ondas, calor. 5. ed. São Paulo: Blucher, 2014.",
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 2: Gravitação, ondas e termodinâmica. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 18.",
    "YOUNG, H. D.; FREEDMAN, R. A. **Física II**: termodinâmica e ondas (Sears e Zemansky). 14. ed. São Paulo: Pearson, 2015.",
    "COONEY, C. L.; WANG, D. I. C.; MATELES, R. I. Measurement of heat evolution and correlation with oxygen consumption during microbial growth. **Biotechnology and Bioengineering**, v. 11, n. 3, p. 269-281, 1969.",
  ],
},
{
  id: "r25", num: 25,
  area: "Física Básica: Termodinâmica e Eletricidade",
  disciplina: "Física Básica: Termodinâmica e Eletricidade",
  titulo: "Primeira Lei da Termodinâmica",
  descricao: "A conservação da energia aplicada a calor e trabalho: energia interna, processos com gases, entalpia e o balanço de energia de equipamentos e biorreatores.",
  tags: ["primeira lei", "termodinâmica", "energia interna", "trabalho", "calor", "entalpia", "isotérmico", "adiabático", "isobárico", "balanço de energia"],
  conteudo: String.raw`
## Sistema e vizinhança

Em termodinâmica, separa-se a parte do mundo que se quer estudar (o **sistema**) do resto (a **vizinhança**). O sistema pode ser:

- **aberto:** troca matéria e energia com o exterior, como um biorreator contínuo ou uma célula viva;
- **fechado:** troca energia, mas não matéria, como um frasco bem tampado;
- **isolado:** não troca nem matéria nem energia.

Algumas grandezas dependem só do estado em que o sistema está, e não de como ele chegou lá. São as **funções de estado**, como a energia interna (\(U\)), a entalpia (\(H\)), a temperatura e a pressão. Já o **calor** e o **trabalho** dependem do caminho seguido. Por isso, não faz sentido falar em "calor de um sistema", e sim em calor **trocado** num processo.

## O enunciado da primeira lei

<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" role="img"><title>Primeira lei</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Primeira lei: a energia so muda de lugar</text><rect x="250" y="86" width="200" height="110" rx="10" fill="#fff" stroke="#333333" stroke-width="2"/><text x="350" y="134" font-size="13" text-anchor="middle" fill="#333333" font-weight="700">sistema</text><text x="350" y="156" font-size="10.4" text-anchor="middle" fill="#5c5c66">energia interna U</text><line x1="140" y1="120" x2="244" y2="120" stroke="#d33a4e" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-vm)"/><text x="190" y="108" font-size="11" text-anchor="middle" fill="#d33a4e" font-weight="700">calor Q</text><text x="190" y="142" font-size="9.6" text-anchor="middle" fill="#5c5c66">que entra</text><line x1="456" y1="162" x2="560" y2="162" stroke="#0a8f5e" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="508" y="150" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">trabalho W</text><text x="508" y="184" font-size="9.6" text-anchor="middle" fill="#5c5c66">que o sistema realiza</text><text x="350" y="232" font-size="15" text-anchor="middle" fill="#333333" font-weight="700">variacao de U = Q - W</text><rect x="20" y="248" width="680" height="26" rx="6" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.1"/><text x="360" y="266" font-size="10.4" text-anchor="middle" fill="#333333">U e função de estado: so depende de onde o sistema esta. Q e W dependem do caminho percorrido.</text></svg>
Calor que entra, trabalho que sai e a energia interna que guarda a diferença.

\[ \Delta U = Q - W \]

A variação da energia interna do sistema é igual ao calor que ele **recebe** (\(Q\)) menos o trabalho que ele **realiza** sobre a vizinhança (\(W\)). É a lei da conservação da energia aplicada a calor e trabalho: a energia não se cria nem se perde, apenas passa de uma forma para outra.

**Atenção à convenção de sinais.** Os livros de física, como o Halliday e o Nussenzveig, usam \(\Delta U = Q - W\), com \(W\) sendo o trabalho realizado **pelo** sistema. Os livros de química e a IUPAC usam \(\Delta U = q + w\), com \(w\) sendo o trabalho realizado **sobre** o sistema. As duas formas dizem a mesma coisa; o importante é saber qual o seu material usa e não misturar as duas.

## O trabalho de expansão

Quando um gás se expande, ele empurra a vizinhança e realiza trabalho:

\[ W = \int_{V_i}^{V_f} p\,dV \]

Se a pressão é constante, isso se reduz a \(W = p\,\Delta V\). No gráfico de pressão contra volume, o trabalho é a **área sob a curva** do processo.

## Processos particulares

| Processo | Condição | O que a primeira lei diz |
|---|---|---|
| Isocórico | volume constante | não há trabalho, então \(\Delta U = Q\) |
| Isobárico | pressão constante | \(W = p\Delta V\) e o calor trocado é igual à variação de entalpia |
| Isotérmico (gás ideal) | temperatura constante | \(\Delta U = 0\), então \(Q = W = nRT\ln(V_f/V_i)\) |
| Adiabático | sem troca de calor | \(\Delta U = -W\): o gás esfria ao se expandir e esquenta ao ser comprimido |
| Cíclico | o sistema volta ao estado inicial | \(\Delta U = 0\), então \(Q = W\) |

O processo adiabático explica um fenômeno do cotidiano: a bomba de encher pneu esquenta, porque o ar é comprimido rapidamente, sem tempo de trocar calor.

## Gás ideal e entalpia

Num gás ideal, a energia interna depende só da temperatura: \(\Delta U = n\,C_V\,\Delta T\), em que \(C_V\) é a capacidade térmica molar a volume constante. Vale também \(C_P - C_V = R\); para um gás monoatômico, \(C_V = \tfrac32R\).

A **entalpia**, \(H = U + pV\), é a grandeza mais conveniente para processos a **pressão constante**, que é o caso da maioria das reações feitas em laboratório e em biorreatores abertos para a atmosfera. Nessas condições, o calor trocado é igual à variação de entalpia: \(\Delta H = Q_p\).

## Exemplos resolvidos

**1. Aquecimento a pressão constante.** Dois mols de um gás ideal monoatômico são aquecidos de 300 K a 400 K, a pressão constante (\(R = 8{,}314\) J/(mol·K)).

Variação da energia interna:

\[ \Delta U = n\,\tfrac32R\,\Delta T = 2\cdot1{,}5\cdot8{,}314\cdot100 \approx 2494\ \text{J} \]

Trabalho realizado pelo gás ao se expandir:

\[ W = p\,\Delta V = nR\,\Delta T \approx 1663\ \text{J} \]

Calor recebido, pela primeira lei: \(Q = \Delta U + W \approx 4157\) J. Conferindo por outro caminho, \(Q = n\,C_P\,\Delta T = 2\cdot2{,}5\cdot8{,}314\cdot100 \approx 4157\) J. ✓ Repare que só 60% do calor recebido ficou como energia interna; o resto saiu como trabalho.

**2. Expansão isotérmica.** Um mol de gás a 300 K dobra de volume à temperatura constante. O trabalho é \(W = 8{,}314\cdot300\cdot\ln2 \approx 1729\) J. Como a temperatura não mudou, \(\Delta U = 0\), e o gás precisou absorver exatamente 1729 J de calor.

## Na prática: o balanço de energia de um equipamento

Na engenharia, a maioria dos equipamentos são sistemas abertos, com correntes entrando e saindo. Em **regime permanente** (quando nada muda com o tempo) e desprezando as energias cinética e potencial das correntes, a primeira lei fica:

\[ \dot{Q} - \dot{W}_s = \sum_{saídas}\dot{m}\,h - \sum_{entradas}\dot{m}\,h \]

em que \(\dot{Q}\) é o calor trocado por unidade de tempo, \(\dot{W}_s\) é o trabalho de eixo (de bombas, compressores ou agitadores), \(\dot{m}\) é a vazão mássica de cada corrente e \(h\) é a entalpia por quilograma.

No **balanço de energia de um biorreator**, entram o calor gerado pelo metabolismo e a energia do agitador; saem o calor retirado pela camisa de resfriamento, o calor levado pela evaporação e o calor que sai com as correntes. É esse balanço que define o tamanho do sistema de resfriamento (temas 43 e 45).

> **Atenção, erros comuns:**
> Misturar as convenções de sinal da física e da química no mesmo cálculo.
> Achar que "isotérmico" significa "sem troca de calor": isso é **adiabático**.
> Usar \(\Delta U = 0\) em processos isotérmicos que não envolvem um gás ideal (como mudanças de estado).

## Para fixar

- \(\Delta U = Q - W\) (convenção da física).
- \(U\) e \(H\) são funções de estado; \(Q\) e \(W\) dependem do caminho.
- Em sistemas abertos, o balanço de energia é escrito com entalpias.
`,
  referencias: [
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 2: Fluidos, oscilações e ondas, calor. 5. ed. São Paulo: Blucher, 2014.",
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 2: Gravitação, ondas e termodinâmica. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 18 e 19.",
    "SMITH, J. M.; VAN NESS, H. C.; ABBOTT, M. M. **Introdução à termodinâmica da engenharia química**. 7. ed. Rio de Janeiro: LTC, 2007.",
    "DORAN, P. M. **Bioprocess engineering principles**. 2. ed. Waltham: Academic Press, 2013. Cap. 5: Energy balances.",
  ],
},
{
  id: "r26", num: 26,
  area: "Física Básica: Termodinâmica e Eletricidade",
  disciplina: "Física Básica: Termodinâmica e Eletricidade",
  titulo: "Circuitos elétricos básicos",
  descricao: "Corrente, tensão e resistência, a Lei de Ohm, potência elétrica, resistores em série e em paralelo, as leis de Kirchhoff e os sensores elétricos usados em laboratório.",
  tags: ["circuito elétrico", "corrente", "tensão", "resistência", "Lei de Ohm", "resistores em série", "resistores em paralelo", "Kirchhoff", "potência elétrica", "Pt100"],
  conteudo: String.raw`
## Por que estudar circuitos em biotecnologia

Quase todos os sensores de um biorreator (de temperatura, de pH, de oxigênio dissolvido) funcionam convertendo uma grandeza física num sinal elétrico. Técnicas como a eletroforese e a eletroporação também dependem de corrente e tensão. Entender o básico dos circuitos ajuda a usar esses equipamentos com segurança e a interpretar o que eles medem.

## As três grandezas fundamentais

- **Corrente elétrica** (\(I\)): a quantidade de carga que passa por segundo num fio, \(I = \dfrac{dq}{dt}\). A unidade é o ampère (A). Por convenção, o sentido da corrente é o do movimento das cargas positivas.
- **Tensão** ou **diferença de potencial** (\(V\)): a energia que cada unidade de carga ganha ou perde entre dois pontos, \(V = W/q\). A unidade é o volt (V). É ela que "empurra" a corrente.
- **Resistência** (\(R\)): a oposição que um material oferece à passagem da corrente, medida em ohm (Ω). Depende do material e do formato do condutor: \(R = \rho\,\dfrac{L}{A}\), em que \(\rho\) é a resistividade do material, \(L\) o comprimento e \(A\) a área da seção do fio. Fios mais longos ou mais finos têm resistência maior.

## A Lei de Ohm e a potência elétrica

Em muitos materiais (os chamados **ôhmicos**), a corrente é proporcional à tensão:

\[ V = R\,I \]

Quando a corrente atravessa uma resistência, parte da energia vira calor (o **efeito Joule**, que é o que aquece o chuveiro elétrico). A potência dissipada é:

\[ P = V\,I = R\,I^2 = \frac{V^2}{R} \]

## Resistores em série e em paralelo

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Circuitos</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Serie e paralelo: o que e igual e o que se soma</text><rect x="30" y="56" width="320" height="170" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="190" y="78" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">em serie</text><line x1="60" y1="150" x2="320" y2="150" stroke="#333333" stroke-width="2" stroke-linecap="round"/><line x1="60" y1="150" x2="60" y2="110" stroke="#333333" stroke-width="2" stroke-linecap="round"/><line x1="320" y1="150" x2="320" y2="110" stroke="#333333" stroke-width="2" stroke-linecap="round"/><line x1="60" y1="110" x2="320" y2="110" stroke="#333333" stroke-width="2" stroke-linecap="round"/><rect x="98" y="100" width="44" height="20" rx="3" fill="#fff" stroke="#0083cb" stroke-width="1.8"/><text x="120" y="94" font-size="9.6" text-anchor="middle" fill="#0083cb" font-weight="700">R1</text><rect x="218" y="100" width="44" height="20" rx="3" fill="#fff" stroke="#0083cb" stroke-width="1.8"/><text x="240" y="94" font-size="9.6" text-anchor="middle" fill="#0083cb" font-weight="700">R2</text><text x="190" y="176" font-size="9.8" text-anchor="middle" fill="#333333">a mesma corrente passa por todos</text><text x="190" y="192" font-size="9.8" text-anchor="middle" fill="#5c5c66">as resistencias se somam</text><text x="190" y="212" font-size="9.8" text-anchor="middle" fill="#0083cb" font-weight="600">a equivalente e maior que todas</text><rect x="380" y="56" width="330" height="170" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="545" y="78" font-size="12" text-anchor="middle" fill="#a300bc" font-weight="700">em paralelo</text><line x1="420" y1="150" x2="680" y2="150" stroke="#333333" stroke-width="2" stroke-linecap="round"/><line x1="420" y1="100" x2="680" y2="100" stroke="#333333" stroke-width="2" stroke-linecap="round"/><line x1="420" y1="150" x2="420" y2="100" stroke="#333333" stroke-width="2" stroke-linecap="round"/><line x1="680" y1="150" x2="680" y2="100" stroke="#333333" stroke-width="2" stroke-linecap="round"/><line x1="500" y1="150" x2="500" y2="134" stroke="#333333" stroke-width="2" stroke-linecap="round"/><line x1="500" y1="116" x2="500" y2="100" stroke="#333333" stroke-width="2" stroke-linecap="round"/><rect x="480" y="116" width="40" height="18" rx="3" fill="#fff" stroke="#a300bc" stroke-width="1.8"/><line x1="600" y1="150" x2="600" y2="134" stroke="#333333" stroke-width="2" stroke-linecap="round"/><line x1="600" y1="116" x2="600" y2="100" stroke="#333333" stroke-width="2" stroke-linecap="round"/><rect x="580" y="116" width="40" height="18" rx="3" fill="#fff" stroke="#a300bc" stroke-width="1.8"/><text x="545" y="176" font-size="9.8" text-anchor="middle" fill="#333333">a mesma tensão em todos</text><text x="545" y="192" font-size="9.8" text-anchor="middle" fill="#5c5c66">os inversos se somam</text><text x="545" y="212" font-size="9.8" text-anchor="middle" fill="#a300bc" font-weight="600">a equivalente e menor que a menor</text><rect x="20" y="242" width="700" height="50" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="262" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">no laboratório</text><text x="370" y="282" font-size="10.2" text-anchor="middle" fill="#5c5c66">Sensores Pt100 medem temperatura pela resistência; eletrodos de pH geram cerca de 59 mV por unidade de pH.</text></svg>
Em série a corrente é a mesma; em paralelo, a tensão.

| | Em série | Em paralelo |
|---|---|---|
| O que é igual para todos | a corrente | a tensão |
| O que se soma | as tensões | as correntes |
| Resistência equivalente | \(R_{eq} = R_1 + R_2 + \dots\) | \(\dfrac{1}{R_{eq}} = \dfrac{1}{R_1} + \dfrac{1}{R_2} + \dots\) |
| Observação | a equivalente é maior que todas | a equivalente é menor que a menor de todas |

Para dois resistores em paralelo, há um atalho: \(R_{eq} = \dfrac{R_1R_2}{R_1 + R_2}\) ("o produto dividido pela soma"). As tomadas de uma casa estão ligadas em paralelo: todos os aparelhos recebem a mesma tensão, e cada um puxa a corrente de que precisa.

## As leis de Kirchhoff

1. **Lei dos nós:** a corrente que chega a um ponto de ligação é igual à corrente que sai dele. Nenhuma carga se acumula ou desaparece.
2. **Lei das malhas:** ao percorrer qualquer caminho fechado do circuito e voltar ao ponto de partida, a soma das tensões é zero. A energia se conserva.

Com essas duas leis, resolve-se qualquer circuito, inclusive os que não podem ser reduzidos a combinações simples de série e paralelo. O resultado é um sistema de equações lineares (tema 8).

## Exemplo resolvido

Uma fonte de 12 V alimenta um resistor \(R_1 = 4\ \Omega\) ligado em série com dois resistores em paralelo, \(R_2 = 6\ \Omega\) e \(R_3 = 3\ \Omega\). Quais são as correntes e as potências?

1. **O paralelo:** \(R_{23} = \dfrac{6\cdot3}{6+3} = 2\ \Omega\). A resistência total é \(R_{eq} = 4 + 2 = 6\ \Omega\).
2. **A corrente total:** \(I = 12/6 = 2\) A.
3. **As tensões:** em \(R_1\), \(V_1 = 4\cdot2 = 8\) V; no paralelo, \(V_{23} = 2\cdot2 = 4\) V.
4. **As correntes no paralelo:** \(I_2 = 4/6 \approx 0{,}67\) A e \(I_3 = 4/3 \approx 1{,}33\) A. Somadas, dão os 2 A da corrente total. ✓
5. **As potências:** \(P_1 = 16\) W, \(P_2 \approx 2{,}67\) W e \(P_3 \approx 5{,}33\) W, num total de 24 W, que é exatamente \(12\ \text{V}\times2\ \text{A}\). ✓

## Na prática: a eletricidade no laboratório de biotecnologia

- **Sensores de temperatura Pt100:** são fios de platina cuja resistência aumenta com a temperatura, aproximadamente segundo \(R(T) \approx 100\,(1 + 0{,}00385\,T)\) Ω, com \(T\) em °C. A 37 °C, \(R \approx 114{,}2\ \Omega\). O aparelho mede essa resistência, num circuito como a ponte de Wheatstone, e a converte em temperatura.
- **Eletrodos de pH:** geram uma pequena tensão que muda cerca de 59 milivolts para cada unidade de pH, a 25 °C. É por isso que precisam ser calibrados com tampões de pH conhecido.
- **Eletrodos de oxigênio dissolvido:** produzem uma corrente proporcional à quantidade de oxigênio no líquido.
- **Eletroforese:** as moléculas de DNA se deslocam no gel por causa da tensão aplicada (tema 60). Como a corrente também aquece o gel (efeito Joule), limita-se a voltagem para evitar bandas distorcidas.
- **Eletroporação:** pulsos muito curtos de alta tensão abrem poros temporários na membrana das células, permitindo a entrada de DNA. É uma das formas de introduzir genes em bactérias e leveduras.

> **Atenção, erros comuns:**
> Achar que a corrente "se gasta" ao passar pelos resistores: o que se gasta é energia; num trecho em série, a corrente é a mesma do início ao fim.
> Somar diretamente resistências em paralelo.
> Aplicar \(V = RI\) a componentes que não são ôhmicos, como diodos.

## Para fixar

- \(V = RI\) e \(P = VI\).
- Em série, a corrente é a mesma e as resistências se somam. Em paralelo, a tensão é a mesma e os inversos se somam.
- Kirchhoff: a carga se conserva nos nós e a energia se conserva nas malhas.
`,
  referencias: [
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 3: Eletromagnetismo. 2. ed. São Paulo: Blucher, 2015.",
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 3: Eletromagnetismo. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 26: Corrente e resistência; Cap. 27: Circuitos.",
    "BOYLESTAD, R. L. **Introdução à análise de circuitos**. 12. ed. São Paulo: Pearson Prentice Hall, 2012.",
  ],
}
);
