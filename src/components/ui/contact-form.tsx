'use client'

import Image from 'next/image'
import { useId, useState } from 'react'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function ContactForm() {
	const messageId = useId()
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		tel: '',
		message: '',
	})

	return (
		<section className="w-full bg-ecru-white pt-16 pb-24 md:pt-28 md:pb-36 border-t border-black/10">
			<Container>
				<div className="flex flex-col gap-10 md:gap-16">
					<BlurReveal>
						<h1 className="font-display italic text-4xl md:text-6xl text-olive-haze leading-tight">
							Care starts with a conversation.
						</h1>
					</BlurReveal>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
						<RevealImage className="relative w-full overflow-hidden bg-bison-hide aspect-square">
							<Image
								src="/contact-faq/sec01/hero-image.webp"
								alt="A person’s hands resting on a sunlit windowsill beside fresh flowers"
								fill
								className="object-cover"
							/>
						</RevealImage>

						<BlurReveal delay={0.1} className="flex flex-col justify-between gap-7 md:h-full">
							<div className="flex flex-col gap-7">
								<div className="grid grid-cols-2 gap-6">
									<Field
										label="First Name"
										value={form.firstName}
										onChange={(v) => setForm((f) => ({ ...f, firstName: v }))}
									/>
									<Field
										label="Last Name"
										value={form.lastName}
										onChange={(v) => setForm((f) => ({ ...f, lastName: v }))}
									/>
								</div>
								<Field
									label="Email"
									type="email"
									value={form.email}
									onChange={(v) => setForm((f) => ({ ...f, email: v }))}
								/>
								<Field
									label="Tel No."
									type="tel"
									value={form.tel}
									onChange={(v) => setForm((f) => ({ ...f, tel: v }))}
								/>
								<div className="flex flex-col gap-2">
									<label
										htmlFor={messageId}
										className="font-body text-xs text-olive-haze uppercase tracking-widest"
									>
										Your Message Here
									</label>
									<textarea
										id={messageId}
										className="w-full bg-transparent border-b border-bison-hide font-body text-sm text-rangoon-green focus:outline-none focus:border-blue-smoke resize-none py-2 leading-relaxed min-h-32 transition-colors"
										value={form.message}
										onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
									/>
								</div>
							</div>
							<div>
								<Button variant="dark" size="md">
									Send Request
								</Button>
							</div>
						</BlurReveal>
					</div>
				</div>
			</Container>
		</section>
	)
}

function Field({
	label,
	type = 'text',
	value,
	onChange,
}: {
	label: string
	type?: string
	value: string
	onChange: (v: string) => void
}) {
	const id = useId()
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={id} className="font-body text-xs text-olive-haze uppercase tracking-widest">
				{label}
			</label>
			<input
				id={id}
				type={type}
				className="w-full bg-transparent border-b border-bison-hide font-body text-sm text-rangoon-green focus:outline-none focus:border-blue-smoke py-2 transition-colors"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	)
}
