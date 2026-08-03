import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode
}

/**
 * Shared landing section wrapper (Figma rules).
 * Full width, no max-width, no horizontal padding, py-10 md:py-20 via `.container`.
 * Do not use for Hero.
 */
export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "w-full max-w-full px-4 py-10 sm:px-6 md:px-10 md:py-20 lg:px-20",
        className
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  )
}
