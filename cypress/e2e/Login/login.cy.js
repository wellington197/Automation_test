/**
 * Nessa Suite de teses, iremos tratar o testes via Login
 */



describe('This is your test project title', () => {

beforeEach(() => {
    cy.visit('/')
})



context('Cenario 01 - Acessando login com dados corretos', () => {
    it('Acessando dados com Login Correto', () => {
        cy.get('#menu-item-4100 > a').click()
        cy.get('#username').type('admin')
        cy.get('#password').type('admin')

        cy.get(':nth-child(4) > .woocommerce-button').click()

    })
    it('This is your test case two title', () => {
    })
})//Fim do cenário 01


















}) // Fim do describe