'use client'

import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 14 — /praeva — Figma node 3779:5961
 * "FOR INDIVIDUALS AND FAMILIES WHO VALUE:" — sticky dot grid, 3 staggered cards.
 * Desktop: left col (Clarity top + Longevity bottom, gap-[37.45rem]),
 *          right col (Presence vertically centred via self-stretch).
 */

const CARDS = [
	{
		key: 'clarity',
		src: '/praeva/sec14-clarity.png',
		alt: 'Serene interior — the clarity of proactive health awareness',
		label: 'Clarity',
		description:
			'Individuals who want their health understood at the level advanced medicine makes possible, beyond routine assessments.',
	},
	{
		key: 'presence',
		src: '/praeva/sec14-presence.jpg',
		alt: 'Athletic person in motion — the presence of full-body wellness',
		label: 'Presence',
		description:
			'People who want their health held by a team that stays attentive enough to recognize patterns and familiar enough to act on them early.',
	},
	{
		key: 'longevity',
		src: '/praeva/sec14-longevity.png',
		alt: 'Man at the ocean horizon — the longevity that comes from foresight',
		label: 'Longevity',
		description:
			'Patients playing the long game — healthy today and committed to staying that way through medicine that treats the future as seriously as the present.',
	},
]

function Card({
	card,
	delay = 0,
}: {
	card: (typeof CARDS)[number]
	delay?: number
}) {
	return (
		<div className="flex flex-col gap-4">
			<RevealImage
				className="relative w-full h-[30.86rem] overflow-hidden"
				delay={delay}
			>
				<Image
					src={card.src}
					alt={card.alt}
					fill
					className="object-cover"
					sizes="(max-width: 1439px) 100vw, 50vw"
				/>
			</RevealImage>

			<BlurReveal delay={delay + 0.1}>
				<div className="flex flex-col gap-2 min-[1440px]:flex-row min-[1440px]:items-center min-[1440px]:gap-[3.19rem]">
					<p className="font-display italic text-[1.34rem] leading-[1.27] text-[#282119] capitalize shrink-0 whitespace-nowrap">
						{card.label}
					</p>
					<p className="font-ui text-[0.72rem] leading-[1.4] tracking-[-0.029em] text-[#282119]/80 min-[1440px]:flex-1 min-[1440px]:min-w-0">
						{card.description}
					</p>
				</div>
			</BlurReveal>
		</div>
	)
}

export function PraevaSec14() {
	return (
		<section className="relative w-full bg-[#ffffe4]">

			<div className="relative">
				<Container className="flex flex-col gap-[5.77rem] py-[5.77rem]">

					{/* Heading — 430 px wide on desktop, natural wrap gives 2 lines */}
					<BlurReveal>
						<h2 className="font-display text-[2.57rem] leading-none tracking-[0.025em] text-[#222009] uppercase w-full min-[1440px]:w-[22.12rem]">
							For individuals and families who value:
						</h2>
					</BlurReveal>

					{/* ── Mobile / tablet (< 1440px) — stacked ── */}
					<div className="flex flex-col gap-12 min-[1440px]:hidden">
						<Card card={CARDS[0]} delay={0.05} />
						<Card card={CARDS[1]} delay={0.1} />
						<Card card={CARDS[2]} delay={0.15} />
					</div>

					{/* ── Desktop (≥ 1440px) — staggered 2-column ── */}
					<div className="hidden min-[1440px]:block relative">

						<div className="flex items-start">

							{/* Left column: Clarity (top) + Longevity (bottom), 728 px gap */}
							<div className="flex-1 min-w-0 flex flex-col gap-[37.45rem]">
								<Card card={CARDS[0]} delay={0.05} />
								<Card card={CARDS[2]} delay={0.2} />
							</div>

							{/* Right column: Presence — self-stretch + centred */}
							<div className="flex-1 min-w-0 self-stretch flex items-center p-[0.41rem]">
								<div className="w-full">
									<Card card={CARDS[1]} delay={0.12} />
								</div>
							</div>

						</div>

						{/* Badge — positioned at top of Clarity card, crossing left→right col boundary */}
						<div className="absolute left-[31.27rem] top-[-3.19rem] z-20">
							<BlurReveal delay={0.18}>
								<Image
									src="/praeva/sec14-badge.svg"
									alt="Care on every level — Praeva badge"
									width={143}
									height={143}
									className="w-[7.36rem] h-[7.36rem]"
								/>
							</BlurReveal>
						</div>

					</div>

				</Container>
			</div>

		</section>
	)
}
