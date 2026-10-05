/**
 * Cloudinary delivery helpers.
 *
 * Only the cloud name is environment-specific:
 *   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME   e.g. "opplcnfr"
 *
 * Public IDs are content references rather than secrets or per-environment
 * settings, so they live here beside the delivery options. When the cloud name
 * is unset every helper returns null and callers fall back to their static
 * image, so the site keeps working without Cloudinary configured.
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

/**
 * Uploaded videos, keyed by where they appear.
 *
 * `id` is the public ID from the asset URL — the part after
 * /upload/v<version>/ and before the extension. `width` caps delivery: the
 * hero is full-bleed, while the section clips sit in a half-width column and
 * do not need 1920.
 */
const VIDEOS = {
  hero: { id: "Header", width: 1920 },
  foundry: { id: "Foundry", width: 1024 },
  machining: { id: "CNC_Machining", width: 1024 },
} as const

export type VideoName = keyof typeof VIDEOS

/**
 * `q_auto:eco` saves roughly a quarter of the bytes against plain `q_auto` and
 * the difference is invisible under the hero overlay or at section size.
 * `ac_none` drops the audio track, which a muted background video never needs.
 */
const videoTransform = (width: number) =>
  `q_auto:eco,vc_auto,w_${width},c_limit,ac_none`

/** Frame 0 of the video, delivered as an image — used as the <video> poster. */
const posterTransform = (width: number) =>
  `so_0,f_auto,q_auto,w_${width},c_limit`

function deliveryUrl(publicId: string, transform: string, extension: string) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${transform}/${publicId}.${extension}`
}

export type CloudinaryVideoSources = {
  poster: string
  sources: { src: string; type: string }[]
}

/** Returns delivery URLs for a video, or null when Cloudinary is unconfigured. */
export function getVideo(name: VideoName): CloudinaryVideoSources | null {
  if (!CLOUD_NAME) return null

  const { id, width } = VIDEOS[name]

  return {
    poster: deliveryUrl(id, posterTransform(width), "jpg"),
    sources: [
      {
        src: deliveryUrl(id, videoTransform(width), "webm"),
        type: "video/webm",
      },
      { src: deliveryUrl(id, videoTransform(width), "mp4"), type: "video/mp4" },
    ],
  }
}
