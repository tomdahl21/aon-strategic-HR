import type { FoundationContent } from '@/lib/types'

/**
 * Data Readiness for AI as a foundational scene — the work underneath
 * the operating-model conversation. Source: Slalom Perspective §7 + §10.
 */
export const foundations: FoundationContent = {
  eyebrow: '09 · The Foundation',
  headline: {
    lead: 'AI ambition stalls without data foundations that',
    em1: 'hold.',
    mid: '',
    em2: '',
  },
  lede: 'Before the operating model can run on AI, the data underneath has to be fit for it. This is the foundational work — assess, design, roadmap — that makes everything above the line possible.',
  phases: [
    {
      ordinal: '01',
      name: 'Assess & Baseline',
      description:
        'Diagnostic on the current data landscape and technical readiness. Map high-priority AI use cases to the foundational data capabilities they actually depend on.',
    },
    {
      ordinal: '02',
      name: 'Design AI-Ready Data Foundation',
      description:
        'Future-state architecture and governance. A scalable technical framework with compliance guardrails — optimized for AI integration and data trust.',
    },
    {
      ordinal: '03',
      name: 'Roadmap & Enablement',
      description:
        'A prioritized 24-month roadmap and the operating model to support it. Strategic execution and operational scaling that turns the foundation into value.',
    },
  ],
  whenLabel: '— When this offering is in play',
  whenItems: [
    {
      lead: 'AI is a priority',
      body: 'but data foundations are unclear or uneven.',
    },
    {
      lead: 'GenAI use cases',
      body: 'are blocked by data access, trust, or architecture gaps.',
    },
    {
      lead: 'Leaders need to sequence investments',
      body: 'before scaling beyond pilots.',
    },
    {
      lead: 'Multiple teams are building AI',
      body: 'without shared data standards or governance.',
    },
  ],
  whenNotLabel: '— When it is not the right fit',
  whenNotItems: [
    {
      lead: 'Foundations are already enterprise-grade',
      body: 'and explicitly AI-ready.',
    },
    {
      lead: 'The need is execution',
      body: 'of a single, well-scoped AI use case.',
    },
    {
      lead: 'The focus is model selection or app build',
      body: '— not data enablement.',
    },
    {
      lead: 'Governance, architecture, and ownership',
      body: 'are already established.',
    },
  ],
}
