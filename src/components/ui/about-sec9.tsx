import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 9 — /about — Figma node 3566:246
 * Two-column editorial layout: left photo+text / right wordmark+photo+text + vertical badge.
 */
export function AboutSec9() {
	return (
		<section className="w-full bg-ecru-white py-12 md:py-[9.5em]">
			<Container>
				<div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-start">
					{/* ── LEFT COLUMN ─────────────────────────────────── */}
					<div className="flex flex-col gap-[24px] md:w-[514px] shrink-0">
						<RevealImage className="relative w-full aspect-[514/433] overflow-hidden bg-bison-hide">
							<Image
								src="/about/sec9-left.png"
								alt="Crystal wellness tray with essential oil bottle — a detail from the DAMBROSE practice"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 514px"
							/>
						</RevealImage>

						<BlurReveal>
							<p className="font-body text-sm uppercase leading-[1.4] tracking-[-0.04em] text-rangitoto/80">
								We believe the greatest luxury in healthcare is not access, speed, or
								convenience. It is being genuinely known in a way that brings peace to
								uncertainty.
							</p>
							<p className="font-body text-sm uppercase leading-[1.4] tracking-[-0.04em] text-rangitoto/80 mt-[12px]">
								That&rsquo;s why, at DAMBROSE, we begin where most care ends. We stay
								present in every chapter&mdash;close enough to notice the small changes
								only a doctor who sees the whole of you can recognize: your history, your
								patterns, your worries, your goals.
							</p>
						</BlurReveal>
					</div>

					{/* ── RIGHT SIDE: column + vertical badge ─────────── */}
					<div className="flex flex-col md:flex-row gap-10 md:gap-[124px] md:items-end">
						{/* RIGHT COLUMN */}
						<div className="flex flex-col gap-[74px] md:w-[514px] shrink-0">
							{/* Wordmark + stamp (script font captured as Figma asset) */}
							<BlurReveal delay={0.1} className="relative w-full md:w-[394px]">
								<Image
									src="/about/sec9-wordmark.png"
									alt="Dambrose — Here for every life chapter"
									width={500}
									height={175}
									className="w-full md:w-[394px] h-auto"
									unoptimized
								/>
							</BlurReveal>

							{/* Right photo + text */}
							<div className="flex flex-col gap-[24px]">
								<RevealImage
									delay={0.15}
									className="relative w-full aspect-[514/433] overflow-hidden bg-bison-hide"
								>
									<Image
										src="/about/sec9-right.png"
										alt="Orchids and tropical plants in a sunlit lobby — serene setting of the DAMBROSE practice"
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 514px"
									/>
								</RevealImage>

								<BlurReveal delay={0.15}>
									<p className="font-body text-sm uppercase leading-[1.4] tracking-[-0.04em] text-rangitoto/80">
										We connect what&rsquo;s scattered. We guide what&rsquo;s complex. We
										turn uncertainty into clarity and urgency into calm&mdash; from
										prevention and treatment to renewal.
									</p>
									<p className="font-body text-sm uppercase leading-[1.4] tracking-[-0.04em] text-rangitoto/80 mt-[12px]">
										Because real medicine isn&rsquo;t a service. It&rsquo;s a
										companionship. A steady hand. A held history. A life understood across
										time.
									</p>
								</BlurReveal>
							</div>
						</div>

						{/* VERTICAL BADGE — desktop only */}
						<div className="hidden md:flex items-center justify-center h-[309px] w-[103.5px] shrink-0">
							<div className="-rotate-90">
								<div className="relative w-[309px] h-[103.5px] border-[1.531px] border-[#d85b31]">
									{/* Badge text — flex justify-between para LIFELONG/MEDICINE, evita overflow com qualquer fonte */}
									<div
										className="absolute font-body text-[11.692px] text-[#d85b31] tracking-[0.33em] uppercase leading-[24px]"
										style={{ left: '13.56px', top: '5.05px', width: '281.878px' }}
									>
										<div className="flex items-baseline justify-between">
											<span>lifelong</span>
											{/* Horizontal rule — Figma: imgLine1, separates LIFELONG from MEDICINE */}
											<div className="h-px bg-[#d85b31] flex-1 mx-[8px] mb-[3px]" />
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
