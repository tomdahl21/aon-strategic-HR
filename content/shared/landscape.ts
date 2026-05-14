import type { LandscapeContent } from '@/lib/types'

/**
 * The nine-moment landscape across three HR domains.
 * Shared IP across all account variants. Copy from index.html §03 verbatim.
 */
export const landscape: LandscapeContent = {
  eyebrow: '02 · The Landscape',
  headline: {
    lead: 'Where AI is accelerating HR — from',
    em1: 'strategy',
    mid: 'to',
    em2: 'experience.',
  },
  lede: 'Three domains. Nine moments. Every workforce decision your team makes already sits next to an AI capability that can sharpen it. The question is no longer whether — it is which moments to act on first.',
  columns: [
    {
      ordinal: 'I.',
      title: 'Talent Lifecycle',
      items: [
        {
          name: 'Talent Acquisition',
          description: 'AI-assisted sourcing, screening, and matching at scale.',
        },
        {
          name: 'Onboarding & Enablement',
          description: 'Chatbots, guides, and personalized learning paths.',
        },
        {
          name: 'Learning & Development',
          description: 'Adaptive L&D and predictive skill-gap detection.',
        },
      ],
    },
    {
      ordinal: 'II.',
      title: 'Employee Experience',
      items: [
        {
          name: 'Performance & Engagement',
          description: 'Sentiment tracking and performance insights.',
        },
        {
          name: 'Rewards & Recognition',
          description: 'Comp benchmarking and intelligent recognition systems.',
        },
        {
          name: 'Career & Mobility',
          description: 'AI-enabled career mapping and internal gig marketplaces.',
        },
      ],
    },
    {
      ordinal: 'III.',
      title: 'Strategic HR',
      items: [
        {
          name: 'Workforce Strategy',
          description: 'Predictive workforce planning and dynamic org design.',
        },
        {
          name: 'Offboarding & Alumni',
          description: 'Exit feedback analysis and ongoing alumni engagement.',
        },
        {
          name: 'HR Ops & Compliance',
          description: 'Automated policy, scheduling, and compliance workflows.',
        },
      ],
    },
  ],
}
