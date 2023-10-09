import { expect, test } from '@playwright/test'
import { getAuthData } from '../utils';
import { LoginPage } from '../pages/LoginPage';

test('auth via ui - basic scenario', async ({page})=> {

    const authData = getAuthData();

    await page.goto('/login');

    await page.getByPlaceholder('Email').fill(authData.email);
    await page.getByPlaceholder('Password').fill(authData.password);
    await page.click('//button');
    await expect(page.locator(`[href='/@qasenpai/']`)).toBeVisible();
})

// базова авторизація але з інкапсуляцією в ПОМ
test('auth via ui - pom scenario', async ({page})=> {

    const loginPage = new LoginPage(page);

    await loginPage.navigateTo()
    await loginPage.login();
    await expect(page.locator(`[href='/@qasenpai/']`)).toBeVisible();
})