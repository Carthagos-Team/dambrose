import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

const steps = [
	{
		number: '01.',
		title: 'Application',
		description:
			'PROSPECTIVE MEMBERS APPLY THROUGH A SELECTIVE PROCESS TO ASSESS MUTUAL FIT.',
	},
	{
		number: '02.',
		title: 'Deep dive',
		description:
			'ONCE ACCEPTED, AN IN-DEPTH FIRST VISIT EXPLORES YOUR MEDICAL HISTORY, CURRENT HEALTH, LONG-TERM GOALS, AND PERSONAL PHILOSOPHY TO CREATE A TAILORED PLAN.',
	},
	{
		number: '03.',
		title: 'Ongoing care',
		description:
			'A dedicated health team becomes your constant point of contact, with unlimited access to care for every aspect of your health.',
	},
]

export function HowMembershipWorks({ hideOverlay = false }: { hideOverlay?: boolean } = {}) {
	return (
		<section className="w-full bg-ecru-white pt-16 md:pt-10 pb-16 md:pb-28">
			<div>
				{/* ── Image panels ───────────────────────────────────────── */}
				<Container>
					<div className="grid grid-cols-1 md:grid-cols-3 items-start">
						{/* Left panel — hidden on mobile */}
						<RevealImage className="hidden md:block relative overflow-hidden aspect-453/531">
							<Image
								src="/home/sec05/container-1.webp"
								alt="A curved flowering stem with buds against a deep blue backdrop"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-black/20" />
						</RevealImage>

						{/* Center panel */}
						<RevealImage
							delay={0.15}
							className="relative overflow-hidden aspect-4/5 md:aspect-454/711"
						>
							<Image
								src="/home/sec05/container-3.webp"
								alt="Two pink anthurium blooms on slender stems against a soft sky"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-black/25 md:bg-black/40" />
							{!hideOverlay && (
								<div className="hidden md:flex absolute inset-0 items-center justify-center p-8">
									<div className="flex flex-col items-center gap-6 md:gap-8 text-center">
										<h2 className="font-display text-2xl md:text-[2.5em] text-ecru-white leading-tight">
											How annual membership works:
										</h2>
										<Button
											href="/inquiry"
											variant="outline"
											className="text-ecru-white border-ecru-white/60"
										>
											Inquiry
										</Button>
									</div>
								</div>
							)}
						</RevealImage>

						{/* Right panel — hidden on mobile */}
						<RevealImage
							delay={0.3}
							className="hidden md:block relative overflow-hidden aspect-453/440"
						>
							<Image
								src="/home/sec05/container-2.webp"
								alt="A moth resting on a dark green vessel"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-black/25" />
						</RevealImage>
					</div>
				</Container>

				{/* ── Steps ──────────────────────────────────────────────── */}
				<Container className="mt-16 md:mt-20">
					<BlurReveal delay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
						{steps.map((step) => (
							<div
								key={step.number}
								className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-6"
							>
								<div className="flex items-end gap-3 md:gap-6">
									<span className="font-body text-xs text-rangitoto/60 leading-[1.3] md:mt-2.4">{step.number}</span>
									<span className="font-display text-2xl md:text-[2em] text-rangitoto italic leading-[1.1] tracking-[0.48px]">
										{step.title}
									</span>
								</div>
								<p className="font-body text-xs uppercase tracking-[-0.04em] md:tracking-wider text-rangitoto/80 leading-[1.4] md:leading-relaxed">
									{step.description}
								</p>
							</div>
						))}
					</BlurReveal>
				</Container>
			</div>
		</section>
	)
}
