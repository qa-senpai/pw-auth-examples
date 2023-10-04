import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

// test.use({ storageState: ".auth/user.json" });

test("auth to github - check that you logged", async ({ page, context }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateTo();

  await expect(page.locator(".AppHeader-user")).toBeVisible();
});

// показати використання кукі з тесту test.use({ storageState: ".auth/user.json" });

// показати використання кукі з playwright.config.ts

// show case with logout
