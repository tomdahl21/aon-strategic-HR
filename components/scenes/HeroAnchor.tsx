import type { HeroContent } from '@/lib/types'

type Props = {
  hero: HeroContent
  /** Anchor id the "Continue" link should scroll to. Defaults to the
   *  conventional id used by the page composition. */
  continueHref?: string
}

/**
 * The opening hero. Splits into two stacked regions so the bottom strip can
 * be translucent (revealing the photo plate behind via the negative-margin
 * underlap in the page composition) while the upper title block stays solid:
 *
 *   [ upper · bg-paper · addressee + title + subhead              ]
 *   [ ────────────────────────────────────────────────────────── ]   ← hairline
 *   [ band  · bg-paper/85 · foot headline + continue link         ]   ← translucent
 *
 * The hairline (border-t on the foot row) marks where the transparency starts.
 */
export function HeroAnchor({ hero, continueHref = '#section-01' }: Props) {
  return (
    <section
      data-hero-stagger
      className="relative z-10 flex min-h-screen flex-col pt-[140px]"
    >
      {/* Upper region — solid paper. Vertically fills remaining space and
          centers the addressee + title + subhead. */}
      <div className="flex flex-1 items-center bg-paper px-gutter pb-[clamp(32px,5vh,64px)]">
        <div className="mx-auto w-full max-w-hero">
          <div className="reveal mb-[56px] flex items-baseline gap-[18px] text-[12px] uppercase tracking-[0.18em] text-mute">
            <span>Prepared for</span>
            <strong className="text-[14px] font-semibold normal-case tracking-[0.04em] text-ink">
              {hero.preparedFor}
            </strong>
            <span
              aria-hidden
              className="mx-[4px] inline-block h-[4px] w-[4px] rounded-full bg-aon"
            />
            <span>{hero.addressee}</span>
          </div>

          <h1 className="reveal m-0 mb-[48px] max-w-[18ch] font-display text-[clamp(44px,7.5vw,112px)] font-normal leading-[0.98] tracking-[-0.025em] text-ink">
            {hero.title.lead}{' '}
            <em className="inline italic text-aon-deep">{hero.title.em}</em>
          </h1>

          <p className="reveal m-0 max-w-[52ch] font-body text-[clamp(16px,1.3vw,19px)] leading-[1.55] text-slate">
            {hero.subhead.lead}{' '}
            <strong className="font-semibold text-ink">{hero.subhead.strong}</strong>{' '}
            {hero.subhead.trail}
          </p>
        </div>
      </div>

      {/* Foot band — a single uniform translucent paper wash below the hairline,
          so the photo plate underneath reads through evenly. The hairline IS
          the seam between solid paper above and the translucent band below. */}
      <div className="border-t border-rule bg-[rgb(var(--paper)/0.90)] backdrop-blur-[4px] px-gutter pb-[clamp(32px,5vh,56px)]">
        <div className="mx-auto max-w-hero">
          <div className="flex items-end justify-between gap-[32px] pb-[clamp(2px,0.6vh,8px)] pt-[28px] font-body text-[13px] text-mute">
            <div>
              <strong className="font-medium text-ink">{hero.foot.headline}</strong>
              <br />
              {hero.foot.sub}
            </div>

            <a
              href={continueHref}
              aria-label="Continue to the next section"
              className="group flex items-center gap-[10px] text-[11px] uppercase tracking-[0.2em] text-mute transition-colors duration-200 hover:text-ink focus-visible:text-ink"
            >
              <span>Continue</span>
              <span aria-hidden className="hero-scroll-line relative -top-[3px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
