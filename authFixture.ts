import { test as base } from "@playwright/test";
import { getAuthData } from "./utils";
import { LoginPage } from "./pages/LoginPage";

// Declare the types of your fixtures.
type MyFixtures = {
  userToLogin: string;
};

export const test = base.extend<MyFixtures>({
  userToLogin: undefined,

  page: async ({ page, userToLogin }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo();
    await loginPage.login();

    await use(page);

    //#endregion
  },

  //   storageState: async ({ browser, userToLogin }, use) => {},
});

export { expect } from "@playwright/test";
