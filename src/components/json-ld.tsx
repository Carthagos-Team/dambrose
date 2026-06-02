/**
 * Renders a JSON-LD <script> for structured data.
 * Accepts a single schema object or an array of them.
 */
export function JsonLd({ data }: { data: object | object[] }) {
	const json = JSON.stringify(data).replace(/</g, '\\u003c')
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be injected as a raw script body
			dangerouslySetInnerHTML={{ __html: json }}
		/>
	)
}
