import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 12 — /lifelong-medicine — Figma node 3632:414
 */
export function LifelongMedicineSec12() {
	return (
		<section className="w-full bg-ecru-white py-12 md:py-[5.6rem]">
			<Container>
				<div className="flex flex-col gap-10 md:gap-[3.75rem]">

					{/* ── HEADING ─────────────────────────────────────── */}
					<BlurReveal>
						<h2 className="font-display text-[2.5rem] leading-none tracking-[0.025em] text-gray-olive md:max-w-[38%]">
							What if medicine took the time it needs{' '}
							<em className="font-display italic">to heal?</em>
						</h2>
					</BlurReveal>

					{/* ── CONTENT ROW ─────────────────────────────────── */}
					<div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-[8rem]">

						{/* LEFT — vertical badge (desktop only) */}
						<div className="hidden md:flex items-center justify-center shrink-0 w-[3.30463rem] h-[10.59944rem]">
							<div style={{ width: '10.59944rem', height: '3.30463rem', transform: 'rotate(-90deg)', flexShrink: 0 }}>
								<Image
									src="/lifelong-medicine/sec12-badge.svg"
									alt=""
									width={212}
									height={66}
									className="w-full h-full"
									aria-hidden="true"
									unoptimized
								/>
							</div>
						</div>

						{/* RIGHT — photo + text column */}
						<div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-[6rem] flex-1 min-w-0">

							{/* Photo */}
							<RevealImage
								delay={0.05}
								className="relative w-full md:w-[37%] aspect-[501/368] overflow-hidden bg-bison-hide shrink-0"
							>
								<Image
									src="/lifelong-medicine/sec12-orchid.png"
									alt="Orchid close-up — a detail of the serene DAMBROSE environment"
									fill
									className="object-cover object-center"
									sizes="(max-width: 768px) 100vw, 37vw"
								/>
							</RevealImage>

							{/* Text column */}
							<div className="flex flex-col gap-8 md:gap-[3.75rem] flex-1 min-w-0">

								{/* Wordmark */}
								<BlurReveal delay={0.1} className="relative flex items-center h-[3.95rem]">
									<Image
										src="/lifelong-medicine/sec12-wordmark.svg"
										alt="Dambrose"
										width={207}
										height={58}
										className="w-[10.35rem] h-auto"
										unoptimized
									/>
									<span
										className="absolute font-body text-regent-gray text-[0.85rem] tracking-widest uppercase"
										style={{ left: '10.35rem', top: '0.2rem', transform: 'rotate(-5.05deg)' }}
										aria-hidden="true"
									>
										®
									</span>
								</BlurReveal>

								{/* 01 + paragraph */}
								<BlurReveal delay={0.15} className="flex flex-col gap-4 md:flex-row md:items-start md:gap-[4.5rem]">
									<span className="font-body text-xs text-gray-olive/80 uppercase leading-[1.3] shrink-0">
										01
									</span>
									<p className="font-body text-[0.7rem] text-rangitoto/80 uppercase leading-[1.4] tracking-[-0.04em]">
										Modern healthcare is built around moments: a visit, a symptom, a treatment,
										a discharge. Each time, medical history is revisited instead of remembered.
										Context is summarized rather than lived with. Responsibility is spread across
										many hands, but rarely held by one. Even in private or concierge medicine,
										care is often optimized for access and convenience, NOT FOR UNDERSTANDING.
									</p>
								</BlurReveal>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
