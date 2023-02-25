import { settings } from "../fixtures/selectors";
const access = require("./validLogin");

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("setttings Functionalities", function () {
    before(function () {
        access.validLogin();
    })
     
    // it("Should be able to edit profile ", function () {
    //     cy.wait(3000);
    //     cy.get(settings.settingBtn).click()
    //     cy.get(settings.myAccount).click()
    //     cy.get(settings.firstNameF).clear().type('Tobi')
    //     cy.get(settings.lastNameF).clear().type('fagbo boss')
    //     cy.get(settings.phoneNumberF).clear().type('08144353467')
    //     cy.get(settings.saveBtn).click()
    
    
    // })

    it("Should be able to change password ", function () {
        cy.wait(3000)
        cy.get(settings.settingBtn).click();
        cy.get(settings.myAccount).click()
        cy.get(settings.changePasswordBtn).click()
        cy.get(settings.changePasswordHeader).should('be.visible')
        cy.get(settings.oldPasswordField).type('Bamikole1@')
        cy.get(settings.newPasswordField).type('Bamikole1@')   
        cy.get(settings.confirmPassword).type('Bamikole1@')
        cy.get(settings.savePassword).click()
    
    })
})