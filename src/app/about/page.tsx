import { JsonLd } from '@/components/json-ld'
import { AboutHero } from '@/components/ui/about-hero'
import { AboutSec8 } from '@/components/ui/about-sec8'
import { AboutSec9 } from '@/components/ui/about-sec9'
import { AboutSec10 } from '@/components/ui/about-sec10'
import { AboutSec11 } from '@/components/ui/about-sec11'
import { AboutSec12 } from '@/components/ui/about-sec12'
import { AboutSec13 } from '@/components/ui/about-sec13'
import { Header } from '@/components/ui/header'
import { SectionDivider } from '@/components/ui/section-divider'
import { pageMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata = pageMetadata({
	title: 'About us',
	path: '/about',
	description:
		'DAMBROSE is a private, physician-led practice that evolves with you — continuity, lifelong medicine, and the team behind your care at every stage.',
	keywords: [
		'about Dambrose',
		'private practice',
		'lifelong medicine',
		'continuity of care',
		'personal care',
		'physician-led care',
	],
})

export default function AboutPage() {
	return (
		<>
			<JsonLd data={breadcrumbSchema('About us', '/about')} />
			<Header />
			<main className="flex-1 w-full bg-bg">
				<AboutHero />
				<SectionDivider />
				<AboutSec8 />
				<SectionDivider />
				<AboutSec9 />
				<SectionDivider />
				<AboutSec10 />
				<SectionDivider />
				<AboutSec11 />
				<SectionDivider />
				<AboutSec12 />
				<SectionDivider />
				<AboutSec13 />
			</main>
		</>
	)
}
