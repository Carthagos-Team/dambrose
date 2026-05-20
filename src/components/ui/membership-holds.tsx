'use client'

import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

const benefits = [
	'Always a direct line to your care team, day or night',
	'Care whenever you need it, without delay',
	'Visits that meet you wherever you are',
	'Full healthcare coordination, from referral to follow-up',
	'A physician present at any specialist visit',
	'Your advocate in every hospital and clinical setting',
	'Continuous, proactive care throughout the year',
	'Lab work in the comfort of your home or office',
]

export function MembershipHolds() {
	return (
		<section className="relative w-full bg-ecru-white py-20 md:py-36 border-t border-black/10">
			{/* Stamp */}
			<div className="absolute top-4.75 right-6 md:right-[26.7%] z-10">
				<Image
					src="/stamp.svg"
					alt="Here for every life chapter"
					width={106}
					height={106}
					className="w-16 h-16 md:w-[6.5rem] md:h-[6.5rem]"
				/>
			</div>

			<Container>
				<div className="flex flex-col items-center gap-14 md:gap-20 text-center">
					<div className="flex flex-col gap-8 items-center">
						{/* Heading */}
						<BlurReveal>
							<h2 className="font-display text-3xl md:text-6xl text-rangitoto leading-tight max-w-lg">
								What every membership holds:
							</h2>
						</BlurReveal>

						{/* Description */}
						<BlurReveal delay={0.1} className="max-w-xl">
							<p className="font-body text-sm uppercase tracking-wider text-rangitoto leading-relaxed">
								Our membership is not a list of services — it is a commitment from a physician and a
								care team who hold themselves accountable for your whole health. We coordinate all
								details, advocate on your behalf, and remain present through each stage of care.
							</p>
						</BlurReveal>
					</div>

					{/* Benefits list */}
					<BlurReveal delay={0.15} className="w-full max-w-xl">
						{benefits.map((benefit) => (
							<div key={benefit}>
								<p className="font-body text-sm uppercase tracking-wider text-rangitoto py-5">
									{benefit}
								</p>
								<div className="border-b border-rangitoto/25" />
							</div>
						))}
					</BlurReveal>

					{/* CTA + Signature */}
					<BlurReveal delay={0.2} className="flex flex-col items-center gap-6">
						<Button
							href="/services"
							variant="outline"
							className="text-rangitoto border-rangitoto/40"
						>
							Discover our services
						</Button>
						<Image
							src="/discover.svg"
							alt="Discover"
							width={183}
							height={39}
							className="h-8 md:h-10 w-auto"
						/>
					</BlurReveal>
				</div>
			</Container>
		</section>
	)
}
