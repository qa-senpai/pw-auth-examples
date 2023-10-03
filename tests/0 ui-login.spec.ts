import { expect, test } from "@playwright/test";
import { getAuthData } from "../utils";
import { LoginPage } from "../pages/LoginPage";

const authData = getAuthData();

// базовий спосіб - в кожному тесті ми переходимо і логінемось
test("auth to github - basic", async ({ page }) => {
  await page.goto("https://github.com/login");

  // Method 1: Username and Password
  await page.fill("#login_field", authData.email);
  await page.fill("#password", authData.password);
  await page.click('[value="Sign in"]');

  await expect(page.locator(".AppHeader-user")).toBeVisible();
});

// базовий метод, але з інкапсуляцією в ПОМ
test("auth to github - pom method", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateTo();
  await loginPage.login();
});
