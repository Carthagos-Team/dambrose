import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

const cards = [
	{
		image: null, // placeholder gradient
		title: 'One team, full accountability',
		description:
			'Care remains under the guidance of a dedicated health team who knows your history, context, and needs, ensuring decisions are informed and consistent.',
	},
	{
		image: '/alma/sec05/image-1.webp',
		title: 'Presence during illness and uncertainty',
		description:
			'From minor concerns to complex conditions, care stays close, offering reassurance, clarity, and medical judgment when it matters most.',
	},
	{
		image: null,
		title: 'Continuity across life stages',
		description:
			'As health changes over time, care adapts without disruption, allowing medical guidance to evolve alongside the patient rather than restart at every visit.',
	},
	{
		image: '/alma/sec05/image-2.webp',
		title: 'Experienced judgment you can rely on',
		description:
			'Care is led by physicians with broad clinical experience across settings, allowing decisions to be made with perspective, confidence, and medical depth.',
	},
] as const

const PLACEHOLDER_GRADIENT = 'linear-gradient(180deg, #808D95 10%, #B4A389 50%, #DEDBBC 100%)'

export function ContinuousCareAdvantages() {
	return (
		<section
			className="w-full py-24 md:py-28"
			style={{
				background: 'linear-gradient(180deg, #DEDBBC 0%, #B4A389 50%, #808D95 90%)',
			}}
		>
			<Container>
				<BlurReveal>
					<h2 className="font-display text-4xl md:text-6xl text-ecru-white leading-[1.05] text-center max-w-2xl mx-auto">
						The advantages of continuous care.
					</h2>
				</BlurReveal>

				<div className="mt-16 md:mt-22 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{cards.map((c, i) => (
						<BlurReveal key={c.title} delay={0.1 * (i + 1)}>
							<article className="flex flex-col p-4 h-full" style={{ backgroundColor: '#FFFFE4' }}>
								<RevealImage
									delay={0.15 * (i + 1)}
									className="relative aspect-square w-full overflow-hidden"
								>
									{c.image ? (
										<Image src={c.image} alt="" fill className="object-cover" />
									) : (
										<div
											className="absolute inset-0"
											style={{ background: PLACEHOLDER_GRADIENT }}
										/>
									)}
								</RevealImage>

								<h3 className="mt-6 font-display text-xl md:text-[1.375em] italic text-rangoon-green leading-[1.15]">
									{c.title}
								</h3>

								<p className="mt-auto pt-12 font-body text-xs uppercase leading-relaxed tracking-tight text-rangoon-green">
									{c.description}
								</p>
							</article>
						</BlurReveal>
					))}
				</div>
			</Container>
		</section>
	)
}
