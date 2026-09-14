import { test, expect } from "@playwright/test";
import { SauceLoginPage } from "../../pages/SauceLoginPage";

//bunu buraya tasidik ki herkes ulassin
//onceden beforeEach in icindeydi
let loginPage: SauceLoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new SauceLoginPage(page);
  await loginPage.gotoLoginPage();
});

test("POM Usage", async ({ page }) => {
  await loginPage.login();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("Invalid login", async ({ page }) => {
  await loginPage.login("invalid_user", "invalid_password");
  await expect(loginPage.errorMsg).toBeVisible();
});
