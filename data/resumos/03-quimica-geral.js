/* BIONEXO — Resumos · Área 3: Química Geral e Experimental (temas 10–14) */
(window.BIONEXO.resumos = window.BIONEXO.resumos || []).push(
{
  id: "r10", num: 10,
  area: "Química Geral e Experimental",
  disciplina: "Química Geral e Experimental",
  titulo: "Estrutura atômica e tabela periódica",
  descricao: "Como a ideia de átomo evoluiu, como os elétrons se organizam e por que a posição de um elemento na tabela periódica permite prever o seu comportamento.",
  tags: ["átomo", "modelo atômico", "Bohr", "orbital", "configuração eletrônica", "tabela periódica", "eletronegatividade", "isótopo"],
  conteudo: String.raw`
## Por que isso importa para quem trabalha com biotecnologia

Os meios de cultura levam ferro, magnésio, zinco, manganês, cobre. As enzimas dependem desses metais para funcionar. Os aparelhos que medem a concentração de metais num efluente se baseiam na luz que cada átomo absorve ou emite. Tudo isso decorre de um mesmo fato: **o comportamento químico de um elemento depende de como os seus elétrons estão organizados**. A tabela periódica é o mapa dessa organização.

## Como a ideia de átomo foi mudando

| Modelo | Ano | O que propôs | O que ele não explicava |
|---|---|---|---|
| Dalton | 1808 | a matéria é feita de átomos indivisíveis; cada elemento tem o seu tipo de átomo | a existência de cargas elétricas |
| Thomson | 1897 | descobriu o elétron; o átomo seria uma massa positiva com elétrons espalhados, como um "pudim de passas" | a existência do núcleo |
| Rutherford | 1911 | ao bombardear uma folha de ouro, mostrou que o átomo tem um núcleo minúsculo, denso e positivo, cercado por espaço praticamente vazio | por que o elétron, girando, não perde energia e cai no núcleo |
| Bohr | 1913 | os elétrons só podem ocupar certas órbitas, com energias bem definidas (energia **quantizada**) | átomos com mais de um elétron |
| Modelo quântico | 1926 | os elétrons são descritos por **orbitais**, regiões onde há maior probabilidade de encontrá-los | (é o modelo atual) |

Duas ideias sustentam o modelo atual. O elétron se comporta ao mesmo tempo como partícula e como onda (**dualidade onda-partícula**). E não é possível conhecer com precisão total, ao mesmo tempo, onde ele está e com que velocidade se move (**princípio da incerteza**). Por isso não se fala em trajetórias, mas em regiões de probabilidade.

### O modelo de Bohr em números

Para o hidrogênio, a energia do elétron na órbita \(n\) é \(E_n = -\dfrac{13{,}6\ \text{eV}}{n^2}\). Quando o elétron "desce" da órbita 3 para a 2, ele libera a diferença de energia na forma de luz:

\[ \Delta E = 13{,}6\left(\frac{1}{4} - \frac{1}{9}\right) \approx 1{,}89\ \text{eV} \;\Rightarrow\; \lambda = \frac{hc}{\Delta E} \approx \frac{1240\ \text{eV·nm}}{1{,}89\ \text{eV}} \approx 656\ \text{nm} \]

O resultado é uma luz vermelha, exatamente a linha vermelha observada no espectro do hidrogênio. Cada elemento tem o seu conjunto característico de cores, como uma impressão digital. É esse princípio que permite, na **espectroscopia de absorção atômica**, medir quanto ferro ou zinco existe num meio de cultura ou num efluente.

## Prótons, nêutrons e isótopos

O **número atômico** (\(Z\)) é a quantidade de prótons, e é ele que define o elemento. O **número de massa** (\(A\)) é a soma de prótons e nêutrons. **Isótopos** são átomos do mesmo elemento (mesmo \(Z\)) com números diferentes de nêutrons, como o carbono-12, o carbono-13 e o carbono-14.

Os isótopos são ferramentas valiosas. O carbono-13 permite rastrear por quais caminhos do metabolismo a glicose passa dentro de uma célula. O nitrogênio-15 foi usado no experimento que provou como o DNA se copia (tema 36). O fósforo-32 marca ácidos nucleicos em experimentos de biologia molecular.

## Como os elétrons se organizam

Cada elétron é descrito por quatro **números quânticos**:

- **principal** (\(n = 1, 2, 3\dots\)): a camada e o nível de energia;
- **secundário** (\(\ell\)): o subnível, chamado de s, p, d ou f;
- **magnético** (\(m_\ell\)): a orientação do orbital no espaço;
- **de spin** (\(m_s = \pm\tfrac12\)): uma propriedade do próprio elétron, que pode ter dois valores.

Para distribuir os elétrons, seguem-se três regras:

1. **Preencher primeiro os subníveis de menor energia**, na ordem do diagrama de Linus Pauling: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d...
2. **Princípio de exclusão de Pauli:** cada orbital comporta no máximo dois elétrons, com spins opostos.
3. **Regra de Hund:** em subníveis com vários orbitais, os elétrons ocupam primeiro orbitais separados, e só depois formam pares.

**Exemplo, o ferro (\(Z = 26\)):** \(1s^2\,2s^2\,2p^6\,3s^2\,3p^6\,4s^2\,3d^6\), ou, de forma resumida, \([\text{Ar}]\,4s^2\,3d^6\). Quando o ferro perde dois elétrons e vira \(\ce{Fe^2+}\), saem primeiro os elétrons do **4s**, que é a camada mais externa: fica \([\text{Ar}]\,3d^6\). Há exceções conhecidas, como o cromo e o cobre.

## A tabela periódica

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Tabela periodica</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">A posicao na tabela antecipa o comportamento</text><rect x="30" y="56" width="300" height="160" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><rect x="44" y="76" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="72" y="76" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="100" y="76" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="128" y="76" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="156" y="76" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="184" y="76" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="212" y="76" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="240" y="76" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="268" y="76" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="296" y="76" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="44" y="95" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="72" y="95" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="100" y="95" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="128" y="95" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="156" y="95" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="184" y="95" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="212" y="95" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="240" y="95" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="268" y="95" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="296" y="95" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="44" y="114" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="72" y="114" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="100" y="114" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="128" y="114" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="156" y="114" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="184" y="114" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="212" y="114" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="240" y="114" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="268" y="114" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="296" y="114" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="44" y="133" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="72" y="133" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="100" y="133" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="128" y="133" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="156" y="133" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="184" y="133" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="212" y="133" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="240" y="133" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="268" y="133" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="296" y="133" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="44" y="152" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="72" y="152" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="100" y="152" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="128" y="152" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="156" y="152" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="184" y="152" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="212" y="152" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="240" y="152" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="268" y="152" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="296" y="152" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="44" y="171" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="72" y="171" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="100" y="171" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="128" y="171" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="156" y="171" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="184" y="171" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="212" y="171" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="240" y="171" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="268" y="171" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="296" y="171" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="44" y="190" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="72" y="190" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="100" y="190" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="128" y="190" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="156" y="190" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="184" y="190" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="212" y="190" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="240" y="190" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="268" y="190" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><rect x="296" y="190" width="25" height="16" rx="2" fill="#eef1f6" stroke="#dfe3ec" stroke-width="0.8"/><line x1="44" y1="230" x2="326" y2="230" stroke="#0083cb" stroke-width="2" stroke-linecap="round" marker-end="url(#a-az)"/><text x="185" y="248" font-size="10" text-anchor="middle" fill="#0083cb" font-weight="700">numero atômico cresce</text><line x1="36" y1="72" x2="36" y2="212" stroke="#a300bc" stroke-width="2" stroke-linecap="round" marker-end="url(#a-rx)"/><text x="26" y="142" font-size="10" text-anchor="middle" fill="#a300bc" font-weight="700">periodos</text><rect x="366" y="70" width="350" height="44" rx="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><text x="382" y="90" font-size="11" text-anchor="start" fill="#0083cb" font-weight="700">raio atômico</text><text x="382" y="105" font-size="9.6" text-anchor="start" fill="#5c5c66">cresce para a esquerda e para baixo</text><rect x="366" y="124" width="350" height="44" rx="7" fill="#fff" stroke="#f40086" stroke-width="1.3"/><text x="382" y="144" font-size="11" text-anchor="start" fill="#f40086" font-weight="700">energia de ionizacao</text><text x="382" y="159" font-size="9.6" text-anchor="start" fill="#5c5c66">cresce para a direita e para cima</text><rect x="366" y="178" width="350" height="44" rx="7" fill="#fff" stroke="#a300bc" stroke-width="1.3"/><text x="382" y="198" font-size="11" text-anchor="start" fill="#a300bc" font-weight="700">eletronegatividade</text><text x="382" y="213" font-size="9.6" text-anchor="start" fill="#5c5c66">cresce para a direita e para cima</text><rect x="366" y="236" width="350" height="46" rx="7" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="541" y="256" font-size="10.6" text-anchor="middle" fill="#333333" font-weight="700">a camada de valencia explica tudo isso</text><text x="541" y="272" font-size="10" text-anchor="middle" fill="#5c5c66">e também a quais ions cada elemento tende a formar</text><text x="20" y="294" font-size="10.8" text-anchor="start" fill="#5c5c66">Os orbitais s, p, d e f definem os blocos da tabela e a ordem de preenchimento dos elétrons.</text></svg>
As propriedades periódicas seguem direções previsíveis na tabela.

- Cada **período** (linha) corresponde a uma nova camada de elétrons.
- Cada **grupo** (coluna) reúne elementos com o mesmo número de elétrons na camada mais externa (a **camada de valência**), e por isso com comportamento químico parecido.
- Os **blocos** s, p, d e f indicam qual subnível está sendo preenchido.

### Propriedades periódicas

| Propriedade | Ao longo de um período (da esquerda para a direita) | Ao descer num grupo |
|---|---|---|
| Raio atômico (tamanho) | diminui | aumenta |
| Energia de ionização (energia para arrancar um elétron) | aumenta | diminui |
| Eletronegatividade (tendência de atrair elétrons numa ligação) | aumenta | diminui |
| Caráter metálico | diminui | aumenta |

A lógica é esta: ao longo de um período, o núcleo ganha prótons e "puxa" os elétrons com mais força, então o átomo encolhe e segura melhor os seus elétrons. Ao descer num grupo, cada nova camada afasta os elétrons externos do núcleo, e eles ficam mais soltos. O flúor é o elemento mais eletronegativo de todos.

## Exemplo resolvido

O enxofre tem \(Z = 16\): \(1s^2\,2s^2\,2p^6\,3s^2\,3p^4\).

- A última camada é a terceira, com 6 elétrons. Portanto, o enxofre está no **3º período** e no **grupo 16**, o mesmo do oxigênio.
- Para completar oito elétrons na última camada, ele tende a ganhar 2 elétrons (formando \(\ce{S^2-}\)) ou a compartilhá-los em ligações. É o que acontece nas **pontes dissulfeto**, ligações entre dois átomos de enxofre que dão estabilidade a muitas proteínas (tema 27).
- Comparado ao oxigênio, que fica acima dele no grupo, o enxofre é maior e menos eletronegativo.

> **Atenção, erros comuns:**
> Ao formar cátions de metais de transição, retirar primeiro os elétrons do 3d: saem antes os do **4s**.
> Confundir número de massa (prótons + nêutrons de um átomo) com massa atômica (média ponderada dos isótopos, que aparece na tabela).
> Usar "órbita" e "orbital" como sinônimos: orbital é uma região de probabilidade, não uma trajetória.

## Na prática

Os elementos carbono, hidrogênio, oxigênio, nitrogênio, fósforo e enxofre formam a maior parte da massa das células. Metais como magnésio (necessário ao ATP e à clorofila), ferro (nos citocromos e na hemoglobina), zinco e cobre funcionam como **cofatores**: sem eles, muitas enzimas simplesmente não funcionam. É por isso que aparecem como **micronutrientes** nas receitas de meios de cultura, em quantidades pequenas, mas indispensáveis.
`,
  referencias: [
    "ATKINS, P.; JONES, L. **Princípios de química**: questionando a vida moderna e o meio ambiente. 5. ed. Porto Alegre: Bookman, 2012.",
    "RUSSELL, J. B. **Química geral**. v. 1. 2. ed. São Paulo: Makron Books, 1994.",
    "BROWN, T. L. et al. **Química**: a ciência central. 13. ed. São Paulo: Pearson, 2016.",
    "LEE, J. D. **Química inorgânica não tão concisa**. 5. ed. São Paulo: Blucher, 1999.",
  ],
},
{
  id: "r11", num: 11,
  area: "Química Geral e Experimental",
  disciplina: "Química Geral e Experimental",
  titulo: "Ligações químicas e geometria molecular",
  descricao: "Como e por que os átomos se ligam, como prever a forma de uma molécula, quando ela é polar e como as forças entre moléculas explicam a solubilidade e a estrutura do DNA e das proteínas.",
  tags: ["ligação iônica", "ligação covalente", "ligação metálica", "Lewis", "VSEPR", "geometria molecular", "polaridade", "ligação de hidrogênio", "forças intermoleculares"],
  conteudo: String.raw`
## Por que os átomos se ligam

Os átomos se ligam porque, juntos, ficam mais **estáveis** (com menos energia) do que separados. Para muitos elementos, isso significa ficar com oito elétrons na camada mais externa, como os gases nobres. É a **regra do octeto**, que funciona bem para os elementos mais comuns em biologia, embora tenha exceções (como o \(\ce{BF3}\), o \(\ce{PCl5}\) e o \(\ce{SF6}\)).

## Os três tipos de ligação

| Tipo | Como se forma | Entre quais elementos | Propriedades típicas |
|---|---|---|---|
| Iônica | um átomo **transfere** elétrons para outro; formam-se íons de cargas opostas, que se atraem | metal com não metal (grande diferença de eletronegatividade) | sólidos cristalinos, como o sal de cozinha; altos pontos de fusão; conduzem corrente quando fundidos ou dissolvidos em água |
| Covalente | os átomos **compartilham** pares de elétrons | não metais entre si | formam moléculas; as propriedades dependem das forças entre as moléculas |
| Metálica | os elétrons ficam soltos, formando um "mar" de elétrons em volta dos íons do metal | metais | conduzem eletricidade e calor, têm brilho e podem ser moldados |

Na ligação covalente, se um dos átomos é mais eletronegativo, ele puxa o par de elétrons para mais perto de si. A ligação fica **polar**: um lado ganha uma carga parcial negativa (\(\delta^-\)) e o outro, uma carga parcial positiva (\(\delta^+\)). Ligações simples são chamadas de \(\sigma\) (sigma); as ligações duplas e triplas acrescentam uma ou duas ligações \(\pi\) (pi).

## Estruturas de Lewis: desenhando as ligações

1. Conte os elétrons de valência de todos os átomos (acrescente um elétron para cada carga negativa e retire um para cada carga positiva).
2. Coloque no centro o átomo menos eletronegativo (o hidrogênio nunca fica no centro).
3. Ligue os átomos com pares de elétrons e complete os octetos dos átomos de fora.
4. Os elétrons que sobrarem vão para o átomo central. Se faltar octeto no átomo central, transforme pares isolados em ligações duplas ou triplas.
5. Confira as **cargas formais**: a melhor estrutura é aquela com cargas formais mais próximas de zero.

Quando mais de uma estrutura é válida, a molécula real é uma "média" delas, chamada **híbrido de ressonância**. É o que acontece na **ligação peptídica**, que une os aminoácidos nas proteínas. Por causa da ressonância, essa ligação se comporta um pouco como uma ligação dupla: é rígida e plana. Isso limita as formas que uma proteína pode assumir (tema 27).

## Prevendo a forma das moléculas: a teoria VSEPR

<svg viewBox="0 0 740 310" xmlns="http://www.w3.org/2000/svg" role="img"><title>Geometria molecular</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Pares de elétrons se repelem: dai sai a geometria</text><rect x="30" y="54" width="124" height="150" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><circle cx="92" cy="130" r="15" fill="#0083cb" stroke="#0083cb" stroke-width="1"/><line x1="92" y1="130" x2="52" y2="130" stroke="#2b2b33" stroke-width="2" stroke-linecap="round"/><circle cx="52" cy="130" r="11" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><line x1="92" y1="130" x2="132" y2="130" stroke="#2b2b33" stroke-width="2" stroke-linecap="round"/><circle cx="132" cy="130" r="11" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><text x="92" y="182" font-size="10.6" text-anchor="middle" fill="#333333" font-weight="700">linear</text><text x="92" y="196" font-size="9.6" text-anchor="middle" fill="#5c5c66">180 graus</text><text x="92" y="220" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">CO2</text><rect x="170" y="54" width="124" height="150" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><circle cx="232" cy="130" r="15" fill="#0083cb" stroke="#0083cb" stroke-width="1"/><line x1="232" y1="130" x2="200.48" y2="105.374" stroke="#2b2b33" stroke-width="2" stroke-linecap="round"/><circle cx="200.48" cy="105.374" r="11" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><line x1="232" y1="130" x2="263.52" y2="105.374" stroke="#2b2b33" stroke-width="2" stroke-linecap="round"/><circle cx="263.52" cy="105.374" r="11" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><ellipse cx="223.229" cy="101.311" rx="12" ry="8" fill="#f40086" fill-opacity="0.5" stroke="none" transform="rotate(343 223.229 101.311)"/><ellipse cx="240.771" cy="101.311" rx="12" ry="8" fill="#f40086" fill-opacity="0.5" stroke="none" transform="rotate(377 240.771 101.311)"/><text x="232" y="182" font-size="10.6" text-anchor="middle" fill="#333333" font-weight="700">angular</text><text x="232" y="196" font-size="9.6" text-anchor="middle" fill="#5c5c66">104 graus</text><text x="232" y="220" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">H2O</text><rect x="310" y="54" width="124" height="150" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><circle cx="372" cy="130" r="15" fill="#0083cb" stroke="#0083cb" stroke-width="1"/><line x1="372" y1="130" x2="337.359" y2="110" stroke="#2b2b33" stroke-width="2" stroke-linecap="round"/><circle cx="337.359" cy="110" r="11" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><line x1="372" y1="130" x2="406.641" y2="110" stroke="#2b2b33" stroke-width="2" stroke-linecap="round"/><circle cx="406.641" cy="110" r="11" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><line x1="372" y1="130" x2="372" y2="170" stroke="#2b2b33" stroke-width="2" stroke-linecap="round"/><circle cx="372" cy="170" r="11" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><text x="372" y="182" font-size="10.6" text-anchor="middle" fill="#333333" font-weight="700">trigonal plana</text><text x="372" y="196" font-size="9.6" text-anchor="middle" fill="#5c5c66">120 graus</text><text x="372" y="220" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">BF3</text><rect x="450" y="54" width="124" height="150" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><circle cx="512" cy="130" r="15" fill="#0083cb" stroke="#0083cb" stroke-width="1"/><line x1="512" y1="130" x2="475.748" y2="113.095" stroke="#2b2b33" stroke-width="2" stroke-linecap="round"/><circle cx="475.748" cy="113.095" r="11" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><line x1="512" y1="130" x2="548.252" y2="113.095" stroke="#2b2b33" stroke-width="2" stroke-linecap="round"/><circle cx="548.252" cy="113.095" r="11" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><line x1="512" y1="130" x2="508.514" y2="169.848" stroke="#2b2b33" stroke-width="2" stroke-linecap="round"/><circle cx="508.514" cy="169.848" r="11" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><ellipse cx="512" cy="100" rx="12" ry="8" fill="#f40086" fill-opacity="0.5" stroke="none" transform="rotate(360 512 100)"/><text x="512" y="182" font-size="10.6" text-anchor="middle" fill="#333333" font-weight="700">piramidal</text><text x="512" y="196" font-size="9.6" text-anchor="middle" fill="#5c5c66">107 graus</text><text x="512" y="220" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">NH3</text><rect x="590" y="54" width="124" height="150" rx="8" fill="#fff" stroke="#d4d6df" stroke-width="1.2"/><circle cx="652" cy="130" r="15" fill="#0083cb" stroke="#0083cb" stroke-width="1"/><line x1="652" y1="130" x2="614.412" y2="116.319" stroke="#2b2b33" stroke-width="2" stroke-linecap="round"/><circle cx="614.412" cy="116.319" r="11" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><line x1="652" y1="130" x2="689.588" y2="116.319" stroke="#2b2b33" stroke-width="2" stroke-linecap="round"/><circle cx="689.588" cy="116.319" r="11" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><line x1="652" y1="130" x2="658.946" y2="169.392" stroke="#2b2b33" stroke-width="2" stroke-linecap="round"/><circle cx="658.946" cy="169.392" r="11" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><line x1="652" y1="130" x2="632" y2="164.641" stroke="#2b2b33" stroke-width="2" stroke-linecap="round"/><circle cx="632" cy="164.641" r="11" fill="#fff" stroke="#8a8a93" stroke-width="1.6"/><text x="652" y="182" font-size="10.6" text-anchor="middle" fill="#333333" font-weight="700">tetraedrica</text><text x="652" y="196" font-size="9.6" text-anchor="middle" fill="#5c5c66">109 graus</text><text x="652" y="220" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">CH4</text><text x="130" y="246" font-size="10" text-anchor="start" fill="#f40086" font-weight="600">rosa: pares não ligantes, que ocupam mais espaço e fecham o angulo</text><rect x="20" y="258" width="700" height="46" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="278" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">geometria mais polaridade decide quase tudo</text><text x="370" y="296" font-size="10.2" text-anchor="middle" fill="#5c5c66">Solubilidade, ponto de ebulicao, forma das proteínas e a própria dupla helice vem das forças intermoleculares.</text></svg>
A repulsão entre pares de elétrons define o formato da molécula.

A ideia é simples: os pares de elétrons em volta do átomo central se **repelem** e tentam ficar o mais longe possível uns dos outros. Os pares que não participam de ligações (pares isolados) empurram com mais força e "apertam" os ângulos.

| Regiões de elétrons | Pares isolados | Forma da molécula | Ângulo | Exemplo |
|---|---|---|---|---|
| 2 | 0 | linear | 180° | \(\ce{CO2}\) |
| 3 | 0 | trigonal plana | 120° | \(\ce{BF3}\) |
| 4 | 0 | tetraédrica | 109,5° | \(\ce{CH4}\) |
| 4 | 1 | piramidal | cerca de 107° | \(\ce{NH3}\) |
| 4 | 2 | angular | cerca de 104,5° | \(\ce{H2O}\) |
| 5 | 0 | bipirâmide trigonal | 90° e 120° | \(\ce{PCl5}\) |
| 6 | 0 | octaédrica | 90° | \(\ce{SF6}\) |

Ligações duplas e triplas contam como **uma** região. A forma também se relaciona com a hibridização do átomo central: duas regiões correspondem a \(sp\), três a \(sp^2\) e quatro a \(sp^3\).

## Quando uma molécula é polar

A polaridade da molécula inteira depende da **soma** dos efeitos de cada ligação, levando em conta as direções, como numa soma de vetores (tema 6). Por isso:

- o \(\ce{CO2}\) tem ligações polares, mas é **apolar**: as duas ligações puxam com a mesma força em sentidos opostos e se anulam, porque a molécula é reta;
- a água é **polar**: por ser angular, os efeitos das duas ligações não se anulam.

Daí vem a regra "semelhante dissolve semelhante": substâncias polares se dissolvem em água; substâncias apolares se dissolvem em solventes orgânicos ou na parte gordurosa das membranas celulares.

## Forças entre moléculas

As moléculas também se atraem umas às outras. Da mais fraca para a mais forte, em geral:

- **forças de dispersão de London:** existem em todas as moléculas e ficam mais fortes em moléculas maiores;
- **dipolo-dipolo:** atração entre moléculas polares;
- **ligação de hidrogênio:** um hidrogênio ligado a N, O ou F é atraído por um par isolado de outro átomo de N, O ou F; é a mais forte das três;
- **íon-dipolo:** atração entre íons e moléculas polares, como no sal dissolvido em água.

Essas forças explicam, por exemplo, por que a água (massa molar de 18 g/mol) ferve a 100 °C, enquanto o \(\ce{H2S}\) (34 g/mol, mais pesado) ferve a cerca de −60 °C: as moléculas de água estão presas umas às outras por muitas ligações de hidrogênio.

## Exemplo resolvido

Classifique \(\ce{NH3}\), \(\ce{CO2}\), \(\ce{H2O}\) e \(\ce{CH4}\) quanto à forma e à polaridade.

| Molécula | Regiões (pares isolados) | Forma | É polar? | Por quê |
|---|---|---|---|---|
| \(\ce{NH3}\) | 4 (1) | piramidal | sim | as ligações não se anulam |
| \(\ce{CO2}\) | 2 (0) | linear | não | as duas ligações se anulam |
| \(\ce{H2O}\) | 4 (2) | angular | sim | a forma é assimétrica |
| \(\ce{CH4}\) | 4 (0) | tetraédrica | não | molécula simétrica, com ligações pouco polares |

> **Atenção, erros comuns:**
> Confundir a disposição dos pares de elétrons (tetraédrica, na água) com a forma da molécula, que considera só os átomos (angular).
> Achar que ter ligações polares basta para a molécula ser polar: a forma decide.
> Chamar a ligação de hidrogênio de ligação covalente: ela é uma atração **entre** moléculas.

## Na prática: a química que mantém a vida

As duas fitas do DNA ficam unidas por ligações de hidrogênio entre as bases (duas entre A e T, três entre G e C). As proteínas se dobram na forma certa graças ao **efeito hidrofóbico** (as partes apolares se escondem da água), a ligações de hidrogênio, a atrações entre cargas e a pontes dissulfeto. Quando um processo de purificação usa sal, álcool ou mudança de pH para separar uma proteína, ele está mexendo justamente nessas interações.
`,
  referencias: [
    "ATKINS, P.; JONES, L. **Princípios de química**: questionando a vida moderna e o meio ambiente. 5. ed. Porto Alegre: Bookman, 2012.",
    "RUSSELL, J. B. **Química geral**. v. 1. 2. ed. São Paulo: Makron Books, 1994.",
    "BROWN, T. L. et al. **Química**: a ciência central. 13. ed. São Paulo: Pearson, 2016.",
    "GILLESPIE, R. J.; NYHOLM, R. S. Inorganic stereochemistry. **Quarterly Reviews, Chemical Society**, v. 11, p. 339-380, 1957.",
  ],
},
{
  id: "r12", num: 12,
  area: "Química Geral e Experimental",
  disciplina: "Química Geral e Experimental",
  titulo: "Estequiometria de reações químicas",
  descricao: "Como calcular as quantidades de reagentes e produtos: mol, balanceamento, reagente limitante, rendimento e pureza, com o exemplo da produção de etanol.",
  tags: ["estequiometria", "mol", "massa molar", "balanceamento", "reagente limitante", "rendimento", "pureza", "fermentação"],
  conteudo: String.raw`
## A "contabilidade" das reações

Estequiometria é o cálculo das quantidades de substâncias que reagem e que são produzidas. É uma pergunta muito prática: quantos quilos de açúcar são necessários para produzir uma tonelada de etanol? Quanto oxigênio uma cultura vai consumir? Quanto de cada reagente comprar para um lote de produção?

Tudo se apoia na **conservação da massa**, descrita por Lavoisier: numa reação, os átomos não surgem nem desaparecem, apenas se reorganizam. Em engenharia de bioprocessos, esse é o mesmo princípio dos **balanços de massa** (tema 43).

## O mol e a massa molar

Átomos e moléculas são pequenos demais para serem contados um a um. Por isso, os químicos contam em "pacotes":

- **Mol:** é a quantidade que contém \(6{,}022\times10^{23}\) partículas (o número de Avogadro). Funciona como uma "dúzia" gigante.
- **Massa molar (\(M\)):** é a massa de 1 mol da substância, em gramas por mol. Calcula-se somando as massas atômicas da tabela periódica. A glicose, \(\ce{C6H12O6}\), tem \(M \approx 180\) g/mol.
- **A conversão central:** \(n = \dfrac{m}{M}\) (número de mols = massa dividida pela massa molar).

## Balanceando a equação

Os números colocados na frente de cada substância (os **coeficientes**) garantem que haja o mesmo número de átomos de cada elemento dos dois lados da reação. Uma estratégia por tentativas: comece pelo elemento que aparece em menos substâncias, deixe o hidrogênio e o oxigênio por último e, ao final, confira tudo.

A respiração da glicose, balanceada:

\[ \ce{C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O} \]

Conferindo: há 6 átomos de carbono, 12 de hidrogênio e 18 de oxigênio de cada lado.

Os coeficientes indicam **proporções em mols**: 1 mol de glicose reage com 6 mols de oxigênio e produz 6 mols de gás carbônico e 6 mols de água.

## O roteiro de qualquer cálculo

<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" role="img"><title>Estequiometria</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">O caminho das contas de estequiometria</text><rect x="36" y="66" width="128" height="58" rx="8" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.4"/><text x="100" y="90" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">massa do</text><text x="100" y="106" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">reagente</text><line x1="168" y1="95" x2="202" y2="95" stroke="#333333" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-ti)"/><rect x="206" y="66" width="128" height="58" rx="8" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.4"/><text x="270" y="90" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">mols do</text><text x="270" y="106" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">reagente</text><line x1="338" y1="95" x2="372" y2="95" stroke="#333333" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-ti)"/><rect x="376" y="66" width="128" height="58" rx="8" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.4"/><text x="440" y="90" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">mols do</text><text x="440" y="106" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">produto</text><line x1="508" y1="95" x2="542" y2="95" stroke="#333333" stroke-width="1.8" stroke-linecap="round" marker-end="url(#a-ti)"/><rect x="546" y="66" width="128" height="58" rx="8" fill="#e5f6ee" stroke="#0a8f5e" stroke-width="1.4"/><text x="610" y="90" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">massa do</text><text x="610" y="106" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">produto</text><text x="185" y="146" font-size="9.6" text-anchor="middle" fill="#5c5c66">dividir pela massa molar</text><text x="355" y="146" font-size="9.6" text-anchor="middle" fill="#a300bc" font-weight="700">usar os coeficientes</text><text x="355" y="160" font-size="9.6" text-anchor="middle" fill="#5c5c66">da equação balanceada</text><text x="525" y="146" font-size="9.6" text-anchor="middle" fill="#5c5c66">multiplicar pela massa molar</text><rect x="20" y="182" width="680" height="86" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="360" y="204" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">tres armadilhas frequentes</text><text x="140" y="228" font-size="10.6" text-anchor="middle" fill="#f40086" font-weight="700">reagente limitante</text><text x="140" y="246" font-size="9.6" text-anchor="middle" fill="#5c5c66">e ele que define o quanto se forma</text><text x="360" y="228" font-size="10.6" text-anchor="middle" fill="#f40086" font-weight="700">rendimento</text><text x="360" y="246" font-size="9.6" text-anchor="middle" fill="#5c5c66">o real sempre fica abaixo do teorico</text><text x="580" y="228" font-size="10.6" text-anchor="middle" fill="#f40086" font-weight="700">pureza</text><text x="580" y="246" font-size="9.6" text-anchor="middle" fill="#5c5c66">nem toda a massa pesada e reagente</text></svg>
Toda conta de estequiometria passa pelo mol.

1. Escreva a equação e **balanceie**.
2. Converta o que foi dado para **mols** (a partir de massa, volume de gás ou concentração).
3. Use a **proporção dos coeficientes** para chegar aos mols da substância pedida.
4. Converta o resultado para a unidade pedida.

## Reagente limitante e reagente em excesso

Na prática, os reagentes raramente estão na proporção exata. O **reagente limitante** é o que acaba primeiro, e é ele que determina quanto produto pode ser formado. O outro sobra (reagente em excesso). Uma comparação simples: com 10 pães e 3 fatias de queijo, só dá para montar 3 sanduíches; o queijo é o limitante.

Para descobrir qual é o limitante, divida os mols disponíveis de cada reagente pelo seu coeficiente na equação. **O menor resultado indica o limitante.**

**Exemplo** (com massas molares arredondadas, H = 1 e O = 16): misturam-se 4 g de hidrogênio e 40 g de oxigênio, que reagem segundo \(\ce{2 H2 + O2 -> 2 H2O}\).

- Hidrogênio: \(4/2 = 2\) mols; dividindo pelo coeficiente 2, dá 1,0.
- Oxigênio: \(40/32 = 1{,}25\) mol; dividindo pelo coeficiente 1, dá 1,25.

O hidrogênio é o limitante. Formam-se 2 mols de água (36 g) e sobram \(1{,}25 - 1 = 0{,}25\) mol de oxigênio (8 g). A massa total se conserva: \(4 + 40 = 36 + 8\). ✓

## Rendimento e pureza

Na vida real, nem tudo sai como na equação:

- A **pureza** diz quanto da matéria-prima é realmente a substância de interesse. Um açúcar com 90% de pureza tem 90 g de açúcar a cada 100 g.
- O **rendimento** compara o que se obteve com o que, em teoria, poderia ter sido obtido.

\[ \text{Rendimento (\%)} = \frac{\text{quantidade obtida}}{\text{quantidade teórica}}\times 100 \qquad\qquad \text{Pureza (\%)} = \frac{\text{massa da substância de interesse}}{\text{massa da amostra}}\times 100 \]

A pureza corrige a matéria-prima **antes** do cálculo; o rendimento corrige o produto **depois**.

## Exemplo resolvido: produzindo etanol

Na fermentação alcoólica, as leveduras transformam glicose em etanol e gás carbônico:

\[ \ce{C6H12O6 -> 2 C2H5OH + 2 CO2} \]

Um lote contém 360 g de açúcar com 90% de glicose, e a fermentação atinge 85% do rendimento teórico. Quanto etanol se obtém? (Massas molares: glicose 180,16 g/mol; etanol 46,07 g/mol; gás carbônico 44,01 g/mol.)

**Passo 1, corrigir a pureza:** há \(0{,}90\times 360 = 324\) g de glicose, ou \(324/180{,}16 \approx 1{,}798\) mol.

**Passo 2, usar a proporção:** cada mol de glicose dá 2 mols de etanol. Então, em teoria, \(2\times 1{,}798 = 3{,}597\) mols, ou \(3{,}597\times 46{,}07 \approx 165{,}7\) g de etanol.

**Passo 3, aplicar o rendimento:** \(0{,}85\times 165{,}7 \approx 140{,}9\) g de etanol.

**Conferência pelo balanço de massa (no caso teórico):** o gás carbônico formado seria \(3{,}597\times 44{,}01 \approx 158{,}3\) g. Somando, \(165{,}7 + 158{,}3 = 324{,}0\) g, exatamente a glicose consumida. ✓

A relação \(\dfrac{2\times 46{,}07}{180{,}16} \approx 0{,}511\) grama de etanol por grama de glicose é o **rendimento estequiométrico máximo** (conhecido como rendimento de Gay-Lussac), usado como referência para avaliar a eficiência das usinas de álcool. Na prática, as leveduras desviam parte do açúcar para crescer e para formar outros produtos, como o glicerol, e as eficiências industriais ficam abaixo desse limite.

> **Atenção, erros comuns:**
> Usar a proporção em **massa** em vez da proporção em **mols** dada pelos coeficientes.
> Escolher o limitante pela menor massa (ou pelo menor número de mols) sem dividir pelo coeficiente.
> Aplicar a pureza no produto e o rendimento no reagente: é o contrário.

## Para fixar

- Todo cálculo passa por mols: massa → mols → proporção → mols → massa.
- O limitante é o reagente com a menor razão entre mols disponíveis e coeficiente.
- A pureza corrige a entrada; o rendimento corrige a saída.
- Conferir pelo balanço de massa revela a maioria dos erros.
`,
  referencias: [
    "ATKINS, P.; JONES, L. **Princípios de química**: questionando a vida moderna e o meio ambiente. 5. ed. Porto Alegre: Bookman, 2012.",
    "RUSSELL, J. B. **Química geral**. v. 1. 2. ed. São Paulo: Makron Books, 1994.",
    "KOTZ, J. C.; TREICHEL, P. M.; WEAVER, G. C. **Química geral e reações químicas**. v. 1. São Paulo: Cengage Learning, 2009.",
    "LIMA, U. A. et al. (coord.). **Biotecnologia industrial**. v. 3: Processos fermentativos e enzimáticos. São Paulo: Blucher, 2001.",
  ],
},
{
  id: "r13", num: 13,
  area: "Química Geral e Experimental",
  disciplina: "Química Geral e Experimental",
  titulo: "Soluções e concentração",
  descricao: "As formas de expressar concentração, como converter de uma para outra, como diluir e misturar soluções e como prepará-las corretamente no laboratório.",
  tags: ["solução", "concentração", "molaridade", "diluição", "C1V1", "preparo de soluções", "balão volumétrico", "soro fisiológico"],
  conteudo: String.raw`
## Por que isso é tão importante

Preparar soluções é uma das tarefas mais frequentes em qualquer laboratório de biotecnologia: meios de cultura, tampões, reagentes de análise, soluções de antibiótico. Um erro de concentração pode inibir um microrganismo, desnaturar uma enzima ou invalidar uma análise inteira. Por isso vale dominar bem as contas e a técnica.

## Os termos básicos

Uma **solução** é uma mistura homogênea (de aparência uniforme) de um **soluto**, a substância dissolvida, num **solvente**, quase sempre água em biologia. A **solubilidade** é a quantidade máxima de soluto que se dissolve numa certa quantidade de solvente, a uma dada temperatura.

## As formas de expressar a concentração

<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img"><title>Concentração e diluicao</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">As formas de expressar concentração e como diluir</text><rect x="24" y="56" width="168" height="56" rx="8" fill="#fff" stroke="#0083cb" stroke-width="1.4"/><text x="108" y="78" font-size="11.5" text-anchor="middle" fill="#0083cb" font-weight="700">molaridade</text><text x="108" y="96" font-size="9.6" text-anchor="middle" fill="#5c5c66">mol por litro de solução</text><rect x="204" y="56" width="168" height="56" rx="8" fill="#fff" stroke="#a300bc" stroke-width="1.4"/><text x="288" y="78" font-size="11.5" text-anchor="middle" fill="#a300bc" font-weight="700">g/L</text><text x="288" y="96" font-size="9.6" text-anchor="middle" fill="#5c5c66">massa por litro</text><rect x="384" y="56" width="168" height="56" rx="8" fill="#fff" stroke="#f40086" stroke-width="1.4"/><text x="468" y="78" font-size="11.5" text-anchor="middle" fill="#f40086" font-weight="700">% m/v</text><text x="468" y="96" font-size="9.6" text-anchor="middle" fill="#5c5c66">gramas em 100 mL</text><rect x="564" y="56" width="168" height="56" rx="8" fill="#fff" stroke="#c67600" stroke-width="1.4"/><text x="648" y="78" font-size="11.5" text-anchor="middle" fill="#c67600" font-weight="700">molalidade</text><text x="648" y="96" font-size="9.6" text-anchor="middle" fill="#5c5c66">mol por kg de solvente</text><text x="24" y="146" font-size="12" text-anchor="start" fill="#333333" font-weight="700">diluicao: o numero de mols não muda</text><rect x="60" y="164" width="70" height="90" rx="6" fill="#0083cb" stroke="#0083cb" stroke-width="1.4"/><text x="95" y="214" font-size="9.4" text-anchor="middle" fill="#fff" font-weight="700">concentrada</text><line x1="142" y1="208" x2="186" y2="208" stroke="#333333" stroke-width="2" stroke-linecap="round" marker-end="url(#a-ti)"/><text x="164" y="196" font-size="9.6" text-anchor="middle" fill="#5c5c66">+ água</text><rect x="196" y="164" width="150" height="90" rx="6" fill="#e4f2fb" stroke="#0083cb" stroke-width="1.4"/><text x="271" y="214" font-size="10" text-anchor="middle" fill="#0083cb" font-weight="700">diluida</text><text x="205" y="274" font-size="13" text-anchor="start" fill="#333333" font-weight="700">C1 V1 = C2 V2</text><rect x="400" y="150" width="320" height="110" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="560" y="172" font-size="11.5" text-anchor="middle" fill="#333333" font-weight="700">no laboratório</text><text x="560" y="194" font-size="10" text-anchor="middle" fill="#5c5c66">Soluções-estoque concentradas economizam espaço</text><text x="560" y="210" font-size="10" text-anchor="middle" fill="#5c5c66">e reduzem erro: pipeta-se um volume pequeno e</text><text x="560" y="226" font-size="10" text-anchor="middle" fill="#5c5c66">completa-se ate o menisco do balao volumetrico.</text><text x="560" y="248" font-size="10" text-anchor="middle" fill="#333333" font-weight="600">Meios de cultura são preparados assim.</text></svg>
As unidades mais usadas e a conta da diluição.

| Grandeza | Como se calcula | Unidade usual |
|---|---|---|
| Concentração comum | massa de soluto dividida pelo volume da **solução** | g/L |
| Concentração em mols (molaridade) | número de mols de soluto dividido pelo volume da **solução** | mol/L |
| Porcentagem massa/massa | gramas de soluto em 100 g de solução | % (m/m) |
| Porcentagem massa/volume | gramas de soluto em 100 mL de solução | % (m/v) |
| Porcentagem volume/volume | mL de soluto em 100 mL de solução | % (v/v) |
| Partes por milhão | miligramas de soluto por quilograma (ou por litro, em soluções aquosas diluídas) | ppm |
| Molalidade | mols de soluto por quilograma de **solvente** | mol/kg |

Duas conversões muito úteis:

- De mol/L para g/L: multiplica-se pela massa molar. \(C = M \times M_{molar}\).
- De porcentagem em massa e densidade (\(d\), em g/mL) para mol/L: \(M = \dfrac{10\cdot d\cdot \%}{M_{molar}}\).

**Exemplo:** o ácido clorídrico concentrado vendido comercialmente tem 37% em massa e densidade de 1,19 g/mL. A sua concentração é \(M = \dfrac{10\times1{,}19\times37}{36{,}46} \approx 12{,}1\) mol/L.

## Diluição e mistura

Ao **diluir** uma solução (acrescentar solvente), a quantidade de soluto não muda; só o volume aumenta. Por isso:

\[ C_1 V_1 = C_2 V_2 \]

O índice 1 se refere à solução concentrada que você tem; o índice 2, à solução diluída que você quer preparar.

Ao **misturar** duas soluções do mesmo soluto, a concentração final é a média ponderada pelos volumes:

\[ C_f = \frac{C_1 V_1 + C_2 V_2}{V_1 + V_2} \]

(considerando que os volumes se somam, o que é uma boa aproximação para soluções diluídas).

## Preparando uma solução corretamente

1. **Calcule** a massa de soluto (ou o volume de solução concentrada) necessária.
2. **Pese** numa balança analítica (ou meça com uma pipeta volumétrica).
3. **Dissolva** num béquer com uma parte do solvente.
4. **Transfira tudo** para um **balão volumétrico**, lavando o béquer algumas vezes com pequenas porções de solvente e juntando essas lavagens no balão. Isso garante que nenhum soluto fique para trás (transferência quantitativa).
5. **Complete o volume** até a marca do balão (o traço de aferição), com o fundo do menisco na altura dos olhos, e **misture** invertendo o balão várias vezes.
6. **Identifique** o frasco com o nome da solução, a concentração, a data e o responsável.

Vidrarias **volumétricas** (balão volumétrico, pipeta volumétrica, bureta) são as indicadas quando o volume precisa ser exato. Béqueres e provetas servem para medidas aproximadas. E uma regra de segurança essencial: ao diluir ácidos concentrados, coloque sempre **o ácido na água**, aos poucos e na capela, porque a mistura libera muito calor e pode espirrar.

## Exemplo resolvido

**(a) Preparar 250,0 mL de uma solução de NaCl 0,150 mol/L** (massa molar do NaCl: 58,44 g/mol).

Número de mols necessário: \(n = 0{,}150\ \text{mol/L}\times0{,}2500\ \text{L} = 0{,}0375\) mol. Massa a pesar: \(m = 0{,}0375\times58{,}44 \approx 2{,}19\) g.

**(b) A partir dela, preparar 100,0 mL de uma solução 0,0300 mol/L.**

\[ V_1 = \frac{C_2V_2}{C_1} = \frac{0{,}0300\times100{,}0}{0{,}150} = 20{,}0\ \text{mL} \]

Pipetam-se 20,00 mL da solução (a) para um balão de 100 mL e completa-se com água até a marca.

## Na prática, no laboratório de biotecnologia

- **Soro fisiológico:** é uma solução de NaCl a 0,9% (m/v), ou seja, 9 g/L, o que dá \(9/58{,}44 \approx 0{,}154\) mol/L. Como cada NaCl libera dois íons na água, a concentração de partículas dissolvidas é cerca de 0,308 mol/L, parecida com a do interior das células. Por isso o soro não faz as células murcharem nem incharem: é uma solução **isotônica** (tema 31).
- **Diluições seriadas:** para contar microrganismos, dilui-se a amostra várias vezes, sempre de 10 em 10 vezes (tema 34). No tubo \(k\), a concentração é \(C_0/10^k\).
- **Soluções-estoque:** antibióticos, vitaminas e sais são guardados em soluções concentradas (por exemplo, "1000×", mil vezes mais concentradas do que o necessário). Na hora de usar, basta adicionar 1 mL de estoque para cada litro de meio.

> **Atenção, erros comuns:**
> Usar o volume do **solvente** em vez do volume da **solução** no cálculo da molaridade.
> Esquecer de converter mililitros em litros.
> Na diluição, somar a água ao volume final desejado: \(V_2\) já é o volume **final total**.

## Para fixar

- g/L e mol/L se convertem pela massa molar.
- Diluir conserva a quantidade de soluto: \(C_1V_1 = C_2V_2\).
- Precisão exige vidraria volumétrica e transferência quantitativa.
`,
  referencias: [
    "BACCAN, N. et al. **Química analítica quantitativa elementar**. 3. ed. São Paulo: Edgard Blücher, 2001.",
    "ATKINS, P.; JONES, L. **Princípios de química**: questionando a vida moderna e o meio ambiente. 5. ed. Porto Alegre: Bookman, 2012.",
    "HARRIS, D. C. **Análise química quantitativa**. 8. ed. Rio de Janeiro: LTC, 2012.",
    "SKOOG, D. A. et al. **Fundamentos de química analítica**. 9. ed. São Paulo: Cengage Learning, 2014.",
  ],
},
{
  id: "r14", num: 14,
  area: "Química Geral e Experimental",
  disciplina: "Química Geral e Experimental",
  titulo: "Equilíbrio químico e princípio de Le Chatelier",
  descricao: "O que é o equilíbrio químico, como calcular a constante de equilíbrio, como prever para onde uma reação vai e como deslocar o equilíbrio a favor do produto desejado.",
  tags: ["equilíbrio químico", "constante de equilíbrio", "Kc", "Kp", "quociente de reação", "Le Chatelier", "tabela ICE"],
  conteudo: String.raw`
## O que é o equilíbrio químico

Muitas reações não vão "até o fim": os produtos também reagem entre si e voltam a formar os reagentes. São as **reações reversíveis**. No começo, a reação direta é rápida; à medida que os produtos se acumulam, a reação inversa ganha força. Em algum momento, as duas passam a acontecer com a **mesma velocidade**. A partir daí, as concentrações param de mudar. Esse é o **equilíbrio químico**.

O ponto importante é que, no equilíbrio, as reações **não param**: continuam acontecendo, só que em velocidades iguais (por isso se fala em equilíbrio **dinâmico**). É como uma escada rolante em que alguém sobe enquanto outra pessoa desce na mesma velocidade: o número de pessoas em cada andar não muda.

## A constante de equilíbrio

Para uma reação genérica \(\ce{aA + bB <=> cC + dD}\), a **constante de equilíbrio** é:

\[ K_c = \frac{[\mathrm{C}]^c\,[\mathrm{D}]^d}{[\mathrm{A}]^a\,[\mathrm{B}]^b} \]

Os colchetes indicam concentrações em mol/L **no equilíbrio**, e os expoentes são os coeficientes da equação balanceada. Para gases, também se usa \(K_p\), escrita com pressões parciais; as duas se relacionam por \(K_p = K_c\,(RT)^{\Delta n}\), em que \(\Delta n\) é a variação do número de mols de gás.

- Sólidos e líquidos puros (e o solvente, em soluções diluídas) **não entram** na expressão.
- Se \(K\) é muito grande, no equilíbrio há muito mais produtos do que reagentes; se é muito pequena, o contrário.
- \(K\) depende **apenas da temperatura**.

## Para onde a reação vai? O quociente de reação

O **quociente de reação** \(Q\) tem a mesma fórmula de \(K\), mas usa as concentrações de um momento qualquer, não necessariamente o de equilíbrio. Comparando \(Q\) com \(K\), sabe-se o que vai acontecer:

- \(Q \lt K\): há reagentes "sobrando"; a reação avança no sentido de formar produtos;
- \(Q \gt K\): há produtos "sobrando"; a reação volta, formando reagentes;
- \(Q = K\): o sistema já está em equilíbrio.

## Exemplo resolvido: a tabela de equilíbrio

A uma certa temperatura, a reação \(\ce{H2(g) + I2(g) <=> 2 HI(g)}\) tem \(K_c = 49\). Colocam-se 1,0 mol/L de \(\ce{H2}\) e 1,0 mol/L de \(\ce{I2}\) num recipiente. Quais serão as concentrações no equilíbrio?

Organiza-se uma tabela com o **início**, a **variação** e o **equilíbrio**. Se \(x\) mol/L de \(\ce{H2}\) reagem, a mesma quantidade de \(\ce{I2}\) reage e formam-se \(2x\) de HI:

| | \(\ce{H2}\) | \(\ce{I2}\) | \(\ce{HI}\) |
|---|---|---|---|
| Início | 1,0 | 1,0 | 0 |
| Variação | \(-x\) | \(-x\) | \(+2x\) |
| Equilíbrio | \(1{,}0 - x\) | \(1{,}0 - x\) | \(2x\) |

Substituindo na expressão de \(K_c\):

\[ \frac{(2x)^2}{(1-x)^2} = 49 \;\Rightarrow\; \frac{2x}{1-x} = 7 \;\Rightarrow\; x = \frac{7}{9} \approx 0{,}778 \]

No equilíbrio, \([\ce{HI}] \approx 1{,}56\) mol/L e \([\ce{H2}] = [\ce{I2}] \approx 0{,}22\) mol/L. Conferindo: \(1{,}556^2/0{,}222^2 \approx 49\). ✓

## O princípio de Le Chatelier

<svg viewBox="0 0 740 290" xmlns="http://www.w3.org/2000/svg" role="img"><title>Le Chatelier</title><defs><marker id="a-az" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0083cb"/></marker><marker id="a-ti" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#333333"/></marker><marker id="a-ve" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#0a8f5e"/></marker><marker id="a-vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#d33a4e"/></marker><marker id="a-rx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#a300bc"/></marker><marker id="a-rs" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#f40086"/></marker><marker id="a-la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#c67600"/></marker><marker id="a-cz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="#8a8a93"/></marker></defs><text x="20" y="26" font-size="13.5" text-anchor="start" fill="#333333" font-weight="700">Principio de Le Chatelier: o sistema reage a perturbacao</text><circle cx="370" cy="120" r="44" fill="#fff" stroke="#333333" stroke-width="2"/><text x="370" y="116" font-size="11" text-anchor="middle" fill="#333333" font-weight="700">equilíbrio</text><text x="370" y="132" font-size="10" text-anchor="middle" fill="#5c5c66">dinamico</text><rect x="20" y="70" width="260" height="48" rx="7" fill="#fff" stroke="#0a8f5e" stroke-width="1.3"/><text x="150" y="90" font-size="11" text-anchor="middle" fill="#0a8f5e" font-weight="700">aumenta reagente</text><text x="150" y="107" font-size="9.6" text-anchor="middle" fill="#5c5c66">desloca para produtos</text><line x1="284" y1="94" x2="326" y2="120" stroke="#0a8f5e" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-ve)"/><rect x="460" y="70" width="260" height="48" rx="7" fill="#fff" stroke="#d33a4e" stroke-width="1.3"/><text x="590" y="90" font-size="11" text-anchor="middle" fill="#d33a4e" font-weight="700">aumenta produto</text><text x="590" y="107" font-size="9.6" text-anchor="middle" fill="#5c5c66">desloca para reagentes</text><line x1="456" y1="94" x2="414" y2="120" stroke="#d33a4e" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-vm)"/><rect x="20" y="196" width="260" height="48" rx="7" fill="#fff" stroke="#0083cb" stroke-width="1.3"/><text x="150" y="216" font-size="11" text-anchor="middle" fill="#0083cb" font-weight="700">aumenta pressão</text><text x="150" y="233" font-size="9.6" text-anchor="middle" fill="#5c5c66">vai para o lado com menos mols de gas</text><line x1="284" y1="220" x2="326" y2="120" stroke="#0083cb" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-az)"/><rect x="460" y="196" width="260" height="48" rx="7" fill="#fff" stroke="#c67600" stroke-width="1.3"/><text x="590" y="216" font-size="11" text-anchor="middle" fill="#c67600" font-weight="700">aumenta temperatura</text><text x="590" y="233" font-size="9.6" text-anchor="middle" fill="#5c5c66">favorece o sentido endotermico</text><line x1="456" y1="220" x2="414" y2="120" stroke="#c67600" stroke-width="1.6" stroke-linecap="round" marker-end="url(#a-la)"/><rect x="20" y="246" width="700" height="40" rx="8" fill="#f6f7fb" stroke="#d4d6df" stroke-width="1.2"/><text x="370" y="270" font-size="10.8" text-anchor="middle" fill="#333333">O catalisador acelera os dois sentidos: chega mais rápido ao mesmo equilíbrio, sem desloca-lo.</text></svg>
Cada perturbação desloca o equilíbrio no sentido que a alivia.

> Quando um sistema em equilíbrio sofre uma perturbação, ele reage de modo a **diminuir** o efeito dessa perturbação.

| Perturbação | Como o equilíbrio responde | A constante \(K\) muda? |
|---|---|---|
| Acrescentar reagente ou retirar produto | desloca-se no sentido de formar produtos | não |
| Aumentar a pressão (diminuir o volume) | desloca-se para o lado com **menos** mols de gás | não |
| Aumentar a temperatura | favorece o sentido que **absorve calor** (endotérmico) | **sim** |
| Acrescentar um catalisador | não desloca; o equilíbrio só é atingido mais depressa | não |
| Acrescentar um gás que não reage, mantendo o volume | não desloca | não |

**Um caso industrial clássico, a síntese da amônia:** \(\ce{N2 + 3 H2 <=> 2 NH3}\), uma reação que libera calor. Pressão alta favorece a amônia, porque 4 mols de gás se transformam em 2. Temperatura baixa também favoreceria, mas a reação ficaria lenta demais. Por isso, a indústria trabalha numa temperatura intermediária, usa um catalisador de ferro e retira a amônia continuamente. É um **meio-termo entre o que favorece o equilíbrio e o que favorece a velocidade**.

## A ligação com a energia livre

\[ \Delta G^\circ = -RT\ln K \]

Uma constante maior que 1 corresponde a \(\Delta G^\circ\) negativo, ou seja, a uma reação espontânea nas condições padrão. Essa relação liga o equilíbrio à energia livre de Gibbs (tema 48).

## Na prática, em biotecnologia

- **Retirar o produto enquanto ele se forma:** em reações reversíveis catalisadas por enzimas, como a produção de ésteres de aroma por lipases, retirar continuamente o produto (ou a água formada) desloca o equilíbrio e aumenta a conversão.
- **Hemoglobina e oxigênio:** a quantidade de oxigênio ligada à hemoglobina se ajusta à concentração de oxigênio do ambiente. É um equilíbrio que se desloca conforme a altitude e conforme o tecido do corpo.
- **O pH do sangue:** é mantido pelo equilíbrio \(\ce{CO2 + H2O <=> H2CO3 <=> H+ + HCO3-}\), um sistema tampão (tema 19).

> **Atenção, erros comuns:**
> Colocar sólidos puros ou a água (o solvente) na expressão de \(K\).
> Achar que o catalisador aumenta a quantidade de produto no equilíbrio: ele só faz o equilíbrio chegar mais rápido.
> Achar que mudar concentrações altera \(K\): só a temperatura faz isso.

## Para fixar

- Equilíbrio é velocidades iguais, e não reação parada.
- Compare \(Q\) com \(K\) para saber para onde a reação vai.
- Le Chatelier prevê o deslocamento; só a temperatura muda o valor de \(K\).
`,
  referencias: [
    "ATKINS, P.; JONES, L. **Princípios de química**: questionando a vida moderna e o meio ambiente. 5. ed. Porto Alegre: Bookman, 2012.",
    "RUSSELL, J. B. **Química geral**. v. 2. 2. ed. São Paulo: Makron Books, 1994.",
    "BROWN, T. L. et al. **Química**: a ciência central. 13. ed. São Paulo: Pearson, 2016.",
    "NELSON, D. L.; COX, M. M. **Princípios de bioquímica de Lehninger**. 7. ed. Porto Alegre: Artmed, 2019.",
  ],
}
);
