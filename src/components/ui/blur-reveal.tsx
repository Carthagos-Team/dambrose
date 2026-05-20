'use client'

import { useBlurReveal } from '@/hooks/use-blur-reveal'

type BlurRevealProps = {
	children: React.ReactNode
	className?: string
	as?: keyof React.JSX.IntrinsicElements
	duration?: number
	delay?: number
	ease?: string
	start?: string
	blur?: string
}

export function BlurReveal({
	children,
	className = '',
	as: Tag = 'div' as keyof React.JSX.IntrinsicElements,
	duration,
	delay,
	ease,
	start,
	blur,
}: BlurRevealProps) {
	const ref = useBlurReveal<HTMLElement>({ duration, delay, ease, start, blur })

	// biome-ignore lint/suspicious/noExplicitAny: polymorphic ref
	const AnyTag = Tag as any

	return (
		<AnyTag ref={ref} className={className}>
			{children}
		</AnyTag>
	)
}
