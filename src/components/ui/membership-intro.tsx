import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function MembershipIntro() {
	return (
		<section className="w-full bg-rangitoto py-28 md:py-36">
			<Container>
				<BlurReveal>
					<p className="font-display text-2xl md:text-[2.25rem] text-ecru-white leading-[1.2] max-w-[48.3125rem]">
						You may be seeking guidance, facing a difficult diagnosis, or preparing for the years
						ahead. DAMBROSE is designed for all of it. By remaining intentionally limited, the
						annual membership preserves the time and focus a health team needs to truly know you and
						support your goals <em className="font-display italic">as life evolves.</em>
					</p>
				</BlurReveal>

				<div className="mt-16 md:mt-24">
					<div className="flex flex-col gap-12 lg:hidden">
						{/* Consulta — parcial, inset à esquerda (estilo Praeva "chairs") */}
						<RevealImage
							className="relative w-[18.41em] aspect-445/246 overflow-hidden"
							start="top 95%"
						>
							<Image
								src="/membership/sec01/scroll-image-5.webp"
								alt=""
								fill
								className="object-cover"
								sizes="80vw"
							/>
						</RevealImage>

						{/* Dupla: still-life (destaque, flex-1) + corredor (acento, pequeno) */}
						<div className="flex items-start gap-4">
							<RevealImage
								className="relative flex-1 aspect-680/756 overflow-hidden"
								start="top 95%"
							>
								<Image
									src="/membership/sec01/scroll-image-2b.webp"
									alt=""
									fill
									className="object-cover"
									sizes="60vw"
								/>
							</RevealImage>
							<RevealImage
								className="relative w-[8.56em] aspect-332/392 overflow-hidden shrink-0"
								start="top 95%"
								delay={0.05}
							>
								<Image
									src="/membership/sec01/scroll-image-1.webp"
									alt=""
									fill
									className="object-cover"
									sizes="40vw"
								/>
							</RevealImage>
						</div>
					</div>

					<div className="hidden lg:block relative w-full aspect-1360/1118">
						<RevealImage
							className="absolute left-0 top-0 w-[32.7%] aspect-445/246 overflow-hidden"
							start="top 90%"
						>
							<Image
								src="/membership/sec01/scroll-image-5.webp"
								alt=""
								fill
								className="object-cover"
								sizes="33vw"
							/>
						</RevealImage>
						<RevealImage
							className="absolute left-[47.1%] top-[18.4%] w-[50%] aspect-680/756 overflow-hidden"
							start="top 90%"
						>
							<Image
								src="/membership/sec01/scroll-image-2b.webp"
								alt=""
								fill
								className="object-cover"
								sizes="50vw"
							/>
						</RevealImage>
						<RevealImage
							className="absolute left-[12.9%] top-[64.9%] w-[24.4%] aspect-332/392 overflow-hidden"
							start="top 90%"
						>
							<Image
								src="/membership/sec01/scroll-image-1.webp"
								alt=""
								fill
								className="object-cover"
								sizes="25vw"
							/>
						</RevealImage>
					</div>
				</div>
			</Container>
		</section>
	)
}
