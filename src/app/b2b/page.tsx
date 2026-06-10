import { JsonLd } from '@/components/json-ld'
import { B2bAudience } from '@/components/ui/b2b-audience'
import { B2bCorporateMembership } from '@/components/ui/b2b-corporate-membership'
import { B2bGains } from '@/components/ui/b2b-gains'
import { B2bHero } from '@/components/ui/b2b-hero'
import { B2bIntro } from '@/components/ui/b2b-intro'
import { B2bLedByTeam } from '@/components/ui/b2b-led-by-team'
import { Header } from '@/components/ui/header'
import { SectionDivider } from '@/components/ui/section-divider'
import { pageMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata = pageMetadata({
	title: 'Corporate Membership',
	path: '/b2b',
	description:
		'Executive health for the people your company can’t afford to lose — a private, physician-led program of longevity, prevention, and continuous care.',
	keywords: [
		'corporate membership',
		'executive health',
		'executive medicine',
		'peak performance',
		'longevity',
		'physician-led care',
		'senior executive teams',
		'employee health benefit',
	],
})

export default function B2bPage() {
	return (
		<>
			<JsonLd data={breadcrumbSchema('Corporate Membership', '/b2b')} />
			<Header />
			<main className="flex-1 w-full">
				<B2bHero />
				<SectionDivider />
				<B2bIntro />
				<SectionDivider />
				<B2bGains />
				<SectionDivider />
				<B2bAudience />
				<B2bCorporateMembership />
				<SectionDivider />
				<B2bLedByTeam />
			</main>
		</>
	)
}
