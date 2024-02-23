import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import user from "../../fixtures/users"

Given('I open the login page', () => {
    cy.visit('https://www.saucedemo.com/', {failOnStatusCode: false});
});

When('I enter valid username and password', () => {
    cy.get('#user-name').type(user.username);
    cy.get('#password').type(user.password);
});

And('I click the login button', () => {
    cy.get('#login-button').click();
});

Then('I should be redirected to the home page', () => {
    cy.url().should('include', '/inventory.html');
});
