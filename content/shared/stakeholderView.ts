import type { LensContent } from '@/lib/types'

/**
 * The four-stage Reactive → Predictive lens, cut by stakeholder.
 * Source: Slalom Perspective §17. The 4-stage vocabulary maps roughly
 * to the 5-stage Ladder (Reactive≈Assist, Proactive≈Augment,
 * Interactive≈Anticipate+Automate, Predictive≈Agentize); we keep both
 * because the stakeholder cut tells a different story than the matrix.
 */
export const stakeholderView: LensContent = {
  eyebrow: '07 · The Stakeholders',
  headline: {
    lead: 'Every role on the org chart meets AI',
    em1: 'differently.',
    mid: '',
    em2: '',
  },
  lede: 'Same maturity curve, four different vantage points. Where employees feel it. Where managers feel it. Where the practitioner team feels it. Where the organization feels it.',
  mappingNote:
    'The four-stage vocabulary below — Reactive, Proactive, Interactive, Predictive — maps to the five-stage Ladder above. Use whichever frame your audience finds more natural.',
  stages: [
    { name: 'Reactive', gainBand: '~10%' },
    { name: 'Proactive', gainBand: '~20–25%' },
    { name: 'Interactive', gainBand: '~35–45%' },
    { name: 'Predictive', gainBand: '50–60%+' },
  ],
  rows: [
    {
      label: 'Employee experience',
      cells: [
        'HR FAQ chatbots for policy questions.',
        'AI nudges employees toward benefits, learning, and wellness programs.',
        'Adaptive, real-time support across every channel an employee uses.',
        'Anticipatory experiences — needs predicted and resolved before they surface.',
      ],
    },
    {
      label: 'Manager enablement',
      cells: [
        'Managers receive static reports on team performance.',
        'AI surfaces tailored insights on engagement and skill gaps.',
        'Managers collaborate with AI co-pilots for coaching and performance reviews.',
        'Predictive dashboards highlight retention risks and growth opportunities.',
      ],
    },
    {
      label: 'Practitioner productivity',
      cells: [
        'AI handles repetitive case management and compliance work.',
        'Workflow automation and intelligent routing across HR ops.',
        'Co-pilots interpret data, draft communications, and shape interventions.',
        'HR is fully augmented — practitioners focus on strategy, culture, innovation.',
      ],
    },
    {
      label: 'Organizational agility',
      cells: [
        'HR monitors talent shifts manually.',
        'AI enhances workforce planning and reporting.',
        'Agile talent allocation through internal gigs and skills marketplaces.',
        'The organization dynamically adapts its workforce through predictive intelligence.',
      ],
    },
  ],
}
