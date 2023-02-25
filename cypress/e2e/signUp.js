/// <reference types="Cypress" />
import {signUp} from "../fixtures/selectors";

describe("Device Test",function(){
    beforeEach(function () {
        cy.visit("https://retail.bluegreensoft.com/auth/login")
        cy.url().should('include','bluegreensoft')
    });
    
    it("User sign up", function (){
        // creation of merchants Personal details
        cy.get(signUp.createAccount).click()
        cy.get(signUp.headingCheck).should('be.visible')
        cy.get(signUp.firstNameInput).should('be.visible').type(signUp.firstNameText)
        cy.get(signUp.lastNameInput).should('be.visible').type(signUp.lastNameText)
        cy.get(signUp.emailInput).should('be.visible').type(signUp.emailText)
        cy.get(signUp.passwordInput).should('be.visible').type(signUp.passwordText)
        cy.get(signUp.termCondtionCheckbox).check()
        cy.get(signUp.boxCheck).should('be.checked')
        cy.get(signUp.continueButton).click()
        cy.wait(500)
        // creation of merchant workspace
        cy.contains(signUp.workspaceCheckerText).should('be.visible')
        cy.get(signUp.businessNameInput).should('be.visible').type(signUp.businessNameText)
        cy.get(signUp.businessPhoneNumberInput).should('be.visible').type(signUp.businessPhoneNumberText)
        cy.get(signUp.businessEmailAddressInput).should('be.visible').type(signUp.businessEmailAddressText)
        cy.get(signUp.businessPhysicalAddressInput).should('be.visible').type(signUp.businessPhysicalAddressText)
        cy.get(signUp.businessTypeInput).select(signUp.businessTypeText)
        cy.get(signUp.donebutton).click()
     })
})