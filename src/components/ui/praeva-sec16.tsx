import Image from 'next/image'
import { Fragment } from 'react'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 16 — /praeva — Figma node 3807:6100
 * "THE ADVANTAGES OF THINKING AHEAD." — full-bleed 2-col layout.
 * Left: eye image (centred) + heading (right-aligned) + portrait (full-width).
 * Right: 4 feature items with decorative icon + separator lines.
 */

const FEATURES = [
	{
		title: 'Foresight over reaction',
		description:
			"The assurance of being understood at such depth that problems are prevented — or addressed before they take hold.",
	},
	{
		title: 'A personalized path to longevity',
		description:
			'A health story that builds over time. Each evaluation, each check-in, each result becomes part of a picture that grows more detailed and more valuable.',
	},
	{
		title: 'Continuity that ensures peace of mind',
		description:
			'The mental load of managing your own health — tracking, remembering, following up — is coordinated by a team that knows you and your routine.',
	},
	{
		title: 'Expertise you can trust',
		description:
			'Care led by a team specializing in staying ahead, with the clinical depth to interpret what advanced diagnostics reveal, and the judgment to act on it.',
	},
]

export function PraevaSec16() {
	return (
		<section className="w-full bg-[#ffffe4] flex flex-col min-[1440px]:flex-row min-[1440px]:items-stretch pb-17">
			{/* ── LEFT column: 691px — eye + heading + portrait ── */}
			<div className="min-[1440px]:w-[35.54em] min-[1440px]:shrink-0 overflow-hidden">
				<div className="flex flex-col items-start gap-[3.29em] pt-[2.71em]">
					{/* Eye / iris — offset from left edge, portrait remains full-width */}
					<RevealImage
						className="relative w-[13.12em] h-[13.17em] overflow-hidden shrink-0 ml-12"
						start="top 95%"
					>
						<Image
							src="/praeva/sec05/square.webp"
							alt="Close-up of a human iris — the precision of advanced diagnostics"
							fill
							className="object-cover"
							sizes="(max-width: 1439px) 100vw, 35.54em"
						/>
					</RevealImage>

					{/* Heading + portrait — right-aligned on desktop */}
					<div className="flex flex-col gap-[3.29em] min-[1440px]:gap-16 items-start min-[1440px]:items-end w-full">
						<BlurReveal className="px-5 min-[1440px]:px-0 w-full min-[1440px]:w-auto">
							<h2 className="font-display text-[2.57em] leading-none tracking-[0.03125em] text-[#282119] uppercase min-[1440px]:w-[9.3152em] min-[1440px]:text-right">
								The advantages of thinking ahead.
							</h2>
						</BlurReveal>

						<RevealImage
							className="relative w-full h-[20.32em] overflow-hidden shrink-0"
							delay={0.1}
						>
							<Image
								src="/praeva/sec05/large.webp"
								alt="Man with a confident expression — the reassurance of continuous PRAEVA care"
								fill
								className="object-cover object-top"
								sizes="(max-width: 1439px) 100vw, 35.54em"
							/>
						</RevealImage>
					</div>
				</div>
			</div>

			{/* ── RIGHT column: 749px — decorative overlay + feature list ── */}
			<div className="relative flex-1 bg-[#ffffe4]">
				{/* Small decorative image — overlaps left column border on desktop */}
				<div className="hidden min-[1440px]:block absolute left-[-4.68em] top-[-2.31em] w-[9.31em] h-[6.22em] z-10 overflow-hidden">
					<Image src="/praeva/sec05/small.webp" alt="" fill className="object-cover" />
				</div>

				{/* Feature list */}
				<div className="flex flex-col gap-[2.47em] px-5 md:px-10 min-[1440px]:px-[2.06em] py-[5.77em]">
					{FEATURES.map((feature, i) => (
						<Fragment key={feature.title}>
							<BlurReveal delay={i * 0.09}>
								<div className="flex items-start gap-[0.41em]">
									{/* Icon — wide left container creates visual mid-column offset on desktop */}
									<div className="w-8 min-[1440px]:w-[12.17em] shrink-0 pt-1">
										<Image
											src="/praeva/sec16-icon.svg"
											alt=""
											width={27}
											height={30}
											className="w-[1.36em] h-[1.54em]"
										/>
									</div>

									{/* Title + description */}
									<div className="flex flex-col gap-[0.41em] flex-1 min-w-0">
										<p className="font-display italic text-[1.34em] leading-[1.27] text-[#282119] capitalize">
											{feature.title}
										</p>
										<p className="font-ui text-[0.72em] leading-[1.4] tracking-[-0.029em] text-[#282119]/80">
											{feature.description}
										</p>
									</div>
								</div>
							</BlurReveal>

							{i < FEATURES.length - 1 && <div className="h-px bg-[#acaca5]" />}
						</Fragment>
					))}
				</div>
			</div>
		</section>
	)
}
