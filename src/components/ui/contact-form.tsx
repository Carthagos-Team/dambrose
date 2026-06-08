'use client'

import Image from 'next/image'
import { useId, useState } from 'react'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
	const messageId = useId()
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		tel: '',
		message: '',
	})
	const [status, setStatus] = useState<Status>('idle')
	const [errorMsg, setErrorMsg] = useState('')

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		setStatus('loading')
		setErrorMsg('')

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			})
			const data = await res.json()

			if (!res.ok) {
				setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
				setStatus('error')
				return
			}

			setStatus('success')
		} catch {
			setErrorMsg('Network error. Please check your connection and try again.')
			setStatus('error')
		}
	}

	return (
		<section className="w-full bg-ecru-white pt-16 pb-24 md:pt-28 md:pb-36">
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
								alt="A person's hands resting on a sunlit windowsill beside fresh flowers"
								fill
								className="object-cover"
							/>
						</RevealImage>

						{status === 'success' ? (
							<BlurReveal delay={0.1} className="flex flex-col justify-center gap-4 md:h-full">
								<p className="font-display italic text-2xl md:text-3xl text-olive-haze leading-snug">
									Thank you for reaching out.
								</p>
								<p className="font-body text-xs uppercase tracking-widest text-rangitoto/70 leading-relaxed">
									We have received your message and will be in touch shortly.
								</p>
							</BlurReveal>
						) : (
							<BlurReveal delay={0.1} className="flex flex-col justify-between gap-7 md:h-full">
								<form onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">
									<div className="flex flex-col gap-7">
										<div className="grid grid-cols-2 gap-6">
											<Field
												label="First Name"
												value={form.firstName}
												onChange={(v) => setForm((f) => ({ ...f, firstName: v }))}
												required
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
											required
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
												required
												className="w-full bg-transparent border-b border-bison-hide font-body text-sm text-rangoon-green focus:outline-none focus:border-blue-smoke resize-none py-2 leading-relaxed min-h-32 transition-colors"
												value={form.message}
												onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
											/>
										</div>
									</div>

									<div className="flex flex-col gap-3">
										<Button
											variant="dark"
											size="md"
											type="submit"
											disabled={status === 'loading'}
											className={status === 'loading' ? 'opacity-60 cursor-not-allowed' : ''}
										>
											{status === 'loading' ? 'Sending…' : 'Send Request'}
										</Button>

										{status === 'error' && (
											<p
												role="alert"
												aria-live="polite"
												className="font-body text-xs uppercase tracking-widest text-fire/80"
											>
												{errorMsg}
											</p>
										)}
									</div>
								</form>
							</BlurReveal>
						)}
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
	required,
}: {
	label: string
	type?: string
	value: string
	onChange: (v: string) => void
	required?: boolean
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
				required={required}
				className="w-full bg-transparent border-b border-bison-hide font-body text-sm text-rangoon-green focus:outline-none focus:border-blue-smoke py-2 transition-colors"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	)
}
