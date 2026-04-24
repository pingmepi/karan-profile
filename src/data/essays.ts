export interface Essay {
    slug: string;
    title: string;
    summary: string;
    date: string; // ISO format
    readingTime: string;
    tags: string[];
    content: string; // Markdown-style content, rendered as paragraphs split by \n\n
}

export const essays: Essay[] = [
    {
        slug: "crm-integrations-break",
        title: "CRM Tools Don't Break. Their Integrations Do.",
        summary:
            "Every company I've worked with thinks their CRM is broken. It almost never is. The real problem is five systems disagreeing about what a lead is.",
        date: "2026-04-20",
        readingTime: "7 min read",
        tags: ["MarTech", "Consulting", "Systems"],
        content: `A client once told me their HubSpot was &ldquo;broken.&rdquo;

Leads were disappearing. Reports didn&apos;t match. Sales said marketing was sending garbage; marketing said sales wasn&apos;t following up. They&apos;d already hired two agencies and migrated to HubSpot from a previous CRM, thinking the tool was the problem.

I spent a week tracing what actually happened to a single lead.

Here&apos;s what I found: a user filled out a form. GA4 tracked it. The form submission fired a webhook to Zapier, which wrote to HubSpot. But the webhook was also hitting WebEngage directly with a different user ID. Meanwhile, the sales team was manually exporting from HubSpot into a Google Sheet because the HubSpot reports didn&apos;t show the data they wanted. WhatsApp replies came through a separate tool that never talked to HubSpot. And the ad platforms were pushing conversions back to GA4 but not to the CRM.

The CRM wasn&apos;t broken. The CRM was working perfectly.

Five systems disagreed about what a lead was. That&apos;s the real story.

## The diagnosis pattern

After enough of these, I learned the pattern. When someone says &ldquo;the CRM is broken,&rdquo; they usually mean one of these things:

- **Data disagreement** — Multiple sources of truth for the same entity. The lead exists in HubSpot, but also in the Zoom registration list, also in the WhatsApp tool, also in a marketer&apos;s Airtable. Each has different fields. Nobody knows which is right.
- **Event leakage** — Events fire correctly in one system and get lost on the way to another. GA4 tracks a conversion, but the CRM never sees it because the webhook failed silently three weeks ago.
- **Taxonomy drift** — UTM parameters are inconsistent across campaigns. &ldquo;meta_ads&rdquo; in one, &ldquo;Facebook Ads&rdquo; in another, &ldquo;fbads&rdquo; in a third. Same source, three different dashboard rows.
- **Identity fragmentation** — The same user has five different IDs across five systems. There&apos;s no key that joins them. Attribution is impossible.
- **Workflow assumption** — An automation built six months ago assumes a state that no longer exists. The owner left. Nobody remembers why it fires.

Every single one of these is an integration problem. Not a tool problem.

## Why clients keep buying new CRMs

The pitch is compelling: &ldquo;Our current CRM is a mess. Let&apos;s switch to [better CRM].&rdquo;

Three months later, the new CRM is also a mess. Sometimes worse, because you&apos;ve now got legacy data in two places and half the integrations weren&apos;t ported.

I&apos;ve watched this happen four times. The pattern is so consistent I can predict the timeline. Migration takes longer than estimated. Half the automations don&apos;t come across cleanly. The new CRM has different object models so your reports need rebuilding. Six months in, your team is frustrated again — and now the blame has moved to the new vendor.

The CRM was never the problem. The *spaces between* the systems were the problem.

## What actually works

When I rebuilt the MarTech stack at a $30M ARR ed-tech, we didn&apos;t migrate CRMs. We fixed the integrations. Here&apos;s what that looked like:

**Step 1: Draw the map.**
Every system. Every data flow between them. Every webhook, every manual export, every automation. This takes a full day and looks terrifying when you&apos;re done. Good. That&apos;s the actual system.

**Step 2: Pick a source of truth for each entity.**
The lead lives in the CRM. The event data lives in PostgreSQL. The user session lives in GA4. Pick one system per entity and enforce it. Anything that writes to a different system for that entity gets rewired or killed.

**Step 3: Enforce a single taxonomy.**
UTM parameters, event names, field names — one spec, enforced at the edges. Link builders with validation. Event tracking wrapped in a schema. Tools like Segment or a custom n8n layer can normalize inputs before they hit the CRM.

**Step 4: Monitor the handoffs, not the tools.**
The CRM will tell you it&apos;s healthy. GA4 will tell you it&apos;s healthy. Each tool passes its own health checks. What you need to monitor is the *seams* — the places where data moves from one system to another. Log every handoff. Alert on silent failures.

**Step 5: Make the broken integrations visible.**
The most insidious failures are the ones nobody sees. A webhook that&apos;s been failing 10% of the time for six months. A Zapier zap that broke when an API changed. Dashboards that silently drop rows. If you can&apos;t see failures, you&apos;ll accept them.

## The harder truth

Fixing integrations is unsexy work. It doesn&apos;t get PRs. It doesn&apos;t get launch announcements. It doesn&apos;t come with a vendor demo and a champagne toast. It&apos;s just: sit with the system, trace every data flow, find the leaks, plug them.

But it&apos;s what actually moves the numbers.

At that ed-tech, we didn&apos;t change any CRM. We didn&apos;t buy any new tool. We just fixed the seams. Lead quality went up 20%. Churn went down 30%. Reports started matching reality. The sales team stopped blaming marketing. Marketing stopped blaming sales. Because the data finally agreed.

## If you&apos;re reading this as a buyer

Before you migrate your CRM, do this:

1. Ask your team: &ldquo;Where do we disagree about the data?&rdquo; Write down every answer.
2. For each disagreement, find the two systems that disagree. Trace the path between them.
3. You&apos;ll find the real problem in about 80% of cases. It won&apos;t be the CRM.

The other 20% of the time, the CRM really is the problem. Usually because you outgrew it — your object model is now more complex than the tool supports. That&apos;s a real migration case.

But the first 80% don&apos;t need a new tool. They need someone who will sit with the system, trace every integration, and fix the seams.

That&apos;s most of what I do. The tool isn&apos;t broken. The integrations are.`,
    },
    {
        slug: "managing-volunteers-at-22",
        title: "What I Learned Managing 40+ Volunteers at 22",
        summary:
            "I took over a brand-new U&I Trust center with zero playbook and a team of volunteers I didn't pick. The lessons held up for every team I've managed since.",
        date: "2026-04-22",
        readingTime: "6 min read",
        tags: ["Leadership", "Personal", "Management"],
        content: `In my second year of college, I walked into a small room above a community space in Bangalore on a Saturday morning. Twelve kids, ages seven to twelve, waiting for me to teach them English.

I had no lesson plan. I had never taught anyone anything. The person running the center — U&I Trust, an organization working with underprivileged children — had given me thirty minutes of orientation and a textbook.

That was my start. A year later, I was running a new center from scratch with 40+ volunteers under me. None of them were people I&apos;d picked.

## What nobody tells you about leading volunteers

You can&apos;t pay them. You can&apos;t fire them. You can&apos;t promote them. If they have a bad week, they just don&apos;t show up — and there&apos;s no HR process to invoke.

Every management lever you&apos;re taught about — compensation, performance reviews, org structure — is gone. What&apos;s left is the only thing that actually works: people show up when the work matters and the environment respects them.

That was the education.

## Lesson 1: Structure is kind, not controlling.

My first instinct was to be laid-back. These were volunteers — I didn&apos;t want to be a taskmaster. So I kept things loose. Showed up, taught, went home.

The center fell apart in six weeks.

Volunteers didn&apos;t know what to prepare. Kids got different lessons on different weeks. Attendance — both volunteer and student — dropped. Everyone was trying, nobody was aligned.

What fixed it: SOPs. Weekly lesson plans. A curriculum calendar that mapped what we&apos;d teach for the next three months. A WhatsApp group where volunteers shared what worked. A Saturday prep call. A Sunday debrief.

Structure isn&apos;t the opposite of warmth. Structure is how you respect people&apos;s time. A volunteer who drives 45 minutes to teach wants to know their effort lands on something real. Ambiguity wastes their weekend more than any meeting would.

I carried this into every team I&apos;ve run since. &ldquo;We&apos;re casual&rdquo; usually means &ldquo;we&apos;re disorganized&rdquo; — and the disorganization costs your best people first.

## Lesson 2: The best management is removing obstacles.

The kids were eager. The volunteers were capable. My job wasn&apos;t to do the teaching — my job was to make sure nothing got in the way of it.

So I spent most of my time on logistics. Were the books stocked? Were the markers dry? Did every volunteer have a lesson plan they understood? If a kid was falling behind, did the volunteer have a way to flag it?

This sounds small. It isn&apos;t. When people show up ready to do their best work, the manager&apos;s job is to make that easy. Every time I failed — a missing textbook, an unclear plan, a scheduling conflict — I saw the effect immediately. Volunteers got frustrated. Kids got restless. The energy in the room shifted.

I&apos;ve applied this in every PM and leadership role since. The best thing I can do is remove the thing blocking someone else&apos;s momentum. Most of the time, that&apos;s what actually moves the work.

## Lesson 3: Data makes the intangible real.

Teaching feels intangible. Did the lesson land? Did the kid actually learn? It&apos;s hard to know.

I started tracking everything. Attendance per kid, per volunteer. Lesson topics covered. Concept retention checked week-over-week. Student progress mapped against curriculum milestones.

Volunteers resisted initially. &ldquo;This is a weekend thing. Why are we filling in spreadsheets?&rdquo;

Because three months later, we could show them: &ldquo;Riya was at a second-grade level in September. In December she&apos;s reading third-grade texts. *You did that.*&rdquo;

Volunteers stayed longer when they could see their impact. Fundraising improved because donors could see outcomes. New volunteers trained faster because we knew what worked and what didn&apos;t.

Data wasn&apos;t bureaucracy. It was how we made the invisible work visible. I still believe this is the single most important thing a team lead can do — especially in work that feels soft or qualitative. Instrument it. Measure it. Show people their impact.

## Lesson 4: The job is the people, not the output.

50% of the volunteers selected to lead the *next* year&apos;s centers came from my team. That&apos;s the statistic I&apos;m proudest of.

Because the real work wasn&apos;t the English lessons. The real work was building people who could do the work without me. The kids got teaching. But the volunteers got mentorship, responsibility, a first taste of leadership — and many of them took that into the rest of their lives.

A manager who ships without developing the people around them is extracting value. A manager who develops people while shipping is compounding it. The second one is rarer, harder, and dramatically more impactful over time.

I think about this every time I hire, mentor, or run a team. The output matters. But the people you build are the thing that outlasts the output.

## What it adds up to

Three years. 40+ volunteers. Hundreds of kids. One center built from scratch.

I was twenty-two. I had no idea what I was doing. But the work forced me to figure out management before I had any title that gave me management authority. I had to earn the room every Saturday, or nobody would show up next week.

That&apos;s the best apprenticeship I could have asked for. Every team I&apos;ve run since — ed-tech program managers, content teams, automation engineers, cross-functional product squads — runs on these four things:

1. Structure respects people&apos;s time.
2. Remove obstacles so others can do their best work.
3. Make the intangible visible with data.
4. Build people alongside shipping the work.

The tools change. The stakes change. The core of it doesn&apos;t.`,
    },
    {
        slug: "structure-over-noise",
        title: "Structure Over Noise: A Framework for Debugging Any Broken System",
        summary:
            "Most systems don't break dramatically. They drift. Here's the five-step framework I use to find what actually went wrong — whether it's a CRM, an AI agent, or a team.",
        date: "2026-04-25",
        readingTime: "8 min read",
        tags: ["Systems", "Debugging", "Frameworks"],
        content: `A system never breaks for the reason you think it does.

You see the symptom — the dashboard is wrong, the leads are disappearing, the feature is slow, the team is missing deadlines. You form a hypothesis. You chase it. Sometimes you&apos;re right. More often you find a layer underneath, and another layer under that, until you&apos;re five hops away from where you started and the real problem is something nobody wanted to look at.

I&apos;ve debugged enough systems — payment flows, CRM pipelines, AI agents, content ops, even volunteer teams — to know the pattern is always the same. The systems are different. The framework for finding what&apos;s actually wrong is the same.

Here&apos;s the framework I use.

## Step 1: Make it observable before you touch it.

The first instinct is usually &ldquo;let me try fixing this.&rdquo; Don&apos;t.

Before you change anything, make sure you can *see* the system. That means logs, traces, metrics — whatever the equivalent is for the domain. For a CRM, it&apos;s a list of every webhook fire, every data handoff, every field change. For an AI agent, it&apos;s prompts, responses, latencies, costs. For a team, it&apos;s the actual work tracker, not what people tell you in standups.

If you can&apos;t observe the system, you can&apos;t debug it. You can only guess.

I&apos;ve seen people spend weeks &ldquo;fixing&rdquo; a CRM pipeline by tweaking automations — when they had no logs showing what the automations were actually doing. They were pattern-matching on symptoms and shipping guesses. Sometimes the symptoms went away, which felt like success. But the underlying problem was untouched, and it surfaced again three months later in a different form.

The rule: if the system isn&apos;t observable, step one is to make it observable. Don&apos;t skip this. It feels slow. It saves you weeks.

## Step 2: Trace a single example end-to-end.

Once you have observability, pick one example of the bug. One lead that disappeared. One API call that timed out. One agent response that went off the rails. One missed deadline.

Trace it all the way through the system. From origin to wherever it ended up wrong.

Most people skip this and go straight to aggregates. &ldquo;Lead drop-off is 15% higher this month&rdquo; is aggregate. &ldquo;Lead ID 47283 entered the form at 10:22am, fired the Zapier webhook at 10:22:03, hit HubSpot at 10:22:05 but never created a contact record because the email validation failed silently&rdquo; is specific.

You can&apos;t fix a system from aggregates. You have to go specific first.

I learned this debugging Disney&apos;s booking system in my first job. The aggregate said &ldquo;bookings are down.&rdquo; The specific trace showed one team had set holiday dates without coordinating with the hotel team who hadn&apos;t released rooms. A single trace uncovered the mismatch. No amount of looking at aggregate booking graphs would have shown it.

## Step 3: Identify the handoff, not the tool.

Once you&apos;ve traced one example, look at where it actually went wrong. In almost every case, it&apos;s not inside a single component. It&apos;s at the *handoff* between two components.

The CRM didn&apos;t break. The webhook from the form to the CRM did.
The AI agent didn&apos;t hallucinate. The prompt concatenation silently dropped a context field.
The team didn&apos;t miss deadlines. Tickets were being closed before the QA handoff completed.

Components are usually resilient. They get tested, monitored, owned. The seams between components are where ownership is fuzzy and failures hide. When you find the seam, you&apos;ve usually found the problem.

This is why &ldquo;let&apos;s switch CRMs&rdquo; almost never works. You&apos;re replacing the component, not fixing the seam.

## Step 4: Ask &ldquo;who owns this?&rdquo;

Every seam needs an owner. If you find a broken handoff and nobody can tell you who&apos;s responsible for it, you&apos;ve just found the real problem.

Orphaned integrations are the most common source of drift. Someone built them two years ago. That person left. The tool got renamed. The webhook URL changed. Nobody noticed, because nobody owned it.

The fix isn&apos;t always technical. Sometimes it&apos;s just assigning ownership and logging it somewhere everyone can find. The integration itself doesn&apos;t need to change — someone just needs to know it exists and check on it.

This applies to team systems too. A project drifts not because someone&apos;s doing bad work, but because nobody owns the handoff between two people. Design throws work over the wall to engineering. QA throws work over the wall back to design. Everyone&apos;s doing their part, and the seam rots.

## Step 5: Fix forward, not back.

Once you&apos;ve found the broken handoff and assigned ownership, the final question is: how do I make sure this specific failure can never happen again?

Not &ldquo;how do I patch this instance.&rdquo; How do I make the *class* of failure impossible going forward.

For a CRM integration: add monitoring on the webhook. Alert on silent failures. Write a retry policy. Move the critical path off the flaky webhook entirely.

For an AI agent: add an eval that fails CI if the specific failure recurs. Make the guardrail architectural, not prompt-level.

For a team: turn the handoff into an explicit artifact — a checklist, a template, a specific sign-off step. Remove the ambiguity that allowed the drift.

The patch gets you back to working. The fix forward prevents the next drift. Always do both.

## The deeper pattern

The framework is:

1. Make it observable.
2. Trace a single example end-to-end.
3. Find the broken handoff.
4. Assign ownership.
5. Fix forward so the class of failure can&apos;t recur.

What&apos;s actually underneath this framework is one belief: **systems drift toward noise when nobody is specifically watching the seams.**

This is true for software. It&apos;s true for processes. It&apos;s true for teams. The components are usually fine. The *spaces between* the components are where attention goes to die.

The job of a systems thinker — a PM, an engineer, a team lead — is to pay attention to the seams. To make them visible. To own them or assign them. To fix forward when they break.

Do that, and most of the problems you&apos;re told about were never component problems in the first place. They were structure problems. And structure is something you can actually change.`,
    },
    {
        slug: "eval-gates-before-agents",
        title: "Why I Built the Eval Gates Before I Built the Agents",
        summary:
            "Building AI systems without quality gates is shipping a product without a return policy. Here's why I write the evals first — and why it changes what gets built.",
        date: "2026-04-18",
        readingTime: "6 min read",
        tags: ["AI", "Product", "Evals"],
        content: `The first version of the Job Search Agent didn't have any agents.

It had a test suite. Twenty-two tests checking things I wasn't sure an LLM could even do yet: Does the output mention skills I actually have? Is the resume still on one page? Did it break the LaTeX compiler? Is the cost under my budget?

The tests failed. All of them. Because there was no code.

That was the point.

## The problem with "just try it and see"

Most AI projects I've seen start the same way. Someone has an idea, spins up a prompt, pipes it into GPT-4, and ships a demo. It works. They show it off. Everyone's impressed.

Then they try to productize it.

Suddenly the output drifts. Edge cases break things. Cost explodes. Users start seeing hallucinated claims — and now you've got a PR crisis on your hands because your resume generator invented experience at Google.

The version that shipped in the demo is not the version that survives contact with users. Not because the model got worse. Because the *constraints* got real.

## Evals aren't overhead. They're the product spec.

When I sat down to build the Job Search Agent, I knew the failure modes were worse than the feature list. If it invented a skill, that's not a bug — that's a reputation-destroying lie on someone's resume. If it took 90 seconds to generate a pack, users wouldn't wait. If it cost $2 per application, the economics wouldn't work.

So I wrote the eval framework first:

- **Compile rate** — Does the LaTeX actually produce a valid PDF? Non-negotiable.
- **Forbidden claims** — Does the resume mention skills or companies the user didn't have? Instant fail.
- **Edit region violations** — Did the LLM mutate content outside designated sections? Architecture-level enforcement.
- **Cost per application** — What's the OpenRouter spend? Budget-capped.
- **Latency** — Under 30 seconds end-to-end, or it's broken.

Each of these is a quality gate. Each one was wired into CI before the first agent prompt was written.

## Why this changes what gets built

When you write evals first, the architecture decisions stop being "what's cool?" and start being "what passes the gates?"

I wanted to use a single GPT-4 pass to rewrite the whole resume. The forbidden-claims eval said no. Too easy to hallucinate. So I split it: a Planner Agent extracts requirements, an Executor Agent only mutates pre-designated editable regions, and a Profile Agent maintains ground truth.

That wasn't a design choice I made on a whiteboard. The eval framework forced it.

I wanted to use the most expensive model for everything. The cost eval said no. So I routed: cheap models for parsing, expensive ones for mutation, caching everywhere.

The evals weren't constraints on the product. They *were* the product.

## What this means for AI PMs

If you're building an AI feature and someone asks "how will you know if this is working?" — and your answer is "we'll iterate based on user feedback" — you don't have a product. You have a demo with a feedback form.

Real AI products have:

1. **A definition of bad output.** Specific, measurable, testable.
2. **A gate that prevents bad output from shipping.** CI, preflight checks, confidence thresholds — something enforced.
3. **A budget for when the gate fires.** Every eval has a cost. Know what you'll spend to hold the line.

Without these, you're not shipping an AI product. You're shipping a dice roll with marketing.

## The uncomfortable part

Here's what nobody tells you about eval-driven AI development:

**Most of your time isn't building agents. It's building the harness around them.**

The agents themselves — the prompts, the orchestration — took maybe a third of the total time. The other two-thirds was: writing test fixtures, defining failure taxonomies, tuning thresholds, handling edge cases the evals exposed.

Which feels wrong. Shouldn't AI be making us faster?

It does — at generating the first attempt. But the first attempt was never the hard part. The hard part is going from "works in a demo" to "works for 10,000 users across 400 edge cases without a single hallucinated claim."

That's not magic. That's engineering. And it starts with the evals.

## Start here

If you're building anything AI-powered:

1. Write down what "bad" looks like — with examples.
2. Encode that into a test that can run automatically.
3. Set a gate that fails the build if the test fails.
4. *Then* build the agent.

You'll end up with less than you planned. You'll ship later than you wanted. The product will be smaller, more focused, more honest about what it can and can't do.

It will also actually work.`,
    },
];

export function getEssayBySlug(slug: string): Essay | undefined {
    return essays.find((e) => e.slug === slug);
}

export function getAllEssaySlugs(): string[] {
    return essays.map((e) => e.slug);
}
