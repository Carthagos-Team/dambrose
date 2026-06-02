import { FAQS } from '@/lib/faqs'
import { absoluteUrl, programs, siteConfig } from '@/lib/site'

const PRACTICE_ID = absoluteUrl('/#practice')
const WEBSITE_ID = absoluteUrl('/#website')
const PHYSICIAN_ID = absoluteUrl('/about-dr-michael#physician')

const postalAddress = {
	'@type': 'PostalAddress',
	streetAddress: siteConfig.address.streetAddress,
	addressLocality: siteConfig.address.addressLocality,
	addressRegion: siteConfig.address.addressRegion,
	postalCode: siteConfig.address.postalCode,
	addressCountry: siteConfig.address.addressCountry,
}

/** The physician behind the practice — also referenced as the practice founder. */
export const physicianSchema = {
	'@context': 'https://schema.org',
	'@type': 'Physician',
	'@id': PHYSICIAN_ID,
	name: siteConfig.founder.name,
	jobTitle: siteConfig.founder.jobTitle,
	url: absoluteUrl('/about-dr-michael'),
	image: absoluteUrl('/opengraph-image'),
	description:
		'Dr. Michael J. D’Ambrose is a board-certified family physician and founder of DAMBROSE, with experience spanning outpatient care, hospital medicine, emergency medicine, and obstetrics. His practice is built on lifelong, relationship-based medicine.',
	telephone: siteConfig.telephoneHref,
	email: siteConfig.email,
	address: postalAddress,
	medicalSpecialty: siteConfig.founder.specialties,
	worksFor: { '@id': PRACTICE_ID },
	memberOf: siteConfig.founder.credentials.map((name) => ({
		'@type': 'MedicalOrganization',
		name,
	})),
}

/** The DAMBROSE practice as a local medical business. */
export const practiceSchema = {
	'@context': 'https://schema.org',
	'@type': ['MedicalBusiness', 'MedicalClinic'],
	'@id': PRACTICE_ID,
	name: siteConfig.name,
	alternateName: `${siteConfig.name} — ${siteConfig.tagline}`,
	url: siteConfig.url,
	logo: absoluteUrl('/dambrose.svg'),
	image: absoluteUrl('/opengraph-image'),
	description: siteConfig.description,
	telephone: siteConfig.telephoneHref,
	email: siteConfig.email,
	priceRange: '$$$',
	address: postalAddress,
	geo: {
		'@type': 'GeoCoordinates',
		latitude: siteConfig.geo.latitude,
		longitude: siteConfig.geo.longitude,
	},
	areaServed: { '@type': 'City', name: 'Orlando' },
	medicalSpecialty: ['PrimaryCare', 'InternalMedicine'],
	knowsAbout: [
		'Preventive medicine',
		'Longevity medicine',
		'Primary care',
		'Internal medicine',
		'Care coordination',
		'Membership medicine',
	],
	founder: { '@id': PHYSICIAN_ID },
	makesOffer: programs.map((program) => ({
		'@type': 'Offer',
		itemOffered: {
			'@type': 'MedicalProcedure',
			name: program.name,
			description: program.summary,
			url: absoluteUrl(program.path),
		},
	})),
}

/** Site-level WebSite entity, linking pages back to the practice. */
export const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	'@id': WEBSITE_ID,
	name: siteConfig.name,
	url: siteConfig.url,
	inLanguage: 'en-US',
	publisher: { '@id': PRACTICE_ID },
}

/** FAQPage built from the same FAQ source rendered on the contact page. */
export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'@id': absoluteUrl('/contact#faq'),
	mainEntity: FAQS.map((faq) => ({
		'@type': 'Question',
		name: faq.q,
		acceptedAnswer: {
			'@type': 'Answer',
			text: faq.a,
		},
	})),
}

/** Breadcrumb trail: Home › <page>. */
export function breadcrumbSchema(name: string, path: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: siteConfig.url,
			},
			{
				'@type': 'ListItem',
				position: 2,
				name,
				item: absoluteUrl(path),
			},
		],
	}
}
