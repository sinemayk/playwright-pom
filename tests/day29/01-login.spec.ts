import { test, expect } from "@playwright/test";
import { SauceLoginPage } from "../../pages/SauceLoginPage";

test("POM Usage", async ({ page }) => {
  const sauceLoginPage: SauceLoginPage = new SauceLoginPage(page);
  await sauceLoginPage.gotoLoginPage();
  await sauceLoginPage.login();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
