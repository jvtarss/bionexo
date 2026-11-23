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
];
