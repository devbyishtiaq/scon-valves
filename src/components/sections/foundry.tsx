"use client"

import { motion, useReducedMotion } from "motion/react"
import Image, { type StaticImageData } from "next/image"

import foundryImage from "@/assets/images/people_working_avatar.jpeg"
import { Section } from "@/components/layout/section"
import { CloudinaryVideo } from "@/components/ui/cloudinary-video"
import { MainHeading } from "@/components/ui/main-heading"
import { getVideo } from "@/lib/cloudinary"
import { cn } from "@/lib/utils"

/**
 * Supplied as one block; split at sentence boundaries to match the section's
 * existing three-paragraph rhythm. No wording changed.
 */
const PARAGRAPHS = [
  "SCON Valves operates an advanced NO-BAKE, chemically bonded foundry plant, supported by in-house electric furnaces, enabling the production of high-quality and precision-engineered castings for demanding valve applications.",
  "This advanced process helps achieve equal wall thicknesses, consistent weight, accurate dimensions, and excellent surface quality, while significantly minimizing casting defects such as porosity, pinholes, and blowholes.",
  "Our foundry capabilities provide a strong foundation for reliable OEM castings and high-performance valve products, ensuring consistent quality from raw material melting through to the finished casting, our foundry is equipped with in-house latest testing machines like, spectrometer, and Brinell hardness testing, tensile testing, sand quality & sand grains as per specified in standards.",
] as const

type FoundryProps = {
  imageSrc?: StaticImageData
  className?: string
}

export function Foundry({ imageSrc = foundryImage, className }: FoundryProps) {
  const reduceMotion = useReducedMotion()
  const video = getVideo("foundry")

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
          className="aspect-video relative w-full overflow-hidden rounded-[0.625rem] border-2 border-gray-300"
          initial={imageMotion.initial}
          whileInView={imageMotion.whileInView}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={imageSrc}
              alt="NO-BAKE foundry mold heated during OEM casting production"
              fill
              className="object-cover p-1 rounded-[0.625rem]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {video ? (
              <CloudinaryVideo
                sources={video.sources}
                lazy
                className="rounded-[0.625rem] p-1"
              />
            ) : null}
          </div>
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
