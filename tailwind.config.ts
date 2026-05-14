import type { Config } from 'tailwindcss'
import { colors, fontFamily, maxWidth, spacing } from './lib/theme'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily,
      maxWidth,
      spacing,
      letterSpacing: {
        eyebrow: '0.18em',
        tight: '-0.015em',
        tighter: '-0.025em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
