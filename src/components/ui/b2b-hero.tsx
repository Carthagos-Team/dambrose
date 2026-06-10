import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function B2bHero() {
	return (
		<section className="w-full bg-ecru-white flex flex-col h-[calc(100dvh-5em)] md:h-[calc(100dvh-4.5em)]">
			<Container className="flex-1">
				<RevealImage
					className="relative h-full w-full overflow-hidden bg-bison-hide"
					start="top 95%"
				>
					<Image
						src="/b2b/hero/hero-bg.webp"
						alt="Senior executive in tailored jacket resting hand on a leather journal with watch visible"
						fill
						className="object-cover object-[center_75%]"
						priority
						sizes="100vw"
					/>
				</RevealImage>
			</Container>

			<Container className="pt-8 pb-10 md:pt-4.5 md:pb-10">
				<BlurReveal className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
					<h1 className="font-display text-5xl md:text-6xl text-olive-haze leading-[1.05] max-w-208">
						Longevity and peak performance for the people your company cannot afford to lose.
					</h1>
					<p className="text-gray-olive uppercase leading-relaxed tracking-tight text-sm md:text-xs max-w-115.5 md:pt-4">
						Offer your senior executive team a private medical relationship — physician-led,
						ongoing, and built to protect the health, clarity, and stamina across every year they
						serve.
					</p>
				</BlurReveal>
			</Container>
		</section>
	)
}
