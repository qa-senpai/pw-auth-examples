import { test, expect } from "../fixtures/authFixture";

test("auth to github - check that you logged", async ({ page }) => {
  await expect(
    page.locator(`[data-qa-id="site-nav"] [href = '/@coach/']`)
  ).toBeVisible();
});
