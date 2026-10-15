"use client"

import { motion, useReducedMotion } from "motion/react"

import { MILESTONES } from "@/data/company"

/**
 * Year-in-its-own-column timeline. A single rail rather than alternating
 * sides: the twelve entries vary a lot in length, and alternating leaves
 * ragged gaps at some breakpoints.
 */
export function JourneyTimeline() {
  const reduceMotion = useReducedMotion()

  return (
    <ol className="mt-10 md:mt-14">
      {MILESTONES.map((milestone, index) => (
        <motion.li
          key={milestone.year}
          className="group grid grid-cols-[3.5rem_1fr] gap-x-4 sm:grid-cols-[5rem_1fr] sm:gap-x-6 md:grid-cols-[8rem_1fr] md:gap-x-10"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: reduceMotion ? 0 : Math.min(index, 5) * 0.04,
          }}
        >
          <p className="pt-px text-right font-satoshi text-lg font-medium tabular-nums text-(--brand-red) sm:text-xl md:text-3xl">
            {milestone.year}
          </p>

          {/* The rail is this element's left border, so it joins up between
              items without a separate absolutely-positioned line. */}
          <div className="relative border-l border-zinc-200 pb-8 pl-5 sm:pl-7 md:pb-12 md:pl-10 group-last:border-transparent group-last:pb-0">
            <span
              aria-hidden
              className="absolute top-1.5 -left-[5px] size-[9px] rounded-full bg-(--brand-red) ring-4 ring-white md:top-3"
            />
            <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
              {milestone.detail}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  )
}
