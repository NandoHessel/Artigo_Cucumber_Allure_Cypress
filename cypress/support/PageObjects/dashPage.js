import dashElements from "../Elements/dashElements";

class DashPage {
    //Valida se o nome do usuário logado está visível
    accessConfirm(name) {
        cy.contains(dashElements.nameConfirm(), name)
            .should('be.visible')
    }
}

export default new DashPage()