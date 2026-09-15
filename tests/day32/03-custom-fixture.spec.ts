import { test, expect } from "../../fixtures/pageFixtures";
import { FakerHelper } from "../../utils/testDataHelper";

test("POM Usage", async ({ sauceLoginPage, page }) => {
  await sauceLoginPage.gotoLoginPage();
  await sauceLoginPage.login();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("Register test", async ({ registerPage }) => {
  await registerPage.goto();
  const user = FakerHelper.createUser();

  await registerPage.fillForm(user);
  await registerPage.acceptPrivacyPolicy();
  await registerPage.clickContinueButton();

  await registerPage.assertRegistrationSuccess();
});

test("login test", async ({ openSourcePage }) => {
  await openSourcePage.goto();
  await openSourcePage.login();
  await expect(openSourcePage.dashboard).toBeVisible();
});
