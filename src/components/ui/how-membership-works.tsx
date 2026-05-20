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
			'Prospective members apply through a selective process to assess mutual fit and ensure we can offer the deserved level of availability.',
	},
	{
		number: '02.',
		title: 'Deep dive',
		description:
			'Once accepted, an in-depth first visit explores your medical history, current health, and long-term goals to create a tailored plan.',
	},
	{
		number: '03.',
		title: 'Ongoing care',
		description:
			'A dedicated health team becomes your constant point of contact, with unlimited access to care for every aspect of your health.',
	},
]

export function HowMembershipWorks() {
	return (
		<section className="w-full bg-ecru-white pt-10 pb-16 md:pb-28 border-t border-black/10">
			<div>
				{/* ── Image panels ───────────────────────────────────────── */}
				<Container>
					<div className="grid grid-cols-1 md:grid-cols-3 items-start">
						{/* Left panel — hidden on mobile */}
						<RevealImage className="hidden md:block relative overflow-hidden aspect-453/531">
							<Image src="/features/anthurium.png" alt="" fill className="object-cover" />
							<div className="absolute inset-0 bg-black/20" />
						</RevealImage>

						{/* Center panel — tallest, with text overlay */}
						<RevealImage
							delay={0.15}
							className="relative overflow-hidden aspect-4/5 md:aspect-454/711"
						>
							<Image src="/features/kitchen.png" alt="" fill className="object-cover" />
							<div className="absolute inset-0 bg-black/25" />
							<div className="absolute inset-0 flex items-center justify-center p-8">
								<div className="flex flex-col items-center gap-6 md:gap-8 text-center">
									<h2 className="font-display text-2xl md:text-[2.5rem] text-ecru-white leading-tight">
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
						</RevealImage>

						{/* Right panel — hidden on mobile */}
						<RevealImage
							delay={0.3}
							className="hidden md:block relative overflow-hidden aspect-453/440"
						>
							<Image src="/features/elder.png" alt="" fill className="object-cover" />
							<div className="absolute inset-0 bg-black/25" />
						</RevealImage>
					</div>
				</Container>

				{/* ── Steps ──────────────────────────────────────────────── */}
				<Container className="mt-10 md:mt-20">
					<BlurReveal delay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{steps.map((step) => (
							<div
								key={step.number}
								className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6"
							>
								<div className="flex items-center gap-4 md:gap-6">
									<span className="font-body text-xs text-rangitoto shrink-0 md:mt-2.4">
										{step.number}
									</span>
									<span className="font-display text-2xl md:text-[2rem] text-rangitoto leading-none shrink-0">
										{step.title}
									</span>
								</div>
								<p className="font-body text-xs uppercase tracking-wider text-rangitoto leading-relaxed">
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
