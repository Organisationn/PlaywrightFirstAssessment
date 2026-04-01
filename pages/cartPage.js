class CartPage {
    constructor(page){
        this.page = page
        this.checkoutButton = '//button[@data-test="checkout"]'
    }

    async clickCheckoutButton(){
        await this.page.click(this.checkoutButton)
    }
}

module.exports = CartPage