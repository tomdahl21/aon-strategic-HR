import { DisplayHeading } from '@/components/primitives/DisplayHeading'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { Section } from '@/components/primitives/Section'
import type { ApplicationsContent } from '@/lib/types'

type Props = {
  content: ApplicationsContent
  id?: string
  continueHref?: string
}

export function PracticalApplications({ content, id, continueHref }: Props) {
  return (
    <Section variant="paper" id={id} continueHref={continueHref}>
      <div className="mb-[80px] grid items-end gap-[clamp(40px,6vw,100px)] [grid-template-columns:1.1fr_0.9fr] max-[760px]:grid-cols-1 max-[760px]:gap-[32px]">
        <div>
          <Eyebrow className="reveal">{content.eyebrow}</Eyebrow>
          <DisplayHeading className="reveal">
            {content.headline.lead} <em>{content.headline.em1}</em> {content.headline.mid}{' '}
            <em>{content.headline.em2}</em>
          </DisplayHeading>
        </div>
        <p className="reveal max-w-[52ch] font-body text-[15px] leading-[1.6] text-slate">
          {content.lede}
        </p>
      </div>

      <div className="reveal grid grid-cols-3 border-y border-ink max-[1080px]:grid-cols-1 max-[1080px]:border-b-0">
        {content.columns.map((col) => (
          <div
            key={col.title}
            className="border-r border-rule px-[32px] pb-[48px] pt-[40px] last:border-r-0 max-[1080px]:border-b max-[1080px]:border-r-0 max-[1080px]:last:border-b-0"
          >
            <span className="mb-[24px] block font-display text-[40px] font-normal leading-none tracking-[-0.02em] text-aon">
              {col.ordinal}
            </span>
            <h3 className="m-0 mb-[6px] font-display text-[26px] font-normal leading-[1.05] tracking-[-0.01em] text-ink">
              {col.title}
            </h3>
            <div className="mb-[28px] font-body text-[12px] uppercase tracking-[0.16em] text-mute">
              {col.subtitle}
            </div>
            <ul className="m-0 list-none p-0" role="list">
              {col.items.map((item, i) => (
                <li
                  key={item}
                  className={[
                    'border-t border-rule py-[16px] font-body text-[14px] leading-[1.5] text-slate',
                    i === col.items.length - 1 ? 'border-b border-rule' : '',
                  ].join(' ')}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="reveal mt-[24px] flex items-center justify-between font-body text-[12px] uppercase tracking-[0.16em] text-mute max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-[12px]">
        <span>{content.axisLeft}</span>
        <span
          aria-hidden
          className="mx-[20px] h-[2px] flex-1 bg-[linear-gradient(to_right,rgb(var(--rule)),rgb(var(--aon)))] max-[760px]:hidden"
        />
        <span>{content.axisRight}</span>
      </div>
    </Section>
  )
}
