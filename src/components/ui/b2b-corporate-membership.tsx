import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

const STEPS = [
	{
		number: '01.',
		title: 'Company inquiry',
		description:
			'AN INITIAL CONVERSATION TO UNDERSTAND YOUR COMPANY’S NEEDS AND DETERMINE WHETHER DAMBROSE IS THE RIGHT FIT.',
	},
	{
		number: '02.',
		title: 'Onboarding & Assessment',
		description:
			'EACH MEMBER BEGINS WITH AN IN-DEPTH MEDICAL INTAKE, FOLLOWED BY A COMPREHENSIVE ASSESSMENT USING ADVANCED DIAGNOSTICS.',
	},
	{
		number: '03.',
		title: 'Ongoing physician‑led oversight',
		description:
			'DAMBROSE PROVIDES CONTINUOUS ACCESS, COORDINATED CARE, AND LONG-TERM MEDICAL GUIDANCE.',
	},
]

export function B2bCorporateMembership() {
	return (
		<section
			className="w-full pt-12 pb-30"
			style={{
				background:
					'linear-gradient(to bottom, #DEDBBC 0%, #f2f1e3 8%, #728b8b 32%, #383f39 65%, #222009 100%)',
			}}
		>
			<Container>
				{/* Image triptych — three panels, no gap, staggered heights */}
				<div className="grid grid-cols-1 md:grid-cols-3 items-start">
					<RevealImage className="hidden md:block relative overflow-hidden aspect-453/531">
						<Image
							src="/b2b/sec07/container-1.webp"
							alt=""
							fill
							className="object-cover"
							sizes="(min-width: 768px) 33vw, 100vw"
						/>
					</RevealImage>

					<RevealImage
						delay={0.15}
						className="relative overflow-hidden aspect-4/5 md:aspect-454/711"
					>
						<Image
							src="/b2b/sec07/container-3.webp"
							alt=""
							fill
							className="object-cover"
							sizes="(min-width: 768px) 33vw, 100vw"
						/>
						<div className="absolute inset-0 flex items-center justify-center p-8">
							<div className="flex flex-col items-center gap-6 md:gap-8 text-center">
								<h2 className="font-display text-2xl md:text-[2.5em] text-ecru-white leading-none">
									How <em className="italic">corporate</em>
									<br />
									membership works:
								</h2>
								<Button
									href="/contact"
									variant="outline"
									className="text-ecru-white border-ecru-white/60"
								>
									Inquiry
								</Button>
							</div>
						</div>
					</RevealImage>

					<RevealImage
						delay={0.3}
						className="hidden md:block relative overflow-hidden aspect-453/440"
					>
						<Image
							src="/b2b/sec07/container-2.webp"
							alt=""
							fill
							className="object-cover"
							sizes="(min-width: 768px) 33vw, 100vw"
						/>
					</RevealImage>
				</div>
			</Container>

			<Container className="pt-29">
				<BlurReveal delay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10">
					{STEPS.map((step) => (
						<div
							key={step.number}
							className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4"
						>
							<div className="flex items-start gap-3 md:shrink-0">
								<span className="font-body text-xs text-ecru-white uppercase shrink-0 pt-1">
									{step.number}
								</span>
								<span className="font-display italic text-2xl md:text-[1.44em] text-ecru-white leading-tight md:max-w-[6.3em]">
									{step.title}
								</span>
							</div>
							<p className="font-body text-xs uppercase tracking-tight text-ecru-white leading-relaxed min-w-0">
								{step.description}
							</p>
						</div>
					))}
				</BlurReveal>
			</Container>
		</section>
	)
}
