/* =============================================================
   QUIZ ENGINE — Stage Assessment + Final Exam
   Supports: standard MCQ, scenario MCQ, arrange (ToC builder)
   ============================================================= */

(function () {
  "use strict";

  const Quiz = {

    /* ---------- STAGE ASSESSMENT ---------- */
    startStageAssessment() {
      this._run({
        questions: window.STAGE_QUIZ,
        containerId: "quizContainer",
        progressId: "quizProgressFill",
        onComplete: (result) => {
          App.state.stageAnswers = result.answers;
          App.state.stageScore  = result.scorePct;
          App.state.stage       = result.scorePct <= 40 ? "beginner" : result.scorePct <= 75 ? "intermediate" : "advanced";
          App.save();
          App.showStageResult();
        }
      });
    },

    /* ---------- FINAL EXAM ---------- */
    startFinalExam() {
      this._run({
        questions: window.FINAL_EXAM,
        containerId: "examContainer",
        progressId: "examProgressFill",
        onComplete: (result) => {
          App.state.examScore  = result.scorePct;
          App.state.examAnswers = result.answers;
          App.state.examPassed = result.scorePct >= 80;
          App.save();
          App.showExamResult();
        }
      });
    },

    /* ---------- Core runner (shared) ---------- */
    _run(cfg) {
      const container = document.getElementById(cfg.containerId);
      const progressEl = document.getElementById(cfg.progressId);
      const questions = cfg.questions;
      const total = questions.length;
      let current = 0;
      const answers = new Array(total).fill(null);

      const setProgress = () => {
        if (progressEl) progressEl.style.width = (((current + 1) / total) * 100) + "%";
      };

      const goNext = () => {
        if (current < total - 1) { current++; render(); }
        else { cfg.onComplete(this._score(questions, answers)); }
        setProgress();
      };

      const goPrev = () => {
        if (current > 0) { current--; render(); setProgress(); }
      };

      const render = () => {
        const q = questions[current];
        if (q.type === "arrange") {
          if (!Array.isArray(answers[current])) answers[current] = [];
          this._renderArrange(container, q, current, total, answers[current], goNext, goPrev, setProgress);
        } else {
          this._renderMCQ(container, q, current, total, answers, goNext, goPrev);
        }
        setProgress();
      };

      render();
    },

    /* ---------- MCQ (standard + scenario) ---------- */
    _renderMCQ(container, q, current, total, answers, goNext, goPrev) {
      const scenarioHtml = q.type === "scenario" ? `
        <div class="exam-scenario">
          <div class="scenario-badge">${q.scenarioTitle || "Scenario"}</div>
          ${q.scenarioBody || ""}
        </div>` : "";

      container.innerHTML = `
        <div class="quiz-q">
          <div class="step">Question ${current + 1} of ${total}</div>
          ${scenarioHtml}
          <h2>${q.q}</h2>
          <div class="options" role="radiogroup">
            ${q.options.map((opt, i) => `
              <button class="option ${answers[current] === i ? "selected" : ""}"
                      role="radio" aria-checked="${answers[current] === i}" data-i="${i}">
                <span class="bullet" aria-hidden="true"></span>
                <span class="option-label">${opt}</span>
              </button>
            `).join("")}
          </div>
          <div class="quiz-foot">
            <button class="btn btn-ghost" id="prevQBtn" ${current === 0 ? "disabled" : ""}>← Previous</button>
            <span class="muted small">${answers.filter(a => a !== null).length} of ${total} answered</span>
            <button class="btn btn-primary" id="nextQBtn" ${answers[current] === null ? "disabled" : ""}>
              ${current === total - 1 ? "Submit" : "Next →"}
            </button>
          </div>
        </div>`;

      container.querySelectorAll(".option").forEach(btn => {
        btn.addEventListener("click", () => {
          const i = parseInt(btn.dataset.i, 10);
          answers[current] = i;
          container.querySelectorAll(".option").forEach(b => {
            const bi = parseInt(b.dataset.i, 10);
            b.classList.toggle("selected", bi === i);
            b.setAttribute("aria-checked", bi === i);
          });
          container.querySelector("#nextQBtn").disabled = false;
        });
      });

      container.querySelector("#prevQBtn")?.addEventListener("click", goPrev);
      container.querySelector("#nextQBtn")?.addEventListener("click", goNext);
    },

    /* ---------- Arrange (Theory of Change builder) ---------- */
    _renderArrange(container, q, current, total, chain, goNext, goPrev, onChange) {
      // Shuffle tiles for display (consistent within a session)
      const shuffled = [...q.items].sort((a, b) => a.text.length - b.text.length);
      const allPlaced = () => chain.length === q.items.length;

      const rerender = () => {
        const chainHtml = chain.length === 0
          ? `<span class="toc-chain-placeholder">Click items below to start building…</span>`
          : chain.map((level, pos) => {
              const item = q.items.find(it => it.level === level);
              return `${pos > 0 ? '<span class="toc-chain-arrow">→</span>' : ""}
                      <span class="toc-chain-item" data-level="${level}" title="Click to remove">
                        ${pos + 1}. ${item.chip}
                      </span>`;
            }).join("");

        const tilesHtml = shuffled.map(item => {
          const used = chain.includes(item.level);
          return `
            <button class="toc-tile ${used ? "used" : ""}" data-level="${item.level}" ${used ? "disabled" : ""}>
              <span class="toc-tile-chip">${item.chip}</span>
              <div class="toc-tile-text">${item.text}</div>
            </button>`;
        }).join("");

        container.innerHTML = `
          <div class="quiz-q">
            <div class="step">Question ${current + 1} of ${total}</div>
            <div class="exam-scenario">
              <div class="scenario-badge">${q.scenarioTitle || "Theory of Change Builder"}</div>
              ${q.scenarioBody || ""}
            </div>
            <h2>${q.q}</h2>
            <div class="toc-builder">
              <div class="toc-builder-label">Your causal chain (${chain.length} / ${q.items.length} placed)</div>
              <div class="toc-chain">${chainHtml}</div>
              <div class="toc-builder-label" style="margin-top:14px;">Available elements — click to add</div>
              <div class="toc-tiles">${tilesHtml}</div>
              <button class="toc-reset-btn" id="tocReset">↺ Reset</button>
            </div>
            <div class="quiz-foot">
              <button class="btn btn-ghost" id="prevQBtn" ${current === 0 ? "disabled" : ""}>← Previous</button>
              <span class="muted small">${chain.length} of ${q.items.length} placed</span>
              <button class="btn btn-primary" id="nextQBtn" ${allPlaced() ? "" : "disabled"}>
                ${current === total - 1 ? "Submit" : "Next →"}
              </button>
            </div>
          </div>`;

        // Add tile to chain
        container.querySelectorAll(".toc-tile:not([disabled])").forEach(tile => {
          tile.addEventListener("click", () => {
            chain.push(parseInt(tile.dataset.level, 10));
            rerender();
            if (onChange) onChange();
          });
        });

        // Remove from chain by clicking chain item
        container.querySelectorAll(".toc-chain-item").forEach(item => {
          item.addEventListener("click", () => {
            const lvl = parseInt(item.dataset.level, 10);
            const idx = chain.indexOf(lvl);
            if (idx > -1) { chain.splice(idx, 1); rerender(); if (onChange) onChange(); }
          });
        });

        container.querySelector("#tocReset")?.addEventListener("click", () => {
          chain.length = 0; rerender(); if (onChange) onChange();
        });

        container.querySelector("#prevQBtn")?.addEventListener("click", goPrev);
        container.querySelector("#nextQBtn")?.addEventListener("click", () => {
          if (allPlaced()) goNext();
        });
      };

      rerender();
    },

    /* ---------- Scoring ---------- */
    _score(questions, answers) {
      let earned = 0, total = 0;
      questions.forEach((q, i) => {
        const w = q.weight || 1;
        total += w;

        if (q.type === "arrange") {
          const a = answers[i];
          if (Array.isArray(a) && a.length === q.items.length) {
            const expected = [...q.items].sort((x, y) => x.level - y.level).map(it => it.level);
            if (JSON.stringify(a) === JSON.stringify(expected)) {
              earned += w;
            } else {
              // Partial: award proportion of correct adjacent pairs
              let ok = 0;
              for (let j = 0; j < a.length - 1; j++) if (a[j] < a[j + 1]) ok++;
              earned += (ok / (a.length - 1)) * w * 0.5;
            }
          }
        } else {
          if (answers[i] === q.correct) earned += w;
        }
      });

      return {
        answers,
        earned,
        total,
        scorePct: Math.round((earned / total) * 100),
        correctCount: questions.filter((q, i) => q.type !== "arrange" && answers[i] === q.correct).length,
        totalQuestions: questions.length
      };
    }
  };

  window.Quiz = Quiz;
})();
