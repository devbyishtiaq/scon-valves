"use client"

import gallery1 from "@/assets/images/gallery/gallery-1.jpg"
import gallery2 from "@/assets/images/gallery/gallery-2.jpg"
import gallery3 from "@/assets/images/gallery/gallery-3.jpg"
import gallery4 from "@/assets/images/gallery/gallery-4.jpg"
import gallery5 from "@/assets/images/gallery/gallery-5.jpg"
import gallery6 from "@/assets/images/gallery/gallery-6.jpg"
import gallery7 from "@/assets/images/gallery/gallery-7.jpg"
import gallery8 from "@/assets/images/gallery/gallery-8.jpg"
import { Section } from "@/components/layout/section"
import {
  CaptionedImageGrid,
  type CaptionedImage,
} from "@/components/ui/captioned-image-grid"
import { MainHeading } from "@/components/ui/main-heading"
import { cn } from "@/lib/utils"

const GALLERY: CaptionedImage[] = [
  {
    src: gallery1,
    alt: "Team collaboration on factory floor",
    caption: "Our team on the factory floor",
  },
  {
    src: gallery2,
    alt: "Engineer reviewing production plans",
    caption: "Reviewing production plans before a run",
  },
  {
    src: gallery3,
    alt: "SCONVALVES office entrance",
    caption: "SCONVALVES head office, Lahore",
  },
  {
    src: gallery4,
    alt: "Foundry team with molten metal pour",
    caption: "Molten metal pour at the NO-BAKE foundry",
  },
  {
    src: gallery5,
    alt: "Engineer working at industrial workstation",
    caption: "Valve assembly at the workstation",
  },
  {
    src: gallery6,
    alt: "Industrial manufacturing facility",
    caption: "Inside the manufacturing facility",
  },
  {
    src: gallery7,
    alt: "Precision machining in progress",
    caption: "Precision machining in progress",
  },
  {
    src: gallery8,
    alt: "Factory floor operations",
    caption: "Day-to-day operations on the shop floor",
  },
]

/**
 * The slider showed 4 tiles at a time and rotated through all 8. Without it
 * only the first 4 are displayed — the rest stay in GALLERY so swapping which
 * photos appear is a reorder, not a re-import. See
 * docs/photo-gallery-section.md.
 */
const VISIBLE_COUNT = 4

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

        <CaptionedImageGrid
          items={GALLERY.slice(0, VISIBLE_COUNT)}
          className="mt-0 md:mt-6"
          columnsClassName="grid-cols-2 lg:grid-cols-4"
          tileClassName="aspect-[254/299] rounded-xl border-2 border-gray-300 bg-white"
          imageClassName="rounded-[0.6rem] object-cover p-1"
          captionClassName="text-zinc-600"
        />
      </div>
    </Section>
  )
}
