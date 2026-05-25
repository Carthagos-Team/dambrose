import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 13 — /about — Figma node 3603:376
 * "A single standard of healthcare."
 * Full-width centered heading + bottom row: photo (463×368) left-aligned,
 * right block with "06" index label + body text + CTA, items-end aligned.
 */
export function AboutSec13() {
	return (
		<section className="w-full bg-ecru-white py-12 md:py-[9.375em]">
			<Container>
				<div className="flex flex-col gap-12 md:gap-[80px] items-center">

					{/* ── HEADING ─────────────────────────────────────── */}
					<BlurReveal>
						<h2 className="font-display text-[50px] leading-none tracking-[0.01em] text-corduroy text-center w-full">
							A single standard of{' '}
							<em className="font-display italic">healthcare.</em>
						</h2>
					</BlurReveal>

					{/* ── CONTENT ROW ─────────────────────────────────── */}
					<div className="flex flex-col gap-10 w-full md:flex-row md:items-end md:gap-[158px]">

						{/* Photo */}
						<RevealImage
							delay={0.05}
							className="relative w-full md:w-[463px] aspect-[463/368] md:aspect-auto md:h-[368px] overflow-hidden bg-bison-hide shrink-0"
						>
							<Image
								src="/about/sec13-consult.png"
								alt="Patient in conversation with physician — attentive, personal care at DAMBROSE"
								fill
								className="object-cover object-center"
								sizes="(max-width: 768px) 100vw, 463px"
							/>
						</RevealImage>

						{/* Right block: "06" index + text + button */}
						<div className="flex flex-col md:flex-row gap-4 md:gap-[69px] md:items-start md:shrink-0">
							<BlurReveal delay={0.1}>
								<span className="font-body text-xs text-olive-haze/60 uppercase leading-[1.3] w-[69px] block">
									06
								</span>
							</BlurReveal>

							<BlurReveal delay={0.15} className="flex flex-col gap-[64px] md:w-[504px]">
								<div className="relative">
									<p className="font-body text-sm text-rangitoto/80 uppercase leading-[1.4] tracking-[-0.04em]">
										DAMBROSE partners with specialist physicians who value collaboration, clarity, and
										thoughtful medicine. If you share a commitment to serving patients through an
										integrated approach, let&rsquo;s work together.
									</p>
									<Image
										src="/about/sec13-signature.svg"
										alt=""
										width={306}
										height={65}
										className="absolute bottom-[-30px] right-0 w-[180px] md:w-[306px] md:bottom-[-45px] h-auto pointer-events-none select-none"
										aria-hidden="true"
										unoptimized
									/>
								</div>
								<Button variant="regent" size="sm" href="/contact" className="w-fit">
									contact us
								</Button>
							</BlurReveal>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
