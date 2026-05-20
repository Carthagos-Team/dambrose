'use client'

import { useImageReveal } from '@/hooks/use-image-reveal'

type RevealImageProps = {
	children: React.ReactNode
	className?: string
	duration?: number
	delay?: number
	ease?: string
	start?: string
}

export function RevealImage({
	children,
	className = '',
	duration,
	delay,
	ease,
	start,
}: RevealImageProps) {
	const ref = useImageReveal<HTMLDivElement>({ duration, delay, ease, start })

	return (
		<div ref={ref} className={className}>
			{children}
		</div>
	)
}
