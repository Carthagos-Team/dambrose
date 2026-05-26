import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'

export function MichaelQuote() {
	return (
		<section className="w-full bg-rangitoto py-28 md:py-36 border-t border-black/10">
			<Container>
				<BlurReveal className="flex flex-col items-center gap-12 text-center">
					<blockquote className="font-display text-3xl md:text-4xl text-ecru-white leading-snug max-w-[28ch]">
						&ldquo;People don&rsquo;t just need access to care. They need someone who carries their{' '}
						<em className="font-display italic">story,</em> protects their interests, and helps them
						decide.&rdquo;
					</blockquote>
					<p className="font-body text-xs text-bison-hide uppercase tracking-wide leading-none">
						— Dr. Michael J. D&rsquo;Ambrose
					</p>
				</BlurReveal>
			</Container>
		</section>
	)
}
