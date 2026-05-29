import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'

/**
 * SEC 18 — /praeva — Figma node 3822:6232
 * "TRUSTED BY THOSE WHO EXPECT MORE FROM MEDICINE." — cream bg, rounded card,
 * Praeva™ wordmark + heading + 3 testimonial cards (CSS gradient backgrounds).
 */

const TESTIMONIALS = [
	{
		quote:
			"I have been a patient of Dr. D'Ambrose for several years, and I couldn't be more grateful for the care I receive. Dr. D'Ambrose and Elaina always take the time to thoroughly understand my health concerns and work closely with specialists to manage my care. The level of attention and compassion here is unmatched, and I always feel confident that my health is in the best hands.",
		name: 'Mark Bonefield',
		location: 'Bone Valley, TX',
		bg: 'bg-gradient-to-t from-[#dedbbc] via-[#545c63] via-[50%] to-[#272018]',
		nameColor: 'text-[#282119]',
	},
	{
		quote:
			"I have been a patient of Dr. D'Ambrose for several years, and I couldn't be more grateful for the care I receive. Dr. D'Ambrose and Elaina always take the time to thoroughly understand my health concerns and work closely with specialists to manage my care. The level of attention and compassion here is unmatched, and I always feel confident that my health is in the best hands.",
		name: 'John Smith',
		location: 'Bone Valley, TX',
		bg: 'bg-[#545c63]',
		nameColor: 'text-[#ffffe4]',
	},
	{
		quote:
			"I have been a patient of Dr. D'Ambrose for several years, and I couldn't be more grateful for the care I receive. Dr. D'Ambrose and Elaina always take the time to thoroughly understand my health concerns and work closely with specialists to manage my care. The level of attention and compassion here is unmatched, and I always feel confident that my health is in the best hands.",
		name: 'Lilly Voux',
		location: 'Bone Valley, TX',
		bg: 'bg-[#282119]',
		nameColor: 'text-[#ffffe4]',
	},
]

export function PraevaSec18() {
	return (
		<section className="w-full bg-[#ffffe4] rounded-[8px] overflow-hidden relative
			px-5 md:px-10 py-[4rem] md:py-[5.77rem]
			flex flex-col gap-[4rem] md:gap-[5.15rem] items-start md:items-center">

			{/* ── Header ── */}
			<div className="flex flex-col gap-[1rem] md:gap-[3.29rem] items-start md:items-center">

				{/* Praeva™ wordmark */}
				<BlurReveal>
					<div className="inline-flex items-start gap-px">
						<p className="font-display not-italic text-[1.92rem] leading-none text-[#7c848b]">
							<span style={{ letterSpacing: '1.12px' }}>P</span>
							<span>ra</span>
							<em className="italic" style={{ letterSpacing: '2.24px' }}>e</em>
							<span style={{ letterSpacing: '0.37px' }}>v</span>
							<span>a</span>
						</p>
						<span className="font-ui text-[0.8rem] text-[#7c848b] tracking-[0.02em] leading-none mt-[0.32rem]">
							™
						</span>
					</div>
				</BlurReveal>

				{/* Heading */}
				<BlurReveal delay={0.08}>
					<h2 className="font-display text-[2rem] md:text-[2.57rem] leading-none tracking-[0.5px] text-[#282119] text-left md:text-center uppercase w-full min-[1440px]:w-[36rem]">
						Trusted by those who expect more from medicine.
					</h2>
				</BlurReveal>

			</div>

			{/* ── Testimonial cards ── */}
			<div className="flex flex-col md:flex-row gap-[2rem] md:gap-[1.65rem] w-full">
				{TESTIMONIALS.map((t, i) => (
					<BlurReveal
						key={t.name}
						delay={i * 0.09}
						className="flex-1 min-w-0"
					>
						<div className={`relative h-[35rem] md:h-[28.8rem] overflow-hidden rounded-[4px] ${t.bg}`}>

							{/* Quote */}
							<div className="absolute top-[2.06rem] left-[2.06rem] w-[17.8rem]">
								<p className="font-display text-[1.25rem] md:text-[1.23rem] leading-[1.1] text-[#ffffe4]/80">
									{t.quote}
								</p>
							</div>

							{/* Attribution */}
							<div className={`absolute bottom-[2.06rem] left-[2.06rem] w-[17.8rem] tracking-[0.025em] ${t.nameColor}`}>
								<p className="font-display text-[1.5rem] md:text-[1.23rem] leading-[1.1]">
									<em>{t.name},</em>
									<br />
									{t.location}
								</p>
							</div>

						</div>
					</BlurReveal>
				))}
			</div>

			{/* Dambrose script logo — bottom-right of section */}
			<div className="hidden md:block absolute right-0 bottom-[2.81rem] w-[23.19rem] h-[6.46rem] pointer-events-none">
				<Image
					src="/praeva/logobottom.svg"
					alt="Dambrose"
					fill
					className="object-contain object-right"
				/>
			</div>

		</section>
	)
}
