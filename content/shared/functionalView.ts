import type { LensContent } from '@/lib/types'

/**
 * The four-stage Reactive → Predictive lens, cut by capability domain.
 * Source: Slalom Perspective §6. Companion to stakeholderView.ts —
 * same vocabulary, different rows.
 */
export const functionalView: LensContent = {
  eyebrow: '08 · The Functions',
  headline: {
    lead: 'Where the lift lands by capability',
    em1: 'domain.',
    mid: '',
    em2: '',
  },
  lede: 'The maturity curve does not sit evenly. Core systems automate first. Strategic insight is the last frontier — and the highest-leverage prize.',
  mappingNote:
    'Reactive, Proactive, Interactive, Predictive — the same four-stage vocabulary as the stakeholder view. Each row is a different capability domain inside the function.',
  stages: [
    { name: 'Reactive', gainBand: '~10–15%' },
    { name: 'Proactive', gainBand: '~20–25%' },
    { name: 'Interactive', gainBand: '~35–40%' },
    { name: 'Predictive', gainBand: '50%+' },
  ],
  rows: [
    {
      label: 'Core systems',
      cells: [
        'Basic automation of payroll, HRIS data entry, and benefits questions.',
        'Compliance is streamlined; cases route themselves; manual errors fall.',
        'AI agents handle complex transactions with a human in the loop.',
        'Systems self-heal and detect anomalies before issues surface.',
      ],
    },
    {
      label: 'Talent & workforce development',
      cells: [
        'Digital learning libraries, recommended manually.',
        'AI curates personalized learning content and skills pathways.',
        'Adaptive learning incorporates feedback to refine career journeys.',
        'Predictive reskilling and dynamic career marketplaces.',
      ],
    },
    {
      label: 'Employee experience',
      cells: [
        'Chatbots handle basic FAQs; complex issues escalate.',
        'Personalized portals surface relevant content and resources.',
        'AI agents resolve the majority of queries with contextual understanding.',
        'AI anticipates employee needs and continuously refines the experience.',
      ],
    },
    {
      label: 'Strategic workforce insights',
      cells: [
        'Manual reporting on headcount, attrition, and compliance.',
        'AI augments dashboards with anomaly detection and proactive alerts.',
        'Real-time “what-if” scenarios for workforce shaping decisions.',
        'AI anticipates structural shifts and continuously aligns capability.',
      ],
    },
  ],
}
