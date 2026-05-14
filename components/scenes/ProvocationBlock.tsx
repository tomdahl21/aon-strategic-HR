import { BigStat } from '@/components/primitives/BigStat'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { PillarCard } from '@/components/primitives/PillarCard'
import { Section } from '@/components/primitives/Section'
import type { ProvocationContent } from '@/lib/types'

type Props = {
  provocation: ProvocationContent
}

export function ProvocationBlock({ provocation }: Props) {
  return (
    <Section variant="white">
      <Eyebrow className="reveal">{provocation.eyebrow}</Eyebrow>

      <div className="grid items-start gap-[clamp(40px,6vw,100px)] [grid-template-columns:1.1fr_0.9fr] max-[760px]:grid-cols-1 max-[760px]:gap-[32px]">
        <h2 className="reveal m-0 mb-[32px] font-display text-[clamp(36px,5.4vw,68px)] font-normal leading-[1.04] tracking-[-0.018em] text-ink [&_em]:italic [&_em]:text-aon-deep">
          {provocation.statement} <em>{provocation.statementEm}</em>{' '}
          {provocation.statementMid}{' '}
          <span className="relative inline-block">
            {provocation.statementStrike}
            <span
              aria-hidden
              className="pointer-events-none absolute -left-[4px] -right-[4px] top-[52%] h-[3px] -rotate-2 bg-aon"
            />
          </span>
        </h2>

        <div className="reveal [&_em]:italic">
          {provocation.sideCopy.map((html, i) => (
            <p
              key={i}
              className="m-0 mb-[22px] font-body text-[16px] leading-[1.7] text-slate last:mb-0"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ))}
        </div>
      </div>

      <div className="reveal mt-[80px] grid grid-cols-3 gap-[60px] border-t border-rule pt-[60px] max-[760px]:grid-cols-1 max-[760px]:gap-[40px]">
        {provocation.stats.map((stat) => (
          <BigStat key={stat.label} stat={stat} />
        ))}
      </div>

      <div className="reveal mt-[100px] border-y border-rule py-[56px]">
        <div className="mb-[40px] font-body text-[13px] uppercase tracking-[0.16em] text-mute">
          {provocation.pillarHeading}
        </div>
        <div className="grid items-stretch gap-[24px] [grid-template-columns:5fr_1fr_5fr] max-[760px]:grid-cols-1">
          <div className="grid grid-cols-3 gap-[12px] max-[760px]:grid-cols-1">
            {provocation.pillarFrom.map((p) => (
              <PillarCard key={p.name} pillar={p} strike={p.strike} />
            ))}
          </div>
          <div className="flex items-center justify-center font-display text-[24px] italic text-aon max-[760px]:py-[8px] max-[760px]:text-[18px]">
            becomes
          </div>
          <div className="grid grid-cols-2 gap-[12px] max-[760px]:grid-cols-1">
            {provocation.pillarTo.map((p) => (
              <PillarCard key={p.name} pillar={p} accent />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
