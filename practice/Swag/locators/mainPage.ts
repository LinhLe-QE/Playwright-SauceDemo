export const mainPageSelectors = {
    header: 'div[class="header_label"]',
    selectionSession: {
        itemSelection: (item: string) => `[data-test="add-to-cart-sauce-labs-${item}"]`,
        itemRemoveButton: (item: string) => `[data-test="remove-sauce-labs-${item}"]`,
        numberOfItemsInCart: 'span[class="shopping_cart_badge"]',
        cartContainer: 'div[id="shopping_cart_container"]',
        checkoutButton: 'button[data-test="checkout"]',
    }
};