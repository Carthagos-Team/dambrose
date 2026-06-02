import { Features } from '@/components/ui/features'
import { Foundation } from '@/components/ui/foundation'
import { Header } from '@/components/ui/header'
import { Hero } from '@/components/ui/hero'
import { HomeLoader } from '@/components/ui/home-loader'
import { HowMembershipWorks } from '@/components/ui/how-membership-works'
import { MembershipHolds } from '@/components/ui/membership-holds'
import { MoreThan } from '@/components/ui/more-than'
import { Programs } from '@/components/ui/programs'
import { Relationships } from '@/components/ui/relationships'
import { SteadyHand } from '@/components/ui/steady-hand'

export default function HomePage() {
	return (
		<>
			<HomeLoader />
			<Header />
			<Hero hold />
			<Relationships />
			<Programs />
			<MembershipHolds />
			<Features />
			<HowMembershipWorks />
			<MoreThan />
			<SteadyHand />
			<Foundation />
		</>
	)
}
