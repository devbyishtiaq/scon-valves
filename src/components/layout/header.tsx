"use client"

import { ChevronDown, Menu, Search, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useId, useRef, useState } from "react"

import MainLogo from "@/assets/images/main-logo.png"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#about" },
  {
    label: "Products",
    href: "#products",
    hasDropdown: true,
    children: [
      { label: "Gate Valves", href: "#gate-valves" },
      { label: "Butterfly Valves", href: "#butterfly-valves" },
      { label: "Globe Valves", href: "#globe-valves" },
      { label: "Check Valves", href: "#check-valves" },
      { label: "Strainers", href: "#strainers" },
      { label: "Ball Valves", href: "#ball-valves" },
    ],
  },
  { label: "Certificates", href: "#certificates" },
  { label: "Gallery", href: "#gallery" },
] as const

const getNavItemClass = (isHomePage: boolean) =>
  isHomePage
    ? "inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white/95 transition-colors hover:bg-white/15 hover:text-white focus-visible:bg-white/15 focus-visible:outline-none"
    : "inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 focus-visible:outline-none"

export function Header({ className }: { className?: string }) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const panelId = useId()

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProductsOpen(false)
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setProductsOpen(false)
        setMobileOpen(false)
      }
    }

    document.addEventListener("mousedown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("mousedown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  useEffect(() => {
    if (!mobileOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) setMobileProductsOpen(false)
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header
      className={cn(
        isHomePage ? "absolute inset-x-0 top-0" : "relative w-full",
        "z-20 w-full pt-5 md:pt-6",
        isHomePage ? "" : "border-gray-200 bg-[#f8f9fc] pb-5",
        mobileOpen && "z-50",
        className
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="shrink-0" aria-label="SCONVALVES home">
          <Image
            width={160}
            height={29}
            src={MainLogo}
            alt="SCONVALVES"
            className="h-[29px] w-auto"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        <nav
          aria-label="Primary"
          className={cn(
            "hidden items-center rounded-xl px-1.5 py-1 lg:flex",
            isHomePage
              ? "border border-white/25 bg-white/10 backdrop-blur-md"
              : "gap-0"
          )}
        >
          {navLinks.map((link) => {
            if ("hasDropdown" in link && link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={productsOpen}
                    aria-haspopup="menu"
                    className={cn(
                      getNavItemClass(isHomePage),
                      !isHomePage && "text-red-600",
                      productsOpen && (isHomePage ? "bg-white/15 text-white" : "bg-gray-200/50")
                    )}
                    onClick={() => setProductsOpen((open) => !open)}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 opacity-80 transition-transform",
                        productsOpen && "rotate-180",
                        !isHomePage && "text-red-600"
                      )}
                      aria-hidden
                    />
                  </button>

                  <div
                    role="menu"
                    className={cn(
                      "absolute top-full left-1/2 z-10 w-52 -translate-x-1/2 pt-2 transition-all",
                      productsOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible pointer-events-none -translate-y-1 opacity-0"
                    )}
                  >
                    <ul className={cn(
                      "overflow-hidden rounded-lg px-1.5 py-1",
                      isHomePage
                        ? "border border-white/25 bg-black/80 backdrop-blur-md"
                        : "border border-gray-200 bg-white shadow-md"
                    )}>
                      {link.children.map((item) => (
                        <li key={item.label} role="none">
                          <Link
                            role="menuitem"
                            href={item.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm transition-colors",
                              isHomePage
                                ? "text-white/90 hover:bg-white/15 hover:text-white"
                                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                            )}
                            onClick={() => setProductsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            }

            return (
              <Link key={link.label} href={link.href} className={getNavItemClass(isHomePage)}>
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2.5 md:gap-3">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              "inline-flex size-9 items-center justify-center rounded-full transition-colors",
              isHomePage
                ? "text-white hover:bg-white/15"
                : "text-gray-700 hover:bg-gray-200/50"
            )}
          >
            <Search className="size-5" />
          </button>

          <Button
            asChild
            variant="secondary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Link href="#login">Login</Link>
          </Button>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls={panelId}
            className={cn(
              "inline-flex size-9 items-center justify-center rounded-xl transition-colors lg:hidden",
              isHomePage
                ? "text-white hover:bg-white/15"
                : "text-gray-700 hover:bg-gray-200/50"
            )}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile offcanvas */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          className={cn(
            "absolute inset-0 bg-black/55 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={closeMobile}
        />

        <aside
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={cn(
            "absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col shadow-2xl transition-transform duration-300 ease-out",
            isHomePage ? "bg-[#1a2332]" : "bg-white",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className={cn(
            "flex items-center justify-between border-b px-5 py-4",
            isHomePage ? "border-white/10" : "border-gray-200"
          )}>
            <Image
              width={140}
              height={26}
              src={MainLogo}
              alt="SCONVALVES"
              className="h-6 w-auto"
              style={{ width: "auto", height: "auto" }}
            />
            <button
              type="button"
              aria-label="Close menu"
              className={cn(
                "inline-flex size-9 items-center justify-center rounded-xl transition-colors",
                isHomePage ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-200/50"
              )}
              onClick={closeMobile}
            >
              <X className="size-5" />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4"
          >
            {navLinks.map((link) => {
              if ("hasDropdown" in link && link.hasDropdown) {
                return (
                  <div key={link.label} className="flex flex-col">
                    <button
                      type="button"
                      aria-expanded={mobileProductsOpen}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium transition-colors",
                        isHomePage
                          ? "text-white/95 hover:bg-white/10"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                      onClick={() =>
                        setMobileProductsOpen((open) => !open)
                      }
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "size-4 opacity-80 transition-transform",
                          mobileProductsOpen && "rotate-180"
                        )}
                        aria-hidden
                      />
                    </button>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300",
                        mobileProductsOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      )}
                    >
                      <ul className="overflow-hidden pl-2">
                        {link.children.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className={cn(
                                "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                                isHomePage
                                  ? "text-white/75 hover:bg-white/10 hover:text-white"
                                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                              )}
                              onClick={closeMobile}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    isHomePage
                      ? "text-white/95 hover:bg-white/10"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className={cn(
            "border-t p-4",
            isHomePage ? "border-white/10" : "border-gray-200"
          )}>
            <Button asChild variant="secondary" className="w-full">
              <Link href="#login" onClick={closeMobile}>
                Login
              </Link>
            </Button>
          </div>
        </aside>
      </div>
    </header>
  )
}
