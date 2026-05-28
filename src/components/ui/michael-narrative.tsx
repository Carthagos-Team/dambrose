import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function MichaelNarrative() {
	return (
		<>
			<section className="w-full bg-ecru-white border-t border-black/10 py-24 md:py-28">
				<Container>
					<div className="flex flex-col gap-12 lg:grid lg:grid-cols-[555fr_672fr] lg:gap-[7.4em] lg:items-stretch">
						<RevealImage
							className="relative w-full aspect-555/800 overflow-hidden bg-bison-hide"
							start="top 90%"
						>
							<Image
								src="/about-michael/portrait.jpg"
								alt="Dr. Michael J. D'Ambrose portrait"
								fill
								sizes="(min-width: 1024px) 555px, 100vw"
								className="object-cover"
							/>
						</RevealImage>

						<div className="flex flex-col">
							<BlurReveal delay={0.1} className="flex flex-col gap-12">
								<h3 className="font-display text-3xl md:text-5xl text-gray-olive leading-none">
									Dr. D&rsquo;Ambrose&rsquo;s approach to medicine was shaped far from traditional
									healthcare systems.
								</h3>
								<p className="font-body text-xs text-rangoon-green/80 uppercase tracking-tight leading-relaxed max-w-[44ch]">
									Trained in Ireland and later practicing in rural America, he learned medicine in
									environments where one doctor carried full responsibility — from emergency and
									hospital medicine to obstetrics and long-term primary care. In Montana, he served
									as the sole physician for an entire community, managing every aspect of their
									health personally.
								</p>
							</BlurReveal>

							<BlurReveal delay={0.2} className="mt-auto pt-16">
								<Image
									src="/marks/dambrose-badge.svg"
									alt="Dambrose — Lifelong Medicine"
									width={300}
									height={260}
									className="w-72 h-auto"
								/>
							</BlurReveal>
						</div>
					</div>
				</Container>
			</section>

			<section className="w-full bg-ecru-white border-t border-black/10 py-24 md:py-28">
				<Container>
					<div className="flex flex-col gap-12 lg:grid lg:grid-cols-[672fr_555fr] lg:gap-[7.4em] lg:items-stretch">
						<div className="flex flex-col order-2 lg:order-1">
							<BlurReveal delay={0.1} className="flex flex-col gap-12">
								<h3 className="font-display text-3xl md:text-5xl text-gray-olive leading-none max-w-[18ch]">
									That experience formed his belief early on in comprehensive, relationship-based
									practice.
								</h3>
								<div className="flex flex-col gap-6 max-w-[44ch]">
									<p className="font-body text-xs text-rangoon-green/80 uppercase tracking-tight leading-relaxed">
										For Michael, medicine works best when accountability is centralized, when
										knowledge is carried forward, and when patients are known beyond charts and
										visits. The distant, clinical &ldquo;white coat&rdquo; model contrasts with his
										commitment to being a real human presence people can trust, call directly, and
										rely on.
									</p>
									<p className="font-body text-xs text-rangoon-green/80 uppercase tracking-tight leading-relaxed">
										Over time, he became increasingly aware of what modern healthcare had lost:
										continuity, context, and presence. Systems built around speed and specialization
										left patients navigating complexity alone, while physicians were forced into
										fragmented roles.
									</p>
								</div>
							</BlurReveal>

							<BlurReveal delay={0.2} className="mt-auto pt-16">
								<Image
									src="/marks/lifelong-medicine-frame.svg"
									alt="Lifelong Medicine — Dambrose"
									width={260}
									height={81}
									className="h-20 w-auto"
								/>
							</BlurReveal>
						</div>

						<RevealImage
							className="relative w-full aspect-555/800 overflow-hidden bg-bison-hide order-1 lg:order-2"
							start="top 90%"
						>
							<Image
								src="/about-michael/glasses.jpg"
								alt="Reading glasses resting on a leather journal"
								fill
								sizes="(min-width: 1024px) 555px, 100vw"
								className="object-cover"
							/>
						</RevealImage>
					</div>
				</Container>
			</section>

			<section className="w-full bg-ecru-white border-t border-black/10 py-24 md:py-28">
				<Container>
					<div className="flex flex-col gap-12 lg:grid lg:grid-cols-[555fr_672fr] lg:gap-[7.4em] lg:items-stretch">
						<RevealImage
							className="relative w-full aspect-555/800 overflow-hidden bg-bison-hide"
							start="top 90%"
						>
							<Image
								src="/about-michael/patient.jpg"
								alt="A patient at home"
								fill
								sizes="(min-width: 1024px) 555px, 100vw"
								className="object-cover"
							/>
						</RevealImage>

						<div className="flex flex-col">
							<BlurReveal delay={0.1} className="flex flex-col gap-12">
								<h3 className="font-display text-3xl md:text-5xl text-gray-olive leading-none max-w-[18ch]">
									DAMBROSE was created as a direct response.
								</h3>
								<p className="font-body text-xs text-rangoon-green/80 uppercase tracking-tight leading-relaxed max-w-[44ch]">
									Today, Dr. D&rsquo;Ambrose leads a deliberately limited private practice where he
									remains involved in every patient relationship. He attends specialist
									appointments, coordinates care across disciplines, and serves as a constant
									medical companion through diagnosis, recovery, and prevention. His role is not
									only to treat illness, but to guide decisions by filtering noise, anticipating
									risk, and helping patients move forward with clarity and confidence.
								</p>

								<div className="border border-gray-olive/50 px-8 py-6 md:px-10 md:py-8 max-w-[42ch]">
									<p className="font-display text-xl md:text-2xl text-gray-olive leading-snug text-center">
										DAMBROSE reflects his belief that medicine is not episodic care, but a lifelong
										journey.
									</p>
								</div>
							</BlurReveal>

							<BlurReveal delay={0.2} className="self-end -mt-4 md:-mt-6">
								<Image
									src="/marks/dambrose-circle.svg"
									alt="Dambrose — Lifelong Medicine"
									width={314}
									height={271}
									className="w-44 md:w-52 h-auto"
								/>
							</BlurReveal>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
