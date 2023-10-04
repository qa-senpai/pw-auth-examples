import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import fs from "fs";

// Declare the types of your fixtures.
type MyFixtures = {
  userToLogin?: string;
};

export const test = base.extend<MyFixtures>({
  userToLogin: undefined,

  page: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo();

    await use(page);
  },

  storageState: async ({ browser, userToLogin }, use) => {
    if (userToLogin) {
      const fileName = `./.auth/${userToLogin}.json` as string;

      if (!fs.existsSync(fileName)) {
        const page = await browser.newPage({ storageState: undefined });
        const loginPage = new LoginPage(page);

        await loginPage.navigateTo();
        await loginPage.login();
        await page.waitForLoadState("networkidle");
        await page.context().storageState({
          path: fileName,
        });
        await page.close();
      }

      await use(fileName);
    } else {
      await use(undefined);
    }
  },
});

export { expect } from "@playwright/test";
