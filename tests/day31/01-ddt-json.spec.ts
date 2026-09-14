import { test, expect } from "@playwright/test";
import credentials from "../../test-data/login-test-data.json";
import { SauceLoginPage } from "../../pages/SauceLoginPage";

for (const user of credentials) {
  test(`login user ${user.username}`, async ({ page }) => {
    const loginPage = new SauceLoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login(user.username, user.password);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });
}
