import { Locator, Page, expect } from "@playwright/test";

export class RegisterPage {
  private readonly page: Page;
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly email: Locator;
  private readonly tel: Locator;
  private readonly password: Locator;
  private readonly confirmPassword: Locator;
  private readonly privacyPolicy: Locator;
  private readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByRole("textbox", { name: "First Name*" });
    this.lastName = page.getByRole("textbox", { name: "Last Name*" });
    this.email = page.getByRole("textbox", { name: "E-Mail*" });
    this.tel = page.getByRole("textbox", { name: "Telephone*" });
    this.password = page.getByRole("textbox", { name: "Password*" });
    this.confirmPassword = page.getByRole("textbox", {
      name: "Password Confirm*",
    });
    this.privacyPolicy = page.locator("label[for='input-agree']");
    this.registerButton = page.getByRole("button", { name: "Continue" });
  }
  async goto() {
    await this.page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register",
    );
  }

  async fillForm(user: {
    firstName: string;
    lastName: string;
    email: string;
    tel: string;
    passValue: string;
  }) {
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.email.fill(user.email);
    await this.tel.fill(user.tel);
    await this.password.fill(user.passValue);
    await this.confirmPassword.fill(user.passValue);
  }

  async acceptPrivacyPolicy() {
    await this.privacyPolicy.check();
  }
  async clickContinueButton() {
    await this.registerButton.click();
  }
  async checkAccount() {
    return this.page.getByRole("heading", { name: " Your Account Has Been" });
  }

  async assertRegistrationSuccess() {
    await expect(
      this.page.getByRole("heading", { name: " Your Account Has Been" }),
    ).toBeVisible();
  }
}
