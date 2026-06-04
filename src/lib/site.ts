/**
 * Single source of truth for site-wide SEO, contact, and business facts.
 * Consumed by metadata, structured data (JSON-LD), sitemap, robots and manifest.
 */

export const siteConfig = {
	name: 'DAMBROSE',
	/** Full name with descriptor — used in OG titles and JSON-LD `alternateName`. */
	tagline: 'Lifelong, Physician-Led Private Medical Care',
	url: 'https://dambrose.com',
	locale: 'en_US',
	description:
		'DAMBROSE is a private, membership-based medical practice in Orlando, FL, led by board-certified family physician Dr. Michael J. D’Ambrose. Comprehensive primary care, internal medicine, prevention and longevity, with direct physician access and full coordination of care across every stage of life.',
	telephone: '+1 407-883-0456',
	/** E.164-ish form used in tel: links and JSON-LD. */
	telephoneHref: '+14078830456',
	email: 'michael.dambrose@mjdmd.com',
	address: {
		streetAddress: '200 South Orange Ave, Suite 1475',
		addressLocality: 'Orlando',
		addressRegion: 'FL',
		postalCode: '32801',
		addressCountry: 'US',
	},
	geo: {
		// Downtown Orlando — 200 S Orange Ave (approximate building coordinates).
		latitude: 28.5396,
		longitude: -81.3789,
	},
	founder: {
		name: 'Dr. Michael J. D’Ambrose',
		jobTitle: 'Founder & Physician',
		credentials: [
			'American Board of Family Medicine',
			'American Academy of Family Physicians',
			'Florida Medical Association',
		],
		specialties: [
			'Family Medicine',
			'Primary Care',
			'Internal Medicine',
			'Hospital Medicine',
			'Emergency Medicine',
			'Obstetrics',
		],
	},
	/** Brand-level keywords that apply across the whole site. */
	keywords: [
		'private physician',
		'membership medicine',
		'concierge medicine',
		'lifelong medicine',
		'preventive medicine',
		'longevity medicine',
		'primary care',
		'internal medicine',
		'board-certified family physician',
		'personalized healthcare',
		'private medical practice',
		'care coordination',
		'Dr. Michael J. D’Ambrose',
		'Dambrose',
		'concierge doctor Orlando',
		'Orlando private physician',
	],
} as const

/** Resolve an absolute URL against the canonical site origin. */
export function absoluteUrl(path = '/'): string {
	if (path.startsWith('http')) return path
	const pathname = path.startsWith('/') ? path : `/${path}`
	return new URL(pathname, siteConfig.url).href
}

/** Brand programs, reused in copy, structured data and llms.txt. */
export const programs = [
	{
		name: 'Alma',
		path: '/alma',
		summary:
			'Core primary care and internal medicine for diagnosis, treatment, and ongoing clinical care — the backbone of your DAMBROSE membership.',
	},
	{
		name: 'Praeva',
		path: '/praeva',
		summary:
			'A longevity-focused program centered on prevention, risk assessment, and long-term vitality — the extension of your core care.',
	},
] as const

/** Every indexable route, with crawl priorities for the sitemap. */
export const routes = [
	{ path: '/', priority: 1, changeFrequency: 'monthly' as const },
	{ path: '/membership', priority: 0.9, changeFrequency: 'monthly' as const },
	{ path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
	{ path: '/alma', priority: 0.8, changeFrequency: 'monthly' as const },
	{ path: '/praeva', priority: 0.8, changeFrequency: 'monthly' as const },
	{ path: '/b2b', priority: 0.8, changeFrequency: 'monthly' as const },
	{ path: '/lifelong-medicine', priority: 0.7, changeFrequency: 'yearly' as const },
	{ path: '/about', priority: 0.7, changeFrequency: 'yearly' as const },
	{ path: '/about-dr-michael', priority: 0.7, changeFrequency: 'yearly' as const },
	{ path: '/contact', priority: 0.6, changeFrequency: 'yearly' as const },
] as const
