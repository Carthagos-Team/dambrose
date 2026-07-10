import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function LifelongMedicineHero() {
	return (
		<section className="w-full bg-ecru-white flex flex-col h-[calc(100dvh-5em)] md:h-[calc(100dvh-4.5em)]">
			{/* ── IMAGE — fills remaining height ───────────────── */}
			<Container className="flex-1">
				<RevealImage
					className="relative h-full w-full overflow-hidden"
					start="top 95%"
				>
					<Image
						src="/lifelong-medicine/hero/hero-lifelong.webp"
						alt="Sunlit olive grove with trees framing a path toward a distant building"
						fill
						className="object-cover object-center"
						priority
						quality={95}
						sizes="(min-width: 1920px) 100vw, (min-width: 1280px) 1360px, 100vw"
					/>
				</RevealImage>
			</Container>

			{/* ── TEXT STRIP ───────────────────────────────────── */}
			<Container className="pt-8 pb-10 md:pt-4.5 md:pb-10">
				<BlurReveal className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
					<h1 className="font-display text-[2.6em] leading-none tracking-[0.01em] text-gray-olive">
						Our <em className="font-display italic">philosophy.</em>
					</h1>
					<p className="font-body text-xs uppercase leading-[1.4] tracking-[-0.04em] text-gray-olive md:flex md:w-[26.375rem] md:flex-col md:items-start md:text-left">
						Care designed to endure, evolve, and remain present through every stage of life.
					</p>
				</BlurReveal>
			</Container>
		</section>
	)
}
