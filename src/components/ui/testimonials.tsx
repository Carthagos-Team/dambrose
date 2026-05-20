import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'

const QUOTES = [
	{
		author: 'Mark Bonefield',
		location: 'Bone Valley, TX',
		quote:
			'I have been a patient of Dr. D’Ambrose for several years, and I couldn’t be more grateful for the care I receive. Dr. D’Ambrose and Elaina always take the time to thoroughly understand my health concerns and work closely with specialists to manage my care. The level of attention and compassion here is unmatched, and I always feel confident that my health is in the best hands.',
	},
	{
		author: 'Lillian Smith',
		location: 'Bone Valley, TX',
		quote:
			'The transition into a more attentive practice has changed how I think about medicine. Visits feel calm and unhurried, follow-ups are personal, and every recommendation is shaped around the life I actually live. There is a steadiness and care here I never knew was possible.',
	},
]

export function Testimonials() {
	return (
		<section className="relative w-full py-20 md:py-32 border-t border-black/10 overflow-hidden">
			<Image
				src="/features/landscape.png"
				alt=""
				fill
				className="object-cover -z-10"
				aria-hidden="true"
			/>
			<div className="absolute inset-0 -z-10 bg-rangoon-green/60" aria-hidden="true" />

			<Container>
				<BlurReveal>
					<h2 className="font-display text-4xl md:text-[3.375rem] text-banana-mania text-center uppercase leading-tight max-w-72 mx-auto">
						Trusted by those who expect more from medicine.
					</h2>
				</BlurReveal>

				<div className="mt-12 md:mt-20 flex flex-col gap-8">
					{QUOTES.map((q, i) => (
						<BlurReveal key={q.author} delay={i * 0.1}>
							<div className="bg-banana-mania/95 px-8 py-12 md:px-20 md:py-16 flex flex-col gap-10">
								<div className="font-body text-xs text-rangoon-green uppercase tracking-wide">
									{q.author}, {q.location}
								</div>
								<p className="font-display text-2xl md:text-[1.625rem] text-rangoon-green leading-relaxed">
									{q.quote}
								</p>
							</div>
						</BlurReveal>
					))}
				</div>
			</Container>
		</section>
	)
}
