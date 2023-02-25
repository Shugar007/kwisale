import { login, homepage} from "../fixtures/selectors.js";
export const validLogin = () => {
        cy.visit("/")
        cy.get(login.emailInput).clear().type('tfagbo@grr.la')
        cy.get(login.passwordInput).clear().type('Password')
        cy.get(login.logInButton).wait(5000).click({ force: true })
        cy.get(homepage.homeTextXpath).contains('Home')
}


    
    