const { test, expect } = require("@playwright/test")
const LoginPage = require("../pages/loginpage")


test.describe("login test suite", ()=>{

    let loginPage;

    test.beforeEach("Load page", async({page}) => {

            loginPage = new LoginPage(page);
            await loginPage.goto();
    })


    test("Login", async({page}) => {

        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveTitle('Swag Labs');
    })



})
