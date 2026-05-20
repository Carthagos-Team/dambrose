import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'
import { Button } from './button'

type ProgramCard = {
	tag: string
	description: string
	ctaLabel: string
	ctaHref: string
	ctaBg: 'opal' | 'khaki' | 'teal' | 'dark' | 'outline'
	image?: StaticImageData | string
	imageAlt?: string
}

const CARDS: ProgramCard[] = [
	{
		tag: "ALMA by Dr. D'Ambrose",
		description:
			'A primary care program focused on diagnosis, treatment, urgent care, and ongoing health management.',
		ctaLabel: 'EXPLORE ALMA',
		ctaHref: '/alma',
		ctaBg: 'khaki',
		image: '/programs/alma.png',
		imageAlt: 'ALMA program',
	},
	{
		tag: "PRAEVA by Dr. D'Ambrose",
		description:
			'A longevity-focused program designed to anticipate risk, improve wellness, and preserve vitality.',
		ctaLabel: 'EXPLORE PRAEVA',
		ctaHref: '/praeva',
		ctaBg: 'opal',
		image: '/programs/praeva.png',
		imageAlt: 'PRAEVA program',
	},
]

export function Programs() {
	return (
		<section className="w-full bg-ecru-white py-16 md:py-28 border-t border-black/10">
			<Container>
				{/* ── Header ───────────────────────────────────────────── */}
				<BlurReveal className="flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-4 md:items-start">
					<p className="md:col-span-3 font-body text-xs text-olive-haze uppercase tracking-wide">
						PROGRAMS
					</p>
					<div className="md:col-span-6 flex flex-col gap-8">
						<h2 className="font-display text-3xl md:text-5xl text-olive-haze leading-tight">
							Access prevention, treatment, and renewal in one continuous path.
						</h2>
						<p className="font-body text-sm text-gray-olive">
							DAMBROSE offers a physician-led approach shaped around individual health goals, from
							prevention to renewal.
						</p>
					</div>
				</BlurReveal>

				{/* ── Cards ────────────────────────────────────────────── */}
				<div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2">
					{CARDS.map((card) => (
						<div key={card.tag} className="flex flex-col">
							{/* Image */}
							<RevealImage className="w-full aspect-10/9 overflow-hidden bg-bison-hide">
								{card.image && (
									<Image
										src={card.image}
										alt={card.imageAlt ?? ''}
										width={900}
										height={810}
										className="w-full h-full object-cover"
									/>
								)}
							</RevealImage>

							{/* Info */}
							<div className="mt-8 flex flex-col gap-6">
								<span className="font-body text-xs text-olive-haze uppercase tracking-wide">
									{card.tag}
								</span>
								<p className="font-body text-sm text-gray-olive">{card.description}</p>
							</div>

							{/* CTA */}
							<Button variant={card.ctaBg} href={card.ctaHref} className="mt-8 w-fit">
								{card.ctaLabel}
							</Button>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}
