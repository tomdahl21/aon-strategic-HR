import { DisplayHeading } from '@/components/primitives/DisplayHeading'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { Section } from '@/components/primitives/Section'
import type { AdoptionJourneyContent } from '@/lib/types'

type Props = {
  content: AdoptionJourneyContent
  id?: string
  continueHref?: string
}

/**
 * Progressive saturation across the four adoption stages, mirroring
 * the MaturityLadder treatment so the dark-section signature pattern
 * carries through.
 */
const GAIN_TINTS = [
  'rgb(var(--slalom-bright) / 0.55)',
  'rgb(var(--slalom-bright) / 0.75)',
  'rgb(var(--slalom-bright) / 0.9)',
  'rgb(var(--slalom-bright))',
] as const

export function AdoptionJourney({ content, id, continueHref }: Props) {
  return (
    <Section variant="ink" tall id={id} continueHref={continueHref}>
      <div className="mb-[72px] max-w-[820px]">
        <Eyebrow tone="slalom-on-dark" className="reveal">
          {content.eyebrow}
        </Eyebrow>
        <DisplayHeading tone="dark-slalom" className="reveal">
          {content.headline.lead} <em>{content.headline.em1}</em> {content.headline.mid}{' '}
          <em>{content.headline.em2}</em>
        </DisplayHeading>
        <p className="reveal max-w-[58ch] font-body text-[clamp(17px,1.4vw,21px)] leading-[1.5] text-paper/70">
          {content.lede}
        </p>
      </div>

      <div
        className="reveal grid grid-cols-4 gap-px bg-paper/10 max-[1080px]:overflow-x-auto max-[1080px]:[grid-template-columns:repeat(4,minmax(220px,1fr))]"
        role="list"
      >
        {content.stages.map((stage, idx) => (
          <article
            key={stage.ordinal}
            role="listitem"
            className="bg-ink px-[28px] pb-[48px] pt-[40px] transition-colors duration-[400ms] hover:bg-[#161616]"
          >
            <span className="mb-[28px] block font-display text-[12px] tracking-[0.2em] text-paper/40">
              {stage.ordinal}
            </span>
            <h3 className="m-0 mb-[24px] font-display text-[clamp(28px,2.6vw,40px)] font-normal leading-[1] tracking-[-0.01em] text-paper">
              {stage.name}
            </h3>
            <div
              className="mb-[10px] font-display text-[clamp(36px,3.8vw,52px)] font-normal leading-[1] tracking-[-0.02em]"
              style={{ color: GAIN_TINTS[idx] }}
            >
              {stage.gain}
            </div>
            <div className="mb-[32px] font-body text-[11px] uppercase tracking-[0.16em] text-paper/45">
              {content.liftLabel}
            </div>
            <p className="m-0 mb-[20px] font-body text-[13.5px] leading-[1.55] font-semibold text-paper/85">
              {stage.focus}
            </p>
            <p className="m-0 border-t border-paper/[0.12] pt-[20px] font-body text-[13.5px] leading-[1.6] text-paper/70">
              {stage.outcome}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
