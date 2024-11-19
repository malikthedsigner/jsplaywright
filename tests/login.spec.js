const { test, expect } = require("@playwright/test")
const LoginPage = require("../pages/loginpage")


test.describe("login test suite", () => {

    let loginPage;

    test.beforeEach("Load page", async ({ page }) => {

        loginPage = new LoginPage(page);
        await loginPage.goto();
    })


    test("Login with correct credentials", async ({ page }) => {

        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveTitle('Swag Labs');
    })


    test.only("Login with invalid credentials", async ({ page }) => {

        await loginPage.login('randomusername', 'random_password');
        await expect(page.getByText('Username and password do not match any user in this service')).toBeVisible();
    })



})
