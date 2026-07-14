import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 13 — /praeva — Figma node 3746:5538
 * "What Praeva Covers" — left column (heading + portrait), right column (4 items + CTA).
 * Fonte proporcional (min-[1200px]) sobrepõe o teto global do root para as colunas
 * fixas em em continuarem escalando até ~2560 (senão o bloco de largura fixa fica
 * alinhado à esquerda e estoura gap à direita ≥1920). 1.25vw = 18px @1440; trava 32px @2560.
 */

const ITEMS = [
	{
		label: 'Evaluation',
		description:
			'Comprehensive baseline assessments using advanced diagnostics to understand your biology, your patterns, and your health from the ground up.',
	},
	{
		label: 'Prevention',
		description:
			'A proactive strategy that leverages state-of-the-art technology to identify and address risks before they become conditions.',
	},
	{
		label: 'Oversight',
		description:
			'Continuous monitoring with check-ins, periodical outreach, and presence woven into every stage of your care.',
	},
	{
		label: 'Wellbeing',
		description:
			'A sustained commitment to vitality and longevity, built on the principle that the best health outcomes come from foresight, not reaction.',
	},
]

export function PraevaSec13() {
	return (
		<section className="w-full bg-[#ffffe4] min-[1200px]:text-[clamp(1rem,1.25vw,2rem)]">
			<Container className="py-16 md:pt-[5.77em] md:pb-[1.65em]">
				<div className="flex flex-col gap-12 md:flex-row md:items-end md:gap-[4.06em]">
					{/* ── Left column: heading + portrait ─────────── */}
					{/* align-items: flex-end → heading right-aligns within the column */}
					<div className="flex flex-col gap-10 md:w-[19.55em] md:gap-[2.47em] md:items-end shrink-0">
						<BlurReveal>
							<h2 className="font-display text-[2em] md:text-[2.57em] leading-none tracking-[0.025em] text-[#222009] uppercase whitespace-nowrap md:whitespace-normal">
								What
								<br className="hidden md:block" />
								<em className="italic"> PRAEVA </em>
								<br className="hidden md:block" />
								covers:
							</h2>
						</BlurReveal>

						<div className="relative w-full h-[11.32em] overflow-hidden">
							<RevealImage className="relative w-full h-full overflow-hidden" delay={0.05}>
								<Image
									src="/praeva/sec13-running.webp"
									alt="Motion-blurred runner in silhouette, mid-stride"
									fill
									className="object-cover object-center"
									sizes="(max-width: 768px) 100vw, 19.55em"
									quality={90}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#1c1a08]/40 to-transparent pointer-events-none" />
							</RevealImage>
						</div>
					</div>

					{/* ── Right column: items + CTA ────────────────── */}
					{/* w-[29.27em] = 569px Figma fixed width (flex-1 below 1200px) */}
					<div className="flex flex-col gap-[2.42em] flex-1 min-w-0 min-[1200px]:flex-none min-[1200px]:w-[29.27em]">
						{/* gap-[3.29em] = 64px Figma gap between items */}
						<div className="flex flex-col gap-[3.29em]">
							{ITEMS.map((item, i) => (
								<BlurReveal key={item.label} delay={i * 0.07}>
									<div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between border-b border-[rgba(40,33,25,0.48)] pb-[2.47em]">
										<p className="font-display italic text-[1.34em] leading-[1.27] text-[#282119] capitalize shrink-0 whitespace-nowrap">
											{item.label}
										</p>
										<p className="font-ui text-body-copy leading-[1.4] tracking-[-0.029em] text-[#282119]/80 md:flex-1 md:min-w-0">
											{item.description}
										</p>
									</div>
								</BlurReveal>
							))}
						</div>

						<BlurReveal delay={0.32}>
							<Button variant="dune" size="sm" className="self-start">
								Inquiry about membership
							</Button>
						</BlurReveal>
					</div>
				</div>
			</Container>
		</section>
	)
}
