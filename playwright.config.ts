import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
	testDir: './e2e',
	timeout: 30_000,
	retries: 1,
	reporter: 'line',
	use: {
		baseURL: 'http://localhost:3000',
		trace: 'on-first-retry',
	},
	projects: [
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 5'] }, // 393×851, Chromium
		},
		{
			// iPhone 12 viewport on Chromium — run `npx playwright install webkit` for real Safari
			name: 'Mobile Safari',
			use: {
				browserName: 'chromium',
				viewport: { width: 390, height: 844 },
				userAgent:
					'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
				deviceScaleFactor: 3,
				isMobile: true,
				hasTouch: true,
			},
		},
		{
			name: 'Desktop',
			use: { viewport: { width: 1440, height: 900 } },
		},
	],
	webServer: {
		command: 'npm run dev',
		url: 'http://localhost:3000',
		reuseExistingServer: !process.env.CI,
		timeout: 120_000,
	},
})
