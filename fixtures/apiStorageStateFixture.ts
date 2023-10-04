import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import fs from "fs";
import { getAuthData } from "../utils";

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

  storageState: async ({ request, userToLogin }, use) => {
    if (userToLogin) {
      const fileName = `./.auth/${userToLogin}.json` as string;

      if (!fs.existsSync(fileName)) {
        const authData = getAuthData();

        await request.post("https://github.com/login", {
          form: {
            user: authData.email,
            password: authData.password,
          },
        });

        await request.storageState({
          path: fileName,
        });
      }

      await use(fileName);
    } else {
      await use(undefined);
    }
  },
});

export { expect } from "@playwright/test";
