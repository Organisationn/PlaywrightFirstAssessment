const{test,expect} = require('@playwright/test')
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'
import CartPage from '../pages/cartPage'
import CheckoutPage from '../pages/checkoutPage'
const data = JSON.parse(JSON.stringify(require('../testdata.json')))
const username = process.env.STANDARD_USER
const password = process.env.PASSWORD

test("Login to Application and place order", async function({page}){
    await page.goto('/')
    const loginPage = new LoginPage(page)
    console.log(`Attempting login with user: ${process.env.USERNAME}`);
    console.log(`Attempting login with password: ${process.env.PASSWORD}`);
    await loginPage.loginToApp(username,password)
    const homePage = new HomePage(page)
    await homePage.verifyAppLogoPostLogin()
    await page.waitForTimeout(3000)
    await homePage.addItemToCart()
    await page.waitForTimeout(3000)
    await homePage.clickCartLink()
    const cartPage  = new CartPage(page)
    await cartPage.clickCheckoutButton()
    const checkoutPage = new CheckoutPage(page)
    await checkoutPage.fillCheckoutDetails(data.firstname,data.lastname,data.zipcode)
    await checkoutPage.clickContinue()
    await checkoutPage.clickFinish()
    await homePage.verifySuccessMessagePostOrder()
    await page.waitForTimeout(3000)
    await homePage.logoutFromApp()
    await loginPage.verifyLoginPostLogout()
})

test("verify login with empty Username", async function({page}){
    await page.goto("/")
    const loginPage = new LoginPage(page)
    await loginPage.loginToApp('',password)
    await loginPage.verifyErrorMessageForInvalidLogin()
})