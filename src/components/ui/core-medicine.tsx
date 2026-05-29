import Image from 'next/image'

const IMAGES = [
	{
		src: '/images/sections/sec14-img-left.png',
		alt: '',
		// 532×259 — flex basis ratio 532
		basis: 'flex-[532]',
	},
	{
		src: '/images/sections/sec14-img-middle.png',
		alt: '',
		// 296×259
		basis: 'flex-[296]',
	},
	{
		src: '/images/sections/sec14-img-right.png',
		alt: '',
		// 532×259
		basis: 'flex-[532]',
	},
] as const

export function CoreMedicine() {
	return (
		<section className="w-full bg-half-and-half py-28 flex flex-col gap-22">
			{/* ── Headline ────────────────────────────────────────────── */}
			<h2 className="font-display text-4xl md:text-5xl text-shuttle-gray text-center leading-[1.05] uppercase max-w-3xl mx-auto px-5 tracking-wide">
				Core medicine without interruption.
			</h2>

			{/* ── 3-image strip with gradient overlay ─────────────────── */}
			<div className="relative w-full">
				<div
					aria-hidden="true"
					className="absolute inset-x-0 bottom-0 h-53 bg-[linear-gradient(180deg,#DEDBBC_0%,#B4A389_50%,#808D95_90%)]"
				/>
				<div className="relative flex w-full px-10 gap-0">
					{IMAGES.map((img) => (
						<div key={img.src} className={`relative aspect-532/259 overflow-hidden ${img.basis}`}>
							<Image
								src={img.src}
								alt={img.alt}
								fill
								sizes="(min-width: 1024px) 35em, 100vw"
								className="object-cover"
							/>
						</div>
					))}
				</div>
			</div>

			{/* ── Description paragraph ───────────────────────────────── */}
			<p className="font-body text-xs md:text-sm uppercase text-rangoon-green leading-relaxed tracking-tight text-center max-w-[40.8125em] mx-auto px-5">
				Sometimes nothing is wrong, but you want reassurance. Other times, your condition changes
				and you don't want to start over with different doctors. ALMA exists for those moments and
				everything in between. It's the confidence of having a dedicated health team who already
				knows your story, so care remains continuous and personal.
			</p>

			{/* ── Bottom bordered emphasis ────────────────────────────── */}
			<div className="mx-auto px-5 w-full max-w-[55.1875em]">
				<div className="border border-shuttle-gray/30 px-6 py-8 flex flex-col items-center gap-9 text-center">
					<p className="font-display text-xl md:text-2xl text-shuttle-gray uppercase leading-snug tracking-tight">
						Whether days pass calmly or health demands attention, ALMA stays present, making
						medicine feel steady rather than episodic.
					</p>
					<p className="font-body text-[0.6875rem] text-shuttle-gray uppercase tracking-[0.15em]">
						By Michael J. D'Ambrose
					</p>
				</div>
			</div>
		</section>
	)
}
