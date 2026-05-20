import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function SteadyHand() {
	return (
		<section className="w-full bg-ecru-white py-20 md:py-28 border-t border-black/10">
			<Container>
				<div className="flex flex-col gap-12 md:gap-24">
					{/* Heading */}
					<BlurReveal>
						<h2 className="font-display text-3xl md:text-[3.125rem] text-corduroy text-center leading-tight">
							Medicine guided by <em>a steady hand.</em>
							<br />
							This is the DAMBROSE method.
						</h2>
					</BlurReveal>

					{/* Two-column: image left, text+button right */}
					<div className="flex flex-col md:flex-row md:justify-between md:items-start">
						{/* Left: Image */}
						<RevealImage className="relative w-full md:w-[34%] aspect-463/368 overflow-hidden">
							<Image src="/features/elder.png" alt="" fill className="object-cover" />
						</RevealImage>

						{/* Right: Text + signature + button */}
						<div className="flex flex-col gap-6 w-full md:w-[31%] mt-10 md:mt-32">
							{/* Paragraph with Dambrose signature overlapping last line */}
							<BlurReveal delay={0.15} className="relative pb-6">
								<p
									className="font-body text-sm uppercase tracking-wider text-rangitoto/80 leading-relaxed"
									style={{ letterSpacing: '-0.04em' }}
								>
									Founded and led by Dr. Michael J. D&apos;Ambrose, DAMBROSE was created to bring
									healthcare back to its most human form. By restoring the connection between doctor
									and patient, the practice inspires closeness and trust, ensuring you never
									navigate your health alone.
								</p>
								<Image
									src="/dambrose.svg"
									alt="Dambrose"
									width={183}
									height={39}
									className="absolute bottom-0 right-0 h-9 md:h-10 w-auto"
								/>
							</BlurReveal>

							<BlurReveal delay={0.25}>
								<Button href="/about" variant="dark" className="bg-regent-gray w-fit">
									About DAMBROSE
								</Button>
							</BlurReveal>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
