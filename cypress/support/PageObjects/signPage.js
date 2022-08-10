/// <reference types="Cypress" />

import signElements from '../Elements/signElements'

class SignInPage {
    //Realiza a inserção dos dados do usuário
    forms(user) {
        cy.get(signElements.inputEmail()).type(user.email)
        cy.get(signElements.InputPassword()).type(user.senha)
    }
    submit() {
        cy.get(signElements.submitButton()).click()
    }

    alert() {
        //Valida a mensagem de falha de autenticação
        cy.contains(signElements.alertText(), 'Authentication failed.')
            .should('be.visible')
    }
}

export default new SignInPage()
