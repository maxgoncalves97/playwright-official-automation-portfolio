import { expect, Locator, Page } from "@playwright/test";

export class CheckoutCart {
    page: Page;
    iphoneCard: Locator;
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
        this.iphoneCard = page.locator('app-card').filter({
            has: page.getByText('iphone X', { exact: true })
        });
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

    async checkout(total: string, location: string) {
        await this.checkoutPage.click();
        await expect(this.checkoutTotal).toHaveText(total);
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
}