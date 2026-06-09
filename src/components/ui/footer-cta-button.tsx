'use client'

import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function FooterCtaButton() {
	const pathname = usePathname()
	const onMembership = pathname === '/membership'
	const href = onMembership ? '/about' : '/membership'
	const label = onMembership ? 'Inquiry about us' : 'Inquiry about membership'

	return (
		<Button href={href} variant="opal" size="sm">
			{label}
		</Button>
	)
}
