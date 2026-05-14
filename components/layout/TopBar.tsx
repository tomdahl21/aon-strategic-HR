type Props = {
  /** Right-side meta line. e.g. "A Proposal · March 2026". */
  meta: string
}

/**
 * Fixed top bar — Aon SVG mark on the left, meta string on the right.
 * Solid paper background with a hairline rule underneath; no scrim/blur.
 * Padding is symmetric (24px vertical) and the logo is sized to ~28px tall.
 */
export function TopBar({ meta }: Props) {
  return (
    <nav
      aria-label="Site"
      className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-rule bg-paper px-gutter py-[24px]"
    >
      <a href="#main" className="block" aria-label="Aon — back to top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/Aon_Corporation_logo.svg"
          alt="Aon"
          width={74}
          height={28}
          className="block h-[28px] w-auto"
        />
      </a>
      <div className="font-body text-[11px] uppercase tracking-[0.14em] text-mute max-[760px]:hidden">
        {meta}
      </div>
    </nav>
  )
}
