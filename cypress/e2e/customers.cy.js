import { customers } from "../fixtures/selectors";
const access = require("./validLogin");

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Customers Functionalities", function () {
    before(function () {
        access.validLogin();
    })
    it("Should be able to  add customer ", function () {
        cy.wait(5000)
        cy.get(customers.customerSideBar).click();
        cy.get(customers.customerHeading).should('be.visible')
        cy.get(customers.addCustomerBtn).click()
        cy.get(customers.firstNameField).type('Oluwatobi')
        cy.get(customers.lastNameField).type('QA TechBro')
        cy.get(customers.emailField).type('tfagbo@grr.la')
        cy.get(customers.phoneNoField).type('08078936251')
        cy.get(customers.resAddressField).type('55,Harrison Sholaja street')
        cy.get(customers.saveCustomerBtn).click()
        cy.get(customers.closeBtn).click()
    })
    it("Should be able to edit customer", function(){
        cy.wait(1000);
        cy.get(customers.actionEllipsisBtn).wait(1000).trigger('mouseover')
        cy.get(customers.editBtn).click({force: true})
        cy.get(customers.firstNameField).type('Oluwatobi')
        cy.get(customers.lastNameField).type('QA-TechGuru')
        cy.get(customers.emailField).type('tfagbo@grr.la')
        cy.get(customers.phoneNoField).type('08078936251')
        cy.get(customers.resAddressField).type('17,Harrison Sholaja street')
        cy.get(customers.saveCustomerBtn).click()
        cy.get(customers.closeBtn).click()

     })

    it("Should be able to delete Customer", function(){
        cy.get(customers.actionEllipsisBtn).trigger('mouseover').scrollIntoView().should('be.visible')
        cy.get(customers.deleteCustomerBtn).contains('Delete Customer').click({force: true})
    })
    it("Should be able to search customer", function(){
        cy.get(customers.searchBar).type('Oluwatobi')
    })
    it("Should be able to create group", function(){
        cy.get(customers.groupsBtn).click()
        cy.get(customers.createGroupBtn).click()
        cy.get(customers.groupNameField).type('Fashion')
        cy.get(customers.saveGroupBtn).click()
        cy.get(customers.cancelXBtn).click()
    })
    it("Should be able to search group", function(){
        cy.get(customers.groupSearchBar).type('Fashion')
    })
    it("Should add customer to group", function(){
        cy.get(customers.customerListBtn).click()
        cy.get(customers.actionEllipsisBtn).trigger('mouseover').scrollIntoView().should('be.visible')
        cy.get(customers.addToGrpBtn).contains('Add to group').click({force: true})
        cy.get(customers.newGrpBtn).click()
        cy.get(customers.groupNameField).type('Fashion')
        cy.get(customers.saveBtn).click()
        //cy.get(customers.cancelCustomerBtn).click()
    })


   


})