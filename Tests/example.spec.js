const { test, expect } = require("@playwright/test")

test("First Test", async({page}) =>{

    await page.goto("https://www.saucedemo.com/");
    //await page.pause();

})

test("Title checker", async ({page}) =>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    await page.pause;

})