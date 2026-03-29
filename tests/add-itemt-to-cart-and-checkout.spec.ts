import { test, expect } from '@playwright/test';

test('User can successfully add items to cart and check out', async ({ page }) => {
  const limitedFunctionalities = page.locator('.modal-body');
  const iphonex = page.getByText('iphone X');
  const purchaseSuccess = page.getByText('Success! Thank you! Your order will be delivered in next few weeks :-).');
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.getByLabel(/Username/).fill('rahulshettyacademy');
  await page.getByLabel(/Password/).fill('Learning@830$3mK2');
  await page.getByRole('radio', { name: 'User' }).check();
  await expect(limitedFunctionalities).toBeVisible();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.locator('select.form-control').selectOption('consult');
  await page.getByRole('checkbox', { name: 'I Agree to the terms and conditions' }).check();
  await page.locator('#signInBtn').click();
  await expect(page).toHaveTitle('ProtoCommerce');

  await expect(iphonex).toBeVisible();
  await page.getByRole('button', { name: 'Add' }).first().click();
  await page.getByText('Checkout ( 1 )').click();
  await page.getByText('₹. 100000');
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByText('Please choose your delivery location.');
  await page.locator('#country').fill('Oxford, United Kingdom');
  await page.getByText(/term & Conditions/i).click();
  await page.getByText('Close').click();
  await page.getByRole('button', {name: 'Purchase'}).click();
  await expect(purchaseSuccess).toBeVisible();
});
