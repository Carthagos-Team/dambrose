import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 11 — /about — Figma node 3595:296
 */
export function AboutSec11() {
	return (
		<section className="w-full bg-ecru-white py-12 md:py-28">
			<Container>
				<div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
					{/* ── LEFT TEXT COLUMN ────────────────────────────── */}
					<div className="flex flex-col gap-[2.4em] md:w-[49%] md:min-h-160 shrink-0">
						<BlurReveal>
							<h2 className="font-display text-[2.5em] leading-none tracking-[0.01em] text-gray-olive max-w-[12.4em]">
								The pulse behind <em className="font-display italic">our purpose.</em>
							</h2>
						</BlurReveal>
						<BlurReveal delay={0.1}>
							<p className="font-body text-xs text-rangoon-green/80 uppercase leading-[1.4] tracking-[-0.04em] max-w-[32.6667em]">
								DAMBROSE&rsquo;s mission is to remain close, no matter what happens. Over time,
								confidence settles, decisions grow clearer, and active care becomes a constant in
								living&mdash;day by day, year by year.
							</p>
						</BlurReveal>
						<BlurReveal delay={0.05} className="hidden md:block mt-auto">
							<Image
								src="/about/sec11-badge.svg"
								alt="DAMBROSE — Lifelong Medicine circular badge"
								width={127}
								height={109}
								className="w-[6.35em] h-auto"
								unoptimized
							/>
						</BlurReveal>
					</div>

					{/* ── RIGHT MAIN IMAGE ────────────────────────────── */}
					<RevealImage
						delay={0.1}
						className="relative w-full md:w-[41%] aspect-[555/800] overflow-hidden bg-bison-hide shrink-0"
					>
						<Image
							src="/about-us/sec04/portrait-large.webp"
							alt="Victorian house with palm tree — DAMBROSE practice exterior in Orlando"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 41vw"
						/>
					</RevealImage>

					{/* ── OVERLAY IMAGE — absolute, bridges columns ─── */}
					<RevealImage
						delay={0.2}
						className="hidden md:absolute md:block left-[46%] top-[42%] w-[19%] aspect-[259/373] overflow-hidden bg-bison-hide"
					>
						<Image
							src="/about-us/sec04/portrait-small.webp"
							alt="Orchids resting on a poolside — serene DAMBROSE setting"
							fill
							className="object-cover object-center"
							sizes="19vw"
						/>
					</RevealImage>
				</div>
			</Container>
		</section>
	)
}
