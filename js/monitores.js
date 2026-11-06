/* ============================================================
   BIONEXO - Pagina de Monitores
   Lista a equipe com disciplinas, contatos e ciclo de monitoria.
   ============================================================ */
(function () {
  "use strict";
  const B = window.Bionexo;
  const DATA = (window.BIONEXO && window.BIONEXO.monitores) || [];
  const listEl = document.getElementById("monList");
  const searchEl = document.getElementById("monSearch");
  const countEl = document.getElementById("monCount");
  if (!listEl) return;

  function iniciais(nome) {
    const p = nome.trim().split(/\s+/);
    return ((p[0] || "")[0] || "") + ((p[p.length - 1] || "")[0] || "");
  }
  function telDigits(t) { return (t || "").replace(/[^0-9]/g, ""); }

  function matches(m) {
    const term = B.norm((searchEl.value || "").trim());
    if (!term) return true;
    const hay = B.norm([m.nome, m.ciclo, (m.disciplinas || []).join(" ")].join(" "));
    return hay.includes(term);
  }

  function contatos(m) {
    const out = [];
    if (m.email) out.push(`<a href="mailto:${B.esc(m.email)}"><span class="material-icons" aria-hidden="true">mail</span>${B.esc(m.email)}</a>`);
    if (m.telefone) out.push(`<a href="https://wa.me/${telDigits(m.telefone)}" target="_blank" rel="noopener"><span class="material-icons" aria-hidden="true">chat</span>${B.esc(m.telefone)}</a>`);
    if (m.instagram) out.push(`<a href="https://instagram.com/${B.esc(m.instagram)}" target="_blank" rel="noopener"><span class="material-icons" aria-hidden="true">photo_camera</span>@${B.esc(m.instagram)}</a>`);
    if (m.lattes) out.push(`<a href="${B.esc(m.lattes)}" target="_blank" rel="noopener"><span class="material-icons" aria-hidden="true">school</span>Currículo Lattes</a>`);
    return out.join("");
  }

  function cardHTML(m) {
    const discs = (m.disciplinas || []).map(d => `<span class="chip disc">${B.esc(d)}</span>`).join("");
    return `<article class="monitor-card">
      <div class="m-top">
        <div class="monitor-avatar" aria-hidden="true">${B.esc(iniciais(m.nome)).toUpperCase()}</div>
        <div>
          <h3>${B.esc(m.nome)}</h3>
          <div class="m-cycle"><span class="material-icons mi-sm" aria-hidden="true">event</span> Monitoria ${B.esc(m.ciclo)}</div>
        </div>
      </div>
      <div class="monitor-discs">${discs}</div>
      <div class="monitor-contacts">${contatos(m)}</div>
    </article>`;
  }

  function render() {
    const found = DATA.filter(matches);
    if (countEl) countEl.textContent = `${found.length} ${found.length === 1 ? "monitor" : "monitores"}`;
    listEl.innerHTML = found.length
      ? found.map(cardHTML).join("")
      : `<div class="empty"><span class="material-icons">person_search</span><p>Nenhum monitor encontrado.</p></div>`;
  }

  if (searchEl) { let t; searchEl.addEventListener("input", () => { clearTimeout(t); t = setTimeout(render, 150); }); }
  render();
})();
