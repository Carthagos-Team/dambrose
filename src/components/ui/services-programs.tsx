import type { ReactNode } from 'react'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'
import { AlmaVisual, PraevaVisual, ALMA_TAGLINE, PRAEVA_TAGLINE, PROGRAM_VISUAL_ASPECT } from './programs'

type ProgramCard = {
	tag: string
	description: string
	ctaLabel: string
	ctaHref: string
	ctaBg: 'khaki' | 'teal'
	imageComponent: ReactNode
}

const CARDS: ProgramCard[] = [
	{
		tag: "ALMA by Dr. D'Ambrose",
		description:
			'ALMA is a core medical program, providing primary care, diagnosis, treatment, urgent care, and ongoing clinical oversight.',
		ctaLabel: 'EXPLORE ALMA',
		ctaHref: '/alma',
		ctaBg: 'khaki',
		imageComponent: <AlmaVisual tagline={ALMA_TAGLINE} />,
	},
	{
		tag: "PRAEVA by Dr. D'Ambrose",
		description:
			'PRAEVA is a longevity-focused program centered on risk assessment, prevention, and performance, supporting long-term wellness.',
		ctaLabel: 'EXPLORE PRAEVA',
		ctaHref: '/praeva',
		ctaBg: 'teal',
		imageComponent: <PraevaVisual tagline={PRAEVA_TAGLINE} />,
	},
]

export function ServicesPrograms() {
	return (
		<section className="w-full bg-ecru-white py-16 md:py-28">
			<Container>
				<div className="flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:gap-2">
					{CARDS.map((card, i) => (
						<BlurReveal key={card.tag} delay={i * 0.1} className="flex flex-col">
							<RevealImage className={`w-full ${PROGRAM_VISUAL_ASPECT} overflow-hidden bg-bison-hide`}>
								{card.imageComponent}
							</RevealImage>

							<div className="mt-6 md:mt-8 flex flex-col gap-4 md:gap-6">
								<span className="font-body text-xs text-olive-haze/60 uppercase tracking-wide">
									{card.tag}
								</span>
								<p className="font-body text-sm text-rangitoto/80 uppercase leading-relaxed" style={{ letterSpacing: '-0.04em' }}>
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
