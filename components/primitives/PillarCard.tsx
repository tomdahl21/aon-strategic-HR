import type { PillarItem } from '@/lib/types'

type Props = {
  pillar: PillarItem
  /** Diagonal red strike-through overlay, dimmed — for the deprecated pillars. */
  strike?: boolean
  /** Dark fill, paper text — for the new pillars on the "to" side. */
  accent?: boolean
}

/**
 * One card in the 3 → 2 pillar collapse diagram. Three variants:
 *   - default — paper bg, hairline border, ink display name + uppercase sub
 *   - strike  — same, dimmed to 55%, with a single-line red diagonal stroke
 *   - accent  — ink bg, paper text — the "to" side
 */
export function PillarCard({ pillar, strike = false, accent = false }: Props) {
  const base =
    'relative flex min-h-[130px] flex-col justify-between rounded-[2px] border p-[24px]'

  const surface = accent
    ? 'border-ink bg-ink'
    : strike
      ? 'border-rule bg-paper opacity-55'
      : 'border-rule bg-paper'

  const nameTone = accent ? 'text-paper' : 'text-ink'
  const subTone = accent ? 'text-paper/50' : 'text-mute'

  return (
    <div className={`${base} ${surface}`}>
      {strike && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_calc(50%-1px),rgb(var(--aon))_50%,transparent_calc(50%+1px))]"
        />
      )}
      <div
        className={`mb-[8px] font-display text-[22px] leading-[1.1] ${nameTone}`}
      >
        {pillar.name}
      </div>
      <div
        className={`font-body text-[12px] uppercase tracking-[0.06em] ${subTone}`}
      >
        {pillar.sub}
      </div>
    </div>
  )
}
