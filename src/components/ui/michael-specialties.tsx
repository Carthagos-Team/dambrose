import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'

const TAGS_ROW_1 = [
	{ label: 'Primary care', color: 'bg-putty' },
	{ label: 'Hospital medicine', color: 'bg-sandy-brown' },
	{ label: 'Emergency care', color: 'bg-[#B2BBC8]' },
]

const TAGS_ROW_2 = [
	{ label: 'Obstetrics', color: 'bg-green-spring' },
	{ label: 'Complex case management', color: 'bg-my-pink' },
]

function Tag({ label, color }: { label: string; color: string }) {
	return (
		<li className="relative isolate inline-flex items-center py-2 px-2">
			<span
				className={`absolute top-[3px] left-[-47px] h-9 w-[162px] -z-10 ${color}`}
				aria-hidden="true"
			/>
			<span className="font-body text-lg text-rangoon-green/80 uppercase tracking-tight leading-none whitespace-nowrap">
				{label}
			</span>
		</li>
	)
}

export function MichaelSpecialties() {
	return (
		<section className="w-full bg-ecru-white py-28">
			<Container>
				<div className="flex flex-col items-center gap-[88px]">
					<BlurReveal>
						<h2 className="font-display text-4xl md:text-[3.125rem] text-william leading-none tracking-wide text-center">
							A doctor who carries the{' '}
							<em className="font-display italic">whole story.</em>
						</h2>
					</BlurReveal>

					<BlurReveal delay={0.1} className="flex flex-col items-center gap-16">
						<ul className="flex flex-wrap items-center justify-center gap-x-20 gap-y-6">
							{TAGS_ROW_1.map((tag) => (
								<Tag key={tag.label} {...tag} />
							))}
						</ul>
						<ul className="flex flex-wrap items-center justify-center gap-x-20 gap-y-6">
							{TAGS_ROW_2.map((tag) => (
								<Tag key={tag.label} {...tag} />
							))}
						</ul>
					</BlurReveal>
				</div>
			</Container>
		</section>
	)
}
