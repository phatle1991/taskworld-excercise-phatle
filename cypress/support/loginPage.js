const loginPage = {
    urlLogin: '/login',
    txtEmail: '.ax-login-form__email-field',
    txtPwd: '.ax-login-form__password-field',
    btnLogin: '.ax-login-form__login-button',
    lblLoginErr: '.ax-form-input__error-message'
}

Cypress.Commands.add('navigateToLogin', () => {
    cy.visit(loginPage.urlLogin)
});

Cypress.Commands.add('fillOutLoginEmail', (email) => {
    cy.get(loginPage.txtEmail).should('be.visible').type(email);
});

Cypress.Commands.add('fillOutLoginPwd', (pwd) => {
    cy.get(loginPage.txtPwd).should('be.visible').type(pwd);
});

Cypress.Commands.add('clickLoginBtn', () =>{
    cy.get(loginPage.btnLogin).should('be.visible').click();
});

Cypress.Commands.add('verifyLoginErr', (errMsg) => {
    cy.get(loginPage.lblLoginErr).invoke('text').should('eq',errMsg);
});