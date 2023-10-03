import { expect } from "@playwright/test";
import { test } from "../authFixture";

test("auth to github - check that you logged", async ({ page, context }) => {
  await expect(page.locator(".AppHeader-user")).toBeVisible();
  await context.storageState({ path: "./.auth/user.json" });
});
