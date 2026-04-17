import { test, expect, type Page } from '@playwright/test';
import { mainPageSelectors } from '../locators/mainPage';
import { SwagItems } from '../data/itemsSelection';


export class MainPage {

    static async verifyThePresenceOfTheHeader(page: Page) {
        await expect(page.locator(mainPageSelectors.header)).toBeVisible();
    }

    static async itemsSelection(page: Page, items: SwagItems[]) {
        for (const itemName of items) {
            await page.click(mainPageSelectors.selectionSession.itemSelection(itemName));
        }
    }

    static async itemsRemove(page: Page, items: SwagItems[]) {
        for (const itemName of items) {
            await page.click(mainPageSelectors.selectionSession.itemRemoveButton(itemName));
        }
    }

    static async verifyTheNumberOfAddedItems(page: Page, numberOfItems: number) {
        await expect(page.locator(mainPageSelectors.selectionSession.numberOfItemsInCart)).toHaveText(numberOfItems.toString());
    }

    static async checkOutSuccessfully(page: Page) {
        await page.click(mainPageSelectors.selectionSession.cartContainer);
        await page.click(mainPageSelectors.selectionSession.checkoutButton);
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    }


}