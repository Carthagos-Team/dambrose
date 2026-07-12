import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 8 — /about — Figma node 3557:169
 */
export function AboutSec8() {
	return (
		<section className="w-full bg-ecru-white py-[6.05em]">
			<Container>
				<div className="flex flex-col gap-10 md:gap-[4.3em] items-start md:items-center">
					<BlurReveal>
						<h2 className="font-display text-[2.5em] leading-none tracking-[0.01em] text-gray-olive w-full max-w-[8.16em] shrink-0 text-left">
							The original meaning of care, <em className="font-display italic">restored.</em>
						</h2>
					</BlurReveal>

					<div className="w-full flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
						{/* LEFT: badge + main photo */}
						<div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-[7.35em] md:w-[52%]">
							<Image
								src="/about/sec8-side-badge.svg"
								alt=""
								width={66}
								height={211}
								className="hidden md:block shrink-0 self-start w-[3.3em] h-auto"
								aria-hidden="true"
								unoptimized
							/>

							<RevealImage className="relative overflow-hidden bg-bison-hide w-full md:flex-1 min-w-0 aspect-[501/368]">
								<Image
									src="/about-us/sec01/intro-photo.webp"
									alt="White orchids in a pot lit by a diagonal beam of sunlight against a dark wall"
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 52vw"
								/>
							</RevealImage>
						</div>

						{/* RIGHT: ornament + body */}
						<div className="flex flex-col gap-[2.85em] md:w-[37%] shrink-0">
							<Image
								src="/about/sec8-mark.svg"
								alt=""
								width={65}
								height={80}
								className="hidden md:block opacity-80 self-start"
								aria-hidden="true"
								unoptimized
							/>

							<BlurReveal>
								<div className="flex flex-col gap-[1.4em] font-body text-sm uppercase text-rangitoto/80 leading-[1.4] tracking-[-0.04em]">
									<p>Medicine has drifted too far from the people it serves.</p>
									<p>
										Rushed appointments. Fragmented care. A maze of referrals, specialists, and
										complex systems.
									</p>
									<p>
										But health is not episodic. Care should not begin at crisis or disappear
										when symptoms fade.
									</p>
								</div>
							</BlurReveal>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
