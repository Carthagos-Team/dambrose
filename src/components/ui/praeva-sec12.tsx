import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 12 — /praeva — Figma node 3746:5528
 * Editorial photo collage: chairs top-centre, orchid+landscape+text top-right,
 * heading + leaf bottom-left. Desktop uses absolute layout at ≥ 1200 px.
 * Fonte proporcional (min-[1200px]) sobrepõe o teto global do root para a
 * composição em em continuar escalando até ~2560 (senão estoura gap à direita
 * ≥1920, onde o root trava em 24px). 1.25vw = 18px @1440; trava em 32px @2560.
 */
export function PraevaSec12() {
	return (
		<section className="w-full bg-[#ffffe4] min-[1200px]:text-[clamp(1rem,1.25vw,2rem)]">
			{/* ── Mobile / tablet layout (< 1200 px) ─────── */}
			<div className="min-[1200px]:hidden">
				<Container className="py-16 flex flex-col gap-16">
					{/* Chairs — partial width, not full-bleed (Figma: 294px of 335px) */}
					<RevealImage className="relative w-[18.41em] aspect-[295/154] overflow-hidden">
						<Image
							src="/praeva/sec01/photo-1.webp"
							alt="Elegant chairs in a serene interior — the quality of the DAMBROSE environment"
							fill
							className="object-cover"
							sizes="295px"
						/>
					</RevealImage>

					<BlurReveal>
						<h2 className="font-display text-[2em] leading-[1.1] tracking-[0.025em] text-[#222009] uppercase">
							Health guided with <em className="italic">foresight</em>.
						</h2>
					</BlurReveal>

					{/* Image pair: tall runner left + small orchid top-right */}
					<div className="flex items-start gap-4">
						<RevealImage className="relative flex-1 h-[17.81em] overflow-hidden">
							<Image
								src="/praeva/sec01/photo-2.webp"
								alt="Aerial landscape — the long-term perspective of preventive care"
								fill
								className="object-cover"
								sizes="60vw"
							/>
						</RevealImage>
						<RevealImage
							className="relative w-[8.56em] h-[9.63em] overflow-hidden shrink-0"
							delay={0.05}
						>
							<Image
								src="/praeva/sec01/philia.webp"
								alt="Pink amaryllis in bloom, backlit petals — a detail of natural vitality"
								fill
								className="object-cover"
								sizes="137px"
								quality={90}
							/>
						</RevealImage>
					</div>

					<BlurReveal delay={0.1}>
						<p className="font-ui text-[0.875em] leading-[1.4] tracking-[-0.04em] text-[#282119]/80">
							Some people feel healthiest when they understand what&apos;s ahead. They pay attention
							to how they age, how they recover, how their energy and wellbeing change over time.{' '}
							<strong className="font-bold">PRAEVA</strong> is for this level of prevention. It
							creates space to look forward with a health team who helps interpret patterns, guide
							choices, and support health before urgency enters the picture—so longevity becomes
							something intentional, not reactive.
						</p>
					</BlurReveal>

					{/* Leaf stays desktop-only — feels orphaned in the stacked mobile/tablet layout */}
				</Container>
			</div>

			{/* ── Desktop layout (≥ 1200 px) — absolute collage ── */}
			<div className="hidden min-[1200px]:block relative h-[29.07em] z-[1]">
				{/* Chairs — upper centre-left */}
				<div
					className="absolute top-0 w-[15.15em] h-[7.92em]"
					style={{ left: 'calc(8.33% + 2.01em)' }}
				>
					<RevealImage className="relative w-full h-full overflow-hidden">
						<Image
							src="/praeva/sec01/photo-1.webp"
							alt="Elegant chairs in a serene interior — the quality of the DAMBROSE environment"
							fill
							className="object-cover"
						/>
					</RevealImage>
				</div>

				{/* Right group: orchid (left) + landscape+text (right) */}
				<div
					className="absolute top-[4.17em] w-[47.27em] flex items-start justify-between"
					style={{ left: 'calc(33.33% + 0.21em)' }}
				>
					<RevealImage
						className="relative w-[7.05em] h-[7.92em] overflow-hidden shrink-0 mt-6"
						delay={0.05}
					>
						<Image
							src="/praeva/sec01/philia.webp"
							alt="Pink amaryllis in bloom, backlit petals — a detail of natural vitality"
							fill
							className="object-cover"
							quality={90}
						/>
					</RevealImage>

					<div className="flex flex-col gap-[1.6em] w-[19.91em] shrink-0">
						<RevealImage className="relative w-full aspect-[463/242] overflow-hidden" delay={0.08}>
							<Image
								src="/praeva/sec01/photo-2-editorial.webp"
								alt="Runner in motion — the long-term perspective of preventive care"
								fill
								className="object-cover object-center"
								quality={90}
								sizes="(min-width: 1440px) 20em, 100vw"
							/>
						</RevealImage>
						<BlurReveal delay={0.12}>
							<p className="font-ui text-body-copy leading-[1.4] tracking-[-0.029em] text-[#282119]/80">
								Some people feel healthiest when they understand what&apos;s ahead. They pay
								attention to how they age, how they recover, how their energy and wellbeing change
								over time. <strong className="font-bold">PRAEVA</strong> is for this level of
								prevention. It creates space to look forward with a health team who helps interpret
								patterns, guide choices, and support health before urgency enters the picture—so
								longevity becomes something intentional, not reactive.
							</p>
						</BlurReveal>
					</div>
				</div>

				{/* Heading + leaf — lower left */}
				<div className="absolute top-[15.59em] left-[2.06em] w-[13.22em] flex flex-col gap-[1.8em]">
					<BlurReveal>
						<h2 className="font-display text-[2.57em] leading-none tracking-[0.025em] text-[#222009] uppercase">
							Health <br />
							guided with <br />
							<em className="italic">foresight</em>.
						</h2>
					</BlurReveal>
					<RevealImage className="relative w-[7.05em] h-[7.92em] overflow-hidden" delay={0.08}>
						<Image
							src="/praeva/sec12-leaf.jpg"
							alt="Plant leaf — the organic texture of wellness"
							fill
							className="object-cover"
						/>
					</RevealImage>
				</div>
			</div>
		</section>
	)
}
