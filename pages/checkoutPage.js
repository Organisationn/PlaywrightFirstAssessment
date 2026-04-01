class CheckoutPage
{
    constructor(page){
        this.page = page,
        this.firstName = '#first-name',
        this.lastName = '#last-name',
        this.zipCode = '#postal-code',
        this.continueButton = '#continue',
        this.finishButton = '//button[@data-test="finish"]'
    }

    async fillCheckoutDetails(fn,ln,zipcode){
        await  this.page.fill(this.firstName, fn)
        await  this.page.fill(this.lastName,ln)
        await this.page.fill(this.zipCode,zipcode)
    }
    async  clickContinue(){
        await this.page.click(this.continueButton)
    }
    async clickFinish(){
        await this.page.click(this.finishButton)
    }
}

module.exports = CheckoutPage