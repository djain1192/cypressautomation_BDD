import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import Login from '../../../pageObjects/Login'
const login = new Login()

//#region Login

Given('I open Conduit login page', () => {
    cy.visit(Cypress.env('ConduitURL'))

}
)

When('I type in username and password', () => {
    login.fillEmail()
    login.fillPassword()

}
)
And('I click on Sign in button', () => {
    login.getSignIn().click()
    cy.wait(8000)
}
)


Then('{string} should be shown', (content) => {

    cy.contains(content, { timeout: 10000 }).should('be.be.visible')

}
)

//#endregion Login

