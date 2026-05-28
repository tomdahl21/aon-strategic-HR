import { DisplayHeading } from '@/components/primitives/DisplayHeading'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { Section } from '@/components/primitives/Section'
import type { FoundationContent, FoundationFitItem } from '@/lib/types'

type Props = {
  content: FoundationContent
  id?: string
  continueHref?: string
}

export function Foundations({ content, id, continueHref }: Props) {
  return (
    <Section variant="ink" tall id={id} continueHref={continueHref}>
      <div className="mb-[80px] max-w-[820px]">
        <Eyebrow tone="slalom-on-dark" className="reveal">
          {content.eyebrow}
        </Eyebrow>
        <DisplayHeading tone="dark-slalom" className="reveal">
          {content.headline.lead} <em>{content.headline.em1}</em>
        </DisplayHeading>
        <p className="reveal max-w-[58ch] font-body text-[clamp(17px,1.4vw,21px)] leading-[1.5] text-paper/70">
          {content.lede}
        </p>
      </div>

      <div className="reveal grid grid-cols-3 gap-px bg-paper/10 max-[1080px]:grid-cols-1">
        {content.phases.map((phase) => (
          <article
            key={phase.ordinal}
            className="bg-ink px-[28px] pb-[40px] pt-[36px]"
          >
            <div className="mb-[18px] font-display text-[clamp(38px,4vw,56px)] font-normal leading-none tracking-[-0.02em] text-slalom-bright">
              {phase.ordinal}
            </div>
            <h3 className="m-0 mb-[20px] font-display text-[clamp(22px,2.2vw,30px)] font-normal leading-[1.05] tracking-[-0.01em] text-paper">
              {phase.name}
            </h3>
            <p className="m-0 font-body text-[14px] leading-[1.6] text-paper/75">
              {phase.description}
            </p>
          </article>
        ))}
      </div>

      <div className="reveal mt-[80px] grid grid-cols-2 gap-[clamp(40px,6vw,96px)] max-[1080px]:grid-cols-1">
        <FitColumn label={content.whenLabel} items={content.whenItems} accent="slalom" />
        <FitColumn label={content.whenNotLabel} items={content.whenNotItems} accent="mute" />
      </div>
    </Section>
  )
}

function FitColumn({
  label,
  items,
  accent,
}: {
  label: string
  items: FoundationFitItem[]
  accent: 'slalom' | 'mute'
}) {
  const labelColor = accent === 'slalom' ? 'text-slalom-bright' : 'text-paper/45'
  return (
    <div>
      <div
        className={`mb-[28px] font-body text-[11px] uppercase tracking-[0.18em] ${labelColor}`}
      >
        {label}
      </div>
      <ul className="m-0 list-none p-0" role="list">
        {items.map((item, i) => (
          <li
            key={item.lead}
            className={[
              'border-t border-paper/[0.12] py-[18px] font-body text-[14px] leading-[1.6]',
              i === items.length - 1 ? 'border-b border-paper/[0.12]' : '',
            ].join(' ')}
          >
            <span className="font-semibold text-paper">{item.lead}</span>{' '}
            <span className="text-paper/70">{item.body}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
