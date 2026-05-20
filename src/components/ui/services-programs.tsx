import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

const CARDS = [
	{
		tag: 'ALMA by Dr. D’Ambrose',
		description:
			'ALMA is a core medical program, providing primary care, diagnosis, treatment, urgent care, and ongoing clinical oversight.',
		ctaLabel: 'EXPLORE ALMA',
		ctaHref: '/alma',
		ctaBg: 'khaki' as const,
		image: '/programs/alma.png',
		imageAlt: 'ALMA program',
	},
	{
		tag: 'PRAEVA by Dr. D’Ambrose',
		description:
			'PRAEVA is a longevity-focused program centered on risk assessment, prevention, and performance, supporting long-term wellness.',
		ctaLabel: 'EXPLORE PRAEVA',
		ctaHref: '/praeva',
		ctaBg: 'teal' as const,
		image: '/programs/praeva.png',
		imageAlt: 'PRAEVA program',
	},
]

export function ServicesPrograms() {
	return (
		<section className="w-full bg-ecru-white py-16 md:py-28 border-t border-black/10">
			<Container>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2">
					{CARDS.map((card, i) => (
						<BlurReveal key={card.tag} delay={i * 0.1} className="flex flex-col">
							<RevealImage className="w-full aspect-10/9 overflow-hidden bg-bison-hide">
								<Image
									src={card.image}
									alt={card.imageAlt}
									width={900}
									height={810}
									className="w-full h-full object-cover"
								/>
							</RevealImage>

							<div className="mt-8 flex flex-col gap-6">
								<span className="font-body text-xs text-olive-haze uppercase tracking-wide">
									{card.tag}
								</span>
								<p className="font-body text-sm text-gray-olive uppercase leading-relaxed tracking-tight">
									{card.description}
								</p>
							</div>

							<Button variant={card.ctaBg} href={card.ctaHref} className="mt-8 w-fit">
								{card.ctaLabel}
							</Button>
						</BlurReveal>
					))}
				</div>
			</Container>
		</section>
	)
}
