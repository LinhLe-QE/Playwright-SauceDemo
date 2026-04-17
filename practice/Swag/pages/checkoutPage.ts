import { expect, type Page } from '@playwright/test';
import { checkoutPageSelectors } from '../locators/checkoutPage';

export class CheckoutPage {
    static async verifyQuantityOfItems(page: Page, quantity: number) {
        await expect(page.locator(checkoutPageSelectors.itemLocator)).toHaveCount(quantity);
    }

    static async clickFinishButton(page: Page) {
        await page.click(checkoutPageSelectors.finishButton);
    }
}