import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { RevealImage } from '@/components/ui/reveal-image'

const IMAGES = [
	{
		src: '/alma/sec01/image-1.webp',
		alt: '',
		// 532×259 — flex basis ratio 532
		basis: 'flex-[532]',
	},
	{
		src: '/alma/sec01/image-3.webp',
		alt: '',
		// 296×259
		basis: 'flex-[296]',
	},
	{
		src: '/alma/sec01/image-2.webp',
		alt: '',
		// 532×259
		basis: 'flex-[532]',
	},
] as const

export function CoreMedicine() {
	return (
		<section className="w-full bg-half-and-half py-28 flex flex-col gap-22">
			{/* ── Headline ────────────────────────────────────────────── */}
			<BlurReveal>
				<h2
					className="font-futura text-5xl text-center uppercase max-w-3xl mx-auto px-5"
					style={{ color: '#626F77', lineHeight: '100%', letterSpacing: '0.03125rem' }}
				>
					Core medicine without interruption.
				</h2>
			</BlurReveal>

			{/* ── 3-image strip with gradient overlay ─────────────────── */}
			<div className="relative w-full">
				<div
					aria-hidden="true"
					className="absolute inset-x-0 bottom-0 h-53 bg-[linear-gradient(180deg,#DEDBBC_0%,#B4A389_50%,#808D95_90%)]"
				/>
				<div className="relative flex w-full px-10 gap-0">
					{IMAGES.map((img, index) => (
						<RevealImage
							key={img.src}
							className={`relative aspect-532/259 overflow-hidden ${img.basis}`}
							delay={index * 0.15}
						>
							<Image
								src={img.src}
								alt={img.alt}
								fill
								sizes="(min-width: 1024px) 35em, 100vw"
								className="object-cover"
							/>
						</RevealImage>
					))}
				</div>
			</div>

			{/* ── Description paragraph ───────────────────────────────── */}
			<BlurReveal delay={0.1}>
				<p
					className="font-body text-xs md:text-sm uppercase leading-relaxed tracking-tight text-center max-w-[54.4167em] md:max-w-[46.6429em] mx-auto px-5"
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
				<div className="border border-shuttle-gray/30 px-6 py-8 flex flex-col items-center gap-9 text-center">
					<p
						className="font-futura uppercase text-center"
						style={{
							color: '#626F77',
							fontSize: '21.722px',
							lineHeight: '130%',
							letterSpacing: '0.217px',
						}}
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
