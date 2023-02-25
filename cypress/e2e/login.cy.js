/// <reference types="Cypress" />
import { login, homepage } from "../fixtures/selectors.js";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Login Test", function () {
    before(function () {
        cy.visit("/")
    });

    it("Verify Invalid Login", function () {
        cy.get(login.emailInput).type('oluwatobi@softcom.ng');
        cy.get(login.passwordInput).type('Bamikole@');
        cy.get(login.logInButton).click();
        //cy.wait(7000)
        //cy.get(login.errorMessage).should('be.visible')
    })

    it("Verify valid Login", function () {
        cy.get(login.emailInput).clear().type('tfagbo@grr.la')
        cy.get(login.passwordInput).clear().type('Password')
        cy.get(login.logInButton).click({ force: true })
        cy.get(homepage.homeTextXpath).contains('Home')
    })

    it("Verify  logout", function () {
       cy.get(login.logoutBtn).click({ force: true })
       cy.get(login.loginWelcomeMsg).should('be.visible')
    })

    it("Verify Forgot Password", function () {
       cy.get(login.forgotPassword).click()
       cy.get(login.emailField).type('tfagbo@grr.la')
       cy.get(login.sendLink).click({ force: true })
       cy.get(login.forgetPwdLinkMessage).should('be.visible')
    })

})


