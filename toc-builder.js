/* =============================================================
   THEORY OF CHANGE BUILDER — Standalone interactive learning tool
   Learner builds their own ToC step-by-step and gets a printable product.
   ============================================================= */

(function () {
  "use strict";

  const STEPS = [
    {
      id: "context",
      label: "Context",
      title: "Name your programme",
      hint: "Give your Theory of Change a title and context so the final document makes sense when printed and shared.",
      fields: [
        { id: "title",   label: "Programme title",  placeholder: "e.g., UNFPA Country Programme 2024–2028" },
        { id: "country", label: "Country / Context", placeholder: "e.g., Bangladesh" },
        { id: "focus",   label: "Thematic focus",    placeholder: "e.g., Sexual & Reproductive Health" }
      ]
    },
    {
      id: "inputs",
      label: "Inputs",
      chip: "INPUTS",
      color: "#0E7C7B",
      title: "What does the programme bring?",
      hint: "Inputs are the resources you invest — funding, staff, expertise, partnerships, materials. One item per line.",
      example: "UNFPA core resources\nNational government co-financing\n12 technical advisers deployed\nContraceptive commodity supply chain",
      assumptionPrompt: "For these inputs to enable the activities, what must be true?"
    },
    {
      id: "activities",
      label: "Activities",
      chip: "ACTIVITIES",
      color: "#1B7A78",
      title: "What does the programme do?",
      hint: "Activities are the specific actions and interventions your programme implements. One item per line.",
      example: "Train 320 midwives in FP counselling\nDistribute contraceptive commodities to 45 health centres\nAdvocacy with Ministry of Health on SRH policy",
      assumptionPrompt: "For these activities to produce the outputs, what must be true?"
    },
    {
      id: "outputs",
      label: "Outputs",
      chip: "OUTPUTS",
      color: "#0A5F5E",
      title: "What does the programme directly produce?",
      hint: "Outputs are the tangible deliverables and services resulting directly from your activities. One item per line.",
      example: "320 midwives trained and certified\n45 health centres equipped with commodities\nFamily planning counselling available at all programme sites",
      assumptionPrompt: "For these outputs to shift the outcomes, what must be true?"
    },
    {
      id: "outcomes",
      label: "Outcomes",
      chip: "OUTCOMES",
      color: "#173F5F",
      title: "What changes in behaviour or systems?",
      hint: "Outcomes are the changes in people's behaviour, knowledge, or systems that result from using the outputs. One item per line.",
      example: "15,000 additional women using modern family planning\nImproved quality of maternal care at target facilities\nStronger government commitment to SRH budget allocation",
      assumptionPrompt: "For these outcomes to contribute to the transformative result, what must be true?"
    },
    {
      id: "result",
      label: "Transformative Result",
      chip: "TRANSFORMATIVE RESULT",
      color: "#C87A28",
      title: "What is the ultimate goal?",
      hint: "The transformative result is the long-term impact your programme contributes to. Align it with UNFPA's three transformative results where possible.",
      example: "Zero unmet need for family planning by 2030",
      isResult: true
    }
  ];

  const ToCBuilder = {
    current: 0,
    data: {
      context: { title: "", country: "", focus: "" },
      inputs: "", activities: "", outputs: "", outcomes: "", result: "",
      a_inputs: "", a_activities: "", a_outputs: "", a_outcomes: ""
    },

    start() {
      this._load();
      this.current = 0;
      this._render();
    },

    _load() {
      try {
        const saved = JSON.parse(localStorage.getItem("evalAcademy.toc") || "null");
        if (saved) this.data = Object.assign({}, this.data, saved);
      } catch (e) {}
    },

    _save() {
      localStorage.setItem("evalAcademy.toc", JSON.stringify(this.data));
    },

    _collectCurrent() {
      const step = STEPS[this.current];
      if (!step) return;
      if (step.id === "context") {
        step.fields.forEach(f => {
          const el = document.getElementById("tocF_" + f.id);
          if (el) this.data.context[f.id] = el.value.trim();
        });
      } else {
        const main = document.getElementById("tocF_main");
        if (main) this.data[step.id] = main.value;
        const assump = document.getElementById("tocF_assumption");
        const assumptionKey = "a_" + (step.id === "result" ? "" : step.id);
        if (assump && assumptionKey !== "a_") this.data[assumptionKey] = assump.value.trim();
      }
      this._save();
    },

    _render() {
      const container = document.getElementById("tocBuilderInner");
      if (!container) return;

      if (this.current >= STEPS.length) {
        this._renderProduct(container);
        return;
      }

      const step = STEPS[this.current];
      const isFirst = this.current === 0;

      let formHtml = "";
      if (step.id === "context") {
        formHtml = step.fields.map(f => `
          <label class="toc-field">
            <span class="toc-field-label">${f.label}</span>
            <input class="toc-input" type="text" id="tocF_${f.id}"
              placeholder="${f.placeholder}"
              value="${(this.data.context[f.id] || "").replace(/"/g, "&quot;")}"/>
          </label>`).join("");
      } else {
        const prevStepId = STEPS[this.current - 1]?.id;
        const assumptionKey = "a_" + prevStepId;
        const hasPrevAssumption = prevStepId && prevStepId !== "context" && this.data[assumptionKey] !== undefined;

        formHtml = `
          <label class="toc-field">
            <span class="toc-field-label">Your ${step.chip.toLowerCase()}</span>
            <span class="toc-field-hint">One item per line — be specific and measurable.</span>
            <textarea class="toc-textarea" id="tocF_main"
              rows="${step.isResult ? 3 : 5}"
              placeholder="${step.example.split("\n").map(l => "e.g., " + l).join("\n")}">${this.data[step.id] || ""}</textarea>
          </label>
          <div class="toc-example-block">
            <span class="toc-example-label">Example</span>
            <pre class="toc-example">${step.example}</pre>
          </div>
          ${!step.isResult ? `
            <label class="toc-field toc-assumption-field">
              <span class="toc-assumption-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Assumption
              </span>
              <span class="toc-field-hint">${step.assumptionPrompt}</span>
              <textarea class="toc-textarea toc-assumption-textarea" id="tocF_assumption"
                rows="2"
                placeholder="e.g., Government maintains political will and co-financing commitment">${this.data["a_" + step.id] || ""}</textarea>
            </label>` : ""}
        `;
      }

      container.innerHTML = `
        <div class="toc-wizard">
          <aside class="toc-sidebar">
            <div class="toc-sidebar-label">Steps</div>
            ${STEPS.map((s, i) => `
              <div class="toc-sidebar-step ${i === this.current ? "is-active" : ""} ${i < this.current ? "is-done" : ""}">
                <div class="toc-sidebar-dot">
                  ${i < this.current
                    ? '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>'
                    : (i + 1)}
                </div>
                <span class="toc-sidebar-name">${s.label}</span>
              </div>`).join("")}
            <div class="toc-sidebar-step ${this.current >= STEPS.length ? "is-active" : ""}">
              <div class="toc-sidebar-dot">✦</div>
              <span class="toc-sidebar-name">Your ToC</span>
            </div>
          </aside>

          <div class="toc-main">
            <div class="toc-step-head">
              <span class="toc-step-num">${String(this.current + 1).padStart(2, "0")}</span>
              <div class="toc-step-head-text">
                ${step.chip ? `<span class="toc-level-chip" style="--chip-color:${step.color}">${step.chip}</span>` : ""}
                <h2 class="toc-step-title">${step.title}</h2>
                <p class="toc-step-hint">${step.hint}</p>
              </div>
            </div>

            <div class="toc-form">${formHtml}</div>

            <div class="toc-foot">
              <button class="btn btn-ghost" id="tocPrevBtn" ${isFirst ? "disabled" : ""}>← Back</button>
              <button class="btn btn-primary" id="tocNextBtn">
                ${this.current === STEPS.length - 1 ? "Build my Theory of Change →" : "Continue →"}
              </button>
            </div>
          </div>

          <div class="toc-preview-strip">
            <div class="toc-preview-label">Your chain so far</div>
            <div class="toc-strip-chain">${this._buildStrip()}</div>
          </div>
        </div>
      `;

      container.querySelector("#tocPrevBtn")?.addEventListener("click", () => {
        this._collectCurrent(); this.current--; this._render();
      });
      container.querySelector("#tocNextBtn")?.addEventListener("click", () => {
        this._collectCurrent(); this.current++; this._render();
      });
    },

    _buildStrip() {
      const levels = [
        { id: "inputs",     label: "Inputs",    color: "#0E7C7B" },
        { id: "activities", label: "Activities", color: "#1B7A78" },
        { id: "outputs",    label: "Outputs",    color: "#0A5F5E" },
        { id: "outcomes",   label: "Outcomes",   color: "#173F5F" },
        { id: "result",     label: "Result",     color: "#C87A28" }
      ];
      return levels.map((l, i) => {
        const items = (this.data[l.id] || "").split("\n").filter(x => x.trim()).slice(0, 2);
        const empty = items.length === 0;
        return `
          ${i > 0 ? '<span class="toc-strip-sep">→</span>' : ""}
          <div class="toc-strip-box ${empty ? "is-empty" : ""}">
            <span class="toc-strip-chip" style="color:${l.color}">${l.label}</span>
            ${empty ? "<span class='toc-strip-dash'>—</span>"
                    : items.map(it => `<span class="toc-strip-item">${it.length > 28 ? it.slice(0, 28) + "…" : it}</span>`).join("")}
          </div>`;
      }).join("");
    },

    _renderProduct(container) {
      const d = this.data;
      const title   = d.context.title   || "Theory of Change";
      const country = d.context.country || "";
      const focus   = d.context.focus   || "";

      const levels = [
        { id: "inputs",     chip: "Inputs",                color: "#0E7C7B", assumption: d.a_inputs },
        { id: "activities", chip: "Activities",            color: "#1B7A78", assumption: d.a_activities },
        { id: "outputs",    chip: "Outputs",               color: "#0A5F5E", assumption: d.a_outputs },
        { id: "outcomes",   chip: "Outcomes",              color: "#173F5F", assumption: d.a_outcomes },
        { id: "result",     chip: "Transformative Result", color: "#C87A28", assumption: null }
      ];

      const chainHtml = levels.map((l, i) => {
        const items = (d[l.id] || "").split("\n").filter(x => x.trim());
        return `
          ${i > 0 ? `
            <div class="toc-prod-connector">
              <div class="toc-prod-arrow-line">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                  <line x1="0" y1="12" x2="32" y2="12" stroke="#0E7C7B" stroke-width="1.5"/>
                  <path d="M28 6 L36 12 L28 18" stroke="#0E7C7B" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              ${l.assumption ? `<div class="toc-prod-assumption"><em>${l.assumption}</em></div>` : ""}
            </div>` : ""}
          <div class="toc-prod-col">
            <div class="toc-prod-box" style="--chip-color:${l.color}">
              <div class="toc-prod-chip">${l.chip}</div>
              <ul class="toc-prod-list">
                ${items.length ? items.map(it => `<li>${it.trim()}</li>`).join("") : "<li class='is-empty'>—</li>"}
              </ul>
            </div>
          </div>`;
      }).join("");

      container.innerHTML = `
        <div class="toc-product" id="tocProduct">
          <div class="toc-prod-topbar no-print">
            <button class="btn btn-ghost btn-sm" id="tocEditBtn">← Edit</button>
            <div class="toc-prod-topbar-actions">
              <button class="btn btn-ghost" id="tocCopyBtn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                Copy as text
              </button>
              <button class="btn btn-primary" id="tocPrintBtn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                Print / Save PDF
              </button>
            </div>
          </div>

          <div class="toc-prod-doc">
            <header class="toc-prod-doc-header">
              <div class="toc-prod-doc-meta">
                <span class="toc-prod-doc-label">Theory of Change</span>
                <h1 class="toc-prod-doc-title">${title}</h1>
                ${(country || focus) ? `<p class="toc-prod-doc-sub">${[country, focus].filter(Boolean).join(" · ")}</p>` : ""}
              </div>
              <div class="toc-prod-doc-date">${new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</div>
            </header>

            <div class="toc-prod-chain">${chainHtml}</div>

            <footer class="toc-prod-doc-footer">
              Built with <strong>Evaluation Academy</strong> · Based on the UNFPA Evaluation Handbook (2024)
            </footer>
          </div>
        </div>
      `;

      container.querySelector("#tocEditBtn")?.addEventListener("click", () => {
        this.current = STEPS.length - 1; this._render();
      });
      container.querySelector("#tocPrintBtn")?.addEventListener("click", () => window.print());
      container.querySelector("#tocCopyBtn")?.addEventListener("click", () => {
        const lines = [
          "THEORY OF CHANGE", title,
          [country, focus].filter(Boolean).join(" · "), "",
          "INPUTS", d.inputs || "—", "",
          "  ↓ Assumption: " + (d.a_inputs || "—"), "",
          "ACTIVITIES", d.activities || "—", "",
          "  ↓ Assumption: " + (d.a_activities || "—"), "",
          "OUTPUTS", d.outputs || "—", "",
          "  ↓ Assumption: " + (d.a_outputs || "—"), "",
          "OUTCOMES", d.outcomes || "—", "",
          "  ↓ Assumption: " + (d.a_outcomes || "—"), "",
          "TRANSFORMATIVE RESULT", d.result || "—"
        ];
        navigator.clipboard?.writeText(lines.join("\n"))
          .then(() => { if (window.App?.toast) App.toast("Theory of Change copied to clipboard"); });
      });
    }
  };

  window.ToCBuilder = ToCBuilder;
})();
