import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import loginData from '../data/loginData.json';
import { MainPage } from '../pages/mainPage';
import { SwagItems } from '../data/itemsSelection';
import { InformationPage } from '../pages/informationPage';
import { Helpers } from '../pages/helpers';

test.describe('Checkout validation - Empty last name', () => {
    test('Show an error when last name is empty', async ({ page }) => {
        const userName = loginData[0].username;
        const password = loginData[0].password;
        await LoginPage.Login(userName, password, page);

        await Helpers.verifyThePresenceOfThePage(page, 'https://www.saucedemo.com/inventory.html');
        await MainPage.verifyThePresenceOfTheHeader(page);

        await MainPage.itemsSelection(page, [SwagItems.BikeLight, SwagItems.BoltTShirt]);
        await MainPage.verifyTheNumberOfAddedItems(page, 2);
        await MainPage.checkOutSuccessfully(page);

        await InformationPage.inputFirstName(page, 'Linh');
        await InformationPage.inputLastName(page, '');
        await InformationPage.inputPostalCode(page, '700000');
        await InformationPage.clickContinueButton(page);

        await InformationPage.verifyErrorMessage(page, 'Error: Last Name is required');
    });
});
