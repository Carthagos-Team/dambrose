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

		animateEnter().then(() => {
			const lenis = window.__lenis
			if (lenis) {
				lenis.scrollTo(0, { immediate: true })
				lenis.start()
			}
			ScrollTrigger.refresh()
		})
	}, [pathname])

	return null
}
