"use client"

import { useReducedMotion } from "motion/react"
import { useCallback, useState, useSyncExternalStore } from "react"

import type { CloudinaryVideo } from "@/lib/cloudinary"
import { cn } from "@/lib/utils"

/** Below this width the video is never requested at all. */
const MIN_WIDTH = "(min-width: 768px)"

function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mq = window.matchMedia(query)
      mq.addEventListener("change", onChange)
      return () => mq.removeEventListener("change", onChange)
    },
    [query]
  )

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  )
}

type HeroVideoProps = CloudinaryVideo & {
  className?: string
}

/**
 * Full-bleed autoplaying background video.
 *
 * Renders nothing — and so downloads nothing — when the viewport is narrower
 * than MIN_WIDTH or the visitor prefers reduced motion. The static hero image
 * behind it stays visible in both cases. Fades in only once the browser can
 * actually play, so a slow connection never flashes a black frame over the
 * image.
 */
export function HeroVideo({ poster, sources, className }: HeroVideoProps) {
  const reduceMotion = useReducedMotion()
  const isWideEnough = useMediaQuery(MIN_WIDTH)
  const [canPlay, setCanPlay] = useState(false)

  if (reduceMotion || !isWideEnough) return null

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden
      tabIndex={-1}
      onCanPlay={() => setCanPlay(true)}
      className={cn(
        "absolute inset-0 size-full object-cover transition-opacity duration-700",
        canPlay ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {sources.map((source) => (
        <source key={source.type} src={source.src} type={source.type} />
      ))}
    </video>
  )
}
