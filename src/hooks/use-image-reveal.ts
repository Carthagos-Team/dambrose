'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type ImageRevealOptions = {
	duration?: number
	delay?: number
	ease?: string
	start?: string
}

export function useImageReveal<T extends HTMLElement>(options: ImageRevealOptions = {}) {
	const ref = useRef<T>(null)

	const { duration = 1.8, delay = 0, ease = 'expo.inOut', start = 'top 85%' } = options

	useGSAP(
		() => {
			const el = ref.current
			if (!el) return

			gsap.set(el, { clipPath: 'inset(0 0 100% 0)' })

			gsap.to(el, {
				clipPath: 'inset(0 0 0% 0)',
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
		{ scope: ref, dependencies: [duration, delay, ease, start] },
	)

	return ref
}
