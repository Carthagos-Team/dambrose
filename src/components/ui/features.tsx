import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

const ITEMS = [
	{
		image: '/home/sec04/media-1.webp',
		alt: 'Glass pitcher, dried flowers, and books on a glass table in warm light',
		imageHeight: 'h-94',
		title: 'Exclusive attention',
		body: 'Care is offered within a private, members-only structure, intentionally limited so the physician can dedicate the necessary time to each patient.',
		delay: 0,
	},
	{
		image: '/home/sec04/media-2.webp',
		alt: 'White magnolia blossom against a terracotta wall',
		imageHeight: 'h-47',
		title: 'Coordinated care',
		body: 'Your doctor never hands you off, personally overseeing everything: diagnosis, specialist appointments, exams, hospital visits, and\u00A0follow-up.',
		delay: 0.1,
	},
	{
		image: '/home/sec04/media-3.webp',
		alt: 'Quiet rolling hills with a small pond at dusk',
		imageHeight: 'h-94',
		title: 'Discretion and availability',
		body: 'With direct access and flexible scheduling, you can be seen as soon as needed — without waiting rooms, crowds, or crossing paths with other patients.',
		delay: 0.2,
	},
	{
		image: '/home/sec04/media-4.webp',
		alt: 'Macro close-up of a human iris',
		imageHeight: 'h-47',
		title: 'Alignment with personal goals',
		body: 'Medical strategy is shaped around what matters to you, respecting your priorities and values without pressure or unnecessary intervention.',
		delay: 0.3,
	},
]

export function Features() {
	return (
		<section className="w-full bg-ecru-white py-16 md:py-24">
			<Container className="flex flex-col gap-20">
				{/* ── Heading ──────────────────────────────────────── */}
				<BlurReveal>
					<h2 className="font-display text-4xl md:text-5xl text-corduroy md:text-center leading-tight">
						What changes when care <em className="font-display italic">truly knows</em> you.
					</h2>
				</BlurReveal>

				{/* ── Grid ─────────────────────────────────────────── */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10">
					{ITEMS.map((item) => (
						<div key={item.title} className="flex flex-col gap-10">
							<RevealImage
								className={`relative w-full ${item.imageHeight} overflow-hidden bg-bison-hide`}
								delay={item.delay}
							>
								<Image src={item.image} alt={item.alt} fill className="object-cover" />
							</RevealImage>

							<BlurReveal className="flex flex-col gap-7" delay={item.delay + 0.2}>
								<h3 className="font-display italic text-[2.1em] text-corduroy leading-[1.1] tracking-[0.02em]">
									{item.title}
								</h3>
								<p className="font-body text-[0.78em] uppercase leading-[1.4] tracking-[-0.04em] text-rangitoto/80">
									{item.body}
								</p>
							</BlurReveal>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}
