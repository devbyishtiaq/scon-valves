import Link from "next/link"

import worldMap from "@/assets/images/world-map.svg"
import { cn } from "@/lib/utils"
import MainLogo from "@/assets/images/main-logo.png"
import Image from "next/image"
import FooterMap from "@/assets/images/footer-map.png"

const SERVICES = [
  { label: "Products", href: "#products" },
  { label: "Clientele", href: "#clientele" },
  { label: "Technicalities", href: "#foundry" },
  { label: "Certificates", href: "#certificates" },
] as const

const SITEMAP = [
  { label: "Home", href: "#" },
  { label: "Contact", href: "#contact" },
] as const

const CONTACT = [
  "+92 42 35877656–57",
  "+92 320 9919912,13,14",
  "sales@sfrvalves.com",
  "marketing@sfrvalves.com",
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
            <h3 className="text-base font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-base font-semibold text-white">Sitemap</h3>
            <ul className="mt-4 space-y-2.5">
              {SITEMAP.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
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
