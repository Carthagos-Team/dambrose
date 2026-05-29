import type { Metadata } from 'next'
import { Instrument_Serif, Martian_Mono, Public_Sans } from 'next/font/google'
import { SmoothScroll } from '@/components/smooth-scroll'
import { Footer } from '@/components/ui/footer'
import './globals.css'

const instrumentSerif = Instrument_Serif({
	variable: '--font-display',
	subsets: ['latin'],
	weight: '400',
	style: ['normal', 'italic'],
})

const martianMono = Martian_Mono({
	variable: '--font-body',
	subsets: ['latin'],
	weight: ['200', '400'],
})

const publicSans = Public_Sans({
	variable: '--font-ui',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
	metadataBase: new URL('https://dambrose.com'),
	title: {
		default: 'Dambrose',
		template: '%s | Dambrose',
	},
	description:
		'DAMBROSE — Private physician-led care centered on preventive medicine, longevity, and lifelong health for individuals and families.',
	openGraph: {
		title: 'Dambrose',
		description:
			'DAMBROSE — Private physician-led care centered on preventive medicine, longevity, and lifelong health for individuals and families.',
		url: 'https://dambrose.com',
		siteName: 'Dambrose',
		locale: 'en_US',
		type: 'website',
	},
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={`${instrumentSerif.variable} ${martianMono.variable} ${publicSans.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<SmoothScroll />
				{children}
				<Footer />
			</body>
		</html>
	)
}
