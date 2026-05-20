'use client'

import { useState } from 'react'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'

const FAQS = [
	{
		q: 'What is DAMBROSE?',
		a: 'DAMBROSE is a private, membership-based medical practice offering comprehensive primary care and internal medicine to a limited number of patients. The model allows for deeper clinical attention, broader scope of care, and direct access to your health team, with a strong focus on prevention, coordination, and long-term health.',
	},
	{
		q: 'Who is behind DAMBROSE?',
		a: "Dr. Michael J. D'Ambrose is a board-certified family physician and a member of the American Board of Family Medicine, the American Academy of Family Physicians, and the Florida Medical Association. With experience spanning outpatient care, hospital medicine, emergency medicine, and obstetrics, he brings broad clinical perspective and steady judgment to every decision. His practice is shaped by a commitment to thoughtful medicine—staying current with medical science while remaining deeply attentive to the individual behind each case.",
	},
	{
		q: 'How can I apply for membership?',
		a: 'Membership begins with a short application to assess mutual fit and availability. Approved applicants are invited to proceed with enrollment. You can start the process on the membership page.',
	},
	{
		q: 'How is that different from concierge medicine?',
		a: 'While concierge clinics focus on access and convenience, DAMBROSE is built around full clinical ownership. One dedicated health team remains involved across decisions, specialists, and settings, ensuring care is integrated rather than episodic.',
	},
	{
		q: 'Should I still keep my health insurance if I become a member?',
		a: 'Yes. Most members maintain health insurance for services such as hospital stays, surgeries, and specialist procedures. DAMBROSE complements insurance by providing continuous physician involvement, coordination, and access.',
	},
	{
		q: 'What programs do you offer?',
		a: 'DAMBROSE offers two membership options:\n\nAlma — Core primary care and internal medicine for diagnosis, treatment, and ongoing clinical care.\n\nPraeva — A longevity-focused program centered on prevention, risk reduction, and long-term vitality.\n\nWhile Alma is the backbone of your health management, Praeva is its extension.',
	},
	{
		q: 'What is included in the membership?',
		a: 'Membership includes a core set of services such as direct physician access, same-day visits, care coordination, specialist appointment attendance, hospital advocacy, and ongoing clinical oversight. Praeva includes additional services specific to its focus. Membership does not include costs such as hospital procedures and specialists appointments.',
	},
	{
		q: 'How much does the membership cost?',
		a: 'You may enroll in Alma alone, or add Praeva at enrollment or later. Costs vary accordingly, and the membership is billed annually. Contact us to learn more about pricing.',
	},
	{
		q: 'What are the benefits of an annual membership?',
		a: 'Annual membership offers continuity, consistency, and long-term planning. It allows for deeper familiarity with your health history, proactive management, and thoughtful decision-making over time.',
	},
	{
		q: 'Can I cancel my membership at any time?',
		a: 'We offer flexible membership terms. If your circumstances change, contact the practice to discuss your cancellation options and next steps.',
	},
	{
		q: 'How do I schedule an appointment?',
		a: 'Members can schedule appointments by calling or texting the practice directly or through the secure patient portal.',
	},
	{
		q: 'Can I contact my doctor outside office hours?',
		a: 'Yes. Members have direct access to their physician outside standard office hours for urgent questions or concerns.',
	},
	{
		q: 'What if I need urgent care or face a medical emergency?',
		a: 'In an emergency, call 911 immediately. DAMBROSE does not replace emergency services but remains involved by coordinating with hospital teams, sharing medical information, and supporting follow-up care.',
	},
	{
		q: 'Who is DAMBROSE designed for?',
		a: 'DAMBROSE cares for patients of all ages, from children to older adults. Members may be healthy and seeking guidance and reassurance, or managing acute or chronic conditions requiring close attention and coordination.',
	},
	{
		q: 'Is my personal information secure?',
		a: 'Yes. DAMBROSE follows all HIPAA regulations and uses industry-standard safeguards to protect medical and personal information. Access is strictly controlled and confidentiality is a core priority.',
	},
]

export function Faq() {
	const [open, setOpen] = useState<number | null>(null)

	return (
		<section className="w-full bg-ecru-white py-16 md:py-24">
			<Container>
				<div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-24 md:items-start">
					<BlurReveal>
						<h2 className="font-display text-4xl md:text-5xl text-olive-haze leading-tight md:sticky md:top-24">
							Answers to common questions about <em className="italic">DAMBROSE.</em>
						</h2>
					</BlurReveal>

					<BlurReveal delay={0.1}>
						<div>
							{FAQS.map((faq, i) => {
								const isOpen = open === i
								return (
									<button
										key={faq.q}
										type="button"
										onClick={() => setOpen(isOpen ? null : i)}
										className="w-full text-left py-8 border-t border-black/10 flex flex-col gap-0 focus-visible:outline-none group"
									>
										<div className="flex items-start justify-between gap-4">
											<span className="font-display text-xl md:text-2xl text-olive-haze leading-tight">
												{faq.q}
											</span>
											<span className="font-body text-sm text-gray-olive/50 shrink-0 mt-1 group-hover:text-gray-olive transition-colors">
												{isOpen ? '−' : '+'}
											</span>
										</div>
										{isOpen && (
											<p className="font-body text-xs text-olive-haze uppercase tracking-tight leading-relaxed pt-6 whitespace-pre-line">
												{faq.a}
											</p>
										)}
									</button>
								)
							})}
							<div className="border-t border-black/10" />
						</div>
					</BlurReveal>
				</div>
			</Container>
		</section>
	)
}
