import { test } from '@playwright/test';
import { LoginPagePractise } from '../pages/ValidLogin';

test('Go to login page and login as a normal user', async ({ page }) => {
  const loginPage = new LoginPagePractise(page);

  await loginPage.gotoLogin();
  await loginPage.loginUser(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!, 'consult');
  await loginPage.verifyLoginSuccess();
});

test('Go to login page and login as an admin user', async ({ page }) => {
  const loginPage = new LoginPagePractise(page);

  await loginPage.gotoLogin();
  await loginPage.loginAdmin(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!, 'consult');
  await loginPage.verifyLoginSuccess();
});

test('Go to login page and login as a normal user who is a Consultant', async ({ page }) => {
  const loginPage = new LoginPagePractise(page);

  await loginPage.gotoLogin();
  await loginPage.loginUser(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!, 'consult');
  await loginPage.verifyLoginSuccess();
});

test('Go to login page and login as a normal user who is a Student', async ({ page }) => {
  const loginPage = new LoginPagePractise(page);

  await loginPage.gotoLogin();
  await loginPage.loginUser(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!, 'stud');
  await loginPage.verifyLoginSuccess();
});

test('Go to login page and login as a normal user who is a Teacher', async ({ page }) => {
  const loginPage = new LoginPagePractise(page);

  await loginPage.gotoLogin();
  await loginPage.loginUser(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!, 'teach');
  await loginPage.verifyLoginSuccess();
});