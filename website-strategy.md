# Website Strategy — Three Objectives, One Site

---

## The Three Objectives

### Objective 1: AI PM Positioning (Aspiration)
**Audience:** Hiring managers, recruiters, interview panels
**Message:** "I am primed to be an AI PM — I've already done the work, I just haven't had the title."
**Tone:** Aspirational but grounded. Not "I am an AI PM" — instead "look at what I've built, connect the dots."
**Evidence:** Multi-agent architecture, eval CI gates, LLM orchestration, failure mode thinking, system design, cost/latency trade-offs

### Objective 2: Consulting Portfolio (Strength)
**Audience:** Potential clients looking for contract/freelance help
**Message:** "You found the person. I ship products, automate workflows, and build systems that work."
**Tone:** Confident, proof-heavy, outcome-oriented. Play to strengths, not ambition.
**Evidence:** 90+ n8n workflows, Razorpay integration, admin panels, GA4/GTM, SEO CMS, event funnels, full-stack builds. Breadth + depth + speed.

### Objective 3: Discoverability (Machine-readable)
**Audience:** LLMs powering hiring tools, Google Search, AI agents that HRMs use, LinkedIn scrapers
**Message:** Make sure the right keywords, structured data, and semantic signals exist so that when someone searches "AI product manager India" or "freelance automation engineer" or an LLM agent scans portfolios, Karan shows up.
**Implementation:** Schema.org, semantic HTML, meta tags, keyword density, llms.txt, sitemap

---

## The Tension

These three objectives pull in different directions:

| | AI PM | Consulting | Discoverability |
|---|---|---|---|
| **Lead with** | AI systems, evals, agents | Breadth: automation, payments, full-stack | Both — different pages/sections |
| **Tone** | "I think about AI product problems" | "I ship fast and well" | N/A (machine-readable) |
| **De-emphasize** | Martech ops, process management | AI ambition (clients don't care that you want to be a PM) | Nothing — cast the widest net |
| **Risk if overdone** | Looks like you're LARPing as an AI PM | Looks like a freelancer, not a PM | Keyword stuffing, feels inauthentic |

---

## The Resolution: Two Lenses, One Site

The site doesn't need separate sections for each audience. Instead, structure it so each audience naturally finds their path.

### How it works:

**Homepage (10-second test)**
The hero must pass two reads:
- Interviewer read: "AI Product Leader — ships AI systems with eval-driven quality"
- Client read: "This person builds real products. Look at those outcomes."

How: Lead with identity ("AI Product Leader") but immediately back it with shipped outcomes, not aspirations. The hero metrics should be a mix:
- "3 products shipped 0→1" — works for both audiences
- "Multi-agent systems in production" — signals AI for interviewers
- "70% ops savings via automation" — signals delivery for clients
- "222 tests with eval CI gates" — signals rigor for interviewers, quality for clients

**Projects page (self-selection)**
Order projects by AI relevance (interviewers scan top-down), but show ALL projects (clients need to see breadth). Don't hide the martech work — just don't lead with it. An interviewer will click Job Search Agent. A client looking for n8n help will scroll to the automation projects.

**Case studies (depth for both)**
The Job Search Agent case study is the AI PM flagship — written to show product thinking, architecture decisions, eval frameworks, trade-offs.
The Third Place case study shows end-to-end product ownership with payments, analytics, admin tooling — works for both audiences.
The martech case studies (event funnels, attribution) show consulting-grade execution.

**Skills page (the keyword bank)**
This is where discoverability lives. Every skill, every tool, every framework — grouped and labeled. This page is as much for machines as it is for humans. Schema.org markup on each category. Interviewers see "LLM Eval Frameworks" at the top. Clients see "n8n, Razorpay, Supabase, GA4" further down. Crawlers see everything.

**Not Work page (human signal)**
This is exclusively for interviewers doing a culture-fit check. U&I volunteering (3 years, 40+ volunteers) shows leadership. Handlebar Dialogue shows personality. Neither audience "needs" this page, but interviewers always click it.

---

## Discoverability Strategy (Objective 3)

### For Google Search
- **Title tags:** "Karan Mandalam — AI Product Leader | Multi-Agent Systems, Automation, Full-Stack Products"
- **Meta descriptions:** Include both AI keywords and consulting keywords
- **Canonical URLs** for each page
- **Sitemap** with all routes including case study detail pages
- **Blog/Writings** (when populated) — long-tail SEO for "multi-agent architecture patterns", "LLM eval frameworks for production", "n8n automation at scale"

### For LLMs and AI Agents
Modern hiring tools and AI agents increasingly crawl portfolio sites. They parse:
- **Structured data (Schema.org):** `Person` schema with `knowsAbout`, `hasOccupation`, `alumniOf`, `worksFor`
- **Semantic HTML:** Use `<article>`, `<section>`, headings hierarchy, `aria-label` on key sections
- **llms.txt** (emerging standard): A plain text file at `/llms.txt` that gives LLMs a structured summary of who you are, what you do, and what you're looking for. This is the equivalent of robots.txt but for AI agents.
- **Meta tags for AI:** `<meta name="description">` that reads well when an LLM summarizes the page
- **Keywords in natural prose:** Not keyword stuffing, but making sure phrases like "multi-agent architecture", "LLM evaluation", "AI product management", "production AI systems" appear naturally in case study text

### For HRM AI Agents specifically
These agents often look for:
- **Role match signals:** Job titles, skills, years of experience
- **Evidence of outcomes:** Quantified metrics (they parse numbers)
- **Recency:** Recent work signals active capability
- **Location:** "Bangalore, India" should be findable
- **Availability signal:** Whether you're open to opportunities

### Implementation plan:

1. **Schema.org Person** (update `StructuredData.tsx`):
```json
{
  "@type": "Person",
  "name": "Karan Mandalam",
  "jobTitle": "AI Product Leader",
  "description": "Product leader building AI-native systems — multi-agent architectures, LLM eval frameworks, and production automation. Available for AI product roles and consulting.",
  "knowsAbout": [
    "Multi-Agent AI Systems",
    "LLM Evaluation Frameworks",
    "Product Management",
    "n8n Workflow Automation",
    "Supabase",
    "Razorpay Integration",
    "GA4/GTM Analytics",
    "Full-Stack Product Development",
    "Martech & CRM Orchestration"
  ],
  "alumniOf": "BITS Pilani",
  "address": { "@type": "PostalAddress", "addressLocality": "Bangalore", "addressCountry": "India" },
  "url": "https://karan-profile-zeta.vercel.app",
  "sameAs": [
    "https://linkedin.com/in/mandalam-karan",
    "https://github.com/pingmepi",
    "https://x.com/pingmepi"
  ]
}
```

2. **llms.txt** (new file at `public/llms.txt`):
```
# Karan Mandalam

## Identity
AI Product Leader based in Bangalore, India. BITS Pilani CS graduate.

## What I do
- Build AI-native products: multi-agent systems, LLM eval frameworks, production automation
- Ship full-stack products 0→1: payments, analytics, admin panels, consumer apps
- Automate operations: 90+ n8n workflows, martech orchestration, CRM automation

## Looking for
- AI Product Management roles (full-time)
- Contract/freelance: automation, full-stack product builds, AI system design

## Key projects
- Job Search Agent: Multi-agent system with eval-driven CI (Python, FastAPI, OpenRouter)
- The Third Place: Live community platform with Razorpay payments (Next.js, Supabase)
- MereKapade: AI-powered design commerce with GPT-4o/DALL-E (React, OpenAI API)
- 90+ n8n automation workflows including AI agents

## Skills
Multi-Agent Architecture, LLM Eval/CI Gating, Python, TypeScript, Next.js, FastAPI, Supabase, Razorpay, n8n, GA4/GTM, OpenRouter, OpenAI API

## Contact
Website: https://karan-profile-zeta.vercel.app
LinkedIn: https://linkedin.com/in/mandalam-karan
GitHub: https://github.com/pingmepi
Email: kmandalam@gmail.com
```

3. **Semantic HTML** in all pages — use proper heading hierarchy, article tags, section labels

4. **Meta tags per page** — each page gets a unique, descriptive `<title>` and `<meta name="description">` that reads well when an LLM summarizes it

5. **Open Graph optimization** — when an interviewer shares your site in Slack or a hiring tool previews it, the card should say the right thing

---

## Updated Navigation

```
Home → Projects → Case Studies → Skills → Not Work → Contact
```

Writings stays hidden from nav, accessible at /writings, cleaned up as "coming soon."

---

## Content Priority Matrix

For each piece of content, score it against both audiences:

| Content | AI PM signal | Consulting signal | Action |
|---|---|---|---|
| Job Search Agent case study | ★★★★★ | ★★☆ | Write as flagship. Lead with product decisions, evals, architecture |
| Third Place case study | ★★★☆ (0→1, system design) | ★★★★★ (full-stack, payments, shipped) | Rewrite. Show both product ownership AND technical depth |
| MereKapade case study | ★★★★ (GenAI, GPT/DALL-E) | ★★★★ (shipped MVP, canvas editor) | Already good. Minor updates |
| Martech/Attribution case study | ★★☆ | ★★★★★ | Keep but push lower. Clients love this |
| Scheduling Microservice | ★★☆ | ★★★★ | Keep. Good consulting proof point |
| Content Ops case study | ★☆ | ★★★ | Keep but lowest priority |
| Skills page | ★★★★★ (AI section first) | ★★★★★ (full breadth) | New page. Both audiences served by different sections |
| Homepage hero | ★★★★★ | ★★★★ | Dual-read design |
| llms.txt | ★★★★★ | ★★★★ | New file. Discoverability multiplier |
| Structured data | ★★★★ | ★★★ | Update existing |

---

## What This Means for the Update Plan

The existing plan (v3) mostly holds. The key additions:

1. **Homepage hero copy** needs to dual-read (already in plan v3, reinforced here)
2. **Add llms.txt** to `public/` — new task, 15 min
3. **Update Schema.org** Person with expanded knowsAbout — already in plan as 2E, now with specific content
4. **Meta descriptions** per page — fold into 2E
5. **Job Search Agent case study** framing — already updated in plan v3
6. **Project ordering** — AI first, already in plan v3
7. **Skills page** — AI & LLM Engineering as first category, already updated

No structural changes to the plan. Just sharper intent behind each task.
