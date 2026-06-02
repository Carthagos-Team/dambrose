import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
	return new ImageResponse(
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				padding: '80px',
				background: 'linear-gradient(135deg, #728b8b 0%, #383f39 45%, #222009 80%, #0a0a0a 100%)',
				color: '#f2f1e3',
				fontFamily: 'Georgia, "Times New Roman", serif',
			}}
		>
			<div
				style={{
					fontSize: 26,
					letterSpacing: 14,
					textTransform: 'uppercase',
					color: '#dedbbc',
				}}
			>
				Lifelong Medicine
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
				<div style={{ fontSize: 132, fontWeight: 400, letterSpacing: 8, lineHeight: 1 }}>
					DAMBROSE
				</div>
				<div style={{ fontSize: 40, color: '#dedbbc', maxWidth: 900, lineHeight: 1.2 }}>
					Lifelong care that knows you.
				</div>
			</div>
			<div
				style={{
					fontSize: 24,
					letterSpacing: 2,
					color: 'rgba(242, 241, 227, 0.7)',
				}}
			>
				Private, physician-led care · Orlando, FL
			</div>
		</div>,
		{ ...size },
	)
}
