describe('Visit the page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Check regular names in the first request', () => {
    cy.get('#characters_grid').children().as('characterList')

    cy.get('@characterList').should('have.length', 20)
    cy.get('@characterList').find('h2').contains('Rick Sanchez')
  })
})

export {}
