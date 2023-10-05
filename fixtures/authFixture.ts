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
    await loginPage.login();

    await use(page);
  },
});

export { expect } from "@playwright/test";
