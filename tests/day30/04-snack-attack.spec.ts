import { test, expect } from "@playwright/test";
import { SnackLoginPage } from "../../pages/SnackLoginPage";

test("login test", async ({ page }) => {
  const loginPage = new SnackLoginPage(page);

  await loginPage.goto();
  await loginPage.login();

  await expect(await loginPage.getWelcomeMsg()).toBeVisible({ timeout: 10000 });
});
