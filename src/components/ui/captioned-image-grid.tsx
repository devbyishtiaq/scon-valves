"use client"

import { motion, useReducedMotion } from "motion/react"
import Image, { type StaticImageData } from "next/image"

import { cn } from "@/lib/utils"

export type CaptionedImage = {
  src: string | StaticImageData
  alt: string
  /** One-liner shown directly below the image. */
  caption: string
}

type CaptionedImageGridProps = {
  items: CaptionedImage[]
  className?: string
  /** Grid template — override to change the column count per breakpoint. */
  columnsClassName?: string
  /** Aspect ratio + surface of each tile. Every tile is the same size. */
  tileClassName?: string
  imageClassName?: string
  captionClassName?: string
  /** `sizes` hint passed to next/image. */
  sizes?: string
  unoptimized?: boolean
}

/**
 * Equal-sized image tiles with a one-line caption under each.
 *
 * Replaces the previous ActiveRightSlider in the gallery and certificate
 * sections — see docs/photo-gallery-section.md and
 * docs/iso-certification-section.md for the slider behaviour it superseded.
 */
export function CaptionedImageGrid({
  items,
  className,
  columnsClassName = "grid-cols-2 lg:grid-cols-4",
  tileClassName = "aspect-[4/3] bg-white/5",
  imageClassName = "object-cover",
  captionClassName,
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
  unoptimized,
}: CaptionedImageGridProps) {
  const reduceMotion = useReducedMotion()

  if (items.length === 0) return null

  return (
    <ul className={cn("grid gap-5 md:gap-6", columnsClassName, className)}>
      {items.map((item, index) => (
        <motion.li
          key={item.alt}
          className="flex flex-col"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: reduceMotion ? 0 : Math.min(index, 4) * 0.06,
          }}
        >
          <div
            className={cn(
              "relative w-full overflow-hidden rounded-xl",
              tileClassName
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={sizes}
              unoptimized={unoptimized}
              className={cn("object-center", imageClassName)}
            />
          </div>

          <p
            className={cn(
              "mt-3 text-sm leading-snug text-zinc-600",
              captionClassName
            )}
          >
            {item.caption}
          </p>
        </motion.li>
      ))}
    </ul>
  )
}
