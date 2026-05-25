import type { Metadata } from 'next'
import { AboutHero } from '@/components/ui/about-hero'
import { AboutSec8 } from '@/components/ui/about-sec8'
import { AboutSec9 } from '@/components/ui/about-sec9'
import { AboutSec10 } from '@/components/ui/about-sec10'
import { AboutSec11 } from '@/components/ui/about-sec11'
import { AboutSec12 } from '@/components/ui/about-sec12'
import { AboutSec13 } from '@/components/ui/about-sec13'
import { Container } from '@/components/ui/container'
import { Header } from '@/components/ui/header'
import { SectionDividerReveal } from '@/components/ui/section-divider-reveal'

export const metadata: Metadata = {
	title: 'About us — Dambrose',
	description:
		'Learn about Dambrose — continuity, lifelong medicine, and the team behind private physician-led care.',
}

export default function AboutPage() {
	return (
		<>
			<Header />
			<main className="flex-1 w-full bg-bg">
				<AboutHero />
				<section className="w-full bg-ecru-white">
					<Container>
						<SectionDividerReveal />
					</Container>
				</section>
				<AboutSec8 />
				<AboutSec9 />
				<AboutSec10 />
				<AboutSec11 />
				<AboutSec12 />
				<AboutSec13 />
			</main>
		</>
	)
}
