import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	const { firstName, lastName, email, tel, message } = await req.json()

	if (!firstName || !email || !message) {
		return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
	}

	const resend = new Resend(process.env.RESEND_API_KEY)

	const { error } = await resend.emails.send({
		from: 'Dambrose Contact <onboarding@resend.dev>',
		to: 'michael.dambrose@mjdmd.com',
		replyTo: email,
		subject: `New message from ${firstName} ${lastName}`.trim(),
		text: [
			`Name: ${firstName} ${lastName}`,
			`Email: ${email}`,
			tel ? `Phone: ${tel}` : null,
			``,
			message,
		]
			.filter((l) => l !== null)
			.join('\n'),
	})

	if (error) {
		return NextResponse.json({ error: error.message }, { status: 500 })
	}

	return NextResponse.json({ success: true })
}
