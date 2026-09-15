import { test, expect } from '@playwright/test';
import { SauceLoginPage } from '../../pages/SauceLoginPage';
import { FakerHelper } from '../../utils/testDataHelper';

test('POM Usage', async ({ page }) => {
    const sauceLoginPage = new SauceLoginPage(page);
    const invalidUser = FakerHelper.createInvalidUser();

    await sauceLoginPage.gotoLoginPage();
    await sauceLoginPage.login(invalidUser.username, invalidUser.password);
    await expect(sauceLoginPage.errorMsg).toBeVisible();
    
});
