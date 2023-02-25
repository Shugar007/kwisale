import { channels } from "../fixtures/selectors";
const access = require("./validLogin");

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Channel Functionalities", function () {
    before(function () {
        access.validLogin();
    })
    
    it("Should be able to view store ", function () {
        cy.wait(3000)
        cy.get(channels.salesChannel).click()
        cy.get(channels.storeHeader).should('be.visible')
        cy.get(channels.onlineStore).click({force:true})
        cy.get(channels.socialStore).click({force:true})
        cy.get(channels.physicalStore).click({force:true})
    
    })


    /*it("Should be able to add physical store ", function () {
        cy.wait(3000)
        cy.get(channels.salesChannel).click();
        cy.get(channels.addStoreBtn).click();
        cy.get(channels.basicInfo).should('be.visible')
        cy.get(channels.storeName).type('DARAJU');
        cy.get(channels.physicalAddress).type('13 allen road');
        cy.get(channels.contactNumber).type('08144198324')
        cy.get(channels.contactEmail).type('fagboindustries@yopmail.com');
        cy.get(channels.selectAccess).click({force:true})
        cy.get(channels.inventoryTick).click({force:true})
        //cy.get(':nth-child(2) > .form-group > .form-control').select('61fbd99ecf241e5ca4e18779')
        cy.get(channels.saveBtn).click({force:true})
        cy.get(channels.cancelXBtn).click()

    })*/

//     it("Should be able to add online store  ", function () {
//         cy.wait(3000)
//         cy.get(channels.salesChannel).click()
//         cy.get(channels.onlineStore).click({force:true})
//         cy.get(channels.setupBtn).click()
//         cy.get(channels.storeTittle).type('larry Land')
//         // cy.get(channels.storeUrl).type('storeshop')
//         cy.get(channels.storeHeadline).type('Here to searve')
//         cy.get(channels.storeDescription).type('condusive environment')
//         cy.get(channels.useasLogo).click({multiple: true})
//         cy.get(channels.chooselayout).click()
//         cy.get(channels.phoneNumber).type('08162688748')
//         cy.get(channels.supportEmail).type('fagboindustries@yopmail.com')
//         cy.get(channels.physicalAddress2).type('4 larry street Georgia')
//        // cy.get('.mt-48 > .form-group > .form-control').select('61fbd99ecf241e5ca4e18779').should('have.value','Kwik')
//         cy.get(channels.continueBtn).click({force:true})
//         cy.get(channels.cancelXBtn).click()

    
//      })

//     it("Should be able to edit online store ", function () {
//         cy.wait(3000)
//         cy.get(channels.salesChannel).click()
//         cy.get(channels.onlineStore).click({force:true})
//         cy.get(channels.infoTittle).clear().type('XL Shirt')
//         cy.get(channels.shoesHeadline).clear().type('boo Shirt')
//         cy.get(channels.headlineChecker).click()
//         cy.get(channels.storeLayout).click({force:true})
//         // cy.get(channels.storeDes).clear.type('Pleasant')
//         cy.get(channels.UpdatecustomizeBtn).click({force:true})
//         cy.get(channels.cancelXBtn).click()

    
//     })

//      it("Should be able to activate store ", function () {
//           cy.wait(3000)
//           cy.get(channels.salesChannel).click()
//           cy.get(channels.onlineStore).click({force:true})
//           cy.get(channels.activationToogle).click()
//           cy.get(channels.deactivationToogle).click()
//           cy.get(channels.cancelXBtn).click()

    
//      })
//     it("Should be able to edit social store ", function () {
//         cy.wait(3000)
//         cy.get(channels.salesChannel).click()
//         cy.get(channels.socialStore).click({force:true})
//         cy.get(channels.meuDropdown).click()
//         cy.get(channels.editSales).click()
//         cy.get(channels.cancelXBtn).click()
// })
})