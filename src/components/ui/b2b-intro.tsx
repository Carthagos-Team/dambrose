import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function B2bIntro() {
	return (
		<section className="w-full bg-ecru-white py-20 md:py-30">
			<Container>
				<div className="flex flex-col gap-12 md:gap-30">
					<BlurReveal>
						<h2 className="font-display text-3xl md:text-5xl text-olive-haze leading-tight md:leading-none max-w-235">
							Executive physicals find problems. We prevent them
							<br className="hidden md:inline" /> — and when they arise, we stay until they&rsquo;re
							resolved.
						</h2>
					</BlurReveal>

					{/* Row 1 — mobile: image → badge → "01"+body → stamp ; desktop: stamp · image · "01" · badge+body */}
					<div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-10 md:gap-x-4 items-start">
						{/* Image — mobile 1st; desktop cols 2-5 */}
						<div className="order-1 md:order-0 md:col-start-2 md:col-span-4 md:row-start-1">
							<RevealImage className="relative w-full aspect-443/369 overflow-hidden bg-bison-hide">
								<Image
									src="/b2b/sec01/intro-photo.webp"
									alt="Bright residential interior with framed art"
									fill
									className="object-cover"
									sizes="(min-width: 768px) 443px, 100vw"
								/>
							</RevealImage>
						</div>

						{/* Round badge — mobile 2nd centered; desktop top of col 9-12 */}
						<div className="order-2 md:order-0 flex justify-center md:block md:col-start-9 md:col-span-4 md:row-start-1 md:self-start md:pt-16">
							<Image
								src="/marks/dambrose-badge.svg"
								alt=""
								width={102}
								height={115}
								className="w-22 md:w-26 h-auto"
								aria-hidden="true"
							/>
						</div>

						{/* "01" label — mobile 3rd left-aligned; desktop bottom-right of col 6-8 */}
						<div className="order-3 md:order-0 md:col-start-6 md:col-span-3 md:row-start-1 md:self-end md:flex md:justify-end md:pr-16">
							<span className="font-body text-xs text-olive-haze uppercase tracking-wide">01</span>
						</div>

						{/* Body 1 — mobile 4th; desktop bottom of col 9-12 */}
						<div className="order-4 md:order-0 md:col-start-9 md:col-span-4 md:row-start-1 md:self-end">
							<BlurReveal delay={0.1}>
								<p className="font-body text-sm text-rangitoto uppercase leading-relaxed tracking-tight">
									Most executive health programs compress a series of standard tests into one or two
									intensive days. The executive returns to work with a binder of results and, often,
									no clear path forward. No one calls. No one follows up. No one owns the outcome.
								</p>
							</BlurReveal>
						</div>

						{/* Vertical stamp — mobile 5th centered & rotated 90°; desktop top of col 1 */}
						<div className="order-5 md:order-0 flex justify-center md:block md:col-start-1 md:col-span-1 md:row-start-1 py-10 md:py-0">
							<Image
								src="/marks/badge-left.svg"
								alt=""
								width={69}
								height={207}
								className="h-12 md:h-52 w-auto rotate-90 md:rotate-0 origin-center"
								aria-hidden="true"
							/>
						</div>
					</div>

					{/* Row 2 — mobile: image → body ; desktop: body cols 2-5 · image cols 8-11 */}
					<div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-10 md:gap-x-4 items-start">
						{/* Image — mobile 1st; desktop cols 8-11 */}
						<div className="order-1 md:order-0 md:col-start-8 md:col-span-4 md:row-start-1">
							<RevealImage className="relative w-full aspect-443/369 overflow-hidden bg-bison-hide">
								<Image
									src="/b2b/sec01/intro-photo.webp"
									alt="Bright residential interior with framed art"
									fill
									className="object-cover"
									sizes="(min-width: 768px) 443px, 100vw"
								/>
							</RevealImage>
						</div>

						{/* Body 2 — mobile 2nd; desktop cols 2-5 with slight top offset */}
						<div className="order-2 md:order-0 md:col-start-2 md:col-span-4 md:row-start-1 flex flex-col gap-6 md:pt-14">
							<BlurReveal delay={0.1}>
								<p className="font-body text-sm text-rangitoto uppercase leading-relaxed tracking-tight">
									Dambrose operates on a fundamentally different premise.
								</p>
							</BlurReveal>
							<BlurReveal delay={0.15}>
								<p className="font-body text-sm text-rangitoto uppercase leading-relaxed tracking-tight">
									A dedicated health team — led by Dr. Michael J. D&rsquo;Ambrose — builds an
									ongoing medical relationship with each executive. It begins with an advanced,
									in-depth assessment and continues as long-term oversight: monitoring, navigating,
									coordinating, and intervening whenever health requires attention.
								</p>
							</BlurReveal>
							<BlurReveal delay={0.2}>
								<p className="font-body text-sm text-rangitoto uppercase leading-relaxed tracking-tight">
									The luxury is not convenience. It&rsquo;s knowing someone is always paying
									attention.
								</p>
							</BlurReveal>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
