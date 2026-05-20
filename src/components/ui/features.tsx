import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

const ITEMS = [
	{
		image: '/features/anthurium.png',
		alt: 'Anthurium flowers',
		imageHeight: 'h-80',
		title: 'Exclusive attention',
		body: 'Care is offered within a private, members-only structure, intentionally limited so the physician can dedicate the necessary time to each patient.',
		delay: 0,
	},
	{
		image: '/features/moth.png',
		alt: 'Moth resting on a bottle',
		imageHeight: 'h-40',
		title: 'Coordinated care',
		body: 'Your doctor never hands you off, personally overseeing everything: diagnosis, specialist appointments, exams, hospital visits, and follow-up.',
		delay: 0.1,
	},
	{
		image: '/features/kitchen.png',
		alt: 'Man in a sunlit kitchen',
		imageHeight: 'h-120',
		title: 'Discretion and availability',
		body: 'With direct access and flexible scheduling, you can be seen as soon as needed — without waiting rooms, crowds, or crossing paths with other patients.',
		delay: 0.2,
	},
	{
		image: '/features/botanical-stem.png',
		alt: 'Botanical stem against dark background',
		imageHeight: 'h-40',
		title: 'Alignment with personal goals',
		body: 'Medical strategy is shaped around what matters to you, respecting your priorities and values without pressure or unnecessary intervention.',
		delay: 0.3,
	},
]

export function Features() {
	return (
		<section className="w-full bg-ecru-white py-16 md:py-24 border-t border-black/10">
			<Container className="flex flex-col gap-20">
				{/* ── Heading ──────────────────────────────────────── */}
				<BlurReveal>
					<h2 className="font-display text-4xl md:text-5xl text-olive-haze text-center leading-tight">
						What changes when care <em className="font-display italic">truly knows</em> you.
					</h2>
				</BlurReveal>

				{/* ── Grid ─────────────────────────────────────────── */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-10">
					{ITEMS.map((item) => (
						<div key={item.title} className="flex flex-col gap-5">
							<RevealImage
								className={`relative w-full ${item.imageHeight} overflow-hidden bg-bison-hide`}
								delay={item.delay}
							>
								<Image src={item.image} alt={item.alt} fill className="object-cover" />
							</RevealImage>

							<BlurReveal className="flex flex-col gap-3" delay={item.delay + 0.2}>
								<h3 className="font-display italic text-2xl text-olive-haze leading-snug">
									{item.title}
								</h3>
								<p className="font-body text-xs uppercase leading-relaxed tracking-wide text-gray-olive">
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
