import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import loginData from '../data/loginData.json';
import { MainPage } from '../pages/mainPage';
import { SwagItems } from '../data/itemsSelection';
import { InformationPage } from '../pages/informationPage';
import { Helpers } from '../pages/helpers';
import { CheckoutPage } from '../pages/checkoutPage';

test.describe('Checkout flow - All items', () => {
    test('Complete checkout with all listed swag items', async ({ page }) => {
        const userName = loginData[0].username;
        const password = loginData[0].password;
        await LoginPage.Login(userName, password, page);

        await Helpers.verifyThePresenceOfThePage(page, 'https://www.saucedemo.com/inventory.html');
        await MainPage.verifyThePresenceOfTheHeader(page);

        const allItems = [
            SwagItems.Backpack,
            SwagItems.BikeLight,
            SwagItems.BoltTShirt,
            SwagItems.FleeceJacket,
            SwagItems.Onesie,
        ];

        await MainPage.itemsSelection(page, allItems);
        await MainPage.verifyTheNumberOfAddedItems(page, allItems.length);
        await MainPage.checkOutSuccessfully(page);

        await InformationPage.inputFirstName(page, 'Linh');
        await InformationPage.inputLastName(page, 'Le');
        await InformationPage.inputPostalCode(page, '700000');
        await InformationPage.clickContinueButton(page);

        await Helpers.verifyThePresenceOfThePage(page, 'https://www.saucedemo.com/checkout-step-two.html');
        await CheckoutPage.verifyQuantityOfItems(page, allItems.length);
        await CheckoutPage.clickFinishButton(page);

        await Helpers.verifyThePresenceOfThePage(page, 'https://www.saucedemo.com/checkout-complete.html');
        await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
    });
});
