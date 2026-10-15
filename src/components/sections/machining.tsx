"use client"

import { motion, useReducedMotion } from "motion/react"
import Image, { type StaticImageData } from "next/image"

import machiningImage from "@/assets/images/maching-img.png"
import { Section } from "@/components/layout/section"
import { CloudinaryVideo } from "@/components/ui/cloudinary-video"
import { MainHeading } from "@/components/ui/main-heading"
import { getVideo } from "@/lib/cloudinary"
import { cn } from "@/lib/utils"

const BODY_COPY =
  "Scon Valves is equipped with advanced machining facilities, including modern CNC machines, ensuring precision, consistency, and high-quality machining of valve components. Our manufacturing capabilities are supported by comprehensive in-house testing facilities, including advanced hydrostatic pressure testing benches, ensuring the reliability and performance of our products. We offer a complete range of valves in sizes from DN15 to DN1200, manufactured in Cast Iron, Ductile Iron, and Cast Steel, with pressure ratings from PN16 to PN40 and Class 125 to Class 300. Backed by comprehensive technical support and dedicated after-sales service, SCON Valves provides dependable valve solutions engineered to meet the demanding requirements of all type of industries."

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
      {/* Full-width section heading: at the column width it had to wrap. */}
      <MainHeading text="Machining" />

      <div className="mt-8 grid w-full gap-10 items-center md:mt-12 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[1.2fr_0.8fr] md:gap-12 lg:gap-16">
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
          <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
            {BODY_COPY}
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
