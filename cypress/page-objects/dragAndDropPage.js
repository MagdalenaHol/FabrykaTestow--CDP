const columnA = '#column-a'
const columnB = '#column-b'

class DragAndDopPage{
    dragColumnA(){
        cy.get(columnA).should('be.visible').drag(columnB)
        
    }
    dragColumnB(){
        cy.get(columnB).should('be.visible').drag(columnA)
    }
}
export default DragAndDopPage;