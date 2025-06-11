// const testUrl = 'https://fabrykatestow.pl/'
const alertUrl = 'https://register.rediff.com/register/register.php'

describe('cookies scenario', () => {
    // it('should work with cookies', ()=>{

    //     // cy.visit(testUrl)
    //     cy.clearCookie('foo')
    //     cy.clearAllCookies()
    //     cy.clearAllCookies()

    //     cy.setCookie('foo', 'bar')
    //     cy.getCookie('foo')
    //     cy.getCookies()


    //     cy.getAllCookies()
    // })
    it('should work with alert', ()=>{

        cy.visit(alertUrl)
        cy.get('input[type="submit"]').click().should('be.visible')

        cy.on('window:alert', (t)=>{
          expect(t).to.contains('Your full name')
        })
    })
})