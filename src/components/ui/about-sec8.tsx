import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 8 — /about — Figma node 3557:169
 * Figma specs:
 *   Headline: 408×100, Instrument Serif 50 / lh 100% / ls 1%
 *   Body text: 403px wide (NOT 408), Martian Mono 14 / lh 140% / ls -4%
 *   [01 + body] row: 498px container, 65px gap, items-center
 */
export function AboutSec8() {
	return (
		<section className="w-full bg-ecru-white py-[6.05em]">
			<Container>
				<div className="flex flex-col gap-10 md:gap-[86px] items-center">
					<BlurReveal>
						<h2 className="font-display text-[50px] leading-none tracking-[0.01em] text-gray-olive w-full max-w-[408px] shrink-0 text-left">
							The original meaning of care, <em className="font-display italic">restored.</em>
						</h2>
					</BlurReveal>

					<div className="w-full flex flex-col gap-10 md:flex-row md:items-start md:gap-[120px]">
						{/* LEFT: badge + main photo */}
						<div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-[147px]">
							<Image
								src="/about/sec8-side-badge.svg"
								alt=""
								width={66}
								height={211}
								className="hidden md:block shrink-0 self-start w-[66px] h-auto"
								aria-hidden="true"
								unoptimized
							/>

							<RevealImage className="relative overflow-hidden bg-bison-hide w-full md:w-[501px] aspect-[501/368] shrink-0">
								<Image
									src="/about/sec8-main.png"
									alt="Hand resting on a marble surface beside white flowers in a glass vase"
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 501px"
								/>
							</RevealImage>
						</div>

						{/* RIGHT: ornament + [01 · body] — 498px column */}
						<div className="flex flex-col gap-[57px] md:w-[498px] shrink-0">
							<Image
								src="/about/sec8-mark.svg"
								alt=""
								width={65}
								height={80}
								className="opacity-80"
								aria-hidden="true"
								unoptimized
							/>

							<BlurReveal className="flex flex-col md:flex-row md:items-center gap-2 md:gap-[65px] w-full">
								<span
									className="font-body text-xs uppercase text-gray-olive/80 leading-[1.3] shrink-0 w-[30px]"
									aria-hidden="true"
								>
									01
								</span>

								<p className="font-body text-sm uppercase text-rangitoto/80 leading-[1.4] tracking-[-0.04em] w-full md:w-[403px] shrink-0">
									Medicine has drifted too far from the people it serves.
									<br />
									<br />
									Rushed appointments. Fragmented care. A maze of referrals, specialists, and
									complex systems.
									<br />
									<br />
									But health is not episodic. And care should not begin at crisis or disappear when
									symptoms fade.
								</p>
							</BlurReveal>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
