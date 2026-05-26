import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

const SPECIALTIES = [
	'Primary care',
	'Hospital medicine',
	'Emergency care',
	'Obstetrics',
	'Complex case management',
]

export function MichaelStory() {
	return (
		<section className="w-full bg-ecru-white py-28 md:py-36 border-t border-black/10">
			<Container>
				<div className="flex flex-col gap-20 md:gap-28">
					<div className="flex flex-col gap-16 md:gap-20">
						<BlurReveal>
							<h2 className="font-display text-4xl md:text-5xl text-olive-haze leading-tight max-w-[20ch]">
								A doctor who carries the <em className="font-display italic">whole story.</em>
							</h2>
						</BlurReveal>

						<BlurReveal delay={0.1} className="flex flex-wrap gap-x-20 gap-y-6">
							{SPECIALTIES.map((item) => (
								<span
									key={item}
									className="font-body text-lg text-rangoon-green uppercase tracking-tight leading-tight"
								>
									{item}
								</span>
							))}
						</BlurReveal>
					</div>

					<BlurReveal delay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{[0, 1, 2].map((i) => (
							<RevealImage
								key={i}
								className="relative w-full aspect-839/1101 overflow-hidden bg-bison-hide"
								delay={i * 0.1}
								start="top 95%"
							>
								{/* TODO: replace with editorial photo */}
							</RevealImage>
						))}
					</BlurReveal>
				</div>
			</Container>
		</section>
	)
}
