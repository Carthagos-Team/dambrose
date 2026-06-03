'use client'

import { useRouter } from 'next/navigation'
import type { ComponentPropsWithoutRef, FocusEvent, MouseEvent } from 'react'
import { useRef } from 'react'
import { animateLeave } from '@/components/ui/page-transition'

type TransitionLinkProps = ComponentPropsWithoutRef<'a'> & { href: string }

const isExternalHref = (href: string) => /^(https?:|mailto:|tel:|#)/.test(href)

/**
 * Internal navigation with the GSAP cover transition.
 * - external / mailto / tel / hash / new-tab / modified clicks → native behavior
 * - destination "/" (home) → client-side push WITHOUT the overlay (the home
 *   loader owns that arrival)
 * - everything else → cover (animateLeave) then router.push; the watcher reveals
 *
 * Renders a plain <a> (so the cover can run before navigating), which forgoes
 * next/link's automatic prefetch. We restore it manually: prefetch the route's
 * payload once on hover/focus so the push under the overlay resolves instantly.
 */
export function TransitionLink({
	href,
	children,
	onClick,
	onMouseEnter,
	onFocus,
	...rest
}: TransitionLinkProps) {
	const router = useRouter()
	const prefetched = useRef(false)

	const prefetch = () => {
		if (prefetched.current || isExternalHref(href) || rest.target === '_blank') return
		prefetched.current = true
		router.prefetch(href)
	}

	const handleMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
		onMouseEnter?.(e)
		prefetch()
	}

	const handleFocus = (e: FocusEvent<HTMLAnchorElement>) => {
		onFocus?.(e)
		prefetch()
	}

	const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
		onClick?.(e)
		if (e.defaultPrevented) return

		const newTab = rest.target === '_blank'
		if (
			isExternalHref(href) ||
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
		<a
			href={href}
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onFocus={handleFocus}
			{...rest}
		>
			{children}
		</a>
	)
}
