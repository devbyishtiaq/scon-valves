"use client"

import { Car, Clock3, Mail, MapPin, ParkingCircle, Phone } from "lucide-react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

import person1 from "@/assets/images/contact/person-1.jpg"
import person2 from "@/assets/images/contact/person-2.jpg"
import { Button } from "@/components/ui/button"
import { ContactCard, ContactIcon } from "@/components/ui/contact-card"
import { Section } from "@/components/layout/section"
import { cn } from "@/lib/utils"

const CONTACT_DETAILS = [
  {
    title: "Head Office",
    lines: ["32-B1, Main Gulberg, Lahore, Pakistan"],
    icon: MapPin,
  },
  {
    title: "Phone & Fax",
    lines: ["+92-42-35714301-5", "Fax: +92-42-35714300"],
    icon: Phone,
  },
  {
    title: "Email Support",
    lines: ["sales@stivalves.com", "marketing@stivalves.com"],
    icon: Mail,
  },
] as const

const TEAM: {
  name: string
  role: string
  image: StaticImageData
}[] = [
  {
    name: "Ali Raza",
    role: "Director Sales & Marketing",
    image: person1,
  },
  {
    name: "Sara Khan",
    role: "Export Manager",
    image: person2,
  },
]

const MAP_FEATURES = [
  {
    title: "Easy Access",
    detail: "Main Gulberg Rd",
    icon: Car,
  },
  {
    title: "Parking Available",
    detail: "On Premises",
    icon: ParkingCircle,
  },
  {
    title: "Mon - Fri",
    detail: "9AM - 6PM (PKT)",
    icon: Clock3,
  },
] as const

/** OpenStreetMap embed — Main Gulberg, Lahore */
const MAP_EMBED_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=74.335%2C31.505%2C74.360%2C31.525&layer=mapnik&marker=31.515%2C74.3475"

type ContactUsProps = {
  className?: string
}

export function ContactUs({ className }: ContactUsProps) {
  return (
    <Section
      id="contact"
      className={cn("overflow-x-hidden bg-zinc-100/90", className)}
    >
      <div className="w-full min-w-0 max-w-full rounded-[14px] border border-[#D6D6D6] p-2">
        <div className="min-w-0 max-w-full overflow-hidden rounded-[20px] p-3 sm:rounded-[28px] sm:p-5">
          <div className="grid min-w-0 gap-6 lg:grid-cols-2 lg:gap-10">
            {/* Left: contact info */}
            <div className="flex min-w-0 flex-col gap-4 rounded-xl bg-[#F8F8F8] p-3 sm:gap-5 sm:p-4">
              <div className="min-w-0">
                <p className="font-sans text-sm font-light tracking-[0.12em] text-[#FF3B3B] uppercase md:text-base">
                  Get In Touch
                </p>
                <h2 className="mt-1 font-satoshi text-sm font-light tracking-[0.12em] text-black md:text-base">
                  Contact <span className="text-(--brand-red)">Us</span>
                </h2>
                <p className="mt-2 text-sm text-zinc-500 md:text-base">
                  We&apos;d love to hear from you. Our team is always here to
                  chat.
                </p>
              </div>

              <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
                {CONTACT_DETAILS.map((item) => (
                  <ContactCard key={item.title}>
                    <ContactIcon>
                      <item.icon className="size-5" strokeWidth={2} />
                    </ContactIcon>
                    <div className="min-w-0 flex-1">
                      <p className="text-base font-semibold text-zinc-800">
                        {item.title}
                      </p>
                      {item.lines.map((line) => (
                        <p
                          key={line}
                          className="mt-0.5 break-words text-sm leading-relaxed text-zinc-500"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </ContactCard>
                ))}
              </div>

              <div className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4">
                {TEAM.map((person) => (
                  <ContactCard
                    key={person.name}
                    className="items-center gap-3 p-3 sm:gap-4 sm:p-4"
                  >
                    <div className="relative size-14 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-zinc-800">
                        {person.name}
                      </p>
                      <p className="mt-0.5 text-xs leading-snug break-words text-zinc-500">
                        {person.role}
                      </p>
                    </div>
                  </ContactCard>
                ))}
              </div>

              <div className="flex min-w-0 flex-col gap-4 rounded-[20px] bg-gradient-to-r from-(--brand-red) to-[#d64545] p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-white">
                    We&apos;re here to help!
                  </p>
                  <p className="mt-1 text-sm text-white/90">
                    Mon-Fri: 9:00 AM - 6:00 PM (PKT)
                  </p>
                </div>
                <Button
                  asChild
                  variant="secondary"
                  className="w-full shrink-0 rounded-full bg-white px-6 font-medium text-(--brand-red) hover:bg-white/95 sm:w-auto"
                >
                  <Link href="mailto:sales@stivalves.com">Send Message</Link>
                </Button>
              </div>
            </div>

            {/* Right: map */}
            <div className="relative min-h-[28rem] min-w-0 overflow-hidden rounded-[20px] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)] lg:min-h-full">
              <iframe
                title="SCONVALVES location map — Main Gulberg, Lahore"
                src={MAP_EMBED_SRC}
                className="absolute inset-0 h-full w-full max-w-full border-0 grayscale-[20%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <ContactCard className="absolute top-3 left-3 z-10 w-[min(100%-1.5rem,16.5rem)] gap-3 p-3 shadow-[0_10px_28px_rgba(15,23,42,0.12)] sm:top-4 sm:left-4 sm:p-4">
                <ContactIcon className="size-10 rounded-lg">
                  <MapPin className="size-4" />
                </ContactIcon>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-800">
                    Our Location
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed break-words text-zinc-500">
                    32-B1, Main Gulberg, Lahore, Pakistan
                  </p>
                </div>
              </ContactCard>

              <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-[70%]">
                <div className="flex flex-col items-center">
                  <MapPin
                    className="size-12 fill-(--brand-red) text-(--brand-red) drop-shadow-md"
                    strokeWidth={1.5}
                  />
                  <span className="mt-1 rounded-md bg-white/95 px-2 py-0.5 text-[10px] font-bold tracking-wide text-zinc-800 uppercase shadow-sm">
                    Main Gulberg
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-2 bottom-2 z-10 min-w-0 rounded-[16px] bg-white/95 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.1)] backdrop-blur-sm sm:inset-x-4 sm:bottom-4 sm:p-4">
                <div className="grid min-w-0 gap-2.5 sm:grid-cols-3 sm:gap-2">
                  {MAP_FEATURES.map((feature) => (
                    <div
                      key={feature.title}
                      className="flex min-w-0 items-start gap-2"
                    >
                      <ContactIcon className="size-9 shrink-0 rounded-lg">
                        <feature.icon className="size-4" />
                      </ContactIcon>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold break-words text-zinc-800 sm:text-sm">
                          {feature.title}
                        </p>
                        <p className="text-[11px] break-words text-zinc-500 sm:text-xs">
                          {feature.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
