import { Fragment } from 'react'
import type { Stat } from '@/lib/types'

type Props = {
  stat: Stat
}

/**
 * Splits `text` around `mark` and wraps the matched chunk in `<em>{mark}</em>`.
 * Returns the original string if `mark` is missing or not found.
 */
function withInlineEm(text: string, mark: string | undefined) {
  if (!mark) return text
  const idx = text.indexOf(mark)
  if (idx === -1) return text
  return (
    <Fragment>
      {text.slice(0, idx)}
      <em>{mark}</em>
      {text.slice(idx + mark.length)}
    </Fragment>
  )
}

/**
 * The kinetic stat — display-serif numeral with an optional red accent inside
 * the number (e.g. "10/10" with the "/" in Aon Red), and a slate label below
 * that may carry an italic emphasis substring.
 */
export function BigStat({ stat }: Props) {
  return (
    <div className="text-left">
      <div className="mb-[16px] font-display text-[clamp(64px,9vw,132px)] font-normal leading-[0.95] tracking-[-0.04em] text-ink [font-feature-settings:'lnum'] [&_em]:not-italic [&_em]:text-aon">
        {withInlineEm(stat.num, stat.numEm)}
      </div>
      <div className="max-w-[32ch] font-body text-[14px] leading-[1.5] text-slate [&_em]:italic">
        {withInlineEm(stat.label, stat.labelEm)}
      </div>
    </div>
  )
}
