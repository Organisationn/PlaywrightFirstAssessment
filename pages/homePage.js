const {expect} =  require('@playwright/test')
class HomePage{
    constructor(page){
        this.page= page
        this.swaglabLogo = '.app_logo',
        this.addToCartButton = '//button[@id="add-to-cart-sauce-labs-backpack"]',
        this.linkShoppingCart = '//a[@class="shopping_cart_link"]',
        this.successMessage = '//h2[@data-test="complete-header"]   '
        this.menuButton = '#react-burger-menu-btn',
        this.logoutButton = '#logout_sidebar_link'
    }
    async verifyAppLogoPostLogin(){
        await expect(this.page.locator(this.swaglabLogo)).toBeVisible()
    }
    async addItemToCart(){
        await this.page.click(this.addToCartButton)
    }
    async clickCartLink(){
        await this.page.click(this.linkShoppingCart)
    }
    async verifySuccessMessagePostOrder(){
        await expect(this.page.locator(this.successMessage)).toHaveText('Thank you for your order!')
    }
    async logoutFromApp(){
        await  this.page.click(this.menuButton)
        await this.page.click(this.logoutButton)
    }
}

module.exports = HomePage