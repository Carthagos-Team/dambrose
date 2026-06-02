type Schema = Record<string, unknown>

/**
 * Renders a JSON-LD <script> for structured data.
 * Accepts a single schema object or an array. Arrays are emitted as a single
 * top-level object using `@context` + `@graph` (the standard form for multiple
 * entities) so naive parsers that read the root `@context` don't choke.
 */
export function JsonLd({ data }: { data: Schema | Schema[] }) {
	const payload: Schema = Array.isArray(data)
		? {
				'@context': 'https://schema.org',
				'@graph': data.map(({ '@context': _context, ...rest }) => rest),
			}
		: data
	const json = JSON.stringify(payload).replace(/</g, '\\u003c')
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be injected as a raw script body
			dangerouslySetInnerHTML={{ __html: json }}
		/>
	)
}
