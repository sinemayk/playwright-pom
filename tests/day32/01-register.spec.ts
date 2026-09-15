import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../pages/RegisterPage";
import { FakerHelper } from "../../utils/testDataHelper";

test("Register test", async ({ page }) => {
  const register = new RegisterPage(page);
  await register.goto();
  const user = FakerHelper.createUser();

  await register.fillForm(user);
  await register.acceptPrivacyPolicy();
  await register.clickContinueButton();

  await register.assertRegistrationSuccess();
});
