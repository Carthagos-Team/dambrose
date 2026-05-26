import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'

export function MichaelAffiliations() {
	return (
		<section className="w-full bg-ecru-white py-24 md:py-32 border-t border-black/10">
			<Container>
				<div className="flex flex-col gap-16 md:gap-20">
					<BlurReveal>
						<h2 className="font-display text-4xl md:text-5xl text-olive-haze leading-tight">
							Professional affiliations
						</h2>
					</BlurReveal>

					<BlurReveal delay={0.1} className="flex flex-wrap items-center gap-x-24 gap-y-10">
						{/* TODO: replace placeholders with affiliation logos */}
						<div className="h-12 w-28 bg-bison-hide" aria-hidden="true" />
						<div className="h-13 w-32 bg-bison-hide" aria-hidden="true" />
						<div className="h-15 w-44 bg-bison-hide" aria-hidden="true" />
					</BlurReveal>
				</div>
			</Container>
		</section>
	)
}
