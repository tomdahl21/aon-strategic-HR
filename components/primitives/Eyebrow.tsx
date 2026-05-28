type Tone = 'aon' | 'mute' | 'on-dark' | 'slalom' | 'slalom-on-dark'

type Props = {
  /** Color treatment. `on-dark` softens to 90% so it sits on top of `--ink`. */
  tone?: Tone
  className?: string
  children: string
}

const toneClass: Record<Tone, { text: string; bar: string }> = {
  aon: { text: 'text-aon', bar: 'bg-aon' },
  mute: { text: 'text-mute', bar: 'bg-mute' },
  'on-dark': { text: 'text-aon/90', bar: 'bg-aon/90' },
  // Slalom-blue tones for the Slalom-origin sections. Deep blue on light;
  // the brighter blue on dark so it stays legible against --ink.
  slalom: { text: 'text-slalom', bar: 'bg-slalom' },
  'slalom-on-dark': { text: 'text-slalom-bright', bar: 'bg-slalom-bright' },
}

/**
 * Small-caps red label with a 24px hairline accent — the section number tag.
 * Composes with the global `reveal` class when used inside a scene.
 */
export function Eyebrow({ tone = 'aon', className = '', children }: Props) {
  const { text, bar } = toneClass[tone]
  return (
    <div
      className={`mb-[28px] flex items-center gap-[12px] font-body text-[11px] font-semibold uppercase tracking-[0.18em] ${text} ${className}`.trim()}
    >
      <span aria-hidden className={`inline-block h-px w-[24px] ${bar}`} />
      {children}
    </div>
  )
}
