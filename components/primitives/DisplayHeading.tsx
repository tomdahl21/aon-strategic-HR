import type { ReactNode } from 'react'

type Size = 'section' | 'sub'
type Tone = 'light' | 'dark'

type Props = {
  /** Heading level. Defaults to h2 — h1 is reserved for the hero. */
  as?: 'h2' | 'h3'
  /** Type-scale variant. `section` = clamp(40,6vw,76). `sub` = clamp(28,2.6vw,40). */
  size?: Size
  /** Bg tone. Light: ink text + burgundy em. Dark: paper text + Aon em. */
  tone?: Tone
  className?: string
  children: ReactNode
}

const sizeClass: Record<Size, string> = {
  section: 'text-[clamp(40px,6vw,76px)] leading-[1.02] tracking-[-0.015em]',
  sub: 'text-[clamp(28px,2.6vw,40px)] leading-[1] tracking-[-0.01em]',
}

const toneClass: Record<Tone, string> = {
  light: 'text-ink [&_em]:text-aon-deep',
  dark: 'text-paper [&_em]:text-aon',
}

/**
 * The editorial display heading. Pass `<em>` inline to mark the italic
 * burgundy (light bg) or italic Aon (dark bg) emphasis phrase.
 */
export function DisplayHeading({
  as: Tag = 'h2',
  size = 'section',
  tone = 'light',
  className = '',
  children,
}: Props) {
  return (
    <Tag
      className={[
        'm-0 mb-[36px] font-display font-normal',
        '[&_em]:italic',
        sizeClass[size],
        toneClass[tone],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  )
}
