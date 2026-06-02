'use client'

import { useState } from 'react'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { FAQS } from '@/lib/faqs'

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
