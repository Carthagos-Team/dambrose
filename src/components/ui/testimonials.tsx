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
		<section className="relative w-full overflow-hidden py-20 md:py-24">
			<Image
				src="/shared/fullpage-section-bg.webp"
				alt=""
				fill
				className="object-cover -z-10"
				aria-hidden="true"
			/>
			<div className="absolute inset-0 -z-10 bg-black/20" aria-hidden="true" />

			<Container>
				<div className="flex flex-col items-center gap-12">
					<BlurReveal className="w-full">
						<h2 className="font-display text-4xl md:text-[3.375em] text-half-and-half text-center uppercase leading-tight tracking-wide">
							Trusted by those who expect more from medicine.
						</h2>
					</BlurReveal>

					<div className="flex w-full flex-col gap-4">
						{QUOTES.map((q, i) => (
							<BlurReveal key={q.author} delay={i * 0.1} className="w-full">
								<figure className="flex flex-col items-center gap-10 md:gap-16 text-center bg-white-rock/90 rounded-lg overflow-hidden px-6 py-10 md:px-16 md:py-12">
									<figcaption className="font-body text-sm uppercase tracking-wider text-zeus">
										<span className="font-semibold">{q.author}, </span>
										<span className="font-extralight">{q.location}</span>
									</figcaption>
									<Image
										src="/marks/lifelong-medicine-frame.svg"
										alt="Lifelong Medicine"
										width={260}
										height={81}
										className="h-16 md:h-20 w-auto"
									/>
									<blockquote className="font-ui text-xl md:text-2xl text-zeus/80 leading-snug tracking-wider text-pretty">
										{q.quote}
									</blockquote>
								</figure>
							</BlurReveal>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
