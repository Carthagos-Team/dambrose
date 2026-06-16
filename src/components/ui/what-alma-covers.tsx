import Image from 'next/image'
import { Button } from '@/components/ui/button'

type Card = {
	number: string
	title: string
	/** Header (number + title) color. Figma: gradient cards = Zeus dark, image cards = light. */
	headerColor: string
	description: string
	/** Optional Figma-spec max-width for the description (desktop only). */
	descMaxW?: string
} & ({ kind: 'gradient' } | { kind: 'image'; src: string; overlay: string })

/** Card gradient — top light (#DEDBBC) → bottom blue-grey (#808D95). Matches Figma node 4238:139. */
const ALMA_GRADIENT = 'bg-[linear-gradient(180deg,#DEDBBC_0%,#B4A389_50%,#808D95_90%)]'

const ZEUS = 'text-[#282119]' // Alma / Zeus

const CARDS: Card[] = [
	{
		kind: 'gradient',
		number: '01.',
		title: 'Care',
		headerColor: ZEUS,
		description:
			'From acute episodes to chronic conditions, your team responds with precision and familiarity.',
		descMaxW: 'md:max-w-[13.65rem]',
	},
	{
		kind: 'image',
		src: '/alma/sec02/card-1.webp',
		overlay: 'bg-[rgba(0,0,0,0.40)]',
		number: '02.',
		title: 'Presence',
		headerColor: 'text-half-and-half',
		description:
			'Ongoing attention to the patterns and changes that shape your health—not only when something goes wrong.',
	},
	{
		kind: 'gradient',
		number: '03.',
		title: 'Coordination',
		headerColor: ZEUS,
		description:
			'Physician-led coordination of specialist care, ensuring alignment and continuity across appointments.',
	},
	{
		kind: 'image',
		src: '/alma/sec02/card-2.webp',
		overlay: 'bg-[linear-gradient(180deg,rgba(102,102,102,0.30)_0%,rgba(0,0,0,0.30)_100%)]',
		number: '04.',
		title: 'Guidance',
		headerColor: 'text-half-and-half',
		description:
			'Ongoing medical guidance that carries patient history forward, integrating care across life stages.',
		descMaxW: 'md:max-w-[14.55rem]',
	},
]

export function WhatAlmaCovers() {
	return (
		<section className="relative w-full overflow-hidden bg-half-and-half px-10 pt-28 pb-8">
			{/* ── Decorative gradient panels — bleed off the frame, behind cards.
			    Positions ported from Figma node 4238:131 (1440-wide frame), ÷20 → em. ── */}
			<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
				{/* Big right field (4238:132): top light → bottom blue-grey.
				    Left edge aligns with card 3 (grid center + half-gap); bleeds to the right edge. */}
				<div className="absolute top-0 left-[calc(50%+0.625em)] right-0 h-[62.8em] bg-[linear-gradient(180deg,#DEDBBC_0%,#B4A389_50%,#808D95_90%)]" />
				{/* Narrow right column (4238:133): blue-grey top creates the panel above card 04 */}
				<div className="absolute top-[11.05em] right-[-13.8em] h-209 w-[28.6em] bg-[linear-gradient(0deg,#DEDBBC_10%,#B4A389_50%,#808D95_90%)]" />
				{/* Top-left bar (4238:134): light end visible at the corner */}
				<div className="absolute top-0 left-[-20.8em] h-33 w-[31.35em] bg-[linear-gradient(90deg,#808D95_10%,#B4A389_50%,#DEDBBC_90%)]" />
			</div>

			<div className="relative mx-auto max-w-340">
				{/* ── Title (4238:135): Futura Book 50px, Nevada #626F77, "COVERS" indented.
				    Indents in REM (not em) — em would resolve against the h2's ~50px font. ── */}
				<h2 className="font-futura text-4xl md:text-5xl uppercase leading-none tracking-wide text-[#626F77] md:ml-[10.35rem]">
					What Alma
					<span className="block md:ml-[10.25rem]">covers</span>
				</h2>

				{/* ── 4 cards row (4238:138): 4 × 325/418, gap 20px ── */}
				<div className="mt-22 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{CARDS.map((c) => (
						<article
							key={c.number}
							className={`relative aspect-325/418 overflow-hidden flex p-5 ${c.kind === 'gradient' ? ALMA_GRADIENT : ''}`}
						>
							{c.kind === 'image' && (
								<>
									<Image
										src={c.src}
										alt=""
										fill
										sizes="(min-width: 1024px) 20em, 100vw"
										className="object-cover"
									/>
									<div aria-hidden="true" className={`absolute inset-0 ${c.overlay}`} />
								</>
							)}

							<div className="relative flex h-full w-full flex-col justify-between">
								<div className={`flex items-start justify-between gap-3 uppercase ${c.headerColor}`}>
									<span className="font-body text-xs leading-[1.3] opacity-60">{c.number}</span>
									<h3 className="font-futura text-base text-right leading-none -tracking-wide">
										{c.title}
									</h3>
								</div>

								<p
									className={`font-body text-xs uppercase leading-relaxed tracking-tight text-half-and-half opacity-80 ${c.descMaxW ?? ''}`}
								>
									{c.description}
								</p>
							</div>
						</article>
					))}
				</div>

				{/* ── Inquiry button (4238:167): bottom-right, over the gradient panel ── */}
				<div className="mt-10 flex justify-start">
					<Button href="/membership" variant="shuttle" size="sm">
						Inquiry about membership
					</Button>
				</div>
			</div>
		</section>
	)
}
