/// <reference types="Cypress" />

import acessoElements from "../Elements/acessoElements"
import signElements from "../Elements/signElements"

class AcessoPage {

    go() {
        //acessa a página
        cy.visit('/')
        //verfica se o logo da página está visível
        cy.get(acessoElements.myStoreIcon())
            .should('be.visible')
    }

    signIn() {
        //clica no botão Sign-In
        cy.contains(acessoElements.signInButton(), 'Sign in').click()
        //valida se a mudança de página ocorreu para a correta
        cy.contains(signElements.textConfirm(), 'Log in to your account')
            .should('be.visible')
    }

}

export default new AcessoPage()