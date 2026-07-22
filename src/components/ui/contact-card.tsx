import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Contact card — Figma: horizontal auto-layout, 24px gap/padding, 20px radius, #FFF
 */
type ContactCardProps = {
  children: ReactNode
  className?: string
}

export function ContactCard({ children, className }: ContactCardProps) {
  return (
    <div
      className={cn(
        "flex w-full min-w-0 max-w-full items-start gap-3 rounded-[20px] bg-white p-3 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:gap-6 sm:p-6",
        className
      )}
    >
      {children}
    </div>
  )
}

type ContactIconProps = {
  children: ReactNode
  className?: string
}

export function ContactIcon({ children, className }: ContactIconProps) {
  return (
    <span
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0f0] text-(--brand-red)",
        className
      )}
    >
      {children}
    </span>
  )
}
