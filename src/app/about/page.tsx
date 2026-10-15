import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { JourneyTimeline } from "@/components/about/journey-timeline"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { MainHeading } from "@/components/ui/main-heading"
import {
  COMPANY_INTRO,
  COMPANY_STATS,
  PRODUCT_RANGE,
  PRODUCT_RANGE_NOTE,
} from "@/data/company"

export const metadata: Metadata = {
  title: "About Us — SCONVALVES",
  description:
    "Over 25 years of valve manufacturing in Pakistan, from a single factory in 2000 to a No-Bake foundry, CNC machining and exports across Europe, Africa and the Middle East.",
}

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="relative">
        {/* Intro — carries the dark navy and blueprint grid of the home
            page's About Us section, which is where this page is linked from. */}
        <Section className="about-bg text-white">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-white/60 uppercase"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="size-3.5" aria-hidden />
            <span className="text-white/90">About Us</span>
          </nav>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16">
            <div>
              <MainHeading text="About Us" className="text-white normal-case" />
              <span className="mt-3 block h-px w-16 bg-white/90" aria-hidden />
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
                {COMPANY_INTRO}
              </p>
            </div>

            <dl className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
              {COMPANY_STATS.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
                >
                  <dt className="font-satoshi text-xl font-medium tracking-tight text-white md:text-2xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-white/70 md:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Journey */}
        <Section className="bg-white">
          <MainHeading text="Our Journey" />
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
            Twenty-six years of building valve manufacturing capability in
            Pakistan, from the first factory floor to an export business.
          </p>

          <JourneyTimeline />
        </Section>

        {/* Product range */}
        <Section className="bg-zinc-50">
          <MainHeading text="Product Range" />
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
            {PRODUCT_RANGE_NOTE}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 md:gap-4 lg:grid-cols-3">
            {PRODUCT_RANGE.map((product) => (
              <li
                key={product}
                className="service-card flex items-center gap-3 rounded-xl bg-white px-5 py-4 transition-shadow duration-300"
              >
                <span
                  aria-hidden
                  className="size-1.5 shrink-0 rounded-full bg-(--brand-red)"
                />
                <span className="text-sm font-medium text-[#1a2332] md:text-base">
                  {product}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Closing prompt */}
        <Section className="bg-white pt-0 md:pt-0">
          <div className="flex flex-col gap-6 rounded-2xl bg-gradient-to-r from-(--brand-red) to-[#d64545] p-8 sm:flex-row sm:items-center sm:justify-between md:p-10">
            <div>
              <p className="font-satoshi text-xl font-semibold text-white md:text-2xl">
                Looking for a valve for your project?
              </p>
              <p className="mt-2 max-w-xl text-sm text-white/90 md:text-base">
                Tell us the size, pressure class and material you need and our
                team will come back to you.
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
