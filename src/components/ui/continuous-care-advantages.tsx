import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

const cards = [
	{
		image: null, // placeholder gradient
		title: 'One team, full accountability',
		description:
			'Care remains under the guidance of a dedicated health team who knows your history, context, and needs. Ensuring decisions are informed and consistent.',
	},
	{
		image: '/alma/sec05/image-presence.webp',
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
			'Care is led by physicians with broad clinical expertise, allowing decisions to be made with perspective, confidence, and medical depth.',
	},
] as const

const PLACEHOLDER_GRADIENT = 'linear-gradient(0deg, #808D95 10%, #B4A389 50%, #DEDBBC 100%)'

export function ContinuousCareAdvantages() {
	return (
		<section
			className="w-full py-16 md:py-[4.35rem]"
			style={{
				background: 'linear-gradient(0deg, #DEDBBC 0%, #B4A389 50%, #808D95 90%)',
			}}
		>
			<Container>
				<BlurReveal>
					<h2 className="font-futura text-[clamp(2rem,9vw,2.5rem)] md:text-5xl uppercase text-half-and-half leading-none tracking-wide text-left md:text-center max-w-[33.6875rem] mx-auto">
						The advantages of continuous care.
					</h2>
				</BlurReveal>

				<div className="mt-16 md:mt-[5.65rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.2rem]">
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

								<h3 className="mt-6 font-futura text-[1.1rem] uppercase text-[#282119] tracking-wider leading-[1.3]">
									{c.title}
								</h3>

								<p className="mt-[13.5rem] font-body text-xs uppercase leading-relaxed tracking-tight text-[#282119] opacity-80">
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
