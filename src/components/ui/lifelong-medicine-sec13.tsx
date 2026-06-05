import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 13 — /lifelong-medicine — Figma node 3643:475
 * Layout: centered heading → two-column staggered (left shorter + top offset, right taller + bigger top offset)
 */
export function LifelongMedicineSec13() {
	return (
		<section className="w-full bg-ecru-white py-12 md:py-[5.6em]">
			<Container>
				<div className="flex flex-col items-center gap-10 md:gap-0">
					{/* ── HEADING (centered) ─────────────────────────── */}
					<BlurReveal className="w-full flex justify-center">
						<h2 className="font-display text-[2.5em] leading-[0.85] tracking-[0.025em] text-judge-gray text-center md:max-w-[39%]">
							What the system lacks is not speed or availability.
						</h2>
					</BlurReveal>

					{/* ── CONTENT ROW ─────────────────────────────────── */}
					<div className="flex flex-col gap-10 w-full md:flex-row md:justify-between md:items-end">
						{/* LEFT — photo + text, starts lower via pt */}
						<div className="flex flex-col gap-[4.8em] md:w-[41%] md:pt-32">
							<RevealImage
								delay={0.05}
								className="relative w-full aspect-[564/400] overflow-hidden bg-bison-hide"
							>
								<Image
									src="/lifelong-medicine/sec02/media-1.webp"
									alt="Person running along a canyon trail — the energy of lifelong health"
									fill
									className="object-cover object-center"
									sizes="(max-width: 768px) 100vw, 41vw"
								/>
							</RevealImage>

							<BlurReveal delay={0.1} className="flex flex-col gap-16">
								<p className="font-display italic text-[2.5em] leading-[0.85] tracking-[0.025em] text-fire">
									It&rsquo;s memory. It&rsquo;s perspective.
								</p>
								<p className="font-display text-[2.5em] leading-[0.85] tracking-[0.025em] text-judge-gray">
									It&rsquo;s a health team who carries the full arc of a person&rsquo;s health
									forward, <em className="font-display italic">year after year.</em>
								</p>
							</BlurReveal>
						</div>

						{/* RIGHT — taller portrait, bigger top offset */}
						<div className="md:w-[50%] md:pt-[13.1em]">
							<RevealImage
								delay={0.1}
								className="relative w-full aspect-[680/642] overflow-hidden bg-bison-hide"
							>
								<Image
									src="/lifelong-medicine/sec02/media-2.webp"
									alt="Woman standing in warm sunlight — the embodiment of lifelong wellbeing at DAMBROSE"
									fill
									className="object-cover object-top"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</RevealImage>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
