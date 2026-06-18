'use client'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { animateEnter, consumePendingReveal } from '@/components/ui/page-transition'

/**
 * Reveals the new page (lifts the cover overlay) after a client-side route
 * change to any NON-home route. Home is skipped — its loader owns the arrival.
 * Mounted once in the root layout.
 */
export function PageTransitionWatcher() {
	const pathname = usePathname()
	const prev = useRef<string | null>(null)
	const first = useRef(true)

	useEffect(() => {
		if (first.current) {
			first.current = false
			prev.current = pathname
			return
		}
		if (prev.current === pathname) return
		prev.current = pathname

		// Home arrival is handled by the home loader — no overlay reveal here.
		if (pathname === '/') return
		// Only reveal when a TransitionLink actually covered the screen
		// (skips back/forward and plain-link navigations).
		if (!consumePendingReveal()) return

		const lenis = window.__lenis
		// The leave overlay still fully covers the screen here. Reset to the top
		// BEFORE measuring anything (lenis.scrollTo only applies scrollTop=0 on the
		// next raf, so pair it with a synchronous window.scrollTo).
		lenis?.scrollTo(0, { immediate: true, force: true })
		window.scrollTo(0, 0)

		// Two frames so React's committed DOM lays out at scroll 0, then recompute
		// Lenis limits + ScrollTrigger positions WHILE still covered — any pin/refresh
		// hitch is hidden under the overlay. Only then lift to reveal a settled page
		// whose triggers (incl. the re-keyed footer reveals) are already measured.
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				lenis?.resize()
				ScrollTrigger.refresh()
				animateEnter().then(() => {
					lenis?.start()
					// Safety net: client-side nav fires no window 'load', so ScrollTrigger
					// never auto-recalcs once late images finalize their height.
					window.setTimeout(() => ScrollTrigger.refresh(), 250)
				})
			})
		})
	}, [pathname])

	return null
}
