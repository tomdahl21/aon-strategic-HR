import type { LadderContent } from '@/lib/types'

/**
 * The five-stage maturity ladder: Assist → Augment → Anticipate → Automate → Agentize.
 * Shared IP across all account variants. Copy from index.html §04 verbatim.
 */
export const ladder: LadderContent = {
  eyebrow: '03 · The Ladder',
  headline: {
    lead: 'Five stages. From',
    em1: 'assist',
    mid: 'to',
    em2: 'agentize.',
  },
  lede: 'A common diagnostic vocabulary. Pick any function, place it on the ladder, and the next move becomes visible. Most enterprises live between Assist and Augment. The unlock is Anticipate — and beyond.',
  stages: [
    {
      ordinal: '01',
      eyebrow: '01 — Reactive',
      name: 'Assist',
      gain: '~10%',
      gainLabel: 'Efficiency lift',
      description:
        'AI supports routine HR transactions and reporting. Headcount dashboards, resume screeners, chatbots that handle FAQs.',
    },
    {
      ordinal: '02',
      eyebrow: '02 — Proactive',
      name: 'Augment',
      gain: '~25%',
      gainLabel: 'Efficiency lift',
      description:
        'HR partners with AI to improve quality and decision speed. Predictive analytics, personalized journeys, AI co-pilots for managers.',
    },
    {
      ordinal: '03',
      eyebrow: '03 — Interactive',
      name: 'Anticipate',
      gain: '~40%',
      gainLabel: 'Efficiency lift',
      description:
        'AI surfaces what is about to matter. Scenario models for workforce shifts, forecasted skill gaps, attrition signals before they show up in surveys.',
    },
    {
      ordinal: '04',
      eyebrow: '04 — Predictive',
      name: 'Automate',
      gain: '50%+',
      gainLabel: 'Efficiency lift',
      description:
        'End-to-end workflows run themselves. Onboarding, learning orchestration, compensation distribution — with human-in-the-loop for the calls that matter.',
    },
    {
      ordinal: '05',
      eyebrow: '05 — Agentic',
      name: 'Agentize',
      gain: '10×',
      gainLabel: 'Capability multiplier',
      description:
        'Autonomous agents handle sourcing, matching, performance, and rewards strategy. HR becomes the orchestrator of an AI-augmented workforce system.',
    },
  ],
}
