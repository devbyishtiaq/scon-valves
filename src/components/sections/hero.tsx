import Link from "next/link"
import Image from "next/image"

import heroBg from "@/assets/images/hero-bg.webp"
import { HeroVideo } from "@/components/sections/hero-video"
import { Button } from "@/components/ui/button"
import { getHeroVideo } from "@/lib/cloudinary"
import { cn } from "@/lib/utils"

type HeroProps = {
  className?: string
}

export function Hero({ className }: HeroProps) {
  const video = getHeroVideo()

  return (
    <section
      className={cn(
        "relative flex min-h-svh flex-col overflow-hidden bg-zinc-950 text-white",
        className
      )}
    >
      <div aria-hidden className="absolute inset-0">
        {/* Poster frame — also the fallback whenever Cloudinary is not
            configured or the visitor prefers reduced motion. */}
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          className={cn(
            "object-cover",
            !video && "motion-safe:animate-[hero-zoom_18s_ease-out_forwards]"
          )}
          sizes="100vw"
        />

        {video ? <HeroVideo poster={video.poster} sources={video.sources} /> : null}

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
