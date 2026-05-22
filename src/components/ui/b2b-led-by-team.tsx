import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function B2bLedByTeam() {
	return (
		<section className="relative w-full bg-ecru-white py-16 md:py-28 border-t border-black/10">
			{/* "08" label — absolutely centered (x-center, y-center) over the section */}
			<span
				aria-hidden="true"
				className="hidden md:block absolute inset-0 m-auto h-fit w-fit font-body text-xs text-olive-haze uppercase tracking-wide pointer-events-none"
			>
				08
			</span>
			<Container>
				<div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-16 md:gap-x-4 items-start">
					{/* Title — cols 1-7, row 1 */}
					<BlurReveal className="md:col-start-1 md:col-span-7 md:row-start-1">
						<h2 className="font-display text-3xl md:text-5xl text-corduroy leading-[1.05]">
							Led by one health team,
							<br />
							with <em className="font-display italic">one standard.</em>
						</h2>
					</BlurReveal>

					{/* Image — cols 2-5, row 2 (Figma x=155, w=443, square) */}
					<div className="md:col-start-2 md:col-span-4 md:row-start-2">
						<RevealImage className="relative w-full aspect-square overflow-hidden bg-bison-hide">
							<Image
								src="/features/hands.png"
								alt="Dr. D’Ambrose reviewing a leather journal on a desk"
								fill
								className="object-cover"
								sizes="(min-width: 768px) 443px, 100vw"
							/>
						</RevealImage>
					</div>

					{/* Right block — cols 8-11, row 2 (Figma: bottom aligned with image bottom) */}
					<div className="md:col-start-8 md:col-span-4 md:row-start-2 md:self-end flex flex-col gap-14">
						<BlurReveal delay={0.1} className="relative">
							<p className="font-body text-sm text-rangitoto uppercase leading-relaxed tracking-tight">
								Dambrose is founded and led by Dr. Michael J. D&rsquo;Ambrose, a board-certified
								physician with broad clinical experience across outpatient care, hospital medicine,
								emergency medicine, and obstetrics. His approach combines clinical rigor with
								long-term attention, bringing healthcare back to a model of personal accountability.
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

						<BlurReveal delay={0.2}>
							<Button href="/about" variant="dark" className="bg-regent-gray w-fit">
								Meet Dr. D&rsquo;Ambrose
							</Button>
						</BlurReveal>
					</div>
				</div>
			</Container>
		</section>
	)
}
