import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

// Declare the types of your fixtures.
type MyFixtures = {
  loginPage?: LoginPage;
};

export const test = base.extend<MyFixtures>({
    loginPage:  ({ page }, use) => {
        const loginPage = new LoginPage(page);
         use(loginPage);
      }
});

export { expect } from "@playwright/test";