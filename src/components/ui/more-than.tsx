import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { Button } from './button'
import { RevealImage } from './reveal-image'

export function MoreThan() {
	return (
		<section className="w-full bg-ecru-white py-16 md:py-28">
			<Container>
				<div className="flex flex-col gap-6 md:gap-28">
					{/* ── Heading ────────────────────────────────────────────── */}
					<BlurReveal>
						<h2 className="font-display text-[2.5em] md:text-[3.125em] text-judge-gray md:text-center leading-[1.1]">
							More than a f<span className="italic">amily doctor.</span>
							<br />
							More than concierge medicine.
						</h2>
					</BlurReveal>

					{/* ── Mobile layout (single column, mobile content order) ── */}
					<div className="flex flex-col gap-6 md:hidden">
						<BlurReveal delay={0.1}>
							<p
								className="font-body text-sm uppercase text-rangitoto/80 leading-[1.4]"
								style={{ letterSpacing: '-0.04em' }}
							>
								TRADITIONAL HEALTHCARE IS FRAGMENTED AND INEFFICIENT, SHAPED BY MULTIPLE PROVIDERS, RUSHED ENCOUNTERS, AND CONSTANT HANDOFFS. WHILE ALTERNATIVE MODELS IMPROVE ACCESS, THEY OFTEN REMAIN EPISODIC — LEAVING CARE POORLY CONNECTED.
							</p>
						</BlurReveal>

						<RevealImage className="mb-10 relative w-full aspect-335/365 overflow-hidden bg-bison-hide">
							<Image src="/home/sec10/media-featured.webp" alt="" fill className="object-cover" />
						</RevealImage>

						<BlurReveal delay={0.15}>
							<p
								className="font-body text-sm uppercase text-rangitoto/80 leading-[1.4]"
								style={{ letterSpacing: '-0.04em' }}
							>
								DAMBROSE goes further by keeping medicine accountable and personal, bringing
								coherence and continuity where systems and shortcuts fall short.
							</p>
						</BlurReveal>

						<RevealImage delay={0.2} className="mb-10 relative w-full aspect-335/365 overflow-hidden bg-bison-hide">
							<Image
								src="/home/sec10/media-large.webp"
								alt="White columns and palm frond shadows on a sunlit building facade"
								fill
								className="object-cover"
							/>
						</RevealImage>

						<BlurReveal delay={0.25}>
							<Button href="/philosophy" className="w-full" variant="fire">
								Learn about our philosophy →
							</Button>
						</BlurReveal>
					</div>

					{/* ── Desktop layout (two columns) ── */}
					<div className="hidden md:flex md:flex-row md:gap-20">
						{/* Left column */}
						<div className="flex flex-col pt-40 w-[41.5%] shrink-0">
							<RevealImage className="relative w-full aspect-564/400 overflow-hidden bg-bison-hide">
								<Image src="/home/sec10/media-large.webp" alt="White columns and palm frond shadows on a sunlit building facade" fill className="object-cover" />
							</RevealImage>

							<BlurReveal delay={0.15} className="mt-4">
								<p
									className="font-body text-sm uppercase text-rangitoto/80 leading-relaxed"
									style={{ letterSpacing: '-0.04em' }}
								>
									DAMBROSE goes further by keeping medicine accountable and personal, bringing
									coherence and continuity where systems and shortcuts fall short.
								</p>
							</BlurReveal>

							<BlurReveal delay={0.25} className="mt-auto pt-[3.2em]">
								<Button href="/philosophy" className="w-fit" variant="fire">
									Learn about our philosophy →
								</Button>
							</BlurReveal>
						</div>

						{/* Right column */}
						<div className="flex flex-col gap-30 flex-1">
							<BlurReveal delay={0.1}>
								<p
									className="font-body text-sm uppercase text-rangitoto/80 leading-relaxed"
									style={{ letterSpacing: '-0.04em' }}
								>
									TRADITIONAL HEALTHCARE IS FRAGMENTED AND INEFFICIENT, SHAPED BY MULTIPLE PROVIDERS, RUSHED ENCOUNTERS, AND CONSTANT HANDOFFS. WHILE ALTERNATIVE MODELS IMPROVE ACCESS, THEY OFTEN REMAIN EPISODIC — LEAVING CARE POORLY CONNECTED.
								</p>
							</BlurReveal>

							<RevealImage delay={0.2} className="relative w-full aspect-680/642 overflow-hidden bg-bison-hide">
								<Image
									src="/home/sec10/media-featured.webp"
									alt="A man at the sink in a bright, sunlit home kitchen"
									fill
									className="object-cover"
								/>
							</RevealImage>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
