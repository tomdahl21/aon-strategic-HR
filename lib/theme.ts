/**
 * Design tokens — single source for Tailwind config consumption.
 * Mirrors the CSS custom properties declared in app/globals.css.
 */

/**
 * Color tokens consumed by Tailwind via the `<alpha-value>` placeholder, so
 * utilities like `text-aon/90` or `bg-paper/10` resolve to real RGBA values.
 * Channel values themselves live in app/globals.css `:root`.
 */
export const colors = {
  ink: 'rgb(var(--ink) / <alpha-value>)',
  'ink-soft': 'rgb(var(--ink-soft) / <alpha-value>)',
  slate: 'rgb(var(--slate) / <alpha-value>)',
  mute: 'rgb(var(--mute) / <alpha-value>)',
  rule: 'rgb(var(--rule) / <alpha-value>)',
  paper: 'rgb(var(--paper) / <alpha-value>)',
  'paper-2': 'rgb(var(--paper-2) / <alpha-value>)',
  white: 'rgb(var(--white) / <alpha-value>)',
  aon: 'rgb(var(--aon) / <alpha-value>)',
  'aon-deep': 'rgb(var(--aon-deep) / <alpha-value>)',
  slalom: 'rgb(var(--slalom) / <alpha-value>)',
  'slalom-bright': 'rgb(var(--slalom-bright) / <alpha-value>)',
  'slalom-cyan': 'rgb(var(--slalom-cyan) / <alpha-value>)',
  'slalom-lime': 'rgb(var(--slalom-lime) / <alpha-value>)',
} as const

export const fontFamily: Record<string, string[]> = {
  display: ['var(--font-display)', '"Times New Roman"', 'Times', 'serif'],
  body: [
    '"Helvetica Neue"',
    'Helvetica',
    'Arial',
    'system-ui',
    '-apple-system',
    'sans-serif',
  ],
}

export const maxWidth = {
  content: '1320px',
  narrow: '920px',
  hero: '1180px',
} as const

export const spacing = {
  gutter: 'clamp(24px, 5vw, 80px)',
  'section-y': 'clamp(80px, 14vh, 160px)',
  'section-y-tall': 'clamp(100px, 18vh, 200px)',
} as const

export const fontSize = {
  'eyebrow': ['11px', { letterSpacing: '0.18em', lineHeight: '1' }],
  'meta': ['12px', { letterSpacing: '0.14em', lineHeight: '1.4' }],
  'body-sm': ['13px', { lineHeight: '1.5' }],
  'body': ['17px', { lineHeight: '1.55' }],
} as const
