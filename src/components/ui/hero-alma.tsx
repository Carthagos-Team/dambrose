import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/container'

const PHOTOS = [
	{
		src: '/images/hero-alma/photo-top-left.png',
		// 160×115 @ (141, 0) inside cream
		className: 'left-35.25 top-0 w-40 h-28.75',
	},
	{
		src: '/images/hero-alma/photo-top-right.png',
		// 214×214 @ (1233, -43) inside cream — spills above
		className: 'left-308.25 -top-10.75 w-53.5 h-53.5',
	},
	{
		src: '/images/hero-alma/photo-bottom-left.png',
		// 221×187 @ (110, 413) inside cream
		className: 'left-27.5 top-103.25 w-55.25 h-46.75',
	},
	{
		src: '/images/hero-alma/photo-bottom-right.png',
		// 158×158 @ (1154, 472) inside cream — spills below
		className: 'left-288.5 top-118 w-39.5 h-39.5',
	},
] as const

export function HeroAlma() {
	return (
		<section className="relative w-full overflow-hidden">
			<Container className="pt-5 pb-0">
				{/* Desktop cream canvas — absolute scene root */}
				<div className="relative hidden md:block">
					<div className="relative w-full aspect-1360/600 rounded-lg bg-[#FFFFE4] overflow-hidden text-[clamp(0.625rem,1.1111vw,1rem)]">
						{PHOTOS.map((p) => (
							<div key={p.src} className={`absolute overflow-hidden ${p.className}`}>
								<Image src={p.src} alt="" fill sizes="14em" className="object-cover" />
							</div>
						))}

						<Link
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
						</Link>
					</div>

					{/* Bottom gradient strip — 946×112 centered under cream canvas */}
					<div
						aria-hidden="true"
						className="mx-auto w-full max-w-236.5 h-28 text-[clamp(0.625rem,1.1111vw,1rem)] bg-[linear-gradient(180deg,#DEDBBC_0%,#B4A389_50%,#808D95_90%)]"
					/>
				</div>

				{/* Mobile fallback — Alma card centered, no scatter */}
				<div className="md:hidden flex justify-center py-10">
					<Link
						href="/alma"
						aria-label="Discover Alma by Michael J. D'Ambrose"
						className="block w-64 aspect-396/472 relative rounded-sm overflow-hidden"
					>
						<Image
							src="/images/hero-alma/alma-card.png"
							alt="Alma by Michael J. D'Ambrose"
							fill
							sizes="16rem"
							priority
							className="object-cover"
						/>
					</Link>
				</div>
			</Container>
		</section>
	)
}
