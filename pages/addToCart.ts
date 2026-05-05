import { expect, Locator, Page } from "@playwright/test";

export class CheckoutCart {
    page: Page;
    checkoutPage: Locator;
    iphoneInStock: Locator;
    checkoutTotal: Locator;
    checkoutButton: Locator;
    deliveryLocation: Locator;
    checkoutTCLabel: Locator;
    checkoutTC: Locator;
    tcCloseButton: Locator;
    purchaseButton: Locator;
    successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutPage = page.locator('a.nav-link.btn.btn-primary', { hasText: 'Checkout' });
        this.iphoneInStock = page.getByText('In Stock');
        this.checkoutTotal = page.locator('tr').filter({ hasText: 'Total ₹.' }).locator('strong');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
        this.deliveryLocation = page.locator('#country');
        this.checkoutTCLabel = page.locator('label[for="checkbox2"]');
        this.checkoutTC = page.locator('#checkbox2');
        this.tcCloseButton = page.getByText('Close');
        this.purchaseButton = page.getByRole('button', { name: 'Purchase' });
        this.successMessage = page.getByText('Success! Thank you! Your order will be delivered in next few weeks :-).');
    }

    async gotoShop() {
        await this.page.goto('https://rahulshettyacademy.com/angularpractice/shop');
    }

    async addProductToCart(productName: string) {
        const productCard = this.page.locator('app-card').filter({
            has: this.page.getByText(productName, { exact: true }),
        });

        await productCard.getByRole('button', { name: 'Add' }).click();
    }

    async gotoCheckout() {
        await this.checkoutPage.click();
    }

    async totalPrice(total: string) {
        await expect(this.checkoutTotal).toHaveText(total);
    }

    async checkout(location: string) {
        await this.checkoutButton.click();
        await this.deliveryLocation.fill(location);
        await this.checkoutTCLabel.click();
        await expect(this.checkoutTC).toBeChecked();
        await this.tcCloseButton.click();
        await this.purchaseButton.click();
    }

    async checkoutSuccess() {
        await expect(this.successMessage).toBeVisible();
    }

    async removeProduct(productName: string) {
        await this.page
            .locator('tr')
            .filter({ hasText: productName })
            .getByRole('button', { name: 'Remove' })
            .click();
    }
}