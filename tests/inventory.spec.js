const { test, expect } = require('@playwright/test');
const InventoryPage = require('../pages/inventorypage');
const LoginPage = require("../pages/loginpage");

test.describe("Adding Items to Cart", () => {

    let loginPage;
    let inventoryPage;

    test.beforeEach("login first", async ({ page }) => {

        loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("standard_user", "secret_sauce");
        inventoryPage = new InventoryPage(page);
    })


    test("Add to cart", async ({ page }) => {

        await inventoryPage.addToCart();
        await expect(page.locator('.shopping_cart_badge')).toContainText("3");
    })


    test("remove from cart", async({page}) => {

        await inventoryPage.addToCart();
        await inventoryPage.removeFromCart();
        await expect(page.locator('[data-test="shopping-cart-link"]')).toBeEmpty();

    })
})