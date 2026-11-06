# 🖥️ Rodar o Bionexo localmente

O Bionexo é um site **estático** (só HTML, CSS e JS). Não precisa instalar nada
nem compilar — basta exibir os arquivos no navegador. Abaixo, três formas, da
mais simples à mais completa.

> **Única dependência online:** as fórmulas matemáticas (MathJax) e a fonte Inter
> vêm de um CDN. Portanto, para ver as fórmulas formatadas é preciso estar
> conectado à internet. Todo o resto funciona offline.

---

## Opção A — Abrir direto (mais rápido)

Como o site não usa `fetch()` (os dados são carregados por `<script>`), você pode
simplesmente abrir o arquivo no navegador:

1. Vá até a pasta `C:\Users\joaov\Documents\bionexo`.
2. Dê **duplo-clique em `index.html`**.

Pelo PowerShell, da pasta do projeto:

```powershell
Start-Process .\index.html
```

✔ Bom para conferir rápido.
✘ A barra de endereço mostra `file:///...` — alguns recursos avançados de
navegador ficam limitados nesse modo. Para algo mais fiel à hospedagem real,
use a Opção B.

---

## Opção B — Servidor local com Python (recomendado)

Você já tem Python instalado. Isso serve o site em `http://localhost:8000`,
igual a um servidor de verdade.

Na pasta do projeto, no **PowerShell**:

```powershell
cd C:\Users\joaov\Documents\bionexo
py -m http.server 8000
```

Depois abra no navegador:

```
http://localhost:8000
```

- Para **parar** o servidor: pressione `Ctrl + C` na janela do PowerShell.
- Se a porta 8000 estiver ocupada, troque o número (ex.: `py -m http.server 5500`).
- Se `py` não funcionar, tente `python -m http.server 8000`.

Atalho opcional — abrir o navegador automaticamente:

```powershell
cd C:\Users\joaov\Documents\bionexo
Start-Process "http://localhost:8000"; py -m http.server 8000
```

---

## Opção C — VS Code + Live Server (recarrega sozinho ao salvar)

Ótimo para quem está **editando** o conteúdo (questões, resumos, mapas):

1. Abra a pasta do projeto no **Visual Studio Code**.
2. Instale a extensão **Live Server** (autor: Ritwick Dey).
3. Clique com o botão direito em `index.html` → **Open with Live Server**
   (ou no botão **Go Live** na barra inferior).

A cada vez que você salvar um arquivo em `data/`, a página recarrega sozinha.

---

## Ver no celular (mesma rede Wi-Fi)

Com o servidor Python rodando (Opção B), descubra o IP do computador:

```powershell
ipconfig | Select-String "IPv4"
```

No celular (conectado no **mesmo Wi-Fi**), abra no navegador:

```
http://SEU_IP:8000        (ex.: http://192.168.0.15:8000)
```

> Se não abrir, pode ser o **Firewall do Windows**. Na primeira execução, o
> Windows costuma perguntar se deseja permitir o Python na rede — autorize para
> redes **privadas**. Use apenas em redes confiáveis e desligue o servidor
> (`Ctrl + C`) quando terminar.

---

## Perguntas rápidas

**As fórmulas aparecem como `\( ... \)` em texto cru.**
Você está sem internet (o MathJax não carregou) ou a página ainda está
renderizando — aguarde 1–2 s. Para funcionamento 100% offline, peça para
baixarmos o MathJax localmente.

**Editei `data/questoes.js` e nada mudou.**
Atualize a página (`Ctrl + F5` para ignorar o cache). Confirme que manteve a
vírgula entre os blocos e não apagou o `];` no final do arquivo.

**Preciso instalar algo para "buildar"?**
Não. Não há etapa de build nem dependências. É só servir os arquivos.
