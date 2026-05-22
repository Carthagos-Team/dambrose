import Image from 'next/image'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function MembershipIntro() {
	return (
		<section className="w-full bg-rangitoto py-28 md:py-36">
			<Container>
				<BlurReveal>
					<p className="font-display text-2xl md:text-3xl text-ecru-white leading-snug max-w-[34ch]">
						You may be seeking guidance, facing a difficult diagnosis, or preparing for the years
						ahead. DAMBROSE is designed for all of it. By remaining intentionally limited, the
						annual membership preserves the time and focus a health team needs to truly know you and
						support your goals <em className="font-display italic">as life evolves.</em>
					</p>
				</BlurReveal>

				<div className="mt-16 md:mt-24">
					<div className="flex flex-col gap-6 lg:hidden">
						<RevealImage
							className="relative w-full max-w-112 aspect-445/246 overflow-hidden"
							start="top 95%"
						>
							<Image
								src="/membership/intro-portrait.png"
								alt=""
								fill
								className="object-cover"
								sizes="100vw"
							/>
						</RevealImage>
						<RevealImage className="relative w-full aspect-680/756 overflow-hidden" start="top 95%">
							<Image
								src="/membership/intro-stilllife.png"
								alt=""
								fill
								className="object-cover"
								sizes="100vw"
							/>
						</RevealImage>
						<RevealImage
							className="relative w-[60%] self-center aspect-332/392 overflow-hidden"
							start="top 95%"
						>
							<Image
								src="/membership/intro-hallway.png"
								alt=""
								fill
								className="object-cover"
								sizes="60vw"
							/>
						</RevealImage>
					</div>

					<div className="hidden lg:block relative w-full aspect-1360/1118">
						<RevealImage
							className="absolute left-0 top-0 w-[32.7%] aspect-445/246 overflow-hidden"
							start="top 90%"
						>
							<Image
								src="/membership/intro-portrait.png"
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
								src="/membership/intro-stilllife.png"
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
								src="/membership/intro-hallway.png"
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
