#!/usr/bin/env node
/**
 * Render the live /abbvie route to a multi-page PDF for stakeholder review.
 *
 * One section per page, A2 landscape, paper-tone background preserved.
 * Reuses the user's local Chrome via puppeteer-core (no Chromium download).
 *
 * Usage:
 *   node scripts/export-pdf.mjs                 # defaults
 *   PDF_URL=http://localhost:4242/abbvie node scripts/export-pdf.mjs
 *   PDF_OUT=exports/foo.pdf node scripts/export-pdf.mjs
 */
import puppeteer from 'puppeteer-core'
import { resolve } from 'node:path'
import { mkdirSync } from 'node:fs'

const URL = process.env.PDF_URL ?? 'http://localhost:4242/abbvie'
const OUT = resolve(
  process.env.PDF_OUT ?? 'exports/aon-strategic-hr-abbvie-feedback-letter.pdf',
)
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

// A2 landscape — generous canvas, fits each scene on one page with room for
// reviewer annotations. Dimensions in inches because that's what puppeteer wants.
const PAPER = { width: '23.4in', height: '16.5in' }

mkdirSync(resolve(OUT, '..'), { recursive: true })

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--disable-gpu', '--hide-scrollbars'],
})

try {
  const page = await browser.newPage()
  await page.emulateMediaType('print')
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 })

  // Force any in-flight fonts/images to settle.
  await page.evaluateHandle('document.fonts.ready')
  await new Promise((r) => setTimeout(r, 500))

  await page.pdf({
    path: OUT,
    width: PAPER.width,
    height: PAPER.height,
    printBackground: true,
    preferCSSPageSize: false,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  })

  console.log(`wrote ${OUT}`)
} finally {
  await browser.close()
}
