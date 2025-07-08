import HomePage from "../../page-objects/homePage"
import InputPage from "../../page-objects/inputPage"
import CheckboxPage from "../../page-objects/checkboxPage"
import DropdownListPage from "../../page-objects/dropdownListPage"
import HoversPage from "../../page-objects/hoverPage"
import BasicAuthPage from "../../page-objects/basicAuthPage"
import FormPage from "../../page-objects/formPage"
import KeyPressesPage from "../../page-objects/keyPressesPage"
import AddRemoveElementsPage from "../../page-objects/addAndRemoveElementsPage"
import StatusCodesPage from "../../page-objects/statusCodesPage"
import iFramePage from "../../page-objects/iFramePage"
import DragAndDopPage from "../../page-objects/dragAndDropPage"
import DatePickerPage from "../../page-objects/datePickerPage"




describe('testing different control types', () =>{

    const homePage = new HomePage();

    beforeEach(()=>{
        cy.visit('/');

    })
    it('test checkbox', ()=>{
        homePage.clickCheckBoxHeader()

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFirstCheckbox()
        checkboxPage.uncheckSecondCheckbox()
    })
    it('test date picker', ()=>{
        homePage.clickDatePickerHeader()

        const datePicker = new DatePickerPage();
        datePicker.inputTheDate()
    })
    it('test hover', ()=>{
        homePage.clickHoversHeader()

        const hoversPage = new HoversPage();
        hoversPage.hoverOverElement()
    })
    it('test inputs', ()=>{
        homePage.clickInputsHeader()

        const inputPage = new InputPage();
        inputPage.typeNumberIntoField()
        inputPage.typeLettersIntoField()
    })
    it('test authorisation', ()=>{
        homePage.clickBasicAuthHeader()

        const basicAuthPage = new BasicAuthPage();
        basicAuthPage.showAuthForm();
        basicAuthPage.typeUsernameToAuth();
        basicAuthPage.typePasswordToAuth();
        basicAuthPage.clicklogintoAuth()
    })
    it('test form', ()=>{
        homePage.clickFormHeader()

        const formPage = new FormPage();
        formPage.showForm()
        formPage.typeFirstName()
        formPage.typeLastName()
        formPage.clickSubmit()
    })
    it('test dropdown list', ()=>{
        homePage.clickDopdownListHeader()

        const dropdownPage = new DropdownListPage();
        dropdownPage.chooseDropdownListFirstOption()         
    })  
    it('test key presses form', ()=>{
        homePage.clickKeyPressesHeader()

        const keyPressesPage = new KeyPressesPage();
        keyPressesPage.showKeyPressesForm()
        keyPressesPage.pressKeyToSeeInput()
    })
    it('test drag and drop', ()=>{
        homePage.clickDragAndDropHeader()

        const dragAndDrop = new DragAndDopPage();
        dragAndDrop.dragColumnA()
        dragAndDrop.dragColumnB()
    })
    it('test add and remove elements', ()=>{
        homePage.clickAddAndRemoveElementsHeader()

        const addElementPage = new AddRemoveElementsPage();
        addElementPage.showAddElementPage()
        addElementPage.addElement()
        addElementPage.removeElement()
    })
    it('test status codes', ()=>{
        homePage.clickStatusCodesHeader()

        const statusCodes = new StatusCodesPage();
        statusCodes.checkStatusLink()
        statusCodes.checkStatusCode200()
        statusCodes.checkStatusCode305()
        statusCodes.checkStatusCode404()
        statusCodes.checkStatusCode500()
    })
    it('test iFrame buttons', ()=> {
        homePage.clickiFrameHeader()

        const iFrame = new iFramePage();
        iFrame.iFrameButton1()
        iFrame.iFrameButton2()
    })
})