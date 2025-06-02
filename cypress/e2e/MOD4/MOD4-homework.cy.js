 describe('search by element', () => {
  beforeEach(() => {
    cy.visit('https://fabrykatestow.pl/')
  })
  it('id', () => {
    cy.get('#wp-emoji-styles-inline-css')
    cy.get('#classic-theme-styles-inline-css')
    cy.get('#global-styles-inline-css')
    cy.get('#elementor-icons-css')
    cy.get('#header-grid')
  })
  it('class', () => {
    cy.get('.yoast-schema-graph')
    cy.get('.wrapper')
    cy.get('.neve-skip-link.show-on-focus')
    cy.get('.site-logo')
    cy.get('.brand')
  })
  it('attribute', () => {
    cy.get('button[value="Menu nawigacji"]')
    cy.get('nav[data-row-id="main"]')
    cy.get('span[class="elementor-button-icon"]') 
    cy.get('input[aria-label="email"]')
    cy.get('footer[id="site-footer"]')
  })
  it('text', () => {
    cy.get('span').contains('DOŁĄCZAM')
    cy.get('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ')
    cy.contains('Bądź na bieżąco')
    cy.contains('Sprawdź nasze kursy')
    cy.get('p').contains('OPINIE NA TEMAT SZKOLEŃ')
  })
})