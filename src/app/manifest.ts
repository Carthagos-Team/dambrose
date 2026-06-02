import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: `${siteConfig.name} — ${siteConfig.tagline}`,
		short_name: siteConfig.name,
		description: siteConfig.description,
		start_url: '/',
		display: 'standalone',
		background_color: '#f2f1e3',
		theme_color: '#383f39',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	}
}
