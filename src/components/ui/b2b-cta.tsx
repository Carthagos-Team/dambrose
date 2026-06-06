import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export function B2bCta() {
	return (
		<section className="w-full bg-ecru-white pt-16 pb-16 md:pt-28 md:pb-24">
			<Container>
				<BlurReveal className="flex flex-col items-center text-center gap-8 md:gap-10 max-w-260 mx-auto">
					<Image
						src="/marks/stamp.svg"
						alt=""
						width={106}
						height={106}
						className="w-16 h-16 md:w-26 md:h-26"
						aria-hidden="true"
					/>
					<h2 className="font-display text-4xl md:text-7xl text-blue-smoke leading-[1.05]">
						Protect the people who carry your{' '}
						<em className="font-display italic">organization forward.</em>
					</h2>
					<div className="flex flex-wrap items-center justify-center gap-3">
						<Button href="/contact" variant="opal" size="sm">
							Inquiry about corporate membership
						</Button>
						<Button href="/contact" variant="outline" size="sm" className="text-william">
							Contact us
						</Button>
					</div>
				</BlurReveal>
			</Container>
		</section>
	)
}
