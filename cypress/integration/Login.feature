
Feature: Login no site My Store

    Como usuário previamente cadastrado, 
    eu gostaria de realizar o login 
    para acessar minha conta

    Scenario: Login com sucesso
        Given que acesso a página do site My Store
        When acesso a pagina de login
        And insiro email "darthvader@imperio.com" e senha "ladonegro"
        Then devo verificar o nome "Anakin Skywalker" como validação de usuario logado

    Scenario: Login inválido
        Given que acesso a página do site My Store
        When acesso a pagina de login
        And insiro email "darthvader@imperio.com" e senha "Anakin123"
        Then devo ser avisado sobre credenciais incorretas