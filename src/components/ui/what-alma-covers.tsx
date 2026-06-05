import Image from 'next/image'

type Card = {
	number: string
	title: string
	description: string
} & ({ kind: 'gradient' } | { kind: 'image'; src: string })

const ALMA_GRADIENT = 'bg-[linear-gradient(180deg,#808D95_10%,#B4A389_50%,#DEDBBC_100%)]'

const CARDS: Card[] = [
	{
		kind: 'gradient',
		number: '01.',
		title: 'Care',
		description:
			'From acute episodes to chronic conditions, your team responds with precision and familiarity.',
	},
	{
		kind: 'image',
		src: '/alma/sec02/card-1.webp',
		number: '02.',
		title: 'Presence',
		description:
			'Ongoing attention to the patterns and changes that shape your health—not only when something goes wrong.',
	},
	{
		kind: 'gradient',
		number: '03.',
		title: 'Coordination',
		description:
			'Physician-led coordination of specialist care, ensuring alignment and continuity across appointments.',
	},
	{
		kind: 'image',
		src: '/alma/sec02/card-2.webp',
		number: '04.',
		title: 'Guidance',
		description:
			'Ongoing medical guidance that carries patient history forward, integrating care across life stages.',
	},
]

export function WhatAlmaCovers() {
	return (
		<section className="relative w-full bg-half-and-half py-28 px-10 overflow-hidden">
			{/* ── Decorative gradient panels (bleed behind cards) ─────── */}
			<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
				<div className="absolute top-0 left-0 w-50 h-70 bg-[linear-gradient(180deg,#DEDBBC_0%,#B4A389_50%,#808D95_90%)]" />
				<div className="absolute top-0 right-0 w-72 h-110 bg-[linear-gradient(180deg,#DEDBBC_0%,#B4A389_50%,#808D95_90%)]" />
				<div className="absolute bottom-0 right-0 w-90 h-60 bg-[linear-gradient(180deg,#DEDBBC_0%,#B4A389_50%,#808D95_90%)]" />
			</div>

			<div className="relative mx-auto max-w-340">
				{/* ── Title ──────────────────────────────────────────── */}
				<h2 className="font-display text-4xl md:text-5xl text-shuttle-gray uppercase leading-none tracking-wide max-w-md">
					What Alma
					<br />
					covers
				</h2>

				{/* ── 4 cards row ────────────────────────────────────── */}
				<div className="mt-22 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{CARDS.map((c) => {
						const textColor =
							c.kind === 'image' ? 'text-half-and-half' : 'text-rangoon-green'
						return (
							<article
								key={c.number}
								className={`relative aspect-325/418 overflow-hidden flex flex-col justify-between p-5 ${c.kind === 'gradient' ? ALMA_GRADIENT : ''}`}
							>
								{c.kind === 'image' && (
									<Image
										src={c.src}
										alt=""
										fill
										sizes="(min-width: 1024px) 20em, 100vw"
										className="object-cover"
									/>
								)}

								<div className="relative flex items-baseline justify-between gap-3">
									<span className={`font-body text-xs ${textColor} tracking-tight`}>
										{c.number}
									</span>
									<h3 className={`font-display text-base uppercase ${textColor} tracking-tight`}>
										{c.title}
									</h3>
								</div>

								<p
									className={`relative font-body text-xs uppercase leading-relaxed tracking-tight ${textColor}`}
								>
									{c.description}
								</p>
							</article>
						)
					})}
				</div>
			</div>
		</section>
	)
}
