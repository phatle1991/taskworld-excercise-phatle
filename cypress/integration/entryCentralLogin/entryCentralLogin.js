/**
 * Created by stuart1 on 31/10/2019.
 */
import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('I navigate to the Entry Central login page', () => {
    cy.navigate('/login')
});

When('I login with a/an {string} credential combination', (credType) => {
    cy.fillLoginCredentials(credType)
});

Then('I should see {string} displayed as the page title', (pageTitle) => {
    cy.title().should('eq', pageTitle)
});

Then('I should see the {string} login error message', (message) => {
    cy.get('.alert').should('contain.text', message)
});
