'use client'

import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

// Each benefit is split into two segments. On mobile a hard break (<br className="md:hidden">)
// forces the exact 2-line layout from Figma (node 4344:274); on desktop the break is hidden
// and the segments flow as one string, wrapping naturally. The last item forces its break at
// every breakpoint to keep "of your home" grouped with "or office".
const BENEFITS: [string, string][] = [
	['Always a direct line to your care', 'team, day or night'],
	['Care whenever you need it,', 'without delay'],
	['Visits that meet you', 'wherever you are'],
	['Full healthcare coordination,', 'from referral to follow-up'],
	['A physician present at any', 'specialist visit'],
	['Your advocate in every hospital and', 'clinical setting'],
	['Continuous, proactive care', 'throughout the year'],
	['Lab work in the comfort', 'of your home or office'],
]

export function MembershipHolds() {
	return (
		<section className="relative w-full bg-ecru-white py-20 md:py-28">
			{/* M.J.D. Signature — Figma: left 58.6%, bottom near section edge */}
			<div className="hidden min-[1440px]:block absolute left-[58.6%] bottom-[40px] z-10 pointer-events-none">
				<Image
					src="/signature.svg"
					alt="M.J.D. — Dr. Michael J. D'Ambrose"
					width={119}
					height={74}
					className="w-[119px] h-auto"
				/>
			</div>

			<Container>
				<div className="flex flex-col items-center gap-16 md:gap-20 text-center">
					{/* Heading + description — outer max-w-[620px] per Figma, heading inner max-w-[561px] */}
					<div className="flex flex-col gap-[34px] items-center w-full">
						<BlurReveal className="w-full">
							<h2 className="font-display text-4xl md:text-[3.125rem] text-corduroy leading-none tracking-[0.01em] md:whitespace-nowrap text-center">
								What every membership holds:
							</h2>
						</BlurReveal>

						<BlurReveal delay={0.1} className="w-full">
							<p className="font-body text-xs uppercase tracking-[-0.04em] text-rangitoto/80 leading-relaxed max-w-138 mx-auto text-center">
								Our membership is not a list of services — it is a commitment from a physician and a
								care team who hold themselves accountable for your whole health. We coordinate all
								details, advocate on your behalf, and remain present through each stage of care.
							</p>
						</BlurReveal>
					</div>

					{/* Benefits list */}
					<BlurReveal delay={0.15} className="w-full max-w-125">
						<ul>
							{BENEFITS.map(([line1, line2], i) => {
								const isLast = i === BENEFITS.length - 1
								return (
									<li
										key={line1}
										className={[
											'py-7 font-body text-xs uppercase tracking-[-0.04em] text-rangitoto/80',
											i > 0 ? 'border-t border-rangitoto/30' : '',
											isLast ? 'border-b border-rangitoto/30' : '',
										].join(' ')}
									>
										{line1}{' '}
										<br className={isLast ? undefined : 'md:hidden'} aria-hidden />
										{line2}
									</li>
								)
							})}
						</ul>
					</BlurReveal>

					{/* CTA */}
					<BlurReveal delay={0.2}>
						<Button href="/services" variant="outline" className="text-rangoon-green">
							<span className="opacity-60">Discover our services</span>
						</Button>
					</BlurReveal>
				</div>
			</Container>
		</section>
	)
}
