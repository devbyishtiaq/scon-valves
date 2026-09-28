"use client"

import { bookIcons } from "@/assets/icons"
import { Section } from "@/components/layout/section"
import {
  CaptionedImageGrid,
  type CaptionedImage,
} from "@/components/ui/captioned-image-grid"
import { MainHeading } from "@/components/ui/main-heading"
import { cn } from "@/lib/utils"

const CERTIFICATES: CaptionedImage[] = [
  {
    src: bookIcons[0],
    alt: "ISO 9001:2015 certificate — book 1",
    caption: "ISO 9001:2015 — OEM castings, valves & flanges (Bureau Veritas)",
  },
  {
    src: bookIcons[1],
    alt: "ISO 9001:2015 certificate — book 2",
    caption: "ISO 9001:2015 — Scon valve & flange manufacturing (Bureau Veritas)",
  },
  {
    src: bookIcons[2],
    alt: "ISO 9001:2015 certificate — book 3",
    caption: "ISO 9001:2015 — valves, flanges & castings (RICI, IAS accredited)",
  },
  {
    src: bookIcons[3],
    alt: "ISO 9001:2015 certificate — book 4",
    caption: "ISO 9001:2015 — industrial valves & in-house foundry (TÜV Austria)",
  },
]

type IsoCertificationProps = {
  className?: string
}

export function IsoCertification({ className }: IsoCertificationProps) {
  return (
    <Section id="certificates" className={cn("certificates-bg", className)}>
      <div className="w-full">
        <MainHeading className="text-white" text="ISO Certification" />

        <CaptionedImageGrid
          items={CERTIFICATES}
          className="mt-8 md:mt-12"
          columnsClassName="grid-cols-2 lg:grid-cols-4"
          tileClassName="aspect-[3/4] bg-white/5"
          imageClassName="object-contain object-center"
          captionClassName="text-white/70"
          unoptimized
        />
      </div>
    </Section>
  )
}
