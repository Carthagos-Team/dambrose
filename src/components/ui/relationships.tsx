import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function Relationships() {
	return (
		<section className="relative w-full bg-ecru-white py-20 md:py-0 md:min-h-[772px] border-t border-black/10">
			{/* Badge — left edge, outside container */}
			<div className="hidden md:block absolute left-10 bottom-[160px] z-10">
				<Image
					src="/badge-left.svg"
					alt="Lifelong medicine Dambrose Orlando FL"
					width={69}
					height={207}
				/>
			</div>

			<Container className="h-full">
				<div className="flex flex-col gap-10 md:gap-20">
					{/* ── Heading (right 59%) ──────────────────────────────── */}
					<BlurReveal className="flex">
						<div className="hidden md:block md:w-[41%] shrink-0" />
						<h2 className="font-display text-4xl md:text-[3.125rem] text-gray-olive leading-tight pt-0 md:pt-[117px]">
							At Dambrose, lasting relationships are the foundation of medicine.
						</h2>
					</BlurReveal>

					{/* ── Image + right content ─────────────────────────────── */}
					<div className="relative flex flex-col md:flex-row md:items-start md:min-h-[428px]">
						{/* Image */}
						<RevealImage className="relative w-full md:absolute md:left-[167px] md:top-0 aspect-501/368 md:w-[501px] overflow-hidden">
							<Image src="/features/elder.png" alt="" fill className="object-cover" />
						</RevealImage>

						{/* Botanical decoration — top-right of image area */}
						<div className="hidden md:block absolute left-[883px] top-0 opacity-80">
							<Image src="/botanical.svg" alt="" width={66} height={80} aria-hidden="true" />
						</div>

						{/* 01 label — positioned between image and description */}
						<BlurReveal delay={0.15} className="hidden md:block absolute left-[760px] top-[184px]">
							<span className="font-body text-xs text-gray-olive/80">01</span>
						</BlurReveal>

						{/* Description */}
						<div className="hidden md:flex md:absolute md:left-[883px] md:top-[210px] flex-col gap-4 w-[403px]">
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
						<div className="md:hidden mt-8 flex flex-col gap-4">
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
