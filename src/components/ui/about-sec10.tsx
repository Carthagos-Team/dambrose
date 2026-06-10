import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 10 — /about — Figma node 3586:120
 * Mobile: photo → text per person (natural DOM order).
 * Desktop: md:order-* pulls photos to row 1, texts to row 2.
 */
export function AboutSec10() {
	return (
		<section className="w-full bg-ecru-white py-28">
			<Container>
				<div className="flex flex-col gap-12 md:gap-20">
					{/* ── HEADING ─────────────────────────────────────── */}
					<BlurReveal>
						<h2 className="font-display text-[2.5em] leading-none tracking-[0.01em] text-gray-olive max-w-[8.16em]">
							The <em className="font-display italic">people</em> behind your journey.
						</h2>
					</BlurReveal>

					<div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-12 md:gap-y-[2.4em]">
						{/* Michael photo — desktop row 1 col 1 */}
						<RevealImage className="relative w-full aspect-[395/799] overflow-hidden bg-bison-hide md:order-1">
							<Image
								src="/shared/portrait-doctor-1.webp"
								alt="Dr. Michael J. D'Ambrose — Founder and Physician at DAMBROSE"
								fill
								className="object-cover object-top"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
						</RevealImage>

						{/* Elaina photo — desktop row 1 col 2 */}
						<RevealImage
							delay={0.1}
							className="relative w-full aspect-[395/799] overflow-hidden bg-bison-hide md:order-2"
						>
							<Image
								src="/about-us/sec03/image-2.webp"
								alt="Elaina Aldrin, APRN — Nurse Practitioner at DAMBROSE"
								fill
								className="object-cover object-top"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
						</RevealImage>

						{/* Kalee photo — desktop row 1 col 3 */}
						<RevealImage
							delay={0.2}
							className="relative w-full aspect-[395/799] overflow-hidden bg-bison-hide md:order-3"
						>
							<Image
								src="/about-us/sec10/kalee.jpg"
								alt="Kalee Lucente — Executive Administrative Assistant at DAMBROSE"
								fill
								className="object-cover object-top"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
						</RevealImage>

						{/* Michael text — desktop row 2 col 1 */}
						<div className="flex flex-col gap-[1.2em] md:gap-[2.4em] md:order-4">
							<BlurReveal delay={0.1} className="flex flex-col gap-[1.2em] uppercase">
								<h3 className="font-display text-[1.3em] leading-[1.3] tracking-[0.02em] text-zeus max-w-[12.8462em]">
									<em className="font-display italic">Dr. Michael J. D&rsquo;Ambrose, M.D., </em>
									Founder and physician
								</h3>
								<p className="font-body text-xs text-rangitoto/80 leading-[1.4] tracking-[-0.04em]">
									Dr. D&rsquo;Ambrose is a board-certified family physician and a member of the
									American Board of Family Medicine, the American Academy of Family Physicians, and
									the Florida Medical Association. With experience spanning outpatient care,
									hospital medicine, emergency medicine, and obstetrics, he brings broad clinical
									perspective and steady judgment to every decision. His practice is shaped by a
									commitment to thoughtful medicine—staying current with medical science while
									remaining deeply attentive to the individual behind each case.
								</p>
							</BlurReveal>

							<BlurReveal delay={0.15}>
								<Button variant="dark" size="sm" href="/about" className="w-fit">
									about dr. michael
								</Button>
							</BlurReveal>
						</div>

						{/* Elaina text — desktop row 2 col 2 */}
						<BlurReveal
							delay={0.2}
							className="flex flex-col gap-[1.2em] uppercase md:pb-[4.8em] md:order-5"
						>
							<h3 className="font-display text-[1.3em] leading-[1.3] tracking-[0.02em] text-zeus max-w-[8.4615em]">
								<em className="font-display italic">
									Elaina Aldrin, APRN,
									<br />
								</em>
								Nurse practitioner
							</h3>
							<p className="font-body text-xs text-rangitoto/80 leading-[1.4] tracking-[-0.04em]">
								Elaina Aldrin is dedicated to providing compassionate, attentive care rooted in
								clinical excellence. She brings extensive experience in oncology, having worked at
								Moffitt Cancer Center and Orlando Health Cancer Institute, and holds a certification
								in blood and marrow transplant. With a background in both business and nursing,
								Elaina supports the practice through clinical care, patient coordination, and
								relationship management, while maintaining a strong focus on women&rsquo;s health
								and whole-person wellbeing.
							</p>
						</BlurReveal>

						{/* Kalee text — desktop row 2 col 3 */}
						<BlurReveal
							delay={0.3}
							className="flex flex-col gap-[1.2em] uppercase md:pb-[4.8em] md:order-6"
						>
							<h3 className="font-display text-[1.3em] leading-[1.3] tracking-[0.02em] text-zeus">
								<em className="font-display italic">
									Kalee Lucente,
									<br />
								</em>
								Executive Administrative Assistant
							</h3>
							<p className="font-body text-xs text-rangitoto/80 leading-[1.4] tracking-[-0.04em]">
								Kalee brings over four years of experience in healthcare administration within a
								private primary care practice. She earned her Bachelor&rsquo;s degree in Healthcare
								Administration and Management in 2023 and has built her career around creating a
								welcoming, organized, and patient-focused experience. Kalee serves as a primary
								point of contact for patients and is passionate about building meaningful, long-term
								relationships with them, contributing to a care environment that feels personal,
								attentive, and supportive.
							</p>
						</BlurReveal>
					</div>
				</div>
			</Container>
		</section>
	)
}
