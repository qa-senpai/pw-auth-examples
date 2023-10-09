import {test, expect } from '../fixtures/pageFixture';

test.use({storageState: '.auth/user.json'})

test('auth via ui - fixture scenario', async ({page, loginPage})=> {
    await loginPage?.navigateTo()
    await expect(page.locator(`[href='/@qasenpai/']`)).toBeVisible();
})