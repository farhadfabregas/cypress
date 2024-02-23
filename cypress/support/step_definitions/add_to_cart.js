import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I am logged in', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
});

And('I am on the product page', () => {
    cy.url().should('include', '/inventory.html');
});

When('I add an item to the cart', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
});

Then('the item should be added successfully', () => {
    cy.get('.shopping_cart_badge').should('contain', '1');
});
