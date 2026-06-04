import { JsonLd } from '@/components/json-ld'
import { ContactForm } from '@/components/ui/contact-form'
import { Faq } from '@/components/ui/faq'
import { Header } from '@/components/ui/header'
import { WhereToFindUs } from '@/components/ui/where-to-find-us'
import { pageMetadata } from '@/lib/seo'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'

export const metadata = pageMetadata({
	title: 'Contact & FAQ',
	path: '/contact',
	description:
		'Get in touch with DAMBROSE in Orlando, FL — phone, email, our downtown address, and answers to common questions about membership and physician-led care.',
	keywords: [
		'contact Dambrose',
		'Orlando physician',
		'membership inquiry',
		'medical practice FAQ',
		'200 South Orange Ave Orlando',
		'book appointment',
		'HIPAA',
	],
})

export default function ContactPage() {
	return (
		<>
			<JsonLd data={[breadcrumbSchema('Contact & FAQ', '/contact'), faqSchema]} />
			<Header />
			<main className="flex-1 w-full">
				<ContactForm />
				<WhereToFindUs />
				<Faq />
			</main>
		</>
	)
}
