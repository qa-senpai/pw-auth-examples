import { expect, test } from "@playwright/test";
import { getAuthData } from "../utils";
import { LoginPage } from "../pages/LoginPage";

// базовий спосіб - в кожному тесті ми переходимо і логінемось
test("auth to github - basic", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com/login");

  const authData = getAuthData();
  await page.getByPlaceholder(`Email`).fill(authData.email);
  await page.getByPlaceholder(`Password`).fill(authData.password);
  await page.click("//button");

  await expect(
    page.locator(`[data-qa-id="site-nav"] [href = '/@coach/']`)
  ).toBeVisible();
});

// базовий метод, але з інкапсуляцією в ПОМ
test("auth to github - pom method", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateTo();
  await loginPage.login();
});
