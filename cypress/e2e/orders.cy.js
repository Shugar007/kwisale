import { orders } from "../fixtures/selectors";
const access = require("./validLogin");

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Order Functionalities", function () {
    before(function () {
        access.validLogin();
    })
    it("Should be able to search orders", function(){
        cy.get(orders.orderSideBar).click();
        cy.get(orders.searchBar).type(orders.searchValue , '{enter}')
    })
    it("Should be able to filter", function(){
        cy.get(orders.filterBtn).click();
        cy.get(orders.filterField).click();
        cy.get(orders.statusOption).click()
        cy.get(orders.applyFilter).click()
    })
    it("Should be able to export orders", function(){
        cy.get(orders.exportOrders).click();
        cy.get(orders.confirmExport).click()
    })
    it("Should be able to view make a sale", function(){
        cy.get(orders.makeASale).click()
    })




// })

})