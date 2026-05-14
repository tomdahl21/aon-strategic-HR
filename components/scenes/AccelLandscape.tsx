import { DisplayHeading } from '@/components/primitives/DisplayHeading'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { Section } from '@/components/primitives/Section'
import type { LandscapeContent } from '@/lib/types'

type Props = {
  content: LandscapeContent
  id?: string
  continueHref?: string
}

export function AccelLandscape({ content, id, continueHref }: Props) {
  return (
    <Section variant="paper" id={id} continueHref={continueHref}>
      <div className="mb-[80px] max-w-[760px]">
        <Eyebrow className="reveal">{content.eyebrow}</Eyebrow>

        <DisplayHeading className="reveal">
          {content.headline.lead} <em>{content.headline.em1}</em> {content.headline.mid}{' '}
          <em>{content.headline.em2}</em>
        </DisplayHeading>

        <p className="reveal max-w-[56ch] font-body text-[clamp(17px,1.4vw,21px)] leading-[1.5] text-slate">
          {content.lede}
        </p>
      </div>

      <div className="reveal grid grid-cols-3 border-y border-ink max-[1080px]:grid-cols-1 max-[1080px]:border-b-0">
        {content.columns.map((col) => (
          <div
            key={col.title}
            className="border-r border-rule px-[32px] pb-[48px] pt-[40px] last:border-r-0 max-[1080px]:border-b max-[1080px]:border-r-0 max-[1080px]:last:border-b-0"
          >
            <span className="mb-[24px] block font-body text-[11px] uppercase tracking-[0.18em] text-aon">
              {col.ordinal}
            </span>
            <h3 className="m-0 mb-[4px] font-display text-[26px] font-normal leading-[1.05] tracking-[-0.01em] text-ink">
              {col.title}
            </h3>
            <ul className="mt-[32px] list-none p-0" role="list">
              {col.items.map((item, i) => (
                <li
                  key={item.name}
                  className={[
                    'border-t border-rule py-[20px]',
                    i === col.items.length - 1 ? 'border-b border-rule' : '',
                  ].join(' ')}
                >
                  <div className="mb-[6px] font-body text-[15px] font-semibold tracking-[-0.005em] text-ink">
                    {item.name}
                  </div>
                  <div className="font-body text-[14px] leading-[1.5] text-slate">
                    {item.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
