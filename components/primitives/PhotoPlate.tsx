'use client'

import { useEffect, useRef } from 'react'
import Image, { type StaticImageData } from 'next/image'

type Props = {
  src: StaticImageData
  /** Required for accessibility. Keep short and descriptive. */
  alt: string
  /** Anchor id so other elements (e.g. the hero "Continue" link) can scroll
   *  to this plate. */
  id?: string
  /** Render with priority + no lazy-load. Use on the first photo only. */
  priority?: boolean
  /** Vertical band height. Defaults to the standard plate; `tall` is for
   *  hero-adjacent slots, `compact` for trailing slots that follow a long
   *  scene. */
  height?: 'compact' | 'plate' | 'tall'
  /** CSS object-position string controlling crop anchor. Pin this to the
   *  subject's face so the parallax + responsive crop never decapitate.
   *  Defaults to `50% 35%` — a slight upward bias that flatters most
   *  portrait/group compositions. */
  objectPosition?: string
  /** Strength of the parallax translate. 0 disables the effect. Default 0.2 —
   *  the image scrolls at ~80% of viewport speed (overscan 30%). */
  parallax?: number
}

const heightClass: Record<NonNullable<Props['height']>, string> = {
  compact: 'h-[clamp(440px,64vh,680px)]',
  plate: 'h-[clamp(540px,80vh,840px)]',
  tall: 'h-[clamp(640px,92vh,1000px)]',
}

/**
 * A full-bleed editorial photo plate with subtle scroll-driven parallax.
 *
 * The container is fixed height and full viewport width. The image is sized
 * 130% tall so it has overscan above and below; we translate it on scroll so
 * a different crop is visible as the user moves through the section. This
 * reads as "responsive cropping" rather than a pinned full-page parallax —
 * the page never stops scrolling.
 *
 * Honors prefers-reduced-motion (image stays static at its center crop).
 */
export function PhotoPlate({
  src,
  alt,
  id,
  priority = false,
  height = 'plate',
  objectPosition = '50% 35%',
  parallax = 0.2,
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (parallax === 0) return
    const section = sectionRef.current
    const img = imgRef.current
    if (!section || !img) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let ticking = false
    let visible = false

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry?.isIntersecting ?? false
      },
      { rootMargin: '120px 0px 120px 0px' },
    )
    io.observe(section)

    const update = () => {
      ticking = false
      if (!visible) return
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight || 1
      // progress: -1 (section bottom at top of viewport) → 1 (section top at bottom of viewport).
      // 0 when the section's vertical center sits at the viewport center.
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2)
      const clamped = Math.max(-1, Math.min(1, progress))
      // overscan is 15% top + 15% bottom (image is 130% tall).
      // translate -15%..+15% maps to the available slack.
      img.style.transform = `translate3d(-50%, calc(-50% + ${(-clamped * parallax * 100).toFixed(2)}%), 0)`
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [parallax])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative w-full overflow-hidden bg-ink ${heightClass[height]}`}
      aria-label={alt}
    >
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        placeholder="blur"
        className="!h-[130%] !w-[130%] max-w-none object-cover"
        style={{
          // Centered, taller-than-container; JS translates the Y on scroll.
          left: '50%',
          top: '50%',
          objectPosition,
          transform: 'translate3d(-50%, -50%, 0)',
        }}
      />
    </section>
  )
}
