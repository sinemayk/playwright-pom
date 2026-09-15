import { test, expect } from "../../fixtures/pageFixtures";

test("POM Usage", async ({ sauceLoginPage, page }) => {
  await sauceLoginPage.gotoLoginPage();
  await sauceLoginPage.login();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
