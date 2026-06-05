import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'

/**
 * SEC 18 (Figma: SEC 07) — /lifelong-medicine — Figma node 3697:204
 * Full-bleed blurred photo (blur 8.45px) + absolutely centered ecru-white card
 * Card: 630×344px @ 1440px, p-64px, Instrument Serif 72px leading-none
 */
export function LifelongMedicineSec18() {
	return (
		<section className="relative w-full overflow-hidden aspect-[3/2] min-h-88">
			{/* ── BACKGROUND — full-bleed, blurred ────────────── */}
			<Image
				src="/lifelong-medicine/sec07/fullwidth.webp"
				alt=""
				fill
				className="object-cover blur-[8.45px] scale-[1.04] pointer-events-none select-none"
				sizes="100vw"
				aria-hidden="true"
				priority
			/>

			{/* ── CARD — absolutely centered ──────────────────── */}
			<BlurReveal
				delay={0.1}
				className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-ecru-white p-[3.3em] w-[90%] md:w-[43.75%] md:max-w-[32.4em]"
			>
				<p className="font-display text-[2.25em] md:text-[3.7em] leading-none text-center text-balance text-rangoon-green">
					Knowing you deeply isn&rsquo;t an extra.
					<br />
					It&rsquo;s the <em className="font-display italic">standard.</em>
				</p>
			</BlurReveal>
		</section>
	)
}
