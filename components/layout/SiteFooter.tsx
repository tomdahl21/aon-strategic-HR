import type { AccountMeta } from '@/lib/types'

type Props = {
  meta: AccountMeta
  /** Site headline echoed in the meta line — e.g. "The Adaptive HR Organization". */
  siteLine: string
}

/**
 * Footer with the Aon mark, a subtle "in partnership with Slalom" SVG credit,
 * and a confidentiality meta block. Logo heights are paired so the two marks
 * read at a similar optical weight; Slalom is intentionally smaller because it
 * is the co-credit, not the lead. See CLAUDE.md §8.
 */
export function SiteFooter({ meta, siteLine }: Props) {
  return (
    <footer className="border-t border-rule bg-paper px-gutter pb-[60px] pt-[48px] font-body text-[12px] text-mute">
      <div className="mx-auto flex max-w-hero items-center justify-between gap-[32px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-[24px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/Aon_Corporation_logo.svg"
          alt="Aon"
          width={63}
          height={24}
          className="block h-[24px] w-auto"
        />

        <div className="flex items-center gap-[14px] text-[12px] text-slate">
          <span className="text-[10px] uppercase tracking-[0.12em] text-mute">
            In partnership with
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/slalom-logo-black-RGB.svg"
            alt="Slalom"
            width={77}
            height={20}
            className="block h-[20px] w-auto"
          />
        </div>

        <div className="text-right leading-[1.6] max-[760px]:text-left">
          {siteLine} · {meta.preparedAt}
          <br />
          Prepared for {meta.account}
          {meta.confidential && ' · Confidential'}
        </div>
      </div>
    </footer>
  )
}
