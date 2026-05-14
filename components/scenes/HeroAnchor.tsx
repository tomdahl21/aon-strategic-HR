import type { HeroContent } from '@/lib/types'

type Props = {
  hero: HeroContent
}

export function HeroAnchor({ hero }: Props) {
  return (
    <section
      data-hero-stagger
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-paper px-gutter pt-[140px]"
    >
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

        <h1
          className="reveal m-0 mb-[48px] max-w-[18ch] font-display text-[clamp(44px,7.5vw,112px)] font-normal leading-[0.98] tracking-[-0.025em] text-ink"
        >
          {hero.title.lead}{' '}
          <em className="inline italic text-aon-deep">{hero.title.em}</em>
        </h1>

        <p className="reveal mb-[80px] max-w-[52ch] font-body text-[clamp(16px,1.3vw,19px)] leading-[1.55] text-slate">
          {hero.subhead.lead}{' '}
          <strong className="font-semibold text-ink">{hero.subhead.strong}</strong>{' '}
          {hero.subhead.trail}
        </p>

        <div className="flex items-end justify-between border-t border-rule pt-[28px] font-body text-[13px] text-mute">
          <div>
            <strong className="font-medium text-ink">{hero.foot.headline}</strong>
            <br />
            {hero.foot.sub}
          </div>
          <div className="flex items-center gap-[10px] text-[11px] uppercase tracking-[0.2em] text-mute">
            <span>Continue</span>
            <span aria-hidden className="hero-scroll-line" />
          </div>
        </div>
      </div>
    </section>
  )
}
