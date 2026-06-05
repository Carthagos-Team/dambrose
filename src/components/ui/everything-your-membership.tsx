import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { RevealImage } from '@/components/ui/reveal-image'

const benefits = [
	'Always a direct line to your care team, day or night',
	'Care whenever you need it, without delay',
	'Visits that meet you wherever you are',
	'Full healthcare coordination, from referral to\u00A0follow-up',
	'A physician present at any specialist visit',
	'Your advocate in every hospital and clinical setting',
	'Continuous, proactive care throughout the year',
	'Lab work in the comfort of your home or office',
] as const

export function EverythingYourMembership() {
	return (
		<section
			className="relative w-full overflow-hidden py-24 md:py-28"
			style={{ backgroundColor: '#FFFFE4' }}
		>
			{/* ── Decorative photos (desktop only) ─────────────────── */}
			<RevealImage
				delay={0.2}
				className="hidden md:block absolute top-10 left-10 w-52.5 aspect-210/246 overflow-hidden"
			>
				<Image src="/alma/sec06/image-small-1.webp" alt="" fill className="object-cover" />
			</RevealImage>

			<RevealImage
				delay={0.3}
				className="hidden md:block absolute top-75 right-10 w-81.25 aspect-325/311 overflow-hidden"
			>
				<Image src="/alma/sec06/image-large.webp" alt="" fill className="object-cover" />
			</RevealImage>

			<RevealImage
				delay={0.4}
				className="hidden md:block absolute bottom-12 left-38.75 w-52.5 aspect-210/226 overflow-hidden"
			>
				<Image src="/alma/sec06/image-small-2.webp" alt="" fill className="object-cover" />
			</RevealImage>

			{/* ── Content stack ─────────────────────────────────────── */}
			<div className="relative z-10 flex flex-col items-center gap-14 md:gap-22 px-5 md:px-10">
				<div className="relative flex flex-col items-center">
					<BlurReveal>
						<h2 className="font-display text-4xl md:text-6xl text-rangoon-green text-center leading-[1.05] max-w-md">
							Everything your membership holds
						</h2>
					</BlurReveal>

					{/* M.J.D signature — overlaps heading on the right */}
					<Image
						src="/images/sections/mjd-signature.svg"
						alt=""
						aria-hidden="true"
						width={118}
						height={69}
						className="absolute -bottom-8 md:-bottom-10 right-2 md:-right-12 w-16 md:w-29.5 h-auto pointer-events-none"
					/>
				</div>

				<ul className="flex flex-col gap-3 md:gap-4 w-full max-w-130">
					{benefits.map((b, i) => (
						<BlurReveal as="li" key={b} delay={0.05 * i}>
							<div
								className="flex items-center justify-center text-center px-8 md:px-10 py-6 md:py-7 min-h-20"
								style={{ backgroundColor: '#DEDBBC' }}
							>
								<p className="font-body text-xs md:text-sm uppercase tracking-tight leading-relaxed text-rangoon-green">
									{b}
								</p>
							</div>
						</BlurReveal>
					))}
				</ul>
			</div>
		</section>
	)
}
