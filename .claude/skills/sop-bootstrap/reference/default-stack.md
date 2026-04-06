# Default Tech Stack

Not definitive. Adapt per project. Document the rationale when you deviate.

## Core Stack

| Layer | Default | Why |
|-------|---------|-----|
| **AI/Coding** | Claude | Best reasoning, best code generation |
| **Frontend** | Astro, React, or vanilla | Depends on interactivity needs |
| **Backend** | Supabase | Postgres + Auth + Storage + Realtime in one |
| **Auth** | Clerk | Best DX, handles edge cases well |
| **Deployment** | Vercel | Zero-config, preview deploys, edge functions |
| **Domain** | Namecheap | Cheap, reliable, no upsells |
| **DNS** | Cloudflare | Free, fast, good security defaults |
| **Version Control** | GitHub | Industry standard, best integrations |

## Payments and Commerce

| Layer | Default | Why |
|-------|---------|-----|
| **Payments** | Stripe | Best API, best docs, handles complexity |
| **Subscriptions** | Stripe Billing | Native integration |

## Observability

| Layer | Default | Why |
|-------|---------|-----|
| **Analytics** | PostHog | Product analytics + session replay + feature flags |
| **Error Tracking** | Sentry | Best error context, good integrations |
| **Logging** | Vercel Logs / Axiom | Depends on scale |

## Infrastructure

| Layer | Default | Why |
|-------|---------|-----|
| **Email** | Resend | Simple API, good deliverability, React Email support |
| **Redis/Cache** | Upstash | Serverless Redis, pay-per-use |
| **Vector DB** | Pinecone | Best for AI/embeddings workloads |
| **File Storage** | Supabase Storage or Cloudflare R2 | Depends on existing stack |

## When to Deviate

**Use Firebase instead of Supabase when:**
- Team already knows Firebase
- Need Firestore's real-time sync model
- Google Cloud is already the platform

**Use Auth.js instead of Clerk when:**
- Need full control over auth flow
- Budget is extremely tight
- Self-hosting is required

**Use Hono or Express instead of Vercel when:**
- Need long-running processes
- Need WebSockets
- Deploying to non-Vercel infrastructure

**Use Plausible instead of PostHog when:**
- Only need basic analytics
- Privacy is paramount
- Don't need session replay or feature flags

## MCPs to Consider

Based on stack, install relevant MCPs:

| Stack Component | MCP |
|-----------------|-----|
| Supabase | Supabase MCP |
| Playwright | Playwright MCP |
| GitHub | GitHub MCP |
| General docs | Context7 |

Note: If a dedicated MCP exists for a library, prefer it over Context7 for that library.
