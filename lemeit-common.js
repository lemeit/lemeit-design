/**
 * lemeit-common.js — helpers compartidos para los portales ambientales de
 * lemeit.ar (emas, aq, wq). Complementa a lemeit-theme.css.
 *
 * Uso típico (antes de cerrar </body>, después de tener en el DOM un botón
 * con id="lm-theme-btn" y, opcionalmente, un switcher con id="lm-switcher"):
 *
 *   <script src="https://design.lemeit.ar/lemeit-common.js"></script>
 *   <script>
 *     LemeitCommon.initTheme();
 *     LemeitCommon.initSwitcher("emas");   // "emas" | "aq" | "wq"
 *     LemeitCommon.renderFooter(document.getElementById("lm-footer"), {
 *       version: "v1.0 — 2026-08-22"
 *     });
 *   </script>
 */
(function (global) {
  "use strict";

  const THEME_KEY = "lemeit-theme";

  const SITES = [
    { key: "emas", nombre: "EMA Saladillo", desc: "Meteorología", url: "https://emas.lemeit.ar" },
    { key: "aq",   nombre: "Aire Saladillo", desc: "Calidad del aire", url: "https://aq.lemeit.ar" },
    { key: "wq",   nombre: "Agua Saladillo", desc: "Calidad del agua", url: "https://wq.lemeit.ar" },
  ];

  function initTheme(defaultTheme) {
    const saved = localStorage.getItem(THEME_KEY);
    const theme = saved || defaultTheme || "dark";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.add("lm-root");

    const btn = document.getElementById("lm-theme-btn") || document.querySelector(".lm-theme-btn");
    function paintBtn() {
      if (!btn) return;
      const t = document.documentElement.getAttribute("data-theme");
      btn.textContent = t === "dark" ? "🌙" : "☀️";
    }
    paintBtn();
    if (btn) {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem(THEME_KEY, next);
        paintBtn();
        document.dispatchEvent(new CustomEvent("lemeit-theme-changed", { detail: { theme: next } }));
      });
    }
    return theme;
  }

  function initSwitcher(currentKey) {
    const root = document.getElementById("lm-switcher");
    if (!root) return;
    const btn = root.querySelector(".lm-switcher-btn");
    const menu = root.querySelector(".lm-switcher-menu");
    if (!btn || !menu) return;

    menu.innerHTML = SITES.map((s) => `
      <a href="${s.url}" ${s.key === currentKey ? 'class="lm-current"' : ""}>
        ${s.nombre}
        <span>${s.desc}</span>
      </a>
    `).join("");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("open");
    });
    document.addEventListener("click", () => menu.classList.remove("open"));
  }

  function renderFooter(el, opts) {
    if (!el) return;
    opts = opts || {};
    const version = opts.version || "";
    const extra = opts.extra || "";
    el.innerHTML = `
      <div>Proyecto <a href="https://profe.lemeit.ar" target="_blank">lemeit.ar</a>${extra ? " · " + extra : ""}</div>
      ${version ? `<div class="lm-footer-version">${version}</div>` : ""}
    `;
  }

  global.LemeitCommon = { SITES, initTheme, initSwitcher, renderFooter };
})(window);