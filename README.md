# 🧬 Bionexo

Banco de conhecimentos da monitoria de **Engenharia de Bioprocessos e Biotecnologia**:
questões interativas, resumos, mapas mentais, banco de fórmulas pesquisável, ferramentas
de laboratório (LabHacks) e equipe de monitores. Tudo em um site **100% estático** (sem backend).

Identidade visual: tema claro, títulos em **Montserrat Black**, corpo em **Red Hat Display**,
destaques no gradiente `#0083cb` → `#a300bc` → `#f40086` (azul = Questões, roxo = Resumos,
rosa = Mapas Mentais) e ícones do **Google Material Icons**.

## Como abrir

- **Rápido:** dê um duplo-clique em `index.html` (abre no navegador direto do computador).
- **Hospedado:** publique a pasta no GitHub Pages, Netlify ou similar.

> As fórmulas matemáticas são renderizadas por [MathJax](https://www.mathjax.org/) via CDN,
> portanto é preciso estar conectado à internet para vê-las formatadas.

## Estrutura

```
bionexo/
├── index.html          Página inicial
├── questoes.html       Banco de questões + modo simulado cronometrado
├── resumos.html        Resumos
├── mapas.html          Galeria de mapas mentais
├── formulas.html       Banco de fórmulas pesquisável
├── labhacks.html       Ferramentas de laboratório (landing)
├── labhacks-preparo.html    Preparo de soluções + massa molar
├── labhacks-diluicao.html   Diluição simples e seriada
├── labhacks-contador.html   Contador de placas
├── monitores.html      Equipe de monitores
├── sobre.html          Sobre + guia de contribuição
├── css/
│   └── style.css       Design system (tema claro)
├── js/
│   ├── components.js   Cabeçalho (menu suspenso), rodapé e utilidades
│   ├── questoes.js     Lógica da página de questões
│   ├── simulado.js     Modo simulado (na página de questões) + histórico (localStorage)
│   ├── resumos.js      Lógica da página de resumos
│   ├── mapas.js        Lógica da galeria de mapas
│   ├── formulas.js     Busca e acordeão das fórmulas
│   ├── molarmass.js    Motor de massa molar (fórmula/nome + PubChem)
│   ├── labhacks.js     Calculadoras das ferramentas
│   └── monitores.js    Renderização da equipe
├── data/               ← CONTEÚDO (edite aqui)
│   ├── questoes.js
│   ├── resumos.js
│   ├── mapas.js
│   ├── formulas.js
│   └── monitores.js
└── assets/img/         Imagens + textura do hero (hero-pattern.svg)
```

## Adicionar conteúdo (monitores)

Todo o conteúdo fica em `data/`. Cada arquivo tem, no topo, um comentário com o
modelo e a explicação de cada campo. O fluxo é sempre o mesmo:

1. Abra o arquivo correspondente em `data/` (`questoes.js`, `resumos.js`, `mapas.js`, `formulas.js` ou `monitores.js`).
2. Copie um bloco existente e cole **antes do `];`** final.
3. Ajuste os campos e dê um `id` único.
4. Salve e recarregue a página.

### Fórmulas (LaTeX)

Use `\( ... \)` para fórmulas na linha e `\[ ... \]` para fórmulas em destaque.
Exemplo: `\( \mu = \dfrac{\ln(X/X_0)}{t} \)`.

### Imagens

- Questões → `assets/img/questoes/`
- Resumos (capa) → `assets/img/resumos/`
- Mapas mentais → `assets/img/mapas/`

Prefira **PNG** ou **SVG** em boa resolução. Informe o caminho no campo `imagem`
do bloco de dados, por exemplo: `"assets/img/mapas/glicolise.png"`.

## Publicar no GitHub Pages

1. Crie um repositório e envie estes arquivos.
2. Em **Settings → Pages**, selecione o branch principal e a pasta raiz (`/`).
3. O site ficará disponível em `https://<usuario>.github.io/<repositorio>/`.

## Tecnologias

HTML + CSS + JavaScript puro · MathJax (CDN) · fonte Inter (Google Fonts).
Sem build, sem dependências para instalar.
