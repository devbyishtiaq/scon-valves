"use client"

import gallery1 from "@/assets/images/gallery/gallery-1.jpg"
import gallery2 from "@/assets/images/gallery/gallery-2.jpg"
import gallery3 from "@/assets/images/gallery/gallery-3.jpg"
import gallery4 from "@/assets/images/gallery/gallery-4.jpg"
import gallery5 from "@/assets/images/gallery/gallery-5.jpg"
import gallery6 from "@/assets/images/gallery/gallery-6.jpg"
import gallery7 from "@/assets/images/gallery/gallery-7.jpg"
import gallery8 from "@/assets/images/gallery/gallery-8.jpg"
import { ActiveRightSlider } from "@/components/ui/active-right-slider"
import { Section } from "@/components/layout/section"
import { MainHeading } from "@/components/ui/main-heading"
import { cn } from "@/lib/utils"

const GALLERY = [
  { src: gallery1, alt: "Team collaboration on factory floor" },
  { src: gallery2, alt: "Engineer reviewing production plans" },
  { src: gallery3, alt: "SCONVALVES office entrance" },
  { src: gallery4, alt: "Foundry team with molten metal pour" },
  { src: gallery5, alt: "Engineer working at industrial workstation" },
  { src: gallery6, alt: "Industrial manufacturing facility" },
  { src: gallery7, alt: "Precision machining in progress" },
  { src: gallery8, alt: "Factory floor operations" },
]

type PhotoGalleryProps = {
  className?: string
}

export function PhotoGallery({ className }: PhotoGalleryProps) {
  return (
    <Section
      id="gallery"
      className={cn("bg-linear-to-b from-zinc-50 to-[#f6f0ef]", className)}
    >
      <div className="w-full">
        <MainHeading text="Photo Gallery" />

        <ActiveRightSlider
          items={GALLERY}
          visibleCount={4}
          className="mt-0 md:mt-6"
          trackClassName="min-h-[412px] justify-start gap-4 md:gap-5"
          itemClassName="rounded-xl bg-transparent shadow-none"
          imageClassName="object-cover"
        />
      </div>
    </Section>
  )
}
