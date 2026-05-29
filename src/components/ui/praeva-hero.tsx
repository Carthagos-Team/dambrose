import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { RevealImage } from '@/components/ui/reveal-image'
import { Container } from '@/components/ui/container'
import { Header } from '@/components/ui/header'

export function PraevaHero() {
	return (
		<section className="relative h-[100dvh] overflow-hidden flex flex-col bg-gradient-to-b from-[#545c63] via-[#dedbbc] via-[78%] to-[#272018]">

			{/* ── Header (~4.5em) + separator ─────────────────── */}
			<div className="relative z-10 shrink-0">
				<Header variant="dark" />
				<div className="w-full h-px bg-[#ffffe4]/20" />
			</div>

			{/* ── Content: 3em gap top, 2em reserve bottom ── */}
			<div className="relative z-10 flex-1 flex flex-col pt-[3em] pb-[2em]">

				{/* Image box — fills all remaining flex space */}
				<div className="relative flex-1">

					<Container className="h-full">
						<RevealImage
							start="top 95%"
							className="relative w-full h-full overflow-hidden bg-[#545c63]"
						>
							<Image
								src="/praeva/hero.jpg"
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
								w-[14.77rem] md:w-[20.27rem] h-[18.59rem] md:h-[25.51rem]"
						>
							<div className="flex flex-col items-center gap-[1.35rem] md:gap-5">
								<h1 className="font-display text-[2.64rem] md:text-[3.62rem] leading-none tracking-[0.11em] text-[#ffffe4] text-center">
									Pra<span className="italic">e</span>va<span className="font-ui text-[1.09rem] md:text-[1.5rem] leading-none tracking-normal align-text-top ml-[0.1em]">™</span>
								</h1>
								<p className="font-ui font-medium text-[7.5px] md:text-[0.55rem] leading-none tracking-[3.41px] md:tracking-[0.29rem] text-[#ffffe4] text-center uppercase not-italic whitespace-nowrap">
									By Michael J. D&apos;Ambrose
								</p>
							</div>
						</BlurReveal>
					</div>

					{/* Tail — card bottom to section bottom, stretches dynamically */}
					<div className="absolute left-1/2 -translate-x-1/2 z-0
						top-[calc(50%+9.295rem)] md:top-[calc(50%+12.755rem)]
						bottom-[-2em]
						w-[6.63rem] md:w-[5.66rem]
						bg-gradient-to-t from-[#272018] from-[3%] via-[#545c63] via-[50%] to-[#dedbbc]" />
				</div>
			</div>

		</section>
	)
}
