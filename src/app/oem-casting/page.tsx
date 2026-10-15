import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import foundryImage from "@/assets/images/people_working_avatar.jpeg"
import machiningImage from "@/assets/images/maching-img.png"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { MainHeading } from "@/components/ui/main-heading"
import {
  OEM_CASTING_MATERIALS,
  OEM_CAST_COMPONENTS,
  OEM_INTRO,
  OEM_MACHINED_PARTS,
} from "@/data/company"

export const metadata: Metadata = {
  title: "OEM Casting & Parts — SCONVALVES",
  description:
    "OEM castings and machined parts from an in-house NO-BAKE foundry and machine shop: bodies, bonnets, handwheels, glands, wedges and discs in cast iron, ductile iron, cast steel and stainless steel.",
}

/** The two capabilities the page's opening claim rests on. */
const FACILITIES = [
  {
    image: foundryImage,
    title: "In-house foundry",
    detail:
      "NO-BAKE, chemically bonded plant with in-house electric furnaces, pouring the castings on site.",
    alt: "Molten metal poured into moulds at the SCONVALVES foundry",
  },
  {
    image: machiningImage,
    title: "In-house machine shop",
    detail:
      "CNC machining of the cast parts to drawing, finished and inspected under the same roof.",
    alt: "CNC machining of valve components at SCONVALVES",
  },
]

export default function OemCastingPage() {
  return (
    <>
      <Header />

      <main className="relative">
        <Section className="certificates-bg text-white">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-white/60 uppercase"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="size-3.5" aria-hidden />
            <span className="text-white/90">OEM Casting &amp; Parts</span>
          </nav>

          <div className="mt-6 max-w-3xl">
            <MainHeading text="OEM Casting & Parts" className="text-white" />
            <span className="mt-3 block h-px w-16 bg-white/90" aria-hidden />
            <p className="mt-6 text-sm leading-relaxed text-white/85 md:text-base">
              {OEM_INTRO}
            </p>
          </div>
        </Section>

        {/* The two facilities the offer depends on. */}
        <Section className="bg-white">
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {FACILITIES.map((facility) => (
              <div key={facility.title}>
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-gray-300">
                  <Image
                    src={facility.image}
                    alt={facility.alt}
                    fill
                    className="rounded-[0.625rem] object-cover p-1"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h2 className="mt-5 font-satoshi text-lg font-semibold text-[#1a2332] md:text-xl">
                  {facility.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">
                  {facility.detail}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Cast components and the grades they are poured in. */}
        <Section className="bg-zinc-50">
          <MainHeading text="OEM Castings" />
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
            Cast to your drawing and finished in our own machine shop.
          </p>

          <div className="mt-8 grid gap-8 md:mt-12 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
            <div>
              <h3 className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
                Components
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 md:gap-4">
                {OEM_CAST_COMPONENTS.map((component) => (
                  <li
                    key={component}
                    className="service-card flex items-center gap-3 rounded-xl bg-white px-5 py-4 transition-shadow duration-300"
                  >
                    <span
                      aria-hidden
                      className="size-1.5 shrink-0 rounded-full bg-(--brand-red)"
                    />
                    <span className="text-sm font-medium text-[#1a2332] md:text-base">
                      {component}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
                Materials
              </h3>
              <ul className="mt-4 space-y-3 md:space-y-4">
                {OEM_CASTING_MATERIALS.map((material) => (
                  <li
                    key={material}
                    className="rounded-xl border border-zinc-200 bg-white px-5 py-4 text-sm font-medium text-[#1a2332] md:text-base"
                  >
                    {material}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Machined parts, with their grades as chips. */}
        <Section className="bg-white">
          <MainHeading text="Machined Parts" />
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
            Machined in-house in brass and stainless grades.
          </p>

          <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
            {OEM_MACHINED_PARTS.map(({ part, grades }) => (
              <div
                key={part}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8"
              >
                <h3 className="font-satoshi text-lg font-semibold text-[#1a2332] md:text-xl">
                  {part}
                </h3>
                <p className="mt-1 text-xs font-medium tracking-[0.14em] text-zinc-500 uppercase">
                  Available grades
                </p>

                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {grades.map((grade) => (
                    <li
                      key={grade}
                      className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm text-zinc-700"
                    >
                      {grade}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section className="bg-white pt-0 md:pt-0">
          <div className="flex flex-col gap-6 rounded-2xl bg-gradient-to-r from-(--brand-red) to-[#d64545] p-8 sm:flex-row sm:items-center sm:justify-between md:p-10">
            <div>
              <p className="font-satoshi text-xl font-semibold text-white md:text-2xl">
                Have a drawing to quote?
              </p>
              <p className="mt-2 max-w-xl text-sm text-white/90 md:text-base">
                Send us the part, the material and the quantity, and our team
                will come back to you.
              </p>
            </div>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className="shrink-0 rounded-full px-8 text-(--brand-red)"
            >
              <Link href="/#contact">Contact us</Link>
            </Button>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}
