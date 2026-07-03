import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function B2bIntro() {
	return (
		<section className="w-full bg-ecru-white py-20 md:py-30">
			<Container>
				<div className="flex flex-col gap-12 md:gap-30">
					<BlurReveal>
						<h2 className="font-display text-3xl md:text-[2.75em] min-[1920px]:text-5xl text-gray-olive leading-tight md:leading-none tracking-wide md:ml-[12.8%] md:max-w-[74.4%]">
						Executive physicals find problems. We prevent them — and when they arise, 
						we remain by your side through every step of healing.
						</h2>
					</BlurReveal>

					{/* Row 1 — Figma SEC 01 (node 4277-139). Mobile e tablet (<1200px): image → seal → "01" → body → stamp,
					    todos em fluxo. ≥1200px: image in flow defines row height; stamp/seal/body/"01" positioned by % to match Figma.
					    Abaixo de 1200px a coluna de texto (30.9%) fica estreita demais para o parágrafo em fonte fixa — ele
					    quebra em mais linhas e, ancorado por bottom-%, cresce para cima e colide com o selo (ancorado por top-%). */}
					<div className="relative flex flex-col gap-8 min-[1200px]:block">
						{/* Image — in flow; defines the row height on desktop. Figma: left 15.6%, width 37.8%, aspect 501/368 */}
						<div className="order-1 min-[1200px]:ml-[15.6%] min-[1200px]:w-[37.8%]">
							<RevealImage className="relative w-full aspect-501/368 overflow-hidden bg-bison-hide">
								<Image
									src="/b2b/sec01/intro-photo.webp"
									alt="Bright residential interior with framed art"
									fill
									className="object-cover"
									sizes="(min-width: 1200px) 38vw, 100vw"
								/>
							</RevealImage>
						</div>

						{/* Round seal — Figma: left 69.1%, top of row band (~6.6%), ~101px */}
						<div className="order-2 flex justify-end min-[1200px]:block min-[1200px]:absolute min-[1200px]:left-[69.1%] min-[1200px]:top-[6.6%]">
							<Image
								src="/b2b/sec01/seal.svg"
								alt=""
								width={102}
								height={115}
								className="w-[48px] min-[1200px]:w-25 h-auto"
								aria-hidden="true"
							/>
						</div>

						{/* "01" — Figma: left 62.4%, bottom-aligned with the paragraph band */}
						<div className="order-3 min-[1200px]:absolute min-[1200px]:left-[62.4%] min-[1200px]:bottom-[6.8%]">
							<span className="font-body text-xs text-gray-olive/80 uppercase leading-[1.3]">
								01
							</span>
						</div>

						{/* Body — Figma: left 69.1%, width 30.9%, bottom of row band */}
						<div className="order-4 min-[1200px]:absolute min-[1200px]:left-[69.1%] min-[1200px]:bottom-[6.8%] min-[1200px]:w-[30.9%]">
							<BlurReveal delay={0.1}>
								<p className="font-body text-sm text-rangitoto/80 uppercase leading-relaxed tracking-tight">
									Most executive health programs compress a series of standard tests into one or two
									intensive days. The executive returns to work with a binder of results and, often,
									no clear path forward.
								</p>
							</BlurReveal>
						</div>

						{/* Badge — desktop: stamp vertical (far-left, center). Mobile/tablet: caixa com borda (Figma 4384:867), à direita. */}
						<div className="order-5 flex justify-end min-[1200px]:block min-[1200px]:absolute min-[1200px]:left-0 min-[1200px]:top-1/2 min-[1200px]:-translate-y-1/2">
							{/* Mobile/tablet: caixa de texto (mesmo padrão de relationships.tsx) */}
							<div
								className="relative w-[10.3rem] h-[3.45rem] border border-blue-smoke flex flex-col items-center justify-center min-[1200px]:hidden"
								style={{
									fontFamily: 'var(--font-sohne-breit), sans-serif',
									fontSize: '0.39rem',
									letterSpacing: '0.13rem',
									lineHeight: '0.8rem',
									color: 'var(--color-blue-smoke, #728b8b)',
									textAlign: 'center',
									textTransform: 'uppercase',
								}}
							>
								<p>{'lifelong          medicine'}</p>
								<p>dambrose</p>
								<p>orlando - fl</p>
							</div>
							{/* Desktop: stamp vertical (inalterado) */}
							<Image
								src="/marks/badge-left.svg"
								alt=""
								width={69}
								height={207}
								className="hidden min-[1200px]:block h-52 w-auto"
								aria-hidden="true"
							/>
						</div>
					</div>

					{/* Row 2 — Figma SEC 02 (node 4286-172). Stack <lg; lg+: text left · image right,
					    block indented 18.2%, image flush right, vertically centered (items-center). */}
					<div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:ml-[18.2%]">
						{/* Image — mobile 1st; desktop right (order-2), flush to container edge */}
						<div className="lg:order-2 lg:w-[46.2%]">
							<RevealImage className="relative w-full aspect-501/368 overflow-hidden bg-bison-hide">
								<Image
									src="/b2b/sec01/landscape.webp"
									alt="Sunlit mountain ridge under a clear sky"
									fill
									className="object-cover"
									sizes="(min-width: 1024px) 38vw, 100vw"
								/>
							</RevealImage>
						</div>

						{/* Body 2 — mobile 2nd; desktop left (order-1) */}
						<div className="lg:order-1 lg:w-[37.2%] flex flex-col gap-6">
							<BlurReveal delay={0.1}>
								<p className="font-body text-sm text-rangitoto/80 uppercase leading-relaxed tracking-tight">
									Dambrose operates on a fundamentally different premise.
								</p>
							</BlurReveal>
							<BlurReveal delay={0.15}>
								<p className="font-body text-sm text-rangitoto/80 uppercase leading-relaxed tracking-tight">
									A dedicated health team — led by Dr. Michael J. D&rsquo;Ambrose — builds an
									ongoing medical relationship with each executive. It begins with an advanced,
									in-depth assessment and continues as long-term oversight: monitoring, navigating,
									coordinating, and intervening whenever health requires attention.
								</p>
							</BlurReveal>
							<BlurReveal delay={0.2}>
								<p className="font-body text-sm text-rangitoto/80 uppercase leading-relaxed tracking-tight">
									The luxury is not only convenience. It&rsquo;s knowing someone is always paying
									attention.
								</p>
							</BlurReveal>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
