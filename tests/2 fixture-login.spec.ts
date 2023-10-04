import { expect } from "@playwright/test";
import { test } from "../fixtures/authFixture";

test("auth to github - check that you logged", async ({ page }) => {
  await expect(page.locator(".AppHeader-user")).toBeVisible();
});
