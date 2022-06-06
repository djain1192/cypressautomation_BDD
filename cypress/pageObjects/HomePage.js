class HomePage
{

getEditBox()
{
   return cy.get('input[name = "name"]:nth-child(2)')
}

getTwoWayDataBinding()
{
return cy.get(':nth-child(4) > .ng-untouched')
}

getGender()
{
return cy.get('Select')
}

getEntrepreneaur()
{
return cy.get('#inlineRadio3')
}

getShopTab()
{
return cy.get('div.container:nth-child(1) nav.navbar.navbar-expand-sm.bg-dark.navbar-dark ul.navbar-nav li.nav-item:nth-child(2) > a.nav-link')
}

submitButton()
{
return cy.get('app-root:nth-child(1) form-comp:nth-child(3) div.container form.ng-invalid.ng-dirty.ng-touched:nth-child(2) > input.btn.btn-success:nth-child(10)')
}

submitFormMessage()
{
return cy.get('app-root:nth-child(1) form-comp:nth-child(3) div.container div:nth-child(2) > div.alert.alert-success.alert-dismissible')
}

addToCart1()
{
return cy.get('div.container div.row div.col-lg-9 app-card-list.row app-card.col-lg-3.col-md-6.mb-3:nth-child(3) div.card.h-100 div.card-footer:nth-child(3) > button.btn.btn-info')
}

addToCart2()
{
return cy.get('div.container div.row div.col-lg-9 app-card-list.row app-card.col-lg-3.col-md-6.mb-3:nth-child(4) div.card.h-100 div.card-footer:nth-child(3) > button.btn.btn-info')
}

checkout()
{
return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}

checkoutButton()
{
return cy.get(':nth-child(4) > :nth-child(5) > .btn')
}

countryTextBox()
{
return cy.get('#country')
}

suggestionOption()
{
return cy.get('.suggestions >ul > li >a')
}

PurchasedButton()
{
return cy.get('.ng-untouched > .btn')
}

agreeCheckBox()
{
return cy.get('body')
}

orderSuccessfullMessage()
{
return cy.get('app-shop:nth-child(3) div.container app-checkout.row div:nth-child(5) > div.alert.alert-success.alert-dismissible')
}

}

export default HomePage;