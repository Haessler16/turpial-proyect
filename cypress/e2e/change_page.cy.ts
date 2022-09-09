import { aliasMutation, aliasQuery } from 'utils/graphql_test'

describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    cy.intercept('POST', 'https://rickandmortyapi.com/graphql', (req) => {
      // Queries
      aliasQuery(req, 'Characters')

      // Mutations
    })
  })

  it('Intercept request and chance of page', () => {
    cy.wait('@gqlCharactersQuery')

    cy.get('@gqlCharactersQuery')
      .its('response.body.data.characters')
      .should('have.property', 'results')
      .and((data) => {
        expect(data).to.have.length(20)
      })

    cy.get('@gqlCharactersQuery')
      .its('response.body.data.characters')
      .should('have.property', 'info')
      .and((data) => {
        expect(data).to.have.property('next', 2)
      })

    cy.wait(500)

    cy.get('[name="next_page"]').click()
  })
})
