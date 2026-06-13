'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/**
 * 3D card-deck scroll effect — adapted from madewithgsap effect042
 * ("Smooth stacking images"). A tall `pin-height` pins a 100vh `container`
 * while a perspective `medias` deck holds the cards stacked with a 3D offset.
 * As you scroll, each card climbs the deck queue and the front one flies up,
 * rotates and scales away, revealing the next — the deck advances toward you.
 *
 * Performance: only GPU transforms (x/y/z/scale/rotation) are animated — no
 * layout-triggering props, no box-shadow/filter. DOM metrics are read via
 * functions on refresh (no per-frame thrashing). Desktop-only (md+); fully
 * skipped on mobile and under prefers-reduced-motion.
 */
export function useCardDeck() {
	const rootRef = useRef<HTMLDivElement>(null)
	const pinHeightRef = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const mediasRef = useRef<HTMLDivElement>(null)

	useGSAP(
		() => {
			const pinHeight = pinHeightRef.current
			const container = containerRef.current
			const mediasEl = mediasRef.current
			if (!pinHeight || !container || !mediasEl) return

			const mm = gsap.matchMedia()
			mm.add(
				{
					isDesktop: '(min-width: 768px)',
					reduce: '(prefers-reduced-motion: reduce)',
				},
				(ctx) => {
					const { isDesktop, reduce } = ctx.conditions as {
						isDesktop: boolean
						reduce: boolean
					}
					if (!isDesktop || reduce) return

					const medias = gsap.utils.toArray<HTMLElement>('[data-media]', mediasEl)
					const n = medias.length
					if (n < 2) return

					const peekY = 22 // vertical peek of the cards behind
					const depthZ = 40 // 3D depth per deck position

					// Initial deck: card 0 (Mark) in front; cards behind recede + peek up.
					medias.forEach((m, i) => gsap.set(m, { y: -i * peekY, z: -i * depthZ }))

					// Single master timeline scrubbed across the pinned scroll. Each front
					// card flies fully off-screen; the cards behind advance one position.
					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: pinHeight,
							start: 'top top',
							end: 'bottom bottom',
							scrub: 0.6,
							pin: container,
							anticipatePin: 1,
							fastScrollEnd: true,
							invalidateOnRefresh: true,
						},
					})

					medias.forEach((media, index) => {
						if (index === n - 1) return // last card rests as the final state

						// Front card flies 100% off the top.
						tl.to(
							media,
							{
								yPercent: -130,
								y: '-65vh',
								scale: 1.15,
								rotation: (Math.random() - 0.5) * 28,
								ease: 'power3.in',
								duration: 1,
							},
							index,
						)

						// Cards behind advance one position in the deck.
						medias.slice(index + 1).forEach((behind, k) => {
							tl.to(
								behind,
								{ y: -k * peekY, z: -k * depthZ, ease: 'power2.out', duration: 1 },
								index,
							)
						})
					})
				},
			)

			return () => mm.revert()
		},
		{ scope: rootRef },
	)

	return { rootRef, pinHeightRef, containerRef, mediasRef }
}
