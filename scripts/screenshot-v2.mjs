#!/usr/bin/env node
/**
 * Quick visual verification for the /abbvie-v2 expanded composition.
 * Renders the full page in headless Chrome and writes a PNG so we can
 * eyeball the eight new scenes alongside the existing seven.
 */
import puppeteer from 'puppeteer-core'

const URL = process.env.URL ?? 'http://localhost:3737/abbvie-v2'
const OUT = process.env.OUT ?? '/tmp/abbvie-v2-fullpage.png'
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

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
  // Force scroll-reveal elements to be visible so the screenshot shows real content.
  await page.addStyleTag({
    content: `.reveal { opacity: 1 !important; transform: none !important; }`,
  })
  await new Promise((r) => setTimeout(r, 600))
  await page.screenshot({ path: OUT, fullPage: true })
  console.log(`wrote ${OUT}`)
} finally {
  await browser.close()
}
