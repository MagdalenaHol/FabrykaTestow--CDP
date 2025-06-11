const url = 'https://jsonplaceholder.typicode.com/posts'

describe('my first scenario', () => {
    it('should test jason placeholder API', () => {

        // z metodą GET
        cy.request(url).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
            cy.get('.submit').should('not.exist')
            cy.log(body)
        })

        // z metodą POST
        cy.request({
            method: 'POST',
            url: url,
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {'Content-type': 'application/json'}
        }).then((response) =>{
            const body = JSON.stringify(response.body)
            cy.log(body)
        })
    })
})