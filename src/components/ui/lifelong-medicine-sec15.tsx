import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 15 — /lifelong-medicine — Figma node 3646:525
 * Comparison: EPISODIC CARE (bordered light card) vs LIFELONG MEDICINE (dark gradient card)
 */

type FeatureRowProps = {
	icon: string
	iconAlt?: string
	text: string
	light?: boolean
}

function FeatureRow({ icon, iconAlt = '', text, light = false }: FeatureRowProps) {
	return (
		<div className="flex items-center gap-[1.2em]">
			<Image
				src={icon}
				alt={iconAlt}
				width={31}
				height={38}
				className="w-[1.55em] h-[1.9em] shrink-0"
				unoptimized
			/>
			<p
				className={`font-body text-xs uppercase leading-[1.4] tracking-[-0.04em] flex-1 ${
					light ? 'text-ecru-white/80' : 'text-rangoon-green/80'
				}`}
			>
				{text}
			</p>
		</div>
	)
}

export function LifelongMedicineSec15() {
	return (
		<section className="w-full bg-ecru-white py-12 md:py-[5.6em] overflow-hidden">
			<Container>
				<div className="flex flex-col gap-10 md:gap-20 items-center">
					{/* ── HEADING ─────────────────────────────────────── */}
					<BlurReveal>
						<h2 className="font-display text-[2.5em] leading-none tracking-[0.025em] text-gray-olive text-center">
							A complete medical framework.
						</h2>
					</BlurReveal>

					{/* ── CARDS ROW ───────────────────────────────────── */}
					<div className="flex flex-col gap-4 w-full md:flex-row md:items-end md:gap-[1.5em] max-w-[67.75em] mx-auto">
						{/* LEFT — Episodic Care */}
						<BlurReveal
							delay={0}
							className="flex-1 border-[0.052375em] border-heathered-gray flex flex-col p-6"
						>
							{/* Photo */}
							<RevealImage
								delay={0.05}
								className="relative w-full aspect-[4/3] md:aspect-470/289 overflow-hidden bg-bison-hide"
							>
								<Image
									src="/lifelong-medicine/sec15-episodic-dining.webp"
									alt="Marble table with bowl of oranges and woven chairs in sunlit dining space"
									fill
									className="object-cover object-center"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</RevealImage>

							{/* Content */}
							<div className="flex flex-col gap-[2.4em] pt-[1.2em]">
								<h3 className="font-display text-[1.8em] leading-none tracking-[0.01em] text-rangoon-green">
									EPISODIC CARE
								</h3>
								<div className="flex flex-col gap-[0.8em]">
									<FeatureRow
										icon="/lifelong-medicine/sec15-icon-dark.svg"
										text="Care begins when symptoms appear"
									/>
									<FeatureRow
										icon="/lifelong-medicine/sec15-icon-dark.svg"
										text="Health history is repeated, not carried"
									/>
									<FeatureRow
										icon="/lifelong-medicine/sec15-icon-dark.svg"
										text="Decisions are made in isolation"
									/>
									<FeatureRow
										icon="/lifelong-medicine/sec15-icon-dark.svg"
										text="Specialists act without shared context"
									/>
									<FeatureRow
										icon="/lifelong-medicine/sec15-icon-dark.svg"
										text="Treatment responds to urgency"
									/>
									<FeatureRow
										icon="/lifelong-medicine/sec15-icon-dark.svg"
										text="Responsibility ends with the visit"
									/>
								</div>
							</div>
						</BlurReveal>

						{/* RIGHT — Lifelong Medicine */}
						<BlurReveal
							delay={0.1}
							className="relative flex-1 bg-gradient-to-b from-[#1c1a08] from-[7%] via-[#728b8b] via-[60%] to-[#dedbbc] flex flex-col px-6 pt-6 pb-28"
						>
							{/* Photo */}
							<RevealImage
								delay={0.15}
								className="relative w-full aspect-[4/3] md:aspect-470/289 overflow-hidden"
							>
								<Image
									src="/lifelong-medicine/sec15-lifelong.jpg"
									alt="White flower against a blue sky — the clarity of lifelong medicine"
									fill
									className="object-cover object-center"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</RevealImage>

							{/* Content */}
							<div className="flex flex-col gap-[2.4em] pt-[1.2em]">
								<h3 className="font-display text-[1.8em] leading-none tracking-[0.01em] text-ecru-white">
									<em className="font-display italic">LIFELONG </em>MEDICINE
								</h3>
								<div className="flex flex-col gap-[0.8em]">
									<FeatureRow
										icon="/lifelong-medicine/sec15-icon-light.svg"
										text="Care begins with foresight"
									/>
									<FeatureRow
										icon="/lifelong-medicine/sec15-icon-light.svg"
										text="Health history informs every step"
									/>
									<FeatureRow
										icon="/lifelong-medicine/sec15-icon-light.svg"
										text="Decisions are guided by lived context"
									/>
									<FeatureRow
										icon="/lifelong-medicine/sec15-icon-light.svg"
										text="Specialists are coordinated within one direction"
									/>
									<FeatureRow
										icon="/lifelong-medicine/sec15-icon-light.svg"
										text="Health is anticipated, not only treated"
									/>
									<FeatureRow
										icon="/lifelong-medicine/sec15-icon-light.svg"
										text="Responsibility continues over time"
									/>
								</div>
							</div>

							{/* Brand mark — absolute bottom-right */}
							<Image
								src="/lifelong-medicine/sec15-vector.svg"
								alt=""
								width={240}
								height={163}
								className="absolute bottom-6 -right-19 w-48 h-auto pointer-events-none select-none"
								aria-hidden="true"
								unoptimized
							/>
						</BlurReveal>
					</div>
				</div>
			</Container>
		</section>
	)
}
