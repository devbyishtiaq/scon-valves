"use client"

import cert2022 from "@/assets/images/certificates/cert-4.jpeg"
import cert2023 from "@/assets/images/certificates/cert-3.jpeg"
import cert2024 from "@/assets/images/certificates/cert-2.jpeg"
import cert2025 from "@/assets/images/certificates/cert-1.jpeg"
import { Section } from "@/components/layout/section"
import {
  CaptionedImageGrid,
  type CaptionedImage,
} from "@/components/ui/captioned-image-grid"
import { MainHeading } from "@/components/ui/main-heading"
import { cn } from "@/lib/utils"

/**
 * Ordered oldest to newest by the issue date printed on each scan, so the row
 * reads as an unbroken certification history ending on the current one. The
 * file numbers run the other way, hence the aliases above.
 */
const CERTIFICATES: CaptionedImage[] = [
  {
    src: cert2022,
    alt: "RICI ISO 9001:2015 certificate issued 26 May 2022",
    caption: "ISO 9001:2015 — valves, flanges & castings · RICI, issued 2022",
  },
  {
    src: cert2023,
    alt: "RICI ISO 9001:2015 certificate issued 25 April 2023",
    caption: "ISO 9001:2015 — valves, flanges & castings · RICI, issued 2023",
  },
  {
    src: cert2024,
    alt: "RICI ISO 9001:2015 certificate issued 12 March 2024",
    caption: "ISO 9001:2015 — valves, flanges & castings · RICI, issued 2024",
  },
  {
    src: cert2025,
    alt: "TÜV Austria ISO 9001:2015 certificate issued 28 March 2025",
    caption:
      "ISO 9001:2015 — industrial valves & in-house foundry · TÜV Austria, issued 2025",
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
        />
      </div>
    </Section>
  )
}
