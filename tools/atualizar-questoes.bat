@echo off
REM Atualiza a lista de bancos .tsv (data/questoes-fontes.js).
REM Rode depois de adicionar/remover um .tsv em data\questoes\.
cd /d "%~dp0.."
python "tools\gerar-fontes.py" || py "tools\gerar-fontes.py"
echo.
pause
