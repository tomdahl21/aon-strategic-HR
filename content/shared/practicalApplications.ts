import type { ApplicationsContent } from '@/lib/types'

/**
 * Practical AI use cases organized by outcome ambition: productivity,
 * differentiation, disruption. Source: Slalom Perspective §5.
 * Use cases edited for parallelism and crispness; reframed from deck copy.
 */
export const practicalApplications: ApplicationsContent = {
  eyebrow: '04 · The Applications',
  headline: {
    lead: 'From operating',
    em1: 'better',
    mid: 'to',
    em2: 'transforming',
  },
  lede: 'The same technology lands at very different altitudes. Most teams stop in the first column — running the function more efficiently. The third column is where the operating model itself bends.',
  columns: [
    {
      ordinal: '01',
      title: 'Productivity',
      subtitle: 'Operate the function better',
      items: [
        'HR chatbots resolving common queries in-channel',
        'Benefits administration that runs itself',
        'Performance and feedback analytics that surface signal',
        'Autonomous payroll and compliance workflows',
        'Smart scheduling and project allocation',
      ],
    },
    {
      ordinal: '02',
      title: 'Differentiation',
      subtitle: 'Make the function distinctive',
      items: [
        'Predictive analytics on turnover and burnout',
        'Training programs gamified to lift completion',
        'AI-curated and crowdsourced learning content',
        'Internal job matching across the enterprise',
        'Personalized career and mobility paths',
      ],
    },
    {
      ordinal: '03',
      title: 'Disruption',
      subtitle: 'Transform the business',
      items: [
        'Real-time labor market reads feeding workforce strategy',
        'Cognitive job redesign — roles rebuilt around emerging work',
        'Organizational network analysis as an input to org structure',
        'AI as a check on policy alignment and ethical guardrails',
      ],
    },
  ],
  axisLeft: 'Operate better',
  axisRight: 'Transform the business',
}
