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
