import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'

export function WhereToFindUs() {
	return (
		<section
			className="w-full overflow-x-clip pt-16 md:pt-24"
			style={{
				background: 'linear-gradient(to bottom, #4a6363 0%, #383f39 40%, #222009 100%)',
			}}
		>
			<Container className="flex flex-col gap-16 justify-end">
				<BlurReveal>
					<h2 className="font-display text-5xl md:text-6xl text-ecru-white text-center">
						Where to <em className="italic">find us</em>
					</h2>
				</BlurReveal>

				{/* Card + gradient beam — grouped so no gap between them */}
				<div className="flex flex-col max-w-230 mx-auto w-full">
					{/* Card */}
					<BlurReveal
						delay={0.1}
						className="relative bg-woodrush flex items-center justify-center min-h-105 md:min-h-160 w-full"
					>
						{/* Corner labels — top */}
						<span className="absolute top-4 left-4 font-body text-[0.625em] md:text-xs text-ecru-white/30 uppercase tracking-tight">
							Where to
						</span>
						<span className="absolute top-4 right-4 font-body text-[0.625em] md:text-xs text-ecru-white/30 uppercase tracking-tight">
							Find us
						</span>

						{/* Contact info — content-width block, centered in the card (Figma 4188:223) */}
						<div className="flex flex-col gap-10 md:gap-16 py-16 px-6 w-fit max-w-full">
							<div className="flex flex-col gap-3 md:gap-4">
								<span className="font-body text-xs md:text-sm text-ecru-white/80 uppercase tracking-tight">
									Phone
								</span>
								<a
									href="tel:+14078830456"
									className="font-display text-2xl md:text-[2.22em] text-ecru-white leading-none hover:text-opal transition-colors"
								>
									+1 407-883-0456
								</a>
							</div>

							<div className="flex flex-col gap-3 md:gap-4">
								<span className="font-body text-xs md:text-sm text-ecru-white/80 uppercase tracking-tight">
									Orlando
								</span>
								<address className="not-italic font-display text-2xl md:text-[2.22em] text-ecru-white leading-tight md:leading-none">
									200 South Orange Ave
									<br />
									Suite 1475
									<br />
									Orlando, FL 32801
								</address>
							</div>

							<div className="flex flex-col gap-3 md:gap-4">
								<span className="font-body text-xs md:text-sm text-ecru-white/80 uppercase tracking-tight">
									Email
								</span>
								<a
									href="mailto:michael.dambrose@mjdmd.com"
									className="font-display text-xl md:text-[2.22em] text-ecru-white leading-tight md:leading-none hover:text-opal transition-colors break-all"
								>
									michael.dambrose@mjdmd.com
								</a>
							</div>
						</div>

						{/* Corner labels — bottom */}
						<span className="absolute bottom-4 left-4 font-body text-[0.625em] md:text-xs text-ecru-white/30 uppercase tracking-tight">
							Where to
						</span>
						<span className="absolute bottom-4 right-4 font-body text-[0.625em] md:text-xs text-ecru-white/30 uppercase tracking-tight">
							Find us
						</span>

						{/* Stamp — pre-tilted SVG (rotation baked in); 4em from bottom, half outside the card's right edge */}
						<div className="absolute bottom-8 right-4 w-36 md:w-56 md:bottom-16 md:right-auto md:left-full md:-translate-x-1/2 pointer-events-none">
							<Image
								src="/marks/find-us-stamp.svg"
								alt=""
								width={268}
								height={245}
								aria-hidden
								className="w-full h-auto"
							/>
						</div>
					</BlurReveal>

					{/* Gradient beam — flush against the card */}
					<div className="flex justify-center">
						<div
							className="w-48 h-56 md:w-74 md:h-70"
							style={{
								background: 'linear-gradient(to bottom, #dedbbc 0%, #728b8b 60%, #1c1a08 100%)',
							}}
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
