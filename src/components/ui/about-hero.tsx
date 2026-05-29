import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * Hero for /about — Figma HERO (3555:120).
 * Layout matches site heroes (home, services, membership): full-viewport image + text strip below.
 */
export function AboutHero() {
	return (
		<section className="w-full bg-ecru-white flex flex-col h-[calc(100dvh-5em)] md:h-[calc(100dvh-7em)]">
			<Container className="flex-1">
				<RevealImage
					className="relative h-full w-full overflow-hidden bg-bison-hide"
					start="top 95%"
				>
					<Image
						src="/about/hero-interior.png"
						alt="Sunlit interior with window, plant, and seating — calm, residential care setting"
						fill
						className="object-cover"
						sizes="100vw"
						priority
					/>
				</RevealImage>
			</Container>

			<Container className="pt-8 pb-10 md:pt-4.5 md:pb-10">
				<BlurReveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
					<h1 className="font-display text-[2.6rem] leading-none md:text-6xl text-gray-olive tracking-tight max-w-[21ch]">
						Medicine that stays personal as{' '}
						<em className="font-display italic leading-none">life unfolds.</em>
					</h1>
					<p className="font-body text-gray-olive uppercase text-xs md:max-w-[26.375rem] md:text-[0.75em] md:text-right leading-[1.4] tracking-tight shrink-0">
						DAMBROSE is a private practice that evolves with you, ensuring you&rsquo;re always cared
						for—from moments of crisis to the quieter stretches in between.
					</p>
				</BlurReveal>
			</Container>
		</section>
	)
}
