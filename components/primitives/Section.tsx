import type { ReactNode } from 'react'

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

  if (bare) {
    return <Tag className={outer}>{children}</Tag>
  }

  return (
    <Tag className={outer}>
      <div className={`mx-auto ${narrow ? 'max-w-narrow' : 'max-w-content'}`}>{children}</div>
    </Tag>
  )
}
