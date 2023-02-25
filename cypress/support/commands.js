// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --

import { homepage, login } from "../fixtures/selectors"

// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
Cypress.Commands.add('login', () => {
    // cy.request('POST', 'https://api-retail.bluegreensoft.com/v1/auth/login', {"email":login.emailText,"password":login.passwordText})
    cy.visit("https://retail.bluegreensoft.com"),
    cy.get(login.emailInput).should('be.visible').clear().type(login.emailText)
    cy.get(login.passwordInput).should('be.visible').clear().type(login.passwordText)
    cy.get(login.logInButton).click()
    cy.wait(3000)
   // cy.get(homepage.homeTextXpath).contains(homepage.homeText).should('be.visible')

})
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//import 'cypress-file-upload';