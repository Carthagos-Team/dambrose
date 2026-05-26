import type { Metadata } from 'next'
import { Header } from '@/components/ui/header'
import { MichaelAffiliations } from '@/components/ui/michael-affiliations'
import { MichaelCareer } from '@/components/ui/michael-career'
import { MichaelConnect } from '@/components/ui/michael-connect'
import { MichaelHero } from '@/components/ui/michael-hero'
import { MichaelNarrative } from '@/components/ui/michael-narrative'
import { MichaelQuote } from '@/components/ui/michael-quote'
import { MichaelStory } from '@/components/ui/michael-story'
import { Testimonials } from '@/components/ui/testimonials'

export const metadata: Metadata = {
	title: 'About Dr. Michael — Dambrose',
	description:
		'Dr. Michael J. D’Ambrose — founder of Dambrose. A physician trained across primary care, hospital medicine, emergency care, and obstetrics, devoted to lifelong, relationship-based medicine.',
}

export default function AboutDrMichaelPage() {
	return (
		<>
			<Header />
			<MichaelHero />
			<MichaelStory />
			<MichaelNarrative />
			<MichaelQuote />
			<MichaelAffiliations />
			<MichaelCareer />
			<Testimonials />
			<MichaelConnect />
		</>
	)
}
