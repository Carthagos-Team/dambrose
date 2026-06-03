'use client'

import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(CustomEase)

const BG = '#a63d00' // terracotta overlay
const IMAGES = ['/home/transition-1.webp', '/home/transition-2.webp', '/home/transition-3.webp']

let easeReady = false
function ensureEase() {
	if (easeReady) return
	if (!CustomEase.get('pt-ease')) CustomEase.create('pt-ease', '0.65, 0.01, 0.05, 0.99')
	easeReady = true
}

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const getOverlay = () => document.querySelector<HTMLElement>('[data-pt-overlay]')
const getImgs = (root: HTMLElement) => gsap.utils.toArray<HTMLElement>('[data-pt-img]', root)

/** Set true by a leave (TransitionLink) so the watcher only reveals for
 *  transition-driven navigations — never for back/forward or plain links. */
let pendingReveal = false
export function consumePendingReveal() {
	const p = pendingReveal
	pendingReveal = false
	return p
}

/** LEAVE — terracotta overlay rises from below; the centered portrait fades in
 *  and crossfades through the 3 images (gentle scale drift). Resolves once
 *  covered (and the images shown) so the router can navigate. */
export function animateLeave(): Promise<void> {
	return new Promise((resolve) => {
		const overlay = getOverlay()
		if (!overlay) return resolve()
		ensureEase()
		pendingReveal = true
		const imgs = getImgs(overlay)

		if (reduced()) {
			gsap.set(overlay, { autoAlpha: 1, yPercent: 0, pointerEvents: 'auto' })
			gsap.set(imgs, { autoAlpha: 0, scale: 1 })
			if (imgs[0]) gsap.set(imgs[0], { autoAlpha: 1 })
			return resolve()
		}

		const tl = gsap.timeline({ onComplete: resolve })
		tl.set(overlay, { autoAlpha: 1, yPercent: 100, pointerEvents: 'auto' })
		tl.set(imgs, { autoAlpha: 0, scale: 1.05, transformOrigin: 'center' })
		if (imgs[0]) tl.set(imgs[0], { autoAlpha: 1 })

		tl.to(overlay, { yPercent: 0, duration: 0.6, ease: 'pt-ease' }, 0)
		if (imgs[0]) tl.to(imgs[0], { scale: 1, duration: 0.7, ease: 'power2.out' }, 0)

		// quick soft crossfade 1 → 2 → 3 (kept snappy/dynamic, with a light drift)
		const FIRST = 0.38
		const STEP = 0.3
		const FADE = 0.24
		for (let i = 1; i < imgs.length; i++) {
			const at = FIRST + (i - 1) * STEP
			tl.to(imgs[i - 1], { autoAlpha: 0, duration: FADE, ease: 'power1.inOut' }, at)
			tl.to(imgs[i], { autoAlpha: 1, duration: FADE, ease: 'power1.inOut' }, at)
			tl.fromTo(imgs[i], { scale: 1.05 }, { scale: 1, duration: 0.5, ease: 'power2.out' }, at)
		}
		// tiny hold on the last image (positioned so it doesn't extend the cover)
		tl.to({}, { duration: 0.12 }, 0.9)
	})
}

/** ENTER — overlay lifts up off the top revealing the new page, then resets. */
export function animateEnter(): Promise<void> {
	return new Promise((resolve) => {
		const overlay = getOverlay()
		if (!overlay) return resolve()
		ensureEase()
		const imgs = getImgs(overlay)

		const finish = () => {
			gsap.set(overlay, { autoAlpha: 0, yPercent: 100, pointerEvents: 'none' })
			gsap.set(imgs, { autoAlpha: 0, scale: 1.06 })
			if (imgs[0]) gsap.set(imgs[0], { autoAlpha: 1 })
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
			<div className="relative aspect-[333/530] w-[min(62vw,17rem)] overflow-hidden md:w-[23vw] md:max-w-[34rem]">
				{IMAGES.map((src) => (
					// biome-ignore lint/performance/noImgElement: overlay images are tiny, preloaded WebP — next/image fill adds needless complexity here
					<img
						key={src}
						data-pt-img
						src={src}
						alt=""
						className="absolute inset-0 h-full w-full object-cover opacity-0"
					/>
				))}
			</div>
		</div>
	)
}
