import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { RevealImage } from '@/components/ui/reveal-image'

const IMAGES = [
	{
		src: '/alma/sec01/image-1.webp',
		alt: '',
		// 532×259 — flex basis ratio 532 (desktop). Mobile: full-width stacked.
		basis: 'md:flex-[532]',
		overlay: 'bg-[rgba(66,61,35,0.22)]',
	},
	{
		src: '/alma/sec01/image-3.webp',
		alt: '',
		// 296×259
		basis: 'md:flex-[296]',
		overlay: 'bg-[rgba(66,61,35,0.33)]',
	},
	{
		src: '/alma/sec01/image-2.webp',
		alt: '',
		// 532×259
		basis: 'md:flex-[532]',
		overlay: 'bg-[rgba(66,61,35,0.33)]',
	},
] as const

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

			{/* ── 3-image strip with gradient overlay ─────────────────── */}
			<div className="relative w-full">
				<div
					aria-hidden="true"
					className="hidden md:block absolute inset-x-0 bottom-0 h-53 bg-[linear-gradient(180deg,#DEDBBC_0%,#B4A389_50%,#808D95_90%)]"
				/>
				<div className="relative flex flex-col md:flex-row w-full px-5 md:px-10 gap-0">
					{IMAGES.map((img, index) => (
						<RevealImage
							key={img.src}
							className={`relative overflow-hidden aspect-335/259 md:aspect-532/259 flex-none ${img.basis}`}
							delay={index * 0.15}
						>
							<Image
								src={img.src}
								alt={img.alt}
								fill
								sizes="(min-width: 1024px) 35em, 100vw"
								className="object-cover"
							/>
							<div aria-hidden="true" className={`absolute inset-0 md:hidden ${img.overlay}`} />
						</RevealImage>
					))}
				</div>
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
