'use client'

import Image from 'next/image'
import { useId, useState } from 'react'
import { BlurReveal } from '@/components/ui/blur-reveal'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

type Status = 'idle' | 'loading' | 'success' | 'error'

const ROLE_OPTIONS = ['Patient', 'Healthcare professional', 'Company']

export function ContactForm() {
	const messageId = useId()
	const roleId = useId()
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		role: '',
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
						<RevealImage className="relative w-full overflow-hidden bg-bison-hide aspect-square md:aspect-620/652">
							<Image
								src="/contact-faq/sec01/hero-orchid.webp"
								alt="White orchid in a stone planter in a sunlit corner with hardwood floors"
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
							<BlurReveal delay={0.1} className="flex flex-col md:h-full">
								<form onSubmit={handleSubmit} noValidate className="flex flex-col md:h-full gap-12">
									{/* Fields */}
									<div className="flex flex-col gap-12">
										{/* First Name + Last Name */}
										<div className="grid grid-cols-2 gap-6">
											<Field
												label="First Name"
												placeholder="First name..."
												value={form.firstName}
												onChange={(v) => setForm((f) => ({ ...f, firstName: v }))}
												required
											/>
											<Field
												label="Last Name"
												placeholder="Last name..."
												value={form.lastName}
												onChange={(v) => setForm((f) => ({ ...f, lastName: v }))}
											/>
										</div>

										{/* Email */}
										<Field
											label="Email"
											placeholder="Your best email..."
											type="email"
											value={form.email}
											onChange={(v) => setForm((f) => ({ ...f, email: v }))}
											required
										/>

										{/* You're a... */}
										<div className="flex flex-col gap-4">
											<label
												htmlFor={roleId}
												className="font-body text-sm text-rangitoto/80 uppercase tracking-tight"
											>
												You&rsquo;re a...
											</label>
											<div className="relative">
												<select
													id={roleId}
													value={form.role}
													onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
													className={`w-full appearance-none bg-transparent border-b border-judge-gray/60 focus:border-judge-gray font-body text-xs uppercase tracking-tight focus:outline-none py-3 pr-6 transition-colors cursor-pointer ${form.role === '' ? 'text-rangitoto/40' : 'text-rangoon-green'}`}
												>
													<option value="" disabled hidden>
														Select an option...
													</option>
													{ROLE_OPTIONS.map((opt) => (
														<option key={opt} value={opt}>
															{opt}
														</option>
													))}
												</select>
												<svg
													className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-rangitoto/60"
													viewBox="0 0 16 16"
													fill="none"
													aria-hidden="true"
												>
													<path
														d="M4 6l4 4 4-4"
														stroke="currentColor"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</div>
										</div>

										{/* Your Message Here */}
										<div className="flex flex-col gap-12">
											<label
												htmlFor={messageId}
												className="font-body text-sm text-rangitoto/80 uppercase tracking-tight"
											>
												Your Message Here
											</label>
											<textarea
												id={messageId}
												required
												rows={1}
												placeholder="How can we help? Write here..."
												className="w-full bg-transparent border-b border-judge-gray/60 focus:border-judge-gray font-body text-xs uppercase tracking-tight text-rangoon-green placeholder:text-rangitoto/40 placeholder:uppercase focus:outline-none resize-none overflow-hidden py-3 leading-relaxed transition-colors"
												value={form.message}
												onChange={(e) => {
													const el = e.target
													el.style.height = 'auto'
													el.style.height = `${el.scrollHeight}px`
													setForm((f) => ({ ...f, message: el.value }))
												}}
											/>
										</div>
									</div>

									{/* Button — anchored bottom-left (Figma gap-[151px]) */}
									<div className="flex flex-col gap-3 md:mt-auto">
										<Button
											variant="dark"
											size="md"
											type="submit"
											disabled={status === 'loading'}
											className={`w-fit${status === 'loading' ? ' opacity-60 cursor-not-allowed' : ''}`}
										>
											{status === 'loading' ? 'Sending…' : 'Send Message'}
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
	placeholder,
	type = 'text',
	value,
	onChange,
	required,
}: {
	label: string
	placeholder: string
	type?: string
	value: string
	onChange: (v: string) => void
	required?: boolean
}) {
	const id = useId()
	return (
		<div className="flex flex-col gap-4">
			<label htmlFor={id} className="font-body text-sm text-rangitoto/80 uppercase tracking-tight">
				{label}
			</label>
			<input
				id={id}
				type={type}
				required={required}
				placeholder={placeholder}
				className="w-full bg-transparent border-b border-judge-gray/60 focus:border-judge-gray font-body text-xs uppercase tracking-tight text-rangoon-green placeholder:text-rangitoto/40 placeholder:uppercase focus:outline-none py-3 transition-colors"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	)
}
