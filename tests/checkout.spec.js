const {test, expect} = require('@playwright/test')
const Login = require('../pages/loginpage')
const CheckoutPage = require('../pages/checkout');
const InventoryPage = require('../pages/inventorypage');


test.describe("Checkout Suite", () =>{

        let login;
        let inventory
        let checkoutpage;


        test.beforeEach("Prelim Pages", async({page}) => {

            const login = new Login(page);

            await login.goto();
            await login.login('standard_user', 'secret_sauce');


            const inventory = new InventoryPage(page);
            await inventory.addToCart()

        })

        test("Checking out cart Items", async({page}) => {

            const checkoutpage = new CheckoutPage(page);
            await checkoutpage.clickCheckout()

            await checkoutpage.checkoutDetails('Abdulmalik', 'Ahmad', '60664');
            await checkoutpage.finishCheckout();

            await expect(page.locator('[data-test="complete-header"]')).toHaveText("Thank you for your order!");
            await checkoutpage.backHome()
        })
})