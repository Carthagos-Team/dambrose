# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responsiveness.spec.ts >> Lifelong Medicine — essential elements >> h1 is visible
- Location: e2e/responsiveness.spec.ts:98:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('h1').first()
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('h1').first()
    14 × locator resolved to <h1 class="font-display text-[2.6em] leading-none tracking-[0.01em] text-gray-olive">…</h1>
       - unexpected value "hidden"

```

```yaml
- banner:
  - link "Dambrose — Home":
    - /url: /
    - img "Dambrose"
- main:
  - img "Patient and physician in attentive conversation — the heart of DAMBROSE Lifelong Medicine"
  - img "Orchid close-up — a detail of the serene DAMBROSE environment"
  - img "Person running along a canyon trail — the energy of lifelong health"
  - img "Woman standing in warm sunlight — the embodiment of lifelong wellbeing at DAMBROSE"
  - img "Dr. Michael J. Dambrose — founder of DAMBROSE Lifelong Medicine"
  - img "Interior room — the serene environment of DAMBROSE care"
  - img "Lounge chair by window — the comfort of lifelong medicine"
- contentinfo:
  - heading "Begin a new relationship with your health." [level=2]:
    - text: Begin a
    - emphasis: new relationship
    - text: with your health.
  - link "Inquiry about membership":
    - /url: /contact
  - img "Dambrose clinic interior"
  - img
  - paragraph: Main Pages
  - list:
    - listitem:
      - link "Homepage":
        - /url: /
    - listitem:
      - link "Membership":
        - /url: /membership
    - listitem:
      - link "About us":
        - /url: /about
    - listitem:
      - link "About Dr. Michael":
        - /url: /about-dr-michael
    - listitem:
      - link "Lifelong medicine":
        - /url: /lifelong-medicine
  - paragraph: Services
  - list:
    - listitem:
      - link "Services":
        - /url: /services
    - listitem:
      - link "Alma":
        - /url: /alma
    - listitem:
      - link "Praeva":
        - /url: /praeva
    - listitem:
      - link "Corporate":
        - /url: /b2b
  - paragraph: Contact & Other
  - list:
    - listitem:
      - link "Contact & FAQ":
        - /url: /contact
    - listitem: "404"
    - listitem: Privacy policy
    - listitem: Terms of service
  - link "Facebook":
    - /url: /
  - link "Instagram":
    - /url: /
  - link "Threads":
    - /url: /
  - paragraph: © DAMBROSE® 2026, All Rights Reserved
  - img "designed by CRT★"
- alert
- button "Open navigation"
```

# Test source

```ts
  1   | import { test, expect, type Page, type BrowserContext } from '@playwright/test'
  2   | 
  3   | // ---------------------------------------------------------------------------
  4   | // Helpers
  5   | // ---------------------------------------------------------------------------
  6   | 
  7   | async function noHorizontalScroll(page: Page) {
  8   | 	const overflow = await page.evaluate(() => {
  9   | 		const docWidth = document.documentElement.scrollWidth
  10  | 		const viewWidth = document.documentElement.clientWidth
  11  | 		return { docWidth, viewWidth, overflows: docWidth > viewWidth + 1 }
  12  | 	})
  13  | 	expect(
  14  | 		overflow.overflows,
  15  | 		`Horizontal scroll detected: scrollWidth=${overflow.docWidth} > clientWidth=${overflow.viewWidth}`,
  16  | 	).toBe(false)
  17  | }
  18  | 
  19  | async function gotoAndWait(page: Page, path: string) {
  20  | 	await page.goto(path)
  21  | 	await page.waitForLoadState('domcontentloaded')
  22  | 	await page.waitForTimeout(300)
  23  | 	// Nudge the scroll so GSAP ScrollTrigger fires for elements near the fold
  24  | 	await page.mouse.wheel(0, 80)
  25  | 	await page.waitForTimeout(300)
  26  | }
  27  | 
  28  | // Check that two elements are stacked (second is below first, not beside it)
  29  | async function areStacked(page: Page, topSelector: string, bottomSelector: string): Promise<boolean> {
  30  | 	const topBox = await page.locator(topSelector).first().boundingBox()
  31  | 	const bottomBox = await page.locator(bottomSelector).first().boundingBox()
  32  | 	if (!topBox || !bottomBox) return true // Element not found — skip
  33  | 	// "stacked" = bottom element's top is at or below the top element's bottom
  34  | 	return bottomBox.y >= topBox.y + topBox.height - 4 // 4px tolerance
  35  | }
  36  | 
  37  | // ---------------------------------------------------------------------------
  38  | // No horizontal scroll — both pages, all viewports
  39  | // ---------------------------------------------------------------------------
  40  | 
  41  | const PAGES: { label: string; path: string }[] = [
  42  | 	{ label: 'About', path: '/about' },
  43  | 	{ label: 'Lifelong Medicine', path: '/lifelong-medicine' },
  44  | 	{ label: 'Praeva', path: '/praeva' },
  45  | ]
  46  | 
  47  | for (const { label, path } of PAGES) {
  48  | 	test.describe(`${label} — horizontal scroll`, () => {
  49  | 		test('no horizontal scroll on load', async ({ page }) => {
  50  | 			await gotoAndWait(page, path)
  51  | 			await noHorizontalScroll(page)
  52  | 		})
  53  | 
  54  | 		test('no horizontal scroll after scrolling to bottom', async ({ page }) => {
  55  | 			await gotoAndWait(page, path)
  56  | 			// Scroll in increments and check each time
  57  | 			const pageHeight = await page.evaluate(() => document.body.scrollHeight)
  58  | 			for (let y = 0; y <= pageHeight; y += 600) {
  59  | 				await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y)
  60  | 				await page.waitForTimeout(100)
  61  | 				await noHorizontalScroll(page)
  62  | 			}
  63  | 		})
  64  | 	})
  65  | }
  66  | 
  67  | // ---------------------------------------------------------------------------
  68  | // Essential elements visible — both pages, all viewports
  69  | // ---------------------------------------------------------------------------
  70  | 
  71  | test.describe('About — essential elements', () => {
  72  | 	test('navigation header is visible', async ({ page }) => {
  73  | 		await gotoAndWait(page, '/about')
  74  | 		await expect(page.locator('header').first()).toBeVisible()
  75  | 	})
  76  | 
  77  | 	test('h1 is visible', async ({ page }) => {
  78  | 		await gotoAndWait(page, '/about')
  79  | 		await expect(page.locator('h1').first()).toBeVisible()
  80  | 	})
  81  | 
  82  | 	test('first hero image loads with non-zero dimensions', async ({ page }) => {
  83  | 		await gotoAndWait(page, '/about')
  84  | 		const img = page.locator('main img').first()
  85  | 		await expect(img).toBeVisible()
  86  | 		const box = await img.boundingBox()
  87  | 		expect(box?.width).toBeGreaterThan(0)
  88  | 		expect(box?.height).toBeGreaterThan(0)
  89  | 	})
  90  | })
  91  | 
  92  | test.describe('Lifelong Medicine — essential elements', () => {
  93  | 	test('navigation header is visible', async ({ page }) => {
  94  | 		await gotoAndWait(page, '/lifelong-medicine')
  95  | 		await expect(page.locator('header').first()).toBeVisible()
  96  | 	})
  97  | 
  98  | 	test('h1 is visible', async ({ page }) => {
  99  | 		await gotoAndWait(page, '/lifelong-medicine')
> 100 | 		await expect(page.locator('h1').first()).toBeVisible()
      |                                            ^ Error: expect(locator).toBeVisible() failed
  101 | 	})
  102 | 
  103 | 	test('hero image loads with non-zero dimensions', async ({ page }) => {
  104 | 		await gotoAndWait(page, '/lifelong-medicine')
  105 | 		const img = page.locator('main img').first()
  106 | 		await expect(img).toBeVisible()
  107 | 		const box = await img.boundingBox()
  108 | 		expect(box?.width).toBeGreaterThan(0)
  109 | 		expect(box?.height).toBeGreaterThan(0)
  110 | 	})
  111 | 
  112 | 	test('all main sections render', async ({ page }) => {
  113 | 		await gotoAndWait(page, '/lifelong-medicine')
  114 | 		const sections = page.locator('main section')
  115 | 		const count = await sections.count()
  116 | 		// Hero divider + sec12-sec18 = at least 8 sections
  117 | 		expect(count).toBeGreaterThanOrEqual(8)
  118 | 	})
  119 | })
  120 | 
  121 | test.describe('Praeva — essential elements', () => {
  122 | 	test('navigation header is visible', async ({ page }) => {
  123 | 		await gotoAndWait(page, '/praeva')
  124 | 		await expect(page.locator('header').first()).toBeVisible()
  125 | 	})
  126 | 
  127 | 	test('h1 Praeva is visible', async ({ page }) => {
  128 | 		await gotoAndWait(page, '/praeva')
  129 | 		await expect(page.locator('h1').first()).toBeVisible()
  130 | 	})
  131 | 
  132 | 	test('hero background image loads with non-zero dimensions', async ({ page }) => {
  133 | 		await gotoAndWait(page, '/praeva')
  134 | 		const img = page.locator('img[alt*="Ocean"]').first()
  135 | 		await expect(img).toBeVisible()
  136 | 		const box = await img.boundingBox()
  137 | 		expect(box?.width).toBeGreaterThan(0)
  138 | 		expect(box?.height).toBeGreaterThan(0)
  139 | 	})
  140 | 
  141 | 	test('hero occupies at least 90% of viewport height', async ({ page }) => {
  142 | 		await gotoAndWait(page, '/praeva')
  143 | 		const hero = page.locator('main section').first()
  144 | 		const box = await hero.boundingBox()
  145 | 		const vh = page.viewportSize()?.height ?? 900
  146 | 		expect(box?.height).toBeGreaterThan(vh * 0.9)
  147 | 	})
  148 | 
  149 | 	test('header is transparent — does not have ecru-white background', async ({ page }) => {
  150 | 		await gotoAndWait(page, '/praeva')
  151 | 		const bg = await page.locator('header').first().evaluate(
  152 | 			(el) => window.getComputedStyle(el).backgroundColor
  153 | 		)
  154 | 		// transparent = rgba(0,0,0,0)
  155 | 		expect(bg).toBe('rgba(0, 0, 0, 0)')
  156 | 	})
  157 | 
  158 | 	test('Praeva card is centered horizontally', async ({ page }) => {
  159 | 		await gotoAndWait(page, '/praeva')
  160 | 		const card = page.locator('h1:has-text("Praeva")').first()
  161 | 		const cardBox = await card.boundingBox()
  162 | 		const vw = page.viewportSize()?.width ?? 1440
  163 | 		if (cardBox) {
  164 | 			const cardCenterX = cardBox.x + cardBox.width / 2
  165 | 			expect(Math.abs(cardCenterX - vw / 2)).toBeLessThan(vw * 0.05)
  166 | 		}
  167 | 	})
  168 | })
  169 | 
  170 | // ---------------------------------------------------------------------------
  171 | // Mobile stacking — only for mobile viewports
  172 | // ---------------------------------------------------------------------------
  173 | 
  174 | test.describe('Mobile stacking — Lifelong Medicine', () => {
  175 | 	test.skip(({ viewport }) => !viewport || viewport.width >= 768, 'Mobile only')
  176 | 
  177 | 	test('sec12: image stacks above text column', async ({ page }) => {
  178 | 		await gotoAndWait(page, '/lifelong-medicine')
  179 | 		// The orchid image (first image in sec12) should be above the paragraph text
  180 | 		const stacked = await areStacked(
  181 | 			page,
  182 | 			'img[alt*="Orchid"]',
  183 | 			'p:has-text("Modern healthcare is built around moments")',
  184 | 		)
  185 | 		expect(stacked).toBe(true)
  186 | 	})
  187 | 
  188 | 	test('sec13: left column stacks above right portrait', async ({ page }) => {
  189 | 		await gotoAndWait(page, '/lifelong-medicine')
  190 | 		const stacked = await areStacked(
  191 | 			page,
  192 | 			'img[alt*="canyon"]',
  193 | 			'img[alt*="Woman standing"]',
  194 | 		)
  195 | 		expect(stacked).toBe(true)
  196 | 	})
  197 | 
  198 | 	test('sec14: card stacks above paragraph', async ({ page }) => {
  199 | 		await gotoAndWait(page, '/lifelong-medicine')
  200 | 		const stacked = await areStacked(
```