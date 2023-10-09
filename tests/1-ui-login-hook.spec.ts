import { expect, test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';


test.beforeEach(async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo()
    await loginPage.login();
})

test('auth via ui - pom scenario', async ({page})=> {
    await expect(page.locator(`[href='/@qasenpai/']`)).toBeVisible();
})