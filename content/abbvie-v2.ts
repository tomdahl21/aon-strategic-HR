import type { AccountContent } from '@/lib/types'
import { abbvie } from '@/content/abbvie'

/**
 * Expanded AbbVie variant. Re-uses the workshopped AbbVie copy for the
 * existing scenes (hero, provocation, pairing, engagement, closing) and
 * relies on the page composition at /abbvie-v2 to render the eight
 * additional Slalom-Perspective scenes around them.
 *
 * Account-specific eyebrow numbering for the existing scenes is handled
 * at the page layer (not here) so this file stays a thin variant.
 */
export const abbvieV2: AccountContent = {
  ...abbvie,
  meta: {
    ...abbvie.meta,
    account: 'AbbVie · Expanded',
  },
  pairing: {
    ...abbvie.pairing,
    eyebrow: '11 · The Pairing',
  },
  engagement: {
    ...abbvie.engagement,
    eyebrow: '14 · The Next Mile',
  },
  closing: {
    ...abbvie.closing,
    eyebrow: '15 · The Conversation',
  },
}
