class Login
{

    fillEmail() 
    {
    const field = cy.get('input[type="email"]')
    field.clear()
    field.type('djain@mobiquityinc.com')
    return this
    }

    fillPassword() 
    {
    const field = cy.get('input[type="password"]')
    field.clear()
    field.type('Darshit@11')
    return this
    }

    getSignIn()
    {
    return cy.get('div.auth-page div.container.page div.row div.col-md-6.offset-md-3.col-xs-12 form:nth-child(3) fieldset:nth-child(1) > button.btn.btn-lg.btn-primary.pull-xs-right:nth-child(3)')

    }


}

export default Login;