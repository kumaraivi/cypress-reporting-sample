///<reference types='cypress' />
import { Given, When, Then, And, But } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../PageObjectModel/loginPage'

//const url = 'https://the-internet.herokuapp.com/login'

// Given('User is on login page', () => {
//     cy.visit(url)
// })

// When('User enters login credentials', () => {
//     cy.get('#username').type('tomsmith')
//     cy.get('#password').type('SuperSecretPassword!')
//     cy.get('.radius').click()
// })

// Then('User should see home page', () => {
//     cy.url().should('include','secure')
// })

Given('User is on login page', () => {
    LoginPage.visitURL();
})

When('User enters {string} and {string}', (username, password) => {
    LoginPage.userLogin(username, password)
})

Then('User should see home page', () => {
    cy.url().should('include','secure')
})