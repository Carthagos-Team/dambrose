import { Container } from './container'
import { SectionDividerReveal } from './section-divider-reveal'

export function SectionDivider({ className }: { className?: string } = {}) {
	return (
		<section className={`w-full bg-ecru-white ${className ?? ''}`}>
			<Container>
				<SectionDividerReveal />
			</Container>
		</section>
	)
}
