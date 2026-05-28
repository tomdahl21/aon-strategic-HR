import { DisplayHeading } from '@/components/primitives/DisplayHeading'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { Section } from '@/components/primitives/Section'
import type { LensContent } from '@/lib/types'

type Props = {
  content: LensContent
  id?: string
  continueHref?: string
  /**
   * Visual variant — alternating treatment so a stakeholder-view scene and
   * a functional-view scene back to back read as related but distinct.
   */
  tone?: 'paper' | 'paper2'
}

export function StakeholderView({ content, id, continueHref, tone = 'paper2' }: Props) {
  return (
    <Section variant={tone} id={id} continueHref={continueHref}>
      <div className="mb-[64px] max-w-[760px]">
        <Eyebrow className="reveal">{content.eyebrow}</Eyebrow>
        <DisplayHeading className="reveal">
          {content.headline.lead} <em>{content.headline.em1}</em>{' '}
          {content.headline.mid && <>{content.headline.mid} </>}
          {content.headline.em2 && <em>{content.headline.em2}</em>}
        </DisplayHeading>
        <p className="reveal max-w-[56ch] font-body text-[clamp(17px,1.4vw,21px)] leading-[1.5] text-slate">
          {content.lede}
        </p>
        <p className="reveal mt-[20px] max-w-[60ch] font-body text-[12px] leading-[1.6] italic text-mute">
          {content.mappingNote}
        </p>
      </div>

      <div className="reveal max-[1080px]:overflow-x-auto">
        <div className="grid grid-cols-[180px_repeat(4,1fr)] gap-px bg-rule max-[1080px]:min-w-[820px]">
          {/* Header row */}
          <div className="bg-paper" aria-hidden />
          {content.stages.map((stage) => (
            <div
              key={stage.name}
              className="bg-paper px-[20px] pb-[20px] pt-[24px]"
            >
              <div className="font-display text-[12px] uppercase tracking-[0.18em] text-aon">
                {stage.name}
              </div>
              <div className="mt-[6px] font-display text-[clamp(22px,2.2vw,30px)] font-normal leading-[1] tracking-[-0.01em] text-ink">
                {stage.gainBand}
              </div>
              <div className="mt-[4px] font-body text-[10px] uppercase tracking-[0.16em] text-mute">
                Efficiency lift
              </div>
            </div>
          ))}

          {/* Rows */}
          {content.rows.map((row) => (
            <div className="contents" key={row.label}>
              <div className="bg-paper px-[20px] py-[24px] font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">
                {row.label}
              </div>
              {row.cells.map((cell, i) => (
                <div
                  key={`${row.label}-${i}`}
                  className="bg-paper px-[20px] py-[24px] font-body text-[13.5px] leading-[1.55] text-slate"
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
