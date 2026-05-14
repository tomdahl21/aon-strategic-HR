'use client'

import { useEffect } from 'react'

/**
 * Single global controller for the `.reveal` scroll-in pattern.
 *
 * - Elements inside a `[data-hero-stagger]` ancestor fire in DOM order with a
 *   120ms stagger on mount — matches the index.html hero hand-off.
 * - All other `.reveal` elements use an IntersectionObserver firing at 12%
 *   visibility (with a 60px bottom rootMargin).
 * - When prefers-reduced-motion is on, everything snaps to visible immediately.
 */
export function RevealController() {
  useEffect(() => {
    const all = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (all.length === 0) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      for (const el of all) el.classList.add('is-visible')
      return
    }

    const heroRoot = document.querySelector<HTMLElement>('[data-hero-stagger]')
    const heroReveals = heroRoot ? all.filter((el) => heroRoot.contains(el)) : []
    const others = heroRoot ? all.filter((el) => !heroRoot.contains(el)) : all

    const timeouts: number[] = []
    heroReveals.forEach((el, i) => {
      const id = window.setTimeout(() => el.classList.add('is-visible'), 120 * i)
      timeouts.push(id)
    })

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )
    for (const el of others) io.observe(el)

    return () => {
      for (const id of timeouts) window.clearTimeout(id)
      io.disconnect()
    }
  }, [])

  return null
}
