import { Locator, Page } from "@playwright/test";
export class LoginPagePractise {
    page: Page;
    username: Locator;
    password: Locator;
    userCheckbox: Locator;
    adminCheckbox: Locator;
    limitedFunctionalitiesOkay: Locator;
    dropdownRole: Locator;
    termsConditions: Locator;
    loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByLabel(/Username/);
        this.password = page.getByLabel(/Password:/);
        this.userCheckbox = page.getByRole('radio', { name: 'User' });
        this.adminCheckbox = page.getByRole('radio', { name: 'Admin' });
        this.limitedFunctionalitiesOkay = page.getByRole('button', { name: 'Okay' });
        this.dropdownRole = page.locator('select.form-control');
        this.termsConditions = page.getByRole('checkbox', { name: 'I Agree to the terms and conditions' });
        this.loginButton = page.locator('#signInBtn');
    }

    async gotoLogin() {
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    }

    async loginUser(user: string, pass: string, dropdown: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.userCheckbox.check();
        await this.limitedFunctionalitiesOkay.click();
        await this.dropdownRole.selectOption(dropdown);
        await this.termsConditions.check();
        await this.loginButton.click();
    }

    async loginAdmin(user: string, pass: string, dropdown: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.adminCheckbox.check();
        await this.dropdownRole.selectOption(dropdown);
        await this.termsConditions.check();
        await this.loginButton.click();
    }

    async verifyLoginSuccess() {
        await this.page.waitForURL('https://rahulshettyacademy.com/angularpractice/shop');
    }
}