/* SRS 2027 — トップページ（編集不要） */
(function () {
  const C = window.SRSCore, { D, E, $, esc, L, t, papers, inst, presenter } = C;

  const renderOverview = () => {
    const cm = C.lang === "ja" ? "、" : ", ";
    document.title = `${E.short} — ${t("hero.eyebrow")}`;
    $("ev-name").textContent = L(E.name);
    $("ev-date").textContent = L(E.date);
    $("ev-venue").textContent = `${L(E.venue)}${cm}${L(E.city)}`;
    $("ev-org").textContent = t("hero.organized", { x: E.organizers.map((c) => inst(c)).join(" / ") });
    $("f-date").textContent = L(E.date);
    $("f-tour").textContent = L(E.tourDate);
    $("f-venue").textContent = `${L(E.venue)}${cm}${L(E.city)}`;
    $("f-keynote").textContent = L(E.keynote);
    const by = {};
    papers.forEach((p) => { const c = p.authors[0]?.inst; by[c] = (by[c] || 0) + 1; });
    const parts = Object.entries(by).map(([c, n]) => `${inst(c)}: ${n}`).join(" / ");
    $("f-count").textContent = C.lang === "ja" ? `${papers.length}件（${parts}）` : `${papers.length} (${parts})`;
    $("pg-date").textContent = `${L(E.date)} — ${L(E.venue)}`;
  };

  const renderProgram = () => {
    let h = `<table class="prog"><thead><tr><th>${esc(t("pg.time"))}</th><th>${esc(t("pg.item"))}</th></tr></thead><tbody>`;
    D.program.forEach((r) => {
      const time = `${r.start}–${r.end}`;
      if (r.type === "session") {
        const s = D.sessions[r.session], list = papers.filter((p) => p.session === r.session);
        h += `<tr class="session"><td class="time">${time}</td><td><span class="stitle">${esc(L(s.title))}</span>` +
          `<span class="tag">${esc(t("pg.talks", { n: list.length }))}</span><span class="tag">${esc(t("pg.chair", { x: s.chair }))}</span>` +
          `<ol class="slots">` + list.map((p) =>
            `<li><span class="t">${p.time}</span><a class="id" href="${C.paperUrl(p)}">${p.id}</a>` +
            `<span class="st"><a class="plain" href="${C.paperUrl(p)}">${esc(L(p.title))}</a><br><span class="muted">${esc(presenter(p))} — ${esc(inst(p.authors[0]?.inst))}</span></span></li>`).join("") +
          `</ol></td></tr>`;
      } else {
        h += `<tr class="${r.type === "break" ? "break" : ""} ${r.type}"><td class="time">${time}</td><td><strong>${esc(L(r.title))}</strong>` +
          (r.note ? `<br><span class="muted">${esc(L(r.note))}</span>` : "") + `</td></tr>`;
      }
    });
    $("program-table").innerHTML = h + "</tbody></table>";
  };

  const fs = $("f-session"), fi = $("f-inst"), qi = $("q");
  const fillFilters = () => {
    const sv = fs.value, iv = fi.value;
    fs.innerHTML = `<option value="">${esc(t("pr.allSessions"))}</option>` +
      Object.entries(D.sessions).map(([k, s]) => `<option value="${k}">${esc(L(s.title))}</option>`).join("");
    fi.innerHTML = `<option value="">${esc(t("pr.allInst"))}</option>` +
      Object.keys(D.institutions).map((k) => `<option value="${k}">${esc(inst(k))}</option>`).join("");
    fs.value = sv; fi.value = iv;
  };

  const renderPapers = () => {
    const q = qi.value.trim().toLowerCase(), sv = fs.value, iv = fi.value;
    const all = (v) => (v && typeof v === "object") ? Object.values(v).join(" ") : (v || "");
    const hits = papers.filter((p) => {
      if (sv && p.session !== sv) return false;
      if (iv && !p.authors.some((a) => a.inst === iv)) return false;
      if (!q) return true;
      return [p.id, all(p.title), all(p.abstract), p.supervisor, ...(p.keywords || []), ...p.authors.map((a) => a.name)].join(" ").toLowerCase().includes(q);
    });
    $("result-count").textContent = t("pr.count", { n: hits.length, total: papers.length });
    if (!hits.length) { $("paper-list").innerHTML = `<li class="paper muted">${esc(t("pr.none"))}</li>`; return; }
    $("paper-list").innerHTML = hits.map((p) => {
      const insts = [...new Set(p.authors.map((a) => a.inst))], multi = insts.length > 1;
      const auth = p.authors.map((a) => `<span class="${a.presenter ? "pres" : ""}">${esc(a.name)}</span>${multi ? `<sup>${insts.indexOf(a.inst) + 1}</sup>` : ""}`).join(", ");
      const aff = insts.map((c, i) => (multi ? `<sup>${i + 1}</sup>` : "") + esc(inst(c))).join("; ");
      return `<li class="paper" id="p-${p.id}">
        <div class="phead"><span class="pid">${p.id}</span><a class="ptitle" href="${C.paperUrl(p)}">${esc(L(p.title))}</a></div>
        <p class="pauth">${auth}</p>
        <p class="paff">${aff}</p>
        <p class="pmeta">${esc(L(D.sessions[p.session]?.title))} · ${p.time}</p>
        <div class="links"><a href="${C.paperUrl(p)}">${esc(t("pr.open"))}</a>${p.pdf ? `<a href="${esc(p.pdf)}" target="_blank" rel="noopener">${esc(t("pr.paper"))}</a>` : ""}${p.poster ? `<a href="${esc(p.poster)}" target="_blank" rel="noopener">${esc(t("pr.poster"))}</a>` : ""}</div>
      </li>`;
    }).join("");
  };
  [qi, fs, fi].forEach((el) => ["input", "change"].forEach((ev) => el.addEventListener(ev, renderPapers)));

  const renderRest = () => {
    $("sub-rows").innerHTML = D.submissions.map((s) => {
      const dl = L(s.deadline);
      return `<tr><td data-label="${esc(t("gl.item"))}">${esc(L(s.item))}</td><td data-label="${esc(t("gl.format"))}">${esc(L(s.format))}</td>` +
        `<td data-label="${esc(t("gl.deadline"))}" class="${dl ? "deadline" : "todo"}">${esc(dl || t("gl.tba"))}</td></tr>`;
    }).join("");
    $("ct-date").textContent = L(E.tourDate);
    const ct = D.cityTour || {};
    $("ct-body").innerHTML = (ct.items && ct.items.length
      ? `<table class="prog"><tbody>` + ct.items.map((i) => `<tr><td class="time">${esc(i.time || "")}</td><td><strong>${esc(L(i.title))}</strong>${i.note ? `<br><span class="muted">${esc(L(i.note))}</span>` : ""}</td></tr>`).join("") + `</tbody></table>`
      : "") + (ct.note ? `<p class="muted">${esc(L(ct.note))}</p>` : "");
    $("award-list").innerHTML = D.awards.length ? D.awards.map((a) => {
      const p = papers.find((x) => x.id === a.id);
      return `<div class="award-item"><div class="award-name">${esc(L(a.award))}</div>` +
        (p ? `<div><a href="${C.paperUrl(p)}">${p.id}</a> ${esc(L(p.title))} — ${esc(p.authors.map((x) => x.name).join(", "))}</div>` : "") + `</div>`;
    }).join("") : `<p class="muted">${esc(t("aw.pending"))}</p>`;
  };


  /* ---------- hero countdown / about / dates ---------- */
  const today = () => { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()); };
  const parseD = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const fmtDate = (s) => {
    const d = parseD(s), loc = { en: "en-GB", ja: "ja-JP", vi: "vi-VN" }[C.lang] || "en-GB";
    return d.toLocaleDateString(loc, { year: "numeric", month: C.lang === "en" ? "short" : "long", day: "numeric", weekday: "short" });
  };
  const shareUrl = () => {
    const base = (E.url && !E.url.includes("USERNAME")) ? E.url : location.href.split("#")[0].split("?")[0];
    return `${base}?lang=${C.lang}`;
  };
  const renderExtra = () => {
    const diff = Math.round((parseD(E.startDate) - today()) / 86400000);
    const cd = $("countdown");
    cd.innerHTML = diff > 0 ? `<span class="d">D-${diff}</span>${esc(t("cd.days", { n: diff }))}` : diff === 0 ? `<span class="d">D-DAY</span>${esc(t("cd.today"))}` : esc(t("cd.done"));
    $("about-text").textContent = L(D.about);

    const now = today();
    $("date-list").innerHTML = D.dates.map((d) =>
      `<li class="${parseD(d.date) < now ? "past" : ""} ${d.main ? "main" : ""}"><span class="tl-date">${esc(fmtDate(d.date))}</span><span class="tl-label">${esc(L(d.label))}</span></li>`).join("");

    /* companies */
    const fc = D.forCompanies;
    $("co-lead").textContent = L(fc.lead);
    $("co-why").innerHTML = fc.why.map((x) => `<li>${esc(L(x))}</li>`).join("");
    $("co-ways").innerHTML = fc.ways.map((x) => `<li>${esc(L(x))}</li>`).join("");
    $("co-ways-note").textContent = L(fc.waysNote);
    $("co-mail").href = `mailto:${E.contact}?subject=${encodeURIComponent(t("sh.mailSubject"))}`;

    const url = shareUrl(), title = `${E.short} — ${L(E.name)}`;
    $("share-btns").innerHTML =
      (navigator.share ? `<button type="button" class="btn small" id="sh-native">${esc(t("co.share"))}</button>` : "") +
      `<button type="button" class="btn small" id="sh-copy">${esc(t("sh.copy"))}</button>` +
      `<a class="btn small" target="_blank" rel="noopener" href="https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}">LINE</a>` +
      `<a class="btn small" target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}">Facebook</a>` +
      `<a class="btn small" href="mailto:?subject=${encodeURIComponent(t("sh.mailSubject"))}&body=${encodeURIComponent(title + "\n" + L(E.date) + " / " + L(E.venue) + "\n" + url)}">${esc(t("sh.mail"))}</a>`;
    $("sh-copy").addEventListener("click", async (e) => {
      const b = e.currentTarget, o = b.textContent;
      try { await navigator.clipboard.writeText(url); b.textContent = t("sh.copied"); } catch (err) { prompt("URL", url); }
      setTimeout(() => { b.textContent = o; }, 1500);
    });
    if ($("sh-native")) $("sh-native").addEventListener("click", () => navigator.share({ title, url }).catch(() => {}));

    /* access */
    $("ac-venue").textContent = L(E.venue);
    $("ac-info").textContent = L(D.venueInfo);
    $("ac-address").textContent = L(E.address);
    $("ac-map").href = E.mapUrl;

    /* gallery / organization / partners */
    const g = D.gallery || [];
    $("gallery").hidden = !g.length;
    $("gallery-grid").innerHTML = g.map((x) => `<figure><img src="${esc(x.src)}" alt="${esc(L(x.caption))}" loading="lazy"><figcaption>${esc(L(x.caption))}</figcaption></figure>`).join("");
    $("org-list").innerHTML = D.organization.map((o) => `<dt>${esc(L(o.role))}</dt><dd>${o.names.map(esc).join("<br>")}</dd>`).join("");
    const pt = D.partners || [];
    $("partners-wrap").hidden = !pt.length;
    $("partners").innerHTML = pt.map((x) => `<a href="${esc(x.url || "#")}" target="_blank" rel="noopener" title="${esc(x.name)}">${x.logo ? `<img src="${esc(x.logo)}" alt="${esc(x.name)}">` : esc(x.name)}</a>`).join("");

    $("ft-sec").textContent = `${t("ft.secretariat")}: ${L(E.secretariat)}`;
    $("ft-addr").textContent = L(E.address);
  };

  C.setupHeader();
  C.onLang(() => { renderOverview(); renderProgram(); fillFilters(); renderPapers(); renderRest(); renderExtra(); });
  C.refresh();
})();
