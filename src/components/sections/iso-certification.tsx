"use client"

import { bookIcons } from "@/assets/icons"
import { ActiveRightSlider } from "@/components/ui/active-right-slider"
import { Section } from "@/components/layout/section"
import { MainHeading } from "@/components/ui/main-heading"
import { cn } from "@/lib/utils"

const CERTIFICATES = [
  { src: bookIcons[0], alt: "ISO 9001:2015 certificate — book 1" },
  { src: bookIcons[1], alt: "ISO 9001:2015 certificate — book 2" },
  { src: bookIcons[2], alt: "ISO 9001:2015 certificate — book 3" },
  { src: bookIcons[3], alt: "ISO 9001:2015 certificate — book 4" },
]

type IsoCertificationProps = {
  className?: string
}

export function IsoCertification({ className }: IsoCertificationProps) {
  return (
    <Section id="certificates" className={cn("bg-[#242f3e]", className)}>
      <div className="w-full">
        <MainHeading className="text-white" text="ISO Certification" />

        <ActiveRightSlider
          items={CERTIFICATES}
          className="mt-0 md:mt-6"
          trackClassName="min-h-[412px] justify-start gap-4 md:gap-5"
          itemClassName="rounded-xl bg-transparent shadow-none"
          imageClassName="object-contain object-center"
          navClassName="justify-center"
          prevButtonClassName="border-white/50 bg-transparent text-white hover:bg-white/10"
          nextButtonClassName="bg-(--brand-red) text-white hover:bg-(--brand-red-hover)"
        />
      </div>
    </Section>
  )
}
