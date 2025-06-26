import Urls from "./urls"

const inputHeader = "#inputs-header"
const checkBoxHeader = "#checkbox-header"
const dropDownListHeader = "#dropdownlist-header"
const hoversHeader = "#hovers-header"

class HomePage {
    clickInputsTab(){
        cy.get(inputHeader).click()
    }
    clickCheckBoxTab(){
        cy.get(checkBoxHeader).click()
    }
    clickDopdownListTab(){
        cy.get(dropDownListHeader).click()
    }
    clickHoversTab(){
        cy.get(hoversHeader).click()
    }
    visitPage(){
        const url = new Urls()
        url.visitHomePage()
    }
}
export default HomePage;