import { DisplayHeading } from '@/components/primitives/DisplayHeading'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { Section } from '@/components/primitives/Section'
import type { EngagementContent } from '@/lib/types'

type Props = {
  engagement: EngagementContent
}

export function EngagementLadder({ engagement }: Props) {
  return (
    <Section variant="white">
      <div className="mb-[80px] max-w-[880px]">
        <Eyebrow className="reveal">{engagement.eyebrow}</Eyebrow>

        <DisplayHeading className="reveal">
          {engagement.headlineLead} <em>{engagement.headlineEm}</em>
          <br />
          {engagement.headlineTrail}
        </DisplayHeading>
      </div>

      <ol
        className="reveal grid list-none grid-cols-3 gap-px border-y border-ink bg-rule p-0 max-[760px]:grid-cols-1"
        role="list"
      >
        {engagement.steps.map((step) => (
          <li key={step.num} className="bg-paper px-[36px] pb-[56px] pt-[48px]">
            <div className="mb-[28px] font-display text-[clamp(56px,6vw,92px)] italic leading-[0.85] tracking-[-0.04em] text-aon">
              {step.num}
            </div>
            <div className="mb-[8px] font-body text-[11px] uppercase tracking-[0.18em] text-mute">
              {step.timeframe}
            </div>
            <h3 className="m-0 mb-[18px] font-display text-[28px] font-normal leading-[1.05] tracking-[-0.01em] text-ink">
              {step.name}
            </h3>
            <p
              className="m-0 font-body text-[14px] leading-[1.55] text-slate [&_strong]:font-semibold [&_strong]:text-ink"
              dangerouslySetInnerHTML={{ __html: step.description }}
            />
          </li>
        ))}
      </ol>

      <div className="reveal mt-[56px] grid grid-cols-[auto_1fr] items-center gap-[20px] border-l-[3px] border-aon bg-paper-2 p-[32px] max-[760px]:grid-cols-1">
        <div className="whitespace-nowrap font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-aon">
          Why {engagement.anchorFunction}
        </div>
        <div className="font-display text-[19px] leading-[1.35] tracking-[-0.005em] text-ink">
          {engagement.anchorLead} <em className="italic text-aon-deep">{engagement.anchorEm}</em>
          {engagement.anchorTrail}
        </div>
      </div>
    </Section>
  )
}
