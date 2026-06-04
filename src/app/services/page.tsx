import { JsonLd } from '@/components/json-ld'
import { DambroseDifference } from '@/components/ui/dambrose-difference'
import { Header } from '@/components/ui/header'
import { MedicalFramework } from '@/components/ui/medical-framework'
import { ServicesHero } from '@/components/ui/services-hero'
import { ServicesPrograms } from '@/components/ui/services-programs'
import { Testimonials } from '@/components/ui/testimonials'
import { WhoWeServe } from '@/components/ui/who-we-serve'
import { pageMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata = pageMetadata({
	title: 'Services',
	path: '/services',
	description:
		'A complete medical framework built on a lifelong physician relationship — primary care, internal medicine, prevention, and full care coordination.',
	keywords: [
		'medical services',
		'medical framework',
		'comprehensive care',
		'lifelong relationship',
		'care coordination',
		'primary care',
		'internal medicine',
		'longevity program',
	],
})

export default function ServicesPage() {
	return (
		<>
			<JsonLd data={breadcrumbSchema('Services', '/services')} />
			<Header />
			<main className="flex-1 w-full">
				<ServicesHero />
				<ServicesPrograms />
				<MedicalFramework />
				<DambroseDifference />
				<WhoWeServe />
				<Testimonials />
			</main>
		</>
	)
}
