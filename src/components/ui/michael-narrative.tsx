import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'
import { SectionDivider } from '@/components/ui/section-divider'

export function MichaelNarrative() {
	return (
		<>
			<section className="w-full bg-ecru-white py-24 md:py-28">
				<Container>
					<div className="flex flex-col gap-12 lg:grid lg:grid-cols-[555fr_672fr] lg:gap-[7.4em] lg:items-stretch">
						<div className="flex flex-col gap-4">
							<BlurReveal>
								<p className="font-body text-xs text-gray-olive uppercase tracking-tight leading-relaxed">
									A message from our founder
								</p>
							</BlurReveal>
							<RevealImage
								className="relative w-full aspect-555/800 overflow-hidden bg-bison-hide"
								start="top 90%"
							>
								<Image
									src="/shared/portrait-doctor-1.webp"
									alt="Dr. Michael J. D'Ambrose portrait"
									fill
									sizes="(min-width: 1024px) 555px, 100vw"
									className="object-cover"
								/>
							</RevealImage>
						</div>

						<div className="relative flex flex-col">
							<BlurReveal delay={0.1} className="flex flex-col gap-12">
								<h3 className="font-display text-3xl md:text-5xl text-gray-olive leading-none">
									This practice was born from witnessing failure.
								</h3>
								<div className="flex flex-col gap-6 max-w-none min-[1280px]:max-w-[44ch]">
									<p className="font-body text-xs text-rangoon-green/80 uppercase tracking-tight leading-relaxed">
										Long before medicine became a profession for me, it became a conviction. As a
										child, I watched someone I loved consumed by illness, and I watched a healthcare
										system consume what remained of her dignity. She was a person with fears, with
										people who loved her, with a life that mattered. The system never saw that. More
										than motivating me to become a doctor, that experience defined the kind I would
										never be.
									</p>
									<p className="font-body text-xs text-rangoon-green/80 uppercase tracking-tight leading-relaxed">
										My commitment has always been to practice medicine the way it deserves to be
										practiced &mdash; with full presence, complete knowledge of the patient, and no
										competing priorities. That is not possible inside a system designed for volume.
										DAMBROSE was built on the understanding that it can be.
									</p>
								</div>
							</BlurReveal>

							{/* Selo — abaixo de 1280px o texto ainda pode ocupar mais linhas do que o design
							    desktop previa; manter o selo em fluxo normal (tratamento mobile) até lá evita
							    que ele invada o parágrafo. Só em ≥1280px (largura em que a coluna acomoda o
							    texto como no Figma) ele assume o posicionamento absoluto original. */}
							<BlurReveal
								delay={0.2}
								className="mt-auto pt-16 self-center min-[1280px]:mt-0 min-[1280px]:pt-0 min-[1280px]:self-auto min-[1280px]:absolute min-[1280px]:right-[6.792rem] min-[1280px]:bottom-[-2.22406rem]"
							>
								<Image
									src="/marks/dambrose-seal.svg"
									alt="Dambrose — Lifelong Medicine"
									width={314}
									height={271}
									className="w-42 h-auto min-[1280px]:w-[19.625rem] min-[1280px]:h-[16.90994rem] min-[1280px]:rotate-[15deg]"
								/>
							</BlurReveal>
						</div>
					</div>
				</Container>
			</section>

			<SectionDivider />

			<section className="w-full bg-ecru-white py-24 md:py-28">
				<Container>
					<div className="flex flex-col gap-12 lg:grid lg:grid-cols-[672fr_555fr] lg:gap-[7.4em] lg:items-stretch">
						<div className="relative flex flex-col order-2 lg:order-1 min-[1280px]:min-h-full">
							<BlurReveal delay={0.1} className="flex flex-col gap-12">
								<h3 className="font-display text-3xl md:text-5xl text-gray-olive leading-none">
									Health is not the absence of illness. It is the fullness of life.
								</h3>
								<p className="font-body text-xs text-rangoon-green/80 uppercase tracking-tight leading-relaxed max-w-none min-[1280px]:max-w-[30.6em]">
									Medicine at DAMBROSE is practiced without compromise: every care plan built from
									the ground up, every patient relationship singular, every standard unaffected by
									scale. Not because patients expect it &mdash; because anything less would be
									insufficient.
								</p>
							</BlurReveal>

							{/* Carimbo — mesma lógica do selo acima: fica em fluxo normal (tratamento
							    mobile) até 1280px, evitando invadir o parágrafo em tablet. */}
							<BlurReveal
								delay={0.2}
								className="mt-8 self-start min-[1280px]:mt-0 min-[1280px]:absolute min-[1280px]:left-0 min-[1280px]:bottom-0"
							>
								<div className="flex w-[15.45em] h-[5.175em] min-[1280px]:h-[15.45em] min-[1280px]:w-[5.175em] items-center justify-center">
									<div className="rotate-0 min-[1280px]:!-rotate-90">
										<div className="relative w-[15.45em] h-[5.175em] border-[0.095687em] border-shuttle-gray">
											<div
												className="absolute font-body text-[0.58em] text-shuttle-gray tracking-[0.33em] uppercase leading-[2.586em]"
												style={{ left: '1.1724em', top: '0.431em', width: '24.2931em' }}
											>
												<div className="flex items-baseline justify-between">
													<span>lifelong</span>
													<div className="h-px bg-shuttle-gray flex-1 mx-2 mb-0.75" />
													<span>medicine</span>
												</div>
												<p className="text-center">dambrose</p>
												<p className="text-center">orlando · fl</p>
											</div>
										</div>
									</div>
								</div>
							</BlurReveal>
						</div>

						<RevealImage
							className="relative w-full aspect-555/800 overflow-hidden bg-bison-hide order-1 lg:order-2"
							start="top 90%"
						>
							<Image
								src="/about-dr-michael/sec03/portrait.webp"
								alt="Reading glasses resting on a leather journal"
								fill
								quality={80}
								sizes="(min-width: 1024px) 555px, 100vw"
								className="object-cover"
							/>
						</RevealImage>
					</div>
				</Container>
			</section>

			<SectionDivider />

			<section className="w-full bg-ecru-white py-24 md:py-28">
				<Container>
					<div className="flex flex-col gap-12 lg:grid lg:grid-cols-[555fr_672fr] lg:gap-[7.4em] lg:items-stretch">
						<RevealImage
							className="relative w-full aspect-555/800 overflow-hidden bg-bison-hide"
							start="top 90%"
						>
							<Image
								src="/about-dr-michael/sec04/portrait.webp"
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
								<p className="font-body text-xs text-rangoon-green/80 uppercase tracking-tight leading-relaxed max-w-none min-[1280px]:max-w-[44ch]">
									Today, I lead a deliberately limited private practice built on the standard I have
									always held. Every physician at DAMBROSE remains present in each patient
									relationship &mdash; attending specialist appointments, coordinating care across
									disciplines, and serving as a constant medical companion through diagnosis,
									recovery, and prevention. Our role is not only to treat illness, but to guide
									decisions by filtering noise, anticipating risk, and helping patients move forward
									with clarity and confidence.
								</p>

								<div className="border border-gray-olive/50 px-8 py-6 md:px-10 md:py-8 max-w-[42ch]">
									<p className="font-display text-xl md:text-2xl text-gray-olive leading-snug text-center">
										DAMBROSE reflects his belief that medicine is not episodic care, but a lifelong
										journey.
									</p>
								</div>
							</BlurReveal>

							<BlurReveal delay={0.2} className="self-center mt-8 md:self-end md:-mt-6">
								<Image
									src="/lifelong-medicine/sec16-signature.svg"
									alt="Dambrose — here for every life chapter"
									width={396}
									height={152}
									className="w-74 md:w-60 h-auto"
									unoptimized
								/>
							</BlurReveal>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
