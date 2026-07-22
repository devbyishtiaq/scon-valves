"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Image, { type StaticImageData } from "next/image"
import { useCallback, useState } from "react"

import { cn } from "@/lib/utils"

export type SliderItem = {
  src: string | StaticImageData
  alt: string
}

type ActiveRightSliderProps = {
  items: SliderItem[]
  visibleCount?: number
  className?: string
  trackClassName?: string
  itemClassName?: string
  activeItemClassName?: string
  inactiveItemClassName?: string
  imageClassName?: string
  navClassName?: string
  prevButtonClassName?: string
  nextButtonClassName?: string
  align?: "center" | "start"
}

export function ActiveRightSlider({
  items,
  visibleCount = 4,
  className,
  trackClassName,
  itemClassName,
  activeItemClassName,
  inactiveItemClassName,
  imageClassName,
  navClassName,
  prevButtonClassName,
  nextButtonClassName,
  align = "center",
}: ActiveRightSliderProps) {
  const reduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.min(visibleCount - 1, Math.max(items.length - 1, 0))
  )

  const count = Math.min(visibleCount, items.length)

  const visibleIndices = Array.from({ length: count }, (_, i) => {
    const offset = count - 1 - i
    return (activeIndex - offset + items.length) % items.length
  })

  const goPrev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length)
  }, [items.length])

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % items.length)
  }, [items.length])

  if (items.length === 0) return null

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "flex gap-3 overflow-hidden sm:gap-4 md:gap-5",
          align === "start" ? "items-start" : "items-center",
          "justify-start",
          trackClassName
        )}
      >
        {visibleIndices.map((imageIndex, position) => {
          const item = items[imageIndex]
          const isActive = position === count - 1

          return (
            <motion.button
              key={imageIndex}
              type="button"
              aria-label={`Show ${item.alt}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => setActiveIndex(imageIndex)}
              initial={false}
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "relative shrink-0 overflow-hidden rounded-xl transition-[width,height] duration-500 ease-out",
                itemClassName,
                isActive
                  ? cn("z-10 h-[412px] w-[363px]", activeItemClassName)
                  : cn("h-[299px] w-[254px]", inactiveItemClassName)
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                unoptimized
                className={cn("object-cover", imageClassName)}
                sizes={
                  isActive
                    ? "(max-width: 768px) 50vw, 363px"
                    : "(max-width: 768px) 40vw, 254px"
                }
                priority={position === 0 || isActive}
              />
            </motion.button>
          )
        })}
      </div>

      <div
        className={cn(
          "mt-10 flex items-center justify-center gap-3 md:mt-12",
          navClassName
        )}
      >
        <button
          type="button"
          aria-label="Previous"
          onClick={goPrev}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full border border-zinc-400 bg-white text-zinc-700 transition-colors hover:bg-zinc-50",
            prevButtonClassName
          )}
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={goNext}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full bg-(--brand-red) text-white transition-colors hover:bg-(--brand-red-hover)",
            nextButtonClassName
          )}
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  )
}
