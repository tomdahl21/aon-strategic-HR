import { notFound } from 'next/navigation'
import { AccelLandscape } from '@/components/scenes/AccelLandscape'
import { AdoptionJourney } from '@/components/scenes/AdoptionJourney'
import { AIFootprint } from '@/components/scenes/AIFootprint'
import { AntiPatterns } from '@/components/scenes/AntiPatterns'
import { ClosingConversation } from '@/components/scenes/ClosingConversation'
import { EngagementLadder } from '@/components/scenes/EngagementLadder'
import { Foundations } from '@/components/scenes/Foundations'
import { FunctionalView } from '@/components/scenes/FunctionalView'
import { HeroAnchor } from '@/components/scenes/HeroAnchor'
import { MaturityLadder } from '@/components/scenes/MaturityLadder'
import { MaturityMatrix } from '@/components/scenes/MaturityMatrix'
import { OrganizingQuestions } from '@/components/scenes/OrganizingQuestions'
import { PairingSplit } from '@/components/scenes/PairingSplit'
import { PracticalApplications } from '@/components/scenes/PracticalApplications'
import { ProvocationBlock } from '@/components/scenes/ProvocationBlock'
import { StakeholderView } from '@/components/scenes/StakeholderView'
import { DisplayHeading } from '@/components/primitives/DisplayHeading'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { PhotoPlate } from '@/components/primitives/PhotoPlate'
import { Section } from '@/components/primitives/Section'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { TopBar } from '@/components/layout/TopBar'
import { abbvie } from '@/content/abbvie'
import { abbvieV2 } from '@/content/abbvie-v2'
import { adoptionJourney } from '@/content/shared/adoptionJourney'
import { aiFootprint } from '@/content/shared/aiFootprint'
import { antiPatterns } from '@/content/shared/antiPatterns'
import { foundations } from '@/content/shared/foundations'
import { functionalView } from '@/content/shared/functionalView'
import { ladder } from '@/content/shared/ladder'
import { landscape } from '@/content/shared/landscape'
import { matrix, matrixHead } from '@/content/shared/matrix'
import { organizingQuestions } from '@/content/shared/organizingQuestions'
import { practicalApplications } from '@/content/shared/practicalApplications'
import { stakeholderView } from '@/content/shared/stakeholderView'
import laptopPhoto from '@/img/photos/slalom-people01.jpg'
import conversationPhoto from '@/img/photos/slalom-people02.jpg'
import type { AccountContent } from '@/lib/types'

const ACCOUNTS: Record<string, AccountContent> = {
  abbvie,
  'abbvie-v2': abbvieV2,
}

export function generateStaticParams() {
  return Object.keys(ACCOUNTS).map((account) => ({ account }))
}

type Params = Promise<{ account: string }>

export default async function AccountPage({ params }: { params: Params }) {
  const { account } = await params
  const content = ACCOUNTS[account]

  if (!content) {
    notFound()
  }

  const isV2 = account === 'abbvie-v2'

  return (
    <>
      <TopBar meta={`A Proposal · ${content.meta.preparedAt}`} />

      <main id="main">
        <HeroAnchor hero={content.hero} />

        <div className="relative z-0 -mt-[clamp(220px,30vh,340px)]">
          <PhotoPlate
            id="after-hero"
            src={laptopPhoto}
            alt="Slalom team members working together in a studio."
            height="plate"
            objectPosition="38% -8%"
            priority
          />
        </div>

        {isV2 ? <ExpandedComposition content={content} /> : <StandardComposition content={content} />}

        <PhotoPlate
          src={conversationPhoto}
          alt="Two Slalom colleagues mid-conversation."
          height="compact"
          objectPosition="55% 35%"
        />
      </main>

      <SiteFooter meta={content.meta} siteLine={content.hero.foot.headline} />
    </>
  )
}

/**
 * Original AbbVie composition — seven scenes, numbered 01 through 07.
 */
function StandardComposition({ content }: { content: AccountContent }) {
  return (
    <>
      <ProvocationBlock
        provocation={content.provocation}
        id="section-01"
        continueHref="#section-02"
      />
      <AccelLandscape content={landscape} id="section-02" continueHref="#section-03" />
      <MaturityLadder content={ladder} id="section-03" continueHref="#section-04" />

      <MatrixSection eyebrow={matrixHead.eyebrow} id="section-04" continueHref="#section-05" />

      <PairingSplit pairing={content.pairing} id="section-05" continueHref="#section-06" />
      <EngagementLadder
        engagement={content.engagement}
        id="section-06"
        continueHref="#section-07"
      />
      <ClosingConversation closing={content.closing} id="section-07" />
    </>
  )
}

/**
 * Expanded composition for /abbvie-v2 — fifteen scenes that integrate the
 * Slalom Perspective deck (Mar 2026) into the existing AbbVie narrative.
 * The seven original scenes are re-numbered to make room for the new ones.
 */
function ExpandedComposition({ content }: { content: AccountContent }) {
  return (
    <>
      {/* 01 · The Shift — Provocation already carries eyebrow "01 · The Shift" */}
      <ProvocationBlock
        provocation={content.provocation}
        id="section-01"
        continueHref="#section-02"
      />

      {/* 02 · The Footprint — NEW */}
      <AIFootprint content={aiFootprint} id="section-02" continueHref="#section-03" />

      {/* 03 · The Landscape — renumbered */}
      <AccelLandscape
        content={{ ...landscape, eyebrow: '03 · The Landscape' }}
        id="section-03"
        continueHref="#section-04"
      />

      {/* 04 · The Applications — NEW */}
      <PracticalApplications
        content={practicalApplications}
        id="section-04"
        continueHref="#section-05"
      />

      {/* 05 · The Ladder — renumbered */}
      <MaturityLadder
        content={{ ...ladder, eyebrow: '05 · The Ladder' }}
        id="section-05"
        continueHref="#section-06"
      />

      {/* 06 · The Map — renumbered */}
      <MatrixSection
        eyebrow="06 · The Map"
        id="section-06"
        continueHref="#section-07"
      />

      {/* 07 · The Stakeholders — NEW */}
      <StakeholderView content={stakeholderView} id="section-07" continueHref="#section-08" />

      {/* 08 · The Functions — NEW */}
      <FunctionalView content={functionalView} id="section-08" continueHref="#section-09" />

      {/* 09 · The Foundation — NEW */}
      <Foundations content={foundations} id="section-09" continueHref="#section-10" />

      {/* 10 · The Pitfalls — NEW */}
      <AntiPatterns content={antiPatterns} id="section-10" continueHref="#section-11" />

      {/* 11 · The Pairing — renumbered via account file */}
      <PairingSplit pairing={content.pairing} id="section-11" continueHref="#section-12" />

      {/* 12 · The Questions — NEW */}
      <OrganizingQuestions
        content={organizingQuestions}
        id="section-12"
        continueHref="#section-13"
      />

      {/* 13 · The Journey — NEW */}
      <AdoptionJourney content={adoptionJourney} id="section-13" continueHref="#section-14" />

      {/* 14 · The Next Mile — renumbered via account file */}
      <EngagementLadder
        engagement={content.engagement}
        id="section-14"
        continueHref="#section-15"
      />

      {/* 15 · The Conversation — renumbered via account file */}
      <ClosingConversation closing={content.closing} id="section-15" />
    </>
  )
}

/**
 * The Maturity Matrix section is composed inline because it pairs a custom
 * 1.3fr/1fr header layout with the (only) client component on the page.
 * Hoisted here so both compositions render it identically.
 */
function MatrixSection({
  eyebrow,
  id,
  continueHref,
}: {
  eyebrow: string
  id: string
  continueHref: string
}) {
  return (
    <Section variant="white" id={id} continueHref={continueHref}>
      <div className="mb-[80px] grid items-end gap-[clamp(40px,6vw,100px)] [grid-template-columns:1.3fr_1fr] max-[760px]:grid-cols-1 max-[760px]:gap-[32px]">
        <div>
          <Eyebrow tone="slalom" className="reveal">
            {eyebrow}
          </Eyebrow>
          <DisplayHeading className="reveal">
            {matrixHead.headline.line1}
            <br />
            {matrixHead.headline.line2}
          </DisplayHeading>
        </div>
        <p className="reveal max-w-[50ch] font-body text-[15px] leading-[1.6] text-slate">
          {matrixHead.sub}
        </p>
      </div>

      <div className="reveal">
        <MaturityMatrix lifecycleStages={matrix} />
      </div>

      <div className="mt-[32px] flex items-center justify-between font-body text-[12px] tracking-[0.04em] text-mute max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-[16px]">
        <span>Click any row above to explore its progression.</span>
        <div className="flex items-center gap-[10px]">
          <span>Assist</span>
          <span
            aria-hidden
            className="h-[2px] w-[220px] bg-[linear-gradient(to_right,rgb(var(--rule)),rgb(var(--slalom)))]"
          />
          <span>Agentize</span>
        </div>
      </div>
    </Section>
  )
}
