const { test, expect } = require("@playwright/test")



test.describe("Regression", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    })

    test.afterEach(async ({ page }) => {
        console.log("Test done");
    })

    test.skip("First Test @regression", async ({ page }) => {
        //await page.pause();

    })

    test("Title checker @smoke", async ({ page, browserName }) => {
        test.skip(browserName === 'firefox');
        await expect(page).toHaveTitle("Swag Labs");

    })

    test.only("Login @load", async ({ page }) => {

        const usernames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];
        for (const username of usernames) {
            await page.goto("/");
            await page.locator('#user-name').fill(username);
            await page.locator('#password').fill('secret_sauce');
            await page.getByRole('button', { name: 'Login' }).click();
            await page.screenshot({ path: ('screenshot1.png'), fullPage: true });
        }
    })
})



