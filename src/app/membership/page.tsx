import { JsonLd } from '@/components/json-ld'
import { Header } from '@/components/ui/header'
import { MembershipApply } from '@/components/ui/membership-apply'
import { MembershipExclusivity } from '@/components/ui/membership-exclusivity'
import { MembershipHero } from '@/components/ui/membership-hero'
import { MembershipIncluded } from '@/components/ui/membership-included'
import { MembershipIntro } from '@/components/ui/membership-intro'
import { MembershipPrograms } from '@/components/ui/membership-programs'
import { SectionDivider } from '@/components/ui/section-divider'
import { Testimonials } from '@/components/ui/testimonials'
import { pageMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata = pageMetadata({
	title: 'Membership',
	path: '/membership',
	description:
		'A private medical relationship with Dr. D’Ambrose — direct physician access, same-day visits, hospital advocacy, and full coordination of care.',
	keywords: [
		'Dambrose membership',
		'annual membership',
		'private medical relationship',
		'same-day visits',
		'hospital advocacy',
		'direct physician access',
		'Alma program',
		'Praeva program',
	],
})

export default function MembershipPage() {
	return (
		<>
			<JsonLd data={breadcrumbSchema('Membership', '/membership')} />
			<Header />
			<main className="flex-1 w-full">
				<MembershipHero />
				<MembershipIntro />
				<MembershipExclusivity />
				<SectionDivider />
				<MembershipPrograms />
				<MembershipApply />
				<Testimonials />
				<MembershipIncluded />
			</main>
		</>
	)
}
