'use client'

import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

type FooterVariant = 'default' | 'alma' | 'praeva'

export function FooterCtaButton({ variant = 'default' }: { variant?: FooterVariant }) {
	const pathname = usePathname()
	const onMembership = pathname === '/membership'
	const href = onMembership ? '/about' : '/membership'
	const label = onMembership ? 'Inquiry about us' : 'Inquiry about membership'

	return (
		<Button href={href} variant={variant === 'alma' ? 'hit-gray' : 'opal'} size="sm">
			{label}
		</Button>
	)
}
