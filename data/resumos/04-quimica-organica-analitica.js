/* BIONEXO — Resumos · Áreas 4 e 5: Química Orgânica (temas 15–17) e Química Analítica (temas 18–20) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r15", num: 15,
  area: "Química Orgânica Básica e Experimental",
  disciplina: "Química Orgânica Básica",
  titulo: "Funções orgânicas",
  descricao: "Como reconhecer álcoois, aldeídos, cetonas, ácidos, ésteres, aminas e amidas, o que muda nas suas propriedades e por que isso importa para os produtos da biotecnologia.",
  tags: ["função orgânica", "grupo funcional", "álcool", "aldeído", "cetona", "ácido carboxílico", "éster", "amina", "amida", "nomenclatura"],
  conteudo: String.raw`
## A ideia de grupo funcional

O carbono consegue fazer quatro ligações e se ligar a outros carbonos formando cadeias longas e estáveis. Por isso existem milhões de compostos orgânicos. Para não se perder, a química orgânica os organiza pelo **grupo funcional**: um pequeno conjunto de átomos que determina como a molécula reage. Duas moléculas com o mesmo grupo funcional tendem a se comportar de maneira parecida, mesmo que o resto delas seja bem diferente. Reconhecer o grupo funcional é o primeiro passo para prever propriedades e escolher como separar ou purificar um composto.

## As principais funções

<svg viewBox="0 0 760 548" xmlns="http://www.w3.org/2000/svg" role="img"><title>Funções orgânicas</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="14" text-anchor="start" fill="#333333" font-weight="700">As principais funções orgânicas</text><text x="20" y="46" font-size="11.5" text-anchor="start" fill="#5c5c66">O R representa o resto da molécula. O grupo funcional, em destaque, e o que define a função.</text><rect x="20" y="62" width="180" height="142" rx="10" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><rect x="20" y="62" width="180" height="26" rx="10" fill="#f40086" stroke="#f40086" stroke-width="1.2"/><rect x="20" y="78" width="180" height="10" rx="0" fill="#f40086" stroke="none" stroke-width="0"/><text x="110" y="80" font-size="11.8" text-anchor="middle" fill="#fff" font-weight="700">álcool</text><line x1="48" y1="145" x2="67" y2="156" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="67" y1="156" x2="86" y2="145" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="86" y1="145" x2="103" y2="134" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="100.7" y="123.7" width="22.6" height="18.6" fill="#fff" stroke="none"/><text x="112" y="138.4" font-size="15" text-anchor="middle" fill="#f40086" font-weight="700">OH</text><text x="110" y="180" font-size="12" text-anchor="middle" fill="#f40086" font-weight="700">R-OH</text><text x="110" y="196" font-size="9.6" text-anchor="middle" fill="#5c5c66">etanol, glicerol</text><rect x="206" y="62" width="180" height="142" rx="10" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><rect x="206" y="62" width="180" height="26" rx="10" fill="#f40086" stroke="#f40086" stroke-width="1.2"/><rect x="206" y="78" width="180" height="10" rx="0" fill="#f40086" stroke="none" stroke-width="0"/><text x="296" y="80" font-size="11.8" text-anchor="middle" fill="#fff" font-weight="700">fenol</text><line x1="268" y1="128" x2="287.053" y2="139" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="287.053" y1="139" x2="287.053" y2="161" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="287.053" y1="161" x2="268" y2="172" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="268" y1="172" x2="248.947" y2="161" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="248.947" y1="161" x2="248.947" y2="139" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="248.947" y1="139" x2="268" y2="128" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><circle cx="268" cy="150" r="12.32" fill="none" stroke="#2b2b33" stroke-width="1.6"/><line x1="268" y1="128" x2="268" y2="112" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="256.7" y="94.7" width="22.6" height="18.6" fill="#fff" stroke="none"/><text x="268" y="109.4" font-size="15" text-anchor="middle" fill="#f40086" font-weight="700">OH</text><text x="296" y="180" font-size="12" text-anchor="middle" fill="#f40086" font-weight="700">Ar-OH</text><text x="296" y="196" font-size="9.6" text-anchor="middle" fill="#5c5c66">timol, lignina</text><rect x="392" y="62" width="180" height="142" rx="10" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><rect x="392" y="62" width="180" height="26" rx="10" fill="#0083cb" stroke="#0083cb" stroke-width="1.2"/><rect x="392" y="78" width="180" height="10" rx="0" fill="#0083cb" stroke="none" stroke-width="0"/><text x="482" y="80" font-size="11.8" text-anchor="middle" fill="#fff" font-weight="700">éter</text><line x1="414" y1="143" x2="433" y2="154" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="478" y1="143" x2="497" y2="154" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="433" y1="154" x2="458" y2="154" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="458" y1="154" x2="478" y2="143" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="451.35" y="144.7" width="13.3" height="18.6" fill="#fff" stroke="none"/><text x="458" y="159.4" font-size="15" text-anchor="middle" fill="#0083cb" font-weight="700">O</text><text x="482" y="180" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">R-O-R</text><text x="482" y="196" font-size="9.6" text-anchor="middle" fill="#5c5c66">éter etilico</text><rect x="578" y="62" width="180" height="142" rx="10" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><rect x="578" y="62" width="180" height="26" rx="10" fill="#a300bc" stroke="#a300bc" stroke-width="1.2"/><rect x="578" y="78" width="180" height="10" rx="0" fill="#a300bc" stroke="none" stroke-width="0"/><text x="668" y="80" font-size="11.8" text-anchor="middle" fill="#fff" font-weight="700">aldeído</text><line x1="604" y1="145" x2="623" y2="156" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="623" y1="156" x2="642" y2="145" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="645" y1="145" x2="645" y2="123" stroke="#a300bc" stroke-width="1.9" stroke-linecap="round"/><line x1="639" y1="145" x2="639" y2="123" stroke="#a300bc" stroke-width="1.9" stroke-linecap="round"/><rect x="635.35" y="105.7" width="13.3" height="18.6" fill="#fff" stroke="none"/><text x="642" y="120.4" font-size="15" text-anchor="middle" fill="#a300bc" font-weight="700">O</text><line x1="642" y1="145" x2="660" y2="156" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="661.35" y="147.7" width="13.3" height="18.6" fill="#fff" stroke="none"/><text x="668" y="162.4" font-size="15" text-anchor="middle" fill="#a300bc" font-weight="700">H</text><text x="668" y="180" font-size="12" text-anchor="middle" fill="#a300bc" font-weight="700">R-CHO</text><text x="668" y="196" font-size="9.6" text-anchor="middle" fill="#5c5c66">formol, glicose</text><rect x="20" y="210" width="180" height="142" rx="10" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><rect x="20" y="210" width="180" height="26" rx="10" fill="#a300bc" stroke="#a300bc" stroke-width="1.2"/><rect x="20" y="226" width="180" height="10" rx="0" fill="#a300bc" stroke="none" stroke-width="0"/><text x="110" y="228" font-size="11.8" text-anchor="middle" fill="#fff" font-weight="700">cetona</text><line x1="40" y1="293" x2="59" y2="304" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="59" y1="304" x2="78" y2="293" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="78" y1="293" x2="97" y2="304" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="97" y1="304" x2="116" y2="293" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="81" y1="293" x2="81" y2="271" stroke="#a300bc" stroke-width="1.9" stroke-linecap="round"/><line x1="75" y1="293" x2="75" y2="271" stroke="#a300bc" stroke-width="1.9" stroke-linecap="round"/><rect x="71.35" y="253.7" width="13.3" height="18.6" fill="#fff" stroke="none"/><text x="78" y="268.4" font-size="15" text-anchor="middle" fill="#a300bc" font-weight="700">O</text><text x="110" y="328" font-size="12" text-anchor="middle" fill="#a300bc" font-weight="700">R-CO-R</text><text x="110" y="344" font-size="9.6" text-anchor="middle" fill="#5c5c66">acetona, frutose</text><rect x="206" y="210" width="180" height="142" rx="10" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><rect x="206" y="210" width="180" height="26" rx="10" fill="#d33a4e" stroke="#d33a4e" stroke-width="1.2"/><rect x="206" y="226" width="180" height="10" rx="0" fill="#d33a4e" stroke="none" stroke-width="0"/><text x="296" y="228" font-size="11.8" text-anchor="middle" fill="#fff" font-weight="700">ácido carboxílico</text><line x1="228" y1="293" x2="247" y2="304" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="247" y1="304" x2="266" y2="293" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="269" y1="293" x2="269" y2="271" stroke="#d33a4e" stroke-width="1.9" stroke-linecap="round"/><line x1="263" y1="293" x2="263" y2="271" stroke="#d33a4e" stroke-width="1.9" stroke-linecap="round"/><rect x="259.35" y="253.7" width="13.3" height="18.6" fill="#fff" stroke="none"/><text x="266" y="268.4" font-size="15" text-anchor="middle" fill="#d33a4e" font-weight="700">O</text><line x1="266" y1="293" x2="284" y2="304" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="284.7" y="295.7" width="22.6" height="18.6" fill="#fff" stroke="none"/><text x="296" y="310.4" font-size="15" text-anchor="middle" fill="#d33a4e" font-weight="700">OH</text><text x="296" y="328" font-size="12" text-anchor="middle" fill="#d33a4e" font-weight="700">R-COOH</text><text x="296" y="344" font-size="9.6" text-anchor="middle" fill="#5c5c66">acético, láctico, cítrico</text><rect x="392" y="210" width="180" height="142" rx="10" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><rect x="392" y="210" width="180" height="26" rx="10" fill="#0a8f5e" stroke="#0a8f5e" stroke-width="1.2"/><rect x="392" y="226" width="180" height="10" rx="0" fill="#0a8f5e" stroke="none" stroke-width="0"/><text x="482" y="228" font-size="11.8" text-anchor="middle" fill="#fff" font-weight="700">éster</text><line x1="408" y1="285" x2="427" y2="296" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="430" y1="296" x2="430" y2="274" stroke="#0a8f5e" stroke-width="1.9" stroke-linecap="round"/><line x1="424" y1="296" x2="424" y2="274" stroke="#0a8f5e" stroke-width="1.9" stroke-linecap="round"/><rect x="420.35" y="256.7" width="13.3" height="18.6" fill="#fff" stroke="none"/><text x="427" y="271.4" font-size="15" text-anchor="middle" fill="#0a8f5e" font-weight="700">O</text><line x1="427" y1="296" x2="447" y2="308" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="448.35" y="299.7" width="13.3" height="18.6" fill="#fff" stroke="none"/><text x="455" y="314.4" font-size="15" text-anchor="middle" fill="#0a8f5e" font-weight="700">O</text><line x1="463" y1="309" x2="481" y2="298" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="481" y1="298" x2="499" y2="309" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><text x="482" y="328" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="700">R-COO-R</text><text x="482" y="344" font-size="9.6" text-anchor="middle" fill="#5c5c66">biodiesel, aromas, lipídios</text><rect x="578" y="210" width="180" height="142" rx="10" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><rect x="578" y="210" width="180" height="26" rx="10" fill="#c67600" stroke="#c67600" stroke-width="1.2"/><rect x="578" y="226" width="180" height="10" rx="0" fill="#c67600" stroke="none" stroke-width="0"/><text x="668" y="228" font-size="11.8" text-anchor="middle" fill="#fff" font-weight="700">amina</text><line x1="608" y1="293" x2="627" y2="304" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="627" y1="304" x2="646" y2="293" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="646" y1="293" x2="663" y2="282" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="658.05" y="271.7" width="31.9" height="18.6" fill="#fff" stroke="none"/><text x="674" y="286.4" font-size="15" text-anchor="middle" fill="#c67600" font-weight="700">NH2</text><text x="668" y="328" font-size="12" text-anchor="middle" fill="#c67600" font-weight="700">R-NH2</text><text x="668" y="344" font-size="9.6" text-anchor="middle" fill="#5c5c66">aminoácidos, alcaloides</text><rect x="20" y="358" width="180" height="142" rx="10" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><rect x="20" y="358" width="180" height="26" rx="10" fill="#c67600" stroke="#c67600" stroke-width="1.2"/><rect x="20" y="374" width="180" height="10" rx="0" fill="#c67600" stroke="none" stroke-width="0"/><text x="110" y="376" font-size="11.8" text-anchor="middle" fill="#fff" font-weight="700">amida</text><line x1="34" y1="427" x2="53" y2="438" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="56" y1="438" x2="56" y2="416" stroke="#c67600" stroke-width="1.9" stroke-linecap="round"/><line x1="50" y1="438" x2="50" y2="416" stroke="#c67600" stroke-width="1.9" stroke-linecap="round"/><rect x="46.35" y="398.7" width="13.3" height="18.6" fill="#fff" stroke="none"/><text x="53" y="413.4" font-size="15" text-anchor="middle" fill="#c67600" font-weight="700">O</text><line x1="53" y1="438" x2="73" y2="450" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="79.05" y="442.7" width="31.9" height="18.6" fill="#fff" stroke="none"/><text x="95" y="457.4" font-size="15" text-anchor="middle" fill="#c67600" font-weight="700">NH2</text><text x="110" y="476" font-size="12" text-anchor="middle" fill="#c67600" font-weight="700">R-CONH2</text><text x="110" y="492" font-size="9.6" text-anchor="middle" fill="#5c5c66">ligação peptídica, ureia</text><rect x="206" y="358" width="180" height="142" rx="10" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><rect x="206" y="358" width="180" height="26" rx="10" fill="#8a8a93" stroke="#8a8a93" stroke-width="1.2"/><rect x="206" y="374" width="180" height="10" rx="0" fill="#8a8a93" stroke="none" stroke-width="0"/><text x="296" y="376" font-size="11.8" text-anchor="middle" fill="#fff" font-weight="700">haleto orgânico</text><line x1="236" y1="441" x2="255" y2="452" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="255" y1="452" x2="274" y2="441" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="274" y1="441" x2="291" y2="430" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="288.7" y="419.7" width="22.6" height="18.6" fill="#fff" stroke="none"/><text x="300" y="434.4" font-size="15" text-anchor="middle" fill="#8a8a93" font-weight="700">Cl</text><text x="296" y="476" font-size="12" text-anchor="middle" fill="#8a8a93" font-weight="700">R-X</text><text x="296" y="492" font-size="9.6" text-anchor="middle" fill="#5c5c66">clorofórmio, solventes</text><rect x="392" y="358" width="180" height="142" rx="10" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><rect x="392" y="358" width="180" height="26" rx="10" fill="#0083cb" stroke="#0083cb" stroke-width="1.2"/><rect x="392" y="374" width="180" height="10" rx="0" fill="#0083cb" stroke="none" stroke-width="0"/><text x="482" y="376" font-size="11.8" text-anchor="middle" fill="#fff" font-weight="700">nitrila</text><line x1="424" y1="439" x2="443" y2="450" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="443" y1="450" x2="462" y2="439" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="462" y1="439" x2="476" y2="430" stroke="#0083cb" stroke-width="1.9" stroke-linecap="round"/><line x1="464" y1="442" x2="478" y2="433" stroke="#0083cb" stroke-width="1.9" stroke-linecap="round"/><line x1="460" y1="436" x2="474" y2="427" stroke="#0083cb" stroke-width="1.9" stroke-linecap="round"/><rect x="481.35" y="415.7" width="13.3" height="18.6" fill="#fff" stroke="none"/><text x="488" y="430.4" font-size="15" text-anchor="middle" fill="#0083cb" font-weight="700">N</text><text x="482" y="476" font-size="12" text-anchor="middle" fill="#0083cb" font-weight="700">R-CN</text><text x="482" y="492" font-size="9.6" text-anchor="middle" fill="#5c5c66">acrilonitrila</text><rect x="578" y="358" width="180" height="142" rx="10" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><rect x="578" y="358" width="180" height="26" rx="10" fill="#0a8f5e" stroke="#0a8f5e" stroke-width="1.2"/><rect x="578" y="374" width="180" height="10" rx="0" fill="#0a8f5e" stroke="none" stroke-width="0"/><text x="668" y="376" font-size="11.8" text-anchor="middle" fill="#fff" font-weight="700">tiol</text><line x1="608" y1="441" x2="627" y2="452" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="627" y1="452" x2="646" y2="441" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="646" y1="441" x2="663" y2="430" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="660.7" y="419.7" width="22.6" height="18.6" fill="#fff" stroke="none"/><text x="672" y="434.4" font-size="15" text-anchor="middle" fill="#0a8f5e" font-weight="700">SH</text><text x="668" y="476" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="700">R-SH</text><text x="668" y="492" font-size="9.6" text-anchor="middle" fill="#5c5c66">cisteína</text><text x="20" y="534" font-size="11" text-anchor="start" fill="#5c5c66">Nas linhas em zigue-zague, cada vértice e um carbono e os hidrogênios ficam subentendidos.</text></svg>
Cada grupo funcional tem uma estrutura característica, e é ela que determina o comportamento químico.

| Função | Grupo | Terminação no nome | Exemplo | Onde aparece |
|---|---|---|---|---|
| Álcool | OH ligado a carbono saturado (\(\ce{R-OH}\)) | -ol | etanol | fermentação alcoólica; açúcares |
| Fenol | OH ligado diretamente a um anel aromático | -ol (fenol) | fenol | antissépticos; lignina da madeira |
| Éter | oxigênio entre dois carbonos (\(\ce{R-O-R'}\)) | (oxi) | metoximetano | solventes |
| Aldeído | carbonila na ponta da cadeia (\(\ce{R-CHO}\)) | -al | etanal | glicose (na forma aberta) |
| Cetona | carbonila no meio da cadeia (\(\ce{R-CO-R'}\)) | -ona | propanona (acetona) | frutose; fermentação acetona-butanol-etanol |
| Ácido carboxílico | \(\ce{R-COOH}\) | ácido ...-oico | ácido etanoico (acético) | vinagre; ácidos láctico e cítrico |
| Éster | \(\ce{R-COO-R'}\) | ...-ato de ...-ila | etanoato de etila | aromas; óleos e gorduras; biodiesel |
| Amina | \(\ce{R-NH2}\) | -amina | metilamina | aminoácidos; neurotransmissores |
| Amida | \(\ce{R-CO-NH2}\) | -amida | etanamida | **ligação peptídica** das proteínas |

Os hidrocarbonetos (alcanos, alcenos, alcinos e aromáticos) formam o "esqueleto" das moléculas, sem grupos com oxigênio ou nitrogênio.

## O grupo funcional muda as propriedades físicas

Grupos que conseguem fazer **ligações de hidrogênio** (OH, NH e COOH) aumentam o ponto de ebulição e a solubilidade em água (tema 11). Para moléculas de tamanho parecido, a ordem do ponto de ebulição costuma ser:

\[ \text{ácido carboxílico} \gt \text{álcool} \gt \text{aldeído e cetona} \gt \text{éter} \gt \text{alcano} \]

Um exemplo marcante: o etanol e o metoximetano têm a mesma fórmula, \(\ce{C2H6O}\). O etanol ferve a 78 °C; o éter, a cerca de −24 °C. A diferença está no grupo OH do álcool, que faz ligações de hidrogênio entre as moléculas.

Já as cadeias de carbono longas deixam a molécula mais **hidrofóbica** (com pouca afinidade pela água). O metanol se mistura com água em qualquer proporção; o octanol, com oito carbonos, quase não se dissolve.

## Quem é ácido e quem é básico

- **Ácidos carboxílicos** são ácidos fracos, mas bem mais fortes que os fenóis e muito mais fortes que os álcoois, porque o íon que se forma quando eles perdem o \(\ce{H+}\) (o carboxilato) é estabilizado por ressonância.
- **Aminas** são bases fracas: o par de elétrons do nitrogênio consegue capturar um \(\ce{H+}\).
- **Amidas** são praticamente neutras.

É por isso que, no pH do corpo, os aminoácidos existem com as duas cargas ao mesmo tempo: o grupo ácido perdeu o \(\ce{H+}\) (\(\ce{-COO-}\)) e o grupo amina ganhou um (\(\ce{-NH3+}\)). Essa forma se chama **zwitterion** (tema 27).

## Exemplo resolvido

Identifique as funções do ácido láctico, \(\ce{CH3-CH(OH)-COOH}\), e escreva o seu nome oficial.

- O grupo \(\ce{-COOH}\) é um **ácido carboxílico**. Como é a função principal, ele define a terminação do nome.
- O grupo \(\ce{-OH}\), ligado a um carbono que está preso a outros dois carbonos, é um **álcool** (secundário). No nome, ele aparece como o prefixo "hidroxi".

Nome: **ácido 2-hidroxipropanoico**. O ácido láctico é produzido por bactérias lácticas e é matéria-prima do **PLA**, um plástico biodegradável.

Outro exemplo: a glicose, em cadeia aberta, tem um grupo **aldeído** e cinco grupos **OH**; por isso é uma **aldo-hexose** (um açúcar com aldeído e seis carbonos). A frutose tem um grupo **cetona** no lugar do aldeído; é uma **ceto-hexose**.

> **Atenção, erros comuns:**
> Confundir aldeído (carbonila na **ponta** da cadeia, ligada a um H) com cetona (carbonila **entre** dois carbonos).
> Chamar de álcool um OH ligado diretamente a um anel aromático: é **fenol**, que é bem mais ácido.
> Confundir éster (\(\ce{-COO-}\)) com éter (\(\ce{-O-}\)).

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Grupos funcionais nas biomoleculas</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Os mesmos grupos, nas moléculas da vida</text><rect x="20" y="54" width="220" height="170" rx="10" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="130" y="76" font-size="12.5" text-anchor="middle" fill="#333333" font-weight="700">aminoácido</text><line x1="96" y1="140" x2="130" y2="140" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="130" y1="140" x2="160" y2="122" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="66.05" y="130.7" width="31.9" height="18.6" fill="#fff" stroke="none"/><text x="82" y="145.4" font-size="15" text-anchor="middle" fill="#c67600" font-weight="700">H2N</text><line x1="163" y1="122" x2="163" y2="100" stroke="#d33a4e" stroke-width="1.9" stroke-linecap="round"/><line x1="157" y1="122" x2="157" y2="100" stroke="#d33a4e" stroke-width="1.9" stroke-linecap="round"/><rect x="153.35" y="82.7" width="13.3" height="18.6" fill="#fff" stroke="none"/><text x="160" y="97.4" font-size="15" text-anchor="middle" fill="#d33a4e" font-weight="700">O</text><line x1="160" y1="122" x2="184" y2="134" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="184.7" y="125.7" width="22.6" height="18.6" fill="#fff" stroke="none"/><text x="196" y="140.4" font-size="15" text-anchor="middle" fill="#d33a4e" font-weight="700">OH</text><line x1="130" y1="140" x2="130" y2="166" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="123.35" y="164.7" width="13.3" height="18.6" fill="#fff" stroke="none"/><text x="130" y="179.4" font-size="15" text-anchor="middle" fill="#8a8a93" font-weight="700">R</text><text x="130" y="198" font-size="10.5" text-anchor="middle" fill="#5c5c66">amina + ácido carboxílico</text><text x="130" y="214" font-size="10.5" text-anchor="middle" fill="#5c5c66">e o R define o aminoácido</text><rect x="260" y="54" width="220" height="170" rx="10" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="76" font-size="12.5" text-anchor="middle" fill="#333333" font-weight="700">ligação peptídica</text><line x1="310" y1="152" x2="340" y2="140" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="343" y1="140" x2="343" y2="116" stroke="#c67600" stroke-width="1.9" stroke-linecap="round"/><line x1="337" y1="140" x2="337" y2="116" stroke="#c67600" stroke-width="1.9" stroke-linecap="round"/><rect x="333.35" y="98.7" width="13.3" height="18.6" fill="#fff" stroke="none"/><text x="340" y="113.4" font-size="15" text-anchor="middle" fill="#c67600" font-weight="700">O</text><line x1="340" y1="140" x2="368" y2="154" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="371.35" y="145.7" width="13.3" height="18.6" fill="#fff" stroke="none"/><text x="378" y="160.4" font-size="15" text-anchor="middle" fill="#c67600" font-weight="700">N</text><line x1="388" y1="155" x2="414" y2="142" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="330" y="120" width="66" height="54" rx="8" fill="none" stroke="#c67600" stroke-width="1.4" stroke-dasharray="4 3"/><text x="370" y="198" font-size="10.5" text-anchor="middle" fill="#c67600" font-weight="700">e uma amida</text><text x="370" y="214" font-size="10.5" text-anchor="middle" fill="#5c5c66">formada com saída de água</text><rect x="500" y="54" width="220" height="170" rx="10" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="610" y="76" font-size="12.5" text-anchor="middle" fill="#333333" font-weight="700">gordura</text><line x1="548" y1="112" x2="566" y2="112" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="567.35" y="103.7" width="13.3" height="18.6" fill="#fff" stroke="none"/><text x="574" y="118.4" font-size="15" text-anchor="middle" fill="#0a8f5e" font-weight="700">O</text><line x1="582" y1="112" x2="600" y2="112" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="601.536" y1="113.844" x2="613.536" y2="103.844" stroke="#0a8f5e" stroke-width="1.9" stroke-linecap="round"/><line x1="598.464" y1="110.156" x2="610.464" y2="100.156" stroke="#0a8f5e" stroke-width="1.9" stroke-linecap="round"/><rect x="610.28" y="88.56" width="11.44" height="14.88" fill="#fff" stroke="none"/><text x="616" y="100.32" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="700">O</text><line x1="612" y1="112" x2="628" y2="120" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="628" y1="120" x2="644" y2="112" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="644" y1="112" x2="660" y2="120" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="548" y1="138" x2="566" y2="138" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="567.35" y="129.7" width="13.3" height="18.6" fill="#fff" stroke="none"/><text x="574" y="144.4" font-size="15" text-anchor="middle" fill="#0a8f5e" font-weight="700">O</text><line x1="582" y1="138" x2="600" y2="138" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="601.536" y1="139.844" x2="613.536" y2="129.844" stroke="#0a8f5e" stroke-width="1.9" stroke-linecap="round"/><line x1="598.464" y1="136.156" x2="610.464" y2="126.156" stroke="#0a8f5e" stroke-width="1.9" stroke-linecap="round"/><rect x="610.28" y="114.56" width="11.44" height="14.88" fill="#fff" stroke="none"/><text x="616" y="126.32" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="700">O</text><line x1="612" y1="138" x2="628" y2="146" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="628" y1="146" x2="644" y2="138" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="644" y1="138" x2="660" y2="146" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="548" y1="164" x2="566" y2="164" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="567.35" y="155.7" width="13.3" height="18.6" fill="#fff" stroke="none"/><text x="574" y="170.4" font-size="15" text-anchor="middle" fill="#0a8f5e" font-weight="700">O</text><line x1="582" y1="164" x2="600" y2="164" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="601.536" y1="165.844" x2="613.536" y2="155.844" stroke="#0a8f5e" stroke-width="1.9" stroke-linecap="round"/><line x1="598.464" y1="162.156" x2="610.464" y2="152.156" stroke="#0a8f5e" stroke-width="1.9" stroke-linecap="round"/><rect x="610.28" y="140.56" width="11.44" height="14.88" fill="#fff" stroke="none"/><text x="616" y="152.32" font-size="12" text-anchor="middle" fill="#0a8f5e" font-weight="700">O</text><line x1="612" y1="164" x2="628" y2="172" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="628" y1="172" x2="644" y2="164" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="644" y1="164" x2="660" y2="172" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="548" y1="112" x2="548" y2="164" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><text x="534" y="142" font-size="10" text-anchor="end" fill="#8a8a93" font-weight="600">glicerol</text><text x="610" y="198" font-size="10.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">tres ésteres</text><text x="610" y="214" font-size="10.5" text-anchor="middle" fill="#5c5c66">de ácidos graxos com glicerol</text><text x="20" y="258" font-size="11.5" text-anchor="start" fill="#5c5c66">Reconhecer o grupo funcional antecipa a reatividade: o ácido doa próton, o éster hidrolisa,</text><text x="20" y="276" font-size="11.5" text-anchor="start" fill="#5c5c66">a amina aceita próton e o álcool e oxidado a aldeído e depois a ácido.</text></svg>
As moléculas da vida são combinações desses mesmos grupos.

## Na prática: os produtos da biotecnologia industrial

Os principais produtos de fermentação são compostos orgânicos com grupos funcionais bem definidos: etanol (álcool), ácidos acético, láctico e cítrico (ácidos carboxílicos), acetona e butanol (cetona e álcool), ésteres usados como aromas, e o biodiesel (ésteres de ácidos graxos). Conhecer o grupo funcional orienta a **separação e a purificação**: compostos voláteis, como o etanol, saem por destilação; ácidos podem ser separados por extração ou precipitação, ajustando o pH.
`,
  referencias: [
    "SOLOMONS, T. W. G.; FRYHLE, C. B. **Química orgânica**. v. 1. 10. ed. Rio de Janeiro: LTC, 2012.",
    "BRUICE, P. Y. **Química orgânica**. v. 1. 4. ed. São Paulo: Pearson Prentice Hall, 2006.",
    "McMURRY, J. **Química orgânica**. Combo. 7. ed. São Paulo: Cengage Learning, 2011.",
    "FAVRE, H. A.; POWELL, W. H. **Nomenclature of organic chemistry**: IUPAC recommendations and preferred names 2013. Cambridge: Royal Society of Chemistry, 2014.",
  ],
},
{
  id: "r16", num: 16,
  area: "Química Orgânica Básica e Experimental",
  disciplina: "Química Orgânica Básica",
  titulo: "Isomeria molecular",
  descricao: "Moléculas com a mesma fórmula e estruturas diferentes: isomeria plana, isomeria cis/trans e isomeria óptica, com exemplos que mostram por que isso importa para enzimas e medicamentos.",
  tags: ["isomeria", "isômero", "cis trans", "quiralidade", "carbono quiral", "enantiômero", "diastereoisômero", "isomeria óptica", "R/S"],
  conteudo: String.raw`
## O que são isômeros

**Isômeros** são substâncias com a **mesma fórmula molecular** (os mesmos átomos, nas mesmas quantidades), mas com **estruturas diferentes**. Como a estrutura muda, as propriedades também mudam. Às vezes a diferença é pequena; às vezes é a diferença entre um medicamento eficaz e um tóxico.

Os isômeros se dividem em dois grandes grupos: os que diferem na **ordem das ligações** (isomeria plana) e os que têm as mesmas ligações, mas diferem na **posição dos átomos no espaço** (isomeria espacial).

## Isomeria plana

Nesse caso, basta desenhar as moléculas no papel para ver a diferença.

| Tipo | O que muda | Exemplo |
|---|---|---|
| De cadeia | o formato da cadeia de carbonos | butano e metilpropano (\(\ce{C4H10}\)) |
| De posição | a posição de um grupo, de uma ligação dupla ou de uma ramificação | propan-1-ol e propan-2-ol |
| De função | a função orgânica | etanol (álcool) e metoximetano (éter), ambos \(\ce{C2H6O}\) |
| De compensação | a posição do oxigênio ou do nitrogênio no meio da cadeia | etoxietano e metoxipropano |
| Tautomeria | duas formas que se convertem uma na outra o tempo todo | forma ceto e forma enol |

A **tautomeria** aparece no metabolismo: na glicólise, a conversão entre di-hidroxiacetona-fosfato e gliceraldeído-3-fosfato passa por uma forma intermediária do tipo enol (tema 28).

## Isomeria geométrica (cis/trans)

Ocorre quando a molécula tem uma ligação dupla (ou um anel), que **impede a rotação**, **e** cada carbono da dupla tem **dois grupos diferentes** ligados a ele.

- Na forma **cis**, os grupos iguais (ou mais importantes) ficam do mesmo lado.
- Na forma **trans**, ficam em lados opostos.

Quando os quatro grupos são diferentes, usa-se a nomenclatura **E/Z**, baseada em regras de prioridade. Dois exemplos com consequências biológicas:

- O **ácido fumárico** (trans) e o **ácido maleico** (cis) têm a mesma fórmula. Só o fumarato participa do ciclo de Krebs, porque a enzima que trabalha com ele reconhece a sua forma espacial.
- Os ácidos graxos insaturados naturais são quase todos **cis**. A hidrogenação parcial de óleos, usada na indústria para fazer margarinas, gera **gorduras trans**, associadas a problemas cardiovasculares.

## Isomeria óptica

<svg viewBox="0 0 740 344" xmlns="http://www.w3.org/2000/svg" role="img"><title>Isomeria</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Mesma formula, moléculas diferentes</text><rect x="24" y="54" width="220" height="130" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="134" y="76" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">isomeria de cadeia</text><line x1="60" y1="123" x2="79" y2="134" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="79" y1="134" x2="98" y2="123" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="98" y1="123" x2="117" y2="134" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="150" y1="123" x2="169" y2="134" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="169" y1="134" x2="188" y2="123" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="169" y1="134" x2="169" y2="114" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><text x="134" y="166" font-size="9.6" text-anchor="middle" fill="#5c5c66">linear ou ramificada</text><rect x="260" y="54" width="220" height="130" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="76" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">isomeria de posicao</text><line x1="292" y1="119" x2="311" y2="130" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="311" y1="130" x2="330" y2="119" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="330" y1="119" x2="349" y2="130" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="266.7" y="109.7" width="22.6" height="18.6" fill="#fff" stroke="none"/><text x="278" y="124.4" font-size="15" text-anchor="middle" fill="#f40086" font-weight="700">OH</text><line x1="382" y1="119" x2="401" y2="130" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="401" y1="130" x2="420" y2="119" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="420" y1="119" x2="439" y2="130" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="401" y1="130" x2="401" y2="110" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><rect x="389.7" y="92.7" width="22.6" height="18.6" fill="#fff" stroke="none"/><text x="401" y="107.4" font-size="15" text-anchor="middle" fill="#f40086" font-weight="700">OH</text><text x="370" y="166" font-size="9.6" text-anchor="middle" fill="#5c5c66">o grupo muda de lugar</text><rect x="496" y="54" width="220" height="130" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="606" y="76" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">cis e trans</text><line x1="534" y1="127" x2="570" y2="127" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="534" y1="121" x2="570" y2="121" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="534" y1="124" x2="518" y2="108" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="570" y1="124" x2="586" y2="108" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><circle cx="518" cy="108" r="7" fill="#a300bc" stroke="#fff" stroke-width="1.4"/><circle cx="586" cy="108" r="7" fill="#a300bc" stroke="#fff" stroke-width="1.4"/><text x="552" y="162" font-size="10.5" text-anchor="middle" fill="#a300bc" font-weight="700">cis</text><line x1="642" y1="127" x2="678" y2="127" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="642" y1="121" x2="678" y2="121" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="642" y1="124" x2="626" y2="108" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><line x1="678" y1="124" x2="694" y2="140" stroke="#2b2b33" stroke-width="1.9" stroke-linecap="round"/><circle cx="626" cy="108" r="7" fill="#a300bc" stroke="#fff" stroke-width="1.4"/><circle cx="694" cy="140" r="7" fill="#a300bc" stroke="#fff" stroke-width="1.4"/><text x="660" y="162" font-size="10.5" text-anchor="middle" fill="#a300bc" font-weight="700">trans</text><text x="606" y="176" font-size="9.4" text-anchor="middle" fill="#5c5c66">a dupla ligação não gira</text><rect x="24" y="198" width="692" height="96" rx="8" fill="#fff" stroke="#f40086" stroke-width="1.4"/><text x="370" y="220" font-size="11.5" text-anchor="middle" fill="#f40086" font-weight="700">isomeria óptica: imagens especulares que não se sobrepoem</text><circle cx="250" cy="258" r="14" fill="#0083cb" stroke="#0083cb" stroke-width="1"/><line x1="250" y1="258" x2="222.287" y2="246" stroke="#2b2b33" stroke-width="1.8" stroke-linecap="round"/><circle cx="222.287" cy="246" r="9" fill="#0a8f5e" stroke="#fff" stroke-width="1.4"/><line x1="250" y1="258" x2="277.713" y2="246" stroke="#2b2b33" stroke-width="1.8" stroke-linecap="round"/><circle cx="277.713" cy="246" r="9" fill="#c67600" stroke="#fff" stroke-width="1.4"/><line x1="250" y1="258" x2="250" y2="282" stroke="#2b2b33" stroke-width="1.8" stroke-linecap="round"/><circle cx="250" cy="282" r="9" fill="#a300bc" stroke="#fff" stroke-width="1.4"/><line x1="250" y1="258" x2="222.287" y2="270" stroke="#2b2b33" stroke-width="1.8" stroke-linecap="round"/><circle cx="222.287" cy="270" r="9" fill="#8a8a93" stroke="#fff" stroke-width="1.4"/><circle cx="490" cy="258" r="14" fill="#0083cb" stroke="#0083cb" stroke-width="1"/><line x1="490" y1="258" x2="462.287" y2="246" stroke="#2b2b33" stroke-width="1.8" stroke-linecap="round"/><circle cx="462.287" cy="246" r="9" fill="#0a8f5e" stroke="#fff" stroke-width="1.4"/><line x1="490" y1="258" x2="517.713" y2="246" stroke="#2b2b33" stroke-width="1.8" stroke-linecap="round"/><circle cx="517.713" cy="246" r="9" fill="#c67600" stroke="#fff" stroke-width="1.4"/><line x1="490" y1="258" x2="490" y2="282" stroke="#2b2b33" stroke-width="1.8" stroke-linecap="round"/><circle cx="490" cy="282" r="9" fill="#a300bc" stroke="#fff" stroke-width="1.4"/><line x1="490" y1="258" x2="517.713" y2="270" stroke="#2b2b33" stroke-width="1.8" stroke-linecap="round"/><circle cx="517.713" cy="270" r="9" fill="#8a8a93" stroke="#fff" stroke-width="1.4"/><line x1="370" y1="226" x2="370" y2="288" stroke="#8a8a93" stroke-width="1.4" stroke-linecap="round" stroke-dasharray="4 4"/><text x="370" y="284" font-size="9" text-anchor="middle" fill="#8a8a93">espelho</text><text x="20" y="322" font-size="10.6" text-anchor="start" fill="#5c5c66">Enantiomeros tem as mesmas propriedades físicas, mas o corpo e as enzimas os distinguem: por isso os farmacos</text><text x="20" y="338" font-size="10.6" text-anchor="start" fill="#5c5c66">quirais precisam ser puros, e as lipases são usadas justamente para separa-los.</text></svg>
Os tipos de isomeria, da cadeia à quiralidade.

Um **carbono quiral** (ou assimétrico) é um carbono ligado a **quatro grupos diferentes**. Uma molécula com um carbono quiral **não pode ser sobreposta à sua imagem no espelho**, assim como a mão esquerda não se encaixa perfeitamente sobre a direita. As duas versões, imagem e reflexo, são os **enantiômeros**.

- Os enantiômeros têm as mesmas propriedades físicas (mesmo ponto de fusão, mesma solubilidade), **exceto** uma: desviam a luz polarizada para lados opostos. O que desvia para a direita é **dextrogiro** (+); o que desvia para a esquerda é **levogiro** (−).
- Uma mistura com quantidades iguais dos dois é chamada de **racêmica** e não desvia a luz.
- Uma molécula com \(n\) carbonos quirais diferentes pode ter até \(2^n\) isômeros espaciais. Os que não são imagem um do outro chamam-se **diastereoisômeros** e, ao contrário dos enantiômeros, têm propriedades físicas diferentes. Os compostos **meso** têm carbonos quirais, mas um plano de simetria interno, e não desviam a luz.

### Como nomear a configuração

- **R/S:** ordenam-se os quatro grupos por prioridade (pelo número atômico) e observa-se o sentido do giro de 1 para 2 para 3, com o grupo de menor prioridade voltado para trás. Horário é R; anti-horário é S.
- **D/L:** usada para açúcares e aminoácidos, por comparação com uma molécula de referência, o gliceraldeído, desenhada na projeção de Fischer.

**D/L e R/S não indicam para que lado a luz é desviada (+ ou −).** São informações independentes. A D-frutose, por exemplo, é levogira.

## Exemplo resolvido

**(a) Ácido láctico**, \(\ce{CH3-CH(OH)-COOH}\): o carbono 2 está ligado a H, OH, \(\ce{CH3}\) e COOH, quatro grupos diferentes. Há, então, \(2^1 = 2\) enantiômeros: o D- e o L-ácido láctico. Cada bactéria láctica produz um ou outro, conforme a enzima que possui, e a proporção entre eles define as propriedades do plástico PLA fabricado a partir desse ácido.

**(b) Glicose em cadeia aberta:** os carbonos 2, 3, 4 e 5 são quirais. Existem, portanto, \(2^4 = 16\) aldo-hexoses diferentes no espaço (8 da série D e 8 da série L). A glicose e a galactose diferem apenas no carbono 4: são diastereoisômeros, e o organismo as trata de forma diferente.

## Por que a quiralidade importa tanto

As enzimas e os receptores das células também são quirais. Eles reconhecem um enantiômero e ignoram o outro, como uma luva que só serve numa das mãos.

- As proteínas são formadas por aminoácidos da série **L** (a glicina é a exceção, por não ter carbono quiral). Os açúcares naturais são, em sua maioria, da série **D**.
- No ibuprofeno, o efeito anti-inflamatório vem principalmente do enantiômero (S).
- O caso da **talidomida**, em que um enantiômero tinha efeito sedativo e o outro causava malformações em bebês, mudou as regras de aprovação de medicamentos no mundo inteiro.

É por isso que a **biocatálise** (o uso de enzimas para fazer reações químicas) é tão valiosa na indústria farmacêutica: as enzimas produzem um único enantiômero com alta precisão.

> **Atenção, erros comuns:**
> Exigir isomeria cis/trans numa dupla em que um dos carbonos tem dois grupos iguais: nesse caso não há isomeria geométrica.
> Considerar quiral um carbono com ligação dupla ou com dois grupos iguais.
> Associar D com dextrogiro e L com levogiro.

## Para fixar

- Isomeria plana: as ligações são diferentes. Isomeria espacial: as ligações são as mesmas, mas a disposição no espaço muda.
- Cis/trans: exige rotação impedida e dois grupos diferentes em cada carbono da dupla.
- Isomeria óptica: carbono com quatro grupos diferentes; até \(2^n\) isômeros espaciais.
`,
  referencias: [
    "SOLOMONS, T. W. G.; FRYHLE, C. B. **Química orgânica**. v. 1. 10. ed. Rio de Janeiro: LTC, 2012.",
    "BRUICE, P. Y. **Química orgânica**. v. 1. 4. ed. São Paulo: Pearson Prentice Hall, 2006.",
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019.",
  ],
},
{
  id: "r17", num: 17,
  area: "Química Orgânica Básica e Experimental",
  disciplina: "Química Orgânica Básica",
  titulo: "Reações orgânicas fundamentais",
  descricao: "Os cinco tipos básicos de reação orgânica (adição, substituição, eliminação, oxidação e redução), como reconhecê-los e onde eles aparecem no metabolismo e na indústria.",
  tags: ["reação orgânica", "adição", "substituição", "eliminação", "oxidação", "redução", "esterificação", "Markovnikov", "nucleófilo", "eletrófilo"],
  conteudo: String.raw`
## Quem ataca e quem é atacado

Quase toda reação orgânica pode ser entendida como o encontro de duas espécies:

- **Nucleófilo:** uma espécie rica em elétrons, que "procura" uma região positiva para doar um par de elétrons. Exemplos: \(\ce{OH-}\), água, amônia.
- **Eletrófilo:** uma espécie pobre em elétrons, que "procura" elétrons. Exemplos: o \(\ce{H+}\) e o carbono de uma carbonila (\(\ce{C=O}\)), que fica parcialmente positivo.

Quando uma ligação se rompe e um dos átomos fica com os dois elétrons, formam-se íons (ruptura heterolítica). Quando cada átomo fica com um elétron, formam-se radicais livres (ruptura homolítica).

## Os cinco tipos fundamentais

<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" role="img"><title>Reações orgânicas</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Os cinco tipos basicos de reação orgânica</text><rect x="24" y="56" width="692" height="36" rx="7" fill="#fff" stroke="#0a8f5e" stroke-width="1.3"/><text x="40" y="79" font-size="11.5" text-anchor="start" fill="#0a8f5e" font-weight="700">adicao</text><text x="168" y="79" font-size="10.2" text-anchor="start" fill="#333333">a dupla abre e recebe dois grupos</text><text x="470" y="79" font-size="10" text-anchor="start" fill="#5c5c66">hidrogenacao de oleos</text><rect x="24" y="98" width="692" height="36" rx="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><text x="40" y="121" font-size="11.5" text-anchor="start" fill="#0083cb" font-weight="700">substituicao</text><text x="168" y="121" font-size="10.2" text-anchor="start" fill="#333333">um grupo troca de lugar com outro</text><text x="470" y="121" font-size="10" text-anchor="start" fill="#5c5c66">halogenacao</text><rect x="24" y="140" width="692" height="36" rx="7" fill="#fff" stroke="#a300bc" stroke-width="1.3"/><text x="40" y="163" font-size="11.5" text-anchor="start" fill="#a300bc" font-weight="700">eliminacao</text><text x="168" y="163" font-size="10.2" text-anchor="start" fill="#333333">saem dois grupos e forma-se uma dupla</text><text x="470" y="163" font-size="10" text-anchor="start" fill="#5c5c66">desidratacao de álcool</text><rect x="24" y="182" width="692" height="36" rx="7" fill="#fff" stroke="#c67600" stroke-width="1.3"/><text x="40" y="205" font-size="11.5" text-anchor="start" fill="#c67600" font-weight="700">oxidação</text><text x="168" y="205" font-size="10.2" text-anchor="start" fill="#333333">ganha oxigênio ou perde hidrogênio</text><text x="470" y="205" font-size="10" text-anchor="start" fill="#5c5c66">álcool vira aldeído e depois ácido</text><rect x="24" y="224" width="692" height="36" rx="7" fill="#fff" stroke="#f40086" stroke-width="1.3"/><text x="40" y="247" font-size="11.5" text-anchor="start" fill="#f40086" font-weight="700">redução</text><text x="168" y="247" font-size="10.2" text-anchor="start" fill="#333333">ganha hidrogênio</text><text x="470" y="247" font-size="10" text-anchor="start" fill="#5c5c66">cetona vira álcool</text><rect x="24" y="228" width="692" height="0" rx="0" fill="none" stroke="none" stroke-width="0"/><text x="20" y="268" font-size="10.8" text-anchor="start" fill="#5c5c66">Em biotecnologia, essas mesmas transformacoes são feitas por enzimas, em água e temperatura branda.</text></svg>
Reconhecer o tipo de reação ajuda a prever o produto.

As reações se classificam pelo **que acontece com a molécula**:

| Tipo | O que acontece | Exemplo químico | O mesmo tipo de reação no metabolismo |
|---|---|---|---|
| Adição | dois fragmentos entram na molécula e a ligação dupla (ou tripla) se desfaz | hidrogenação de óleos | a enzima fumarase adiciona água ao fumarato, formando malato |
| Substituição | um átomo ou grupo sai e outro entra no lugar | esterificação; halogenação | formação da ligação peptídica entre aminoácidos |
| Eliminação | dois fragmentos saem e forma-se uma ligação dupla | desidratação de álcoois | a enzima aconitase retira água do citrato |
| Oxidação | a molécula ganha ligações com oxigênio ou perde hidrogênios | álcool → aldeído → ácido | etanol → acetaldeído (álcool desidrogenase) |
| Redução | o contrário: perde ligações com oxigênio ou ganha hidrogênios | aldeído → álcool | acetaldeído → etanol (fim da fermentação alcoólica) |

## Adição

É típica das moléculas com ligações duplas ou triplas (alcenos e alcinos). Exemplos: a hidrogenação, que adiciona \(\ce{H2}\) com ajuda de um catalisador de níquel ou platina (é assim que óleos líquidos viram gorduras sólidas); a adição de bromo, cujo descoramento serve como teste para identificar ligações duplas; e a adição de água em meio ácido.

**Regra de Markovnikov:** quando se adiciona \(\ce{HX}\) ou água a uma dupla que não é simétrica, o hidrogênio entra no carbono da dupla que **já tinha mais hidrogênios**. O motivo é que, assim, forma-se o intermediário mais estável.

As carbonilas também recebem adições. Quando o grupo OH de uma molécula de glicose ataca o grupo aldeído da própria molécula, a cadeia se fecha em anel. É por isso que a glicose, em solução, existe quase toda na forma cíclica.

## Substituição

- Nos haletos de alquila (compostos com cloro, bromo ou iodo), um nucleófilo pode tomar o lugar do halogênio. Isso acontece em uma etapa só (mecanismo \(S_N2\), preferido em carbonos menos substituídos) ou em duas etapas, passando por um íon positivo intermediário (mecanismo \(S_N1\), preferido em carbonos mais substituídos).
- Nos anéis aromáticos, a substituição troca um hidrogênio por outro grupo sem destruir o anel.
- Nos ácidos carboxílicos e derivados, a substituição forma ésteres e amidas.

**A esterificação**, reação reversível que forma ésteres a partir de ácidos e álcoois, com um ácido como catalisador:

\[ \ce{CH3COOH + CH3CH2OH <=> CH3COOCH2CH3 + H2O} \]

## Eliminação

Retira dois grupos de carbonos vizinhos e forma uma ligação dupla. Na **desidratação de álcoois**, feita com ácido sulfúrico concentrado e aquecimento, sai uma molécula de água. Forma-se, de preferência, o alceno mais substituído (regra de Zaitsev). Em temperatura mais baixa, a água pode sair de duas moléculas de álcool diferentes, e forma-se um éter.

## Oxidação e redução

Em química orgânica, **oxidar** significa aumentar o número de ligações entre carbono e oxigênio (ou retirar hidrogênios); **reduzir** é o inverso.

- Álcool **primário** (OH na ponta da cadeia) → aldeído → ácido carboxílico.
- Álcool **secundário** → cetona.
- Álcool **terciário**: em condições brandas, não se oxida, porque o carbono do OH não tem hidrogênio para perder.

Dentro das células, quem "carrega" os elétrons nessas reações são as coenzimas \(\ce{NAD+}\) e NADH e o FAD. Dois exemplos práticos:

- Na **fermentação alcoólica**, o acetaldeído é **reduzido** a etanol pelo NADH. Isso devolve à célula o \(\ce{NAD+}\) de que ela precisa para continuar quebrando a glicose (tema 28).
- Na **fermentação acética**, bactérias do gênero *Acetobacter* **oxidam** o etanol a ácido acético. É assim que se produz o vinagre.

## Exemplo resolvido: quanto éster se forma?

Para a reação entre ácido acético e etanol, a constante de equilíbrio vale cerca de 4. Partindo de 1 mol de cada reagente, quanto éster se forma?

Se \(x\) mols reagem, formam-se \(x\) mols de éster e \(x\) mols de água, e sobram \(1 - x\) de cada reagente:

\[ \frac{x^2}{(1-x)^2} = 4 \;\Rightarrow\; \frac{x}{1-x} = 2 \;\Rightarrow\; x = \tfrac{2}{3} \]

Apenas cerca de **67%** dos reagentes se transformam em éster. Para aumentar essa conversão, usa-se o princípio de Le Chatelier (tema 14): colocar um dos reagentes em excesso ou retirar a água à medida que ela se forma. A mesma estratégia é usada na produção de ésteres de aroma com enzimas (lipases).

> **Atenção, erros comuns:**
> Confundir adição (a ligação dupla desaparece e nada sai) com substituição (algo entra e algo sai).
> Aplicar a regra de Markovnikov ao contrário: o hidrogênio vai para o carbono **que já tem mais hidrogênios**.
> Tentar oxidar um álcool terciário até cetona.

## Para fixar

- As reações orgânicas são encontros entre nucleófilos e eletrófilos.
- Adição, substituição, eliminação, oxidação e redução também descrevem o metabolismo: as enzimas fazem as mesmas transformações, só que com muito mais seletividade e em condições suaves.
`,
  referencias: [
    "SOLOMONS, T. W. G.; FRYHLE, C. B. **Química orgânica**. v. 1 e 2. 10. ed. Rio de Janeiro: LTC, 2012.",
    "BRUICE, P. Y. **Química orgânica**. v. 1. 4. ed. São Paulo: Pearson Prentice Hall, 2006.",
    "McMURRY, J. **Química orgânica**. Combo. 7. ed. São Paulo: Cengage Learning, 2011.",
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019.",
  ],
},
{
  id: "r18", num: 18,
  area: "Química Analítica Geral e Experimental",
  disciplina: "Química Analítica Geral",
  titulo: "Equilíbrio ácido-base e pH",
  descricao: "O que são ácidos e bases, o que o pH mede, a diferença entre ácidos fortes e fracos e como calcular o pH, com aplicações no controle de cultivos e de enzimas.",
  tags: ["ácido", "base", "pH", "pOH", "Ka", "pKa", "Kw", "Brønsted", "ácido fraco", "grau de ionização"],
  conteudo: String.raw`
## Por que o pH é tão vigiado em biotecnologia

Cada microrganismo cresce bem numa faixa de pH, e cada enzima tem um pH em que trabalha melhor. Fora dessas faixas, o crescimento cai, a enzima perde atividade e produtos indesejados aparecem. Por isso o pH é medido continuamente nos biorreatores e corrigido automaticamente. Entender o que o pH significa, e como calculá-lo, é uma das bases do trabalho de laboratório.

## O que são ácidos e bases

Há três definições, cada uma mais ampla que a anterior:

- **Arrhenius:** ácido é a substância que, em água, libera íons \(\ce{H+}\); base é a que libera íons \(\ce{OH-}\).
- **Brønsted-Lowry:** ácido é quem **doa** um próton (\(\ce{H+}\)); base é quem **recebe** um próton. Cada ácido, ao perder o próton, vira a sua **base conjugada** (por exemplo, o ácido acético vira o íon acetato).
- **Lewis:** ácido é quem **aceita** um par de elétrons; base é quem **doa** um par. Essa definição inclui, por exemplo, íons metálicos ligados a proteínas.

## A água e a escala de pH

<svg viewBox="0 0 740 290" xmlns="http://www.w3.org/2000/svg" role="img"><title>Escala de pH</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">A escala de pH e logaritmica</text><rect x="40" y="60" width="42" height="40" rx="3" fill="#c0392b" stroke="none" stroke-width="0"/><text x="61" y="86" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">0</text><rect x="84" y="60" width="42" height="40" rx="3" fill="#e05a2b" stroke="none" stroke-width="0"/><text x="105" y="86" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">1</text><rect x="128" y="60" width="42" height="40" rx="3" fill="#e8902a" stroke="none" stroke-width="0"/><text x="149" y="86" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">2</text><rect x="172" y="60" width="42" height="40" rx="3" fill="#e8c22a" stroke="none" stroke-width="0"/><text x="193" y="86" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">3</text><rect x="216" y="60" width="42" height="40" rx="3" fill="#b9c93a" stroke="none" stroke-width="0"/><text x="237" y="86" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">4</text><rect x="260" y="60" width="42" height="40" rx="3" fill="#6fbf4a" stroke="none" stroke-width="0"/><text x="281" y="86" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">5</text><rect x="304" y="60" width="42" height="40" rx="3" fill="#3fae7a" stroke="none" stroke-width="0"/><text x="325" y="86" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">6</text><rect x="348" y="60" width="42" height="40" rx="3" fill="#2f9fb0" stroke="none" stroke-width="0"/><text x="369" y="86" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">7</text><rect x="392" y="60" width="42" height="40" rx="3" fill="#2f7fc0" stroke="none" stroke-width="0"/><text x="413" y="86" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">8</text><rect x="436" y="60" width="42" height="40" rx="3" fill="#3f5fc0" stroke="none" stroke-width="0"/><text x="457" y="86" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">9</text><rect x="480" y="60" width="42" height="40" rx="3" fill="#5a3fb0" stroke="none" stroke-width="0"/><text x="501" y="86" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">10</text><rect x="524" y="60" width="42" height="40" rx="3" fill="#6f2fa0" stroke="none" stroke-width="0"/><text x="545" y="86" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">11</text><rect x="568" y="60" width="42" height="40" rx="3" fill="#7a1f90" stroke="none" stroke-width="0"/><text x="589" y="86" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">12</text><rect x="612" y="60" width="42" height="40" rx="3" fill="#8a1080" stroke="none" stroke-width="0"/><text x="633" y="86" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">13</text><rect x="656" y="60" width="42" height="40" rx="3" fill="#9a0070" stroke="none" stroke-width="0"/><text x="677" y="86" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">14</text><text x="60" y="120" font-size="11.5" text-anchor="start" fill="#d33a4e" font-weight="700">ácido</text><text x="370" y="120" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">neutro</text><text x="680" y="120" font-size="11.5" text-anchor="end" fill="#a300bc" font-weight="700">básico</text><line x1="127" y1="100" x2="127" y2="140" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><text x="127" y="154" font-size="9.4" text-anchor="middle" fill="#5c5c66">suco gastrico</text><line x1="193" y1="100" x2="193" y2="140" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><text x="193" y="154" font-size="9.4" text-anchor="middle" fill="#5c5c66">refrigerante</text><line x1="281" y1="100" x2="281" y2="140" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><text x="281" y="154" font-size="9.4" text-anchor="middle" fill="#5c5c66">cafe</text><line x1="386.6" y1="100" x2="386.6" y2="140" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><text x="386.6" y="154" font-size="9.4" text-anchor="middle" fill="#5c5c66">sangue</text><line x1="501" y1="100" x2="501" y2="140" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><text x="501" y="154" font-size="9.4" text-anchor="middle" fill="#5c5c66">sabao</text><line x1="633" y1="100" x2="633" y2="140" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 3"/><text x="633" y="154" font-size="9.4" text-anchor="middle" fill="#5c5c66">soda</text><rect x="20" y="172" width="700" height="60" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="194" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">cada unidade de pH e um fator de dez</text><text x="370" y="214" font-size="10.4" text-anchor="middle" fill="#5c5c66">Entre pH 5 e pH 7 ha cem vezes menos H+. Por isso um desvio pequeno no meio de cultura muda muito</text><text x="370" y="228" font-size="10.4" text-anchor="middle" fill="#5c5c66">a atividade das enzimas e a carga das proteínas.</text><text x="20" y="262" font-size="10.8" text-anchor="start" fill="#5c5c66">O pH do sangue fica entre 7,35 e 7,45: fora dessa faixa estreita, as proteínas deixam de funcionar.</text><text x="20" y="280" font-size="10.8" text-anchor="start" fill="#5c5c66">Nos bioprocessos, o controle de pH e automatico, com adicao de ácido ou base conforme a leitura do eletrodo.</text></svg>
Cada unidade de pH corresponde a um fator de dez na concentração de H+.

Mesmo a água pura se ioniza um pouquinho:

\[ \ce{2 H2O <=> H3O+ + OH-}, \qquad K_w = [\ce{H3O+}][\ce{OH-}] = 1{,}0\times10^{-14}\ \text{(a 25 °C)} \]

As concentrações de \(\ce{H3O+}\) são números muito pequenos e difíceis de comparar. Por isso usa-se o **pH**, que é o "menos logaritmo" dessa concentração:

\[ \mathrm{pH} = -\log[\ce{H3O+}], \qquad \mathrm{pOH} = -\log[\ce{OH-}], \qquad \mathrm{pH} + \mathrm{pOH} = 14\ \text{(a 25 °C)} \]

Como a escala é logarítmica, **cada unidade de pH corresponde a uma diferença de 10 vezes** na concentração de \(\ce{H3O+}\). Uma solução de pH 4 tem cem vezes mais \(\ce{H3O+}\) do que uma de pH 6. A água pura a 25 °C tem pH 7; em outras temperaturas, \(K_w\) muda, e a neutralidade deixa de ser exatamente 7.

## Ácidos fortes e ácidos fracos

- **Fortes** (como o ácido clorídrico, o nítrico e o perclórico) e **bases fortes** (como o hidróxido de sódio e o de potássio) se ionizam praticamente por completo na água.
- **Fracos** se ionizam só em parte. A extensão dessa ionização é dada pela **constante de acidez** \(K_a\):

\[ \ce{HA + H2O <=> H3O+ + A-}, \qquad K_a = \frac{[\ce{H3O+}][\ce{A-}]}{[\ce{HA}]}, \qquad \mathrm{p}K_a = -\log K_a \]

Quanto **menor o pKa**, **mais forte** é o ácido. Para um par ácido-base conjugado, vale \(K_a\cdot K_b = K_w\): quanto mais forte o ácido, mais fraca a sua base conjugada.

## Calculando o pH

| Situação | Como calcular | Quando vale |
|---|---|---|
| Ácido forte, concentração \(C\) | \([\ce{H3O+}] = C\) | \(C\) bem maior que \(10^{-7}\) mol/L |
| Base forte | \([\ce{OH-}] = C\) | idem |
| Ácido fraco | \([\ce{H3O+}] \approx \sqrt{K_a\,C}\) | quando menos de cerca de 5% do ácido se ioniza |
| Base fraca | \([\ce{OH-}] \approx \sqrt{K_b\,C}\) | idem |

O **grau de ionização** (\(\alpha\)) é a fração do ácido que se ionizou: \(\alpha = [\ce{A-}]/C\). Se a aproximação não valer, resolve-se a equação do segundo grau completa.

## Exemplos resolvidos

**Ácido clorídrico 0,010 mol/L:** é forte, então \([\ce{H3O+}] = 1{,}0\times10^{-2}\) e o pH é 2,00.

**Hidróxido de sódio 0,0010 mol/L:** é base forte, então \([\ce{OH-}] = 10^{-3}\), o pOH é 3,00 e o pH é \(14 - 3 = 11{,}00\).

**Ácido acético 0,10 mol/L** (\(K_a = 1{,}8\times10^{-5}\)):

\[ [\ce{H3O+}] \approx \sqrt{1{,}8\times10^{-5}\times0{,}10} = 1{,}34\times10^{-3} \;\Rightarrow\; \mathrm{pH} \approx 2{,}87 \]

O grau de ionização é \(\alpha = 1{,}34\times10^{-3}/0{,}10 \approx 1{,}3\%\), abaixo de 5%, então a aproximação é válida. Compare: um ácido forte na mesma concentração teria pH 1,00. O vinagre é bem menos ácido do que a sua concentração sugere, justamente porque o ácido acético é fraco.

## Ácidos que liberam mais de um próton

Alguns ácidos (os **polipróticos**) liberam os prótons em etapas, cada uma com a sua constante, cada vez menor. O ácido fosfórico tem pKa de cerca de 2,1, 7,2 e 12,3. Perto de pH 7,2, existem quantidades parecidas de \(\ce{H2PO4-}\) e \(\ce{HPO4^2-}\), e é por isso que o fosfato é um ótimo **tampão** para trabalhar perto do pH fisiológico (tema 19).

## Na prática

- **Cada organismo tem a sua faixa de pH:** muitas bactérias preferem valores próximos da neutralidade, enquanto leveduras e fungos toleram meios mais ácidos. Fermentações com leveduras costumam usar pH mais baixo justamente para dificultar a contaminação por bactérias.
- **Controle automático em biorreatores:** um eletrodo mede o pH, e uma bomba adiciona ácido ou base quando ele sai da faixa desejada. A amônia (\(\ce{NH4OH}\)) é muito usada como base porque, além de corrigir o pH, fornece nitrogênio às células.
- **Purificação de proteínas:** a carga elétrica de uma proteína depende do pH. No **ponto isoelétrico**, a carga total é zero e a proteína costuma ficar menos solúvel. Isso é aproveitado para separá-la por precipitação.

> **Atenção, erros comuns:**
> Calcular o pH de um ácido clorídrico \(1\times10^{-8}\) mol/L como 8: um ácido não pode deixar a solução básica. Numa diluição tão grande, quem manda é a ionização da própria água, e o pH fica um pouco abaixo de 7.
> Usar \([\ce{H3O+}] = C\) para um ácido **fraco**.
> Achar que pH 4 é "duas vezes mais ácido" que pH 6: são **cem vezes** mais \(\ce{H3O+}\).

## Para fixar

- pH = −log[\(\ce{H3O+}\)]; cada unidade de pH equivale a um fator de 10.
- Fortes se ionizam totalmente; fracos são descritos por \(K_a\) e \(K_b\).
- Para ácido fraco, \([\ce{H3O+}] \approx \sqrt{K_aC}\), conferindo se a ionização ficou abaixo de 5%.
`,
  referencias: [
    "BACCAN, N. et al. **Química analítica quantitativa elementar**. 3. ed. São Paulo: Edgard Blücher, 2001.",
    "SKOOG, D. A. et al. **Fundamentos de química analítica**. 9. ed. São Paulo: Cengage Learning, 2014.",
    "HARRIS, D. C. **Análise química quantitativa**. 8. ed. Rio de Janeiro: LTC, 2012.",
    "ATKINS, P.; JONES, L. **Princípios de química**: questionando a vida moderna e o meio ambiente. 5. ed. Porto Alegre: Bookman, 2012.",
  ],
},
{
  id: "r19", num: 19,
  area: "Química Analítica Geral e Experimental",
  disciplina: "Química Analítica Geral",
  titulo: "Soluções tampão",
  descricao: "O que é um tampão, por que ele resiste a mudanças de pH, como calcular e preparar um tampão com a equação de Henderson-Hasselbalch e quais tampões se usam em biologia.",
  tags: ["tampão", "Henderson-Hasselbalch", "capacidade tamponante", "pKa", "bicarbonato", "fosfato", "HEPES", "Tris", "PBS"],
  conteudo: String.raw`
## O que é um tampão

Uma **solução tampão** é uma solução que **resiste a mudanças de pH** quando recebe pequenas quantidades de ácido ou de base, ou quando é diluída. Ela é formada por um **ácido fraco junto com a sua base conjugada** (por exemplo, ácido acético e acetato) ou por uma **base fraca junto com o seu ácido conjugado** (por exemplo, amônia e amônio), ambos em quantidades razoáveis.

Os tampões estão em toda parte na biologia: o sangue, o interior das células, os meios de cultura, as soluções em que se mede a atividade de uma enzima. Sem eles, o pH mudaria a cada reação que libera ou consome \(\ce{H+}\).

## Como o tampão funciona

Cada componente neutraliza um tipo de ameaça:

\[ \ce{HA + OH- -> A- + H2O} \qquad\qquad \ce{A- + H3O+ -> HA + H2O} \]

Quando se adiciona uma base forte, o ácido fraco (HA) a consome. Quando se adiciona um ácido forte, a base conjugada (\(\ce{A-}\)) o consome. Em ambos os casos, o ácido ou a base **forte** acaba transformado numa espécie **fraca**, e o pH quase não muda: o que muda é só a proporção entre \(\ce{A-}\) e HA, e pouco.

## A equação de Henderson-Hasselbalch

Rearranjando a expressão da constante \(K_a\) e aplicando o logaritmo, chega-se a:

\[ \mathrm{pH} = \mathrm{p}K_a + \log\frac{[\ce{A-}]}{[\ce{HA}]} \]

Ela traz três conclusões práticas:

- quando há quantidades iguais de base e de ácido, **o pH é igual ao pKa**;
- o tampão funciona bem numa faixa de **pKa ± 1** (proporções entre 1:10 e 10:1);
- para escolher um tampão, procure um ácido com **pKa próximo do pH que você quer manter**.

A equação é uma aproximação. Ela considera que as concentrações no equilíbrio são iguais às que foram colocadas na solução e ignora algumas correções. Funciona mal em tampões muito diluídos ou em pH muito ácido ou muito básico.

## Capacidade tamponante: até onde o tampão aguenta

<svg viewBox="0 0 720 318" xmlns="http://www.w3.org/2000/svg" role="img"><title>Tampao</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Por que um tampao segura o pH</text><rect x="60" y="56" width="350" height="190" rx="6" fill="#fff" stroke="#d4d6df" stroke-width="1.1"/><line x1="132.917" y1="56" x2="132.917" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="205.833" y1="56" x2="205.833" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="278.75" y1="56" x2="278.75" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="351.667" y1="56" x2="351.667" y2="246" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="208" x2="410" y2="208" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="170" x2="410" y2="170" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="132" x2="410" y2="132" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="94" x2="410" y2="94" stroke="#eef0f5" stroke-width="1" stroke-linecap="round"/><line x1="60" y1="56" x2="60" y2="246" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round"/><text x="132.917" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">0.5</text><text x="205.833" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">1</text><text x="278.75" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">1.5</text><text x="351.667" y="261" font-size="10.5" text-anchor="middle" fill="#8a8a93">2</text><text x="54" y="211.5" font-size="10.5" text-anchor="end" fill="#8a8a93">4</text><text x="54" y="173.5" font-size="10.5" text-anchor="end" fill="#8a8a93">6</text><text x="54" y="135.5" font-size="10.5" text-anchor="end" fill="#8a8a93">8</text><text x="54" y="97.5" font-size="10.5" text-anchor="end" fill="#8a8a93">10</text><text x="414" y="250" font-size="12" text-anchor="start" fill="#5c5c66" font-weight="600">base</text><text x="56" y="50" font-size="12" text-anchor="end" fill="#5c5c66" font-weight="600">pH</text><path d="M62.9,228.9L64.5,227.9L66.1,225.3L67.6,223.4L69.2,221.8L70.8,220.4L72.4,219.3L74.0,218.2L75.5,217.3L77.1,216.5L78.7,215.7L80.3,215.0L81.8,214.3L83.4,213.7L85.0,213.1L86.6,212.5L88.2,212.0L89.7,211.5L91.3,211.0L92.9,210.6L94.5,210.1L96.0,209.7L97.6,209.3L99.2,208.9L100.8,208.6L102.4,208.2L103.9,207.8L105.5,207.5L107.1,207.2L108.7,206.8L110.2,206.5L111.8,206.2L113.4,205.9L115.0,205.6L116.6,205.3L118.1,205.0L119.7,204.8L121.3,204.5L122.9,204.2L124.4,204.0L126.0,203.7L127.6,203.4L129.2,203.2L130.8,203.0L132.3,202.7L133.9,202.5L135.5,202.2L137.1,202.0L138.6,201.8L140.2,201.6L141.8,201.3L143.4,201.1L145.0,200.9L146.5,200.7L148.1,200.5L149.7,200.3L151.3,200.1L152.8,199.8L154.4,199.6L156.0,199.4L157.6,199.2L159.2,199.0L160.7,198.8L162.3,198.6L163.9,198.4L165.5,198.3L167.0,198.1L168.6,197.9L170.2,197.7L171.8,197.5L173.4,197.3L174.9,197.1L176.5,196.9L178.1,196.7L179.7,196.6L181.2,196.4L182.8,196.2L184.4,196.0L186.0,195.8L187.6,195.6L189.1,195.5L190.7,195.3L192.3,195.1L193.9,194.9L195.4,194.7L197.0,194.6L198.6,194.4L200.2,194.2L201.8,194.0L203.3,193.8L204.9,193.7L206.5,193.5L208.1,193.3L209.6,193.1L211.2,193.0L212.8,192.8L214.4,192.6L215.9,192.4L217.5,192.2L219.1,192.1L220.7,191.9L222.3,191.7L223.8,191.5L225.4,191.3L227.0,191.1L228.6,191.0L230.1,190.8L231.7,190.6L233.3,190.4L234.9,190.2L236.5,190.0L238.0,189.9L239.6,189.7L241.2,189.5L242.8,189.3L244.3,189.1L245.9,188.9L247.5,188.7L249.1,188.5L250.7,188.3L252.2,188.1L253.8,187.9L255.4,187.7L257.0,187.5L258.5,187.3L260.1,187.1L261.7,186.9L263.3,186.7L264.9,186.5L266.4,186.3L268.0,186.0L269.6,185.8L271.2,185.6L272.7,185.4L274.3,185.1L275.9,184.9L277.5,184.7L279.1,184.4L280.6,184.2L282.2,184.0L283.8,183.7L285.4,183.5L286.9,183.2L288.5,182.9L290.1,182.7L291.7,182.4L293.3,182.1L294.8,181.9L296.4,181.6L298.0,181.3L299.6,181.0L301.1,180.7L302.7,180.3L304.3,180.0L305.9,179.7L307.5,179.3L309.0,179.0L310.6,178.6L312.2,178.3L313.8,177.9L315.3,177.5L316.9,177.1L318.5,176.6L320.1,176.2L321.7,175.7L323.2,175.2L324.8,174.7L326.4,174.1L328.0,173.5L329.5,172.9L331.1,172.3L332.7,171.6L334.3,170.8L335.9,170.0L337.4,169.0L339.0,164.2L340.6,159.5L342.2,154.8L343.7,150.1L345.3,145.3L346.9,140.6L348.5,135.9L350.0,131.1L351.6,126.4L353.2,121.7L354.8,117.0L356.4,112.2L357.9,107.5L359.5,102.8L361.1,98.1L362.7,93.3L364.2,88.6L365.8,83.9L367.4,82.4L369.0,82.1L370.6,81.8L372.1,81.5L373.7,81.2L375.3,81.0L376.9,80.7L378.4,80.5L380.0,80.2L381.6,80.0L383.2,79.8L384.8,79.6L386.3,79.3L387.9,79.1L389.5,78.9L391.1,78.7L392.6,78.6L394.2,78.4L395.8,78.2L397.4,78.0L399.0,77.8L400.5,77.7L402.1,77.5L403.7,77.4L405.3,77.2L406.8,77.0L408.4,76.9L410.0,76.7" fill="none" stroke="#0083cb" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M147.5,284.0L147.5,56.0L148.5,56.0L149.4,56.0L150.4,56.0L151.4,56.0L152.4,56.0L153.3,56.0L154.3,56.0L155.3,56.0L156.2,56.0L157.2,56.0L158.2,56.0L159.2,56.0L160.1,56.0L161.1,56.0L162.1,56.0L163.1,56.0L164.0,56.0L165.0,56.0L166.0,56.0L166.9,56.0L167.9,56.0L168.9,56.0L169.9,56.0L170.8,56.0L171.8,56.0L172.8,56.0L173.8,56.0L174.7,56.0L175.7,56.0L176.7,56.0L177.6,56.0L178.6,56.0L179.6,56.0L180.6,56.0L181.5,56.0L182.5,56.0L183.5,56.0L184.4,56.0L185.4,56.0L186.4,56.0L187.4,56.0L188.3,56.0L189.3,56.0L190.3,56.0L191.2,56.0L192.2,56.0L193.2,56.0L194.2,56.0L195.1,56.0L196.1,56.0L197.1,56.0L198.1,56.0L199.0,56.0L200.0,56.0L201.0,56.0L201.9,56.0L202.9,56.0L203.9,56.0L204.9,56.0L205.8,56.0L206.8,56.0L207.8,56.0L208.8,56.0L209.7,56.0L210.7,56.0L211.7,56.0L212.6,56.0L213.6,56.0L214.6,56.0L215.6,56.0L216.5,56.0L217.5,56.0L218.5,56.0L219.4,56.0L220.4,56.0L221.4,56.0L222.4,56.0L223.3,56.0L224.3,56.0L225.3,56.0L226.2,56.0L227.2,56.0L228.2,56.0L229.2,56.0L230.1,56.0L231.1,56.0L232.1,56.0L233.1,56.0L234.0,56.0L235.0,56.0L236.0,56.0L236.9,56.0L237.9,56.0L238.9,56.0L239.9,56.0L240.8,56.0L241.8,56.0L242.8,56.0L243.7,56.0L244.7,56.0L245.7,56.0L246.7,56.0L247.6,56.0L248.6,56.0L249.6,56.0L250.6,56.0L251.5,56.0L252.5,56.0L253.5,56.0L254.4,56.0L255.4,56.0L256.4,56.0L257.4,56.0L258.3,56.0L259.3,56.0L260.3,56.0L261.2,56.0L262.2,56.0L263.2,56.0L264.2,56.0L264.2,284.0 Z" fill="#0a8f5e" fill-opacity="0.12" stroke="none"/><circle cx="205.833" cy="193.56" r="5" fill="#f40086" stroke="#fff" stroke-width="1.6"/><text x="215.833" y="197.56" font-size="11" text-anchor="start" fill="#f40086" font-weight="700">pKa</text><text x="205.833" y="109.2" font-size="10.5" text-anchor="middle" fill="#0a8f5e" font-weight="700">regiao tamponada</text><text x="205.833" y="126.3" font-size="9.6" text-anchor="middle" fill="#5c5c66">o pH quase não muda</text><text x="235" y="276" font-size="10.5" text-anchor="middle" fill="#5c5c66">a curva fica achatada perto do pKa</text><rect x="440" y="62" width="260" height="180" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><text x="570" y="86" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">como o tampao age</text><rect x="460" y="102" width="220" height="54" rx="7" fill="#fdeaed" stroke="#d33a4e" stroke-width="1.2"/><text x="570" y="122" font-size="10.6" text-anchor="middle" fill="#d33a4e" font-weight="700">entra ácido</text><text x="570" y="142" font-size="9.8" text-anchor="middle" fill="#333333">a base conjugada captura o H+</text><rect x="460" y="166" width="220" height="54" rx="7" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.2"/><text x="570" y="186" font-size="10.6" text-anchor="middle" fill="#0083cb" font-weight="700">entra base</text><text x="570" y="206" font-size="9.8" text-anchor="middle" fill="#333333">o ácido doa um H+</text><text x="570" y="232" font-size="9.4" text-anchor="middle" fill="#5c5c66">escolha o tampao com pKa perto do pH desejado</text><text x="20" y="310" font-size="10.8" text-anchor="start" fill="#5c5c66">Fosfato, Tris e acetato cobrem faixas diferentes: e por isso que cada protocolo pede um tampao específico.</text></svg>
Perto do pKa, a curva de titulação fica achatada: é a região tamponada.

A **capacidade tamponante** é a quantidade de ácido ou de base que o tampão consegue absorver sem que o pH mude muito. Ela:

- é **máxima quando o pH é igual ao pKa** (proporção 1:1);
- **aumenta com a concentração** do tampão. Um tampão 0,5 mol/L resiste muito mais do que um tampão 0,01 mol/L com o mesmo pH.

## Exemplo resolvido

**(a) Preparar um tampão acetato com pH 5,00** (pKa do ácido acético = 4,76), com concentração total de 0,100 mol/L.

**Passo 1, a proporção:**

\[ \log\frac{[\ce{A-}]}{[\ce{HA}]} = 5{,}00 - 4{,}76 = 0{,}24 \;\Rightarrow\; \frac{[\ce{A-}]}{[\ce{HA}]} = 10^{0{,}24} \approx 1{,}74 \]

**Passo 2, as concentrações:** como \([\ce{A-}] + [\ce{HA}] = 0{,}100\), resolvendo obtém-se \([\ce{HA}] \approx 0{,}0365\) e \([\ce{A-}] \approx 0{,}0635\) mol/L.

**(b) O que acontece ao adicionar ácido clorídrico** suficiente para 0,0050 mol/L? O ácido forte reage com o acetato e o transforma em ácido acético:

\[ \mathrm{pH} = 4{,}76 + \log\frac{0{,}0635 - 0{,}0050}{0{,}0365 + 0{,}0050} = 4{,}76 + \log(1{,}41) \approx 4{,}91 \]

O pH caiu só **0,09**. A mesma quantidade de ácido clorídrico em água pura levaria o pH de 7 para cerca de **2,3**. É essa a "mágica" do tampão.

## Tampões biológicos e de laboratório

| Sistema | pKa aproximado (25 °C) | Onde é usado |
|---|---|---|
| \(\ce{CO2}\) / bicarbonato | 6,1 | sangue; meios de cultivo de células animais em estufa com \(\ce{CO2}\) |
| Fosfato (\(\ce{H2PO4-}\) / \(\ce{HPO4^2-}\)) | 7,2 | interior das células; tampão fosfato salino (PBS); meios microbiológicos |
| Proteínas (aminoácido histidina) | cerca de 6 | interior das células e plasma |
| MES | cerca de 6,1 | ensaios bioquímicos |
| HEPES | cerca de 7,5 | cultivo de células; ensaios com enzimas |
| Tris | cerca de 8,1 | biologia molecular (eletroforese, extração de DNA) |

No **sangue**, a proporção entre bicarbonato e \(\ce{CO2}\) dissolvido é de cerca de 20 para 1, o que dá \(\mathrm{pH} = 6{,}1 + \log 20 \approx 7{,}4\). Os chamados **tampões de Good** (MES, HEPES e outros) foram desenvolvidos especialmente para a bioquímica: têm pKa entre 6 e 8, se dissolvem bem, quase não se ligam a metais e atravessam pouco as membranas.

> **Atenção, erros comuns:**
> Inverter a fração: é \(\log([\text{base}]/[\text{ácido}])\).
> Aplicar Henderson-Hasselbalch a uma mistura de ácido **forte** com o seu sal: isso não é um tampão.
> Ignorar a temperatura: o pKa do Tris cai cerca de 0,03 unidade a cada grau. Um tampão Tris ajustado a 25 °C terá outro pH a 37 °C ou a 4 °C. Ajuste o pH na temperatura em que o tampão será usado.

## Para fixar

- Tampão = ácido fraco com a sua base conjugada, ambos em boa quantidade.
- pH = pKa + log(base/ácido); a faixa útil é pKa ± 1.
- A capacidade cresce com a concentração e é máxima quando pH = pKa.
`,
  referencias: [
    "BACCAN, N. et al. **Química analítica quantitativa elementar**. 3. ed. São Paulo: Edgard Blücher, 2001.",
    "HARRIS, D. C. **Análise química quantitativa**. 8. ed. Rio de Janeiro: LTC, 2012.",
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019.",
    "GOOD, N. E. et al. Hydrogen ion buffers for biological research. **Biochemistry**, v. 5, n. 2, p. 467-477, 1966.",
    "PO, H. N.; SENOZAN, N. M. The Henderson-Hasselbalch equation: its history and limitations. **Journal of Chemical Education**, v. 78, n. 11, p. 1499-1503, 2001.",
  ],
},
{
  id: "r20", num: 20,
  area: "Química Analítica Geral e Experimental",
  disciplina: "Química Analítica Geral",
  titulo: "Titulação ácido-base",
  descricao: "Como determinar a concentração de um ácido ou de uma base por titulação: ponto de equivalência, padronização, curvas de titulação e escolha do indicador.",
  tags: ["titulação", "volumetria", "ponto de equivalência", "indicador", "fenolftaleína", "padronização", "padrão primário", "biftalato", "curva de titulação"],
  conteudo: String.raw`
## Para que serve a titulação

A titulação é uma das técnicas mais clássicas e baratas da química analítica. Ela permite descobrir a **concentração** de uma substância medindo o volume de outra solução, de concentração conhecida, necessário para reagir com ela por completo. Na indústria de alimentos e em biotecnologia, é usada, por exemplo, para medir a acidez do vinagre, do leite e de sucos, e para acompanhar a produção de ácidos orgânicos numa fermentação.

## Os termos da titulação

A solução de concentração conhecida (o **titulante**) fica numa **bureta**, um tubo graduado com torneira, e é adicionada aos poucos sobre um volume conhecido da amostra (o **titulado**, ou analito).

- **Ponto de equivalência:** o momento em que a quantidade de titulante adicionada é exatamente a necessária para reagir com toda a amostra. É um ponto teórico.
- **Ponto final:** o momento em que o **indicador** muda de cor e o analista fecha a torneira. É o ponto observado.
- A diferença entre os dois é o **erro de titulação**, que se reduz escolhendo bem o indicador.

Para uma reação em que um mol de titulante reage com um mol de analito, no ponto de equivalência vale: \(C_{titulante}\,V_{titulante} = C_{analito}\,V_{analito}\).

## Padronização: por que não basta pesar o NaOH

Uma solução de hidróxido de sódio **não** pode ser preparada com concentração exata apenas pesando o sólido. O NaOH absorve umidade do ar (é **higroscópico**) e reage com o \(\ce{CO2}\) da atmosfera, então o que está no pote não é NaOH puro. Por isso, depois de preparada, a solução precisa ser **padronizada**: titulada contra uma substância de pureza confiável, o **padrão primário**. Um bom padrão primário:

- tem alta pureza e é estável (não absorve água nem reage com o ar);
- tem massa molar alta, o que diminui o erro relativo da pesagem;
- reage de forma rápida e completa com o titulante.

Para padronizar bases, o mais usado é o **biftalato de potássio** (\(\ce{KHC8H4O4}\), 204,22 g/mol). Para ácidos, usam-se carbonato de sódio ou bórax.

**Exemplo:** 0,5105 g de biftalato foram titulados e consumiram 24,85 mL da solução de NaOH. Qual a concentração real do NaOH?

\[ n_{biftalato} = \frac{0{,}5105}{204{,}22} = 2{,}500\times10^{-3}\ \text{mol} \;\Rightarrow\; C_{NaOH} = \frac{2{,}500\times10^{-3}}{0{,}02485\ \text{L}} \approx 0{,}1006\ \text{mol/L} \]

## As curvas de titulação

A curva de titulação é o gráfico do pH da solução à medida que o titulante é adicionado. O seu formato depende da força do ácido e da base envolvidos.

| Titulação | pH no ponto de equivalência | Salto de pH |
|---|---|---|
| Ácido forte com base forte | 7 (forma-se um sal neutro) | grande, de cerca de 4 a 10 |
| Ácido fraco com base forte | **acima de 7** (o íon formado é levemente básico) | menor e deslocado para cima |
| Base fraca com ácido forte | **abaixo de 7** | menor e deslocado para baixo |

![Curva de titulação do ácido acético com NaOH: o salto de pH acontece perto do ponto de equivalência, que fica acima de pH 7. A faixa em que a fenolftaleína muda de cor cai dentro do salto; a faixa do alaranjado de metila, não.](https://upload.wikimedia.org/wikipedia/commons/f/fd/CH3COOH_titration-curve_en.svg)
Fonte: すじにくシチュー e Johannes Kalliauer, [CC0](https://creativecommons.org/publicdomain/zero/1.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:CH3COOH_titration-curve_en.svg).

Na titulação de um ácido fraco, o cálculo do pH muda conforme a região da curva:

1. **No início:** só há ácido fraco, e \([\ce{H3O+}] \approx \sqrt{K_aC}\) (tema 18).
2. **Antes da equivalência:** a mistura de ácido e da base formada é um **tampão**, e usa-se Henderson-Hasselbalch (tema 19). Na **metade do caminho** até a equivalência, o pH é igual ao pKa. Esse é um jeito experimental de medir o pKa de um ácido.
3. **Na equivalência:** só há a base conjugada, e \([\ce{OH-}] \approx \sqrt{K_bC}\), com \(K_b = K_w/K_a\).
4. **Depois da equivalência:** o excesso de base forte determina o pH.

## Exemplo resolvido: ácido acético com NaOH

Titulam-se 25,00 mL de ácido acético 0,1000 mol/L com NaOH 0,1000 mol/L (pKa = 4,76). O ponto de equivalência acontece com 25,00 mL de NaOH.

| Volume de NaOH adicionado | Região da curva | pH |
|---|---|---|
| 0 mL | só ácido fraco | 2,87 |
| 12,50 mL | metade da equivalência | 4,76 (igual ao pKa) |
| 25,00 mL | equivalência | 8,72 |
| 30,00 mL | excesso de base | 11,96 |

O cálculo na equivalência: todo o ácido virou acetato, \(\dfrac{2{,}5\times10^{-3}\ \text{mol}}{0{,}0500\ \text{L}} = 0{,}0500\) mol/L; \(K_b = \dfrac{10^{-14}}{1{,}8\times10^{-5}} = 5{,}6\times10^{-10}\);

\[ [\ce{OH-}] = \sqrt{5{,}6\times10^{-10}\times0{,}0500} \approx 5{,}3\times10^{-6} \;\Rightarrow\; \mathrm{pOH} \approx 5{,}28,\ \ \mathrm{pH} \approx 8{,}72 \]

Depois de 30,00 mL, sobram \(0{,}5\times10^{-3}\) mol de NaOH em 55,00 mL: \([\ce{OH-}] \approx 9{,}1\times10^{-3}\) e pH ≈ 11,96.

## Escolhendo o indicador

O indicador precisa mudar de cor **dentro do salto de pH**, o mais perto possível do ponto de equivalência.

| Indicador | Faixa de mudança de cor (pH) | Cores |
|---|---|---|
| Alaranjado de metila | 3,1 a 4,4 | vermelho → amarelo |
| Vermelho de metila | 4,4 a 6,2 | vermelho → amarelo |
| Azul de bromotimol | 6,0 a 7,6 | amarelo → azul |
| Fenolftaleína | 8,2 a 10,0 | incolor → rosa |

No exemplo acima, com equivalência em pH 8,72, a escolha certa é a **fenolftaleína**. O alaranjado de metila mudaria de cor muito antes, com um erro grande. Quando a amostra é colorida ou turva, como um caldo de fermentação, não dá para ver a mudança de cor. Nesse caso, faz-se a **titulação potenciométrica**: acompanha-se o pH com um eletrodo e localiza-se o salto no gráfico.

## Na prática

- **Acidez titulável** de vinagre, vinho, leite e sucos, expressa em gramas do ácido predominante (acético, tartárico, láctico ou cítrico).
- **Acompanhamento de fermentações** que produzem ácidos orgânicos.
- **Método de Kjeldahl:** a última etapa desse método, que mede o nitrogênio total e, a partir dele, a quantidade de proteína de um alimento, é uma titulação.

> **Atenção, erros comuns:**
> Supor que o pH na equivalência é sempre 7: isso só vale para ácido forte com base forte.
> Usar NaOH sem padronizar.
> Ler a bureta com os olhos acima ou abaixo da linha do líquido (erro de paralaxe), ou deixar uma bolha de ar na ponta da bureta.

## Para fixar

- Na equivalência, os mols de titulante correspondem aos mols de analito, conforme a equação.
- Soluções como a de NaOH precisam ser padronizadas com um padrão primário.
- Na metade do caminho até a equivalência de um ácido fraco, pH = pKa.
- O indicador precisa mudar de cor dentro do salto de pH.
`,
  referencias: [
    "BACCAN, N. et al. **Química analítica quantitativa elementar**. 3. ed. São Paulo: Edgard Blücher, 2001.",
    "SKOOG, D. A. et al. **Fundamentos de química analítica**. 9. ed. São Paulo: Cengage Learning, 2014.",
    "HARRIS, D. C. **Análise química quantitativa**. 8. ed. Rio de Janeiro: LTC, 2012.",
    "MENDHAM, J. et al. **Vogel**: análise química quantitativa. 6. ed. Rio de Janeiro: LTC, 2002.",
  ],
}
);
