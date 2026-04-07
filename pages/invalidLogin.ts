import { expect, Locator, Page } from '@playwright/test';

export class InvalidLogin {
    page: Page;
    wrongLoginCreds: Locator;
    emptyLoginCreds: Locator;


    constructor(page: Page) {
        this.page = page;
        this.wrongLoginCreds = page.getByText('Incorrect username/password.');
        this.emptyLoginCreds = page.getByText('Empty username/password.');
    }

    async wrongLoginMessage() {
        await expect(this.wrongLoginCreds).toBeVisible();
        await expect(this.wrongLoginCreds).toHaveText('Incorrect username/password.');
    }

        async emptyLoginMessage() {
        await expect(this.emptyLoginCreds).toBeVisible();
        await expect(this.emptyLoginCreds).toHaveText('Empty username/password.');
    }
}
