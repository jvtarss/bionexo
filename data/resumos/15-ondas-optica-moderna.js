/* BIONEXO — Resumos complementares · Ondulatória, Óptica e Física Moderna (r88–r93) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r88", num: 88,
  area: "Ondulatória, Óptica e Física Moderna",
  disciplina: "Física Básica: Ondas e Óptica",
  titulo: "Ondas e fenômenos ondulatórios",
  descricao: "O que é uma onda, ondas mecânicas e eletromagnéticas, transversais e longitudinais, a equação de onda, superposição, interferência, ondas estacionárias, reflexão, refração, difração e o efeito Doppler.",
  tags: ["Física 2", "ondas", "ondulatória", "onda transversal", "onda longitudinal", "comprimento de onda", "frequência", "equação de onda", "superposição", "interferência", "onda estacionária", "reflexão", "refração", "difração", "efeito Doppler"],
  conteudo: String.raw`
## O que é uma onda

Uma **onda** é uma perturbação que se propaga transportando **energia**, mas **não matéria**. Numa "ola" de estádio, cada pessoa só se levanta e senta; o que viaja é o padrão. Numa corda, cada pedaço sobe e desce, enquanto o pulso corre pela corda.

- **Ondas mecânicas** precisam de um meio material: som, ondas na água, ondas sísmicas, ondas numa corda.
- **Ondas eletromagnéticas** se propagam também no vácuo: luz, rádio, raios X (tema 87).
- **Transversais:** o meio oscila perpendicularmente à propagação (corda, luz).
- **Longitudinais:** o meio oscila na mesma direção da propagação, com compressões e rarefações (som no ar).

## Descrevendo uma onda periódica

Uma onda senoidal que viaja no sentido \(+x\):

\[ y(x,t) = A\,\sin(kx - \omega t) \]

| Grandeza | Símbolo | Relação |
|---|---|---|
| Amplitude | \(A\) | o maior afastamento do equilíbrio |
| Comprimento de onda | \(\lambda\) | distância entre duas cristas; \(k = 2\pi/\lambda\) é o número de onda |
| Período e frequência | \(T\), \(f\) | \(f = 1/T\); \(\omega = 2\pi f\) |
| Velocidade de propagação | \(v\) | \(v = \lambda f = \omega/k\) |

A **frequência é definida pela fonte** e não muda quando a onda passa de um meio para outro. A **velocidade depende do meio**. Numa corda com tração \(T\) e massa por comprimento \(\mu\), \(v = \sqrt{T/\mu}\); no ar, o som viaja a cerca de 343 m/s a 20 °C.

## A equação de onda

Toda onda que se propaga sem mudar de forma satisfaz a **equação de onda**, uma equação diferencial parcial:

\[ \frac{\partial^2 y}{\partial x^2} = \frac{1}{v^2}\,\frac{\partial^2 y}{\partial t^2} \]

É essa equação que Maxwell obteve para os campos elétrico e magnético, encontrando \(v = c\) (tema 87).

A potência transportada por uma onda é proporcional ao **quadrado da amplitude** e ao quadrado da frequência, como no MHS (tema 68).

<svg viewBox="0 0 740 340" xmlns="http://www.w3.org/2000/svg" role="img"><title>Ondas e interferencia</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Anatomia de uma onda e interferencia</text><rect x="50" y="56" width="330" height="150" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="132.5" y1="56" x2="132.5" y2="206" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="215" y1="56" x2="215" y2="206" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="297.5" y1="56" x2="297.5" y2="206" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="380" y1="56" x2="380" y2="206" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="184.571" x2="380" y2="184.571" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="131" x2="380" y2="131" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="77.4286" x2="380" y2="77.4286" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="50" y1="56" x2="50" y2="206" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="50" y1="131" x2="380" y2="131" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="132.5" y="221" font-size="10.5" text-anchor="middle" fill="#8a8a93">0.5</text><text x="215" y="221" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="297.5" y="221" font-size="10.5" text-anchor="middle" fill="#8a8a93">1.5</text><text x="380" y="221" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="44" y="188.071" font-size="10.5" text-anchor="end" fill="#8a8a93">-1</text><text x="44" y="80.9286" font-size="10.5" text-anchor="end" fill="#8a8a93">1</text><text x="384" y="210" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">posicao</text><text x="46" y="50" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">y</text><path d="M50.0,131.0L51.5,127.9L53.0,124.9L54.5,121.9L56.0,118.9L57.5,115.9L59.0,113.0L60.5,110.1L62.0,107.4L63.5,104.7L65.0,102.0L66.5,99.5L68.0,97.1L69.5,94.8L71.0,92.6L72.5,90.5L74.0,88.6L75.5,86.8L77.0,85.1L78.5,83.6L80.0,82.3L81.5,81.1L83.0,80.1L84.5,79.2L86.0,78.5L87.5,78.0L89.0,77.6L90.5,77.5L92.0,77.5L93.5,77.6L95.0,78.0L96.5,78.5L98.0,79.2L99.5,80.1L101.0,81.1L102.5,82.3L104.0,83.6L105.5,85.1L107.0,86.8L108.5,88.6L110.0,90.5L111.5,92.6L113.0,94.8L114.5,97.1L116.0,99.5L117.5,102.0L119.0,104.7L120.5,107.4L122.0,110.1L123.5,113.0L125.0,115.9L126.5,118.9L128.0,121.9L129.5,124.9L131.0,127.9L132.5,131.0L134.0,134.1L135.5,137.1L137.0,140.1L138.5,143.1L140.0,146.1L141.5,149.0L143.0,151.9L144.5,154.6L146.0,157.3L147.5,160.0L149.0,162.5L150.5,164.9L152.0,167.2L153.5,169.4L155.0,171.5L156.5,173.4L158.0,175.2L159.5,176.9L161.0,178.4L162.5,179.7L164.0,180.9L165.5,181.9L167.0,182.8L168.5,183.5L170.0,184.0L171.5,184.4L173.0,184.5L174.5,184.5L176.0,184.4L177.5,184.0L179.0,183.5L180.5,182.8L182.0,181.9L183.5,180.9L185.0,179.7L186.5,178.4L188.0,176.9L189.5,175.2L191.0,173.4L192.5,171.5L194.0,169.4L195.5,167.2L197.0,164.9L198.5,162.5L200.0,160.0L201.5,157.3L203.0,154.6L204.5,151.9L206.0,149.0L207.5,146.1L209.0,143.1L210.5,140.1L212.0,137.1L213.5,134.1L215.0,131.0L216.5,127.9L218.0,124.9L219.5,121.9L221.0,118.9L222.5,115.9L224.0,113.0L225.5,110.1L227.0,107.4L228.5,104.7L230.0,102.0L231.5,99.5L233.0,97.1L234.5,94.8L236.0,92.6L237.5,90.5L239.0,88.6L240.5,86.8L242.0,85.1L243.5,83.6L245.0,82.3L246.5,81.1L248.0,80.1L249.5,79.2L251.0,78.5L252.5,78.0L254.0,77.6L255.5,77.5L257.0,77.5L258.5,77.6L260.0,78.0L261.5,78.5L263.0,79.2L264.5,80.1L266.0,81.1L267.5,82.3L269.0,83.6L270.5,85.1L272.0,86.8L273.5,88.6L275.0,90.5L276.5,92.6L278.0,94.8L279.5,97.1L281.0,99.5L282.5,102.0L284.0,104.7L285.5,107.4L287.0,110.1L288.5,113.0L290.0,115.9L291.5,118.9L293.0,121.9L294.5,124.9L296.0,127.9L297.5,131.0L299.0,134.1L300.5,137.1L302.0,140.1L303.5,143.1L305.0,146.1L306.5,149.0L308.0,151.9L309.5,154.6L311.0,157.3L312.5,160.0L314.0,162.5L315.5,164.9L317.0,167.2L318.5,169.4L320.0,171.5L321.5,173.4L323.0,175.2L324.5,176.9L326.0,178.4L327.5,179.7L329.0,180.9L330.5,181.9L332.0,182.8L333.5,183.5L335.0,184.0L336.5,184.4L338.0,184.5L339.5,184.5L341.0,184.4L342.5,184.0L344.0,183.5L345.5,182.8L347.0,181.9L348.5,180.9L350.0,179.7L351.5,178.4L353.0,176.9L354.5,175.2L356.0,173.4L357.5,171.5L359.0,169.4L360.5,167.2L362.0,164.9L363.5,162.5L365.0,160.0L366.5,157.3L368.0,154.6L369.5,151.9L371.0,149.0L372.5,146.1L374.0,143.1L375.5,140.1L377.0,137.1L378.5,134.1L380.0,131.0" fill="none" stroke="#0083cb" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><line x1="91.25" y1="131" x2="91.25" y2="77.4286" stroke="#f40086" stroke-width="1.8" stroke-linecap="round" marker-start="url(#a-rs)" marker-end="url(#a-rs)"/><text x="99.25" y="104.214" font-size="10" text-anchor="start" fill="#f40086" font-weight="700">amplitude</text><line x1="91.25" y1="65.6429" x2="256.25" y2="65.6429" stroke="#a300bc" stroke-width="1.8" stroke-linecap="round" marker-start="url(#a-rx)" marker-end="url(#a-rx)"/><text x="173.75" y="57.6429" font-size="10" text-anchor="middle" fill="#a300bc" font-weight="700">comprimento de onda</text><text x="205" y="236" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">v = comprimento de onda x frequência</text><rect x="400" y="56" width="320" height="150" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><path d="M420.0,92.0L423.4,90.3L426.8,88.6L430.2,87.0L433.6,85.5L437.0,84.2L440.4,83.1L443.8,82.2L447.2,81.5L450.6,81.1L454.0,81.0L457.4,81.1L460.8,81.5L464.2,82.2L467.6,83.1L471.0,84.2L474.4,85.5L477.8,87.0L481.2,88.6L484.6,90.3L488.0,92.0L491.4,93.7L494.8,95.4L498.2,97.0L501.6,98.5L505.0,99.8L508.4,100.9L511.8,101.8L515.2,102.5L518.6,102.9L522.0,103.0L525.4,102.9L528.8,102.5L532.2,101.8L535.6,100.9L539.0,99.8L542.4,98.5L545.8,97.0L549.2,95.4L552.6,93.7L556.0,92.0L559.4,90.3L562.8,88.6L566.2,87.0L569.6,85.5L573.0,84.2L576.4,83.1L579.8,82.2L583.2,81.5L586.6,81.1L590.0,81.0L593.4,81.1L596.8,81.5L600.2,82.2L603.6,83.1L607.0,84.2L610.4,85.5L613.8,87.0L617.2,88.6L620.6,90.3L624.0,92.0L627.4,93.7L630.8,95.4L634.2,97.0L637.6,98.5L641.0,99.8L644.4,100.9L647.8,101.8L651.2,102.5L654.6,102.9L658.0,103.0L661.4,102.9L664.8,102.5L668.2,101.8L671.6,100.9L675.0,99.8L678.4,98.5L681.8,97.0L685.2,95.4L688.6,93.7L692.0,92.0" fill="none" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M420.0,92.0L423.4,90.3L426.8,88.6L430.2,87.0L433.6,85.5L437.0,84.2L440.4,83.1L443.8,82.2L447.2,81.5L450.6,81.1L454.0,81.0L457.4,81.1L460.8,81.5L464.2,82.2L467.6,83.1L471.0,84.2L474.4,85.5L477.8,87.0L481.2,88.6L484.6,90.3L488.0,92.0L491.4,93.7L494.8,95.4L498.2,97.0L501.6,98.5L505.0,99.8L508.4,100.9L511.8,101.8L515.2,102.5L518.6,102.9L522.0,103.0L525.4,102.9L528.8,102.5L532.2,101.8L535.6,100.9L539.0,99.8L542.4,98.5L545.8,97.0L549.2,95.4L552.6,93.7L556.0,92.0L559.4,90.3L562.8,88.6L566.2,87.0L569.6,85.5L573.0,84.2L576.4,83.1L579.8,82.2L583.2,81.5L586.6,81.1L590.0,81.0L593.4,81.1L596.8,81.5L600.2,82.2L603.6,83.1L607.0,84.2L610.4,85.5L613.8,87.0L617.2,88.6L620.6,90.3L624.0,92.0L627.4,93.7L630.8,95.4L634.2,97.0L637.6,98.5L641.0,99.8L644.4,100.9L647.8,101.8L651.2,102.5L654.6,102.9L658.0,103.0L661.4,102.9L664.8,102.5L668.2,101.8L671.6,100.9L675.0,99.8L678.4,98.5L681.8,97.0L685.2,95.4L688.6,93.7L692.0,92.0" fill="none" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3"/><path d="M420.0,92.0L423.4,88.6L426.8,85.2L430.2,82.0L433.6,79.1L437.0,76.4L440.4,74.2L443.8,72.4L447.2,71.1L450.6,70.3L454.0,70.0L457.4,70.3L460.8,71.1L464.2,72.4L467.6,74.2L471.0,76.4L474.4,79.1L477.8,82.0L481.2,85.2L484.6,88.6L488.0,92.0L491.4,95.4L494.8,98.8L498.2,102.0L501.6,104.9L505.0,107.6L508.4,109.8L511.8,111.6L515.2,112.9L518.6,113.7L522.0,114.0L525.4,113.7L528.8,112.9L532.2,111.6L535.6,109.8L539.0,107.6L542.4,104.9L545.8,102.0L549.2,98.8L552.6,95.4L556.0,92.0L559.4,88.6L562.8,85.2L566.2,82.0L569.6,79.1L573.0,76.4L576.4,74.2L579.8,72.4L583.2,71.1L586.6,70.3L590.0,70.0L593.4,70.3L596.8,71.1L600.2,72.4L603.6,74.2L607.0,76.4L610.4,79.1L613.8,82.0L617.2,85.2L620.6,88.6L624.0,92.0L627.4,95.4L630.8,98.8L634.2,102.0L637.6,104.9L641.0,107.6L644.4,109.8L647.8,111.6L651.2,112.9L654.6,113.7L658.0,114.0L661.4,113.7L664.8,112.9L668.2,111.6L671.6,109.8L675.0,107.6L678.4,104.9L681.8,102.0L685.2,98.8L688.6,95.4L692.0,92.0" fill="none" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><text x="426" y="72" font-size="10.5" text-anchor="start" fill="#0a8f5e" font-weight="700">construtiva</text><path d="M420.0,164.0L423.4,162.3L426.8,160.6L430.2,159.0L433.6,157.5L437.0,156.2L440.4,155.1L443.8,154.2L447.2,153.5L450.6,153.1L454.0,153.0L457.4,153.1L460.8,153.5L464.2,154.2L467.6,155.1L471.0,156.2L474.4,157.5L477.8,159.0L481.2,160.6L484.6,162.3L488.0,164.0L491.4,165.7L494.8,167.4L498.2,169.0L501.6,170.5L505.0,171.8L508.4,172.9L511.8,173.8L515.2,174.5L518.6,174.9L522.0,175.0L525.4,174.9L528.8,174.5L532.2,173.8L535.6,172.9L539.0,171.8L542.4,170.5L545.8,169.0L549.2,167.4L552.6,165.7L556.0,164.0L559.4,162.3L562.8,160.6L566.2,159.0L569.6,157.5L573.0,156.2L576.4,155.1L579.8,154.2L583.2,153.5L586.6,153.1L590.0,153.0L593.4,153.1L596.8,153.5L600.2,154.2L603.6,155.1L607.0,156.2L610.4,157.5L613.8,159.0L617.2,160.6L620.6,162.3L624.0,164.0L627.4,165.7L630.8,167.4L634.2,169.0L637.6,170.5L641.0,171.8L644.4,172.9L647.8,173.8L651.2,174.5L654.6,174.9L658.0,175.0L661.4,174.9L664.8,174.5L668.2,173.8L671.6,172.9L675.0,171.8L678.4,170.5L681.8,169.0L685.2,167.4L688.6,165.7L692.0,164.0" fill="none" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M420.0,164.0L423.4,165.7L426.8,167.4L430.2,169.0L433.6,170.5L437.0,171.8L440.4,172.9L443.8,173.8L447.2,174.5L450.6,174.9L454.0,175.0L457.4,174.9L460.8,174.5L464.2,173.8L467.6,172.9L471.0,171.8L474.4,170.5L477.8,169.0L481.2,167.4L484.6,165.7L488.0,164.0L491.4,162.3L494.8,160.6L498.2,159.0L501.6,157.5L505.0,156.2L508.4,155.1L511.8,154.2L515.2,153.5L518.6,153.1L522.0,153.0L525.4,153.1L528.8,153.5L532.2,154.2L535.6,155.1L539.0,156.2L542.4,157.5L545.8,159.0L549.2,160.6L552.6,162.3L556.0,164.0L559.4,165.7L562.8,167.4L566.2,169.0L569.6,170.5L573.0,171.8L576.4,172.9L579.8,173.8L583.2,174.5L586.6,174.9L590.0,175.0L593.4,174.9L596.8,174.5L600.2,173.8L603.6,172.9L607.0,171.8L610.4,170.5L613.8,169.0L617.2,167.4L620.6,165.7L624.0,164.0L627.4,162.3L630.8,160.6L634.2,159.0L637.6,157.5L641.0,156.2L644.4,155.1L647.8,154.2L651.2,153.5L654.6,153.1L658.0,153.0L661.4,153.1L664.8,153.5L668.2,154.2L671.6,155.1L675.0,156.2L678.4,157.5L681.8,159.0L685.2,160.6L688.6,162.3L692.0,164.0" fill="none" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3"/><path d="M420.0,164.0L423.4,164.0L426.8,164.0L430.2,164.0L433.6,164.0L437.0,164.0L440.4,164.0L443.8,164.0L447.2,164.0L450.6,164.0L454.0,164.0L457.4,164.0L460.8,164.0L464.2,164.0L467.6,164.0L471.0,164.0L474.4,164.0L477.8,164.0L481.2,164.0L484.6,164.0L488.0,164.0L491.4,164.0L494.8,164.0L498.2,164.0L501.6,164.0L505.0,164.0L508.4,164.0L511.8,164.0L515.2,164.0L518.6,164.0L522.0,164.0L525.4,164.0L528.8,164.0L532.2,164.0L535.6,164.0L539.0,164.0L542.4,164.0L545.8,164.0L549.2,164.0L552.6,164.0L556.0,164.0L559.4,164.0L562.8,164.0L566.2,164.0L569.6,164.0L573.0,164.0L576.4,164.0L579.8,164.0L583.2,164.0L586.6,164.0L590.0,164.0L593.4,164.0L596.8,164.0L600.2,164.0L603.6,164.0L607.0,164.0L610.4,164.0L613.8,164.0L617.2,164.0L620.6,164.0L624.0,164.0L627.4,164.0L630.8,164.0L634.2,164.0L637.6,164.0L641.0,164.0L644.4,164.0L647.8,164.0L651.2,164.0L654.6,164.0L658.0,164.0L661.4,164.0L664.8,164.0L668.2,164.0L671.6,164.0L675.0,164.0L678.4,164.0L681.8,164.0L685.2,164.0L688.6,164.0L692.0,164.0" fill="none" stroke="#d33a4e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><text x="426" y="144" font-size="10.5" text-anchor="start" fill="#d33a4e" font-weight="700">destrutiva</text><text x="560" y="236" font-size="10.5" text-anchor="middle" fill="#5c5c66">ondas se somam ponto a ponto</text><rect x="20" y="250" width="700" height="72" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="272" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">ondas estacionarias</text><text x="370" y="292" font-size="10.6" text-anchor="middle" fill="#5c5c66">Numa corda presa nas pontas, so cabem alguns comprimentos de onda: surgem frequências discretas.</text><text x="370" y="310" font-size="10.6" text-anchor="middle" fill="#5c5c66">O mesmo raciocinio, aplicado ao elétron no átomo, explica por que os níveis de energia são quantizados.</text></svg>
As grandezas de uma onda e o resultado da superposição de duas delas.

## Superposição e interferência

Como a equação de onda é linear, quando duas ondas se encontram, os deslocamentos simplesmente se **somam** (princípio da superposição), e depois cada uma segue o seu caminho, como se nada tivesse acontecido.

- **Interferência construtiva:** as ondas chegam em fase (crista com crista); a diferença de caminho é um múltiplo inteiro de \(\lambda\): \(\Delta L = m\lambda\).
- **Interferência destrutiva:** chegam em oposição de fase (crista com vale); \(\Delta L = (m + \tfrac12)\lambda\).

Os fones com **cancelamento ativo de ruído** captam o som ambiente e emitem uma onda invertida, que interfere destrutivamente com o ruído.

## Ondas estacionárias e ressonância

Numa corda presa nas duas pontas, ondas que vão e voltam se superpõem e formam **ondas estacionárias**, com pontos que nunca se movem (**nós**) e pontos de oscilação máxima (**ventres**). Só alguns comprimentos de onda "cabem" na corda:

\[ L = n\,\frac{\lambda}{2} \qquad\Rightarrow\qquad f_n = \frac{n\,v}{2L}, \quad n = 1, 2, 3, \dots \]

Essas são as **frequências naturais** (ou harmônicos) do sistema. Forçar o sistema numa delas produz **ressonância**. É assim que funcionam os instrumentos musicais e, como se verá, também os elétrons nos átomos (tema 93), que são descritos como ondas estacionárias.

## Reflexão, refração e difração

- **Reflexão:** a onda volta ao encontrar um obstáculo, com ângulo de reflexão igual ao de incidência. Na ponta fixa de uma corda, o pulso volta invertido.
- **Refração:** ao mudar de meio, a velocidade muda, o comprimento de onda muda (a frequência não) e, se a incidência é oblíqua, a direção também muda (lei de Snell, tema 90).
- **Difração:** a onda contorna obstáculos e se espalha ao passar por aberturas. O efeito é marcante quando a abertura é comparável ao comprimento de onda. Por isso se ouve alguém atrás de um muro (o som tem \(\lambda\) de metros) mas não se vê (a luz tem \(\lambda\) de centenas de nanômetros). A difração limita a resolução de microscópios (tema 91).

## O efeito Doppler

Quando a fonte ou o observador se movem, a frequência percebida muda. Para o som:

\[ f' = f\,\frac{v \pm v_o}{v \mp v_f} \]

Usam-se os sinais de cima para aproximação (do observador \(v_o\) ou da fonte \(v_f\)) e os de baixo para afastamento. A sirene de uma ambulância soa mais aguda ao se aproximar e mais grave ao se afastar.

O efeito também ocorre com a luz: galáxias que se afastam têm a luz desviada para o vermelho (*redshift*), uma das evidências da expansão do universo. Na medicina, o **ultrassom Doppler** mede a velocidade do sangue a partir da mudança de frequência do eco nas hemácias.

## Exemplo resolvido

Uma corda de violão de 0,65 m tem frequência fundamental de 110 Hz (a nota lá). Qual a velocidade da onda e as frequências dos próximos harmônicos?

\[ v = 2Lf_1 = 2\cdot0{,}65\cdot110 = 143\ \text{m/s} \qquad f_2 = 220\ \text{Hz}, \quad f_3 = 330\ \text{Hz} \]

Apertar a corda aumenta a tração, aumenta \(v\) e torna o som mais agudo.

> **Atenção, erros comuns:**
> Achar que a frequência muda na refração: quem muda são a velocidade e o comprimento de onda.
> Dizer que a onda transporta matéria.
> Trocar os sinais no efeito Doppler: aproximação sempre aumenta a frequência percebida.

## Para fixar

- \(v = \lambda f\); a frequência é da fonte e a velocidade é do meio.
- Superposição: interferência construtiva (\(\Delta L = m\lambda\)) e destrutiva (\(\Delta L = (m + \tfrac12)\lambda\)).
- Ondas estacionárias só existem em frequências discretas: \(f_n = nv/2L\).
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 2: Gravitação, ondas e termodinâmica. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 16 e 17.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 2: Fluidos, oscilações e ondas, calor. 5. ed. São Paulo: Blucher, 2014.",
    "YOUNG, H. D.; FREEDMAN, R. A. **Física II**: termodinâmica e ondas (Sears e Zemansky). 14. ed. São Paulo: Pearson, 2015.",
  ],
},
{
  id: "r89", num: 89,
  area: "Ondulatória, Óptica e Física Moderna",
  disciplina: "Física Básica: Ondas e Óptica",
  titulo: "Som e acústica",
  descricao: "A natureza do som, sua velocidade nos meios, intensidade e decibéis, altura, timbre e harmônicos, tubos sonoros, batimentos, ultrassom e o uso de ondas sonoras para romper células e medir estruturas.",
  tags: ["Física 2", "som", "acústica", "onda longitudinal", "velocidade do som", "intensidade sonora", "decibel", "altura", "timbre", "harmônicos", "tubo sonoro", "batimento", "ultrassom", "sonicação", "cavitação"],
  conteudo: String.raw`
## O que é o som

O **som** é uma onda mecânica **longitudinal**: uma sucessão de compressões e rarefações do meio, que se propaga pela colisão entre as moléculas. Por isso o som não se propaga no vácuo. O ouvido humano percebe frequências entre cerca de 20 Hz e 20 000 Hz. Abaixo, há o **infrassom** (usado por elefantes e baleias); acima, o **ultrassom** (morcegos, golfinhos, equipamentos médicos e de laboratório).

## A velocidade do som

A velocidade depende da "rigidez" do meio e da sua densidade:

\[ v = \sqrt{\frac{B}{\rho}} \]

em que \(B\) é o módulo de compressibilidade volumétrica. Nos gases, \(v = \sqrt{\gamma RT/M}\), crescendo com a temperatura (cerca de 0,6 m/s a cada °C no ar).

| Meio | Velocidade aproximada (m/s) |
|---|---|
| Ar (20 °C) | 343 |
| Água | 1480 |
| Tecidos moles do corpo | 1540 |
| Osso | 3000 a 4000 |
| Aço | 5900 |

O som é mais rápido em líquidos e sólidos porque eles são muito menos compressíveis, apesar de mais densos.

## Intensidade e nível sonoro

<svg viewBox="0 0 740 310" xmlns="http://www.w3.org/2000/svg" role="img"><title>Escala de decibeis</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">A escala de decibeis e logaritmica</text><text x="230" y="76" font-size="11.5" text-anchor="end" fill="#333333" font-weight="600">limiar da audicao</text><rect x="246" y="60" width="400" height="24" rx="5" fill="#f2f3f7" stroke="none" stroke-width="0"/><rect x="246" y="60" width="0" height="24" rx="5" fill="#0a8f5e" stroke="none" stroke-width="0"/><text x="656" y="77" font-size="11.5" text-anchor="start" fill="#0a8f5e" font-weight="700">0 dB</text><text x="230" y="114" font-size="11.5" text-anchor="end" fill="#333333" font-weight="600">conversa</text><rect x="246" y="98" width="400" height="24" rx="5" fill="#f2f3f7" stroke="none" stroke-width="0"/><rect x="246" y="98" width="184.615" height="24" rx="5" fill="#0a8f5e" stroke="none" stroke-width="0"/><text x="656" y="115" font-size="11.5" text-anchor="start" fill="#0a8f5e" font-weight="700">60 dB</text><text x="230" y="152" font-size="11.5" text-anchor="end" fill="#333333" font-weight="600">transito intenso</text><rect x="246" y="136" width="400" height="24" rx="5" fill="#f2f3f7" stroke="none" stroke-width="0"/><rect x="246" y="136" width="261.538" height="24" rx="5" fill="#c67600" stroke="none" stroke-width="0"/><text x="656" y="153" font-size="11.5" text-anchor="start" fill="#c67600" font-weight="700">85 dB</text><text x="230" y="190" font-size="11.5" text-anchor="end" fill="#333333" font-weight="600">sonicador sem protecao</text><rect x="246" y="174" width="400" height="24" rx="5" fill="#f2f3f7" stroke="none" stroke-width="0"/><rect x="246" y="174" width="323.077" height="24" rx="5" fill="#d33a4e" stroke="none" stroke-width="0"/><text x="656" y="191" font-size="11.5" text-anchor="start" fill="#d33a4e" font-weight="700">105 dB</text><text x="230" y="228" font-size="11.5" text-anchor="end" fill="#333333" font-weight="600">limiar da dor</text><rect x="246" y="212" width="400" height="24" rx="5" fill="#f2f3f7" stroke="none" stroke-width="0"/><rect x="246" y="212" width="384.615" height="24" rx="5" fill="#d33a4e" stroke="none" stroke-width="0"/><text x="656" y="229" font-size="11.5" text-anchor="start" fill="#d33a4e" font-weight="700">125 dB</text><line x1="246" y1="252" x2="646" y2="252" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><text x="246" y="272" font-size="11" text-anchor="start" fill="#5c5c66">Cada 10 dB a mais significam dez vezes mais intensidade.</text><text x="246" y="290" font-size="11" text-anchor="start" fill="#5c5c66">Dois equipamentos de 70 dB juntos dao 73 dB, e não 140 dB.</text><rect x="20" y="258" width="200" height="44" rx="8" fill="#fdeaed" stroke="#d33a4e" stroke-width="1.2"/><text x="120" y="278" font-size="11" text-anchor="middle" fill="#d33a4e" font-weight="700">acima de 85 dB</text><text x="120" y="294" font-size="9.4" text-anchor="middle" fill="#333333">a exposicao prolongada lesiona</text></svg>
A escala de decibéis comprime uma faixa enorme de intensidades.

A **intensidade** é a potência por unidade de área (W/m²) e cai com o quadrado da distância de uma fonte pontual. O ouvido percebe uma faixa enorme de intensidades, de \(10^{-12}\) W/m² (o limiar da audição) a cerca de 1 W/m² (o limiar da dor). Por isso se usa uma escala **logarítmica**, o **nível sonoro** em decibéis:

\[ \beta = 10\,\log\frac{I}{I_0} \qquad\qquad I_0 = 10^{-12}\ \text{W/m}^2 \]

| Som | Nível (dB) |
|---|---|
| Limiar da audição | 0 |
| Conversa normal | 60 |
| Trânsito intenso | 80 a 90 |
| Show de rock | 110 a 120 |
| Limiar da dor | 120 a 130 |

Cada **10 dB a mais** significam uma intensidade **10 vezes maior**; 3 dB a mais significam o dobro. A exposição prolongada acima de cerca de 85 dB causa perda auditiva. Sonicadores de laboratório podem ultrapassar 100 dB, e por isso costumam ficar em caixas de isolamento acústico ou exigem protetor auricular.

**Exemplo:** dois equipamentos iguais, cada um produzindo 70 dB, ligados juntos produzem \(70 + 10\log2 \approx 73\) dB, e não 140 dB.

## Qualidades do som

- **Altura:** depende da **frequência**. Sons agudos têm frequência alta; graves, baixa. Dobrar a frequência sobe uma oitava.
- **Intensidade (volume):** depende da **amplitude**.
- **Timbre:** depende da combinação de **harmônicos**. Um violino e uma flauta tocando a mesma nota têm a mesma frequência fundamental, mas misturas diferentes de harmônicos. A decomposição de um som em suas frequências componentes é feita pela **análise de Fourier**.

## Tubos sonoros

Nos instrumentos de sopro, o ar dentro de um tubo forma ondas estacionárias (tema 88):

| Tubo | Extremidades | Frequências possíveis |
|---|---|---|
| Aberto | duas abertas (ventres de deslocamento) | \(f_n = n\,\dfrac{v}{2L}\), todos os harmônicos |
| Fechado | uma aberta, uma fechada (nó na fechada) | \(f_n = n\,\dfrac{v}{4L}\), só os harmônicos ímpares |

## Batimentos

Duas fontes com frequências muito próximas, \(f_1\) e \(f_2\), interferem e produzem um som que aumenta e diminui de volume periodicamente, com a **frequência de batimento** \(f_{bat} = |f_1 - f_2|\). Os músicos afinam instrumentos ajustando até o batimento desaparecer.

## Ultrassom: imagens e medidas

No **ultrassom diagnóstico** (de 1 a 20 MHz), um transdutor piezoelétrico emite pulsos e mede o tempo de retorno dos ecos nas interfaces entre tecidos. Sabendo que a velocidade nos tecidos é cerca de 1540 m/s, calcula-se a profundidade: \(d = v\,t/2\). Frequências mais altas dão melhor resolução (comprimentos de onda menores), mas penetram menos. Em bioprocessos, sondas de ultrassom também medem nível de líquidos em tanques e concentração de sólidos.

## Ultrassom de potência: rompendo células

Em intensidades altas (tipicamente 20 a 40 kHz), o ultrassom produz **cavitação**: nas fases de rarefação, formam-se microbolhas, que colapsam violentamente nas fases de compressão, gerando ondas de choque, jatos e forte cisalhamento local. Isso é aproveitado em:

- **Rompimento celular (sonicação):** libera proteínas intracelulares de bactérias e leveduras, em escala de laboratório. A amostra deve ficar no gelo e a sonicação deve ser feita em pulsos, porque a energia acústica vira calor e pode desnaturar as proteínas.
- **Fragmentação de DNA:** o cisalhamento quebra o DNA em fragmentos de tamanho controlado, etapa do preparo de bibliotecas para sequenciamento de nova geração (tema 61) e da técnica de ChIP.
- **Banhos ultrassônicos:** limpeza de vidrarias e extração de compostos de plantas (extração assistida por ultrassom).

## Exemplo resolvido

Um eco de ultrassom retorna 65 µs depois da emissão. A que profundidade está a interface?

\[ d = \frac{1540\cdot65\times10^{-6}}{2} \approx 5{,}0\ \text{cm} \]

> **Atenção, erros comuns:**
> Somar decibéis diretamente.
> Achar que o som se propaga no vácuo, ou que é mais lento nos sólidos.
> Esquecer o fator 2 (ida e volta) nas medidas por eco.

## Para fixar

- O som é uma onda longitudinal mecânica; \(v\) depende do meio.
- \(\beta = 10\log(I/I_0)\): +10 dB = 10 vezes a intensidade.
- Ultrassom gera imagens por eco e, em alta potência, rompe células por cavitação.
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 2: Gravitação, ondas e termodinâmica. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 17: Ondas II.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 2. 5. ed. São Paulo: Blucher, 2014.",
    "OKUNO, E.; CALDAS, I. L.; CHOW, C. **Física para ciências biológicas e biomédicas**. São Paulo: Harbra, 1986.",
    "MIDDELBERG, A. P. J. Process-scale disruption of microorganisms. **Biotechnology Advances**, v. 13, n. 3, p. 491-551, 1995.",
  ],
},
{
  id: "r90", num: 90,
  area: "Ondulatória, Óptica e Física Moderna",
  disciplina: "Física Básica: Ondas e Óptica",
  titulo: "Óptica geométrica",
  descricao: "Raios de luz, reflexão e espelhos, refração e lei de Snell, reflexão total e fibras ópticas, dispersão, lentes delgadas, a equação dos fabricantes e de Gauss, e instrumentos ópticos como o microscópio.",
  tags: ["Física 4", "óptica geométrica", "raio de luz", "reflexão", "espelho", "refração", "índice de refração", "lei de Snell", "reflexão total", "fibra óptica", "dispersão", "lente convergente", "lente divergente", "equação de Gauss", "aumento", "microscópio", "olho humano"],
  conteudo: String.raw`
## Quando a luz pode ser tratada como raio

Quando os objetos e aberturas são muito maiores que o comprimento de onda da luz (centenas de nanômetros), a difração é desprezível e a luz pode ser descrita por **raios** que viajam em linha reta. Esse é o domínio da **óptica geométrica**, que explica espelhos, lentes, prismas, o olho humano e os instrumentos ópticos. Quando as dimensões se aproximam de \(\lambda\), entra a óptica física (tema 91).

## Reflexão e espelhos

Na reflexão, o raio incidente, o refletido e a normal à superfície estão no mesmo plano, e o **ângulo de reflexão é igual ao de incidência**.

- **Espelho plano:** forma imagem virtual, do mesmo tamanho, à mesma distância atrás do espelho, com inversão esquerda-direita.
- **Espelhos esféricos:** o côncavo concentra a luz no foco (faróis, refletores de lâmpadas, fogões solares); o convexo espalha e amplia o campo de visão (retrovisores, espelhos de segurança). A distância focal é metade do raio de curvatura: \(f = R/2\).

## Refração e a lei de Snell

A luz é mais lenta nos meios materiais. O **índice de refração** compara a velocidade no vácuo com a do meio:

\[ n = \frac{c}{v} \]

Valores típicos: ar, 1,0003; água, 1,33; vidro, cerca de 1,5; óleo de imersão, 1,52; diamante, 2,42. Ao passar obliquamente de um meio para outro, a luz muda de direção segundo a **lei de Snell**:

\[ n_1\,\sin\theta_1 = n_2\,\sin\theta_2 \]

Ao entrar num meio de índice maior, o raio se aproxima da normal. É por isso que um lápis parece quebrado dentro de um copo d'água e as piscinas parecem mais rasas do que são.

## Reflexão total e fibras ópticas

Ao passar de um meio de índice **maior** para um de índice **menor**, o raio se afasta da normal. A partir de um **ângulo crítico**, ele não sai mais, e toda a luz é refletida:

\[ \sin\theta_c = \frac{n_2}{n_1} \]

Para vidro-ar, \(\theta_c \approx 42°\). As **fibras ópticas** guiam a luz por reflexões totais sucessivas, quase sem perdas, ao longo de quilômetros. São usadas em telecomunicações, endoscopia e **sensores ópticos** de pH e oxigênio dissolvido em biorreatores, em que um corante na ponta da fibra muda de fluorescência conforme a grandeza medida.

## Dispersão

O índice de refração varia ligeiramente com o comprimento de onda: no vidro, é maior para o violeta que para o vermelho. Por isso um prisma separa a luz branca em cores (**dispersão**), e o arco-íris se forma nas gotas de chuva. Em instrumentos, a dispersão causa **aberração cromática**, corrigida combinando lentes de vidros diferentes (objetivas acromáticas e apocromáticas).

## Lentes delgadas

<svg viewBox="0 0 740 330" xmlns="http://www.w3.org/2000/svg" role="img"><title>Óptica geometrica</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Refração e formacao de imagem por uma lente</text><rect x="30" y="52" width="280" height="180" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><rect x="30" y="142" width="280" height="90" rx="0" fill="#e4f2fb" stroke="none" stroke-width="0"/><line x1="170" y1="58" x2="170" y2="226" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="4 3"/><line x1="30" y1="142" x2="310" y2="142" stroke="#0083cb" stroke-width="1.6" stroke-linecap="round"/><line x1="96" y1="70" x2="170" y2="142" stroke="#c67600" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-la)"/><line x1="170" y1="142" x2="218" y2="222" stroke="#c67600" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-la)"/><text x="110" y="128" font-size="10.5" text-anchor="middle" fill="#5c5c66">ar</text><text x="110" y="162" font-size="10.5" text-anchor="middle" fill="#0083cb" font-weight="700">água</text><text x="150" y="104" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">i</text><text x="186" y="188" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">r</text><text x="170" y="250" font-size="10.5" text-anchor="middle" fill="#5c5c66">o raio se aproxima da normal</text><rect x="330" y="52" width="390" height="180" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><line x1="345" y1="142" x2="706" y2="142" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="4 3"/><path d="M525,88 C545,110 545,174 525,196 C505,174 505,110 525,88 Z" fill="#0083cb" fill-opacity="0.35" stroke="#0083cb" stroke-width="1.8"/><circle cx="473" cy="142" r="3.4" fill="#8a8a93" stroke="#8a8a93" stroke-width="1.4"/><circle cx="577" cy="142" r="3.4" fill="#8a8a93" stroke="#8a8a93" stroke-width="1.4"/><text x="473" y="160" font-size="10" text-anchor="middle" fill="#5c5c66">F</text><text x="577" y="160" font-size="10" text-anchor="middle" fill="#5c5c66">F</text><line x1="385" y1="142" x2="385" y2="102" stroke="#0a8f5e" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="375" y="96" font-size="10" text-anchor="end" fill="#0a8f5e" font-weight="700">objeto</text><line x1="385" y1="102" x2="525" y2="102" stroke="#f40086" stroke-width="1.6" stroke-linecap="round"/><line x1="525" y1="102" x2="646" y2="176" stroke="#f40086" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-rs)"/><line x1="385" y1="102" x2="525" y2="166" stroke="#a300bc" stroke-width="1.6" stroke-linecap="round"/><line x1="525" y1="166" x2="646" y2="166" stroke="#a300bc" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-rx)"/><line x1="646" y1="142" x2="646" y2="176" stroke="#c67600" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-la)"/><text x="660" y="172" font-size="10" text-anchor="start" fill="#c67600" font-weight="700">imagem real</text><text x="660" y="186" font-size="10" text-anchor="start" fill="#c67600">e invertida</text><text x="525" y="250" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">1/f = 1/p + 1/p'</text><rect x="20" y="264" width="700" height="50" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="284" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">no microscopio</text><text x="370" y="304" font-size="10.4" text-anchor="middle" fill="#5c5c66">A objetiva forma uma imagem real ampliada e a ocular funciona como lupa sobre ela. Mas aumento não e resolucao.</text></svg>
A refração na interface e a construção da imagem por uma lente convergente.

Uma lente **convergente** (mais grossa no centro) concentra raios paralelos no foco; uma **divergente** (mais fina no centro) os espalha. A distância focal depende do material e das curvaturas, pela **equação dos fabricantes de lentes**:

\[ \frac{1}{f} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right) \]

A posição da imagem é dada pela **equação de Gauss** (ou das lentes delgadas), e o aumento, pela razão entre as distâncias:

\[ \frac{1}{f} = \frac{1}{p} + \frac{1}{p'} \qquad\qquad A = \frac{y'}{y} = -\frac{p'}{p} \]

Convenção usual: \(f \gt 0\) para lentes convergentes; \(p' \gt 0\) indica imagem real (do outro lado da lente); \(A \lt 0\) indica imagem invertida. A **vergência** de uma lente, \(V = 1/f\) (com \(f\) em metros), é medida em **dioptrias**, o "grau" dos óculos.

| Objeto diante de uma lente convergente | Imagem |
|---|---|
| Além de \(2f\) | real, invertida, menor (câmeras, olho) |
| Entre \(f\) e \(2f\) | real, invertida, maior (projetores, objetiva do microscópio) |
| Antes de \(f\) | virtual, direita, maior (lupa, ocular) |

## O olho humano

O olho é um sistema convergente: a córnea faz a maior parte da refração e o cristalino ajusta o foco mudando de curvatura (acomodação), formando uma imagem real e invertida na retina. Na **miopia**, a imagem se forma antes da retina, e corrige-se com lentes divergentes; na **hipermetropia**, depois, e corrige-se com lentes convergentes.

## O microscópio composto

A **objetiva**, de distância focal curta, forma uma imagem real, invertida e ampliada do objeto. A **ocular** funciona como lupa sobre essa imagem. O aumento total é o produto dos dois:

\[ A_{total} = A_{objetiva}\times A_{ocular} \]

Uma objetiva de 40× com ocular de 10× dá 400×. Mas aumento não é tudo: a capacidade de **distinguir detalhes** (a resolução) é limitada pela difração e depende da abertura numérica da objetiva (tema 91). Aumento além do que a resolução permite só produz uma imagem maior e borrada (o "aumento vazio").

## Exemplo resolvido

Um objeto está a 4,1 mm de uma objetiva de distância focal 4,0 mm. Onde se forma a imagem, e qual o aumento?

\[ \frac{1}{p'} = \frac{1}{4{,}0} - \frac{1}{4{,}1} \;\Rightarrow\; p' = 164\ \text{mm} \qquad A = -\frac{164}{4{,}1} = -40 \]

Imagem real, invertida, ampliada 40 vezes, a cerca de 16 cm da objetiva, que é o comprimento típico de tubo de microscópios antigos.

> **Atenção, erros comuns:**
> Confundir os sinais na equação de Gauss: adote uma convenção e mantenha.
> Achar que a reflexão total acontece indo do ar para a água: só ocorre do meio mais refringente para o menos.
> Confundir aumento com resolução.

## Para fixar

- Reflexão: ângulos iguais. Refração: \(n_1\sin\theta_1 = n_2\sin\theta_2\), com \(n = c/v\).
- Reflexão total acima de \(\theta_c\), com \(\sin\theta_c = n_2/n_1\).
- Lentes: \(1/f = 1/p + 1/p'\); \(A = -p'/p\); microscópio: aumento da objetiva vezes o da ocular.
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 4: Óptica e física moderna. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 33 e 34.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 4: Ótica, relatividade, física quântica. 2. ed. São Paulo: Blucher, 2014.",
    "HECHT, E. **Óptica**. 2. ed. Lisboa: Fundação Calouste Gulbenkian, 2002.",
  ],
},
{
  id: "r91", num: 91,
  area: "Ondulatória, Óptica e Física Moderna",
  disciplina: "Física Básica: Ondas e Óptica",
  titulo: "Óptica física, polarização e microscopia",
  descricao: "A luz como onda: o experimento de Young, interferência em filmes finos, difração em fendas e redes, o limite de resolução de Abbe, polarização, polarimetria e as técnicas de microscopia de luz e de fluorescência.",
  tags: ["Física 4", "óptica física", "interferência", "experimento de Young", "filmes finos", "difração", "rede de difração", "critério de Rayleigh", "limite de Abbe", "abertura numérica", "resolução", "polarização", "polarimetria", "microscopia de fluorescência", "contraste de fase", "confocal"],
  conteudo: String.raw`
## A luz se comporta como onda

Quando as dimensões envolvidas se aproximam do comprimento de onda, a luz mostra efeitos que só uma onda pode explicar: interferência e difração. A **óptica física** estuda esses efeitos, que definem o limite do que um microscópio consegue enxergar e são a base dos espectrofotômetros.

## O experimento de Young

Em 1801, Thomas Young fez a luz passar por duas fendas estreitas e próximas. Na tela, surgiram faixas claras e escuras alternadas, e não duas linhas: era a interferência (tema 88). Para fendas separadas por \(d\), as franjas claras aparecem nos ângulos em que a diferença de caminho é um número inteiro de comprimentos de onda:

\[ d\,\sin\theta = m\,\lambda \quad\text{(claras)} \qquad\qquad d\,\sin\theta = \left(m + \tfrac12\right)\lambda \quad\text{(escuras)} \]

Para ângulos pequenos, o espaçamento entre franjas numa tela a uma distância \(D\) é \(\Delta y = \lambda D/d\). O experimento permitiu medir o comprimento de onda da luz pela primeira vez.

## Interferência em filmes finos

As cores de bolhas de sabão, manchas de óleo e asas de borboletas vêm da interferência entre a luz refletida nas duas faces de uma película fina. A espessura do filme decide quais cores são reforçadas. **Revestimentos antirreflexo** em lentes de microscópios e óculos usam camadas com espessura de cerca de um quarto do comprimento de onda para que os reflexos se cancelem.

## Difração

**Fenda única** de largura \(a\): forma-se um máximo central largo, com mínimos em \(a\,\sin\theta = m\lambda\) (\(m = 1, 2, \dots\)). Quanto mais estreita a fenda, mais a luz se espalha.

**Rede de difração:** milhares de fendas paralelas por milímetro produzem máximos muito estreitos e nítidos, nas mesmas posições de Young, \(d\sin\theta = m\lambda\). Como o ângulo depende de \(\lambda\), a rede separa as cores com grande precisão. É o elemento central dos **monocromadores** de espectrofotômetros, que selecionam o comprimento de onda usado na medida (tema 93).

**Difração de raios X:** os planos de átomos de um cristal agem como uma rede tridimensional para os raios X, cujo comprimento de onda é comparável às distâncias interatômicas. A **lei de Bragg**, \(2d\sin\theta = n\lambda\), relaciona os ângulos dos feixes difratados com o espaçamento \(d\) entre os planos. A cristalografia de raios X revelou a estrutura da dupla hélice do DNA (a partir das imagens de Rosalind Franklin) e da maioria das estruturas de proteínas conhecidas.

## O limite de resolução

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Limite de resolucao</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">O limite de resolucao: por que o microscopio optico para em 200 nm</text><rect x="36" y="52" width="208" height="150" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><circle cx="117" cy="112" r="26" fill="#0a8f5e" fill-opacity="0.10" stroke="none"/><circle cx="117" cy="112" r="18" fill="#0a8f5e" fill-opacity="0.18" stroke="none"/><circle cx="117" cy="112" r="11" fill="#0a8f5e" fill-opacity="0.34" stroke="none"/><circle cx="117" cy="112" r="5" fill="#0a8f5e" fill-opacity="0.90" stroke="none"/><circle cx="163" cy="112" r="26" fill="#0a8f5e" fill-opacity="0.10" stroke="none"/><circle cx="163" cy="112" r="18" fill="#0a8f5e" fill-opacity="0.18" stroke="none"/><circle cx="163" cy="112" r="11" fill="#0a8f5e" fill-opacity="0.34" stroke="none"/><circle cx="163" cy="112" r="5" fill="#0a8f5e" fill-opacity="0.90" stroke="none"/><path d="M50.0,186.0L51.8,186.0L53.6,186.0L55.4,186.0L57.2,186.0L59.0,186.0L60.8,186.0L62.6,186.0L64.4,186.0L66.2,186.0L68.0,186.0L69.8,186.0L71.6,186.0L73.4,186.0L75.2,186.0L77.0,186.0L78.8,186.0L80.6,186.0L82.4,186.0L84.2,186.0L86.0,186.0L87.8,185.9L89.6,185.8L91.4,185.7L93.2,185.4L95.0,185.0L96.8,184.3L98.6,183.3L100.4,181.9L102.2,180.0L104.0,177.6L105.8,174.7L107.6,171.6L109.4,168.3L111.2,165.2L113.0,162.6L114.8,160.8L116.6,160.0L118.4,160.3L120.2,161.7L122.0,164.0L123.8,166.9L125.6,170.1L127.4,173.4L129.2,176.3L131.0,178.9L132.8,181.0L134.6,182.6L136.4,183.7L138.2,184.3L140.0,184.5L141.8,184.3L143.6,183.7L145.4,182.6L147.2,181.0L149.0,178.9L150.8,176.3L152.6,173.4L154.4,170.1L156.2,166.9L158.0,164.0L159.8,161.7L161.6,160.3L163.4,160.0L165.2,160.8L167.0,162.6L168.8,165.2L170.6,168.3L172.4,171.6L174.2,174.7L176.0,177.6L177.8,180.0L179.6,181.9L181.4,183.3L183.2,184.3L185.0,185.0L186.8,185.4L188.6,185.7L190.4,185.8L192.2,185.9L194.0,186.0L195.8,186.0L197.6,186.0L199.4,186.0L201.2,186.0L203.0,186.0L204.8,186.0L206.6,186.0L208.4,186.0L210.2,186.0L212.0,186.0L213.8,186.0L215.6,186.0L217.4,186.0L219.2,186.0L221.0,186.0L222.8,186.0L224.6,186.0L226.4,186.0L228.2,186.0L230.0,186.0" fill="none" stroke="#0a8f5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="140" y="222" font-size="11.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">bem separados</text><rect x="266" y="52" width="208" height="150" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><circle cx="357" cy="112" r="26" fill="#c67600" fill-opacity="0.10" stroke="none"/><circle cx="357" cy="112" r="18" fill="#c67600" fill-opacity="0.18" stroke="none"/><circle cx="357" cy="112" r="11" fill="#c67600" fill-opacity="0.34" stroke="none"/><circle cx="357" cy="112" r="5" fill="#c67600" fill-opacity="0.90" stroke="none"/><circle cx="383" cy="112" r="26" fill="#c67600" fill-opacity="0.10" stroke="none"/><circle cx="383" cy="112" r="18" fill="#c67600" fill-opacity="0.18" stroke="none"/><circle cx="383" cy="112" r="11" fill="#c67600" fill-opacity="0.34" stroke="none"/><circle cx="383" cy="112" r="5" fill="#c67600" fill-opacity="0.90" stroke="none"/><path d="M280.0,186.0L281.8,186.0L283.6,186.0L285.4,186.0L287.2,186.0L289.0,186.0L290.8,186.0L292.6,186.0L294.4,186.0L296.2,186.0L298.0,186.0L299.8,186.0L301.6,186.0L303.4,186.0L305.2,186.0L307.0,186.0L308.8,186.0L310.6,186.0L312.4,186.0L314.2,186.0L316.0,186.0L317.8,186.0L319.6,186.0L321.4,186.0L323.2,186.0L325.0,186.0L326.8,185.9L328.6,185.9L330.4,185.8L332.2,185.6L334.0,185.2L335.8,184.7L337.6,183.9L339.4,182.7L341.2,181.1L343.0,179.0L344.8,176.4L346.6,173.4L348.4,170.1L350.2,166.9L352.0,163.9L353.8,161.6L355.6,160.2L357.4,159.7L359.2,160.2L361.0,161.6L362.8,163.5L364.6,165.6L366.4,167.4L368.2,168.7L370.0,169.1L371.8,168.7L373.6,167.4L375.4,165.6L377.2,163.5L379.0,161.6L380.8,160.2L382.6,159.7L384.4,160.2L386.2,161.6L388.0,163.9L389.8,166.9L391.6,170.1L393.4,173.4L395.2,176.4L397.0,179.0L398.8,181.1L400.6,182.7L402.4,183.9L404.2,184.7L406.0,185.2L407.8,185.6L409.6,185.8L411.4,185.9L413.2,185.9L415.0,186.0L416.8,186.0L418.6,186.0L420.4,186.0L422.2,186.0L424.0,186.0L425.8,186.0L427.6,186.0L429.4,186.0L431.2,186.0L433.0,186.0L434.8,186.0L436.6,186.0L438.4,186.0L440.2,186.0L442.0,186.0L443.8,186.0L445.6,186.0L447.4,186.0L449.2,186.0L451.0,186.0L452.8,186.0L454.6,186.0L456.4,186.0L458.2,186.0L460.0,186.0" fill="none" stroke="#c67600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="370" y="222" font-size="11.5" text-anchor="middle" fill="#c67600" font-weight="700">no limite</text><rect x="496" y="52" width="208" height="150" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><circle cx="594" cy="112" r="26" fill="#d33a4e" fill-opacity="0.10" stroke="none"/><circle cx="594" cy="112" r="18" fill="#d33a4e" fill-opacity="0.18" stroke="none"/><circle cx="594" cy="112" r="11" fill="#d33a4e" fill-opacity="0.34" stroke="none"/><circle cx="594" cy="112" r="5" fill="#d33a4e" fill-opacity="0.90" stroke="none"/><circle cx="606" cy="112" r="26" fill="#d33a4e" fill-opacity="0.10" stroke="none"/><circle cx="606" cy="112" r="18" fill="#d33a4e" fill-opacity="0.18" stroke="none"/><circle cx="606" cy="112" r="11" fill="#d33a4e" fill-opacity="0.34" stroke="none"/><circle cx="606" cy="112" r="5" fill="#d33a4e" fill-opacity="0.90" stroke="none"/><path d="M510.0,186.0L511.8,186.0L513.6,186.0L515.4,186.0L517.2,186.0L519.0,186.0L520.8,186.0L522.6,186.0L524.4,186.0L526.2,186.0L528.0,186.0L529.8,186.0L531.6,186.0L533.4,186.0L535.2,186.0L537.0,186.0L538.8,186.0L540.6,186.0L542.4,186.0L544.2,186.0L546.0,186.0L547.8,186.0L549.6,186.0L551.4,186.0L553.2,186.0L555.0,186.0L556.8,186.0L558.6,186.0L560.4,186.0L562.2,186.0L564.0,185.9L565.8,185.9L567.6,185.7L569.4,185.5L571.2,185.2L573.0,184.6L574.8,183.7L576.6,182.5L578.4,180.7L580.2,178.4L582.0,175.5L583.8,172.0L585.6,168.1L587.4,164.0L589.2,159.7L591.0,155.7L592.8,152.1L594.6,149.1L596.4,146.9L598.2,145.6L600.0,145.1L601.8,145.6L603.6,146.9L605.4,149.1L607.2,152.1L609.0,155.7L610.8,159.7L612.6,164.0L614.4,168.1L616.2,172.0L618.0,175.5L619.8,178.4L621.6,180.7L623.4,182.5L625.2,183.7L627.0,184.6L628.8,185.2L630.6,185.5L632.4,185.7L634.2,185.9L636.0,185.9L637.8,186.0L639.6,186.0L641.4,186.0L643.2,186.0L645.0,186.0L646.8,186.0L648.6,186.0L650.4,186.0L652.2,186.0L654.0,186.0L655.8,186.0L657.6,186.0L659.4,186.0L661.2,186.0L663.0,186.0L664.8,186.0L666.6,186.0L668.4,186.0L670.2,186.0L672.0,186.0L673.8,186.0L675.6,186.0L677.4,186.0L679.2,186.0L681.0,186.0L682.8,186.0L684.6,186.0L686.4,186.0L688.2,186.0L690.0,186.0" fill="none" stroke="#d33a4e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><text x="600" y="222" font-size="11.5" text-anchor="middle" fill="#d33a4e" font-weight="700">não se distinguem</text><rect x="20" y="236" width="700" height="58" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="258" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">distancia mínima resolvida = comprimento de onda dividido por duas vezes a abertura numérica</text><text x="370" y="278" font-size="10.4" text-anchor="middle" fill="#5c5c66">Com luz verde e objetiva de imersao, cerca de 200 nm: da para ver bactérias, mas não virus. Por isso existe o</text><text x="370" y="292" font-size="10.4" text-anchor="middle" fill="#5c5c66">microscopio eletrônico, e por isso as tecnicas de super-resolucao renderam o Nobel de Química de 2014.</text></svg>
Dois pontos próximos deixam de ser distinguidos quando seus discos de difração se fundem.

Por causa da difração, a imagem de um ponto, formada por uma lente, nunca é um ponto, mas um pequeno disco borrado. Dois pontos muito próximos têm discos sobrepostos e não podem ser distinguidos. Abbe mostrou que a **menor distância resolvível** num microscópio é aproximadamente:

\[ d_{mín} = \frac{\lambda}{2\,AN} \qquad\qquad AN = n\,\sin\alpha \]

em que \(AN\) é a **abertura numérica** da objetiva (\(n\) é o índice do meio entre a lâmina e a objetiva e \(\alpha\), o meio-ângulo do cone de luz captado). Pelo critério de Rayleigh, usa-se \(0{,}61\lambda/AN\), um valor um pouco maior.

**Exemplo:** com luz verde (550 nm) e uma objetiva de imersão em óleo com \(AN = 1{,}4\):

\[ d_{mín} = \frac{550}{2\cdot1{,}4} \approx 200\ \text{nm} \]

O microscópio óptico consegue distinguir bactérias (de cerca de 1 µm), mas não vírus (geralmente 20 a 300 nm) nem os detalhes de organelas pequenas. É por isso que se usa **óleo de imersão**, que aumenta \(n\) e a abertura numérica, e por isso foi preciso inventar o microscópio eletrônico, que usa elétrons com comprimentos de onda milhares de vezes menores (tema 92). As técnicas de **super-resolução** (como STED, PALM e STORM, premiadas com o Nobel de Química de 2014) contornam esse limite usando propriedades das moléculas fluorescentes.

## Polarização

A luz pode ser **polarizada** por absorção seletiva (filtros polaroide), por reflexão (no ângulo de Brewster, \(\tan\theta_B = n_2/n_1\), a luz refletida é totalmente polarizada) ou por espalhamento (a luz do céu é parcialmente polarizada). Através de um polarizador, \(I = I_0\cos^2\theta\) (lei de Malus, tema 87).

**Atividade óptica e polarimetria:** soluções de moléculas quirais giram o plano de polarização da luz (tema 16). O ângulo de rotação é proporcional à concentração e ao caminho óptico:

\[ \alpha = [\alpha]\,c\,l \]

em que \([\alpha]\) é a rotação específica da substância. A sacarose, por exemplo, tem \([\alpha] \approx +66{,}5°\) (dm·g/mL)⁻¹. Os **polarímetros** e **sacarímetros** medem a concentração de açúcar no caldo de cana e acompanham a inversão da sacarose. A polarização também permite distinguir enantiômeros e verificar a pureza óptica de fármacos produzidos por biocatálise (tema 113).

## As principais técnicas de microscopia de luz

| Técnica | Princípio | Usada para |
|---|---|---|
| Campo claro | contraste por absorção; geralmente exige coloração (como a de Gram) | células coradas, tecidos |
| Contraste de fase | converte diferenças de índice de refração em diferenças de brilho, por interferência | células vivas sem coloração, culturas |
| Campo escuro | só a luz espalhada pela amostra chega à objetiva | bactérias finas, como espiroquetas |
| Fluorescência | moléculas absorvem luz de um comprimento de onda e emitem em outro maior (tema 93) | proteínas marcadas, GFP, viabilidade celular |
| Confocal | um orifício elimina a luz fora do plano de foco, gerando "fatias" ópticas | reconstruções 3D de células e tecidos |

> **Atenção, erros comuns:**
> Achar que basta aumentar o aumento para ver estruturas menores.
> Confundir a condição de máximo da fenda dupla com a de mínimo da fenda única (as fórmulas são parecidas, mas os significados são opostos).
> Esquecer que a resolução melhora com comprimentos de onda **menores**.

## Para fixar

- Young: \(d\sin\theta = m\lambda\) para máximos; redes separam as cores com precisão.
- Resolução de Abbe: \(d_{mín} \approx \lambda/(2AN)\), cerca de 200 nm para a luz visível.
- Moléculas quirais giram a luz polarizada: \(\alpha = [\alpha]cl\).
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 4: Óptica e física moderna. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 35 e 36.",
    "HECHT, E. **Óptica**. 2. ed. Lisboa: Fundação Calouste Gulbenkian, 2002.",
    "MURPHY, D. B.; DAVIDSON, M. W. **Fundamentals of light microscopy and electronic imaging**. 2. ed. Hoboken: Wiley-Blackwell, 2012.",
  ],
},
{
  id: "r92", num: 92,
  area: "Ondulatória, Óptica e Física Moderna",
  disciplina: "Física Moderna",
  titulo: "Quantização da energia, efeito fotoelétrico e dualidade onda-partícula",
  descricao: "A crise da física clássica, a radiação de corpo negro e a hipótese de Planck, o efeito fotoelétrico e o fóton, o efeito Compton, as ondas de matéria de de Broglie, o microscópio eletrônico e o princípio da incerteza.",
  tags: ["Física 4", "física moderna", "física quântica", "corpo negro", "Planck", "quantização", "fóton", "efeito fotoelétrico", "função trabalho", "Einstein", "efeito Compton", "de Broglie", "dualidade onda-partícula", "microscópio eletrônico", "princípio da incerteza", "Heisenberg"],
  conteudo: String.raw`
## Quando a física clássica falhou

No fim do século XIX, a mecânica de Newton e o eletromagnetismo de Maxwell (tema 87) pareciam completos. Mas alguns fenômenos envolvendo luz e átomos não se encaixavam: a cor da luz emitida por corpos quentes, a emissão de elétrons por metais iluminados, as linhas dos espectros atômicos. A solução exigiu uma ideia radical: a energia, em certas situações, vem em **pacotes indivisíveis**, os **quanta**.

## Radiação de corpo negro e a hipótese de Planck

Todo corpo quente emite radiação (tema 74), e o pico da emissão se desloca para comprimentos de onda menores à medida que a temperatura sobe (**lei de Wien**):

\[ \lambda_{máx}\,T = 2{,}898\times10^{-3}\ \text{m·K} \]

O Sol (cerca de 5800 K) tem o pico no visível, por volta de 500 nm; o corpo humano (310 K), em cerca de 9,3 µm, no infravermelho, o que permite as câmeras térmicas.

A teoria clássica previa que a intensidade cresceria sem limite para comprimentos de onda curtos (a "catástrofe do ultravioleta"). Em 1900, **Max Planck** só conseguiu reproduzir os dados supondo que a energia trocada entre a matéria e a radiação de frequência \(f\) só poderia ocorrer em múltiplos inteiros de um valor mínimo:

\[ E = h\,f \qquad\qquad h = 6{,}626\times10^{-34}\ \text{J·s} \]

A constante \(h\), a **constante de Planck**, é tão pequena que essa "granulação" da energia passa despercebida no mundo macroscópico, mas domina no mundo atômico.

## O efeito fotoelétrico e o fóton

<svg viewBox="0 0 740 330" xmlns="http://www.w3.org/2000/svg" role="img"><title>Efeito fotoeletrico</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Efeito fotoeletrico: a energia depende da frequência, não da intensidade</text><rect x="60" y="60" width="320" height="180" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="124" y1="60" x2="124" y2="240" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="188" y1="60" x2="188" y2="240" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="252" y1="60" x2="252" y2="240" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="316" y1="60" x2="316" y2="240" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="380" y1="60" x2="380" y2="240" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="226.154" x2="380" y2="226.154" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="170.769" x2="380" y2="170.769" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="115.385" x2="380" y2="115.385" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="60" x2="380" y2="60" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="60" x2="60" y2="240" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><line x1="60" y1="170.769" x2="380" y2="170.769" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="124" y="255" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="188" y="255" font-size="10.5" text-anchor="middle" fill="#8a8a93">4</text><text x="252" y="255" font-size="10.5" text-anchor="middle" fill="#8a8a93">6</text><text x="316" y="255" font-size="10.5" text-anchor="middle" fill="#8a8a93">8</text><text x="380" y="255" font-size="10.5" text-anchor="middle" fill="#8a8a93">10</text><text x="54" y="229.654" font-size="10.5" text-anchor="end" fill="#8a8a93">-2</text><text x="54" y="118.885" font-size="10.5" text-anchor="end" fill="#8a8a93">2</text><text x="54" y="63.5" font-size="10.5" text-anchor="end" fill="#8a8a93">4</text><text x="384" y="244" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">freq.</text><text x="56" y="54" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">energia</text><path d="M178.4,170.9L179.3,170.4L180.2,170.0L181.1,169.5L182.1,169.0L183.0,168.5L183.9,168.0L184.8,167.5L185.7,167.0L186.6,166.5L187.6,166.0L188.5,165.5L189.4,165.0L190.3,164.5L191.2,164.1L192.1,163.6L193.1,163.1L194.0,162.6L194.9,162.1L195.8,161.6L196.7,161.1L197.6,160.6L198.6,160.1L199.5,159.6L200.4,159.1L201.3,158.6L202.2,158.2L203.1,157.7L204.1,157.2L205.0,156.7L205.9,156.2L206.8,155.7L207.7,155.2L208.6,154.7L209.6,154.2L210.5,153.7L211.4,153.2L212.3,152.7L213.2,152.3L214.1,151.8L215.1,151.3L216.0,150.8L216.9,150.3L217.8,149.8L218.7,149.3L219.6,148.8L220.6,148.3L221.5,147.8L222.4,147.3L223.3,146.8L224.2,146.4L225.1,145.9L226.1,145.4L227.0,144.9L227.9,144.4L228.8,143.9L229.7,143.4L230.6,142.9L231.5,142.4L232.5,141.9L233.4,141.4L234.3,140.9L235.2,140.5L236.1,140.0L237.0,139.5L238.0,139.0L238.9,138.5L239.8,138.0L240.7,137.5L241.6,137.0L242.5,136.5L243.5,136.0L244.4,135.5L245.3,135.0L246.2,134.6L247.1,134.1L248.0,133.6L249.0,133.1L249.9,132.6L250.8,132.1L251.7,131.6L252.6,131.1L253.5,130.6L254.5,130.1L255.4,129.6L256.3,129.1L257.2,128.7L258.1,128.2L259.0,127.7L260.0,127.2L260.9,126.7L261.8,126.2L262.7,125.7L263.6,125.2L264.5,124.7L265.5,124.2L266.4,123.7L267.3,123.2L268.2,122.8L269.1,122.3L270.0,121.8L271.0,121.3L271.9,120.8L272.8,120.3L273.7,119.8L274.6,119.3L275.5,118.8L276.5,118.3L277.4,117.8L278.3,117.3L279.2,116.9L280.1,116.4L281.0,115.9L281.9,115.4L282.9,114.9L283.8,114.4L284.7,113.9L285.6,113.4L286.5,112.9L287.4,112.4L288.4,111.9L289.3,111.4L290.2,111.0L291.1,110.5L292.0,110.0L292.9,109.5L293.9,109.0L294.8,108.5L295.7,108.0L296.6,107.5L297.5,107.0L298.4,106.5L299.4,106.0L300.3,105.5L301.2,105.1L302.1,104.6L303.0,104.1L303.9,103.6L304.9,103.1L305.8,102.6L306.7,102.1L307.6,101.6L308.5,101.1L309.4,100.6L310.4,100.1L311.3,99.6L312.2,99.2L313.1,98.7L314.0,98.2L314.9,97.7L315.9,97.2L316.8,96.7L317.7,96.2L318.6,95.7L319.5,95.2L320.4,94.7L321.4,94.2L322.3,93.7L323.2,93.3L324.1,92.8L325.0,92.3L325.9,91.8L326.9,91.3L327.8,90.8L328.7,90.3L329.6,89.8L330.5,89.3L331.4,88.8L332.3,88.3L333.3,87.8L334.2,87.4L335.1,86.9L336.0,86.4L336.9,85.9L337.8,85.4L338.8,84.9L339.7,84.4L340.6,83.9L341.5,83.4L342.4,82.9L343.3,82.4L344.3,81.9L345.2,81.5L346.1,81.0L347.0,80.5L347.9,80.0L348.8,79.5L349.8,79.0L350.7,78.5L351.6,78.0L352.5,77.5L353.4,77.0L354.3,76.5L355.3,76.0L356.2,75.6L357.1,75.1L358.0,74.6L358.9,74.1L359.8,73.6L360.8,73.1L361.7,72.6L362.6,72.1L363.5,71.6L364.4,71.1L365.3,70.6L366.3,70.1L367.2,69.7L368.1,69.2L369.0,68.7L369.9,68.2L370.8,67.7L371.8,67.2L372.7,66.7L373.6,66.2L374.5,65.7L375.4,65.2L376.3,64.7L377.3,64.2L378.2,63.8L379.1,63.3L380.0,62.8" fill="none" stroke="#f40086" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M60.0,234.5L60.5,234.2L61.1,233.9L61.6,233.6L62.2,233.3L62.7,233.0L63.2,232.7L63.8,232.4L64.3,232.2L64.8,231.9L65.4,231.6L65.9,231.3L66.5,231.0L67.0,230.7L67.5,230.4L68.1,230.1L68.6,229.8L69.1,229.6L69.7,229.3L70.2,229.0L70.8,228.7L71.3,228.4L71.8,228.1L72.4,227.8L72.9,227.5L73.5,227.2L74.0,227.0L74.5,226.7L75.1,226.4L75.6,226.1L76.1,225.8L76.7,225.5L77.2,225.2L77.8,224.9L78.3,224.6L78.8,224.4L79.4,224.1L79.9,223.8L80.5,223.5L81.0,223.2L81.5,222.9L82.1,222.6L82.6,222.3L83.1,222.0L83.7,221.8L84.2,221.5L84.8,221.2L85.3,220.9L85.8,220.6L86.4,220.3L86.9,220.0L87.4,219.7L88.0,219.4L88.5,219.2L89.1,218.9L89.6,218.6L90.1,218.3L90.7,218.0L91.2,217.7L91.8,217.4L92.3,217.1L92.8,216.8L93.4,216.6L93.9,216.3L94.4,216.0L95.0,215.7L95.5,215.4L96.1,215.1L96.6,214.8L97.1,214.5L97.7,214.2L98.2,214.0L98.7,213.7L99.3,213.4L99.8,213.1L100.4,212.8L100.9,212.5L101.4,212.2L102.0,211.9L102.5,211.6L103.1,211.4L103.6,211.1L104.1,210.8L104.7,210.5L105.2,210.2L105.7,209.9L106.3,209.6L106.8,209.3L107.4,209.1L107.9,208.8L108.4,208.5L109.0,208.2L109.5,207.9L110.1,207.6L110.6,207.3L111.1,207.0L111.7,206.7L112.2,206.5L112.7,206.2L113.3,205.9L113.8,205.6L114.4,205.3L114.9,205.0L115.4,204.7L116.0,204.4L116.5,204.1L117.0,203.9L117.6,203.6L118.1,203.3L118.7,203.0L119.2,202.7L119.7,202.4L120.3,202.1L120.8,201.8L121.4,201.5L121.9,201.3L122.4,201.0L123.0,200.7L123.5,200.4L124.0,200.1L124.6,199.8L125.1,199.5L125.7,199.2L126.2,198.9L126.7,198.7L127.3,198.4L127.8,198.1L128.3,197.8L128.9,197.5L129.4,197.2L130.0,196.9L130.5,196.6L131.0,196.3L131.6,196.1L132.1,195.8L132.7,195.5L133.2,195.2L133.7,194.9L134.3,194.6L134.8,194.3L135.3,194.0L135.9,193.7L136.4,193.5L137.0,193.2L137.5,192.9L138.0,192.6L138.6,192.3L139.1,192.0L139.7,191.7L140.2,191.4L140.7,191.1L141.3,190.9L141.8,190.6L142.3,190.3L142.9,190.0L143.4,189.7L144.0,189.4L144.5,189.1L145.0,188.8L145.6,188.5L146.1,188.3L146.6,188.0L147.2,187.7L147.7,187.4L148.3,187.1L148.8,186.8L149.3,186.5L149.9,186.2L150.4,186.0L151.0,185.7L151.5,185.4L152.0,185.1L152.6,184.8L153.1,184.5L153.6,184.2L154.2,183.9L154.7,183.6L155.3,183.4L155.8,183.1L156.3,182.8L156.9,182.5L157.4,182.2L157.9,181.9L158.5,181.6L159.0,181.3L159.6,181.0L160.1,180.8L160.6,180.5L161.2,180.2L161.7,179.9L162.3,179.6L162.8,179.3L163.3,179.0L163.9,178.7L164.4,178.4L164.9,178.2L165.5,177.9L166.0,177.6L166.6,177.3L167.1,177.0L167.6,176.7L168.2,176.4L168.7,176.1L169.3,175.8L169.8,175.6L170.3,175.3L170.9,175.0L171.4,174.7L171.9,174.4L172.5,174.1L173.0,173.8L173.6,173.5L174.1,173.2L174.6,173.0L175.2,172.7L175.7,172.4L176.2,172.1L176.8,171.8L177.3,171.5L177.9,171.2L178.4,170.9" fill="none" stroke="#8a8a93" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4"/><circle cx="178.72" cy="170.769" r="4.5" fill="#d33a4e" stroke="#fff" stroke-width="1.6"/><text x="188.72" y="158.769" font-size="10" text-anchor="start" fill="#d33a4e" font-weight="700">frequência</text><text x="188.72" y="169.769" font-size="10" text-anchor="start" fill="#d33a4e" font-weight="700">de corte</text><line x1="76" y1="170.769" x2="76" y2="234.462" stroke="#c67600" stroke-width="1.8" stroke-linecap="round" marker-start="url(#a-la)" marker-end="url(#a-la)"/><text x="88.8" y="223.385" font-size="10" text-anchor="start" fill="#c67600" font-weight="700">função</text><text x="88.8" y="233.354" font-size="10" text-anchor="start" fill="#c67600" font-weight="700">trabalho</text><text x="220" y="276" font-size="10.5" text-anchor="middle" fill="#5c5c66">a inclinação e a constante de Planck</text><rect x="410" y="60" width="310" height="180" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="565" y="84" font-size="12" text-anchor="middle" fill="#333333" font-weight="700">o que a teoria classica errava</text><text x="430" y="112" font-size="11" text-anchor="start" fill="#0a8f5e" font-weight="700">luz mais intensa</text><text x="430" y="128" font-size="10.4" text-anchor="start" fill="#5c5c66">mais elétrons, mesma energia</text><text x="430" y="156" font-size="11" text-anchor="start" fill="#f40086" font-weight="700">luz de frequência maior</text><text x="430" y="172" font-size="10.4" text-anchor="start" fill="#5c5c66">elétrons mais energeticos</text><text x="430" y="200" font-size="11" text-anchor="start" fill="#d33a4e" font-weight="700">abaixo da frequência de corte</text><text x="430" y="216" font-size="10.4" text-anchor="start" fill="#5c5c66">nenhum elétron, por mais intensa</text><rect x="20" y="262" width="700" height="58" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="284" font-size="10.6" text-anchor="middle" fill="#333333">Einstein explicou supondo que a luz vem em pacotes de energia, os fótons, cada um com energia h vezes f.</text><text x="370" y="304" font-size="10.6" text-anchor="middle" fill="#5c5c66">E a base dos detectores de espectrofotometros, leitores de placas, citometros e sequenciadores.</text></svg>
A energia dos elétrons cresce com a frequência, e abaixo da frequência de corte nada acontece.

Quando luz incide num metal, elétrons podem ser arrancados. Os experimentos mostravam fatos que a teoria ondulatória não explicava:

1. Abaixo de uma **frequência de corte**, nenhum elétron sai, por mais intensa que seja a luz.
2. Acima dela, os elétrons saem **imediatamente**, mesmo com luz fraquíssima.
3. A energia cinética máxima dos elétrons depende da **frequência** da luz, e não da intensidade. A intensidade muda apenas a **quantidade** de elétrons.

Em 1905, **Einstein** explicou tudo propondo que a própria luz é formada por pacotes de energia, os **fótons**, cada um com energia \(hf\). Um fóton é absorvido por um único elétron, que gasta parte dessa energia para escapar do metal (a **função trabalho** \(\phi\)) e leva o resto como energia cinética:

\[ K_{máx} = h\,f - \phi \]

Se \(hf \lt \phi\), nenhum fóton tem energia suficiente, e luz mais intensa só significa mais fótons insuficientes. Einstein recebeu o Nobel de 1921 por esse trabalho.

Uma relação prática: \(E\,(\text{eV}) \approx \dfrac{1240}{\lambda\,(\text{nm})}\). Um fóton verde de 500 nm tem cerca de 2,5 eV; um fóton UV de 254 nm, cerca de 4,9 eV, energia suficiente para alterar ligações no DNA (formando dímeros de timina), daí o efeito germicida do UV-C.

**Exemplo:** o potássio tem \(\phi = 2{,}3\) eV. Iluminado com luz de 400 nm (3,1 eV), os elétrons saem com até \(3{,}1 - 2{,}3 = 0{,}8\) eV. Com luz vermelha de 700 nm (1,77 eV), nenhum elétron sai.

**Aplicações:** células fotoelétricas, sensores de câmeras, **fotomultiplicadoras** e fotodiodos, que detectam a luz em espectrofotômetros, leitores de microplacas, citômetros de fluxo e equipamentos de qPCR (tema 57). Painéis solares usam um efeito relacionado, o fotovoltaico.

## O efeito Compton

Em 1923, Compton mostrou que raios X espalhados por elétrons saem com comprimento de onda **maior**, como se fótons colidissem com elétrons e perdessem energia numa colisão de partículas (tema 64). O fóton tem, portanto, também **quantidade de movimento**:

\[ p = \frac{h}{\lambda} \]

## A dualidade onda-partícula

A luz se comporta como onda em interferência e difração (tema 91) e como partícula no efeito fotoelétrico e no Compton. Não é uma coisa ou outra: é um objeto quântico que mostra um ou outro aspecto, conforme o experimento.

Em 1924, **Louis de Broglie** propôs a simetria inversa: se as ondas têm propriedades de partícula, as partículas devem ter propriedades de onda, com comprimento de onda:

\[ \lambda = \frac{h}{p} = \frac{h}{m\,v} \]

Em 1927, experimentos mostraram a difração de elétrons por cristais, confirmando a ideia. Para objetos do dia a dia, \(\lambda\) é tão pequeno que nenhum efeito ondulatório é observável: uma bola de 0,1 kg a 10 m/s tem \(\lambda \approx 6\times10^{-34}\) m.

## O microscópio eletrônico

O limite de resolução de um microscópio é proporcional ao comprimento de onda usado (tema 91). Elétrons acelerados por uma tensão \(V\) têm (desprezando efeitos relativísticos):

\[ \lambda = \frac{h}{\sqrt{2\,m\,e\,V}} \]

Com 100 kV, \(\lambda \approx 0{,}004\) nm (com a correção relativística, cerca de 0,0037 nm), cerca de 100 mil vezes menor que o da luz visível. Na prática, as imperfeições das lentes magnéticas limitam a resolução a frações de nanômetro, o suficiente para ver vírus, ribossomos e a estrutura de membranas. A **criomicroscopia eletrônica** (Nobel de Química de 2017) determina estruturas de proteínas em resolução quase atômica, sem precisar cristalizá-las.

| Microscópio | Como forma a imagem | Exemplos de uso |
|---|---|---|
| Eletrônico de transmissão (MET) | elétrons atravessam cortes ultrafinos | organelas, vírus, estrutura de proteínas (crio-ME) |
| Eletrônico de varredura (MEV) | um feixe varre a superfície e detecta elétrons secundários | superfície de células, biofilmes, materiais |

## O princípio da incerteza

Heisenberg mostrou que é impossível conhecer, ao mesmo tempo e com precisão arbitrária, a posição e a quantidade de movimento de uma partícula:

\[ \Delta x\,\Delta p \ge \frac{\hbar}{2} \qquad\qquad \hbar = \frac{h}{2\pi} \]

Não é uma limitação dos instrumentos, mas uma consequência da natureza ondulatória da matéria. Um elétron confinado num átomo não pode ter energia zero, e por isso não "cai" no núcleo. A descrição completa usa a **equação de Schrödinger**, cuja solução, a **função de onda**, dá as probabilidades de encontrar a partícula em cada região. É a base dos orbitais atômicos (tema 10) e das ligações químicas (tema 11).

> **Atenção, erros comuns:**
> Achar que aumentar a intensidade da luz aumenta a energia dos elétrons arrancados.
> Usar \(E = hf\) com \(f\) em vez de \(\lambda\) sem converter (\(f = c/\lambda\)).
> Pensar que a dualidade significa que a luz "às vezes é onda e às vezes é partícula" de forma aleatória: o aspecto observado depende do experimento.

## Para fixar

- Planck: \(E = hf\). Fóton com \(p = h/\lambda\).
- Efeito fotoelétrico: \(K_{máx} = hf - \phi\); depende da frequência, não da intensidade.
- de Broglie: \(\lambda = h/(mv)\); elétrons de alta energia permitem microscopia muito além do limite da luz.
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 4: Óptica e física moderna. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 38: Fótons e ondas de matéria.",
    "EISBERG, R.; RESNICK, R. **Física quântica**: átomos, moléculas, sólidos, núcleos e partículas. Rio de Janeiro: Campus, 1979.",
    "NUSSENZVEIG, H. M. **Curso de física básica**. v. 4: Ótica, relatividade, física quântica. 2. ed. São Paulo: Blucher, 2014.",
    "EINSTEIN, A. Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt. **Annalen der Physik**, v. 17, p. 132-148, 1905.",
  ],
},
{
  id: "r93", num: 93,
  area: "Ondulatória, Óptica e Física Moderna",
  disciplina: "Física Moderna",
  titulo: "Estrutura atômica, espectroscopia e aplicações tecnológicas",
  descricao: "Os espectros de linhas e o modelo de Bohr, níveis de energia e números quânticos, absorção e emissão de luz, fluorescência, a lei de Beer-Lambert, lasers, LEDs, RMN, radioatividade e radioisótopos na pesquisa.",
  tags: ["Física 4", "física moderna", "espectro atômico", "modelo de Bohr", "níveis de energia", "números quânticos", "absorção", "emissão", "fluorescência", "Beer-Lambert", "espectrofotometria", "laser", "LED", "semicondutor", "RMN", "radioatividade", "meia-vida", "radioisótopo"],
  conteudo: String.raw`
## Os espectros de linhas

Um gás aquecido ou excitado por uma descarga elétrica não emite todas as cores: emite apenas algumas, em **linhas** bem definidas, que formam a "impressão digital" do elemento. Os testes de chama da química (o sódio amarelo, o cobre verde) mostram isso. Para o hidrogênio, as linhas visíveis seguem uma regra simples, descoberta empiricamente (a série de Balmer):

\[ \frac{1}{\lambda} = R_H\left(\frac{1}{2^2} - \frac{1}{n^2}\right), \quad n = 3, 4, 5, \dots \qquad R_H \approx 1{,}097\times10^{7}\ \text{m}^{-1} \]

## O modelo de Bohr

Em 1913, Bohr explicou essas linhas para o hidrogênio com duas hipóteses quânticas:

1. O elétron só pode ocupar certas órbitas, com energias bem definidas (**estados estacionários**), em que não emite radiação.
2. Ao passar de um nível para outro, absorve ou emite um fóton (tema 92) com energia exatamente igual à diferença entre os níveis:

\[ E_n = -\frac{13{,}6\ \text{eV}}{n^2} \qquad\qquad h\,f = E_{inicial} - E_{final} \]

Os níveis são discretos porque o elétron se comporta como uma onda estacionária em torno do núcleo (temas 88 e 92): só cabem números inteiros de comprimentos de onda. A energia para arrancar o elétron do estado fundamental (\(n = 1\)) é 13,6 eV, a energia de ionização do hidrogênio.

**Exemplo:** a transição de \(n = 3\) para \(n = 2\) libera \(13{,}6(1/4 - 1/9) \approx 1{,}89\) eV, ou seja, \(\lambda \approx 1240/1{,}89 \approx 656\) nm: a linha vermelha \(\text{H}_\alpha\).

O modelo de Bohr funciona bem só para o hidrogênio. A mecânica quântica completa descreve os elétrons por **orbitais** caracterizados por quatro números quânticos (principal \(n\), secundário \(\ell\), magnético \(m_\ell\) e de spin \(m_s\)), e o **princípio de exclusão de Pauli** (dois elétrons não podem ter os quatro números iguais) explica a distribuição eletrônica e a tabela periódica (tema 10).

## Absorção, emissão e fluorescência em moléculas

Nas moléculas, além dos níveis eletrônicos, há níveis de **vibração** e de **rotação**. Cada região do espectro sonda um tipo de transição:

| Região | Transição | Técnica |
|---|---|---|
| Ultravioleta e visível | eletrônica | espectrofotometria UV-Vis, colorimetria |
| Infravermelho | vibração das ligações | espectroscopia IV (identifica grupos funcionais) |
| Micro-ondas | rotação | espectroscopia rotacional |
| Radiofrequência (num campo magnético) | orientação do spin nuclear | ressonância magnética nuclear (RMN) |

Na **fluorescência**, uma molécula absorve um fóton, perde um pouco de energia em vibrações e emite outro fóton de **energia menor**, ou seja, de comprimento de onda **maior** (o deslocamento de Stokes). A fluoresceína absorve no azul (cerca de 490 nm) e emite no verde (cerca de 515 nm). Como se mede luz emitida contra um fundo escuro, a fluorescência é muito mais sensível que a absorção. Ela é a base da **GFP** (a proteína verde fluorescente, Nobel de Química de 2008), da citometria de fluxo, dos corantes de DNA em géis, da qPCR (tema 57) e do sequenciamento moderno (tema 61).

<svg viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg" role="img"><title>Níveis de energia e Beer-Lambert</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Níveis de energia, fluorescencia e a lei de Beer-Lambert</text><rect x="30" y="52" width="300" height="200" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><line x1="66" y1="206" x2="234" y2="206" stroke="#333333" stroke-width="2" stroke-linecap="round"/><text x="250" y="210" font-size="10.5" text-anchor="start" fill="#5c5c66">n = 1</text><line x1="66" y1="158" x2="234" y2="158" stroke="#333333" stroke-width="2" stroke-linecap="round"/><text x="250" y="162" font-size="10.5" text-anchor="start" fill="#5c5c66">n = 2</text><line x1="66" y1="124" x2="234" y2="124" stroke="#333333" stroke-width="2" stroke-linecap="round"/><text x="250" y="128" font-size="10.5" text-anchor="start" fill="#5c5c66">n = 3</text><line x1="66" y1="104" x2="234" y2="104" stroke="#333333" stroke-width="2" stroke-linecap="round"/><text x="250" y="108" font-size="10.5" text-anchor="start" fill="#5c5c66">n = 4</text><line x1="104" y1="206" x2="104" y2="160" stroke="#a300bc" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-rx)"/><text x="96" y="186" font-size="10" text-anchor="end" fill="#a300bc" font-weight="700">absorve</text><line x1="170" y1="158" x2="170" y2="204" stroke="#0a8f5e" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="178" y="186" font-size="10" text-anchor="start" fill="#0a8f5e" font-weight="700">emite</text><text x="180" y="74" font-size="10.4" text-anchor="middle" fill="#5c5c66">a diferença entre níveis define</text><text x="180" y="88" font-size="10.4" text-anchor="middle" fill="#5c5c66">o comprimento de onda do fóton</text><text x="180" y="238" font-size="10" text-anchor="middle" fill="#333333" font-weight="600">fluorescencia: emite com menos energia</text><rect x="360" y="52" width="360" height="200" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="540" y="76" font-size="12" text-anchor="middle" fill="#333333" font-weight="700">lei de Beer-Lambert</text><line x1="376" y1="136" x2="398" y2="136" stroke="#c67600" stroke-width="2" stroke-linecap="round" marker-end="url(#a-la)"/><rect x="404" y="108" width="46" height="56" rx="4" fill="#88c9f0" stroke="#0083cb" stroke-width="1.2"/><rect x="404" y="108" width="46" height="56" rx="4" fill="#0083cb" fill-opacity="0.18" stroke="none"/><line x1="456" y1="136" x2="477.32" y2="136" stroke="#c67600" stroke-width="2" stroke-linecap="round" marker-end="url(#a-la)"/><text x="427" y="182" font-size="10" text-anchor="middle" fill="#5c5c66">diluida</text><line x1="482" y1="136" x2="504" y2="136" stroke="#c67600" stroke-width="2" stroke-linecap="round" marker-end="url(#a-la)"/><rect x="510" y="108" width="46" height="56" rx="4" fill="#88c9f0" stroke="#0083cb" stroke-width="1.2"/><rect x="510" y="108" width="46" height="56" rx="4" fill="#0083cb" fill-opacity="0.42" stroke="none"/><line x1="562" y1="136" x2="577.08" y2="136" stroke="#c67600" stroke-width="2" stroke-linecap="round" marker-end="url(#a-la)"/><text x="533" y="182" font-size="10" text-anchor="middle" fill="#5c5c66">média</text><line x1="588" y1="136" x2="610" y2="136" stroke="#c67600" stroke-width="2" stroke-linecap="round" marker-end="url(#a-la)"/><rect x="616" y="108" width="46" height="56" rx="4" fill="#88c9f0" stroke="#0083cb" stroke-width="1.2"/><rect x="616" y="108" width="46" height="56" rx="4" fill="#0083cb" fill-opacity="0.78" stroke="none"/><line x1="668" y1="136" x2="673.72" y2="136" stroke="#c67600" stroke-width="2" stroke-linecap="round" marker-end="url(#a-la)"/><text x="639" y="182" font-size="10" text-anchor="middle" fill="#5c5c66">concentrada</text><text x="540" y="212" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">A = absortividade x caminho x concentração</text><text x="540" y="232" font-size="9.8" text-anchor="middle" fill="#5c5c66">A 260 nm, uma absorbancia de 1 equivale a cerca de 50 ug/mL de DNA</text><rect x="20" y="264" width="700" height="48" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="284" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">Essas duas ideias sustentam boa parte da instrumentacao do laboratório:</text><text x="370" y="302" font-size="10.4" text-anchor="middle" fill="#5c5c66">espectrofotometria, fluorescencia, qPCR, citometria de fluxo, sequenciamento e ressonância magnética.</text></svg>
Transições entre níveis discretos e a absorção proporcional à concentração.

## A lei de Beer-Lambert

Quando a luz atravessa uma solução, a fração absorvida depende da concentração da espécie absorvente e do caminho óptico:

\[ A = \log\frac{I_0}{I} = \varepsilon\,b\,c \]

em que \(A\) é a **absorbância** (adimensional), \(\varepsilon\) é a **absortividade molar** (L/(mol·cm)), \(b\) é o caminho óptico (geralmente 1 cm) e \(c\) é a concentração. A **transmitância** é \(T = I/I_0 = 10^{-A}\). A lei vale bem em soluções diluídas; acima de \(A \approx 1{,}5\) a 2, a relação costuma deixar de ser linear.

**Exemplos práticos:**

- **Ácidos nucleicos a 260 nm:** \(A_{260} = 1\) corresponde a cerca de 50 µg/mL de DNA dupla fita ou 40 µg/mL de RNA. A razão \(A_{260}/A_{280}\) indica contaminação por proteínas (cerca de 1,8 para DNA puro e 2,0 para RNA puro; temas 58 e 59).
- **NADH a 340 nm:** com \(\varepsilon = 6220\) L/(mol·cm), acompanhar a absorbância permite medir a atividade de desidrogenases em tempo real.
- **Densidade óptica (DO₆₀₀):** a turbidez de uma cultura, medida a 600 nm, estima a concentração de células (tema 34). Nesse caso, a luz é espalhada, e não absorvida, mas a relação é linear em culturas diluídas.

**Exemplo:** uma solução de NADH em cubeta de 1 cm tem \(A_{340} = 0{,}311\). Então \(c = 0{,}311/6220 = 5{,}0\times10^{-5}\) mol/L = 50 µM.

## Lasers e LEDs

- **Laser** (amplificação de luz por emissão estimulada de radiação): um fóton com a energia certa estimula um átomo excitado a emitir outro fóton **idêntico**, na mesma direção e fase. Com mais átomos excitados que no estado fundamental (inversão de população) e espelhos que fazem a luz ir e voltar, obtém-se um feixe **monocromático, coerente e muito direcional**. Os lasers são usados em citometria de fluxo, microscopia confocal (tema 91), pinças ópticas, sequenciadores, cirurgias e leitores de código de barras.
- **LEDs e semicondutores:** nos sólidos, os níveis de energia formam **bandas**. Num LED, elétrons passam da banda de condução para a de valência emitindo fótons com energia próxima à da **lacuna** (*band gap*) do material, o que define a cor. São usados em iluminação, em transiluminadores azuis (mais seguros que o UV para visualizar DNA) e na iluminação de **fotobiorreatores** para o cultivo de microalgas, sintonizando os comprimentos de onda absorvidos pelas clorofilas (próximos de 430-450 nm e 640-680 nm, tema 111).

## RMN: o spin nuclear

Núcleos como \(^1\)H e \(^{13}\)C têm spin e se comportam como pequenos ímãs (tema 84). Num campo magnético forte, absorvem radiofrequências específicas, que dependem levemente do ambiente químico de cada átomo. A **RMN** identifica estruturas de moléculas orgânicas, acompanha metabólitos (metabolômica) e determina estruturas de proteínas em solução. A **ressonância magnética de imagem** usa os prótons da água do corpo.

## Radioatividade e radioisótopos

Núcleos instáveis decaem espontaneamente, emitindo partículas alfa (núcleos de hélio), beta (elétrons ou pósitrons) ou radiação gama. O decaimento é um processo de **primeira ordem** (tema 76):

\[ N(t) = N_0\,e^{-\lambda t} \qquad\qquad t_{1/2} = \frac{\ln2}{\lambda} \]

Radioisótopos foram ferramentas decisivas na biologia: o experimento de Hershey e Chase usou \(^{32}\)P e \(^{35}\)S para mostrar que o material genético é o DNA; Meselson e Stahl usaram o isótopo estável \(^{15}\)N para provar a replicação semiconservativa (tema 36); e o \(^{14}\)C revelou as etapas do ciclo de Calvin (tema 111). Hoje, muitas aplicações migraram para marcadores fluorescentes e isótopos estáveis (\(^{13}\)C, \(^{15}\)N), analisados por espectrometria de massas e RMN, que permitem medir fluxos metabólicos sem radiação. A radiação gama de \(^{60}\)Co é usada para esterilizar materiais médicos e plásticos descartáveis de laboratório.

> **Atenção, erros comuns:**
> Usar a lei de Beer-Lambert com absorbâncias muito altas, fora da faixa linear.
> Achar que a fluorescência emite em comprimento de onda menor que o absorvido.
> Confundir energia positiva e negativa nos níveis de Bohr: estados ligados têm energia negativa.

## Para fixar

- Os átomos têm níveis discretos; \(hf = \Delta E\) nas transições.
- Beer-Lambert: \(A = \varepsilon bc\); \(A_{260}\) quantifica ácidos nucleicos.
- Fluorescência, lasers, LEDs, RMN e radioisótopos são aplicações diretas da física quântica.
`,
  referencias: [
    "HALLIDAY, D.; RESNICK, R.; WALKER, J. **Fundamentos de física**. v. 4: Óptica e física moderna. 10. ed. Rio de Janeiro: LTC, 2016. Cap. 39 a 43.",
    "EISBERG, R.; RESNICK, R. **Física quântica**. Rio de Janeiro: Campus, 1979.",
    "SKOOG, D. A.; HOLLER, F. J.; CROUCH, S. R. **Princípios de análise instrumental**. 6. ed. Porto Alegre: Bookman, 2009.",
    "LAKOWICZ, J. R. **Principles of fluorescence spectroscopy**. 3. ed. New York: Springer, 2006.",
  ],
}
);
