
import acessoPage from '../PageObjects/acessoPage'
import signPage from '../PageObjects/signPage'
import dashPage from '../PageObjects/dashPage'

Given(/^que acesso a página do site My Store$/, () => {
	acessoPage.go()
});

When(/^acesso a pagina de login$/, () => {
	acessoPage.signIn()
});

And(/^insiro email "([^"]*)" e senha "([^"]*)"$/, (email,senha) => {
	const user = {
		email: email,
		senha: senha
	}

	signPage.forms(user)
	signPage.submit()
});

Then(/^devo verificar o nome "([^"]*)" como validação de usuario logado$/, (name) => {
	dashPage.accessConfirm(name)
	cy.screenshot()
});

Then(/^devo ser avisado sobre credenciais incorretas$/, () => {
	signPage.alert()
	cy.screenshot()
})