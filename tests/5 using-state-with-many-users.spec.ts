import { expect, test } from "../fixtures/storageStateFixture";

test.use({ userToLogin: "test" });

test("auth to github - check that you logged", async ({ page }) => {
  await expect(
    page.locator(`[data-qa-id="site-nav"] [href = '/@coach/']`)
  ).toBeVisible();
});

// показати використання кукі з тесту test.use({ storageState: ".auth/user.json" });

// показати використання кукі з playwright.config.ts

// show case with logout
