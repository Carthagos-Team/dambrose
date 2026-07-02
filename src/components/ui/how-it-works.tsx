import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

const steps = [
	{
		number: '01.',
		title: 'Application',
		description:
			'Prospective members apply through a selective process to ensure alignment and allow the dedicated health team to maintain the level of access and attention essential to ALMA.',
	},
	{
		number: '02.',
		title: 'Deep dive',
		description:
			'ONCE ACCEPTED, AN IN-DEPTH FIRST VISIT REVIEWS MEDICAL HISTORY, CURRENT HEALTH, CONCERNS, AND PRIORITIES TO ESTABLISH A CLEAR CLINICAL BASELINE AND THE FOUNDATION OF A PERSONAL DOCTOR-PATIENT RELATIONSHIP.',
	},
	{
		number: '03.',
		title: 'Ongoing care',
		description:
			'Care continues through unlimited access, routine follow-ups, and physician-led coordination across specialists, treatments, emergencies, and life changes.',
	},
] as const

export function HowItWorks() {
	return (
		<section
			className="w-full py-10 md:pt-10 md:pb-28 border-t border-black/5"
			style={{ backgroundColor: '#FFFFE4' }}
		>
			<Container>
				{/* ── Three image cards (staggered heights, top-aligned) ── */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-start">
					{/* Left: woman in chair */}
					<RevealImage className="relative aspect-453/531 overflow-hidden">
						<Image src="/alma/sec04/container-1.webp" alt="" fill className="object-cover" />
						<div className="absolute inset-0 bg-black/25" />
					</RevealImage>

					{/* Center: orchid + headline + CTA (tallest) */}
					<RevealImage delay={0.15} className="relative aspect-454/711 overflow-hidden">
						<Image src="/alma/sec04/container-2.webp" alt="" fill className="object-cover" />
						<div className="absolute inset-0 bg-black/25" />
					</RevealImage>

					{/* Right: gradient panel */}
					<RevealImage delay={0.3} className="relative aspect-453/440 overflow-hidden">
						<div
							className="absolute inset-0"
							style={{
								background: 'linear-gradient(180deg, #DEDBBC 0%, #B4A389 50%, #808D95 90%)',
							}}
						/>
					</RevealImage>
				</div>

				{/* ── Three steps under cards ───────────────────────────── */}
				<div className="mt-12 md:mt-[5.6rem] grid grid-cols-1 md:grid-cols-3 gap-x-10 md:gap-x-[1.9rem] gap-y-10">
					{steps.map((s, i) => (
						<BlurReveal key={s.number} delay={0.1 * (i + 1)}>
							<div className="grid grid-cols-1 min-[1200px]:grid-cols-2 gap-x-6 gap-y-2 items-start">
								<div className="flex items-start gap-3">
									<span className="font-body text-xs text-[#626f77] opacity-60 leading-[1.9]">
										{s.number}
									</span>
									<h3 className="font-futura text-[1.2rem] uppercase text-[#626f77] tracking-wider leading-tight">
										{s.title}
									</h3>
								</div>
								<p className="font-body text-xs leading-relaxed tracking-tight text-[#282119] opacity-80">
									{s.description}
								</p>
							</div>
						</BlurReveal>
					))}
				</div>
			</Container>
		</section>
	)
}
