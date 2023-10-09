import { test } from '@playwright/test';

const fileName = '.auth/user.json';

test('authenticate via API', async ({ request }) => {
  const request1 = await request.post('https://conduit-api.learnwebdriverio.com/api/users/login', {
    form: {"user": {"email":"qa-senpai@gmail.com","password":"12345"}}});
    
    await request.storageState({ path: fileName });
});