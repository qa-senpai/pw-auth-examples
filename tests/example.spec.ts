import { test, expect } from "@playwright/test";
import { getAuthData } from "../utils/utils";

const authData = getAuthData();

test("auth to github", async ({ page }) => {
  await page.goto("https://github.com/login");

  // Method 1: Username and Password
  await page.fill("#login_field", authData.email);
  await page.fill("#password", authData.password);
  await page.click('[value="Sign in"]');

  await page.pause();
});
