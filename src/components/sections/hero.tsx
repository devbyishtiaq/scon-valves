import Link from "next/link"
import Image from "next/image"

import heroBg from "@/assets/images/hero-bg.webp"
import { Button } from "@/components/ui/button"
import { CloudinaryVideo } from "@/components/ui/cloudinary-video"
import { getVideo } from "@/lib/cloudinary"
import { cn } from "@/lib/utils"

type HeroProps = {
  className?: string
}

export function Hero({ className }: HeroProps) {
  const video = getVideo("hero")

  return (
    <section
      className={cn(
        "relative flex min-h-svh flex-col overflow-hidden bg-zinc-950 text-white",
        className
      )}
    >
      {/* Fetch the poster as early as the browser would a priority image, so
          the video's own opening frame is the first thing painted. */}
      {video ? (
        <link
          rel="preload"
          as="image"
          href={video.poster}
          fetchPriority="high"
        />
      ) : null}

      <div aria-hidden className="absolute inset-0">
        {video ? (
          /* The poster is the fallback: it holds the frame until playback
             starts, and stays put under reduced motion, on narrow screens and
             if the video cannot play. heroBg is not rendered at all here —
             showing it first made a different photo flash up before the
             footage took over. */
          <CloudinaryVideo
            poster={video.poster}
            sources={video.sources}
            minWidth="(min-width: 768px)"
          />
        ) : (
          /* Only reached when Cloudinary is unconfigured. */
          <Image
            src={heroBg}
            alt=""
            fill
            priority
            className="object-cover motion-safe:animate-[hero-zoom_18s_ease-out_forwards]"
            sizes="100vw"
          />
        )}

        {/* Flat tint over the whole frame. Knocks back the clip's own burned-in
            captions and keeps contrast steady as the footage brightens. */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-linear-to-r from-black/20 via-black/50 to-black/0" />
        <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-black/0" />

        {/* Header scrim. Both gradients above fade out at the top, which left
            the logo and nav sitting on raw footage — bright video frames made
            them unreadable. */}
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/85 via-black/45 to-transparent md:h-56" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-32">
        <div className="max-w-3xl motion-safe:animate-[hero-rise_0.9s_ease-out_both]">
          <p className="mb-4 font-sans text-xs font-medium tracking-[0.28em] text-white/90 uppercase md:text-sm">
            Welcome to SCONVALVES
          </p>

          <h1 className="font-satoshi text-4xl leading-[1.05] font-bold tracking-wide text-balance uppercase sm:text-5xl md:text-6xl lg:text-7xl">
            GET BETTER QUALITY WITH US
            <br />
            {/* dreams with us */}
          </h1>

          <div className="mt-8 motion-safe:animate-[hero-rise_0.9s_ease-out_0.2s_both] md:mt-10">
            <Button asChild variant="primary" size="lg">
              <Link href="#contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
