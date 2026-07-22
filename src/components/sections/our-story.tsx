"use client"

import { Cog } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Image, { type StaticImageData } from "next/image"

import storyImage from "@/assets/images/our-story.jpg"
import { Section } from "@/components/layout/section"
import { MainHeading } from "@/components/ui/main-heading"
import { cn } from "@/lib/utils"
import PrecisionVelve from "@/assets/images/percision-velve.png"

const BODY_COPY =
  "Discover how our advanced machinery, including vertical and horizontal lathes, CNC machining system, and horizontal boring machines, ensures precise valve production. With cutting-edge automation and meticulous attention to detail, we deliver high-quality valves that meet stringent customer specifications, supporting reliability even in the most demanding environments."

type OurStoryProps = {
  imageSrc?: StaticImageData
  className?: string
}

export function OurStory({ imageSrc = storyImage, className }: OurStoryProps) {
  const reduceMotion = useReducedMotion()

  const textMotion = {
    initial: reduceMotion ? false : { opacity: 0, x: -64 },
    whileInView: { opacity: 1, x: 0 },
  }

  const imageMotion = {
    initial: reduceMotion ? false : { opacity: 0, x: 64 },
    whileInView: { opacity: 1, x: 0 },
  }

  return (
    <Section id="story" className={cn("bg-zinc-50", className)}>
      <div className="grid w-full items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        <motion.div
          className="max-w-xl"
          initial={textMotion.initial}
          whileInView={textMotion.whileInView}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-4 flex items-center gap-2.5">
            <Cog
              className="size-5 shrink-0 text-amber-500"
              strokeWidth={2.25}
              aria-hidden
            />
            <p className="text-xs font-semibold tracking-[0.18em] text-zinc-800 uppercase md:text-sm">
              Our Story
            </p>
          </div>

          <MainHeading text={"Precision Valve\nManufacturing"} />

          <p className=" text-lg leading-relaxed text-zinc-600 md:mt-2 md:text-lg font-normal">
            {BODY_COPY}
          </p>
        </motion.div>

        <motion.div
          className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] md:aspect-[5/4] lg:rounded-[2rem]"
          initial={imageMotion.initial}
          whileInView={imageMotion.whileInView}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          <Image
            src={PrecisionVelve}
            alt="Blue industrial gate valves manufactured by SCONVALVES"
            fill
            className="object-cover"
            // sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </motion.div>
      </div>
    </Section>
  )
}
