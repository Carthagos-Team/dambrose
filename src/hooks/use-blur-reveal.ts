'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { onHomeReveal } from '@/lib/home-reveal-gate'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type BlurRevealOptions = {
	duration?: number
	delay?: number
	ease?: string
	start?: string
	/** Vertical translation distance (px) for the reveal. Defaults to 16. */
	y?: number
	/**
	 * When true, the reveal ignores ScrollTrigger and stays hidden until the
	 * home-reveal gate releases (used by the home loader so the Hero text
	 * reveals as the loader lifts). Defaults to false.
	 */
	hold?: boolean
}

export function useBlurReveal<T extends HTMLElement>(options: BlurRevealOptions = {}) {
	const ref = useRef<T>(null)

	const {
		duration = 1.4,
		delay = 0,
		ease = 'expo.out',
		start = 'top 80%',
		y = 16,
		hold = false,
	} = options

	useGSAP(
		() => {
			const el = ref.current
			if (!el) return

			if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
				gsap.set(el, { autoAlpha: 1, y: 0 })
				return
			}

			if (hold) {
				// Real blur-in for the home Hero hand-off (a genuine filter:blur, not
				// just a fade) so the text visibly resolves into focus.
				gsap.set(el, { autoAlpha: 0, y, filter: 'blur(12px)' })
				return onHomeReveal(() => {
					gsap.to(el, {
						autoAlpha: 1,
						y: 0,
						filter: 'blur(0px)',
						duration,
						delay,
						ease,
						onComplete: () => gsap.set(el, { clearProps: 'filter' }),
					})
				})
			}

			gsap.from(el, {
				autoAlpha: 0,
				y,
				duration,
				delay,
				ease,
				scrollTrigger: { trigger: el, start, once: true },
			})
		},
		{ scope: ref, dependencies: [duration, delay, ease, start, y, hold] },
	)

	return ref
}
