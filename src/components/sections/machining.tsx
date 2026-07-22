"use client"

import { Check, CheckIcon } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Image, { type StaticImageData } from "next/image"
import Checkicon from "@/assets/images/check-icon.svg"

import machiningImage from "@/assets/images/maching-img.png"
import { Section } from "@/components/layout/section"
import { MainHeading } from "@/components/ui/main-heading"
import { cn } from "@/lib/utils"

const BODY_COPY =
  "MACHINING is equipped with latest machines including CNC's, which ensure the high-quality machining of valves, also having in-house testing facilities equipped with advanced hydrostatic testing bench, ultrasonic thickness testing, brunel hardness testing."

const ADVANTAGES = [
  "Warranty 60 MONTHS - free replacement",
  "Sizes availability from DN15",
  "Availability of complete range of valves",
  "Material compositions in Cast Iron, Ductile Iron & Cast Steel",
  "Complete technical support & after sales service",
  "Pressure ratings from PN16 to PN40 & Class 125 to Class 300",
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
          className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] lg:rounded-[2rem]"
          initial={imageMotion.initial}
          whileInView={imageMotion.whileInView}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={imageSrc}
            alt="CNC machining equipment used for high-quality valve production"
            className="object-cover translate-y-8"
            height={472}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
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
