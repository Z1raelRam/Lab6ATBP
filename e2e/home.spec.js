const { test, expect } = require('@playwright/test');

test('homepage has correct title', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const title = page.locator('#title');
    await expect(title).toHaveText('Welcome to CI/CD Lab');
});