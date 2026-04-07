import { Page, test, expect } from "@playwright/test";
import { CheckoutCart } from "../pages/addToCart";

test('add one item to cart and checkout', async ({ page }) => {
    const checkoutCart = new CheckoutCart(page);
    const iphoneCard = page.locator('app-card').filter({
        has: page.getByText('iphone X', { exact: true })
    });
    await checkoutCart.gotoShop();
    await iphoneCard.getByRole('button', { name: 'Add' }).click();
    await checkoutCart.checkout('₹. 100000', 'Oxford, United Kingdom');
    await checkoutCart.checkoutSuccess();
})