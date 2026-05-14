import { notFound } from 'next/navigation'
import { AccelLandscape } from '@/components/scenes/AccelLandscape'
import { ClosingConversation } from '@/components/scenes/ClosingConversation'
import { EngagementLadder } from '@/components/scenes/EngagementLadder'
import { HeroAnchor } from '@/components/scenes/HeroAnchor'
import { MaturityLadder } from '@/components/scenes/MaturityLadder'
import { MaturityMatrix } from '@/components/scenes/MaturityMatrix'
import { PairingSplit } from '@/components/scenes/PairingSplit'
import { ProvocationBlock } from '@/components/scenes/ProvocationBlock'
import { DisplayHeading } from '@/components/primitives/DisplayHeading'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { Section } from '@/components/primitives/Section'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { TopBar } from '@/components/layout/TopBar'
import { abbvie } from '@/content/abbvie'
import { ladder } from '@/content/shared/ladder'
import { landscape } from '@/content/shared/landscape'
import { matrix, matrixHead } from '@/content/shared/matrix'
import type { AccountContent } from '@/lib/types'

const ACCOUNTS: Record<string, AccountContent> = {
  abbvie,
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

  return (
    <>
      <TopBar meta={`A Proposal · ${content.meta.preparedAt}`} />

      <main id="main">
        <HeroAnchor hero={content.hero} />
        <ProvocationBlock provocation={content.provocation} />
        <AccelLandscape content={landscape} />
        <MaturityLadder content={ladder} />

        <Section variant="white">
          <div className="mb-[80px] grid items-end gap-[clamp(40px,6vw,100px)] [grid-template-columns:1.3fr_1fr] max-[760px]:grid-cols-1 max-[760px]:gap-[32px]">
            <div>
              <Eyebrow className="reveal">{matrixHead.eyebrow}</Eyebrow>
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
                className="h-[2px] w-[220px] bg-[linear-gradient(to_right,rgb(var(--rule)),rgb(var(--aon)))]"
              />
              <span>Agentize</span>
            </div>
          </div>
        </Section>

        <PairingSplit pairing={content.pairing} />
        <EngagementLadder engagement={content.engagement} />
        <ClosingConversation closing={content.closing} />
      </main>

      <SiteFooter meta={content.meta} siteLine={content.hero.foot.headline} />
    </>
  )
}
