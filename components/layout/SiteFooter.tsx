import type { AccountMeta } from '@/lib/types'

type Props = {
  meta: AccountMeta
  /** Site headline echoed in the meta line — e.g. "The Adaptive HR Organization". */
  siteLine: string
}

/**
 * Footer with the Aon | Slalom co-brand lockup (equal optical weight, Aon
 * leading, separated by a vertical hairline) and a confidentiality meta block.
 * The two firms read as co-delivery equals — no subordinating label.
 */
export function SiteFooter({ meta, siteLine }: Props) {
  return (
    <footer className="border-t border-rule bg-paper px-gutter pb-[60px] pt-[48px] font-body text-[12px] text-mute">
      <div className="mx-auto flex max-w-hero items-center justify-between gap-[32px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-[24px]">
        <div className="flex items-center gap-[14px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/Aon_Corporation_logo.svg"
            alt="Aon"
            width={58}
            height={22}
            className="block h-[22px] w-auto"
          />
          <span aria-hidden className="h-[19px] w-px bg-ink/20" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/slalom-logo-black-RGB.svg"
            alt="Slalom"
            width={73}
            height={19}
            className="block h-[19px] w-auto"
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
