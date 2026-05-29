import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function MichaelHero() {
	return (
		<section className="w-full bg-ecru-white flex flex-col h-[calc(100dvh-5em)] md:h-[calc(100dvh-4.5em)]">
			<Container className="flex-1">
				<RevealImage
					className="relative h-full w-full overflow-hidden bg-bison-hide"
					start="top 95%"
				>
					<Image
						src="/about-michael/hero.jpg"
						alt="Dr. Michael J. D'Ambrose — Lifelong Medicine"
						fill
						priority
						className="object-cover"
					/>
				</RevealImage>
			</Container>

			<Container className="pt-8 pb-10 md:pt-4.5 md:pb-10">
				<BlurReveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<h1 className="font-display text-5xl md:text-[3.25rem] text-gray-olive leading-none">
						Dr. Michael J. D&rsquo;Ambrose
					</h1>
					<div className="flex flex-col gap-4 md:items-start">
						<p className="font-body text-xs text-gray-olive uppercase tracking-tight leading-relaxed">
							Founder. Physician. Lifelong steward of health.
						</p>
						<Button href="#connect" variant="dark" size="sm" className="w-fit rounded-sm!">
							Connect
						</Button>
					</div>
				</BlurReveal>
			</Container>
		</section>
	)
}
