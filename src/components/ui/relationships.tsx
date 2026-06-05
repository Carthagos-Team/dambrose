import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function Relationships() {
	return (
		<section className="relative w-full bg-ecru-white py-20 min-[1440px]:py-0 min-[1440px]:min-h-193 border-t border-black/10">
			{/* Badge — left edge, outside container */}
			<div className="hidden min-[1440px]:block absolute left-10 bottom-40 z-10">
				<Image
					src="/badge-left.svg"
					alt="Lifelong medicine Dambrose Orlando FL"
					width={69}
					height={207}
				/>
			</div>

			<Container className="h-full">
				<div className="flex flex-col gap-10 min-[1440px]:gap-20">
					{/* ── Heading (right 59%) ──────────────────────────────── */}
					<BlurReveal className="flex">
						<div className="hidden min-[1440px]:block min-[1440px]:w-[41%] shrink-0" />
						<h2 className="font-display text-4xl md:text-[3.125em] text-gray-olive leading-tight pt-0 min-[1440px]:pt-[2.34em]">
							At Dambrose, lasting relationships are the foundation of medicine.
						</h2>
					</BlurReveal>

					{/* ── Image + right content ─────────────────────────────── */}
					<div className="relative flex flex-col min-[1440px]:flex-row min-[1440px]:items-start min-[1440px]:min-h-[428px]">
						{/* Image */}
						<RevealImage className="relative w-full min-[1440px]:absolute min-[1440px]:left-[167px] min-[1440px]:top-0 aspect-501/368 min-[1440px]:w-[501px] overflow-hidden">
							<Image
								src="/home/sec01/intro-photo.webp"
								alt="Weathered layered rock — endurance and the foundation of lifelong care"
								fill
								sizes="(max-width: 1439px) 100vw, 501px"
								className="object-cover"
							/>
						</RevealImage>

						{/* Botanical decoration — top-right of image area */}
						<div className="hidden min-[1440px]:block absolute left-[883px] top-0 opacity-80">
							<Image src="/botanical.svg" alt="" width={66} height={80} aria-hidden="true" />
						</div>

						{/* 01 label — positioned between image and description */}
						<BlurReveal delay={0.15} className="hidden min-[1440px]:block absolute left-[760px] top-[184px]">
							<span className="font-body text-xs text-gray-olive/80">01</span>
						</BlurReveal>

						{/* Description */}
						<div className="hidden min-[1440px]:flex min-[1440px]:absolute min-[1440px]:left-[883px] min-[1440px]:top-[210px] flex-col gap-4 w-[403px]">
							<BlurReveal delay={0.1}>
								<p
									className="font-body text-sm text-rangitoto/80 leading-relaxed"
									style={{ letterSpacing: '-0.04em' }}
								>
									Care doesn&apos;t begin with symptoms or end with treatment. It deepens through
									presence, familiarity, and attention. Your doctor sees the person behind the
									condition, carries your history forward, notices what others might miss.
								</p>
							</BlurReveal>
						</div>

						{/* Mobile: description below image */}
						<div className="min-[1440px]:hidden mt-8 flex flex-col gap-4">
							<span className="font-body text-xs text-gray-olive/80">01</span>
							<p
								className="font-body text-sm text-rangitoto/80 leading-relaxed"
								style={{ letterSpacing: '-0.04em' }}
							>
								Care doesn&apos;t begin with symptoms or end with treatment. It deepens through
								presence, familiarity, and attention. Your doctor sees the person behind the
								condition, carries your history forward, notices what others might miss.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
