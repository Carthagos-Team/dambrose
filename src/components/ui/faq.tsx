'use client'

import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
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
							{FAQS.map((faq, i) => (
								<AccordionItem
									key={faq.q}
									faq={faq}
									isOpen={open === i}
									onClick={() => setOpen(open === i ? null : i)}
								/>
							))}
							<div className="border-t border-black/10" />
						</div>
					</BlurReveal>
				</div>
			</Container>
		</section>
	)
}

function AccordionItem({
	faq,
	isOpen,
	onClick,
}: {
	faq: { q: string; a: string }
	isOpen: boolean
	onClick: () => void
}) {
	const bodyRef = useRef<HTMLDivElement>(null)
	const didMount = useRef(false)

	useEffect(() => {
		const body = bodyRef.current
		if (!body) return

		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

		// First mount (or reduced-motion): jump straight to the resting state.
		if (!didMount.current || reduce) {
			didMount.current = true
			gsap.set(body, { height: isOpen ? 'auto' : 0, autoAlpha: isOpen ? 1 : 0 })
			return
		}

		if (isOpen) {
			// OPEN — GSAP measures the natural height and animates 0 → auto.
			gsap.to(body, { height: 'auto', duration: 0.6, ease: 'expo.out', overwrite: 'auto' })
			gsap.to(body, { autoAlpha: 1, duration: 0.45, delay: 0.1, ease: 'power2.out', overwrite: 'auto' })
		} else {
			gsap.to(body, { height: 0, duration: 0.45, ease: 'expo.out', overwrite: 'auto' })
			gsap.to(body, { autoAlpha: 0, duration: 0.3, ease: 'power2.out', overwrite: 'auto' })
		}
	}, [isOpen])

	return (
		<button
			type="button"
			onClick={onClick}
			className="w-full text-left py-8 border-t border-black/10 flex flex-col gap-0 cursor-pointer focus-visible:outline-none group"
		>
			<div className="flex items-start justify-between gap-4">
				<span className="font-display text-xl md:text-2xl text-olive-haze leading-tight">
					{faq.q}
				</span>
				<span className="shrink-0 mt-1.5 w-3.5 h-3.5 relative flex items-center justify-center text-gray-olive/50 group-hover:text-gray-olive transition-colors">
					<svg className="w-full h-full" viewBox="0 0 14 14" fill="none" aria-hidden="true">
						{/* static horizontal bar */}
						<rect x="0" y="6.5" width="14" height="1" rx="0.5" fill="currentColor" />
						{/* rotating bar: 90° (vertical) closed → 0° (overlap) open */}
						<rect
							x="0"
							y="6.5"
							width="14"
							height="1"
							rx="0.5"
							fill="currentColor"
							className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
							style={{
								transformBox: 'fill-box',
								transformOrigin: 'center',
								transform: isOpen ? 'rotate(0deg)' : 'rotate(90deg)',
							}}
						/>
					</svg>
				</span>
			</div>
			<div ref={bodyRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
				<p className="font-body text-xs text-olive-haze uppercase tracking-tight leading-relaxed pt-6 pb-1 whitespace-pre-line">
					{faq.a}
				</p>
			</div>
		</button>
	)
}
