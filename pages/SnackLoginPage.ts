import { Locator, Page } from "@playwright/test";

export class SnackLoginPage {
  private readonly page: Page;
  private readonly account: Locator;
  private readonly userName: Locator;
  private readonly password: Locator;
  private readonly loginButton: Locator;
  readonly welcomeMsg: Locator;

  constructor(page: Page) {
    this.page = page;

    this.account = page.getByRole('img').nth(2);
    this.userName = page.getByRole("textbox", { name: "Email" });
    this.password = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.welcomeMsg = page.getByRole("heading", {
      name: /Wellcome to Customer Panel|Welcome to Customer Panel/i,
    });
  }

  async goto() {
    await this.page.goto(process.env.SNACK_URL || 'https://snackattack.deployedprojects.xyz/');
  }

  async login(
    userName: string = process.env.SNACK_USERNAME!,
    password: string = process.env.SNACK_PASSWORD!,
  ) {
    await this.account.click();

    await this.userName.fill(userName);

    await this.password.fill(password);
    await this.loginButton.click();
  }

  async getWelcomeMsg(){
    return this.welcomeMsg;
  }
}
