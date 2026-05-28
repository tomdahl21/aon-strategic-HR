import type { AdoptionJourneyContent } from '@/lib/types'

/**
 * The four-stage organizational adoption arc — Experiment → Enhanced →
 * Enabled → Evolving. Distinct from the maturity Ladder: this measures
 * how AI propagates across the org, not how mature any one function is.
 * Source: Slalom Perspective §20.
 */
export const adoptionJourney: AdoptionJourneyContent = {
  eyebrow: '13 · The Journey',
  headline: {
    lead: 'Adoption moves in stages. The unlock is between',
    em1: 'enhanced',
    mid: 'and',
    em2: 'enabled.',
  },
  lede: 'Individual augmentation is the easy part. The hard line is the one between departmental wins and organization-wide AI. That is where most enterprises slow down — and where the operating model has to evolve to keep going.',
  liftLabel: 'Expected lift',
  stages: [
    {
      ordinal: '01',
      name: 'Experiment',
      focus: 'Low-risk pilots and quick wins. Individual augmentation.',
      outcome:
        'Early successes show employees what AI feels like and create the momentum needed for broader adoption.',
      gain: '0–10%',
    },
    {
      ordinal: '02',
      name: 'Enhanced',
      focus: 'Single-department, role-specific integration.',
      outcome:
        'Process-level optimization creates early success stories — and surfaces the internal AI coaches who drive adoption next.',
      gain: '10–30%',
    },
    {
      ordinal: '03',
      name: 'Enabled',
      focus: 'Multi-department processes. Collaborative enhancement at scale.',
      outcome:
        'Silos break down. Teams align around AI-powered, organization-wide goals.',
      gain: '30%+',
    },
    {
      ordinal: '04',
      name: 'Evolving',
      focus: 'Transformational initiatives. Hybrid agentic workflows embedded in operations and strategy.',
      outcome:
        'Large components of the value chain run autonomously. AI drives innovation, efficiency, and long-term growth.',
      gain: '10×',
    },
  ],
}
