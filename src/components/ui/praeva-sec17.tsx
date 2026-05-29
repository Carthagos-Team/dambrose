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
	"Imaging designed to find what hasn't surfaced yet",
	'A deeper understanding of your individual risk',
	'Personalized longevity strategy',
	'Structured reviews and check-ins throughout the year',
]

export function PraevaSec17() {
	return (
		<section className="relative w-full bg-[#545c63] overflow-hidden min-[1440px]:min-h-[60.4rem]">

			{/* ── Desktop decorative images ── */}

			{/* Top photo — top-left on mobile, straddles section top edge on desktop */}
			<div className="absolute z-0 overflow-hidden
				left-[-46px] top-[22px] w-[147px] h-[84px]
				min-[1440px]:-translate-x-1/2 min-[1440px]:left-[calc(32.5%+0.18rem)] min-[1440px]:top-[-2.11rem] min-[1440px]:w-[19.49rem] min-[1440px]:h-[11.11rem]">
				<Image
					src="/praeva/sec17-photo-top.png"
					alt=""
					fill
					className="object-cover"
				/>
				<div className="absolute inset-0 bg-black/35" />
			</div>

			{/* Left edge partial — bleeds off left */}
			<RevealImage
				className="absolute z-0 overflow-hidden
					left-[-41px] top-[642px] w-[81px] h-[132px]
					min-[1440px]:left-[-3.5rem] min-[1440px]:top-[31.7rem] min-[1440px]:w-[12.65rem] min-[1440px]:h-[20.58rem]"
				start="top 90%"
			>
				<Image
					src="/praeva/sec17-photo-left.png"
					alt=""
					fill
					className="object-cover"
				/>
			</RevealImage>

			{/* Right editorial — bleeds off right */}
			<RevealImage
				className="absolute z-0 overflow-hidden
					left-[calc(75%+29px)] top-[288px] w-[151px] h-[131px]
					min-[1440px]:left-[78%] min-[1440px]:top-[5.77rem] min-[1440px]:w-[19.24rem] min-[1440px]:h-[16.68rem]"
				start="top 90%"
			>
				<Image
					src="/praeva/sec17-photo-right.jpg"
					alt=""
					fill
					className="object-cover"
				/>
			</RevealImage>

			{/* Orchid — bottom-right anchored on mobile, absolute collage position on desktop */}
			<RevealImage
				className="absolute z-0 overflow-hidden
					right-0 bottom-0 w-[6rem] h-[8.875rem]
					min-[1440px]:right-auto min-[1440px]:bottom-auto min-[1440px]:-translate-x-1/2 min-[1440px]:left-[calc(77.5%+0.39rem)] min-[1440px]:top-[53.04rem] min-[1440px]:w-[11.16rem] min-[1440px]:h-[10.08rem]"
				start="top 90%"
			>
				<Image
					src="/praeva/sec17-photo-orchid.png"
					alt=""
					fill
					className="object-cover"
				/>
			</RevealImage>

			{/* ── Centre content column ── */}
			<div className="relative z-10 flex flex-col items-center pt-[5.77rem] pb-[5.77rem]">
				<div className="w-full max-w-[28.86rem] px-5 min-[1440px]:px-0 flex flex-col items-center gap-[2rem] min-[1440px]:gap-[10.9rem]">

					{/* Heading + feature list */}
					<div className="w-full flex flex-col gap-[2.16rem]">

						<BlurReveal>
							<h2 className="font-display text-[2.57rem] leading-none tracking-[0.5px] text-[#ffffe4] text-center uppercase">
								Everything your membership holds:
							</h2>
						</BlurReveal>

						<div className="w-full flex flex-col pt-[2.06rem] px-[2.06rem] gap-[2.47rem]">

							{FEATURES.map((text, i) => (
								<BlurReveal key={text} delay={0.05 + i * 0.07}>
									<div className={i > 0 ? 'border-t border-[#808d95] pt-[1.65rem]' : ''}>
										<p className="font-body text-[0.72rem] leading-[1.4] tracking-[-0.04em] text-[#ffffe4]/80 text-center uppercase">
											{text}
										</p>
									</div>
								</BlurReveal>
							))}

							{/* Special last item — highlighted badge */}
							<BlurReveal delay={0.05 + FEATURES.length * 0.07}>
								<div className="border-t border-[#808d95] pt-[1.65rem] flex justify-center">
									<Button variant="half-and-half" size="badge" className="tracking-[-0.04em] opacity-80">
										Plus everything included in Alma →
									</Button>
								</div>
							</BlurReveal>

						</div>
					</div>

					{/* CTA button */}
					<BlurReveal delay={0.45}>
						<Button variant="outline" size="sm" className="text-[#a8b5bd]">
							Discover our services
						</Button>
					</BlurReveal>

				</div>
			</div>

		</section>
	)
}
