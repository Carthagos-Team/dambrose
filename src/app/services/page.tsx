import type { Metadata } from 'next'
import { DambroseDifference } from '@/components/ui/dambrose-difference'
import { Header } from '@/components/ui/header'
import { MedicalFramework } from '@/components/ui/medical-framework'
import { ServicesHero } from '@/components/ui/services-hero'
import { ServicesPrograms } from '@/components/ui/services-programs'
import { Testimonials } from '@/components/ui/testimonials'
import { WhoWeServe } from '@/components/ui/who-we-serve'

export const metadata: Metadata = {
	title: 'Services — Dambrose',
	description:
		'Care, fully supported. Discover a complete medical framework built on a lifelong relationship between you and your physician.',
}

export default function ServicesPage() {
	return (
		<>
			<Header />
			<ServicesHero />
			<ServicesPrograms />
			<MedicalFramework />
			<DambroseDifference />
			<WhoWeServe />
			<Testimonials />
		</>
	)
}
