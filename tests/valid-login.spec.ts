import { test, expect } from '@playwright/test';

test('User can successfully login using valid credentials', async ({ page }) => {
  const limitedFunctionalities = page.locator('.modal-body');
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //Fill in correct username and password
  await page.getByLabel(/Username/).fill('rahulshettyacademy');
  await page.getByLabel(/Password/).fill('Learning@830$3mK2');
  //Mark user is not an admin user
  // await page.locator('.checkmark').last().click();
  await page.getByRole('radio', { name: 'User' }).check();
  //Pop-up appears saying some permissions are restricted to admin users, click okay
  await expect(limitedFunctionalities).toBeVisible();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.locator('select.form-control').selectOption('consult');
  await page.getByRole('checkbox', { name: 'I Agree to the terms and conditions' }).click();
  await page.locator('#signInBtn').click();
  await expect(page).toHaveTitle('ProtoCommerce');
});
