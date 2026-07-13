import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 17 — /lifelong-medicine — Figma node 3694:126
 * Bento grid: header + 2 rows (5-col layout at lg+)
 * Mobile: single-column stack. Desktop: 5-col bento.
 */

const ROW1_CARDS = [
	{
		title: 'Early clarity',
		body: 'Questions are addressed sooner, before uncertainty turns into urgency.',
	},
	{
		title: 'Calm guidance',
		body: 'Medical decisions are made with context, time, and familiarity.',
	},
	{
		title: 'Reduced anxiety',
		body: 'Fear and uncertainty are replaced by reassurance and confidence.',
	},
	{
		title: 'Care that adapts',
		body: 'As life evolves, care adjusts without interruption or reset.',
	},
]

const ROW2_CARDS = [
	{
		title: 'Full accountability',
		body: 'A dedicated health team carries responsibility across years, not visits.',
	},
	{
		title: 'Compound knowledge',
		body: 'Medical understanding deepens as history is carried forward.',
	},
	{
		title: 'Continuity of trust',
		body: 'Every interaction builds on the last — nothing is lost, nothing repeated.',
	},
]

function TextCard({
	title,
	body,
	delay = 0,
	tall = false,
}: {
	title: string
	body: string
	delay?: number
	tall?: boolean
}) {
	return (
		<BlurReveal
			delay={delay}
			className={`bg-[#ffffe4] flex flex-col justify-between w-full px-[1.03em] py-7 ${tall ? 'lg:h-[20.2em]' : 'lg:h-[18.4em]'}`}
		>
			<h3 className="font-display italic text-[1.235em] leading-tight tracking-[0.02em] text-corduroy">
				{title}
			</h3>
			<p className="font-body text-xs uppercase leading-[1.4] tracking-tight text-rangoon-green/80 mt-6 lg:mt-0">
				{body}
			</p>
		</BlurReveal>
	)
}

export function LifelongMedicineSec17() {
	return (
		<section className="w-full bg-ecru-white py-12 md:py-23">
			<Container>
				<div className="flex flex-col gap-10 md:gap-[4.1em]">
					{/* ── HEADER ──────────────────────────────────────── */}
					<BlurReveal className="flex flex-col items-center gap-[1.65em] mx-auto max-w-[33.3em]">
						<Image
							src="/lifelong-medicine/sec17-badge.svg"
							alt=""
							width={128}
							height={40}
							className="hidden md:block w-[6.6em] h-auto"
							aria-hidden="true"
							unoptimized
						/>
						<h2 className="font-display text-[2.57em] leading-none tracking-wide text-gray-olive text-center">
							The lifelong journey.
						</h2>
					</BlurReveal>

					{/* ── GRID ────────────────────────────────────────── */}
					<div className="flex flex-col gap-[0.82em]">
						{/* ROW 1 — mobile: 1-col stack / desktop: 5 equal columns */}
						<div className="grid grid-cols-1 lg:grid-cols-5 gap-[0.82em]">
							{ROW1_CARDS.map((card, i) => (
								<TextCard key={card.title} {...card} delay={i * 0.06} />
							))}
							{/* Image card */}
							<RevealImage
								delay={0.24}
								className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[18.4em] overflow-hidden bg-bison-hide"
							>
								<Image
									src="/lifelong-medicine/sec06/image-small.webp"
									alt="Interior room — the serene environment of DAMBROSE care"
									fill
									className="object-cover object-center"
									sizes="(max-width: 1024px) 100vw, 20vw"
								/>
							</RevealImage>
						</div>

						{/* ROW 2 — mobile: 1-col stack / desktop: wide image (col-span-2) + 3 cards */}
						<div className="grid grid-cols-1 lg:grid-cols-5 gap-[0.82em]">
							{/* Wide image */}
							<RevealImage
								delay={0.05}
								className="order-last lg:order-none relative w-full aspect-[16/9] lg:aspect-auto lg:col-span-2 lg:h-[20.2em] overflow-hidden bg-bison-hide"
							>
								<Image
									src="/lifelong-medicine/sec17/lounge-chair.webp"
									alt="White chaise lounge by open French doors with sunlight and garden view"
									fill
									className="object-cover object-[50%_58%]"
									quality={90}
									sizes="(max-width: 1024px) 100vw, 40vw"
								/>
							</RevealImage>
							{/* 3 text cards */}
							{ROW2_CARDS.map((card, i) => (
								<TextCard key={card.title} {...card} delay={(i + 1) * 0.06} tall />
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
