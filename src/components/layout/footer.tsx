import Link from "next/link"

import worldMap from "@/assets/images/world-map.svg"
import { cn } from "@/lib/utils"
import MainLogo from "@/assets/images/main-logo.png"
import Image from "next/image"
import FooterMap from "@/assets/images/footer-map.png"

/** Mirrors the header nav, so the two never disagree. */
const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Products", href: "/#products" },
  { label: "OEM Casting", href: "/oem-casting" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Gallery", href: "/#gallery" },
] as const

const CONTACT = [
  "+92 42 35877656–57",
  "+92 320 9919913,14,15",
  "sales@sconvalve.com.pk",
  "www.sconvalve.com.pk",
] as const

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
    >
      <path
        className={className}
        d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"
      />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
    >
      <path
        className={className}
        d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"
      />
    </svg>
  )
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        className={className}
        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 110.9L0 480l127.9-33.6c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.3-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
      />
    </svg>
  )
}

const SOCIAL_LINKS = [
  // TODO: still the generic Facebook home page — needs the company page URL.
  { label: "Facebook", href: "https://www.facebook.com/", icon: FacebookIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/scon-valves-pvt-ltd/",
    icon: LinkedinIcon,
  },
  { label: "WhatsApp", href: "https://wa.me/923209919915", icon: WhatsappIcon },
] as const

const worldMapSrc =
  typeof worldMap === "string" ? worldMap : (worldMap as { src: string }).src

type FooterProps = {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "relative footer-bg overflow-hidden bg-[#2d3848] text-zinc-300",
        className
      )}
    >
      {/* Faint world-map watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[length:110%_auto] bg-center bg-no-repeat opacity-[0.14]"
        style={{ backgroundImage: `url(${FooterMap})` }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 pt-14 pb-8 md:px-8 md:pt-16 md:pb-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="col-span-3">
            <Link
              href="/"
              className="inline-block"
              aria-label="SCONVALVES home"
            >
              <Image
                width={485}
                height={55}
                src={MainLogo}
                alt="SCONVALVES"
                className="h-[55px] w-auto max-w-full"
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
          </div>

          <div className="col-span-1">
            <h3 className="text-base font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm whitespace-nowrap text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-base font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2.5">
              {CONTACT.map((line) => (
                <li key={line} className="text-sm text-zinc-400">
                  {line.includes("@") ? (
                    <a
                      href={`mailto:${line}`}
                      className="transition-colors hover:text-white"
                    >
                      {line}
                    </a>
                  ) : (
                    line
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-base font-semibold text-white">Follow Us</h3>
            <ul className="mt-4 space-y-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#e3b34f] transition-all group-hover:border-[#e3b34f]/60! group-hover:bg-[#e3b34f]/10 group-hover:text-[#f6c968]">
                      <Icon className="h-4 w-4 transition-all fill-white group-hover:fill-[#e3b34f]/60" />
                    </span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 md:mt-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-zinc-500 md:text-sm">
              ©2025 Elite Global Group Ltd. | All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-500 md:gap-10 md:text-sm">
              <Link
                href="#terms"
                className="transition-colors hover:text-zinc-300"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="#privacy"
                className="transition-colors hover:text-zinc-300"
              >
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
