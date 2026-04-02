const{test,expect} = require('@playwright/test')
const LoginPage = require('../pages/loginPage')
const HomePage = require('../pages/homePage')
const CartPage = require('../pages/cartPage')
const CheckoutPage = require('../pages/checkoutPage')
const getUserTestData = require('../utils/dbHelper')
// const data = JSON.parse(JSON.stringify(require('../testdata.json')))
const username = process.env.STANDARD_USER
const password = process.env.PASSWORD
let loginPage,homePage,cartPage,checkoutPage,data

test.describe('Saucedemo E2E scenarios', function () {
    test.beforeEach(async function ({ page }) {
        await page.goto('/')
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        cartPage = new CartPage(page)
        checkoutPage = new CheckoutPage(page)
        data = await getUserTestData(1)
        console.log("Test data loaded from DB : ", data)
    })

    test("login and place order successfully", async function ({ page }) {
        await page.goto('/')
        await loginPage.loginToApp(username, password)
        await homePage.verifyAppLogoPostLogin()
        await homePage.addItemToCart("sauce-labs-backpack")
        await homePage.clickCartLink()
        await cartPage.clickCheckoutButton()
        await checkoutPage.fillCheckoutDetails(data.firstname, data.lastname, data.zipcode)
        await checkoutPage.clickContinue()
        await checkoutPage.clickFinish()
        await homePage.verifySuccessMessagePostOrder("Thank you for your order!")
        console.log(`order placed for ${data.firstname} ${data.lastname} `)
        await homePage.logoutFromApp()
        await loginPage.verifyLoginPostLogout()
    })

    test("verify error for empty username", async function ({ page }) {
        await page.goto("/")
        const loginPage = new LoginPage(page)
        await loginPage.loginToApp('', password)
        await loginPage.verifyErrorMessageForInvalidLogin("Epic sadface: Username is required")
    })
})