import HomePage from "../../page-objects/homePage"
import InputPage from "../../page-objects/inputPage"
import CheckboxPage from "../../page-objects/checkboxPage"
import DropdownListPage from "../../page-objects/dropdownListPage"
import HoversPage from "../../page-objects/hoverPage"



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
})