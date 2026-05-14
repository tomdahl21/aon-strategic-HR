import { Eyebrow } from '@/components/primitives/Eyebrow'
import type { ClosingContent } from '@/lib/types'

type Props = {
  closing: ClosingContent
  id?: string
}

/**
 * The closing scene — italic display question flanked by red curly quotes,
 * with a two-column close row underneath (invitation copy + Aon/Slalom team).
 * Renders the section directly because the vertical rhythm is taller than the
 * default Section variant (clamp(120px, 18vh, 200px) top, 60px bottom).
 */
export function ClosingConversation({ closing, id }: Props) {
  return (
    <section id={id} className="bg-paper px-gutter pb-[60px] pt-[clamp(120px,18vh,200px)]">
      <div className="mx-auto max-w-hero">
        <Eyebrow className="reveal">{closing.eyebrow}</Eyebrow>

        <p className="reveal m-0 mb-[64px] max-w-[22ch] font-display text-[clamp(40px,5.8vw,80px)] font-normal italic leading-[1.05] tracking-[-0.015em] text-ink">
          <span aria-hidden className="mr-[8px] text-aon">
            “
          </span>
          {closing.question}
          <span aria-hidden className="text-aon">
            ”
          </span>
        </p>

        <div className="reveal grid grid-cols-2 gap-[60px] border-t border-rule pt-[56px] max-[760px]:grid-cols-1 max-[760px]:gap-[32px]">
          <div>
            <div className="mb-[14px] font-body text-[11px] uppercase tracking-[0.18em] text-mute">
              {closing.invitationLabel}
            </div>
            <p className="m-0 font-body text-[16px] leading-[1.6] text-slate">
              {closing.invitation}
            </p>
          </div>
          <div>
            <div className="mb-[14px] font-body text-[11px] uppercase tracking-[0.18em] text-mute">
              {closing.teamLabel}
            </div>
            <p className="m-0 mb-[8px] font-display text-[24px] leading-[1.2] text-ink">
              {closing.team.headline}
            </p>
            <p className="m-0 font-body text-[13px] text-slate">{closing.team.support}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
