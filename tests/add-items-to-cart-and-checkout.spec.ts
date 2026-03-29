import { test, expect } from '@playwright/test';

test('User can successfully add items to cart and check out', async ({ page }) => {
  const limitedFunctionalities = page.locator('.modal-body');
  const iphoneCard = page.locator('app-card').filter({
    has: page.getByText('iphone X', { exact: true })
  });
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

  //Find first item on the page (iPhone X) and add it to your cart
  await expect(iphoneCard).toHaveCount(1);
  await iphoneCard.getByRole('button', { name: 'Add' }).click();
  //Visit cart and verify the correct item has been added
  await page.getByText('Checkout ( 1 )').click();
  await expect(page.getByText('In Stock')).toBeVisible();
  await expect(page.locator('tr').filter({hasText: 'Total ₹.'})).toBeVisible();
  //Checkout
  await page.getByRole('button', { name: 'Checkout' }).click();
  await expect(page.getByText('Please choose your delivery location.')).toBeVisible();
  //Add delivery address
  await page.locator('#country').fill('Oxford, United Kingdom');
  //Check terms and conditions checkbox
  await page.getByText(/term & Conditions/i).click();
  await page.getByText('Close').click();
  //Confirm purchase
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(page.getByText('Success! Thank you! Your order will be delivered in next few weeks :-).')).toBeVisible();
});
