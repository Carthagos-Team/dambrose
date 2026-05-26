import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function MichaelHero() {
	return (
		<section className="w-full bg-ecru-white flex flex-col">
			<Container className="pt-8 pb-10 md:pt-4.5 md:pb-10">
				<BlurReveal className="flex flex-col gap-6">
					<p className="font-body text-xs text-olive-haze uppercase tracking-wide leading-none">
						Founder. Physician. Lifelong steward of health.
					</p>
					<h1 className="font-display text-5xl md:text-6xl text-olive-haze leading-none">
						Dr. Michael J. <em className="font-display italic">D&rsquo;Ambrose</em>
					</h1>
				</BlurReveal>
			</Container>

			<Container>
				<RevealImage
					className="relative w-full aspect-1360/542 overflow-hidden bg-bison-hide"
					start="top 95%"
				>
					{/* TODO: replace with Dr. Michael portrait */}
				</RevealImage>
			</Container>
		</section>
	)
}
