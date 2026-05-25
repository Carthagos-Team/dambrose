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
	blur?: string
}

export function useBlurReveal<T extends HTMLElement>(options: BlurRevealOptions = {}) {
	const ref = useRef<T>(null)

	const { duration = 1.8, delay = 0, ease = 'expo.out', start = 'top 85%', blur = '12px' } = options

	useGSAP(
		() => {
			const el = ref.current
			if (!el) return

			if (
				typeof window !== 'undefined' &&
				window.matchMedia('(prefers-reduced-motion: reduce)').matches
			) {
				gsap.set(el, { autoAlpha: 1, filter: 'none' })
				return
			}

			gsap.from(el, {
				autoAlpha: 0,
				filter: `blur(${blur})`,
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
		{ scope: ref, dependencies: [duration, delay, ease, start, blur] },
	)

	return ref
}
