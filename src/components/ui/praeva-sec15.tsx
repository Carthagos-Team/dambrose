import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 15 — /praeva — Figma node 3782:6036
 * "HOW IT WORKS" — gradient bg, 3-step grid.
 * Desktop: one continuous horizontal line at top-[2.68em] spans all columns,
 * vertical dividers (border-r) connect downward from it.
 * Content starts at pt-[9.74em] within each column (189.5px in Figma).
 */

const STEPS = [
	{
		src: '/praeva/sec15/application.webp',
		alt: 'Person in formal attire — the application process for PRAEVA membership',
		pos: 'object-[center_72%]',
		label: 'Application',
		description:
			'Prospective members apply through a selective process to ensure the practice is the right fit for both.',
		indent: false,
	},
	{
		src: '/praeva/sec15/strategy-poppies-2.webp',
		alt: 'Red poppies in warm sunlight among tall grasses',
		label: 'Strategy',
		description:
			'Once accepted, a comprehensive assessment maps health history, genetic context, lifestyle, and risk — building the foundation for a strategy designed not to treat illness, but to prevent it.',
		indent: true,
	},
	{
		src: '/praeva/sec15/ongoing-care-fern.webp',
		alt: 'Young fern frond unfurling in soft light against a dark background',
		label: 'Ongoing Care',
		description:
			'Care unfolds over time through continuous medical oversight, regular evaluations, and prompt adjustments as health and life evolve.',
		indent: true,
	},
]

export function PraevaSec15() {
	return (
		<section className="w-full bg-gradient-to-t from-[#272018] from-[3%] via-[#545c63] via-[50%] to-[#dedbbc]">
			<Container className="py-[5.77em] flex flex-col gap-[5.77em]">
				{/* Header row */}
				<div className="flex items-end justify-between gap-4">
					<BlurReveal>
						<h2 className="font-display text-[2.57em] leading-none tracking-[0.025em] text-[#ffffe4] uppercase">
							How it works
						</h2>
					</BlurReveal>
					<BlurReveal delay={0.1}>
						<Button size="sm" className="bg-[#ffffe4] text-[#282119] shrink-0">
							Inquiry
						</Button>
					</BlurReveal>
				</div>

				{/* ── Mobile / tablet — stacked ── */}
				<div className="flex flex-col gap-12 min-[1440px]:hidden">
					{STEPS.map((step, i) => (
						<div key={step.label} className="flex flex-col gap-6">
							<div className="w-full h-px bg-[rgba(185,189,192,0.2)]" />
							<RevealImage className="relative self-stretch h-40 overflow-hidden" delay={i * 0.07}>
								<Image
									src={step.src}
									alt={step.alt}
									fill
									className={`object-cover ${step.pos ?? ''}`}
									sizes="100vw"
								/>
							</RevealImage>
							<BlurReveal delay={i * 0.07 + 0.1}>
								<p className="font-display italic text-[1.13em] leading-none tracking-[0.125em] text-[#ffffe4] uppercase">
									{step.label}
								</p>
							</BlurReveal>
							<BlurReveal delay={i * 0.07 + 0.15}>
								<p className="font-ui text-[0.72em] leading-[1.4] tracking-[-0.029em] text-[#ffffe4]/80">
									{step.description}
								</p>
							</BlurReveal>
						</div>
					))}
				</div>

				{/* ── Desktop (≥ 1440px) — 3-column grid ── */}
				<div className="hidden min-[1440px]:block relative">
					{/* Single continuous horizontal line — all 3 columns share this */}
					<div className="absolute top-[2.68em] left-0 right-0 h-[0.05em] bg-[rgba(185,189,192,0.2)] pointer-events-none" />

					<div className="grid grid-cols-3">
						{STEPS.map((step, i) => (
							<div
								key={step.label}
								className={[
									'flex flex-col pt-[9.74em]',
									i === 0 ? 'pr-[2.06em]' : '',
									i === 1 ? 'px-[2.06em]' : '',
									i === 2 ? 'pl-[2.06em]' : '',
									i < STEPS.length - 1 ? 'border-r border-[rgba(185,189,192,0.2)]' : '',
								].join(' ')}
							>
								<RevealImage
									className="relative w-full h-[8.23em] overflow-hidden"
									delay={i * 0.08}
								>
									<Image
										src={step.src}
										alt={step.alt}
										fill
										className={`object-cover ${step.pos ?? ''}`}
										sizes="33vw"
									/>
								</RevealImage>

								<div className="flex flex-col gap-6 mt-[2.47em]">
									<BlurReveal delay={i * 0.08 + 0.1}>
										<p className="font-display italic text-[1.13em] leading-none tracking-[0.125em] text-[#ffffe4] uppercase">
											{step.label}
										</p>
									</BlurReveal>
									<BlurReveal delay={i * 0.08 + 0.15}>
										<p className="font-ui text-[0.72em] leading-[1.4] tracking-[-0.029em] text-[#ffffe4]/80">
											{step.description}
										</p>
									</BlurReveal>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
