import type { Metadata } from 'next'
import { Instrument_Serif, Martian_Mono, Public_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import { JsonLd } from '@/components/json-ld'
import { SmoothScroll } from '@/components/smooth-scroll'
import { Footer } from '@/components/ui/footer'
import { siteConfig } from '@/lib/site'
import { physicianSchema, practiceSchema, websiteSchema } from '@/lib/structured-data'
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

// Used only for the home loader wordmark (LIFELONG / MEDICINE).
const sohneBreit = localFont({
	src: '../fonts/soehne-breit-halbfett.woff2',
	variable: '--font-sohne-breit',
	weight: '600',
	display: 'swap',
})

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: `${siteConfig.name} — ${siteConfig.tagline}`,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	applicationName: siteConfig.name,
	keywords: [...siteConfig.keywords],
	authors: [{ name: siteConfig.founder.name }],
	creator: siteConfig.founder.name,
	publisher: siteConfig.name,
	category: 'health',
	alternates: { canonical: '/' },
	formatDetection: { telephone: true, email: true, address: true },
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},
	openGraph: {
		title: `${siteConfig.name} — ${siteConfig.tagline}`,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: siteConfig.name,
		locale: siteConfig.locale,
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: `${siteConfig.name} — ${siteConfig.tagline}`,
		description: siteConfig.description,
	},
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={`${instrumentSerif.variable} ${martianMono.variable} ${publicSans.variable} ${sohneBreit.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<JsonLd data={[practiceSchema, websiteSchema, physicianSchema]} />
				<SmoothScroll />
				{children}
				<Footer />
			</body>
		</html>
	)
}
