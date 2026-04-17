import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import loginData from '../data/loginData.json';

test.describe('Login validation - Locked out user', () => {
    test('Display error for locked out account', async ({ page }) => {
        const userName = loginData[1].username;
        const password = loginData[1].password;
        await LoginPage.Login(userName, password, page);

        await expect(page).toHaveURL('https://www.saucedemo.com/');
        await expect(page.locator('h3[data-test="error"]')).toHaveText(
            'Epic sadface: Sorry, this user has been locked out.'
        );
    });
});
