import { DisplayHeading } from '@/components/primitives/DisplayHeading'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { Section } from '@/components/primitives/Section'
import type { LadderContent } from '@/lib/types'

type Props = {
  content: LadderContent
  id?: string
  continueHref?: string
}

/**
 * Progressive red saturation across the five gain values — muted on the early
 * stages, full Aon Red on the late ones. Mirrors index.html `.stage:nth-child`.
 */
const GAIN_TINTS = [
  'rgb(var(--aon) / 0.55)',
  'rgb(var(--aon) / 0.7)',
  'rgb(var(--aon) / 0.85)',
  'rgb(var(--aon))',
  'rgb(var(--aon))',
] as const

export function MaturityLadder({ content, id, continueHref }: Props) {
  return (
    <Section variant="ink" tall id={id} continueHref={continueHref}>
      <Eyebrow tone="on-dark" className="reveal">
        {content.eyebrow}
      </Eyebrow>

      <DisplayHeading tone="dark" className="reveal">
        {content.headline.lead} <em>{content.headline.em1}</em> {content.headline.mid}{' '}
        <em>{content.headline.em2}</em>
      </DisplayHeading>

      <p className="reveal max-w-[56ch] font-body text-[clamp(17px,1.4vw,21px)] leading-[1.5] text-paper/70">
        {content.lede}
      </p>

      <div
        className="reveal mt-[100px] grid grid-cols-5 gap-px bg-paper/10 max-[1080px]:overflow-x-auto max-[1080px]:[grid-template-columns:repeat(5,minmax(180px,1fr))]"
        role="list"
      >
        {content.stages.map((stage, idx) => (
          <article
            key={stage.name}
            role="listitem"
            className="bg-ink px-[28px] pb-[48px] pt-[40px] transition-colors duration-[400ms] hover:bg-[#161616]"
          >
            <span className="mb-[28px] block font-display text-[12px] tracking-[0.2em] text-paper/40">
              {stage.eyebrow}
            </span>
            <h3 className="m-0 mb-[28px] font-display text-[clamp(28px,2.6vw,40px)] font-normal leading-[1] tracking-[-0.01em] text-paper">
              {stage.name}
            </h3>
            <div
              className="mb-[18px] font-display text-[clamp(38px,4vw,60px)] font-normal leading-[1] tracking-[-0.02em]"
              style={{ color: GAIN_TINTS[idx] }}
            >
              {stage.gain}
            </div>
            <div className="mb-[32px] font-body text-[11px] uppercase tracking-[0.16em] text-paper/45">
              {stage.gainLabel}
            </div>
            <p className="m-0 border-t border-paper/[0.12] pt-[24px] font-body text-[14px] leading-[1.55] text-paper/75">
              {stage.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
