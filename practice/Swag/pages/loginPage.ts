import { test, expect, Page } from '@playwright/test';
import { loginSelectors } from '../locators/loginPage';

export class LoginPage {
    static async Login(username: string, password: string, page: Page) {
        await page.goto('/');
        await page.fill(loginSelectors.usernameInput, username);
        await page.fill(loginSelectors.passwordInput, password);
        await page.click(loginSelectors.loginButton);
    }
}