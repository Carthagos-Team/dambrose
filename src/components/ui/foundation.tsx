import { BlurReveal } from '@/components/ui/blur-reveal'

export function Foundation() {
	return (
		<section
			className="w-full pt-24 md:pt-48 pb-0 flex flex-col justify-end items-center h-[60vh] md:h-auto"
			style={{ backgroundColor: '#ae4000' }}
		>
			{/* ── Card ─────────────────────────────────────────── */}
			<BlurReveal className="relative w-[85%] md:w-184 aspect-3/2 bg-rangoon-green flex items-center justify-center p-5">
				{/* Corner labels */}
				<span className="absolute top-4 left-5 font-body text-xs text-ecru-white/60 uppercase tracking-widest">
					Lifelong
				</span>
				<span className="absolute top-4 right-5 font-body text-xs text-ecru-white/60 uppercase tracking-widest">
					Medicine
				</span>
				<span className="absolute bottom-4 left-5 font-body text-xs text-ecru-white/60 uppercase tracking-widest">
					Steps Away
				</span>
				<span className="absolute bottom-4 right-5 font-body text-xs text-ecru-white/60 uppercase tracking-widest">
					Dambrose
				</span>

				{/* Center label */}
				<span className="font-body text-xs text-ecru-white/60 uppercase tracking-widest">
					That Never
				</span>
			</BlurReveal>

			{/* ── Teal block ───────────────────────────────────── */}
			<div
				className="w-56 md:w-74 h-48 md:h-72 -mt-2"
				style={{
					background: 'linear-gradient(to bottom, #728b8b 0%, #b2b9a9 100%)',
				}}
			/>
		</section>
	)
}
