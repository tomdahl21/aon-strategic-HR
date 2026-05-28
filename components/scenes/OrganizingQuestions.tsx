import { DisplayHeading } from '@/components/primitives/DisplayHeading'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { Section } from '@/components/primitives/Section'
import type { OrganizingQuestionsContent } from '@/lib/types'

type Props = {
  content: OrganizingQuestionsContent
  id?: string
  continueHref?: string
}

export function OrganizingQuestions({ content, id, continueHref }: Props) {
  return (
    <Section variant="paper" id={id} continueHref={continueHref}>
      <div className="mb-[80px] max-w-[820px]">
        <Eyebrow className="reveal">{content.eyebrow}</Eyebrow>
        <DisplayHeading className="reveal">
          {content.headline.lead} <em>{content.headline.em1}</em> {content.headline.mid}{' '}
          <em>{content.headline.em2}</em>
        </DisplayHeading>
        <p className="reveal max-w-[60ch] font-body text-[clamp(17px,1.4vw,21px)] leading-[1.5] text-slate">
          {content.lede}
        </p>
      </div>

      <ol className="reveal m-0 grid list-none grid-cols-2 gap-px bg-rule p-0 max-[760px]:grid-cols-1">
        {content.questions.map((q) => (
          <li
            key={q.num}
            className="bg-paper px-[32px] pb-[40px] pt-[36px]"
          >
            <div className="mb-[24px] font-display text-[clamp(40px,4vw,56px)] font-normal leading-none tracking-[-0.02em] text-aon">
              {q.num}
            </div>
            <p className="m-0 mb-[14px] font-display text-[clamp(22px,2.2vw,30px)] font-normal leading-[1.15] tracking-[-0.005em] text-ink">
              {q.question}
            </p>
            <p className="m-0 font-body text-[14.5px] leading-[1.6] italic text-slate">
              {q.followUp}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
