const {expect} = require('@playwright/test')
class LoginPage{
    constructor(page){
        this.page = page
        this.userName = this.page.getByPlaceholder('Username')
        this.password = this.page.getByPlaceholder('Password')
        this.loginButton = this.page.getByRole('button', {name:'Login'})
        this.errorMessage = this.page.locator('h3[data-test="error"]')
    }

    async loginToApp(un,pwd){
        await this.userName.fill(un)
        await this.password.fill(pwd)
        await this.loginButton.click()
    }
    async verifyLoginPostLogout(){
        await expect(this.loginButton).toBeVisible()
    }
    async verifyErrorMessageForInvalidLogin(errorMessage){
        await expect(this.errorMessage).toHaveText(errorMessage)
    }

}
module.exports = LoginPage;