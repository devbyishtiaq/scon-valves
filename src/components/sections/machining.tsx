"use client"

import { Check, CheckIcon } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Image, { type StaticImageData } from "next/image"
import Checkicon from "@/assets/images/check-icon.svg"

import machiningImage from "@/assets/images/maching-img.png"
import { Section } from "@/components/layout/section"
import { CloudinaryVideo } from "@/components/ui/cloudinary-video"
import { MainHeading } from "@/components/ui/main-heading"
import { getVideo } from "@/lib/cloudinary"
import { cn } from "@/lib/utils"

/**
 * Capability narrative only. The hard numbers — size range, materials,
 * pressure ratings — and the commercial terms live in ADVANTAGES below, so
 * the two do not repeat each other.
 */
const BODY_COPY =
  "Scon Valves is equipped with advanced machining facilities, including modern CNC machines, ensuring precision, consistency, and high-quality machining of valve components. Our manufacturing capabilities are supported by comprehensive in-house testing facilities, including advanced hydrostatic pressure testing benches, ensuring the reliability and performance of our products. SCON Valves provides dependable valve solutions engineered to meet the demanding requirements of all type of industries."

/**
 * The specs the paragraph deliberately leaves out. The warranty is the one
 * entry with no source in the supplied copy; it is kept because the About Us
 * section advertises the same 5-year cover.
 */
const ADVANTAGES = [
  "Complete range of valves from DN15 to DN1200",
  "Material compositions in Cast Iron, Ductile Iron & Cast Steel",
  "Pressure ratings from PN16 to PN40 & Class 125 to Class 300",
  "Complete technical support & after sales service",
  "Warranty 60 MONTHS - free replacement",
] as const

type MachiningProps = {
  imageSrc?: StaticImageData
  className?: string
}

export function Machining({
  imageSrc = machiningImage,
  className,
}: MachiningProps) {
  const reduceMotion = useReducedMotion()
  const video = getVideo("machining")

  const imageMotion = {
    initial: reduceMotion ? false : { opacity: 0, x: -64 },
    whileInView: { opacity: 1, x: 0 },
  }

  const textMotion = {
    initial: reduceMotion ? false : { opacity: 0, x: 64 },
    whileInView: { opacity: 1, x: 0 },
  }

  return (
    <Section id="products" className={cn("bg-white", className)}>
      <div className="grid w-full gap-10 items-center md:grid-cols-2 md:gap-12 lg:gap-16">
        <motion.div
          className="relative aspect-video w-full overflow-hidden rounded-xl"
          initial={imageMotion.initial}
          whileInView={imageMotion.whileInView}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-xl border-2 border-gray-300">
            <Image
              src={imageSrc}
              alt="CNC machining equipment used for high-quality valve production"
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
          <MainHeading text="Machining" />

          <p className="mt-2 text-base leading-relaxed text-zinc-600 md:mt-1 md:text-lg">
            {BODY_COPY}
          </p>

          <p className="mt-6 text-base font-bold text-[#222222] md:text-lg">
            Advantages:
          </p>

          <ul className="mt-4 space-y-3">
            {ADVANTAGES.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Image src={Checkicon} alt="icon-check" />

                <span className="text-sm leading-snug text-zinc-600 md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}
