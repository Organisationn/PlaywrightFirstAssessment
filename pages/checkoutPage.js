class CheckoutPage
{
    constructor(page){
        this.page = page
        this.firstName = '#first-name'
        this.lastName = '#last-name'
        this.zipCode = '#postal-code'
        this.continueButton = '#continue'
        this.finishButton = '//button[@data-test="finish"]'
    }

    async fillCheckoutDetails(firstname,lastname,zipcode){
        await  this.page.locator(this.firstName).fill(firstname)
        await  this.page.locator(this.lastName).fill(lastname)
        await this.page.locator(this.zipCode).fill(zipcode)
    }
    async  clickContinue(){
        await this.page.locator(this.continueButton).click()
    }
    async clickFinish(){
        await this.page.locator(this.finishButton).click()
    }
}

module.exports = CheckoutPage