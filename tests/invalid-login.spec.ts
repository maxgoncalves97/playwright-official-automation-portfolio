import { test, expect } from '@playwright/test';

test('User enters invalid username and gets appropriate error message', async ({ page }) => {
    const limitedFunctionalities = page.locator('.modal-body');
    const wrongLoginCreds = page.getByText('Incorrect username/password.');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.getByLabel(/Username:/).fill('invalidemail@hotmail.com');
    await page.getByLabel(/Password/).fill('Learning@830$3mK2');
    //Mark user is not an admin user
    // await page.locator('.checkmark').last().click();
    await page.getByRole('radio', { name: 'User' }).check();
    //Pop-up appears saying some permissions are restricted to admin users, click okay
    await expect(limitedFunctionalities).toBeVisible();
    await page.getByRole('button', { name: 'Okay' }).click();
    await page.locator('select.form-control').selectOption('consult');
    await page.getByRole('checkbox', { name: 'I Agree to the terms and conditions' }).check();
    await page.locator('#signInBtn').click();
    await expect(wrongLoginCreds).toBeVisible();
    await expect(wrongLoginCreds).toHaveText('Incorrect username/password.');
})

test('User enters invalid password and gets appropriate error message', async ({ page }) => {
    const limitedFunctionalities = page.locator('.modal-body');
    const wrongLoginCreds = page.getByText('Incorrect username/password.');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.getByLabel(/Username/).fill('rahulshettyacademy');
    await page.getByLabel(/Password:/).fill('invalidpassword');
    //Mark user is not an admin user
    // await page.locator('.checkmark').last().click();
    await page.getByRole('radio', { name: 'User' }).check();
    //Pop-up appears saying some permissions are restricted to admin users, click okay
    await expect(limitedFunctionalities).toBeVisible();
    await page.getByRole('button', { name: 'Okay' }).click();
    await page.locator('select.form-control').selectOption('consult');
    await page.getByRole('checkbox', { name: 'I Agree to the terms and conditions' }).check();
    await page.locator('#signInBtn').click();
    await expect(wrongLoginCreds).toBeVisible();
    await expect(wrongLoginCreds).toHaveText('Incorrect username/password.');
})