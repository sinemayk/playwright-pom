import { Locator, Page } from "playwright";

export class OpenSourcePage {
  private readonly page: Page;
  private readonly userNameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  readonly dashboard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.dashboard = page.getByRole("heading", { name: "Dashboard" });
  }

  async goto() {
    await this.page.goto(process.env.OPENSOURCE_URL ??
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  }

  async login(user: string = process.env.OPENSOURCE_USERNAME!, pass: string = process.env.OPENSOURCE_PASSWORD!) {
    await this.userNameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}
