import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'

const CARDS = [
	{
		index: '01',
		title: 'Seeking a steady guide',
		body: 'Patients who want a dedicated team overseeing their whole health journey — valuing reliable access when needed, without requiring frequent visits or intervention.',
	},
	{
		index: '02',
		title: 'Planning for a healthier life',
		body: 'Patients focused on prevention, longevity, and peace of mind, seeking thoughtful guidance, early insight, and a health team who stays ahead of potential issues.',
	},
	{
		index: '03',
		title: 'Managing ongoing or acute conditions',
		body: 'Patients seeking consistent medical oversight for chronic conditions or acute episodes, with continuity, responsiveness, and informed long-term management.',
	},
]

export function WhoWeServe() {
	return (
		<section data-wrapper="audience_section" className="w-full bg-ecru-white py-16 md:py-28">
			<Container>
				<div data-wrapper="audience_component" className="flex flex-col gap-12 md:gap-20">
					<div data-wrapper="audience_header">
						<BlurReveal>
							<h2 className="font-display text-4xl md:text-5xl text-gray-olive text-left md:text-center leading-tight max-w-88 md:mx-auto">
								For individuals and families, at every stage of life, who are:
							</h2>
						</BlurReveal>
					</div>

					<div
						data-wrapper="audience_inner_wrapper"
						className="relative bg-white-rock px-4 py-6 md:px-10 md:py-12"
					>
						<Image
							src="/stamp.png"
							alt="Here for every life chapter"
							width={106}
							height={106}
							className="hidden min-[1200px]:block absolute -top-12 -left-8 w-26 h-26 z-10"
						/>

						<div
							data-wrapper="audience_grid"
							className="grid grid-cols-1 min-[1200px]:grid-cols-3 gap-5"
						>
							{CARDS.map((card, i) => (
								<div data-wrapper="audience_card_wrapper" key={card.index}>
									<BlurReveal
										delay={i * 0.1}
										className="bg-opal h-full aspect-auto min-[1200px]:aspect-square"
									>
										<div
											data-wrapper="audience_card_content"
											className="flex flex-col h-full gap-36 p-6 min-[540px]:p-8 min-[1200px]:gap-0"
										>
											<div
												data-wrapper="audience_card_header"
												className="flex items-center min-[1200px]:items-start justify-between gap-4"
											>
												<span className="font-body text-xs text-rangoon-green uppercase tracking-wide">
													{card.index}
												</span>
												<h3
													className={[
														'font-display italic text-xl min-[540px]:text-[1.5rem] min-[1200px]:text-[1.75em] text-rangoon-green leading-none min-[1200px]:leading-snug text-right min-[1200px]:max-w-56',
														// Longest title: cap width below 1200px so it wraps to two lines
														// (per Figma) instead of stretching flush against the number.
														i === CARDS.length - 1 ? 'max-w-[18ch]' : '',
													].join(' ')}
												>
													{card.title}
												</h3>
											</div>
											<p className="min-[1200px]:mt-auto font-body text-xs text-rangoon-green uppercase leading-relaxed tracking-tight md:max-w-[42ch] min-[1200px]:max-w-none">
												{card.body}
											</p>
										</div>
									</BlurReveal>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
