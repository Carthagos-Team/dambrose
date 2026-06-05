import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		/** Serve raster images as WebP when the browser supports it (via `/_next/image`). */
		formats: ['image/webp'],
		/** Required in Next.js 16+ — only listed quality values are allowed on `<Image>`. */
		qualities: [80],
	},
}

export default nextConfig
