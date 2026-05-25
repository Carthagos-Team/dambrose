import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 11 — /about — Figma node 3595:296
 * Editorial layout: left text column (672px) + right tall photo (555×800px).
 * Overlay photo (259×373px) sits absolutely at left:620px top:346px —
 * bridging the gap between columns. Circular badge anchored bottom-left.
 */
export function AboutSec11() {
	return (
		<section className="w-full bg-ecru-white py-12 md:py-[7em]">
			<Container>
				{/* relative: anchors the absolutely-positioned overlay image */}
				<div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

					{/* ── LEFT TEXT COLUMN ────────────────────────────── */}
					<div className="flex flex-col gap-[48px] md:w-[672px] md:min-h-[800px] shrink-0">
						<BlurReveal>
							<h2 className="font-display text-[50px] leading-none tracking-[0.01em] text-gray-olive max-w-[620px]">
								The pulse behind{' '}
								<em className="font-display italic">our purpose.</em>
							</h2>
						</BlurReveal>

						<BlurReveal delay={0.1}>
							<p className="font-body text-xs text-rangoon-green/80 uppercase leading-[1.4] tracking-[-0.04em] max-w-[490px]">
								DAMBROSE&rsquo;s mission is to remain close, no matter what happens. Over time,
								confidence settles, decisions grow clearer, and active care becomes a constant in
								living&mdash;day by day, year by year.
							</p>
						</BlurReveal>

						{/* Circular badge — mt-auto pushes it to the column bottom */}
						<BlurReveal delay={0.05} className="hidden md:block mt-auto">
							<Image
								src="/about/sec11-badge.svg"
								alt="DAMBROSE — Lifelong Medicine circular badge"
								width={127}
								height={109}
								className="w-[127px] h-auto"
								unoptimized
							/>
						</BlurReveal>
					</div>

					{/* ── RIGHT MAIN IMAGE ────────────────────────────── */}
					<RevealImage
						delay={0.1}
						className="relative w-full md:w-[555px] aspect-[555/800] overflow-hidden bg-bison-hide shrink-0"
					>
						<Image
							src="/about/sec11-house.png"
							alt="Victorian house with palm tree — DAMBROSE practice exterior in Orlando"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 555px"
						/>
					</RevealImage>

					{/* ── OVERLAY IMAGE — Figma: absolute left-[620px] top-[346px] ─── */}
					<RevealImage
						delay={0.2}
						className="hidden md:absolute md:block left-[620px] top-[346px] w-[259px] h-[373px] overflow-hidden bg-bison-hide"
					>
						<Image
							src="/about/sec11-pool.png"
							alt="Orchids resting on a poolside — serene DAMBROSE setting"
							fill
							className="object-cover object-center"
							sizes="259px"
						/>
					</RevealImage>
				</div>
			</Container>
		</section>
	)
}
