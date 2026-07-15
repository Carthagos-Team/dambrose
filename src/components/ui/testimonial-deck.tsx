'use client'

import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { useCardDeck } from '@/hooks/use-card-deck'

type Quote = {
	author: string
	location: string
	quote: string
}

export function TestimonialDeck({ quotes }: { quotes: Quote[] }) {
	const { rootRef, pinHeightRef, containerRef, mediasRef } = useCardDeck()

	return (
		<div ref={rootRef}>
			<div ref={pinHeightRef} className="md:h-[300vh]">
				<div
					ref={containerRef}
					className="relative flex w-full flex-col items-center justify-center gap-12 overflow-hidden py-20 md:h-screen md:gap-16 md:py-0"
				>
					<Image
						src="/shared/fullpage-section-bg.webp"
						alt=""
						fill
						className="object-cover -z-10"
						aria-hidden="true"
					/>
					<div className="absolute inset-0 -z-10 bg-black/20" aria-hidden="true" />

					<Container>
						<div className="mx-auto flex max-w-[72.0326rem] flex-col items-center gap-12 md:gap-[min(3rem,6vh)]">
							<BlurReveal className="w-full">
								<h2 className="mx-auto max-w-[43.4375rem] font-display text-4xl md:text-[min(3.375em,6.75vh)] text-half-and-half text-center uppercase leading-none tracking-wide">
									Trusted by those who expect more from medicine.
								</h2>
							</BlurReveal>

							<div
								ref={mediasRef}
								className="relative flex w-full flex-col gap-12 md:block md:h-[min(31rem,62vh)] md:perspective-[1500px] md:transform-3d"
							>
								{quotes.map((q) => (
									<figure
										key={q.author}
										data-media
										className="relative w-full overflow-hidden bg-white-rock flex flex-col items-center gap-10 px-6 py-12 text-center md:absolute md:inset-0 md:block md:h-full md:gap-0 md:p-0 md:backface-hidden"
									>
										<figcaption className="font-body text-sm uppercase tracking-[0.02em] text-zeus leading-[1.3] md:absolute md:left-1/2 md:top-[9.03%] md:w-[38.876rem] md:-translate-x-1/2 md:-translate-y-1/2">
											<span className="font-semibold">{q.author}, </span>
											<span className="font-extralight">{q.location}</span>
										</figcaption>

										<Image
											src="/marks/lifelong-medicine-frame.svg"
											alt="Lifelong Medicine"
											width={260}
											height={81}
											className="h-16 w-auto md:absolute md:left-1/2 md:top-[40.32%] md:h-[min(4.2rem,8.4vh)] md:-translate-x-1/2"
										/>

										<blockquote className="font-ui text-[1.25rem] text-zeus/80 leading-[1.1] tracking-[0.02em] text-pretty md:absolute md:left-1/2 md:top-[75.81%] md:w-[min(53rem,calc(100%_-_4rem))] md:text-[min(1.5rem,3vh)] md:-translate-x-1/2 md:-translate-y-1/2">
											{q.quote}
										</blockquote>
									</figure>
								))}
							</div>
						</div>
					</Container>
				</div>
			</div>
		</div>
	)
}
