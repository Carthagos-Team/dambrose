import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'

const ITEMS = [
	{
		title: 'Uninterrupted support',
		body: 'Members have direct, 24/7 access to their health team whenever guidance is needed, without intermediaries. Care remains continuous, familiar, and grounded in a relationship built on trust and availability.',
	},
	{
		title: 'Care without the wait',
		body: 'Waiting should never be part of the experience. DAMBROSE offers same-day or next-day appointments, allowing care to begin promptly while preserving time for thoughtful evaluation and meaningful conversation.',
	},
	{
		title: 'Minor emergency care',
		body: 'DAMBROSE provides prompt, personalized attention for minor emergencies, including sudden illness or injury. Care often is delivered in a familiar setting, helping patients avoid emergency rooms while remaining supported.',
	},
	{
		title: 'Visits wherever you are',
		body: 'Medical care is offered directly in the home or workplace for patients who value privacy and convenience. These visits integrate care seamlessly into daily life, without sacrificing clinical depth or personal attention.',
	},
	{
		title: 'Lab work, brought to you',
		body: 'Routine and specialized laboratory work can be performed in the comfort of the patient’s home. Each service is delivered with clinical precision, privacy, and minimal disruption.',
	},
	{
		title: 'Full care coordination',
		body: 'Your health team coordinates and attends every consultation, exam, and follow-up to ensure informed decisions and alignment across providers. Nothing falls through between providers.',
	},
	{
		title: 'Chronic condition management',
		body: 'Chronic conditions are managed through personalized, in-home care focused on consistency and long-term stability. Close monitoring and thoughtful coordination help support quality of life and early response to change.',
	},
	{
		title: 'Advocacy in hospital',
		body: 'During emergencies or hospital stays, DAMBROSE remains actively involved, coordinating care, communicating with providers, and guiding patients through decisions with continuity and personal oversight.',
	},
]

export function MedicalFramework() {
	return (
		<section
			data-wrapper="framework_section"
			className="w-full bg-ecru-white py-16 md:py-28 border-t border-black/10"
		>
			<Container>
				<div data-wrapper="framework_component" className="flex flex-col gap-14 md:gap-20">
					<div data-wrapper="framework_header">
						<BlurReveal className="flex flex-col items-center text-center gap-6 md:gap-8">
							<span className="font-body text-xs text-gray-olive uppercase tracking-wide">02</span>
							<h2 className="font-display text-4xl md:text-5xl text-gray-olive leading-none">
								A complete medical framework.
							</h2>
							<div data-wrapper="framework_header_meta" className="w-full flex justify-center">
								<div className="relative inline-block">
									<p className="font-body text-sm uppercase tracking-tight leading-relaxed text-cape-cod text-center max-w-136">
										Your annual membership includes unlimited access to a fully integrated range of
										services.
									</p>
									<Image
										src="/lifelong-medicine-stamp.svg"
										alt=""
										width={133}
										height={63}
										className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-3 md:ml-5 w-26 h-auto"
										aria-hidden="true"
									/>
								</div>
							</div>
						</BlurReveal>
					</div>

					<div data-wrapper="framework_grid_wrapper">
						<div
							data-wrapper="framework_grid"
							className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
						>
							{ITEMS.map((item, i) => (
								<div data-wrapper="framework_card_wrapper" key={item.title}>
									<BlurReveal delay={(i % 4) * 0.08} className="bg-[#ffffe4] min-h-90.5 h-full">
										<div
											data-wrapper="framework_card_content"
											className="flex flex-col h-full px-5 pt-8 pb-6 md:px-6 md:pt-9 md:pb-7"
										>
											<h3 className="font-display italic text-2xl text-corduroy leading-snug">
												{item.title}
											</h3>
											<p className="mt-auto font-body text-xs text-rangoon-green uppercase leading-relaxed tracking-tight">
												{item.body}
											</p>
										</div>
									</BlurReveal>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
