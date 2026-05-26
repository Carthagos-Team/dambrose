import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

type Block = {
	title: string
	body: string[]
	reverse?: boolean
}

const BLOCKS: Block[] = [
	{
		title:
			'Dr. D’Ambrose’s approach to medicine was shaped far from traditional healthcare systems.',
		body: [
			'Trained in Ireland and later practicing in rural America, he learned medicine in environments where one doctor carried full responsibility — from emergency and hospital medicine to obstetrics and long-term primary care. In Montana, he served as the sole physician for an entire community, managing every aspect of their health personally.',
		],
	},
	{
		title:
			'That experience formed his belief early on in comprehensive, relationship-based practice.',
		body: [
			'For Michael, medicine works best when accountability is centralized, when knowledge is carried forward, and when patients are known beyond charts and visits. The distant, clinical “white coat” model contrasts with his commitment to being a real human presence people can trust, call directly, and rely on.',
			'Over time, he became increasingly aware of what modern healthcare had lost: continuity, context, and presence. Systems built around speed and specialization left patients navigating complexity alone, while physicians were forced into fragmented roles.',
		],
		reverse: true,
	},
	{
		title: 'DAMBROSE was created as a direct response.',
		body: [
			'Today, Dr. D’Ambrose leads a deliberately limited private practice where he remains involved in every patient relationship. He attends specialist appointments, coordinates care across disciplines, and serves as a constant medical companion through diagnosis, recovery, and prevention. His role is not only to treat illness, but to guide decisions by filtering noise, anticipating risk, and helping patients move forward with clarity and confidence.',
		],
	},
]

export function MichaelNarrative() {
	return (
		<section className="w-full bg-ecru-white border-t border-black/10">
			<Container>
				<div className="flex flex-col">
					{BLOCKS.map((block, i) => (
						<div
							key={block.title}
							className={`flex flex-col gap-10 py-20 md:py-28 lg:grid lg:grid-cols-2 lg:gap-[9.3em] lg:items-center ${
								block.reverse ? 'lg:[&>*:first-child]:order-2' : ''
							}`}
						>
							<RevealImage
								className="relative w-full aspect-555/800 overflow-hidden bg-bison-hide"
								start="top 90%"
							>
								{/* TODO: replace with editorial photo */}
							</RevealImage>

							<BlurReveal delay={0.1} className="flex flex-col gap-12">
								<h3 className="font-display text-3xl md:text-5xl text-olive-haze leading-tight">
									{block.title}
								</h3>
								<div className="flex flex-col gap-6">
									{block.body.map((p) => (
										<p
											key={p.slice(0, 24)}
											className="font-body text-xs text-rangoon-green uppercase tracking-tight leading-relaxed"
										>
											{p}
										</p>
									))}
								</div>
								{i === BLOCKS.length - 1 && (
									<p className="font-body text-base text-olive-haze leading-relaxed max-w-[40ch]">
										DAMBROSE reflects his belief that medicine is not episodic care, but a lifelong
										journey.
									</p>
								)}
							</BlurReveal>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}
