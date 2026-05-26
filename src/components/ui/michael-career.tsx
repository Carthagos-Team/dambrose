import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

const MILESTONES = [
	'Attended medical school in Dublin, Ireland, focusing on primary care.',
	'Completed a rural-track residency at the University of Kansas.',
	'Ran a small hospital in Montana by himself, serving the whole community.',
	'Became a private physician, founding DAMBROSE in Florida.',
]

export function MichaelCareer() {
	return (
		<section className="w-full bg-ecru-white py-28 md:py-36 border-t border-black/10">
			<Container>
				<div className="flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-start">
					<div className="flex flex-col gap-14">
						<BlurReveal>
							<h2 className="font-display text-4xl md:text-5xl text-olive-haze leading-tight max-w-[14ch]">
								A career built across every <em className="font-display italic">layer of care.</em>
							</h2>
						</BlurReveal>

						<BlurReveal delay={0.1} className="flex flex-col">
							{MILESTONES.map((item, i) => (
								<div
									key={item}
									className="flex items-baseline gap-6 py-6 border-b border-bison-hide"
								>
									<span className="font-body text-xs text-olive-haze tracking-tight leading-none">
										{String(i + 1).padStart(2, '0')}
									</span>
									<p className="font-body text-sm text-rangoon-green uppercase tracking-tight leading-relaxed">
										{item}
									</p>
								</div>
							))}
						</BlurReveal>
					</div>

					<BlurReveal delay={0.15} className="flex gap-4 items-start lg:justify-self-end">
						<div className="flex flex-col gap-4 pt-16">
							<RevealImage
								className="relative w-full aspect-227/314 overflow-hidden bg-bison-hide"
								start="top 95%"
							/>
							<RevealImage
								className="relative w-full aspect-227/314 overflow-hidden bg-bison-hide"
								start="top 95%"
							/>
						</div>
						<RevealImage
							className="relative w-full aspect-406/377 overflow-hidden bg-bison-hide self-end"
							start="top 95%"
						/>
					</BlurReveal>
				</div>
			</Container>
		</section>
	)
}
