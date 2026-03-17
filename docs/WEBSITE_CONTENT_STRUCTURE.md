# Website Content Structure

This document captures the website content hierarchy as implemented in the current codebase.

## Scope
- Source routes: `src/app/*`
- Shared visible content: `src/components/Navigation.tsx`, `src/components/HomeClient.tsx`, `src/components/WhatsAppPing.tsx`
- Dynamic work detail content source: `src/data/case-studies.ts`

## Global Shell (All Pages)

### Global Metadata
- Default title: `Karan Mandalam — Systems Builder`
- Title template: `%s | Karan Mandalam`
- Default description: `I build systems that bring order to chaos. Growth infrastructure, automation, AI workflows, and new product bets.`

### Global Navigation
- Logo text: `KM` (links to `/`)
- Nav items:
  - `Work` -> `/work`
  - `Products` -> `/products`
  - `Agentic` -> `/agentic`
  - `Life` -> `/life`
  - `About` -> `/about`
  - `Contact` -> `/contact`

### Global Floating CTA
- Fixed bottom-right button text: `Ping me`
- Destination: `https://wa.me/919460596406`
- Prefilled message: `Hi Karan, I came through your website and wanted to connect.`

---

## Page: `/` (Home)

### Metadata
- Title: `Karan Mandalam — Systems Builder`
- Description: `I build systems that bring order to chaos. Growth infrastructure, automation, AI workflows, and new product bets.`

### Section 1: Hero
- Heading:
  - `I build systems`
  - `that bring order`
  - `to chaos.`
- Supporting text: `Growth infrastructure, automation, AI workflows, and new product bets.`
- CTAs:
  - `See the work ->` -> `/work`
  - `About me` -> `/about`

### Section 2: Where I've worked on systems
- Section title: `Where I've worked on systems`
- Cards:
  - `Marketing Orchestration`
    - `Event-driven comms infra across CRM, WhatsApp, and analytics — trigger-based, not manual.`
  - `Growth Systems`
    - `Funnel instrumentation, UTM normalization, multi-touch attribution. ₹1Cr revenue impact.`
  - `Platform Builds`
    - `CMS, scheduling services, state machines. Operator-level tooling for content and events.`
  - `AI Workflows`
    - `LLM orchestration, NLP2SQL, generative pipelines. 25% faster reporting via consolidated analytics.`

### Section 3: Currently building
- Section title: `Currently building`
- Build cards:
  - `MyThirdPlace`
    - Description: `Community & events infrastructure`
    - Status: `Live`
    - Links:
      - `View case study` -> `/work/community-infra`
      - `Live` -> `https://mythirdplace.rapchai.com`
  - `MereKapade`
    - Description: `AI-assisted commerce experiment`
    - Status: `MVP`
    - Links:
      - `View case study` -> `/work/merekapade`
      - `Live` -> `https://merekapade.com`
  - `AI Orchestration`
    - Description: `Multi-agent pipelines with eval gating`
    - Status: `In Progress`
    - Link:
      - `View case study` -> `/products`
- Footer CTA:
  - `All products ->` -> `/products`

---

## Page: `/work`

### Metadata
- Title: `Work`
- Description: `Shipped production systems — marketing orchestration, growth infrastructure, platform builds, and AI workflows.`

### Section 1: Header
- Heading: `Work`
- Subtext: `Only shipped, production systems. Structured, operator-level documentation. No philosophy. No unfinished experiments.`

### Section 2: Systems Grid
- Card 1:
  - Title: `Event-Driven Comms Infrastructure`
  - Domain: `Marketing Orchestration`
  - Description: `Built event-driven comms infra across CRM, WhatsApp, and analytics platforms. Replaced manual broadcast workflows with trigger-based orchestration.`
  - Stack: `CRM · WhatsApp · Analytics · Webhooks`
  - Impact: `Automated 70% of event communications pipeline`
  - CTA: `View case study` -> `/work/event-funnels-cms`
- Card 2:
  - Title: `Growth Event Engine`
  - Domain: `Growth Systems`
  - Description: `Designed the event tracking engine powering growth funnels — UTM normalization, multi-touch attribution, and conversion instrumentation end-to-end.`
  - Stack: `UTM Framework · Funnel Instrumentation · Attribution`
  - Impact: `₹1Cr revenue impact via funnel optimization`
  - CTA: `View case study` -> `/work/martech-revamp-attribution`
- Card 3:
  - Title: `CMS & Scheduling Platform`
  - Domain: `Platform Builds`
  - Description: `Shipped CMS platforms and scheduling services with workflow state machines. Operator-level tooling for content, events, and automation.`
  - Stack: `Strapi · Next.js · State Machines · Cron`
  - Impact: `Enabled 40+ events/month at scale`
  - CTA: `View case study` -> `/work/scheduling-at-scale`
- Card 4:
  - Title: `LLM Orchestration Pipelines`
  - Domain: `AI Workflows`
  - Description: `Built LLM orchestration layers, NLP-to-SQL query interfaces, and generative pipelines for content and data workflows.`
  - Stack: `LLM Chains · NLP2SQL · Generative Pipelines`
  - Impact: `25% faster reporting via consolidated analytics`
  - CTA: `View case study` -> `/work/content-ops-automation`

---

## Dynamic Page Template: `/work/[slug]`

### Template Structure
- Back link: `Back to Work` -> `/work`
- Hero:
  - `title` (from case study)
  - `summary` (from case study)
  - KPI pills (`kpis[]`)
  - Tag chips (`tags[]`)
  - Optional external CTA (`liveLabel` or `Live Site`) when `liveUrl` exists
- Body:
  - Repeated content blocks from `sections[]` with heading + paragraph
  - `Tech Stack` section from `tech[]`
- Bottom navigation:
  - `← All Work` -> `/work`
  - `Next: {next case study}` -> next slug route

### `/work/event-funnels-cms`
- Title: `Event Funnels & SEO-first Event CMS`
- Summary: `Redesigned event journeys and shipped an SEO-first Event CMS integrated with CRM & Zoom to improve registrations and reduce ops overhead.`
- KPIs:
  - `+90% registrations`
  - `Significant revenue impact`
  - `+25% event→QL`
  - `40+ events/mo`
- Tags:
  - `Product Strategy`
  - `Event Automation`
  - `Funnel Optimisation`
  - `SEO`
  - `CRM`
- Sections:
  - `Overview`: `Fragmented journeys and login loops hurt conversions. I led the product work—reframed the funnel, set success metrics, and delivered an SEO-focused Event CMS to make events self-serve.`
  - `Context & Role`: `Companies: AlmaBetter (funnel/registrations), Miles Education (Event CMS). Role: Lead PM / Program Manager (CTO's Office). Teams: Marketing, CRM, Engineering, Design, Ops.`
  - `Problem`: `Registration friction (Google login loops; multi-step forms). Manual event creation; uneven SEO. Broken attribution between events → CRM.`
  - `Objectives`: `Increase registrations and lead quality. Enable self-serve event creation and promotion. Preserve clean attribution into CRM.`
  - `Product Decisions`: `Prioritised 1-click registration and form simplification over heavy pre-qualification. Standardised SEO templates and promo blocks to scale content quickly. Enforced UTM discipline and event→CRM mapping before adding new channels.`
  - `Solution`: `1-click registration with inline email validation (n8n). Removed Google login loop; simplified forms; conditional fields. Lifecycle journeys (WebEngage) + WABA fallback. Event CMS (Strapi + Next.js): SEO templates; CRM & Zoom integration. Attribution plumbing: UTM-consistent links; event→CRM normalisation.`
  - `Architecture`: `Next.js (web) → Strapi (CMS) → CRM & Zoom APIs · n8n for validation/reminders/tagging · UTM → CRM fields → Metabase.`
  - `Metrics & Impact`: `+90% registrations. Significant revenue impact within a 4-month window. +25% event→qualified-lead conversion. 40+ events/month via CMS.`
  - `Evidence`: `GA4 funnel; CRM opportunity mapping; Metabase cohorts; Zoom attendance logs.`
  - `Challenges & Trade-offs`: `Form length vs qualification; SEO editorial guardrails; syncing across Zoom & CRM.`
  - `Lessons`: `UTM discipline matters as much as UX; self-serve needs templates + validation.`
- Tech Stack:
  - `Strapi`, `Next.js`, `n8n`, `WebEngage`, `WABA`, `Zoom API`, `GA4`, `Postgres/Metabase`, `CRM`

### `/work/martech-revamp-attribution`
- Title: `Martech Revamp for Attribution Accuracy`
- Summary: `Re-architected GA4/Netcore/HubSpot/Metabase for clean attribution, faster reporting, and better lead quality.`
- KPIs:
  - `+20% lead quality`
  - `25% faster reporting`
  - `−40% CRM duplicates`
- Tags:
  - `Martech`
  - `Attribution`
  - `Analytics`
  - `Data Quality`
- Sections:
  - `Overview`: `Attribution was inconsistent and reporting slow. I owned the product roadmap for measurement and rebuilt the data path to trust outcomes—daily.`
  - `Context & Role`: `Company: Miles Education. Role: Program Manager (CTO's Office).`
  - `Problem`: `Mixed UTM taxonomies; duplicate contacts; manual reporting.`
  - `Objectives`: `Single source of truth; faster, self-serve reporting.`
  - `Product Decisions`: `Mandated a pragmatic UTM spec; wrote guardrails into tooling (link builders, validation). Prioritised dedupe and enrichment before advanced analytics to avoid compounding errors.`
  - `Solution`: `UTM standard + link governance; n8n enrichment (normalisation, tagging, dedupe); Metabase dashboards on Postgres; monthly audits.`
  - `Architecture`: `Ingest (web/app) → GA4 → ETL (n8n) → CRM + Postgres → Metabase.`
  - `Metrics & Impact`: `+20% lead quality · 25% faster reporting · −40% CRM duplicates.`
  - `Evidence`: `Pre/post UTM compliance; dedupe logs; dashboard load times; QBR snippets.`
  - `Challenges`: `UTM enforcement across many operators; legacy campaigns.`
  - `Lessons`: `Specs are necessary; enforcement via tools is sufficient.`
- Tech Stack:
  - `GA4`, `Netcore`, `HubSpot`, `n8n`, `Postgres`, `Metabase`

### `/work/scheduling-at-scale`
- Title: `Multi-Tenant Scheduling Microservice`
- Summary: `Dynamic slot logic + CRM sync reduced ops load and accelerated lead→meeting.`
- KPIs:
  - `70% ops reduction`
  - `1,000+ meetings/mo`
  - `25% faster lead→meeting`
- Tags:
  - `Platform`
  - `SaaS Infra`
  - `Ops Automation`
- Sections:
  - `Overview`: `Manual scheduling slowed growth teams. I wrote the PRD, set success metrics, and led delivery across teams.`
  - `Context & Role`: `Internal product for sales & academic teams; cross-functional leadership.`
  - `Problem`: `Spreadsheet slots; inconsistent rules; no auditability.`
  - `Objectives`: `Self-serve booking; consistent rules; unified audit trail.`
  - `Product Decisions`: `Declarative slot logic with test cases; auditability as a first-class requirement. CRM as source of truth for people/state; scheduler as orchestration layer.`
  - `Solution`: `Next.js + Supabase (RBAC, calendars, conflict checks); n8n triggers (reminders, reschedules, tagging); CRM sync + API fallback; webhooks; audit logs.`
  - `Architecture`: `Scheduler service ↔ CRM ↔ n8n ↔ Notification providers.`
  - `Metrics & Impact`: `70% ops reduction · 1,000+ meetings/mo · 25% faster lead→meeting.`
  - `Evidence`: `Ops time studies; CRM event logs; scheduler audits.`
  - `Challenges`: `Multi-team priorities; timezones; overlap edge cases.`
  - `Lessons`: `Testable slot logic and audit trails prevent regressions at scale.`
- Tech Stack:
  - `Next.js`, `Supabase (Auth/RLS)`, `n8n`, `Webhooks`, `CRM`

### `/work/merekapade`
- Title: `Prompt-to-Design Commerce MVP`
- Summary: `Users generate wearable designs from prompts with live preview and saved sessions.`
- KPIs:
  - `MVP in 8 weeks`
  - `100+ testers`
  - `3.4 designs/session`
- Tags:
  - `AI`
  - `Consumer`
  - `Commerce`
- Live CTA:
  - Label: `Live Product`
  - URL: `https://merekapade.com`
- Sections:
  - `Overview`: `A solo build exploring AI-assisted design → purchase flows with a friction-light canvas UI.`
  - `Context & Role`: `Solo PM/IC: market hypothesis, UX, MVP scope, validation loops.`
  - `Problem`: `Cold-start creativity; session persistence; safe prompts.`
  - `Objectives`: `Fast ideation → preview; save/share; low latency.`
  - `Product Decisions`: `Prioritised latency and usability over advanced generation controls. Kept profiles RLS-secured for safety and portability.`
  - `Solution`: `React + Canvas customiser; GPT for ideation; Supabase Auth/RLS; order model (size/SKU/pricing); token accounting + retries.`
  - `Architecture`: `React FE ↔ Supabase (Auth/DB/Storage) ↔ Prompt service ↔ Order service.`
  - `Metrics & Impact`: `100+ testers; 3.4 designs per first session; qualitative feedback: playful & fast.`
  - `Evidence`: `Event logs (session length, saves); prompt error rates; order funnel.`
  - `Challenges`: `Prompt safety; rendering performance on low-end devices.`
  - `Lessons`: `Preview latency trumps model fanciness for novice users.`
- Tech Stack:
  - `React`, `Canvas API`, `Supabase (Auth/RLS/Storage)`, `GPT`

### `/work/community-infra`
- Title: `Community Infra — Events, Badges, Hosts, Referrals`
- Summary: `RBAC-first architecture with privacy-centric visibility.`
- KPIs:
  - `Decoupled role/badge logic`
  - `Closed beta live`
- Tags:
  - `Platform`
  - `Community`
  - `Privacy UX`
- Live CTA:
  - Label: `Live Product`
  - URL: `https://mythirdplace.rapchai.com`
- Sections:
  - `Overview`: `Infra for communities to run events with assigned hosts, badges, and optional participant visibility.`
  - `Context & Role`: `Architect & PM; admin-only edits by design.`
  - `Problem`: `Role/badge coupling; visibility/privacy requirements; host workflows.`
  - `Objectives`: `Separation of concerns; admin-only edits; privacy by default.`
  - `Product Decisions`: `Badge system separate from roles; one host per event; admin assignment. Visibility flags enforced at API layer; no participant data sent by default.`
  - `Solution`: `RBAC model; visibility filters; Google Sign-In; preferences endpoint; storage-efficient activity logging.`
  - `Architecture`: `Supabase (RLS) + Next.js; endpoints for events/hosts/badges; admin console.`
  - `Metrics & Impact`: `Clean governance; beta usage across growing communities.`
  - `Evidence`: `ERD; RLS policies; privacy tests.`
  - `Challenges`: `Balancing visibility with privacy and safety.`
  - `Lessons`: `Make privacy choices backend-configurable and overridable.`
- Tech Stack:
  - `Supabase`, `Next.js`, `RBAC`, `Admin tools`

### `/work/content-ops-automation`
- Title: `Content Ops → Predictable, Measurable, Sprint-Driven`
- Summary: `Jira workflows + analytics turned content delivery into a reliable machine.`
- KPIs:
  - `−90% errors`
  - `7-week predictable delivery`
  - `−23% learner drop-offs`
- Tags:
  - `Agile Ops`
  - `Education`
  - `Analytics`
- Sections:
  - `Overview`: `Transformed content ops using standardised workflows, feedback loops and dashboards.`
  - `Context & Role`: `Cross-functional with content teams; process + tooling ownership.`
  - `Problem`: `Ad-hoc delivery; unclear ownership; recurring errors; poor visibility.`
  - `Objectives`: `Predictability, quality, transparency.`
  - `Product Decisions`: `Defined DRIs and rituals; built dashboards for velocity and defects. Integrated learner feedback into sprint reviews for continuous improvement.`
  - `Solution`: `Jira workflows; sprint reviews; ownership matrix; feedback ingestion; Zapier + Metabase dashboards; 2-week cadence.`
  - `Architecture`: `Intake → Jira → Automation → Metabase dashboards → Review cadence.`
  - `Metrics & Impact`: `−90% errors; 7-week predictable delivery; −23% learner drop-offs.`
  - `Evidence`: `Burndowns; error trend charts; release cadence logs.`
  - `Challenges`: `Cultural change; initial slowdown with quality gates.`
  - `Lessons`: `Measurement + visibility → accountability; rituals compound.`
- Tech Stack:
  - `Jira`, `Zapier`, `Metabase`, `Feedback tooling`

---

## Page: `/products`

### Metadata
- Title: `Products`
- Description: `Product bets — MyThirdPlace, MereKapade, AI workflow systems, and in-progress builds.`

### Section 1: Header
- Heading: `Products`
- Subtext: `Deliberate product directions. Not side projects.`

### Section 2: Hero Product (Primary)
- Label: `Primary`
- Product name: `MyThirdPlace`
- Description: `Community & events infrastructure. Work and home are not enough — people need shared spaces. MyThirdPlace is the platform for building, discovering, and running community-driven events and spaces.`
- Stack line: `Next.js · Supabase · Razorpay · Vercel`
- CTAs:
  - `Live` -> `https://mythirdplace.rapchai.com`
  - `View case study` -> `/work/community-infra`

### Section 3: Product Cards
- Card: `MereKapade`
  - Tagline: `AI-assisted commerce experiment`
  - Description: `AI-led design commerce MVP. React + Canvas + Supabase + GPT. Exploring AI-assisted product customization and generative design workflows.`
  - Stack: `React · Canvas API · Supabase · OpenAI`
  - Status: `MVP`
  - CTAs:
    - `View case study` -> `/work/merekapade`
    - `Live` -> `https://merekapade.com`
- Card: `AI Orchestration Workflows`
  - Tagline: `LLM pipelines for production`
  - Description: `Multi-agent orchestration, evaluation gating, and cost-controlled inference pipelines. Building the infrastructure layer for autonomous AI systems.`
  - Stack: `LangChain · Genkit · Telegram · Eval Frameworks`
  - Status: `In Progress`
- Card: `In-Progress Builds`
  - Tagline: `Experiments and explorations`
  - Description: `RAG frameworks and agentic job search systems. Active experiments in applied AI with evaluation-first development.`
  - Stack: `Various`
  - Status: `Exploring`

---

## Page: `/agentic`

### Metadata
- Title: `Agentic`
- Description: `Why structure precedes autonomy — mapping systems to agentic capabilities and what I'm exploring now.`

### Section 1: Header
- Heading: `Agentic`
- Intro: `Technical. Short. No philosophy here — that lives in /about.`

### Section 2: Content Blocks
- Block `01` (`△`): `Why Structure Precedes Autonomy`
  - `Autonomous systems need guardrails before they get freedom. Every agentic workflow I build starts with state machines, evaluation gates, and cost containment — not prompt engineering. Structure is what makes autonomy safe.`
- Block `02` (`□`): `Mapping Systems to Agentic Capabilities`
  - `The infrastructure I've built — event-driven comms, CRM orchestration, funnel instrumentation — maps directly to agentic patterns. Multi-step workflows become agent chains. Attribution pipelines become evaluation frameworks. The transition is structural, not conceptual.`
- Block `03` (`○`): `What I'm Exploring Now`
  - `Multi-agent orchestration with evaluation gating. Cost-controlled inference pipelines. Telegram-based agent interfaces. RAG frameworks with hard and soft evals. The goal: agents that can be trusted in production, not just demos.`

---

## Page: `/about`

### Metadata
- Title: `About`
- Description: `Professional arc, philosophy, and the belief behind MyThirdPlace — structure over noise, autonomy with guardrails, and the third place.`

### Section 1: Header
- Heading: `About`

### Section 2: Professional Arc
- Section title: `Professional Arc`
- Timeline labels:
  - `Execution`
  - `Systems`
  - `Orchestration`
  - `Product Bets`
  - `AI Direction`
- Summary paragraph:
  - `Short version: I started executing campaigns, moved into building the systems behind them, then into orchestrating those systems at scale. Now I'm placing product bets and pushing into AI-native infrastructure. No resume copy — just the progression.`

### Section 3: Philosophy
- Pillar `01`: `Structure Over Noise`
  - `Clarity over ambiguity. Instrumented systems over ad-hoc processes. State transitions designed, not discovered. Every system I build starts with the question: what are the states, and what triggers the transitions?`
- Pillar `02`: `Autonomy With Guardrails`
  - `Autonomy is interesting. Chaos is not. Evaluation gates, cost containment, failure boundaries — these are not constraints on autonomy, they're what make it possible. This belief drives every agentic system I build.`
- Pillar `03`: `MyThirdPlace`
  - `Work and home are not enough. My third place is on two wheels and behind a lens — motorcycling and photography are where I reset, see differently, and find clarity. That lived experience led to building MyThirdPlace — a platform for people to find and build their own third places.`

### Section 4: Outside Work
- Heading: `Outside Work`
- Links:
  - `Photography ->` -> `/life`
  - `Riding ->` -> `/life`

---

## Page: `/life`

### Metadata
- Title: `Life`
- Description: `Photography and riding. Just curated identity.`

### Section 1: Header
- Heading: `Life`
- Subtext: `No metaphors. No forced justification. Just curated identity.`

### Section 2: Photography
- Heading: `Photography`
- Placeholder gallery captions:
  - `Street composition`
  - `Architecture detail`
  - `Light study`
  - `Urban geometry`
  - `Portrait`
  - `Night frame`

### Section 3: Divider
- Geometric divider only (no text)

### Section 4: Riding
- Heading: `Riding`
- Image placeholder label: `Riding photo`
- Text: `Two wheels, open roads. No metaphors needed.`

---

## Page: `/contact`

### Metadata
- Title: `Contact`
- Description: `Get in touch with Karan Mandalam — product leadership, consulting, or collaboration on AI-native products and systems.`

### Section 1: Header
- Heading: `Contact`
- Subtext: `Pick a shape. Reach out.`

### Section 2: Shape Contact Links
- `Email` -> `mailto:kmandalam@gmail.com`
- `Twitter` -> `https://twitter.com/pingmepi`
- `LinkedIn` -> `https://linkedin.com/in/mandalam-karan`
- `Instagram` -> `https://instagram.com/theghostinphotographs`

### Section 3: Embedded Form Card
- Card heading: `Or send a message`

#### Nested Form Component Content (`ContactForm`)
- Hero heading: `Let's build something cool.`
- Hero paragraph: `Ready to collaborate on your next project or just want to chat about AI, product strategy, or the best riding routes?`
- Form placeholders:
  - `Name`
  - `Email`
  - `Tell me about your project or idea...`
- Submit button labels:
  - Default: `Send`
  - Submitting: `Sending…`
- Form validation/error/success toast copy:
  - `Please fill out all fields.`
  - `Message sent! I'll get back to you soon.`
  - `Something went wrong. Please try again later.`
- Social block:
  - Intro: `Connect with me on`
  - `LinkedIn` -> `https://www.linkedin.com/in/mandalam-karan/`
  - `Twitter` -> `https://x.com/pingmepi`
  - `GitHub` -> `https://github.com/pingmepi`
  - `Instagram` -> `https://www.instagram.com/pingmepi/`

---

## Page: 404 (Not Found)

### Display Content
- Heading: `404`
- Message: `Oops! Page not found`
- Message: `Redirecting to home in 3 seconds...`
- Button: `Return to Home Now` -> `/`

---

## Non-Page SEO/Schema Content
- Person schema fields:
  - Name: `Karan Mandalam`
  - Job title: `Systems Builder`
  - Description: `I build systems that bring order to chaos. Growth infrastructure, automation, AI workflows, and new product bets.`
  - SameAs links:
    - `https://twitter.com/pingmepi`
    - `https://linkedin.com/in/mandalam-karan`
    - `https://instagram.com/theghostinphotographs`
- Website schema fields:
  - Name: `Karan Mandalam | Systems Builder`
  - URL: `https://karan-profile-zeta.vercel.app`
  - SearchAction target: `https://karan-profile-zeta.vercel.app/search?q={search_term_string}`
