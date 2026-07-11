import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'

type Card = {
	title: string
	/** Header title color. Figma: gradient cards = Zeus dark, image cards = light. */
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
		title: 'Care',
		headerColor: ZEUS,
		description:
			'From acute episodes to chronic conditions, your team responds with precision and familiarity.',
		descMaxW: 'md:max-w-[13.65rem]',
	},
	{
		kind: 'image',
		src: '/alma/sec02/card-1.webp',
		overlay: 'bg-[rgba(0,0,0,0.56)] md:bg-[rgba(0,0,0,0.40)]',
		title: 'Presence',
		headerColor: 'text-half-and-half',
		description:
			'Ongoing attention to the patterns and changes that shape your health—not only when something goes wrong.',
	},
	{
		kind: 'gradient',
		title: 'Coordination',
		headerColor: ZEUS,
		description:
			'Physician-led coordination of specialist care, ensuring alignment and continuity across appointments.',
	},
	{
		kind: 'image',
		src: '/alma/sec02/card-2.webp',
		overlay:
			'bg-[linear-gradient(180deg,rgba(102,102,102,0.56)_0%,rgba(0,0,0,0.56)_100%)] md:bg-[linear-gradient(180deg,rgba(102,102,102,0.30)_0%,rgba(0,0,0,0.30)_100%)]',
		title: 'Guidance',
		headerColor: 'text-half-and-half',
		description:
			'Ongoing medical guidance that carries patient history forward, integrating care across life stages.',
		descMaxW: 'md:max-w-[14.55rem]',
	},
]

export function WhatAlmaCovers() {
	return (
		<section className="relative w-full overflow-hidden bg-half-and-half px-5 md:px-10 pt-16 md:pt-28 pb-16 md:pb-8">
			{/* ── Decorative gradient panels — bleed off the frame, behind cards.
			    Positions ported from Figma node 4238:131 (1440-wide frame), ÷20 → em. ── */}
			<div aria-hidden="true" className="hidden md:block absolute inset-0 pointer-events-none">
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
				<BlurReveal>
					<h2 className="font-futura text-[clamp(2rem,9vw,2.5rem)] md:text-5xl uppercase leading-[1.1] md:leading-none tracking-wide text-[#626F77] md:ml-[10.35rem]">
						What Alma
						<span className="block md:ml-[10.25rem]">covers</span>
					</h2>
				</BlurReveal>

				{/* ── 4 cards row (4238:138): 4 × 325/418, gap 20px ── */}
				<div className="mt-16 md:mt-22 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5">
					{CARDS.map((c, index) => (
						<BlurReveal
							as="article"
							key={c.title}
							className={`relative aspect-325/418 lg:aspect-auto lg:h-[26.125rem] overflow-hidden flex p-5 ${c.kind === 'gradient' ? ALMA_GRADIENT : ''}`}
							delay={index * 0.1}
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
								<h3
									className={`font-futura text-base uppercase text-left leading-none -tracking-wide ${c.headerColor}`}
								>
									{c.title}
								</h3>

								<p
									className={`font-body text-xs uppercase leading-relaxed tracking-tight text-half-and-half opacity-80 ${c.descMaxW ?? ''}`}
								>
									{c.description}
								</p>
							</div>
						</BlurReveal>
					))}
				</div>

				{/* ── Inquiry button (4238:167): bottom-right, over the gradient panel ── */}
				<BlurReveal delay={0.4} className="mt-16 md:mt-10 flex justify-start">
					{/* Mobile: full-width outline (Figma 4379:778) */}
					<Button
						href="/membership"
						variant="outline"
						size="sm"
						className="md:hidden w-full text-half-and-half"
					>
						<span className="opacity-60">Inquiry about membership</span>
					</Button>
					{/* Desktop: inalterado */}
					<Button href="/membership" variant="shuttle" size="sm" className="hidden md:inline-flex">
						Inquiry about membership
					</Button>
				</BlurReveal>
			</div>
		</section>
	)
}
