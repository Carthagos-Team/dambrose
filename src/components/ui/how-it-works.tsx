import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'
import { TransitionLink } from '@/components/ui/transition-link'

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
			'Once accepted, an in-depth first visit reviews medical history, current health, concerns, and priorities, establishing a clear clinical baseline and a personal doctor-patient relationship.',
	},
	{
		number: '03.',
		title: 'Ongoing care',
		description:
			'Care continues through unlimited access, regular follow-ups, and physician-led coordination across specialists, treatments, emergencies, and life changes.',
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
						<Image src="/images/sections/sec04-img-left.png" alt="" fill className="object-cover" />
						<div className="absolute inset-0 bg-black/25" />
					</RevealImage>

					{/* Center: orchid + headline + CTA (tallest) */}
					<RevealImage delay={0.15} className="relative aspect-454/711 overflow-hidden">
						<Image
							src="/images/sections/sec04-img-center.png"
							alt=""
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-black/30" />
						<div className="absolute inset-0 flex flex-col items-center justify-center gap-8 md:gap-10 px-6 text-center">
							<BlurReveal delay={0.25}>
								<h2 className="font-display text-4xl md:text-6xl text-ecru-white leading-[0.95]">
									How it works
								</h2>
							</BlurReveal>
							<TransitionLink
								href="/contact"
								className="inline-flex items-center justify-center px-5 h-9 border border-ecru-white/90 text-ecru-white font-body text-xs uppercase tracking-wider hover:bg-ecru-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ecru-white cursor-pointer"
							>
								Inquiry
							</TransitionLink>
						</div>
					</RevealImage>

					{/* Right: gradient panel */}
					<RevealImage delay={0.3} className="relative aspect-453/440 overflow-hidden">
						<div
							className="absolute inset-0"
							style={{
								background: 'linear-gradient(135deg, #DEDBBC 0%, #B4A389 50%, #808D95 100%)',
							}}
						/>
					</RevealImage>
				</div>

				{/* ── Three steps under cards ───────────────────────────── */}
				<div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
					{steps.map((s, i) => (
						<BlurReveal key={s.number} delay={0.1 * (i + 1)}>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 items-start">
								<div className="flex items-baseline gap-3">
									<span className="font-body text-xs text-shuttle-gray tracking-tight">
										{s.number}
									</span>
									<h3 className="font-display text-2xl text-shuttle-gray italic leading-tight">
										{s.title}
									</h3>
								</div>
								<p className="font-body text-xs leading-relaxed tracking-tight text-rangoon-green">
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
