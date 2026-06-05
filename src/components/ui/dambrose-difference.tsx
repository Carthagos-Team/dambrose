import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

const COLUMNS = [
	{
		image: '/services/sec03/media-1.webp',
		alt: 'Senior man with caregiver',
		tall: true,
		title: 'Complete care coordination',
		body: 'Appointments, referrals, exams, and logistics are handled seamlessly, so care feels integrated and convenient.',
	},
	{
		image: '/services/sec03/media-2.webp',
		alt: 'Caregiver supporting patient',
		tall: false,
		title: 'Vetted specialist network',
		body: 'Access to a carefully curated network of trusted specialists, selected through years of professional partnerships.',
	},
	{
		image: '/services/sec03/media-4.webp',
		alt: 'Tranquil landscape',
		tall: true,
		title: 'Goal-aligned medical guidance',
		body: 'Health strategy is built around personal priorities and values, ensuring decisions remain thoughtful and unpressured.',
	},
	{
		image: '/services/sec03/media-3.webp',
		alt: 'Hand examination',
		tall: false,
		title: 'Deliberate physician focus',
		body: 'Membership is limited, allowing time, attention, and clinical presence to remain centered on each individual.',
	},
]

export function DambroseDifference() {
	return (
		<section className="w-full bg-white-rock py-16 md:py-28 border-t border-black/10">
			<Container>
				<BlurReveal>
					<h2 className="font-display text-4xl md:text-5xl text-corduroy text-center leading-tight">
						The DAMBROSE <em className="font-display italic">difference.</em>
					</h2>
				</BlurReveal>

				<div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
					{COLUMNS.map((col, i) => (
						<div key={col.title} className={`flex flex-col gap-6 ${i % 2 === 1 ? 'lg:pt-28' : ''}`}>
							<RevealImage
								className={`relative w-full overflow-hidden bg-bison-hide ${col.tall ? 'aspect-[325/433]' : 'aspect-[325/216]'}`}
								delay={i * 0.08}
							>
								<Image src={col.image} alt={col.alt} fill className="object-cover" />
							</RevealImage>

							<BlurReveal className="flex flex-col gap-4" delay={i * 0.08 + 0.15}>
								<h3 className="font-display italic text-3xl md:text-[2.375em] text-corduroy leading-tight">
									{col.title}
								</h3>
								<p className="font-body text-xs text-rangitoto uppercase leading-relaxed tracking-tight">
									{col.body}
								</p>
							</BlurReveal>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}
