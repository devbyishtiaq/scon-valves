"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

import { manufactureIcons } from "@/assets/icons"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/section"
import { MainHeading } from "@/components/ui/main-heading"
import { cn } from "@/lib/utils"

type Service = {
  number: string
  title: string
  description: string
  href: string
}

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Gate Valves",
    description:
      "Reliable isolation valves engineered for tight shut-off across industrial piping systems.",
    href: "/products/gate-valves",
  },
  {
    number: "02",
    title: "Butterfly Valves",
    description:
      "Compact, high-performance flow control with durable discs for demanding applications.",
    href: "/products/butterfly-valves",
  },
  {
    number: "03",
    title: "Globe Valves",
    description:
      "Precision throttling valves designed for accurate regulation and long service life.",
    href: "/products/globe-valves",
  },
  {
    number: "04",
    title: "Check Valves",
    description:
      "Automatic backflow prevention built for consistent sealing and low maintenance.",
    href: "/products/check-valves",
  },
  {
    number: "05",
    title: "Strainers",
    description:
      "Protect downstream equipment with robust filtration for clean, reliable flow.",
    href: "/products/strainers",
  },
  {
    number: "06",
    title: "Ball Valves",
    description:
      "Quarter-turn shut-off valves delivering fast operation and leak-tight performance.",
    href: "/products/ball-valves",
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const reduceMotion = useReducedMotion()
  const icon = manufactureIcons[index]

  const textMotion = {
    initial: reduceMotion ? false : { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
  }

  const imageMotion = {
    initial: reduceMotion ? false : { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
  }

  return (
    <article
      id={service.href.replace("#", "")}
      className="scroll-mt-24 overflow-hidden rounded-3xl bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] sm:p-6"
    >
      <div className="grid grid-cols-[1.15fr_0.85fr] items-center gap-3 sm:gap-4">
        <motion.div
          className="relative min-w-0"
          initial={textMotion.initial}
          whileInView={textMotion.whileInView}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.05,
          }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -top-2 left-0 font-satoshi text-5xl font-bold leading-none text-zinc-200 select-none sm:text-6xl"
          >
            {service.number}
          </span>

          <div className="relative pt-8 sm:pt-19">
            <h3 className="text-sm font-bold tracking-wide text-[#1a2332] uppercase sm:text-base">
              {service.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-zinc-500 sm:text-sm">
              {service.description}
            </p>
            <Button asChild variant="outline" size="sm" className="mt-4">
              <Link href={service.href}>Learn More</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative flex aspect-square w-full items-center justify-center"
          initial={imageMotion.initial}
          whileInView={imageMotion.whileInView}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.06 + index * 0.05,
          }}
        >
          <Image
            src={icon}
            alt={service.title}
            width={114}
            height={184}
            unoptimized
            className="object-contain object-center"
            style={{ width: "auto", height: 184 }}
          />
        </motion.div>
      </div>
    </article>
  )
}

type ManufacturingServicesProps = {
  className?: string
}

export function ManufacturingServices({
  className,
}: ManufacturingServicesProps) {
  return (
    <Section
      id="manufacturing-services"
      className={cn("bg-zinc-100/80", className)}
    >
      <div className="w-full">
        <div className="mb-10 text-center md:mb-14">
          <MainHeading text="Manufacturing Services" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-zinc-50 px-10"
          >
            <Link href="#products">View All</Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
