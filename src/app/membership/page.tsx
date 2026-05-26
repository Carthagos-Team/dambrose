import type { Metadata } from 'next'
import { Header } from '@/components/ui/header'
import { MembershipApply } from '@/components/ui/membership-apply'
import { MembershipExclusivity } from '@/components/ui/membership-exclusivity'
import { MembershipHero } from '@/components/ui/membership-hero'
import { MembershipIncluded } from '@/components/ui/membership-included'
import { MembershipIntro } from '@/components/ui/membership-intro'
import { MembershipPrograms } from '@/components/ui/membership-programs'

export const metadata: Metadata = {
	title: 'Membership — Dambrose',
	description:
		'Annual membership with Dr. Michael Dambrose — a private relationship built on continuity, availability, and full coordination of care.',
}

export default function MembershipPage() {
	return (
		<>
			<Header />
			<MembershipHero />
			<MembershipIntro />
			<MembershipExclusivity />
			<MembershipIncluded />
			<MembershipPrograms />
			<MembershipApply />
		</>
	)
}
