// import { teams, homepage } from "../fixtures/selectors";
// const access = require("./validLogin");

// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
// })

// describe("Team Functionalities", function () {
//     before(function () {
//         access.validLogin();
//     })

//     it("Add Team Functions", function (){
//         cy.wait(3000);
//         cy.get(homepage.teamsBtn).should('be.visible').click({force:true});
//          cy.get(teams.addTeamMember).click().wait(500);
//         cy.get(teams.firstNameField).type('Sarah')
//         cy.get(teams.lastnameField).type('George')
//         cy.get(teams.emailField).type('george@yopmail.com')
//         cy.get(teams.phoneNumberField).type('08144198324')
//         cy.get(teams.cancelXBtn).click()
//     //     cy.get(teams.chooseRoleBtn).trigger('keydown',{key:'Enter'})
//     //     cy.get('.dropdown-heading-value').select('Kwik')
//     //     cy.get(':nth-child(5) > .form-control').select('61fbd99dcf241e5ca4e18768')
//     //     cy.get(teams.sendInviteBtn).click({force:true})


//     })

//     it("Should be able to edit team ", function () {
//         cy.wait(3000);
//         cy.get(homepage.teamsBtn).should('be.visible').click({ force: true })
//         cy.get(teams.teamName).click().wait(500)
//         cy.get(teams.editInfo).click()
//         // cy.get(teams.firstNameField).type('02')
//         // cy.get(teams.lastnameField).type('lad')
//         cy.get(teams.updateBtn).click()
//         cy.get(teams.cancelXBtn).click()


//     })

//     it("Should be able to create role ", function (){
//         cy.wait(3000);
//         cy.get(teams.cancelXBtn).click()
//         cy.get(teams.roles).click().wait(3000)
//         cy.get(teams.createRoleBtn).click()
//         cy.get(teams.roleName).type('Trive')
//         cy.get(teams.fullPermission).click()
//         cy.get(teams.saveBtn).click()
//    })
// })


