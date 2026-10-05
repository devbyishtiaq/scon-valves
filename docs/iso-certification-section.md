# ISO Certification section — slider → captioned grid

**Changed:** 2026-09-27 · **File:** `src/components/sections/iso-certification.tsx`

Restore note for the ISO Certification section. Same change as the Photo
Gallery (see `docs/photo-gallery-section.md`), with its own styling overrides.

---

## What changed

| | Before | After |
|---|---|---|
| Layout | `ActiveRightSlider` — all 4 certificates visible, the rightmost enlarged | Static grid, 2 columns on mobile, 4 from `lg` |
| Image size | Active tile `363×412`, inactive tiles `254×299` | Every tile identical, `aspect-[3/4]`, `object-contain` |
| Active-tile zoom | Rightmost certificate grew; clicking one made it active | Removed — no active state, no click behaviour |
| Navigation | Prev / next round buttons, centred, custom colours | Removed — all 4 certificates are visible at once |
| Captions | None | One-line caption under every certificate |
| Motion | `transition-[width,height] duration-500 ease-out` on resize | Fade + 24px rise on scroll into view, 60ms stagger |

Because there were only 4 certificates and `visibleCount` defaulted to 4, the
slider never actually scrolled anything into view — prev/next only rotated
which certificate was enlarged. That is the main reason the grid replaced it.

The `ActiveRightSlider` component is **still in the repo**, unused, at
`src/components/ui/active-right-slider.tsx`.

## What stayed the same

- Section id `#certificates` (the header nav links to it).
- Heading: `<MainHeading className="text-white" text="ISO Certification" />`.
- Section background: still `#242f3e`, now via the `.certificates-bg` class
  (spotlight plus diagonal hatch) rather than a flat `bg-[#242f3e]`.

### Sources were replaced on 2026-10-05

Previously `bookIcons` from `src/assets/icons/index.ts` — `book-1.svg` …
`book-4.svg`, SVG wrappers around embedded raster scans, 320–545KB each,
rendered with `unoptimized` because next/image cannot optimise SVG. That is
the path that was hard to find: the `certificates/cert-*.jpg` files sitting
next to them were never actually referenced.

Now `src/assets/images/certificates/cert-1.jpeg` … `cert-4.jpeg`, real JPEGs
at roughly 1130×1600 (3:4), 217–292KB each, optimised normally by next/image.
The `bookIcons` export has been removed; the four `book-*.svg` files are still
on disk, unused, and can be deleted to reclaim ~1.6MB.

---

## Restoring the slider

Swap the `CaptionedImageGrid` block back for this **exact** call:

```tsx
import { ActiveRightSlider } from "@/components/ui/active-right-slider"

<ActiveRightSlider
  items={CERTIFICATES}
  className="mt-0 md:mt-6"
  trackClassName="min-h-[412px] justify-start gap-4 md:gap-5"
  itemClassName="rounded-xl bg-transparent shadow-none"
  imageClassName="object-contain object-center"
  navClassName="justify-center"
  prevButtonClassName="border-white/50 bg-transparent text-white hover:bg-white/10"
  nextButtonClassName="bg-(--brand-red) text-white hover:bg-(--brand-red-hover)"
/>
```

Note: `visibleCount` was **not** passed here — it fell back to the default `4`.

`CERTIFICATES` fed the slider as `{ src, alt }` pairs; the `caption` field added
for the grid is ignored by the slider, so the array can stay as is.

### Slider behaviour

Identical to the Photo Gallery — the full algorithm (windowing, wrap-around,
fixed tile sizes, accessibility attributes) is documented in
`docs/photo-gallery-section.md`.

### Colours used by this section

| Element | Value |
|---|---|
| Section background | `#242f3e` |
| Heading | `text-white` over `MainHeading`'s `#222222` default |
| Prev button | `border-white/50 bg-transparent text-white hover:bg-white/10` |
| Next button | `bg-(--brand-red) text-white hover:bg-(--brand-red-hover)` |
| `--brand-red` | `#b22222` (`src/app/globals.css`) |
| `--brand-red-hover` | `#961c1c` (`src/app/globals.css`) |
| Nav row | `mt-10 md:mt-12`, `justify-center` |
| Caption (new) | `text-white/70`, `text-sm leading-snug` |

---

## Current grid, for reference

```tsx
<CaptionedImageGrid
  items={CERTIFICATES}
  className="mt-8 md:mt-12"
  columnsClassName="grid-cols-2 lg:grid-cols-4"
  tileClassName="aspect-[3/4] bg-white/5"
  imageClassName="object-contain object-center"
  captionClassName="text-white/70"
/>
```

`object-contain` (not `cover`) keeps each certificate scan fully readable inside
the fixed 3:4 tile; the faint `bg-white/5` gives the tile a visible edge on the
dark background where a scan does not fill it.

### Order and caption copy

Tiles run **oldest to newest by the issue date printed on each scan**, so the
row reads as an unbroken certification history ending on the current
certificate. The file numbering runs the other way, which is why
`iso-certification.tsx` imports them under year aliases.

| Position | File | Body | Issued | Valid till |
|---|---|---|---|---|
| 1 | `cert-4.jpeg` | RICI (IAS accredited), cert. PK220001 | 2022-05-26 | 2023-04-25 |
| 2 | `cert-3.jpeg` | RICI, cert. PK220001 | 2023-04-25 | 2024-04-25 |
| 3 | `cert-2.jpeg` | RICI, cert. PK220001 | 2024-03-12 | 2025-04-25 |
| 4 | `cert-1.jpeg` | TÜV Austria, reg. TPAK-030188725-QMS | 2025-03-28 | 2028-03-27 |

To show newest first instead, reverse the `CERTIFICATES` array — nothing else
depends on the order.

**Expiry:** only the TÜV Austria certificate is currently valid (to 2028-03-27).
The three RICI scans all expired in 2023, 2024 and 2025 respectively. Showing
them as a history is a deliberate choice; if they should be hidden once lapsed,
drop them from the array.
