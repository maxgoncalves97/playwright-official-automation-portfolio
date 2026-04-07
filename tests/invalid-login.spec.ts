import { test, expect } from '@playwright/test';
import { LoginPagePractise } from '../pages/ValidLogin';
import { InvalidLogin } from '../pages/invalidLogin';

test('User enters invalid username and gets appropriate error message', async ({ page }) => {
    const invalidLoginAttempt = new LoginPagePractise(page);
    const wrongUsernameMessage = new InvalidLogin(page);

    await invalidLoginAttempt.gotoLogin();
    await invalidLoginAttempt.loginUser('invalidUsername', 'Learning@830$3mK2', 'consult');
    await wrongUsernameMessage.wrongLoginMessage();
})

test('User enters invalid password and gets appropriate error message', async ({ page }) => {
    const invalidLoginAttempt = new LoginPagePractise(page);
    const wrongUsernameMessage = new InvalidLogin(page);

    await invalidLoginAttempt.gotoLogin();
    await invalidLoginAttempt.loginUser('rahulshettyacademy', 'invalidPassword', 'consult');
    await wrongUsernameMessage.wrongLoginMessage();
})

test('User leaves the username field empty and gets appropriate error message', async ({ page }) => {
    const invalidLoginAttempt = new LoginPagePractise(page);
    const wrongUsernameMessage = new InvalidLogin(page);

    await invalidLoginAttempt.gotoLogin();
    await invalidLoginAttempt.loginUser('', 'invalidPassword', 'consult');
    await wrongUsernameMessage.emptyLoginMessage();
})

test('User leaves the password field empty and gets appropriate error message', async ({ page }) => {
    const invalidLoginAttempt = new LoginPagePractise(page);
    const wrongUsernameMessage = new InvalidLogin(page);

    await invalidLoginAttempt.gotoLogin();
    await invalidLoginAttempt.loginUser('rahulshettyacademy', '', 'consult');
    await wrongUsernameMessage.emptyLoginMessage();
})

test('User leaves the username and password fields empty and gets appropriate error message', async ({ page }) => {
    const invalidLoginAttempt = new LoginPagePractise(page);
    const wrongUsernameMessage = new InvalidLogin(page);

    await invalidLoginAttempt.gotoLogin();
    await invalidLoginAttempt.loginUser('', '', 'consult');
    await wrongUsernameMessage.emptyLoginMessage();
})