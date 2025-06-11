const url = 'https://jsonplaceholder.typicode.com/posts/1'

describe('API test MOD6', ()=>{
    it('should test API with PUT and DELETE method', ()=>{
        cy.request(url).then((response)=>{
            const body = JSON.stringify(response.body)
            expect(response.body).to.exist
            cy.log(body)
        })
        cy.request({
            method: 'PUT',
            url : url,
            body: JSON.stringify({
                title: 'New title',
                body: 'New body for API testing with method PUT. Check if this content is updated.',
                userId: 1
            }),
            headers: {'Content-type' : 'application/json'}
        }).then((response) =>{
            expect(response.body.title).to.eq('New title')
            expect(response.body.userId).to.eq(1)
            const body = JSON.stringify(response.body)
            cy.log(body)
        })
        cy.request({
            method: 'DELETE',
            url: url,
            headers: {'Content-type': 'application/json'}     
        }).then((respone)=>{
            expect(respone.body.title).not.to.exist
            expect(respone.body).to.be.empty
            const body = JSON.stringify(respone.body)
            cy.log(body)
        })
    })
})