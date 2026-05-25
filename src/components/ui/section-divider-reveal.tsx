'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type SectionDividerRevealProps = {
	className?: string
	start?: string
	duration?: number
	delay?: number
	ease?: string
}

export function SectionDividerReveal({
	className = '',
	start = 'top 92%',
	duration = 1.1,
	delay = 0,
	ease = 'power2.out',
}: SectionDividerRevealProps) {
	const ref = useRef<HTMLDivElement>(null)

	useGSAP(
		() => {
			const el = ref.current
			if (!el) return

			if (
				typeof window !== 'undefined' &&
				window.matchMedia('(prefers-reduced-motion: reduce)').matches
			) {
				gsap.set(el, { scaleX: 1 })
				return
			}

			gsap.set(el, { scaleX: 0, transformOrigin: 'left center' })
			gsap.to(el, {
				scaleX: 1,
				duration,
				delay,
				ease,
				scrollTrigger: {
					trigger: el,
					start,
					once: true,
				},
			})
		},
		{ scope: ref, dependencies: [start, duration, delay, ease] },
	)

	return (
		<div className={`w-full overflow-hidden ${className}`}>
			<div ref={ref} className="h-px w-full bg-cape-cod/40 will-change-transform" />
		</div>
	)
}
