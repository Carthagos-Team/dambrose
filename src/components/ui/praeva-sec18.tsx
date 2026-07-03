import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'

/**
 * SEC 18 — /praeva — Figma node 3822:6232
 * "TRUSTED BY THOSE WHO EXPECT MORE FROM MEDICINE." — cream bg, rounded card,
 * Praeva™ wordmark + heading + 3 testimonial cards (CSS gradient backgrounds).
 */

const QUOTE =
	"I have been a patient of Dr. D'Ambrose for several years, and I couldn't be more grateful for the care I receive. Dr. D'Ambrose and Elaina always take the time to thoroughly understand my health concerns and work closely with specialists to manage my care. The level of attention and compassion here is unmatched, and I always feel confident that my health is in the best hands."

const TESTIMONIALS = [
	{
		quote: QUOTE,
		name: 'Mark Bonefield',
		location: 'Bone Valley, TX',
		// Figma: gradiente vertical topo→base (escuro → creme)
		bg: 'bg-gradient-to-b from-[#272018] via-[#545c63] via-[50%] to-[#dedbbc]',
		nameColor: 'text-[#282119]',
	},
	{
		quote: QUOTE,
		name: 'John Smith',
		location: 'Bone Valley, TX',
		bg: 'bg-[#545c63]',
		nameColor: 'text-[#ffffe4]',
	},
	{
		quote: QUOTE,
		name: 'Lilly Voux',
		location: 'Bone Valley, TX',
		bg: 'bg-[#282119]',
		nameColor: 'text-[#ffffe4]',
	},
]

export function PraevaSec18() {
	return (
		<section
			className="w-full bg-[#ffffe4] rounded-[0.5em] overflow-hidden relative
			px-5 md:px-10 py-16 md:py-[5.77em]"
		>
			{/* Inner content — capped at the site content width (≈1360px, igual ao Container),
			    centralizado. Garante que os cards preencham os 1360px do Figma sem sobrar
			    espaço à direita em telas largas. */}
			<div className="mx-auto w-full max-w-[85em] flex flex-col gap-16 md:gap-[5.15em] items-start min-[1200px]:items-center">
				{/* ── Header ── */}
				<div className="flex flex-col gap-4 md:gap-[3.29em] items-start min-[1200px]:items-center">
					{/* Praeva™ wordmark */}
					<BlurReveal>
						<div className="inline-flex items-start gap-px">
							<p className="font-display not-italic text-[1.92em] leading-none text-[#7c848b]">
								<span style={{ letterSpacing: '0.0365em' }}>P</span>
								<span>ra</span>
								<em className="italic" style={{ letterSpacing: '0.0729em' }}>
									e
								</em>
								<span style={{ letterSpacing: '0.012em' }}>v</span>
								<span>a</span>
							</p>
							<span className="font-ui text-[0.8em] text-[#7c848b] tracking-[0.02em] leading-none mt-[0.32em]">
								™
							</span>
						</div>
					</BlurReveal>

					{/* Heading — esquerda no mobile/tablet, centralizado e quebrando em 2 linhas no desktop */}
					<BlurReveal delay={0.08}>
						<h2 className="font-display text-[2em] md:text-[2.57em] leading-none tracking-[0.03125em] text-[#282119] text-left min-[1200px]:text-center uppercase min-[1200px]:max-w-[15em]">
							Trusted by those who expect more from medicine.
						</h2>
					</BlurReveal>
				</div>

				{/* ── Testimonial cards ──
				    Grid: 1 coluna (mobile/tablet) → 3 colunas iguais em ≥1200px.
				    Grid evita o footgun de max-width no flex e sempre preenche a largura. */}
				<div className="grid grid-cols-1 gap-8 w-full min-[1200px]:grid-cols-3 min-[1200px]:gap-[1.78em]">
					{TESTIMONIALS.map((t, i) => (
						<BlurReveal key={t.name} delay={i * 0.09} className="w-full">
							{/* 1-col (mobile/tablet): card full-width alinhado ao header, altura pelo
							    conteúdo com respiro fixo (gap). ≥1200px: proporção do Figma (432×556)
							    + justify-between (quote topo / atribuição base) — inalterado. */}
							<div
								className={`overflow-hidden rounded-[0.25em] p-[2.06em] flex flex-col gap-[9.5em] min-[1200px]:gap-0 min-[1200px]:justify-between min-[1200px]:aspect-[432/556] ${t.bg}`}
							>
								{/* Quote */}
								<p className="font-display text-[1.23em] leading-[1.1] text-[#ffffe4]/80">
									{t.quote}
								</p>

								{/* Attribution */}
								<p
									className={`font-display text-[1.23em] leading-[1.1] tracking-[0.025em] ${t.nameColor}`}
								>
									<em>{t.name},</em>
									<br />
									{t.location}
								</p>
							</div>
						</BlurReveal>
					))}
				</div>
			</div>

			{/* Dambrose script logo — bottom-right of section */}
			<div className="hidden md:block absolute right-0 bottom-[2.81em] w-[23.19em] h-[6.46em] pointer-events-none">
				<Image
					src="/praeva/logobottom.svg"
					alt="Dambrose"
					fill
					className="object-contain object-right"
				/>
			</div>
		</section>
	)
}
