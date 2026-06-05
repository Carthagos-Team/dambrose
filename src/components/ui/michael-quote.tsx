import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'

export function MichaelQuote() {
	return (
		<section className="w-full bg-woodrush py-24 md:py-32">
			<Container>
				<BlurReveal className="flex flex-col items-center gap-20 text-center">
					<div className="flex flex-col items-center gap-3">
						<Image
							src="/signature.svg"
							alt=""
							width={119}
							height={74}
							className="w-24 h-auto"
							aria-hidden="true"
						/>
						<Image
							src="/marks/dambrose.svg"
							alt="Dambrose — Lifelong Medicine"
							width={176}
							height={41}
							className="w-44 h-auto"
						/>
						<p className="font-body text-[0.625em] text-fire uppercase tracking-[0.3em] leading-none mt-3">
							Orlando — FL
						</p>
					</div>

					<div className="flex flex-col items-center gap-8 max-w-2xl">
						<blockquote className="font-display text-3xl md:text-4xl text-ecru-white leading-none tracking-wide text-balance">
							&ldquo;People don&rsquo;t just need access to care. They need someone who carries
							their story, protects their interests, and helps them decide.&rdquo;
						</blockquote>

						<p className="font-body text-xs text-bison-hide/80 uppercase tracking-tight leading-relaxed">
							— Dr. Michael J. D&rsquo;Ambrose
						</p>
					</div>
				</BlurReveal>
			</Container>
		</section>
	)
}
