class CartPage {
    constructor(page){
        this.page = page
        this.checkoutButton = this.page.getByRole('button',{name:'Checkout'})
    }

    async clickCheckoutButton(){
        await this.checkoutButton.click()
    }
}

module.exports = CartPage