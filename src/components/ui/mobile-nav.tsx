'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { AnimatePresence, motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { TransitionLink } from '@/components/ui/transition-link'
import { lockScroll, unlockScroll } from '@/lib/scroll-lock'

gsap.registerPlugin(useGSAP, CustomEase)

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

type MobileNavProps = {
	variant?: 'default' | 'contact'
}

export function MobileNav({ variant = 'default' }: MobileNavProps = {}) {
	const [open, setOpen] = useState(false)
	const [mounted, setMounted] = useState(false)
	const pathname = usePathname()

	useEffect(() => setMounted(true), [])

	const toggle = (next: boolean) => {
		setOpen(next)
		if (next) {
			lockScroll()
			window.__lenis?.stop()
		} else {
			unlockScroll()
			window.__lenis?.start()
		}
	}

	// Closed bar color by variant; on the open circle the bars go ecru-white.
	const closedColor = variant === 'contact' ? '#ffffe4' : '#a29a84'
	const OPEN_COLOR = '#f2f1e3'

	const buttonRef = useRef<HTMLButtonElement>(null)
	const circleRef = useRef<HTMLSpanElement>(null)
	const topRef = useRef<HTMLSpanElement>(null)
	const midRef = useRef<HTMLSpanElement>(null)
	const botRef = useRef<HTMLSpanElement>(null)

	// Morph the bars burger ↔ X (and bloom the dark circle), driven by `open`
	// so backdrop-close reverses it too. Bars converge ±7px (gap 6 + 1px bar).
	useGSAP(
		() => {
			const top = topRef.current
			const mid = midRef.current
			const bot = botRef.current
			const circle = circleRef.current
			if (!top || !mid || !bot || !circle) return

			if (!CustomEase.get('menu-ease')) {
				CustomEase.create('menu-ease', '0.5, 0.05, 0.05, 0.99')
			}

			const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
			if (reduce) {
				if (open) {
					gsap.set(circle, { scale: 1, autoAlpha: 1 })
					gsap.set([top, mid, bot], { backgroundColor: OPEN_COLOR })
					gsap.set(mid, { autoAlpha: 0 })
					gsap.set(top, { y: 7, rotate: 45 })
					gsap.set(bot, { y: -7, rotate: -45 })
				} else {
					gsap.set(circle, { scale: 0, autoAlpha: 0 })
					gsap.set([top, mid, bot], { backgroundColor: closedColor, autoAlpha: 1, y: 0, rotate: 0 })
				}
				return
			}

			const tl = gsap.timeline({
				defaults: { ease: 'menu-ease', duration: 0.4, overwrite: 'auto' },
			})

			if (open) {
				tl.to(circle, { scale: 1, autoAlpha: 1, duration: 0.45 }, 0)
					.to([top, mid, bot], { backgroundColor: OPEN_COLOR, duration: 0.3 }, 0)
					.to(mid, { autoAlpha: 0, scaleX: 0, duration: 0.2 }, 0)
					.to(top, { y: 7, duration: 0.25 }, 0.05)
					.to(bot, { y: -7, duration: 0.25 }, 0.05)
					.to(top, { rotate: 45, duration: 0.3 }, 0.2)
					.to(bot, { rotate: -45, duration: 0.3 }, 0.2)
			} else {
				tl.to([top, bot], { rotate: 0, duration: 0.3 }, 0)
					.to([top, bot], { y: 0, duration: 0.25 }, 0.12)
					.to(mid, { autoAlpha: 1, scaleX: 1, duration: 0.25 }, 0.18)
					.to([top, mid, bot], { backgroundColor: closedColor, duration: 0.3 }, 0.1)
					.to(circle, { scale: 0, autoAlpha: 0, duration: 0.35 }, 0.05)
			}
		},
		{ scope: buttonRef, dependencies: [open, closedColor] },
	)

	const menuButton = (
		// Portaled to <body> so it always paints above the portaled drawer,
		// even on pages whose header sits inside a stacking context (e.g. praeva).
		// `absolute` (not fixed) keeps the current behavior: it scrolls away with
		// the header instead of floating.
		<button
			ref={buttonRef}
			type="button"
			aria-label={open ? 'Close menu' : 'Open navigation'}
			aria-expanded={open}
			onClick={() => toggle(!open)}
			className="absolute left-5 top-5 z-[70] flex items-center justify-center w-10 h-10 md:left-10 md:top-6 md:w-12 md:h-12"
		>
			{/* bloom circle (behind bars) */}
			<span
				ref={circleRef}
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 m-auto size-7.5 rounded-full bg-rangoon-green opacity-0"
			/>
			{/* bars */}
			<span className="relative z-10 flex flex-col items-center gap-1.5">
				<span ref={topRef} className="block h-px w-4.5" style={{ backgroundColor: closedColor }} />
				<span ref={midRef} className="block h-px w-4.5" style={{ backgroundColor: closedColor }} />
				<span ref={botRef} className="block h-px w-4.5" style={{ backgroundColor: closedColor }} />
			</span>
		</button>
	)

	return (
		<>
			{/* Spacer keeps the header grid layout; the real button is portaled below. */}
			<div aria-hidden="true" className="w-10 h-10 md:w-12 md:h-12" />

			{/* ── Menu button (portaled) + Drawer + Backdrop ───────────── */}
			{mounted &&
				createPortal(
					<>
						{menuButton}
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
										{/* Top section: nav links anchored to the bottom on tall screens,
									    but scrollable with top clearance so the menu button never
									    overlaps the links on short (laptop) viewports. */}
										<div className="flex-1 min-h-0 overflow-y-auto px-10.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
											<nav className="flex min-h-full flex-col justify-end pt-20 pb-6 md:pb-10">
												<motion.ul
													className="flex flex-col gap-[0.4em] md:gap-[clamp(0.3125em,0.42vw,0.6875em)]"
													variants={listVariants}
													initial="hidden"
													animate="visible"
													exit="exit"
												>
													{LINKS.map((link) => (
														<motion.li key={link.href} variants={itemVariants}>
															<TransitionLink
																href={link.href}
																onClick={() => toggle(false)}
																className={`font-display text-[clamp(1.5rem,min(9vw,5vh),2.85em)] md:text-[clamp(1.75em,min(2.78vw,4.6vh),4em)] leading-none tracking-[-0.03em] block w-fit relative no-underline after:pointer-events-none after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-current after:transition-transform after:duration-[600ms] after:ease-[cubic-bezier(0.625,0.05,0,1)] after:[content:''] hover:after:origin-left hover:after:scale-x-100 motion-reduce:after:transition-none ${
																	pathname === link.href
																		? 'text-rangitoto after:origin-left after:scale-x-100'
																		: 'text-olive-haze after:origin-right after:scale-x-0'
																} ${link.italic ? 'italic' : ''}`}
															>
																{link.label}
															</TransitionLink>
														</motion.li>
													))}
												</motion.ul>
											</nav>
										</div>

										{/* Footer dark band */}
										<div className="bg-rangoon-green px-10.5 py-6 md:py-7 flex flex-col gap-[clamp(1.5rem,5vw,2.25rem)] md:gap-4">
											{/* Social + copyright */}
											<div className="flex flex-col gap-[1.5em] md:gap-4">
												<div className="flex items-center gap-[1.15em] md:gap-2">
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
												<p className="font-body text-[clamp(0.68rem,3.2vw,0.9rem)] md:text-xs text-opal tracking-tighter">
													© DAMBROSE® 2026, All Rights Reserved
												</p>
											</div>

											{/* Legal links */}
											<div className="flex flex-col gap-[1.15em] md:gap-4">
												<a
													href="/terms"
													className="font-body text-[clamp(0.68rem,3.2vw,0.9rem)] md:text-xs text-ecru-white tracking-tight leading-tight"
												>
													Terms &amp; Conditions
												</a>
												<a
													href="/privacy"
													className="font-body text-[clamp(0.68rem,3.2vw,0.9rem)] md:text-xs text-ecru-white tracking-tight leading-tight"
												>
													Privacy Policy
												</a>
												<p className="font-body text-[clamp(0.68rem,3.2vw,0.9rem)] md:text-xs text-ecru-white tracking-tight leading-tight">
													All Rights Reserved © 2025
												</p>
											</div>
										</div>
									</motion.div>
								</>
							)}
						</AnimatePresence>
					</>,
					document.body,
				)}
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
