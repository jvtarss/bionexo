/* BIONEXO — Resumos complementares · Físico-Química (r71–r79) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r71", num: 71,
  area: "Físico-Química",
  disciplina: "Físico-Química",
  titulo: "Gases ideais, gases reais e transformações gasosas",
  descricao: "As leis de Boyle, Charles e Gay-Lussac, a equação de Clapeyron, misturas de gases e pressões parciais, a teoria cinética, os desvios da idealidade e a equação de van der Waals.",
  praticar: "questoes.html?disciplina=Termodin%C3%A2mica",
  tags: ["Físico-Química", "Termodinâmica", "gás ideal", "Clapeyron", "Boyle", "Charles", "Gay-Lussac", "transformação isotérmica", "isobárica", "isocórica", "Dalton", "pressão parcial", "teoria cinética", "van der Waals", "fator de compressibilidade"],
  conteudo: String.raw`
## Por que os gases são especiais

Nos gases, as moléculas estão muito afastadas e interagem pouco. Por isso, gases diferentes (oxigênio, nitrogênio, gás carbônico) obedecem, em boa aproximação, às **mesmas leis**, independentemente da sua natureza química. Em biotecnologia, gases estão por toda parte: o ar injetado nos biorreatores, o \(\ce{CO2}\) produzido pelas células, o metano dos biodigestores e os cilindros de gases do laboratório.

## As variáveis de estado

O estado de uma quantidade fixa de gás é descrito por três variáveis: **pressão** \(p\), **volume** \(V\) e **temperatura** \(T\), sempre em **kelvin** (tema 24).

## As leis empíricas e as transformações

<svg viewBox="0 0 740 330" xmlns="http://www.w3.org/2000/svg" role="img"><title>Transformacoes gasosas</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">As transformacoes gasosas no diagrama de pressão e volume</text><rect x="60" y="54" width="330" height="220" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="126" y1="54" x2="126" y2="274" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="192" y1="54" x2="192" y2="274" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="258" y1="54" x2="258" y2="274" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="324" y1="54" x2="324" y2="274" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="230" x2="390" y2="230" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="186" x2="390" y2="186" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="142" x2="390" y2="142" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="98" x2="390" y2="98" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="54" x2="60" y2="274" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="60" y1="274" x2="390" y2="274" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="126" y="289" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="192" y="289" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="258" y="289" font-size="10.5" text-anchor="middle" fill="#8a8a93">3</text><text x="324" y="289" font-size="10.5" text-anchor="middle" fill="#8a8a93">4</text><text x="54" y="233.5" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="54" y="189.5" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="54" y="145.5" font-size="10.5" text-anchor="end" fill="#8a8a93">3</text><text x="54" y="101.5" font-size="10.5" text-anchor="end" fill="#8a8a93">4</text><text x="394" y="278" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">V</text><text x="56" y="48" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">p</text><path d="M126.0,98.0L127.1,100.8L128.2,103.6L129.2,106.2L130.3,108.8L131.4,111.3L132.5,113.7L133.6,116.1L134.6,118.4L135.7,120.6L136.8,122.8L137.9,124.8L139.0,126.9L140.0,128.9L141.1,130.8L142.2,132.7L143.3,134.5L144.4,136.3L145.4,138.0L146.5,139.7L147.6,141.4L148.7,143.0L149.8,144.6L150.8,146.1L151.9,147.6L153.0,149.1L154.1,150.5L155.2,151.9L156.2,153.3L157.3,154.6L158.4,156.0L159.5,157.2L160.6,158.5L161.6,159.7L162.7,160.9L163.8,162.1L164.9,163.2L166.0,164.4L167.0,165.5L168.1,166.6L169.2,167.6L170.3,168.7L171.4,169.7L172.4,170.7L173.5,171.7L174.6,172.6L175.7,173.6L176.8,174.5L177.8,175.4L178.9,176.3L180.0,177.2L181.1,178.1L182.2,178.9L183.2,179.7L184.3,180.6L185.4,181.4L186.5,182.2L187.6,182.9L188.6,183.7L189.7,184.5L190.8,185.2L191.9,185.9L193.0,186.6L194.0,187.3L195.1,188.0L196.2,188.7L197.3,189.4L198.4,190.0L199.4,190.7L200.5,191.3L201.6,192.0L202.7,192.6L203.8,193.2L204.8,193.8L205.9,194.4L207.0,195.0L208.1,195.6L209.2,196.1L210.2,196.7L211.3,197.2L212.4,197.8L213.5,198.3L214.6,198.8L215.6,199.4L216.7,199.9L217.8,200.4L218.9,200.9L220.0,201.4L221.0,201.9L222.1,202.3L223.2,202.8L224.3,203.3L225.4,203.8L226.4,204.2L227.5,204.7L228.6,205.1L229.7,205.5L230.8,206.0L231.8,206.4L232.9,206.8L234.0,207.2L235.1,207.7L236.2,208.1L237.2,208.5L238.3,208.9L239.4,209.3L240.5,209.6L241.6,210.0L242.6,210.4L243.7,210.8L244.8,211.1L245.9,211.5L247.0,211.9L248.0,212.2L249.1,212.6L250.2,212.9L251.3,213.3L252.4,213.6L253.4,214.0L254.5,214.3L255.6,214.6L256.7,214.9L257.8,215.3L258.8,215.6L259.9,215.9L261.0,216.2L262.1,216.5L263.2,216.8L264.2,217.1L265.3,217.4L266.4,217.7L267.5,218.0L268.6,218.3L269.6,218.6L270.7,218.9L271.8,219.2L272.9,219.4L274.0,219.7L275.0,220.0L276.1,220.3L277.2,220.5L278.3,220.8L279.4,221.0L280.4,221.3L281.5,221.6L282.6,221.8L283.7,222.1L284.8,222.3L285.8,222.6L286.9,222.8L288.0,223.1L289.1,223.3L290.2,223.5L291.2,223.8L292.3,224.0L293.4,224.2L294.5,224.5L295.6,224.7L296.6,224.9L297.7,225.1L298.8,225.4L299.9,225.6L301.0,225.8L302.0,226.0L303.1,226.2L304.2,226.4L305.3,226.6L306.4,226.8L307.4,227.1L308.5,227.3L309.6,227.5L310.7,227.7L311.8,227.9L312.8,228.1L313.9,228.3L315.0,228.4L316.1,228.6L317.2,228.8L318.2,229.0L319.3,229.2L320.4,229.4L321.5,229.6L322.6,229.8L323.6,229.9L324.7,230.1L325.8,230.3L326.9,230.5L328.0,230.7L329.0,230.8L330.1,231.0L331.2,231.2L332.3,231.3L333.4,231.5L334.4,231.7L335.5,231.8L336.6,232.0L337.7,232.2L338.8,232.3L339.8,232.5L340.9,232.7L342.0,232.8L343.1,233.0L344.2,233.1L345.2,233.3L346.3,233.4L347.4,233.6L348.5,233.7L349.6,233.9L350.6,234.0L351.7,234.2L352.8,234.3L353.9,234.5L355.0,234.6L356.0,234.8L357.1,234.9L358.2,235.0L359.3,235.2L360.4,235.3L361.4,235.5L362.5,235.6L363.6,235.7" fill="none" stroke="#0083cb" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><text x="271.2" y="205.8" font-size="10.5" text-anchor="middle" fill="#0083cb" font-weight="700">isotermica</text><path d="M126.0,71.6L127.1,76.1L128.2,80.5L129.2,84.7L130.3,88.8L131.4,92.7L132.5,96.5L133.6,100.1L134.6,103.6L135.7,107.0L136.8,110.3L137.9,113.5L139.0,116.5L140.0,119.5L141.1,122.4L142.2,125.1L143.3,127.8L144.4,130.5L145.4,133.0L146.5,135.4L147.6,137.8L148.7,140.2L149.8,142.4L150.8,144.6L151.9,146.7L153.0,148.8L154.1,150.8L155.2,152.7L156.2,154.6L157.3,156.5L158.4,158.3L159.5,160.0L160.6,161.8L161.6,163.4L162.7,165.0L163.8,166.6L164.9,168.2L166.0,169.7L167.0,171.1L168.1,172.6L169.2,174.0L170.3,175.4L171.4,176.7L172.4,178.0L173.5,179.3L174.6,180.5L175.7,181.7L176.8,182.9L177.8,184.1L178.9,185.2L180.0,186.4L181.1,187.4L182.2,188.5L183.2,189.6L184.3,190.6L185.4,191.6L186.5,192.6L187.6,193.5L188.6,194.5L189.7,195.4L190.8,196.3L191.9,197.2L193.0,198.1L194.0,198.9L195.1,199.8L196.2,200.6L197.3,201.4L198.4,202.2L199.4,203.0L200.5,203.7L201.6,204.5L202.7,205.2L203.8,205.9L204.8,206.7L205.9,207.3L207.0,208.0L208.1,208.7L209.2,209.4L210.2,210.0L211.3,210.7L212.4,211.3L213.5,211.9L214.6,212.5L215.6,213.1L216.7,213.7L217.8,214.3L218.9,214.8L220.0,215.4L221.0,215.9L222.1,216.5L223.2,217.0L224.3,217.5L225.4,218.1L226.4,218.6L227.5,219.1L228.6,219.6L229.7,220.0L230.8,220.5L231.8,221.0L232.9,221.4L234.0,221.9L235.1,222.4L236.2,222.8L237.2,223.2L238.3,223.7L239.4,224.1L240.5,224.5L241.6,224.9L242.6,225.3L243.7,225.7L244.8,226.1L245.9,226.5L247.0,226.9L248.0,227.3L249.1,227.6L250.2,228.0L251.3,228.4L252.4,228.7L253.4,229.1L254.5,229.4L255.6,229.8L256.7,230.1L257.8,230.5L258.8,230.8L259.9,231.1L261.0,231.4L262.1,231.7L263.2,232.1L264.2,232.4L265.3,232.7L266.4,233.0L267.5,233.3L268.6,233.6L269.6,233.9L270.7,234.2L271.8,234.4L272.9,234.7L274.0,235.0L275.0,235.3L276.1,235.5L277.2,235.8L278.3,236.1L279.4,236.3L280.4,236.6L281.5,236.8L282.6,237.1L283.7,237.3L284.8,237.6L285.8,237.8L286.9,238.1L288.0,238.3L289.1,238.6L290.2,238.8L291.2,239.0L292.3,239.2L293.4,239.5L294.5,239.7L295.6,239.9L296.6,240.1L297.7,240.3L298.8,240.6L299.9,240.8L301.0,241.0L302.0,241.2L303.1,241.4L304.2,241.6L305.3,241.8L306.4,242.0L307.4,242.2L308.5,242.4L309.6,242.6L310.7,242.8L311.8,242.9L312.8,243.1L313.9,243.3L315.0,243.5L316.1,243.7L317.2,243.9L318.2,244.0L319.3,244.2L320.4,244.4L321.5,244.5L322.6,244.7L323.6,244.9L324.7,245.0L325.8,245.2L326.9,245.4L328.0,245.5L329.0,245.7L330.1,245.9L331.2,246.0L332.3,246.2L333.4,246.3L334.4,246.5L335.5,246.6L336.6,246.8L337.7,246.9L338.8,247.1L339.8,247.2L340.9,247.4L342.0,247.5L343.1,247.6L344.2,247.8L345.2,247.9L346.3,248.1L347.4,248.2L348.5,248.3L349.6,248.5L350.6,248.6L351.7,248.7L352.8,248.9L353.9,249.0L355.0,249.1L356.0,249.2L357.1,249.4L358.2,249.5L359.3,249.6L360.4,249.7L361.4,249.9L362.5,250.0L363.6,250.1" fill="none" stroke="#a300bc" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><text x="198.6" y="230" font-size="10.5" text-anchor="middle" fill="#a300bc" font-weight="700">adiabatica</text><line x1="126" y1="89.2" x2="324" y2="89.2" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round"/><text x="225" y="76" font-size="10.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">isobarica (p constante)</text><line x1="350.4" y1="252" x2="350.4" y2="124.4" stroke="#c67600" stroke-width="2.4" stroke-linecap="round"/><text x="344.4" y="190.4" font-size="10.5" text-anchor="end" fill="#c67600" font-weight="700">isocorica</text><path d="M139.2,274.0L139.2,127.3L140.3,129.3L141.4,131.3L142.5,133.2L143.6,135.1L144.7,136.9L145.8,138.6L146.9,140.3L148.0,142.0L149.1,143.6L150.2,145.2L151.3,146.8L152.4,148.3L153.5,149.8L154.6,151.2L155.7,152.6L156.8,154.0L157.9,155.3L159.0,156.7L160.1,158.0L161.2,159.2L162.3,160.5L163.4,161.7L164.5,162.8L165.6,164.0L166.7,165.1L167.8,166.2L168.9,167.3L170.0,168.4L171.1,169.4L172.2,170.5L173.3,171.5L174.4,172.5L175.5,173.4L176.6,174.4L177.7,175.3L178.8,176.2L179.9,177.1L181.0,178.0L182.1,178.9L183.2,179.7L184.3,180.5L185.4,181.4L186.5,182.2L187.6,183.0L188.7,183.7L189.8,184.5L190.9,185.3L192.0,186.0L193.1,186.7L194.2,187.4L195.3,188.1L196.4,188.8L197.5,189.5L198.6,190.2L199.7,190.9L200.8,191.5L201.9,192.1L203.0,192.8L204.1,193.4L205.2,194.0L206.3,194.6L207.4,195.2L208.5,195.8L209.6,196.4L210.7,196.9L211.8,197.5L212.9,198.0L214.0,198.6L215.1,199.1L216.2,199.6L217.3,200.2L218.4,200.7L219.5,201.2L220.6,201.7L221.7,202.2L222.8,202.6L223.9,203.1L225.0,203.6L226.1,204.1L227.2,204.5L228.3,205.0L229.4,205.4L230.5,205.9L231.6,206.3L232.7,206.7L233.8,207.2L234.9,207.6L236.0,208.0L237.1,208.4L238.2,208.8L239.3,209.2L240.4,209.6L241.5,210.0L242.6,210.4L243.7,210.8L244.8,211.1L245.9,211.5L247.0,211.9L248.1,212.2L249.2,212.6L250.3,213.0L251.4,213.3L252.5,213.7L253.6,214.0L254.7,214.3L255.8,214.7L256.9,215.0L258.0,215.3L259.1,215.7L260.2,216.0L261.3,216.3L262.4,216.6L263.5,216.9L264.6,217.2L265.7,217.5L266.8,217.8L267.9,218.1L269.0,218.4L270.1,218.7L271.2,219.0L271.2,274.0 Z" fill="#0083cb" fill-opacity="0.12" stroke="none"/><text x="198.6" y="255.52" font-size="10" text-anchor="middle" fill="#5c5c66">a área e o trabalho</text><rect x="420" y="60" width="300" height="180" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="436" y="82" font-size="11.5" text-anchor="start" fill="#0083cb" font-weight="700">isotermica</text><text x="436" y="97" font-size="10" text-anchor="start" fill="#5c5c66">T constante: p V = constante</text><text x="436" y="122" font-size="11.5" text-anchor="start" fill="#0a8f5e" font-weight="700">isobarica</text><text x="436" y="137" font-size="10" text-anchor="start" fill="#5c5c66">p constante: V / T = constante</text><text x="436" y="162" font-size="11.5" text-anchor="start" fill="#c67600" font-weight="700">isocorica</text><text x="436" y="177" font-size="10" text-anchor="start" fill="#5c5c66">V constante: p / T = constante</text><text x="436" y="202" font-size="11.5" text-anchor="start" fill="#a300bc" font-weight="700">adiabatica</text><text x="436" y="217" font-size="10" text-anchor="start" fill="#5c5c66">sem troca de calor: p V elevado a gama</text><text x="420" y="268" font-size="11" text-anchor="start" fill="#5c5c66">Em todas elas vale p V / T = constante,</text><text x="420" y="284" font-size="11" text-anchor="start" fill="#5c5c66">sempre com a temperatura em kelvin.</text><text x="20" y="312" font-size="11" text-anchor="start" fill="#5c5c66">A lei de Dalton completa o quadro: cada gas de uma mistura contribui com a sua pressão parcial,</text><text x="20" y="328" font-size="11" text-anchor="start" fill="#5c5c66">e e ela, e não a pressão total, que define quanto oxigênio se dissolve no meio de cultura.</text></svg>
Cada transformação é um caminho diferente no diagrama de pressão e volume.

| Transformação | Constante | Lei | Gráfico típico |
|---|---|---|---|
| Isotérmica | \(T\) | Boyle-Mariotte: \(pV = \) constante | hipérbole no diagrama p × V |
| Isobárica | \(p\) | Charles/Gay-Lussac: \(V/T = \) constante | reta passando pela origem no V × T |
| Isocórica (isovolumétrica) | \(V\) | Charles: \(p/T = \) constante | reta passando pela origem no p × T |

Combinando as três, para uma quantidade fixa de gás:

\[ \frac{p_1V_1}{T_1} = \frac{p_2V_2}{T_2} \]

Há ainda a transformação **adiabática** (sem troca de calor), em que \(pV^\gamma\) é constante, com \(\gamma = C_P/C_V\) (1,67 para gases monoatômicos e cerca de 1,4 para o ar). Ela é mais "inclinada" que a isotérmica no diagrama p × V (tema 25).

## A equação de estado do gás ideal (Clapeyron)

\[ p\,V = n\,R\,T \]

com \(R = 8{,}314\) J/(mol·K) \(= 0{,}08206\) L·atm/(mol·K). Nas **CNTP** (0 °C e 1 atm), um mol de gás ideal ocupa 22,4 L; a 25 °C e 1 atm, cerca de 24,5 L.

A equação também dá a densidade de um gás: \(\rho = \dfrac{p\,M}{R\,T}\), em que \(M\) é a massa molar. Gases mais pesados que o ar (como o \(\ce{CO2}\), \(M = 44\) g/mol) se acumulam em locais baixos e mal ventilados, um risco real em salas de fermentação e câmaras com gelo seco.

## Misturas de gases: a lei de Dalton

Numa mistura, cada gás se comporta como se estivesse sozinho no recipiente. A **pressão parcial** de cada componente é a pressão que ele exerceria sozinho, e a pressão total é a soma das parciais:

\[ p_{total} = \sum p_i \qquad\qquad p_i = x_i\,p_{total} \]

em que \(x_i\) é a **fração molar**. No ar seco ao nível do mar, \(x_{O_2} \approx 0{,}21\), então \(p_{O_2} \approx 0{,}21\) atm. É a pressão parcial, e não a total, que define quanto oxigênio se dissolve num meio de cultura, pela **lei de Henry**: \(C^* = p_{O_2}/H\). Por isso, enriquecer o ar com oxigênio puro aumenta a concentração de saturação até quase cinco vezes.

## A teoria cinética: o que é temperatura

A teoria cinética explica o comportamento dos gases a partir das moléculas: partículas pontuais, em movimento caótico, que colidem elasticamente com as paredes (tema 64). A pressão é o resultado dessas colisões. Disso resulta:

\[ p\,V = \tfrac13\,N\,m\,\overline{v^2} \qquad\Rightarrow\qquad \overline{K} = \tfrac32\,k_B\,T \]

A **temperatura absoluta é proporcional à energia cinética média** das moléculas. A velocidade quadrática média é:

\[ v_{qm} = \sqrt{\frac{3RT}{M}} \]

Para o \(\ce{N2}\) a 25 °C, cerca de 515 m/s. Moléculas mais leves são mais rápidas, o que explica a **lei de Graham**: a velocidade de efusão é inversamente proporcional à raiz da massa molar.

## Gases reais

A equação \(pV = nRT\) falha em **pressões altas** (as moléculas ocupam uma fração considerável do volume) e em **temperaturas baixas** (as atrações entre moléculas tornam-se importantes). O desvio é medido pelo **fator de compressibilidade**:

\[ Z = \frac{p\,V_m}{R\,T} \]

Para um gás ideal, \(Z = 1\). A **equação de van der Waals** corrige os dois efeitos:

\[ \left(p + \frac{a\,n^2}{V^2}\right)(V - n\,b) = n\,R\,T \]

O termo \(a\) representa as atrações (que reduzem a pressão sobre as paredes) e \(b\), o volume próprio das moléculas. Gases polares ou grandes, como \(\ce{NH3}\) e \(\ce{CO2}\), têm valores de \(a\) maiores. Acima da **temperatura crítica** (31 °C para o \(\ce{CO2}\)), um gás não pode ser liquefeito apenas por compressão; o \(\ce{CO2}\) **supercrítico** é usado como solvente "verde" na extração de óleos, cafeína e compostos bioativos.

## Exemplos resolvidos

**1. Cilindro de gás.** Um cilindro de 50 L contém \(\ce{O2}\) a 150 bar e 20 °C. Quantos mols há, supondo comportamento ideal?

\[ n = \frac{pV}{RT} = \frac{150\times10^5\cdot0{,}050}{8{,}314\cdot293} \approx 308\ \text{mol} \approx 9{,}9\ \text{kg} \]

Nessa pressão, o \(\ce{O2}\) ainda está próximo da idealidade, mas para gases como o \(\ce{CO2}\) o desvio seria grande.

**2. Vazão de ar em vvm.** Um biorreator de 100 L é aerado a 1 vvm (um volume de ar por volume de meio por minuto), medido a 25 °C e 1 atm. Quantos mols de \(\ce{O2}\) entram por minuto?

\[ n_{ar} = \frac{1\cdot100}{0{,}08206\cdot298} \approx 4{,}09\ \text{mol/min} \qquad n_{O_2} = 0{,}21\times4{,}09 \approx 0{,}86\ \text{mol/min} \]

Comparando com a quantidade que sai no gás de exaustão, calcula-se quanto oxigênio as células consumiram.

> **Atenção, erros comuns:**
> Usar a temperatura em graus Celsius nas leis dos gases.
> Misturar unidades de \(R\) (8,314 com litros e atmosferas).
> Usar a pressão total no lugar da pressão parcial na lei de Henry.

## Para fixar

- \(pV = nRT\) e \(p_1V_1/T_1 = p_2V_2/T_2\).
- Dalton: \(p_i = x_i\,p_{total}\).
- Temperatura mede a energia cinética média das moléculas; gases reais se afastam do ideal em pressões altas e temperaturas baixas.
`,
  referencias: [
    "ATKINS, P.; DE PAULA, J. **Físico-química**. v. 1. 10. ed. Rio de Janeiro: LTC, 2017. Cap. 1: As propriedades dos gases.",
    "CASTELLAN, G. **Fundamentos de físico-química**. Rio de Janeiro: LTC, 1986.",
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 2. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 19: A teoria cinética dos gases.",
    "DORAN, P. M. **Bioprocess engineering principles**. 2. ed. Waltham: Academic Press, 2013.",
  ],
},
{
  id: "r72", num: 72,
  area: "Físico-Química",
  disciplina: "Físico-Química",
  titulo: "Segunda Lei da Termodinâmica e entropia",
  descricao: "Por que os processos têm um sentido natural, os enunciados de Kelvin-Planck e Clausius, a entropia como função de estado, seu cálculo em processos comuns, a interpretação estatística e a terceira lei.",
  praticar: "questoes.html?disciplina=Termodin%C3%A2mica",
  tags: ["Físico-Química", "Termodinâmica", "segunda lei", "entropia", "Clausius", "Kelvin-Planck", "processo reversível", "irreversibilidade", "Boltzmann", "terceira lei", "desigualdade de Clausius"],
  conteudo: String.raw`
## O que a primeira lei não explica

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Entropia e a segunda lei</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">A segunda lei diz o sentido dos processos</text><rect x="30" y="60" width="180" height="110" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.4"/><line x1="120" y1="60" x2="120" y2="170" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="4 4"/><circle cx="63.316" cy="83.8781" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="86.8673" cy="76.6641" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="78.5835" cy="103.643" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="44.1759" cy="116.684" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="42.6997" cy="109.895" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="45.0296" cy="78.3456" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="70.5654" cy="146.07" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="48.9137" cy="90.538" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="85.1752" cy="157.189" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="81.5514" cy="106.495" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="110.29" cy="74.2856" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="101.81" cy="96.6441" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="50.3864" cy="80.8369" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="62.2107" cy="145.084" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="53.0123" cy="123.507" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="86.0018" cy="104.261" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="79.4376" cy="75.7766" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="44.2913" cy="88.9482" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="88.9888" cy="109.338" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="62.6186" cy="123.872" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="72.6293" cy="97.5786" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="97.1953" cy="134.307" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="57.5749" cy="122.847" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="77.8141" cy="150.513" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="92.5201" cy="96.4903" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><circle cx="110.573" cy="80.8621" r="3.4" fill="#0083cb" stroke="none" stroke-width="0"/><text x="120" y="188" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">estado inicial</text><rect x="260" y="60" width="180" height="110" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.4"/><line x1="350" y1="60" x2="350" y2="170" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="4 4"/><circle cx="306.273" cy="158.531" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="290.213" cy="134.843" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="283.63" cy="92.7646" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="429.861" cy="89.2646" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="372.699" cy="112.24" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="342.501" cy="115.538" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="300.757" cy="146.408" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="284.33" cy="91.5448" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="273.199" cy="94.5426" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="335.226" cy="152.99" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="330.652" cy="80.4632" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="311.337" cy="161.227" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="280.094" cy="127.055" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="330.353" cy="130.798" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="324.15" cy="133.6" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="349.613" cy="129.774" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="414.22" cy="123.501" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="292.742" cy="75.9224" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="421.368" cy="114.957" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="301.017" cy="157.036" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="362.634" cy="137.063" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="410.954" cy="96.2801" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="327.071" cy="150.783" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="291.596" cy="140.315" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="285.619" cy="133.497" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><circle cx="382.343" cy="157.4" r="3.4" fill="#0a8f5e" stroke="none" stroke-width="0"/><text x="350" y="188" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">estado final</text><line x1="222" y1="115" x2="252" y2="115" stroke="#333333" stroke-width="2" stroke-linecap="round" marker-end="url(#a-ti)"/><text x="330" y="212" font-size="11" text-anchor="middle" fill="#5c5c66">o gas se espalha sozinho; o contrario nunca se observa</text><rect x="470" y="60" width="250" height="130" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="595" y="84" font-size="12.5" text-anchor="middle" fill="#333333" font-weight="700">o criterio</text><text x="595" y="110" font-size="11.5" text-anchor="middle" fill="#5c5c66">entropia do universo</text><text x="595" y="134" font-size="14" text-anchor="middle" fill="#0a8f5e" font-weight="700">sempre aumenta</text><text x="595" y="158" font-size="10" text-anchor="middle" fill="#333333">A entropia de um sistema pode cair,</text><text x="595" y="172" font-size="10" text-anchor="middle" fill="#333333">desde que a vizinhanca aumente mais.</text><rect x="470" y="202" width="250" height="60" rx="8" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><text x="595" y="224" font-size="11.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">e a vida?</text><text x="595" y="244" font-size="9.6" text-anchor="middle" fill="#333333">As células se organizam consumindo nutrientes</text><text x="595" y="256" font-size="9.6" text-anchor="middle" fill="#333333">e liberando calor e CO2 para o ambiente.</text><text x="20" y="288" font-size="11" text-anchor="start" fill="#5c5c66">Boltzmann explicou o porque: estados espalhados tem um numero muito maior de arranjos possíveis.</text></svg>
Processos espontâneos caminham para estados mais prováveis, e a entropia do universo cresce.

A primeira lei (tema 25) garante que a energia se conserva, mas não diz **em que sentido** os processos acontecem. Um café quente esfria numa sala fria; nunca se viu o café esquentar sozinho, tirando calor da sala, embora isso não violasse a conservação de energia. Um gás se espalha por todo o recipiente, mas não volta espontaneamente a ocupar só um canto. Tinta se mistura com água, mas não se separa sozinha. A **segunda lei** é a lei que dá **direção** aos processos naturais.

## Os enunciados clássicos

- **Clausius:** o calor não flui espontaneamente de um corpo mais frio para um mais quente. Para fazer isso, é preciso gastar trabalho (é o que faz uma geladeira).
- **Kelvin-Planck:** é impossível construir uma máquina que, operando em ciclo, transforme **integralmente** em trabalho o calor retirado de uma única fonte. Toda máquina térmica precisa rejeitar parte do calor para uma fonte fria (tema 73).

Os dois enunciados são equivalentes: se um fosse violado, seria possível violar o outro.

## Processos reversíveis e irreversíveis

Um processo **reversível** é uma idealização: acontece por estados de equilíbrio sucessivos, infinitamente devagar, e pode ser revertido sem deixar nenhum vestígio no universo. Todo processo real é **irreversível**, por causa de atrito, diferenças finitas de temperatura, mistura, expansão livre, reações químicas. Os processos reversíveis servem como limite ideal: definem o máximo de trabalho que se pode obter, ou o mínimo que se precisa gastar.

## A entropia

Clausius mostrou que a grandeza \(\delta Q_{rev}/T\), somada ao longo de qualquer caminho reversível, só depende dos estados inicial e final. Ela define uma nova **função de estado**, a **entropia**:

\[ dS = \frac{\delta Q_{rev}}{T} \qquad\qquad \Delta S = \int_i^f\frac{\delta Q_{rev}}{T} \]

A unidade é J/K. Mesmo que o processo real seja irreversível, como \(S\) é função de estado, calcula-se \(\Delta S\) imaginando um caminho reversível qualquer entre os mesmos estados.

A segunda lei, em termos de entropia:

\[ \Delta S_{universo} = \Delta S_{sistema} + \Delta S_{vizinhança} \ge 0 \]

A igualdade vale só para processos reversíveis. **Em todo processo real, a entropia do universo aumenta.** A entropia de um sistema pode diminuir (água congelando, uma célula construindo proteínas), desde que a da vizinhança aumente mais.

## Calculando variações de entropia

| Processo | \(\Delta S\) do sistema |
|---|---|
| Aquecimento com \(c\) constante | \(m\,c\,\ln(T_f/T_i)\) |
| Mudança de fase (a \(T\) constante) | \(\Delta H_{fase}/T\) |
| Expansão isotérmica de gás ideal | \(n\,R\,\ln(V_f/V_i)\) |
| Gás ideal, caso geral | \(n\,C_V\ln(T_f/T_i) + n\,R\ln(V_f/V_i)\) |
| Mistura de gases ideais | \(-n\,R\sum x_i\ln x_i\) (sempre positiva) |

## Exemplos resolvidos

**1. Fusão do gelo.** 1,0 kg de gelo derrete a 0 °C (\(L_f = 334\) kJ/kg):

\[ \Delta S = \frac{334\,000}{273{,}15} \approx 1223\ \text{J/K} \]

**2. Calor fluindo entre dois corpos.** 1000 J passam de um reservatório a 400 K para outro a 300 K.

\[ \Delta S_{quente} = -\frac{1000}{400} = -2{,}50\ \text{J/K} \qquad \Delta S_{frio} = +\frac{1000}{300} = +3{,}33\ \text{J/K} \qquad \Delta S_{univ} = +0{,}83\ \text{J/K} \]

A soma é positiva, como exige a segunda lei. Se o calor fluísse ao contrário, a soma seria negativa: isso não acontece espontaneamente.

**3. Expansão livre.** Um mol de gás ideal se expande no vácuo, dobrando o volume, sem trocar calor nem realizar trabalho. A temperatura não muda, mas a entropia aumenta: \(\Delta S = R\ln2 \approx 5{,}76\) J/K. Como a vizinhança não foi afetada, a entropia do universo aumentou, e o processo é irreversível.

## A interpretação estatística

Boltzmann mostrou que a entropia mede o **número de microestados** (arranjos microscópicos) compatíveis com o estado macroscópico observado:

\[ S = k_B\,\ln W \]

Estados "desordenados" são mais prováveis simplesmente porque há muito mais maneiras de realizá-los. Um gás espalhado pelo recipiente tem um número astronomicamente maior de arranjos do que o mesmo gás concentrado num canto. A segunda lei, nesse sentido, é uma lei estatística: processos que diminuem a entropia do universo não são impossíveis em princípio, mas são tão improváveis que nunca são observados em sistemas macroscópicos.

## A terceira lei

A entropia de um cristal perfeito tende a zero quando a temperatura tende ao zero absoluto. Isso fornece uma referência para calcular **entropias absolutas** (as entropias-padrão tabeladas), e implica que o zero absoluto não pode ser atingido num número finito de etapas.

## Entropia e vida

Os seres vivos são altamente organizados e mantêm baixa a sua entropia interna. Isso não viola a segunda lei: as células consomem nutrientes de baixa entropia (glicose, por exemplo) e liberam calor e produtos simples (\(\ce{CO2}\), água), aumentando a entropia da vizinhança. Para prever se uma reação acontece sozinha a temperatura e pressão constantes, é mais prático usar a **energia livre de Gibbs**, \(\Delta G = \Delta H - T\Delta S\), que combina a segunda lei com o balanço de energia do sistema (tema 48).

> **Atenção, erros comuns:**
> Afirmar que a entropia de um **sistema** nunca diminui: a lei se refere ao universo (ou a sistemas isolados).
> Calcular \(\Delta S\) usando o calor do processo irreversível real: use um caminho reversível equivalente.
> Usar temperatura em Celsius em \(Q/T\).

## Para fixar

- A segunda lei define o sentido dos processos: \(\Delta S_{universo} \ge 0\).
- \(dS = \delta Q_{rev}/T\); \(S\) é função de estado.
- Entropia mede o número de microestados: \(S = k_B\ln W\).
`,
  referencias: [
    "ATKINS, P.; DE PAULA, J. **Físico-química**. v. 1. 10. ed. Rio de Janeiro: LTC, 2017. Cap. 3: A segunda e a terceira lei.",
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 2. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 20: Entropia e a segunda lei da termodinâmica.",
    "SMITH, J. M.; VAN NESS, H. C.; ABBOTT, M. M. **Introdução à termodinâmica da engenharia química**. 7. ed. Rio de Janeiro: LTC, 2007.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 2. 5. ed. São Paulo: Blucher, 2014.",
  ],
},
{
  id: "r73", num: 73,
  area: "Físico-Química",
  disciplina: "Físico-Química",
  titulo: "Máquinas térmicas, refrigeradores e ciclos termodinâmicos",
  descricao: "Como o calor vira trabalho, o rendimento e o limite de Carnot, os ciclos Otto, Diesel, Rankine e de refrigeração, o coeficiente de desempenho e as aplicações em utilidades industriais.",
  praticar: "questoes.html?disciplina=Termodin%C3%A2mica",
  tags: ["Físico-Química", "Termodinâmica", "máquina térmica", "rendimento", "ciclo de Carnot", "ciclo Otto", "ciclo Diesel", "ciclo Rankine", "refrigerador", "bomba de calor", "coeficiente de desempenho", "cogeração"],
  conteudo: String.raw`
## O que é uma máquina térmica

<svg viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg" role="img"><title>Maquina térmica e refrigerador</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Maquina térmica e refrigerador: o mesmo ciclo, em sentidos opostos</text><text x="180" y="58" font-size="12.5" text-anchor="middle" fill="#d33a4e" font-weight="700">maquina térmica</text><rect x="80" y="76" width="200" height="34" rx="6" fill="#fdeaed" stroke="#d33a4e" stroke-width="1.3"/><text x="180" y="98" font-size="11.5" text-anchor="middle" fill="#d33a4e" font-weight="700">fonte quente</text><rect x="80" y="242" width="200" height="34" rx="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.3"/><text x="180" y="264" font-size="11.5" text-anchor="middle" fill="#0083cb" font-weight="700">fonte fria</text><circle cx="180" cy="176" r="42" fill="#fff" stroke="#d33a4e" stroke-width="2"/><text x="180" y="180" font-size="12" text-anchor="middle" fill="#d33a4e" font-weight="700">ciclo</text><line x1="180" y1="112" x2="180" y2="132" stroke="#d33a4e" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-vm)"/><text x="192" y="126" font-size="10.5" text-anchor="start" fill="#d33a4e" font-weight="700">Q quente</text><line x1="180" y1="220" x2="180" y2="240" stroke="#0083cb" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-az)"/><text x="192" y="236" font-size="10.5" text-anchor="start" fill="#0083cb" font-weight="700">Q frio</text><line x1="224" y1="176" x2="290" y2="176" stroke="#0a8f5e" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="298" y="170" font-size="11" text-anchor="start" fill="#0a8f5e" font-weight="700">trabalho</text><text x="298" y="186" font-size="11" text-anchor="start" fill="#0a8f5e" font-weight="700">útil</text><text x="550" y="58" font-size="12.5" text-anchor="middle" fill="#0083cb" font-weight="700">refrigerador</text><rect x="450" y="76" width="200" height="34" rx="6" fill="#fdeaed" stroke="#d33a4e" stroke-width="1.3"/><text x="550" y="98" font-size="11.5" text-anchor="middle" fill="#d33a4e" font-weight="700">fonte quente</text><rect x="450" y="242" width="200" height="34" rx="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.3"/><text x="550" y="264" font-size="11.5" text-anchor="middle" fill="#0083cb" font-weight="700">fonte fria</text><circle cx="550" cy="176" r="42" fill="#fff" stroke="#0083cb" stroke-width="2"/><text x="550" y="180" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">ciclo</text><line x1="550" y1="132" x2="550" y2="112" stroke="#d33a4e" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-vm)"/><text x="562" y="126" font-size="10.5" text-anchor="start" fill="#d33a4e" font-weight="700">calor rejeitado</text><line x1="550" y1="240" x2="550" y2="220" stroke="#0083cb" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-az)"/><text x="562" y="236" font-size="10.5" text-anchor="start" fill="#0083cb" font-weight="700">calor retirado</text><line x1="660" y1="176" x2="594" y2="176" stroke="#0a8f5e" stroke-width="2.6" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="668" y="170" font-size="11" text-anchor="start" fill="#0a8f5e" font-weight="700">trabalho</text><text x="668" y="186" font-size="11" text-anchor="start" fill="#0a8f5e" font-weight="700">gasto</text><line x1="370" y1="70" x2="370" y2="282" stroke="#eef0f5" stroke-width="1.4" stroke-linecap="round"/><rect x="20" y="292" width="700" height="26" rx="0" fill="none" stroke="none" stroke-width="0"/><text x="140" y="308" font-size="11" text-anchor="middle" fill="#d33a4e" font-weight="700">rendimento no máximo 1 - T fria / T quente</text><text x="510" y="308" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">coeficiente de desempenho pode passar de 1</text></svg>
A mesma estrutura percorrida nos dois sentidos: produzir trabalho ou transportar calor.

Uma **máquina térmica** é um dispositivo que opera em **ciclos** e converte parte do calor recebido de uma fonte quente em trabalho. Motores de carro, turbinas a vapor de usinas e caldeiras de cogeração de usinas de açúcar e etanol são exemplos.

Todo ciclo envolve três trocas de energia:

- \(Q_Q\): calor recebido da **fonte quente** (a combustão, a caldeira);
- \(W\): trabalho realizado;
- \(Q_F\): calor rejeitado para a **fonte fria** (o ambiente, a água de resfriamento).

Como o sistema volta ao estado inicial, \(\Delta U = 0\), e a primeira lei (tema 25) dá \(W = Q_Q - |Q_F|\).

## Rendimento

\[ \eta = \frac{W}{Q_Q} = 1 - \frac{|Q_F|}{Q_Q} \]

Pela segunda lei (tema 72, enunciado de Kelvin-Planck), \(Q_F\) nunca pode ser zero, então \(\eta \lt 1\) sempre. Não por limitação tecnológica, mas por uma lei da natureza.

## O ciclo de Carnot: o limite máximo

Carnot imaginou o ciclo **reversível** mais eficiente possível entre duas temperaturas, formado por duas isotérmicas e duas adiabáticas. Seu rendimento depende **apenas** das temperaturas absolutas das fontes:

\[ \eta_{Carnot} = 1 - \frac{T_F}{T_Q} \]

**Teorema de Carnot:** nenhuma máquina operando entre as mesmas duas temperaturas pode ter rendimento maior que o de Carnot. A dedução vem diretamente da entropia: no ciclo reversível, a entropia que entra com \(Q_Q/T_Q\) tem de sair com \(Q_F/T_F\).

**Exemplo:** uma turbina a vapor recebe calor a 540 °C (813 K) e rejeita a 40 °C (313 K). O rendimento máximo teórico é \(1 - 313/813 \approx 61{,}5\%\). Usinas reais chegam a 35% a 45%, por causa das irreversibilidades. Daí o interesse em temperaturas de caldeira cada vez mais altas.

## Ciclos reais

| Ciclo | Onde se usa | Característica principal |
|---|---|---|
| Otto | motores a gasolina e etanol | combustão rápida a volume constante; \(\eta = 1 - r^{1-\gamma}\), com \(r\) a taxa de compressão |
| Diesel | motores diesel, geradores | combustão a pressão constante; taxas de compressão maiores |
| Brayton | turbinas a gás | compressão e expansão adiabáticas com combustão a pressão constante |
| Rankine | usinas termelétricas, caldeiras industriais | usa água que vaporiza e condensa; o trabalho da bomba é pequeno |

O etanol, por resistir melhor à detonação (maior octanagem), permite taxas de compressão maiores nos motores Otto, o que aumenta o rendimento.

## Refrigeradores e bombas de calor

Rodando um ciclo ao contrário, gasta-se trabalho para retirar calor de uma fonte fria e jogá-lo numa quente. O que importa é o **coeficiente de desempenho** (COP):

\[ COP_{refrigerador} = \frac{Q_F}{W} \qquad\qquad COP_{bomba\ de\ calor} = \frac{Q_Q}{W} \]

Os limites de Carnot são \(COP_{ref} = \dfrac{T_F}{T_Q - T_F}\) e \(COP_{bc} = \dfrac{T_Q}{T_Q - T_F}\). O COP pode ser maior que 1, porque o trabalho não "vira" frio; ele apenas **transporta** calor.

O ciclo de refrigeração por compressão de vapor tem quatro etapas: o fluido refrigerante evapora no evaporador (retirando calor do interior), é comprimido, condensa no condensador (liberando calor para fora) e passa por uma válvula de expansão, onde a pressão e a temperatura caem.

**Exemplo:** um freezer de −80 °C (193 K), comum em laboratórios de biologia molecular, rejeita calor numa sala a 25 °C (298 K). O COP máximo é \(193/105 \approx 1{,}8\). Já uma geladeira a 4 °C tem COP máximo de cerca de 13. Quanto mais frio, mais caro manter: por isso os ultrafreezers consomem tanta energia e muitos operam em duas etapas de compressão (cascata).

## Na prática: utilidades em bioprocessos

- **Vapor:** produzido em caldeiras (ciclo Rankine ou só a geração de vapor), é usado para esterilizar meios e equipamentos (tema 35), aquecer e evaporar.
- **Cogeração:** usinas de açúcar e etanol queimam o bagaço da cana para gerar vapor, que move turbinas (eletricidade) e depois, já com menor pressão, aquece os processos. Aproveitando o calor rejeitado, o uso total da energia do combustível chega a 70% a 85%, muito acima do rendimento elétrico isolado.
- **Água gelada e refrigeração:** retiram o calor gerado pelos microrganismos nos fermentadores (tema 45) e conservam produtos sensíveis, como vacinas e enzimas.

> **Atenção, erros comuns:**
> Usar temperaturas em Celsius no rendimento de Carnot.
> Achar que um COP maior que 1 viola a conservação de energia.
> Supor que o rendimento real de uma máquina pode chegar ao de Carnot.

## Para fixar

- \(\eta = W/Q_Q = 1 - |Q_F|/Q_Q\) e \(\eta \le 1 - T_F/T_Q\).
- Refrigeradores movem calor do frio para o quente gastando trabalho; COP \(= Q_F/W\).
- Quanto maior a diferença de temperatura, maior o rendimento possível de uma máquina e menor o COP de um refrigerador.
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 2. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 20.",
    "ÇENGEL, Y. A.; BOLES, M. A. **Termodinâmica**. 7. ed. Porto Alegre: AMGH, 2013. Cap. 6, 9 e 11.",
    "SMITH, J. M.; VAN NESS, H. C.; ABBOTT, M. M. **Introdução à termodinâmica da engenharia química**. 7. ed. Rio de Janeiro: LTC, 2007. Cap. 8 e 9.",
  ],
},
{
  id: "r74", num: 74,
  area: "Físico-Química",
  disciplina: "Físico-Química",
  titulo: "Transferência de calor: condução, convecção e radiação",
  descricao: "Os três mecanismos de transferência de calor a partir dos princípios físicos: lei de Fourier, condutividade térmica, lei do resfriamento de Newton e sua solução, convecção natural e forçada, e a lei de Stefan-Boltzmann.",
  praticar: "questoes.html?disciplina=Opera%C3%A7%C3%B5es%20Unit%C3%A1rias",
  tags: ["Físico-Química", "Fenômenos de Transporte", "transferência de calor", "condução", "lei de Fourier", "condutividade térmica", "convecção", "coeficiente de película", "lei do resfriamento de Newton", "radiação", "Stefan-Boltzmann", "corpo negro", "isolamento térmico"],
  conteudo: String.raw`
## Três maneiras de o calor viajar

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Transferência de calor</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Tres mecanismos de transferência de calor</text><rect x="20" y="56" width="220" height="150" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="130" y="78" font-size="12.5" text-anchor="middle" fill="#d33a4e" font-weight="700">conducao</text><rect x="44" y="100" width="17" height="46" rx="0" fill="#d33a4e" stroke="none" stroke-width="0"/><rect x="61" y="100" width="17" height="46" rx="0" fill="#c1475d" stroke="none" stroke-width="0"/><rect x="78" y="100" width="17" height="46" rx="0" fill="#af546d" stroke="none" stroke-width="0"/><rect x="95" y="100" width="17" height="46" rx="0" fill="#9d627c" stroke="none" stroke-width="0"/><rect x="112" y="100" width="17" height="46" rx="0" fill="#8b6f8c" stroke="none" stroke-width="0"/><rect x="129" y="100" width="17" height="46" rx="0" fill="#7a7c9b" stroke="none" stroke-width="0"/><rect x="146" y="100" width="17" height="46" rx="0" fill="#688aab" stroke="none" stroke-width="0"/><rect x="163" y="100" width="17" height="46" rx="0" fill="#5697ba" stroke="none" stroke-width="0"/><rect x="180" y="100" width="17" height="46" rx="0" fill="#44a4ca" stroke="none" stroke-width="0"/><rect x="197" y="100" width="17" height="46" rx="0" fill="#33b2da" stroke="none" stroke-width="0"/><text x="52" y="160" font-size="10" text-anchor="middle" fill="#d33a4e">quente</text><text x="210" y="160" font-size="10" text-anchor="middle" fill="#0083cb">frio</text><line x1="60" y1="178" x2="200" y2="178" stroke="#333333" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-ti)"/><text x="130" y="196" font-size="9.6" text-anchor="middle" fill="#5c5c66">molécula a molécula, sem movimento</text><rect x="260" y="56" width="220" height="150" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="78" font-size="12.5" text-anchor="middle" fill="#c67600" font-weight="700">conveccao</text><rect x="282" y="96" width="176" height="76" rx="4" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><path d="M310,166 C300,130 340,124 330,100" fill="none" stroke="#c67600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-la)"/><path d="M410,100 C420,130 380,140 390,166" fill="none" stroke="#0083cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-az)"/><rect x="282" y="172" width="176" height="10" rx="2" fill="#d33a4e" stroke="#d33a4e" stroke-width="0"/><text x="370" y="196" font-size="9.6" text-anchor="middle" fill="#5c5c66">o próprio fluido carrega o calor</text><rect x="500" y="56" width="220" height="150" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="610" y="78" font-size="12.5" text-anchor="middle" fill="#a300bc" font-weight="700">radiacao</text><circle cx="560" cy="140" r="26" fill="#fdf1de" stroke="#c67600" stroke-width="1.6"/><path d="M592,108 q10,-7 20,0 q10,7 20,0 q10,-7 20,0" fill="none" stroke="#a300bc" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M592,124 q10,-7 20,0 q10,7 20,0 q10,-7 20,0" fill="none" stroke="#a300bc" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M592,140 q10,-7 20,0 q10,7 20,0 q10,-7 20,0" fill="none" stroke="#a300bc" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M592,156 q10,-7 20,0 q10,7 20,0 q10,-7 20,0" fill="none" stroke="#a300bc" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M592,172 q10,-7 20,0 q10,7 20,0 q10,-7 20,0" fill="none" stroke="#a300bc" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><text x="610" y="196" font-size="9.6" text-anchor="middle" fill="#5c5c66">ondas eletromagneticas, ate no vacuo</text><rect x="20" y="220" width="700" height="66" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="242" font-size="12" text-anchor="middle" fill="#333333" font-weight="700">resistencias em serie</text><text x="370" y="262" font-size="11" text-anchor="middle" fill="#5c5c66">O calor atravessa o filme do fluido quente, a parede e o filme do fluido frio.</text><text x="370" y="278" font-size="11" text-anchor="middle" fill="#5c5c66">As resistencias se somam, como resistores, e a maior delas controla a troca.</text></svg>
Condução, convecção e radiação, e como as resistências se somam em série.

O calor (tema 24) flui sempre do mais quente para o mais frio (tema 72), por três mecanismos diferentes. Este resumo apresenta os princípios; o tema 45 aplica esses princípios ao projeto de trocadores de calor e camisas de fermentadores.

## Condução: a lei de Fourier

Na **condução**, a energia passa de molécula para molécula (e, nos metais, também pelos elétrons livres), sem movimento do material como um todo. A taxa de transferência é proporcional à área e ao gradiente de temperatura:

\[ \dot{Q} = -k\,A\,\frac{dT}{dx} \]

O sinal negativo indica que o calor flui no sentido em que a temperatura **cai**. Para uma parede plana de espessura \(L\) em regime permanente, o perfil de temperatura é linear e:

\[ \dot Q = \frac{k\,A\,(T_1 - T_2)}{L} \]

| Material | \(k\) (W/(m·K)), ordem de grandeza |
|---|---|
| Cobre | 400 |
| Aço inoxidável | 15 |
| Vidro | 1 |
| Água | 0,6 |
| Madeira | 0,1 a 0,2 |
| Lã de vidro, isopor | 0,03 a 0,04 |
| Ar parado | 0,026 |

Os bons isolantes térmicos funcionam aprisionando ar em pequenas bolhas ou fibras, para que ele não possa circular. O aço inoxidável, usado nos biorreatores por ser resistente à corrosão e fácil de limpar, é um condutor relativamente ruim, e isso pesa no projeto da troca térmica.

## Convecção: o fluido carrega o calor

Na **convecção**, o calor é transportado pelo movimento do próprio fluido. Pode ser **natural** (o fluido aquecido fica menos denso e sobe, como na água de uma panela) ou **forçada** (uma bomba, um ventilador ou um agitador movimenta o fluido). A taxa entre uma superfície e o fluido é descrita pela **lei do resfriamento de Newton**:

\[ \dot Q = h\,A\,(T_s - T_\infty) \]

O **coeficiente de película** \(h\) não é uma propriedade do material: depende da velocidade, da viscosidade, da geometria e do tipo de escoamento.

| Situação | \(h\) (W/(m²·K)), faixa típica |
|---|---|
| Ar, convecção natural | 2 a 25 |
| Ar, convecção forçada | 25 a 250 |
| Água, convecção forçada | 100 a 20 000 |
| Vapor condensando | 5000 a 100 000 |

A agitação de um biorreator, portanto, não serve só para misturar: ela aumenta \(h\) na parede e melhora a retirada de calor.

## A lei do resfriamento como equação diferencial

Um corpo pequeno e bom condutor (temperatura uniforme), de massa \(m\) e calor específico \(c\), esfriando num ambiente a \(T_\infty\):

\[ m\,c\,\frac{dT}{dt} = -h\,A\,(T - T_\infty) \qquad\Rightarrow\qquad T(t) = T_\infty + (T_0 - T_\infty)\,e^{-t/\tau}, \quad \tau = \frac{m\,c}{h\,A} \]

É uma EDO de primeira ordem (tema 53). A diferença de temperatura cai exponencialmente, com constante de tempo \(\tau\).

**Exemplo:** um frasco com 500 mL de meio recém-autoclavado (cerca de 0,5 kg, \(c = 4180\) J/(kg·K)) esfria do ar a 25 °C, com \(hA = 0{,}8\) W/K. A constante de tempo é \(\tau = 0{,}5\cdot4180/0{,}8 \approx 2600\) s (cerca de 44 min). Para cair de 100 °C a 45 °C:

\[ t = \tau\,\ln\frac{100 - 25}{45 - 25} = 2600\,\ln3{,}75 \approx 3400\ \text{s} \approx 57\ \text{min} \]

É por isso que meios com ágar precisam de tempo (ou banho-maria) para atingir a temperatura certa antes de receber antibióticos ou células.

## Radiação: calor sem meio material

Todo corpo acima do zero absoluto emite **radiação eletromagnética** (tema 87), principalmente no infravermelho em temperaturas ambientes. A radiação não precisa de meio material: é assim que a energia do Sol chega à Terra pelo vácuo. A potência emitida segue a **lei de Stefan-Boltzmann**:

\[ P = \varepsilon\,\sigma\,A\,T^4 \qquad\qquad \sigma = 5{,}67\times10^{-8}\ \text{W/(m}^2\text{K}^4) \]

A **emissividade** \(\varepsilon\) vai de 0 (refletor perfeito) a 1 (**corpo negro**, emissor e absorvedor ideal). O balanço líquido entre um corpo e a vizinhança é \(\varepsilon\sigma A(T^4 - T_{viz}^4)\). Por causa do \(T^4\), a radiação domina em altas temperaturas (fornos, caldeiras). O comprimento de onda de máxima emissão cai com a temperatura (lei de Wien, tema 92).

Superfícies espelhadas (baixa emissividade) reduzem a troca por radiação. A **garrafa térmica** combina as três estratégias: vácuo entre paredes (sem condução nem convecção) e paredes espelhadas (pouca radiação). Os dewars de nitrogênio líquido usam o mesmo princípio.

## Resistências térmicas

Quando o calor atravessa várias camadas em sequência (fluido, parede, fluido), cada uma oferece uma **resistência**, \(R = L/(kA)\) para condução e \(R = 1/(hA)\) para convecção, e elas se somam como resistores em série (tema 26):

\[ \dot Q = \frac{\Delta T_{total}}{\sum R} \]

A camada com maior resistência controla o processo. O tema 45 desenvolve essa ideia no coeficiente global de troca térmica.

> **Atenção, erros comuns:**
> Tratar \(h\) como uma propriedade tabelada do material.
> Usar temperatura em Celsius na lei de Stefan-Boltzmann.
> Esquecer que, em condução, a área é a perpendicular ao fluxo de calor.

## Para fixar

- Condução: \(\dot Q = -kA\,dT/dx\). Convecção: \(\dot Q = hA\,\Delta T\). Radiação: \(P = \varepsilon\sigma AT^4\).
- O resfriamento de Newton gera um decaimento exponencial com \(\tau = mc/(hA)\).
- Resistências térmicas em série se somam; a maior delas limita o fluxo.
`,
  referencias: [
    "INCROPERA, F. P. et al. **Fundamentos de transferência de calor e de massa**. 7. ed. Rio de Janeiro: LTC, 2014.",
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 2. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 18.",
    "ÇENGEL, Y. A.; GHAJAR, A. J. **Transferência de calor e massa**: uma abordagem prática. 4. ed. Porto Alegre: AMGH, 2012.",
  ],
},
{
  id: "r75", num: 75,
  area: "Físico-Química",
  disciplina: "Físico-Química",
  titulo: "Equilíbrio de fases e propriedades coligativas",
  descricao: "Pressão de vapor, a equação de Clausius-Clapeyron, diagramas de fases, a regra das fases, soluções ideais e a lei de Raoult, e as propriedades coligativas com aplicações em liofilização, crioproteção e osmometria.",
  praticar: "questoes.html?disciplina=Termodin%C3%A2mica",
  tags: ["Físico-Química", "Termodinâmica", "pressão de vapor", "Clausius-Clapeyron", "diagrama de fases", "ponto triplo", "ponto crítico", "regra das fases", "Raoult", "propriedades coligativas", "crioscopia", "ebulioscopia", "osmose", "liofilização", "destilação"],
  conteudo: String.raw`
## Pressão de vapor

Num recipiente fechado, parte de um líquido evapora até que as moléculas que escapam e as que voltam se equilibrem. A pressão do vapor nesse equilíbrio é a **pressão de vapor**, que depende só da substância e da temperatura. Um líquido **ferve** quando sua pressão de vapor iguala a pressão externa. Por isso a água ferve a menos de 100 °C em altitudes elevadas e a 121 °C numa autoclave pressurizada a cerca de 2 atm.

## A equação de Clausius-Clapeyron

A variação da pressão de vapor com a temperatura é dada por:

\[ \ln\frac{p_2}{p_1} = -\frac{\Delta H_{vap}}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right) \]

Um gráfico de \(\ln p\) contra \(1/T\) é uma reta com inclinação \(-\Delta H_{vap}/R\).

**Exemplo:** a água tem \(p = 1\) atm a 373 K e \(\Delta H_{vap} \approx 40{,}7\) kJ/mol. A 121 °C (394 K):

\[ \ln p_2 = -\frac{40\,700}{8{,}314}\left(\frac{1}{394} - \frac{1}{373}\right) \approx 0{,}70 \;\Rightarrow\; p_2 \approx 2{,}0\ \text{atm} \]

É exatamente a pressão de operação de uma autoclave.

## Diagramas de fases

<svg viewBox="0 0 720 346" xmlns="http://www.w3.org/2000/svg" role="img"><title>Diagrama de fases</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Diagrama de fases da água e a liofilizacao</text><rect x="60" y="56" width="380" height="210" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><path d="M60,56 L86.5205,152.3 L86.5205,56 L60,56 Z" fill="#0083cb" fill-opacity="0.12"/><path d="M86.5,152.3L88.0,144.4L89.5,141.7L91.0,139.7L92.5,138.1L94.0,136.7L95.5,135.4L97.0,134.3L98.5,133.3L100.0,132.3L101.5,131.4L103.0,130.6L104.5,129.8L106.1,129.0L107.6,128.2L109.1,127.5L110.6,126.9L112.1,126.2L113.6,125.6L115.1,125.0L116.6,124.4L118.1,123.8L119.6,123.2L121.1,122.7L122.6,122.1L124.1,121.6L125.6,121.1L127.1,120.6L128.6,120.1L130.1,119.6L131.6,119.2L133.1,118.7L134.6,118.3L136.1,117.8L137.6,117.4L139.1,117.0L140.6,116.5L142.1,116.1L143.6,115.7L145.1,115.3L146.6,114.9L148.1,114.5L149.6,114.1L151.1,113.8L152.6,113.4L154.1,113.0L155.6,112.7L157.1,112.3L158.6,111.9L160.1,111.6L161.6,111.2L163.1,110.9L164.6,110.6L166.1,110.2L167.6,109.9L169.1,109.6L170.6,109.2L172.2,108.9L173.7,108.6L175.2,108.3L176.7,108.0L178.2,107.7L179.7,107.4L181.2,107.1L182.7,106.8L184.2,106.5L185.7,106.2L187.2,105.9L188.7,105.6L190.2,105.3L191.7,105.0L193.2,104.7L194.7,104.4L196.2,104.2L197.7,103.9L199.2,103.6L200.7,103.3L202.2,103.1L203.7,102.8L205.2,102.5L206.7,102.3L208.2,102.0L209.7,101.8L211.2,101.5L212.7,101.2L214.2,101.0L215.7,100.7L217.2,100.5L218.7,100.2L220.2,100.0L221.7,99.7L223.2,99.5L224.7,99.3L226.2,99.0L227.7,98.8L229.2,98.5L230.7,98.3L232.2,98.1L233.7,97.8L235.2,97.6L236.7,97.4L238.3,97.1L239.8,96.9L241.3,96.7L242.8,96.5L244.3,96.2L245.8,96.0L247.3,95.8L248.8,95.6L250.3,95.3L251.8,95.1L253.3,94.9L254.8,94.7L256.3,94.5L257.8,94.3L259.3,94.0L260.8,93.8L262.3,93.6L263.8,93.4L265.3,93.2L266.8,93.0L268.3,92.8L269.8,92.6L271.3,92.4L272.8,92.2L274.3,92.0L275.8,91.8L277.3,91.6L278.8,91.4L280.3,91.2L281.8,91.0L283.3,90.8L284.8,90.6L286.3,90.4L287.8,90.2L289.3,90.0L290.8,89.8L292.3,89.6L293.8,89.4L295.3,89.2L296.8,89.0L298.3,88.8L299.8,88.6L301.3,88.5L302.8,88.3L304.4,88.1L305.9,87.9L307.4,87.7L308.9,87.5L310.4,87.3L311.9,87.2L313.4,87.0L314.9,86.8L316.4,86.6L317.9,86.4L319.4,86.3L320.9,86.1L322.4,85.9L323.9,85.7L325.4,85.6L326.9,85.4L328.4,85.2L329.9,85.0L331.4,84.9L332.9,84.7L334.4,84.5L335.9,84.3L337.4,84.2L338.9,84.0L340.4,83.8L341.9,83.7L343.4,83.5L344.9,83.3L346.4,83.1L347.9,83.0L349.4,82.8L350.9,82.6L352.4,82.5L353.9,82.3L355.4,82.1L356.9,82.0L358.4,81.8L359.9,81.7L361.4,81.5L362.9,81.3L364.4,81.2L365.9,81.0L367.4,80.8L369.0,80.7L370.5,80.5L372.0,80.4L373.5,80.2L375.0,80.1L376.5,79.9L378.0,79.7L379.5,79.6L381.0,79.4L382.5,79.3L384.0,79.1L385.5,79.0L387.0,78.8L388.5,78.6L390.0,78.5L391.5,78.3L393.0,78.2L394.5,78.0L396.0,77.9L397.5,77.7L399.0,77.6L400.5,77.4L402.0,77.3L403.5,77.1L405.0,77.0L406.5,76.8L408.0,76.7L409.5,76.5L411.0,76.4L412.5,76.2L414.0,76.1L415.5,75.9L417.0,75.8" fill="none" stroke="#0083cb" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><line x1="86.5205" y1="152.3" x2="70.6047" y2="56" stroke="#0083cb" stroke-width="2.4" stroke-linecap="round"/><path d="M60.0,233.3L60.1,232.9L60.2,232.6L60.4,232.2L60.5,231.8L60.6,231.5L60.7,231.1L60.8,230.7L61.0,230.4L61.1,230.0L61.2,229.6L61.3,229.2L61.4,228.9L61.6,228.5L61.7,228.1L61.8,227.8L61.9,227.4L62.0,227.0L62.2,226.7L62.3,226.3L62.4,225.9L62.5,225.6L62.7,225.2L62.8,224.8L62.9,224.5L63.0,224.1L63.1,223.7L63.3,223.4L63.4,223.0L63.5,222.6L63.6,222.3L63.7,221.9L63.9,221.5L64.0,221.1L64.1,220.8L64.2,220.4L64.3,220.0L64.5,219.7L64.6,219.3L64.7,218.9L64.8,218.6L64.9,218.2L65.1,217.8L65.2,217.5L65.3,217.1L65.4,216.7L65.5,216.4L65.7,216.0L65.8,215.6L65.9,215.3L66.0,214.9L66.1,214.5L66.3,214.1L66.4,213.8L66.5,213.4L66.6,213.0L66.8,212.7L66.9,212.3L67.0,211.9L67.1,211.6L67.2,211.2L67.4,210.8L67.5,210.5L67.6,210.1L67.7,209.7L67.8,209.4L68.0,209.0L68.1,208.6L68.2,208.3L68.3,207.9L68.4,207.5L68.6,207.2L68.7,206.8L68.8,206.4L68.9,206.0L69.0,205.7L69.2,205.3L69.3,204.9L69.4,204.6L69.5,204.2L69.6,203.8L69.8,203.5L69.9,203.1L70.0,202.7L70.1,202.4L70.2,202.0L70.4,201.6L70.5,201.3L70.6,200.9L70.7,200.5L70.8,200.2L71.0,199.8L71.1,199.4L71.2,199.0L71.3,198.7L71.5,198.3L71.6,197.9L71.7,197.6L71.8,197.2L71.9,196.8L72.1,196.5L72.2,196.1L72.3,195.7L72.4,195.4L72.5,195.0L72.7,194.6L72.8,194.3L72.9,193.9L73.0,193.5L73.1,193.2L73.3,192.8L73.4,192.4L73.5,192.0L73.6,191.7L73.7,191.3L73.9,190.9L74.0,190.6L74.1,190.2L74.2,189.8L74.3,189.5L74.5,189.1L74.6,188.7L74.7,188.4L74.8,188.0L74.9,187.6L75.1,187.3L75.2,186.9L75.3,186.5L75.4,186.2L75.6,185.8L75.7,185.4L75.8,185.1L75.9,184.7L76.0,184.3L76.2,183.9L76.3,183.6L76.4,183.2L76.5,182.8L76.6,182.5L76.8,182.1L76.9,181.7L77.0,181.4L77.1,181.0L77.2,180.6L77.4,180.3L77.5,179.9L77.6,179.5L77.7,179.2L77.8,178.8L78.0,178.4L78.1,178.1L78.2,177.7L78.3,177.3L78.4,176.9L78.6,176.6L78.7,176.2L78.8,175.8L78.9,175.5L79.0,175.1L79.2,174.7L79.3,174.4L79.4,174.0L79.5,173.6L79.6,173.3L79.8,172.9L79.9,172.5L80.0,172.2L80.1,171.8L80.3,171.4L80.4,171.1L80.5,170.7L80.6,170.3L80.7,170.0L80.9,169.6L81.0,169.2L81.1,168.8L81.2,168.5L81.3,168.1L81.5,167.7L81.6,167.4L81.7,167.0L81.8,166.6L81.9,166.3L82.1,165.9L82.2,165.5L82.3,165.2L82.4,164.8L82.5,164.4L82.7,164.1L82.8,163.7L82.9,163.3L83.0,163.0L83.1,162.6L83.3,162.2L83.4,161.8L83.5,161.5L83.6,161.1L83.7,160.7L83.9,160.4L84.0,160.0L84.1,159.6L84.2,159.3L84.4,158.9L84.5,158.5L84.6,158.2L84.7,157.8L84.8,157.4L85.0,157.1L85.1,156.7L85.2,156.3L85.3,156.0L85.4,155.6L85.6,155.2L85.7,154.9L85.8,154.5L85.9,154.1L86.0,153.7L86.2,153.4L86.3,153.0L86.4,152.6" fill="none" stroke="#0083cb" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="86.5205" cy="152.3" r="5" fill="#f40086" stroke="#fff" stroke-width="1.6"/><text x="144.52" y="142.3" font-size="11.5" text-anchor="middle" fill="#f40086" font-weight="600">ponto triplo</text><text x="144.52" y="156.3" font-size="9.6" text-anchor="middle" fill="#5c5c66">0,01 C e 611 Pa</text><circle cx="417.023" cy="75.8" r="5" fill="#a300bc" stroke="#fff" stroke-width="1.6"/><text x="401.023" y="63.8" font-size="11.5" text-anchor="middle" fill="#a300bc" font-weight="600">ponto critico</text><text x="192.558" y="98" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">líquido</text><text x="298.605" y="200" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="700">vapor</text><text x="70.6047" y="104" font-size="12" text-anchor="middle" fill="#8a8a93" font-weight="700">sólido</text><text x="250" y="290" font-size="11" text-anchor="middle" fill="#5c5c66">temperatura</text><text x="30" y="46" font-size="10.5" text-anchor="start" fill="#5c5c66">log da pressão</text><rect x="470" y="60" width="250" height="206" rx="8" fill="#fff" stroke="#a300bc" stroke-width="1.4"/><text x="595" y="84" font-size="12.5" text-anchor="middle" fill="#a300bc" font-weight="700">liofilizacao</text><text x="595" y="108" font-size="11" text-anchor="middle" fill="#333333">1. congelar o produto</text><text x="595" y="130" font-size="11" text-anchor="middle" fill="#333333">2. baixar a pressão abaixo</text><text x="595" y="144" font-size="11" text-anchor="middle" fill="#333333">do ponto triplo</text><text x="595" y="166" font-size="11" text-anchor="middle" fill="#333333">3. o gelo sublima: passa direto</text><text x="595" y="180" font-size="11" text-anchor="middle" fill="#333333">de sólido a vapor</text><line x1="490" y1="198" x2="700" y2="198" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><text x="595" y="218" font-size="10.5" text-anchor="middle" fill="#5c5c66">A água sai sem nunca ser líquida,</text><text x="595" y="232" font-size="10.5" text-anchor="middle" fill="#5c5c66">e a estrutura do produto se mantem.</text><text x="595" y="254" font-size="10.5" text-anchor="middle" fill="#a300bc" font-weight="700">vacinas, enzimas, culturas-estoque</text><text x="20" y="318" font-size="11" text-anchor="start" fill="#5c5c66">Acima do ponto critico não ha mais distincao entre líquido e gas: e o estado supercritico, usado para</text><text x="20" y="336" font-size="11" text-anchor="start" fill="#5c5c66">extrair compostos com CO2 em vez de solventes orgânicos.</text></svg>
O diagrama de fases da água e o princípio por trás da liofilização.

O **diagrama de fases** mostra, num gráfico de pressão contra temperatura, as regiões em que a substância é sólida, líquida ou gasosa. As linhas são as condições de coexistência de duas fases.

- **Ponto triplo:** as três fases coexistem. Para a água, 0,01 °C e 611 Pa.
- **Ponto crítico:** acima dele, líquido e gás deixam de ser distinguíveis (fluido supercrítico). Para a água, 374 °C e 218 atm; para o \(\ce{CO2}\), 31 °C e 73 atm.
- A água é uma exceção: sua linha sólido-líquido tem inclinação **negativa**, porque o gelo é menos denso que o líquido.

A **regra das fases de Gibbs** diz quantas variáveis podem ser mudadas livremente: \(F = C - P + 2\), com \(C\) componentes e \(P\) fases. Para a água pura no ponto triplo, \(F = 1 - 3 + 2 = 0\): o ponto é fixo.

## Na prática: liofilização

Abaixo do ponto triplo, o gelo passa diretamente a vapor (**sublimação**). A **liofilização** congela o produto e depois reduz a pressão abaixo de 611 Pa, retirando a água sem passar pelo estado líquido. Isso preserva a estrutura de vacinas, enzimas, probióticos e culturas-estoque de microrganismos, que depois são reidratados.

## Soluções ideais e a lei de Raoult

Numa solução ideal, a pressão de vapor de cada componente é proporcional à sua fração molar no líquido:

\[ p_i = x_i\,p_i^* \]

em que \(p_i^*\) é a pressão de vapor do componente puro. O vapor fica mais rico no componente mais volátil, e é isso que permite a **destilação**. Misturas reais podem formar **azeótropos**, que fervem sem mudar de composição: a mistura etanol-água, com cerca de 95,6% de etanol em massa, não pode ser purificada além disso por destilação simples. Para produzir etanol anidro, usam-se peneiras moleculares ou destilação com um terceiro componente.

## Propriedades coligativas

Dissolver um soluto **não volátil** num solvente altera propriedades que dependem só do **número de partículas** dissolvidas, e não da sua natureza:

| Propriedade | Expressão |
|---|---|
| Abaixamento da pressão de vapor (tonoscopia) | \(\Delta p = x_{soluto}\,p^*\) |
| Elevação do ponto de ebulição (ebulioscopia) | \(\Delta T_e = i\,K_e\,b\) |
| Abaixamento do ponto de congelamento (crioscopia) | \(\Delta T_c = i\,K_c\,b\) |
| Pressão osmótica (osmoscopia) | \(\Pi = i\,c\,R\,T\) |

Aqui, \(b\) é a molalidade (mol de soluto por kg de solvente), \(c\) é a concentração molar e \(i\) é o **fator de van't Hoff**, o número de partículas por fórmula dissolvida (1 para a glicose, cerca de 2 para o NaCl, cerca de 3 para o \(\ce{CaCl2}\)). Para a água, \(K_c = 1{,}86\) e \(K_e = 0{,}512\) K·kg/mol.

**Exemplo:** uma solução de NaCl a 0,9% (o soro fisiológico) tem cerca de 0,154 mol/L, ou 0,308 osmol/L. Sua pressão osmótica a 37 °C é \(\Pi \approx 0{,}308\cdot0{,}08206\cdot310 \approx 7{,}8\) atm, igual à do plasma (tema 31). O abaixamento do ponto de congelamento é de cerca de \(1{,}86\times0{,}30 \approx 0{,}56\) °C. Os **osmômetros** de laboratório medem a osmolalidade justamente pelo ponto de congelamento.

## Na prática

- **Crioproteção:** glicerol e DMSO, a 10% a 20%, baixam o ponto de congelamento e reduzem a formação de cristais de gelo, permitindo conservar células e microrganismos a −80 °C ou em nitrogênio líquido.
- **Pressão osmótica em biorreatores:** meios muito concentrados (alimentações com muito açúcar ou sal) desidratam as células. Muitos processos de cultivo de células animais mantêm a osmolalidade entre 280 e 400 mOsm/kg.
- **Conservação de alimentos:** salga e calda de açúcar reduzem a água disponível (a atividade de água) e inibem microrganismos.
- **Massas molares de proteínas:** a pressão osmótica, por ser grande mesmo com poucas partículas, já foi muito usada para estimar a massa molar de macromoléculas.

> **Atenção, erros comuns:**
> Esquecer o fator de van't Hoff em sais.
> Confundir molalidade (por kg de solvente) com molaridade (por litro de solução).
> Usar \(\Delta H\) em kJ e \(R\) em J na Clausius-Clapeyron.

## Para fixar

- Um líquido ferve quando a pressão de vapor iguala a pressão externa; Clausius-Clapeyron relaciona \(p\) e \(T\).
- Raoult: \(p_i = x_ip_i^*\). Azeótropos limitam a destilação.
- Propriedades coligativas dependem do número de partículas: \(\Pi = icRT\).
`,
  referencias: [
    "ATKINS, P.; DE PAULA, J. **Físico-química**. v. 1. 10. ed. Rio de Janeiro: LTC, 2017. Cap. 4 e 5.",
    "CASTELLAN, G. **Fundamentos de físico-química**. Rio de Janeiro: LTC, 1986.",
    "PESSOA JR., A.; KILIKIAN, B. V. (coord.). **Purificação de produtos biotecnológicos**. 2. ed. Rio de Janeiro: Elsevier, 2020.",
  ],
},
{
  id: "r76", num: 76,
  area: "Físico-Química",
  disciplina: "Físico-Química",
  titulo: "Cinética química",
  descricao: "Velocidade de reação, leis de velocidade e ordem, as equações integradas de ordem zero, um e dois, meia-vida, a equação de Arrhenius, mecanismos e catálise.",
  praticar: "questoes.html?disciplina=Reatores%20Bioqu%C3%ADmicos",
  tags: ["Físico-Química", "Reatores Bioquímicos", "cinética química", "velocidade de reação", "lei de velocidade", "ordem de reação", "meia-vida", "Arrhenius", "energia de ativação", "catálise", "mecanismo", "etapa determinante", "Q10"],
  conteudo: String.raw`
## Termodinâmica diz "se", cinética diz "quão rápido"

A termodinâmica (temas 48 e 72) informa se uma reação é favorável, mas não quanto tempo ela leva. A oxidação da glicose ao ar é extremamente favorável, e mesmo assim o açúcar no pote dura anos. A **cinética química** estuda a velocidade das reações e os fatores que a controlam. É a base do projeto de reatores e da cinética enzimática (tema 47).

## Velocidade de reação

Para a reação \(a\,\ce{A} + b\,\ce{B} \to c\,\ce{C}\), a velocidade é definida de forma que não dependa da espécie escolhida:

\[ v = -\frac{1}{a}\frac{d[\ce{A}]}{dt} = \frac{1}{c}\frac{d[\ce{C}]}{dt} \]

## Leis de velocidade e ordem

Experimentalmente, a velocidade costuma seguir uma **lei de velocidade**:

\[ v = k\,[\ce{A}]^m\,[\ce{B}]^n \]

Os expoentes \(m\) e \(n\) são as **ordens** em relação a cada reagente, e \(m + n\) é a ordem global. Eles são determinados **experimentalmente** e, em geral, **não** são iguais aos coeficientes estequiométricos. A **constante de velocidade** \(k\) depende da temperatura e do catalisador.

**Método das velocidades iniciais:** mede-se a velocidade no início de vários experimentos, mudando uma concentração de cada vez. Se dobrar [A] dobra \(v\), a ordem em A é 1; se quadruplica, é 2; se não muda, é 0.

## Equações integradas

<svg viewBox="0 0 740 330" xmlns="http://www.w3.org/2000/svg" role="img"><title>Cinetica química</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Ordem de reação e energia de ativacao</text><rect x="50" y="56" width="300" height="200" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="110" y1="56" x2="110" y2="256" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="170" y1="56" x2="170" y2="256" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="230" y1="56" x2="230" y2="256" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="290" y1="56" x2="290" y2="256" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="350" y1="56" x2="350" y2="256" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="208.381" x2="350" y2="208.381" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="160.762" x2="350" y2="160.762" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="113.143" x2="350" y2="113.143" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="65.5238" x2="350" y2="65.5238" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="56" x2="50" y2="256" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="50" y1="256" x2="350" y2="256" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="110" y="271" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="170" y="271" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="230" y="271" font-size="10.5" text-anchor="middle" fill="#8a8a93">3</text><text x="290" y="271" font-size="10.5" text-anchor="middle" fill="#8a8a93">4</text><text x="350" y="271" font-size="10.5" text-anchor="middle" fill="#8a8a93">5</text><text x="44" y="211.881" font-size="10.5" text-anchor="end" fill="#8a8a93">0.25</text><text x="44" y="164.262" font-size="10.5" text-anchor="end" fill="#8a8a93">0.5</text><text x="44" y="116.643" font-size="10.5" text-anchor="end" fill="#8a8a93">0.75</text><text x="44" y="69.0238" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="354" y="260" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">tempo</text><text x="46" y="50" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">[A]</text><path d="M50.0,65.5L51.4,66.4L52.7,67.3L54.1,68.1L55.5,69.0L56.8,69.9L58.2,70.7L59.5,71.6L60.9,72.5L62.3,73.3L63.6,74.2L65.0,75.0L66.4,75.9L67.7,76.8L69.1,77.6L70.5,78.5L71.8,79.4L73.2,80.2L74.5,81.1L75.9,82.0L77.3,82.8L78.6,83.7L80.0,84.6L81.4,85.4L82.7,86.3L84.1,87.2L85.5,88.0L86.8,88.9L88.2,89.8L89.5,90.6L90.9,91.5L92.3,92.4L93.6,93.2L95.0,94.1L96.4,95.0L97.7,95.8L99.1,96.7L100.5,97.6L101.8,98.4L103.2,99.3L104.5,100.2L105.9,101.0L107.3,101.9L108.6,102.8L110.0,103.6L111.4,104.5L112.7,105.4L114.1,106.2L115.5,107.1L116.8,107.9L118.2,108.8L119.5,109.7L120.9,110.5L122.3,111.4L123.6,112.3L125.0,113.1L126.4,114.0L127.7,114.9L129.1,115.7L130.5,116.6L131.8,117.5L133.2,118.3L134.5,119.2L135.9,120.1L137.3,120.9L138.6,121.8L140.0,122.7L141.4,123.5L142.7,124.4L144.1,125.3L145.5,126.1L146.8,127.0L148.2,127.9L149.5,128.7L150.9,129.6L152.3,130.5L153.6,131.3L155.0,132.2L156.4,133.1L157.7,133.9L159.1,134.8L160.5,135.7L161.8,136.5L163.2,137.4L164.5,138.3L165.9,139.1L167.3,140.0L168.6,140.8L170.0,141.7L171.4,142.6L172.7,143.4L174.1,144.3L175.5,145.2L176.8,146.0L178.2,146.9L179.5,147.8L180.9,148.6L182.3,149.5L183.6,150.4L185.0,151.2L186.4,152.1L187.7,153.0L189.1,153.8L190.5,154.7L191.8,155.6L193.2,156.4L194.5,157.3L195.9,158.2L197.3,159.0L198.6,159.9L200.0,160.8L201.4,161.6L202.7,162.5L204.1,163.4L205.5,164.2L206.8,165.1L208.2,166.0L209.5,166.8L210.9,167.7L212.3,168.6L213.6,169.4L215.0,170.3L216.4,171.2L217.7,172.0L219.1,172.9L220.5,173.7L221.8,174.6L223.2,175.5L224.5,176.3L225.9,177.2L227.3,178.1L228.6,178.9L230.0,179.8L231.4,180.7L232.7,181.5L234.1,182.4L235.5,183.3L236.8,184.1L238.2,185.0L239.5,185.9L240.9,186.7L242.3,187.6L243.6,188.5L245.0,189.3L246.4,190.2L247.7,191.1L249.1,191.9L250.5,192.8L251.8,193.7L253.2,194.5L254.5,195.4L255.9,196.3L257.3,197.1L258.6,198.0L260.0,198.9L261.4,199.7L262.7,200.6L264.1,201.5L265.5,202.3L266.8,203.2L268.2,204.1L269.5,204.9L270.9,205.8L272.3,206.6L273.6,207.5L275.0,208.4L276.4,209.2L277.7,210.1L279.1,211.0L280.5,211.8L281.8,212.7L283.2,213.6L284.5,214.4L285.9,215.3L287.3,216.2L288.6,217.0L290.0,217.9L291.4,218.8L292.7,219.6L294.1,220.5L295.5,221.4L296.8,222.2L298.2,223.1L299.5,224.0L300.9,224.8L302.3,225.7L303.6,226.6L305.0,227.4L306.4,228.3L307.7,229.2L309.1,230.0L310.5,230.9L311.8,231.8L313.2,232.6L314.5,233.5L315.9,234.4L317.3,235.2L318.6,236.1L320.0,237.0L321.4,237.8L322.7,238.7L324.1,239.5L325.5,240.4L326.8,241.3L328.2,242.1L329.5,243.0L330.9,243.9L332.3,244.7L333.6,245.6L335.0,246.5L336.4,247.3L337.7,248.2L339.1,249.1L340.5,249.9L341.8,250.8L343.2,251.7L344.5,252.5L345.9,253.4L347.3,254.3L348.6,255.1L350.0,256.0" fill="none" stroke="#c67600" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M50.0,65.5L51.4,67.5L52.7,69.4L54.1,71.3L55.5,73.2L56.8,75.0L58.2,76.9L59.5,78.7L60.9,80.5L62.3,82.3L63.6,84.0L65.0,85.8L66.4,87.5L67.7,89.2L69.1,90.9L70.5,92.6L71.8,94.3L73.2,95.9L74.5,97.6L75.9,99.2L77.3,100.8L78.6,102.3L80.0,103.9L81.4,105.4L82.7,107.0L84.1,108.5L85.5,110.0L86.8,111.5L88.2,113.0L89.5,114.4L90.9,115.9L92.3,117.3L93.6,118.7L95.0,120.1L96.4,121.5L97.7,122.8L99.1,124.2L100.5,125.5L101.8,126.9L103.2,128.2L104.5,129.5L105.9,130.8L107.3,132.0L108.6,133.3L110.0,134.5L111.4,135.8L112.7,137.0L114.1,138.2L115.5,139.4L116.8,140.6L118.2,141.8L119.5,142.9L120.9,144.1L122.3,145.2L123.6,146.4L125.0,147.5L126.4,148.6L127.7,149.7L129.1,150.7L130.5,151.8L131.8,152.9L133.2,153.9L134.5,155.0L135.9,156.0L137.3,157.0L138.6,158.0L140.0,159.0L141.4,160.0L142.7,161.0L144.1,161.9L145.5,162.9L146.8,163.9L148.2,164.8L149.5,165.7L150.9,166.6L152.3,167.5L153.6,168.4L155.0,169.3L156.4,170.2L157.7,171.1L159.1,172.0L160.5,172.8L161.8,173.7L163.2,174.5L164.5,175.3L165.9,176.1L167.3,177.0L168.6,177.8L170.0,178.6L171.4,179.3L172.7,180.1L174.1,180.9L175.5,181.7L176.8,182.4L178.2,183.2L179.5,183.9L180.9,184.6L182.3,185.4L183.6,186.1L185.0,186.8L186.4,187.5L187.7,188.2L189.1,188.9L190.5,189.6L191.8,190.2L193.2,190.9L194.5,191.6L195.9,192.2L197.3,192.9L198.6,193.5L200.0,194.2L201.4,194.8L202.7,195.4L204.1,196.0L205.5,196.6L206.8,197.2L208.2,197.8L209.5,198.4L210.9,199.0L212.3,199.6L213.6,200.2L215.0,200.7L216.4,201.3L217.7,201.9L219.1,202.4L220.5,203.0L221.8,203.5L223.2,204.0L224.5,204.6L225.9,205.1L227.3,205.6L228.6,206.1L230.0,206.6L231.4,207.1L232.7,207.6L234.1,208.1L235.5,208.6L236.8,209.1L238.2,209.6L239.5,210.0L240.9,210.5L242.3,211.0L243.6,211.4L245.0,211.9L246.4,212.3L247.7,212.8L249.1,213.2L250.5,213.6L251.8,214.1L253.2,214.5L254.5,214.9L255.9,215.3L257.3,215.8L258.6,216.2L260.0,216.6L261.4,217.0L262.7,217.4L264.1,217.8L265.5,218.2L266.8,218.5L268.2,218.9L269.5,219.3L270.9,219.7L272.3,220.0L273.6,220.4L275.0,220.8L276.4,221.1L277.7,221.5L279.1,221.8L280.5,222.2L281.8,222.5L283.2,222.9L284.5,223.2L285.9,223.5L287.3,223.9L288.6,224.2L290.0,224.5L291.4,224.8L292.7,225.2L294.1,225.5L295.5,225.8L296.8,226.1L298.2,226.4L299.5,226.7L300.9,227.0L302.3,227.3L303.6,227.6L305.0,227.9L306.4,228.2L307.7,228.4L309.1,228.7L310.5,229.0L311.8,229.3L313.2,229.5L314.5,229.8L315.9,230.1L317.3,230.3L318.6,230.6L320.0,230.9L321.4,231.1L322.7,231.4L324.1,231.6L325.5,231.9L326.8,232.1L328.2,232.4L329.5,232.6L330.9,232.8L332.3,233.1L333.6,233.3L335.0,233.5L336.4,233.8L337.7,234.0L339.1,234.2L340.5,234.4L341.8,234.7L343.2,234.9L344.5,235.1L345.9,235.3L347.3,235.5L348.6,235.7L350.0,235.9" fill="none" stroke="#f40086" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M50.0,65.5L51.4,69.3L52.7,73.0L54.1,76.5L55.5,79.9L56.8,83.2L58.2,86.3L59.5,89.4L60.9,92.3L62.3,95.1L63.6,97.9L65.0,100.5L66.4,103.1L67.7,105.5L69.1,107.9L70.5,110.2L71.8,112.5L73.2,114.7L74.5,116.8L75.9,118.8L77.3,120.8L78.6,122.8L80.0,124.6L81.4,126.5L82.7,128.2L84.1,130.0L85.5,131.7L86.8,133.3L88.2,134.9L89.5,136.4L90.9,138.0L92.3,139.4L93.6,140.9L95.0,142.3L96.4,143.7L97.7,145.0L99.1,146.3L100.5,147.6L101.8,148.8L103.2,150.0L104.5,151.2L105.9,152.4L107.3,153.5L108.6,154.7L110.0,155.7L111.4,156.8L112.7,157.9L114.1,158.9L115.5,159.9L116.8,160.9L118.2,161.8L119.5,162.8L120.9,163.7L122.3,164.6L123.6,165.5L125.0,166.4L126.4,167.2L127.7,168.1L129.1,168.9L130.5,169.7L131.8,170.5L133.2,171.3L134.5,172.0L135.9,172.8L137.3,173.5L138.6,174.2L140.0,174.9L141.4,175.6L142.7,176.3L144.1,177.0L145.5,177.7L146.8,178.3L148.2,179.0L149.5,179.6L150.9,180.2L152.3,180.8L153.6,181.4L155.0,182.0L156.4,182.6L157.7,183.2L159.1,183.8L160.5,184.3L161.8,184.9L163.2,185.4L164.5,185.9L165.9,186.4L167.3,187.0L168.6,187.5L170.0,188.0L171.4,188.5L172.7,189.0L174.1,189.4L175.5,189.9L176.8,190.4L178.2,190.8L179.5,191.3L180.9,191.7L182.3,192.2L183.6,192.6L185.0,193.0L186.4,193.5L187.7,193.9L189.1,194.3L190.5,194.7L191.8,195.1L193.2,195.5L194.5,195.9L195.9,196.3L197.3,196.6L198.6,197.0L200.0,197.4L201.4,197.8L202.7,198.1L204.1,198.5L205.5,198.8L206.8,199.2L208.2,199.5L209.5,199.9L210.9,200.2L212.3,200.5L213.6,200.9L215.0,201.2L216.4,201.5L217.7,201.8L219.1,202.1L220.5,202.4L221.8,202.8L223.2,203.1L224.5,203.4L225.9,203.7L227.3,203.9L228.6,204.2L230.0,204.5L231.4,204.8L232.7,205.1L234.1,205.4L235.5,205.6L236.8,205.9L238.2,206.2L239.5,206.4L240.9,206.7L242.3,207.0L243.6,207.2L245.0,207.5L246.4,207.7L247.7,208.0L249.1,208.2L250.5,208.5L251.8,208.7L253.2,208.9L254.5,209.2L255.9,209.4L257.3,209.6L258.6,209.9L260.0,210.1L261.4,210.3L262.7,210.6L264.1,210.8L265.5,211.0L266.8,211.2L268.2,211.4L269.5,211.6L270.9,211.8L272.3,212.1L273.6,212.3L275.0,212.5L276.4,212.7L277.7,212.9L279.1,213.1L280.5,213.3L281.8,213.5L283.2,213.7L284.5,213.8L285.9,214.0L287.3,214.2L288.6,214.4L290.0,214.6L291.4,214.8L292.7,215.0L294.1,215.1L295.5,215.3L296.8,215.5L298.2,215.7L299.5,215.8L300.9,216.0L302.3,216.2L303.6,216.4L305.0,216.5L306.4,216.7L307.7,216.9L309.1,217.0L310.5,217.2L311.8,217.3L313.2,217.5L314.5,217.7L315.9,217.8L317.3,218.0L318.6,218.1L320.0,218.3L321.4,218.4L322.7,218.6L324.1,218.7L325.5,218.9L326.8,219.0L328.2,219.2L329.5,219.3L330.9,219.5L332.3,219.6L333.6,219.8L335.0,219.9L336.4,220.0L337.7,220.2L339.1,220.3L340.5,220.4L341.8,220.6L343.2,220.7L344.5,220.8L345.9,221.0L347.3,221.1L348.6,221.2L350.0,221.4" fill="none" stroke="#0083cb" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/><text x="128" y="96" font-size="10.5" text-anchor="middle" fill="#c67600" font-weight="700">ordem 0</text><text x="194" y="172.19" font-size="10.5" text-anchor="middle" fill="#f40086" font-weight="700">ordem 1</text><text x="290" y="193.143" font-size="10.5" text-anchor="middle" fill="#0083cb" font-weight="700">ordem 2</text><text x="200" y="282" font-size="11" text-anchor="middle" fill="#5c5c66">a forma da queda revela a ordem</text><rect x="400" y="56" width="320" height="200" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><path d="M400.0,196.0L401.5,196.1L402.9,196.3L404.4,196.4L405.8,196.6L407.3,196.7L408.7,196.9L410.2,197.0L411.6,197.2L413.1,197.3L414.5,197.5L416.0,197.6L417.5,197.7L418.9,197.9L420.4,198.0L421.8,198.2L423.3,198.3L424.7,198.5L426.2,198.6L427.6,198.8L429.1,198.9L430.5,199.1L432.0,199.2L433.5,199.3L434.9,199.5L436.4,199.6L437.8,199.8L439.3,199.9L440.7,200.1L442.2,200.2L443.6,200.3L445.1,200.5L446.5,200.6L448.0,200.7L449.5,200.9L450.9,201.0L452.4,201.1L453.8,201.3L455.3,201.4L456.7,201.5L458.2,201.6L459.6,201.7L461.1,201.8L462.5,201.9L464.0,202.0L465.5,202.0L466.9,202.1L468.4,202.1L469.8,202.1L471.3,202.1L472.7,202.1L474.2,202.1L475.6,202.0L477.1,201.9L478.5,201.8L480.0,201.6L481.5,201.4L482.9,201.1L484.4,200.8L485.8,200.4L487.3,200.0L488.7,199.5L490.2,198.9L491.6,198.2L493.1,197.5L494.5,196.7L496.0,195.7L497.5,194.7L498.9,193.6L500.4,192.3L501.8,191.0L503.3,189.5L504.7,187.9L506.2,186.1L507.6,184.3L509.1,182.2L510.5,180.1L512.0,177.8L513.5,175.4L514.9,172.8L516.4,170.1L517.8,167.3L519.3,164.3L520.7,161.3L522.2,158.1L523.6,154.8L525.1,151.5L526.5,148.0L528.0,144.6L529.5,141.0L530.9,137.5L532.4,133.9L533.8,130.4L535.3,126.9L536.7,123.5L538.2,120.1L539.6,116.8L541.1,113.6L542.5,110.6L544.0,107.8L545.5,105.1L546.9,102.6L548.4,100.4L549.8,98.3L551.3,96.6L552.7,95.1L554.2,93.9L555.6,93.0L557.1,92.3L558.5,92.0L560.0,92.0L561.5,92.3L562.9,92.9L564.4,93.8L565.8,95.0L567.3,96.5L568.7,98.3L570.2,100.4L571.6,102.7L573.1,105.2L574.5,108.0L576.0,111.0L577.5,114.1L578.9,117.4L580.4,120.9L581.8,124.4L583.3,128.1L584.7,131.8L586.2,135.6L587.6,139.5L589.1,143.3L590.5,147.2L592.0,151.0L593.5,154.7L594.9,158.5L596.4,162.1L597.8,165.7L599.3,169.1L600.7,172.5L602.2,175.7L603.6,178.8L605.1,181.8L606.5,184.7L608.0,187.4L609.5,190.0L610.9,192.4L612.4,194.7L613.8,196.9L615.3,198.9L616.7,200.8L618.2,202.6L619.6,204.3L621.1,205.8L622.5,207.2L624.0,208.5L625.5,209.8L626.9,210.9L628.4,211.9L629.8,212.9L631.3,213.7L632.7,214.5L634.2,215.2L635.6,215.9L637.1,216.5L638.5,217.1L640.0,217.6L641.5,218.1L642.9,218.5L644.4,218.9L645.8,219.2L647.3,219.6L648.7,219.9L650.2,220.2L651.6,220.5L653.1,220.7L654.5,220.9L656.0,221.2L657.5,221.4L658.9,221.6L660.4,221.8L661.8,222.0L663.3,222.1L664.7,222.3L666.2,222.5L667.6,222.7L669.1,222.8L670.5,223.0L672.0,223.1L673.5,223.3L674.9,223.5L676.4,223.6L677.8,223.8L679.3,223.9L680.7,224.1L682.2,224.2L683.6,224.4L685.1,224.5L686.5,224.6L688.0,224.8L689.5,224.9L690.9,225.1L692.4,225.2L693.8,225.4L695.3,225.5L696.7,225.7L698.2,225.8L699.6,226.0L701.1,226.1L702.5,226.3L704.0,226.4L705.5,226.5L706.9,226.7L708.4,226.8L709.8,227.0L711.3,227.1L712.7,227.3L714.2,227.4L715.6,227.6L717.1,227.7L718.5,227.9L720.0,228.0" fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M400.0,196.0L401.5,196.1L402.9,196.3L404.4,196.4L405.8,196.6L407.3,196.7L408.7,196.9L410.2,197.0L411.6,197.2L413.1,197.3L414.5,197.5L416.0,197.6L417.5,197.7L418.9,197.9L420.4,198.0L421.8,198.2L423.3,198.3L424.7,198.5L426.2,198.6L427.6,198.8L429.1,198.9L430.5,199.1L432.0,199.2L433.5,199.3L434.9,199.5L436.4,199.6L437.8,199.8L439.3,199.9L440.7,200.1L442.2,200.2L443.6,200.4L445.1,200.5L446.5,200.6L448.0,200.8L449.5,200.9L450.9,201.1L452.4,201.2L453.8,201.3L455.3,201.5L456.7,201.6L458.2,201.7L459.6,201.9L461.1,202.0L462.5,202.1L464.0,202.2L465.5,202.3L466.9,202.4L468.4,202.5L469.8,202.6L471.3,202.7L472.7,202.8L474.2,202.8L475.6,202.9L477.1,202.9L478.5,202.9L480.0,203.0L481.5,202.9L482.9,202.9L484.4,202.9L485.8,202.8L487.3,202.7L488.7,202.5L490.2,202.4L491.6,202.2L493.1,201.9L494.5,201.6L496.0,201.3L497.5,201.0L498.9,200.6L500.4,200.1L501.8,199.6L503.3,199.0L504.7,198.4L506.2,197.7L507.6,197.0L509.1,196.2L510.5,195.4L512.0,194.5L513.5,193.5L514.9,192.5L516.4,191.4L517.8,190.2L519.3,189.0L520.7,187.8L522.2,186.5L523.6,185.2L525.1,183.8L526.5,182.4L528.0,181.0L529.5,179.5L530.9,178.1L532.4,176.6L533.8,175.2L535.3,173.7L536.7,172.3L538.2,170.9L539.6,169.6L541.1,168.3L542.5,167.1L544.0,165.9L545.5,164.8L546.9,163.9L548.4,163.0L549.8,162.2L551.3,161.5L552.7,160.9L554.2,160.5L555.6,160.2L557.1,160.0L558.5,159.9L560.0,160.0L561.5,160.2L562.9,160.6L564.4,161.0L565.8,161.6L567.3,162.4L568.7,163.2L570.2,164.2L571.6,165.3L573.1,166.5L574.5,167.8L576.0,169.1L577.5,170.6L578.9,172.1L580.4,173.7L581.8,175.3L583.3,177.0L584.7,178.7L586.2,180.4L587.6,182.1L589.1,183.9L590.5,185.6L592.0,187.4L593.5,189.1L594.9,190.8L596.4,192.4L597.8,194.1L599.3,195.6L600.7,197.2L602.2,198.7L603.6,200.1L605.1,201.5L606.5,202.8L608.0,204.1L609.5,205.3L610.9,206.4L612.4,207.5L613.8,208.5L615.3,209.5L616.7,210.4L618.2,211.2L619.6,212.0L621.1,212.8L622.5,213.5L624.0,214.1L625.5,214.7L626.9,215.3L628.4,215.8L629.8,216.3L631.3,216.8L632.7,217.2L634.2,217.6L635.6,218.0L637.1,218.3L638.5,218.7L640.0,219.0L641.5,219.2L642.9,219.5L644.4,219.8L645.8,220.0L647.3,220.2L648.7,220.4L650.2,220.7L651.6,220.9L653.1,221.0L654.5,221.2L656.0,221.4L657.5,221.6L658.9,221.8L660.4,221.9L661.8,222.1L663.3,222.2L664.7,222.4L666.2,222.6L667.6,222.7L669.1,222.9L670.5,223.0L672.0,223.2L673.5,223.3L674.9,223.5L676.4,223.6L677.8,223.8L679.3,223.9L680.7,224.1L682.2,224.2L683.6,224.4L685.1,224.5L686.5,224.7L688.0,224.8L689.5,224.9L690.9,225.1L692.4,225.2L693.8,225.4L695.3,225.5L696.7,225.7L698.2,225.8L699.6,226.0L701.1,226.1L702.5,226.3L704.0,226.4L705.5,226.5L706.9,226.7L708.4,226.8L709.8,227.0L711.3,227.1L712.7,227.3L714.2,227.4L715.6,227.6L717.1,227.7L718.5,227.9L720.0,228.0" fill="none" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><line x1="560" y1="192" x2="560" y2="78" stroke="#8a8a93" stroke-width="1.8" stroke-linecap="round" marker-start="url(#a-cz)" marker-end="url(#a-cz)"/><text x="552" y="136" font-size="10" text-anchor="end" fill="#8a8a93" font-weight="700">Ea sem</text><text x="552" y="150" font-size="10" text-anchor="end" fill="#8a8a93" font-weight="700">catalisador</text><line x1="611.2" y1="210" x2="611.2" y2="154" stroke="#0a8f5e" stroke-width="1.8" stroke-linecap="round" marker-start="url(#a-ve)" marker-end="url(#a-ve)"/><text x="619.2" y="180" font-size="10" text-anchor="start" fill="#0a8f5e" font-weight="700">Ea com</text><text x="619.2" y="194" font-size="10" text-anchor="start" fill="#0a8f5e" font-weight="700">catalisador</text><text x="438.4" y="186" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">reagentes</text><text x="681.6" y="218" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">produtos</text><text x="560" y="282" font-size="11" text-anchor="middle" fill="#5c5c66">o catalisador abaixa a barreira, sem mexer no equilíbrio</text><rect x="20" y="296" width="700" height="30" rx="6" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.1"/><text x="370" y="316" font-size="10.6" text-anchor="middle" fill="#333333">Arrhenius: a constante cresce exponencialmente com a temperatura, e muitas reações dobram de velocidade a cada 10 graus.</text></svg>
A forma da curva revela a ordem da reação; o catalisador reduz a energia de ativação.

| Ordem | Lei | Forma integrada | Gráfico linear | Meia-vida |
|---|---|---|---|---|
| 0 | \(v = k\) | \([A] = [A]_0 - kt\) | [A] × t | \([A]_0/(2k)\) |
| 1 | \(v = k[A]\) | \(\ln[A] = \ln[A]_0 - kt\) | ln[A] × t | \(\ln2/k\) |
| 2 | \(v = k[A]^2\) | \(\dfrac{1}{[A]} = \dfrac{1}{[A]_0} + kt\) | 1/[A] × t | \(1/(k[A]_0)\) |

Na primeira ordem, a meia-vida é **constante**, não depende da concentração inicial. É o caso do decaimento radioativo, da morte térmica de microrganismos (tema 35), da eliminação de muitos fármacos pelo organismo e da desnaturação de muitas enzimas. Uma reação enzimática com substrato em excesso, por outro lado, comporta-se como de ordem zero (tema 47).

**Exemplo:** uma enzima perde atividade em primeira ordem, com meia-vida de 8 h a 50 °C. Então \(k = \ln2/8 \approx 0{,}087\ \text{h}^{-1}\), e após 24 h resta \(e^{-0{,}087\cdot24} = (1/2)^3 = 12{,}5\%\) da atividade.

## Temperatura e a equação de Arrhenius

Para reagir, as moléculas precisam colidir com energia suficiente para superar uma barreira, a **energia de ativação** \(E_a\). Arrhenius propôs:

\[ k = A\,e^{-E_a/(RT)} \qquad\qquad \ln k = \ln A - \frac{E_a}{R}\cdot\frac1T \]

O gráfico de \(\ln k\) contra \(1/T\) é uma reta de inclinação \(-E_a/R\). Com duas temperaturas:

\[ \ln\frac{k_2}{k_1} = -\frac{E_a}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right) \]

**Exemplo:** com \(E_a = 50\) kJ/mol, quanto a velocidade aumenta de 25 °C para 35 °C?

\[ \ln\frac{k_2}{k_1} = \frac{50\,000}{8{,}314}\left(\frac{1}{298} - \frac{1}{308}\right) \approx 0{,}655 \;\Rightarrow\; \frac{k_2}{k_1} \approx 1{,}9 \]

Daí a regra prática de que muitas reações dobram de velocidade a cada 10 °C. Em biologia, essa razão é chamada de \(Q_{10}\). Nas enzimas, o aumento só vale até a temperatura em que a desnaturação começa a dominar.

## Mecanismos de reação

Uma reação global costuma acontecer em várias **etapas elementares**. A **molecularidade** de uma etapa (uni, bi ou trimolecular) é o número de moléculas que colidem nela, e só para etapas elementares a ordem coincide com os coeficientes. A etapa mais lenta é a **etapa determinante** e controla a velocidade global, como o trecho mais estreito de uma estrada.

Quando há um intermediário muito reativo, usa-se a **aproximação do estado estacionário**: supõe-se que a concentração do intermediário fica praticamente constante. É exatamente o que Briggs e Haldane fizeram para o complexo enzima-substrato na dedução da equação de Michaelis-Menten (tema 47).

## Catálise

Um **catalisador** acelera a reação oferecendo um caminho com **menor energia de ativação**, sem ser consumido. Ele acelera igualmente a reação direta e a inversa, portanto **não altera o equilíbrio** (tema 14) nem o \(\Delta G\): apenas faz o sistema chegar mais rápido ao equilíbrio.

- **Homogênea:** catalisador na mesma fase dos reagentes (um ácido em solução).
- **Heterogênea:** catalisador sólido, com reagentes gasosos ou líquidos (conversores catalíticos de carros, níquel na hidrogenação de óleos).
- **Enzimática:** as enzimas são catalisadores proteicos extremamente eficientes e específicos, capazes de acelerar reações por fatores de \(10^{6}\) a mais de \(10^{17}\) (temas 47 e 112).

> **Atenção, erros comuns:**
> Tirar a ordem da reação dos coeficientes da equação global.
> Achar que o catalisador desloca o equilíbrio.
> Usar a meia-vida de primeira ordem para reações de outra ordem.

## Para fixar

- \(v = k[A]^m[B]^n\), com ordens determinadas por experimento.
- Primeira ordem: \(\ln[A]\) cai linearmente; \(t_{1/2} = \ln2/k\).
- Arrhenius: \(k = Ae^{-E_a/RT}\). Catalisadores reduzem \(E_a\) sem mudar o equilíbrio.
`,
  referencias: [
    "ATKINS, P.; DE PAULA, J. **Físico-química**. v. 2. 10. ed. Rio de Janeiro: LTC, 2018. Cap. 20: Cinética química.",
    "FOGLER, H. S. **Elementos de engenharia das reações químicas**. 4. ed. Rio de Janeiro: LTC, 2009.",
    "LEVENSPIEL, O. **Engenharia das reações químicas**. 3. ed. São Paulo: Blucher, 2000.",
  ],
},
{
  id: "r77", num: 77,
  area: "Físico-Química",
  disciplina: "Físico-Química",
  titulo: "Reações de oxirredução",
  descricao: "Número de oxidação, oxidação e redução, agentes oxidantes e redutores, balanceamento pelo método das semirreações, e o papel das reações redox no metabolismo e na indústria.",
  tags: ["Físico-Química", "Química Geral", "oxirredução", "redox", "número de oxidação", "oxidação", "redução", "agente oxidante", "agente redutor", "semirreação", "balanceamento", "NAD+", "corrosão"],
  conteudo: String.raw`
## Transferência de elétrons

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Oxirreducao</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Oxirreducao: quem perde e quem ganha elétrons</text><rect x="40" y="60" width="300" height="80" rx="8" fill="#fdeaed" stroke="#d33a4e" stroke-width="1.3"/><text x="190" y="84" font-size="13" text-anchor="middle" fill="#d33a4e" font-weight="700">oxidação</text><text x="190" y="106" font-size="11" text-anchor="middle" fill="#333333">perde elétrons, o Nox aumenta</text><text x="190" y="126" font-size="10.5" text-anchor="middle" fill="#5c5c66">quem se oxida e o agente redutor</text><rect x="400" y="60" width="300" height="80" rx="8" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.3"/><text x="550" y="84" font-size="13" text-anchor="middle" fill="#0a8f5e" font-weight="700">redução</text><text x="550" y="106" font-size="11" text-anchor="middle" fill="#333333">ganha elétrons, o Nox diminui</text><text x="550" y="126" font-size="10.5" text-anchor="middle" fill="#5c5c66">quem se reduz e o agente oxidante</text><path d="M340,100 C370,100 370,100 396,100" fill="none" stroke="#333333" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-ti)"/><text x="370" y="90" font-size="10" text-anchor="middle" fill="#333333" font-weight="700">elétrons</text><text x="20" y="176" font-size="12" text-anchor="start" fill="#333333" font-weight="700">O Nox do carbono mostra o grau de oxidação de uma molécula</text><rect x="40" y="196" width="128" height="44" rx="8" fill="#fff" stroke="#0a8f5e" stroke-width="1.4"/><text x="104" y="216" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">CH4</text><text x="104" y="232" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">Nox -4</text><rect x="176" y="196" width="128" height="44" rx="8" fill="#fff" stroke="#0a8f5e" stroke-width="1.4"/><text x="240" y="216" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">etanol</text><text x="240" y="232" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">Nox -2</text><rect x="312" y="196" width="128" height="44" rx="8" fill="#fff" stroke="#8a8a93" stroke-width="1.4"/><text x="376" y="216" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">glicose</text><text x="376" y="232" font-size="11" text-anchor="middle" fill="#8a8a93" font-weight="700">Nox 0</text><rect x="448" y="196" width="128" height="44" rx="8" fill="#fff" stroke="#8a8a93" stroke-width="1.4"/><text x="512" y="216" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">ácido acético</text><text x="512" y="232" font-size="11" text-anchor="middle" fill="#8a8a93" font-weight="700">Nox 0</text><rect x="584" y="196" width="128" height="44" rx="8" fill="#fff" stroke="#d33a4e" stroke-width="1.4"/><text x="648" y="216" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">CO2</text><text x="648" y="232" font-size="11" text-anchor="middle" fill="#d33a4e" font-weight="700">Nox +4</text><line x1="40" y1="256" x2="700" y2="256" stroke="#333333" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-ti)"/><text x="60" y="274" font-size="10.5" text-anchor="start" fill="#0a8f5e" font-weight="700">mais reduzido, mais energia guardada</text><text x="680" y="274" font-size="10.5" text-anchor="end" fill="#d33a4e" font-weight="700">mais oxidado</text><text x="20" y="296" font-size="11" text-anchor="start" fill="#5c5c66">Respirar e oxidar o carbono da glicose ate CO2; fermentar e redistribuir: parte oxida, parte reduz a etanol.</text></svg>
Oxidação e redução são duas faces da mesma transferência de elétrons.

Uma reação de **oxirredução** (ou **redox**) envolve transferência de elétrons de uma espécie para outra:

- **Oxidação:** perda de elétrons (o número de oxidação **aumenta**).
- **Redução:** ganho de elétrons (o número de oxidação **diminui**).

As duas acontecem **sempre juntas**: os elétrons perdidos por um são ganhos pelo outro. A espécie que se oxida é o **agente redutor** (ela reduz a outra); a que se reduz é o **agente oxidante**.

Combustões, corrosão, fotossíntese, respiração celular, pilhas, alvejantes e o funcionamento dos bafômetros são todos processos redox.

## Número de oxidação (Nox)

O Nox é a carga que um átomo teria se todas as suas ligações fossem iônicas. Regras práticas:

1. Substâncias simples: Nox zero (\(\ce{O2}\), \(\ce{Fe}\), \(\ce{H2}\)).
2. Íons simples: Nox igual à carga (\(\ce{Na+}\) = +1, \(\ce{Cl-}\) = −1).
3. Hidrogênio: +1 (exceto em hidretos metálicos, −1).
4. Oxigênio: −2 (exceto em peróxidos, −1, e no \(\ce{OF2}\), +2).
5. Metais alcalinos: +1; alcalino-terrosos: +2; flúor: −1.
6. A soma dos Nox é zero numa molécula neutra e igual à carga num íon.

**Exemplos:** no \(\ce{KMnO4}\), Mn = +7; no \(\ce{Cr2O7^{2-}}\), Cr = +6; no \(\ce{H2O2}\), O = −1. No carbono orgânico, o Nox varia de −4 (\(\ce{CH4}\)) a +4 (\(\ce{CO2}\)): na glicose, o carbono tem Nox médio 0; no etanol, −2; no \(\ce{CO2}\), +4. Isso mostra que a **respiração oxida** o carbono da glicose e a **fermentação alcoólica** é uma reação de redistribuição: parte do carbono se oxida (\(\ce{CO2}\)) e parte se reduz (etanol).

## Balanceamento pelo método das semirreações

O método mais seguro, especialmente em solução aquosa, separa a reação em duas metades.

**Exemplo:** o permanganato oxida o ferro(II) em meio ácido:

\[ \ce{MnO4^- + Fe^{2+} -> Mn^{2+} + Fe^{3+}} \]

1. **Separar as semirreações:** \(\ce{MnO4^- -> Mn^{2+}}\) e \(\ce{Fe^{2+} -> Fe^{3+}}\).
2. **Balancear os átomos que não são O nem H** (já estão).
3. **Balancear o O com água:** \(\ce{MnO4^- -> Mn^{2+} + 4H2O}\).
4. **Balancear o H com \(\ce{H+}\)** (meio ácido): \(\ce{8H+ + MnO4^- -> Mn^{2+} + 4H2O}\).
5. **Balancear as cargas com elétrons:** à esquerda, +7; à direita, +2. Logo:
\[ \ce{MnO4^- + 8H+ + 5e^- -> Mn^{2+} + 4H2O} \]
\[ \ce{Fe^{2+} -> Fe^{3+} + e^-} \]
6. **Igualar os elétrons** (multiplicar a do ferro por 5) e somar:
\[ \ce{MnO4^- + 8H+ + 5Fe^{2+} -> Mn^{2+} + 5Fe^{3+} + 4H2O} \]
7. **Conferir** átomos e cargas: à esquerda, \(-1 + 8 + 10 = +17\); à direita, \(+2 + 15 = +17\). ✓

Em **meio básico**, balanceia-se como em meio ácido e depois se neutralizam os \(\ce{H+}\) somando \(\ce{OH-}\) aos dois lados.

## Titulações redox

O exemplo acima é a base da **permanganometria**: o permanganato é violeta e o \(\ce{Mn^{2+}}\) é praticamente incolor, de modo que a primeira gota em excesso deixa a solução rosada e marca o ponto final (tema 20). Outras titulações redox comuns são a iodometria (com tiossulfato) e a dicromatometria. A **DQO** (demanda química de oxigênio), usada para avaliar efluentes, é medida pela oxidação da matéria orgânica com dicromato.

## Redox no metabolismo

Na célula, os elétrons não passam diretamente da glicose para o oxigênio. Eles são transferidos em etapas, por **carregadores de elétrons**:

\[ \ce{NAD+ + 2e^- + H+ <=> NADH} \qquad\qquad \ce{FAD + 2e^- + 2H+ <=> FADH2} \]

Na glicólise e no ciclo de Krebs (tema 106), o substrato é oxidado e o \(\ce{NAD+}\) é reduzido. Na cadeia respiratória (tema 107), o NADH entrega os elétrons ao oxigênio, o aceptor final, e a energia liberada é usada para produzir ATP. Sem oxigênio, as células precisam regenerar o \(\ce{NAD+}\) de outra forma: é a função da fermentação.

## Na prática

- **Corrosão:** o ferro é oxidado pelo oxigênio em presença de água. Proteções incluem tintas, galvanização (camada de zinco, que se oxida antes) e o uso de aço inoxidável, cujo cromo forma uma película de óxido protetora.
- **Sanitização:** hipoclorito, peróxido de hidrogênio, ácido peracético e ozônio matam microrganismos oxidando suas proteínas, lipídios e ácidos nucleicos (tema 35).
- **Potencial redox em fermentações:** medido por eletrodos (tema 78), indica se o meio está oxidante ou redutor, o que é crucial em processos anaeróbios como a produção de biogás.

> **Atenção, erros comuns:**
> Confundir "agente oxidante" com "espécie que se oxida": o oxidante é o que se **reduz**.
> Balancear só os átomos e esquecer as cargas.
> Esquecer de igualar o número de elétrons das duas semirreações.

## Para fixar

- Oxidação: perde elétrons, Nox sobe. Redução: ganha elétrons, Nox desce.
- Balanceamento: átomos, O com \(\ce{H2O}\), H com \(\ce{H+}\), cargas com \(e^-\), igualar elétrons.
- \(\ce{NAD+}\)/NADH e FAD/\(\ce{FADH2}\) transportam elétrons no metabolismo.
`,
  referencias: [
    "ATKINS, P.; JONES, L.; LAVERMAN, L. **Princípios de química**: questionando a vida moderna e o meio ambiente. 7. ed. Porto Alegre: Bookman, 2018.",
    "SKOOG, D. A. et al. **Fundamentos de química analítica**. 9. ed. São Paulo: Cengage Learning, 2014. Cap. 18 a 20.",
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019.",
  ],
},
{
  id: "r78", num: 78,
  area: "Físico-Química",
  disciplina: "Físico-Química",
  titulo: "Pilhas, potenciais de eletrodo e equação de Nernst",
  descricao: "Como uma reação redox gera corrente, a pilha de Daniell, potenciais-padrão de redução, força eletromotriz, a relação com a energia livre, a equação de Nernst e os eletrodos de pH e de oxigênio.",
  tags: ["Físico-Química", "eletroquímica", "pilha", "célula galvânica", "Daniell", "ânodo", "cátodo", "ponte salina", "potencial-padrão", "força eletromotriz", "Nernst", "energia livre", "eletrodo de pH", "potencial redox biológico"],
  conteudo: String.raw`
## Do redox à corrente elétrica

Se uma barra de zinco é mergulhada numa solução de sulfato de cobre, o zinco se oxida e o cobre se deposita sobre ele, mas a energia se perde como calor. Uma **pilha** (ou célula galvânica) separa fisicamente a oxidação e a redução e obriga os elétrons a passar por um fio externo, onde podem realizar trabalho.

## A pilha de Daniell

<svg viewBox="0 0 740 350" xmlns="http://www.w3.org/2000/svg" role="img"><title>Pilha e potenciais</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">A pilha de Daniell e a escala de potenciais</text><line x1="114" y1="72" x2="336" y2="72" stroke="#333333" stroke-width="2" stroke-linecap="round"/><circle cx="225" cy="72" r="17" fill="#fff" stroke="#333333" stroke-width="1.6"/><text x="225" y="77" font-size="12" text-anchor="middle" fill="#333333" font-weight="700">V</text><line x1="196" y1="72" x2="160" y2="72" stroke="#0a8f5e" stroke-width="2" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="178" y="62" font-size="10.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">elétrons</text><rect x="104" y="72" width="20" height="150" rx="2" fill="#8a8a93" stroke="#8a8a93" stroke-width="1"/><rect x="326" y="72" width="20" height="150" rx="2" fill="#c67600" stroke="#c67600" stroke-width="1"/><text x="86" y="112" font-size="12.5" text-anchor="end" fill="#8a8a93" font-weight="700">Zn</text><text x="364" y="112" font-size="12.5" text-anchor="start" fill="#c67600" font-weight="700">Cu</text><rect x="50" y="140" width="150" height="110" rx="4" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.4"/><rect x="250" y="140" width="150" height="110" rx="4" fill="#fdeef6" stroke="#f40086" stroke-width="1.4"/><path d="M136,150 C136,112 314,112 314,150" fill="none" stroke="#a300bc" stroke-width="9" stroke-linecap="butt" stroke-linejoin="round"/><text x="225" y="108" font-size="10.5" text-anchor="middle" fill="#a300bc" font-weight="700">ponte salina</text><text x="114" y="266" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">anodo (-)</text><text x="114" y="282" font-size="10" text-anchor="middle" fill="#d33a4e">oxidação: Zn perde elétrons</text><text x="336" y="266" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">catodo (+)</text><text x="336" y="282" font-size="10" text-anchor="middle" fill="#0a8f5e">redução: Cu2+ se deposita</text><text x="262" y="60" font-size="15" text-anchor="start" fill="#333333" font-weight="700">1,10 V</text><text x="262" y="76" font-size="9.6" text-anchor="start" fill="#5c5c66">nas condicoes padrao</text><line x1="520" y1="80" x2="520" y2="260" stroke="#8a8a93" stroke-width="1.6" stroke-linecap="round"/><line x1="514" y1="89.2812" x2="526" y2="89.2812" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round"/><text x="534" y="93.2812" font-size="10" text-anchor="start" fill="#0a8f5e" font-weight="600">F2 / F-   +2,87 V</text><line x1="514" y1="135.406" x2="526" y2="135.406" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round"/><text x="534" y="139.406" font-size="10" text-anchor="start" fill="#0a8f5e" font-weight="600">O2 / H2O   +1,23 V</text><line x1="514" y1="160.438" x2="526" y2="160.438" stroke="#c67600" stroke-width="2.4" stroke-linecap="round"/><text x="534" y="164.438" font-size="10" text-anchor="start" fill="#c67600" font-weight="600">Cu2+ / Cu   +0,34 V</text><line x1="514" y1="170" x2="526" y2="170" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round"/><text x="534" y="174" font-size="10" text-anchor="start" fill="#8a8a93" font-weight="600">H+ / H2   +0,00 V</text><line x1="514" y1="191.375" x2="526" y2="191.375" stroke="#0083cb" stroke-width="2.4" stroke-linecap="round"/><text x="534" y="195.375" font-size="10" text-anchor="start" fill="#0083cb" font-weight="600">Zn2+ / Zn   -0,76 V</text><line x1="514" y1="255.5" x2="526" y2="255.5" stroke="#f40086" stroke-width="2.4" stroke-linecap="round"/><text x="534" y="259.5" font-size="10" text-anchor="start" fill="#f40086" font-weight="600">Li+ / Li   -3,04 V</text><text x="520" y="72" font-size="10" text-anchor="middle" fill="#0a8f5e" font-weight="700">mais oxidante</text><text x="520" y="276" font-size="10" text-anchor="middle" fill="#f40086" font-weight="700">mais redutor</text><text x="20" y="316" font-size="11" text-anchor="start" fill="#5c5c66">Os elétrons descem espontaneamente de um par com potencial menor para outro com potencial maior.</text><text x="20" y="334" font-size="11" text-anchor="start" fill="#5c5c66">No metabolismo vale a mesma logica: do NADH (-0,32 V) ate o oxigênio (+0,82 V).</text></svg>
A pilha separa as semirreações e obriga os elétrons a passar pelo circuito externo.

- **Ânodo** (onde ocorre a **oxidação**, polo negativo): \(\ce{Zn -> Zn^{2+} + 2e^-}\). A placa de zinco se desgasta.
- **Cátodo** (onde ocorre a **redução**, polo positivo): \(\ce{Cu^{2+} + 2e^- -> Cu}\). O cobre se deposita.
- **Reação global:** \(\ce{Zn + Cu^{2+} -> Zn^{2+} + Cu}\).
- **Ponte salina:** um tubo com um eletrólito (como KCl em gel) que fecha o circuito permitindo a migração de íons e mantém as soluções eletricamente neutras.

Os elétrons fluem pelo fio do ânodo para o cátodo. Um truque para lembrar: **ânodo** e **oxidação** começam com vogal; **cátodo** e **redução**, com consoante.

Notação: \(\ce{Zn | Zn^{2+} || Cu^{2+} | Cu}\), com o ânodo à esquerda e a ponte salina representada por \(\|\).

## Potenciais-padrão de redução

Não é possível medir o potencial de um eletrodo isolado, apenas diferenças. Por convenção, o **eletrodo-padrão de hidrogênio** (EPH) tem potencial zero:

\[ \ce{2H+ (1\ mol/L) + 2e^- <=> H2 (1\ bar)} \qquad E^\circ = 0{,}00\ \text{V} \]

| Semirreação de redução | \(E^\circ\) (V) |
|---|---|
| \(\ce{F2 + 2e^- -> 2F^-}\) | +2,87 |
| \(\ce{O2 + 4H+ + 4e^- -> 2H2O}\) | +1,23 |
| \(\ce{Ag+ + e^- -> Ag}\) | +0,80 |
| \(\ce{Cu^{2+} + 2e^- -> Cu}\) | +0,34 |
| \(\ce{2H+ + 2e^- -> H2}\) | 0,00 |
| \(\ce{Fe^{2+} + 2e^- -> Fe}\) | −0,44 |
| \(\ce{Zn^{2+} + 2e^- -> Zn}\) | −0,76 |
| \(\ce{Li+ + e^- -> Li}\) | −3,04 |

Quanto **maior** o \(E^\circ\), maior a tendência de a espécie **se reduzir** (oxidante forte). Quanto menor, maior a tendência de a forma reduzida se oxidar (redutor forte, como o lítio).

## Força eletromotriz e espontaneidade

\[ E^\circ_{pilha} = E^\circ_{cátodo} - E^\circ_{ânodo} \]

Na pilha de Daniell, \(0{,}34 - (-0{,}76) = 1{,}10\) V. Os potenciais **não** são multiplicados pelos coeficientes estequiométricos, porque são grandezas intensivas.

A relação com a termodinâmica (tema 48):

\[ \Delta G^\circ = -n\,F\,E^\circ \qquad\qquad F = 96\,485\ \text{C/mol} \]

em que \(n\) é o número de mols de elétrons transferidos e \(F\) é a **constante de Faraday**. Se \(E^\circ \gt 0\), então \(\Delta G^\circ \lt 0\): a reação é espontânea. Para a pilha de Daniell, \(\Delta G^\circ = -2\cdot96\,485\cdot1{,}10 \approx -212\) kJ/mol. Como \(\Delta G^\circ = -RT\ln K\), também se calcula a constante de equilíbrio: \(E^\circ = \dfrac{RT}{nF}\ln K\).

## A equação de Nernst

Fora das condições-padrão, o potencial depende das concentrações, pelo quociente de reação \(Q\) (tema 14):

\[ E = E^\circ - \frac{RT}{nF}\ln Q \qquad\xrightarrow{25\,°\text{C}}\qquad E = E^\circ - \frac{0{,}0592}{n}\log Q \]

À medida que a pilha funciona, \(Q\) aumenta e \(E\) diminui, até chegar a zero no equilíbrio: a pilha "acaba".

**Exemplo:** pilha de Daniell com \([\ce{Zn^{2+}}] = 1{,}0\) mol/L e \([\ce{Cu^{2+}}] = 0{,}010\) mol/L, a 25 °C:

\[ E = 1{,}10 - \frac{0{,}0592}{2}\log\frac{1{,}0}{0{,}010} = 1{,}10 - 0{,}059 \approx 1{,}04\ \text{V} \]

## Eletrodos de medida

- **Eletrodo de pH:** uma membrana de vidro especial gera um potencial que depende da diferença de \(\ce{H+}\) entre os dois lados. Pela equação de Nernst, a 25 °C, o potencial varia cerca de **59 mV por unidade de pH** (tema 26), e essa inclinação muda com a temperatura, daí a compensação de temperatura nos pHmetros.
- **Eletrodos de referência:** prata/cloreto de prata (Ag/AgCl) e calomelano mantêm um potencial constante e conhecido.
- **Eletrodo de oxigênio dissolvido (tipo Clark):** o oxigênio que atravessa uma membrana é reduzido no cátodo sob uma tensão fixa, e a corrente gerada é proporcional à pressão parcial de \(\ce{O2}\).
- **Biossensores de glicose:** a glicose oxidase oxida a glicose, e o produto (ou um mediador) é detectado eletroquimicamente. É o princípio dos glicosímetros.

## Potenciais redox biológicos

Em bioquímica, usa-se o potencial-padrão a pH 7, \(E^{\circ\prime}\). Os elétrons fluem espontaneamente de pares com \(E^{\circ\prime}\) mais negativo para os mais positivos:

\[ \ce{NAD+/NADH}: -0{,}32\ \text{V} \qquad\longrightarrow\qquad \ce{O2/H2O}: +0{,}82\ \text{V} \]

A diferença de 1,14 V, com \(n = 2\), libera \(\Delta G^{\circ\prime} = -2\cdot96\,485\cdot1{,}14 \approx -220\) kJ/mol. A cadeia respiratória divide essa queda em várias etapas para aproveitar a energia na síntese de ATP (tema 107).

> **Atenção, erros comuns:**
> Multiplicar \(E^\circ\) pelos coeficientes estequiométricos.
> Inverter ânodo e cátodo (o ânodo é onde ocorre a oxidação, em pilhas e na eletrólise).
> Esquecer de converter ln em log (fator 2,303) na equação de Nernst.

## Para fixar

- Pilha: oxidação no ânodo (−), redução no cátodo (+); \(E^\circ_{pilha} = E^\circ_{cát} - E^\circ_{ân}\).
- \(\Delta G = -nFE\): potencial positivo significa reação espontânea.
- Nernst: \(E = E^\circ - (0{,}0592/n)\log Q\) a 25 °C.
`,
  referencias: [
    "ATKINS, P.; DE PAULA, J. **Físico-química**. v. 1. 10. ed. Rio de Janeiro: LTC, 2017. Cap. 6: Equilíbrio químico (células eletroquímicas).",
    "SKOOG, D. A. et al. **Fundamentos de química analítica**. 9. ed. São Paulo: Cengage Learning, 2014. Cap. 18, 19 e 21.",
    "TICIANELLI, E. A.; GONZALEZ, E. R. **Eletroquímica**: princípios e aplicações. 2. ed. São Paulo: Edusp, 2005.",
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019. Cap. 13.",
  ],
},
{
  id: "r79", num: 79,
  area: "Físico-Química",
  disciplina: "Físico-Química",
  titulo: "Eletrólise, baterias e células a combustível",
  descricao: "Eletrólise e as leis de Faraday, eletrólise da água e hidrogênio verde, baterias primárias e recarregáveis, células a combustível e células a combustível microbianas.",
  tags: ["Físico-Química", "eletroquímica", "eletrólise", "leis de Faraday", "galvanoplastia", "hidrogênio verde", "bateria", "íon-lítio", "célula a combustível", "PEM", "célula a combustível microbiana", "bioeletroquímica", "eletrodo"],
  conteudo: String.raw`
## Eletrólise: a pilha ao contrário

Na **eletrólise**, uma fonte externa força uma reação **não espontânea** (\(\Delta G \gt 0\)) a acontecer. A tensão aplicada precisa ser maior que a força eletromotriz da reação inversa. Os nomes se mantêm: no **ânodo** ocorre a oxidação e no **cátodo**, a redução, mas aqui o ânodo é o polo **positivo** (ligado ao positivo da fonte).

| | Pilha (galvânica) | Eletrólise |
|---|---|---|
| Espontaneidade | espontânea, \(\Delta G \lt 0\) | forçada, \(\Delta G \gt 0\) |
| Energia | química → elétrica | elétrica → química |
| Ânodo | oxidação, polo − | oxidação, polo + |
| Cátodo | redução, polo + | redução, polo − |

**Exemplos:** produção industrial de alumínio, cloro e soda cáustica; refino eletrolítico do cobre; galvanoplastia (cromagem, niquelação); e a **eletrólise da água**.

## As leis de Faraday

A quantidade de substância transformada é proporcional à carga que passa pelo circuito:

\[ n = \frac{Q}{z\,F} = \frac{I\,t}{z\,F} \qquad\qquad m = \frac{M\,I\,t}{z\,F} \]

em que \(z\) é o número de elétrons por espécie e \(F = 96\,485\) C/mol.

**Exemplo:** quanto cobre se deposita com 2,0 A durante 1 hora?

\[ m = \frac{63{,}5\cdot2{,}0\cdot3600}{2\cdot96\,485} \approx 2{,}37\ \text{g} \]

## Eletrólise da água e hidrogênio verde

\[ \text{Cátodo: } \ce{2H2O + 2e^- -> H2 + 2OH^-} \qquad \text{Ânodo: } \ce{2H2O -> O2 + 4H+ + 4e^-} \]

A reação global, \(\ce{2H2O -> 2H2 + O2}\), exige teoricamente 1,23 V, mas na prática são necessários 1,8 a 2,0 V, por causa das **sobretensões** (barreiras cinéticas nos eletrodos) e da resistência elétrica. Quando a eletricidade vem de fontes renováveis (solar, eólica, hidrelétrica), o hidrogênio é chamado de **hidrogênio verde**, um vetor de energia e matéria-prima para fertilizantes e combustíveis sem emissão de carbono na produção.

**Exemplo:** quanto hidrogênio se obtém com 1 kWh, operando a 2,0 V? A carga é \(Q = E/V = 3{,}6\times10^6/2{,}0 = 1{,}8\times10^6\) C, o que dá \(n = 1{,}8\times10^6/(2\cdot96\,485) \approx 9{,}3\) mol, ou cerca de 19 g de \(\ce{H2}\).

## Baterias

- **Primárias** (descartáveis): as reações não são revertidas eficientemente. Exemplo: pilhas alcalinas de zinco e dióxido de manganês (1,5 V).
- **Secundárias** (recarregáveis): a recarga é uma eletrólise que restaura os reagentes. Exemplos: chumbo-ácido (baterias de carro, 2 V por célula), níquel-hidreto metálico e **íon-lítio** (celulares, veículos elétricos), em que íons \(\ce{Li+}\) migram entre um ânodo de grafite e um cátodo de óxido metálico. O lítio é escolhido por ser leve e ter o potencial mais negativo da tabela, o que dá tensões de 3,6 a 3,7 V por célula.

Grandezas importantes: **capacidade** (em A·h, a carga total que a bateria entrega) e **energia específica** (em Wh/kg).

## Células a combustível

<svg viewBox="0 0 740 380" xmlns="http://www.w3.org/2000/svg" role="img"><title>Células a combustivel</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Célula a combustivel e célula a combustivel microbiana</text><text x="30" y="64" font-size="12.5" text-anchor="start" fill="#0083cb" font-weight="700">célula a combustivel (PEM)</text><rect x="340" y="80" width="20" height="84" rx="3" fill="#f6e4fa" stroke="#a300bc" stroke-width="1.3"/><text x="350" y="176" font-size="9.6" text-anchor="middle" fill="#a300bc" font-weight="600">membrana</text><rect x="276" y="80" width="16" height="84" rx="2" fill="#8a8a93" stroke="#8a8a93" stroke-width="1"/><rect x="408" y="80" width="16" height="84" rx="2" fill="#8a8a93" stroke="#8a8a93" stroke-width="1"/><text x="284" y="176" font-size="9.6" text-anchor="middle" fill="#333333" font-weight="600">anodo</text><text x="416" y="176" font-size="9.6" text-anchor="middle" fill="#333333" font-weight="600">catodo</text><line x1="180" y1="114" x2="272" y2="114" stroke="#0083cb" stroke-width="2" stroke-linecap="round" marker-end="url(#a-az)"/><text x="176" y="110" font-size="11" text-anchor="end" fill="#0083cb" font-weight="700">H2</text><line x1="560" y1="114" x2="428" y2="114" stroke="#0083cb" stroke-width="2" stroke-linecap="round" marker-end="url(#a-az)"/><text x="566" y="110" font-size="11" text-anchor="start" fill="#0083cb" font-weight="700">O2 do ar</text><text x="566" y="130" font-size="10" text-anchor="start" fill="#5c5c66">e reduzido a água</text><line x1="296" y1="146" x2="404" y2="146" stroke="#f40086" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-rs)"/><text x="350" y="160" font-size="10.5" text-anchor="middle" fill="#f40086" font-weight="700">H+</text><line x1="284" y1="74" x2="416" y2="74" stroke="#333333" stroke-width="1.8" stroke-linecap="round"/><line x1="330" y1="74" x2="300" y2="74" stroke="#0a8f5e" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-ve)"/><circle cx="368" cy="74" r="13" fill="#fff" stroke="#333333" stroke-width="1.4"/><text x="368" y="78" font-size="10" text-anchor="middle" fill="#333333" font-weight="700">R</text><text x="236" y="88" font-size="10" text-anchor="middle" fill="#0a8f5e" font-weight="700">elétrons</text><text x="620" y="154" font-size="10" text-anchor="middle" fill="#5c5c66">o único produto da reação e água</text><text x="30" y="214" font-size="12.5" text-anchor="start" fill="#0a8f5e" font-weight="700">célula a combustivel microbiana</text><rect x="340" y="230" width="20" height="84" rx="3" fill="#f6e4fa" stroke="#a300bc" stroke-width="1.3"/><text x="350" y="326" font-size="9.6" text-anchor="middle" fill="#a300bc" font-weight="600">membrana</text><rect x="276" y="230" width="16" height="84" rx="2" fill="#8a8a93" stroke="#8a8a93" stroke-width="1"/><rect x="408" y="230" width="16" height="84" rx="2" fill="#8a8a93" stroke="#8a8a93" stroke-width="1"/><text x="284" y="326" font-size="9.6" text-anchor="middle" fill="#333333" font-weight="600">anodo</text><text x="416" y="326" font-size="9.6" text-anchor="middle" fill="#333333" font-weight="600">catodo</text><line x1="180" y1="264" x2="272" y2="264" stroke="#0a8f5e" stroke-width="2" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="176" y="260" font-size="11" text-anchor="end" fill="#0a8f5e" font-weight="700">matéria orgânica</text><line x1="560" y1="264" x2="428" y2="264" stroke="#0083cb" stroke-width="2" stroke-linecap="round" marker-end="url(#a-az)"/><text x="566" y="260" font-size="11" text-anchor="start" fill="#0083cb" font-weight="700">O2 do ar</text><text x="566" y="280" font-size="10" text-anchor="start" fill="#5c5c66">e reduzido a água</text><line x1="296" y1="296" x2="404" y2="296" stroke="#f40086" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-rs)"/><text x="350" y="310" font-size="10.5" text-anchor="middle" fill="#f40086" font-weight="700">H+</text><line x1="284" y1="224" x2="416" y2="224" stroke="#333333" stroke-width="1.8" stroke-linecap="round"/><line x1="330" y1="224" x2="300" y2="224" stroke="#0a8f5e" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-ve)"/><circle cx="368" cy="224" r="13" fill="#fff" stroke="#333333" stroke-width="1.4"/><text x="368" y="228" font-size="10" text-anchor="middle" fill="#333333" font-weight="700">R</text><text x="236" y="238" font-size="10" text-anchor="middle" fill="#0a8f5e" font-weight="700">elétrons</text><circle cx="258" cy="244" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="267" cy="244" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="276" cy="244" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="258" cy="260" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><circle cx="267" cy="260" r="5" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><text x="246" y="290" font-size="9.6" text-anchor="middle" fill="#0a8f5e" font-weight="700">biofilme</text><text x="620" y="304" font-size="10" text-anchor="middle" fill="#5c5c66">bactérias no lugar do catalisador</text><text x="20" y="368" font-size="11" text-anchor="start" fill="#5c5c66">Não são limitadas pelo ciclo de Carnot, porque a energia química vira elétrica sem passar por calor.</text></svg>
Na célula microbiana, as bactérias do biofilme fazem o papel do catalisador do ânodo.

Uma **célula a combustível** é uma pilha alimentada continuamente: o combustível chega ao ânodo e o oxidante (geralmente o ar) ao cátodo, sem que os eletrodos sejam consumidos. Funciona enquanto houver alimentação, como um motor, mas sem combustão.

Na célula de **membrana de troca de prótons** (PEM), com hidrogênio:

\[ \text{Ânodo: } \ce{H2 -> 2H+ + 2e^-} \qquad \text{Cátodo: } \ce{1/2O2 + 2H+ + 2e^- -> H2O} \]

O único produto é água. O rendimento elétrico chega a 40% a 60%, e não é limitado pelo ciclo de Carnot (tema 73), porque a energia química vira elétrica diretamente, sem passar por calor. O limite teórico é \(\Delta G/\Delta H\), cerca de 83% para \(\ce{H2}\) a 25 °C. Os eletrodos usam catalisadores de platina, caros, o que motiva pesquisas por alternativas.

Outras variantes usam metanol ou **etanol** diretamente como combustível. O Brasil tem interesse especial nas células a etanol, que aproveitariam a infraestrutura já existente.

## Células a combustível microbianas (MFC)

Nas **células a combustível microbianas**, o catalisador do ânodo são **bactérias vivas**. Alguns microrganismos, chamados **exoeletrogênicos** (como espécies de *Geobacter* e *Shewanella*), conseguem transferir os elétrons do seu metabolismo diretamente para um eletrodo sólido, por citocromos na membrana externa, por filamentos condutores ou por mediadores solúveis. Assim, a oxidação da matéria orgânica de um efluente gera corrente elétrica:

\[ \text{Ânodo (exemplo com acetato): } \ce{CH3COO^- + 4H2O -> 2HCO3^- + 9H+ + 8e^-} \]

As densidades de potência ainda são baixas para gerar energia em grande escala, mas a tecnologia é estudada para:

- tratar efluentes gerando eletricidade em vez de gastar energia com aeração;
- alimentar sensores em locais remotos (MFCs de sedimento);
- produzir hidrogênio com uma pequena tensão adicional (**células de eletrólise microbiana**);
- funcionar como **biossensores** de toxicidade ou de DQO, porque a corrente cai quando os microrganismos são inibidos.

O conjunto dessas tecnologias forma a **bioeletroquímica**, que inclui também a **eletrossíntese microbiana**, em que bactérias usam elétrons de um cátodo para reduzir \(\ce{CO2}\) a compostos orgânicos.

> **Atenção, erros comuns:**
> Achar que o ânodo é sempre negativo: na eletrólise, ele é positivo.
> Esquecer o número de elétrons \(z\) nas leis de Faraday.
> Supor que células a combustível são limitadas pelo rendimento de Carnot.

## Para fixar

- Eletrólise força reações não espontâneas; \(n = It/(zF)\).
- Baterias recarregáveis são pilhas cuja reação pode ser revertida por eletrólise.
- Células a combustível são pilhas alimentadas continuamente; nas microbianas, bactérias oxidam a matéria orgânica no ânodo.
`,
  referencias: [
    "TICIANELLI, E. A.; GONZALEZ, E. R. **Eletroquímica**: princípios e aplicações. 2. ed. São Paulo: Edusp, 2005.",
    "ATKINS, P.; JONES, L.; LAVERMAN, L. **Princípios de química**. 7. ed. Porto Alegre: Bookman, 2018. Cap. 6: Eletroquímica.",
    "LOGAN, B. E. et al. Microbial fuel cells: methodology and technology. **Environmental Science & Technology**, v. 40, n. 17, p. 5181-5192, 2006.",
    "LOVLEY, D. R. Bug juice: harvesting electricity with microorganisms. **Nature Reviews Microbiology**, v. 4, n. 7, p. 497-508, 2006.",
  ],
}
);
