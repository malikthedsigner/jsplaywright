class InventoryPage{

    constructor(page){
        this.page = page;
        this.addBagButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.addBikeButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.addShirtButton = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
        this.removeBagButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.removeBikeButton = page.locator('[data-test="remove-sauce-labs-bike-light"]')
        this.removeShirtButton = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')
    }

    async addToCart(){

        await this.addBagButton.click();
        await this.addBikeButton.click();
        await this.addShirtButton.click();

    }


    async removeFromCart(){

        await this.removeBagButton.click();
        await this.removeBikeButton.click();
        await this.removeShirtButton.click();
    }

    async getCardNumber(){

        return await this.cartIcon;

    }
}

module.exports = InventoryPage;