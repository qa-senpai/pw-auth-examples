import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateTo();
  await loginPage.login();
});

test("auth to github - check that you logged", async ({ page }) => {
  await expect(
    page.locator(`[data-qa-id="site-nav"] [href = '/@coach/']`)
  ).toBeVisible();
});
