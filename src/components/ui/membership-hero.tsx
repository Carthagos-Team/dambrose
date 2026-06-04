import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function MembershipHero() {
	return (
		<section className="w-full bg-ecru-white flex flex-col h-[calc(100dvh-5em)] md:h-[calc(100dvh-4.5em)]">
			<Container className="flex-1">
				<RevealImage
					className="relative h-full w-full overflow-hidden bg-bison-hide"
					start="top 95%"
				>
					<Image
						src="/membership/membership-hero.png"
						alt="DAMBROSE membership — a personal, physician-led medical relationship"
						fill
						sizes="100vw"
						priority
						className="object-cover"
					/>
				</RevealImage>
			</Container>

			<Container className="pt-8 pb-10 md:pt-4.5 md:pb-10">
				<BlurReveal className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-end">
					<h1 className="font-display text-5xl md:text-[3.25rem] text-olive-haze leading-none">
						DAMBROSE <em className="font-display italic">membership</em>
					</h1>
					<div className="flex flex-col items-start gap-6 md:max-w-115.5 md:justify-self-end">
						<p className="text-gray-olive uppercase leading-relaxed tracking-tight text-sm md:text-xs">
							A personal medical relationship where time is part of the treatment.
						</p>
						<Button href="/inquiry" variant="dark" size="sm">
							Apply
						</Button>
					</div>
				</BlurReveal>
			</Container>
		</section>
	)
}
