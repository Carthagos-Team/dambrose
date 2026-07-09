import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 12 — /about — Figma node 3598:350
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
			className={`flex flex-col justify-between bg-[#ffffe4] min-h-56 lg:h-[18.1em] px-4 py-[1.7em] shrink-0 ${className}`}
		>
			<p className="font-display italic text-[1.2em] text-corduroy tracking-[0.02em] leading-[1.1]">
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
		<section className="w-full bg-ecru-white py-12 md:py-28">
			<Container>
				<div className="flex flex-col gap-12 md:gap-20 items-center">
					{/* ── HEADER ──────────────────────────────────────── */}
					<div className="flex flex-col gap-[3.2em] items-center w-full max-w-[32.35em] text-center">
						<BlurReveal delay={0.05}>
							<h2 className="font-display text-[2.5em] leading-none tracking-[0.01em] text-gray-olive">
								The principles behind every decision.
							</h2>
						</BlurReveal>
					</div>

					{/* ── GRID ─────────────────────────────────────────── */}
					<div className="flex flex-col gap-4 w-full min-[1920px]:max-w-340 min-[1920px]:mx-auto">
						{/* ROW 1: 2 cards + wide photo (col-span-2) */}
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
							<PrincipleCard
								quote="Health is built on continuity, not encounters."
								body="Medicine gains meaning when it stays close and grows with the person it serves."
								delay={0}
							/>
							<PrincipleCard
								quote="Time is part of the treatment."
								body="Where others hurry, we remain. Where attention fades, we listen."
								delay={0.05}
							/>
							<RevealImage
								delay={0.1}
								className="relative w-full lg:col-span-2 min-h-56 lg:h-[18.1em] overflow-hidden bg-bison-hide"
							>
								<Image
									src="/about-us/sec05/image-small.webp"
									alt="Sunlit armchair beside a window — a serene, residential care setting"
									fill
									className="object-cover object-center"
									sizes="(max-width: 1024px) 100vw, (min-width: 1920px) 50vw, 52vw"
									quality={90}
								/>
							</RevealImage>
						</div>

						{/* ROW 2: wide photo + 3 cards */}
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
							<RevealImage
								delay={0}
								className="relative w-full min-h-56 lg:h-[18.1em] overflow-hidden bg-bison-hide order-last lg:order-none"
							>
								<Image
									src="/about-us/sec12/journal.webp"
									alt="Rolling green hills and a still pond reflecting the sky in sunlit countryside"
									fill
									className="object-cover object-center"
									sizes="(max-width: 1024px) 100vw, (min-width: 1920px) 25vw, 25vw"
									quality={90}
								/>
							</RevealImage>
							<PrincipleCard
								quote="Expertise must feel human."
								body="Knowledge is most valuable when delivered with clarity and empathy — and that is how it is always shared here."
								delay={0.05}
							/>
							<PrincipleCard
								quote="Complexity should feel effortless."
								body="When medicine is this attentive, health becomes something tended to — not something managed."
								delay={0.1}
							/>
							<PrincipleCard
								quote="Integrity and discretion define excellence."
								body="The standard here is complete discretion, sound judgment, and genuine respect for every person we serve."
								delay={0.15}
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
