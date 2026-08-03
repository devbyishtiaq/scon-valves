"use client"

import { motion, useReducedMotion } from "motion/react"

import { Section } from "@/components/layout/section"
import { MainHeading } from "@/components/ui/main-heading"
import { cn } from "@/lib/utils"
import Sparkles from "@/assets/images/three-stars.svg"
import Image from "next/image"

const STATS = [
  {
    label: "Installed On Over",
    value: "1000+ PROJECTS",
  },
  {
    label: "Warranty-Free Replacement",
    value: "05 YEARS",
  },
] as const

type AboutUsProps = {
  className?: string
}

export function AboutUs({ className }: AboutUsProps) {
  const reduceMotion = useReducedMotion()

  const leftMotion = {
    initial: reduceMotion ? false : { opacity: 0, x: -64 },
    whileInView: { opacity: 1, x: 0 },
  }

  const rightMotion = {
    initial: reduceMotion ? false : { opacity: 0, x: 64 },
    whileInView: { opacity: 1, x: 0 },
  }

  return (
    <Section id="about" className={cn("bg-[#242f3e] text-white", className)}>
      <div className="">
        <motion.div
          initial={leftMotion.initial}
          whileInView={leftMotion.whileInView}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-3 flex items-center gap-1.5" aria-hidden>
            <Image src={Sparkles} alt="Stars" />
          </div>
          <div className="inline-block">
            <MainHeading
              text="About Us"
              className="text-white normal-case font-semibold"
            />
            <span className="mt-2 block h-px w-16 bg-white/90" aria-hidden />
          </div>
          <div className="flex col-span-[1.35fr_1fr] w-full items-center gap-6 justify-between">
            <p className="mt-5  text-base font-light leading-relaxed text-white/90 md:text-lg">
              Scon Valves being manufactured through the most advanced NO-BAKE
              foundry plant
            </p>{" "}
            <p className="mx-auto max-w-sm text-sm text-end leading-relaxed text-white/85 md:ml-auto md:mr-0 md:text-base">
              Implementations of all procedures are established in manual and
              system, in which we have been.
            </p>
          </div>
          <div className="grid w-full gap-12 md:grid-cols-[1.35fr_1fr] md:items-start md:gap-10 lg:gap-16">
            <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {STATS.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-xl bg-white px-4.5 py-10 text-[#222222] shadow-sm"
                >
                  <p className="text-base font-medium text-zinc-600">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xl font-medium tracking-tight uppercase md:text-2xl">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
            <motion.div
              className="md:pb-1 md:text-right"
              initial={rightMotion.initial}
              whileInView={rightMotion.whileInView}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.08,
              }}
            >
              <p className="mt-6 font-satoshi text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
                ISO 9001-2015
              </p>

              <p className="mt-2 text-xs font-medium tracking-[0.16em] text-white/80 uppercase">
                Certified since 2004.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
