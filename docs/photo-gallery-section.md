# Photo Gallery section — slider → captioned grid

**Changed:** 2026-09-27 · **File:** `src/components/sections/photo-gallery.tsx`

This is the restore note for the Photo Gallery. It records exactly what the
section used to do, so the slider can be put back without guesswork.

---

## What changed

| | Before | After |
|---|---|---|
| Layout | `ActiveRightSlider` — 4 visible tiles, the rightmost one enlarged | Static grid, 2 columns on mobile, 4 from `lg` |
| Photos shown | 4 at a time, rotating through all 8 | The same first 4 (`VISIBLE_COUNT`), no rotation |
| Image size | Active tile `363×412`, inactive tiles `254×299` | Every tile identical at the old inactive ratio, `aspect-[254/299]`, `object-cover` |
| Active-tile zoom | Rightmost tile grew; clicking a tile made it active | Removed — no active state, no click behaviour |
| Navigation | Prev / next round buttons below the track | Removed |
| Captions | None | One-line caption under every image |
| Motion | `transition-[width,height] duration-500 ease-out` on resize | Fade + 24px rise on scroll into view, 60ms stagger |

Tile sizing note: the old tiles were fixed pixels and never responsive. The
grid keeps the old `254 × 299` proportion as an aspect ratio instead, so a tile
lands at roughly `265 × 312` inside the `max-w-7xl` container and scales down
cleanly on narrow screens rather than overflowing.

The `ActiveRightSlider` component itself was **not deleted** — it still lives at
`src/components/ui/active-right-slider.tsx`, unused. Restoring is a call-site
swap, not a rewrite.

## What stayed the same

- Section id `#gallery` (the header nav links to it).
- Section background: `bg-linear-to-b from-zinc-50 to-[#f6f0ef]`.
- Heading: `<MainHeading text="Photo Gallery" />`.
- All 8 source images in `src/assets/images/gallery/` and their `alt` text —
  `GALLERY` still holds every one, the section just renders the first
  `VISIBLE_COUNT` (4) of them. Reordering the array changes which photos show;
  raising `VISIBLE_COUNT` shows more.

---

## Restoring the slider

1. Make sure `src/components/ui/active-right-slider.tsx` still exists (source
   appended below if it does not).
2. In `src/components/sections/photo-gallery.tsx`, swap the
   `CaptionedImageGrid` block back for this **exact** call:

```tsx
import { ActiveRightSlider } from "@/components/ui/active-right-slider"

<ActiveRightSlider
  items={GALLERY}
  visibleCount={4}
  className="mt-0 md:mt-6"
  trackClassName="min-h-[412px] justify-start gap-4 md:gap-5"
  itemClassName="rounded-xl bg-transparent shadow-none"
  imageClassName="object-cover"
/>
```

3. `GALLERY` fed the slider as `{ src, alt }` pairs — the extra `caption` field
   added for the grid is ignored by the slider, so the array can stay as is.

### Slider behaviour, in detail

- **State:** a single `activeIndex`, initialised to
  `Math.min(visibleCount - 1, Math.max(items.length - 1, 0))` — i.e. the 4th
  image (index 3) starts active, so the first render shows images 0…3 with 3
  enlarged on the right.
- **Windowing:** `count = Math.min(visibleCount, items.length)`. The visible
  window is computed backwards from the active index and wraps:
  `(activeIndex - (count - 1 - i) + items.length) % items.length`. The active
  tile is therefore always the **last** (rightmost) one in the track.
- **Navigation:** prev = `(current - 1 + length) % length`, next =
  `(current + 1) % length`. Both wrap infinitely; there is no disabled state.
- **Clicking a tile** sets it active, which shifts the whole window.
- **Sizes:** active `h-[412px] w-[363px]` with `z-10`; inactive
  `h-[299px] w-[254px]`. These are fixed pixel sizes — the slider was never
  responsive, which is part of why it was replaced.
- **Images:** `fill` + `unoptimized`, `sizes` of `363px` when active and `254px`
  otherwise.
- **Accessibility:** each tile is a `<button>` with
  `aria-label={`Show ${alt}`}` and `aria-current="true"` on the active one.

### Navigation button colours (shared with ISO Certification)

| Button | Classes |
|---|---|
| Prev (default) | `size-11 rounded-full border border-zinc-400 bg-white text-zinc-700 hover:bg-zinc-50` |
| Next (default) | `size-11 rounded-full bg-(--brand-red) text-white hover:bg-(--brand-red-hover)` |
| Nav row | `mt-10 flex items-center justify-center gap-3 md:mt-12` |

`--brand-red` is `#b22222` and `--brand-red-hover` is `#961c1c`, both defined in
`src/app/globals.css`. The Photo Gallery used these defaults unchanged.

---

## Current grid, for reference

```tsx
<CaptionedImageGrid
  items={GALLERY.slice(0, VISIBLE_COUNT)}
  className="mt-0 md:mt-6"
  columnsClassName="grid-cols-2 lg:grid-cols-4"
  tileClassName="aspect-[254/299] bg-zinc-200/60"
  imageClassName="object-cover"
  captionClassName="text-zinc-600"
/>
```

Captions live on each `GALLERY` entry as `caption`. Keep them to one line —
the grid does not truncate, so a long caption pushes the row taller.

> **Note on source images.** The four displayed files are small —
> `gallery-1…3.jpg` are 192×306 and `gallery-4.jpg` is 327×306 — against a tile
> roughly 265px wide, so they are upscaled slightly. This was equally true of
> the slider (its tiles were 254px and 363px wide). Higher-resolution
> replacements would sharpen the section noticeably.

---

## Appendix — `ActiveRightSlider` source as it was at time of change

<details>
<summary><code>src/components/ui/active-right-slider.tsx</code></summary>

```tsx
"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Image, { type StaticImageData } from "next/image"
import { useCallback, useState } from "react"

import { cn } from "@/lib/utils"

export type SliderItem = {
  src: string | StaticImageData
  alt: string
}

type ActiveRightSliderProps = {
  items: SliderItem[]
  visibleCount?: number
  className?: string
  trackClassName?: string
  itemClassName?: string
  activeItemClassName?: string
  inactiveItemClassName?: string
  imageClassName?: string
  navClassName?: string
  prevButtonClassName?: string
  nextButtonClassName?: string
  align?: "center" | "start"
}

export function ActiveRightSlider({
  items,
  visibleCount = 4,
  className,
  trackClassName,
  itemClassName,
  activeItemClassName,
  inactiveItemClassName,
  imageClassName,
  navClassName,
  prevButtonClassName,
  nextButtonClassName,
  align = "center",
}: ActiveRightSliderProps) {
  const reduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.min(visibleCount - 1, Math.max(items.length - 1, 0))
  )

  const count = Math.min(visibleCount, items.length)

  const visibleIndices = Array.from({ length: count }, (_, i) => {
    const offset = count - 1 - i
    return (activeIndex - offset + items.length) % items.length
  })

  const goPrev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length)
  }, [items.length])

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % items.length)
  }, [items.length])

  if (items.length === 0) return null

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "flex gap-3 overflow-hidden sm:gap-4 md:gap-5",
          align === "start" ? "items-start" : "items-center",
          "justify-start",
          trackClassName
        )}
      >
        {visibleIndices.map((imageIndex, position) => {
          const item = items[imageIndex]
          const isActive = position === count - 1

          return (
            <motion.button
              key={imageIndex}
              type="button"
              aria-label={`Show ${item.alt}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => setActiveIndex(imageIndex)}
              initial={false}
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "relative shrink-0 overflow-hidden rounded-xl transition-[width,height] duration-500 ease-out",
                itemClassName,
                isActive
                  ? cn("z-10 h-[412px] w-[363px]", activeItemClassName)
                  : cn("h-[299px] w-[254px]", inactiveItemClassName)
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                unoptimized
                className={cn("object-cover", imageClassName)}
                sizes={
                  isActive
                    ? "(max-width: 768px) 50vw, 363px"
                    : "(max-width: 768px) 40vw, 254px"
                }
                priority={position === 0 || isActive}
              />
            </motion.button>
          )
        })}
      </div>

      <div
        className={cn(
          "mt-10 flex items-center justify-center gap-3 md:mt-12",
          navClassName
        )}
      >
        <button
          type="button"
          aria-label="Previous"
          onClick={goPrev}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full border border-zinc-400 bg-white text-zinc-700 transition-colors hover:bg-zinc-50",
            prevButtonClassName
          )}
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={goNext}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full bg-(--brand-red) text-white transition-colors hover:bg-(--brand-red-hover)",
            nextButtonClassName
          )}
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  )
}
```

</details>
