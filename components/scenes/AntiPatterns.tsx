import { DisplayHeading } from '@/components/primitives/DisplayHeading'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { Section } from '@/components/primitives/Section'
import type { AntiPatternsContent } from '@/lib/types'

type Props = {
  content: AntiPatternsContent
  id?: string
  continueHref?: string
}

export function AntiPatterns({ content, id, continueHref }: Props) {
  return (
    <Section variant="paper2" id={id} continueHref={continueHref}>
      <div className="mb-[72px] max-w-[760px]">
        <Eyebrow className="reveal">{content.eyebrow}</Eyebrow>
        <DisplayHeading className="reveal">
          {content.headline.lead} <em>{content.headline.em1}</em>
        </DisplayHeading>
        <p className="reveal max-w-[56ch] font-body text-[clamp(17px,1.4vw,21px)] leading-[1.5] text-slate">
          {content.lede}
        </p>
      </div>

      <div
        className="reveal grid grid-cols-3 gap-px bg-rule max-[1080px]:grid-cols-2 max-[640px]:grid-cols-1"
        role="list"
      >
        {content.patterns.map((p, i) => (
          <article
            key={p.name}
            role="listitem"
            className="bg-paper-2 px-[28px] pb-[36px] pt-[32px] transition-colors duration-[400ms] hover:bg-paper"
          >
            <div className="mb-[20px] font-body text-[11px] uppercase tracking-[0.18em] text-aon">
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="m-0 mb-[14px] font-display text-[22px] font-normal leading-[1.1] tracking-[-0.005em] text-ink">
              {p.name}
            </h3>
            <p className="m-0 font-body text-[14px] leading-[1.6] text-slate">{p.body}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
