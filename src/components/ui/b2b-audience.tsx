import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

const ROWS = [
	{
		index: '01',
		body: 'Founders, C-suite executives, directors, and senior leadership.',
		image: '/b2b/sec02/showcase-wide-1.webp',
		alt: 'Senior executive hand resting beside a bouquet of pink roses and white hydrangeas',
		side: 'right' as const,
		objectPosition: 'center 70%',
	},
	{
		index: '02',
		body: 'High-responsibility roles with limited time and high pressure.',
		image: '/b2b/sec02/showcase-wide-2.webp',
		alt: 'Executive in a dark suit walking out through french doors toward sunlit gardens',
		side: 'left' as const,
		objectPosition: 'center 50%',
	},
	{
		index: '03',
		body: 'Executives traveling frequently or managing complex schedules.',
		image: '/b2b/sec02/showcase-wide-3.webp',
		alt: 'Portrait of a senior woman with gold earrings in warm window light',
		side: 'right' as const,
		objectPosition: 'center 28%',
	},
]

export function B2bAudience() {
	return (
		<section className="w-full bg-ecru-white py-16 md:py-28">
			<Container>
				<div className="flex flex-col gap-12 md:gap-20">
					<BlurReveal className="flex flex-col items-center text-center gap-6 md:gap-8">
						<span className="font-body text-xs text-gray-olive uppercase tracking-wide">03</span>
						<h2 className="font-display text-4xl md:text-5xl text-gray-olive leading-none">
							Who is it <em className="font-display italic">for?</em>
						</h2>
					</BlurReveal>

					<div className="flex flex-col gap-4">
						{ROWS.map((row, i) => (
							<div
								key={row.index}
								className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-stretch"
							>
								{row.side === 'right' ? (
									<>
										<BlurReveal
											delay={i * 0.08}
											className="md:col-span-3 bg-[#ffffe4] aspect-328/362 md:aspect-auto"
										>
											<div className="flex flex-col h-full px-5 pt-8 pb-6 md:px-6 md:pt-9 md:pb-7 gap-30">
												<span className="font-display italic text-2xl text-corduroy leading-snug">
													{row.index}
												</span>
												<p className="mt-auto font-body text-xs text-rangoon-green uppercase leading-relaxed tracking-tight">
													{row.body}
												</p>
											</div>
										</BlurReveal>
										<RevealImage
											delay={i * 0.08 + 0.1}
											className="md:col-span-9 relative w-full aspect-1016/362 overflow-hidden bg-bison-hide"
										>
											<Image src={row.image} alt={row.alt} fill className="object-cover" style={{ objectPosition: row.objectPosition }} />
										</RevealImage>
									</>
								) : (
									<>
										<RevealImage
											delay={i * 0.08}
											className="md:col-span-9 relative w-full aspect-1016/362 overflow-hidden bg-bison-hide"
										>
											<Image src={row.image} alt={row.alt} fill className="object-cover" style={{ objectPosition: row.objectPosition }} />
										</RevealImage>
										<BlurReveal
											delay={i * 0.08 + 0.1}
											className="md:col-span-3 bg-[#ffffe4] aspect-328/362 md:aspect-auto"
										>
											<div className="flex flex-col h-full px-5 pt-8 pb-6 md:px-6 md:pt-9 md:pb-7 gap-30">
												<span className="font-display italic text-2xl text-corduroy leading-snug">
													{row.index}
												</span>
												<p className="mt-auto font-body text-xs text-rangoon-green uppercase leading-relaxed tracking-tight">
													{row.body}
												</p>
											</div>
										</BlurReveal>
									</>
								)}
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
