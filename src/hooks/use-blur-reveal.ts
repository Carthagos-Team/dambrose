'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type BlurRevealOptions = {
	duration?: number
	delay?: number
	ease?: string
	start?: string
	/** Vertical translation distance (px) for the reveal. Defaults to 16. */
	y?: number
}

export function useBlurReveal<T extends HTMLElement>(options: BlurRevealOptions = {}) {
	const ref = useRef<T>(null)

	const { duration = 1.4, delay = 0, ease = 'expo.out', start = 'top 80%', y = 16 } = options

	useGSAP(
		() => {
			const el = ref.current
			if (!el) return

			if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
				gsap.set(el, { autoAlpha: 1, y: 0 })
				return
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
		{ scope: ref, dependencies: [duration, delay, ease, start, y] },
	)

	return ref
}
