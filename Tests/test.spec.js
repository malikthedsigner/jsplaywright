const { test, expect } = require("@playwright/test")



test.describe("Regression", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    })

    test.afterEach(async ({ page }) => {
        console.log("Test done");
    })

    test("Title checker", async ({ page, browserName }) => {
        test.skip(browserName === 'firefox');
        await expect(page).toHaveTitle("Swag Labs");

    })

    test("Login", async ({ page }) => {

        const usernames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];
        for (const username of usernames) {
            await page.goto("/");
            await page.locator('#user-name').fill(username);
            await page.locator('#password').fill('secret_sauce');
            await page.getByRole('button', { name: 'Login' }).click();
        }
    })

    test.only ("Add to cart", async({page}) => {

        await page.locator('#user-name').fill("standard_user");
        await page.locator('#password').fill("secret_sauce");
        await page.getByRole('button', { name: 'Login' }).click();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        expect(page.locator('[data-test="item-4-title-link"]')).toHaveText("Sauce Labs Backpack");
        expect(page.locator('[data-test="item-0-title-link"]')).toHaveText("Sauce Labs Bike Light");


    })
})



