class CheckoutPage
{
    constructor(page){
        this.page = page
        this.firstName = this.page.getByPlaceholder('First Name')
        this.lastName = this.page.getByPlaceholder('Last Name')
        this.zipCode = this.page.getByPlaceholder('Zip/Postal Code')
        this.continueButton = this.page.getByRole('button',{name:'Continue'})
        this.finishButton = this.page.getByRole('button',{name:'Finish'})
    }

    async fillCheckoutDetails(firstname,lastname,zipcode){
        await this.firstName.fill(firstname)
        await this.lastName.fill(lastname)
        await this.zipCode.fill(zipcode)
    }
    async  clickContinue(){
        await this.continueButton.click()
    }
    async clickFinish(){
        await this.finishButton.click()
    }
}

module.exports = CheckoutPage