import { test, expect } from '@playwright/test'

test('Catalog has View Details links', async ({ page }) => {
    await page.goto('https://factoriaf5-asturias.github.io/project-p5-digital-academy-team3-duckstore/pages/catalog.html')

    await expect(page.getByRole('link', { name: 'View Details' })).toHaveCount(9)

})
