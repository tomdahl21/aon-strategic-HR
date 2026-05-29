import { DisplayHeading } from '@/components/primitives/DisplayHeading'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { Section } from '@/components/primitives/Section'
import type { FootprintContent } from '@/lib/types'

type Props = {
  content: FootprintContent
  id?: string
  continueHref?: string
}

export function AIFootprint({ content, id, continueHref }: Props) {
  return (
    <Section variant="paper2" id={id} continueHref={continueHref}>
      <div className="mb-[80px] max-w-[760px]">
        <Eyebrow tone="slalom" className="reveal">
          {content.eyebrow}
        </Eyebrow>

        <DisplayHeading tone="light-slalom" className="reveal">
          {content.headline.lead} <em>{content.headline.em1}</em> {content.headline.mid}{' '}
          <em>{content.headline.em2}</em>
        </DisplayHeading>

        <p className="reveal max-w-[56ch] font-body text-[clamp(17px,1.4vw,21px)] leading-[1.5] text-slate">
          {content.lede}
        </p>
      </div>

      <div className="reveal grid grid-cols-3 gap-[clamp(24px,3vw,48px)] max-[1080px]:grid-cols-1">
        {content.columns.map((col) => (
          <article
            key={col.title}
            className="flex flex-col border-t border-ink pt-[36px]"
          >
            <span className="mb-[28px] block font-body text-[11px] uppercase tracking-[0.18em] text-slalom">
              {col.ordinal}
            </span>
            <h3 className="m-0 mb-[28px] font-display text-[clamp(28px,2.6vw,40px)] font-normal leading-[1] tracking-[-0.01em] text-ink">
              {col.title}
            </h3>
            <p className="m-0 font-body text-[15px] leading-[1.6] text-slate">
              {col.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
