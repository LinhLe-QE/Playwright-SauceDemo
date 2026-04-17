import { expect, type Page } from '@playwright/test';

export class Helpers {
    static async verifyThePresenceOfThePage(page: Page, url: string) {
        await expect(page).toHaveURL(url);
    }
}