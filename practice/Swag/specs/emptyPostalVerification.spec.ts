import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import loginData from '../data/loginData.json';
import { MainPage } from '../pages/mainPage';
import { SwagItems } from '../data/itemsSelection';
import { InformationPage } from '../pages/informationPage';
import { Helpers } from '../pages/helpers';

test.describe('Add to cart - Single Flow', () => {

    test('Complete Add to Cart Flow', async ({ page }) => {
        // Step 1: Login
        const userName = loginData[0].username;
        const password = loginData[0].password;
        await LoginPage.Login(userName, password, page);

        // Step 2: Verify Main Page
        await Helpers.verifyThePresenceOfThePage(page, 'https://www.saucedemo.com/inventory.html');
        await MainPage.verifyThePresenceOfTheHeader(page);

        // Step 3: Add items to cart
        await MainPage.itemsSelection(page, [SwagItems.Backpack, SwagItems.BikeLight, SwagItems.BoltTShirt]);

        // Step 4: Remove items from cart
        await MainPage.itemsRemove(page, [SwagItems.Backpack]);

        //Step 5: Verify the number of items in the cart
        await MainPage.verifyTheNumberOfAddedItems(page, 2);

        //Step 6: Verify the checkout process successfully
        await MainPage.checkOutSuccessfully(page);

        //Step 7: Fill information successfully
        await InformationPage.inputFirstName(page, 'Linh');
        await InformationPage.inputLastName(page, 'Le');
        await InformationPage.inputPostalCode(page, '');
        await InformationPage.clickContinueButton(page);

        //Step 8: Verify error message when filling information with empty fields
        await InformationPage.verifyErrorMessage(page, 'Error: Postal Code is required');

    });
});
