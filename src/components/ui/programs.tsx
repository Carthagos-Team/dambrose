import type { ReactNode } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { AlmaProgramLogo, PraevaProgramLogo } from '@/components/ui/program-logos'
import { RevealImage } from '@/components/ui/reveal-image'
import { Button } from './button'

export const PROGRAM_VISUAL_ASPECT = 'aspect-[335/365] lg:aspect-10/9'

export const ALMA_TAGLINE = 'Core medicine without interruption.'
export const PRAEVA_TAGLINE = 'Health guided with foresight.'

const TAGLINE_STYLE = {
	fontFamily: 'var(--font-sohne-breit), sans-serif',
	fontSize: 'clamp(7.5px, 2.5vw, 11.5px)',
	letterSpacing: '0.435em',
	color: '#f2efd0',
	textAlign: 'center' as const,
	textTransform: 'uppercase' as const,
	lineHeight: '1.8',
	padding: '0 8%',
}

/** Figma 4788:683 — white book overlay on outer gradient */
const ALMA_BOOK_CARD = {
	left: '19.5%',
	width: '61%',
	top: '10.75%',
	height: '78.5%',
}

const PRAEVA_BOOK_CARD = {
	left: '19.5%',
	width: '61%',
	top: '10.3%',
	height: '79.2%',
}

/** Figma 4785:665 — Alma program card interior */
const ALMA_CARD_LAYOUT = {
	paddingY: '3.6%',
	paddingX: '4.2%',
	gap: '2.5%',
	logoWidth: '65.5%',
	logoHeight: '11.5%',
	innerWidth: '100%',
}

/** Figma 4785:645 — Praeva program card interior */
const PRAEVA_CARD_LAYOUT = {
	paddingY: '3.6%',
	paddingX: '4.2%',
	gap: '2.9%',
	logoWidth: '55.2%',
	logoHeight: '10.3%',
	innerWidth: '100%',
}

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

export function AlmaVisual({ tagline }: { tagline?: string } = {}) {
	return (
		<div
			className="relative w-full h-full"
			style={{ background: 'linear-gradient(to bottom, #808d95 10%, #b4a389 50%, #dedbbc)' }}
			aria-hidden="true"
		>
			{/* White book card */}
			<div
				className="absolute flex flex-col items-center overflow-hidden bg-[#f2f1e3]"
				style={{
					left: ALMA_BOOK_CARD.left,
					top: ALMA_BOOK_CARD.top,
					width: ALMA_BOOK_CARD.width,
					height: ALMA_BOOK_CARD.height,
					borderRadius: 0,
				}}
			>
				<div
					className="box-border flex h-full w-full flex-col items-center"
					style={{
						paddingTop: ALMA_CARD_LAYOUT.paddingY,
						paddingBottom: ALMA_CARD_LAYOUT.paddingY,
						paddingLeft: ALMA_CARD_LAYOUT.paddingX,
						paddingRight: ALMA_CARD_LAYOUT.paddingX,
						gap: ALMA_CARD_LAYOUT.gap,
					}}
				>
					<AlmaProgramLogo
						className="shrink-0"
						style={{ width: ALMA_CARD_LAYOUT.logoWidth, height: ALMA_CARD_LAYOUT.logoHeight }}
					/>

					{/* Inner gradient card */}
					<div
						className="relative flex min-h-0 flex-1 items-center justify-center"
						style={{
							width: ALMA_CARD_LAYOUT.innerWidth,
							borderRadius: 0,
							background: 'linear-gradient(to top, #808d95 10%, #b4a389 50%, #dedbbc)',
						}}
					>
						{tagline ? (
							<p style={TAGLINE_STYLE}>{tagline}</p>
						) : (
							<svg className="absolute inset-0 w-full h-full" viewBox="0 0 307 382" preserveAspectRatio="xMidYMid meet">
								<text x="153.5" y="205" textAnchor="middle" fontFamily="var(--font-sohne-breit), sans-serif" fontSize="11.5" letterSpacing="5" fill="#f2efd0">BY MICHAEL J.</text>
								<text x="153.5" y="226" textAnchor="middle" fontFamily="var(--font-sohne-breit), sans-serif" fontSize="11.5" letterSpacing="5" fill="#f2efd0">D&apos;AMBROSE</text>
							</svg>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export function PraevaVisual({ tagline }: { tagline?: string } = {}) {
	return (
		<div
			className="relative w-full h-full"
			style={{ background: 'linear-gradient(to top, #272018 3%, #545c63 50%, #dedbbc)' }}
			aria-hidden="true"
		>
			{/* White book card */}
			<div
				className="absolute flex flex-col items-center overflow-hidden bg-[#f2f1e3]"
				style={{
					left: PRAEVA_BOOK_CARD.left,
					top: PRAEVA_BOOK_CARD.top,
					width: PRAEVA_BOOK_CARD.width,
					height: PRAEVA_BOOK_CARD.height,
					borderRadius: 0,
				}}
			>
				<div
					className="box-border flex h-full w-full flex-col items-center"
					style={{
						paddingTop: PRAEVA_CARD_LAYOUT.paddingY,
						paddingBottom: PRAEVA_CARD_LAYOUT.paddingY,
						paddingLeft: PRAEVA_CARD_LAYOUT.paddingX,
						paddingRight: PRAEVA_CARD_LAYOUT.paddingX,
						gap: PRAEVA_CARD_LAYOUT.gap,
					}}
				>
					<PraevaProgramLogo
						className="shrink-0"
						style={{ width: PRAEVA_CARD_LAYOUT.logoWidth, height: PRAEVA_CARD_LAYOUT.logoHeight }}
					/>

					{/* Inner gradient card */}
					<div
						className="relative flex min-h-0 flex-1 items-center justify-center"
						style={{
							width: PRAEVA_CARD_LAYOUT.innerWidth,
							borderRadius: 0,
							background: 'linear-gradient(to bottom, #272018 3%, #545c63 50%, #dedbbc)',
						}}
					>
						{tagline ? (
							<p style={TAGLINE_STYLE}>{tagline}</p>
						) : (
							<svg className="absolute inset-0 w-full h-full" viewBox="0 0 307 382" preserveAspectRatio="xMidYMid meet">
								<text x="153.5" y="205" textAnchor="middle" fontFamily="var(--font-sohne-breit), sans-serif" fontSize="11.5" letterSpacing="5" fill="#f2efd0">BY MICHAEL J.</text>
								<text x="153.5" y="226" textAnchor="middle" fontFamily="var(--font-sohne-breit), sans-serif" fontSize="11.5" letterSpacing="5" fill="#f2efd0">D&apos;AMBROSE</text>
							</svg>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

const CARDS: ProgramCard[] = [
	{
		tag: "ALMA by Dr. D'Ambrose",
		description:
			'A primary care focused on disease prevention, diagnosis, treatment, urgent care, and ongoing health management.',
		ctaLabel: 'EXPLORE ALMA',
		ctaHref: '/alma',
		ctaBg: 'khaki',
		imageAlt: "ALMA by Dr. D'Ambrose — primary care program",
		imageComponent: <AlmaVisual tagline={ALMA_TAGLINE} />,
	},
	{
		tag: "PRAEVA by Dr. D'Ambrose",
		description:
			'An exceptional longevity-focused program designed to anticipate risk, improve wellness, and preserve vitality.',
		ctaLabel: 'EXPLORE PRAEVA',
		ctaHref: '/praeva',
		ctaBg: 'teal',
		imageAlt: 'PRAEVA by Dr. D\'Ambrose — longevity program',
		imageComponent: <PraevaVisual tagline={PRAEVA_TAGLINE} />,
	},
]

export function Programs() {
	return (
		<section className="w-full bg-ecru-white py-16 md:py-28">
			<Container>
				{/* ── Header ───────────────────────────────────────────── */}
				<BlurReveal className="flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-4 md:items-start">
					<p className="md:col-span-3 font-body text-xs text-olive-haze uppercase tracking-wide">
						Our programs
					</p>
					<div className="md:col-span-6 flex flex-col gap-8">
						<h2 className="font-display text-3xl md:text-5xl text-olive-haze leading-tight">
							Access prevention, treatment, and renewal in one continuous path.
						</h2>
						<p className="font-body text-sm text-rangitoto/80 tracking-tight">
							DAMBROSE offers a physician-led approach shaped around individual health goals, from
							prevention to renewal.
						</p>
					</div>
				</BlurReveal>

				{/* ── Cards ────────────────────────────────────────────── */}
				<div className="mt-16 md:mt-28 flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-2">
					{CARDS.map((card) => (
						<div key={card.tag} className="flex flex-col">
							{/* Image */}
							<RevealImage className={`w-full ${PROGRAM_VISUAL_ASPECT} overflow-hidden bg-bison-hide`}>
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
								<p className="font-body text-sm text-rangitoto/80 tracking-tight">{card.description}</p>
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
