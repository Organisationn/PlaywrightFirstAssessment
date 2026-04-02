const {expect} =  require('@playwright/test')
class HomePage{
    constructor(page){
        this.page= page
        this.swaglabLogo = '.app_logo'
        // this.addToCartButton = (productName) =>`//button[@id="add-to-cart-${productName}"]`
        this.linkShoppingCart = '//a[@class="shopping_cart_link"]'
        this.successMessage = '//h2[@data-test="complete-header"]'
        this.menuButton = '#react-burger-menu-btn'
        this.logoutButton = '#logout_sidebar_link'
    }
    async verifyAppLogoPostLogin(){
        await expect(this.page.locator(this.swaglabLogo)).toBeVisible()
    }
    async addItemToCart(productName){
        await this.page.locator(`//button[@id="add-to-cart-${productName}"]`).click()
    }
    async clickCartLink(){
        await this.page.locator(this.linkShoppingCart).click()
    }
    async verifySuccessMessagePostOrder(expectedMessage){
        await expect(this.page.locator(this.successMessage)).toHaveText(expectedMessage)
    }
    async logoutFromApp(){
        await  this.page.locator(this.menuButton).click()
        await this.page.locator(this.logoutButton).click()
    }
}

module.exports = HomePage