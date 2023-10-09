import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import fs from "fs";

// Declare the types of your fixtures.
type MyFixtures = {
  userToLogin: string;
};

export const test = base.extend<MyFixtures>({
  userToLogin: undefined,

  page: async ({ page, userToLogin }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo();
    await loginPage.login(userToLogin);

    await use(page);
  },
});

export { expect } from "@playwright/test";