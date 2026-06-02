import { Features } from '@/components/ui/features'
import { Foundation } from '@/components/ui/foundation'
import { Header } from '@/components/ui/header'
import { Hero } from '@/components/ui/hero'
import { HowMembershipWorks } from '@/components/ui/how-membership-works'
import { MembershipHolds } from '@/components/ui/membership-holds'
import { MoreThan } from '@/components/ui/more-than'
import { Programs } from '@/components/ui/programs'
import { Relationships } from '@/components/ui/relationships'
import { SteadyHand } from '@/components/ui/steady-hand'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
	title: 'DAMBROSE — Lifelong, Physician-Led Private Medical Care',
	absoluteTitle: true,
	path: '/',
	description:
		'Lifelong care that knows you. DAMBROSE is a private, membership-based medical practice offering primary care, internal medicine, prevention and longevity — with direct physician access and full coordination of care across every stage of life.',
	keywords: [
		'private medical practice',
		'membership medicine',
		'lifelong care',
		'direct physician access',
		'continuity of care',
		'preventive care',
		'Dambrose method',
	],
})

export default function HomePage() {
	return (
		<>
			<Header />
			<main className="flex-1 w-full">
				<Hero />
				<Relationships />
				<Programs />
				<MembershipHolds />
				<Features />
				<HowMembershipWorks />
				<MoreThan />
				<SteadyHand />
				<Foundation />
			</main>
		</>
	)
}
