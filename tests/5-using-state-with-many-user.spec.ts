import {test, expect } from '../fixtures/storageStateFixture';
import { LoginPage } from '../pages/LoginPage';

test.use({userToLogin: 'test'})

test('use storage state', async ({page})=> {
    const loginPage = new LoginPage(page);
    await loginPage?.navigateTo()
    await expect(page.locator(`[href='/@qasenpai/']`)).toBeVisible();
})