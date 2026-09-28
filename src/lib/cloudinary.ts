/**
 * Cloudinary delivery helpers.
 *
 * Configured through env vars so no IDs are hard-coded:
 *   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME   e.g. "sconvalves"
 *   NEXT_PUBLIC_CLOUDINARY_HERO_VIDEO   public id, e.g. "hero/scon-hero" (no extension)
 *
 * When either is missing every helper returns null and callers fall back to the
 * static hero image, so the site keeps working without Cloudinary configured.
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const HERO_VIDEO_ID = process.env.NEXT_PUBLIC_CLOUDINARY_HERO_VIDEO

/**
 * Shared transformation for full-bleed background video.
 *
 * `q_auto:eco` over plain `q_auto` cuts the webm from 759KB to 583KB (-23%);
 * the hero's black/30 overlay hides the difference. `ac_none` drops the audio
 * track, which a muted background video never needs. Derived assets are
 * generated once and then served from the CDN, so only bandwidth recurs.
 */
const VIDEO_TRANSFORM = "q_auto:eco,vc_auto,w_1920,c_limit,ac_none"

/** Frame 0 of the video, delivered as an image — used as the <video> poster. */
const POSTER_TRANSFORM = "so_0,f_auto,q_auto,w_1920,c_limit"

function videoUrl(publicId: string, transform: string, extension: string) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${transform}/${publicId}.${extension}`
}

export type CloudinaryVideo = {
  poster: string
  sources: { src: string; type: string }[]
}

/** Returns the hero video sources, or null when Cloudinary is not configured. */
export function getHeroVideo(): CloudinaryVideo | null {
  if (!CLOUD_NAME || !HERO_VIDEO_ID) return null

  return {
    poster: videoUrl(HERO_VIDEO_ID, POSTER_TRANSFORM, "jpg"),
    sources: [
      { src: videoUrl(HERO_VIDEO_ID, VIDEO_TRANSFORM, "webm"), type: "video/webm" },
      { src: videoUrl(HERO_VIDEO_ID, VIDEO_TRANSFORM, "mp4"), type: "video/mp4" },
    ],
  }
}
