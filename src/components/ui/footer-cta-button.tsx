'use client'

import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function FooterCtaButton() {
	const pathname = usePathname()
	const href = pathname === '/membership' ? '/about' : '/membership'

	return (
		<Button href={href} variant="opal" size="sm">
			Inquiry about membership
		</Button>
	)
}
