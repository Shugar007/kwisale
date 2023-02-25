import { makeASale } from "../fixtures/selectors";
const access = require("./validLogin");

Cypress.on('uncaught:exception', (err, runnable) => {
      //returning false here prevents Cypress from
    //  failing the test
    return false
})

describe("Make A Sale Functionalities", function () {
    beforeEach(function () {
        access.validLogin();
    })
     it("SHould be able to make a sale", function(){
         cy.get(makeASale.makeASaleBtn).click();
        // cy.get(makeASale.salesChannelDrpdwn).select("moreshoes")
         cy.get(makeASale.quickMode).click();
          cy.get(makeASale.itemMode).click();
          cy.get(makeASale.searchBar).type(makeASale.itemSearchValue)
          cy.get(makeASale.addCustomer).click()
          cy.get(makeASale.selectCustomer).click({force: true} )
          cy.get(makeASale.doneAddCustomer).click()
           //cy.get(makeASale.cancelAddCustomer).click()
          cy.get(makeASale.optionMenu).click()
          cy.get(makeASale.itemlistSelect).click()
          cy.get(makeASale.addItemBtn).click()
          cy.get(makeASale.doneAddItemBtn).click()
          cy.get(makeASale.clearCart).click()
      })
      it("Should be able to place order", function(){
          cy.get(makeASale.makeASaleBtn).click();
          // cy.get(makeASale.salesChannelDrpdwn).select("moreshoes")
          cy.get(makeASale.quickMode).click();
          cy.get(makeASale.itemMode).click();
          cy.get(makeASale.searchBar).type(makeASale.itemSearchValue)
          cy.get(makeASale.addCustomer).click()
          cy.get(makeASale.selectCustomer).click({force: true} )
          cy.get(makeASale.doneAddCustomer).click()
           //cy.get(makeASale.cancelAddCustomer).click()
          cy.get(makeASale.optionMenu).click()
          cy.get(makeASale.itemlistSelect).click()
          cy.get(makeASale.addItemBtn).click()
          cy.get(makeASale.doneAddItemBtn).click()
          cy.get(makeASale.placeOrder).click()
          cy.get(makeASale.deliveryOption).click()
          cy.get(makeASale.confirmOrder).click()
      })
      it("Should be able to save order", function(){
          cy.get(makeASale.makeASaleBtn).click();
           //cy.get(makeASale.salesChannelDrpdwn).select("moreshoes")
          cy.get(makeASale.quickMode).click();
          cy.get(makeASale.itemMode).click();
          cy.get(makeASale.searchBar).type(makeASale.itemSearchValue)
          cy.get(makeASale.addCustomer).click()
          cy.get(makeASale.selectCustomer).click({force: true} )
          cy.get(makeASale.doneAddCustomer).click()
          // cy.get(makeASale.cancelAddCustomer).click()
          cy.get(makeASale.optionMenu).click()
          cy.get(makeASale.itemlistSelect).click()
          cy.get(makeASale.addItemBtn).click()
          cy.get(makeASale.doneAddItemBtn).click()
          cy.get(makeASale.saveOrder).click()
          cy.get(makeASale.cutomLabelField).type('Save this order')
          cy.get(makeASale.confirmSaveOdrerBtn).click()
     })
    /*git it("Should be able to charge order", function(){
        cy.get(makeASale.makeASaleBtn).click();
        //cy.get(makeASale.salesChannelDrpdwn).select("moreshoes")
        cy.get(makeASale.quickMode).click();
        cy.get(makeASale.itemMode).click();
        cy.get(makeASale.searchBar).type(makeASale.itemSearchValue)
        cy.get(makeASale.addCustomer).click()
        cy.get(makeASale.selectCustomer).click({force: true} )
        cy.get(makeASale.doneAddCustomer).click()
       // cy.get(makeASale.cancelAddCustomer).click()
        cy.get(makeASale.optionMenu).click()
        cy.get(makeASale.itemlistSelect).click()
        cy.get(makeASale.addItemBtn).click()
        cy.get(makeASale.doneAddItemBtn).click()
        cy.get(makeASale.chargeBtn).click()
        cy.get(makeASale.sendBillToCUstomer).click()
        cy.get(makeASale.doneCustomerBill).click()
        cy.get(makeASale.doneChargeCustomer).click()
    })*/
     it("Should be able to switch sales channel", function(){
         cy.get(makeASale.makeASaleBtn).click();
         cy.get(makeASale.salesChannelDrpdwn).click()
         cy.get(makeASale.salesChannel).click({force: true})

    })




})

