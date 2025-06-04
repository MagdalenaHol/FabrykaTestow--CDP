describe('website test MOD5', () => {
    it('should navigate to webpage and scroll to section to take a screenshot', () => {
        cy.visit('https://fabrykatestow.pl')

        // cy.get('a').contains('Kursy').click() // If you want to navigate to the section faster

        cy.get('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ')
        .should('be.visible')
        .first()
        .click()

        cy.get('div[data-id="8bbdcf1"]').contains('Kto nauczy Cię testów automatycznych?')
        .scrollIntoView()
        .should('be.visible')

        cy.wait(2000)

        cy.screenshot('instructor-screenshot', {capture: 'viewport'})
    }) 
    
})