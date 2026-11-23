# -*- coding: utf-8 -*-
"""
Atualiza data/questoes-fontes.js com TODOS os .tsv de data/questoes/.

Quando usar: no site publicado (GitHub Pages), o navegador não consegue
"listar pasta", então é preciso ter a lista pronta. Rode este script
depois de adicionar/remover um .tsv e antes de enviar (git push).

Como rodar:
  - Duplo-clique em  tools/atualizar-questoes.bat   (Windows), ou
  - python tools/gerar-fontes.py
Localmente (python -m http.server) a inclusão já é automática.
"""
import os, re, glob, io

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PASTA = os.path.join(RAIZ, "data", "questoes")
MANIFESTO = os.path.join(RAIZ, "data", "questoes-fontes.js")

tsvs = sorted(os.path.basename(p) for p in glob.glob(os.path.join(PASTA, "*.tsv")))
lista = "window.BIONEXO.tsvFontes = [\n" + "".join(
    '  "data/questoes/%s",\n' % n for n in tsvs
) + "];"

with io.open(MANIFESTO, encoding="utf-8") as f:
    txt = f.read()

novo = re.sub(r"window\.BIONEXO\.tsvFontes\s*=\s*\[[^\]]*\];", lista, txt, count=1)
if novo == txt and "tsvFontes" not in txt:
    # se não houver o bloco, acrescenta
    novo = txt.rstrip() + "\n" + lista + "\n"

with io.open(MANIFESTO, "w", encoding="utf-8", newline="\n") as f:
    f.write(novo)

print("Manifesto atualizado com %d arquivo(s) .tsv:" % len(tsvs))
for n in tsvs:
    print("  -", n)
