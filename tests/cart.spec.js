import { test, expect } from '@playwright/test'

test('Proceeed to Checkout link', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/pages/cart.html')

await expect(page.getByRole('link',{name:'Proceed to Checkout'})).toBeVisible()

})