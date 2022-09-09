describe('Search Input', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Searching for a specific character', () => {
    cy.get('[name="search_character"]').as('search')

    cy.get('@search').type('Rick').wait(850)

    cy.get('#characters_grid > :nth-child(3)')
      .find('h2')
      .should('have.text', 'Alien Rick')
  })

  // it('Check if character exist ', () => {
  //   cy.get('.chakra-input').type('Bum')
  //   cy.contains('Character not found, try with other name')
  //   // cy.get('#characters_grid > p').should(
  //   //   'have.text',
  //   //   'Character not found, try with other name',
  //   // )
  //   // cy.find('p').should('have.text', 'Character not found, try with other name')
  // })
})
