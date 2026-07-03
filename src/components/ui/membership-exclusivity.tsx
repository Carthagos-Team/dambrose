import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'

const cards = [
	{
		title: 'Your time reclaimed',
		description:
			'Logistics fade away as appointments, exams, specialists, and follow-ups are handled—and care can meet you wherever you are.',
	},
	{
		title: 'Your peace assured',
		description:
			'Knowing you can reach your dedicated team at any moment changes how health feels. You are never left to navigate your health alone.',
	},
	{
		title: 'Your voice represented',
		description:
			'When care involves specialists or hospitals, your health team stays by your side to guide decisions with clarity and confidence.',
	},
	{
		title: 'Your privacy untouched',
		description:
			'Every interaction and decision is handled with complete discretion, ensuring care remains truly personal.',
	},
	{
		title: 'Your priorities honored',
		description:
			'Care adapts to how often you want to engage, your preferences, and what matters most to you. Always on your terms.',
	},
]

export function MembershipExclusivity() {
	return (
		<section className="w-full bg-ecru-white py-28 md:py-36">
			<Container>
				<div className="flex flex-col items-center gap-8 md:gap-10">
					<BlurReveal className="relative inline-flex items-start gap-1">
						<Image
							src="/dambrose.svg"
							alt="Dambrose"
							width={154}
							height={33}
							className="h-7 md:h-8 w-auto"
						/>
						<span
							aria-hidden="true"
							className="font-body text-[0.5em] md:text-[0.625em] text-tia-maria leading-none tracking-wider mt-1"
						>
							®
						</span>
					</BlurReveal>

					<BlurReveal delay={0.1}>
						<h2 className="font-display text-4xl md:text-5xl text-gray-olive leading-none text-center max-w-[40ch]">
							What exclusivity makes possible:
						</h2>
					</BlurReveal>
				</div>

				<BlurReveal
					delay={0.15}
					className="mt-16 md:mt-24 grid grid-cols-1 min-[640px]:grid-cols-2 min-[768px]:grid-cols-3 min-[1200px]:grid-cols-5 gap-[1em]"
				>
					{cards.map((card) => (
						<article
							key={card.title}
							className="flex flex-col justify-between bg-[#ffffe4] min-h-104 px-5 pt-8.5 pb-13"
						>
							<h3 className="font-display italic text-[1.5em] text-corduroy leading-[1.1] tracking-[0.02em]">
								{card.title}
							</h3>
							<p className="font-body text-xs uppercase text-rangoon-green leading-[1.4] tracking-[-0.04em]">
								{card.description}
							</p>
						</article>
					))}
				</BlurReveal>
			</Container>
		</section>
	)
}
