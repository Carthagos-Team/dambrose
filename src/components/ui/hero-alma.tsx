'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'
import { TransitionLink } from '@/components/ui/transition-link'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const PHOTOS = [
	{
		src: '/images/hero-alma/photo-top-left.webp',
		// 160×115 @ (141, 0) inside cream
		className: 'left-35.25 top-0 w-40 h-28.75',
	},
	{
		src: '/alma/hero/thumb-1.webp',
		// 214×214 @ (1233, -43) inside cream — spills above
		className: 'left-308.25 -top-10.75 w-53.5 h-53.5',
	},
	{
		src: '/images/hero-alma/photo-bottom-left.png',
		// 221×187 @ (110, 413) inside cream
		className: 'left-27.5 top-103.25 w-55.25 h-46.75',
	},
	{
		src: '/alma/hero/photo-bottom-right.webp',
		// 158×158 @ (1154, 472) inside cream — spills below
		className: 'left-288.5 top-118 w-39.5 h-39.5',
	},
] as const

export function HeroAlma() {
	const containerRef = useRef<HTMLDivElement>(null)

	useGSAP(
		() => {
			const root = containerRef.current
			if (!root) return
			if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

			const canvas = root.querySelector<HTMLElement>('[data-alma-canvas]')
			const card = root.querySelector<HTMLElement>('[data-alma-card]')
			const photos = root.querySelectorAll<HTMLElement>('[data-alma-photo]')

			if (!canvas || !card) return

			const tl = gsap.timeline({
				scrollTrigger: { trigger: canvas, start: 'top 100%', once: true },
			})

			tl.from(canvas, { autoAlpha: 0, y: 8, duration: 0.6, ease: 'expo.out' })
			tl.fromTo(
				card,
				{ clipPath: 'inset(0 0 100% 0)' },
				{ clipPath: 'inset(0 0 0% 0)', duration: 1.6, ease: 'expo.inOut' },
				'-=0.5',
			)
			tl.from(
				photos,
				{ autoAlpha: 0, y: 20, duration: 1.2, stagger: 0.12, ease: 'expo.out' },
				'-=1.2',
			)
		},
		{ scope: containerRef },
	)

	return (
		<section ref={containerRef} className="relative w-full overflow-hidden">
			<h1 className="sr-only">
				Alma — Core Primary Care &amp; Internal Medicine by Dr. Michael J. D&apos;Ambrose
			</h1>
			<Container className="pt-5 pb-0">
				{/* Desktop cream canvas — absolute scene root */}
				<div className="relative hidden md:block">
					<div
						data-alma-canvas
						className="relative w-full aspect-1360/600 rounded-lg bg-[#FFFFE4] overflow-hidden text-[clamp(0.625em,1.1111vw,1em)] min-[1920px]:text-[calc(1.1765vw-0.9412px)]"
					>
						{PHOTOS.map((p) => (
							<div
								data-alma-photo
								key={p.src}
								className={`absolute overflow-hidden ${p.className}`}
							>
								<Image src={p.src} alt="" fill sizes="14em" className="object-cover" />
							</div>
						))}

						<TransitionLink
							data-alma-card
							href="/alma"
							aria-label="Discover Alma by Michael J. D'Ambrose"
							className="absolute left-120.5 top-16 w-99 h-118 block transition-opacity duration-300 hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ecru-white"
						>
							<Image
								src="/images/hero-alma/alma-card.png"
								alt="Alma by Michael J. D'Ambrose"
								fill
								sizes="25em"
								priority
								className="object-cover"
							/>
						</TransitionLink>
					</div>

					{/* Bottom gradient strip — 946×112 centered under cream canvas */}
					<div
						aria-hidden="true"
						className="mx-auto w-full max-w-236.5 h-28 text-[clamp(0.625em,1.1111vw,1em)] min-[1920px]:text-[calc(1.1765vw-0.9412px)] bg-[linear-gradient(180deg,#DEDBBC_0%,#B4A389_50%,#808D95_90%)]"
					/>
				</div>

				{/* Mobile scene — Figma node 4378:714: creme + card centralizado + 2 fotos recortadas.
				    Reveal em camadas (igual ao Hero desktop): fade do conjunto + clip-wipe do card
				    + stagger das fotos via RevealImage. */}
				<BlurReveal className="md:hidden py-10" y={8}>
					<div className="relative w-full aspect-335/440 rounded-[4px] bg-[#ffffe4] overflow-hidden">
						{/* Mãos — clip-wipe, canto sup-esq, recortada (stagger) */}
						<RevealImage
							delay={0.2}
							className="absolute left-[-9%] top-[-7%] w-[47.2%] aspect-square overflow-hidden"
						>
							<Image
								src="/images/hero-alma/photo-top-left.webp"
								alt=""
								fill
								sizes="50vw"
								className="object-cover"
							/>
						</RevealImage>
						{/* Poltrona — clip-wipe, canto inf-dir, recortada (stagger) */}
						<RevealImage
							delay={0.32}
							className="absolute left-[50.1%] top-[71.8%] w-[66%] aspect-square overflow-hidden"
						>
							<Image
								src="/alma/hero/photo-bottom-right.webp"
								alt=""
								fill
								sizes="66vw"
								className="object-cover"
							/>
						</RevealImage>
						{/* Card Alma — clip-wipe, centralizado, por cima (link preservado) */}
						<TransitionLink
							href="/alma"
							aria-label="Discover Alma by Michael J. D'Ambrose"
							className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70.5%] aspect-396/472 block rounded-sm overflow-hidden"
						>
							<RevealImage delay={0.08} className="absolute inset-0">
								<Image
									src="/images/hero-alma/alma-card.png"
									alt="Alma by Michael J. D'Ambrose"
									fill
									sizes="70vw"
									priority
									className="object-cover"
								/>
							</RevealImage>
						</TransitionLink>
					</div>
				</BlurReveal>
			</Container>
		</section>
	)
}
