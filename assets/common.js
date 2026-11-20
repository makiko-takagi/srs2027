/* SRS 2027 — 共通処理（言語・ヘッダー・ユーティリティ）編集不要 */
window.SRSCore = (function () {
  const D = window.SRS, I = window.SRS_I18N, E = D.event;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const codes = D.languages.map((l) => l.code);

  const store = {
    get() { try { return localStorage.getItem("srs-lang"); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem("srs-lang", v); } catch (e) {} }
  };
  const params = new URLSearchParams(location.search);
  let lang = (() => {
    const q = params.get("lang"); if (codes.includes(q)) return q;
    const s = store.get(); if (codes.includes(s)) return s;
    const n = (navigator.language || "").slice(0, 2);
    return codes.includes(n) ? n : D.defaultLang;
  })();

  const L = (v, lg) => {
    lg = lg || lang;
    return (v && typeof v === "object" && !Array.isArray(v)) ? (v[lg] ?? v.en ?? Object.values(v)[0] ?? "") : (v ?? "");
  };
  const hasLang = (v, lg) => !!(v && typeof v === "object" && v[lg]);
  const t = (key, vars = {}) => {
    let s = (I[lang] && I[lang][key]) ?? I.en[key] ?? key;
    Object.entries(vars).forEach(([k, v]) => { s = s.split(`{${k}}`).join(v); });
    return s;
  };

  /* papers with computed time */
  const toMin = (x) => { const [h, m] = x.split(":").map(Number); return h * 60 + m; };
  const toHM = (m) => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}`;
  const papers = D.papers.slice().sort((a, b) => a.session.localeCompare(b.session) || a.order - b.order);
  papers.forEach((p) => { const s = D.sessions[p.session]; p.time = s ? toHM(toMin(s.start) + (p.order - 1) * D.slotMinutes) : ""; });

  const inst = (c, lg) => L(D.institutions[c], lg) || c;
  const presenter = (p) => (p.authors.find((a) => a.presenter) || p.authors[0] || {}).name || "";
  const paperUrl = (p) => `paper.html?id=${encodeURIComponent(p.id)}&lang=${lang}`;

  const citation = (p) =>
    `${p.authors.map((a) => a.name).join(", ")}: “${L(p.title, "en")},” Proceedings of the ${E.nameEn} (${E.short}), ${E.cityEn}, Paper ${p.id}, ${E.year}.`;
  const bibtex = (p) => {
    const url = new URL(`paper.html?id=${p.id}`, location.href).href;
    return `@inproceedings{${E.short.replace(/\s+/g, "")}-${p.id},\n` +
      `  author    = {${p.authors.map((a) => a.name).join(" and ")}},\n` +
      `  title     = {${L(p.title, "en")}},\n` +
      `  booktitle = {Proceedings of the ${E.nameEn} (${E.short})},\n` +
      `  address   = {${E.cityEn}},\n` +
      `  year      = {${E.year}},\n` +
      `  note      = {Paper ${p.id}},\n` +
      `  url       = {${url}}\n}`;
  };

  /* header: language switch + mobile menu */
  const listeners = [];
  const onLang = (fn) => listeners.push(fn);
  const setupHeader = () => {
    const sw = $("lang-switch");
    sw.innerHTML = D.languages.map((l) =>
      `<button type="button" data-lang="${l.code}" lang="${l.code}" title="${esc(l.label)}"><span class="full">${esc(l.label)}</span><span class="short">${esc(l.short)}</span></button>`).join("");
    sw.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-lang]"); if (!b) return;
      lang = b.dataset.lang; store.set(lang);
      const u = new URL(location.href); u.searchParams.set("lang", lang); history.replaceState(null, "", u);
      refresh();
    });
    const mb = $("menu-btn"), nav = $("nav");
    mb.addEventListener("click", () => { const o = nav.classList.toggle("open"); mb.setAttribute("aria-expanded", o); });
    nav.addEventListener("click", (e) => { if (e.target.tagName === "A") { nav.classList.remove("open"); mb.setAttribute("aria-expanded", "false"); } });
  };
  const applyStatic = () => {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    document.querySelectorAll("[data-href-lang]").forEach((el) => { el.href = `${el.dataset.hrefLang.split("#")[0]}?lang=${lang}${el.dataset.hrefLang.includes("#") ? "#" + el.dataset.hrefLang.split("#")[1] : ""}`; });
    document.querySelectorAll("#lang-switch button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  };
  const footer = () => {
    const f = $("ft-cite"); if (!f) return;
    f.textContent = t("ft.proc", { name: E.nameEn, short: E.short, venue: L(E.venue, "en"), city: E.cityEn, year: E.year });
    $("ft-meta").textContent = [E.issn && `ISSN ${E.issn}`, E.published && `${t("ft.published")}: ${E.published}`, `${t("ft.contact")}: ${E.contact}`].filter(Boolean).join(" · ");
  };
  function refresh() { applyStatic(); footer(); listeners.forEach((fn) => fn()); }

  const copy = async (text, btn) => {
    let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; } catch (e) {
      try { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); ok = document.execCommand("copy"); ta.remove(); } catch (e2) {}
    }
    if (btn && ok) { const o = btn.textContent; btn.textContent = t("pp.copied"); setTimeout(() => { btn.textContent = o; }, 1500); }
  };

  return { D, E, $, esc, L, t, hasLang, get lang() { return lang; }, papers, inst, presenter, paperUrl, citation, bibtex, setupHeader, onLang, refresh, copy, params };
})();
