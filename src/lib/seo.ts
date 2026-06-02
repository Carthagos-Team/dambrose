import type { Metadata } from 'next'
import { absoluteUrl, siteConfig } from '@/lib/site'

type PageMetadataInput = {
	/** Page-specific title. Combined with the brand via the title template. */
	title: string
	/** Use the title verbatim as the <title> (no "| Dambrose" suffix). */
	absoluteTitle?: boolean
	description: string
	/** Path beginning with "/" — used for the canonical URL and OG url. */
	path: string
	/** Page-specific keywords, merged with the brand-level keyword set. */
	keywords?: readonly string[]
	/** OpenGraph type, defaults to "website". */
	type?: 'website' | 'article' | 'profile'
}

/**
 * Build complete, SEO-optimized metadata for a route: canonical URL,
 * keyword set, OpenGraph and Twitter cards. The site-wide OpenGraph image
 * is supplied automatically by `src/app/opengraph-image.tsx`.
 */
export function pageMetadata({
	title,
	absoluteTitle = false,
	description,
	path,
	keywords = [],
	type = 'website',
}: PageMetadataInput): Metadata {
	const ogTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`
	const url = absoluteUrl(path)

	return {
		title: absoluteTitle ? { absolute: title } : title,
		description,
		keywords: [...keywords, ...siteConfig.keywords],
		alternates: { canonical: path },
		openGraph: {
			type,
			title: ogTitle,
			description,
			url,
			siteName: siteConfig.name,
			locale: siteConfig.locale,
		},
		twitter: {
			card: 'summary_large_image',
			title: ogTitle,
			description,
		},
	}
}
