'use client'

import { usePathname } from 'next/navigation'

const HEADING_CLASS = 'font-display text-4xl md:text-7xl text-blue-smoke leading-tight'

/**
 * Footer CTA heading. The text is route-specific: /services shows a tailored
 * tagline; every other page keeps the default. Kept as a small client island
 * so the Footer itself stays a server component.
 */
export function FooterCtaHeading() {
	const pathname = usePathname()

	if (pathname === '/services') {
		return (
			<h2 className={HEADING_CLASS}>
				Experience medicine grounded in{' '}
				<em className="font-display italic">
					listening, <br /> understanding, and calm expertise.
				</em>
			</h2>
		)
	}

	return (
		<h2 className={HEADING_CLASS}>
			Begin a <em className="font-display italic">new relationship</em> <br /> with your health.
		</h2>
	)
}
