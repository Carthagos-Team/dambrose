import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

/**
 * SEC 10 — /about — Figma node 4528:135 ("SEC 07 v 2x2")
 * 2×2 profile grid: row 1 = Dr. Michael (with button) + Elaina,
 * row 2 = Sara + Kalee. DOM is interleaved photo→text per person so mobile
 * (single column, no order) flows correctly. Desktop: md:order-* groups
 * photos and texts into alternating rows (photos 1-2, texts 3-4, photos 5-6,
 * texts 7-8); row-2 photos carry md:mt to make the 64px row separation.
 * NOTE: Sara's photo is a placeholder (Kalee's, mirroring the Figma) until
 * her real portrait arrives.
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

					<div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-12 md:gap-y-[1.5em]">
						{/* Michael photo — desktop row 1 col 1 */}
						<RevealImage className="relative w-full aspect-[3/4] md:aspect-[656/799] overflow-hidden bg-bison-hide md:order-1">
							<Image
								src="/shared/portrait-doctor-1.webp"
								alt="Dr. Michael J. D'Ambrose — Founder and Physician at DAMBROSE"
								fill
								className="object-cover object-top"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</RevealImage>

						{/* Michael text — desktop row 2 col 1 */}
						<div className="flex flex-col gap-[1.2em] md:gap-[3em] md:order-3 md:mt-[1.5em]">
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

						{/* Elaina photo — desktop row 1 col 2 */}
						<RevealImage
							delay={0.1}
							className="relative w-full aspect-[3/4] md:aspect-[656/799] overflow-hidden bg-bison-hide md:order-2"
						>
							<Image
								src="/about-us/sec03/image-2.webp"
								alt="Elaina Aldrin, APRN — Nurse Practitioner at DAMBROSE"
								fill
								className="object-cover object-top"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</RevealImage>

						{/* Elaina text — desktop row 2 col 2 */}
						<BlurReveal delay={0.2} className="flex flex-col gap-[1.2em] uppercase md:order-4">
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
								relationship management, while maintaining a strong focus on women&rsquo;s health and
								whole-person wellbeing.
							</p>
						</BlurReveal>

						{/* Sara photo — desktop row 3 col 1 (placeholder: Kalee's portrait) */}
						<RevealImage
							delay={0.1}
							className="relative w-full aspect-[3/4] md:aspect-[656/799] overflow-hidden bg-bison-hide md:order-5 md:mt-[2.5em]"
						>
							<Image
								src="/about-us/sec10/kalee.jpg"
								alt="Sara Norton — Registered Nurse at DAMBROSE"
								fill
								className="object-cover object-top"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</RevealImage>

						{/* Sara text — desktop row 4 col 1 */}
						<BlurReveal delay={0.2} className="flex flex-col gap-[1.2em] uppercase md:order-7">
							<h3 className="font-display text-[1.3em] leading-[1.3] tracking-[0.02em] text-zeus">
								<em className="font-display italic">
									Sara Norton,
									<br />
								</em>
								Registered Nurse
							</h3>
							<p className="font-body text-xs text-rangitoto/80 leading-[1.4] tracking-[-0.04em]">
								Sara Norton, RN brings over 15 years of nursing experience and a background in
								women&rsquo;s and newborn health. Known for her calm presence and genuine
								attentiveness, she makes patients feel cared for at every interaction&mdash;not just
								clinically, but as people. A Central Florida native, Sara takes pride in serving the
								community she has always called home, building relationships with patients that go
								beyond any single visit and helping them navigate their health with confidence.
							</p>
						</BlurReveal>

						{/* Kalee photo — desktop row 3 col 2 */}
						<RevealImage
							delay={0.2}
							className="relative w-full aspect-[3/4] md:aspect-[656/799] overflow-hidden bg-bison-hide md:order-6 md:mt-[2.5em]"
						>
							<Image
								src="/about-us/sec10/kalee.jpg"
								alt="Kalee Lucente — Executive Administrative Assistant at DAMBROSE"
								fill
								className="object-cover object-top"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</RevealImage>

						{/* Kalee text — desktop row 4 col 2 */}
						<BlurReveal delay={0.3} className="flex flex-col gap-[1.2em] uppercase md:order-8">
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
