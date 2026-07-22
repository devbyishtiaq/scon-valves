"use client"

import { motion, useReducedMotion } from "motion/react"
import Image, { type StaticImageData } from "next/image"

import foundryImage from "@/assets/images/foundry.jpg"
import { Section } from "@/components/layout/section"
import { MainHeading } from "@/components/ui/main-heading"
import { cn } from "@/lib/utils"

const PARAGRAPHS = [
  "Equipped with the most advanced foundry plant KNOWN as NO-BAKE, CHEMICAL BONDED, including In-House electrical furnaces to produce the best quality castings & to make best quality products.",
  "Its first of its kind foundry plant in Pakistan, also known as the chemical bonded process, which make the high-quality moulds for high quality castings.",
  "With NO-BAKE FOUNDRY, the casting quality remain perfect, and will have equal wall thicknesses, weights, dimensions & remain FREE FROM THE POROSITY, PIN HOLES & BLOW HOLES.",
] as const

type FoundryProps = {
  imageSrc?: StaticImageData
  className?: string
}

export function Foundry({ imageSrc = foundryImage, className }: FoundryProps) {
  const reduceMotion = useReducedMotion()

  const imageMotion = {
    initial: reduceMotion ? false : { opacity: 0, x: -64 },
    whileInView: { opacity: 1, x: 0 },
  }

  const textMotion = {
    initial: reduceMotion ? false : { opacity: 0, x: 64 },
    whileInView: { opacity: 1, x: 0 },
  }

  return (
    <Section id="foundry" className={cn("bg-white", className)}>
      <div className="grid w-full items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        <motion.div
          className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] lg:rounded-[2rem]"
          initial={imageMotion.initial}
          whileInView={imageMotion.whileInView}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={imageSrc}
            alt="NO-BAKE foundry mold heated during OEM casting production"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        <motion.div
          initial={textMotion.initial}
          whileInView={textMotion.whileInView}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          <MainHeading text="Foundry - OEM Castings" />

          <div className="mt-4 space-y-4 md:mt-5">
            {PARAGRAPHS.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-zinc-600 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
