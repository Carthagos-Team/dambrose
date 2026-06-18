import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { Button } from './button'
import { RevealImage } from './reveal-image'

export function MoreThan() {
	return (
		<section className="w-full bg-ecru-white py-16 md:py-28">
			<Container>
				<div className="flex flex-col gap-12 md:gap-28">
					{/* ── Heading ────────────────────────────────────────────── */}
					<BlurReveal>
						<h2 className="font-display text-3xl md:text-[3.125em] text-judge-gray text-center leading-tight">
							More than a family doctor.
							<br />
							More than concierge medicine.
						</h2>
					</BlurReveal>

					{/* ── Two-column layout ───────────────────────────────────── */}
					<div className="flex flex-col md:flex-row md:gap-20">
						{/* Left column */}
						<div className="flex flex-col md:pt-40 md:w-[41.5%] shrink-0">
							<RevealImage className="relative w-full aspect-564/400 overflow-hidden bg-bison-hide">
								<Image src="/home/sec10/media-large.webp" alt="" aria-hidden="true" fill className="object-cover" />
							</RevealImage>

							<BlurReveal delay={0.15} className="mt-4">
								<p
									className="font-body text-sm uppercase text-rangitoto/80 leading-relaxed"
									style={{ letterSpacing: '-0.04em' }}
								>
									DAMBROSE goes further by keeping medicine accountable and personal, bringing
									coherence and continuity where systems and shortcuts fall short.
								</p>
							</BlurReveal>

							<BlurReveal delay={0.25} className="mt-auto pt-[3.2em]">
								<Button href="/philosophy" className="w-fit" variant="fire">
									Learn about our philosophy →
								</Button>
							</BlurReveal>
						</div>

						{/* Right column */}
						<div className="flex flex-col gap-10 md:gap-30 flex-1 mt-10 md:mt-0">
							<BlurReveal delay={0.1}>
								<p
									className="font-body text-sm uppercase text-rangitoto/80 leading-relaxed"
									style={{ letterSpacing: '-0.04em' }}
								>
									Traditional healthcare is fragmented and inefficient, shaped by multiple
									providers, rushed encounters, and constant handoffs. While alternative models
									improve access, they often remain episodic—leaving specialists and hospital care
									loosely connected.
								</p>
							</BlurReveal>

							<RevealImage
								delay={0.2}
								className="relative w-full aspect-680/642 overflow-hidden bg-bison-hide"
							>
								<Image
									src="/home/sec10/media-featured.webp"
									alt="A man at the sink in a bright, sunlit home kitchen"
									fill
									className="object-cover"
								/>
							</RevealImage>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
