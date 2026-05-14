import type { MaturityStage, MatrixSectionHead } from '@/lib/types'

/**
 * Section frame copy for the interactive matrix scene — eyebrow, headline,
 * sub-lede. Shared across accounts.
 */
export const matrixHead: MatrixSectionHead = {
  eyebrow: '04 · The Map',
  headline: { line1: 'Forty moments.', line2: 'One operating model.' },
  sub: "Select any lifecycle stage. See how it evolves across the five maturity stages — with the tools and capabilities that mark each shift. This is the depth we'd bring to the diagnostic phase of a working relationship.",
}

/**
 * The 40-cell maturity matrix — 8 lifecycle stages × 5 maturity stages.
 * Copy is workshopped; do not paraphrase. Shared IP across all account variants.
 * Source of truth: index.html `MATRIX` array.
 */
export const matrix: MaturityStage[] = [
  {
    stage: 'Workforce Planning',
    cells: [
      {
        name: 'Assist',
        desc: 'Headcount reporting and basic dashboards. Manual forecasting still rules.',
        tools: ['Excel', 'HRIS'],
      },
      {
        name: 'Augment',
        desc: 'Predictive analytics highlight potential workforce imbalances and supply gaps.',
        tools: ['Visier', 'Power BI'],
      },
      {
        name: 'Anticipate',
        desc: 'Scenario models anticipate talent gaps and alignment to business forecasts.',
        tools: ['OrgVue', 'Tableau'],
      },
      {
        name: 'Automate',
        desc: 'Real-time forecasting continuously aligns workforce plans to live business outcomes.',
        tools: ['Workday', 'Visier'],
      },
      {
        name: 'Agentize',
        desc: 'Autonomous workforce simulations dynamically rebalance resources across the enterprise.',
        tools: ['Gloat', 'Custom GPTs'],
      },
    ],
  },
  {
    stage: 'Talent Acquisition',
    cells: [
      {
        name: 'Assist',
        desc: 'Resume screening and scheduling bots reduce manual recruiter workload.',
        tools: ['HireVue', 'Paradox'],
      },
      {
        name: 'Augment',
        desc: 'AI assists recruiters with candidate matching and job description authoring.',
        tools: ['Eightfold', 'LinkedIn'],
      },
      {
        name: 'Anticipate',
        desc: 'AI forecasts talent demand and pipeline needs across emerging skills.',
        tools: ['Eightfold', 'LinkedIn Talent Insights'],
      },
      {
        name: 'Automate',
        desc: 'End-to-end candidate experience and recruiting workflows run themselves.',
        tools: ['Workday Recruiting'],
      },
      {
        name: 'Agentize',
        desc: 'Autonomous recruiting agents handle sourcing, scheduling, and offers end-to-end.',
        tools: ['Custom GPTs', 'Workday'],
      },
    ],
  },
  {
    stage: 'Onboarding & Enablement',
    cells: [
      {
        name: 'Assist',
        desc: 'AI checklists and onboarding FAQs replace static SharePoint pages.',
        tools: ['WalkMe'],
      },
      {
        name: 'Augment',
        desc: 'AI personalizes onboarding journeys and content to role, function, and learning style.',
        tools: ['Workday Journeys', 'Viva Learning'],
      },
      {
        name: 'Anticipate',
        desc: 'AI predicts ramp-up speed and identifies early-risk new hires before they signal.',
        tools: ['EdCast', 'Viva Insights'],
      },
      {
        name: 'Automate',
        desc: 'Onboarding tasks — documents, training, access — execute themselves.',
        tools: ['Workday', 'WalkMe'],
      },
      {
        name: 'Agentize',
        desc: 'Self-learning onboarding copilots continuously refine the process for each new cohort.',
        tools: ['Custom GPTs'],
      },
    ],
  },
  {
    stage: 'Learning & Development',
    cells: [
      {
        name: 'Assist',
        desc: 'AI suggests training modules based on job title and tenure.',
        tools: ['LinkedIn Learning'],
      },
      {
        name: 'Augment',
        desc: 'Adaptive AI personalizes learning to individual performance and behavior signals.',
        tools: ['Degreed', 'Coursera'],
      },
      {
        name: 'Anticipate',
        desc: 'AI predicts future skill needs against business strategy and recommends upskilling paths.',
        tools: ['Degreed', 'Gloat'],
      },
      {
        name: 'Automate',
        desc: 'AI-driven learning orchestration auto-assigns courses and tracks business impact.',
        tools: ['Workday Learning'],
      },
      {
        name: 'Agentize',
        desc: 'Autonomous skill agents continuously update learning content and dynamic career pathways.',
        tools: ['Custom GPTs'],
      },
    ],
  },
  {
    stage: 'Performance & Engagement',
    cells: [
      {
        name: 'Assist',
        desc: 'AI summarizes survey results and surface themes from open-text responses.',
        tools: ['SurveyMonkey', 'Qualtrics'],
      },
      {
        name: 'Augment',
        desc: 'AI copilots help managers with feedback drafting and coaching insights.',
        tools: ['Viva', 'CultureAmp'],
      },
      {
        name: 'Anticipate',
        desc: 'AI forecasts engagement, burnout, and attrition risks at team and individual level.',
        tools: ['Microsoft Viva Insights'],
      },
      {
        name: 'Automate',
        desc: 'Continuous monitoring and intervention loops run without HR triage.',
        tools: ['Qualtrics', 'Peakon'],
      },
      {
        name: 'Agentize',
        desc: 'AI agents drive adaptive performance management and real-time coaching across the workforce.',
        tools: ['Custom GPTs', 'Viva'],
      },
    ],
  },
  {
    stage: 'Rewards & Recognition',
    cells: [
      {
        name: 'Assist',
        desc: 'Compensation benchmarking and analysis support against market data.',
        tools: ['Mercer', 'Payscale'],
      },
      {
        name: 'Augment',
        desc: 'AI identifies pay equity issues and recommends targeted adjustments.',
        tools: ['Workday Compensation'],
      },
      {
        name: 'Anticipate',
        desc: 'Predictive modeling for pay decisions, retention risk, and inflation impact.',
        tools: ['Power BI', 'Workhuman'],
      },
      {
        name: 'Automate',
        desc: 'Total rewards planning and distribution executes against policy guardrails.',
        tools: ['Workday'],
      },
      {
        name: 'Agentize',
        desc: 'AI autonomously manages compensation strategy in real-time alignment with performance outcomes.',
        tools: ['Custom GPTs'],
      },
    ],
  },
  {
    stage: 'Mobility & Succession',
    cells: [
      {
        name: 'Assist',
        desc: 'Static career paths and reactive internal-move support.',
        tools: ['HRIS'],
      },
      {
        name: 'Augment',
        desc: 'AI supports career mapping and skills-based internal talent matching.',
        tools: ['Fuel50'],
      },
      {
        name: 'Anticipate',
        desc: 'AI predicts successor readiness and surfaces non-obvious career paths.',
        tools: ['Gloat'],
      },
      {
        name: 'Automate',
        desc: 'Internal mobility orchestrates against business demand without HR intermediation.',
        tools: ['Workday Talent Marketplace'],
      },
      {
        name: 'Agentize',
        desc: 'AI autonomously matches talent to opportunities in real time across the enterprise.',
        tools: ['Gloat', 'Custom GPTs'],
      },
    ],
  },
  {
    stage: 'Offboarding & Alumni',
    cells: [
      {
        name: 'Assist',
        desc: 'Exit surveys and offboarding checklists run on autopilot.',
        tools: ['Qualtrics'],
      },
      {
        name: 'Augment',
        desc: 'AI identifies exit themes and sentiment patterns across cohorts.',
        tools: ['Power BI'],
      },
      {
        name: 'Anticipate',
        desc: 'Predictive attrition alerts drive retention strategies before resignations land.',
        tools: ['Viva Insights'],
      },
      {
        name: 'Automate',
        desc: 'Alumni engagement communications and re-recruitment outreach run continuously.',
        tools: ['Alumni Network AI'],
      },
      {
        name: 'Agentize',
        desc: 'Autonomous alumni networks predict and rehire top performers as roles open.',
        tools: ['Custom GPTs'],
      },
    ],
  },
]
