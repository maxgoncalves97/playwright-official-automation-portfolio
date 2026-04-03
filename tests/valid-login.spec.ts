import { test } from '@playwright/test';
import { LoginPagePractise } from '../pages/LoginPage';

test('Practise using POM - Open login page', async ({ page }) => {
  const loginPage = new LoginPagePractise(page);

  await loginPage.gotoLogin();
  await loginPage.login('rahulshettyacademy', 'Learning@830$3mK2', 'consult');
  await loginPage.verifyLoginSuccess();
});