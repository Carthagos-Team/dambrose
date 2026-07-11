import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 13 — /about — Figma node 3603:376
 */
export function AboutSec13() {
	return (
		<section className="w-full bg-ecru-white py-12 md:py-37.5">
			<Container>
				<div className="flex flex-col gap-12 md:gap-16 items-center">
					{/* ── HEADING ─────────────────────────────────────── */}
					<BlurReveal>
						<h2 className="font-display text-[2.5em] leading-none tracking-[0.01em] text-corduroy text-center w-full">
							A single standard of <em className="font-display italic">healthcare.</em>
						</h2>
					</BlurReveal>

					{/* ── CONTENT ROW ─────────────────────────────────── */}
					<div className="flex flex-col gap-10 w-full md:flex-row md:items-end md:justify-between">
						{/* Photo */}
						<RevealImage
							delay={0.05}
							className="relative w-full md:w-[36.63%] aspect-[463/368] overflow-hidden bg-bison-hide shrink-0"
						>
							<Image
								src="/about-us/sec06/photo.webp"
								alt="Patient in conversation with physician — attentive, personal care at DAMBROSE"
								fill
								className="object-cover object-center"
								quality={90}
								sizes="(max-width: 768px) 100vw, 37vw"
							/>
						</RevealImage>

						{/* Right block: text + button */}
						<BlurReveal delay={0.15} className="flex flex-col gap-[3.2em] md:w-[39.87%] min-w-0">
							<div className="relative">
								<p className="font-body text-sm text-rangitoto/80 uppercase leading-[1.4] tracking-[-0.04em]">
									DAMBROSE partners with specialist physicians who value collaboration, clarity,
									and thoughtful medicine. These relationships are built on shared values and mutual
									trust.
								</p>
								<Image
									src="/about/sec13-signature.svg"
									alt=""
									width={306}
									height={65}
									className="absolute -bottom-6 right-0 w-36 md:w-[15.3em] md:-bottom-9 h-auto pointer-events-none select-none"
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
			</Container>
		</section>
	)
}
