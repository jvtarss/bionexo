/* ============================================================
   BIONEXO - Carrinho de questões + simulados salvos
   Guarda, no navegador (localStorage), a seleção de questões
   para montar simulados e a lista de simulados salvos.
   Expõe window.Bionexo.cart e window.Bionexo.savedSims.
   ============================================================ */
(function () {
  "use strict";
  const B = (window.Bionexo = window.Bionexo || {});

  function store(key) {
    const listeners = [];
    function read() { try { return JSON.parse(localStorage.getItem(key)) || []; } catch (_) { return []; } }
    function write(v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (_) {} listeners.forEach(fn => { try { fn(v); } catch (_) {} }); }
    return { read, write, on(fn) { listeners.push(fn); } };
  }

  // ---- carrinho: array de "keys" de questões ----
  const cs = store("bionexo:cart");
  B.cart = {
    all() { return cs.read(); },
    has(k) { return cs.read().indexOf(k) !== -1; },
    count() { return cs.read().length; },
    add(k) { const a = cs.read(); if (a.indexOf(k) === -1) { a.push(k); cs.write(a); } },
    remove(k) { cs.write(cs.read().filter(x => x !== k)); },
    toggle(k) { this.has(k) ? this.remove(k) : this.add(k); },
    addMany(keys) { const a = cs.read(); keys.forEach(k => { if (a.indexOf(k) === -1) a.push(k); }); cs.write(a); },
    clear() { cs.write([]); },
    on(fn) { cs.on(fn); },
  };

  // ---- simulados salvos: [{id, nome, keys, data}] ----
  const ss = store("bionexo:simulados-salvos");
  B.savedSims = {
    all() { return ss.read(); },
    save(nome, keys) {
      const a = ss.read();
      a.unshift({ id: "s" + Date.now(), nome: nome || ("Simulado " + (a.length + 1)), keys: keys.slice(), data: new Date().toISOString() });
      ss.write(a.slice(0, 40));
    },
    remove(id) { ss.write(ss.read().filter(s => s.id !== id)); },
    on(fn) { ss.on(fn); },
  };
})();
