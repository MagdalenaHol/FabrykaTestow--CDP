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

    beforeEach(()=>{
        cy.visit('/')
    })

    it('test inputs', ()=>{
        const homePage = new HomePage();
        homePage.clickInputsTab()

        const inputPage = new InputPage();
        inputPage.typeNumberIntoField()
        inputPage.typeLettersIntoField()
        
    })
    it('test checkbox', ()=>{
        const homePage = new HomePage();
        homePage.clickCheckBoxTab()

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFirstCheckbox()
        checkboxPage.uncheckSecondCheckbox()
        
    })

    it('test dropdown list', ()=>{
        const homePage = new HomePage();
        homePage.clickDopdownListTab()

        const dropdownPage = new DropdownListPage();
        dropdownPage.chooseDropdownListFirstOption()
          
    })
     it('test hover', ()=>{
        const homePage = new HomePage();
        homePage.clickHoversTab()

        const hoversPage = new HoversPage();
        hoversPage.hoverOverElement()
    })
    it('test authorisation', ()=>{
        const homePage = new HomePage();
        homePage.clickBasicAuthHeader()

        const basicAuthPage = new BasicAuthPage();
        basicAuthPage.showAuthForm();
        basicAuthPage.typeUsernameToAuth();
        basicAuthPage.typePasswordToAuth();
        basicAuthPage.clicklogintoAuth()
    })
    it('test form', ()=>{
        const homePage = new HomePage();
        homePage.clickFormHeader()

        const formPage = new FormPage();
        formPage.showForm()
        formPage.typeFirstName()
        formPage.typeLastName()
        formPage.clickSubmit()
    })
    it('test key presses form', ()=>{
        const homePage = new HomePage();
        homePage.clickKeyPressesHeader()

        const keyPressesPage = new KeyPressesPage();
        keyPressesPage.showKeyPressesForm()
        keyPressesPage.pressKeyToSeeInput()
    })
    it('test add and remove elements', ()=>{
        const homePage = new HomePage();
        homePage.clickAddAndRemoveElementsHeader()

        const addElementPage = new AddRemoveElementsPage();
        addElementPage.showAddElementPage()
        addElementPage.addElement()
        addElementPage.removeElement()
    })
    it('test status codes', ()=>{
        const homePage = new HomePage();
        homePage.clickStatusCodesHeader()

        const statusCodes = new StatusCodesPage();
        statusCodes.checkStatusLink()
        statusCodes.checkStatusCode200()
        statusCodes.checkStatusCode305()
        statusCodes.checkStatusCode404()
        statusCodes.checkStatusCode500()
    })
    it('test iFrame buttons', ()=> {
        const homePage = new HomePage();
        homePage.clickiFrameHeader()

        const iFrame = new iFramePage();
        iFrame.iFrameButton1()
        iFrame.iFrameButton2()
    })
    it('test drag and drop', ()=>{
        const homePage = new HomePage();
        homePage.clickDragAndDropHeader()

        const dragAndDrop = new DragAndDopPage();
        dragAndDrop.dragColumnA()
        dragAndDrop.dragColumnB()
    })
    it('test date picker', ()=>{
        const homePage = new HomePage();
        homePage.clickDatePickerHeader()

        const datePicker = new DatePickerPage();
        datePicker.inputTheDate()

    })
    


})