import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

const CHANNELS = [
	{
		title: 'Follow on LinkedIn',
		action: 'go to linkedin',
		href: 'https://www.linkedin.com',
	},
	{
		title: 'michael.dambrose@mjdmd.com',
		action: 'send email',
		href: 'mailto:michael.dambrose@mjdmd.com',
	},
]

export function MichaelConnect() {
	return (
		<section className="w-full bg-ecru-white py-28 md:py-36 border-t border-black/10">
			<Container>
				<div className="flex flex-col gap-16 md:gap-20">
					<BlurReveal>
						<h2 className="font-display text-4xl md:text-5xl text-olive-haze leading-tight max-w-[18ch]">
							Connect with <em className="font-display italic">Dr. Michael J. D&rsquo;Ambrose</em>
						</h2>
					</BlurReveal>

					<div className="flex flex-col">
						{CHANNELS.map((channel, i) => (
							<BlurReveal
								key={channel.title}
								delay={i * 0.1}
								className="flex flex-col gap-6 py-10 border-t border-bison-hide md:flex-row md:items-center md:justify-between"
							>
								<p className="font-display text-2xl md:text-3xl text-rangoon-green leading-tight">
									{channel.title}
								</p>
								<Button href={channel.href} variant="dark" size="sm" className="w-fit">
									{channel.action}
								</Button>
							</BlurReveal>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
