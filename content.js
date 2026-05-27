/* =============================================================
   EVALUATION ACADEMY — Curriculum
   Mirrors the 5 phases of the UNFPA Evaluation Handbook (2024)
   Each lesson maps to a handbook sub-section.
   ============================================================= */

window.MODULES = [

  /* ============================================================
     CHAPTER 1 — PHASE 1: PREPARATION
     ============================================================ */
  {
    id: "ch1",
    number: 1,
    title: "Preparation",
    subtitle: "Everything the country office does before the evaluation team starts.",
    estMinutes: 60,
    levels: ["beginner"],
    phase: "Prepare",
    overview: "The preparation phase covers all the activities the country office performs in advance of the evaluation itself: launching the CPE, recruiting the Young and Emerging Evaluator, running the evaluation questions workshop, drafting the Terms of Reference, establishing the Evaluation Reference Group, recruiting the main evaluation team, building the document repository, cataloguing UNFPA interventions, and mapping stakeholders. Without good preparation, no CPE goes well.",
    lessons: [

      {
        title: "1.1 The CPE launch meeting",
        lede: "The country programme evaluation begins not with the consultants, but with a meeting. The CO Representative gathers the country office and lays the foundation of the next 11 months of work.",
        body: `
          <p>The CO Representative nominates the <strong>CPE Manager</strong> — usually the country office M&amp;E Officer, or a CO staff member designated in consultation with the Regional Office M&amp;E Adviser. The CPE Manager then leads the rest of preparation.</p>

          <p>The launch meeting brings together all CO staff and the RO M&amp;E Adviser. The CPE Manager presents the <strong>CPE Roadmap</strong> — the milestones diagram that takes everyone through the five phases: Preparation, Design, Fieldwork, Reporting, Dissemination &amp; Facilitation of Use.</p>

          <h3>What the launch meeting must accomplish</h3>

          <div class="kvgrid">
            <div class="kv"><b>Shared understanding</b><span>The Ready-to-Use (R2U) ToR template is shared and presented to all CO staff.</span></div>
            <div class="kv"><b>Roles and contributions</b><span>Clarity on who contributes what to the ToR, annexes, document repository — and by when.</span></div>
            <div class="kv"><b>ERG membership</b><span>The role of the Evaluation Reference Group is explained; its membership is discussed and agreed.</span></div>
            <div class="kv"><b>Team profile</b><span>The composition of the external evaluation team is agreed (and the option of contracting a firm vs individual consultants is examined).</span></div>
            <div class="kv"><b>Selection panel</b><span>The composition of the panel to select the consultants is set out.</span></div>
            <div class="kv"><b>Timeline</b><span>The CPE timeline is fixed — minimum 11 months, so the report is ready in time to inform the next country programme document.</span></div>
            <div class="kv"><b>EQ workshop date</b><span>Participants and date for the upcoming evaluation questions workshop are announced.</span></div>
          </div>

          <div class="callout key">
            <span class="ic">◆</span>
            <div class="body"><strong>11-month minimum</strong>The handbook says explicitly: allow at least 11 months end-to-end, so that if unforeseen delays occur, you can still meet the final deadline and inform the next programming cycle.</div>
          </div>

          <p>After the launch, the government partner (or the CO Representative on the government's behalf) circulates an official announcement letter to inform all key stakeholders that the CPE has begun.</p>
        `
      },

      {
        title: "1.2 The evaluation team (stage 1) — Young and Emerging Evaluator",
        lede: "Recruitment of the evaluation team happens in two stages. The first person hired is not the team leader — it's a junior, an emerging evaluator under 35, brought on board right after the launch meeting.",
        body: `
          <p>Assembling the CPE evaluation team is a two-stage process. At <strong>stage one</strong>, the CPE Manager — in consultation with the CO Representative — recruits a <strong>Young and Emerging Evaluator (YEE)</strong>.</p>

          <h3>Who is a YEE?</h3>

          <div class="kvgrid">
            <div class="kv"><b>Profile</b><span>A junior professional below 35 years of age with less than 5 years of professional experience.</span></div>
            <div class="kv"><b>Skills</b><span>Well-versed in evaluation methods and new technologies — including AI for data management and analysis.</span></div>
            <div class="kv"><b>Value to the CPE</b><span>External perspective, innovative ideas, lower fee expectations than senior consultants, support to the CPE Manager during the preparation phase.</span></div>
            <div class="kv"><b>Value to the YEE</b><span>A unique opportunity to put knowledge into practice, consolidate evaluation skills, contribute to national evaluation capacities.</span></div>
          </div>

          <h3>Why recruit the YEE first?</h3>

          <p>The YEE is brought on board <em>immediately</em> after the CPE launch meeting — well before the main team. Their early engagement has three advantages:</p>

          <ol>
            <li>They support the CPE Manager in the numerous (and time-consuming) preparation activities.</li>
            <li>Joining early gives the YEE time to get a thorough orientation of UNFPA's mandate, the country programme, the UN system, and the CPE methodology.</li>
            <li>It signals UNFPA's commitment to youth participation in evaluation — central to the "leveraging the power of youth in evaluation" agenda.</li>
          </ol>

          <h3>Recruiting the YEE</h3>

          <p>The CPE Manager ensures the selection process is transparent, competitive, and inclusive — particularly of youth from groups that are least represented or "left behind". Steps:</p>

          <ol>
            <li>CO Representative approves the YEE Terms of Reference (from the toolkit).</li>
            <li>CPE Manager publishes a call for consultancy for young and emerging evaluators.</li>
            <li>Selection panel reviews candidates.</li>
            <li>Interviews with shortlisted candidates.</li>
            <li>Recruitment of the selected YEE.</li>
          </ol>

          <p>Once the main team is recruited (stage 2), the CPE Manager and the team leader agree on how to meaningfully engage the YEE — with dual supervision and a mentoring role throughout the entire process.</p>

          <div class="callout tip">
            <span class="ic">✓</span>
            <div class="body"><strong>The YEE is not a research assistant</strong>The YEE participates in <em>all phases</em> of the CPE — design, fieldwork, reporting, dissemination. Their role and responsibilities are defined to give them opportunities for learning and growth, not just task execution.</div>
          </div>
        `
      },

      {
        title: "1.3 The evaluation questions workshop",
        lede: "A CPE is about asking questions that matter. The questions are not drafted by the CPE Manager alone — they emerge from a structured workshop with country programme stakeholders.",
        body: `
          <p>An essential preparation task is to reflect on what the evaluation users need to know, and why. The <strong>evaluation questions workshop</strong> is the moment when that reflection becomes collective and explicit.</p>

          <h3>Who participates</h3>

          <p>The CO Representative calls together:</p>

          <ul>
            <li>Relevant CO staff (programme, operations, communication)</li>
            <li>Select stakeholders: government partners, implementing partners, development partners, representatives of rights-holder organisations</li>
            <li>The RO M&amp;E Adviser</li>
            <li>Select RO technical advisers</li>
          </ul>

          <p>The CO Representative calls the workshop; the CPE Manager organises and leads.</p>

          <h3>What the workshop does</h3>

          <p>The workshop opens a discussion on the country programme <strong>theory of change</strong>. Is there common agreement on whether it is well articulated? Does it lead to well-defined outcomes? Are the assumptions and external factors realistic?</p>

          <p>Subjecting the country programme theory of change to a "reality check" — 4 or 5 years after it was designed — identifies:</p>

          <ul>
            <li>Possible gaps and weaknesses</li>
            <li>Blind spots and exaggerated expectations</li>
            <li>Deviations or changes during implementation</li>
            <li>The links where the causal chain seems to break</li>
          </ul>

          <h3>Probing questions the workshop should ask</h3>

          <div class="kvgrid">
            <div class="kv"><b>Is the theory of change known and used?</b><span>By whom? If not used, why?</span></div>
            <div class="kv"><b>Is there agreement about intended results?</b><span>Or do different stakeholders have different views?</span></div>
            <div class="kv"><b>Are the change theories explicit?</b><span>(E.g. uptake of family planning could come about through changing social norms, capacity development, removal of barriers — which one applies here?)</span></div>
            <div class="kv"><b>Where does the causal chain break?</b><span>Where does achieving an intermediate outcome not seem to lead to the next?</span></div>
            <div class="kv"><b>Has context changed significantly?</b><span>(E.g. humanitarian crisis, policy reform.) How does it affect the theory of change?</span></div>
          </div>

          <h3>Connecting to the strategic plan</h3>

          <p>Participants also consider the <strong>key accelerators</strong> from the UNFPA Strategic Plan 2022-2025:</p>

          <ul>
            <li>Human-rights-based and gender-transformative approaches</li>
            <li>Innovation and digitalisation</li>
            <li>Partnership and South-South cooperation; financing</li>
            <li>Data and evidence</li>
            <li>Leave no one behind (LNOB) and reaching the furthest left behind first</li>
            <li>Resilience and adaptation; complementarity across development, humanitarian and peace-responsive efforts</li>
          </ul>

          <div class="callout key">
            <span class="ic">◆</span>
            <div class="body"><strong>The three transformative results</strong>Every CPE question ultimately connects to UNFPA's three world-changing results by 2030: <em>zero unmet need for family planning</em>; <em>zero preventable maternal death</em>; <em>zero gender-based violence, including harmful practices like child marriage and FGM</em>.</div>
          </div>

          <p>The outcome of the workshop is a focused, limited set of <em>preliminary</em> evaluation questions that will then be specified further in Phase 2 (Design). The questions are written into Section 5 of the R2U ToR.</p>
        `
      },

      {
        title: "1.4 Drafting the Terms of Reference (R2U ToR)",
        lede: "UNFPA does not start the TOR from a blank page. There is a Ready-to-Use Terms of Reference template — the R2U ToR — with four named annexes. The CPE Manager fills it in.",
        body: `
          <p>The <strong>R2U ToR</strong> (Ready-to-Use Terms of Reference) is a corporate template that standardises CPEs across UNFPA. The CPE Manager drafts the ToR using this template, with the deputy representative and CO staff contributing to dedicated sections.</p>

          <h3>The structure of the R2U ToR</h3>

          <div class="kvgrid">
            <div class="kv"><b>Sections 1-4</b><span>Background, objectives, scope, purpose, intended use of the CPE.</span></div>
            <div class="kv"><b>Section 5</b><span>The preliminary evaluation questions agreed at the EQ workshop.</span></div>
            <div class="kv"><b>Sections 6-9</b><span>Approach, methodology guidance, deliverables, timeline.</span></div>
            <div class="kv"><b>Section 10</b><span>Detailed time schedule covering all activities and milestones.</span></div>
            <div class="kv"><b>Sections 11-12</b><span>Team profile, governance arrangements, ethics, budget.</span></div>
          </div>

          <h3>The four annexes</h3>

          <p>The R2U ToR comes with four named annexes:</p>

          <div class="kvgrid">
            <div class="kv"><b>Annex A</b><span>Standard methodological annex — describes UNFPA's CPE methodology in detail.</span></div>
            <div class="kv"><b>Annex B</b><span>The stakeholder map (see lesson 1.9).</span></div>
            <div class="kv"><b>Annex C</b><span>The catalogue of UNFPA interventions in the country (see lesson 1.8).</span></div>
            <div class="kv"><b>Annex D</b><span>Standard annex with reference documents, checklists, and the EQA grid.</span></div>
          </div>

          <h3>The two-step drafting approach</h3>

          <p>The R2U explanatory note (in the CPE Management Kit) prescribes a two-step approach:</p>

          <ol>
            <li><strong>Step 1:</strong> The CPE Manager drafts the main body of the ToR, drawing on the EQ workshop outputs.</li>
            <li><strong>Step 2:</strong> The CPE Manager and CO staff jointly prepare annexes B (stakeholder map) and C (catalogue of interventions). Annex A and Annex D are standard.</li>
          </ol>

          <h3>Quality assurance</h3>

          <p>The draft ToR undergoes a formal quality assurance by the RO M&amp;E Adviser before it is finalised. Their review focuses on:</p>

          <ul>
            <li>Whether the preliminary evaluation questions are realistic and answerable</li>
            <li>Whether the scope is appropriate to the budget and timeline</li>
            <li>Whether cross-cutting concerns (human rights, gender, LNOB) are explicitly integrated</li>
            <li>Whether the methodology guidance is aligned with UNFPA standards</li>
          </ul>

          <p>Once the RO M&amp;E Adviser signs off, the final ToR with annexes A and D is published. Annexes B and C continue to be developed.</p>
        `
      },

      {
        title: "1.5 The evaluation reference group",
        lede: "The Evaluation Reference Group — the ERG — is the standing body of stakeholders that advises the CPE across its entire lifecycle. Forming it well is one of the small decisions with outsized influence.",
        body: `
          <p>The <strong>Evaluation Reference Group (ERG)</strong> is established during preparation, after the launch meeting and before the design phase begins. Its mandate is to advise the CPE at four named moments:</p>

          <div class="flowchain">
            <span class="step">ToR</span><span class="arr">→</span>
            <span class="step">Design report v1</span><span class="arr">→</span>
            <span class="step">CPE report v1</span><span class="arr">→</span>
            <span class="step">Recommendations workshop</span>
          </div>

          <h3>Who sits on the ERG</h3>

          <p>The CPE Manager — in consultation with the government partner that coordinates the country programme and CO staff — proposes the membership. A typical ERG includes:</p>

          <ul>
            <li>UNFPA CO management and senior technical staff</li>
            <li>RO M&amp;E Adviser</li>
            <li>Government counterparts (especially the coordinating government partner)</li>
            <li>Implementing partners</li>
            <li>Other UN agencies working in adjacent areas (UN Country Team)</li>
            <li>Civil society and rights-holder organisations</li>
            <li>Where appropriate, donors</li>
          </ul>

          <h3>How members are invited</h3>

          <p>The government partner — or the CO Representative on the government partner's behalf — sends a <strong>formal invitation letter</strong> to nominated members. The invitation is accompanied by the <strong>ERG ToR</strong> (a separate, standard document from the toolkit) which spells out the group's purpose, membership, and meeting cadence.</p>

          <h3>What the ERG does — and does not do</h3>

          <div class="kvgrid">
            <div class="kv"><b>Does</b><span>Provides advice on the ToR, the design report, the draft final report; participates in the recommendations workshop; advocates for the CPE's quality and use.</span></div>
            <div class="kv"><b>Does not</b><span>Take final authorship of findings; override the evaluation team's independent judgement; rewrite recommendations against the team's evidence.</span></div>
          </div>

          <div class="callout key">
            <span class="ic">◆</span>
            <div class="body"><strong>Advisory, not directive</strong>The ERG's comments are taken seriously but are advisory. The evaluation team retains authorship and final say on findings. The CPE Manager brokers when there is disagreement.</div>
          </div>
        `
      },

      {
        title: "1.6 The evaluation team (stage 2) — the main consultants",
        lede: "After the YEE, the main evaluation team is recruited through a two-tier process: pre-selection by the country office, pre-qualification by the regional office.",
        body: `
          <p>Stage two is the recruitment of the main evaluation team — typically the team leader and one or more team members. UNFPA uses a structured, multi-step process designed to protect independence and quality.</p>

          <h3>The six-step recruitment process</h3>

          <ol>
            <li><strong>Call for consultancy</strong> — published by the CPE Manager, using the CO operations team.</li>
            <li><strong>Pre-selection of candidates</strong> — by the CO panel against published criteria; uses the consultant pre-selection scorecard from the toolkit.</li>
            <li><strong>Submission to RO</strong> — pre-selected candidates are submitted to the Regional Office for pre-qualification.</li>
            <li><strong>Pre-qualification by RO M&amp;E Adviser</strong> — the RO M&amp;E Adviser independently reviews and pre-qualifies candidates.</li>
            <li><strong>Final selection</strong> — the CO panel chooses among pre-qualified candidates.</li>
            <li><strong>Interviews and recruitment</strong> — shortlisted candidates are interviewed; the selected team is contracted.</li>
          </ol>

          <h3>Team composition</h3>

          <p>The handbook recommends the team composition is agreed at the launch meeting (lesson 1.1). A typical CPE team includes:</p>

          <ul>
            <li>A <strong>team leader</strong> with senior evaluation experience and content expertise across UNFPA's mandate areas (SRHR, GEWE, P&amp;D, MH)</li>
            <li>One or more <strong>team members</strong> with complementary expertise — methodology, gender, country knowledge</li>
            <li>A <strong>national consultant</strong> with context-specific knowledge</li>
            <li>The <strong>YEE</strong> recruited earlier (lesson 1.2)</li>
          </ul>

          <p>The CO has the option to contract a consultancy firm instead of individual consultants. The cost and procurement implications must be examined at the launch meeting.</p>

          <h3>Onboarding</h3>

          <p>Before the team starts the design phase, the CPE Manager must ensure that consultants:</p>

          <ul>
            <li>Receive the complete R2U ToR with all annexes</li>
            <li>Have access to the fully populated document repository</li>
            <li>Take the UNFPA e-learning course on country programme evaluation</li>
            <li>Take the UN e-learning courses <strong>BSAFE</strong> and <strong>Prevention of Sexual Harassment and Abuse</strong></li>
            <li>Review and sign the UNEG Code of Conduct for evaluators</li>
          </ul>

          <div class="callout warn">
            <span class="ic">!</span>
            <div class="body"><strong>Independence protections</strong>Each evaluator declares any potential conflict of interest in writing before signing the contract. Team members must not have designed or implemented the country programme being evaluated.</div>
          </div>
        `
      },

      {
        title: "1.7 The document repository",
        lede: "Long before the evaluators arrive, the country office assembles every document the team will need. The repository is the team's first and most-used resource.",
        body: `
          <p>The <strong>document repository</strong> is an organised, online collection of every document relevant to the CPE. The CPE Manager sets it up during preparation and populates it with input from all relevant CO staff.</p>

          <h3>What goes into the repository</h3>

          <div class="kvgrid">
            <div class="kv"><b>Strategic documents</b><span>Country Programme Document (CPD), strategic plan, country office annual work plans (AWPs).</span></div>
            <div class="kv"><b>Reporting</b><span>Country office annual reports (COARs), donor reports, joint programme reports.</span></div>
            <div class="kv"><b>Previous evaluations</b><span>Earlier CPEs, project evaluations, mid-term reviews, research studies.</span></div>
            <div class="kv"><b>Project documentation</b><span>Project documents, progress and monitoring reports.</span></div>
            <div class="kv"><b>Technical &amp; statistical</b><span>Technical studies, statistical reports, audit reports.</span></div>
            <div class="kv"><b>National surveys</b><span>DHS, MICS, census data.</span></div>
            <div class="kv"><b>Centralized evaluations</b><span>UNFPA centralized evaluations germane to the country programme thematic scope (toolkit item: list of UNFPA centralized evaluations).</span></div>
          </div>

          <h3>Why this matters</h3>

          <p>The repository is more than an archive. It is what allows the evaluators to do extensive desk review at the start of the design phase (lesson 2.1.2) without burning weeks of fieldwork time chasing documents.</p>

          <p>The handbook is explicit: at the design phase, <em>extensive document review forms the bulk of the evaluators' work</em>. If the repository is incomplete or poorly organised, that bulk-of-the-work is delayed — and everything else slips.</p>

          <div class="callout tip">
            <span class="ic">✓</span>
            <div class="body"><strong>Build it as you live the programme</strong>Don't wait until the CPE launch to start filing. A well-run country office maintains the document repository continuously across the programme cycle — so when the CPE arrives, it is mostly already done.</div>
          </div>
        `
      },

      {
        title: "1.8 The catalogue of UNFPA interventions",
        lede: "Annex C of the R2U ToR is a complete list of every UNFPA intervention in the country during the evaluation period. Building it is more work than it sounds — and more important.",
        body: `
          <p>The <strong>catalogue of UNFPA interventions</strong> is Annex C of the R2U ToR. It lists every intervention — project, programme, technical assistance, advocacy — that UNFPA implemented in the country during the period covered by the CPE.</p>

          <h3>Why a catalogue?</h3>

          <p>Without a complete catalogue:</p>

          <ul>
            <li>The evaluation team cannot understand the scope of what UNFPA did</li>
            <li>Sampling decisions are made on partial information</li>
            <li>Findings about coherence (between interventions) are impossible to make</li>
            <li>Cost-effectiveness assessments are skewed</li>
          </ul>

          <h3>What goes in the catalogue</h3>

          <p>For each intervention, the catalogue typically captures:</p>

          <div class="kvgrid">
            <div class="kv"><b>Identification</b><span>Project code, title, implementing partner.</span></div>
            <div class="kv"><b>Thematic area</b><span>SRHR, gender equality and women's empowerment, population &amp; development, maternal health, humanitarian, etc.</span></div>
            <div class="kv"><b>Scope</b><span>Geography (districts/regions covered), target population groups.</span></div>
            <div class="kv"><b>Duration</b><span>Start and end dates within the programme cycle.</span></div>
            <div class="kv"><b>Resources</b><span>Total budget, funding source, expenditure to date.</span></div>
            <div class="kv"><b>Outputs &amp; outcomes</b><span>Connected output(s) from the country programme strategic results framework.</span></div>
          </div>

          <h3>Who builds it</h3>

          <p>The CPE Manager builds the catalogue with the support of all CO programme staff — each thematic lead contributing their portfolio. It is one of the more time-consuming preparation tasks, which is why it is started early and built progressively.</p>

          <div class="callout warn">
            <span class="ic">!</span>
            <div class="body"><strong>Common pitfall</strong>Country offices often forget small interventions — short-term technical assistance, advocacy activities, one-off grants. These need to be in the catalogue. An evaluation that misses 20% of the portfolio cannot make defensible claims about the whole.</div>
          </div>
        `
      },

      {
        title: "1.9 The stakeholder map",
        lede: "Annex B of the R2U ToR is the stakeholder map. It identifies every actor in the country programme's ecosystem — and signals who the evaluation team must reach.",
        body: `
          <p>The <strong>stakeholder map</strong> — Annex B of the R2U ToR — is built by the CPE Manager with all CO programme staff during preparation. It captures every category of actor whose perspective the CPE will need.</p>

          <h3>Categories of stakeholders</h3>

          <div class="kvgrid">
            <div class="kv"><b>Government partners</b><span>Line ministries, agencies, sub-national authorities involved in the country programme.</span></div>
            <div class="kv"><b>UN agencies</b><span>Other UN agencies in the UN Country Team, especially those with adjacent mandates.</span></div>
            <div class="kv"><b>Implementing partners</b><span>NGOs, CSOs, faith-based organisations, academic institutions that delivered UNFPA-supported interventions.</span></div>
            <div class="kv"><b>Donors</b><span>Bilateral and multilateral donors contributing to the country programme.</span></div>
            <div class="kv"><b>Rights-holders</b><span>The populations the interventions were designed to serve — adolescents, women, persons with disabilities, refugees, marginalised communities.</span></div>
            <div class="kv"><b>Technical experts</b><span>Independent national experts who can comment on the programme's positioning.</span></div>
          </div>

          <h3>What the map captures for each stakeholder</h3>

          <ul>
            <li>Organisation name and brief description</li>
            <li>Type and role in the country programme</li>
            <li>Geographic scope (national, sub-national, local)</li>
            <li>Specific UNFPA interventions they were involved in</li>
            <li>Contact information</li>
            <li>Notes on accessibility (language, location, sensitivity)</li>
          </ul>

          <h3>How the map is used downstream</h3>

          <p>In the design phase (Phase 2), the evaluation team uses the stakeholder map to:</p>

          <ul>
            <li>Build the <strong>sampling frame</strong> for interviews and focus groups</li>
            <li>Identify rights-holder groups that must be reached</li>
            <li>Plan the <strong>field phase agenda</strong> (Table 8 of the handbook)</li>
            <li>Design the <strong>communications plan</strong> for Phase 5</li>
          </ul>

          <div class="pullquote">
            <p>"The stakeholder map is where the CPE makes — or quietly fails to make — its commitment to reaching rights-holders and the furthest left behind. If they are not on the map, they will not be in the data."</p>
          </div>
        `
      }
    ]
  },

  /* ============================================================
     CHAPTER 2 — PHASE 2: DESIGN
     ============================================================ */
  {
    id: "ch2",
    number: 2,
    title: "Design",
    subtitle: "The evaluation team takes the ToR and builds an executable evaluation.",
    estMinutes: 55,
    levels: ["beginner", "intermediate"],
    phase: "Design",
    overview: "In the design phase, the newly-recruited evaluation team turns the R2U ToR into an executable plan. They orient themselves, conduct a desk review, do a first round of interviews, critically analyse the country programme theory of change, develop the evaluation matrix, and prepare for fieldwork. The phase ends with the Design Report — two versions, approved by the CPE Manager.",
    lessons: [

      {
        title: "2.1.1 Orientation and induction",
        lede: "Before the team can think, they have to know. The design phase opens with two meetings — an induction by the CPE Manager, then a full orientation by the country office.",
        body: `
          <p>The design phase opens with the team's arrival — physical or virtual — and two structured meetings that put them in command of the assignment.</p>

          <h3>The induction meeting</h3>

          <p>The CPE Manager welcomes the team and ensures they have a clear understanding of the assignment and easy access to all documentation. The induction focuses on:</p>

          <ul>
            <li>An open discussion on the CPE ToR (including annexes) and the UNFPA CPE methodological guidance</li>
            <li>Ensuring a common understanding of the CPE objectives, process and approach</li>
            <li>Verifying that all team members are well versed in the UNFPA methodology</li>
            <li>Explaining the CPE governance structure and quality assurance process</li>
            <li>The role, responsibilities and membership of the ERG</li>
            <li>The CO organogram with contact information</li>
            <li>The UNEG Code of Conduct — for review and signature</li>
            <li>Assignment of roles and responsibilities within the team (who drafts what)</li>
          </ul>

          <h3>The orientation meeting</h3>

          <p>The orientation brings together the CO staff and the evaluation team. The CPE Manager has prepared a presentation; the respective CO programme leads and operations staff present the slides relevant to their area.</p>

          <p>The handbook prescribes the exact presentation outline (Box 3):</p>

          <div class="kvgrid">
            <div class="kv"><b>1.</b><span>Objectives of the CPE</span></div>
            <div class="kv"><b>2.</b><span>Geographical map of UNFPA programme areas</span></div>
            <div class="kv"><b>3.</b><span>Roadmap of the CPE</span></div>
            <div class="kv"><b>4.</b><span>Main roles and responsibilities (CPE Manager, team, CO staff, RO M&amp;E Adviser, IEO)</span></div>
            <div class="kv"><b>5.</b><span>The ERG: composition and responsibilities</span></div>
            <div class="kv"><b>6.</b><span>Theory of change of the country programme</span></div>
            <div class="kv"><b>7.</b><span>The CPE approach: contribution analysis based on theory of change</span></div>
            <div class="kv"><b>8.</b><span>Overview of each thematic area (outputs, contribution to outcomes, progress, challenges)</span></div>
            <div class="kv"><b>9.</b><span>Cross-cutting issues: HR-based approach, gender equality, LNOB and reaching the furthest behind</span></div>
            <div class="kv"><b>10.</b><span>Overview of CO management structure (incl. sub-offices)</span></div>
            <div class="kv"><b>11.</b><span>Country programme financial structure</span></div>
            <div class="kv"><b>12.</b><span>Preliminary evaluation questions</span></div>
            <div class="kv"><b>13.</b><span>The evaluation matrix</span></div>
            <div class="kv"><b>14.</b><span>What the CPE is <em>not</em> (it is not an assessment of activities or outputs)</span></div>
            <div class="kv"><b>15.</b><span>The CPE stakeholder map</span></div>
            <div class="kv"><b>16.</b><span>Structure of the design report</span></div>
            <div class="kv"><b>17.</b><span>Next steps in the design phase</span></div>
          </div>

          <div class="callout key">
            <span class="ic">◆</span>
            <div class="body"><strong>Item 14 matters</strong>Saying explicitly what the CPE is <em>not</em> — not an assessment of activities or output delivery — sets the team's level of ambition correctly. The CPE assesses contribution to outcomes, not activity completion.</div>
          </div>
        `
      },

      {
        title: "2.1.2 Desk review and first round of interviews",
        lede: "Most of the design phase is reading. The team works through the document repository, then talks to the people inside UNFPA who can frame what the documents don't say.",
        body: `
          <p>At the design phase, <em>extensive document review forms the bulk of the evaluators' work</em>. The team starts with the Country Programme Document and the country programme theory of change, then expands outward.</p>

          <h3>What the team reviews</h3>

          <ul>
            <li>Country Programme Document (CPD) and integrated results and resources framework</li>
            <li>CO annual work plans (AWPs) and annual reports (COARs)</li>
            <li>Previous evaluations: earlier CPEs, project evaluations, mid-term reviews, research studies</li>
            <li>Project documents (progress reports, monitoring reports)</li>
            <li>Donor and joint programme reports</li>
            <li>Technical studies and statistical reports</li>
            <li>Audit reports</li>
            <li>National household surveys (DHS, MICS)</li>
            <li>UNFPA centralized evaluations germane to the country programme thematic scope</li>
          </ul>

          <p>As they progress, evaluators complement this initial batch with additional documents they identify or that CO staff and partners bring to their attention — including relevant evaluations by other UN agencies, INGOs, or partner organisations.</p>

          <h3>The first round of interviews</h3>

          <p>Document review alone is not enough. The team conducts a <strong>first round of interviews</strong> with:</p>

          <ul>
            <li>CO senior management</li>
            <li>CO programme officers and technical staff</li>
            <li>CO operations staff</li>
            <li>Members of the ERG</li>
            <li>Key stakeholders as appropriate (e.g. government counterpart focal points)</li>
          </ul>

          <p>These interviews are exploratory. Their purpose is not to gather evidence — that happens in the field phase — but to refine the team's understanding of the country programme, sharpen the evaluation questions, and identify gaps the desk review couldn't fill.</p>

          <div class="callout tip">
            <span class="ic">✓</span>
            <div class="body"><strong>Two outputs</strong>The desk review and first-round interviews feed directly into two design-phase deliverables: the critical analysis of the theory of change, and the refined evaluation questions with assumptions for verification.</div>
          </div>
        `
      },

      {
        title: "2.2.1 Theory-based contribution analysis",
        lede: "The UNFPA CPE methodology has a name. It is a theory-based contribution analysis. Understanding it is non-negotiable — because every choice downstream flows from it.",
        body: `
          <p>The CPE adopts a <strong>theory-based contribution analysis</strong>. This combines two methodological commitments:</p>

          <div class="kvgrid">
            <div class="kv"><b>Theory-based</b><span>The evaluation tests the country programme's <em>theory of change</em> — the explicit causal pathways from inputs to outputs to outcomes to transformative results.</span></div>
            <div class="kv"><b>Contribution analysis</b><span>The evaluation does not claim that UNFPA caused observed changes. It builds a credible, evidenced story of how UNFPA <em>contributed</em>, alongside other actors and factors.</span></div>
          </div>

          <h3>Why contribution, not attribution</h3>

          <p>UNFPA almost never works alone. The country office contributes alongside government policy, other UN agencies, NGOs, donors, and broader social and economic forces. A strict attribution claim ("UNFPA caused this 14% increase") is almost never defensible. A contribution claim ("UNFPA contributed to a 14% increase, alongside government policy reform and concurrent partner outreach") is.</p>

          <h3>What contribution analysis looks like in practice</h3>

          <p>The handbook (citing Mayne 2008) presents the contribution analysis as a six-step loop:</p>

          <ol>
            <li>Identify the attribution problem (questions refined with assumptions for verification — design phase)</li>
            <li>In-depth review of the country programme theory of change and critical analysis</li>
            <li>Identify existing evidence of contribution</li>
            <li>Conduct interviews and document review (design phase) — assess extent of contribution and gaps in evidence</li>
            <li>Seek additional evidence to refine the assessment (field and reporting phases)</li>
            <li>Draw on all data collection methods and data triangulation — arrive at findings</li>
          </ol>

          <h3>UNFPA's strategic plan and the three transformative results</h3>

          <p>The handbook is explicit that the contribution story always connects to UNFPA's strategic plan and the three transformative results by 2030:</p>

          <div class="criteria-grid">
            <div class="cri"><b>Zero unmet need</b><span>for family planning</span></div>
            <div class="cri"><b>Zero preventable</b><span>maternal death</span></div>
            <div class="cri"><b>Zero gender-based violence</b><span>including harmful practices (child marriage, FGM)</span></div>
          </div>

          <h3>Box 5 — Key features of the change story (Strategic Plan 2022-2025)</h3>

          <p>The handbook flags ten features of the strategic plan's theory of change that evaluators must factor in:</p>

          <ol>
            <li>Anchoring on the three transformative results</li>
            <li>Three human-rights-based components: non-discrimination &amp; equality; accountability; quality of services and reaching marginalised populations</li>
            <li>Including structural barriers / root causes</li>
            <li>"Many-to-many" relationships between outputs and outcomes (integrated programming)</li>
            <li>Fewer, more direct determinants of the transformative results</li>
            <li>Intermediate results between outcomes and outputs</li>
            <li>Lessons learned from COVID-19</li>
            <li>"Storytelling" approach to communicate change</li>
            <li>Accelerators that enhance strategic plan performance</li>
            <li>Alignment with the 2020 UN Quadrennial Comprehensive Policy Review</li>
          </ol>
        `
      },

      {
        title: "2.2.2 Evaluation questions and the evaluation matrix",
        lede: "The evaluation matrix is the analytical engine of the entire CPE. The team builds it during design — and lives by it through fieldwork and reporting.",
        body: `
          <p>The preliminary evaluation questions from the EQ workshop (lesson 1.3) are refined during design. For each question, the evaluators specify <strong>assumptions for verification</strong> — hypotheses about how the country programme is expected to produce results, which the team will then test.</p>

          <h3>The five DAC evaluation criteria</h3>

          <p>UNFPA CPEs apply the OECD-DAC criteria. Note: <strong>five</strong>, not six. The 2019 revision added coherence; impact is explicitly excluded as it requires a different time frame and methodology beyond the CPE's scope.</p>

          <div class="criteria-grid">
            <div class="cri"><b>Relevance</b><span>The extent to which intervention objectives and design respond to rights-holders, country and partner needs, policies and priorities — and continue to do so if circumstances change.</span></div>
            <div class="cri"><b>Coherence</b><span>Compatibility with other interventions in the country, sector or institution — across UNFPA mandate areas and with other UN agencies, INGOs, partners.</span></div>
            <div class="cri"><b>Effectiveness</b><span>The extent to which the intervention achieved (or is expected to achieve) its objectives and results, including differential results across groups.</span></div>
            <div class="cri"><b>Efficiency</b><span>The extent to which the intervention delivers results in an economic and timely way.</span></div>
            <div class="cri"><b>Sustainability</b><span>The extent to which rights-holders' benefits continue (or are likely to continue) when the intervention ends.</span></div>
          </div>

          <h3>Two additional criteria for humanitarian situations</h3>

          <div class="kvgrid">
            <div class="kv"><b>Coverage</b><span>Extent to which major population groups facing life-threatening conditions were reached — assessing both inclusion bias (those receiving support who should not have been) and exclusion bias (groups who should have been covered but were not), disaggregated by sex, socio-economic grouping and ethnicity.</span></div>
            <div class="kv"><b>Connectedness</b><span>Extent to which short-term emergency activities take longer-term and interconnected problems into account — a nexus approach, complementarity with partner interventions.</span></div>
          </div>

          <h3>The evaluation matrix (Table 5)</h3>

          <p>The handbook gives an exact template. For each evaluation question, the matrix specifies:</p>

          <div class="kvgrid">
            <div class="kv"><b>Question</b><span>The refined evaluation question.</span></div>
            <div class="kv"><b>Related criteria</b><span>Which of the five (or seven, in humanitarian situations) criteria the question addresses.</span></div>
            <div class="kv"><b>Assumptions for verification</b><span>At least two per question. These are the hypotheses about <em>how and why</em> the country programme is expected to produce results.</span></div>
            <div class="kv"><b>Indicators</b><span>Quantitative and qualitative indicators to verify or refute each assumption.</span></div>
            <div class="kv"><b>Methods and tools for data collection</b><span>Specific sources: interviews with X, document review of Y, survey of Z.</span></div>
            <div class="kv"><b>Corresponding data</b><span>Filled in during the field phase, as data is collected.</span></div>
          </div>

          <h3>The matrix is fixed at the end of design</h3>

          <p>The evaluation matrix is presented under Section 4.2 of the design report. Once the design report is approved, the matrix is <strong>fixed</strong>. It cannot be amended during fieldwork.</p>

          <p>The completed matrix — populated with all data collected — is annexed to the final CPE report as <strong>Annex 1</strong>.</p>

          <div class="pullquote">
            <p>"The evaluation matrix is an essential tool for planning and implementing the CPE. With the matrix, the evaluators ensure that all data collected is analysed and triangulated to support the development of evidence-based findings."</p>
          </div>
        `
      },

      {
        title: "2.2.3 A mixed-methods approach",
        lede: "UNFPA prescribes mixed methods. Not as a preference. As the default — because the operational context demands it.",
        body: `
          <p>The handbook is unambiguous: the CPE design rests solidly on a <strong>mixed methodology</strong> for collecting and combining both quantitative and qualitative data. By using different methods and sources at various points, the team builds on the strength of each and minimises the weaknesses of any single approach.</p>

          <h3>Why mixed methods is the default for UNFPA</h3>

          <p>UNFPA country offices operate in complex and dynamic economic, social and political environments. No single method can adequately capture:</p>

          <ul>
            <li>The magnitude of change (quantitative)</li>
            <li>The mechanisms of change (qualitative)</li>
            <li>The differential effects on marginalised groups (both)</li>
            <li>Unintended consequences (mostly qualitative)</li>
            <li>The contribution of UNFPA alongside other factors (both)</li>
          </ul>

          <h3>Secondary data collection</h3>

          <p>Secondary data — already-existing data the evaluators do not collect themselves — is reviewed throughout the design and field phases. Sources include the document repository (lesson 1.7), national surveys (DHS, MICS), administrative data from the MIS, and the country programme's own monitoring data.</p>

          <h3>Primary data collection</h3>

          <p>Primary data is what the evaluators collect directly during the field phase. The handbook prescribes five methods, each detailed in Phase 3:</p>

          <div class="kvgrid">
            <div class="kv"><b>Key informant interviews</b><span>(lesson 3.2.1)</span></div>
            <div class="kv"><b>Group interviews &amp; focus groups</b><span>(lesson 3.2.2)</span></div>
            <div class="kv"><b>Survey</b><span>(lesson 3.2.3)</span></div>
            <div class="kv"><b>On-site observation</b><span>(lesson 3.2.4)</span></div>
            <div class="kv"><b>Photography</b><span>(lesson 3.2.5)</span></div>
          </div>

          <h3>Triangulation</h3>

          <p>Triangulation — comparing findings across sources, methods and evaluators — is what makes mixed methods rigorous. The handbook (Figure 5) presents triangulation as the routine practice: every finding must be supported by multiple independent sources before it can stand.</p>

          <div class="callout key">
            <span class="ic">◆</span>
            <div class="body"><strong>Participation and inclusiveness (Box 6)</strong>The handbook explicitly requires that data collection methods are designed to give voice to rights-holders, especially the most marginalised. Mixed methods means more than methodological balance — it means methodological inclusion.</div>
          </div>
        `
      },

      {
        title: "2.3 Stakeholder sampling, site selection and field-phase agenda",
        lede: "The team cannot talk to everyone. They cannot visit every site. The sampling and agenda decisions made in design determine whose voice enters the evidence base.",
        body: `
          <p>In the design phase, the team — assisted by the CPE Manager and CO staff — makes three closely-linked decisions: who to sample, where to go, and in what order.</p>

          <h3>Stakeholder sampling (Table 7)</h3>

          <p>Sampling draws on the stakeholder map (lesson 1.9). The handbook flags selection criteria, including:</p>

          <ul>
            <li>Relevance to specific evaluation questions and assumptions</li>
            <li>Coverage of all thematic areas of the country programme</li>
            <li>Inclusion of rights-holder groups, especially marginalised ones</li>
            <li>Coverage of geography (national and sub-national)</li>
            <li>Balance across implementing partners</li>
            <li>Practical feasibility (accessibility, language, security)</li>
          </ul>

          <h3>Site selection</h3>

          <p>UNFPA programmes are usually multi-site. The team selects field visit sites against criteria including:</p>

          <div class="kvgrid">
            <div class="kv"><b>Programmatic coverage</b><span>Sites where the main interventions were implemented.</span></div>
            <div class="kv"><b>Variation</b><span>Sites representing different contexts (urban / rural; high-performing / underperforming; humanitarian / development).</span></div>
            <div class="kv"><b>Equity</b><span>Sites where the most marginalised populations live.</span></div>
            <div class="kv"><b>Feasibility</b><span>Sites that can be safely and meaningfully visited within the time and budget.</span></div>
          </div>

          <h3>The field phase agenda (Table 8)</h3>

          <p>The agenda lays out the entire fieldwork schedule — every interview, every focus group, every site visit, every kick-off and debriefing meeting. It is built into the design report and revised in close consultation with the CPE Manager, who handles logistics in Phase 3.</p>

          <p>The agenda must allow for:</p>

          <ul>
            <li>Initial settling and the kick-off meeting</li>
            <li>Sequenced interviews from broad to specific</li>
            <li>Site visits with travel time accounted for</li>
            <li>Buffer time for follow-up interviews and additional data collection</li>
            <li>The analysis workshop and debriefing meeting at the end</li>
          </ul>
        `
      },

      {
        title: "2.4 The Design Report — version 1 and version 2",
        lede: "The design phase ends with a single deliverable that pulls everything together: the Design Report. It is the team's first major artefact — and the moment the evaluation's scope is fixed.",
        body: `
          <p>The design phase produces a single document: the <strong>Design Report</strong>. It is delivered in two versions: v1 is reviewed by the CPE Manager, RO M&amp;E Adviser, and the ERG; v2 incorporates their comments and is formally approved.</p>

          <h3>Structure of the design report (section 2.4.4 of the handbook)</h3>

          <p>The design report has a prescribed structure that includes:</p>

          <ol>
            <li>Introduction — background, purpose, objectives, scope</li>
            <li>The country programme and its theory of change (the team's critical analysis)</li>
            <li>Methodological framework — theory-based contribution analysis</li>
            <li>The evaluation matrix (Section 4.2, Table 5 of the handbook)</li>
            <li>Stakeholder sampling and site selection</li>
            <li>The field phase agenda</li>
            <li>Quality assurance and ethics</li>
            <li>Workplan and timeline</li>
            <li>Annexes — including the initial communications plan</li>
          </ol>

          <h3>Quality assurance — design report v1</h3>

          <p>The handbook's <strong>Box 8: Design report quality assurance checklist</strong> guides the review. The team leader does internal QA, then the CPE Manager and RO M&amp;E Adviser do a joint review. If improvements are needed, the team leader makes changes and resubmits.</p>

          <p>Once v1 passes quality control, the CPE Manager shares it with the ERG.</p>

          <h3>The ERG meeting</h3>

          <p>The ERG meeting on the design report (Box 9 gives the presentation outline) is a substantive review. The team leader presents; ERG members provide written and verbal comments. The CPE Manager consolidates the comments and shares them with the team.</p>

          <h3>Design report v2</h3>

          <p>The team leader revises the design report based on ERG comments. The CPE Manager and RO M&amp;E Adviser do a final quality assurance. If more changes are needed, the team leader makes them. Once v2 passes, the CPE Manager — in consultation with the RO M&amp;E Adviser and CO Representative — formally approves the design report.</p>

          <p>That approval is the gate. The team cannot enter the field phase without an approved design report.</p>

          <div class="callout warn">
            <span class="ic">!</span>
            <div class="body"><strong>What gets fixed at v2</strong>The evaluation matrix, the sampling, the field agenda, the methodology — all become <em>fixed</em> at v2 approval. Changes in the field require the CPE Manager's explicit authorisation, and any changes must be tracked in the audit trail.</div>
          </div>
        `
      }
    ]
  },

  /* ============================================================
     CHAPTER 3 — PHASE 3: FIELDWORK
     ============================================================ */
  {
    id: "ch3",
    number: 3,
    title: "Fieldwork",
    subtitle: "The team collects primary data — and the CPE Manager makes the logistics invisible.",
    estMinutes: 65,
    levels: ["beginner", "intermediate", "advanced"],
    phase: "Fieldwork",
    overview: "The field phase is when the evaluation team collects primary data — through key informant interviews, focus group discussions, surveys, on-site observation, and photography. The CPE Manager makes the logistics invisible. The phase ends with two structured events: the analysis workshop and the debriefing meeting.",
    lessons: [

      {
        title: "3.1 Preparing the field phase — logistics",
        lede: "Fieldwork goes well when the CPE Manager has thought of everything. It goes badly when one logistical detail was missed.",
        body: `
          <p>The CPE Manager is responsible for ensuring that all logistical and practical arrangements for data collection are in place before the team enters the field. The handbook's <strong>Box 10: CPE Manager's checklist for field work preparation</strong> is the reference.</p>

          <h3>The logistics checklist</h3>

          <div class="kvgrid">
            <div class="kv"><b>Travel</b><span>Transportation and travel authorizations for the team — checked against CO Operations requirements.</span></div>
            <div class="kv"><b>Accommodation</b><span>Booked in advance for all sites.</span></div>
            <div class="kv"><b>Security</b><span>Further security briefing if needed; BSAFE certification in place for all team members.</span></div>
            <div class="kv"><b>Stipends</b><span>Provisions for refreshments and travel allowances for interviewees — especially important in remote areas.</span></div>
            <div class="kv"><b>Government authorisations</b><span>Permits for field visits at national and regional levels; courtesy visits arranged.</span></div>
            <div class="kv"><b>Accompaniment</b><span>A UNFPA staff member or government counterpart may accompany the team for introductions — but never participates in data collection itself (to avoid bias).</span></div>
            <div class="kv"><b>Interpreters</b><span>Selected for SRHR/GEWE/PD/MH expertise and gender-sensitivity (e.g., same-gender interpreters when needed for interviews with women).</span></div>
            <div class="kv"><b>Scheduling</b><span>Meetings with all key informants scheduled in advance via a letter from the CO Representative.</span></div>
            <div class="kv"><b>Spaces</b><span>Appropriate venues for KIIs (private, neutral) and FGDs (secured, with refreshments).</span></div>
            <div class="kv"><b>Travel claims</b><span>Travel authorisations completed; on return, the team submits travel expense claims with supporting documents.</span></div>
          </div>

          <div class="callout warn">
            <span class="ic">!</span>
            <div class="body"><strong>The no-accompaniment rule</strong>No UNFPA staff — including field-based staff and drivers — are allowed to participate in or attend data collection. This is to minimise the impact of bias on informants. The CPE Manager may participate only when their presence will not affect outcomes (e.g., it can be appropriate at certain debriefing-style meetings, never at rights-holder focus groups).</div>
          </div>
        `
      },

      {
        title: "3.1.2 The kick-off meeting",
        lede: "Before the first interview, the team holds a kick-off meeting. It is part operational briefing, part final calibration.",
        body: `
          <p>The team's <strong>kick-off meeting</strong> happens just before data collection begins. The CPE Manager calls it and the RO M&amp;E Adviser participates. The handbook's <strong>Box 11: Checklist for the evaluation team meeting</strong> guides the agenda.</p>

          <h3>What the kick-off meeting covers</h3>

          <div class="kvgrid">
            <div class="kv"><b>Review of the agenda</b><span>The team confirms the field phase agenda and any last-minute changes.</span></div>
            <div class="kv"><b>Roles in data collection</b><span>Who interviews whom; who leads each FGD; who observes; who takes notes.</span></div>
            <div class="kv"><b>The evaluation matrix</b><span>Each team member knows which questions and assumptions they own.</span></div>
            <div class="kv"><b>Tools</b><span>Interview guides, consent and assent forms, observation checklist, post-interview/follow-up questionnaires.</span></div>
            <div class="kv"><b>Data management</b><span>Where files are stored, how recordings are handled, how identifying data is separated.</span></div>
            <div class="kv"><b>Ethical conduct</b><span>UNEG ethical guidelines, safeguarding referral pathways, what to do if a disclosure of harm occurs.</span></div>
            <div class="kv"><b>Communication</b><span>Daily check-in protocol with the CPE Manager; the every-other-day team meetings.</span></div>
          </div>

          <h3>Daily rhythm</h3>

          <p>The team leader institutes a recurring rhythm:</p>

          <ul>
            <li><strong>Daily</strong> — short check-ins between team members and with the CPE Manager.</li>
            <li><strong>Every other day</strong> — full team meetings to start analysing and interpreting the data being compiled in the matrix. The handbook is specific: these must happen at least every other day during data collection.</li>
            <li><strong>Continuously</strong> — entry of data into the evaluation matrix by each team member, organised by assumption.</li>
          </ul>
        `
      },

      {
        title: "3.2.1 Key informant interviews",
        lede: "Most of the evidence in a CPE comes from key informant interviews. Done well, they are precise instruments. Done badly, they are dinner-party conversations.",
        body: `
          <p>Key informant interviews (KIIs) are semi-structured interviews with people positioned to know — programme staff, government, partners, community leaders, technical experts, rights-holders.</p>

          <h3>Interview sequencing (Box 12)</h3>

          <p>The handbook prescribes a sequencing logic: start with broader, less specific interviews to build context, then move to more specific informants who can speak to detailed evaluation questions.</p>

          <div class="flowchain">
            <span class="step">UNFPA CO</span><span class="arr">→</span>
            <span class="step">Government partners</span><span class="arr">→</span>
            <span class="step">Implementing partners</span><span class="arr">→</span>
            <span class="step">Rights-holders</span>
          </div>

          <h3>The interview itself</h3>

          <ul>
            <li><strong>Introduction</strong> — purpose, confidentiality, consent (signed consent form from the toolkit).</li>
            <li><strong>Semi-structured guide</strong> — drawn from the evaluation matrix; tailored to the informant's role.</li>
            <li><strong>Recording</strong> — with explicit consent only; recordings are stored securely and de-identified during analysis.</li>
            <li><strong>Note-taking</strong> — two team members where possible (one interviewer, one note-taker).</li>
            <li><strong>Probing</strong> — pursue contradictions, ask for examples, ask "why" without leading.</li>
            <li><strong>Closing</strong> — invite the informant to add anything not covered; ask who else they recommend the team speak to (snowball).</li>
          </ul>

          <h3>Reliability of data (Box 13)</h3>

          <p>The handbook reminds evaluators that one interview is one perspective. Reliability requires:</p>

          <ul>
            <li>Multiple independent informants for each key assumption</li>
            <li>Triangulation with documents and observation</li>
            <li>Recording disagreements transparently in the evaluation matrix</li>
            <li>Negative case analysis — actively seeking evidence that disconfirms emerging themes</li>
          </ul>

          <div class="callout warn">
            <span class="ic">!</span>
            <div class="body"><strong>Ethical conduct during interviews (Box 14)</strong>Trauma-informed approach for sensitive topics (GBV, SRHR). Informed consent always. Right to withdraw. Female enumerators where appropriate. Same-gender interpretation when sensitive. Pre-agreed safeguarding pathway if a disclosure of harm occurs.</div>
          </div>
        `
      },

      {
        title: "3.2.2 Group interviews and focus group discussions",
        lede: "When the question is about norms, dynamics, contested views, or collective experience — the group can tell you what no single person could.",
        body: `
          <p>Group interviews and <strong>focus group discussions (FGDs)</strong> bring 6-12 people together to discuss a topic. They are particularly powerful for understanding shared experiences, social norms, and contested perspectives among rights-holders.</p>

          <h3>When to use FGDs</h3>

          <ul>
            <li>To surface dominant and dissenting views within a community</li>
            <li>To observe group dynamics — who speaks, who is silent, who is silenced</li>
            <li>To explore norms and social attitudes (e.g., around adolescent SRH, gender roles)</li>
            <li>To validate findings emerging from KIIs and document review</li>
          </ul>

          <h3>FGD design considerations</h3>

          <div class="kvgrid">
            <div class="kv"><b>Composition</b><span>Homogeneous within the group on key axes (gender, age, role) to allow free expression; varied across multiple FGDs to capture different perspectives.</span></div>
            <div class="kv"><b>Size</b><span>Typically 6-12 participants. Smaller groups for sensitive topics; larger groups for context-setting.</span></div>
            <div class="kv"><b>Setting</b><span>Private, comfortable, neutral. No UNFPA staff present.</span></div>
            <div class="kv"><b>Facilitation</b><span>One facilitator, one note-taker. Same-gender facilitation when appropriate.</span></div>
            <div class="kv"><b>Language</b><span>Local language; interpreter if needed (selected per the lesson 3.1 criteria).</span></div>
            <div class="kv"><b>Consent</b><span>Individual consent before joining; reminder that anyone can leave at any time.</span></div>
            <div class="kv"><b>Time</b><span>60-90 minutes; longer fatigues participants and degrades data quality.</span></div>
          </div>

          <h3>Special protections for sensitive topics</h3>

          <ul>
            <li>For GBV, child marriage, or other sensitive SRHR topics — trauma-informed facilitation, pre-agreed referral pathways, post-FGD support available if needed.</li>
            <li>For adolescents — parental consent + adolescent assent; specific assent form from the toolkit.</li>
            <li>For people with disabilities — accessibility considered in venue choice and facilitation methods.</li>
            <li>For refugees and IDPs — coordination with relevant protection actors; safe spaces.</li>
          </ul>
        `
      },

      {
        title: "3.2.3 Surveys",
        lede: "When the question is 'how many', surveys are the answer. UNFPA CPEs use them selectively, where representative quantitative claims are needed.",
        body: `
          <p>Surveys produce quantitative evidence from a structured sample. In a CPE, surveys are typically used for:</p>

          <ul>
            <li>Beneficiary surveys to assess reach and satisfaction</li>
            <li>KAP (knowledge, attitudes, practices) surveys among target populations</li>
            <li>Service provider surveys to assess capacity and quality</li>
            <li>Partner surveys to assess coordination and value-added</li>
          </ul>

          <h3>Sampling considerations</h3>

          <div class="kvgrid">
            <div class="kv"><b>Probabilistic sampling</b><span>When generalisation to a population is needed — simple random, stratified, cluster, multi-stage.</span></div>
            <div class="kv"><b>Purposive sampling</b><span>When the goal is depth or specific sub-populations — less common in surveys.</span></div>
            <div class="kv"><b>Sample size</b><span>Calculated against the precision needed for key indicators; documented in the design report.</span></div>
            <div class="kv"><b>Disaggregation</b><span>By sex, age, disability, geography, marginalisation — both at sampling and analysis stages.</span></div>
          </div>

          <h3>Equity in sampling</h3>

          <p>The handbook is explicit that sampling must actively reach groups that standard sampling frames miss — people without phones, without national IDs, in marginalised geographies, in linguistic minorities. The design report must document who is systematically excluded by the chosen sampling frame and how the team addresses that.</p>

          <h3>Instrument design</h3>

          <ul>
            <li>Questions derived directly from the evaluation matrix's assumptions and indicators</li>
            <li>Cognitive testing of the instrument before full deployment</li>
            <li>Translation into local languages with back-translation for accuracy</li>
            <li>Pre-testing on a small sample to refine question wording and flow</li>
          </ul>

          <div class="callout key">
            <span class="ic">◆</span>
            <div class="body"><strong>Surveys complement, not replace</strong>In UNFPA CPEs, surveys are usually one method among several. Quantitative survey data is combined with qualitative interview and FGD data to support triangulated findings.</div>
          </div>
        `
      },

      {
        title: "3.2.4 On-site observation",
        lede: "What people do is sometimes different from what they say. On-site observation is the method that captures the difference.",
        body: `
          <p>On-site observation lets evaluators see service delivery, infrastructure, and practice directly. It is particularly important for assessing the implementation and quality dimensions of UNFPA programmes.</p>

          <h3>What evaluators observe</h3>

          <div class="kvgrid">
            <div class="kv"><b>Service delivery sites</b><span>Health facilities, youth centres, GBV one-stop centres, family planning clinics.</span></div>
            <div class="kv"><b>Infrastructure</b><span>Physical condition, accessibility (including for persons with disabilities), privacy, supplies.</span></div>
            <div class="kv"><b>Provider-client interaction</b><span>Quality of communication, respect for confidentiality, gender-sensitivity.</span></div>
            <div class="kv"><b>Materials</b><span>Information, education and communication (IEC) materials in use — language, appropriateness, accuracy.</span></div>
            <div class="kv"><b>Process</b><span>Whether protocols and guidelines are followed in practice.</span></div>
          </div>

          <h3>The on-site observation checklist</h3>

          <p>The handbook's toolkit includes a structured <strong>on-site observation checklist</strong>. Using it ensures consistency across observation across multiple sites and observers — and produces data that can be aggregated.</p>

          <h3>Observation ethics</h3>

          <ul>
            <li>Permission from the site manager / facility head obtained in advance</li>
            <li>No observation of clinical encounters without explicit patient consent</li>
            <li>Confidentiality of any information observed</li>
            <li>Minimising disruption to services during the observation</li>
            <li>Where appropriate, debriefing with site staff after observation</li>
          </ul>

          <div class="callout tip">
            <span class="ic">✓</span>
            <div class="body"><strong>What observation does that interviews don't</strong>Interview informants can say "we follow the WHO guidelines on respectful maternal care." On-site observation can confirm — or quietly disconfirm — that claim. Many of the most important CPE findings come from this gap.</div>
          </div>
        `
      },

      {
        title: "3.2.5 Photography during data collection",
        lede: "Photographs are evidence — and they are also communication. The handbook treats photography as part of the data collection toolkit, with its own ethics.",
        body: `
          <p>Photography during data collection serves two purposes: it documents what the team observed (supporting findings) and it produces material for the communications products in Phase 5.</p>

          <h3>Who takes photographs</h3>

          <p>The evaluation team takes photographs during primary data collection, with support and oversight from the CO communication officer and the CPE Manager.</p>

          <h3>Ethical requirements</h3>

          <div class="kvgrid">
            <div class="kv"><b>Consent</b><span>Always explicit, informed consent before any photograph that includes people. Verbal or written, depending on context.</span></div>
            <div class="kv"><b>Children</b><span>Parental consent + child assent; never identifying photographs of children in sensitive contexts.</span></div>
            <div class="kv"><b>Rights-holders</b><span>Particular care for survivors of GBV, persons in vulnerable situations, marginalised groups — often no identifying photographs at all.</span></div>
            <div class="kv"><b>Right to refuse</b><span>Anyone can refuse, and that refusal must be respected without consequence.</span></div>
            <div class="kv"><b>Use disclosure</b><span>Subjects are told how the photograph will be used (CPE report, communications products, UNFPA website, etc.).</span></div>
          </div>

          <h3>What makes a useful evaluation photograph</h3>

          <ul>
            <li>Context — a clinic waiting area, a community meeting, a training session</li>
            <li>Process — service delivery, group discussion (with consent), site observation</li>
            <li>Activity, not just portraiture</li>
            <li>Captioned with date, location, and context (no identifying personal details)</li>
          </ul>

          <h3>Storage and use</h3>

          <p>Photographs are stored securely. Use beyond the agreed purpose requires returning to the subject for additional consent. After the agreed retention period, photographs are either destroyed or archived with documented permissions.</p>
        `
      },

      {
        title: "3.4 The analysis workshop and debriefing meeting",
        lede: "Fieldwork doesn't end at the last interview. It ends with two structured events — one internal, one external — that turn raw data into preliminary findings.",
        body: `
          <p>The handbook prescribes two distinct events at the end of the field phase: the <strong>analysis workshop</strong> (internal to the team and CPE Manager) and the <strong>debriefing meeting</strong> (with the ERG and CO).</p>

          <h3>The analysis workshop</h3>

          <p>The analysis workshop takes place in the capital city upon the team's return from the field. The CPE Manager and the evaluation team gather to:</p>

          <div class="kvgrid">
            <div class="kv"><b>Review data</b><span>Detailed review of data collected, assessing strength, validity and reliability.</span></div>
            <div class="kv"><b>Verify assumptions</b><span>Assess the extent to which the matrix data allows verification of the assumptions for each evaluation question.</span></div>
            <div class="kv"><b>Spot gaps</b><span>Identify issues or areas that may still require further exploration and additional data collection; identify effective ways to quickly fill the gaps.</span></div>
            <div class="kv"><b>Preliminary findings</b><span>Identify preliminary findings for each evaluation question — to be presented at the debriefing meeting.</span></div>
          </div>

          <h3>The debriefing meeting</h3>

          <p>The debriefing meeting brings together the ERG members, CO senior management and all relevant programme/operations staff, select implementing partners, the evaluation team, and the CPE Manager (as chair).</p>

          <p>The team leader presents (per the handbook's <strong>Box 15: Proposed structure for the debriefing meeting presentation</strong>):</p>

          <ol>
            <li>Coverage and reliability of collected data</li>
            <li>Initial analyses</li>
            <li>Preliminary findings against each evaluation question</li>
            <li>Areas requiring further exploration</li>
            <li>Anticipated structure of the final report</li>
            <li>Timeline for the reporting phase</li>
          </ol>

          <h3>Follow-up after debriefing</h3>

          <p>The CPE Manager consolidates feedback from the debriefing meeting and communicates it to the team. The team organises follow-up interviews where needed, and the CPE Manager ensures access to any additional documentation.</p>

          <h3>The exit meeting</h3>

          <p>Before the team transitions to reporting, the CPE Manager holds an <strong>exit meeting</strong> to review:</p>

          <ul>
            <li>The CPE Roadmap — agreement on next steps and deadlines</li>
            <li>The evaluation report structure</li>
            <li>The EQA grid (the rubric the report will be assessed against)</li>
            <li>Division of tasks within the team and individual deadlines</li>
            <li>Updates to the initial communication plan</li>
          </ul>

          <h3>Threats to validity (Table 11)</h3>

          <p>The handbook's Table 11 lists threats to validity that the team must guard against — selection bias, response bias, observer bias, confirmation bias, recall bias, social desirability bias. The exit meeting is one of the moments where these are explicitly reviewed.</p>
        `
      }
    ]
  },

  /* ============================================================
     CHAPTER 4 — PHASE 4: REPORTING
     ============================================================ */
  {
    id: "ch4",
    number: 4,
    title: "Reporting",
    subtitle: "Findings → conclusions → co-created recommendations → the CPE report.",
    estMinutes: 55,
    levels: ["beginner", "intermediate", "advanced"],
    phase: "Report",
    overview: "The reporting phase organises the CPE around three interrelated but distinct components: findings, conclusions, and recommendations. The recommendations are not drafted by the team alone — they are co-created with the ERG in a workshop. The phase ends with two versions of the report and a formal Evaluation Quality Assessment.",
    lessons: [

      {
        title: "4.1 Developing the findings",
        lede: "A finding is not an observation. It is a statement supported by triangulated evidence that answers — or partially answers — an evaluation question.",
        body: `
          <p>In the reporting phase, the team builds on field-phase analysis to articulate and substantiate their <strong>findings</strong>. Findings include cause-and-effect statements about UNFPA's contribution to observed changes, anchored in the country programme theory of change.</p>

          <h3>The analysis methods</h3>

          <p>The team draws on diverse analytical techniques:</p>

          <ul>
            <li>Describing</li>
            <li>Counting</li>
            <li>Factoring — identifying the variables that influenced results</li>
            <li>Clustering</li>
            <li>Comparing — finding commonalities, finding differences</li>
            <li>Examining deviant cases / outliers</li>
            <li>Ruling out alternative explanations</li>
          </ul>

          <h3>Internal validity — interrogating each finding</h3>

          <p>To ensure internal validity, evaluators must systematically interrogate each finding:</p>

          <div class="kvgrid">
            <div class="kv"><b>Triangulation</b><span>Does the finding solidly rest on data that has been systematically triangulated across sources?</span></div>
            <div class="kv"><b>Alternative explanations</b><span>Could the changes described be explained by external factors unrelated to UNFPA interventions?</span></div>
            <div class="kv"><b>Comparison with other evaluations</b><span>Does the finding depart from or contradict findings of other evaluations (UNFPA centralized, thematic, programme; other UN agencies; INGOs)? How can this be explained?</span></div>
            <div class="kv"><b>Debriefing comments</b><span>Does the finding address the comments received at the debriefing meeting?</span></div>
          </div>

          <h3>Using quotations</h3>

          <p>Quotations are not evidence on their own. They support interpretations and explanations in findings — enhancing readability by enrolling the informant's voice. Important rules:</p>

          <ul>
            <li>Data must remain confidential — quotes are <strong>de-identified</strong> when used in the report</li>
            <li>Attribute to a <em>category</em> of respondent ("a senior provincial health official") rather than a specific organisation or location</li>
            <li>The evaluation matrix (annexed to the final report) preserves the underlying data so readers can trace findings back</li>
          </ul>

          <h3>Maintaining rigour</h3>

          <p>Rigour in analysis and interpretation is maintained through:</p>

          <ul>
            <li>Continuous discussion among the evaluation team</li>
            <li>Continuous discussion between the team and the CPE Manager</li>
            <li>Peer review — team members exchange write-ups and review each other's drafts</li>
            <li>The evaluation matrix as the audit trail from finding back to evidence</li>
          </ul>

          <div class="pullquote">
            <p>"The CPE report readers should be able, at any time, to link the evaluation findings with the evidence gathered and presented in the evaluation matrix."</p>
          </div>
        `
      },

      {
        title: "4.2 Establishing the conclusions",
        lede: "Findings answer evaluation questions. Conclusions synthesise across findings to answer the bigger questions the CPE was commissioned to address.",
        body: `
          <p>Where findings respond to individual evaluation questions, <strong>conclusions</strong> synthesise across multiple findings to address higher-order issues — the strategic and programmatic questions that motivated the CPE.</p>

          <h3>What conclusions do</h3>

          <ul>
            <li>Identify the most important things the CPE has learned about the country programme</li>
            <li>Highlight strengths to build on and weaknesses to address</li>
            <li>Surface unintended consequences, both positive and negative</li>
            <li>Connect findings back to the three transformative results</li>
            <li>Address the cross-cutting concerns: human rights, gender equality, LNOB, disability inclusion</li>
            <li>Provide the foundation on which recommendations are built</li>
          </ul>

          <h3>What conclusions are NOT</h3>

          <ul>
            <li>They are not summaries of findings (that's the executive summary's job).</li>
            <li>They are not recommendations (that's the next lesson).</li>
            <li>They are not opinions — every conclusion must be traceable back to specific findings, which are traceable back to evidence.</li>
          </ul>

          <h3>The chain: data → evidence → finding → conclusion → recommendation</h3>

          <div class="diagram">
            <h4>Box 16: Tracking linkages</h4>
            <div class="flowchain">
              <span class="step">Data</span><span class="arr">→</span>
              <span class="step">Evidence</span><span class="arr">→</span>
              <span class="step">Finding</span><span class="arr">→</span>
              <span class="step">Conclusion</span><span class="arr">→</span>
              <span class="step">Recommendation</span>
            </div>
          </div>

          <p>The handbook's <strong>Box 16</strong> emphasises that this chain must be visible to the reader. Every recommendation must be traceable back to a specific conclusion, which is traceable back to findings, which are traceable back to evidence in the evaluation matrix.</p>

          <h3>How many conclusions?</h3>

          <p>The handbook does not prescribe a specific number, but practice is typically 6-12 conclusions for a country programme evaluation — substantive, integrated, and clearly distinct from one another.</p>

          <div class="callout key">
            <span class="ic">◆</span>
            <div class="body"><strong>If a conclusion can't lead to a recommendation</strong>It is either a finding (rephrased), or it is not worth its place in the report. Mature evaluation discipline cuts the conclusions that go nowhere.</div>
          </div>
        `
      },

      {
        title: "4.3 Co-creating the recommendations",
        lede: "The handbook's most distinctive procedural step. Recommendations are not drafted by the team alone. They are co-created with the ERG in a structured five-step process that culminates in a workshop.",
        body: `
          <p>The CPE recommendations describe actions to address weaknesses or build on strengths as the CO designs the next programming cycle. To be useful, they must be actionable, technically sound, and consistent with the operational realities the next cycle will face.</p>

          <p>Because the evaluation team comprises independent external experts, they cannot — alone — know all the operational implications, ongoing developments, and emerging country context that will shape what is feasible. So the handbook prescribes a <strong>recommendations co-creation process</strong>.</p>

          <h3>The five steps (Box 17)</h3>

          <h3>Step 1 — Tentative recommendations in a worksheet</h3>

          <p>CPE report version 1 does <em>not</em> contain recommendations. Instead, the team formulates tentative recommendations in a dedicated <strong>recommendations protocol and worksheet</strong> (toolkit item 15). For each tentative recommendation, the team provides:</p>

          <ul>
            <li>The rationale or justification</li>
            <li>The level of priority assigned</li>
            <li>The conclusion(s) to which the recommendation is linked</li>
            <li>The target audience (the business unit responsible for implementation)</li>
            <li>A short list of operational implications</li>
          </ul>

          <h3>Step 2 — ERG review</h3>

          <p>After internal quality assurance, the CPE Manager shares the completed worksheet with the ERG, alongside the draft final report. ERG members review the tentative recommendations and are asked to:</p>

          <ul>
            <li>Propose revisions — directly editing the proposed text, suggesting alternative wording, drafting alternative recommendations</li>
            <li>Identify or modify operational implications — especially adding implications the team could not foresee</li>
            <li>Confirm or modify the priority assigned</li>
            <li>Amend the target audience list, identifying other UNFPA business units responsible or co-responsible</li>
          </ul>

          <div class="callout warn">
            <span class="ic">!</span>
            <div class="body"><strong>The traceability rule</strong>Any ERG suggestion — amendment, new recommendation, additional operational implication — must derive from a conclusion in the draft final report. Suggestions that cannot be traced back to a conclusion are rejected. This protects the evidence chain.</div>
          </div>

          <h3>Step 3 — Consolidation</h3>

          <p>The CPE Manager together with the team leader consolidate the ERG input and amend the set of recommendations accordingly.</p>

          <h3>Step 4 — The recommendations workshop</h3>

          <p>The revised worksheet serves as the basis for a <strong>recommendations workshop</strong>. The workshop takes place after the ERG meeting at which the draft final report has been presented.</p>

          <p>At the workshop, each revised recommendation — together with its operational implications — is reviewed and refined collectively. The purpose is to reach agreement among ERG members on the wording of each recommendation and finalise them.</p>

          <h3>Step 5 — Insertion in the final report</h3>

          <p>The final recommendations are inserted in CPE report version 2.</p>

          <h3>Why co-creation</h3>

          <div class="pullquote">
            <p>"Involving the CPE stakeholders in a co-creation process is an effective way to increase adherence to the evaluation findings and ensure uptake of the recommendations. It expands ownership and empowers the evaluation users to develop those practical solutions that are best tailored to their circumstances."</p>
          </div>

          <p>The co-creation process is one of the handbook's most distinctive procedural innovations. It is what turns recommendations from polite suggestions into commitments stakeholders feel ownership of.</p>
        `
      },

      {
        title: "4.4 Drafting the CPE report (v1 and v2)",
        lede: "Like the design report, the CPE report comes in two versions. Each is quality-assured, presented to the ERG, and revised. The pace and structure are exact.",
        body: `
          <p>The CPE report is delivered in two versions, with structured quality assurance at each stage.</p>

          <h3>Report version 1</h3>

          <p>The team drafts version 1 covering all chapters except the recommendations (which are still tentative, in the worksheet). The structure follows section 4.5 of the handbook:</p>

          <ul>
            <li>Executive summary</li>
            <li>Chapter 1: Introduction</li>
            <li>Chapter 2: Country context</li>
            <li>Chapter 3: UN and UNFPA response and programme strategies</li>
            <li>Chapter 4: Findings (organised by evaluation question / criterion)</li>
            <li>Chapter 5: Conclusions</li>
            <li>Annexes (including the populated evaluation matrix as Annex 1)</li>
          </ul>

          <h3>Quality assurance of v1</h3>

          <ol>
            <li>The team leader does internal QA</li>
            <li>The CPE Manager (with support from select CO staff) and the RO M&amp;E Adviser do a joint QA</li>
            <li>If improvements are needed, the team leader makes changes</li>
            <li>Once v1 passes, the CPE Manager shares it with the ERG along with the recommendations worksheet</li>
          </ol>

          <h3>The ERG meeting on v1</h3>

          <p>Following <strong>Box 18: Suggested outline for the presentation of the CPE report (version 1) to the ERG</strong>, the team leader presents:</p>

          <ol>
            <li>Recall of the CPE objective, scope, evaluation questions</li>
            <li>Methodology — what was done, what worked, what limitations were encountered</li>
            <li>Key findings for each evaluation question</li>
            <li>Conclusions</li>
            <li>Tentative recommendations (still in the worksheet)</li>
            <li>Next steps: the recommendations workshop and production of the final report</li>
          </ol>

          <h3>The recommendations workshop</h3>

          <p>Held after the ERG meeting on v1 — see lesson 4.3.</p>

          <h3>Report version 2</h3>

          <p>The team revises v1 based on ERG comments. The finalised recommendations are inserted. The executive summary is drafted (often the last thing written, but the first thing readers read). Peer review within the team. Quality assurance by team leader. The CPE Manager and RO M&amp;E Adviser do final QA. If improvements are needed, the team leader makes changes. Once v2 passes, the CPE Manager — in consultation with the RO M&amp;E Adviser and CO Representative — formally approves the CPE report.</p>

          <h3>The Evaluation Quality Assessment (EQA)</h3>

          <p>Once the report is approved, the CPE Manager and RO M&amp;E Adviser complete the formal <strong>Evaluation Quality Assessment (EQA)</strong>. The final report and EQA grid are submitted to the UNFPA Independent Evaluation Office (IEO). The IEO does the final quality assessment, published on the UNFPA Evaluation Database.</p>

          <div class="callout key">
            <span class="ic">◆</span>
            <div class="body"><strong>The EQA is public</strong>The EQA score for every decentralised evaluation is published. That is part of how UNFPA holds the evaluation function accountable to its own standards. Country offices and evaluation teams should expect the EQA, and design the CPE to perform well against it.</div>
          </div>
        `
      },

      {
        title: "4.5 Structure of the evaluation report",
        lede: "The structure of the final CPE report is prescribed. Following it is not optional — it is what makes the report legible across UNFPA and comparable across evaluations.",
        body: `
          <p>The handbook's Section 4.5 prescribes the structure of the final CPE report. The structure is what makes UNFPA CPEs legible to a reader who has read others — and what allows the IEO to do meta-analysis across evaluations.</p>

          <h3>The prescribed structure</h3>

          <div class="kvgrid">
            <div class="kv"><b>Title page &amp; front matter</b><span>Title, country, period covered, evaluation team, date.</span></div>
            <div class="kv"><b>Acknowledgements</b><span>The people who supported the CPE.</span></div>
            <div class="kv"><b>Acronyms and abbreviations</b><span>Front-loaded for reader's reference.</span></div>
            <div class="kv"><b>Executive summary</b><span>Standalone, 4-8 pages. The only thing many readers will ever read.</span></div>
            <div class="kv"><b>Chapter 1: Introduction</b><span>CPE objectives, scope, structure of the report.</span></div>
            <div class="kv"><b>Chapter 2: Country context</b><span>Demographic, socio-economic, political context — the world the country programme operated in.</span></div>
            <div class="kv"><b>Chapter 3: UN and UNFPA response and programme strategies</b><span>UN system response; UNFPA's strategic positioning and country programme design (with theory of change).</span></div>
            <div class="kv"><b>Chapter 4: Findings</b><span>Organised by evaluation question, by criterion. Each finding linked to evidence.</span></div>
            <div class="kv"><b>Chapter 5: Conclusions</b><span>Synthesised across findings.</span></div>
            <div class="kv"><b>Chapter 6: Recommendations</b><span>Final recommendations, co-created with the ERG.</span></div>
            <div class="kv"><b>Chapter 7: Lessons learned (optional)</b><span>Generalisable insights for use beyond the immediate country programme.</span></div>
          </div>

          <h3>Mandatory annexes</h3>

          <ul>
            <li><strong>Annex 1:</strong> The completed evaluation matrix — every assumption, every indicator, every data entry</li>
            <li><strong>Annex 2:</strong> The Terms of Reference</li>
            <li><strong>Annex 3:</strong> List of people interviewed and meetings held</li>
            <li><strong>Annex 4:</strong> List of documents reviewed</li>
            <li><strong>Annex 5:</strong> Data collection instruments (interview guides, FGD guides, survey instruments, observation checklist)</li>
            <li><strong>Annex 6:</strong> The country programme theory of change (visualised)</li>
            <li><strong>Annex 7:</strong> The recommendations protocol and worksheet</li>
            <li><strong>Annex 8:</strong> The audit trail</li>
            <li>Other annexes as relevant (e.g., key facts table, case studies, photographs)</li>
          </ul>

          <h3>Editorial standards</h3>

          <p>The report must follow the United Nations editorial guidelines and the UNFPA IEO supplementary editorial guidelines:</p>

          <ul>
            <li>Clear, concise, well-organised prose</li>
            <li>Defined acronyms at first use</li>
            <li>Consistent citation of sources</li>
            <li>Tables and figures numbered and titled</li>
            <li>Page numbers, table of contents, list of figures/tables</li>
          </ul>

          <div class="callout tip">
            <span class="ic">✓</span>
            <div class="body"><strong>The executive summary is the report</strong>For most readers, the executive summary <em>is</em> the CPE. Write it as a standalone document that conveys purpose, methodology, key findings, key conclusions, key recommendations — without requiring the reader to look at anything else.</div>
          </div>
        `
      }
    ]
  },

  /* ============================================================
     CHAPTER 5 — PHASE 5: DISSEMINATION AND FACILITATION OF USE
     ============================================================ */
  {
    id: "ch5",
    number: 5,
    title: "Dissemination &amp; Facilitation of Use",
    subtitle: "Strategic communication, the management response, long-term utilization.",
    estMinutes: 45,
    levels: ["beginner", "intermediate", "advanced"],
    phase: "Disseminate",
    overview: "After the CPE report is approved, the most consequential phase begins. This phase is about strategic communication, audience-focused dissemination products, the management response, and the long-term utilization of CPE results. The CPE Manager and the CO Communication Officer co-lead it.",
    lessons: [

      {
        title: "5.1 Roles and responsibilities for strategic communication",
        lede: "Communication of CPE results is not the job of one person. It is a joint responsibility — and naming the people is half the work.",
        body: `
          <p>The CPE Manager and the CO Communication Officer are <strong>jointly responsible</strong> for the strategic communication on the CPE. Other roles support.</p>

          <h3>Who does what</h3>

          <div class="kvgrid">
            <div class="kv"><b>CPE Manager</b><span>Leads on strategic communication plan; coordinates with the evaluation team, ERG, RO M&amp;E Adviser, programme experts; supports development of the management response; leads long-term facilitation of use.</span></div>
            <div class="kv"><b>CO Communication Officer</b><span>Co-leads with the CPE Manager; develops communication products; ensures editorial quality; uses CPE content in broader CO communications.</span></div>
            <div class="kv"><b>Evaluation team</b><span>Provides key inputs during communication planning (audiences, key messages); develops some communication products (presentations); takes photographs during data collection; participates in dissemination workshops and webinars; presents CPE results.</span></div>
            <div class="kv"><b>RO M&amp;E Adviser</b><span>Provides quality assurance on communication products; supports dissemination beyond the country.</span></div>
            <div class="kv"><b>CO senior management &amp; technical staff</b><span>Champion the CPE; integrate findings into the next CPD design; advocate for use.</span></div>
            <div class="kv"><b>ERG</b><span>Continues to support dissemination; helps connect to stakeholder networks.</span></div>
            <div class="kv"><b>IEO</b><span>Publishes the report, EQA, and management response on the UNFPA evaluation database; provides corporate visibility.</span></div>
          </div>
        `
      },

      {
        title: "5.2 The five key elements of strategic communication",
        lede: "The handbook is specific. There are five elements that make CPE communication strategic — and they begin not at the end of the evaluation, but at the beginning.",
        body: `
          <p>The handbook lists five key elements for strategic communication on a CPE.</p>

          <h3>1. Early planning for strategic communication</h3>

          <p>Communication is most effective when it is built into the evaluation process from the outset:</p>

          <ul>
            <li>The CPE ToR (preparation phase) details all communication and dissemination components</li>
            <li>The initial CPE communication plan is jointly developed during the design phase by the CPE Manager and CO Communication Officer (in consultation with the team, ERG, RO M&amp;E Adviser, thematic experts)</li>
            <li>The communication plan is continuously refined as the CPE progresses</li>
            <li>The final communication plan is approved by the CO Representative before implementation</li>
          </ul>

          <h3>2. Audience-focused communication approach</h3>

          <p>Different audiences need different products. The stakeholder map (lesson 1.9) is the starting point for audience identification. Typical audiences include:</p>

          <ul>
            <li>Senior CO management (executive summary, internal briefings)</li>
            <li>Government partners (formal report, brief in local language, stakeholder events)</li>
            <li>Implementing partners (lessons-focused brief, workshops)</li>
            <li>Donors (executive summary, donor-specific briefs)</li>
            <li>Other UN agencies (joint events, technical briefs)</li>
            <li>Media (press release, op-ed, infographics)</li>
            <li>Rights-holders and affected communities (accessible-language summary, returned to them)</li>
            <li>The wider evaluation community (the report on the UNFPA evaluation database)</li>
          </ul>

          <h3>3. Relevant, innovative and diversified products</h3>

          <p>The handbook expects multiple products from a single CPE — each tailored to its audience, each adding value beyond simply re-presenting the full report.</p>

          <h3>4. The minimum communications package for a CPE (Figure 7)</h3>

          <p>The handbook specifies a <strong>minimum communications package</strong>:</p>

          <div class="kvgrid">
            <div class="kv"><b>Full CPE report</b><span>The complete, formal document.</span></div>
            <div class="kv"><b>Executive summary</b><span>Standalone, 4-8 pages.</span></div>
            <div class="kv"><b>CPE brief</b><span>2-4 page summary (toolkit guidelines).</span></div>
            <div class="kv"><b>Infographic / visual summary</b><span>1-page visual.</span></div>
            <div class="kv"><b>Presentation</b><span>For dissemination events.</span></div>
            <div class="kv"><b>Management response</b><span>Published alongside the report.</span></div>
            <div class="kv"><b>Communications plan</b><span>The plan that orchestrated all of the above.</span></div>
          </div>

          <h3>5. Timely access to evaluation results for decision-making</h3>

          <p>The CPE landing in time to inform the next country programme document is the whole point of the timeline. Communication must not delay this — the minimum package should be ready when the report is approved.</p>
        `
      },

      {
        title: "5.2.2 Preparing the strategic communication plan",
        lede: "The communication plan is a real document with real components — the handbook prescribes them in Box 19.",
        body: `
          <p>The CPE communication plan is built using the template in the toolkit (item 21). It is developed during the design phase, refined during fieldwork and reporting, and finalised at the start of the dissemination phase.</p>

          <h3>Components of the strategic communication plan (Box 19)</h3>

          <ol>
            <li><strong>Objectives</strong> — what the communication aims to achieve (uptake, advocacy, accountability)</li>
            <li><strong>Target audiences</strong> — drawn from the stakeholder map</li>
            <li><strong>Key messages</strong> — tailored per audience, derived from findings and conclusions</li>
            <li><strong>Products and channels</strong> — what gets produced, where it gets distributed</li>
            <li><strong>Timeline</strong> — aligned with the broader CPE roadmap</li>
            <li><strong>Budget</strong> — production costs, dissemination events, translation</li>
            <li><strong>Roles and responsibilities</strong> — who produces what, who approves</li>
            <li><strong>Monitoring</strong> — tracking uptake (downloads, citations, presentations delivered, media mentions)</li>
          </ol>

          <h3>The tools available (Table 14)</h3>

          <p>The handbook's Table 14 lists tools for developing the minimum communications package:</p>

          <ul>
            <li>Guidelines and structure for a CPE brief (toolkit item 19)</li>
            <li>Guidelines and structure for a CPE executive summary (toolkit item 20)</li>
            <li>Communication plan template (toolkit item 21)</li>
            <li>The CPE Roadmap (toolkit item 22)</li>
            <li>Editorial guidelines from the UN and the UNFPA IEO</li>
          </ul>

          <h3>Timely and simultaneous release</h3>

          <p>The handbook is specific: "Ensure the timely and simultaneous release of all the evaluation products." Releasing the full report weeks before the brief and presentation undermines the communication strategy. The package launches together.</p>

          <div class="callout tip">
            <span class="ic">✓</span>
            <div class="body"><strong>Return to participants</strong>The accessible-language summary returned to rights-holders is often the missing piece. Budget for it explicitly in the communication plan — translation, formatting, dissemination meetings — or it will quietly fall off the workplan.</div>
          </div>
        `
      },

      {
        title: "5.3.1 The management response",
        lede: "The management response is the moment when the CPE stops being a study and becomes a commitment.",
        body: `
          <p>UNFPA evaluation policy requires a <strong>management response</strong> for every CPE. The handbook's <strong>Figure 8</strong> details the process for its development.</p>

          <h3>The four possible positions</h3>

          <p>For each recommendation, CO management — typically the CO Representative — takes one of four positions:</p>

          <div class="kvgrid">
            <div class="kv"><b>Accept</b><span>Yes, this will be done. A named owner and a specific timeline are assigned.</span></div>
            <div class="kv"><b>Partially accept</b><span>Yes, parts of this — with a clear modification described.</span></div>
            <div class="kv"><b>Reject</b><span>No, this will not be done, with explicit substantive reasons.</span></div>
            <div class="kv"><b>Note</b><span>The recommendation is acknowledged but is outside the scope of management response (e.g., it is addressed to another agency).</span></div>
          </div>

          <h3>Who develops the management response</h3>

          <p>The CO Representative leads. The CPE Manager and all relevant CO staff support. The development happens after the CPE report is approved and the recommendations are final.</p>

          <h3>What goes in the response</h3>

          <p>For each recommendation, the management response specifies:</p>

          <ul>
            <li>The position (accept / partially accept / reject / note)</li>
            <li>If accepted: the action(s) to be taken</li>
            <li>If partially accepted: the parts accepted, and what is excluded and why</li>
            <li>If rejected: the substantive reasons</li>
            <li>The named owner (a specific role, not "the team")</li>
            <li>The timeline (a specific date, not "ongoing")</li>
            <li>Resource implications</li>
          </ul>

          <h3>Tracking and follow-up</h3>

          <p>Once the management response is finalised, it is tracked in a corporate follow-up system. Implementation progress is updated quarterly and reported up the chain to the IEO. The management response and updates are published alongside the CPE report on the UNFPA Evaluation Database.</p>

          <div class="callout warn">
            <span class="ic">!</span>
            <div class="body"><strong>The accept-but-don't-do pattern</strong>The most insidious follow-up failure is when most recommendations are "accepted" but implementation is never documented. Watch for evaluations where the previous cycle's recommendations are quietly absent from the next strategy. That is the diagnostic signal.</div>
          </div>
        `
      },

      {
        title: "5.3.2 Long-term utilization of the CPE",
        lede: "The CPE is not over when the report is published. The most useful CPEs continue to inform decisions years after the team has been paid.",
        body: `
          <p>The handbook frames the long-term use of the CPE as a continuing responsibility of the CPE Manager (with support from the CO Communication Officer and CO technical specialists).</p>

          <h3>Five practices for long-term use</h3>

          <div class="kvgrid">
            <div class="kv"><b>1. Identify new opportunities for uptake</b><span>As context evolves, new moments arise where CPE findings become newly relevant — a policy reform, a donor consultation, a strategic plan revision. Stay alert to these.</span></div>
            <div class="kv"><b>2. Proactively continue to engage with stakeholders</b><span>The dissemination events at launch are not the end. Follow-up briefings, anniversary events, integration into partner meetings — these all extend the CPE's reach.</span></div>
            <div class="kv"><b>3. Use the CPE as a source of content</b><span>The CPE generates evidence that can be repurposed in CO advocacy, in donor reports, in joint UN materials, in technical webinars. Use it actively.</span></div>
            <div class="kv"><b>4. Continue to build an evaluation culture</b><span>Use the CPE process and results to make the case for evaluation as a learning tool — not just an accountability instrument. Train colleagues. Mentor M&amp;E officers in other COs.</span></div>
            <div class="kv"><b>5. Share evaluation lessons widely</b><span>Lessons on process and outcomes — what worked methodologically, what didn't — feed into the next CPE, in this CO and elsewhere. Document them deliberately.</span></div>
          </div>

          <h3>The next CPE is informed by this one</h3>

          <p>The most important long-term use of any CPE is the next CPE. The audit trail, the evaluation matrix, the document repository, the toolkit adaptations, and especially the recommendations the CO acted on — all become the starting point for the next cycle.</p>

          <div class="pullquote">
            <p>"You will know your CPE was successful when the next country programme document visibly reflects its findings, and the next CPE does not have to repeat its recommendations."</p>
          </div>

          <div class="reflect">
            <b>Closing reflection</b>
            <p>You have now walked through the full UNFPA Evaluation Handbook — from the launch meeting in Phase 1, through design, fieldwork, reporting, and finally into long-term use. As you prepare for the final exam, ask yourself this: what is one practice from these five phases that you can integrate into your own work in the next 30 days? Name it concretely. That is how knowledge becomes craft.</p>
          </div>
        `
      }
    ]
  }
];

/* =============================================================
   STAGE ASSESSMENT QUIZ — Optional. Determines a tailored path.
   ============================================================= */
window.STAGE_QUIZ = [
  {
    q: "What is the UNFPA Evaluation Handbook (2024) specifically a methodological guide for?",
    options: [
      "All types of evaluations across the UN system",
      "Country Programme Evaluations (CPEs) — decentralized evaluations at country office level",
      "Audit and compliance reviews",
      "Strategic Plan evaluations only"
    ],
    correct: 1, weight: 2
  },
  {
    q: "In the UNFPA CPE methodology, recruitment of the evaluation team happens in TWO stages. Stage one is the recruitment of:",
    options: [
      "The team leader",
      "The national consultant",
      "The Young and Emerging Evaluator (YEE)",
      "The reference group chair"
    ],
    correct: 2, weight: 2
  },
  {
    q: "The five OECD-DAC evaluation criteria used in UNFPA CPEs are:",
    options: [
      "Relevance, coherence, effectiveness, efficiency, impact",
      "Relevance, coherence, effectiveness, efficiency, sustainability",
      "Relevance, effectiveness, efficiency, impact, sustainability",
      "Coherence, effectiveness, efficiency, impact, sustainability"
    ],
    correct: 1, weight: 2
  },
  {
    q: "Why does UNFPA exclude 'impact' from the standard CPE criteria?",
    options: [
      "Impact is not important",
      "It is too political to assess",
      "Impact requires a different time frame and methodology beyond the CPE's scope",
      "It overlaps with sustainability"
    ],
    correct: 2, weight: 2
  },
  {
    q: "The UNFPA CPE methodology is best described as:",
    options: [
      "A randomised controlled trial",
      "A theory-based contribution analysis",
      "A pure attribution evaluation",
      "An audit-based assessment"
    ],
    correct: 1, weight: 2
  },
  {
    q: "The Evaluation Reference Group (ERG) is consulted at four named moments during the CPE. Which is NOT one of them?",
    options: [
      "Review of the Terms of Reference",
      "Review of the Design Report version 1",
      "Final budget approval",
      "The Recommendations Workshop"
    ],
    correct: 2, weight: 2
  },
  {
    q: "UNFPA recommendations are co-created. Which describes the co-creation process correctly?",
    options: [
      "The evaluation team drafts final recommendations alone, then the ERG votes",
      "The ERG drafts recommendations, the team approves",
      "The team proposes tentative recommendations in a worksheet; the ERG reviews and contributes; the team and CPE Manager consolidate; a recommendations workshop refines them",
      "Recommendations are written collectively in real time during fieldwork"
    ],
    correct: 2, weight: 3
  },
  {
    q: "The 'three transformative results' that frame every UNFPA CPE are:",
    options: [
      "Zero poverty, zero hunger, zero inequality",
      "Zero unmet need for family planning; zero preventable maternal death; zero gender-based violence (including harmful practices)",
      "Equality, sustainability, accountability",
      "Education, health, gender equality"
    ],
    correct: 1, weight: 3
  },
  {
    q: "The 'design report' is to the UNFPA CPE methodology what the 'inception report' is to many other UN evaluations. Which is true?",
    options: [
      "It is approved by the team leader alone",
      "It is delivered in two versions (v1 and v2), reviewed by the CPE Manager, RO M&E Adviser and ERG, then formally approved",
      "It is internal to the team and never shared",
      "It is the final report"
    ],
    correct: 1, weight: 2
  },
  {
    q: "What is the role of the CPE Manager?",
    options: [
      "Conducts the data collection and writes the report",
      "Heads the country office",
      "Manages the day-to-day operations of the CPE — drafts ToR, recruits the team, manages contracts, convenes the ERG, quality-assures deliverables — without compromising the team's independent judgement",
      "Approves the management response"
    ],
    correct: 2, weight: 2
  }
];

/* =============================================================
   FINAL EXAM — 17 questions (2 scenario-based + 15 knowledge MCQ)
   ============================================================= */
window.FINAL_EXAM = [

  /* ── Scenario 1: case-study MCQ ─────────────────────────── */
  {
    type: "scenario",
    scenarioTitle: "Country Programme Evaluation — Exemplaria",
    scenarioBody: `<p>The UNFPA Country Office in <strong>Exemplaria</strong> has just held its CPE launch meeting. The CO Representative convened all CO staff, shared the R2U ToR template, fixed the 11-month timeline, and named the M&amp;E Officer as CPE Manager. The meeting ended with a clear to-do list.</p><p>The CPE Manager now turns to the first recruitment task: filling <strong>Stage 1</strong> of the evaluation team.</p>`,
    q: "Based on the handbook, who should the CPE Manager recruit at Stage 1 — before anyone else?",
    options: [
      "The Team Leader — a senior evaluator with 15+ years of experience",
      "A national consultant with local context knowledge",
      "A Young and Emerging Evaluator (YEE) — under 35, fewer than 5 years of professional experience",
      "The RO M&E Adviser, who will quality-assure the entire process"
    ],
    correct: 2,
    weight: 2
  },

  /* ── Scenario 2: Theory of Change builder (arrange) ──────── */
  {
    type: "arrange",
    scenarioTitle: "Theory of Change Builder",
    scenarioBody: `<p>Below are five elements drawn from a UNFPA country programme's theory of change in <strong>sexual and reproductive health</strong>. They are shown in a scrambled order.</p><p>Arrange them from the starting point of the causal chain (<em>what UNFPA puts in</em>) to the final transformative result (<em>what changes in the world</em>).</p>`,
    q: "Click each element in the correct causal order — from Inputs through to the Transformative Result.",
    items: [
      { text: "15,000 additional women using modern family planning methods", level: 3, chip: "Outcome" },
      { text: "Zero unmet need for family planning by 2030", level: 4, chip: "Transformative Result" },
      { text: "UNFPA funding + 12 national technical advisers deployed", level: 0, chip: "Inputs" },
      { text: "Quality family planning counselling available in 45 health centres", level: 2, chip: "Output" },
      { text: "Training 320 midwives and supplying contraceptive commodities", level: 1, chip: "Activities" }
    ],
    weight: 3
  },

  /* ── Knowledge MCQ (questions 3–17) ──────────────────────── */
  {
    q: "UNFPA CPEs use FIVE OECD-DAC criteria. Which is the correct set?",
    options: [
      "Relevance, coherence, effectiveness, efficiency, impact",
      "Relevance, coherence, effectiveness, efficiency, sustainability",
      "Relevance, effectiveness, efficiency, impact, sustainability",
      "Relevance, coherence, effectiveness, impact, sustainability"
    ],
    correct: 1
  },
  {
    q: "In humanitarian situations, the CPE uses two additional criteria:",
    options: [
      "Innovation and partnership",
      "Coverage and connectedness",
      "Speed and reach",
      "Resilience and recovery"
    ],
    correct: 1
  },
  {
    q: "The Young and Emerging Evaluator (YEE) is a UNFPA-specific role. The YEE is recruited:",
    options: [
      "After the team leader, as an apprentice",
      "Only in country programmes with adolescent components",
      "First — immediately after the CPE launch meeting, before the main team",
      "By the IEO, centrally"
    ],
    correct: 2
  },
  {
    q: "The CPE Manager is typically:",
    options: [
      "The CO Representative",
      "The CO M&E Officer (or a CO staff member designated by the Representative in consultation with the RO M&E Adviser)",
      "An external consultant",
      "A government counterpart"
    ],
    correct: 1
  },
  {
    q: "The R2U ToR template comes with FOUR named annexes. Which annex is the STAKEHOLDER MAP?",
    options: [
      "Annex A",
      "Annex B",
      "Annex C",
      "Annex D"
    ],
    correct: 1
  },
  {
    q: "The evaluation matrix specifies for each evaluation question: (i) related criteria; (ii) assumptions for verification; (iii) indicators; (iv) methods and tools; (v) corresponding data. WHEN is the matrix fixed?",
    options: [
      "After the launch meeting",
      "At the end of fieldwork",
      "At the approval of the Design Report version 2",
      "Only after the final report is approved"
    ],
    correct: 2
  },
  {
    q: "The UNFPA CPE methodology is described as a:",
    options: [
      "Theory-based contribution analysis",
      "Randomised controlled trial",
      "Quasi-experimental impact evaluation",
      "Process evaluation"
    ],
    correct: 0
  },
  {
    q: "The handbook prescribes a minimum CPE timeline of:",
    options: [
      "4 months",
      "6 months",
      "8 months",
      "11 months"
    ],
    correct: 3
  },
  {
    q: "Which sequence correctly describes the analytical chain in a CPE?",
    options: [
      "Recommendation → finding → evidence",
      "Evidence → recommendation → conclusion",
      "Data → evidence → finding → conclusion → recommendation",
      "Conclusion → finding → recommendation"
    ],
    correct: 2
  },
  {
    q: "Recommendations in a CPE are co-created. What is in the 'recommendations protocol and worksheet' the team proposes?",
    options: [
      "Just the recommendation text",
      "The recommendation plus the rationale, priority level, the conclusion it links to, the target audience, and operational implications",
      "The list of evidence sources",
      "The management response"
    ],
    correct: 1
  },
  {
    q: "The three UNFPA transformative results by 2030 are:",
    options: [
      "Zero poverty, zero hunger, zero inequality",
      "Zero unmet need for family planning; zero preventable maternal death; zero gender-based violence (including harmful practices like child marriage and FGM)",
      "Zero maternal death, zero child mortality, zero HIV",
      "Zero violence, zero discrimination, zero exclusion"
    ],
    correct: 1
  },
  {
    q: "The Evaluation Reference Group meets at four moments in the CPE. The fourth is:",
    options: [
      "After the report is published",
      "The Recommendations Workshop",
      "The launch meeting",
      "The exit meeting"
    ],
    correct: 1
  },
  {
    q: "The Evaluation Quality Assessment (EQA) is completed by:",
    options: [
      "The evaluation team",
      "The CO Representative",
      "The CPE Manager with the RO M&E Adviser; final assessment by the IEO",
      "The ERG"
    ],
    correct: 2
  },
  {
    q: "The 'no UNFPA staff at data collection' rule in the field phase exists to:",
    options: [
      "Save costs",
      "Reduce travel logistics",
      "Avoid or minimize the impact of bias on informants during the evaluators' meetings",
      "Speed up data collection"
    ],
    correct: 2
  },
  {
    q: "The management response classifies each recommendation as one of FOUR positions. Which is NOT a valid management response position?",
    options: [
      "Accept",
      "Partially accept",
      "Reject",
      "Defer indefinitely"
    ],
    correct: 3
  }
];

/* =============================================================
   STAGE DEFINITIONS — used only if user takes the assessment
   ============================================================= */
window.STAGES = {
  beginner: {
    key: "beginner",
    label: "Foundation builder",
    score: "0–40%",
    color: "#7CE7D6",
    headline: "Welcome — let's start at Phase 1.",
    description: "You'll work through all 5 phases — from the launch meeting to long-term use. Expect about 4-5 hours, self-paced. This is the full UNFPA CPE methodology, end to end.",
    moduleFilter: () => true,
    estHours: 5
  },
  intermediate: {
    key: "intermediate",
    label: "Practitioner",
    score: "41–75%",
    color: "#5B8DEF",
    headline: "You know the basics — let's deepen your CPE practice.",
    description: "We'll focus on the methodological core: Design, Fieldwork, Reporting, Dissemination. You can revisit Preparation if you need a refresher.",
    moduleFilter: (m) => m.levels.includes("intermediate"),
    estHours: 4
  },
  advanced: {
    key: "advanced",
    label: "Strategist",
    score: "76–100%",
    color: "#B49CFF",
    headline: "Sharp instincts — let's polish the strategic edge.",
    description: "We'll focus on the chapters where senior practice adds the most value: Fieldwork methods, Reporting (findings and co-creation), and Dissemination.",
    moduleFilter: (m) => m.levels.includes("advanced"),
    estHours: 3
  }
};
