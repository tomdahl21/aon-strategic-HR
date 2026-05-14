import type { Metadata, Viewport } from 'next'
import { Instrument_Serif } from 'next/font/google'
import { RevealController } from '@/components/layout/RevealController'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Aon × AbbVie — The Adaptive HR Organization',
  description:
    'A private proposal on AI-enabled HR transformation, prepared for the Office of the Chief Human Resources Officer.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: 'Aon × AbbVie — The Adaptive HR Organization',
    description:
      'AI-enabled, future-ready HR. A private proposal prepared for AbbVie, in partnership with Slalom.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#FAF7F2',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrumentSerif.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <RevealController />
      </body>
    </html>
  )
}
