import { Locator, Page } from "@playwright/test";

//Pw nin page nesnesini bir POM sınıfına bağlamak.

export class SauceLoginPage {
  //Bu sınıfın içinde bir page alanı olduğunu bildiriyoruz.
  //Sadece tipi Page olacak diyoruz.
  private readonly page: Page;
  private readonly userNameTextBox: Locator;
  private readonly passwordTextBox: Locator;
  private readonly loginButton: Locator;
  readonly errorMsg: Locator;

  //Bu sınıf oluşturulurken bir page parametresi bekliyoruz.
  constructor(page: Page) {
    //Gelen page nesnesini sınıfın içinde saklıyoruz.
    //Böylece sınıf içindeki diğer metotlar this.page üzerinden aynı sayfaya erişebilir.
    this.page = page;

    this.userNameTextBox = page.getByPlaceholder("Username");
    this.passwordTextBox = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.errorMsg = page.locator("h3");
  }

  async gotoLoginPage() {
    await this.page.goto(process.env.SAUCE_DEMO_URL || "https://saucedemo.com");
  }

  async login(
    //test dosyasinda baska deger verirsen ama onu kullanir
    username: string = process.env.SAUCE_DEMO_USERNAME!,
    password: string = process.env.SAUCE_DEMO_PASSWORD!,
  ) {
    await this.userNameTextBox.fill(username);
    await this.passwordTextBox.fill(password);
    await this.loginButton.click();
  }
}
