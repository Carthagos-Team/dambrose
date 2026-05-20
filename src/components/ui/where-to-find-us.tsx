import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'

export function WhereToFindUs() {
	return (
		<section
			className="w-full pt-16 md:pt-24"
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
						className="relative bg-woodrush overflow-hidden flex items-center justify-center min-h-[420px] md:min-h-[640px] w-full"
					>
						{/* Corner labels — top */}
						<span className="absolute top-4 left-4 font-body text-[0.625em] md:text-xs text-ecru-white/30 uppercase tracking-tight">
							Where to
						</span>
						<span className="absolute top-4 right-4 font-body text-[0.625em] md:text-xs text-ecru-white/30 uppercase tracking-tight">
							Find us
						</span>

						{/* Contact info — centered */}
						<div className="flex flex-col gap-10 md:gap-16 py-16 px-6 md:px-8 w-full">
							<div className="flex flex-col gap-3 md:gap-4">
								<span className="font-body text-xs md:text-sm text-ecru-white/80 uppercase tracking-tight">
									Phone
								</span>
								<a
									href="tel:+14078830456"
									className="font-display text-2xl md:text-4xl text-ecru-white leading-none hover:text-opal transition-colors"
								>
									+1 407-883-0456
								</a>
							</div>

							<div className="flex flex-col gap-3 md:gap-4">
								<span className="font-body text-xs md:text-sm text-ecru-white/80 uppercase tracking-tight">
									Orlando
								</span>
								<address className="not-italic font-display text-2xl md:text-4xl text-ecru-white leading-tight md:leading-none">
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
									className="font-display text-xl md:text-4xl text-ecru-white leading-tight md:leading-none hover:text-opal transition-colors break-all"
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

						{/* Stamp */}
						<div
							className="absolute bottom-4 right-4 md:bottom-8 md:right-8 pointer-events-none"
							style={{ transform: 'rotate(13.12deg)' }}
						>
							<Image
								src="/stamp.svg"
								alt=""
								width={140}
								height={123}
								aria-hidden
								className="w-20 md:w-[140px] h-auto opacity-90"
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
