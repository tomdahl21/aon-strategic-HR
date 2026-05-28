import type { AntiPatternsContent } from '@/lib/types'

/**
 * The nine AI-data anti-patterns Slalom looks for first — a short field
 * guide to what stops AI projects cold. Source: Slalom Perspective §11.
 */
export const antiPatterns: AntiPatternsContent = {
  eyebrow: '10 · The Pitfalls',
  headline: {
    lead: 'We never make the same mistake',
    em1: 'twice.',
    mid: '',
    em2: '',
  },
  lede: 'A short field guide to what stops AI projects cold — and the patterns we look for the first time we walk through your data.',
  patterns: [
    {
      name: 'Orphaned data ownership',
      body: 'Nobody owns the dataset end-to-end. Quality issues never get fixed because no one is accountable for fixing them.',
    },
    {
      name: 'Data silos',
      body: 'Critical data is locked in disconnected systems. Reuse and scale are blocked at the source.',
    },
    {
      name: 'Poor data quality',
      body: 'Models train on inconsistent, incomplete, or outdated data. Garbage in, garbage forever.',
    },
    {
      name: 'Bias baked in',
      body: 'Historical data looks clean but encodes existing inequity. AI scales the problem instead of solving it.',
    },
    {
      name: 'Lineage blindness',
      body: 'Teams cannot trace model decisions back to source data. Trust collapses the first time the output is questioned.',
    },
    {
      name: 'Integration complexity',
      body: 'Months disappear into connecting data sources instead of delivering AI value.',
    },
    {
      name: 'Train-serve drift',
      body: 'What the model learned from is not what it sees in production. Performance collapses fast and quietly.',
    },
    {
      name: 'Access control gaps',
      body: 'Security and privacy controls lag behind the new data pathways AI requires.',
    },
    {
      name: 'No learning loop',
      body: 'Model errors do not feed back into data improvement. The same failures recur.',
    },
  ],
}
