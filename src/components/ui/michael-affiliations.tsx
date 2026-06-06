import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'

const AFFILIATIONS = [
	{
		name: 'American Board of Family Medicine',
		short: 'ABFM',
		src: '/about-dr-michael/sec13/logo-1.webp',
		width: 48,
		height: 52,
	},
	{
		name: 'American Academy of Family Physicians',
		short: 'AAFP',
		src: '/about-dr-michael/sec13/logo-2.webp',
		width: 109,
		height: 48,
	},
	{
		name: 'Florida Medical Association',
		short: 'FMA',
		src: '/about-dr-michael/sec13/logo-3.webp',
		width: 131,
		height: 52,
	},
]

export function MichaelAffiliations() {
	return (
		<section className="relative w-full bg-ecru-white py-28">
			<BlurReveal delay={0.2} className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2">
				<Image
					src="/marks/badge-left.svg"
					alt=""
					width={69}
					height={207}
					className="h-52 w-auto"
					aria-hidden="true"
				/>
			</BlurReveal>

			<Container>
				<div className="flex flex-col items-center gap-20">
					<BlurReveal>
						<h2 className="font-display text-4xl md:text-[3.125em] text-woodrush leading-none tracking-wide text-center">
							Professional affiliations
						</h2>
					</BlurReveal>

					<BlurReveal
						delay={0.1}
						className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10"
					>
						{AFFILIATIONS.map((a) => (
							<Image
								key={a.short}
								src={a.src}
								alt={a.name}
								width={a.width}
								height={a.height}
								className="h-13 w-auto object-contain grayscale opacity-90"
							/>
						))}
					</BlurReveal>
				</div>
			</Container>
		</section>
	)
}
