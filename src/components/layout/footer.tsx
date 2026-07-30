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

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: FacebookIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: LinkedinIcon },
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
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-7 lg:gap-8">
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
