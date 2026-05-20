import { ContactForm } from '@/components/ui/contact-form'
import { Faq } from '@/components/ui/faq'
import { Header } from '@/components/ui/header'
import { WhereToFindUs } from '@/components/ui/where-to-find-us'

export default function ContactPage() {
	return (
		<>
			<Header />
			<ContactForm />
			<WhereToFindUs />
			<Faq />
		</>
	)
}
