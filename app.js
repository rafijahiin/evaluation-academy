/* =============================================================
   EVALUATION ACADEMY — App Controller (v2)
   Adds: chapter cover, reading sidebar, scroll-progress bar
   ============================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "evalAcademy.v2";

  const App = {
    state: {
      stage: null,
      stageScore: null,
      stageAnswers: null,
      currentModuleId: null,
      lessonIndex: 0,
      completedLessons: {},
      examScore: null,
      examAnswers: null,
      examPassed: false,
      certificate: { name: "", title: "", date: null, id: null }
    },

    /* ---------- INIT ---------- */
    init() {
      this.load();
      this.renderHomeCurriculum();
      this.renderJourneyMap();
      this.bindNav();
      this.updateNavProgress();
      this.bindScrollProgress();

      if (this.state.stage || this.hasAnyProgress()) {
        document.getElementById("navResume").hidden = false;
      }

      this.go("home");
    },

    hasAnyProgress() {
      return Object.values(this.state.completedLessons || {}).some(arr => arr && arr.some(Boolean));
    },

    /* ---------- STORAGE ---------- */
    load() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) Object.assign(this.state, JSON.parse(raw));
      } catch (e) { /* ignore */ }
    },
    save() {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state)); }
      catch (e) { /* ignore */ }
    },
    reset() {
      localStorage.removeItem(STORAGE_KEY);
      this.state = {
        stage: null, stageScore: null, stageAnswers: null,
        currentModuleId: null, lessonIndex: 0, completedLessons: {},
        examScore: null, examAnswers: null, examPassed: false,
        certificate: { name: "", title: "", date: null, id: null }
      };
      this.toast("Progress reset.");
      this.updateNavProgress();
      document.getElementById("navResume").hidden = true;
      this.go("home");
    },

    /* ---------- ROUTING ---------- */
    go(name) {
      document.querySelectorAll("[data-route-section]").forEach(s => {
        s.hidden = s.dataset.routeSection !== name;
      });
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Reading progress visible only on module reading
      document.getElementById("readProgress").hidden = (name !== "module");

      if (name === "quiz") Quiz.startStageAssessment();
      if (name === "dashboard") this.renderDashboard();
      if (name === "exam") Quiz.startFinalExam();
      if (name === "certificate") this.renderCertificate();
      if (name === "home") this.renderJourneyMap();
      if (name === "toc-builder") ToCBuilder.start();
      this.updateNavProgress();
    },

    bindNav() {
      document.querySelectorAll("[data-route]").forEach(el => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          this.go(el.dataset.route);
        });
      });
      document.querySelectorAll("[data-scroll]").forEach(el => {
        el.addEventListener("click", () => {
          const target = document.querySelector(el.dataset.scroll);
          if (target) target.scrollIntoView({ behavior: "smooth" });
        });
      });

      document.getElementById("navResume").addEventListener("click", () => {
        if (this.state.examPassed) this.go("certificate");
        else this.go("dashboard");
      });

      document.getElementById("resetProgressBtn").addEventListener("click", () => {
        if (confirm("Reset all your learning progress? This cannot be undone.")) this.reset();
      });
    },

    /* ---------- HOME: curriculum preview ---------- */
    renderHomeCurriculum() {
      const list = document.getElementById("modulePreview");
      list.innerHTML = window.MODULES.map(m => `
        <li tabindex="0" role="button" data-mid="${m.id}">
          <span class="num">${String(m.number).padStart(2, "0")}</span>
          <span class="meta">
            <span class="ch-label">Chapter ${m.number}</span>
            <b>${m.title}</b>
            <span class="sub">${m.subtitle}</span>
          </span>
          <span class="pill">${m.lessons.length} lessons · ${m.estMinutes} min</span>
        </li>
      `).join("");
      list.querySelectorAll("li").forEach(li => {
        li.addEventListener("click", () => {
          this.openChapterCover(li.dataset.mid);
        });
        li.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            li.click();
          }
        });
      });
    },

    /* ---------- JOURNEY MAP ---------- */
    renderJourneyMap() {
      this._renderJourneyMapInto(document.getElementById("journeyMap"), window.MODULES);
    },
    _renderJourneyMapInto(host, modules) {
      if (!host) return;
      host.innerHTML = modules.map(m => {
        const prog = this.getModuleProgress(m.id);
        const done = this.isModuleCompleted(m.id);
        const active = prog > 0 && !done;
        const state = done ? "done" : active ? "active" : "";
        return `
          <button class="journey-node ${state}" data-mid="${m.id}" role="listitem" aria-label="Chapter ${m.number}: ${m.title.replace(/&amp;/g,'&')}">
            <span class="journey-pin">${done ? '✓' : String(m.number).padStart(2,'0')}</span>
            <span class="journey-phase">${m.phase || 'Chapter'}</span>
            <span class="journey-title">${m.title}</span>
            <span class="journey-sub">${m.lessons.length} lessons · ${m.estMinutes} min</span>
          </button>
        `;
      }).join("");
      host.querySelectorAll(".journey-node").forEach(node => {
        node.addEventListener("click", () => this.openChapterCover(node.dataset.mid));
      });
    },

    /* ---------- STAGE RESULT ---------- */
    showStageResult() {
      this.go("stage");
      const stage = window.STAGES[this.state.stage];
      const score = this.state.stageScore;
      const modules = window.MODULES.filter(stage.moduleFilter);
      const card = document.getElementById("stageCard");
      card.innerHTML = `
        <div class="stage-badge">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: ${stage.color}; display: inline-block; box-shadow: 0 0 12px ${stage.color};"></span>
          <span>${stage.label}</span>
        </div>
        <h1 class="h1">${stage.headline}</h1>
        <p class="lede">${stage.description}</p>
        <div class="stage-stats">
          <div class="stage-stat"><b>${score}%</b><span>Assessment score</span></div>
          <div class="stage-stat"><b>${modules.length}</b><span>Chapters in your path</span></div>
          <div class="stage-stat"><b>~${stage.estHours} hrs</b><span>Estimated time</span></div>
        </div>
        <button class="btn btn-primary btn-lg" id="goPath">
          See your learning path
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
      `;
      card.querySelector("#goPath").addEventListener("click", () => this.go("dashboard"));

      document.getElementById("navResume").hidden = false;
      this.updateNavProgress();
    },

    /* ---------- DASHBOARD ---------- */
    getPathModules() {
      const stage = window.STAGES[this.state.stage];
      if (!stage) return window.MODULES;
      return window.MODULES.filter(stage.moduleFilter);
    },

    isModuleCompleted(moduleId) {
      const mod = window.MODULES.find(m => m.id === moduleId);
      if (!mod) return false;
      const arr = this.state.completedLessons[moduleId] || [];
      return arr.length === mod.lessons.length && arr.every(Boolean);
    },

    getModuleProgress(moduleId) {
      const mod = window.MODULES.find(m => m.id === moduleId);
      if (!mod) return 0;
      const arr = this.state.completedLessons[moduleId] || [];
      const done = arr.filter(Boolean).length;
      return Math.round((done / mod.lessons.length) * 100);
    },

    getOverallProgress() {
      const path = this.getPathModules();
      if (!path.length) return 0;
      const totalLessons = path.reduce((sum, m) => sum + m.lessons.length, 0);
      const doneLessons = path.reduce((sum, m) => {
        const arr = this.state.completedLessons[m.id] || [];
        return sum + arr.filter(Boolean).length;
      }, 0);
      return Math.round((doneLessons / totalLessons) * 100);
    },

    renderDashboard() {
      const stage = window.STAGES[this.state.stage];
      const path = this.getPathModules();
      const pctOverall = this.getOverallProgress();

      if (stage) {
        document.getElementById("dashEyebrow").textContent = `${stage.label} path`;
        document.getElementById("dashTitle").textContent = "Your learning journey";
        document.getElementById("dashSubtitle").textContent =
          `${path.length} chapters · ~${stage.estHours} hours · ${pctOverall}% complete`;
        document.getElementById("dashAssessmentCta").hidden = true;
      } else {
        document.getElementById("dashEyebrow").textContent = "The full course";
        document.getElementById("dashTitle").textContent = "Choose your starting chapter";
        document.getElementById("dashSubtitle").textContent =
          `${path.length} chapters · ~5 hours total · ${pctOverall}% complete · Read in any order`;
        document.getElementById("dashAssessmentCta").hidden = false;
      }

      // Mini journey map
      this._renderJourneyMapInto(document.getElementById("journeyMapDash"), path);

      const C = 263.9;
      document.getElementById("ringFill").setAttribute("stroke-dashoffset", C - (C * pctOverall / 100));
      document.getElementById("ringText").textContent = pctOverall + "%";

      const grid = document.getElementById("moduleGrid");
      grid.innerHTML = path.map((m) => {
        const prog = this.getModuleProgress(m.id);
        const done = this.isModuleCompleted(m.id);
        const tag = done ? `<span class="mod-tag done">Completed</span>`
                  : prog > 0 ? `<span class="mod-tag active">In progress</span>`
                  : `<span class="mod-tag locked">Not started</span>`;
        return `
          <button class="module-card" data-mid="${m.id}" aria-label="Open chapter ${m.number}: ${m.title.replace(/&amp;/g,'&')}">
            ${tag}
            <div class="mod-num">Chapter ${String(m.number).padStart(2,"0")}</div>
            <h3>${m.title}</h3>
            <p>${m.subtitle}</p>
            <div class="mod-meta">
              <span>${m.lessons.length} lessons · ${m.estMinutes} min</span>
              <span>${prog}%</span>
            </div>
            <div class="mod-bar"><div style="width:${prog}%"></div></div>
          </button>
        `;
      }).join("");
      grid.querySelectorAll(".module-card").forEach(card => {
        card.addEventListener("click", () => this.openChapterCover(card.dataset.mid));
      });

      const allDone = path.every(m => this.isModuleCompleted(m.id));
      const examBtn = document.getElementById("goExamBtn");
      const gate = document.getElementById("examGate");
      examBtn.disabled = !allDone;
      gate.textContent = allDone
        ? "All chapters complete. You're ready for the final exam."
        : `Complete all chapters to unlock the final exam (${path.filter(m => this.isModuleCompleted(m.id)).length}/${path.length} done).`;
      examBtn.onclick = () => allDone && this.go("exam");
    },

    /* ---------- CHAPTER COVER ---------- */
    openChapterCover(moduleId) {
      const mod = window.MODULES.find(m => m.id === moduleId);
      if (!mod) return;
      this.state.currentModuleId = moduleId;

      const numStr = String(mod.number).padStart(2, "0");
      document.getElementById("coverChLabel").textContent = `Chapter ${numStr}`;
      const phaseEl = document.getElementById("coverPhaseLabel");
      if (mod.phase) { phaseEl.textContent = mod.phase; phaseEl.hidden = false; }
      else phaseEl.hidden = true;
      document.getElementById("coverNumBg").textContent = numStr;
      document.getElementById("coverTitle").innerHTML = mod.title;
      document.getElementById("coverSubtitle").textContent = mod.subtitle.replace(/&amp;/g, '&');
      document.getElementById("coverOverview").textContent = mod.overview || mod.subtitle.replace(/&amp;/g, '&');
      document.getElementById("coverLessons").textContent = mod.lessons.length;
      document.getElementById("coverMinutes").textContent = mod.estMinutes;

      const tocList = document.getElementById("coverTocList");
      tocList.innerHTML = mod.lessons.map(l => `<li>${l.title}</li>`).join("");

      // Begin button — open lesson at first incomplete
      const completed = this.state.completedLessons[moduleId] || [];
      const firstIncomplete = mod.lessons.findIndex((_, i) => !completed[i]);
      this.state.lessonIndex = firstIncomplete === -1 ? 0 : firstIncomplete;
      this.save();

      const beginBtn = document.getElementById("coverBeginBtn");
      const completedCount = completed.filter(Boolean).length;
      beginBtn.innerHTML = (completedCount === 0
        ? `Begin chapter`
        : completedCount === mod.lessons.length ? `Review chapter` : `Continue chapter`)
        + ` <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`;
      beginBtn.onclick = () => {
        this.go("module");
        this.renderLesson();
      };

      this.go("cover");
    },

    /* ---------- MODULE / LESSON ---------- */
    renderLesson() {
      const mod = window.MODULES.find(m => m.id === this.state.currentModuleId);
      if (!mod) return;
      const idx = this.state.lessonIndex;
      const lesson = mod.lessons[idx];

      // Sidebar
      document.getElementById("sidebarChapter").innerHTML = mod.title;
      const completed = this.state.completedLessons[mod.id] || [];
      document.getElementById("sidebarList").innerHTML = mod.lessons.map((l, i) => {
        const isActive = i === idx;
        const isDone = completed[i];
        return `<li class="${isActive ? 'active' : ''} ${isDone ? 'done' : ''}" data-i="${i}">
          <span class="sb-num">${String(i+1).padStart(2,"0")}</span>${l.title}
        </li>`;
      }).join("");
      document.querySelectorAll("#sidebarList li").forEach(li => {
        li.addEventListener("click", () => {
          this.state.lessonIndex = parseInt(li.dataset.i, 10);
          this.save();
          this.renderLesson();
        });
      });
      document.getElementById("sidebarBack").onclick = () => this.go("dashboard");

      // Lesson content
      const numStr = `${String(mod.number).padStart(2,"0")}.${String(idx+1).padStart(2,"0")}`;
      document.getElementById("moduleContent").innerHTML = `
        <div class="lesson">
          <div class="lesson-num">${numStr}</div>
          <h1 class="lesson-title">${lesson.title}</h1>
          ${lesson.lede ? `<p class="lesson-lede">${lesson.lede}</p>` : ''}
          <div class="lesson-body">${lesson.body}</div>
        </div>
      `;

      document.getElementById("lessonCounter").textContent = `${idx + 1} / ${mod.lessons.length}`;

      const prev = document.getElementById("prevLessonBtn");
      const next = document.getElementById("nextLessonBtn");
      prev.disabled = idx === 0;
      next.textContent = idx === mod.lessons.length - 1 ? "Complete chapter ✓" : "Next →";

      prev.onclick = () => {
        if (this.state.lessonIndex > 0) {
          this.state.lessonIndex--;
          this.save();
          this.renderLesson();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };
      next.onclick = () => {
        const arr = this.state.completedLessons[mod.id] || new Array(mod.lessons.length).fill(false);
        arr[idx] = true;
        this.state.completedLessons[mod.id] = arr;
        this.save();
        this.updateNavProgress();

        if (idx < mod.lessons.length - 1) {
          this.state.lessonIndex++;
          this.save();
          this.renderLesson();
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          this.toast(`Chapter ${mod.number} complete ✓`);
          this.go("dashboard");
        }
      };
    },

    /* ---------- SCROLL PROGRESS BAR ---------- */
    bindScrollProgress() {
      const bar = document.querySelector("#readProgress > i");
      let ticking = false;
      const update = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        bar.style.width = Math.min(100, Math.max(0, pct)) + "%";
        ticking = false;
      };
      window.addEventListener("scroll", () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      }, { passive: true });
    },

    /* ---------- NAV progress ---------- */
    updateNavProgress() {
      if (!this.state.stage) {
        document.getElementById("navProgress").hidden = true;
        document.getElementById("navResume").hidden = !this.state.stage;
        return;
      }
      const pct = this.getOverallProgress();
      document.getElementById("navProgress").hidden = false;
      document.getElementById("navProgressText").textContent = `${pct}% complete`;
      document.getElementById("navResume").hidden = false;
      document.getElementById("navStart").textContent = pct === 0 ? "Start learning" : "Continue";
    },

    /* ---------- EXAM RESULT ---------- */
    showExamResult() {
      this.go("result");
      const passed = this.state.examPassed;
      const score = this.state.examScore;
      const wrap = document.getElementById("examResult");
      wrap.innerHTML = `
        <div class="stage-card glass">
          ${passed ? `
            <div class="stage-badge" style="background: linear-gradient(135deg, rgba(111,227,163,0.20), rgba(124,231,214,0.18)); border-color: rgba(111,227,163,0.3);">
              <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--success); display: inline-block; box-shadow: 0 0 12px var(--success);"></span>
              <span>Passed</span>
            </div>
            <h1 class="h1">Brilliant. You've completed the course.</h1>
            <p class="lede">You scored <strong>${score}%</strong> — comfortably above the 80% threshold. Your certificate is ready to personalise.</p>
            <div class="stage-stats">
              <div class="stage-stat"><b>${score}%</b><span>Final score</span></div>
              <div class="stage-stat"><b>${window.FINAL_EXAM.length}</b><span>Questions</span></div>
              <div class="stage-stat"><b>${window.MODULES.length}</b><span>Chapters complete</span></div>
            </div>
            <button class="btn btn-primary btn-lg" id="goCert">
              Generate certificate
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          ` : `
            <div class="stage-badge" style="background: linear-gradient(135deg, rgba(244,199,112,0.20), rgba(255,122,138,0.18)); border-color: rgba(244,199,112,0.3);">
              <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent); display: inline-block; box-shadow: 0 0 12px var(--accent);"></span>
              <span>Not quite yet</span>
            </div>
            <h1 class="h1">So close — let's tighten a few areas and retry.</h1>
            <p class="lede">You scored <strong>${score}%</strong>. You need 80% to pass. Take another look at the chapters where you felt unsure — then come back to the exam when you're ready.</p>
            <div class="stage-stats">
              <div class="stage-stat"><b>${score}%</b><span>Your score</span></div>
              <div class="stage-stat"><b>80%</b><span>Pass mark</span></div>
              <div class="stage-stat"><b>${80 - score}%</b><span>Points needed</span></div>
            </div>
            <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
              <button class="btn btn-primary btn-lg" id="retryExam">Retake exam</button>
              <button class="btn btn-ghost btn-lg" id="reviewPath">Review chapters</button>
            </div>
          `}
        </div>
      `;
      if (passed) {
        document.getElementById("goCert").onclick = () => this.go("certificate");
      } else {
        document.getElementById("retryExam").onclick = () => this.go("exam");
        document.getElementById("reviewPath").onclick = () => this.go("dashboard");
      }
    },

    /* ---------- CERTIFICATE ---------- */
    renderCertificate() {
      if (!this.state.certificate.date) {
        this.state.certificate.date = new Date().toISOString();
        this.state.certificate.id = "EA-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-" + new Date().getFullYear();
        this.save();
      }

      const cert = this.state.certificate;
      const nameInput = document.getElementById("certName");
      const titleInput = document.getElementById("certTitle");
      nameInput.value = cert.name || "";
      titleInput.value = cert.title || "";

      const updatePreview = () => {
        const name = nameInput.value.trim() || "Your Name";
        const title = titleInput.value.trim();
        document.getElementById("certNameOut").textContent = name;
        const titleOut = document.getElementById("certTitleOut");
        titleOut.textContent = title;
        titleOut.style.display = title ? "block" : "none";
        document.getElementById("certScore").textContent = (this.state.examScore || 0) + "%";
        const d = new Date(cert.date);
        document.getElementById("certDate").textContent = d.toLocaleDateString("en-GB", {
          year: "numeric", month: "long", day: "numeric"
        });
        document.getElementById("certId").textContent = cert.id;
        this.state.certificate.name = nameInput.value;
        this.state.certificate.title = titleInput.value;
        this.save();
      };
      nameInput.oninput = updatePreview;
      titleInput.oninput = updatePreview;
      updatePreview();

      document.getElementById("downloadPng").onclick = () => this.downloadCertPng();
      document.getElementById("printPdf").onclick = () => window.print();
      document.getElementById("shareCert").onclick = () => {
        const text = `I just completed the Evaluation Academy course on evaluation theory & practice with a score of ${this.state.examScore}%! Certificate ID: ${cert.id}.`;
        navigator.clipboard?.writeText(text).then(() => this.toast("Share text copied to clipboard"));
      };
    },

    downloadCertPng() {
      const cert = document.getElementById("certificate");
      const W = 1600, H = 1131;
      const clone = cert.cloneNode(true);
      clone.style.transform = "none";
      clone.style.width = W + "px";
      clone.style.height = H + "px";

      const fontCss = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');`;
      const xml = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
          <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml">
              <style>${fontCss}${this._getCertCss()}</style>
              ${clone.outerHTML}
            </div>
          </foreignObject>
        </svg>`;
      const blob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = W; canvas.height = H;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#F8F4EB";
        ctx.fillRect(0, 0, W, H);
        ctx.drawImage(img, 0, 0, W, H);
        canvas.toBlob((b) => {
          const a = document.createElement("a");
          a.href = URL.createObjectURL(b);
          a.download = `Evaluation-Academy-Certificate-${this.state.certificate.id}.png`;
          a.click();
          URL.revokeObjectURL(url);
          this.toast("Certificate downloaded ✓");
        }, "image/png");
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        this.toast("PNG export not supported in this browser — try 'Save as PDF' instead.");
      };
      img.src = url;
    },

    _getCertCss() {
      return `
        .certificate { position: relative; width: 1600px; height: 1131px;
          background: linear-gradient(135deg, #F8F4EB 0%, #FAF8F2 50%, #F2EDDF 100%);
          color: #1A2238; font-family: "Fraunces", Georgia, serif; box-sizing: border-box; }
        .cert-border { position: absolute; top: 48px; left: 48px; right: 48px; bottom: 48px;
          border: 4px solid #0E7C7B; border-radius: 8px; }
        .cert-border::after { content: ""; position: absolute; top: 12px; left: 12px; right: 12px; bottom: 12px;
          border: 2px solid rgba(14,124,123,0.4); border-radius: 4px; }
        .cert-corner { position: absolute; width: 120px; height: 120px; }
        .cert-corner.tl { top: 60px; left: 60px; }
        .cert-corner.tl::before { content: ""; position: absolute; top: 0; left: 0; width: 80px; height: 6px; background: #0E7C7B; }
        .cert-corner.tl::after { content: ""; position: absolute; top: 0; left: 0; width: 6px; height: 80px; background: #0E7C7B; }
        .cert-corner.tr { top: 60px; right: 60px; }
        .cert-corner.tr::before { content: ""; position: absolute; top: 0; right: 0; width: 80px; height: 6px; background: #0E7C7B; }
        .cert-corner.tr::after { content: ""; position: absolute; top: 0; right: 0; width: 6px; height: 80px; background: #0E7C7B; }
        .cert-corner.bl { bottom: 60px; left: 60px; }
        .cert-corner.bl::before { content: ""; position: absolute; bottom: 0; left: 0; width: 80px; height: 6px; background: #0E7C7B; }
        .cert-corner.bl::after { content: ""; position: absolute; bottom: 0; left: 0; width: 6px; height: 80px; background: #0E7C7B; }
        .cert-corner.br { bottom: 60px; right: 60px; }
        .cert-corner.br::before { content: ""; position: absolute; bottom: 0; right: 0; width: 80px; height: 6px; background: #0E7C7B; }
        .cert-corner.br::after { content: ""; position: absolute; bottom: 0; right: 0; width: 6px; height: 80px; background: #0E7C7B; }
        .cert-inner { position: relative; padding: 140px 160px; height: 100%;
          display: flex; flex-direction: column; text-align: center; align-items: center; justify-content: center; box-sizing: border-box; }
        .cert-mark { margin-bottom: 16px; }
        .cert-eyebrow { font-family: "Inter", sans-serif; font-size: 22px; font-weight: 600;
          letter-spacing: 0.3em; text-transform: uppercase; color: #0E7C7B; margin: 0 0 12px; }
        .cert-h1 { font-family: "Fraunces", serif; font-weight: 500; font-style: italic;
          font-size: 76px; color: #173F5F; margin: 0 0 36px; letter-spacing: -0.01em; }
        .cert-presented { font-family: "Inter", sans-serif; font-size: 26px; color: #4A5878; margin: 0 0 12px; letter-spacing: 0.04em; }
        .cert-name { font-family: "Fraunces", serif; font-weight: 500; font-size: 88px; color: #1A2238;
          margin: 0 0 8px; padding-bottom: 16px; border-bottom: 2px solid rgba(14,124,123,0.3);
          display: inline-block; min-width: 560px; letter-spacing: -0.01em; }
        .cert-title { font-family: "Inter", sans-serif; font-size: 26px; color: #4A5878; margin: 8px 0 32px; font-style: italic; }
        .cert-body { font-family: "Inter", sans-serif; font-size: 28px; color: #2A3650;
          line-height: 1.7; max-width: 1080px; margin: 0 0 48px; }
        .cert-body em { font-family: "Fraunces", serif; font-style: italic; color: #0E7C7B; font-weight: 500; }
        .cert-meta { display: flex; align-items: center; justify-content: space-between;
          width: 100%; max-width: 1160px; margin-top: auto; gap: 48px; }
        .cert-meta > div:not(.cert-seal) { display: flex; flex-direction: column; align-items: center;
          border-top: 2px solid rgba(14,124,123,0.3); padding-top: 16px; min-width: 280px; }
        .cert-label { font-family: "Inter", sans-serif; font-size: 18px; color: #4A5878; letter-spacing: 0.2em; text-transform: uppercase; }
        .cert-value { font-family: "Fraunces", serif; font-size: 28px; color: #1A2238; margin-top: 4px; }
        .cert-foot { font-family: "Inter", sans-serif; font-size: 18px; color: #6A7898;
          letter-spacing: 0.08em; margin: 32px 0 0; }
      `;
    },

    /* ---------- TOAST ---------- */
    toast(msg) {
      const el = document.getElementById("toast");
      el.textContent = msg;
      el.hidden = false;
      clearTimeout(this._toastT);
      this._toastT = setTimeout(() => { el.hidden = true; }, 2800);
    }
  };

  window.App = App;
  document.addEventListener("DOMContentLoaded", () => App.init());
})();
