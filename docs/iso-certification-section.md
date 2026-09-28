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
- Section background: `bg-[#242f3e]` (dark navy).
- Heading: `<MainHeading className="text-white" text="ISO Certification" />`.
- Sources: `bookIcons` from `src/assets/icons/index.ts` — `book-1.svg` …
  `book-4.svg`. These are SVG wrappers around embedded raster scans, ~320–545KB
  each, with a 3:4 viewBox (`361×470` for book 1, `244×318` for the rest).
  They are rendered with `unoptimized` because next/image cannot optimise SVG.

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
  unoptimized
/>
```

`object-contain` (not `cover`) keeps each certificate scan fully readable inside
the fixed 3:4 tile; the faint `bg-white/5` gives the tile a visible edge on the
dark background where a scan does not fill it.

### Caption copy — please verify

The captions were transcribed from the certificate scans and are a best reading
of low-resolution images. Confirm against the originals before launch:

| # | File | Caption |
|---|---|---|
| 1 | `book-1.svg` | ISO 9001:2015 — OEM castings, valves & flanges (Bureau Veritas) |
| 2 | `book-2.svg` | ISO 9001:2015 — Scon valve & flange manufacturing (Bureau Veritas) |
| 3 | `book-3.svg` | ISO 9001:2015 — valves, flanges & castings (RICI, IAS accredited) |
| 4 | `book-4.svg` | ISO 9001:2015 — industrial valves & in-house foundry (TÜV Austria) |

Certificate 4 (TÜV Austria, reg. TPAK-030188725-QMS) shows a validity date of
2028-03-27; certificates 1–3 show expiry dates that have already passed
(2019, 2022 and 2024-04-25 respectively). Worth checking whether the older
scans should be replaced with current ones before this section goes live.
