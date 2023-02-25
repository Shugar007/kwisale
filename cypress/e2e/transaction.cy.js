import { transaction } from "../fixtures/selectors";
const access = require("./validLogin");

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Transaction Functionalities", function () {
    before(function () {
        access.validLogin();
    })
    it("Should be able to filter transaction on date", function(){
        cy.get(transaction.transactionSideBar).click();
        cy.get(transaction.transactionHeadbar).should('be.visible')
        cy.get(transaction.filterTransaction).click();
        cy.get(transaction.dateField).click();
        cy.get(transaction.onDateOption).click();
        cy.get(transaction.dateCalender).type('2022-11-09').trigger('keydown', {key : 'Enter'})
        
    })
    it("SHould be able to filter transaction by status", function(){
        cy.get(transaction.selectStatusField).click()
        cy.get(transaction.successfulTransaction).click()
        cy.get(transaction.applyFilter).click()
    })




})

