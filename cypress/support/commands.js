Cypress.Commands.add("navigate", (path) => {
    cy
        .visit('https://www.entrycentral.com' + path)
        .get('#ccc-close')
        .click();
});

Cypress.Commands.add("fillLoginCredentials", (credType) => {
    cy
        .get('#username').type(Cypress.env(credType + 'User'))
        .get('#password').type(Cypress.env(credType + 'Password'))
        .get('#_submit').click()
});
