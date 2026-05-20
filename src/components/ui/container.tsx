export function Container({
	className = '',
	children,
}: {
	className?: string
	children: React.ReactNode
}) {
	return (
		<div className={`mx-auto w-full max-w-340 min-[1920px]:max-w-none px-5 md:px-10 ${className}`}>
			{children}
		</div>
	)
}
