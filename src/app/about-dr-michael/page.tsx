import { JsonLd } from '@/components/json-ld'
import { Header } from '@/components/ui/header'
import { MichaelAffiliations } from '@/components/ui/michael-affiliations'
import { MichaelCareer } from '@/components/ui/michael-career'
import { MichaelConnect } from '@/components/ui/michael-connect'
import { MichaelHero } from '@/components/ui/michael-hero'
import { MichaelNarrative } from '@/components/ui/michael-narrative'
import { MichaelQuote } from '@/components/ui/michael-quote'
import { MichaelStory } from '@/components/ui/michael-story'
import { Testimonials } from '@/components/ui/testimonials'
import { pageMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata = pageMetadata({
	title: 'About Dr. Michael',
	path: '/about-dr-michael',
	type: 'profile',
	description:
		'Dr. Michael J. D’Ambrose — founder of DAMBROSE and board-certified family physician devoted to lifelong, relationship-based, physician-led medicine.',
	keywords: [
		'Dr. Michael J. D’Ambrose',
		'board-certified family physician',
		'American Board of Family Medicine',
		'American Academy of Family Physicians',
		'Florida Medical Association',
		'hospital medicine',
		'emergency medicine',
		'obstetrics',
		'founder',
	],
})

export default function AboutDrMichaelPage() {
	return (
		<>
			<JsonLd data={breadcrumbSchema('About Dr. Michael', '/about-dr-michael')} />
			<Header />
			<main className="flex-1 w-full">
				<MichaelHero />
				<MichaelStory />
				<MichaelNarrative />
				<MichaelQuote />
				<MichaelAffiliations />
				<MichaelCareer />
				<Testimonials />
				<MichaelConnect />
			</main>
		</>
	)
}
