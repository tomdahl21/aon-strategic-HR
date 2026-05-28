#!/usr/bin/env node
/**
 * Snap individual section viewports of /abbvie-v2 so each new scene is
 * legible at full resolution (vs the full-page thumbnail). Output goes to
 * /tmp/abbvie-v2-sections/*.png.
 */
import { mkdir } from 'node:fs/promises'
import puppeteer from 'puppeteer-core'

const URL = process.env.URL ?? 'http://localhost:3737/abbvie-v2'
const OUT_DIR = process.env.OUT_DIR ?? '/tmp/abbvie-v2-sections'
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const SECTIONS = [
  ['02-footprint', '#section-02'],
  ['04-applications', '#section-04'],
  ['07-stakeholders', '#section-07'],
  ['08-functions', '#section-08'],
  ['09-foundation', '#section-09'],
  ['10-pitfalls', '#section-10'],
  ['12-questions', '#section-12'],
  ['13-journey', '#section-13'],
]

await mkdir(OUT_DIR, { recursive: true })

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--disable-gpu', '--hide-scrollbars'],
})

try {
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 })
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 })
  await page.evaluateHandle('document.fonts.ready')
  await page.addStyleTag({
    content: `.reveal { opacity: 1 !important; transform: none !important; }`,
  })

  for (const [name, sel] of SECTIONS) {
    const el = await page.$(sel)
    if (!el) {
      console.log(`skip ${name} — selector ${sel} not found`)
      continue
    }
    await el.scrollIntoView()
    await new Promise((r) => setTimeout(r, 250))
    const path = `${OUT_DIR}/${name}.png`
    await el.screenshot({ path })
    console.log(`wrote ${path}`)
  }
} finally {
  await browser.close()
}
