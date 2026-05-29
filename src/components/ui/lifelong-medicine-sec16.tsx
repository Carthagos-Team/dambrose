import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 16 — /lifelong-medicine — Figma node 3678:1147
 * Two-column: B&W portrait (left) + editorial quote + brand signature (right)
 */
export function LifelongMedicineSec16() {
	return (
		<section className="w-full bg-ecru-white py-12 md:py-[5.75rem] overflow-hidden">
			<Container>
				<div className="flex flex-col gap-10 md:flex-row md:items-stretch md:gap-[6.85rem]">

					{/* ── LEFT — Portrait ─────────────────────────────── */}
					<RevealImage className="relative w-full md:w-[40.8%] aspect-[555/800] overflow-hidden bg-bison-hide shrink-0">
						<Image
							src="/lifelong-medicine/sec16-portrait.jpg"
							alt="Dr. Michael J. Dambrose — founder of DAMBROSE Lifelong Medicine"
							fill
							className="object-cover object-top"
							sizes="(max-width: 768px) 100vw, 41vw"
						/>
					</RevealImage>

					{/* ── RIGHT — Quote + Signature ───────────────────── */}
					<div className="flex flex-col justify-between flex-1 min-w-0">

						{/* Quote */}
						<BlurReveal delay={0.1}>
							<blockquote className="font-display text-[1.85rem] leading-[1.25] tracking-[0.01em] text-gray-olive">
								<p>
									Over the years, I realized that the most important medical decisions
									rarely come from isolated visits. They come from time. From knowing
									a person&rsquo;s history, their patterns, their fears, and how
									their health evolves between appointments.
								</p>
								<p className="mt-[0.78rem]">
									Lifelong medicine is the way I was trained to think. It&rsquo;s
									medicine that remembers, that stays accountable, and that doesn&rsquo;t
									disappear when things get complex or too quiet.
								</p>
							</blockquote>
						</BlurReveal>

						{/* Signature group */}
						<BlurReveal delay={0.2} className="relative h-[8.8rem] mt-16 md:mt-0">

							{/* Wordmark — anchored bottom-left */}
							<div className="absolute left-0 bottom-0">
								<Image
									src="/lifelong-medicine/sec16-wordmark.svg"
									alt="Dambrose"
									width={298}
									height={62}
									className="w-[18.6rem] h-auto"
									unoptimized
								/>
							</div>

							{/* Badge — upper-right, bleeds above */}
							<div className="absolute right-0 -top-[0.8rem]">
								<Image
									src="/lifelong-medicine/sec16-badge.png"
									alt=""
									width={143}
									height={143}
									className="w-[8.9rem] h-[8.9rem]"
									aria-hidden="true"
								/>
							</div>

						</BlurReveal>
					</div>

				</div>
			</Container>
		</section>
	)
}
