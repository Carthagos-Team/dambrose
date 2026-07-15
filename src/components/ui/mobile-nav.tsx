'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { AnimatePresence, motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { SOCIAL_ICONS } from '@/components/ui/social-icons'
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
	{ label: 'Corporate Memberships', href: '/b2b' },
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
											<nav className="flex min-h-full flex-col justify-end pt-20 pb-6 md:pt-[clamp(4.5rem,12vh,5rem)] md:pb-[clamp(1.5rem,4vh,2.5rem)]">
												<motion.ul
													className="flex flex-col gap-[0.4em] md:gap-[clamp(0.4em,1.6vh,0.875em)]"
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
																className={`font-display text-[clamp(1.5rem,min(9vw,5vh),2.85em)] md:text-[clamp(1.375rem,min(2.78vw,4.6vh),4em)] leading-none tracking-[-0.03em] block w-fit relative no-underline after:pointer-events-none after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-current after:transition-transform after:duration-[600ms] after:ease-[cubic-bezier(0.625,0.05,0,1)] after:[content:''] hover:after:origin-left hover:after:scale-x-100 motion-reduce:after:transition-none ${
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
										<div className="bg-rangoon-green px-10.5 py-6 md:py-[clamp(1rem,2.5vh,1.75rem)] flex flex-col gap-[clamp(1.5rem,5vw,2.25rem)] md:gap-[clamp(0.5rem,1.6vh,1rem)]">
											{/* Social + copyright */}
											<div className="flex flex-col gap-[1.5em] md:gap-[clamp(0.5rem,1.6vh,1rem)]">
												<div className="flex items-center gap-4">
													{SOCIAL_ICONS.map(({ label, href, Icon }) => (
														<SocialIcon key={label} label={label} href={href}>
															<Icon className="w-full h-full" />
														</SocialIcon>
													))}
												</div>
												<p className="font-body text-[clamp(0.68rem,3.2vw,0.9rem)] md:text-xs text-opal tracking-tighter">
													DAMBROSE® 2026, All Rights Reserved
												</p>
											</div>

											{/* Legal links */}
											<div className="flex flex-col gap-[1.15em] md:gap-[clamp(0.5rem,1.6vh,1rem)]">
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

function SocialIcon({
	label,
	href = '/',
	children,
}: {
	label: string
	href?: string
	children: React.ReactNode
}) {
	return (
		<a
			href={href}
			aria-label={label}
			className="w-6 h-6 flex items-center justify-center text-opal"
		>
			<span className="sr-only">{label}</span>
			{children}
		</a>
	)
}
