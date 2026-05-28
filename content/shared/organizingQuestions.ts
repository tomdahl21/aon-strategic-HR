import type { OrganizingQuestionsContent } from '@/lib/types'

/**
 * The four CHRO questions the engagement is shaped around.
 * Source: Slalom Perspective §14.
 */
export const organizingQuestions: OrganizingQuestionsContent = {
  eyebrow: '12 · The Questions',
  headline: {
    lead: 'Four questions every CHRO is',
    em1: 'wrestling',
    mid: 'with',
    em2: 'right now.',
  },
  lede: 'The answer is rarely a single answer. The shape of the engagement we propose is the answer — a way to work through them in sequence, not in theory.',
  questions: [
    {
      num: '01',
      question: 'Where do we start?',
      followUp: 'And how do we cut through the noise to get there?',
    },
    {
      num: '02',
      question: 'What outcomes should we aim for?',
      followUp: 'And how do we measure success when the work itself is changing?',
    },
    {
      num: '03',
      question: 'How do we unlock the value of AI inside the HR function?',
      followUp: 'Not in slideware. In what the team does on Monday morning.',
    },
    {
      num: '04',
      question: 'How do we lead the workforce transformation, not just respond to it?',
      followUp: 'The CHRO becomes the architect of how the business adapts.',
    },
  ],
}
