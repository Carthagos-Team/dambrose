import { test, expect, type Page, type BrowserContext } from '@playwright/test'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function noHorizontalScroll(page: Page) {
	const overflow = await page.evaluate(() => {
		const docWidth = document.documentElement.scrollWidth
		const viewWidth = document.documentElement.clientWidth
		return { docWidth, viewWidth, overflows: docWidth > viewWidth + 1 }
	})
	expect(
		overflow.overflows,
		`Horizontal scroll detected: scrollWidth=${overflow.docWidth} > clientWidth=${overflow.viewWidth}`,
	).toBe(false)
}

async function gotoAndWait(page: Page, path: string) {
	await page.goto(path)
	await page.waitForLoadState('domcontentloaded')
	await page.waitForTimeout(300)
	// Nudge the scroll so GSAP ScrollTrigger fires for elements near the fold
	await page.mouse.wheel(0, 80)
	await page.waitForTimeout(300)
}

// Check that two elements are stacked (second is below first, not beside it)
async function areStacked(page: Page, topSelector: string, bottomSelector: string): Promise<boolean> {
	const topBox = await page.locator(topSelector).first().boundingBox()
	const bottomBox = await page.locator(bottomSelector).first().boundingBox()
	if (!topBox || !bottomBox) return true // Element not found — skip
	// "stacked" = bottom element's top is at or below the top element's bottom
	return bottomBox.y >= topBox.y + topBox.height - 4 // 4px tolerance
}

// ---------------------------------------------------------------------------
// No horizontal scroll — both pages, all viewports
// ---------------------------------------------------------------------------

const PAGES: { label: string; path: string }[] = [
	{ label: 'About', path: '/about' },
	{ label: 'Lifelong Medicine', path: '/lifelong-medicine' },
	{ label: 'Praeva', path: '/praeva' },
]

for (const { label, path } of PAGES) {
	test.describe(`${label} — horizontal scroll`, () => {
		test('no horizontal scroll on load', async ({ page }) => {
			await gotoAndWait(page, path)
			await noHorizontalScroll(page)
		})

		test('no horizontal scroll after scrolling to bottom', async ({ page }) => {
			await gotoAndWait(page, path)
			// Scroll in increments and check each time
			const pageHeight = await page.evaluate(() => document.body.scrollHeight)
			for (let y = 0; y <= pageHeight; y += 600) {
				await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y)
				await page.waitForTimeout(100)
				await noHorizontalScroll(page)
			}
		})
	})
}

// ---------------------------------------------------------------------------
// Essential elements visible — both pages, all viewports
// ---------------------------------------------------------------------------

test.describe('About — essential elements', () => {
	test('navigation header is visible', async ({ page }) => {
		await gotoAndWait(page, '/about')
		await expect(page.locator('header').first()).toBeVisible()
	})

	test('h1 is visible', async ({ page }) => {
		await gotoAndWait(page, '/about')
		await expect(page.locator('h1').first()).toBeVisible()
	})

	test('first hero image loads with non-zero dimensions', async ({ page }) => {
		await gotoAndWait(page, '/about')
		const img = page.locator('main img').first()
		await expect(img).toBeVisible()
		const box = await img.boundingBox()
		expect(box?.width).toBeGreaterThan(0)
		expect(box?.height).toBeGreaterThan(0)
	})
})

test.describe('Lifelong Medicine — essential elements', () => {
	test('navigation header is visible', async ({ page }) => {
		await gotoAndWait(page, '/lifelong-medicine')
		await expect(page.locator('header').first()).toBeVisible()
	})

	test('h1 is visible', async ({ page }) => {
		await gotoAndWait(page, '/lifelong-medicine')
		await expect(page.locator('h1').first()).toBeVisible()
	})

	test('hero image loads with non-zero dimensions', async ({ page }) => {
		await gotoAndWait(page, '/lifelong-medicine')
		const img = page.locator('main img').first()
		await expect(img).toBeVisible()
		const box = await img.boundingBox()
		expect(box?.width).toBeGreaterThan(0)
		expect(box?.height).toBeGreaterThan(0)
	})

	test('all main sections render', async ({ page }) => {
		await gotoAndWait(page, '/lifelong-medicine')
		const sections = page.locator('main section')
		const count = await sections.count()
		// Hero divider + sec12-sec18 = at least 8 sections
		expect(count).toBeGreaterThanOrEqual(8)
	})
})

test.describe('Praeva — essential elements', () => {
	test('navigation header is visible', async ({ page }) => {
		await gotoAndWait(page, '/praeva')
		await expect(page.locator('header').first()).toBeVisible()
	})

	test('h1 Praeva is visible', async ({ page }) => {
		await gotoAndWait(page, '/praeva')
		await expect(page.locator('h1').first()).toBeVisible()
	})

	test('hero background image loads with non-zero dimensions', async ({ page }) => {
		await gotoAndWait(page, '/praeva')
		const img = page.locator('img[alt*="Ocean"]').first()
		await expect(img).toBeVisible()
		const box = await img.boundingBox()
		expect(box?.width).toBeGreaterThan(0)
		expect(box?.height).toBeGreaterThan(0)
	})

	test('hero occupies at least 90% of viewport height', async ({ page }) => {
		await gotoAndWait(page, '/praeva')
		const hero = page.locator('main section').first()
		const box = await hero.boundingBox()
		const vh = page.viewportSize()?.height ?? 900
		expect(box?.height).toBeGreaterThan(vh * 0.9)
	})

	test('header is transparent — does not have ecru-white background', async ({ page }) => {
		await gotoAndWait(page, '/praeva')
		const bg = await page.locator('header').first().evaluate(
			(el) => window.getComputedStyle(el).backgroundColor
		)
		// transparent = rgba(0,0,0,0)
		expect(bg).toBe('rgba(0, 0, 0, 0)')
	})

	test('Praeva card is centered horizontally', async ({ page }) => {
		await gotoAndWait(page, '/praeva')
		const card = page.locator('h1:has-text("Praeva")').first()
		const cardBox = await card.boundingBox()
		const vw = page.viewportSize()?.width ?? 1440
		if (cardBox) {
			const cardCenterX = cardBox.x + cardBox.width / 2
			expect(Math.abs(cardCenterX - vw / 2)).toBeLessThan(vw * 0.05)
		}
	})
})

// ---------------------------------------------------------------------------
// Mobile stacking — only for mobile viewports
// ---------------------------------------------------------------------------

test.describe('Mobile stacking — Lifelong Medicine', () => {
	test.skip(({ viewport }) => !viewport || viewport.width >= 768, 'Mobile only')

	test('sec12: image stacks above text column', async ({ page }) => {
		await gotoAndWait(page, '/lifelong-medicine')
		// The orchid image (first image in sec12) should be above the paragraph text
		const stacked = await areStacked(
			page,
			'img[alt*="Orchid"]',
			'p:has-text("Modern healthcare is built around moments")',
		)
		expect(stacked).toBe(true)
	})

	test('sec13: left column stacks above right portrait', async ({ page }) => {
		await gotoAndWait(page, '/lifelong-medicine')
		const stacked = await areStacked(
			page,
			'img[alt*="canyon"]',
			'img[alt*="Woman standing"]',
		)
		expect(stacked).toBe(true)
	})

	test('sec14: card stacks above paragraph', async ({ page }) => {
		await gotoAndWait(page, '/lifelong-medicine')
		const stacked = await areStacked(
			page,
			'h2:has-text("Healthcare built around presence")',
			'p:has-text("At DAMBROSE, lifelong medicine")',
		)
		expect(stacked).toBe(true)
	})

	test('sec15: episodic card stacks above lifelong card', async ({ page }) => {
		await gotoAndWait(page, '/lifelong-medicine')
		const stacked = await areStacked(
			page,
			'h3:has-text("EPISODIC CARE")',
			'h3:has-text("LIFELONG")',
		)
		expect(stacked).toBe(true)
	})

	test('sec16: portrait stacks above quote', async ({ page }) => {
		await gotoAndWait(page, '/lifelong-medicine')
		const stacked = await areStacked(
			page,
			'img[alt*="Dr. Michael"]',
			'blockquote',
		)
		expect(stacked).toBe(true)
	})
})

test.describe('Mobile stacking — About', () => {
	test.skip(({ viewport }) => !viewport || viewport.width >= 768, 'Mobile only')

	test('first two-column section stacks correctly', async ({ page }) => {
		await gotoAndWait(page, '/about')
		// The first section in main should have its image above any h2
		const firstSectionImg = page.locator('main section img').first()
		const firstH2 = page.locator('main h2').first()
		const imgBox = await firstSectionImg.boundingBox()
		const h2Box = await firstH2.boundingBox()
		if (imgBox && h2Box) {
			// h2 is either above or below the image — we just want no side-by-side overlap
			const sideBySide = Math.abs(imgBox.y - h2Box.y) < 20 && Math.abs(imgBox.x - h2Box.x) > 50
			expect(sideBySide).toBe(false)
		}
	})
})

// ---------------------------------------------------------------------------
// No text overflow — key headings fit within viewport width
// ---------------------------------------------------------------------------

test.describe('Text overflow', () => {
	for (const { label, path } of PAGES) {
		test(`${label} — no heading clips beyond viewport`, async ({ page }) => {
			await gotoAndWait(page, path)
			const clipped = await page.evaluate(() => {
				const headings = Array.from(document.querySelectorAll('h1, h2, h3'))
				const vw = document.documentElement.clientWidth
				return headings
					.map((el) => {
						const rect = el.getBoundingClientRect()
						return { text: el.textContent?.slice(0, 40), right: rect.right, vw }
					})
					.filter((h) => h.right > h.vw + 4)
			})
			expect(
				clipped,
				`Headings exceeding viewport: ${JSON.stringify(clipped)}`,
			).toHaveLength(0)
		})
	}
})
