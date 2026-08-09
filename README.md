# Design QA with Agents — workshop repo

A small landing page built with [shadcn/ui](https://ui.shadcn.com), with a few
UI inconsistencies seeded in on purpose. During the workshop you will:

1. Use Claude Code to find the inconsistencies by hand
2. Build a QA agent that checks for them automatically
3. Fix the landing page and open a pull request
4. Watch your own agent check your own fix, live

## Getting started

This repo is set up to run in a GitHub Codespace with no local install
required — open it in a Codespace and everything (Node, dependencies, Claude
Code) will already be there.

\`\`\`bash
npm install   # if not already run by the Codespace setup
npm run dev   # starts the landing page at http://localhost:5173
\`\`\`

## What's in here

- \`src/App.tsx\` — the landing page
- \`src/components/ui/\` — the design system components (Button, Card, Badge)
- \`manifest.json\` — the source of truth for what counts as "on-system"
- \`design-qa-agent.js\` — the stub QA agent you'll build on
- \`.github/workflows/design-qa.yml\` — runs the agent on every pull request

## Setup you'll need before the session

- A free GitHub account, with this repo forked
- A free Anthropic API key from platform.claude.com, added as a repo secret named \`ANTHROPIC_API_KEY\` on your fork

Full instructions are in the pre-session setup email.
