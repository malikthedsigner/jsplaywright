class CheckoutPage {

    constructor(page) {

        this.page = page;
        this.cartButton = page.locator('.shopping_cart_badge')
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.zipCode = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.backHomeButton = page.locator('[data-test="back-to-products"]');
    }

    async clickCheckout() {

        await this.cartButton.click()
        await this.checkoutButton.click();
    }

    async checkoutDetails(userFirstName, userLastName, userZipCode) {

        await this.firstName.fill(userFirstName);
        await this.lastName.fill(userLastName);
        await this.zipCode.fill(userZipCode);
        await this.continueButton.click();
    }

    async finishCheckout() {

        await this.finishButton.click();
    }

    async backHome() {

        await this.backHomeButton.click();
    }
}


module.exports = CheckoutPage