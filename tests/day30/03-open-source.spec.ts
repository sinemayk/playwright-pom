import { test, expect } from '@playwright/test';
import { OpenSourcePage } from '../../pages/OpenSourcePage';

test('login test', async ({ page }) => {

    const loginPage = new OpenSourcePage(page);

    await loginPage.goto();
    await loginPage.login();
    await expect(loginPage.dashboard).toBeVisible();

    
});
