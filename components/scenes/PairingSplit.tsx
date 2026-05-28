import { DisplayHeading } from '@/components/primitives/DisplayHeading'
import { Eyebrow } from '@/components/primitives/Eyebrow'
import { Section } from '@/components/primitives/Section'
import { ScaffoldingCallout } from '@/components/scenes/ScaffoldingCallout'
import type { PairingContent, PairingSide } from '@/lib/types'

const ROMAN = ['i', 'ii', 'iii', 'iv', 'v'] as const

type Props = {
  pairing: PairingContent
  id?: string
  continueHref?: string
}

export function PairingSplit({ pairing, id, continueHref }: Props) {
  return (
    <Section variant="paper2" id={id} continueHref={continueHref}>
      <div className="mb-[80px] max-w-[820px]">
        <Eyebrow className="reveal">{pairing.eyebrow}</Eyebrow>
        <DisplayHeading className="reveal">
          {pairing.headline.line1}
          <br />
          {pairing.headline.line2} <em>{pairing.headline.em}</em>
        </DisplayHeading>
      </div>

      <div className="reveal grid grid-cols-2 border-t border-ink max-[760px]:grid-cols-1">
        <PairingColumn side={pairing.aon} surface="white" />
        <PairingColumn side={pairing.slalom} surface="paper" />
      </div>

      <ScaffoldingCallout scaffolding={pairing.scaffolding} />
    </Section>
  )
}

const NAME_TONE: Record<NonNullable<PairingSide['accent']>, string> = {
  aon: 'text-aon',
  slalom: 'text-slalom',
  neutral: 'text-ink',
}

function PairingColumn({ side, surface }: { side: PairingSide; surface: 'white' | 'paper' }) {
  const nameTone = NAME_TONE[side.accent ?? 'neutral']
  const surfaceClass = surface === 'white' ? 'bg-white' : 'bg-paper'
  return (
    <div
      className={[
        'border-r border-ink px-[40px] pb-[56px] pt-[48px]',
        'last:border-r-0',
        'max-[760px]:border-b max-[760px]:border-r-0 max-[760px]:last:border-b-0 max-[760px]:px-[24px] max-[760px]:py-[32px]',
        surfaceClass,
      ].join(' ')}
    >
      <div className="mb-[12px] font-body text-[11px] uppercase tracking-[0.18em] text-mute">
        {side.label}
      </div>
      <h3
        className={[
          'm-0 mb-[32px] font-display text-[44px] font-normal leading-[1] tracking-[-0.015em]',
          nameTone,
        ].join(' ')}
      >
        {side.name}
      </h3>
      <p className="mb-[36px] max-w-[36ch] font-body text-[16px] italic leading-[1.45] text-slate">
        {side.tagline}
      </p>
      <ul className="m-0 list-none p-0">
        {side.list.map((item, i) => (
          <li
            key={item.lead}
            className={[
              'grid grid-cols-[auto_1fr] gap-[16px] border-t border-rule py-[18px]',
              i === side.list.length - 1 ? 'border-b border-rule' : '',
              'font-body text-[14px] leading-[1.5] text-ink-soft',
            ].join(' ')}
          >
            <span className="min-w-[24px] font-display text-[14px] italic text-mute">
              {ROMAN[i]}.
            </span>
            <span>
              <strong className="mb-[2px] block font-semibold text-ink">{item.lead}</strong>
              {item.body}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
