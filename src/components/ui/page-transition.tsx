'use client'

import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { BrasaoMark } from '@/components/ui/brasao-mark'

gsap.registerPlugin(CustomEase, DrawSVGPlugin)

const BG = '#a63d00' // terracotta overlay
const INK = '#E0DFC7' // cream brasão (mirrors the home loader)

let easeReady = false
function ensureEase() {
	if (easeReady) return
	if (!CustomEase.get('pt-ease')) CustomEase.create('pt-ease', '0.65, 0.01, 0.05, 0.99')
	easeReady = true
}

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const getOverlay = () => document.querySelector<HTMLElement>('[data-pt-overlay]')
const getPaths = (root: HTMLElement) =>
	gsap.utils.toArray<SVGPathElement>('[data-pt-brasao] path', root)

/** Set true by a leave (TransitionLink) so the watcher only reveals for
 *  transition-driven navigations — never for back/forward or plain links. */
let pendingReveal = false
export function consumePendingReveal() {
	const p = pendingReveal
	pendingReveal = false
	return p
}

/** LEAVE — terracotta overlay rises from below; the centered brasão draws on
 *  (DrawSVG) then inks in cream — the loader's technique, sped up. Resolves
 *  once covered + filled so the router can navigate. */
export function animateLeave(): Promise<void> {
	return new Promise((resolve) => {
		const overlay = getOverlay()
		if (!overlay) return resolve()
		ensureEase()
		pendingReveal = true
		const paths = getPaths(overlay)

		if (reduced()) {
			gsap.set(overlay, { autoAlpha: 1, yPercent: 0, pointerEvents: 'auto' })
			gsap.set(paths, { drawSVG: '100%', fill: INK, stroke: INK })
			return resolve()
		}

		const tl = gsap.timeline({ onComplete: resolve })
		tl.set(overlay, { autoAlpha: 1, yPercent: 100, pointerEvents: 'auto' })
		tl.set(paths, {
			attr: { 'vector-effect': 'non-scaling-stroke' },
			fill: 'transparent',
			stroke: INK,
			strokeWidth: 1,
			drawSVG: '0%',
		})

		tl.to(overlay, { yPercent: 0, duration: 0.6, ease: 'pt-ease' }, 0)
		// brasão draws on fast, then inks in cream (overlapping tail)
		tl.to(paths, { drawSVG: '100%', duration: 0.5, stagger: 0.008, ease: 'power1.inOut' }, 0.12)
		tl.to(paths, { fill: INK, duration: 0.3, ease: 'power1.out' }, '>-0.15')
		// tiny hold so the full crest is seen, then resolve → navigate
		tl.to({}, { duration: 0.12 })
	})
}

/** ENTER — overlay lifts up off the top revealing the new page, then resets
 *  (overlay below + brasão back to undrawn so the next leave redraws clean). */
export function animateEnter(): Promise<void> {
	return new Promise((resolve) => {
		const overlay = getOverlay()
		if (!overlay) return resolve()
		ensureEase()
		const paths = getPaths(overlay)

		const finish = () => {
			gsap.set(overlay, { autoAlpha: 0, yPercent: 100, pointerEvents: 'none' })
			gsap.set(paths, { fill: 'transparent', stroke: INK, drawSVG: '0%' })
			resolve()
		}

		if (reduced()) return finish()

		gsap.timeline({ onComplete: finish }).to(overlay, {
			yPercent: -100,
			duration: 0.8,
			ease: 'pt-ease',
		})
	})
}

export function PageTransition() {
	return (
		<div
			data-pt-overlay
			aria-hidden="true"
			className="fixed inset-0 z-[120] flex items-center justify-center"
			// No inline transform — GSAP owns yPercent (an inline translate would
			// stack with gsap's yPercent and the cover would never reach the top).
			style={{ backgroundColor: BG, opacity: 0, visibility: 'hidden', pointerEvents: 'none' }}
		>
			<BrasaoMark data-pt-brasao className="h-[clamp(7rem,30vw,15rem)] w-auto" />
		</div>
	)
}
