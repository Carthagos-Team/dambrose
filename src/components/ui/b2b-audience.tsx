import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

const ROWS = [
	{
		index: '01',
		body: 'Founders, C-suite executives, directors, and senior leadership.',
		image: '/b2b/sec02/showcase-blazer-v2.webp',
		alt: 'Brown patterned blazer draped over a leather office chair in sunlit executive office',
		side: 'right' as const,
		objectPosition: 'center center',
	},
	{
		index: '02',
		body: 'Employees with limited time and high pressure.',
		image: '/b2b/sec02/showcase-books-lamp-v2.webp',
		alt: 'Brass desk lamp and stacked books in sunlight with rainbow refraction through shutters',
		side: 'left' as const,
		objectPosition: 'center center',
	},
	{
		index: '03',
		body: 'Frequent travelers and managing complex schedules.',
		image: '/b2b/sec02/showcase-travel-bag-v2.webp',
		alt: 'Dark leather travel bag resting on a surface beside a window with soft curtain light',
		side: 'right' as const,
		objectPosition: 'center center',
	},
]

export function B2bAudience() {
	return (
		<section className="w-full bg-ecru-white py-16 md:py-28">
			<Container>
				<div className="flex flex-col gap-12 md:gap-20">
					<BlurReveal className="flex flex-col items-start text-left md:items-center md:text-center gap-6 md:gap-8">
						<span className="font-body text-xs text-gray-olive uppercase tracking-wide">03</span>
						<h2 className="font-display text-4xl md:text-5xl text-gray-olive leading-none">
							Who is it <em className="font-display italic">for?</em>
						</h2>
					</BlurReveal>

					<div className="flex flex-col gap-4">
						{ROWS.map((row, i) => (
							<div
								key={row.index}
								className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 md:items-start"
							>
								{row.side === 'right' ? (
									<>
										<BlurReveal
											delay={i * 0.08}
											className="md:col-span-3 bg-[#ffffe4] min-[768px]:self-start min-[1200px]:self-stretch"
										>
											<div className="flex flex-col px-5 pt-8 pb-6 md:px-6 md:pt-9 md:pb-7 gap-[10em] min-[1200px]:h-full min-[1200px]:justify-between min-[1200px]:gap-0">
												<span className="font-display italic text-2xl text-corduroy leading-snug">
													{row.index}
												</span>
												<p className="font-body text-xs text-rangoon-green uppercase leading-relaxed tracking-tight">
													{row.body}
												</p>
											</div>
										</BlurReveal>
										<RevealImage
											delay={i * 0.08 + 0.1}
											className="md:col-span-9 relative w-full aspect-1016/362 overflow-hidden bg-bison-hide"
										>
											<Image
												src={row.image}
												alt={row.alt}
												fill
												className="object-cover"
												quality={90}
												sizes="(min-width: 1920px) 75vw, (min-width: 768px) 70vw, 100vw"
												style={{ objectPosition: row.objectPosition }}
											/>
										</RevealImage>
									</>
								) : (
									<>
										<RevealImage
											delay={i * 0.08}
											className="order-last md:order-none md:col-span-9 relative w-full aspect-1016/362 overflow-hidden bg-bison-hide"
										>
											<Image
												src={row.image}
												alt={row.alt}
												fill
												className="object-cover"
												quality={90}
												sizes="(min-width: 1920px) 75vw, (min-width: 768px) 70vw, 100vw"
												style={{ objectPosition: row.objectPosition }}
											/>
										</RevealImage>
										<BlurReveal
											delay={i * 0.08 + 0.1}
											className="md:col-span-3 bg-[#ffffe4] min-[768px]:self-start min-[1200px]:self-stretch"
										>
											<div className="flex flex-col px-5 pt-8 pb-6 md:px-6 md:pt-9 md:pb-7 gap-[10em] min-[1200px]:h-full min-[1200px]:justify-between min-[1200px]:gap-0">
												<span className="font-display italic text-2xl text-corduroy leading-snug">
													{row.index}
												</span>
												<p className="font-body text-xs text-rangoon-green uppercase leading-relaxed tracking-tight">
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
