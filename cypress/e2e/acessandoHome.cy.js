describe('Acessando a tela home', () => {
beforeEach(() => {
  cy.visit('/')

})


context('Testes da página home', () => {
  
  

  it('Efetuando pesquisa com um produto', () =>{
    cy.get('#search').type('Notebook{enter}');
    cy.get('.page-title').should('have.text','Search results: “Notebook”')

  })

  it('Acessando a tela de Home', () => {

  })







})// Fim do context na Home

})// Fim do Describe