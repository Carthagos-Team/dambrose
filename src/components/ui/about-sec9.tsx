import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 9 — /about — Figma node 3566:246
 */
export function AboutSec9() {
	return (
		<section className="w-full bg-ecru-white py-12 md:py-38">
			<Container>
				<div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-start">
					{/* ── LEFT COLUMN ─────────────────────────────────── */}
					<div className="flex flex-col gap-[1.2em] md:w-[38%] shrink-0">
						<RevealImage className="relative w-full aspect-[514/433] overflow-hidden bg-bison-hide">
							<Image
								src="/shared/team-mask-1.webp"
								alt="Crystal wellness tray with essential oil bottle — a detail from the DAMBROSE practice"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 38vw"
							/>
						</RevealImage>

						<BlurReveal>
							<p className="font-body text-sm uppercase leading-[1.4] tracking-[-0.04em] text-rangitoto/80">
								We believe the greatest luxury in healthcare is not access, speed, or convenience.
								It is being genuinely known in a way that brings peace to uncertainty.
							</p>
							<p className="font-body text-sm uppercase leading-[1.4] tracking-[-0.04em] text-rangitoto/80 mt-[0.6857em]">
								That&rsquo;s why, at DAMBROSE, we begin where most care ends. We stay present in
								every chapter&mdash;close enough to notice the small changes only a doctor who sees
								the whole of you can recognize: your history, your patterns, your worries, your
								goals.
							</p>
						</BlurReveal>
					</div>

					{/* ── RIGHT SIDE: column + vertical badge ─────────── */}
					<div className="flex flex-col md:flex-row gap-10 md:gap-[6.2em] md:items-end md:w-[55%]">
						{/* RIGHT COLUMN */}
						<div className="flex flex-col gap-[3.7em] md:flex-1 min-w-0">
							<BlurReveal delay={0.1} className="relative w-full md:max-w-[19.7em]">
								<Image
									src="/about/sec9-wordmark.png"
									alt="Dambrose — Here for every life chapter"
									width={500}
									height={175}
									className="w-full md:max-w-[19.7rem] h-auto"
									unoptimized
								/>
							</BlurReveal>

							{/* Right photo + text */}
							<div className="flex flex-col gap-[1.2em]">
								<RevealImage
									delay={0.15}
									className="relative w-full aspect-[514/433] overflow-hidden bg-bison-hide"
								>
									<Image
										src="/about/sec9-right.png"
										alt="Orchids and tropical plants in a sunlit lobby — serene setting of the DAMBROSE practice"
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 55vw"
									/>
								</RevealImage>

								<BlurReveal delay={0.15}>
									<p className="font-body text-sm uppercase leading-[1.4] tracking-[-0.04em] text-rangitoto/80">
										We connect what&rsquo;s scattered. We guide what&rsquo;s complex. We turn
										uncertainty into clarity and urgency into calm&mdash; from prevention and
										treatment to renewal.
									</p>
									<p className="font-body text-sm uppercase leading-[1.4] tracking-[-0.04em] text-rangitoto/80 mt-[0.6857em]">
										Because real medicine isn&rsquo;t a service. It&rsquo;s a companionship. A
										steady hand. A held history. A life understood across time.
									</p>
								</BlurReveal>
							</div>
						</div>

						{/* VERTICAL BADGE — desktop only */}
						<div className="hidden md:flex items-center justify-center h-[15.45em] w-[5.175em] shrink-0">
							<div className="-rotate-90">
								<div className="relative w-[15.45em] h-[5.175em] border-[0.095687em] border-[#d85b31]">
									<div
										className="absolute font-body text-[0.58em] text-[#d85b31] tracking-[0.33em] uppercase leading-[2.586em]"
										style={{ left: '1.1724em', top: '0.431em', width: '24.2931em' }}
									>
										<div className="flex items-baseline justify-between">
											<span>lifelong</span>
											<div className="h-px bg-[#d85b31] flex-1 mx-2 mb-0.75" />
											<span>medicine</span>
										</div>
										<p className="text-center">dambrose</p>
										<p className="text-center">orlando · fl</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
