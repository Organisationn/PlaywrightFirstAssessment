const {expect} = require('@playwright/test')
class LoginPage{
    constructor(page){
        this.page = page
        this.userName ='#user-name'
        this.password = '#password'
        this.loginButton = '#login-button'
        this.errorMessage = 'h3[data-test="error"]'
    }

    async loginToApp(un,pwd){
        await this.page.locator(this.userName).fill(un)
        await this.page.locator(this.password).fill(pwd)
        await this.page.locator(this.loginButton).click()
    }
    async verifyLoginPostLogout(){
        await expect(this.page.locator(this.loginButton)).toBeVisible()
    }
    async verifyErrorMessageForInvalidLogin(errorMessage){
        await expect(this.page.locator(this.errorMessage)).toHaveText(errorMessage)
    }

}
module.exports = LoginPage;