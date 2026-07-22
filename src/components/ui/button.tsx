import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center border border-transparent font-satoshi font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "rounded-md bg-(--brand-red) text-white uppercase tracking-wide hover:bg-(--brand-red-hover)",
        secondary: "rounded-md bg-white text-zinc-900 hover:bg-white/90",
        outline:
          "rounded-md border-(--brand-red) bg-transparent text-(--brand-red) hover:bg-(--brand-red)/5",
        ghost: "rounded-md bg-transparent text-white hover:bg-white/10",
      },
      size: {
        default: "h-10 gap-2 px-6 text-sm",
        sm: "h-9 gap-1.5 px-5 text-sm",
        lg: "h-12 gap-2 px-8 text-sm md:text-sm font-medium",
        icon: "size-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
