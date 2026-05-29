import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function LifelongMedicineHero() {
	return (
		<section className="w-full bg-ecru-white flex flex-col h-[calc(100dvh-5em)] md:h-[calc(100dvh-7em)]">

			{/* ── IMAGE — fills remaining height ───────────────── */}
			<Container className="flex-1">
				<RevealImage
					className="relative h-full w-full overflow-hidden bg-bison-hide"
					start="top 95%"
				>
					<Image
						src="/lifelong-medicine/hero.png"
						alt="Patient and physician in attentive conversation — the heart of DAMBROSE Lifelong Medicine"
						fill
						className="object-cover object-center"
						sizes="100vw"
						priority
					/>
				</RevealImage>
			</Container>

			{/* ── TEXT STRIP ───────────────────────────────────── */}
			<Container className="pt-8 pb-10 md:pt-4.5 md:pb-10">
				<BlurReveal className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
					<h1 className="font-display text-[2.6rem] leading-none tracking-[0.01em] text-gray-olive">
						Our <em className="font-display italic">philosophy.</em>
					</h1>
					<p className="font-body text-xs uppercase leading-[1.4] tracking-[-0.04em] text-gray-olive md:max-w-[31%] md:text-right">
						Care designed to endure, evolve, and remain present through every stage of life.
					</p>
				</BlurReveal>
			</Container>

		</section>
	)
}
