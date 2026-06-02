import { JsonLd } from '@/components/json-ld'
import { Container } from '@/components/ui/container'
import { PraevaHero } from '@/components/ui/praeva-hero'
import { PraevaSec12 } from '@/components/ui/praeva-sec12'
import { PraevaSec13 } from '@/components/ui/praeva-sec13'
import { PraevaSec14 } from '@/components/ui/praeva-sec14'
import { PraevaSec15 } from '@/components/ui/praeva-sec15'
import { PraevaSec16 } from '@/components/ui/praeva-sec16'
import { PraevaSec17 } from '@/components/ui/praeva-sec17'
import { PraevaSec18 } from '@/components/ui/praeva-sec18'
import { SectionDividerReveal } from '@/components/ui/section-divider-reveal'
import { pageMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata = pageMetadata({
	title: 'Praeva',
	path: '/praeva',
	description:
		'Praeva™ by Dr. Michael J. D’Ambrose — a longevity-focused program centered on prevention, risk assessment, and long-term vitality. The performance-minded extension of your DAMBROSE core care.',
	keywords: [
		'Praeva',
		'longevity program',
		'preventive medicine',
		'risk assessment',
		'risk reduction',
		'healthspan',
		'performance medicine',
		'proactive health',
		'vitality',
	],
})

export default function PraevaPage() {
	return (
		<main className="flex-1 w-full bg-bg">
			<JsonLd data={breadcrumbSchema('Praeva', '/praeva')} />

			<PraevaHero />

			<section className="w-full bg-ecru-white">
				<Container>
					<SectionDividerReveal />
				</Container>
			</section>

			<PraevaSec12 />
			<PraevaSec13 />
			<PraevaSec14 />
			<PraevaSec15 />
			<PraevaSec16 />
			<PraevaSec17 />
			<PraevaSec18 />
		</main>
	)
}
