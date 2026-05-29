import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'

/**
 * SEC 14 — /lifelong-medicine — Figma node 3645:516
 * Gradient decoration (absolute, left) + card + paragraph aligned at bottom.
 */
export function LifelongMedicineSec14() {
	return (
		<section className="w-full bg-ecru-white relative overflow-hidden py-12 md:py-[13.5rem]">

			{/* ── GRADIENT DECORATION — absolute left (desktop only) ── */}
			<div
				className="hidden md:block absolute pointer-events-none select-none z-0"
				style={{ bottom: '-31.9rem', height: '71.8rem', left: '2rem', width: '23.15rem' }}
			>
				{/* Rect 1 */}
				<div
					className="absolute rotate-180 bg-gradient-to-b from-[#1c1a08] from-[7%] via-[#728b8b] via-[60%] to-[#dedbbc]"
					style={{ left: 0, top: 0, width: '14.8rem', height: '51.35rem' }}
				/>
				{/* Rect 2 — offset right + down, overlaps rect 1 */}
				<div
					className="absolute rotate-180 bg-gradient-to-b from-[#1c1a08] from-[7%] via-[#728b8b] via-[60%] to-[#dedbbc]"
					style={{ left: '8.35rem', top: '20.45rem', width: '14.8rem', height: '51.35rem' }}
				/>
			</div>

			<Container className="relative z-10">
				<div className="flex flex-col gap-8 md:flex-row md:items-end md:gap-[4.35rem]">

					{/* ── CARD ────────────────────────────────────────── */}
					<BlurReveal className="bg-white-rock flex items-center justify-center shrink-0 px-[2.7rem] py-10 md:py-[6rem]">
						<h2 className="font-display text-[2.5rem] leading-none tracking-[0.025em] text-mondo text-center max-w-[28.2rem]">
							Healthcare built around presence and continuity.
						</h2>
					</BlurReveal>

					{/* ── PARAGRAPH ───────────────────────────────────── */}
					<BlurReveal delay={0.1} className="md:max-w-[20.45rem] shrink-0">
						<p className="font-body text-[0.7rem] text-zeus/80 uppercase leading-[1.4] tracking-[-0.04em]">
							At DAMBROSE, lifelong medicine is not an abstract philosophy or a promise
							of constant intervention. It is a deliberate model of private medicine
							shaped around duration rather than moments, connection rather than
							transactions. Health is guided by one team, one standard, and a
							relationship designed to deepen over time — where responsibility remains
							personal, knowledge accumulates, and care evolves alongside the person
							it serves.
						</p>
					</BlurReveal>
				</div>
			</Container>
		</section>
	)
}
