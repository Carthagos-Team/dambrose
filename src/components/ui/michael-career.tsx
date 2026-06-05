import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'

const MILESTONES = [
	'Attended medical school in Dublin, Ireland, focusing on primary care.',
	'Complete a rural-track residency at the University of Kansas.',
	'Ran a small hospital in Montana by himself, dealing with all community.',
	'Became a private physician, founding DAMBROSE in Florida.',
]

export function MichaelCareer() {
	return (
		<section className="relative w-full bg-ecru-white py-28 border-t border-black/10 overflow-hidden">
			<Image
				src="/shared/photo-detail-small.webp"
				alt=""
				width={232}
				height={314}
				className="hidden lg:block absolute right-16 top-1/2 translate-y-[-58%] w-58 h-78.5 object-cover grayscale"
				aria-hidden="true"
			/>
			<Image
				src="/about-dr-michael/misc/portrait-extra.webp"
				alt=""
				width={232}
				height={314}
				className="hidden lg:block absolute -left-7 bottom-0 translate-y-6 w-58 h-78.5 object-cover"
				aria-hidden="true"
			/>

			<Container>
				<div className="relative flex flex-col items-center gap-22">
					<BlurReveal className="relative">
						<h2 className="font-display text-4xl md:text-[3.125em] text-[#6B7167] leading-none tracking-wide text-center max-w-43.5 md:max-w-[8.7em]">
							A career built across every layer of care.
						</h2>
						<BlurReveal delay={0.2}>
							<Image
								src="/marks/stamp.svg"
								alt=""
								width={228}
								height={200}
								className="absolute -top-6 -right-4 md:-top-10 md:-right-16 w-28 md:w-36 h-auto animate-[spin_22s_linear_infinite]"
								aria-hidden="true"
							/>
						</BlurReveal>
					</BlurReveal>

					<BlurReveal delay={0.1} className="w-full max-w-122 flex flex-col gap-12">
						{MILESTONES.map((item, i) => (
							<div key={item} className={i === 0 ? '' : 'border-t border-rangoon-green/85 pt-8'}>
								<p className="font-body text-sm text-rangoon-green/80 uppercase tracking-tight leading-relaxed text-center">
									{item}
								</p>
							</div>
						))}
						<div className="border-t border-rangoon-green/85" aria-hidden="true" />
					</BlurReveal>
				</div>
			</Container>
		</section>
	)
}
