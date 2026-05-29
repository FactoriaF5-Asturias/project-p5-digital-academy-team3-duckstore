// @ts-check
import { test, expect } from '@playwright/test'

test('explore collection hapiness works', async ({ page }) => {
  await page.goto('https://factoriaf5-asturias.github.io/project-p5-digital-academy-team3-duckstore/index.html')

await page.getByRole('link', { name: /Explore Collection/i }).click()
await expect(page).toHaveURL(/catalog\.html/)
})
