import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { Header } from '@/components/ui/header'
import { RevealImage } from '@/components/ui/reveal-image'

export function PraevaHero() {
	return (
		<section className="relative h-[100dvh] overflow-hidden flex flex-col bg-gradient-to-b from-[#545c63] via-[#dedbbc] via-[78%] to-[#272018]">
			{/* ── Header (4.5em: pt-6 + h-12) + separator ────── */}
			<div className="relative z-10 shrink-0">
				<Header variant="contact" />
				<Container className="mt-5">
					<div className="h-px bg-[#ffffe4]/20" />
				</Container>
			</div>

			{/* ── Content: 3em gap top, 2em reserve bottom ── */}
			<div className="relative z-10 flex-1 flex flex-col pt-12 pb-8">
				{/* Image box — fills all remaining flex space */}
				<div className="relative flex-1">
					<Container className="h-full">
						<RevealImage
							start="top 95%"
							className="relative w-full h-full overflow-hidden bg-[#545c63]"
						>
							<Image
								src="/praeva/hero/hero-bg.webp"
								alt="Ocean and rock landscape — the horizon of preventive care"
								fill
								className="object-cover object-[center_20%]"
								priority
							/>
						</RevealImage>
					</Container>

					{/* Card — absolutely centered over image box */}
					<div className="absolute inset-0 flex items-center justify-center z-10">
						<BlurReveal
							delay={0.15}
							className="flex flex-col items-center justify-center
								bg-gradient-to-t from-[#272018] from-[3%] via-[#545c63] via-[50%] to-[#dedbbc]
								w-[14.77em] md:w-[20.27em] h-[18.59em] md:h-[25.51em]"
						>
							<div className="flex flex-col items-center gap-[1.35em] md:gap-[1.85em]">
								<h1 className="font-display text-[2.64em] md:text-[3.62em] leading-none tracking-[0.04em] text-[#ffffe4] text-center">
									Pra<span className="italic">e</span>va
									<span className="font-ui text-[0.3em] leading-none tracking-normal align-super ml-[0.05em]">
										™
									</span>
								</h1>
								<p className="font-accent text-[0.55em] md:text-[0.65em] leading-none tracking-[0.33em] md:tracking-[0.45em] text-[#ffffe4] text-center uppercase not-italic whitespace-nowrap">
									By Michael J. D&apos;Ambrose
								</p>
							</div>
						</BlurReveal>
					</div>

					{/* Tail — card bottom to section bottom, stretches dynamically */}
					<div
						className="absolute left-1/2 -translate-x-1/2 z-0
						top-[calc(50%+9.295em)] md:top-[calc(50%+12.755em)]
						-bottom-8
						w-[6.63em] md:w-[5.66em]
						bg-gradient-to-t from-[#272018] from-[3%] via-[#545c63] via-[50%] to-[#dedbbc]"
					/>
				</div>
			</div>
		</section>
	)
}
