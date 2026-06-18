import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		/** AVIF first (~40% smaller than WebP for photos); automatic fallback to WebP/JPEG. */
		formats: ['image/avif', 'image/webp'],
		/** Required in Next.js 16+ — only listed quality values are allowed on `<Image>`. */
		qualities: [80],
	},
	async headers() {
		return [
			{
				source: '/(fonts|marks|_next/static)/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
		]
	},
}

export default nextConfig
