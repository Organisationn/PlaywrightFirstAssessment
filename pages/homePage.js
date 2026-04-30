const {expect} =  require('@playwright/test')
class HomePage{
    constructor(page){
        this.page= page
        this.swaglabLogo = this.page.getByText('Swag Labs',{exact:true})
        this.linkShoppingCart = this.page.locator('[data-test="shopping-cart-link"]')
        this.successMessage = this.page.locator('[data-test="complete-header"]')
        this.menuButton = this.page.getByRole('button',{name:'Open Menu'})
        this.logoutButton = this.page.getByText('Logout',{exact:true})
    }
    async verifyAppLogoPostLogin(){
        await expect(this.swaglabLogo).toBeVisible()
    }
    async addItemToCart(productName){
        await this.page.locator(`//button[@id="add-to-cart-${productName}"]`).click()
    }
    async clickCartLink(){
        await this.linkShoppingCart.click()
    }
    async verifySuccessMessagePostOrder(expectedMessage){
        await expect(this.successMessage).toHaveText(expectedMessage)
    }
    async logoutFromApp(){
        await this.menuButton.click()
        await this.logoutButton.click()
    }
}

module.exports = HomePage