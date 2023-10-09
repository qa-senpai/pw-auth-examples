import {test, expect } from '../fixtures/authFixture';

test.use({userToLogin: 'qa-senpai@gmail.com'});

test('setup storage state', async ({page, context})=> {
    const cookieFilePath = './.auth/user.json';

    await expect(page.locator(`[href='/@senpai/']`)).toBeVisible();

    await context.storageState({path: cookieFilePath})
})