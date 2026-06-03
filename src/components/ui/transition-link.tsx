'use client'

import { useRouter } from 'next/navigation'
import type { ComponentPropsWithoutRef, MouseEvent } from 'react'
import { animateLeave } from '@/components/ui/page-transition'

type TransitionLinkProps = ComponentPropsWithoutRef<'a'> & { href: string }

/**
 * Internal navigation with the GSAP cover transition.
 * - external / mailto / tel / hash / new-tab / modified clicks → native behavior
 * - destination "/" (home) → client-side push WITHOUT the overlay (the home
 *   loader owns that arrival)
 * - everything else → cover (animateLeave) then router.push; the watcher reveals
 */
export function TransitionLink({ href, children, onClick, ...rest }: TransitionLinkProps) {
	const router = useRouter()

	const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
		onClick?.(e)
		if (e.defaultPrevented) return

		const isExternal = /^(https?:|mailto:|tel:|#)/.test(href)
		const newTab = rest.target === '_blank'
		if (
			isExternal ||
			newTab ||
			e.metaKey ||
			e.ctrlKey ||
			e.shiftKey ||
			e.altKey ||
			e.button !== 0
		) {
			return // let the browser handle it
		}

		e.preventDefault()

		// Same page → nothing to do
		if (typeof window !== 'undefined' && window.location.pathname === href) return

		// Home destination → no overlay; the home loader handles the arrival
		if (href === '/') {
			router.push(href)
			return
		}

		window.__lenis?.stop()
		await animateLeave()
		router.push(href)
	}

	return (
		<a href={href} onClick={handleClick} {...rest}>
			{children}
		</a>
	)
}
