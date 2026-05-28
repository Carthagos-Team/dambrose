import { AudienceCallout } from '@/components/ui/audience-callout'
import { ContinuousCareAdvantages } from '@/components/ui/continuous-care-advantages'
import { CoreMedicine } from '@/components/ui/core-medicine'
import { EverythingYourMembership } from '@/components/ui/everything-your-membership'
import { Header } from '@/components/ui/header'
import { HeroAlma } from '@/components/ui/hero-alma'
import { HowItWorks } from '@/components/ui/how-it-works'
import { WhatAlmaCovers } from '@/components/ui/what-alma-covers'

export default function AlmaPage() {
	return (
		<>
			<div className="bg-[linear-gradient(180deg,#808D95_10%,#B4A389_50%,#DEDBBC_100%)]">
				<Header variant="contact" />
				<HeroAlma />
			</div>
			<CoreMedicine />
			<WhatAlmaCovers />
			<AudienceCallout />
			<HowItWorks />
			<ContinuousCareAdvantages />
			<EverythingYourMembership />
		</>
	)
}
