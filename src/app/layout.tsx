import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Instrument_Serif, Martian_Mono, Public_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import { preload } from 'react-dom'
import { JsonLd } from '@/components/json-ld'
import { SmoothScroll } from '@/components/smooth-scroll'
import { Footer } from '@/components/ui/footer'
import { PageTransition } from '@/components/ui/page-transition'
import { PageTransitionWatcher } from '@/components/ui/page-transition-watcher'
import { siteConfig } from '@/lib/site'
import { physicianSchema, practiceSchema, websiteSchema } from '@/lib/structured-data'
import './globals.css'

// Preload the @font-face font that Next.js doesn't auto-preload (loaded via
// globals.css, not next/font). Called at module level — React 19 recommended
// pattern — avoids any render-cycle interference with GSAP animations.
preload('/fonts/FuturaBT-Book.woff2', { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' })

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
	// Google Search Console verification — set GOOGLE_SITE_VERIFICATION in the
	// Vercel project env to emit the meta tag (omitted when unset).
	verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
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
			<body className="min-h-full flex flex-col" suppressHydrationWarning>
				<JsonLd data={[practiceSchema, websiteSchema, physicianSchema]} />
				<SmoothScroll />
				<PageTransition />
				<PageTransitionWatcher />
				{children}
				<Footer />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
