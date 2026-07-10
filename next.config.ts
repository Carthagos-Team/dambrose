import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		/** Serve raster images as WebP when the browser supports it (via `/_next/image`). */
		formats: ['image/webp'],
		/**
		 * Required in Next.js 16+ — only listed quality values are allowed on `<Image>`.
		 * 80: default / body images · 90: editorial · 95: full-bleed heroes
		 */
		qualities: [80, 90, 95],
	},
}

export default nextConfig
