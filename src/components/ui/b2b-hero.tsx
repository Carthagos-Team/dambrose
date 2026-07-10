import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function B2bHero() {
	return (
		<section className="w-full bg-ecru-white flex flex-col h-[calc(100dvh-5em)] md:h-[calc(100dvh-4.5em)]">
			<Container className="flex-1">
				<RevealImage
					className="relative h-full w-full overflow-hidden"
					start="top 95%"
				>
					<Image
						src="/b2b/hero/hero-coast.webp"
						alt="Coastal cliffs and calm ocean viewed through golden grasses"
						fill
						className="object-cover object-center"
						priority
						quality={95}
						sizes="(min-width: 1920px) 100vw, (min-width: 1280px) 1360px, 100vw"
					/>
				</RevealImage>
			</Container>

			<Container className="pt-8 pb-10 md:pt-4.5 md:pb-10">
				<BlurReveal className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
					<h1 className="font-display text-5xl md:text-6xl text-olive-haze leading-[1.05] max-w-208">
						Longevity and peak performance for the people who carry your company forward.
					</h1>
					<p className="font-body text-gray-olive uppercase leading-relaxed tracking-tight text-sm md:text-xs max-w-115.5 md:max-w-160">
						A PRIVATE HEALTH MEMBERSHIP FOR LEADERS WHO EXPECT CONTINUITY, TRUSTED GUIDANCE, AND TOTAL CLARITY ON THEIR HEALTH.
					</p>
				</BlurReveal>
			</Container>
		</section>
	)
}
