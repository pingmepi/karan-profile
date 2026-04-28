# Cross-Model Work Audit Prompt

Paste this into ChatGPT, Gemini, Copilot, or any other model you've been using over the past few months. It will produce a structured inventory of everything you've worked on together — matching the format of the audit I did from your local files.

---

## The Prompt

```
Look back across our entire conversation history — every chat, artifact, code snippet, file, image, and document we've worked on together over the past 6 months (roughly October 2025 to now).

I need a comprehensive work inventory. Go through everything and produce a structured report in YAML. Be exhaustive — I'd rather have too much than miss something.

For EACH distinct project or body of work we touched, create an entry:

---
projects:

  - slug: [kebab-case, e.g. "job-search-agent"]
    name: [project display name]
    status: [active | completed | paused | abandoned | planning]
    timespan: [e.g. "Nov 2025 — Mar 2026"]
    one_liner: [1 sentence — what this project is]
    problem_solved: [what problem it addresses, 1-2 sentences]

    # Everything we actually built or did
    work_done:
      - [concrete deliverable or action, e.g. "Built Razorpay payment integration with idempotent sessions"]
      - [another item]

    # Technical specifics
    tech_stack:
      - [every language, framework, library, service, API involved]

    # Quantified where possible
    impact:
      - [e.g. "+90% registrations", "222 tests passing", "reduced page load by 40%"]

    # Issues we hit and how we resolved them
    issues_encountered:
      - problem: [what went wrong]
        resolution: [how we fixed it]

    # Things we discussed but didn't ship
    unfinished:
      - [feature or task we talked about but didn't complete]

    # Tags from this list ONLY:
    # Martech, AI, CRM, Product Strategy, Automation, Attribution,
    # Product Build, GenAI, Commerce, Infra, Workflow, Scale,
    # Community, Systems, Identity, SaaS Design, UX, Process Design,
    # Agents, Eval, DevOps, Analytics, Payments, Mobile, Voice AI,
    # Design, Content, SEO, Email, Security, Testing, Data
    tags:
      - [tag]

# Skills and tools I used across all projects
skills_inventory:
  - name: [e.g. "Razorpay Integration"]
    projects_used_in: ["the-third-place", "another-project"]
    proficiency: [explored | used | proficient]

# Anything we discussed that wasn't project work
# (career advice, debugging help, learning, research, etc.)
non_project_work:
  - topic: [what we discussed]
    date_approx: [rough date if you can tell]
    summary: [1-2 sentences]
    artifacts: [any files/code/docs produced, or "none"]

# Overall stats
summary:
  total_projects: [number]
  total_conversations: [approximate]
  primary_focus_areas: [top 3-4 themes across all work]
  most_active_project: [which project had the most work]
---

Rules:
- Be exhaustive. Scan every conversation, every artifact, every code block.
- Only include work we ACTUALLY did, not things I just asked about casually.
- If you generated code, documents, or artifacts — mention them specifically.
- issues_encountered should include real bugs, errors, wrong approaches we had to backtrack from.
- unfinished items are important — I need to know what fell through the cracks.
- If you can't determine exact dates, give your best approximation.
- Do NOT fabricate or infer work that didn't happen. If unsure, flag it with "[uncertain]".
- impact must be quantified wherever possible. If you can't quantify, describe the before/after state.
- tech_stack should name actual tools (e.g. "Razorpay" not "payment gateway", "Supabase" not "database").
```

---

## After You Get the Output

Save each model's output as:
- `work-audit-chatgpt.yaml`
- `work-audit-gemini.yaml`
- `work-audit-copilot.yaml`
- etc.

Drop them on your Desktop. Next time we work together, tell me to "collate the work audits" and I'll merge everything with what I already know from your local repos into a single unified inventory — and update your portfolio site accordingly.
