/* BIONEXO — Resumos complementares · Rotas Metabólicas (r106–r111) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r106", num: 106,
  area: "Rotas Metabólicas",
  disciplina: "Bioquímica",
  titulo: "Ciclo de Krebs",
  descricao: "O ciclo do ácido cítrico passo a passo: as oito reações e suas enzimas, o balanço de cofatores, a regulação, o caráter anfibólico e as reações anapleróticas, o ciclo do glioxilato e o papel central na produção de ácidos orgânicos.",
  tags: ["Bioquímica", "ciclo de Krebs", "ciclo do ácido cítrico", "acetil-CoA", "citrato sintase", "aconitase", "isocitrato desidrogenase", "alfa-cetoglutarato", "succinil-CoA", "succinato desidrogenase", "fumarase", "malato desidrogenase", "NADH", "FADH2", "GTP", "anfibólico", "anaplerótico", "ciclo do glioxilato", "ácido cítrico", "Aspergillus niger"],
  conteudo: String.raw`
## Onde o ciclo se encaixa

O tema 28 apresentou a visão geral do metabolismo energético. Aqui o **ciclo de Krebs** (ou ciclo do ácido cítrico, ou dos ácidos tricarboxílicos) é visto reação por reação, porque ele é o ponto de encontro de praticamente todo o metabolismo: é para onde converge a degradação de açúcares, lipídios e aminoácidos, e é de onde saem precursores para biossínteses.

**Localização:** na matriz mitocondrial dos eucariontes; no citoplasma dos procariontes. A única exceção entre as enzimas é a succinato desidrogenase, ancorada na membrana interna da mitocôndria, onde também participa da cadeia respiratória (tema 107).

**A entrada:** o piruvato vindo da glicólise é convertido em **acetil-CoA** pelo **complexo piruvato desidrogenase**, uma reação irreversível que libera \(\ce{CO2}\) e reduz \(\ce{NAD+}\). Essa é a ponte entre a glicólise e o ciclo, e um dos pontos de regulação mais importantes do metabolismo: uma vez feita, a molécula não pode voltar a ser glicose.

\[ \ce{piruvato + CoA-SH + NAD+ -> acetil-CoA + CO2 + NADH + H+} \]

<svg viewBox="0 0 770 600" xmlns="http://www.w3.org/2000/svg" role="img"><title>Ciclo de Krebs</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><path d="M433.611,145.109 A172,172 0 0 1 480.587,164.567" fill="none" stroke="#0083cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-az)"/><text x="480.783" y="97.6599" font-size="10.5" text-anchor="start" fill="#5c5c66">aconitase</text><path d="M539.433,223.413 A172,172 0 0 1 558.891,270.389" fill="none" stroke="#0083cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-az)"/><text x="606.34" y="223.217" font-size="10.5" text-anchor="start" fill="#5c5c66">isocitrato desidrogenase</text><text x="606.34" y="237.217" font-size="11.5" text-anchor="start" fill="#0a8f5e" font-weight="700">NADH + CO2</text><path d="M558.891,353.611 A172,172 0 0 1 539.433,400.587" fill="none" stroke="#0083cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-az)"/><text x="606.34" y="400.783" font-size="10.5" text-anchor="start" fill="#5c5c66">alfa-cetoglutarato desidr.</text><text x="606.34" y="414.783" font-size="11.5" text-anchor="start" fill="#0a8f5e" font-weight="700">NADH + CO2</text><path d="M480.587,459.433 A172,172 0 0 1 433.611,478.891" fill="none" stroke="#0083cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-az)"/><text x="480.783" y="526.34" font-size="10.5" text-anchor="start" fill="#5c5c66">succinil-CoA sintetase</text><text x="480.783" y="540.34" font-size="11.5" text-anchor="start" fill="#c67600" font-weight="700">GTP</text><path d="M350.389,478.891 A172,172 0 0 1 303.413,459.433" fill="none" stroke="#0083cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-az)"/><text x="303.217" y="526.34" font-size="10.5" text-anchor="end" fill="#5c5c66">succinato desidrogenase</text><text x="303.217" y="540.34" font-size="11.5" text-anchor="end" fill="#0a8f5e" font-weight="700">FADH2</text><path d="M244.567,400.587 A172,172 0 0 1 225.109,353.611" fill="none" stroke="#0083cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-az)"/><text x="177.66" y="400.783" font-size="10.5" text-anchor="end" fill="#5c5c66">fumarase</text><path d="M225.109,270.389 A172,172 0 0 1 244.567,223.413" fill="none" stroke="#0083cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-az)"/><text x="177.66" y="223.217" font-size="10.5" text-anchor="end" fill="#5c5c66">malato desidrogenase</text><text x="177.66" y="237.217" font-size="11.5" text-anchor="end" fill="#0a8f5e" font-weight="700">NADH</text><path d="M303.413,164.567 A172,172 0 0 1 350.389,145.109" fill="none" stroke="#0083cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-az)"/><text x="303.217" y="97.6599" font-size="10.5" text-anchor="end" fill="#5c5c66">citrato sintase</text><rect x="353" y="125" width="78" height="30" rx="8" fill="#f6e4fa" stroke="#a300bc" stroke-width="1.4"/><text x="392" y="144.5" font-size="12" text-anchor="middle" fill="#a300bc" font-weight="600">citrato</text><rect x="470.622" y="175.378" width="86" height="30" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="513.622" y="194.878" font-size="12" text-anchor="middle" fill="#333333" font-weight="600">isocitrato</text><rect x="493" y="297" width="142" height="30" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="564" y="316.5" font-size="12" text-anchor="middle" fill="#333333" font-weight="600">alfa-cetoglutarato</text><rect x="459.622" y="418.622" width="108" height="30" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="513.622" y="438.122" font-size="12" text-anchor="middle" fill="#333333" font-weight="600">succinil-CoA</text><rect x="347" y="469" width="90" height="30" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="392" y="488.5" font-size="12" text-anchor="middle" fill="#333333" font-weight="600">succinato</text><rect x="228.378" y="418.622" width="84" height="30" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="270.378" y="438.122" font-size="12" text-anchor="middle" fill="#333333" font-weight="600">fumarato</text><rect x="183" y="297" width="74" height="30" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="220" y="316.5" font-size="12" text-anchor="middle" fill="#333333" font-weight="600">malato</text><rect x="215.378" y="175.378" width="110" height="30" rx="8" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.4"/><text x="270.378" y="194.878" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="600">oxaloacetato</text><rect x="26" y="30" width="112" height="32" rx="8" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.4"/><text x="82" y="50.5" font-size="12.5" text-anchor="middle" fill="#0083cb" font-weight="600">piruvato</text><line x1="82" y1="62" x2="82" y2="94" stroke="#0083cb" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-az)"/><text x="89" y="74" font-size="10" text-anchor="start" fill="#5c5c66">piruvato desidrogenase</text><text x="89" y="86" font-size="10.5" text-anchor="start" fill="#0a8f5e" font-weight="700">NADH + CO2</text><rect x="22" y="94" width="120" height="32" rx="8" fill="#0083cb" stroke="#0083cb" stroke-width="1.4"/><text x="82" y="114.5" font-size="13" text-anchor="middle" fill="#fff" font-weight="700">acetil-CoA</text><path d="M142,110 C230,112 268,128 302,150" fill="none" stroke="#0083cb" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-az)"/><text x="214" y="144" font-size="10" text-anchor="middle" fill="#5c5c66">2 carbonos entram</text><circle cx="392" cy="312" r="94" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2" stroke-dasharray="5 5"/><text x="392" y="266" font-size="11.5" text-anchor="middle" fill="#5c5c66" font-weight="700">cada volta rende</text><text x="392" y="292" font-size="16" text-anchor="middle" fill="#0a8f5e" font-weight="700">3 NADH</text><text x="392" y="315" font-size="16" text-anchor="middle" fill="#0a8f5e" font-weight="700">1 FADH2</text><text x="392" y="338" font-size="16" text-anchor="middle" fill="#c67600" font-weight="700">1 GTP</text><text x="392" y="361" font-size="16" text-anchor="middle" fill="#d33a4e" font-weight="700">2 CO2</text><line x1="26" y1="556" x2="744" y2="556" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><text x="26" y="576" font-size="11.5" text-anchor="start" fill="#5c5c66">Os elétrons do NADH e do FADH2 seguem para a cadeia respiratoria (tema 107),</text><text x="26" y="591" font-size="11.5" text-anchor="start" fill="#5c5c66">onde viram a maior parte do ATP. O oxaloacetato e regenerado e recomeca o ciclo.</text></svg>
Uma volta completa do ciclo: as caixas são os intermediários e os textos externos, as enzimas de cada etapa.

## As oito reações

| # | Reação | Enzima | Produz |
|---|---|---|---|
| 1 | acetil-CoA + oxaloacetato + \(\ce{H2O}\) → **citrato** | citrato sintase | libera CoA; **irreversível** |
| 2 | citrato → isocitrato | aconitase | isomerização, via cis-aconitato |
| 3 | isocitrato → **α-cetoglutarato** | isocitrato desidrogenase | \(\ce{CO2}\) + **NADH**; **irreversível** |
| 4 | α-cetoglutarato → **succinil-CoA** | complexo α-cetoglutarato desidrogenase | \(\ce{CO2}\) + **NADH**; **irreversível** |
| 5 | succinil-CoA → succinato | succinil-CoA sintetase | **GTP** (ou ATP): fosforilação em nível de substrato |
| 6 | succinato → fumarato | succinato desidrogenase (complexo II) | **\(\ce{FADH2}\)** |
| 7 | fumarato + \(\ce{H2O}\) → malato | fumarase | hidratação |
| 8 | malato → **oxaloacetato** | malato desidrogenase | **NADH**; regenera o aceptor |

O oxaloacetato regenerado na etapa 8 recebe o próximo acetil-CoA: é um **ciclo**, e por isso o oxaloacetato funciona como catalisador, não como reagente consumido.

## Balanço por volta e por glicose

**Por acetil-CoA (uma volta):**

\[ \ce{acetil-CoA + 3NAD+ + FAD + GDP + Pi + 2H2O -> 2CO2 + 3NADH + FADH2 + GTP + CoA-SH} \]

**Por glicose** (duas voltas, mais a descarboxilação do piruvato):

| Etapa | NADH | \(\ce{FADH2}\) | ATP/GTP | \(\ce{CO2}\) |
|---|---|---|---|---|
| Glicólise | 2 | 0 | 2 | 0 |
| Piruvato → acetil-CoA (×2) | 2 | 0 | 0 | 2 |
| Ciclo de Krebs (×2) | 6 | 2 | 2 | 4 |
| **Total** | **10** | **2** | **4** | **6** |

Repare que o ciclo em si produz pouquíssimo ATP diretamente. Seu papel verdadeiro é **colher elétrons** na forma de NADH e \(\ce{FADH2}\), que serão convertidos em ATP na cadeia respiratória (tema 107). Com os rendimentos atuais (cerca de 2,5 ATP por NADH e 1,5 por \(\ce{FADH2}\)), o total chega a cerca de 30 a 32 ATP por glicose.

Observe também que os dois carbonos que entram como acetil-CoA não são os mesmos que saem como \(\ce{CO2}\) na mesma volta: os liberados vêm do oxaloacetato. Experimentos com carbono marcado mostraram isso.

## Regulação

O ciclo é controlado pela **carga energética** da célula e pelo acúmulo de produtos:

| Enzima | Ativada por | Inibida por |
|---|---|---|
| Piruvato desidrogenase | AMP, \(\ce{NAD+}\), CoA; desfosforilação | ATP, NADH, acetil-CoA; fosforilação |
| Citrato sintase | ADP | ATP, NADH, succinil-CoA, citrato |
| Isocitrato desidrogenase | ADP, \(\ce{Ca^{2+}}\) | ATP, NADH |
| α-cetoglutarato desidrogenase | \(\ce{Ca^{2+}}\) | NADH, succinil-CoA, ATP |

O padrão é claro: **muito ATP e NADH desligam o ciclo**; ADP e AMP o ligam. A disponibilidade de oxigênio também o controla indiretamente: sem \(\ce{O2}\), a cadeia respiratória para, o NADH se acumula e o ciclo é bloqueado, obrigando a célula a fermentar.

## Um ciclo anfibólico

<svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg" role="img"><title>O ciclo de Krebs e anfibólico</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><circle cx="372" cy="150" r="74" fill="#fff" stroke="#0083cb" stroke-width="2.2"/><path d="M414.445,89.3827 A74,74 0 0 1 439.067,181.274" fill="none" stroke="#0083cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-az)"/><path d="M329.555,210.617 A74,74 0 0 1 304.933,118.726" fill="none" stroke="#0083cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-az)"/><text x="372" y="144" font-size="13" text-anchor="middle" fill="#0083cb" font-weight="700">ciclo de</text><text x="372" y="162" font-size="13" text-anchor="middle" fill="#0083cb" font-weight="700">Krebs</text><rect x="18" y="28" width="124" height="30" rx="8" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.4"/><text x="80" y="47.5" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="600">carboidratos</text><line x1="146" y1="43" x2="180" y2="166" stroke="#0a8f5e" stroke-width="1.5" stroke-linecap="round" marker-end="url(#a-ve)"/><rect x="18" y="70" width="124" height="30" rx="8" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.4"/><text x="80" y="89.5" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="600">lipídios</text><line x1="146" y1="85" x2="180" y2="166" stroke="#0a8f5e" stroke-width="1.5" stroke-linecap="round" marker-end="url(#a-ve)"/><rect x="18" y="112" width="124" height="30" rx="8" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.4"/><text x="80" y="131.5" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="600">aminoácidos</text><line x1="146" y1="127" x2="180" y2="166" stroke="#0a8f5e" stroke-width="1.5" stroke-linecap="round" marker-end="url(#a-ve)"/><rect x="150" y="176" width="118" height="32" rx="8" fill="#0a8f5e" stroke="#0a8f5e" stroke-width="1.4"/><text x="209" y="196.5" font-size="12.5" text-anchor="middle" fill="#fff" font-weight="700">acetil-CoA</text><line x1="268" y1="184" x2="312" y2="158" stroke="#0a8f5e" stroke-width="1.9" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="80" y="170" font-size="11.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">catabolismo (degradar)</text><line x1="450" y1="150" x2="514" y2="35" stroke="#a300bc" stroke-width="1.5" stroke-linecap="round" marker-end="url(#a-rx)"/><rect x="518" y="18" width="222" height="34" rx="8" fill="#f6e4fa" stroke="#a300bc" stroke-width="1.4"/><text x="629" y="32.5" font-size="11" text-anchor="middle" fill="#a300bc" font-weight="600">alfa-cetoglutarato</text><text x="629" y="46.5" font-size="11" text-anchor="middle" fill="#a300bc" font-weight="600">glutamato, prolina</text><line x1="450" y1="150" x2="514" y2="97" stroke="#a300bc" stroke-width="1.5" stroke-linecap="round" marker-end="url(#a-rx)"/><rect x="518" y="80" width="222" height="34" rx="8" fill="#f6e4fa" stroke="#a300bc" stroke-width="1.4"/><text x="629" y="94.5" font-size="11" text-anchor="middle" fill="#a300bc" font-weight="600">succinil-CoA</text><text x="629" y="108.5" font-size="11" text-anchor="middle" fill="#a300bc" font-weight="600">heme e clorofila</text><line x1="450" y1="150" x2="514" y2="159" stroke="#a300bc" stroke-width="1.5" stroke-linecap="round" marker-end="url(#a-rx)"/><rect x="518" y="142" width="222" height="34" rx="8" fill="#f6e4fa" stroke="#a300bc" stroke-width="1.4"/><text x="629" y="156.5" font-size="11" text-anchor="middle" fill="#a300bc" font-weight="600">oxaloacetato</text><text x="629" y="170.5" font-size="11" text-anchor="middle" fill="#a300bc" font-weight="600">aspartato, glicose</text><line x1="450" y1="150" x2="514" y2="221" stroke="#a300bc" stroke-width="1.5" stroke-linecap="round" marker-end="url(#a-rx)"/><rect x="518" y="204" width="222" height="34" rx="8" fill="#f6e4fa" stroke="#a300bc" stroke-width="1.4"/><text x="629" y="218.5" font-size="11" text-anchor="middle" fill="#a300bc" font-weight="600">citrato</text><text x="629" y="232.5" font-size="11" text-anchor="middle" fill="#a300bc" font-weight="600">ácidos graxos</text><text x="629" y="256" font-size="11.5" text-anchor="middle" fill="#a300bc" font-weight="700">anabolismo (construir)</text><rect x="150" y="254" width="150" height="30" rx="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.4"/><text x="225" y="273.5" font-size="12" text-anchor="middle" fill="#c67600" font-weight="600">piruvato + CO2</text><path d="M300,268 C350,268 372,240 374,228" fill="none" stroke="#c67600" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 4" marker-end="url(#a-la)"/><text x="150" y="302" font-size="11" text-anchor="start" fill="#c67600" font-weight="600">reação anaplerótica: repõe o oxaloacetato</text><text x="150" y="316" font-size="11" text-anchor="start" fill="#5c5c66">que foi retirado para biossínteses</text></svg>
O ciclo recebe carbono do catabolismo e cede intermediários para as biossínteses, o que exige reposição.

O ciclo é **anfibólico**: serve ao catabolismo (degrada) e ao anabolismo (fornece precursores). Vários intermediários são retirados para biossínteses:

| Intermediário | Dá origem a |
|---|---|
| Citrato | ácidos graxos e esteróis (exportado para o citosol) |
| α-cetoglutarato | glutamato, glutamina, prolina, arginina; porta de entrada do nitrogênio |
| Succinil-CoA | porfirinas (heme, clorofila) |
| Oxaloacetato | aspartato, asparagina, pirimidinas; gliconeogênese |

## Reações anapleróticas

Se intermediários são retirados, o oxaloacetato pode faltar e o ciclo "esvazia". As reações de reposição são as **anapleróticas** (do grego, "encher de novo"). A principal, em animais, é:

\[ \ce{piruvato + CO2 + ATP -> oxaloacetato + ADP + Pi} \]

catalisada pela **piruvato carboxilase**, ativada alostericamente pelo acetil-CoA: quando sobra acetil-CoA, a célula produz mais oxaloacetato para processá-lo. Em plantas e muitos microrganismos, a **PEP carboxilase** faz papel semelhante, a partir do fosfoenolpiruvato.

## O ciclo do glioxilato

Plantas, fungos e muitas bactérias têm uma variante que permite **converter gordura em açúcar**, algo que os animais não conseguem. O ciclo do glioxilato "pula" as duas etapas de descarboxilação, usando duas enzimas exclusivas:

- **isocitrato liase:** isocitrato → succinato + glioxilato;
- **malato sintase:** glioxilato + acetil-CoA → malato.

Sem perder carbono como \(\ce{CO2}\), o succinato produzido alimenta a gliconeogênese. É assim que sementes oleaginosas (mamona, girassol, soja) transformam suas reservas de óleo em sacarose para alimentar a plântula antes de ela fotossintetizar, em organelas especializadas chamadas **glioxissomos**. Microrganismos usam a mesma rota para crescer em acetato ou em alcanos como única fonte de carbono.

## Na prática: produção industrial de ácidos orgânicos

Intermediários do ciclo são produtos de grande valor, obtidos por fermentação ao se **desequilibrar propositalmente** a rota:

- **Ácido cítrico:** produzido por *Aspergillus niger*, é o maior caso de sucesso, com produção mundial da ordem de milhões de toneladas por ano, usado em alimentos, bebidas, farmacêutica e limpeza. O segredo do processo é a limitação de **manganês** no meio, que altera a morfologia do fungo e a atividade enzimática, somada ao pH muito baixo (abaixo de 2) e ao excesso de açúcar, condições que bloqueiam parcialmente a aconitase e fazem o citrato se acumular e ser excretado.
- **Ácido succínico:** plataforma química renovável, produzido por bactérias como *Actinobacillus succinogenes* e por leveduras modificadas, com a vantagem adicional de **fixar \(\ce{CO2}\)** na rota.
- **Ácido itacônico** (*Aspergillus terreus*), **ácido fumárico** (*Rhizopus*) e **ácido málico** também são obtidos por fermentação.
- **Glutamato:** *Corynebacterium glutamicum* exporta glutamato em grandes quantidades quando a membrana é alterada por limitação de biotina ou por surfactantes; é a base da produção de glutamato monossódico, um dos maiores processos fermentativos do mundo.

> **Atenção, erros comuns:**
> Dizer que o ciclo "produz ATP": ele produz principalmente NADH e \(\ce{FADH2}\), e apenas um GTP por volta.
> Esquecer que o ciclo só funciona bem com oxigênio disponível, embora não o use diretamente.
> Achar que o oxaloacetato é consumido: ele é regenerado a cada volta.

## Para fixar

- Por acetil-CoA: 3 NADH, 1 \(\ce{FADH2}\), 1 GTP e 2 \(\ce{CO2}\).
- É anfibólico: fornece precursores e exige reações anapleróticas para repor intermediários.
- O ciclo do glioxilato converte lipídios em açúcares em plantas e microrganismos; o desequilíbrio proposital do ciclo produz ácido cítrico industrialmente.
`,
  referencias: [
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019. Cap. 16: O ciclo do ácido cítrico.",
    "BERG, J. M.; TYMOCZKO, J. L.; GATTO JR., G. J.; STRYER, L. **Bioquímica**. 8. ed. Rio de Janeiro: Guanabara Koogan, 2017.",
    "KREBS, H. A.; JOHNSON, W. A. The role of citric acid in intermediate metabolism in animal tissues. **Enzymologia**, v. 4, p. 148-156, 1937.",
    "SCHMIDELL, W. et al. (coord.). **Biotecnologia industrial**. v. 3: Processos fermentativos e enzimáticos. São Paulo: Blucher, 2001.",
  ],
},
{
  id: "r107", num: 107,
  area: "Rotas Metabólicas",
  disciplina: "Bioquímica",
  titulo: "Cadeia respiratória e fosforilação oxidativa",
  descricao: "Os quatro complexos da cadeia transportadora de elétrons, a força próton-motriz, a teoria quimiosmótica, a ATP-sintase, o rendimento real por glicose, as lançadeiras, desacopladores e inibidores.",
  tags: ["Bioquímica", "cadeia respiratória", "fosforilação oxidativa", "complexo I", "complexo II", "complexo III", "complexo IV", "ubiquinona", "citocromo c", "citocromo c oxidase", "força próton-motriz", "teoria quimiosmótica", "Mitchell", "ATP-sintase", "lançadeira malato-aspartato", "glicerol-fosfato", "desacoplador", "UCP1", "cianeto", "radicais livres"],
  conteudo: String.raw`
## Fechando o balanço energético

A glicólise e o ciclo de Krebs (tema 106) produziram pouco ATP diretamente, mas muito **NADH** e **\(\ce{FADH2}\)**. A **fosforilação oxidativa** converte os elétrons desses carregadores em ATP, e responde por cerca de 90% do ATP produzido na respiração aeróbia.

O princípio é o do tema 78: elétrons fluem espontaneamente de pares redox com potencial mais negativo para os mais positivos. Do \(\ce{NAD+}\)/NADH (−0,32 V) ao \(\ce{O2}\)/\(\ce{H2O}\) (+0,82 V), a queda é de 1,14 V, equivalente a cerca de 220 kJ/mol. Se essa energia fosse liberada de uma vez, seria desperdiçada como calor; por isso a célula a divide em **várias etapas**, cada uma liberando uma parcela aproveitável.

**Localização:** membrana interna da mitocôndria (muito dobrada em cristas, para aumentar a área) ou membrana plasmática, nos procariontes.

<svg viewBox="0 0 770 420" xmlns="http://www.w3.org/2000/svg" role="img"><title>Cadeia respiratoria e fosforilacao oxidativa</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">O gradiente de prótons e a moeda intermediária</text><text x="20" y="46" font-size="11.5" text-anchor="start" fill="#5c5c66">Os elétrons descem de potencial pelos complexos, e a energia liberada bombeia H+ para fora.</text><text x="20" y="62" font-size="11.5" text-anchor="start" fill="#5c5c66">O retorno dos H+ pela ATP-sintase e o que sintetiza o ATP (teoria quimiosmótica).</text><rect x="20" y="168" width="730" height="92" rx="6" fill="#fdf6e3" stroke="#e8d9a8" stroke-width="1.2"/><text x="20" y="156" font-size="10.5" text-anchor="start" fill="#5c5c66">espaço intermembranas</text><text x="750" y="278" font-size="10.5" text-anchor="end" fill="#5c5c66">matriz mitocondrial</text><rect x="54" y="168" width="116" height="92" rx="7" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.6"/><text x="112" y="190" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">complexo I</text><text x="112" y="206" font-size="10" text-anchor="middle" fill="#5c5c66">NADH</text><text x="112" y="218" font-size="10" text-anchor="middle" fill="#5c5c66">desidrogenase</text><line x1="112" y1="172" x2="112" y2="132" stroke="#f40086" stroke-width="2" stroke-linecap="round" marker-end="url(#a-rs)"/><text x="112" y="126" font-size="11.5" text-anchor="middle" fill="#f40086" font-weight="700">4 H+</text><rect x="206" y="204" width="96" height="56" rx="7" fill="#eceef3" stroke="#8a8a93" stroke-width="1.6"/><text x="254" y="226" font-size="12" text-anchor="middle" fill="#8a8a93" font-weight="700">complexo II</text><text x="254" y="242" font-size="10" text-anchor="middle" fill="#5c5c66">succinato</text><text x="254" y="254" font-size="10" text-anchor="middle" fill="#5c5c66">desidrogenase</text><rect x="330" y="168" width="116" height="92" rx="7" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.6"/><text x="388" y="190" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">complexo III</text><text x="388" y="206" font-size="10" text-anchor="middle" fill="#5c5c66">citocromo</text><text x="388" y="218" font-size="10" text-anchor="middle" fill="#5c5c66">bc1</text><line x1="388" y1="172" x2="388" y2="132" stroke="#f40086" stroke-width="2" stroke-linecap="round" marker-end="url(#a-rs)"/><text x="388" y="126" font-size="11.5" text-anchor="middle" fill="#f40086" font-weight="700">4 H+</text><rect x="486" y="168" width="120" height="92" rx="7" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.6"/><text x="546" y="190" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">complexo IV</text><text x="546" y="206" font-size="10" text-anchor="middle" fill="#5c5c66">citocromo c</text><text x="546" y="218" font-size="10" text-anchor="middle" fill="#5c5c66">oxidase</text><line x1="546" y1="172" x2="546" y2="132" stroke="#f40086" stroke-width="2" stroke-linecap="round" marker-end="url(#a-rs)"/><text x="546" y="126" font-size="11.5" text-anchor="middle" fill="#f40086" font-weight="700">2 H+</text><rect x="628" y="168" width="106" height="92" rx="7" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.6"/><text x="681" y="202" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="700">ATP-sintase</text><text x="681" y="218" font-size="10" text-anchor="middle" fill="#5c5c66">(complexo V)</text><line x1="681" y1="132" x2="681" y2="172" stroke="#f40086" stroke-width="2.2" stroke-linecap="round" marker-end="url(#a-rs)"/><text x="681" y="126" font-size="11.5" text-anchor="middle" fill="#f40086" font-weight="700">H+ volta</text><text x="681" y="280" font-size="10.5" text-anchor="middle" fill="#5c5c66">ADP + Pi</text><line x1="681" y1="288" x2="681" y2="312" stroke="#0a8f5e" stroke-width="2" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="681" y="332" font-size="17" text-anchor="middle" fill="#0a8f5e" font-weight="700">ATP</text><text x="60" y="310" font-size="13" text-anchor="middle" fill="#0a8f5e" font-weight="700">NADH</text><line x1="78" y1="304" x2="104" y2="264" stroke="#0a8f5e" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="196" y="310" font-size="13" text-anchor="middle" fill="#0a8f5e" font-weight="700">FADH2</text><line x1="216" y1="304" x2="240" y2="264" stroke="#0a8f5e" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-ve)"/><circle cx="176" cy="232" r="16" fill="#fff" stroke="#c67600" stroke-width="1.6"/><text x="176" y="236" font-size="12.5" text-anchor="middle" fill="#c67600" font-weight="700">Q</text><circle cx="452" cy="166" r="17" fill="#fff" stroke="#c67600" stroke-width="1.6"/><text x="452" y="170" font-size="9.6" text-anchor="middle" fill="#c67600" font-weight="700">cit c</text><line x1="170" y1="256" x2="176" y2="250" stroke="#0a8f5e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-ve)"/><line x1="192" y1="226" x2="326" y2="202" stroke="#0a8f5e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-ve)"/><line x1="442" y1="192" x2="448" y2="182" stroke="#0a8f5e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-ve)"/><line x1="468" y1="170" x2="516" y2="184" stroke="#0a8f5e" stroke-width="1.4" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="546" y="310" font-size="11.5" text-anchor="middle" fill="#0083cb" font-weight="700">1/2 O2 + 2 H+</text><line x1="546" y1="300" x2="546" y2="264" stroke="#0083cb" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-az)"/><text x="546" y="328" font-size="11" text-anchor="middle" fill="#0083cb">vira H2O</text><line x1="20" y1="378" x2="750" y2="378" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><text x="20" y="396" font-size="11" text-anchor="start" fill="#0a8f5e" font-weight="600">verde: caminho dos elétrons</text><text x="230" y="396" font-size="11" text-anchor="start" fill="#f40086" font-weight="600">rosa: movimento dos prótons</text><text x="20" y="412" font-size="11" text-anchor="start" fill="#5c5c66">O complexo II não bombeia prótons: por isso o FADH2 rende menos ATP que o NADH.</text></svg>
Os complexos na membrana interna da mitocôndria, o caminho dos elétrons e o bombeamento de prótons.

## Os quatro complexos

| Complexo | Nome | Recebe elétrons de | Entrega a | Bombeia \(\ce{H+}\)? |
|---|---|---|---|---|
| **I** | NADH desidrogenase | NADH | ubiquinona (Q) | sim, 4 \(\ce{H+}\) |
| **II** | succinato desidrogenase | \(\ce{FADH2}\) (do succinato) | ubiquinona | **não** |
| **III** | citocromo bc₁ | ubiquinol (\(\ce{QH2}\)) | citocromo c | sim, 4 \(\ce{H+}\) |
| **IV** | citocromo c oxidase | citocromo c | **\(\ce{O2}\)** | sim, 2 \(\ce{H+}\) |

Dois transportadores móveis conectam os complexos: a **ubiquinona** (coenzima Q), lipossolúvel, que se desloca dentro da membrana, e o **citocromo c**, uma pequena proteína solúvel que corre pela face externa da membrana interna.

O **complexo IV** faz a reação final, reduzindo o oxigênio a água:

\[ \ce{4 cit\,c_{red} + O2 + 8H+_{matriz} -> 4 cit\,c_{ox} + 2H2O + 4H+_{intermembrana}} \]

É por isso que o oxigênio é indispensável: ele é o **aceptor final de elétrons**. Sem ele, toda a cadeia para, o NADH se acumula e o ciclo de Krebs é bloqueado.

Note que o \(\ce{FADH2}\) entra pelo complexo II, **pulando** o complexo I. Por isso rende menos ATP que o NADH.

## A teoria quimiosmótica

Durante décadas procurou-se um "intermediário químico rico em energia" que ligasse o transporte de elétrons à síntese de ATP. Em 1961, **Peter Mitchell** propôs algo diferente, que lhe valeu o Nobel de 1978: a energia é armazenada num **gradiente de prótons** através da membrana.

O bombeamento de \(\ce{H+}\) da matriz para o espaço intermembranas cria a **força próton-motriz**, com dois componentes:

\[ \Delta p = \Delta\psi - \frac{2{,}3\,R\,T}{F}\,\Delta\text{pH} \]

um **gradiente elétrico** (\(\Delta\psi\), cerca de 150 a 180 mV, com a matriz negativa) e um **gradiente de pH** (a matriz fica cerca de 0,75 unidade mais alcalina). A membrana interna precisa ser **impermeável a prótons** para que o gradiente se mantenha.

## A ATP-sintase: um motor rotatório

A **ATP-sintase** (complexo V) é um motor molecular com duas partes:

- **F₀**, na membrana, por onde os prótons voltam à matriz, fazendo girar um anel de subunidades c;
- **F₁**, na matriz, onde a rotação do eixo central deforma sequencialmente três sítios catalíticos, que passam por estados de ligação, síntese e liberação de ATP.

Esse **mecanismo de mudança de ligação**, proposto por Paul Boyer e confirmado estruturalmente por John Walker (Nobel de Química de 1997), foi visualizado diretamente em experimentos que filmaram a rotação de um filamento ligado ao eixo. Estima-se que a passagem de cerca de 3 a 4 prótons produza 1 ATP.

## Rendimento real

<svg viewBox="0 0 720 250" xmlns="http://www.w3.org/2000/svg" role="img"><title>Rendimento de ATP</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="24" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Quanto ATP sai de uma glicose</text><text x="238" y="92" font-size="12" text-anchor="end" fill="#333333" font-weight="600">fermentação (sem O2)</text><rect x="250" y="70" width="400" height="32" rx="6" fill="#f2f3f7" stroke="none" stroke-width="0"/><rect x="250" y="70" width="25" height="32" rx="6" fill="#d33a4e" stroke="none" stroke-width="0"/><text x="285" y="92" font-size="14" text-anchor="start" fill="#d33a4e" font-weight="700">2 ATP</text><text x="238" y="162" font-size="12" text-anchor="end" fill="#333333" font-weight="600">respiração aeróbia (com O2)</text><rect x="250" y="140" width="400" height="32" rx="6" fill="#f2f3f7" stroke="none" stroke-width="0"/><rect x="250" y="140" width="387.5" height="32" rx="6" fill="#0a8f5e" stroke="none" stroke-width="0"/><text x="647.5" y="162" font-size="14" text-anchor="start" fill="#0a8f5e" font-weight="700">31 ATP</text><text x="20" y="200" font-size="11.5" text-anchor="start" fill="#5c5c66">A respiração aproveita cerca de 15 vezes mais energia da mesma molécula.</text><text x="20" y="218" font-size="11.5" text-anchor="start" fill="#5c5c66">Por isso cultivos para biomassa são bem aerados, e os de etanol limitam o oxigênio.</text></svg>
O ganho de usar o oxigênio como aceptor final de elétrons.

Os valores "clássicos" de 3 ATP por NADH e 2 por \(\ce{FADH2}\) são aproximações antigas. Os valores aceitos hoje consideram a estequiometria de prótons e o custo de transportar ATP, ADP e fosfato através da membrana:

\[ \text{NADH} \approx 2{,}5\ \text{ATP} \qquad\qquad \ce{FADH2} \approx 1{,}5\ \text{ATP} \]

| Fonte | Quantidade | ATP |
|---|---|---|
| Glicólise (ATP líquido) | 2 | 2 |
| Glicólise (NADH citosólico) | 2 | 3 ou 5, conforme a lançadeira |
| Piruvato → acetil-CoA (NADH) | 2 | 5 |
| Ciclo de Krebs (GTP) | 2 | 2 |
| Ciclo de Krebs (NADH) | 6 | 15 |
| Ciclo de Krebs (\(\ce{FADH2}\)) | 2 | 3 |
| **Total** | | **30 a 32 ATP** |

Comparado com a fermentação, que rende 2 ATP por glicose, a respiração aeróbia é cerca de 15 vezes mais eficiente. Essa diferença explica o **efeito Pasteur** (as células consomem muito menos açúcar na presença de oxigênio) e é central nos bioprocessos: para produzir **biomassa** ou proteínas, mantém-se a cultura bem aerada; para produzir **etanol**, limita-se o oxigênio.

## As lançadeiras

O NADH produzido na glicólise está no **citosol**, e a membrana interna da mitocôndria é impermeável a ele. Dois sistemas transferem seus elétrons:

- **Lançadeira malato-aspartato** (fígado, coração, rim): regenera NADH **dentro** da matriz; rende cerca de 2,5 ATP.
- **Lançadeira do glicerol-3-fosfato** (músculo esquelético, cérebro, insetos): entrega os elétrons ao FAD, e portanto à ubiquinona; rende cerca de 1,5 ATP.

Essa é a razão pela qual o total por glicose varia entre 30 e 32.

## Desacopladores e inibidores

| Substância | Alvo | Efeito |
|---|---|---|
| Rotenona, amital | complexo I | bloqueia a oxidação do NADH |
| Antimicina A | complexo III | bloqueia o fluxo para o citocromo c |
| **Cianeto, monóxido de carbono, azida** | complexo IV | impedem a redução do \(\ce{O2}\): letais |
| Oligomicina | ATP-sintase (F₀) | impede o retorno dos prótons; a cadeia também para, por falta de escoamento do gradiente |
| **DNP** (2,4-dinitrofenol), FCCP | a própria membrana | carregam prótons de volta, dissipando o gradiente |

Os **desacopladores** separam o transporte de elétrons da síntese de ATP: a cadeia continua funcionando a toda velocidade, consumindo oxigênio, mas a energia vira **calor** em vez de ATP. O DNP chegou a ser vendido como emagrecedor nos anos 1930 e causou mortes por hipertermia.

A natureza usa esse princípio de forma controlada: o **tecido adiposo marrom** de mamíferos tem a proteína **UCP1** (termogenina), que desacopla propositalmente a cadeia para gerar calor, importante em recém-nascidos e em animais que hibernam. Plantas da família das aráceas aquecem suas inflorescências pela via alternativa da oxidase resistente ao cianeto, volatilizando compostos que atraem polinizadores.

## Radicais livres

Uma pequena fração dos elétrons escapa da cadeia, principalmente nos complexos I e III, e reduz o \(\ce{O2}\) parcialmente, formando o ânion **superóxido** (\(\ce{O2^{.-}}\)). Daí surgem outras espécies reativas de oxigênio, como o peróxido de hidrogênio e o radical hidroxila, que danificam lipídios, proteínas e DNA. As células se defendem com superóxido dismutase, catalase, glutationa peroxidase e antioxidantes de baixo peso molecular. O desequilíbrio entre produção e remoção dessas espécies é o **estresse oxidativo**, associado ao envelhecimento, a doenças neurodegenerativas e, nas plantas, a respostas a estresses abióticos.

> **Atenção, erros comuns:**
> Dizer que o oxigênio "gera" o ATP: ele apenas recebe os elétrons no fim da cadeia.
> Usar os valores antigos de 3 e 2 ATP sem ressalva.
> Confundir inibidores (param tudo) com desacopladores (a cadeia acelera, mas não há síntese de ATP).

## Para fixar

- Complexos I, III e IV bombeiam prótons; o II não. O \(\ce{O2}\) é o aceptor final.
- O gradiente de prótons (força próton-motriz) move a ATP-sintase, um motor rotatório.
- Cerca de 2,5 ATP por NADH e 1,5 por \(\ce{FADH2}\), totalizando 30 a 32 ATP por glicose.
`,
  referencias: [
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019. Cap. 19: Fosforilação oxidativa.",
    "MITCHELL, P. Coupling of phosphorylation to electron and hydrogen transfer by a chemi-osmotic type of mechanism. **Nature**, v. 191, p. 144-148, 1961.",
    "BERG, J. M. et al. **Bioquímica**. 8. ed. Rio de Janeiro: Guanabara Koogan, 2017.",
    "ALBERTS, B. et al. **Biologia molecular da célula**. 6. ed. Porto Alegre: Artmed, 2017. Cap. 14.",
  ],
},
{
  id: "r108", num: 108,
  area: "Rotas Metabólicas",
  disciplina: "Bioquímica",
  titulo: "Vias alternativas do metabolismo de carboidratos",
  descricao: "A via das pentoses-fosfato e o NADPH, a rota de Entner-Doudoroff, a gliconeogênese e seus desvios, o metabolismo do glicogênio e do amido, e a assimilação de pentoses na fermentação de biomassa lignocelulósica.",
  tags: ["Bioquímica", "via das pentoses-fosfato", "NADPH", "ribose-5-fosfato", "glicose-6-fosfato desidrogenase", "Entner-Doudoroff", "gliconeogênese", "frutose-1,6-bifosfatase", "ciclo de Cori", "glicogênio", "amido", "xilose", "arabinose", "xilose isomerase", "lignocelulose", "efeito Crabtree", "repressão catabólica"],
  conteudo: String.raw`
## Nem tudo é glicólise

A glicólise (tema 28) é a rota central dos açúcares, mas a célula precisa de outras coisas além de ATP: **poder redutor para biossínteses**, **açúcares de cinco carbonos** para os ácidos nucleicos, e meios de **produzir glicose** quando ela falta. Este resumo trata dessas rotas paralelas, essenciais tanto na fisiologia quanto na engenharia metabólica.

## A via das pentoses-fosfato

<svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" role="img"><title>Via das pentoses-fosfato</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Via das pentoses-fosfato: a fábrica de NADPH e de ribose</text><rect x="20" y="110" width="150" height="34" rx="8" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.4"/><text x="95" y="131.5" font-size="11.5" text-anchor="middle" fill="#0083cb" font-weight="600">glicose-6-fosfato</text><line x1="170" y1="127" x2="232" y2="127" stroke="#0083cb" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-az)"/><text x="201" y="152" font-size="10" text-anchor="middle" fill="#5c5c66">fase oxidativa</text><text x="201" y="164" font-size="9.5" text-anchor="middle" fill="#8a8a93">(irreversível)</text><rect x="232" y="110" width="140" height="34" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="302" y="131.5" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="600">ribulose-5-fosfato</text><line x1="262" y1="104" x2="250" y2="74" stroke="#0a8f5e" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-ve)"/><text x="246" y="66" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="700">2 NADPH</text><line x1="344" y1="104" x2="358" y2="74" stroke="#d33a4e" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-vm)"/><text x="366" y="66" font-size="12" text-anchor="middle" fill="#d33a4e" font-weight="700">CO2</text><line x1="372" y1="127" x2="428" y2="127" stroke="#0083cb" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-az)"/><text x="400" y="182" font-size="10" text-anchor="middle" fill="#5c5c66">fase não oxidativa</text><text x="400" y="194" font-size="9.5" text-anchor="middle" fill="#8a8a93">(reversível)</text><rect x="428" y="92" width="150" height="32" rx="8" fill="#f6e4fa" stroke="#a300bc" stroke-width="1.4"/><text x="503" y="112.5" font-size="11.5" text-anchor="middle" fill="#a300bc" font-weight="600">ribose-5-fosfato</text><rect x="428" y="132" width="150" height="32" rx="8" fill="#f6e4fa" stroke="#a300bc" stroke-width="1.4"/><text x="503" y="152.5" font-size="11.5" text-anchor="middle" fill="#a300bc" font-weight="600">eritrose-4-fosfato</text><line x1="578" y1="108" x2="612" y2="108" stroke="#a300bc" stroke-width="1.5" stroke-linecap="round" marker-end="url(#a-rx)"/><text x="616" y="102" font-size="10.5" text-anchor="start" fill="#a300bc" font-weight="600">nucleotídeos,</text><text x="616" y="115" font-size="10.5" text-anchor="start" fill="#a300bc" font-weight="600">DNA, RNA, ATP</text><line x1="578" y1="148" x2="612" y2="148" stroke="#a300bc" stroke-width="1.5" stroke-linecap="round" marker-end="url(#a-rx)"/><text x="616" y="142" font-size="10.5" text-anchor="start" fill="#a300bc" font-weight="600">aminoácidos</text><text x="616" y="155" font-size="10.5" text-anchor="start" fill="#a300bc" font-weight="600">aromáticos</text><path d="M470,166 C470,222 300,222 250,162" fill="none" stroke="#8a8a93" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 4" marker-end="url(#a-cz)"/><text x="360" y="238" font-size="10.5" text-anchor="middle" fill="#5c5c66">o excedente volta a glicólise (frutose-6-P e gliceraldeido-3-P)</text><line x1="20" y1="244" x2="740" y2="244" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><text x="20" y="266" font-size="12.5" text-anchor="start" fill="#333333" font-weight="700">NADH e NADPH não são a mesma coisa</text><rect x="20" y="280" width="350" height="66" rx="8" fill="#fdeaed" stroke="#d33a4e" stroke-width="1.2"/><text x="195" y="302" font-size="14" text-anchor="middle" fill="#d33a4e" font-weight="700">NADH</text><text x="195" y="320" font-size="10.5" text-anchor="middle" fill="#5c5c66">predomina na forma oxidada, NAD+</text><text x="195" y="337" font-size="10.5" text-anchor="middle" fill="#333333">catabolismo: oxidar e gerar ATP</text><rect x="390" y="280" width="350" height="66" rx="8" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><text x="565" y="302" font-size="14" text-anchor="middle" fill="#0a8f5e" font-weight="700">NADPH</text><text x="565" y="320" font-size="10.5" text-anchor="middle" fill="#5c5c66">predomina na forma reduzida, NADPH</text><text x="565" y="337" font-size="10.5" text-anchor="middle" fill="#333333">biossíntese: reduzir e construir</text></svg>
As duas fases da via e a diferença de papel entre NADH e NADPH.

Também chamada de desvio das hexoses-monofosfato, ocorre no **citosol** e tem duas fases.

**Fase oxidativa (irreversível):**

\[ \ce{glicose-6-P + 2NADP+ + H2O -> ribulose-5-P + CO2 + 2NADPH + 2H+} \]

As enzimas são a **glicose-6-fosfato desidrogenase** (G6PD, a etapa reguladora, inibida por NADPH) e a 6-fosfogliconato desidrogenase.

**Fase não oxidativa (reversível):** transcetolases e transaldolases rearranjam açúcares de 3, 4, 5, 6 e 7 carbonos, permitindo que a célula produza exatamente o que precisa e devolva o excedente à glicólise como frutose-6-fosfato e gliceraldeído-3-fosfato.

**Por que ela importa:**

| Produto | Para que serve |
|---|---|
| **NADPH** | biossíntese de ácidos graxos, esteróis, aminoácidos; defesa antioxidante (regenera a glutationa) |
| **Ribose-5-fosfato** | nucleotídeos, DNA, RNA, ATP, NAD, FAD, CoA |
| **Eritrose-4-fosfato** | precursor dos aminoácidos aromáticos, pela via do chiquimato |

**NADH e NADPH não são intercambiáveis.** Diferem por um único grupo fosfato, mas a célula os mantém em estados redox opostos: o \(\ce{NAD+}\) predomina sobre o NADH (favorecendo oxidações catabólicas), enquanto o NADPH predomina sobre o \(\ce{NADP+}\) (favorecendo reduções biossintéticas). Em engenharia metabólica, o **balanço de cofatores** é uma das restrições mais importantes: rotas que consomem NADPH frequentemente exigem redirecionar fluxo para a via das pentoses.

**Importância clínica:** a deficiência de G6PD é a enzimopatia mais comum no mundo. Sem NADPH suficiente, as hemácias não neutralizam espécies reativas de oxigênio e sofrem hemólise diante de certos fármacos (como a primaquina), infecções ou da ingestão de fava. Curiosamente, a deficiência confere alguma proteção contra a malária, e é frequente em regiões onde a doença é endêmica, um caso de seleção balanceadora (tema 101).

## A rota de Entner-Doudoroff

Muitas bactérias Gram-negativas, como *Zymomonas mobilis* e *Pseudomonas*, usam esta rota em vez da glicólise clássica. Ela produz piruvato e gliceraldeído-3-fosfato a partir da glicose-6-fosfato, mas rende apenas **1 ATP por glicose**, metade da glicólise.

Parece uma desvantagem, mas tem uma contrapartida: usa **menos proteína enzimática** por unidade de fluxo. *Z. mobilis* compensa o baixo rendimento de ATP com um fluxo glicolítico altíssimo e produz etanol com rendimento próximo ao máximo teórico, porque desvia menos carbono para biomassa. Isso a torna uma candidata interessante para processos de etanol, embora a levedura continue dominante por sua robustez industrial.

## Gliconeogênese

<svg viewBox="0 0 700 480" xmlns="http://www.w3.org/2000/svg" role="img"><title>Glicólise e gliconeogênese</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Glicólise e gliconeogênese: os tres desvios</text><rect x="250" y="60" width="200" height="30" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.4"/><text x="350" y="79.5" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="600">glicose</text><rect x="250" y="128" width="200" height="30" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.4"/><text x="350" y="147.5" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="600">glicose-6-fosfato</text><rect x="250" y="196" width="200" height="30" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.4"/><text x="350" y="215.5" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="600">frutose-6-fosfato</text><rect x="250" y="264" width="200" height="30" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.4"/><text x="350" y="283.5" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="600">frutose-1,6-bifosfato</text><rect x="250" y="332" width="200" height="30" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.4"/><text x="350" y="351.5" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="600">fosfoenolpiruvato</text><rect x="250" y="400" width="200" height="30" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.4"/><text x="350" y="419.5" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="600">piruvato</text><line x1="236" y1="90" x2="236" y2="126" stroke="#f40086" stroke-width="2" stroke-linecap="round" marker-end="url(#a-rs)"/><line x1="464" y1="126" x2="464" y2="90" stroke="#c67600" stroke-width="2" stroke-linecap="round" marker-end="url(#a-la)"/><line x1="236" y1="158" x2="236" y2="194" stroke="#0083cb" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="464" y1="194" x2="464" y2="158" stroke="#8a8a93" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-cz)"/><line x1="236" y1="226" x2="236" y2="262" stroke="#f40086" stroke-width="2" stroke-linecap="round" marker-end="url(#a-rs)"/><line x1="464" y1="262" x2="464" y2="226" stroke="#c67600" stroke-width="2" stroke-linecap="round" marker-end="url(#a-la)"/><line x1="236" y1="294" x2="236" y2="330" stroke="#0083cb" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-az)"/><line x1="464" y1="330" x2="464" y2="294" stroke="#8a8a93" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-cz)"/><line x1="236" y1="362" x2="236" y2="398" stroke="#f40086" stroke-width="2" stroke-linecap="round" marker-end="url(#a-rs)"/><line x1="464" y1="398" x2="464" y2="362" stroke="#c67600" stroke-width="2" stroke-linecap="round" marker-end="url(#a-la)"/><text x="228" y="60" font-size="12.5" text-anchor="end" fill="#0083cb" font-weight="700">glicólise</text><text x="228" y="76" font-size="10" text-anchor="end" fill="#5c5c66">gasta 2 e rende 4 ATP</text><text x="472" y="60" font-size="12.5" text-anchor="start" fill="#c67600" font-weight="700">gliconeogênese</text><text x="472" y="76" font-size="10" text-anchor="start" fill="#5c5c66">custa 6 ATP</text><text x="228" y="112" font-size="10.5" text-anchor="end" fill="#f40086" font-weight="600">hexoquinase</text><text x="472" y="112" font-size="10.5" text-anchor="start" fill="#c67600" font-weight="600">glicose-6-fosfatase</text><text x="228" y="248" font-size="10.5" text-anchor="end" fill="#f40086" font-weight="600">fosfofrutoquinase-1</text><text x="472" y="248" font-size="10.5" text-anchor="start" fill="#c67600" font-weight="600">frutose-1,6-bifosfatase</text><text x="228" y="378" font-size="10.5" text-anchor="end" fill="#f40086" font-weight="600">piruvato quinase</text><text x="472" y="378" font-size="10.5" text-anchor="start" fill="#c67600" font-weight="600">piruvato carboxilase e</text><text x="472" y="391" font-size="10.5" text-anchor="start" fill="#c67600" font-weight="600">PEP carboxiquinase</text><text x="20" y="456" font-size="11.5" text-anchor="start" fill="#5c5c66">As tres etapas irreversíveis da glicólise (rosa) precisam de enzimas próprias na volta (laranja).</text><text x="20" y="472" font-size="11.5" text-anchor="start" fill="#5c5c66">As demais são reversíveis, e as duas vias usam as mesmas enzimas nelas.</text></svg>
A gliconeogênese não é a glicólise invertida: as três etapas irreversíveis exigem enzimas próprias.

É a síntese de glicose a partir de precursores não glicídicos: lactato, glicerol, aminoácidos glicogênicos e, em plantas e microrganismos, acetato pelo ciclo do glioxilato (tema 106). Ocorre principalmente no fígado e no rim.

A gliconeogênese **não é a glicólise ao contrário**: as três reações irreversíveis da glicólise precisam ser contornadas por enzimas próprias:

| Etapa irreversível da glicólise | Desvio na gliconeogênese |
|---|---|
| Hexoquinase | glicose-6-fosfatase |
| Fosfofrutoquinase-1 | **frutose-1,6-bifosfatase** |
| Piruvato quinase | piruvato carboxilase + **PEP carboxiquinase** |

Custo total: 6 ATP equivalentes por glicose, contra 2 ATP produzidos na glicólise. A diferença é o preço de tornar o processo termodinamicamente favorável nos dois sentidos.

**Regulação recíproca:** a frutose-2,6-bifosfato ativa a PFK-1 (glicólise) e inibe a frutose-1,6-bifosfatase (gliconeogênese), evitando que as duas rotas funcionem ao mesmo tempo e desperdicem ATP num ciclo fútil. Seus níveis respondem à insulina e ao glucagon.

**Ciclo de Cori:** o lactato produzido pelo músculo em exercício intenso vai pelo sangue ao fígado, que o reconverte em glicose e a devolve ao músculo. O fígado "paga" o ATP que o músculo não tinha como gastar.

**Animais não convertem gordura em glicose** em quantidade apreciável, porque a reação piruvato → acetil-CoA é irreversível e não há como recuperar os dois carbonos perdidos como \(\ce{CO2}\). Plantas e fungos conseguem, pelo ciclo do glioxilato.

## Glicogênio e amido

**Glicogênio** (animais e fungos) e **amido** (plantas) são polímeros de glicose usados como reserva. São ramificados, o que permite mobilização rápida por muitas pontas ao mesmo tempo, e, sendo pouco solúveis, não afetam a pressão osmótica (tema 75) como faria a glicose livre.

- **Degradação:** a **glicogênio fosforilase** libera glicose-1-fosfato usando fosfato inorgânico, e não água. A vantagem é que o produto já está fosforilado, economizando um ATP. Enzimas desramificadoras cuidam das ramificações.
- **Síntese:** passa pela **UDP-glicose**, e a glicogênio sintase estende as cadeias; a enzima ramificadora cria as ramificações α-1,6.
- **Regulação:** a adrenalina e o glucagon ativam a degradação por uma cascata de fosforilação, via AMP cíclico; a insulina favorece a síntese. A cascata **amplifica** o sinal: poucas moléculas de hormônio mobilizam milhões de moléculas de glicose.

No **amido**, a amilose é linear e a amilopectina é ramificada. A hidrólise industrial do amido por **α-amilase e glicoamilase** (tema 112) é a base da produção de xaropes de glicose e do etanol de milho.

## Pentoses e biomassa lignocelulósica

A hemicelulose, um dos principais componentes da parede vegetal, é rica em **xilose** e **arabinose**. Num hidrolisado de bagaço de cana ou de palha de milho, as pentoses podem representar de 20% a 30% dos açúcares. Aproveitá-las é decisivo para a viabilidade econômica do **etanol de segunda geração**.

O problema é que *Saccharomyces cerevisiae*, a levedura do etanol, **não fermenta xilose** naturalmente. As estratégias de engenharia metabólica incluem:

- inserir a rota fúngica **xilose redutase e xilitol desidrogenase**, que funciona, mas gera desequilíbrio de cofatores (consome NADPH e produz NADH), levando ao acúmulo de xilitol;
- inserir uma **xilose isomerase** bacteriana, que converte xilose diretamente em xilulose, sem envolver cofatores, hoje a abordagem preferida;
- em ambos os casos, aumentar o fluxo da via das pentoses não oxidativa e os transportadores de xilose, e aplicar **evolução adaptativa em laboratório** para melhorar o desempenho.

Outros obstáculos são os **inibidores** gerados no pré-tratamento (furfural, hidroximetilfurfural, ácido acético, compostos fenólicos) e a **repressão catabólica**: na presença de glicose, a célula reprime o consumo das demais fontes de carbono, consumindo os açúcares em sequência em vez de simultaneamente.

**Efeito Crabtree:** mesmo com oxigênio, *S. cerevisiae* produz etanol quando a concentração de glicose é alta. Em processos cujo objetivo é biomassa ou proteína (como a produção de fermento de panificação), isso é indesejável, e se contorna alimentando a glicose aos poucos, em **batelada alimentada** (tema 50).

> **Atenção, erros comuns:**
> Tratar NADH e NADPH como equivalentes.
> Dizer que a gliconeogênese é a glicólise invertida.
> Supor que todo microrganismo que cresce em xilose também a fermenta a etanol com bom rendimento.

## Para fixar

- Via das pentoses: NADPH para biossíntese e ribose-5-P para nucleotídeos.
- Gliconeogênese contorna as três etapas irreversíveis da glicólise e custa 6 ATP equivalentes.
- Aproveitar pentoses exige engenharia metabólica; o efeito Crabtree e a repressão catabólica moldam a estratégia de alimentação.
`,
  referencias: [
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019. Cap. 14 e 15.",
    "MADIGAN, M. T. et al. **Microbiologia de Brock**. 14. ed. Porto Alegre: Artmed, 2016.",
    "JEFFRIES, T. W. Engineering yeasts for xylose metabolism. **Current Opinion in Biotechnology**, v. 17, n. 3, p. 320-326, 2006.",
    "SCHMIDELL, W. et al. (coord.). **Biotecnologia industrial**. v. 3. São Paulo: Blucher, 2001.",
  ],
},
{
  id: "r109", num: 109,
  area: "Rotas Metabólicas",
  disciplina: "Bioquímica",
  titulo: "Metabolismo de lipídios e de aminoácidos",
  descricao: "Beta-oxidação de ácidos graxos e o rendimento energético, corpos cetônicos, síntese de ácidos graxos, transaminação e ciclo da ureia, destinos dos esqueletos carbônicos e aplicações em lipídios microbianos e aminoácidos industriais.",
  tags: ["Bioquímica", "beta-oxidação", "ácido graxo", "carnitina", "acil-CoA", "corpos cetônicos", "lipogênese", "acetil-CoA carboxilase", "ácido graxo sintase", "transaminação", "desaminação oxidativa", "ciclo da ureia", "aminoácido glicogênico", "cetogênico", "lipídios microbianos", "SCO", "lisina", "Corynebacterium"],
  conteudo: String.raw`
## Degradação de lipídios: beta-oxidação

<svg viewBox="0 0 740 380" xmlns="http://www.w3.org/2000/svg" role="img"><title>Beta-oxidação</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="24" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Beta-oxidação: a cada volta a cadeia perde dois carbonos</text><text x="24" y="90" font-size="13" text-anchor="start" fill="#0083cb" font-weight="700">C16</text><circle cx="70" cy="85" r="6" fill="#fde4f0" stroke="#f40086" stroke-width="1.2"/><circle cx="85" cy="85" r="6" fill="#fde4f0" stroke="#f40086" stroke-width="1.2"/><circle cx="100" cy="85" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="115" cy="85" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="130" cy="85" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="145" cy="85" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="160" cy="85" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="175" cy="85" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="190" cy="85" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="205" cy="85" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="220" cy="85" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="235" cy="85" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="250" cy="85" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="265" cy="85" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="280" cy="85" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="295" cy="85" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><line x1="316" y1="85" x2="350" y2="85" stroke="#f40086" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-rs)"/><text x="362" y="78" font-size="11" text-anchor="start" fill="#f40086" font-weight="700">acetil-CoA</text><text x="362" y="94" font-size="10" text-anchor="start" fill="#5c5c66">(2 C saem)</text><line x1="50" y1="102" x2="50" y2="130" stroke="#0083cb" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-az)"/><text x="60" y="120" font-size="10.5" text-anchor="start" fill="#0a8f5e" font-weight="600">uma volta: FADH2 + NADH</text><text x="24" y="162" font-size="13" text-anchor="start" fill="#0083cb" font-weight="700">C14</text><circle cx="70" cy="157" r="6" fill="#fde4f0" stroke="#f40086" stroke-width="1.2"/><circle cx="85" cy="157" r="6" fill="#fde4f0" stroke="#f40086" stroke-width="1.2"/><circle cx="100" cy="157" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="115" cy="157" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="130" cy="157" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="145" cy="157" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="160" cy="157" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="175" cy="157" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="190" cy="157" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="205" cy="157" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="220" cy="157" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="235" cy="157" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="250" cy="157" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="265" cy="157" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><line x1="286" y1="157" x2="320" y2="157" stroke="#f40086" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-rs)"/><text x="332" y="150" font-size="11" text-anchor="start" fill="#f40086" font-weight="700">acetil-CoA</text><text x="332" y="166" font-size="10" text-anchor="start" fill="#5c5c66">(2 C saem)</text><line x1="50" y1="174" x2="50" y2="202" stroke="#0083cb" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-az)"/><text x="60" y="192" font-size="10.5" text-anchor="start" fill="#0a8f5e" font-weight="600">uma volta: FADH2 + NADH</text><text x="24" y="234" font-size="13" text-anchor="start" fill="#0083cb" font-weight="700">C12</text><circle cx="70" cy="229" r="6" fill="#fde4f0" stroke="#f40086" stroke-width="1.2"/><circle cx="85" cy="229" r="6" fill="#fde4f0" stroke="#f40086" stroke-width="1.2"/><circle cx="100" cy="229" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="115" cy="229" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="130" cy="229" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="145" cy="229" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="160" cy="229" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="175" cy="229" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="190" cy="229" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="205" cy="229" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="220" cy="229" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="235" cy="229" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><line x1="256" y1="229" x2="290" y2="229" stroke="#f40086" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-rs)"/><text x="302" y="222" font-size="11" text-anchor="start" fill="#f40086" font-weight="700">acetil-CoA</text><text x="302" y="238" font-size="10" text-anchor="start" fill="#5c5c66">(2 C saem)</text><line x1="50" y1="246" x2="50" y2="274" stroke="#0083cb" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-az)"/><text x="60" y="264" font-size="10.5" text-anchor="start" fill="#0a8f5e" font-weight="600">uma volta: FADH2 + NADH</text><text x="24" y="306" font-size="13" text-anchor="start" fill="#0083cb" font-weight="700">C10</text><circle cx="70" cy="301" r="6" fill="#fde4f0" stroke="#f40086" stroke-width="1.2"/><circle cx="85" cy="301" r="6" fill="#fde4f0" stroke="#f40086" stroke-width="1.2"/><circle cx="100" cy="301" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="115" cy="301" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="130" cy="301" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="145" cy="301" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="160" cy="301" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="175" cy="301" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="190" cy="301" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><circle cx="205" cy="301" r="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><text x="24" y="340" font-size="11.5" text-anchor="start" fill="#5c5c66">O palmitato (16 C) faz 7 voltas: 8 acetil-CoA, 7 FADH2 e 7 NADH, cerca de 106 ATP.</text><text x="24" y="358" font-size="11.5" text-anchor="start" fill="#5c5c66">Por isso a gordura e a reserva mais concentrada: cerca de 37 kJ/g contra 17 kJ/g dos açúcares.</text></svg>
Cada volta da beta-oxidação encurta a cadeia em dois carbonos e colhe um FADH2 e um NADH.

As gorduras são a reserva energética mais concentrada: cerca de 37 kJ/g, contra 17 kJ/g dos carboidratos, porque são mais reduzidas e praticamente anidras. Para serem usadas:

1. **Lipólise:** lipases (tema 112) hidrolisam os triacilgliceróis em glicerol e ácidos graxos livres. O glicerol entra na glicólise como di-hidroxiacetona-fosfato.
2. **Ativação:** no citosol, o ácido graxo é convertido em **acil-CoA**, com gasto de ATP (que vira AMP, ou seja, o custo é de **dois** ATP equivalentes).
3. **Transporte:** a **lançadeira da carnitina** leva o grupo acila para dentro da matriz mitocondrial. A carnitina-palmitoil transferase I, nessa etapa, é inibida pelo malonil-CoA, impedindo que a célula degrade e sintetize ácidos graxos ao mesmo tempo.
4. **Beta-oxidação:** quatro reações em ciclo (oxidação, hidratação, oxidação, clivagem tiolítica) encurtam a cadeia em **dois carbonos** por volta:

\[ \ce{acil-CoA (n C) + FAD + NAD+ + CoA -> acil-CoA (n-2 C) + acetil-CoA + FADH2 + NADH} \]

**Rendimento do palmitato (C16):** são 7 ciclos, produzindo 8 acetil-CoA, 7 \(\ce{FADH2}\) e 7 NADH.

| Fonte | Quantidade | ATP |
|---|---|---|
| 8 acetil-CoA no ciclo de Krebs | 8 × 10 | 80 |
| 7 \(\ce{FADH2}\) | 7 × 1,5 | 10,5 |
| 7 NADH | 7 × 2,5 | 17,5 |
| Ativação | | −2 |
| **Total** | | **106 ATP** |

Ácidos graxos **insaturados** exigem enzimas auxiliares (isomerase e redutase) e rendem um pouco menos; os de **cadeia ímpar** geram, ao final, propionil-CoA, que é convertido em succinil-CoA e entra no ciclo de Krebs, sendo a única fração de ácido graxo que pode originar glicose. A beta-oxidação de cadeias muito longas começa nos **peroxissomos**, e nos glioxissomos vegetais está acoplada ao ciclo do glioxilato (tema 106).

## Corpos cetônicos

Quando a beta-oxidação é intensa e falta oxaloacetato (jejum prolongado, diabetes descompensado), o acetil-CoA se acumula no fígado e é convertido em **corpos cetônicos** (acetoacetato, β-hidroxibutirato e acetona). Eles são solúveis, circulam no sangue e servem de combustível para músculo, coração e, após adaptação, para o cérebro, que não oxida ácidos graxos. Em excesso, baixam o pH do sangue, causando **cetoacidose**.

## Síntese de ácidos graxos

Não é a beta-oxidação invertida. Ocorre no **citosol**, usa **NADPH** (da via das pentoses, tema 108) e o carregador é a proteína ACP, não a CoA.

- O acetil-CoA sai da mitocôndria disfarçado de **citrato**.
- A **acetil-CoA carboxilase** produz malonil-CoA, numa reação dependente de biotina e \(\ce{CO2}\). É a etapa reguladora: ativada por citrato (sinal de abundância) e inibida por palmitoil-CoA e pela fosforilação em resposta ao glucagon.
- A **ácido graxo sintase**, um complexo multienzimático, acrescenta dois carbonos por ciclo, consumindo 2 NADPH, até formar o palmitato.

Alongamento e dessaturação posteriores geram os demais ácidos graxos. Mamíferos não conseguem introduzir duplas ligações além do carbono 9, e por isso os ácidos linoleico e α-linolênico são **essenciais** na dieta. Plantas e alguns microrganismos têm as dessaturases necessárias, o que motiva o uso de microalgas e fungos para produzir ômega-3.

## Metabolismo de aminoácidos

Diferentemente de açúcares e lipídios, os aminoácidos não são armazenados. O excesso é degradado, e o problema central é o que fazer com o **nitrogênio**.

**Transaminação:** o grupo amino é transferido para o α-cetoglutarato, formando glutamato. As enzimas (ALT e AST, dosadas em exames de fígado) usam o fosfato de piridoxal, derivado da vitamina B₆.

**Desaminação oxidativa:** a glutamato desidrogenase libera o nitrogênio como **amônia** e regenera o α-cetoglutarato. A amônia é tóxica, sobretudo para o sistema nervoso.

**Ciclo da ureia:** no fígado, a amônia é convertida em ureia, muito menos tóxica, excretada pelos rins. Custa cerca de 4 ATP equivalentes por molécula de ureia e se conecta ao ciclo de Krebs pelo fumarato produzido (a "bicicleta de Krebs"). Peixes excretam amônia diretamente; aves e répteis, ácido úrico, o que economiza água.

**Destino dos esqueletos carbônicos:** todos os 20 aminoácidos convergem para sete intermediários (piruvato, acetil-CoA, acetoacetil-CoA, α-cetoglutarato, succinil-CoA, fumarato e oxaloacetato). Conforme o destino:

- **glicogênicos:** originam piruvato ou intermediários do ciclo, e podem virar glicose (a maioria);
- **cetogênicos:** originam acetil-CoA ou acetoacetil-CoA (leucina e lisina são exclusivamente cetogênicos);
- alguns são ambos (fenilalanina, tirosina, triptofano, isoleucina, treonina).

Erros nessas rotas causam doenças metabólicas, como a **fenilcetonúria** (tema 95) e a doença da urina em xarope de bordo.

**Assimilação em plantas e microrganismos:** o nitrogênio inorgânico (nitrato, amônio) é incorporado pelo sistema **glutamina sintetase e glutamato sintase** (GS-GOGAT), de alta afinidade. As leguminosas, em simbiose com rizóbios, fixam \(\ce{N2}\) atmosférico pela **nitrogenase**, processo caríssimo em ATP e irreversivelmente inibido pelo oxigênio, o que explica a leg-hemoglobina dos nódulos. Essa simbiose economiza milhões de toneladas de fertilizante nitrogenado por ano no Brasil, especialmente na cultura da soja.

## Na prática: biotecnologia

- **Lipídios microbianos (SCO):** leveduras oleaginosas como *Yarrowia lipolytica* e *Rhodotorula*, fungos e microalgas acumulam mais de 20% a 70% do peso seco em lipídios, sobretudo quando o meio tem **excesso de carbono e limitação de nitrogênio**. O mecanismo é elegante: sem nitrogênio, o AMP intracelular cai, a isocitrato desidrogenase dependente de AMP é inibida, o citrato se acumula e é exportado para o citosol, onde alimenta a síntese de ácidos graxos. Esses óleos são matéria-prima para biodiesel e substitutos de óleos vegetais, e microalgas e fungos como *Schizochytrium* produzem **DHA** para suplementos e fórmulas infantis.
- **Aminoácidos industriais:** o **glutamato** e a **lisina** lideram a produção mundial, obtidos por *Corynebacterium glutamicum*. A engenharia metabólica nesses processos é um caso clássico: desregular a aspartoquinase (liberando-a da inibição por retroalimentação), eliminar rotas concorrentes e otimizar o suprimento de NADPH. A lisina é usada como suplemento em rações, permitindo formular dietas com menos proteína bruta e, com isso, reduzir a excreção de nitrogênio.
- **Treonina, triptofano e metionina** também são produzidos por fermentação ou por rotas mistas, químicas e enzimáticas.

> **Atenção, erros comuns:**
> Contar a ativação do ácido graxo como 1 ATP: são 2 ATP equivalentes (ATP → AMP).
> Dizer que a síntese de ácidos graxos é a beta-oxidação ao contrário.
> Esquecer que, em animais, o acetil-CoA não pode originar glicose.

## Para fixar

- Beta-oxidação encurta a cadeia de dois em dois carbonos; o palmitato rende cerca de 106 ATP.
- Síntese de ácidos graxos: citosol, NADPH, malonil-CoA; regulada pela acetil-CoA carboxilase.
- Aminoácidos: transaminação, ciclo da ureia e esqueletos glicogênicos ou cetogênicos; limitação de nitrogênio induz acúmulo de lipídios em microrganismos oleaginosos.
`,
  referencias: [
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019. Cap. 17, 18 e 21.",
    "BERG, J. M. et al. **Bioquímica**. 8. ed. Rio de Janeiro: Guanabara Koogan, 2017.",
    "RATLEDGE, C.; WYNN, J. P. The biochemistry and molecular biology of lipid accumulation in oleaginous microorganisms. **Advances in Applied Microbiology**, v. 51, p. 1-51, 2002.",
    "WENDISCH, V. F. Metabolic engineering advances and prospects for amino acid production. **Metabolic Engineering**, v. 58, p. 17-34, 2020.",
  ],
},
{
  id: "r110", num: 110,
  area: "Rotas Metabólicas",
  disciplina: "Microbiologia Industrial",
  titulo: "Fermentações microbianas e metabolismo anaeróbio",
  descricao: "Por que fermentar, as fermentações alcoólica, láctica, acetona-butanol, propiônica e butírica, a respiração anaeróbia, a digestão anaeróbia e a metanogênese, e o balanço redox como critério de projeto.",
  tags: ["Microbiologia Industrial", "Bioquímica", "fermentação", "fermentação alcoólica", "fermentação láctica", "homoláctica", "heteroláctica", "ABE", "Clostridium", "fermentação propiônica", "respiração anaeróbia", "digestão anaeróbia", "metanogênese", "biogás", "balanço redox", "rendimento teórico", "Gay-Lussac"],
  conteudo: String.raw`
## Por que fermentar

<svg viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg" role="img"><title>Destinos do piruvato</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="24" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">O destino do piruvato depende do aceptor de elétrons</text><rect x="300" y="44" width="150" height="32" rx="8" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.4"/><text x="375" y="64.5" font-size="12.5" text-anchor="middle" fill="#0083cb" font-weight="700">glicose</text><line x1="375" y1="76" x2="375" y2="106" stroke="#0083cb" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-az)"/><text x="385" y="96" font-size="10.5" text-anchor="start" fill="#5c5c66">glicólise: 2 ATP, 2 NADH</text><rect x="300" y="106" width="150" height="32" rx="8" fill="#0083cb" stroke="#0083cb" stroke-width="1.4"/><text x="375" y="126.5" font-size="12.5" text-anchor="middle" fill="#fff" font-weight="700">piruvato</text><path d="M375,138 C375,160 116,160 116,182" fill="none" stroke="#0a8f5e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-ve)"/><rect x="56" y="182" width="120" height="54" rx="8" fill="#fff" stroke="#0a8f5e" stroke-width="1.6"/><text x="116" y="204" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="700">respiração</text><text x="116" y="219" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="700">aeróbia</text><text x="116" y="252" font-size="10.5" text-anchor="middle" fill="#5c5c66">com O2</text><text x="116" y="274" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">cerca de 31 ATP</text><text x="116" y="312" font-size="9.5" text-anchor="middle" fill="#8a8a93">acetil-CoA e ciclo de Krebs</text><path d="M375,138 C375,160 310,160 310,182" fill="none" stroke="#c67600" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-la)"/><rect x="250" y="182" width="120" height="54" rx="8" fill="#fff" stroke="#c67600" stroke-width="1.6"/><text x="310" y="204" font-size="12" text-anchor="middle" fill="#c67600" font-weight="700">fermentação</text><text x="310" y="219" font-size="12" text-anchor="middle" fill="#c67600" font-weight="700">alcoólica</text><text x="310" y="252" font-size="10.5" text-anchor="middle" fill="#5c5c66">sem O2</text><text x="310" y="274" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">2 ATP + etanol + CO2</text><text x="310" y="312" font-size="9.5" text-anchor="middle" fill="#8a8a93">leveduras e Zymomonas</text><path d="M375,138 C375,160 508,160 508,182" fill="none" stroke="#f40086" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-rs)"/><rect x="448" y="182" width="120" height="54" rx="8" fill="#fff" stroke="#f40086" stroke-width="1.6"/><text x="508" y="204" font-size="12" text-anchor="middle" fill="#f40086" font-weight="700">fermentação</text><text x="508" y="219" font-size="12" text-anchor="middle" fill="#f40086" font-weight="700">láctica</text><text x="508" y="252" font-size="10.5" text-anchor="middle" fill="#5c5c66">sem O2</text><text x="508" y="274" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">2 ATP + lactato</text><text x="508" y="312" font-size="9.5" text-anchor="middle" fill="#8a8a93">bactérias lácticas e músculo</text><path d="M375,138 C375,160 680,160 680,182" fill="none" stroke="#a300bc" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#a-rx)"/><rect x="620" y="182" width="120" height="54" rx="8" fill="#fff" stroke="#a300bc" stroke-width="1.6"/><text x="680" y="204" font-size="12" text-anchor="middle" fill="#a300bc" font-weight="700">outras</text><text x="680" y="219" font-size="12" text-anchor="middle" fill="#a300bc" font-weight="700">fermentações</text><text x="680" y="252" font-size="10.5" text-anchor="middle" fill="#5c5c66">sem O2</text><text x="680" y="274" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">butanol, acetona,</text><text x="680" y="287" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">propionato</text><text x="680" y="312" font-size="9.5" text-anchor="middle" fill="#8a8a93">vários Clostridium</text><rect x="20" y="338" width="720" height="60" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="380" y="360" font-size="12" text-anchor="middle" fill="#333333" font-weight="700">A regra que explica todas elas</text><text x="380" y="380" font-size="11" text-anchor="middle" fill="#5c5c66">A glicólise consome NAD+. Sem oxigênio para reoxidar o NADH na cadeia respiratoria,</text><text x="380" y="394" font-size="11" text-anchor="middle" fill="#5c5c66">a célula precisa devolver os elétrons a um composto orgânico próprio: isso e fermentar.</text></svg>
Com oxigênio, o piruvato segue para o ciclo de Krebs; sem ele, a célula precisa fermentar.

Sem oxigênio (ou outro aceptor externo de elétrons), a cadeia respiratória para (tema 107), o \(\ce{NAD+}\) não é regenerado e a glicólise, que o consome, trava. A **fermentação** resolve esse problema: usa um intermediário orgânico do próprio metabolismo como aceptor de elétrons, regenerando \(\ce{NAD+}\) para que a glicólise continue produzindo ATP por fosforilação em nível de substrato.

Fermentar é pouco eficiente em energia (2 ATP por glicose, contra 30 a 32 na respiração), mas é rápido e não depende de oxigênio. E, do ponto de vista industrial, é justamente o "desperdício" que interessa: os produtos excretados pelas células são o que se quer vender.

**Regra fundamental:** toda fermentação precisa fechar o **balanço redox**. Todo NADH produzido tem de ser reoxidado. Esse princípio permite prever quais produtos uma rota pode gerar e em que proporções.

## Fermentação alcoólica

Realizada por leveduras (principalmente *Saccharomyces cerevisiae*) e por *Zymomonas mobilis*:

\[ \ce{piruvato ->[piruvato\ descarboxilase] acetaldeído + CO2} \qquad \ce{acetaldeído + NADH ->[álcool\ desidrogenase] etanol + NAD+} \]

Global: \(\ce{C6H12O6 -> 2 C2H5OH + 2 CO2}\)

O **rendimento teórico de Gay-Lussac** é 0,511 g de etanol por grama de glicose (e 0,489 g de \(\ce{CO2}\)). Na prática, obtêm-se de 90% a 93% desse valor, porque parte do açúcar vai para biomassa, glicerol (produzido para equilibrar o redox e lidar com o estresse osmótico) e subprodutos.

**Exemplo:** 1000 kg de açúcares redutores totais rendem, com 92% de eficiência, cerca de \(1000\times0{,}511\times0{,}92 \approx 470\) kg de etanol, ou cerca de 595 litros.

**No Brasil**, o processo de etanol de cana usa fermentação em batelada alimentada com **reciclo de células** (processo Melle-Boinot): o vinho é centrifugado, o creme de levedura é tratado com ácido sulfúrico para reduzir contaminação bacteriana e volta ao próximo ciclo. Isso mantém concentrações celulares altíssimas e fermentações de 6 a 12 horas.

Na **panificação**, o que importa é o \(\ce{CO2}\), que faz a massa crescer; o etanol evapora no forno. Em **cervejas e vinhos**, interessam o etanol e os compostos de aroma (ésteres, álcoois superiores), que dependem muito da linhagem e da temperatura.

## Fermentação láctica

| Tipo | Produtos | Rendimento de ATP | Microrganismos |
|---|---|---|---|
| **Homoláctica** | só lactato (2 por glicose) | 2 ATP | *Lactobacillus*, *Streptococcus*, *Lactococcus* |
| **Heteroláctica** | lactato + etanol + \(\ce{CO2}\) | 1 ATP | *Leuconostoc*, alguns *Lactobacillus* |

A via heteroláctica usa a fase oxidativa das pentoses-fosfato (tema 108) e por isso libera \(\ce{CO2}\) e rende menos ATP.

**Aplicações:** iogurte, queijos, coalhada, chucrute, picles, kimchi, silagem, massa azeda e embutidos fermentados. A acidificação conserva o alimento ao inibir patógenos. O **ácido láctico** também é produzido industrialmente para alimentos, cosméticos e, sobretudo, como monômero do **PLA** (ácido polilático), um bioplástico biodegradável. Para o PLA, é essencial controlar a pureza óptica do isômero L ou D, o que se consegue escolhendo a linhagem adequada.

No **músculo humano** em exercício intenso, a fermentação láctica fornece ATP rapidamente. O lactato não é apenas um resíduo: é exportado e reaproveitado por outros tecidos e pelo fígado (ciclo de Cori, tema 108).

## Fermentação acetona-butanol-etanol (ABE)

Realizada por *Clostridium acetobutylicum*, bactéria anaeróbia estrita formadora de esporos. Tem duas fases:

1. **Acidogênese:** produção de ácidos acético e butírico, que acidificam o meio.
2. **Solventogênese:** em pH baixo, a célula reassimila os ácidos e produz **butanol, acetona e etanol**, tipicamente na proporção 6:3:1.

Foi um dos maiores processos industriais do início do século XX (a acetona era usada na fabricação de explosivos; o trabalho de Chaim Weizmann teve papel histórico na Primeira Guerra Mundial), mas foi substituído pela petroquímica nos anos 1950. Hoje volta a despertar interesse, porque o **butanol** tem densidade energética maior que a do etanol, é menos corrosivo e menos higroscópico. O gargalo é a toxicidade do próprio butanol, que inibe as células acima de cerca de 2% (v/v), exigindo remoção contínua do produto por *gas stripping*, pervaporação ou extração.

## Outras fermentações

- **Propiônica** (*Propionibacterium*): produz propionato, acetato e \(\ce{CO2}\). As bolhas e o sabor característico do queijo suíço vêm daí.
- **Butírica** (*Clostridium butyricum*): butirato, \(\ce{CO2}\) e \(\ce{H2}\); responsável pelo odor de manteiga rançosa.
- **Ácido mista** (*E. coli*): lactato, acetato, succinato, formiato, etanol, \(\ce{CO2}\) e \(\ce{H2}\). O teste do vermelho de metila a detecta.
- **2,3-butanodiol** (*Enterobacter*, *Klebsiella*): produtos menos ácidos, detectados pelo teste de Voges-Proskauer. Esses dois testes fazem parte do conjunto IMViC, usado na identificação de enterobactérias (tema 33).

## Respiração anaeróbia

Não confundir com fermentação. Na **respiração anaeróbia**, há cadeia transportadora de elétrons e gradiente de prótons, mas o aceptor final não é o \(\ce{O2}\):

| Aceptor | Produto | Processo |
|---|---|---|
| \(\ce{NO3^-}\) | \(\ce{N2}\), \(\ce{N2O}\) | desnitrificação |
| \(\ce{SO4^{2-}}\) | \(\ce{H2S}\) | redução de sulfato |
| \(\ce{Fe^{3+}}\) | \(\ce{Fe^{2+}}\) | redução de ferro (*Geobacter*, tema 79) |
| \(\ce{CO2}\) | \(\ce{CH4}\) | metanogênese |

O rendimento de ATP é intermediário entre a fermentação e a respiração aeróbia, e segue a ordem dos potenciais redox (tema 78): quanto mais positivo o potencial do aceptor, mais energia. Esses processos são centrais nos ciclos biogeoquímicos e no tratamento de efluentes: a desnitrificação remove nitrogênio de esgotos, e a redução de sulfato explica o cheiro de ovo podre e a corrosão de tubulações.

## Digestão anaeróbia e biogás

<svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" role="img"><title>Digestão anaeróbia</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Digestão anaeróbia: quatro etapas em cascata</text><rect x="20" y="50" width="300" height="42" rx="8" fill="#f6f7fb" stroke="#8a8a93" stroke-width="1.6"/><text x="170" y="69" font-size="12" text-anchor="middle" fill="#8a8a93" font-weight="700">matéria orgânica complexa</text><text x="170" y="84" font-size="9.8" text-anchor="middle" fill="#5c5c66">proteínas, carboidratos e lipídios</text><line x1="170" y1="98" x2="170" y2="112" stroke="#333333" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-ti)"/><text x="182" y="108" font-size="11" text-anchor="start" fill="#333333" font-weight="700">hidrólise</text><rect x="20" y="114" width="300" height="42" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.6"/><text x="170" y="133" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">monômeros</text><text x="170" y="148" font-size="9.8" text-anchor="middle" fill="#5c5c66">açúcares, aminoácidos, ácidos graxos</text><line x1="170" y1="162" x2="170" y2="176" stroke="#333333" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-ti)"/><text x="182" y="172" font-size="11" text-anchor="start" fill="#333333" font-weight="700">acidogênese</text><rect x="20" y="178" width="300" height="42" rx="8" fill="#fff" stroke="#a300bc" stroke-width="1.6"/><text x="170" y="197" font-size="12" text-anchor="middle" fill="#a300bc" font-weight="700">ácidos orgânicos</text><text x="170" y="212" font-size="9.8" text-anchor="middle" fill="#5c5c66">propionato, butirato, H2 e CO2</text><line x1="170" y1="226" x2="170" y2="240" stroke="#333333" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-ti)"/><text x="182" y="236" font-size="11" text-anchor="start" fill="#333333" font-weight="700">acetogênese</text><rect x="20" y="242" width="300" height="42" rx="8" fill="#fff" stroke="#f40086" stroke-width="1.6"/><text x="170" y="261" font-size="12" text-anchor="middle" fill="#f40086" font-weight="700">acetato, H2 e CO2</text><text x="170" y="276" font-size="9.8" text-anchor="middle" fill="#5c5c66">o alimento das metanogênicas</text><line x1="170" y1="290" x2="170" y2="304" stroke="#333333" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-ti)"/><text x="182" y="300" font-size="11" text-anchor="start" fill="#333333" font-weight="700">metanogênese</text><rect x="20" y="306" width="300" height="42" rx="8" fill="#fff" stroke="#0a8f5e" stroke-width="1.6"/><text x="170" y="325" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="700">biogás</text><text x="170" y="340" font-size="9.8" text-anchor="middle" fill="#5c5c66">55 a 70% de metano e o restante CO2</text><rect x="352" y="60" width="388" height="88" rx="8" fill="#fdf1de" stroke="#c67600" stroke-width="1.2"/><text x="546" y="82" font-size="11.5" text-anchor="middle" fill="#c67600" font-weight="700">a etapa mais lenta</text><text x="546" y="102" font-size="10.5" text-anchor="middle" fill="#333333">Em resíduos fibrosos, a hidrólise limita todo</text><text x="546" y="118" font-size="10.5" text-anchor="middle" fill="#333333">o processo. Pre-tratamentos e enzimas</text><text x="546" y="134" font-size="10.5" text-anchor="middle" fill="#333333">aceleram essa primeira quebra.</text><rect x="352" y="170" width="388" height="88" rx="8" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.2"/><text x="546" y="192" font-size="11.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">dependência mútua</text><text x="546" y="212" font-size="10.5" text-anchor="middle" fill="#333333">A acetogênese so e favorável se o H2 for</text><text x="546" y="228" font-size="10.5" text-anchor="middle" fill="#333333">consumido pelas arqueias: e a transferência</text><text x="546" y="244" font-size="10.5" text-anchor="middle" fill="#333333">interespécies de hidrogênio.</text><rect x="352" y="280" width="388" height="72" rx="8" fill="#fdeaed" stroke="#d33a4e" stroke-width="1.2"/><text x="546" y="302" font-size="11.5" text-anchor="middle" fill="#d33a4e" font-weight="700">o elo frágil</text><text x="546" y="322" font-size="10.5" text-anchor="middle" fill="#333333">As metanogênicas crescem devagar e exigem pH</text><text x="546" y="338" font-size="10.5" text-anchor="middle" fill="#333333">de 6,8 a 7,2. Ácidos acumulados sinalizam sobrecarga.</text></svg>
A conversão de matéria orgânica em metano depende de quatro grupos de microrganismos em sequência.

A conversão de matéria orgânica complexa em metano envolve uma **cadeia trófica** de microrganismos:

1. **Hidrólise:** enzimas extracelulares quebram polímeros em monômeros (tema 112). É geralmente a etapa limitante para resíduos sólidos e fibrosos.
2. **Acidogênese:** monômeros viram ácidos graxos voláteis, álcoois, \(\ce{H2}\) e \(\ce{CO2}\).
3. **Acetogênese:** os ácidos maiores são convertidos em acetato, \(\ce{H2}\) e \(\ce{CO2}\). Essas reações só são termodinamicamente favoráveis se a pressão parcial de \(\ce{H2}\) for mantida baixa, o que depende das arqueias que o consomem: é a **transferência interespécies de hidrogênio**, um exemplo notável de dependência mútua.
4. **Metanogênese:** arqueias metanogênicas produzem \(\ce{CH4}\) por duas rotas, a acetoclástica (\(\ce{CH3COO^- -> CH4 + CO2}\), responsável por cerca de 70% do metano) e a hidrogenotrófica (\(\ce{CO2 + 4H2 -> CH4 + 2H2O}\)).

O **biogás** resultante tem tipicamente 55% a 70% de \(\ce{CH4}\) e 30% a 45% de \(\ce{CO2}\), além de traços de \(\ce{H2S}\), que precisa ser removido por ser corrosivo e tóxico. Purificado a mais de 95% de metano, torna-se **biometano**, substituto direto do gás natural.

No Brasil, há grande potencial em **vinhaça** de usinas de etanol, dejetos de suínos e bovinos, resíduos de abatedouros e a fração orgânica do lixo urbano. As metanogênicas são sensíveis: exigem pH entre 6,8 e 7,2, temperatura estável (35 °C em processos mesofílicos, 55 °C nos termofílicos) e ausência de oxigênio, e crescem devagar, o que torna a partida de um biodigestor lenta e sua recuperação após um desequilíbrio demorada. O acúmulo de ácidos graxos voláteis é o sinal clássico de sobrecarga.

> **Atenção, erros comuns:**
> Chamar de fermentação qualquer cultivo em biorreator: no sentido bioquímico, fermentação é o metabolismo sem aceptor externo de elétrons.
> Confundir respiração anaeróbia (com cadeia de elétrons) com fermentação (sem).
> Esquecer que os rendimentos práticos ficam abaixo do teórico, porque parte do substrato vira biomassa e subprodutos.

## Para fixar

- Fermentar serve para regenerar \(\ce{NAD+}\); o balanço redox determina os produtos possíveis.
- Alcoólica: 0,511 g de etanol por grama de glicose no máximo teórico; láctica: homo ou heteroláctica; ABE: butanol limitado pela própria toxicidade.
- Digestão anaeróbia tem quatro etapas e depende da cooperação entre bactérias e arqueias metanogênicas.
`,
  referencias: [
    "MADIGAN, M. T. et al. **Microbiologia de Brock**. 14. ed. Porto Alegre: Artmed, 2016.",
    "SCHMIDELL, W. et al. (coord.). **Biotecnologia industrial**. v. 3: Processos fermentativos e enzimáticos. São Paulo: Blucher, 2001.",
    "CHERNICHARO, C. A. L. **Reatores anaeróbios**. 2. ed. Belo Horizonte: UFMG, 2007.",
    "AMORIM, H. V. et al. Scientific challenges of bioethanol production in Brazil. **Applied Microbiology and Biotechnology**, v. 91, p. 1267-1275, 2011.",
  ],
},
{
  id: "r111", num: 111,
  area: "Rotas Metabólicas",
  disciplina: "Bioquímica",
  titulo: "Fotossíntese e metabolismo vegetal especializado",
  descricao: "As fases fotoquímica e bioquímica, o ciclo de Calvin, a fotorrespiração e as adaptações C4 e CAM, e as grandes rotas do metabolismo secundário: fenilpropanoides, terpenoides e alcaloides.",
  tags: ["Bioquímica", "Fisiologia Vegetal", "fotossíntese", "fotossistema", "fotofosforilação", "ciclo de Calvin", "rubisco", "fotorrespiração", "C4", "CAM", "ponto de compensação", "metabolismo secundário", "fenilpropanoides", "lignina", "flavonoides", "terpenoides", "alcaloides", "microalgas", "fotobiorreator"],
  conteudo: String.raw`
## A reação que sustenta a biosfera

A fotossíntese converte energia luminosa em energia química, fixando \(\ce{CO2}\) em compostos orgânicos:

\[ \ce{6CO2 + 6H2O ->[luz] C6H12O6 + 6O2} \]

É a origem de praticamente toda a matéria orgânica e de todo o oxigênio atmosférico. Ocorre nos **cloroplastos**: as reações da fase fotoquímica nos **tilacoides** e as da fase bioquímica no **estroma**.

Um detalhe importante: o oxigênio liberado vem da **água**, e não do \(\ce{CO2}\), como demonstrou Ruben com isótopos de oxigênio.

## Fase fotoquímica

<svg viewBox="0 0 760 400" xmlns="http://www.w3.org/2000/svg" role="img"><title>Esquema Z da fotossintese</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="24" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Esquema Z: a luz empurra os elétrons morro acima, duas vezes</text><rect x="70" y="50" width="600" height="280" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="70" y1="310" x2="670" y2="310" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><text x="64" y="314" font-size="10" text-anchor="end" fill="#8a8a93">-1.0</text><line x1="70" y1="260" x2="670" y2="260" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><text x="64" y="264" font-size="10" text-anchor="end" fill="#8a8a93">-0.5</text><line x1="70" y1="210" x2="670" y2="210" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><text x="64" y="214" font-size="10" text-anchor="end" fill="#8a8a93">0,0</text><line x1="70" y1="160" x2="670" y2="160" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><text x="64" y="164" font-size="10" text-anchor="end" fill="#8a8a93">+0.5</text><line x1="70" y1="110" x2="670" y2="110" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><text x="64" y="114" font-size="10" text-anchor="end" fill="#8a8a93">+1.0</text><text x="36" y="46" font-size="10.5" text-anchor="start" fill="#5c5c66" font-weight="600">potencial redox (V)</text><path d="M106.0,128.0L160.0,128.0L184.0,285.0L262.0,255.0L346.0,200.0L406.0,173.0L454.0,165.0L478.0,310.0L562.0,280.0L628.0,242.0" fill="none" stroke="#0a8f5e" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><line x1="162" y1="124" x2="162" y2="291" stroke="#c67600" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-la)"/><text x="150" y="206.5" font-size="12" text-anchor="end" fill="#c67600" font-weight="700">luz</text><line x1="456" y1="161" x2="456" y2="316" stroke="#c67600" stroke-width="2.4" stroke-linecap="round" marker-end="url(#a-la)"/><text x="444" y="237.5" font-size="12" text-anchor="end" fill="#c67600" font-weight="700">luz</text><circle cx="106" cy="128" r="5" fill="#fff" stroke="#0a8f5e" stroke-width="1.8"/><text x="106" y="116" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">H2O</text><circle cx="160" cy="128" r="5" fill="#fff" stroke="#0a8f5e" stroke-width="1.8"/><text x="160" y="103" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">PSII</text><text x="160" y="116" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">P680</text><circle cx="262" cy="255" r="5" fill="#fff" stroke="#0a8f5e" stroke-width="1.8"/><text x="262" y="275" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">plastoquinona</text><circle cx="346" cy="200" r="5" fill="#fff" stroke="#0a8f5e" stroke-width="1.8"/><text x="346" y="188" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">citocromo b6f</text><circle cx="406" cy="173" r="5" fill="#fff" stroke="#0a8f5e" stroke-width="1.8"/><text x="406" y="161" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">plastocianina</text><circle cx="454" cy="165" r="5" fill="#fff" stroke="#0a8f5e" stroke-width="1.8"/><text x="454" y="140" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">PSI</text><text x="454" y="153" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">P700</text><circle cx="562" cy="280" r="5" fill="#fff" stroke="#0a8f5e" stroke-width="1.8"/><text x="562" y="300" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">ferredoxina</text><circle cx="628" cy="242" r="5" fill="#fff" stroke="#0a8f5e" stroke-width="1.8"/><text x="628" y="262" font-size="10.5" text-anchor="middle" fill="#333333" font-weight="600">NADPH</text><text x="114" y="154" font-size="10" text-anchor="middle" fill="#0083cb" font-weight="600">fotólise:</text><text x="114" y="166" font-size="10" text-anchor="middle" fill="#0083cb" font-weight="600">libera O2</text><text x="20" y="356" font-size="11.5" text-anchor="start" fill="#5c5c66">Sem a luz, os elétrons não subiriam da água (+0,82 V) ate o NADPH (-0,32 V).</text><text x="20" y="374" font-size="11.5" text-anchor="start" fill="#5c5c66">Na descida entre os dois fotossistemas, a energia bombeia prótons e gera ATP (fotofosforilação).</text><text x="20" y="392" font-size="11.5" text-anchor="start" fill="#0083cb" font-weight="600">O oxigênio que respiramos vem da água, e não do CO2.</text></svg>
O caminho dos elétrons da água até o NADPH, com dois impulsos dados pela luz.

Os pigmentos (clorofilas a e b, carotenoides) absorvem luz principalmente no azul (cerca de 430 a 450 nm) e no vermelho (cerca de 640 a 680 nm), refletindo o verde, daí a cor das plantas. Os carotenoides ampliam a faixa absorvida e protegem contra o excesso de energia.

O fluxo de elétrons, conhecido como **esquema Z**, é o seguinte:

1. O **fotossistema II** (P680) é excitado pela luz e oxida a água (**fotólise**), liberando \(\ce{O2}\), prótons e elétrons.
2. Os elétrons passam por uma cadeia transportadora (plastoquinona, complexo citocromo b₆f, plastocianina), bombeando prótons para o interior do tilacoide.
3. O **fotossistema I** (P700), também excitado pela luz, eleva os elétrons a um potencial ainda maior, até a ferredoxina, que reduz o \(\ce{NADP+}\) a **NADPH**.
4. O gradiente de prótons move uma **ATP-sintase**, idêntica em princípio à mitocondrial (tema 107): é a **fotofosforilação**.

Há também um fluxo **cíclico**, em torno do fotossistema I, que produz apenas ATP, sem NADPH, ajustando a proporção entre os dois conforme a necessidade.

## Fase bioquímica: o ciclo de Calvin

Usa o ATP e o NADPH para fixar \(\ce{CO2}\), em três etapas:

1. **Carboxilação:** a **rubisco** (ribulose-1,5-bifosfato carboxilase/oxigenase) une \(\ce{CO2}\) à ribulose-1,5-bifosfato, formando duas moléculas de 3-fosfoglicerato (três carbonos, daí o nome **plantas C3**). A rubisco é a proteína mais abundante da biosfera, mas é lenta (poucas reações por segundo) e pouco específica, o que as plantas compensam produzindo-a em enormes quantidades.
2. **Redução:** o 3-fosfoglicerato é convertido em gliceraldeído-3-fosfato, com gasto de ATP e NADPH.
3. **Regeneração:** a maior parte do gliceraldeído-3-fosfato é reorganizada para regenerar a ribulose-1,5-bifosfato, num conjunto de reações semelhante à fase não oxidativa das pentoses (tema 108).

**Custo:** 3 ATP e 2 NADPH por \(\ce{CO2}\) fixado; 18 ATP e 12 NADPH por hexose.

O ciclo é regulado pela luz de forma indireta e elegante: a iluminação alcaliniza o estroma, aumenta o \(\ce{Mg^{2+}}\) e reduz grupos tióis de enzimas por meio da tiorredoxina, ativando várias enzimas do ciclo. Assim, a planta não gasta ATP fixando carbono no escuro.

## Fotorrespiração

A rubisco também aceita **\(\ce{O2}\)** no lugar do \(\ce{CO2}\). Quando isso ocorre, forma-se 2-fosfoglicolato, um composto inútil que precisa ser recuperado por uma rota que envolve cloroplasto, peroxissomo e mitocôndria, consome ATP e **libera \(\ce{CO2}\)** já fixado.

A fotorrespiração é provavelmente um resquício evolutivo de quando a atmosfera tinha pouco oxigênio. Ela se agrava em **dias quentes e secos**, porque a planta fecha os estômatos para economizar água, o \(\ce{CO2}\) interno cai e o \(\ce{O2}\) se acumula. Pode consumir de 20% a 30% do carbono fixado, e por isso é um alvo clássico do melhoramento e da engenharia genética: rotas sintéticas de "atalho" para o glicolato já aumentaram a produtividade de tabaco em campo em mais de 20%.

## Adaptações C4 e CAM

<svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>C3, C4 e CAM</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="24" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">C3, C4 e CAM: tres maneiras de lidar com a fotorrespiração</text><rect x="20" y="50" width="226" height="196" rx="10" fill="#fff" stroke="#0083cb" stroke-width="1.6"/><rect x="20" y="50" width="226" height="32" rx="10" fill="#0083cb" stroke="#0083cb" stroke-width="1.6"/><text x="133" y="71" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">C3</text><text x="133" y="104" font-size="10.5" text-anchor="middle" fill="#333333">rubisco fixa o CO2</text><text x="133" y="120" font-size="10.5" text-anchor="middle" fill="#333333">direto no ciclo de Calvin</text><text x="133" y="136" font-size="10.5" text-anchor="middle" fill="#333333"></text><text x="133" y="152" font-size="10.5" text-anchor="middle" fill="#5c5c66">em calor e seca, o estômato</text><text x="133" y="168" font-size="10.5" text-anchor="middle" fill="#5c5c66">fecha, o O2 sobe e a rubisco</text><text x="133" y="184" font-size="10.5" text-anchor="middle" fill="#5c5c66">desperdiça carbono</text><text x="133" y="230" font-size="10.5" text-anchor="middle" fill="#0083cb" font-weight="700">arroz, trigo, soja, eucalipto</text><rect x="266" y="50" width="226" height="196" rx="10" fill="#fff" stroke="#0a8f5e" stroke-width="1.6"/><rect x="266" y="50" width="226" height="32" rx="10" fill="#0a8f5e" stroke="#0a8f5e" stroke-width="1.6"/><text x="379" y="71" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">C4</text><text x="379" y="104" font-size="10.5" text-anchor="middle" fill="#333333">PEP carboxilase fixa primeiro,</text><text x="379" y="120" font-size="10.5" text-anchor="middle" fill="#333333">no mesofilo; o CO2 e levado</text><text x="379" y="136" font-size="10.5" text-anchor="middle" fill="#333333">a bainha vascular</text><text x="379" y="152" font-size="10.5" text-anchor="middle" fill="#5c5c66"></text><text x="379" y="168" font-size="10.5" text-anchor="middle" fill="#5c5c66">separação no espaço:</text><text x="379" y="184" font-size="10.5" text-anchor="middle" fill="#5c5c66">a rubisco trabalha concentrada</text><text x="379" y="230" font-size="10.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">cana, milho, sorgo</text><rect x="512" y="50" width="226" height="196" rx="10" fill="#fff" stroke="#a300bc" stroke-width="1.6"/><rect x="512" y="50" width="226" height="32" rx="10" fill="#a300bc" stroke="#a300bc" stroke-width="1.6"/><text x="625" y="71" font-size="14" text-anchor="middle" fill="#fff" font-weight="700">CAM</text><text x="625" y="104" font-size="10.5" text-anchor="middle" fill="#333333">estômatos abrem a noite</text><text x="625" y="120" font-size="10.5" text-anchor="middle" fill="#333333">e o carbono fica guardado</text><text x="625" y="136" font-size="10.5" text-anchor="middle" fill="#333333">como malato no vacúolo</text><text x="625" y="152" font-size="10.5" text-anchor="middle" fill="#5c5c66"></text><text x="625" y="168" font-size="10.5" text-anchor="middle" fill="#5c5c66">separação no tempo:</text><text x="625" y="184" font-size="10.5" text-anchor="middle" fill="#5c5c66">de dia o estômato fica fechado</text><text x="625" y="230" font-size="10.5" text-anchor="middle" fill="#a300bc" font-weight="700">abacaxi, cactos, agave</text><text x="20" y="272" font-size="11" text-anchor="start" fill="#5c5c66">A PEP carboxilase não aceita oxigênio. Por isso C4 e CAM praticamente eliminam a fotorrespiração,</text><text x="20" y="288" font-size="11" text-anchor="start" fill="#5c5c66">ao custo de 2 ATP extras por CO2. Em clima quente e luminoso, o investimento compensa.</text></svg>
Como C4 e CAM concentram CO2 junto à rubisco e evitam a fotorrespiração.

| | C3 | C4 | CAM |
|---|---|---|---|
| Primeira fixação | rubisco | **PEP carboxilase** | PEP carboxilase |
| Separação | nenhuma | **espacial** (mesofilo e bainha vascular) | **temporal** (noite e dia) |
| Fotorrespiração | alta em calor | baixa | baixa |
| Eficiência no uso da água | menor | intermediária | **muito alta** |
| Exemplos | arroz, trigo, soja, feijão, eucalipto | **cana, milho, sorgo**, capins tropicais | abacaxi, cactos, agave, orquídeas |

A chave das duas estratégias é a **PEP carboxilase**, que fixa o \(\ce{HCO3^-}\) e **não tem afinidade pelo oxigênio**. Nas plantas **C4**, o carbono é fixado no mesofilo, transportado como malato ou aspartato até as células da bainha vascular e ali liberado como \(\ce{CO2}\) junto à rubisco, criando uma concentração local alta que praticamente elimina a fotorrespiração. Custa 2 ATP extras por \(\ce{CO2}\), investimento que compensa em clima quente e luminoso. Não por acaso, a cana e o milho, duas das maiores culturas brasileiras, são C4 e estão entre as mais produtivas do mundo.

Nas plantas **CAM**, os estômatos abrem à **noite**, quando a perda de água é menor, e o carbono é estocado como malato no vacúolo; durante o dia, com os estômatos fechados, o malato libera \(\ce{CO2}\) para o ciclo de Calvin.

## Metabolismo secundário

Além do metabolismo primário (comum a todos os organismos), as plantas produzem dezenas de milhares de compostos que não são essenciais ao crescimento, mas à **interação com o ambiente**: defesa contra herbívoros e patógenos, proteção contra radiação UV, atração de polinizadores e dispersores, alelopatia. Muitos desses compostos são de enorme valor econômico.

**Rota dos fenilpropanoides.** Parte da fenilalanina, pela enzima PAL, e origina:

- **lignina**, o segundo polímero mais abundante da Terra, que dá rigidez à madeira e é o principal obstáculo ao aproveitamento da lignocelulose (tema 112);
- **flavonoides e antocianinas**, pigmentos e antioxidantes;
- **taninos**, **cumarinas** e o **ácido salicílico**, sinalizador de defesa.

**Terpenoides (isoprenoides).** Montados a partir de unidades de cinco carbonos (IPP e DMAPP), por duas rotas distintas: a do mevalonato (citosol) e a MEP (plastídio). Incluem monoterpenos de óleos essenciais (mentol, limoneno), sesquiterpenos (**artemisinina**, antimalárico), diterpenos (**paclitaxel**, antitumoral), carotenoides, esteróis e a borracha natural. O gênero *Eucalyptus* é notável pelos óleos essenciais ricos em 1,8-cineol.

**Alcaloides.** Compostos nitrogenados derivados de aminoácidos, com forte atividade biológica: cafeína, nicotina, morfina, quinina, atropina, vincristina, capsaicina.

**Importância prática:** cerca de um quarto dos medicamentos prescritos tem origem vegetal direta ou indireta. Como muitos desses compostos têm estruturas complexas e ocorrem em baixa concentração, as alternativas são a cultura de células e raízes transformadas (tema 103) e a **biologia sintética**, transferindo as rotas para leveduras. A produção de **ácido artemisínico** em *S. cerevisiae*, desenvolvida pelo grupo de Jay Keasling, é o caso emblemático dessa estratégia.

## Microalgas e fotobiorreatores

Microalgas e cianobactérias fazem fotossíntese com eficiência superior à das plantas superiores e são cultivadas em **tanques abertos** (lagoas de alta taxa, mais baratos e sujeitos a contaminação) ou em **fotobiorreatores** fechados (tubulares ou de painel, mais caros e controlados). Produzem biomassa para ração, pigmentos de alto valor (astaxantina de *Haematococcus*, ficocianina de *Spirulina*), ômega-3 e lipídios para biodiesel, além de atuarem na captura de \(\ce{CO2}\) e no tratamento de efluentes. Os desafios de projeto são a **penetração de luz** (a cultura se autossombreia à medida que fica densa), a remoção do oxigênio produzido e o custo da colheita de células pequenas e diluídas.

> **Atenção, erros comuns:**
> Dizer que o \(\ce{O2}\) liberado vem do \(\ce{CO2}\).
> Chamar as fases de "clara" e "escura" como se a segunda ocorresse à noite: ela depende do ATP e do NADPH produzidos na luz.
> Confundir fotorrespiração (rubisco oxigenando) com respiração mitocondrial.

## Para fixar

- Fase fotoquímica: fotólise da água, esquema Z, ATP e NADPH. Fase bioquímica: ciclo de Calvin, 3 ATP e 2 NADPH por \(\ce{CO2}\).
- A rubisco também oxigena, causando fotorrespiração; C4 e CAM concentram \(\ce{CO2}\) e a evitam.
- O metabolismo secundário (fenilpropanoides, terpenoides, alcaloides) dá origem a fármacos, aromas, pigmentos e à lignina.
`,
  referencias: [
    "TAIZ, L.; ZEIGER, E.; MØLLER, I. M.; MURPHY, A. **Fisiologia e desenvolvimento vegetal**. 6. ed. Porto Alegre: Artmed, 2017.",
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019. Cap. 19 e 20.",
    "BUCHANAN, B. B.; GRUISSEM, W.; JONES, R. L. **Biochemistry and molecular biology of plants**. 2. ed. Chichester: Wiley-Blackwell, 2015.",
    "RO, D.-K. et al. Production of the antimalarial drug precursor artemisinic acid in engineered yeast. **Nature**, v. 440, p. 940-943, 2006.",
  ],
}
);
