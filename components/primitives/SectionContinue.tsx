type Tone = 'light' | 'dark'

type Props = {
  /** In-page anchor href to scroll to (e.g. "#section-02"). */
  href: string
  /** Override the label. Defaults to "Continue". */
  label?: string
  /** Color treatment. `light` is for paper/white backgrounds, `dark` for ink. */
  tone?: Tone
  className?: string
}

const toneClass: Record<Tone, string> = {
  light: 'text-mute hover:text-ink focus-visible:text-ink',
  dark: 'text-paper/60 hover:text-paper focus-visible:text-paper',
}

/**
 * The reusable "Continue" cue — small uppercase label paired with the animated
 * vertical hairline (`.hero-scroll-line`). Echoes the hero's scroll hint and
 * sits at the bottom-right of each section that has a next one to progress to.
 */
export function SectionContinue({
  href,
  label = 'Continue',
  tone = 'light',
  className = '',
}: Props) {
  return (
    <a
      href={href}
      aria-label={`${label} to the next section`}
      className={[
        'group inline-flex items-center gap-[10px]',
        'font-body text-[11px] uppercase tracking-[0.2em]',
        'transition-colors duration-200',
        toneClass[tone],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span>{label}</span>
      <span aria-hidden className="hero-scroll-line relative -top-[3px]" />
    </a>
  )
}
