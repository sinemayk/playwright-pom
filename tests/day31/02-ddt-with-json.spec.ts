import { test, expect } from "@playwright/test";
import { getExcelData } from "../../utils/excelHelper";
import { SauceLoginPage } from "../../pages/SauceLoginPage";

const testData = getExcelData("test-data/loginTestData.xlsx");

testData.forEach((data) => {
  test(`login user ${data.username}`, async ({ page }) => {
    const loginPage = new SauceLoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login(data.username, data.password);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });
}
