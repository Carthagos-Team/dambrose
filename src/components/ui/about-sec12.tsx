import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 12 — /about — Figma node 3598:350
 * "The principles behind every decision."
 * Row 1: 2 fixed-width cards (328px) + 1 flex photo.
 * Row 2: 1 flex photo + 3 flex cards (all flex-1, equal to 328px at 1360px viewport).
 * Card bg: #ffffe4 (half-and-half — not in design tokens).
 */

type PrincipleCardProps = {
	quote: string
	body: string
	delay?: number
	className?: string
}

function PrincipleCard({ quote, body, delay = 0, className = '' }: PrincipleCardProps) {
	return (
		<BlurReveal
			delay={delay}
			className={`flex flex-col justify-between bg-[#ffffe4] min-h-[280px] md:h-[362px] px-[20px] py-[34px] shrink-0 ${className}`}
		>
			<p className="font-display italic text-[24px] text-corduroy tracking-[0.02em] leading-[1.1]">
				{quote}
			</p>
			<p className="font-body text-xs text-rangoon-green/80 uppercase leading-[1.4] tracking-[-0.04em]">
				{body}
			</p>
		</BlurReveal>
	)
}

export function AboutSec12() {
	return (
		<section className="w-full bg-ecru-white py-12 md:py-[7em]">
			<Container>
				<div className="flex flex-col gap-12 md:gap-[100px] items-center">

					{/* ── HEADER ──────────────────────────────────────── */}
					<div className="flex flex-col gap-[64px] items-center w-full max-w-[647px] text-center">
						<BlurReveal>
							<span className="font-body text-xs text-gray-olive/80 uppercase leading-[1.3]">
								05
							</span>
						</BlurReveal>
						<BlurReveal delay={0.05}>
							<h2 className="font-display text-[50px] leading-none tracking-[0.01em] text-gray-olive">
								The principles behind every decision.
							</h2>
						</BlurReveal>
					</div>

					{/* ── GRID ─────────────────────────────────────────── */}
					<div className="flex flex-col gap-[16px] w-full">

						{/* ROW 1: 2 fixed cards + 1 flex photo */}
						<div className="flex flex-col gap-4 md:flex-row md:gap-[16px] md:items-stretch">
							<PrincipleCard
								quote="Health is built on continuity, not encounters."
								body="Medicine gains meaning when it stays close and grows with the person it serves."
								delay={0}
								className="md:w-[328px]"
							/>
							<PrincipleCard
								quote="Time is part of the treatment."
								body="Where others hurry, we remain. Where attention fades, we listen carefully."
								delay={0.05}
								className="md:w-[328px]"
							/>
							<RevealImage
								delay={0.1}
								className="relative w-full md:flex-1 min-w-0 min-h-[280px] md:h-[362px] overflow-hidden bg-bison-hide"
							>
								<Image
									src="/about/sec12-window.png"
									alt="Sunlit armchair beside a window — a serene, residential care setting"
									fill
									className="object-cover object-center"
									sizes="(max-width: 768px) 100vw, calc(100vw - 720px)"
								/>
							</RevealImage>
						</div>

						{/* ROW 2: 1 flex photo + 3 flex cards */}
						<div className="flex flex-col gap-4 md:flex-row md:gap-[16px] md:items-stretch">
							<RevealImage
								delay={0}
								className="relative w-full md:flex-1 min-w-0 min-h-[280px] md:h-[362px] overflow-hidden bg-bison-hide"
							>
								<Image
									src="/about/sec12-doctor.png"
									alt="Elderly gentleman writing in a journal — warmth of long-term physician care"
									fill
									className="object-cover object-center"
									sizes="(max-width: 768px) 100vw, 25vw"
								/>
							</RevealImage>
							<PrincipleCard
								quote="Expertise must feel human."
								body="Knowledge matters, but so does how it's delivered: with clarity, empathy, and calm."
								delay={0.05}
								className="md:flex-1 md:min-w-0 md:w-auto"
							/>
							<PrincipleCard
								quote="Complexity should feel effortless."
								body="Guidance should simplify care so people can focus on living, not managing their health."
								delay={0.1}
								className="md:flex-1 md:min-w-0 md:w-auto"
							/>
							<PrincipleCard
								quote="Integrity and restraint define excellence."
								body="Confidentiality, careful judgment, and respect for every individual define how we show up."
								delay={0.15}
								className="md:flex-1 md:min-w-0 md:w-auto"
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
