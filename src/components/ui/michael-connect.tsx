import type { ReactNode } from 'react'
import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

type Channel = {
	icon: ReactNode
	title: string
	action: string
	href: string
	target?: string
	rel?: string
}

const CHANNELS: Channel[] = [
	{
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>LinkedIn</title>
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.78 13.019H3.555V9h3.562v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
		title: 'Follow on LinkedIn',
		action: 'go to linkedin',
		href: 'https://www.linkedin.com/in/michael-d-ambrose-a619bb361',
		target: '_blank',
		rel: 'noopener noreferrer',
	},
	{
		icon: (
			<svg
				width="20"
				height="16"
				viewBox="0 0 24 18"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Email</title>
				<rect x="1" y="1" width="22" height="16" rx="1.5" />
				<path d="M1 3l11 8 11-8" />
			</svg>
		),
		title: 'michael.dambrose@mjdmd.com',
		action: 'send email',
		href: 'mailto:michael.dambrose@mjdmd.com?subject=Contact%20Website',
	},
]

function ContactChannelCard({ channel }: { channel: Channel }) {
	return (
		<div className="bg-ecru-white/90 backdrop-blur-sm p-6 flex flex-col justify-between gap-8 min-[1280px]:gap-11 min-[1280px]:min-h-50">
			<div className="text-rangoon-green">{channel.icon}</div>
			<div className="flex flex-col gap-4">
				<p className="font-display text-xl sm:text-2xl min-[1280px]:text-[2em] text-gray-olive leading-none tracking-wide max-[1279px]:whitespace-normal min-[1280px]:whitespace-nowrap">
					{channel.title}
				</p>
				<Button
					href={channel.href}
					target={channel.target}
					rel={channel.rel}
					variant="opal"
					size="sm"
					className="w-fit min-h-11 min-[1280px]:min-h-0 rounded-sm!"
				>
					{channel.action}
				</Button>
			</div>
		</div>
	)
}

export function MichaelConnect() {
	return (
		<section id="connect" className="w-full bg-ecru-white py-16 md:py-28">
			<Container>
				<div className="flex flex-col items-center gap-14 min-[1280px]:gap-22">
					<BlurReveal>
						<h2 className="font-display text-4xl md:text-[3.125em] text-[#6B7167] leading-none tracking-wide text-center">
							<em className="font-display italic pr-[0.15em]">Connect</em> with Dr. Michael J. D&rsquo;Ambrose
						</h2>
					</BlurReveal>

					<BlurReveal delay={0.1} className="relative w-full">
						{/*
						  Wrapper único: imagem de fundo cobre toda a área.
						  Abaixo de 1280px a altura cresce com os cards empilhados (fluxo normal).
						  Em desktop o aspect-ratio fixo + overlay centralizado (Figma).
						*/}
						<div className="relative w-full overflow-hidden min-[1280px]:aspect-1280/556">
							<div className="absolute inset-0">
								<Image
									src="/about-dr-michael/contact/hero-image.webp"
									alt=""
									fill
									className="object-cover"
									aria-hidden="true"
								/>
								<div className="absolute inset-0 bg-[#3C3C27]/18" aria-hidden="true" />
							</div>

							<div className="relative px-5 py-8 md:px-10 md:py-10 min-[1280px]:absolute min-[1280px]:inset-0 min-[1280px]:flex min-[1280px]:items-center min-[1280px]:px-20 min-[1280px]:py-0">
								<div className="flex w-full flex-col gap-4 min-[1280px]:grid min-[1280px]:grid-cols-2">
									{CHANNELS.map((c) => (
										<ContactChannelCard key={c.title} channel={c} />
									))}
								</div>
							</div>
						</div>
					</BlurReveal>
				</div>
			</Container>
		</section>
	)
}
