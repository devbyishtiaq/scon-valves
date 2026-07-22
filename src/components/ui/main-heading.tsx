import { cn } from "@/lib/utils"

type MainHeadingProps = {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "h4"
}

/**
 * Section heading — Satoshi Light, tracking -0.5px, #222222
 * Desktop: 62px · Mobile: 32px
 */
export function MainHeading({
  text,
  className,
  as: Tag = "h2",
}: MainHeadingProps) {
  const lines = text.split("\n")

  return (
    <Tag
      className={cn(
        "font-satoshi font-light tracking-[-0.5px] text-[#222222] uppercase",
        "text-[32px] leading-[1.05]",
        "md:text-[62px] md:leading-16",
        className
      )}
    >
      {lines.map((line, index) => (
        <span key={`${line}-${index}`}>
          {index > 0 ? <br /> : null}
          {line}
        </span>
      ))}
    </Tag>
  )
}
