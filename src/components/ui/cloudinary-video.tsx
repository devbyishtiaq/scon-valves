"use client"

import { useReducedMotion } from "motion/react"
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react"

import { cn } from "@/lib/utils"
import type { CloudinaryVideoSources } from "@/lib/cloudinary"

type CloudinaryVideoProps = Pick<CloudinaryVideoSources, "sources"> & {
  /**
   * Frame shown until playback starts. Supplying one makes the element opaque
   * from the very first paint, so nothing behind it is ever visible.
   */
  poster?: string
  className?: string
  /** Media query that must match before the sources are requested. */
  minWidth?: string
  /** Hold the sources back until the video is near the viewport. */
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
    // No gate matches on the server; a gated video waits to be measured.
    () => !query
  )
}

/**
 * Autoplaying, muted, looping video.
 *
 * The element itself always renders — only the <source> children are gated —
 * so a poster can paint on the server and act as the first frame. That keeps
 * a separate fallback image from flashing up before the video takes over.
 *
 * Sources are withheld when the visitor prefers reduced motion, when the
 * viewport is narrower than `minWidth`, or, with `lazy`, until the element is
 * near the viewport. In each case the poster stays on screen and no video
 * bytes are downloaded.
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
  const [nearViewport, setNearViewport] = useState(!lazy)
  const [canPlay, setCanPlay] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const shouldLoad = nearViewport && widthAllows && !reduceMotion

  // A callback ref rather than useEffect: it fires exactly when the element
  // mounts, which a dependency array cannot observe.
  const attach = useCallback(
    (node: HTMLVideoElement | null) => {
      videoRef.current = node
      if (!node || !lazy) return

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setNearViewport(true)
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

  // With a poster the element already shows the right frame, so it can be
  // opaque immediately. Without one it fades in over whatever sits behind it.
  const opaque = Boolean(poster) || canPlay

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
        "absolute inset-0 size-full object-cover",
        !poster && "transition-opacity duration-700",
        opaque ? "opacity-100" : "opacity-0",
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
