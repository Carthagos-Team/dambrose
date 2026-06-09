'use client'

import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function NavCtaButton() {
	const pathname = usePathname()
	const onMembership = pathname === '/membership'

	return (
		<Button
			href={onMembership ? '/about' : '/membership'}
			variant="dark"
		>
			{onMembership ? 'Inquiry about us' : 'Inquiry about membership'}
		</Button>
	)
}
