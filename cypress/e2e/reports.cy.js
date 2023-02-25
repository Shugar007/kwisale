import { reports } from "../fixtures/selectors";
const access = require("./validLogin");

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Reports Functionalities", function () {
    before(function () {
        access.validLogin();
    })
    it("Should be able to view customer reports", function(){
        cy.get(reports.reportSideBar).click().wait(500);
        cy.get(reports.reportHeader).should('be.visible')
        cy.get(reports.customer).click().wait(500);
        cy.get(reports.dateDropdown).click({force:true});
        cy.get(reports.period).click({force:true});

//     })
//     it("Should be able to view sales report ", function(){
//         cy.get(reports.sales).click().wait(500)
//         cy.get(reports.dateDropdown).click({force:true})
//         cy.get(reports.period).click({force:true})
//     })

//      it("Should be able to view channels report", function(){
//       cy.get(reports.channel).click().wait(500)
//       cy.get(reports.dateDropdown).click({force:true})
//       cy.get(reports.period2).click({force:true})
   
// })

//      it("Should be able to view and export items report", function(){
//       cy.get(reports.item).click().wait(500)
//       cy.get(reports.exportTeamsBtn).click({force:true})
//       cy.get(reports.exportbtn).click({force:true})


// })

//      it("Should be able to view and export teams report", function(){
//        cy.get(reports.teams).click().wait(500)
//        cy.get(reports.exportTeamsBtn).click({force:true})
//        cy.get(reports.exportbtn).click({force:true})


// }) 




// })
    })
})