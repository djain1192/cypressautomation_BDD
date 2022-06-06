import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../../pageObjects/HomePage'


Given('I open Ecommerce Page', ()=> 
{
    cy.visit(Cypress.env('POCurl'))
}
)

When('I add items to cart', ()=>
{
    const homePage = new HomePage()
    homePage.getShopTab().click() 
    homePage.addToCart1().click()
    homePage.addToCart2().click() 
    homePage.checkout().click()
} 
)

Then('Select the country submit and verify Thankyou', ()=>
{
    const homePage = new HomePage()
    homePage.checkoutButton().click()
    homePage.countryTextBox().type('India')
    homePage.suggestionOption().click()
    homePage.agreeCheckBox().click()
    homePage.PurchasedButton().click()
    homePage.orderSuccessfullMessage().contains('Success! Thank you! Your order will be delivered in next few weeks :-).')

}
)

// When - I fill the form details
When('I fill the form details', function(dataTable)
{
    const homePage = new HomePage()
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select("Female")
}
)
Then('validate the forms behaviour', ()=>
{
    const homePage = new HomePage()
    homePage.getTwoWayDataBinding().should('have.value',"dj")
    homePage.getEntrepreneaur().should('be.disabled')
}
)
And('select the Shop Page', ()=>
{
    const homePage = new HomePage()
    homePage.submitButton().click()
}
)
