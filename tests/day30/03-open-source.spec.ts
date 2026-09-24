import { test, expect } from "@playwright/test";
import { OpenSourcePage } from "../../pages/OpenSourcePage";

test("login test", async ({ page }) => {
  const loginPage = new OpenSourcePage(page);

  await loginPage.goto();
  await loginPage.login();
  await page.waitForURL(/dashboard/, { timeout: 15000 });
  await expect(loginPage.dashboard).toBeVisible({ timeout: 10000 });
});
