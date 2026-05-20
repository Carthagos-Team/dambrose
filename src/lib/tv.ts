import { createTV } from 'tailwind-variants'

export const tv = createTV({
	twMergeConfig: {
		// Extend twMerge to recognize custom Tailwind tokens
		classGroups: {
			'font-size': [{ text: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'] }],
		},
	},
})

export type { VariantProps } from 'tailwind-variants'
