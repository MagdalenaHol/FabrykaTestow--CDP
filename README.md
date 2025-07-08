# TAPS Test Site – Cypress E2E Testing

This project contains automated end-to-end tests written in Cypress for the [TAPS – Test Site](https://simpletestsite.fabrykatestow.pl/), a demo application used to practice UI test automation.

## 🔍 Purpose of the project

The aim is to test different types of UI components (checkboxes, inputs, dropdowns, forms, drag&drop, calendar, etc.) using the Cypress tool. The tests are divided into modules and organised according to the Page Object Model approach.

## 🧪 What is tested?

The tests cover various types of UI elements and interactions, including:

- ✅ Checkboxes  
- 📅 Date Picker  
- 🖱️ Hover Elements  
- ⌨️ Input Fields  
- 🔐 Basic Authentication  
- 📝 Form Submission  
- 🔽 Dropdown Lists  
- 🕹️ Keyboard Presses  
- 📥 Add/Remove Elements  
- 🔄 Drag and Drop  
- 🌐 Status Codes  
- 🖼️ iFrame interactions   

## 🛠️ Tech stack

- [Cypress](https://www.cypress.io/) – framework do E2E
- JavaScript (ES6+)
- Page Object Model (POM)
- Git, GitHub

## 🚀 How to run the tests

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Launch Cypress UI:

   ```bash
   npx cypress open
   ```

   Or run tests headlessly:

   ```bash
   npx cypress run
   ```

## 📂 Project Structure

```
cypress/
├── e2e/
│   └── MOD7/
│       └── controlls.cy.js      # Main test 
├── page-objects/                # Page Object classes
│   ├── homePage.js
│   ├── checkboxPage.js
│   ├── ...

```

## 📚 Test page source

Test Site: **TAPS - Test Site** 
Prepared by: [Fabryka Testów](https://fabrykatestow.pl)
