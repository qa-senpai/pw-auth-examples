import { expect } from "@playwright/test";
import { test as setup } from "../fixtures/authFixture";

const authFile = "./.auth/user.json";

setup("auth to github - check that you logged", async ({ page, context }) => {
  await expect(
    page.locator(`[data-qa-id="site-nav"] [href = '/@coach/']`)
  ).toBeVisible();

  await context.storageState({ path: authFile });
});

// показати можливість використовувати з конфігу як сетап до інших тестів
