'use client'

import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 14 — /praeva — Figma node 3779:5961
 * "FOR INDIVIDUALS AND FAMILIES WHO VALUE:" — sticky dot grid, 3 staggered cards.
 * Desktop: left col (Clarity top + Longevity bottom, gap-[37.45em]),
 *          right col (Presence vertically centred via self-stretch).
 */

const CARDS = [
	{
		key: 'clarity',
		src: '/praeva/sec03/card-1.webp',
		alt: 'Serene interior — the clarity of proactive health awareness',
		label: 'Clarity',
		description:
			'Individuals who want their health understood at the level advanced medicine makes possible, beyond routine assessments.',
	},
	{
		key: 'presence',
		src: '/praeva/sec03/card-3-longevity.webp',
		alt: 'Athlete in motion outdoors — the presence of full-body wellness',
		label: 'Presence',
		description:
			'People who want their health held by a team that stays attentive enough to recognize patterns and familiar enough to act on them early.',
	},
	{
		key: 'longevity',
		src: '/praeva/sec03/card-2-presence.webp',
		alt: 'Man smiling outdoors in athletic wear — the longevity that comes from foresight',
		label: 'Longevity',
		description:
			'People who are healthy and want medicine that treats prevention with the same seriousness as illness.',
	},
]

function Card({ card, delay = 0 }: { card: (typeof CARDS)[number]; delay?: number }) {
	return (
		<div className="flex flex-col gap-4">
			<RevealImage className="relative w-full h-[30.86em] overflow-hidden" delay={delay}>
				<Image
					src={card.src}
					alt={card.alt}
					fill
					className="object-cover"
					quality={90}
					sizes="(max-width: 1439px) 100vw, 50vw"
				/>
			</RevealImage>

			<BlurReveal delay={delay + 0.1}>
				<div className="flex flex-col gap-2 min-[1440px]:flex-row min-[1440px]:items-center min-[1440px]:gap-[3.19em]">
					<p className="font-display italic text-[1.34em] leading-[1.27] text-[#282119] capitalize shrink-0 whitespace-nowrap">
						{card.label}
					</p>
					<p className="font-ui text-body-copy leading-[1.4] tracking-[-0.029em] text-[#282119]/80 min-[1440px]:flex-1 min-[1440px]:min-w-0">
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
				<Container className="flex flex-col gap-[5.77em] py-[5.77em]">
					{/* Heading — 430 px wide on desktop, natural wrap gives 2 lines */}
					<BlurReveal>
						<h2 className="font-display text-[2.57em] leading-none tracking-[0.025em] text-[#222009] uppercase w-full min-[1440px]:w-[8.607em]">
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
							<div className="flex-1 min-w-0 flex flex-col gap-[37.45em]">
								<Card card={CARDS[0]} delay={0.05} />
								<Card card={CARDS[2]} delay={0.2} />
							</div>

							{/* Right column: Presence — self-stretch + centred */}
							<div className="flex-1 min-w-0 self-stretch flex items-center p-[0.41em]">
								<div className="w-full">
									<Card card={CARDS[1]} delay={0.12} />
								</div>
							</div>
						</div>

						{/* Badge — positioned at top of Clarity card, crossing left→right col boundary */}
						<div className="absolute left-[31.27em] top-[-3.19em] z-20">
							<BlurReveal delay={0.18}>
								<Image
									src="/praeva/sec14-badge.svg"
									alt="Care on every level — Praeva badge"
									width={143}
									height={143}
									className="w-[7.36em] h-[7.36em]"
								/>
							</BlurReveal>
						</div>
					</div>
				</Container>
			</div>
		</section>
	)
}
