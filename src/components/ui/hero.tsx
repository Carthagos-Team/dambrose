import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function Hero({ hold = false }: { hold?: boolean } = {}) {
	return (
		<section className="w-full bg-ecru-white flex flex-col h-[calc(100dvh-5em)] md:h-[calc(100dvh-4.5em)]">
			<Container className="flex-1">
				<RevealImage
					className="relative h-full w-full overflow-hidden bg-bison-hide"
					start="top 95%"
					hold={hold}
				>
					<Image
						src="/contact/contact.png"
						alt="Dr. Michael Dambrose - Lifelong Medicine"
						fill
						className="object-cover"
					/>
				</RevealImage>
			</Container>

			{/* Content strip */}
			<Container className="pt-8 pb-10 md:pt-4.5 md:pb-10">
				<BlurReveal hold={hold} delay={hold ? 0.9 : undefined} className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
					<h1 className="font-display text-5xl md:text-6xl text-olive-haze leading-[1.15]">
						Lifelong care that <em className="font-display italic">knows</em> you.
					</h1>
					<p className="text-gray-olive uppercase leading-relaxed tracking-tight text-sm md:text-xs max-w-115.5">
						Discover a private medical practice built on personal oversight and continuity across
						every stage of life.
					</p>
				</BlurReveal>
			</Container>
		</section>
	)
}
