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
		<section
			className="w-full bg-[#ffffe4] rounded-[0.5em] overflow-hidden relative
			px-5 md:px-10 py-16 md:py-[5.77em]
			flex flex-col gap-16 md:gap-[5.15em] items-start md:items-center"
		>
			{/* ── Header ── */}
			<div className="flex flex-col gap-4 md:gap-[3.29em] items-start md:items-center">
				{/* Praeva™ wordmark */}
				<BlurReveal>
					<div className="inline-flex items-start gap-px">
						<p className="font-display not-italic text-[1.92em] leading-none text-[#7c848b]">
							<span style={{ letterSpacing: '0.0365em' }}>P</span>
							<span>ra</span>
							<em className="italic" style={{ letterSpacing: '0.0729em' }}>
								e
							</em>
							<span style={{ letterSpacing: '0.012em' }}>v</span>
							<span>a</span>
						</p>
						<span className="font-ui text-[0.8em] text-[#7c848b] tracking-[0.02em] leading-none mt-[0.32em]">
							™
						</span>
					</div>
				</BlurReveal>

				{/* Heading */}
				<BlurReveal delay={0.08}>
					<h2 className="font-display text-[2em] md:text-[2.57em] leading-none tracking-[0.03125em] text-[#282119] text-left md:text-center uppercase w-full min-[1440px]:w-[14.0078em]">
						Trusted by those who expect more from medicine.
					</h2>
				</BlurReveal>
			</div>

			{/* ── Testimonial cards ── */}
			<div className="flex flex-col md:flex-row gap-8 md:gap-[1.65em] w-full">
				{TESTIMONIALS.map((t, i) => (
					<BlurReveal key={t.name} delay={i * 0.09} className="flex-1 min-w-0">
						<div
							className={`relative h-140 md:h-[28.8em] overflow-hidden rounded-[0.25em] ${t.bg}`}
						>
							{/* Quote */}
							<div className="absolute top-[2.06em] left-[2.06em] w-[17.8em]">
								<p className="font-display text-[1.25em] md:text-[1.23em] leading-[1.1] text-[#ffffe4]/80">
									{t.quote}
								</p>
							</div>

							{/* Attribution */}
							<div
								className={`absolute bottom-[2.06em] left-[2.06em] w-[17.8em] tracking-[0.025em] ${t.nameColor}`}
							>
								<p className="font-display text-[1.5em] md:text-[1.23em] leading-[1.1]">
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
			<div className="hidden md:block absolute right-0 bottom-[2.81em] w-[23.19em] h-[6.46em] pointer-events-none">
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
