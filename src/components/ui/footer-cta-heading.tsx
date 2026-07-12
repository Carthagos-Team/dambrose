'use client'

import { usePathname } from 'next/navigation'

type FooterVariant = 'default' | 'alma' | 'praeva'

const HEADING_BASE = 'font-display text-4xl md:text-7xl leading-tight'
const HEADING_COLOR: Record<FooterVariant, string> = {
	default: 'text-blue-smoke',
	alma: 'text-[#626f77]',
	praeva: 'text-[#545c63]',
}

/**
 * Footer CTA heading. The text is route-specific: /services shows a tailored
 * tagline; every other page keeps the default. The color follows the footer
 * `variant` (default dark theme vs. alma light theme).
 */
export function FooterCtaHeading({ variant = 'default' }: { variant?: FooterVariant }) {
	const pathname = usePathname()
	const headingClass = `${HEADING_BASE} ${HEADING_COLOR[variant]}`

	if (pathname === '/services') {
		return (
			<h2 className={headingClass}>
				Experience medicine
				<br className="hidden min-[540px]:max-[767px]:block" aria-hidden />
				{' '}
				grounded in{' '}
				<em className="font-display italic">
					listening
					<span className="min-[540px]:max-[767px]:hidden">,</span>
					<br
						className="hidden max-[539px]:block min-[540px]:max-[767px]:hidden min-[1280px]:block"
						aria-hidden
					/>
					<br className="hidden min-[540px]:max-[767px]:block" aria-hidden />
					understanding,
					<br className="hidden min-[540px]:max-[767px]:block" aria-hidden />
					{' '}and calm expertise.
				</em>
			</h2>
		)
	}

	return (
		<h2 className={headingClass}>
			Begin a <em className="font-display italic">new relationship</em> <br /> with your health.
		</h2>
	)
}
