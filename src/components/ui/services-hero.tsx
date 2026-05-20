import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function ServicesHero() {
	return (
		<section className="w-full bg-ecru-white flex flex-col h-[calc(100dvh-5em)] md:h-[calc(100dvh-7em)]">
			<Container className="flex-1">
				{/* Image — true full bleed, no lateral padding */}
				<RevealImage
					className="relative h-full w-full overflow-hidden bg-bison-hide"
					start="top 95%"
				>
					<Image
						src="/features/hands.png"
						alt="Care, fully supported"
						fill
						className="object-cover"
					/>
				</RevealImage>
			</Container>

			<Container className="pt-8 pb-10 md:pt-4.5 md:pb-10">
				<BlurReveal className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
					<h1 className="font-display text-5xl md:text-6xl text-olive-haze leading-[1.15]">
						Care, fully <em className="font-display italic">supported.</em>
					</h1>
					<p className="text-gray-olive uppercase leading-relaxed tracking-tight text-sm md:text-xs max-w-115.5">
						Services shaped around a lifelong relationship — comprehensive, personal, and always
						within reach.
					</p>
				</BlurReveal>
			</Container>
		</section>
	)
}
