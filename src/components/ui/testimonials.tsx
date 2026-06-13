import { TestimonialDeck } from '@/components/ui/testimonial-deck'

const QUOTES = [
	{
		author: 'Mark Bonefield',
		location: 'Bone Valley, TX',
		quote:
			'I have been a patient of Dr. D’Ambrose for several years, and I couldn’t be more grateful for the care I receive. Dr. D’Ambrose and Elaina always take the time to thoroughly understand my health concerns and work closely with specialists to manage my care. The level of attention and compassion here is unmatched, and I always feel confident that my health is in the best hands.',
	},
	{
		author: 'Lillian Smith',
		location: 'Bone Valley, TX',
		quote:
			'The transition into a more attentive practice has changed how I think about medicine. Visits feel calm and unhurried, follow-ups are personal, and every recommendation is shaped around the life I actually live. There is a steadiness and care here I never knew was possible.',
	},
	{
		author: 'Robert Hale',
		location: 'Bone Valley, TX',
		quote:
			'For the first time, I feel like my doctor truly knows me. Nothing is rushed, nothing is forgotten, and every decision is made with my full history in mind. The continuity of care has given me a confidence in my health I had not felt in decades.',
	},
]

export function Testimonials() {
	return (
		<section className="relative w-full">
			<TestimonialDeck quotes={QUOTES} />
		</section>
	)
}
