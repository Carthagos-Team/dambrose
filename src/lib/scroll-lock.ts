/**
 * Scroll lock that compensates for the scrollbar width with padding, so locking
 * never changes layout width (no sideways "kick") and nothing is reserved when
 * unlocked (no visible gutter strip beside full-bleed overlays).
 *
 * Fixed-positioned elements (loader overlay, mobile-nav drawer) are laid out
 * against the viewport and ignore the html padding, so they stay full-bleed.
 * Ref-counted so overlapping locks (e.g. loader + drawer) behave correctly.
 */

let locks = 0

export function lockScroll() {
	if (locks++ > 0) return
	const root = document.documentElement
	// Measure before hiding overflow; 0 on overlay-scrollbar systems.
	const scrollbar = window.innerWidth - root.clientWidth
	root.style.overflow = 'hidden'
	if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`
}

export function unlockScroll() {
	if (locks === 0 || --locks > 0) return
	const root = document.documentElement
	root.style.overflow = ''
	root.style.paddingRight = ''
}
