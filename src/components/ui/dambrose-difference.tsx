import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

const COLUMNS = [
	{
		image: '/services/sec03/media-1.webp',
		alt: 'Senior man with caregiver',
		tall: true,
		title: 'Complete care coordination',
		body: 'Appointments, referrals, exams, and logistics are handled seamlessly, so care feels integrated and convenient.',
	},
	{
		image: '/services/sec03/media-3.webp',
		alt: 'Patient seated in a calm consultation setting',
		tall: false,
		title: 'Vetted specialist network',
		body: 'Access to a carefully curated network of trusted specialists, selected through years of professional partnerships.',
	},
	{
		image: '/services/sec03/media-4.webp',
		alt: 'Tranquil landscape',
		tall: true,
		title: 'Goal-aligned medical guidance',
		body: 'Health strategy is built around personal priorities and values, ensuring decisions remain thoughtful and unpressured.',
	},
	{
		image: '/services/sec03/media-2.webp',
		alt: 'Physician examining a patient',
		tall: false,
		title: 'Deliberate physician focus',
		body: 'Membership is limited, allowing time, attention, and clinical presence to remain centered on each individual.',
		imgPosition: 'object-[50%_92%]',
	},
]

export function DambroseDifference() {
	return (
		<section className="w-full bg-white-rock py-16 md:py-[94px]">
			<Container>
				<BlurReveal>
					<h2 className="font-display text-4xl md:text-[50px] text-corduroy text-center leading-none tracking-[0.5px]">
						The DAMBROSE <em className="font-display italic">difference.</em>
					</h2>
				</BlurReveal>

				<div className="mt-12 md:mt-[83px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5 items-start">
					{COLUMNS.map((col, i) => (
						<div key={col.title} className={`flex flex-col${i === 3 ? ' lg:self-stretch' : ''}`}>
							<RevealImage
								className={`relative w-full overflow-hidden bg-bison-hide ${col.tall ? 'aspect-[325/433]' : 'aspect-[325/216]'}`}
								delay={i * 0.08}
							>
								<Image
									src={col.image}
									alt={col.alt}
									fill
									className={`object-cover ${'imgPosition' in col ? col.imgPosition : 'object-center'}`}
								/>
							</RevealImage>

							<BlurReveal className="flex flex-col gap-8 pt-12" delay={i * 0.08 + 0.15}>
								<h3 className="font-display italic text-3xl md:text-[2.375em] text-corduroy leading-[1.1] tracking-[0.76px]">
									{col.title}
								</h3>
								<p className="font-body text-sm text-rangitoto/80 uppercase leading-[1.4] tracking-[-0.56px]">
									{col.body}
								</p>
							</BlurReveal>

							{i === 3 && (
								<BlurReveal
									className="mt-auto hidden justify-end pt-16 lg:flex"
									delay={i * 0.08 + 0.3}
								>
									{/* Vertical brand badge — rotated -90deg, Figma: 12.87881rem × 4.3125rem */}
									<div className="flex h-[12.87881rem] w-[4.3125rem] items-center justify-center">
										<div className="-rotate-90">
											<div
												className="relative border-[0.095687em] border-my-pink"
												style={{ fontSize: '0.83358rem', width: '15.45em', height: '5.175em' }}
											>
												<div
													className="absolute font-body text-[0.58em] uppercase leading-[2.586em] tracking-[0.33em] text-my-pink"
													style={{ left: '1.1724em', top: '0.431em', width: '24.2931em' }}
												>
													<div className="flex items-baseline justify-between">
														<span>lifelong</span>
														<div className="mx-2 mb-0.75 h-px flex-1 bg-my-pink" />
														<span>medicine</span>
													</div>
													<p className="text-center">dambrose</p>
													<p className="text-center">orlando · fl</p>
												</div>
											</div>
										</div>
									</div>
								</BlurReveal>
							)}
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}
