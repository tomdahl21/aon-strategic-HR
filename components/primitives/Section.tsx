import type { ReactNode } from 'react'
import { SectionContinue } from '@/components/primitives/SectionContinue'

type Variant = 'white' | 'paper' | 'paper2' | 'ink'

type Props = {
  /** Element to render. Almost always `section`; use `div` for nested compositions. */
  as?: 'section' | 'div'
  /** Background variant. Maps to the four-tone palette from PRD §4. */
  variant?: Variant
  /** Use the taller vertical rhythm — reserved for emphatic scenes like the ladder. */
  tall?: boolean
  /** Narrow content column (920px) instead of the default 1320px. */
  narrow?: boolean
  /** Drop the inner max-width wrapper — caller manages layout themselves. */
  bare?: boolean
  /** Anchor id for in-page navigation between sections. */
  id?: string
  /** When set, render a "Continue" cue at the bottom-right linking to this href. */
  continueHref?: string
  /** Override the Continue label. */
  continueLabel?: string
  className?: string
  children: ReactNode
}

const variantClass: Record<Variant, string> = {
  white: 'bg-white text-ink',
  paper: 'bg-paper text-ink',
  paper2: 'bg-paper-2 text-ink',
  ink: 'bg-ink text-paper',
}

export function Section({
  as: Tag = 'section',
  variant = 'paper',
  tall = false,
  narrow = false,
  bare = false,
  id,
  continueHref,
  continueLabel,
  className = '',
  children,
}: Props) {
  const outer = [
    'relative px-gutter',
    tall ? 'py-section-y-tall' : 'py-section-y',
    variantClass[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const continueTone = variant === 'ink' ? 'dark' : 'light'

  const continueEl = continueHref ? (
    <div className="mt-[clamp(48px,8vh,96px)] flex justify-end">
      <SectionContinue
        href={continueHref}
        label={continueLabel}
        tone={continueTone}
      />
    </div>
  ) : null

  if (bare) {
    return (
      <Tag id={id} className={outer}>
        {children}
        {continueEl}
      </Tag>
    )
  }

  return (
    <Tag id={id} className={outer}>
      <div className={`mx-auto ${narrow ? 'max-w-narrow' : 'max-w-content'}`}>
        {children}
        {continueEl}
      </div>
    </Tag>
  )
}
