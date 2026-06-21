import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function Relationships() {
	return (
		<section className="relative w-full bg-ecru-white py-20 min-[1440px]:py-0 min-[1440px]:min-h-193">
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
				<div className="flex flex-col gap-[3.2rem] min-[1440px]:gap-20">
					{/* ── Heading (right 59%) ──────────────────────────────── */}
					<BlurReveal className="flex">
						<div className="hidden min-[1440px]:block min-[1440px]:w-[41%] shrink-0" />
						<h2 className="font-display text-4xl md:text-[3.125em] text-gray-olive leading-tight pt-0 min-[1440px]:pt-[2.34em]">
							At Dambrose, lasting relationships are the foundation of medicine.
						</h2>
					</BlurReveal>

					{/* ── Image + right content ─────────────────────────────── */}
					<div className="relative flex flex-col gap-[3.2rem] min-[1440px]:gap-0 min-[1440px]:flex-row min-[1440px]:items-start min-[1440px]:min-h-[428px]">
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

						{/* Mobile botanical — Figma node 4344:181 */}
						<div className="min-[1440px]:hidden flex justify-end">
							<Image src="/botanical.svg" alt="" width={36} height={44} aria-hidden="true" />
						</div>

						{/* Mobile: description below image */}
						<div className="min-[1440px]:hidden flex flex-col gap-4">
							<BlurReveal>
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
					</div>

					{/* Mobile label — Figma node 4344:198 */}
					<div className="min-[1440px]:hidden flex justify-end">
						<div
							className="relative w-[10.3rem] h-[3.45rem] border border-blue-smoke flex flex-col items-center justify-center"
							style={{
								fontFamily: 'var(--font-sohne-breit), sans-serif',
								fontSize: '0.39rem',
								letterSpacing: '0.13rem',
								lineHeight: '0.8rem',
								color: 'var(--color-blue-smoke, #728b8b)',
								textAlign: 'center',
								textTransform: 'uppercase',
							}}
						>
							<p>{'lifelong          medicine'}</p>
							<p>dambrose</p>
							<p>orlando - fl</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
