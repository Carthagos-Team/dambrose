import type { Metadata } from 'next'
import { B2bAudience } from '@/components/ui/b2b-audience'
import { B2bCorporateMembership } from '@/components/ui/b2b-corporate-membership'
import { B2bCta } from '@/components/ui/b2b-cta'
import { B2bGains } from '@/components/ui/b2b-gains'
import { B2bHero } from '@/components/ui/b2b-hero'
import { B2bIntro } from '@/components/ui/b2b-intro'
import { B2bLedByTeam } from '@/components/ui/b2b-led-by-team'
import { Header } from '@/components/ui/header'

export const metadata: Metadata = {
	title: 'Corporate Membership — Dambrose',
	description:
		'Longevity and peak performance for the people your company cannot afford to lose. A private, physician-led medical relationship for senior executive teams.',
}

export default function B2bPage() {
	return (
		<>
			<Header />
			<B2bHero />
			<B2bIntro />
			<B2bGains />
			<B2bAudience />
			<B2bCorporateMembership />
			<B2bLedByTeam />
			<B2bCta />
		</>
	)
}
