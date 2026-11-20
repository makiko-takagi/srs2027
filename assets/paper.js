/* SRS 2027 — 要旨（発表詳細）ページ（編集不要） */
(function () {
  const C = window.SRSCore, { D, E, $, esc, L, t, papers, inst } = C;
  const id = C.params.get("id");
  const idx = papers.findIndex((p) => p.id === id);
  const root = $("article");

  const pdfBlock = (src, title, cls) => src
    ? `<div class="pdf-frame ${cls}"><object data="${esc(src)}#view=FitH" type="application/pdf" aria-label="${esc(title)}">
         <p class="pdf-fallback">${esc(t("pp.pdfFallback"))} <a href="${esc(src)}" target="_blank" rel="noopener">${esc(t("pp.openPdf"))}</a></p>
       </object></div>`
    : `<p class="muted">${esc(t("pp.notReady"))}</p>`;

  const render = () => {
    if (idx < 0) {
      document.title = `${E.short} — ${t("pp.notfound")}`;
      root.innerHTML = `<p class="crumb"><a href="index.html?lang=${C.lang}#proceedings">← ${esc(t("pp.back"))}</a></p><h1>${esc(t("pp.notfound"))}</h1>`;
      return;
    }
    const p = papers[idx], prev = papers[idx - 1], next = papers[idx + 1];
    const insts = [...new Set(p.authors.map((a) => a.inst))], multi = insts.length > 1;
    const s = D.sessions[p.session];
    const translated = C.lang !== "en" && C.hasLang(p.abstract, C.lang);
    document.title = `${p.id} ${L(p.title)} — ${E.short}`;

    root.innerHTML = `
      <p class="crumb"><a href="index.html?lang=${C.lang}#proceedings">← ${esc(t("pp.back"))}</a></p>
      <header class="art-head">
        <p class="art-id"><span class="pid">${p.id}</span><span class="muted">${esc(L(s?.title))} · ${p.time} · ${esc(L(E.date))}</span></p>
        <h1>${esc(L(p.title))}</h1>
        ${C.lang !== "en" && L(p.title, "en") !== L(p.title) ? `<p class="title-en">${esc(L(p.title, "en"))}</p>` : ""}
        <p class="art-auth">${p.authors.map((a) => `<span class="${a.presenter ? "pres" : ""}" ${a.presenter ? `title="${esc(t("pp.presenter"))}"` : ""}>${esc(a.name)}</span>${multi ? `<sup>${insts.indexOf(a.inst) + 1}</sup>` : ""}`).join(", ")}</p>
        <ol class="art-aff">${insts.map((c, i) => `<li>${multi ? `<sup>${i + 1}</sup>` : ""}${esc(inst(c))}</li>`).join("")}</ol>
        ${p.supervisor ? `<p class="muted small">${esc(t("pp.supervisor"))}: ${esc(p.supervisor)}</p>` : ""}
      </header>

      <div class="art-grid">
        <div class="art-main">
          <section>
            <h2>${esc(t("pp.abstract"))}</h2>
            <p class="abs-full">${esc(L(p.abstract))}</p>
            ${translated ? `<p class="note">${esc(t("pp.transNote"))}</p>` : ""}
            ${p.keywords?.length ? `<p class="kw"><strong>${esc(t("pp.keywords"))}:</strong> ${p.keywords.map((k) => `<span class="chip">${esc(k)}</span>`).join("")}</p>` : ""}
          </section>
          <section>
            <h2>${esc(t("pp.viewPaper"))}</h2>
            ${pdfBlock(p.pdf, t("pp.viewPaper"), "a4")}
          </section>
          <section>
            <h2>${esc(t("pp.viewPoster"))}</h2>
            ${pdfBlock(p.poster, t("pp.viewPoster"), "poster")}
          </section>
        </div>

        <aside class="art-side">
          <div class="side-box">
            <h3>${esc(t("pp.downloads"))}</h3>
            <div class="dl">
              ${p.pdf ? `<a class="btn" href="${esc(p.pdf)}" download>${esc(t("pp.paper"))}</a>` : `<span class="btn disabled">${esc(t("pp.paper"))}</span>`}
              ${p.poster ? `<a class="btn" href="${esc(p.poster)}" download>${esc(t("pp.poster"))}</a>` : `<span class="btn disabled">${esc(t("pp.poster"))}</span>`}
            </div>
          </div>
          <div class="side-box">
            <h3>${esc(t("pp.cite"))}</h3>
            <p class="cite-text" id="cite-text">${esc(C.citation(p))}</p>
            <button type="button" class="btn small" id="copy-cite">${esc(t("pp.copy"))}</button>
            <h3>${esc(t("pp.bibtex"))}</h3>
            <pre class="bib" id="bib">${esc(C.bibtex(p))}</pre>
            <button type="button" class="btn small" id="copy-bib">${esc(t("pp.copy"))}</button>
          </div>
        </aside>
      </div>

      <nav class="pager">
        ${prev ? `<a href="${C.paperUrl(prev)}" class="pg-prev"><span class="muted">← ${esc(t("pp.prev"))}</span><span>${prev.id} ${esc(L(prev.title))}</span></a>` : "<span></span>"}
        ${next ? `<a href="${C.paperUrl(next)}" class="pg-next"><span class="muted">${esc(t("pp.next"))} →</span><span>${next.id} ${esc(L(next.title))}</span></a>` : "<span></span>"}
      </nav>`;

    $("copy-cite").addEventListener("click", (e) => C.copy(C.citation(p), e.currentTarget));
    $("copy-bib").addEventListener("click", (e) => C.copy(C.bibtex(p), e.currentTarget));
  };

  C.setupHeader();
  C.onLang(render);
  C.refresh();
})();
