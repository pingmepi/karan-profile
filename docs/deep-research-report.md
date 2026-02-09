@augment: IGNORE for now


# Portfolio Website Rebuild Spec for Agentic PM Positioning

## Current repo baseline and high-impact issues

Your site is a entity["company","GitHub","code hosting platform"] repo deployed as a Vite + React + TypeScript SPA (client-side routed via `react-router-dom`). fileciteturn44file0L1-L1 This matters because your portfolio is primarily content, and content sites benefit from server/static rendering for previews and indexing (CSR introduces SEO and crawler reliability issues in practice). citeturn10search2turn10search1

Current routes (from `src/App.tsx`) are:
- `/` (Home)
- `/projects`
- `/case-studies`
- `/case-studies/:id`
- `/not-work` plus `/photography` (same component)
- `/contact`
- a `Writings` route exists in code but is commented out in the router and nav fileciteturn45file0L1-L1 fileciteturn46file2L1-L1

Key issues that block “Agentic PM” signal and basic portfolio conversion:

A case study link is broken: “The Third Place” appears on the case studies listing, but that ID is missing from the detail-page data object, which means a user can hit a “Case Study Not Found” experience. fileciteturn50file0L1-L1 fileciteturn51file0L1-L1  
Conversion impact: you lose the reader exactly when they click a high-intent artifact.

Your “Not Work” page includes “hobbies as professional metaphors” language (“every mile teaches…” / “mirrors product work…”) plus invented-looking specifics (example rides + volunteer orgs) that create credibility risk. fileciteturn47file0L1-L1  
You already flagged this as off-brand; it also reads like narrative padding.

Your contact page has a broken entity["company","GitHub","code hosting platform"] link (`href="#"`). fileciteturn52file0L1-L1  
That’s a basic trust issue.

SEO is implemented via a client-side `Seo` component that mutates `<head>` at runtime (title/meta/canonical/robots/OG/Twitter). fileciteturn48file0L1-L1  
This helps *humans* but can still fail previews/crawlers because the initial HTML remains mostly an app shell. citeturn10search2turn10search1

Your current top-of-site identity is broad (“AI, Product, and Possibility”; “Product Leader & Creative”). fileciteturn43file0L1-L1  
Agentic PM screens reward specificity: tool use, planning, evaluation, reliability, human-in-loop boundaries, and measurable outcomes. citeturn8search1turn8search2turn11search0

## Target positioning for Agentic PM and hard constraints for tone

“Agentic PM” role expectations (in plain language) show up consistently in real job postings: build experiences that “reason, plan, and act,” and create evaluation methods for quality/safety; balance capability, cost, reliability; drive adoption through user workflows and metrics. citeturn11search0turn11search3

Industry guidance from model builders adds important engineering truths PMs must internalize:
- Agents are often “LLMs using tools in a loop,” and tool design/documentation quality is a big determinant of reliability. citeturn8search1turn8search10  
- Autonomy compounds errors and cost; sandboxing, guardrails, and testing are baseline—not “nice-to-have.” citeturn8search1  
- Evals should drive architecture decisions (single agent vs multi-agent) and should measure tool selection + argument correctness (data precision), among other behaviors. citeturn8search2turn8search14

Your portfolio must therefore prove two things at once:
- You already ship “tool-using systems” today (automation, orchestration, attribution, internal systems).
- You understand what changes when you shift from workflows to agent behavior (planning + tool choice + uncertainty + evaluation loops). citeturn8search2turn8search1

Tone constraints (these are part of the spec for the agent/build):
- Interests (photography/motorcycling) stay factual or visual. Avoid “X taught me Y” prose and career metaphors. This is already a mismatch for your stated brand, and it’s risky credibility-wise. fileciteturn47file0L1-L1
- Avoid invented-looking details (rides in the U.S., volunteering org names) unless you can verify and want them public. fileciteturn47file0L1-L1
- Use metrics where you have them; where you can’t disclose, use “directional” outcomes and say “anonymized.” Best-practice guidance for PM portfolios strongly favors real metrics and clarity on your role. citeturn0search12turn9search1

image_group{"layout":"carousel","aspect_ratio":"16:9","query":["Diana Hart product case studies portfolio page","Miguel Rosario product manager portfolio case studies page","product manager portfolio case study layout examples"],"num_per_query":1}

## Website structure and what goes where

This is a content-first site map that fits your current stack (Vite + React Router) while maximizing Agentic PM signal. It also maps cleanly to your existing pages so the agent can implement incrementally. fileciteturn45file0L1-L1

Navigation (top)
- Home (`/`)
- Work (`/case-studies`) — rename label from “Case Studies” to “Work”
- Agentic PM (`/agentic`)
- Writing (`/writings`) — turn on route + make it real
- About (`/about`)
- Contact (`/contact`)
- Resume button (external link OR `/resume`)

Footer (every page)
- Email
- entity["company","LinkedIn","professional network"]
- entity["company","GitHub","code hosting platform"]
- “Last updated: YYYY-MM-DD” (signals freshness; portfolio best practice is to keep it current). citeturn0search12

Page-level layout rules (UX + credibility)
- Above-the-fold must answer: “What kind of PM is this?” and “Show me proof.” (Portfolio examples that convert do this: clear identity + immediate case studies.) citeturn9search0turn9search1
- Every case study page starts with a one-screen executive summary: problem, your role, constraints, outcomes.
- Each page keeps reading friction low (consistent nav, clear hierarchy). Heuristic evaluation checklists and summaries from entity["organization","Nielsen Norman Group","ux research firm"] provide the standard heuristics you should adhere to for consistency, clarity, and minimal cognitive load. citeturn10search47turn10search46
- Accessibility baseline: WCAG organizes accessibility principles around POUR (Perceivable, Operable, Understandable, Robust). Your UI components already do some keyboard focus work; ensure it’s consistent, especially for clickable cards and navigation. citeturn8search8turn8search0

Rendering requirement (content site)
If you keep this as CSR, accept that previews/indexing can be unreliable. citeturn10search2turn10search1  
Preferred implementation path in Vite: add static prerendering for primary routes. This aligns with entity["company","Google","technology company"] guidance that CSR has SEO challenges and SSR/SSG can be better for content-driven apps. citeturn10search2turn10search1  
Alternative: migrate to entity["company","Next.js","react framework"] (bigger change, higher upside).

## Draft website content for every page

Everything below is written as paste-ready copy. An agent should implement it as the visible page content plus SEO title/description.

Home (`/`)
SEO
- Title: “Karan Mandalam — Product Manager (AI, Growth Systems, Agentic Workflows)”
- Description: “I build AI-enabled growth and execution systems as products. Case studies in martech, funnels, scheduling, and AI-native prototypes.”

Hero (above the fold)
- H1: Karan Mandalam
- Subhead (single line): Product Manager building AI-enabled growth and execution systems.
- Supporting copy (2–3 sentences):  
  I work on products where the hard part is orchestration: attribution, lifecycle messaging, internal tooling, and reliability across systems. My recent work spans event-funnel redesigns, martech attribution rebuilds, and shipping AI-native prototypes. I’m moving toward agentic product ownership: tool-based systems with evaluation loops and clear human controls.

Primary CTAs
- “Read case studies” → `/case-studies`
- “Agentic PM page” → `/agentic`
- “Download resume” → (resume link)

Proof strip (three metrics; keep it tight)
- “+90% event registrations” (events funnel)
- “+20% lead quality, −40% duplicates” (attribution rebuild)
- “−70% scheduling ops effort” (scheduling microservice)

Featured work (3 cards)
Card 1: Scaling Event Funnels  
One-line: Funnel redesign + lifecycle orchestration across forms, comms, and CRM.  
CTA: Read

Card 2: Martech Attribution Rebuild  
One-line: Unified UTM + enrichment + dedupe + daily performance reporting.  
CTA: Read

Card 3: Scheduling Microservice  
One-line: Self-serve booking + CRM sync + reminders + auditability for 1K+ meetings/month.  
CTA: Read

Agentic positioning module (short, technical, clear)
Header: Agentic PM focus  
Body:  
Agentic systems change the product surface area: tools need clear contracts, failures need recovery paths, and quality needs evals. I’m building toward that by turning workflows into “tool-based systems,” then layering evaluation, tracing, and human-in-loop controls as complexity increases. citeturn8search1turn8search2turn8search10

Testimonials (placeholders; do not fake)
Use three cards with this exact placeholder format:
- “[Name] — [Title], [Company] (worked with me on [project])”  
  “[Quote about what I owned + how I work]”
- “[Name] — [Title], [Company] (stakeholder/customer/internal partner)”  
  “[Quote about outcomes/clarity/reliability]”
- “[Name] — [Title], [Company] (manager/skip-level)”  
  “[Quote about judgment and decision-making]”

Minimal “Not Work” module (factual, 1–2 lines)
Header: Off-hours  
Body: Photography and motorcycling.  
CTA: “Photos” → `/not-work`  
(No “perspective,” “lessons,” or analogies.)

Work (`/case-studies`) — label as “Work”
SEO
- Title: “Work — Case Studies”
- Description: “Selected case studies across martech, funnels, automation, internal tools, and AI-native prototypes.”

Intro (short)
I optimize for systems: fewer handoffs, clearer ownership, better instrumentation, better outcomes.

Case study list
Each item shows:
- Title
- One-sentence problem
- “My role” (one line)
- 2–3 outcomes (metrics where available)
- CTA: Read full case study

Agentic PM page (`/agentic`)
SEO
- Title: “Agentic PM — Product Approach”
- Description: “How I design tool-using systems: boundaries, evals, failure handling, and human-in-loop control.”

Page content
Header: Agentic PM, grounded  
Body:  
Agentic products are workflows that can plan, select tools, take actions, and adapt based on results. That flexibility introduces uncertainty, so product decisions move closer to system design: tool contracts, traceability, evaluation, and escalation rules. citeturn8search1turn8search2turn11search0

Section: What I ship vs what I prototype
- Ship: automation-first systems with deterministic orchestration (funnel flows, attribution, scheduling).  
- Prototype: agentic behaviors layered on top (planning + tool choice + retries + evals).

Section: My agentic product checklist (publish this as-is)
- Define a unit of value: the task outcome a user cares about (time saved, errors reduced, revenue impact).
- Define tool surface area: smallest set of actions that can complete the job.
- Define state: what the system remembers across steps (inputs, decisions, tool outputs).
- Define human-in-loop: which steps need approval; what can run unattended.
- Define failure modes: timeouts, missing data, wrong tool choice, partial success.
- Add traces: every tool call recreatable.
- Add evals: measure tool selection, argument precision, and end-to-end task success. citeturn8search2turn8search14
- Ship gated autonomy: start with assisted mode; expand autonomy only when evals show stability. citeturn8search1turn8search2

Section: Why this maps to my background
Tie back to your lived work:
- Attribution rebuilds are “tool alignment problems” (inputs + schema + contracts).
- Scheduling microservice has human-in-loop boundaries, audit trails, retries.
- Event funnel orchestration is multi-system reliability under constraints.

Writing (`/writings`)
SEO
- Title: “Writing”
- Description: “Notes on product systems, eval-driven development, and agentic workflows.”

Page format
- List posts with date + tag + 2-line excerpt.
- Include one pinned post: “Evals are the roadmap: shipping agentic products that act.”

About (`/about`)
SEO
- Title: “About — Karan Mandalam”
- Description: “Product manager with a systems bias: martech, attribution, automation, and AI-native product work.”

Copy
I’m a product manager with a systems bias. I like products that sit between teams and tools: attribution, lifecycle comms, internal platforms, and workflows that break under scale.

My pattern has been consistent: map the failure points, simplify the surface area, instrument the system, and iterate based on observed behavior.

Right now I’m focused on Agentic PM roles—products where systems can plan and act using tools, and where quality is managed through evaluation and human controls. citeturn11search0turn8search2turn8search1

Not Work (`/not-work`)
SEO
- Title: “Photos”
- Description: “Photography.”

Content rules (keep it sparse)
- Remove the “hobbies teach lessons” sections and any invented ride/volunteering data. fileciteturn47file0L1-L1
- Keep:
  - Photo grid
  - Optional: one-line caption under grid: “A small selection. More on Instagram.”
  - Link to entity["company","Instagram","social network"]

Contact (`/contact`)
SEO
- Title: “Contact”
- Description: “Reach out for product roles or collaboration.”

Copy
Short opener:
If you’re building products where automation, measurement, and AI intersect, email works best.

Fixes
- Replace the placeholder GitHub link with your actual repo/profile link. fileciteturn52file0L1-L1
- Remove “best riding routes” line if it feels off-brand. fileciteturn36file2L1-L1

Resume (`/resume`) or external
- Simple page with:
  - Download button (PDF)
  - Inline embed (optional)
  - Quick “fit snapshot” bullets (5 lines)

404 (`*`)
Keep current behavior (auto-redirect + “Return now”), but ensure design matches your site theme and the page is noindex. citeturn10search1

## Case studies content

Implementation note for the agent: store case studies as structured content (JSON/TS objects or Markdown) so the site is maintainable. Your current pattern hardcodes case studies inside components; it’s already causing mismatch bugs. fileciteturn51file0L1-L1

Case study template (every case study uses the same sections, in this order)
- Executive summary (5 bullets)
- Context
- Problem
- Constraints
- What I did (decisions + system)
- Results
- What I’d do next
- Artifacts (screenshots/diagrams; redact as needed)

Case study: Scaling Event Funnels (AlmaBetter)
Executive summary
- Problem: high-intent registrations leaking due to friction and weak lifecycle follow-through.
- My role: owned full funnel redesign across UX, automation, and CRM readiness.
- Constraints: multiple tools, attribution breakage risk, fast rollout cadence.
- System: simplified registration, event-triggered journeys, fallback reminders.
- Outcomes: +90% registrations; reduced registration time; 2.5× improvement in event-to-enrollment ratio (use your verified numbers).

Context
Events were a core acquisition channel, but the journey was fragmented: ad → landing → registration → reminders → attendance → follow-up. Drop-offs came from friction (login loops, extra steps) and generic post-registration comms.

Problem
Even with high interest, conversion to qualified leads and enrollments was inconsistent. CAC climbed.

Constraints
- Minimal engineering bandwidth; martech-first solutions needed.
- Attribution had to remain intact (UTMs + CRM fields).
- Reliability mattered: reminders and integrations can’t silently fail.

What I did (decisions + system)
- Built a “friction audit” map: every click and handoff from landing page to CRM.
- Removed the biggest friction step: collapsed to a single registration action.
- Orchestrated lifecycle messaging based on user behavior: attended vs no-show vs “clicked reminder”.
- Added fallback channels (e.g., WhatsApp if email engagement was low) with clear stop rules.
- Defined a campaign schema for tagging attribution and keeping CRM clean.

Results
- Quant outcomes: +90% registrations; 2.5× lift in event-to-enrollment ratio; “templates reused across 30+ campaigns” (verify).  
- Qual outcomes: fewer manual interventions, clearer reporting, tighter ownership across teams.

What I’d do next
- Add trace-style logging for journey failures (missed reminders, sync failures).
- Add experiment cadence: message timing, channel ordering, and reminder frequency.

Artifacts to publish
- Funnel diagram (one image)
- Sample lifecycle spec (redacted)
- A/B test summary (redacted)

Case study: Martech Attribution Rebuild (Miles Education)
Executive summary
- Problem: siloed tools causing missing attribution, duplicates, and slow reporting.
- My role: defined data schema + orchestration logic to get to a “single source of truth.”
- Constraints: multi-tool stack, legacy data, business scaling pressure.
- System: unified UTM schema, enrichment + dedupe, reporting pipeline.
- Outcomes: +20% lead quality, −40% duplicates, reporting cycle cut from days to ~36 hours (verify).

Context
Marketing visibility lagged growth. Leads entered from multiple sources. Attribution was missing or overwritten.

Problem
ROI decisions were delayed and disputed. Duplicates polluted CRM. “Unknown source” grew.

What I did
- Established a UTM + campaign naming contract across teams/tools.
- Built pre-CRM enrichment flows: normalize, validate, dedupe.
- Defined fallback attribution logic when UTMs were missing (referrer, path, campaign).
- Delivered daily dashboards with clear funnel definitions.

Why this is agentic-adjacent
Agentic PM work requires designing tool contracts and evaluation loops. Attribution work is a productized contract: if inputs don’t conform, the system fails. citeturn8search10turn8search2

Case study: Scheduling Microservice (Miles Education)
Executive summary
- Problem: lead-to-meeting handoff created drop-offs and high ops load.
- My role: designed the product behavior, roles, and system integration path.
- Constraints: multi-team needs, CRM sync, reminder reliability.
- System: booking UI + access control + orchestration + audit.
- Outcomes: −70% ops effort; 1K+ meetings/month; faster lead-to-meeting.

Key agentic signal to highlight
This is a controlled “action system.” It has:
- explicit permissions (who can create/modify availability),
- observability (audit logs),
- retries/fallbacks for API/CRM failures.
Those are the same concerns agents raise when they start taking actions via tools. citeturn8search2turn8search1

Case study: MereKapade (AI-native prototype)
Executive summary
- Problem: gap between “prompt-to-image” and usable commerce workflows.
- My role: solo product + build; shipped MVP in ~8 weeks (verify).
- System: prompt → generate → canvas preview → save sessions.
- Results: early testers, usage behavior (designs per session), latency targets.
- Next: cost controls, safety filters, fulfillment readiness.

Agentic angle
Position this as “AI-native UX and reliability design”:
- retries,
- usage caps,
- token tracking,
- error states.
That overlaps with agent product concerns around cost and failure modes. citeturn8search1turn8search2

Case study: The Third Place / MyThirdPlace (Community infra)
Fix the broken route/content gap by implementing this case study end-to-end. fileciteturn50file0L1-L1

Executive summary
- Problem: safe community participation needs governance, roles, and privacy boundaries.
- My role: designed the primitives and permissions model (RBAC) plus events/discussions.
- System: modular entities (communities, events, roles, badges), admin workflows, privacy defaults.
- Outcomes: beta usage (state honestly), moderation workload (if tracked).
- Next: agents as assistive tooling (moderation queue triage, event recommendations) with human approval.

Agentic extension section (include on the page)
“Agentic roadmap (assistive first)”
- “Suggest event topics” agent: tool access limited to read-only insights, output reviewed by admin.
- “Moderation triage” agent: summarizes flagged content, proposes action, human decides.
- “Community digest” agent: drafts weekly summary, admin sends.
This is consistent with agent guidance that autonomy compounds errors and should be gated with guardrails. citeturn8search1turn8search10

## Agentic PM blog post draft

Publish as your first real post. It will serve as a hiring-panel artifact that you understand evals, tools, uncertainty, and product boundaries.

Title  
Evals are the roadmap: shipping agentic products that act

Tags  
Agentic PM · Evals · Tool Design · Product Systems

Post

Most AI product conversations still collapse into UI debates: chat, copilots, “agent mode.” That’s surface area. Agentic product work lives underneath: tools, state, uncertainty, and reliability.

An agentic system is simple to describe and hard to ship: it takes a goal, plans steps, calls tools, observes results, and keeps going until the job is done. citeturn8search1turn8search2  
Once you allow tool calls, you’ve added a non-deterministic component to a system that affects real outcomes. That changes the PM job.

### Start with a unit of value

Agent product specs go sideways when “agent” is the product. It isn’t. A unit of value is the job the user wants done and how they judge completion:
- “Resolve this support request correctly.”
- “Book a meeting with the right person.”
- “Generate a compliant campaign report.”

That framing forces you to define success as an outcome, not a model behavior. It also sets the stage for evals.

### Treat tools as product surface area

Anthropic describes “augmented LLMs” as LLMs plus tools/retrieval/memory. citeturn8search1  
The tool layer is where agent products become real. It’s also where they break.

A PM should think of a tool like an API contract with UX consequences:
- What does the tool do?
- What inputs does it require?
- What failure modes exist?
- What is safe to do automatically vs requiring approval?

Tool design guidance coming out of production agent work emphasizes clarity and “evaluation-driven” iteration: tools should be intentionally defined, composable, and designed around agent context. citeturn8search10

If your tools are ambiguous, your agent’s behavior will look like “randomness,” even when the model is doing its best.

### Decide where state lives

State answers “what the system remembers.” In practical agentic products, you need at least:
- Task state (goal, plan, steps completed)
- Tool state (last tool outputs, error codes, retry counters)
- User state (constraints, preferences, permissions)

You can keep this thin early. The goal is auditability and recovery.

### Make human-in-loop a first-class product feature

Some tasks tolerate imperfect autonomy. Many don’t. A tax product, a finance product, or anything with compliance risk requires a much higher bar.

Serious agentic PM roles call out “trust,” “accuracy,” and “human-in-loop processes” explicitly, because non-determinism raises the risk of persuasive errors. citeturn11search3  
This is a product design choice, not a safety afterthought:
- Which actions can run unattended?
- Which actions require explicit approval?
- Who gets paged when confidence is low or errors repeat?

### Build evals as the roadmap, not the afterthought

OpenAI’s evaluation guidance is blunt: use evals to decide architecture choices, including single-agent vs multi-agent designs. citeturn8search2  
This is the roadmap shift: you stop treating “model quality” as a vibe and start treating it like a measured, regressed artifact.

At minimum, agent eval coverage should include:
- Tool selection: did the system pick the correct tool? citeturn8search2  
- Argument precision: did it call the tool with correct inputs extracted from context? citeturn8search2  
- Workflow-level failure handling: did it recover when a tool failed, or did it spiral?

OpenAI also provides “agent evals” concepts like trace grading and dataset-driven iteration, which are practical ways to operationalize this. citeturn8search14

A PM can contribute here directly:
- define gold tasks
- define what “done” means
- define unacceptable behaviors
- pick metrics that map to user harm and business outcomes

### Ship autonomy in stages

Anthropic warns that autonomy increases cost and compounds errors, recommending testing in sandboxed environments with guardrails before expanding. citeturn8search1  
Translate that into a product rollout plan:
- Assisted mode (agent suggests; human clicks)
- Guarded mode (agent runs; human approves key steps)
- Limited autonomy (agent runs; escalates on uncertainty)
- Expanded autonomy only after evals stabilize

This gives you a path that is shippable and defensible.

### What to look for in your own work

If you’ve built workflow systems—attribution pipelines, scheduling systems, lifecycle orchestration—you already have the foundation:
- tool boundaries
- handoffs
- observability
- failure recovery

Agentic PM is an extension: add planning and non-deterministic choices, then control them with evals and human-in-loop design.

That’s the job.

## Tasklist for the agent implementing everything

This is sequenced so the site becomes coherent quickly and then improves.

Content and information architecture
- Rename “Case Studies” nav label to “Work,” keep the route `/case-studies` for minimal churn. fileciteturn46file2L1-L1
- Add new routes + pages:
  - `/agentic` (Agentic PM page)
  - `/about`
  - enable `/writings` route and show it in nav fileciteturn46file1L1-L1
  - `/resume` (optional)
- Rewrite Home page sections to the new structure and copy (remove broad “possibility” language). fileciteturn43file0L1-L1
- Replace testimonials with placeholders (structured fields; avoid fake quotes).

Case studies
- Fix the broken Third Place case study:
  - ensure it appears on the Work list and has a matching detail slug + detail content. fileciteturn50file0L1-L1
- Refactor case study storage:
  - move case study data out of `CaseStudyDetail.tsx` into `src/content/caseStudies.ts` (or JSON/MD) to avoid mismatch errors. fileciteturn51file0L1-L1
- Rebuild each case study page to follow the template:
  - Executive summary
  - Context/problem/constraints
  - System decisions + diagrams (SVG or simple images)
  - Results
  - What’s next
  - Artifacts (redacted)

Writing
- Replace placeholder post cards with real posts list.
- Publish the “Evals are the roadmap…” post as a real page (Markdown-based rendering recommended).

Not Work
- Strip “hobbies teach lessons / mirrors product work” prose.
- Remove any invented ride/volunteering entries unless verified. fileciteturn47file0L1-L1
- Keep: photo grid + one-line caption + Instagram link.

Contact
- Fix GitHub link (`href="#"` → actual). fileciteturn52file0L1-L1
- Tighten contact copy to align with Agentic PM focus.

SEO, previews, rendering
- Decide rendering strategy:
  - Short path: add static prerendering for `/`, `/case-studies`, `/case-studies/:id` (generated), `/agentic`, `/about`, `/writings`. This addresses CSR SEO challenges documented by Google. citeturn10search2turn10search1
  - Larger path: migrate to Next.js/SSG for content pages.
- Ensure correct 404 handling for SPA: Google documents strategies to avoid soft 404 issues in CSR, including noindex on error pages. citeturn10search1

Accessibility and UX quality bar
- Run a quick heuristic evaluation using NNG’s heuristic workbook and summary PDFs; fix obvious issues (link affordances, focus states, consistency). citeturn10search46turn10search47
- Validate basic WCAG principles (POUR) for navigation, keyboard operation, image alt text. citeturn8search8turn8search0

Repo hygiene and security
- Move entity["company","Supabase","backend as a service"] publishable keys into env vars and document setup steps (client-side keys are expected to be public, but hardcoding is still poor hygiene for maintainability). fileciteturn44file0L1-L1
- Add a simple “Content update checklist” in README: update case studies, update last-updated date, publish blog posts.

Done criteria (for acceptance)
- Home explains “what you do” in one line and gets to proof in under one scroll.
- Work page lists 3–5 strong case studies, all clickable, all consistent.
- Third Place case study works end-to-end (no “not found”).
- Agentic page exists and makes you legible as an Agentic PM candidate using concrete system concepts (tools/evals/human-in-loop). citeturn11search0turn8search2turn8search1
- Writing page has at least one real post (the evals post).
- Contact page has working outbound links.