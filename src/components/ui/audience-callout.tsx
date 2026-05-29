import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'

const tiles = [
	{
		number: '01',
		title: 'Steady guidance',
		description:
			'Patients seeking a trusted team to oversee their health, both for routine needs and moments of urgency.',
	},
	{
		number: '02',
		title: 'Consistent oversight',
		description: 'Patients managing ongoing conditions who value continuity over fragmented care.',
	},
] as const

export function AudienceCallout() {
	return (
		<section className="w-full bg-tana py-24 md:py-32">
			<Container>
				<div className='flex flex-col gap-16 md:gap-22'><BlurReveal>
					<h2 className="font-display text-4xl md:text-6xl text-shuttle-gray leading-[1.05] max-w-4xl">
						For individuals and families, at every stage of life, who need:
					</h2>
				</BlurReveal>

				<div
					className="rounded-lg p-6 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-4"
					style={{ backgroundColor: '#FFFFE4' }}
				>
					{tiles.map((t, i) => (
						<BlurReveal key={t.number} delay={0.1 * (i + 1)}>
							<div
								className="flex flex-col justify-between p-7 md:p-9 min-h-72 md:min-h-84 h-full"
								style={{ backgroundColor: '#A8B5BD' }}
							>
								<div className="flex justify-between items-baseline gap-4">
									<span className="font-body text-xl md:text-2xl font-light text-rangoon-green tracking-wide">
										{t.number}
									</span>
									<h3 className="font-display text-xl md:text-2xl italic text-rangoon-green tracking-tight">
										{t.title}
									</h3>
								</div>
								<p className="font-body text-xs md:text-sm uppercase leading-relaxed tracking-tight text-rangoon-green mt-12">
									{t.description}
								</p>
							</div>
						</BlurReveal>
					))}
				</div></div>
			</Container>
		</section>
	)
}
