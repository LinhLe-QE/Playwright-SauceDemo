import { test, expect, type Page } from '@playwright/test';
import { informationPageSelectors } from '../locators/informationPage';


export class InformationPage {

    static async inputFirstName(page: Page, firstName: string) {
        await page.fill(informationPageSelectors.firstNameInput, firstName);
    }

    static async inputLastName(page: Page, lastName: string) {
        await page.fill(informationPageSelectors.lastNameInput, lastName);
    }

    static async inputPostalCode(page: Page, postalCode: string) {
        await page.fill(informationPageSelectors.postalCodeInput, postalCode);
    }

    static async verifyErrorMessage(page: Page, text: string) {
        await expect(page.locator(informationPageSelectors.errorMessageText)).toHaveText(text);
    }

    static async clickContinueButton(page: Page) {
        await page.click(informationPageSelectors.continueButton);
    }
}