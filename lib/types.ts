/**
 * Content schema for the Adaptive HR Organization pitch site.
 * Every string that varies between AbbVie / United / CDW lives in an
 * AccountContent file; the component tree never changes per account.
 */

export type AudienceCut = 'CHRO' | 'TR' | 'CIO'

export type AccountMeta = {
  account: string
  audienceCut: AudienceCut
  preparedAt: string
  confidential: boolean
}

export type HeroContent = {
  preparedFor: string
  addressee: string
  title: {
    lead: string
    /** Italic burgundy emphasis inside the display title. */
    em: string
  }
  subhead: {
    lead: string
    /** Bold emphasis inside the subhead (renders as <strong>). */
    strong: string
    trail: string
  }
  foot: {
    headline: string
    sub: string
  }
}

export type Stat = {
  /** Display numeral string. */
  num: string
  /** Substring of `num` to render in Aon Red (renders non-italic — symbols like "/", "%"). */
  numEm?: string
  label: string
  /** Italic emphasis substring inside the label. */
  labelEm?: string
}

export type PillarItem = {
  name: string
  sub: string
  /** Render with the diagonal strike + dimmed treatment (deprecated pillar). */
  strike?: boolean
}

export type ProvocationContent = {
  eyebrow: string
  statement: string
  statementEm: string
  /** Connector between the italic em and the struck word ("— not just"). */
  statementMid: string
  statementStrike: string
  /** Each entry may contain inline `<em>` HTML for editorial italics. */
  sideCopy: string[]
  stats: Stat[]
  pillarHeading: string
  pillarFrom: PillarItem[]
  pillarTo: PillarItem[]
}

export type LandscapeItem = {
  name: string
  description: string
}

export type LandscapeColumn = {
  ordinal: string
  title: string
  items: LandscapeItem[]
}

export type LandscapeContent = {
  eyebrow: string
  /** Headline with two italic emphasis words flanking a middle connector. */
  headline: {
    lead: string
    em1: string
    mid: string
    em2: string
  }
  lede: string
  columns: LandscapeColumn[]
}

export type MatrixSectionHead = {
  eyebrow: string
  /** Two-line headline; rendered with a hard break between. */
  headline: { line1: string; line2: string }
  sub: string
}

export type LadderStage = {
  ordinal: string
  eyebrow: string
  name: string
  gain: string
  gainLabel: string
  description: string
}

export type LadderContent = {
  eyebrow: string
  /** Headline with two italic emphasis words flanking a middle connector. */
  headline: {
    lead: string
    em1: string
    mid: string
    em2: string
  }
  lede: string
  stages: LadderStage[]
}

export type MaturityCell = {
  name: 'Assist' | 'Augment' | 'Anticipate' | 'Automate' | 'Agentize'
  desc: string
  tools: string[]
}

export type MaturityStage = {
  stage: string
  cells: MaturityCell[]
}

export type SideListItem = {
  /** Bold lead phrase. */
  lead: string
  /** Rest of the line. */
  body: string
}

export type PairingSide = {
  label: string
  name: string
  /** Color treatment for the wordmark: Aon red, Slalom blue, or plain ink. */
  accent?: 'aon' | 'slalom' | 'neutral'
  tagline: string
  list: SideListItem[]
}

export type ScaffoldingContent = {
  quote: string
  quoteEm: string
  proofLabel: string
  proofBody: string
}

export type PairingContent = {
  eyebrow: string
  /** Two declarative sentences with an italic burgundy emphasis after line 2. */
  headline: {
    line1: string
    line2: string
    em: string
  }
  aon: PairingSide
  slalom: PairingSide
  scaffolding: ScaffoldingContent
}

export type EngagementStep = {
  num: string
  timeframe: string
  name: string
  /** HTML-ish copy may include <strong> phrases; render via a tiny parser or dangerouslySetInnerHTML in component. */
  description: string
}

export type EngagementContent = {
  eyebrow: string
  headlineLead: string
  headlineEm: string
  /** Trailer after the italic em. */
  headlineTrail: string
  steps: EngagementStep[]
  anchorFunction: string
  anchorLead: string
  anchorEm: string
  anchorTrail: string
}

export type ClosingContent = {
  eyebrow: string
  question: string
  invitationLabel: string
  invitation: string
  teamLabel: string
  team: {
    headline: string
    support: string
  }
}

export type AccountContent = {
  meta: AccountMeta
  hero: HeroContent
  provocation: ProvocationContent
  pairing: PairingContent
  engagement: EngagementContent
  closing: ClosingContent
}

/* -----------------------------------------------------------------------
 * v2 expanded composition — content types for the eight additional scenes
 * sourced from the Slalom Perspective deck (Mar 2026). Each lives in its
 * own shared content file and is rendered only on the abbvie-v2 route.
 * --------------------------------------------------------------------- */

export type EditorialHeadlineSplit = {
  lead: string
  em1: string
  mid: string
  em2: string
}

/** Slide 3 — three orbits where AI shows up across HR. */
export type FootprintColumn = {
  ordinal: string
  title: string
  body: string
}

export type FootprintContent = {
  eyebrow: string
  headline: EditorialHeadlineSplit
  lede: string
  columns: FootprintColumn[]
}

/** Slide 5 — practical use cases on an Operate Better → Transform axis. */
export type ApplicationsColumn = {
  ordinal: string
  title: string
  subtitle: string
  items: string[]
}

export type ApplicationsContent = {
  eyebrow: string
  headline: EditorialHeadlineSplit
  lede: string
  columns: ApplicationsColumn[]
  axisLeft: string
  axisRight: string
}

/** Slides 6 + 17 — same shape, different lens (capability vs stakeholder). */
export type LensStageHead = {
  /** Short uppercase tag — REACTIVE, PROACTIVE, INTERACTIVE, PREDICTIVE. */
  name: string
  /** Efficiency lift band shown under the stage name. */
  gainBand: string
}

export type LensRow = {
  label: string
  /** One cell per stage head, in stage order. */
  cells: string[]
}

export type LensContent = {
  eyebrow: string
  headline: EditorialHeadlineSplit
  lede: string
  /** Note that maps the 4-stage vocabulary onto the 5-stage Ladder. */
  mappingNote: string
  stages: LensStageHead[]
  rows: LensRow[]
}

/** Slides 7 + 10 — Data Readiness offering as a foundational scene. */
export type FoundationPhase = {
  ordinal: string
  name: string
  description: string
}

export type FoundationFitItem = {
  lead: string
  body: string
}

export type FoundationContent = {
  eyebrow: string
  headline: EditorialHeadlineSplit
  lede: string
  phases: FoundationPhase[]
  whenLabel: string
  whenItems: FoundationFitItem[]
  whenNotLabel: string
  whenNotItems: FoundationFitItem[]
}

/** Slide 11 — nine AI-data anti-patterns. */
export type AntiPattern = {
  name: string
  body: string
}

export type AntiPatternsContent = {
  eyebrow: string
  headline: EditorialHeadlineSplit
  lede: string
  patterns: AntiPattern[]
}

/** Slide 14 — four CHRO organizing questions. */
export type OrganizingQuestion = {
  num: string
  question: string
  followUp: string
}

export type OrganizingQuestionsContent = {
  eyebrow: string
  headline: EditorialHeadlineSplit
  lede: string
  questions: OrganizingQuestion[]
}

/** Slide 20 — Experiment → Enhanced → Enabled → Evolving adoption arc. */
export type JourneyStage = {
  ordinal: string
  name: string
  focus: string
  outcome: string
  gain: string
}

export type AdoptionJourneyContent = {
  eyebrow: string
  headline: EditorialHeadlineSplit
  lede: string
  stages: JourneyStage[]
  liftLabel: string
}
