const dropdowList = 'select'

class DropdownListPage {
    chooseDropdownListFirstOption(){
        cy.get(dropdowList).select('Option 1').should('have.value', 1)
    }
}
export default DropdownListPage;