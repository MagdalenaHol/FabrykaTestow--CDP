import Urls from "./urls"

const inputHeader = "#inputs-header"
const checkBoxHeader = "#checkbox-header"
const dropDownListHeader = "#dropdownlist-header"
const hoversHeader = "#hovers-header"
const basicAuthHeader = "#basicauth-header"
const formHeader = "#form-header"
const keyPressesHeader = "#keypresses-header"
const addAndRemoveElements = "#addremoveelements-header"
const statusCodesHeader = "#statuscodes-header"
const iFrameHeader = '#iframe-header'
const dragAndDropHeader = '#draganddrop-header'
const datePickerHeader = '#datepicker-header'

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
    clickBasicAuthHeader(){
        cy.get(basicAuthHeader).click()
    }
    clickFormHeader(){
        cy.get(formHeader).click()
    }
    clickKeyPressesHeader(){
        cy.get(keyPressesHeader).click()
    }
    clickAddAndRemoveElementsHeader(){
        cy.get(addAndRemoveElements).click()
    }
    clickStatusCodesHeader(){
        cy.get(statusCodesHeader).click()
    }
    clickiFrameHeader(){
        cy.get(iFrameHeader).click()
    }
    clickDragAndDropHeader(){
        cy.get(dragAndDropHeader).click()
    }
    clickDatePickerHeader(){
        cy.get(datePickerHeader).click()
    }
    visitPage(){
        const url = new Urls()
        url.visitHomePage()
    }
}
export default HomePage;