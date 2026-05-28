'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { MaturityStage } from '@/lib/types'

const ROMAN = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii'] as const

type Props = {
  lifecycleStages: MaturityStage[]
}

export function MaturityMatrix({ lifecycleStages }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([])
  const reduceMotion = useReducedMotion()

  const focusTab = (idx: number) => {
    const wrapped = ((idx % lifecycleStages.length) + lifecycleStages.length) % lifecycleStages.length
    setActiveIndex(wrapped)
    tabsRef.current[wrapped]?.focus()
  }

  const onTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        focusTab(idx + 1)
        return
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        focusTab(idx - 1)
        return
      case 'Home':
        e.preventDefault()
        focusTab(0)
        return
      case 'End':
        e.preventDefault()
        focusTab(lifecycleStages.length - 1)
        return
    }
  }

  const activeStage = lifecycleStages[activeIndex]
  if (!activeStage) return null

  return (
    <div className="border-y border-ink">
      <div
        role="tablist"
        aria-label="HR lifecycle stages"
        className="grid grid-cols-8 border-b border-rule bg-paper-2 max-[1080px]:grid-cols-4 max-[760px]:grid-cols-2"
      >
        {lifecycleStages.map((stage, idx) => {
          const isActive = idx === activeIndex
          return (
            <button
              key={stage.stage}
              ref={(el) => {
                tabsRef.current[idx] = el
              }}
              id={`matrix-tab-${idx}`}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls="matrix-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(idx)}
              onKeyDown={(e) => onTabKeyDown(e, idx)}
              className={[
                'relative cursor-pointer border-r border-rule px-[18px] py-[22px]',
                'text-left font-body text-[13px] font-semibold leading-[1.25] tracking-[-0.005em]',
                'transition-colors duration-200 last:border-r-0',
                'max-[1080px]:border-b max-[1080px]:[&:nth-last-child(-n+4)]:border-b-0',
                'max-[760px]:[&:nth-last-child(-n+2)]:border-b-0',
                isActive
                  ? 'bg-white text-ink'
                  : 'bg-transparent text-slate hover:bg-black/[0.02] hover:text-ink',
              ].join(' ')}
            >
              {isActive && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-0 right-0 top-0 h-[3px] bg-slalom"
                />
              )}
              <span className="mb-[6px] block font-display text-[11px] italic tracking-[0.06em] text-mute">
                {ROMAN[idx]}.
              </span>
              {stage.stage}
            </button>
          )
        })}
      </div>

      <motion.div
        key={activeIndex}
        id="matrix-panel"
        role="tabpanel"
        aria-labelledby={`matrix-tab-${activeIndex}`}
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="grid min-h-[380px] grid-cols-5 max-[1080px]:overflow-x-auto max-[1080px]:[grid-template-columns:repeat(5,minmax(220px,1fr))] max-[760px]:[grid-template-columns:repeat(5,minmax(280px,1fr))]"
      >
        {activeStage.cells.map((cell, idx) => {
          const isFirst = idx === 0
          const isLast = idx === activeStage.cells.length - 1
          return (
            <div
              key={cell.name}
              className={[
                'flex flex-col border-r border-rule px-[28px] py-[36px]',
                'transition-colors duration-300 last:border-r-0 hover:bg-paper',
                isLast
                  ? 'bg-[linear-gradient(to_bottom,rgb(var(--white)),rgba(0,70,189,0.025))]'
                  : 'bg-white',
              ].join(' ')}
            >
              <div
                className={[
                  'mb-[6px] font-display text-[11px] italic uppercase tracking-[0.16em]',
                  isFirst ? 'text-slalom/60' : 'text-slalom',
                ].join(' ')}
              >
                {cell.name}
              </div>
              <h3 className="mb-[24px] font-display text-[22px] font-normal leading-[1.1] tracking-[-0.01em] text-ink">
                {activeStage.stage}
              </h3>
              <p className="mb-[28px] flex-1 font-body text-[13px] leading-[1.5] text-slate">
                {cell.desc}
              </p>
              <div className="mb-[10px] font-body text-[10px] uppercase tracking-[0.18em] text-mute">
                — Tools
              </div>
              <ul className="flex flex-wrap" role="list">
                {cell.tools.map((tool) => (
                  <li
                    key={tool}
                    className="mb-[6px] mr-[6px] inline-block rounded-[2px] bg-paper-2 px-[10px] py-[4px] font-body text-[11px] tracking-[0.02em] text-ink-soft"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
