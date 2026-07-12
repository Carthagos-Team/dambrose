'use client'

import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

const features = [
	'Uninterrupted direct access to your health team',
	'Same-day appointments',
	'House and office calls',
	'Appointment scheduling and coordination',
	'Specialist appointment attendance',
	'Hospital advocacy',
	'Periodic check-ups and exams',
	'In-home laboratory services',
]

// The two longest items run edge-to-edge on mobile; cap their width there so they
// wrap to two balanced lines (keeping "to your health team" / "and coordination"
// grouped) consistently across every mobile breakpoint. Full width restored at md+.
const TWO_LINE_ON_MOBILE = new Set([
	'Uninterrupted direct access to your health team',
	'Appointment scheduling and coordination',
])

export function MembershipIncluded() {
	return (
		<section className="relative w-full bg-ecru-white py-24 md:py-30">
			<Container>
				<div className="flex flex-col items-center gap-16 md:gap-20 overflow-visible text-center">
					<BlurReveal className="overflow-visible">
						<div className="relative inline-block">
							<h2 className="relative z-10 font-display text-4xl md:text-5xl text-corduroy leading-tight max-w-[24ch]">
								Everything included in your annual{' '}
								<em className="font-display italic">membership.</em>
							</h2>
							<Image
								src="/stamp.png"
								alt="Here for every life chapter"
								width={118}
								height={118}
								className="pointer-events-none absolute top-0 right-0 translate-x-1/2 -translate-y-1/4 hidden md:block md:w-[7.375rem] md:h-[7.375rem]"
							/>
						</div>
					</BlurReveal>

					<BlurReveal delay={0.1} className="w-full max-w-120 mx-auto text-center">
						{features.map((feature) => (
							<div key={feature}>
								<p
									className={[
										'font-body text-sm text-rangitoto uppercase tracking-[-0.035rem] leading-[1.4] opacity-80 py-8 text-balance',
										TWO_LINE_ON_MOBILE.has(feature) ? 'max-w-[26ch] md:max-w-none mx-auto' : '',
									].join(' ')}
								>
									{feature}
								</p>
								<div className="border-b border-rangitoto" />
							</div>
						))}
					</BlurReveal>

					<BlurReveal delay={0.15} className="relative inline-flex items-center justify-center mx-auto">
						<Button
							href="/services"
							variant="outline"
							size="sm"
							className="text-rangoon-green border-rangoon-green"
						>
							Discover our services
						</Button>
						<Image
							src="/signature.svg"
							alt="M.J.D"
							width={119}
							height={73}
							className="absolute left-full top-1/2 ml-3 -translate-y-1/2 h-12 md:h-18 w-auto"
						/>
					</BlurReveal>
				</div>
			</Container>
		</section>
	)
}
