const input = 'input[type="number"]'


class InputPage {
    typeNumberIntoField(){
        cy.get(input).clear()
        cy.get(input).type('123').should('have.value', '123')
    }

    typeLettersIntoField(){
        cy.get(input).clear()
        cy.get(input).type('ABC').should('not.have.value', 'ABC')
    }
}
export default InputPage;