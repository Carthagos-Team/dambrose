import { JsonLd } from '@/components/json-ld'
import { AudienceCallout } from '@/components/ui/audience-callout'
import { ContinuousCareAdvantages } from '@/components/ui/continuous-care-advantages'
import { CoreMedicine } from '@/components/ui/core-medicine'
import { EverythingYourMembership } from '@/components/ui/everything-your-membership'
import { Header } from '@/components/ui/header'
import { HeroAlma } from '@/components/ui/hero-alma'
import { HowItWorks } from '@/components/ui/how-it-works'
import { WhatAlmaCovers } from '@/components/ui/what-alma-covers'
import { pageMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata = pageMetadata({
	title: 'Alma',
	path: '/alma',
	description:
		'Alma — core primary care and internal medicine for diagnosis, treatment, and ongoing clinical care: the continuous-care backbone of DAMBROSE membership.',
	keywords: [
		'Alma',
		'core primary care',
		'internal medicine',
		'continuous care',
		'diagnosis and treatment',
		'ongoing clinical care',
		'membership core',
	],
})

export default function AlmaPage() {
	return (
		<>
			<JsonLd data={breadcrumbSchema('Alma', '/alma')} />
			<div className="bg-[linear-gradient(180deg,#808D95_10%,#B4A389_50%,#DEDBBC_100%)]">
				<Header variant="contact" />
				<HeroAlma />
			</div>
			<main className="flex-1 w-full">
				<CoreMedicine />
				<WhatAlmaCovers />
				<AudienceCallout />
				<HowItWorks />
				<ContinuousCareAdvantages />
				<EverythingYourMembership />
			</main>
		</>
	)
}
