import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { RevealImage } from '@/components/ui/reveal-image'

export function CoreMedicine() {
	return (
		<section className="w-full bg-half-and-half py-16 md:py-28 flex flex-col gap-16 md:gap-22">
			{/* ── Headline ────────────────────────────────────────────── */}
			<BlurReveal>
				<h2
					className="font-futura text-[clamp(2rem,9vw,2.5rem)] md:text-5xl text-left md:text-center uppercase max-w-3xl mx-auto px-5"
					style={{ color: '#626F77', lineHeight: '100%', letterSpacing: '0.03125rem' }}
				>
					Core medicine without interruption.
				</h2>
			</BlurReveal>

			{/* ── Editorial collage strip (Figma SEC 26 / 4868:832) ─────
			    Full-bleed gradient band crossing the middle; rock photo bleeding off
			    the LEFT edge (top-aligned), clouds photo bleeding off the RIGHT edge
			    staggered down. Band and clouds intentionally extend ~2-3.5em below the
			    strip into the gap. Edge-anchored em values (Figma_px ÷ 16) keep the
			    composition fluid at any width; below md the whole collage scales as a
			    proportional miniature via vw font-size (2.083vw = 16px @768). */}
			<div className="relative w-full h-[16.1875em] overflow-x-clip max-md:[font-size:2.083vw]">
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-[5em] h-[13.25em] bg-[linear-gradient(180deg,#DEDBBC_0%,#B4A389_50%,#808D95_90%)]"
				/>
				<RevealImage className="absolute left-[-10.0625em] top-0 w-[33.25em] h-[16.1875em] overflow-hidden">
					<Image
						src="/alma/sec01/rock-arch.webp"
						alt=""
						fill
						sizes="(min-width: 768px) 34em, 70vw"
						quality={95}
						className="object-cover"
					/>
					<div aria-hidden="true" className="absolute inset-0 bg-[rgba(66,61,35,0.22)]" />
				</RevealImage>
				<RevealImage
					className="absolute right-[-22.1875em] top-[3.5em] w-[33.25em] h-[16.1875em] overflow-hidden"
					delay={0.15}
				>
					<Image
						src="/alma/sec01/clouds-peak.webp"
						alt=""
						fill
						sizes="(min-width: 768px) 34em, 70vw"
						quality={95}
						className="object-cover"
					/>
					<div aria-hidden="true" className="absolute inset-0 bg-[rgba(66,61,35,0.23)]" />
				</RevealImage>
			</div>

			{/* ── Description paragraph ───────────────────────────────── */}
			<BlurReveal delay={0.1}>
				<p
					className="font-body text-sm uppercase leading-relaxed tracking-tight text-left md:text-center max-w-[54.4167em] md:max-w-[46.6429em] mx-auto px-5"
					style={{ color: 'rgba(40, 33, 25, 0.8)' }}
				>
					Sometimes nothing is wrong, but you want reassurance. Other times, your condition changes
					and you don't want to start over with different doctors. ALMA exists for those moments and
					everything in between. It's the confidence of having a dedicated health team who already
					knows your story, so care remains continuous and personal.
				</p>
			</BlurReveal>

			{/* ── Bottom bordered emphasis ────────────────────────────── */}
			<BlurReveal delay={0.15} className="mx-auto px-5 w-full max-w-220.75">
				<div className="border border-blue-smoke md:border-shuttle-gray/30 px-5 py-6 md:px-6 md:py-8 flex flex-col items-center gap-9 text-center">
					<p
						className="font-futura uppercase text-center text-base md:text-[21.722px] leading-[1.3] tracking-[0.01em]"
						style={{ color: '#626F77' }}
					>
						Whether days pass calmly or health demands attention, ALMA stays present, making
						medicine feel steady rather than episodic.
					</p>
					<p className="font-accent text-[0.6875em] text-shuttle-gray uppercase tracking-[0.15em]">
						By Michael J. D'Ambrose
					</p>
				</div>
			</BlurReveal>
		</section>
	)
}
