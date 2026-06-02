'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { onHomeReveal } from '@/lib/home-reveal-gate'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type ImageRevealOptions = {
	duration?: number
	delay?: number
	ease?: string
	start?: string
	/**
	 * When true, the reveal ignores ScrollTrigger and stays in its hidden
	 * start state until the home-reveal gate releases (used by the home loader
	 * so the Hero reveals as the loader lifts). Defaults to false.
	 */
	hold?: boolean
}

export function useImageReveal<T extends HTMLElement>(options: ImageRevealOptions = {}) {
	const ref = useRef<T>(null)

	const { duration = 1.8, delay = 0, ease = 'expo.inOut', start = 'top 85%', hold = false } = options

	useGSAP(
		() => {
			const el = ref.current
			if (!el) return

			if (
				typeof window !== 'undefined' &&
				window.matchMedia('(prefers-reduced-motion: reduce)').matches
			) {
				gsap.set(el, { clipPath: 'none' })
				return
			}

			if (hold) {
				// Transform-based cover wipe: a solid panel slides up (translateY) to
				// reveal the image. Pure compositor work — no clip-path paint and no
				// will-change layer pop, so the reveal stays buttery (loader-style).
				const cover = document.createElement('div')
				cover.style.cssText =
					'position:absolute;inset:0;z-index:2;background:var(--color-ecru-white,#f2f1e3);will-change:transform;'
				el.appendChild(cover)

				const off = onHomeReveal(() => {
					gsap.to(cover, {
						yPercent: -100,
						duration,
						delay,
						ease,
						force3D: true,
						onComplete: () => cover.remove(),
					})
				})

				return () => {
					off()
					cover.remove()
				}
			}

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
		{ scope: ref, dependencies: [duration, delay, ease, start, hold] },
	)

	return ref
}
