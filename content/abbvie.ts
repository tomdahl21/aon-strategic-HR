import type { AccountContent } from '@/lib/types'

/**
 * Account-specific copy for AbbVie — the first Phase 1 deployment.
 * Copy from index.html verbatim. Workshopped, not draft.
 */
export const abbvie: AccountContent = {
  meta: {
    account: 'AbbVie',
    audienceCut: 'CHRO',
    preparedAt: 'March 2026',
    confidential: true,
  },

  hero: {
    preparedFor: 'AbbVie',
    addressee: 'Office of the Chief Human Resources Officer',
    title: {
      lead: 'A year ago, we sat down to talk about the future of',
      em: 'Total Rewards.',
    },
    subhead: {
      lead: 'The future arrived faster than anyone predicted. What was a conversation about modernization is now a conversation about',
      strong: 'rewiring',
      trail: '— and there is a concrete next mile to walk together.',
    },
    foot: {
      headline: 'The Adaptive HR Organization',
      sub: 'AI-enabled, future-ready',
    },
  },

  provocation: {
    eyebrow: '01 · The Shift',
    statement: 'AI is forcing HR to',
    statementEm: 'rewire',
    statementMid: '— not just',
    statementStrike: 'digitize.',
    sideCopy: [
      'HR is one of the largest functional headcount blocks in most enterprises, and the function with the most uneven AI deployment. Pockets of progress. No unifying logic.',
      'The conversation has moved from <em>what does AI mean for us?</em> to <em>what do we do Monday morning?</em> The next mile is tactical, structural, and overdue.',
    ],
    stats: [
      {
        num: '10/10',
        numEm: '/',
        label: 'of the top global risks organizations face today are people-related.',
      },
      {
        num: '60%',
        numEm: '%',
        label: "of HR's time is now spent on strategic initiatives — up from 20% a decade ago.",
      },
      {
        num: '~6',
        label:
          'requests in the past six weeks alone, asking the same question: what should Total Rewards look like in the future?',
        labelEm: 'what should Total Rewards look like in the future?',
      },
    ],
    pillarHeading: 'The 3-pillar HR operating model collapses to 2.',
    pillarFrom: [
      { name: 'Centers of Excellence', sub: 'Specialist depth', strike: true },
      { name: 'HR Business Partners', sub: 'Strategic interface' },
      { name: 'Shared Services', sub: 'Transactional', strike: true },
    ],
    pillarTo: [
      { name: 'Strategic Partnership', sub: 'HRBPs, augmented by AI' },
      { name: 'Integrated Service Delivery', sub: 'AI absorbs CoE + ops' },
    ],
  },

  pairing: {
    eyebrow: '05 · The Pairing',
    headline: {
      line1: 'Aon brings the data.',
      line2: 'Slalom brings the build.',
      em: 'One operating system.',
    },
    aon: {
      label: '— The advisor',
      name: 'Aon',
      accent: 'aon',
      tagline:
        'Five decades of workforce data, the comp and benefits depth most firms can only describe.',
      list: [
        {
          lead: 'Radford McLagan',
          body: 'compensation database — the data substrate for every reward decision.',
        },
        {
          lead: 'Health Risk Analyzer',
          body: '— predictive model for high-cost claims and pharmacy risk.',
        },
        {
          lead: 'Workforce Absence Analyzer',
          body: '— quantifying the true cost of every employee unavailable.',
        },
        {
          lead: 'AI Sensitivity Analysis',
          body: '— job- and task-level impact mapping, with skill and pay implications.',
        },
        {
          lead: 'Research-backed POV',
          body: '— twenty years of CHRO conversations, academic partnerships, sector benchmarks.',
        },
      ],
    },
    slalom: {
      label: '— The builder',
      name: 'Slalom',
      accent: 'neutral',
      tagline:
        'Operating-model design, agentic AI build, and the change scaffolding that turns insight into action.',
      list: [
        {
          lead: 'HR tech-stack assessment',
          body: '— current state of HR systems, data plumbing, and integration debt.',
        },
        {
          lead: 'Adaptive Organization design',
          body: 'for the CHRO — operating-model redesign with AI at the center.',
        },
        {
          lead: 'Job reimagination & architecture',
          body: '— what each role becomes, not just what it does today.',
        },
        {
          lead: 'Implementation & change',
          body: '— co-delivered with the client team, not lobbed over the wall.',
        },
        {
          lead: 'Data governance & agentic build',
          body: "— the execution arm for everything Aon's insights surface.",
        },
      ],
    },
    scaffolding: {
      quote: 'Most change efforts stop at change management.',
      quoteEm:
        'We change the systemic HR architecture underneath — jobs, structures, comp, data.',
      proofLabel: 'The proof',
      proofBody:
        'We are running this on ourselves. A live diagnostic across five Total Rewards roles and eight levels. Sensitivity analysis, reimagined job architecture, and the operating model to support it — built, not theorized.',
    },
  },

  engagement: {
    eyebrow: '06 · The Next Mile',
    headlineLead: 'A',
    headlineEm: 'thirty-day shaped engagement',
    headlineTrail: '. Small enough to say yes to. Rich enough to expose value.',
    steps: [
      {
        num: '01',
        timeframe: 'Weeks 1–3',
        name: 'Diagnostic Anchor',
        description:
          "A focused <strong>AI sensitivity analysis</strong> on one function — Total Rewards is our proven entry point and the most natural starting place given your team's history. Surfaces job-level exposure, skill shifts, and the tech readiness gap.",
      },
      {
        num: '02',
        timeframe: 'Week 4 · One day',
        name: 'Joint Workshop',
        description:
          'Aon, Slalom, and your team in one room. We translate the findings into a near-term action set — what to <strong>reimagine</strong>, what to <strong>retire</strong>, what tech to <strong>deploy or shore up</strong>.',
      },
      {
        num: '03',
        timeframe: 'Modular',
        name: 'Path Forward',
        description:
          'You pick the next plays — redesign comp leveling, deploy a TR co-pilot, restructure the CoE. We co-deliver. Outcomes feed the broader transformation conversation when you are ready to have it.',
      },
    ],
    anchorFunction: 'Total Rewards',
    anchorLead: 'Comp, benefits, and recognition all sit on data',
    anchorEm: 'AI can already reason over',
    anchorTrail:
      '. It is the function where the diagnostic lands fastest, the evidence is hardest to dispute, and the runway to value is shortest.',
  },

  closing: {
    eyebrow: '07 · The Conversation',
    question:
      'Where did the Total Rewards thinking land — and what should the next mile look like, now that AI has matured?',
    invitationLabel: '— Your invitation',
    invitation:
      'A 30-minute conversation. No deck behind this one. The shape of a working relationship, sketched together. We are ready when you are.',
    teamLabel: '— Your team at Aon',
    team: {
      headline:
        'The Human Capital practice, with the partners and analytics teams that originated this work.',
      support: 'In partnership with Slalom, our co-delivery partner for AI-enabled HR transformation.',
    },
  },
}
