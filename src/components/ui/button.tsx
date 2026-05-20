import type { ComponentProps } from 'react'
import { tv, type VariantProps } from '@/lib/tv'

const button = tv({
	base: [
		'inline-flex items-center justify-center',
		'font-body text-sm md:text-xs uppercase tracking-wide',
		'rounded-[2px]',
		'transition-opacity duration-200',
		'hover:opacity-80',
		'cursor-pointer select-none',
		'whitespace-nowrap',
	],
	variants: {
		variant: {
			opal: 'bg-opal text-william',
			khaki: 'bg-indian-khaki text-ecru-white',
			teal: 'bg-william text-ecru-white',
			dark: 'bg-gray-olive text-ecru-white',
			outline: 'border border-current bg-transparent text-current',
		},
		size: {
			sm: 'px-4 py-2.5',
			md: 'px-5 h-12',
		},
	},
	defaultVariants: {
		variant: 'opal',
		size: 'md',
	},
})

type ButtonVariants = VariantProps<typeof button>

type ButtonAsButton = ComponentProps<'button'> & ButtonVariants & { href?: undefined }

type ButtonAsAnchor = ComponentProps<'a'> & ButtonVariants & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({ variant, size, className, ...props }: ButtonProps) {
	const cls = button({ variant, size, className })

	if ('href' in props && props.href !== undefined) {
		return <a className={cls} {...(props as ComponentProps<'a'>)} />
	}

	return <button type="button" className={cls} {...(props as ComponentProps<'button'>)} />
}
