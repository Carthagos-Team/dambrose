'use client'

import { AnimatePresence, motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const listVariants = {
	hidden: {},
	visible: {
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.06,
		},
	},
	exit: {
		transition: { staggerChildren: 0.03, staggerDirection: -1 },
	},
}

const itemVariants = {
	hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
	visible: {
		opacity: 1,
		filter: 'blur(0px)',
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
	},
	exit: {
		opacity: 0,
		filter: 'blur(8px)',
		y: -8,
		transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
	},
}

const LINKS = [
	{ label: 'Services', href: '/services' },
	{ label: 'Alma', href: '/alma', italic: true },
	{ label: 'Praeva', href: '/praeva', italic: true },
	{ label: 'B2B', href: '/b2b' },
	{ label: 'About us', href: '/about' },
	{ label: 'About Dr. Michael', href: '/about-dr-michael' },
	{ label: 'Lifelong Medicine', href: '/lifelong-medicine' },
	{ label: 'Membership', href: '/membership' },
	{ label: 'Contact', href: '/contact' },
]

export function MobileNav() {
	const [open, setOpen] = useState(false)
	const pathname = usePathname()

	const toggle = (next: boolean) => {
		setOpen(next)
		document.documentElement.style.overflow = next ? 'hidden' : ''
		if (next) window.__lenis?.stop()
		else window.__lenis?.start()
	}

	return (
		<>
			{/* ── Trigger (header burger) ─────────────────────── */}
			<button
				type="button"
				aria-label="Open navigation"
				onClick={() => toggle(true)}
				className="flex flex-col items-start justify-center gap-1.25 w-10 h-10 md:w-12 md:h-12"
			>
				<span className="block w-4.25 h-px bg-gray-olive" />
				<span className="block w-4.25 h-px bg-gray-olive" />
				<span className="block w-4.25 h-px bg-gray-olive" />
			</button>

			{/* ── Drawer + Backdrop ───────────────────────────── */}
			<AnimatePresence>
				{open && (
					<>
						<motion.button
							type="button"
							aria-label="Close navigation"
							onClick={() => toggle(false)}
							className="fixed inset-0 z-40 bg-rangoon-green/50 backdrop-blur-md cursor-pointer"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.4 }}
						/>

						<motion.div
							className="fixed inset-y-0 left-0 z-50 w-full md:w-[43vw] bg-ecru-white flex flex-col"
							initial={{ x: '-100%' }}
							animate={{ x: 0 }}
							exit={{ x: '-100%' }}
							transition={{
								duration: 0.7,
								ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
							}}
						>
							{/* Top section: close button + nav links (anchored to bottom) */}
							<div className="flex-1 flex flex-col pt-10.75 px-10.5 pb-13">
								<button
									type="button"
									aria-label="Close navigation"
									onClick={() => toggle(false)}
									className="w-6 h-6 rounded-full bg-rangoon-green flex flex-col items-center justify-center gap-1"
								>
									<span className="block w-2.75 h-px bg-ecru-white" />
									<span className="block w-2.75 h-px bg-ecru-white" />
									<span className="block w-2.75 h-px bg-ecru-white" />
								</button>

								<nav className="mt-auto">
									<motion.ul
										className="flex flex-col gap-1.5"
										variants={listVariants}
										initial="hidden"
										animate="visible"
										exit="exit"
									>
										{LINKS.map((link) => (
											<motion.li key={link.href} variants={itemVariants}>
												<a
													href={link.href}
													onClick={() => toggle(false)}
													className={`font-display text-4xl leading-none tracking-[-0.03em] block w-fit ${
														pathname === link.href
															? 'text-cape-cod border-b border-cape-cod'
															: 'text-olive-haze'
													} ${link.italic ? 'italic' : ''}`}
												>
													{link.label}
												</a>
											</motion.li>
										))}
									</motion.ul>
								</nav>
							</div>

							{/* Footer dark band */}
							<div className="bg-rangoon-green px-10.5 py-9 flex flex-col gap-20">
								{/* Social + copyright */}
								<div className="flex flex-col gap-8">
									<div className="flex items-center gap-2">
										<SocialIcon label="Facebook">
											<svg
												width="14"
												height="14"
												viewBox="0 0 16 16"
												fill="currentColor"
												aria-hidden="true"
											>
												<path d="M16 8a8 8 0 1 0-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.616-1.304 1.249V8h2.219l-.355 2.313H9.25v5.59A8.002 8.002 0 0 0 16 8Z" />
											</svg>
										</SocialIcon>
										<SocialIcon label="Instagram">
											<svg
												width="14"
												height="14"
												viewBox="0 0 16 16"
												fill="none"
												aria-hidden="true"
											>
												<rect
													x="1.5"
													y="1.5"
													width="13"
													height="13"
													rx="3.5"
													stroke="currentColor"
													strokeWidth="1.2"
												/>
												<circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.2" />
												<circle cx="11.5" cy="4.5" r="0.75" fill="currentColor" />
											</svg>
										</SocialIcon>
										<SocialIcon label="WhatsApp">
											<svg
												width="14"
												height="14"
												viewBox="0 0 16 16"
												fill="currentColor"
												aria-hidden="true"
											>
												<path d="M11.2 7.65c-.06-.03-.12-.06-.18-.08-.1-1.77-1.05-2.78-2.63-2.79h-.02c-.94 0-1.72.4-2.2 1.14l1.04.71c.36-.53.88-.66 1.18-.66.45 0 .8.13 1.01.4.16.19.26.45.3.78a5.3 5.3 0 0 0-1.42-.03c-1.42.16-2.33.94-2.27 1.94.03.5.3.94.75 1.23.38.24.88.36 1.4.33.69-.04 1.23-.28 1.6-.72.28-.33.46-.76.54-1.3.32.2.56.45.7.76.23.53.24 1.4-.47 2.1-.62.62-1.37.89-2.35.9-1.1-.01-1.93-.36-2.48-.92C4.36 10.9 4.1 9.88 4.1 8s.26-2.9.8-3.54c.55-.57 1.39-.91 2.48-.93 1.1.01 1.95.36 2.5.93.27.28.47.63.6 1.04l1.1-.29c-.17-.57-.45-1.06-.83-1.46C10 3 8.87 2.54 7.42 2.53h-.02C5.95 2.54 4.84 3 4.1 3.75c-.72.74-1.09 1.87-1.1 3.38V8.87c.01 1.51.38 2.64 1.1 3.38.75.75 1.86 1.21 3.3 1.22h.02c1.23-.01 2.18-.37 2.98-1.16.97-.97 1-2.3.6-3.2-.28-.64-.78-1.16-1.48-1.5l-.3.04Zm-.54 2.21c-.05.65-.49 1.37-1.66 1.44-.55.03-.98-.14-1.14-.24a.65.65 0 0 1-.31-.5c-.03-.42.3-.73.99-.81.09-.01.17-.01.26-.01.35 0 .68.04 1 .1l.03.01c-.04.01-.1.01-.17.01Z" />
											</svg>
										</SocialIcon>
									</div>
									<p className="font-body text-base text-opal tracking-tighter">
										© DAMBROSE® 2026, All Rights Reserved
									</p>
								</div>

								{/* Legal links */}
								<div className="flex flex-col gap-4">
									<a
										href="/terms"
										className="font-body text-sm text-ecru-white tracking-tight leading-tight"
									>
										Terms &amp; Conditions
									</a>
									<a
										href="/privacy"
										className="font-body text-sm text-ecru-white tracking-tight leading-tight"
									>
										Privacy Policy
									</a>
									<p className="font-body text-sm text-ecru-white tracking-tight leading-tight">
										All Rights Reserved © 2025
									</p>
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	)
}

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
	return (
		<button
			type="button"
			aria-label={label}
			className="w-6 h-6 rounded-full border border-opal/40 flex items-center justify-center text-opal"
		>
			{children}
		</button>
	)
}
