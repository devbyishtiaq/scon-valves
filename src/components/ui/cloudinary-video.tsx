"use client"

import { useReducedMotion } from "motion/react"
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react"

import { cn } from "@/lib/utils"
import type { CloudinaryVideoSources } from "@/lib/cloudinary"

type CloudinaryVideoProps = Pick<CloudinaryVideoSources, "sources"> & {
  poster?: string
  className?: string
  /** Media query that must match before the video is requested at all. */
  minWidth?: string
  /** Hold the request back until the video is near the viewport. */
  lazy?: boolean
}

function useMediaQuery(query: string | undefined) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!query) return () => {}
      const mq = window.matchMedia(query)
      mq.addEventListener("change", onChange)
      return () => mq.removeEventListener("change", onChange)
    },
    [query]
  )

  return useSyncExternalStore(
    subscribe,
    () => (query ? window.matchMedia(query).matches : true),
    // No gate renders on the server; a gated video waits to be measured.
    () => !query
  )
}

/**
 * Autoplaying, muted, looping video laid over whatever sits behind it.
 *
 * Renders nothing — and so downloads nothing — when the visitor prefers
 * reduced motion or the viewport is narrower than `minWidth`; the static image
 * behind it stays visible in both cases. With `lazy`, the sources are withheld
 * until the element is near the viewport, so a visitor who never scrolls that
 * far never pays for the download. Fades in on `canplay`, so a slow connection
 * never flashes a black frame.
 */
export function CloudinaryVideo({
  sources,
  poster,
  className,
  minWidth,
  lazy = false,
}: CloudinaryVideoProps) {
  const reduceMotion = useReducedMotion()
  const widthAllows = useMediaQuery(minWidth)
  const [shouldLoad, setShouldLoad] = useState(!lazy)
  const [canPlay, setCanPlay] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  // A callback ref rather than useEffect: the element only mounts once the
  // reduced-motion and width gates pass, which a dependency array cannot see.
  const attach = useCallback(
    (node: HTMLVideoElement | null) => {
      videoRef.current = node
      if (!node || !lazy) return

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setShouldLoad(true)
            observer.disconnect()
          }
        },
        { rootMargin: "400px" }
      )
      observer.observe(node)

      return () => {
        observer.disconnect()
        videoRef.current = null
      }
    },
    [lazy]
  )

  // <source> children added after mount need an explicit load() to be picked up.
  useEffect(() => {
    if (shouldLoad) videoRef.current?.load()
  }, [shouldLoad])

  if (reduceMotion || !widthAllows) return null

  return (
    <video
      ref={attach}
      autoPlay
      muted
      loop
      playsInline
      preload={lazy ? "none" : "auto"}
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
      {shouldLoad
        ? sources.map((source) => (
            <source key={source.type} src={source.src} type={source.type} />
          ))
        : null}
    </video>
  )
}
