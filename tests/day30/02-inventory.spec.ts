import { test, expect } from "@playwright/test";
import { SauceLoginPage } from "../../pages/SauceLoginPage";
import { SauceInventoryPage } from "../../pages/SauceInventoryPage";

test("inventory item test", async ({ page }) => {

const loginPage = new SauceLoginPage(page);
const inventoryPage = new SauceInventoryPage(page);

await loginPage.gotoLoginPage();
await loginPage.login();

//1nci yol
await expect(inventoryPage.inventoryItems).toHaveCount(6);

//2nci yol, classda bunun fonks nunu da yazip burda kullanabiliriz
expect(await inventoryPage.getInventoryItemsCount()).toBe(6);

});
