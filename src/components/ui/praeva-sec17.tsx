import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 17 — /praeva — Figma node 3814:6197
 * "EVERYTHING YOUR MEMBERSHIP HOLDS:" — shuttle-gray bg, centred content column
 * with 5 absolutely-positioned decorative images spread around it.
 */

const FEATURES = [
	'Advanced diagnostics, measured over time',
	"IMAGING DESIGNED TO STAY AHEAD",
	'A deeper understanding of your individual risk',
	'Personalized longevity strategy',
	'Structured reviews and check-ins throughout the year',
]

export function PraevaSec17() {
	return (
		<section className="relative w-full bg-[#545c63] overflow-hidden min-[1440px]:min-h-[60.4em]">
			{/* ── Desktop decorative images ── */}

			{/* Top photo — top-left on mobile, straddles section top edge on desktop */}
			<div
				className="absolute z-[1] overflow-hidden pointer-events-auto
				-left-11.5 top-5.5 w-36.75 h-21
				min-[1440px]:-translate-x-1/2 min-[1440px]:left-[calc(24%-3.72em)] min-[1440px]:top-[-2.11em] min-[1440px]:w-[19.49em] min-[1440px]:h-[11.11em]"
			>
				<Image
					src="/praeva/sec08/gallery-1.webp"
					alt=""
					fill
					className="object-cover object-center"
					quality={90}
					sizes="(min-width: 1440px) 19em, 147px"
				/>
				<div className="absolute inset-0 bg-black/35" />
			</div>

			{/* Left edge partial — bleeds off left */}
			<RevealImage
				className="absolute z-[1] overflow-hidden pointer-events-auto
					-left-10.25 top-160.5 w-20.25 h-33
					min-[1440px]:-left-14 min-[1440px]:top-[31.7em] min-[1440px]:w-[12.65em] min-[1440px]:h-[20.58em]"
				start="top 90%"
			>
				<Image
					src="/praeva/sec08/gallery-left-edge.webp"
					alt=""
					fill
					className="object-cover object-center"
					quality={90}
					sizes="(min-width: 1440px) 13em, 81px"
				/>
			</RevealImage>

			{/* Right editorial — bleeds off right */}
			<RevealImage
				className="absolute z-[1] overflow-hidden pointer-events-auto
					left-[calc(75%+1.8125em)] top-72 w-37.75 h-32.75
					min-[1440px]:left-[78%] min-[1440px]:top-[5.77em] min-[1440px]:w-[19.24em] min-[1440px]:h-[16.68em]"
				start="top 90%"
			>
				<Image
					src="/praeva/sec08/gallery-2-table.webp"
					alt=""
					fill
					className="object-cover"
					quality={90}
					sizes="(min-width: 1440px) 19em, 38vw"
				/>
			</RevealImage>

			{/* Orchid — bottom-right anchored on mobile, absolute collage position on desktop */}
			<RevealImage
				className="absolute z-[1] overflow-hidden pointer-events-auto
					right-0 bottom-0 w-24 h-35.5
					min-[1440px]:right-auto min-[1440px]:bottom-auto min-[1440px]:-translate-x-1/2 min-[1440px]:left-[calc(77.5%+0.39em)] min-[1440px]:top-[53.04em] min-[1440px]:w-[11.16em] min-[1440px]:h-[10.08em]"
				start="top 90%"
			>
				<Image src="/shared/photo-detail-small.webp" alt="" fill className="object-cover" />
			</RevealImage>

			{/* ── Centre content column ── */}
			<div className="relative z-10 flex flex-col items-center pt-[5.77em] pb-[5.77em] pointer-events-none">
				<div className="w-full max-w-[28.86em] px-5 min-[1440px]:px-0 flex flex-col items-center gap-8 min-[1440px]:gap-[10.9em]">
					{/* Heading + feature list */}
					<div className="w-full flex flex-col gap-[2.16em]">
						<BlurReveal>
							<h2 className="font-display text-[2.57em] leading-none tracking-[0.03125em] text-[#ffffe4] text-center uppercase">
								Everything your membership holds:
							</h2>
						</BlurReveal>

						<div className="w-full flex flex-col pt-[2.06em] px-[2.06em] gap-[2.47em]">
							{FEATURES.map((text, i) => (
								<BlurReveal key={text} delay={0.05 + i * 0.07}>
									<div className={i > 0 ? 'border-t border-[#808d95] pt-[1.65em]' : ''}>
										<p className="font-body text-[0.72em] leading-[1.4] tracking-[-0.04em] text-[#ffffe4]/80 text-center uppercase">
											{text}
										</p>
									</div>
								</BlurReveal>
							))}

							{/* Special last item — highlighted badge */}
							<BlurReveal delay={0.05 + FEATURES.length * 0.07}>
								<div className="border-t border-[#808d95] pt-[1.65em] flex justify-center">
									<Button
										variant="half-and-half"
										size="badge"
										className="tracking-[-0.04em] opacity-80 pointer-events-auto"
									>
										Plus everything included in Alma →
									</Button>
								</div>
							</BlurReveal>
						</div>
					</div>

					{/* CTA button */}
					<BlurReveal delay={0.45}>
						<Button variant="outline" size="sm" className="text-[#a8b5bd] pointer-events-auto">
							Discover our services
						</Button>
					</BlurReveal>
				</div>
			</div>
		</section>
	)
}
