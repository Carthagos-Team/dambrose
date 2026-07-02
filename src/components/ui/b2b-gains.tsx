import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

type Card =
	| {
			kind: 'text'
			title: string
			body: string
	  }
	| {
			kind: 'image'
			src: string
			alt: string
			/** Mobile: empurra a imagem para o fim para não ficar colada na outra. Reset em sm (grid multi-col). */
			pushLastMobile?: boolean
	  }

const CARDS: Card[] = [
	{
		kind: 'text',
		title: 'A relationship that follows through',
		body: 'CARE DOES NOT END AT ASSESSMENT. YOUR DEDICATED TEAM COORDINATES EVERY SPECIALIST, ADJUSTS CARE PLANS, AND REMAINS INVOLVED THROUGH TREATMENT AND RECOVERY.',
	},
	{
		kind: 'text',
		title: 'Assessment that looks deeper',
		body: 'DAMBROSE GOES WELL BEYOND THE STANDARD EXECUTIVE PHYSICAL. ADVANCED DIAGNOSTICS BUILD A COMPLETE PICTURE OF HEALTH — AND EVERY FINDING HAS A PLAN BEHIND IT.',
	},
	{
		kind: 'text',
		title: 'The right specialist, at the right time',
		body: 'DAMBROSE IDENTIFIES THE RIGHT SPECIALIST AND ENSURES THEY ARE SEEN WITHOUT DELAY — WITH THEIR PERSONAL DOCTOR PRESENT AT EVERY CONSULTATION.',
	},
	{
		kind: 'image',
		src: '/b2b/sec02/showcase.webp',
		alt: 'Executive in soft light during a private medical consultation',
	},
	{
		kind: 'image',
		src: '/b2b/sec02/rock-formation.webp',
		alt: 'Weathered rock face with honeycomb erosion in dramatic light and shadow',
		pushLastMobile: true,
	},
	{
		kind: 'text',
		title: 'Longevity and sustained performance',
		body: 'DAMBROSE BUILDS INDIVIDUALIZED LONGEVITY STRATEGIES THAT TREAT HEALTH AS A LONG-TERM ASSET — CALIBRATED CONTINUOUSLY, NOT CHECKED ONCE A YEAR.',
	},
	{
		kind: 'text',
		title: 'Absolute privacy and confidentiality',
		body: "YOUR EXECUTIVES' HEALTH INFORMATION IS NEVER SHARED WITH THE SPONSORING COMPANY. WHAT HAPPENS IN THEIR CARE REMAINS ENTIRELY THEIR OWN.",
	},
	{
		kind: 'text',
		title: 'Care that meets your executives where they are',
		body: 'DAMBROSE BRINGS CARE TO THE OFFICE OR THE HOME — ON THEIR TERMS AND THEIR SCHEDULE, WITH SAME-DAY AVAILABILITY AND DIRECT ACCESS ANY HOUR.',
	},
]

export function B2bGains() {
	return (
		<section className="w-full bg-ecru-white py-16 md:py-28">
			<Container>
				<div className="flex flex-col gap-12 md:gap-20">
					<BlurReveal className="flex flex-col items-start text-left md:items-center md:text-center gap-6 md:gap-8">
						<span className="font-body text-xs text-gray-olive uppercase tracking-wide">02</span>
						<div className="relative inline-flex">
							<h2 className="font-display text-4xl md:text-5xl text-gray-olive leading-none">
								What your <em className="font-display italic">leadership</em> gains.
							</h2>
							<Image
								src="/marks/lifelong-medicine-stamp.svg"
								alt=""
								width={133}
								height={63}
								className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-3 md:ml-5 w-26 h-auto"
								aria-hidden="true"
							/>
						</div>
					</BlurReveal>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{CARDS.map((card, i) => {
							if (card.kind === 'image') {
								return (
									<RevealImage
										// biome-ignore lint/suspicious/noArrayIndexKey: stable position
										key={`img-${i}`}
										delay={(i % 4) * 0.08}
										className={`relative w-full min-h-[20.5rem] overflow-hidden bg-bison-hide ${card.pushLastMobile ? 'order-last sm:order-none' : ''}`}
									>
										<Image src={card.src} alt={card.alt} fill className="object-cover" />
									</RevealImage>
								)
							}
							return (
								<BlurReveal
									key={card.title}
									delay={(i % 4) * 0.08}
									className="bg-[#ffffe4] min-h-[20.5rem]"
								>
									<div className="flex flex-col h-full px-5 py-8 md:px-6 md:py-9">
										<h3 className="font-display italic text-[1.35rem] text-corduroy leading-tight tracking-wider">
											{card.title}
										</h3>
										<p className="mt-auto font-body text-xs text-rangoon-green/80 uppercase leading-relaxed tracking-tight">
											{card.body}
										</p>
									</div>
								</BlurReveal>
							)
						})}
					</div>
				</div>
			</Container>
		</section>
	)
}
