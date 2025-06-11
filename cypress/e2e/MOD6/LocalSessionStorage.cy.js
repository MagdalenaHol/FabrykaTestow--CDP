import 'cypress-localstorage-commands'
const url = 'https://simpletestsite.fabrykatestow.pl/'

describe('local and session storage test', () => {
    it('work with local and session storage', () => {
        // cy.visit(url)
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()

        cy.clearLocalStorage('test')

        cy.getAllLocalStorage()
        cy.getAllSessionStorage()

        cy.getAllLocalStorage()

        cy.setLocalStorage('test', '1')
    })
})