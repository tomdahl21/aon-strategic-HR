import type { ScaffoldingContent } from '@/lib/types'

type Props = {
  scaffolding: ScaffoldingContent
}

/**
 * The dark "scaffolding gap" callout — italic display quote on the left with
 * Aon-red emphasis, hairline-divided "live pilot" proof column on the right.
 * Stacks vertically below 760px with a hairline divider becoming the top edge.
 */
export function ScaffoldingCallout({ scaffolding }: Props) {
  return (
    <div className="reveal mt-[80px] grid items-center gap-[clamp(32px,5vw,80px)] bg-ink px-[clamp(32px,5vw,64px)] py-[56px] text-paper [grid-template-columns:1fr_1fr] max-[760px]:grid-cols-1 max-[760px]:gap-[20px]">
      <p className="m-0 font-display text-[clamp(24px,2.6vw,36px)] font-normal leading-[1.15] tracking-[-0.01em]">
        {scaffolding.quote} <em className="italic text-aon">{scaffolding.quoteEm}</em>
      </p>

      <div className="border-l border-paper/20 pl-[clamp(20px,3vw,40px)] font-body text-[14px] leading-[1.6] text-paper/75 max-[760px]:border-l-0 max-[760px]:border-t max-[760px]:border-paper/20 max-[760px]:pl-0 max-[760px]:pt-[20px]">
        <strong className="mb-[8px] block text-[11px] font-semibold uppercase tracking-[0.14em] text-paper">
          {scaffolding.proofLabel}
        </strong>
        {scaffolding.proofBody}
      </div>
    </div>
  )
}
