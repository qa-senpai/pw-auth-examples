import {test, expect } from '../fixtures/authFixture';

test.use({userToLogin: 'qa-senpai@gmail.com'});

test('auth via ui - fixture scenario', async ({page, browser })=> {

   const newPage =  await browser.newPage({storageState: undefined});
})