#!/usr/bin/env node
/**
 * Quick helper: re-open the same /abbvie route in print emulation and snap a
 * full-document PNG so we can visually verify the print layout without having
 * to extract PDF pages with external tools.
 */
import puppeteer from 'puppeteer-core'
import { resolve } from 'node:path'

const URL = process.env.PDF_URL ?? 'http://localhost:4242/abbvie'
const OUT = resolve(process.env.OUT ?? '/tmp/abbvie-print-preview.png')
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--disable-gpu', '--hide-scrollbars'],
})

try {
  const page = await browser.newPage()
  // A2 landscape width @ 96dpi = 1684. Set a tall viewport so we can capture
  // the whole document in one screenshot.
  await page.setViewport({ width: 1684, height: 1191, deviceScaleFactor: 1 })
  await page.emulateMediaType('print')
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 })
  await page.evaluateHandle('document.fonts.ready')
  await new Promise((r) => setTimeout(r, 500))

  await page.screenshot({ path: OUT, fullPage: true })
  console.log(`wrote ${OUT}`)
} finally {
  await browser.close()
}
