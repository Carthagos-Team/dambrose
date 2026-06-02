/**
 * Coordination gate between the home loader and the home Hero reveal.
 *
 * The Hero's RevealImage/BlurReveal normally fire on a ScrollTrigger that is
 * already in view at load — which would play them behind the loader overlay and
 * finish before it lifts. On the home page the loader puts those reveals in
 * "hold" mode; they subscribe here and play only once the loader releases the
 * gate (right as the overlay slides away), so the entrance reads as continuous.
 *
 * Starts pending. If no loader runs this session, the loader releases it
 * immediately so the Hero reveals on load as usual.
 */

let released = false
const subscribers = new Set<() => void>()

export function releaseHomeReveal() {
	if (released) return
	released = true
	subscribers.forEach((cb) => cb())
	subscribers.clear()
}

export function resetHomeReveal() {
	released = false
	subscribers.clear()
}

export function onHomeReveal(cb: () => void) {
	if (released) {
		cb()
		return () => {}
	}
	subscribers.add(cb)
	return () => {
		subscribers.delete(cb)
	}
}

export function isHomeRevealReleased() {
	return released
}
