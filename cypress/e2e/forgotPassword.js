import {forgotPassword} from '../fixtures/selectors';
describe('forgot password', function(){
    beforeEach(function(){
        cy.visit("/")
    })
    it('forgot password', function(){
        cy.get(forgotPassword.resetBtn).click();
        cy.get(forgotPassword.emailAddress).type(forgotPassword.emailtxt)
        cy.get(forgotPassword.sendLink).click()
        cy.wait(3000)
        cy.get(forgotPassword.successXpath).contains(forgotPassword.successTxt).should('be.visible')
    })
})