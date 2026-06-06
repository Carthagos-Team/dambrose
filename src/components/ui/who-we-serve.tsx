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
		<section
			data-wrapper="audience_section"
			className="w-full bg-ecru-white py-16 md:py-28"
		>
			<Container>
				<div data-wrapper="audience_component" className="flex flex-col gap-12 md:gap-20">
					<div data-wrapper="audience_header">
						<BlurReveal>
							<h2 className="font-display text-4xl md:text-5xl text-gray-olive text-center leading-tight max-w-88 mx-auto">
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
							className="absolute -top-8 -left-4 md:-top-12 md:-left-8 w-16 h-16 md:w-26 md:h-26 z-10"
						/>

						<div
							data-wrapper="audience_grid"
							className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
						>
							{CARDS.map((card, i) => (
								<div data-wrapper="audience_card_wrapper" key={card.index}>
									<BlurReveal delay={i * 0.1} className="bg-opal aspect-square h-full">
										<div
											data-wrapper="audience_card_content"
											className="flex flex-col h-full p-6 md:p-8"
										>
											<div
												data-wrapper="audience_card_header"
												className="flex items-start justify-between gap-4"
											>
												<span className="font-body text-xs text-rangoon-green uppercase tracking-wide">
													{card.index}
												</span>
												<h3 className="font-display italic text-2xl md:text-[1.75em] text-rangoon-green leading-snug text-right max-w-56">
													{card.title}
												</h3>
											</div>
											<p className="mt-auto font-body text-xs text-rangoon-green uppercase leading-relaxed tracking-tight">
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
