import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'

const SPECIALTIES: { label: string; chip: string }[] = [
	{ label: 'Primary care', chip: 'bg-putty/85' },
	{ label: 'Hospital medicine', chip: 'bg-sandy-brown/85' },
	{ label: 'Emergency care', chip: 'bg-regent-gray/55' },
	{ label: 'Complex case management', chip: 'bg-my-pink/80' },
]

export function MichaelStory() {
	return (
		<section className="w-full bg-ecru-white py-28 md:py-36">
			<Container>
				<div className="flex flex-col items-center gap-20 md:gap-25">
					<BlurReveal>
						<h2 className="font-display text-4xl md:text-5xl text-william leading-none text-center">
							A doctor who carries the <em className="font-display italic">whole story.</em>
						</h2>
					</BlurReveal>

					<BlurReveal delay={0.1} className="w-full">
						<div className="flex flex-col items-center gap-10 md:gap-12">
							<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
								{SPECIALTIES.slice(0, 2).map((s) => (
									<Chip key={s.label} label={s.label} chip={s.chip} />
								))}
							</div>
							<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
								{SPECIALTIES.slice(2).map((s) => (
									<Chip key={s.label} label={s.label} chip={s.chip} />
								))}
							</div>
						</div>
					</BlurReveal>
				</div>
			</Container>
		</section>
	)
}

function Chip({ label, chip }: { label: string; chip: string }) {
	// The marker highlights the first word (the keyword). Wrapping just that word in an
	// inline background lets the highlight fit the word at any length, instead of the old
	// fixed-width bar that clipped longer words like "Emergency".
	const [first, ...rest] = label.split(' ')
	const tail = rest.join(' ')
	return (
		<span className="font-body text-lg text-rangoon-green/80 uppercase tracking-tight leading-none">
			<span className={`box-decoration-clone px-[0.55em] py-[0.32em] ${chip}`}>{first}</span>
			{tail ? ` ${tail}` : ''}
		</span>
	)
}
