/// <reference types= "cypress" />
it('login test',function() {
    const email = "test@test.com"
    const password = "Applephone##12"
    cy.visit('https://www.facebook.com')
    cy.get(':nth-child(1) > .base-borders > .jss4 > .jss21').type(email)
    cy.get(':nth-child(2) > .base-borders').type(password)
    cy.get('form > .jss1').click()
    // cy.should('.notification-info','error')
})

it("forget password", () =>{
    cy.visit('https://www.facebook.com')
    cy.get('.custom-container > :nth-child(5)').click()
    cy.visit('https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0')
    cy.get('.base-borders').type('test@test.com')
    cy.get('form > .jss1').click()
})

it("tern & condition", () =>{
    cy.get(':nth-child(5) > .base-text__textAlign-center').click()
    cy.visit('https://www.facebook.com/legal/terms?ref=pf')
})


