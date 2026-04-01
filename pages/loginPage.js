const {expect} = require('@playwright/test')
class LoginPage{
    constructor(page){
        this.page = page
        this.userName ='#user-name',
        this.password = '#password',
        this.loginButton = '#login-button',
        this.errorMessage = 'h3[data-test="error"]'
    }

    async loginToApp(un,pwd){
        await this.page.fill(this.userName, un)
        await this.page.fill(this.password, pwd)
        await this.page.click(this.loginButton)
    }
    async verifyLoginPostLogout(){
        await expect(this.page.locator(this.loginButton)).toBeVisible()
    }
    async verifyErrorMessageForInvalidLogin(){
        await expect(this.page.locator(this.errorMessage)).toHaveText("Epic sadface: Username is required")
    }

}
module.exports = LoginPage;