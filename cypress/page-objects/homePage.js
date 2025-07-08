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
    visitPage(){
        const url = new Urls()
        url.visitHomePage()
    }
    clickCheckBoxHeader(){
        cy.get(checkBoxHeader).click()
    }
    clickDatePickerHeader(){
        cy.get(datePickerHeader).click()
    }
    clickHoversHeader(){
        cy.get(hoversHeader).click()
    }
    clickInputsHeader(){
        cy.get(inputHeader).click()
    }
    clickBasicAuthHeader(){
        cy.get(basicAuthHeader).click()
    }
    clickFormHeader(){
        cy.get(formHeader).click()
    }
    clickDopdownListHeader(){
        cy.get(dropDownListHeader).click()
    }
    clickKeyPressesHeader(){
        cy.get(keyPressesHeader).click()
    }
    clickDragAndDropHeader(){
        cy.get(dragAndDropHeader).click()
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
}
export default HomePage;