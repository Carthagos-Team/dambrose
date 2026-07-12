import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function B2bLedByTeam() {
	return (
		<section className="w-full bg-ecru-white py-16 md:py-28">
			<Container>
				<div className="flex flex-col gap-y-10 md:gap-y-16">
					{/* Title */}
					<BlurReveal>
						<h2 className="font-display text-3xl md:text-5xl text-corduroy leading-[1.05] md:whitespace-nowrap">
							Led by one health team, with <em className="font-display italic">one standard.</em>
						</h2>
					</BlurReveal>

					{/* Image + right block — bottom-aligned, positioned by % to match Figma (node 4299-130) */}
					<div className="flex flex-col gap-y-10 md:flex-row md:items-end md:gap-0">
						{/* Image — Figma x=155 w=443 → 11.7%–45.1% */}
						<div className="md:ml-[11.7%] md:w-[33.4%]">
							<RevealImage className="relative w-full aspect-square overflow-hidden bg-bison-hide">
								<Image
									src="/b2b/sec08/photo-standard.webp"
									alt="Brown leather armchair in sunlight with window shadow patterns on a green wall"
									fill
									className="object-cover"
									quality={90}
									sizes="(min-width: 768px) 443px, 100vw"
								/>
							</RevealImage>
						</div>

						{/* Right block — Figma x=730 w=563 → 55.1%–97.5%, bottom-aligned with image */}
						<div className="md:ml-[10%] md:w-[42.5%] flex flex-col gap-14">
							{/* Row: "05" gutter + body (Figma: 05 12.3% · gap 12.6% · text 75.1%) */}
							<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-0">
								<span className="hidden md:block md:w-[12.3%] shrink-0 font-body text-xs text-olive-haze uppercase leading-[1.3] opacity-60">
									05
								</span>
								<BlurReveal delay={0.1} className="relative w-full md:w-[75.1%]">
									<p className="font-body text-sm text-rangitoto/80 uppercase leading-relaxed tracking-tight">
										Dambrose is founded and led by Dr. Michael J. D&rsquo;Ambrose, a board-certified
										physician with broad clinical experience across outpatient care, hospital
										medicine, and emergency medicine. His approach combines clinical
										rigor with long-term attention, bringing healthcare back to a model of personal
										accountability.
									</p>
									<Image
										src="/marks/dambrose.svg"
										alt=""
										width={183}
										height={39}
										className="absolute right-0 -bottom-12 w-36 md:w-46 h-auto"
										aria-hidden="true"
									/>
								</BlurReveal>
							</div>

							<BlurReveal delay={0.2} className="flex md:ml-auto md:w-[75.1%]">
								<Button href="/about" variant="dark" className="bg-regent-gray w-fit">
									Meet Dr. D&rsquo;Ambrose
								</Button>
							</BlurReveal>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
