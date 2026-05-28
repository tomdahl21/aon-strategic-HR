type Props = {
  /** Right-side meta line. e.g. "A Proposal · March 2026". */
  meta: string
}

/**
 * Fixed top bar — the Aon | Slalom co-brand lockup on the left, meta string on
 * the right. Both marks sit at equal optical weight, separated by a vertical
 * hairline; Aon leads per the agreed lockup order. Solid paper background with
 * a hairline rule underneath; no scrim/blur. Padding is symmetric (24px).
 */
export function TopBar({ meta }: Props) {
  return (
    <nav
      aria-label="Site"
      className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-rule bg-paper px-gutter py-[24px]"
    >
      <a
        href="#main"
        className="flex items-center gap-[14px]"
        aria-label="Aon and Slalom — back to top"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/Aon_Corporation_logo.svg"
          alt="Aon"
          width={68}
          height={26}
          className="block h-[26px] w-auto"
        />
        <span aria-hidden className="h-[22px] w-px bg-ink/20" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/slalom-logo-black-RGB.svg"
          alt="Slalom"
          width={85}
          height={22}
          className="block h-[22px] w-auto"
        />
      </a>
      <div className="font-body text-[11px] uppercase tracking-[0.14em] text-mute max-[760px]:hidden">
        {meta}
      </div>
    </nav>
  )
}
