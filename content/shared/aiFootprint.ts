import type { FootprintContent } from '@/lib/types'

/**
 * The three orbits AI is already inhabiting inside HR — technology, the
 * function itself, and the broader organization. Source: Slalom Perspective
 * §3. Reframed in the site's editorial voice; not paraphrased from
 * deck copy.
 */
export const aiFootprint: FootprintContent = {
  eyebrow: '02 · The Footprint',
  headline: {
    lead: 'AI is already',
    em1: 'inside',
    mid: 'HR. The question is what',
    em2: 'shape',
  },
  lede: 'It is showing up in three orbits at once — the tech stack, the function, and the broader organization. Each demands a different leadership posture, and each is moving on a different clock.',
  columns: [
    {
      ordinal: 'I.',
      title: 'HR Technology',
      body: 'Routine processes automate themselves. Decisions get sharper because the data behind them gets cleaner. Less ticketing, more signal.',
    },
    {
      ordinal: 'II.',
      title: 'HR Organization',
      body: 'The team gets time back. Fewer admin loops, more counsel. Engagement and retention move because someone is finally paying attention to them.',
    },
    {
      ordinal: 'III.',
      title: 'Leading the Organization',
      body: 'Workforce planning that anticipates. Org agility that compounds. The CHRO becomes the architect of how the business adapts.',
    },
  ],
}
