import { BlurReveal } from '@/components/ui/blur-reveal'

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
			<div className="mx-auto w-full max-w-340 px-5 md:px-10">
				<div className="flex flex-col gap-20">
					<BlurReveal>
						<h2 className="font-futura text-[clamp(2rem,9vw,2.5rem)] md:text-5xl text-[#545c63] leading-none uppercase text-left md:text-center w-full text-pretty">
							For individuals and families
							<br />
							at every stage of life who need:
						</h2>
					</BlurReveal>

					<div
						className="p-6 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-[1.1rem]"
						style={{ backgroundColor: '#FFFFE4' }}
					>
						{tiles.map((t, i) => (
							<BlurReveal key={t.number} delay={0.1 * (i + 1)}>
								<div
									className="flex flex-col justify-between p-9 min-h-72 md:min-h-[341px]"
									style={{ backgroundColor: '#A8B5BD' }}
								>
									<div className="flex justify-between items-center gap-4">
										<span className="font-body text-[1.2rem] font-extralight text-[#282119] tracking-wide">
											{t.number}
										</span>
										<h3 className="font-futura text-[1.2rem] text-[#282119] uppercase -tracking-wide">
											{t.title}
										</h3>
									</div>
									<p className="font-body text-xs uppercase leading-relaxed tracking-tight text-[#282119] opacity-80">
										{t.description}
									</p>
								</div>
							</BlurReveal>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
