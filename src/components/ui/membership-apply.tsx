import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export function MembershipApply() {
	return (
		<section className="w-full bg-fire pt-24 md:pt-32">
			<Container>
				<div className="flex flex-col items-center gap-12 md:gap-16">
					<BlurReveal>
						<h2 className="font-display text-4xl md:text-5xl text-ecru-white leading-none text-center">
							Take the next step.
						</h2>
					</BlurReveal>

					<div className="w-full max-w-168 flex flex-col items-center">
						<BlurReveal
							delay={0.1}
							className="w-full bg-zeus flex flex-col items-center gap-12 md:gap-16 px-8 py-14 md:px-30 md:py-20"
						>
							<p className="font-body text-sm text-ecru-white uppercase tracking-tight leading-relaxed text-center max-w-144">
								Membership is by application. Each request is reviewed personally by the practice
								— a reflection of the care taken with every relationship that follows.
							</p>
							<Button href="/apply" variant="regent" size="sm">
								Start application
							</Button>
						</BlurReveal>

						<div
							aria-hidden="true"
							className="w-70 h-74 bg-linear-to-b from-rangoon-green from-7% via-blue-smoke via-60% to-tana"
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
