import type { ReactNode, StaticImageData } from 'react'
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
	imageComponent?: ReactNode
}

function AlmaVisual() {
	return (
		<div
			className="relative w-full h-full"
			style={{ background: 'linear-gradient(to bottom, #808d95 10%, #b4a389 50%, #dedbbc)' }}
			aria-hidden="true"
		>
			{/* White book card */}
			<div
				className="absolute bg-[#f2f1e3] overflow-hidden"
				style={{ left: '25%', top: '10.75%', width: '50%', height: '78.5%', borderRadius: '2px' }}
			>
				{/* Alma title */}
				<svg className="absolute inset-x-0 top-0" width="100%" height="20%" viewBox="0 0 336 60" preserveAspectRatio="xMidYMid meet">
					<text
						x="157"
						y="46"
						textAnchor="middle"
						fontFamily="var(--font-display), serif"
						fontStyle="italic"
						fontSize="43"
						letterSpacing="0.32"
						fill="#c8b698"
					>
						Alma
					</text>
					<text
						x="213"
						y="28"
						textAnchor="start"
						fontFamily="'Public Sans', sans-serif"
						fontSize="18"
						fill="#c8b698"
					>
						™
					</text>
				</svg>

				{/* Inner gradient card */}
				<div
					className="absolute"
					style={{
						left: '4.5%',
						top: '16.6%',
						width: '91.4%',
						height: '80.4%',
						borderRadius: '3%',
						background: 'linear-gradient(to top, #808d95 10%, #b4a389 50%, #dedbbc)',
					}}
				>
					{/* BY MICHAEL J. D'AMBROSE */}
					<svg className="absolute inset-0 w-full h-full" viewBox="0 0 307 382" preserveAspectRatio="xMidYMid meet">
						<text
							x="153.5"
							y="205"
							textAnchor="middle"
							fontFamily="var(--font-sohne-breit), sans-serif"
							fontSize="11.5"
							letterSpacing="5"
							fill="#f2efd0"
						>
							BY MICHAEL J.
						</text>
						<text
							x="153.5"
							y="226"
							textAnchor="middle"
							fontFamily="var(--font-sohne-breit), sans-serif"
							fontSize="11.5"
							letterSpacing="5"
							fill="#f2efd0"
						>
							D&apos;AMBROSE
						</text>
					</svg>
				</div>
			</div>
		</div>
	)
}

function PraevaVisual() {
	return (
		<div
			className="relative w-full h-full"
			style={{ background: 'linear-gradient(to top, #272018 3%, #545c63 50%, #dedbbc)' }}
			aria-hidden="true"
		>
			{/* White book card */}
			<div
				className="absolute bg-[#f2f1e3] overflow-hidden"
				style={{ left: '24.9%', top: '10.3%', width: '50.1%', height: '79.2%', borderRadius: '2px' }}
			>
				{/* Praeva title */}
				<svg className="absolute inset-x-0 top-0" width="100%" height="20%" viewBox="0 0 336 60" preserveAspectRatio="xMidYMid meet">
					<text
						x="168"
						y="46"
						textAnchor="middle"
						fontFamily="'Instrument Serif', serif"
						fontStyle="italic"
						fontSize="43"
						letterSpacing="1.3"
						fill="#7c848b"
					>
						Praeva
					</text>
					<text
						x="248"
						y="28"
						textAnchor="start"
						fontFamily="'Public Sans', sans-serif"
						fontSize="18"
						fill="#7c848b"
					>
						™
					</text>
				</svg>

				{/* Inner gradient card */}
				<div
					className="absolute"
					style={{
						left: '4.5%',
						top: '16.6%',
						width: '91.4%',
						height: '80.4%',
						borderRadius: '3%',
						background: 'linear-gradient(to bottom, #272018 3%, #545c63 50%, #dedbbc)',
					}}
				>
					{/* BY MICHAEL J. D'AMBROSE */}
					<svg className="absolute inset-0 w-full h-full" viewBox="0 0 307 382" preserveAspectRatio="xMidYMid meet">
						<text
							x="153.5"
							y="205"
							textAnchor="middle"
							fontFamily="var(--font-sohne-breit), sans-serif"
							fontSize="11.5"
							letterSpacing="5"
							fill="#f2efd0"
						>
							BY MICHAEL J.
						</text>
						<text
							x="153.5"
							y="226"
							textAnchor="middle"
							fontFamily="var(--font-sohne-breit), sans-serif"
							fontSize="11.5"
							letterSpacing="5"
							fill="#f2efd0"
						>
							D&apos;AMBROSE
						</text>
					</svg>
				</div>
			</div>
		</div>
	)
}

const CARDS: ProgramCard[] = [
	{
		tag: "ALMA by Dr. D'Ambrose",
		description:
			'A primary care program focused on diagnosis, treatment, urgent care, and ongoing health management.',
		ctaLabel: 'EXPLORE ALMA',
		ctaHref: '/alma',
		ctaBg: 'khaki',
		imageAlt: "ALMA by Dr. D'Ambrose — primary care program",
		imageComponent: <AlmaVisual />,
	},
	{
		tag: "PRAEVA by Dr. D'Ambrose",
		description:
			'A longevity-focused program designed to anticipate risk, improve wellness, and preserve vitality.',
		ctaLabel: 'EXPLORE PRAEVA',
		ctaHref: '/praeva',
		ctaBg: 'teal',
		imageAlt: 'PRAEVA by Dr. D\'Ambrose — longevity program',
		imageComponent: <PraevaVisual />,
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
								{card.imageComponent ?? (card.image && (
									<Image
										src={card.image}
										alt={card.imageAlt ?? ''}
										width={900}
										height={810}
										className="w-full h-full object-cover"
									/>
								))}
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
