const { test, expect } = require("@playwright/test")

test("First Test", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");
    //await page.pause();

})

test("Title checker", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    await page.pause;

})

test("Login", async ({ page }) => {

    const usernames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];
    for (const username of usernames) {
        await page.goto("https://www.saucedemo.com/");
        await page.locator('#user-name').fill(username);  // Using ID
        await page.locator('#password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.pause();
    }
})


