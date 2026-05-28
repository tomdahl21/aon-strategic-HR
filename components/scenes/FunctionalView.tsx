import type { LensContent } from '@/lib/types'
import { StakeholderView } from '@/components/scenes/StakeholderView'

type Props = {
  content: LensContent
  id?: string
  continueHref?: string
}

/**
 * Same shape as StakeholderView (4 rows × 4 R/P/I/P stages) but anchored
 * by capability domain instead of stakeholder. Rendered with the lighter
 * `paper` tone so a Stakeholder → Functional sequence reads as a tonal step.
 */
export function FunctionalView({ content, id, continueHref }: Props) {
  return (
    <StakeholderView content={content} id={id} continueHref={continueHref} tone="paper" />
  )
}
