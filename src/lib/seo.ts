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
	/**
	 * Public asset path for a page-specific OG/Twitter image (e.g. `/Open-graph/Alma-page.jpg`).
	 * Omit to inherit the site-wide image from `src/app/opengraph-image.jpg`.
	 */
	ogImage?: string
	/** Accessible label for the OG image; defaults to the OG title. */
	ogImageAlt?: string
}

/**
 * Build complete, SEO-optimized metadata for a route: canonical URL,
 * keyword set, OpenGraph and Twitter cards. Pass `ogImage` for a page-specific
 * share image; otherwise the site-wide image from `src/app/opengraph-image.jpg` applies.
 */
export function pageMetadata({
	title,
	absoluteTitle = false,
	description,
	path,
	keywords = [],
	type = 'website',
	ogImage,
	ogImageAlt,
}: PageMetadataInput): Metadata {
	const ogTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`
	const url = absoluteUrl(path)
	const imageAlt = ogImageAlt ?? ogTitle
	const shareImages = ogImage ? [{ url: absoluteUrl(ogImage), alt: imageAlt }] : undefined

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
			...(shareImages && { images: shareImages }),
		},
		twitter: {
			card: 'summary_large_image',
			title: ogTitle,
			description,
			...(shareImages && { images: shareImages.map((image) => image.url) }),
		},
	}
}
