/* ============================================================
   BIONEXO - Glossário de termos técnicos
   ------------------------------------------------------------
   Ao ligar as "Dicas" numa questão, os termos abaixo que
   aparecerem no enunciado ficam clicáveis e mostram a definição.

   Campos:
     termo     : palavra/expressão principal (como aparece no texto)
     definicao : explicação breve (1 a 3 frases)
     sinonimos : (opcional) outras grafias/flexões que também destacam
   ============================================================ */
window.BIONEXO = window.BIONEXO || {};
window.BIONEXO.glossario = [
  { termo: "primitiva", definicao: "Uma função F cuja derivada é f (F' = f). Também chamada de antiderivada. Encontrar primitivas é o passo central da integração.", sinonimos: ["primitivas", "antiderivada", "antiderivadas"] },
  { termo: "integral indefinida", definicao: "O conjunto de todas as primitivas de uma função, escrito ∫ f(x) dx = F(x) + C. Sempre inclui a constante de integração C.", sinonimos: ["integrais indefinidas"] },
  { termo: "integral definida", definicao: "O valor ∫ₐᵇ f(x) dx, que mede a área (com sinal) sob a curva entre a e b. Pelo Teorema Fundamental, vale F(b) − F(a).", sinonimos: ["integrais definidas"] },
  { termo: "constante de integração", definicao: "O termo + C que acompanha toda integral indefinida, pois funções que diferem por uma constante têm a mesma derivada." },
  { termo: "equação diferencial", definicao: "Equação que relaciona uma função com suas derivadas. Resolvê-la é encontrar a função (ou família de funções) que a satisfaz.", sinonimos: ["equações diferenciais", "EDO"] },
  { termo: "variáveis separáveis", definicao: "Técnica para EDOs que podem ser escritas como g(y) dy = h(x) dx, permitindo integrar cada lado separadamente.", sinonimos: ["separável", "separáveis"] },
  { termo: "problema de valor inicial", definicao: "Uma equação diferencial acompanhada de uma condição inicial (ex.: y(0) = 1), o que fixa a constante e dá uma solução única.", sinonimos: ["PVI", "valor inicial", "condição inicial"] },
  { termo: "polinômio de Taylor", definicao: "Aproximação de uma função perto de um ponto por um polinômio construído com suas derivadas nesse ponto.", sinonimos: ["série de Taylor", "polinômios de Taylor"] },
  { termo: "resto de Lagrange", definicao: "Expressão que mede o erro cometido ao aproximar uma função pelo seu polinômio de Taylor." },
  { termo: "assíntota", definicao: "Reta da qual o gráfico de uma função se aproxima indefinidamente, sem necessariamente tocá-la.", sinonimos: ["assíntotas", "assintota", "assíntota vertical", "assíntota horizontal"] },
  { termo: "função trigonométrica inversa", definicao: "Funções que desfazem seno, cosseno e tangente (arcsen, arccos, arctg), devolvendo o ângulo a partir do valor.", sinonimos: ["trigonométrica inversa", "arcsen", "arccos", "arctg", "arco-seno", "arcotangente"] },
  { termo: "ortogonalidade", definicao: "Duas funções são ortogonais em um intervalo quando a integral do seu produto nesse intervalo é zero. Base das séries de Fourier.", sinonimos: ["ortogonais", "ortogonal"] },
  { termo: "identidade trigonométrica", definicao: "Igualdade entre expressões trigonométricas válida para todos os valores (ex.: sen²x + cos²x = 1).", sinonimos: ["identidades trigonométricas"] },
  { termo: "integração por substituição", definicao: "Técnica que troca a variável (u = g(x)) para simplificar a integral, invertendo a regra da cadeia.", sinonimos: ["substituição", "mudança de variável"] },
  { termo: "integração por partes", definicao: "Técnica baseada na derivada do produto: ∫ u dv = u·v − ∫ v du.", sinonimos: ["por partes"] },
  { termo: "derivada", definicao: "Taxa de variação instantânea de uma função; a inclinação da reta tangente ao gráfico em um ponto.", sinonimos: ["derivadas"] },
  { termo: "limite", definicao: "Valor do qual os valores de uma função se aproximam quando a variável tende a um ponto.", sinonimos: ["limites"] },
  { termo: "continuidade", definicao: "Uma função é contínua em um ponto quando o limite nele existe e é igual ao valor da função. Graficamente, sem saltos.", sinonimos: ["contínua", "contínuo"] },
  { termo: "cinemática", definicao: "Estudo do movimento. A velocidade é a derivada da posição; a posição é a integral da velocidade." },
  { termo: "discriminante", definicao: "Em ax² + bx + c, o valor Δ = b² − 4ac, que indica o número de raízes reais.", sinonimos: ["delta"] },
  { termo: "michaelis-menten", definicao: "Modelo que descreve a velocidade de reações enzimáticas em função da concentração de substrato.", sinonimos: ["michaelis menten"] },
  { termo: "estequiometria", definicao: "Cálculo das proporções de reagentes e produtos em uma reação química." },

  { termo: "algarismo significativo", definicao: "Dígito que carrega informação confiável em uma medida. O número de algarismos significativos indica a precisão do valor.", sinonimos: ["algarismos significativos"] },
  { termo: "notação científica", definicao: "Forma de escrever números como a × 10ⁿ, com 1 ≤ a < 10, útil para valores muito grandes ou muito pequenos." },
  { termo: "grandeza", definicao: "Tudo que pode ser medido (comprimento, tempo, massa...). Grandezas vetoriais têm direção e sentido; escalares, só valor.", sinonimos: ["grandezas", "grandeza física"] },
  { termo: "vetor", definicao: "Ente matemático com módulo, direção e sentido, usado para representar grandezas como força, velocidade e deslocamento.", sinonimos: ["vetores", "vetorial"] },
  { termo: "módulo", definicao: "O tamanho (valor numérico, sempre não negativo) de um vetor ou de uma quantidade.", sinonimos: ["magnitude"] },
  { termo: "deslocamento", definicao: "Variação de posição de um corpo (vetor que liga a posição inicial à final). Diferente de distância percorrida." },
  { termo: "velocidade", definicao: "Taxa de variação da posição com o tempo. É vetorial (tem direção e sentido); a velocidade escalar é só o módulo.", sinonimos: ["velocidades", "velocidade média", "velocidade instantânea"] },
  { termo: "aceleração", definicao: "Taxa de variação da velocidade com o tempo. Indica se o movimento acelera, freia ou muda de direção.", sinonimos: ["acelerações"] },
  { termo: "trajetória", definicao: "A linha descrita por um corpo em movimento ao longo do tempo." },
  { termo: "referencial", definicao: "Ponto de vista (sistema de coordenadas) a partir do qual se descreve o movimento.", sinonimos: ["sistema de referência", "referencial inercial"] },
  { termo: "movimento retilíneo uniforme", definicao: "Movimento em linha reta com velocidade constante (aceleração nula).", sinonimos: ["MRU"] },
  { termo: "movimento uniformemente variado", definicao: "Movimento com aceleração constante; a velocidade varia linearmente com o tempo.", sinonimos: ["MUV", "uniformemente variado"] },
  { termo: "queda livre", definicao: "Movimento sob ação apenas da gravidade, com aceleração g ≈ 9,8 m/s² para baixo." },
  { termo: "produto escalar", definicao: "Operação entre dois vetores que resulta em um número: a·b = |a||b|cosθ.", sinonimos: ["produto interno"] },
  { termo: "produto vetorial", definicao: "Operação entre dois vetores que resulta em outro vetor perpendicular aos dois: |a×b| = |a||b|senθ." },
  { termo: "componentes", definicao: "As projeções de um vetor nos eixos (por exemplo, componente x e componente y).", sinonimos: ["componente", "decomposição"] },
  { termo: "força", definicao: "Interação capaz de alterar o estado de movimento de um corpo. É uma grandeza vetorial medida em newtons (N).", sinonimos: ["forças", "força resultante"] },
  { termo: "unidade de medida", definicao: "Padrão usado para expressar uma grandeza (metro, segundo, quilograma...). O SI é o sistema internacional dessas unidades.", sinonimos: ["unidades", "SI", "sistema internacional"] },
];
