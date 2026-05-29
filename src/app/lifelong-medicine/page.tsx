import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Header } from '@/components/ui/header'
import { LifelongMedicineHero } from '@/components/ui/lifelong-medicine-hero'
import { LifelongMedicineSec12 } from '@/components/ui/lifelong-medicine-sec12'
import { LifelongMedicineSec13 } from '@/components/ui/lifelong-medicine-sec13'
import { LifelongMedicineSec14 } from '@/components/ui/lifelong-medicine-sec14'
import { LifelongMedicineSec15 } from '@/components/ui/lifelong-medicine-sec15'
import { LifelongMedicineSec16 } from '@/components/ui/lifelong-medicine-sec16'
import { LifelongMedicineSec17 } from '@/components/ui/lifelong-medicine-sec17'
import { LifelongMedicineSec18 } from '@/components/ui/lifelong-medicine-sec18'
import { SectionDividerReveal } from '@/components/ui/section-divider-reveal'

export const metadata: Metadata = {
	title: 'Lifelong Medicine — Dambrose',
	description:
		'DAMBROSE Lifelong Medicine — care designed to endure, evolve, and remain present through every stage of life.',
}

export default function LifelongMedicinePage() {
	return (
		<>
			<Header />
			<main className="flex-1 w-full bg-bg">
				<LifelongMedicineHero />
				<section className="w-full bg-ecru-white">
					<Container>
						<SectionDividerReveal />
					</Container>
				</section>
				<LifelongMedicineSec12 />
				<LifelongMedicineSec13 />
				<LifelongMedicineSec14 />
				<LifelongMedicineSec15 />
				<LifelongMedicineSec16 />
				<LifelongMedicineSec17 />
				<LifelongMedicineSec18 />
			</main>
		</>
	)
}
