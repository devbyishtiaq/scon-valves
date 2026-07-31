import Link from "next/link"
import Image from "next/image"

import heroBg from "@/assets/images/hero-bg.webp"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type HeroProps = {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-svh flex-col overflow-hidden bg-zinc-950 text-white",
        className
      )}
    >
      <div aria-hidden className="absolute inset-0">
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          className="object-cover motion-safe:animate-[hero-zoom_18s_ease-out_forwards]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/20 via-black/50 to-black/0" />
        <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-black/0" />
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
